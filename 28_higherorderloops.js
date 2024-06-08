// for of
//["","",""]
//[{},{},{}]
// const arr=[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num);
    
// }
// const greetings="hello world!"
// for(const greet of greetings){
//     console.log(`each char is ${greet}`);

// }
//map
// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// map.set('IN',"India")
// console.log(map);

// for(const [key,value] of map)
//     console.log(key,':-',value);
// const myObject={
// //     'game1':'NFS',
// //     'game2':'Spiderman',

// }
// for(const [key,value] of myObject)
//     console.log(key,value);
//objects are not iteratable in for of loop
// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:"ruby",
//     swift:"swift by apple"
// }
// for (const key in myObject) {
 
//        console.log(`${key} shorcut is for ${myObject[key]}`);
        
    
// }
// const programming=["js","rb","py","cpp"]
// for (const key in programming) {
//    console.log(programming[key]);
// }
// const map=new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('Fr',"France")

// map.set('IN',"India")
// for (const key in map) {
//   console.log(key);
// } 
//+++++++++++++++for each
// const coding=["js","rb","java","py","cpp"]
// coding.forEach((element,index,arr) => {
//     console.log(element,index,arr);
    
// });
const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js",
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py",
    },
    
]
myCoding.forEach((i)=>{
console.log(i.languageFileName);
})