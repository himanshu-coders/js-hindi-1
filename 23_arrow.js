const user={
    username:"Himanshu",
    price:999,
    welcomeMessage:function(){
        // console.log(`${this.username},welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this);
// function chai(){
//     console.log(this);
// }
// chai()
const chai = ()=>{
    let username="hitehs"
    // console.log(this);
}
// chai()
// const addtwo=(num1,num2)=>{

//     return num1+num2

// }
// console.log(addtwo(2,3)); 
//+++++++++++++Immediately invoked function expression (IIFE)
(function chai(){
    console.log(`hello`);
})();
(function cha(){
    console.log(`hel`);
})();
console.log("object");

