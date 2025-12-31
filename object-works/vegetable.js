
var vegetables ={
    onion:24,
    potato:75,
    brinjal:30,
    tomato:75,
    ladyfinger:34
}

for(let key in vegetables){
    // console.log(key,vegetables[key]);
    
}

//display all vegetable name available under 30

for(let key in vegetables){
    if(vegetables[key]<30){
        // console.log(key);
        
    }
}

//display costly product

var costly = 0

for(let key in vegetables){
    if(vegetables[key]>costly){
        costly=vegetables[key]
        
    }
    
    
}
console.log(costly);
 
for(let key in vegetables){
    if(costly==vegetables[key]){
        console.log(key,costly);
        
    }
}

