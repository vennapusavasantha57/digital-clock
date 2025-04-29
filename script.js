let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let ampm = '';

  if (!is24Hour) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
  }

  // Pad with 0 if needed
  hours = String(hours).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  const timeStr = ${hours}:${minutes}:${seconds}${!is24Hour ? ' ' + ampm : ''};
  document.getElementById('clock').textContent = timeStr;
}

document.getElementById('toggleBtn').addEventListener('click', () => {
  is24Hour = !is24Hour;
  document.getElementById('toggleBtn').textContent = is24Hour ? 'Switch to 12-hour' : 'Switch to 24-hour';
  updateClock();
});

setInterval(updateClock, 1000);
updateClock(); // initial call
