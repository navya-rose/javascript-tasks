
var fruits ={
    apple:250,
    orange:100,
    mango:120,
    cherry:280,
    guva:90,
    banana:70
}

//display product whose price >100
 for(let [k,v] of Object.entries(fruits)){
    if(v>100){
        // console.log(k,v);
    }    
 }

 //display product available in range of 50 to 150

 for(let [k,v] of Object.entries(fruits)){
    if(v>50 && v<150){
        // console.log(k,v);
        
    }
 }
 //or
 var pricefilter = Object.entries(fruits).filter(item=>item[1]>50 && item[1]<150)
//  console.log(pricefilter);
 
 //display costly product

 var costly = Object.entries(fruits).reduce((it1,it2)=>it1[1]>it2[1]?it1:it2)
//  console.log(costly);
 
 //display product with low cost

 var lowcost =Object.entries(fruits).reduce((it1,it2)=>it1[1]<it2[1]?it1:it2)
 console.log(lowcost);
 