// const myArr=[0,1,2,3,4]
// const myHeros=["shakti","anshuman"]
// const myArr2=new Array(1,2,3,4)
// // console.log(myArr[2]);
// //Array methods
// // myArr.push(6)
// // myArr.pop()
// //  myArr.unshift(9)
// // myArr.shift(8)

// // console.log(myArr.indexOf(9));
// // console.log(myArr.includes(9));
// // const newArr=myArr.join()
// // console.log(typeof myArr);
// // console.log( typeof newArr);
// //+++++++slice,splice
// console.log("A ",myArr);
// const myn1=myArr.slice(1,3)
// console.log(myn1);
// console.log("B ",myArr);
// const myn2=myArr.splice(1,3)
// console.log("C ",myArr);
// console.log(myn2);

//Array13
const marvel_heroes=["thor","Iron","spiderman"]
const dc=["suprerman","flash","betman"]
// marvel_heroes.push(dc)
// console.log(marvel_heroes[3][1]);
// const allHeros=marvel_heroes.concat(dc)
// console.log(allHeros);

const allHeros=[...marvel_heroes,...dc]
// console.log(allHeros);
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);
console.log( Array.isArray(another_array));
console.log(Array.from("Hitesh"));
console.log(Array.from({name:"hitesh"}));
