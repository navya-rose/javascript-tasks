//array

//if we have to store and organize multiple object 

//keep order
//duplicates allowed
//mutable


// var color =["red","blue","white","black"]
// console.log(color);

// // display all expenses

// var expenses = [12000,13000,15000,17000,15000,26000,30000,25000,18000,20000,14000,19000]


// for(i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
    
// }
// console.log("iterating array using of");

// for(let ex of expenses){
//     console.log(ex);
    
// }

// //total expenses

// var total = 0
// for(let ex of expenses){
//     total+=ex
// }
// console.log("total expenses = ",total);

//costly expenses
var expenses = [12000,13000,15000,17000,15000,26000,30000,25000,18000,20000,14000,19000]

var maxexpense = 0

for(let ex of expenses){
    if(ex>maxexpense){
        maxexpense=ex
    }
}
console.log("maximum expenses =",maxexpense);

//min expenses

var minexpenses = expenses[0]

for(let ex of expenses){
    if(ex<minexpenses){
        minexpenses=ex
    }
}
console.log("minimum expenses = " ,minexpenses);

