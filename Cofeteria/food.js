const slider = document.getElementById("slider");
const btnr = document.getElementById("btnleft");
const images = [
  "../first/imgs/slide1.jpg",
  "../first/imgs/slide2.jpg",
  "../first/imgs/slide3.jpg",
];
let index = 0;
function changeBackground() {
  current = (index + 1) % images.length;
  slider.style.backgroundImage = `url('${images[index]}')`;
}
setInterval(changeBackground, 4000);
