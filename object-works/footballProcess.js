
var football ={
    barzil:5,
    portugal:0,
    englang:1,
    germany:4,
    argentina:3,
    urugay:2,
    spain:1,
    italy:4,
    france:2
}

//display country name whose values greaterthan 1

for(let [k,v] of Object.entries(football)){
    if(v>1){
        console.log(k,v);
        
    }
}