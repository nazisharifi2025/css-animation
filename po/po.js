let greeting =(a)=>{
    console.log(`Hi dear ${a}`);
}
greeting("ali");
function data(a=10,b=12){
    let result=a*b;
    console.log(result);
}
data();
function namea (n,f=19){
    console.log(n/f);
}
namea(14);
let hi = (...g)=>{ 
    let h=0;
    for(let i of g){
        h +=i;
    }
    return h;
}
console.log(hi(1,2,34,54,65,1));