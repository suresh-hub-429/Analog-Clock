setInterval(() => {
  d = new Date();
  h = d.getHours();
  m = d.getMinutes();
  s = d.getSeconds();

  hrotation = h * 30 + m / 2;
  mrotation = m * 6;
  srotation = s * 6;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
