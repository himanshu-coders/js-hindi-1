//singleton
//Object.create
//objecg literals
const mySym=Symbol("key1")
const user={ name:"himanshu",
"full name":"Himanshu Avasthi",
[mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"avasthihimanshu98@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","saturday"]

}
// console.log(user.email);
// console.log(user["email"]);
// console.log(user["full name"]);
// console.log(typeof user[mySym]);
// user.email="hitesh@chatgpt.com"
// // Object.freeze(user)
// user.email="himanshu@gmail.com"
// // console.log(user);
// user.greeting=function(){
//     console.log("hello js user");
// }
// user.grretingtwo=function(){
//     console.log(`hello js user,${this.name}`);
// }
// console.log(user.greeting());
//  console.log(user.grretingtwo());
//onbject in deptth 17
// const tinderuser=new Object()//singleton object
const tinderuser={}
 tinderuser.id="123"
 tinderuser.name="sammy"
 tinderuser.isLoggedIn=false
//  console.log(tinderuser);
const regularuser={
    email:"avasthi.gmail.com",
    fullname:{
        userfullname:{
            firstname:"himanshu",
            lastname:"avasthi",
        },
    }
}

// console.log(regularuser.fullname.userfullname);
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);
