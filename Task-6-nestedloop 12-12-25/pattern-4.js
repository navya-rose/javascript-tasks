
for(let r=1;r<=5;r++){
    let pattern=" "
    for(let c=1;c<=5;c++){
        if(c==r || c>r){
            pattern+= "* "
        }
    }
    console.log(pattern);
    
}