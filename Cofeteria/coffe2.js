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
const btnR = document.getElementById("btnR");
const btnL = document.getElementById("btnL");

function updateSlide() {
  const slide = images[current];
  slider.style.backgroundImage = `url('${slide.url}')`;
  title.textContent = slide.title;
  description.textContent = slide.description;
  button.textContent = slide.buttonText;
}
updateSlide();
// btnR.addEventListener("click", () => {
// console.log("Next slide");
// current = (current + 1) % images.length;
// updateSlide();
// });
//
// btnL.addEventListener("click", () => {
// console.log("Previous slide");
// current = (current - 1 + images.length) % images.length;
// updateSlide();
// });

document.addEventListener("DOMContentLoaded", function () {
  const btnR = document.getElementById("btnR");
  const btnL = document.getElementById("btnL");

  if (btnR && btnL) {
    btnR.addEventListener("click", () => {
      console.log("Next slide");
      current = (current + 1) % images.length;
      updateSlide();
    });

    btnL.addEventListener("click", () => {
      console.log("Previous slide");
      current = (current - 1 + images.length) % images.length;
      updateSlide();
    });
  } else {
    console.log("Buttons not found");
  }
});
const priceBoxes = document.querySelectorAll(".price-box");
let currentIndex = 0;

setInterval(() => {
  // همه کارت‌ها رو مخفی می‌کنیم
  priceBoxes.forEach((box) => {
    box.classList.add("hidden", "opacity-0", "translate-x-24");
    box.classList.remove("flex", "opacity-100", "translate-x-0");
  });

  // دوتا کارت بعدی رو نمایش می‌دیم
  for (
    let i = currentIndex;
    i < currentIndex + 2 && i < priceBoxes.length;
    i++
  ) {
    const box = priceBoxes[i];

    // نشون دادن کارت
    box.classList.remove("hidden");
    box.classList.add("flex");

    // یه مقدار صبر می‌کنیم تا انیمیشن اعمال شه
    setTimeout(() => {
      box.classList.remove("opacity-0", "translate-x-24");
      box.classList.add("opacity-100", "translate-x-0");
    }, 50);
  }

  // بریم سراغ دوتای بعدی
  currentIndex += 2;

  // اگه رسیدیم به آخر، برگردیم اول
  if (currentIndex >= priceBoxes.length) {
    currentIndex = 0;
  }
}, 3000); // هر ۳ ثانیه اجرا میشه

setInterval(() => {
  current = (current + 1) % images.length;
  updateSlide();
}, 4000);
