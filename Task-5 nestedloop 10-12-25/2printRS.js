
for(r=1;r<=4;r++){
    let pattern=""
    for(c=1;c<=4;c++){
        if(r==1 || c==1 || r==4 ||c==4){
            pattern+="R" +"\t"
        }
        else{
            pattern+= "S" +"\t"
        }
    }
    console.log(pattern);
    
}