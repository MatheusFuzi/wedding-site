// Data do casamento
const weddingDate = new Date("2025-08-09T17:00:00").getTime();

const timer = () => {
  const now = new Date().getTime();
  const gap = weddingDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const d = Math.floor(gap / day);
  const h = Math.floor((gap % day) / hour);
  const m = Math.floor((gap % hour) / minute);
  const s = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = d;
  document.getElementById("hours").innerText = h;
  document.getElementById("minutes").innerText = m;
  document.getElementById("seconds").innerText = s;
};

setInterval(timer, 1000);

// RSVP
document.getElementById("rsvpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  this.style.display = "none";
  document.getElementById("thanksMessage").style.display = "block";
});
