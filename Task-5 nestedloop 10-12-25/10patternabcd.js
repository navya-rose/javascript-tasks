
for(let r=1;r<=4;r++){
    let pattern =""
    for(let c=1;c<=4;c++){
        if(r+c==2 || r+c==6){
            pattern+="A"+"\t"
        }
        else if(r+c==3 || r+c==7){
            pattern+="B"+"\t"
        }
        else if((r+c)%4==0){
            pattern+="c"+"\t"
        }
        else if(r+c==5){
            pattern+="D"+"\t"
        }
    }
    console.log(pattern);
    
}