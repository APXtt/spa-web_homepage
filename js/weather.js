const API_KEY = "20de14d60d07a919f46ba915f4dc1067";
const temperature = document.getElementById("temperature");
const humidity = document.getElementById("humidity_n");


function onGeoOk(position) {
   const latitude = position.coords.latitude;
   const longitude = position.coords.longitude;
 
   fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
   )
      .then(response => response.json())
      .then(data => {
        temperature.innerText = `${data.main.temp}`
        humidity.innerText = `${data.main.humidity}%`
      }); 
      
      
}
 
function onGeoError() {
   console.log("날씨 정보를 불러올 수 없습니다.");
}
 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

setInterval(navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError), 2000 * 60 * 5);