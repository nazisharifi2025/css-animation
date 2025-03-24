const hide = document.getElementById("po");
let text ="";

function hi(mb){
    return (6/9) * (mb-30);
}
console.log(hi(36));
console.log("let-number");
let a=10;
a="ali";
console.log("10");
console.log("const-string");
const b=12;
console.log("ali");
console.log("objict");
let propirti ={
    name:"Compiuter",
    Bettri:"lind",
    Size:10,
    

}
console.log(propirti.Bettri);
let n=0;
while(n<6){
    console.log("no");
    n++ ;
}
let t=0;
do{
    console.log("biby");
t++;
}
while(t<20);
let nine={
 name:"nazi",
 FatherName:"Hadi",
 LastName:"Sharifi",
    Age:18,
    birthdey:2006,
}
for(let key in nine){
    // console.log(nine["FatherName"]);
    text = text + nine[key] +"\n";
    hide.innerHTML= text;
}

const h1=document.getElementById("h1");
function gift(d,g){
let result = d+g;
return result;
}
h1.innerHTML = gift(23,40);
let greet = {
    greeting: function(){
        console.log("hi dear welcom to te class");
    }
}
greet.greeting();