let hours = 0;
let minutes = 0;
let seconds = 0;
var counter = document.querySelector(".counter");
let status = "stopped";
let interval ;

function StopWatch() {
  if (seconds === 59) {
    seconds = 0;
    if (minutes === 59) {
      minutes = 0;
      if (hours === 59) {
        hours = 0;
      } else {
        hours++;
      }
    } else {
      minutes++;
    }
  } else {
    seconds++;
  }

  var sec =
    seconds >= 0 && seconds < 10 ? (sec = `0${seconds}`) : (sec = seconds);
  var min =
    minutes >= 0 && minutes < 10 ? (min = `0${minutes}`) : (min = minutes);
  var hour = hours >= 0 && hours < 10 ? (hour = `0${hours}`) : (hour = hours);
  var res = hour + ":" + min + ":" + sec;
  counter.textContent = res;

  //   counter.textContent = `${hour}:${min}:${sec}`;
}

var start = document.querySelector(".btn-start");
start.addEventListener("click", () => {
  if (status === "stopped") {
    //Start the stopwatch (by calling the setInterval() function)
    interval = setInterval(StopWatch, 1000);
    start.textContent = "stop";
    status = "started";
    start.classList.add("btnStop")
    // console.log('running')
  } else {
    clearInterval(interval);
    start.textContent = "start";
    status = "stopped";
    start.classList.remove("btnStop")
    // console.log('stop')
  }
});


var reset = document.querySelector(".btn-reset")
reset.addEventListener('click',()=>{
    clearInterval(interval);
    hours,minutes,seconds = 0;
    counter.textContent = "00:00:00";
    start.textContent = "start";
    start.classList.remove("btnStop")
    status = "stopped";
})