
for(let r=1; r<=5;r++){
    let pattern = " "

    //space
    for (let sp =1;sp<=5-r;sp++){
        pattern+= " "
    }

    //astrick
    for(let c=1;c<=r;c++){
        pattern+="* "
    }
    console.log(pattern);
    
}