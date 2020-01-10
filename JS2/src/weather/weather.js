export default class Sub {};

let input = document.getElementById("t5");

  input.onblur = inputBlur;

function inputBlur() {
// function weather () {
//Получаем прогноз в массив data
let key = "6fa88857718d165eea43d1f88ca5634f";
// let idSity = 625144;
let nameSity = document.getElementById("t5").value;
// fetch('http://api.openweathermap.org/data/2.5/weather?id='+idSity+'&lang=ru&appid='+key+'&mode=json&units=metric')
fetch('http://api.openweathermap.org/data/2.5/weather?q='+nameSity+'&lang=ru&appid='+key+'&mode=json&units=metric')
.then(function (resp) {return resp.json() })
.then(function (data) { 
  console.log(data);
//     //добавляем название города
    document.querySelector('.weather__city').textContent = data.name;
    document.querySelector('.weather__forecast').textContent = (data.main.temp).toFixed(1) + '°';
    document.querySelector('.weather__feels_like').textContent = ' ощущается как '+ (data.main.feels_like).toFixed(1) + '°';
    //Добавляем описание погоды
    document.querySelector('.weather__desc').textContent = data.weather[0]['description'] + ", ";
    // document.querySelector('.weather__desc2').textContent = data.weather[1]['description'];
    //Добавляем иконку погоды
    document.querySelector('.weather__icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png" width="50px" height="50px">`;
     //добавляем ветер
    document.querySelector('.weather__wind').textContent = 'скорость ветра = '+ data.wind.speed + 'м/сек';

    let warning;

    if (data.main.temp >= 30 ) {
        warning = "очень жарко, возьмите с собой воду"
        console.log(warning);
    } else if 
      (data.main.temp <= 15 & data.main.temp >= 7 ) {
        warning = "прохладно"
        console.log(warning); 
    } else if 
      (data.main.temp <= 8 & data.main.temp >= 0) {
        warning = "будет холодно, одевайтесь теплее"
        console.log(warning); 
    } else if 
      (data.main.temp <= 0) {
        warning = "будет холодно, не забудьте шапку и шарф, температура ниже 0 ° "
        console.log(warning);
    }
  
  document.querySelector('.weather__warning').textContent = warning;
  
  let wind;
  
  if (data.wind.speed >= 5 ) {
        wind = " и сильный ветер"
        console.log(wind); 
        } else {
          wind = " "
          console.log(wind);
        }
  document.querySelector('.weather__wind_speed').textContent = wind;

  }).catch(function () {
        //Обрабатываем ошибки
    });
  };

  // document.getElementById("weatherButton").onclick = weather;

// }