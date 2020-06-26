let hour = document.getElementById('one');
let minute = document.getElementById('two');
let second = document.getElementById('three');


const clock = () => {
    const timeNow = new Date();
    const hourNow = timeNow.getHours();
    const minuteNow = timeNow.getMinutes();
    const secondNow = timeNow.getSeconds();
    hour.innerHTML = `${hourNow}:`;
    minute.innerHTML = `${minuteNow}:`;
    second.innerHTML = `${secondNow}`;
}
setInterval(clock, 1000);