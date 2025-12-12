
for(r=1;r<=7;r++){
    let pattern =""

    for(c=1;c<=7;c++){
        if (c+r==5||c+r==11||c-r==3||c-r==1||r-c==3||r-c==1 ){
            pattern+="*"
        }
        else{
            pattern+= " "
        }
        
    }
    console.log(pattern);
    
}