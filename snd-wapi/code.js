let input = document.querySelector('.input_text');
let main = document.querySelector('#name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let clouds = document.querySelector('.clouds');
let button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=6c314e0709062aa2ca94bec1beaf6463')
.then(response => response.json())
.then(data => {
  let tempValue = data['main']['temp']-273.15;
  let nameValue = data['name'];
  let descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+Math.floor(tempValue)+" "+"&#8451";
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})