for(let r=1;r<=5;r++){
    let pattern = ""
    for(i=2;i<=r;i++){
        pattern+=" \t"
    }
    for(let c=5;c>=r;c--){
            pattern+= "*\t"
    }
    console.log(pattern);
    
}