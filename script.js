function printTime() {

    const target=document.getElementById("target");
    const currentDate = new Date();
    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',second:'2-digit' };
    target.innerHTML = currentDate.toLocaleDateString("en-gb",dateOptions);
    setInterval(printTime, 1000);
}
printTime();

const runButtonCur=document.getElementById("cur-temp-button");
const runButtonFur=document.getElementById("future-temp-button");

const  weatherApi = {
    key: "51b10ed5f24ab761bf1170b47ded9904",
    curUrl: "https://api.openweathermap.org/data/2.5/weather?",
    futureUrl:"https://api.openweathermap.org/data/2.5/forecast?",
}

runButtonCur.addEventListener("click",function (){

   let city=document.getElementById("input-box").value;

    fetch(`${weatherApi.curUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showCurResult);
});

runButtonFur.addEventListener("click",function (){

    let city=document.getElementById("input-box").value;

    fetch(`${weatherApi.futureUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showFurResult);

})


function showCurResult(weather) {

    console.log(weather);

    let country=document.getElementById("country");
    country.innerText=`Country: ${weather.sys.country};`;

    let city = document.getElementById('city');
    city.innerText = `City: ${weather.name};`;

    let windSpeed=document.getElementById("wind-speed");
    windSpeed.innerText=`Wind Speed: ${weather.wind.speed};`;

    let pressure=document.getElementById("pressure");
    pressure.innerText=`Pressure: ${weather.main.pressure};`;

    let currentTemp = document.getElementById('cur-temp');
    currentTemp.innerHTML = `Current Temperature: ${Math.round(weather.main.temp)}&deg;C;`;

    let minTemp = document.getElementById('min');
    minTemp.innerHTML =`Minimal Temperature: ${Math.floor(weather.main.temp_min)}&deg;C;`;

    let maxTemp = document.getElementById("max");
    maxTemp.innerHTML = `Maximal Temperature: ${Math.ceil(weather.main.temp_max)}&deg;C;<hr />`

}

function showFurResult(weather) {

    console.log(weather);

    let country=document.getElementById("fut-country");
    country.innerText=`Country: ${weather.city.country};`;

    let city = document.getElementById('fut-city');
    city.innerText = `City: ${weather.city.name};`;

    let dateTime01=document.getElementById("date-time01");
    dateTime01.innerText=`Date and Time: ${weather.list[0].dt_txt};`;

    let futTemp01=document.getElementById("fur-temp01");
    futTemp01.innerHTML=`Temperature: ${Math.round(weather.list[0].main.temp)}&deg;C;<hr />`;

    let dateTime02=document.getElementById("date-time02");
    dateTime02.innerText=`Date and Time: ${weather.list[8].dt_txt};`;

    let futTemp02=document.getElementById("fur-temp02");
    futTemp02.innerHTML=`Temperature: ${Math.round(weather.list[8].main.temp)}&deg;C;<hr />`;


    let dateTime03=document.getElementById("date-time03");
    dateTime03.innerText=`Date and Time: ${weather.list[16].dt_txt};`;

    let futTemp03=document.getElementById("fur-temp03");
    futTemp03.innerHTML=`Temperature: ${Math.round(weather.list[16].main.temp)}&deg;C;<hr />`;


    let dateTime04=document.getElementById("date-time04");
    dateTime04.innerText=`Date and Time: ${weather.list[24].dt_txt};`;

    let futTemp04=document.getElementById("fur-temp04");
    futTemp04.innerHTML=`Temperature: ${Math.round(weather.list[24].main.temp)}&deg;C;<hr />`;


    let dateTime05=document.getElementById("date-time05");
    dateTime05.innerText=`Date and Time: ${weather.list[32].dt_txt};`;

    let futTemp05=document.getElementById("fur-temp05");
    futTemp05.innerHTML=`Temperature: ${Math.round(weather.list[32].main.temp)}&deg;C;<hr />`;

}


