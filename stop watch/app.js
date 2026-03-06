var minHeading = document.getElementById('minHeading');
var secHeading = document.getElementById('secHeading');
var msecHeading = document.getElementById('msecHeading');

var sec = 0;
var min = 0;
var msec = 0;
var interval ;

function startTimer(){
    interval=setInterval(timer , 10)
}

function timer(){
    msec++
    msecHeading.innerHTML=msec
    if(msec == 100){
        msec=0
        sec++
        secHeading.innerHTML=sec
    }
     if(sec == 60){
        sec=0
        min++
        minHeading.innerHTML=min
    }
}
function stopTimer(){
    clearInterval(interval)
}
function resetTimer(){
    clearInterval(interval)
     sec = 0;
     min = 0;
     msec = 0;
     msecHeading.innerHTML='00'
     secHeading.innerHTML='00'
     minHeading.innerHTML='00'
}