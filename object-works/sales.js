
const productSales = {
  laptop: 120,
  mobile: 250,
  headphones: 400,
  smartwatch: 180,
  tablet: 90,
  camera: 60,
  printer: 45,
  keyboard: 210,
  mouse: 320,
  speaker: 150
};

//q1 => trending product
var trending =Object.entries(productSales).reduce((it1,it2)=>it1[1]>it2[1]?it1:it2)
// console.log(trending);

//q2=> product with lowest sale
var lowest =Object.entries(productSales).reduce((it1,it2)=>it1[1]<it2[1]?it1:it2)
// console.log(lowest);

//q3 =>product with sales count > 200
var GTtwoHundered =Object.entries(productSales).filter(item=>item[1]>200)
// console.log(GTtwoHundered);

//q4 => total number of products sold
var total =Object.entries(productSales).reduce((sum,it)=>sum+it[1],0)
console.log(total);

//q5=> sort products wrt sales order by descending order
var sorted = Object.entries(productSales).sort((it1,it2)=>it2[1]-it1[1])
console.log(sorted);

