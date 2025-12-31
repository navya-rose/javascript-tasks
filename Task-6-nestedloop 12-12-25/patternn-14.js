let sum = 1;

for(let r=1;r<=4;r++){
    let pattern = "";
    for(c=1;c<=r;c++){
        pattern+= sum + " ";
        sum++;
    }
    console.log(pattern);
    
}

