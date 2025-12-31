
var numbers = [2,3,4,5,6,7,7,8,3,9]

//minimum number
// var minnumber = numbers[0]
// for(let n of numbers){
//     if(minnumber>n){
//         minnumber=n
//     }
// }
// console.log("minimum number =",minnumber);

//maximum number
// var maxnumber=0
// for(let n of numbers){
//     if(maxnumber<n){
//         maxnumber=n
//     }
// }
// console.log("maximum number = =",maxnumber);

//sum of numbers
// var sum = 0
// for(let n of numbers){
//     sum+=n
// }
// console.log("sum of numbers =",sum);

//sum of even numbers
// var sum = 0
// for(let n of numbers){
//     if(n%2==0){
//         sum+=n
//     }
// }
// console.log("sum of even =",sum);

//sum of odd numbers
// var sum =0
// for(let n of numbers){
//     if(n%2!=0){
//         sum+=n
//     }
// }
// console.log("sum of odd =",sum);

// diviors of 3
// for(let n of numbers){
//     if(n%3==0){
//         console.log(n);
        
//     }
// }
// avg of numbers
var sum =0
var length = numbers.length
for(let n of numbers){
    sum+=n
    average=sum/length   
}
console.log("average =",average);

// most frequent number