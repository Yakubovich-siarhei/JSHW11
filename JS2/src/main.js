// import Sub from './weather/weather.js';
import './weather/weather';
import './flikcapi/flicapi';


let mydate2 = document.getElementById('mydate');

let table = document.getElementById('table');
let tableSend = document.getElementById('tableSend');
let tableWait = document.getElementById('tableWait');
let logPersons = localStorage.getItem('tableLoad');
let person = {};

  let t;
  
  function generateTable(){

    var button = document.createElement("button");
    button.innerHTML = "Do Something";
    button.id = 'remove';      
    

    if (document.getElementById("t3").value >= document.getElementById("calendarForTasks").value) {
      t = tableWait;
    } else if (document.getElementById("t3").value <= document.getElementById("calendarForTasks").value) {
      t = tableSend;
    } console.log(t);
    
  let valueSelect = getValue();
  for(let i=0; i<person.length; i++)
    t.innerHTML = "";
    t.innerHTML += 
    `<div class="td nested">
        <p>
          Вид транспорта: ${valueSelect}
          / из ${document.getElementById("t1").value}
          в ${document.getElementById("t5").value}
          / отправление ${document.getElementById("t4").value}
          прибытия ${document.getElementById("t3").value}
          / цена билета ${document.getElementById("t6").value} руб.
        </p>
        <button class="remove">remove</button>
    </div>`
    // nested.appendChild(button)
      person = {
        name: valueSelect,
        description: document.getElementById("t1").value,
        area: document.getElementById("t5").value,
        age: document.getElementById("t4").value,
        growth: document.getElementById("t3").value,
        inp: document.getElementById("t6").value
    }
    tableAll.innerHTML = tableWait.innerHTML + tableSend.innerHTML
    console.log(person)
    logPersons.push(person);
    localStorage.setItem("tableLoad", JSON.stringify(logPersons));
    console.log(logPersons) 
    return true;
}

document.getElementById('buttonTable').onclick = generateTable;

document.querySelectorAll('.remove').onclick = function remove (){
  let nested = document.querySelectorAll('.nested');
  nested.parentNode.removeChild(nested);
}


tAll.addEventListener ("click",function (){
  tableAll.innerHTML = tableWait.innerHTML + tableSend.innerHTML
  tableAll.style.display = 'block'
  tableSend.style.display = 'none'
  tableWait.style.display = 'none'
  wrap.style.display = 'none'
});

tSend.addEventListener ("click",function (){
  tableAll.style.display = 'none'
  wrap.style.display = 'block'
  wrap.innerHTML = tableSend.innerHTML
  tableSend.style.display = 'block'
  tableWait.style.display = 'none'
  wrap.style.backgroundColor = 'white'
});

tWait.addEventListener ("click",function (){
  tableAll.style.display = 'none'
  wrap.style.display = 'block'
  wrap.innerHTML = tableWait.innerHTML
  tableSend.style.display = 'none'
  tableWait.style.display = 'block'
  wrap.style.backgroundColor = 'black'
});


// var d = document;

// d.getElementById('remove').addEventListener ("click",function (){
// 	var main_block = d.getElementById("container");
// 	var blocks = main_block.children;
// 	for (var i=blocks.length + 1; i >= 0; i--) {
// 		if (i <= 1) break;
// 		main_block.removeChild(blocks[i]);
// 	}
// });

// document.getElementById('remove').addEventListener ("click",function (){
//   let remove = document.querySelector('.demotable');
// remove.remove();
// });



// document.getElementById('remove').addEventListener ("click",function (){
// var x = document.getElementById('td');
// x.parentNode.removeChild(x);
// })

// document.getElementById('remove').addEventListener ("click",function remove (){
//   this.parentNode.parentNode.removeChild(this.parentNode);
// });

// document.getElementById('remove').addEventListener ("click",function remove (){
// [].forEach.call( document.querySelectorAll('tr td:last-child'), function(td,i) {
//        var parent = td.parentNode;
//        parent.removeChild(td);
//   });
// });







logPersons = JSON.parse(logPersons);

if (logPersons === null) {
    logPersons = [];
}

   
//value select
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

