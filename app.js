const apikey = "52ffb7384f144907a61114637242602";
var city= ""
document.getElementById("city").focus();
async function checkWeather(city){
    const apiUrl=`http://api.weatherapi.com/v1/current.json?key=52ffb7384f144907a61114637242602&q=${city}&aqi=no`;
    const response=await fetch(apiUrl);
    var data = await response.json();
    console.log(data);
    document.getElementById("temp").innerText=`${data.current.temp_c}°c`;
    document.getElementById("currCity").innerText=city.toUpperCase();
    document.getElementById("img").src=data.current.condition.icon;
    document.getElementById("feel").innerText=`Overcast ${(data.current.temp_c)-2} °c / ${(data.current.temp_c)+7} ° , ${data.current.condition.text} `;
    
    document.getElementById("uv").innerText=data.current.uv;
    document.getElementById("feel_like").innerText=`${data.current.feelslike_c} °`;
    document.getElementById("humidity").innerText=`${data.current.humidity} %`;
    document.getElementById("dir").innerText=data.current.wind_dir;
    document.getElementById("wind").innerText=`${data.current.wind_kph} km/h`;
    document.getElementById("pressure").innerText=`${data.current.pressure_mb} hPa`;
    document.getElementById("vis_km").innerText=`${data.current.vis_km} km`;

}
let search=document.getElementById("search_button");
search.addEventListener("click" , ()=>{
    city=document.getElementById("city").value;
    checkWeather(city);

})

