
for(r=1;r<=5;r++){
    let pattern =""

    for(c=1;c<=9;c++){
        if (r==1 && c%2!=0 || c==r || c+r==10 ){
            pattern+="*"
        }
        else{
            pattern+= " "
        }
        
    }
    console.log(pattern);
    
}