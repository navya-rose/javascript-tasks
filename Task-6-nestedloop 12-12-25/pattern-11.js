
for(r=1;r<=5;r++){
    let pattern =""

    for(c=1;c<=9;c++){
        if (c+r==6 || c-r==4 || r==5 && c%2!=0){
            pattern+="*"
        }
        else{
            pattern+= " "
        }
        
    }
    console.log(pattern);
    
}