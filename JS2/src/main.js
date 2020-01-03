// import Sub from './weather/weather.js';
import './weather/weather';
import './flikcapi/flicapi';

function generateTable(){
  let valueSelect = getValue();
  for(let i = 0;i < arrTable.length; i++) 
  table.innerHTML = "";
  table.innerHTML += '<table class="table" id="myTable">'+
    '<tbody>'+
    '<tr class="tr">'+
    '<td>'+
    "Вид транспорта: " +valueSelect+
    " / из "+document.getElementById("t1").value+
    " в "+document.getElementById("t5").value+
    " / отправление "+document.getElementById("mydate").value+
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

let time, hours, minutes, seconds, day, mouth, year;
time=new Date();
year = time.getFullYear();
mouth = time.getMonth() + 1;
day = time.getDate();
hours = time.getHours();
minutes = time.getMinutes();
seconds = time.getSeconds();
if (hours <=9) hours = '0'+hours;
if (minutes <=9) minutes = '0'+minutes;
if (seconds <=9) seconds = '0'+seconds;
// document.myform.mytime.value = +hours+':'+minutes+':'+seconds;
document.myform.mydate.value = +day+'.' +mouth+'.' +year;

