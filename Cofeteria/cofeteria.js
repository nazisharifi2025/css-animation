// const slider = document.getElementById("slider");
//
// function changeBackground() {
//   current = (index + 1) % images.length;
//   slider.style.backgroundImage = `url('${images[index]}')`;
// }
//
// ستارت اولیه
// slider.style.backgroundImage = `url('${images[index]}')`;
//
// هر ۴ ثانیه بک‌گراند عوض بشه
// setInterval(changeBackground, 4000);
//

const images = [
  {
    url: "../first/imgs/slide1.jpg",
    title: "Coffe Hous",
    description: "Wellcom",
    buttonText:
      " Li lingues differe solmen in li grammatica, li pronunciation Lilingues differe solmen in li grammatica lipronunciation",
  },
  {
    url: "../first/imgs/slide2.jpg",
    title: "Coffe house",
    description: "Wellcom",
    buttonText:
      " Li lingues differe solmen in li grammatica, li pronunciation Lilingues differe solmen in li grammatica lipronunciation",
  },
  {
    url: "../first/imgs/slide3.jpg",
    title: "Coffe House",
    description: "Wellcom",
    buttonText:
      " Li lingues differe solmen in li grammatica, li pronunciation Lilingues differe solmen in li grammatica lipronunciation",
  },
];

let current = 0;
const slider = document.getElementById("slider");
const title = document.getElementById("slide-title");
const description = document.getElementById("slide-description");
const button = document.getElementById("slide-button");

function updateSlide() {
  const slide = images[current];
  slider.style.backgroundImage = `url('${slide.url}')`;
  title.textContent = slide.title;
  description.textContent = slide.description;
  button.textContent = slide.buttonText;
}
updateSlide();

setInterval(() => {
  current = (current + 1) % images.length;
  updateSlide();
}, 4000);
