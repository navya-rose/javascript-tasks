
for(let r=1;r<=4;r++){
    let pattern =""
    for(let c=1;c<=4;c++){
        if(c==1){
            pattern+="A"+"\t"
        }
        else if(c==2){
            pattern+="B"+"\t"
        }
        else if(c==3){
            pattern+="c"+"\t"
        }
        else if(c==4){
            pattern+="D"+"\t"
        }
    }
    console.log(pattern);
    
}