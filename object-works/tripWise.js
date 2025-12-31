
var expenses = {
    jazeel:780,
    nazim:680,
    arun:1000,
    mahin:500,
    amal:750,
    thushar:1500
}

//total expense

var total = 0
for(let ex in expenses){
    total+=expenses[ex]
}
console.log(total);

//who paid most

var max =0
for(let ex in expenses){
    if(expenses[ex]>max){
        max = expenses[ex]
    }
}
console.log(max);

for(let ex in expenses){
    if(max==expenses[ex]){
        console.log("most paid = ",ex,max);
        
    }
}

var split = total/Object.entries(expenses).length
console.log(split);

var splitwise = {}

for(let key in expenses){
 let amount = expenses[key]
 splitwise[key]=split-amount
}
console.log(splitwise);



