

function largest(num1,num2,num3){
    let largestNum=num1
    if(num2>largestNum){
        largestNum=num2
    }
    else if(num3>largestNum){
        largestNum=num3
    }
    return largestNum
    
}
console.log(largest(10,25,15));
