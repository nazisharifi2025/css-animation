const horizontaINav = document.getElementById("hnav");
const verticalNav = document.getElementById("vnav");
const bars = document.getElementById("bars");
const close = document.getElementById("close");
const hideen = document.getElementById("hideen");
bars.addEventListener("click", () => {
  if (horizontaINav.classList.contains("w-[100%]")) {
    horizontaINav.classList.remove("w-[100%]");
    horizontaINav.classList.add("w-[85%]");
    verticalNav.classList.remove("ml-[-10%]");
    hideen.classList.remove("hidden");
    hideen.classList.add("flex");
  } else {
    horizontaINav.classList.add("w-[100%]");
    horizontaINav.classList.remove("w-[85%]");
    verticalNav.classList.add("ml-[-10%]");
    hid.classList.add("hidden");
    hid.classList.remove("flex");
    hideen.classList.remove("flex");
    hideen.classList.add("hidden");
  }
});
