// import Sub from './weather/weather.js';
import './weather/weather';
import './flikcapi/flicapi';

function generateTable(){
  let valueSelect = getValue();
  for(let i = 0;i < arrTable.length; i++) 
  table.innerHTML = "";
  table.innerHTML += '<table class="table demotable" id="myTable" >'+
    '<tbody class="tbody">'+
    '<tr class="tr">'+
    '<td>'+
    "Вид транспорта: " +valueSelect+
    " / из "+document.getElementById("t1").value+
    " в "+document.getElementById("t5").value+
    " / отправление "+document.getElementById("t4").value+
    " прибытия "+document.getElementById("t3").value+
    " / цена билета "+document.getElementById("t6").value+ " руб."+
    // '<button id="remove" name="remove">'+
    // '</button>'+
    '<td><input type="button" value="Удалить" id="remove"></td>'+
    '</td>'+
    '</tr>'+
    '<tbody>'+
    '</table>'; 
}


document.getElementById('buttonTable').onclick = generateTable;

//масси в котором хрранится все
let arrTable = [];
   

function getValue() {
  let select = document.getElementById("select");
  let value = select.value;
  return value;
}


document.getElementById("t4").valueAsDate = new Date();

let time, hours, minutes, seconds, day, mouth, year;
time=new Date();
let month=new Array(12);
month[0]=" Января ";
month[1]=" Февраля ";
month[2]=" Марта ";
month[3]=" Апреля ";
month[4]=" Мая ";
month[5]=" Июня ";
month[6]=" Июля ";
month[7]=" Августа ";
month[8]=" Сентября ";
month[9]=" Октября ";
month[10]=" Ноября ";
month[11]=" Декабря ";
year = time.getFullYear();
mouth = month[time.getMonth()];
day = time.getDate();
hours = time.getHours();
minutes = time.getMinutes();
seconds = time.getSeconds();
if (hours <=9) hours = '0'+hours;
if (minutes <=9) minutes = '0'+minutes;
if (seconds <=9) seconds = '0'+seconds;
// document.myform.mytime.value = +hours+':'+minutes+':'+seconds;
document.myform.mydate.value = +day+mouth+year+ 'г.';

