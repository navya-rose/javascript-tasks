
//create an object product with attrs

var product={
    code:"hy005",
    title:"casio",
    price:25000,
    color:"golden brown"

}

//attrs exist or not

// if("color" in product){
//     console.log("is exist");
    
// }
// else{
//     console.log("not exist");
    
// }

 // to add property
product.offer=500
console.log(product);

//updateing a property

product.price+=500
console.log(product);

// add a new property qty as 10 if qty not exist else update qty as currenty qty +10

if("Qty"in product){
    product.Qty+=10
}
else{
    product.Qty=10
}
console.log(product);
