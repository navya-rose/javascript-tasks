
for(r=1;r<=5;r++){
    let pattern=""
    for(i=1;i<=r;i++){
        pattern+=" "
    }
    for(c=5;c>=r;c--){
        pattern+="* "
    }
    console.log(pattern);
    
}
for(r=2;r<=5;r++){
    let pattern=""
    for(i=1;i<=6-r;i++){
        pattern+=" "
    }
    for(c=1;c<=r;c++){
        pattern+="* "
    }
    console.log(pattern);
    
}