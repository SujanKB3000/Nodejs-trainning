// console.log("Hello world");

// let program="Hello";
// console.log(program);

// const pi=3.14;
// console.log(pi);


// console.log("Start");
// setTimeout(()=>{
//     console.log("This prints after 2 seconds");
// },2000);
// console.log("End");

//guess the output
let num=1;
setTimeout(()=>{
    num=5;
},10);
setTimeout(()=>{
    console.log("A:",num);
},0);
console.log("B:",num);
