

for(let r=1;r<=3;r++){

    let pattern = "";

    for(let c=1; c<=3; c++){
       pattern+= `${r}+${c}=${c+r}`+"\t"
    }
   console.log(pattern);
       
}


