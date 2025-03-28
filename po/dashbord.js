const horizontaINav =document.getElementById("hnav");
const verticalNav = document.getElementById("vnav");
const bars = document.getElementById("bars");
const close = document.getElementById("close");
bars.addEventListener("click" ,()=>{
    horizontaINav.classList.add("w-[75%]");
    horizontaINav.classList.remove("w-full");
    verticalNav.classList.remove("hidden");
    bars.style.display="none";
    close.style.display="block";
});
close.addEventListener("click",()=>{
    horizontaINav.classList.add("w-full");
    horizontaINav.classList.remove("w-[75%]");
    verticalNav.classList.add("hidden");
    bars.style.display="block";
    close.style.display="none";
});