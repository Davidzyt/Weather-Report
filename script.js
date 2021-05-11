function printTime() {

    const target=document.getElementById("target");

    const currentDate = new Date();

    let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit',second:'2-digit' };

    target.innerHTML = currentDate.toLocaleDateString("en-gb",dateOptions);

    setInterval(printTime, 1000);
}

printTime();

const runButton=document.getElementById("run");

const  weatherApi = {
    key: "51b10ed5f24ab761bf1170b47ded9904",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather?"
}
runButton.addEventListener("click",function (){
   let city=document.getElementById("input-box").value;
    fetch(`${weatherApi.baseUrl}q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showResult);
});


function showResult(weather) {

    console.log(weather);

    let country=document.getElementById("country");
    country.innerText=`Country: ${weather.sys.country};`;

    let city = document.getElementById('city');
    city.innerText = `City: ${weather.name};`;

    let currentTemp = document.getElementById('cur-temp');
    currentTemp.innerHTML = `Current Temperature: ${Math.round(weather.main.temp)}&deg;C;`;

    let minTemp = document.getElementById('min');
    minTemp.innerHTML =`Minimal Temperature: ${Math.floor(weather.main.temp_min)}&deg;C;`;

    let maxTemp = document.getElementById("max");
    maxTemp.innerHTML = `Maximal Temperature: ${Math.ceil(weather.main.temp_max)}&deg;C;`

}


