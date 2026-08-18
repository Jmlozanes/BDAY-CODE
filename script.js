let count = 1;


const counter =
document.getElementById("count");


const progressBar =
document.getElementById("progressBar");



const loading =
setInterval(()=>{


count++;


counter.style.animation="none";


void counter.offsetWidth;


counter.style.animation=
"numberPop .5s";



counter.textContent=count;



progressBar.style.width =
(count * 10) + "%";




if(count >= 10){


clearInterval(loading);



setTimeout(()=>{


window.location.href =
"Passcode.html";


},1000);



}


},1000);
