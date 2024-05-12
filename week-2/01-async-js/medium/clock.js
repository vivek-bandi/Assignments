function clock() {
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  let time = hours + ":" + minutes + ":" + seconds;
  // console.log(time);
  process.stdout.write("\r" + time);
  // process.stdout.write("\r" + " ".repeat(time.length) + "\r" + time);
}

setInterval(clock, 1000);
