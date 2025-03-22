let arr=[0,9,8,7,6,5,4,3];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
console.log("-------");
for(let b of arr){
    console.log(b);
}
let item=[26,21,42,55,44,63,74];
for(let loop of item){
    console.log(loop);
}
let arrey1=[];
for(let elemint =0;elemint<7;elemint++){
    console.log(elemint)
}
console.log("-------")
let arry2=[];
for(let n = 0;n<4 ;n++){
    let respans = +prompt("inter a number");
    arry2.push(respans);
}
for(let m of arry2){
    console.log(m);
}
let a ="ahmad";
let b =[1,"ahmad",2,"ali",3,"mahmod"];
for(let i=0; i<10;i++){
    if(i<5){
        console.log("hi")
    }
    else if(i==7){
        console.log("hello");
    }
    else if(i===10){
        console.log("he")
    }
    else{
        console.log("how are you")
    }
}
// while
let git = 0;
while(git<6){
    console.log("Hi");
    git++
}
let now = 0;
while (now<8){
    console.log("naz");
    now+=2
}
let i=1;
while(i<9){
    console.log("not");
    i*=2;
}
let f=7;
while(f>0){
    console.log("page");
    f--;
}
let r=9;
while(r>0){
    console.log("git hup");
    r-=2;
}
let l=0;
while(l<10){
    console.log("jannnnn");
    l++
}
let o=18;
do{
    console.log("Happy new year");
}
while(o<20);