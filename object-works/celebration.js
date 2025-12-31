
var expenses={
    prabinav:560,
    venkitesh:650,
    roshan:120,
    goutham:340,
    thushar:670,
    arun:67,
    jazeel:480,
    nazim:340,
    yadhu:0,
    amal:0,
    catherin:0,
    reshmi:0,
    sreelakshmi:0
}

//unpaid students names

for(let [k,v] of Object.entries(expenses)){
    if(v==0){
        // console.log(k,v);
        
    }
    
}

//paid students

var paidStudents =Object.entries(expenses).filter(arr=>arr[1]!=0)
// console.log(paidStudents);
//display students who paid >250

var GTof =Object.entries(expenses).filter(arr=>arr[1]>250)
// console.log(GTof);

//total expenses

var total =Object.entries(expenses).reduce((sum,arr)=>sum+arr[1],0)
console.log(total);

var individualsplit=total/Object.entries(expenses).length
individualsplit=Math.round(individualsplit)
console.log(individualsplit);

var splitwise={}

for(let [k,v] of Object.entries(expenses)){
   splitwise[k]=individualsplit-v 
}
console.log(splitwise);
