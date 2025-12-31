
for(let c=1;c<=5;c++){

    let pattern="";

    for(let r=1;r<=5;r++){

        if(c==1||r==1||c==5||r==5){
            pattern+= "* " ;
        }
        else{
            pattern+= "  "
        }
    }
    console.log(pattern);
    
}

