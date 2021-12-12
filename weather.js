if(typeof jQuery!=='undefined'){
  console.log('jQuery Loaded');
}
else{
  console.log('not loaded yet');
}
const openWeatherAppId = 'b656d2ec65f26971d05d479b5c2ed1d1',
openWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather'
       
const prepareData = function(units) {
  // Replace loading image
  let cityName = $('#city-name').val()
  // Make ajax call, callback
  if (cityName && cityName != ''){
    cityName = cityName.trim()
    getData(openWeatherUrl, cityName, openWeatherAppId, units)
  }
  else {
    alert('Please enter the city name')
  }
}
  $(document).ready(function(){
  $('.btn-metric').click(function() {
    prepareData('metric')
  })
  // $('.btn-imperial').click(function() {
  //   prepareData('imperial')
  // })

})
function getData (url, cityName, appId, units) {
  const request = $.ajax({
    url: url,
    dataType: "jsonp",
    data: {q: cityName, appid: appId, units: units},
    jsonpCallback: "fetchData",
    type: "GET"
  }).fail(function(error){
    console.error(error)
    alert('Error sending request')
  })
}
function fetchData (forecast) {
  console.log(forecast)
  document.getElementById('loc').innerHTML =  forecast.name;
  document.getElementById('tempr').innerHTML =  forecast.main.temp;
  document.getElementById('tempfeel').innerHTML =  forecast.main.feels_like;
  document.getElementById('wind').innerHTML =  forecast.wind.speed;

}
// function fetchData (forecast) {
//   console.log(forecast)
//   let html = '',
//     cityName = forecast.city.name,
//     country = forecast.city.country

//   html += `<h3> Weather Forecast for ${cityName}, ${country}</h3>`
//   forecast.list.forEach(function(forecastEntry, index, list){
//     html += `<p>${forecastEntry.dt_txt}:${forecastEntry.main.temp}</p>`
//   })

//   $('#log').html(html)
// }
// function myfunction1(){
//   var valuee = $('city').val();
//   console.log(valuee+"sdvsd")
// }
// $(document).ready(function() {
//   $.ajax({
    
//     url:"https://api.openweathermap.org/data/2.5/weather?q=${valuee}&appid=b656d2ec65f26971d05d479b5c2ed1d1"
//   }).done(function(data) {
//     $(".cityname").html(data.name)
//     console.log(data)
//   });
// })

// if(typeof jQuery!=='undefined'){
//   console.log('jQuery Loaded');
// }
// else{
//   console.log('not loaded yet');
// }
function startTime() {
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let second = today.getSeconds();

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  day=today.toLocaleDateString("en-US", options);
  document.getElementById("day").innerHTML = day;
  document.getElementById("days").innerHTML = day;
  //document.getElementById("location").innerHTML = data.name;
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  document.getElementById('time').innerHTML =  strTime;
  
  setTimeout(startTime, 1000);
}