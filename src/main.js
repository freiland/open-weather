import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';




$(document).ready(function() {
  $('#locationWeather').submit(function(event) {
    event.preventDefault();
    const city = $('#city').val();
    const state = $('#state').val();
    const country = $('#country').val();
    console.log(city);

    let request = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${process.env.API_KEY}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }  
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $('#response').text(`The humidity in ${city} is ${response.main.humidity}%`);
      $('#response1').text(`The temperature in Kelvins is ${response.main.temp} degrees.`);
      $('#response2').text(`The wind speed is ${response.wind.speed} MPH.`);
    }
  
  });
});
