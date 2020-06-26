const setTimeBtn = document.getElementById("set");
const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const box = document.getElementById("box");
const times = box.querySelectorAll("h1");
let interval;


const timeSetter = () => {
  const hour = parseInt(prompt("Enter Hour", ""));
  const minute = parseInt(prompt("Enter Minute", ""));
  const second = parseInt(prompt("Enter Second", ""));
  if (second > 60 || minute > 60) {
    alert("Second and minute can't be greater than 60!!!!");
  } else {
    times[0].textContent = `${formatter(hour)}:`;
    times[1].textContent = `${formatter(minute)}:`;
    times[2].textContent = formatter(second);
  }
};

const resetTime = () => {
  times[0].textContent = `00:`;
  times[1].textContent = `00:`;
  times[2].textContent = `00`;
};

const start = () => {
  let hour = parseInt(times[0].textContent);
  let min = parseInt(times[1].textContent);
  let sec = parseInt(times[2].textContent);
  if (sec === 0 && min > 0) {
    times[1].textContent = `${formatter(min-1)}:`;
    times[2].textContent = `${60}`;
  } else if (sec === 0 && min === 0 && hour > 0) {
    times[0].textContent = `${hour - 1}:`;
    times[1].textContent = `59:`;
    times[2].textContent = `60`;
  } else if(sec === 0 && min === 0 && hour === 0) {
    times[0].textContent = `00:`;
    times[1].textContent = `00:`;
    times[2].textContent = `00`;
  } else {
    times[2].textContent = `${formatter(sec - 1)}`;
  }
};
const starter = () => {
  interval = setInterval(start, 1000);
};


const stopPer = () => {
  clearInterval(interval);
}


const formatter = (num) => {
        return num > 9 ? "" + num: "0" + num;
}

setTimeBtn.addEventListener("click", timeSetter);
resetBtn.addEventListener("click", resetTime);
startBtn.addEventListener("click", starter);
stopBtn.addEventListener('click', stopPer);
