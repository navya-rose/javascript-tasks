
for(let r=1;r<=4;r++){
    let pattern=""
    for(let c=1;c<=4;c++){
        if(c==1){
            pattern+="1 "
        }
        else if(r>=c&&c==2){
            pattern+="2 "
        }
        else if(r>=c&&c==3){
            pattern+="3 "
        }
        else if(r>=c&&c==4){
            pattern+="4 "
        }
    }
    console.log(pattern);
    
}

