const mynums=[1,2,3]
// const mytotal=mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc} currval:${currval}`);
//     return acc+currval

// },0)
// const  mytotal=mynums.reduce((acc,currval)=>
//     { return acc+currval

//     },0)
// console.log(mytotal);
const shoppingcart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"rb course",
        price:1999
    },
    {
        itemname:"mobile course",
        price:5999
    },
]
const pricetopay=shoppingcart.reduce((acc,item)=>
     acc+item.price

,0)
console.log(pricetopay);
