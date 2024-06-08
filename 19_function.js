function sayMYname(){
    console.log("R");
    console.log("A");
    console.log("M");
}
// sayMYname()
// function addtwonumbers(num1,num2){
//     console.log(num1+num2);

// }
// function addtwonumbers(num1,num2){
//     return num1+num2;

// }
// const result=addtwonumbers(3,4)
// console.log("result:",result);
const user={
    // function loginUserMessage(username="sam"){
    //     if(!username){
    //         console.log("please enter a username");
    //         return
    
    //     }
    //     return `${username} just logged in`
    // }
    // console.log(loginUserMessage("hitesh")); 
    // // console.log(loginUserMessage());
    // function calculateCartPrice(val1,val2,...num1){
    //     return num1
      
    
    // }
    // console.log(calculateCartPrice(200,400,500));
    username:"himanshu",
    price:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} `);
}
handleObject(user)
handleObject({
    username:"sam",
    price:399
})
//  const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[2]

}
console.log(returnSecondValue(([100,200,300,500,600]))); 