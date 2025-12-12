


for(let r=1;r<=5;r++){
    let pattern =""
    for(let c=1;c<=5;c++){
        if(c==1 || r==1 || c==5 || r==5){
           pattern+="1"+"\t" 
        }
        
        
        else{
            pattern+="0"+"\t"
        }
    }
    console.log(pattern);
    
}