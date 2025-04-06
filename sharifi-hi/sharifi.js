const horizontaINav =document.getElementById("hnav");
const verticalNav = document.getElementById("vnav");
const bars = document.getElementById("bars");
const close = document.getElementById("close");
bars.addEventListener("click" ,()=>{
    horizontaINav.classList.add("w-[85%]");
    horizontaINav.classList.remove("w-[100%]");
    verticalNav.classList.remove("ml-[-15%]");
    bars.style.display="none";
    close.style.display="block";
});
close.addEventListener("click",()=>{
    horizontaINav.classList.add("w-[100%]");
    horizontaINav.classList.remove("w-[85%]");
    verticalNav.classList.add("ml-[-15%]");
    bars.style.display="block";
    close.style.display="none";
});