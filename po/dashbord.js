const horizontaINav =document.getElementById("hnav");
const verticalNav = document.getElementById("vnav");
const bars = document.getElementById("bars");
const close = document.getElementById("close");
bars.addEventListener("click" ,()=>{
    horizontaINav.classList.add("w-[85%]");
    horizontaINav.classList.remove("w-[95%]");
    verticalNav.classList.remove("ml-[-10%]");
    bars.style.display="none";
    close.style.display="block";
});
close.addEventListener("click",()=>{
    horizontaINav.classList.add("w-[95%]");
    horizontaINav.classList.remove("w-[75%]");
    verticalNav.classList.add("ml-[-10%]");
    bars.style.display="block";
    close.style.display="none";
});