


var companyName="Luminar Technolab"
               //01234567890123456

// console.log(companyName.length);
// console.log(companyName.toUpperCase());
// console.log(companyName.toLowerCase());
// console.log(companyName.charAt(4));
console.log(companyName.at(-5));         //negative value
// console.log(companyName.concat(".com",".edu"));
// console.log(companyName.slice(0,7));
// console.log(companyName.slice(8));    
// console.log(companyName.substring(-3,)); //not support negative
// console.log(`new string:${companyName.trim()}..`);
// console.log(`new string:${companyName.trimStart()}..`);
// console.log(`new string:${companyName.trimEnd()}..`);
// console.log(companyName.padEnd(25,"*"));
// console.log(companyName.padStart(25,"*"));


//last 4 digit x
var phone = "9988776655"
var slicedphone = phone.slice(0,6);
console.log(slicedphone);
var maskedphone = slicedphone.padEnd(10,"X")
console.log(maskedphone);













