// async function main(){
//     let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits  ';
//     let response = await fetch(url);

//     let commits = await response.json()
//     let content = commits.slice(0,5)

//     // console.log(content);

//     for (let key in content) {
//         console.log(content[key].author);
//     }
// }
// main()
// const btnElement = document.querySelector('.btn')
// const key =  navigator.geolocation
// btnElement.addEventListener('click', e => {
//     if (navigator.geolocation) {
//         console.log(navigator.geolocation.getCurrentPosition(showPosition));
//       } else { 
//         console.log('error');
//       }
// })
// console.log(window);
const bomdodElement = document.querySelector('.bomdod')
const peshinElement = document.querySelector('.peshin')
const asrElement = document.querySelector('.asr')
const shomElement = document.querySelector('.shom')
const xuftanElement = document.querySelector('.xufton')

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        let error = "Geolocation is not supported by this browser.";
        console.log(error);
    }
}

function showPosition(position) {

    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude
    async function main() {
        let url = `http://api.aladhan.com/v1/calendar?latitude=` + latitude + `&longitude=` + longitude + `&method=22&month=5&year=2021`;
        let response = await fetch(url);

        let commits = await response.json()
        let nowDay = new Date()
        let nomozTime = commits.data[nowDay.getDay()].timings;
        console.log(nomozTime);
        bomdodElement.textContent = nomozTime.Fajr
        peshinElement.textContent = nomozTime.Dhuhr
        asrElement.textContent = nomozTime.Asr
        shomElement.textContent = nomozTime.Maghrib
        xuftanElement.textContent = nomozTime.Isha
    }



    main()
}