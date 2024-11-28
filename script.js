// Set the date for the countdown (e.g., 30 days from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30); // 30 days from today

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;

  if (timeDifference < 0) {
    document.getElementById('countdown').textContent = "The wait is over!";
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();
