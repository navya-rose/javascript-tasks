
var expenses = [
  { id: 1, title: "Dosa and Tea", amount: 40, category: "food", owner: "jazeel", payment_method: "upi", priority: "need" },
  { id: 2, title: "Bus Fare", amount: 25, category: "transport", owner: "jazeel", payment_method: "cash", priority: "need" },
  { id: 3, title: "Mobile Recharge", amount: 299, category: "utilities", owner: "jazeel", payment_method: "upi", priority: "need" },
  { id: 4, title: "Movie Ticket", amount: 150, category: "entertainment", owner: "jazeel", payment_method: "card", priority: "want" },
  { id: 5, title: "Snacks", amount: 60, category: "food", owner: "jazeel", payment_method: "cash", priority: "want" },
  { id: 6, title: "Gym Membership", amount: 1200, category: "health", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 7, title: "Coffee", amount: 120, category: "food", owner: "sarah", payment_method: "card", priority: "want" },
  { id: 8, title: "Books", amount: 450, category: "education", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 9, title: "Uber Ride", amount: 200, category: "transport", owner: "sarah", payment_method: "upi", priority: "want" },
  { id: 10, title: "Internet Bill", amount: 799, category: "utilities", owner: "sarah", payment_method: "upi", priority: "need" },
  { id: 11, title: "Petrol", amount: 500, category: "transport", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 12, title: "Dinner Out", amount: 850, category: "food", owner: "rahul", payment_method: "card", priority: "want" },
  { id: 13, title: "Rent", amount: 8000, category: "housing", owner: "rahul", payment_method: "bank_transfer", priority: "need" },
  { id: 14, title: "Netflix Subscription", amount: 199, category: "entertainment", owner: "rahul", payment_method: "upi", priority: "want" },
  { id: 15, title: "Groceries", amount: 1200, category: "food", owner: "rahul", payment_method: "cash", priority: "need" },
  { id: 16, title: "Laundry", amount: 100, category: "services", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 17, title: "Pizza", amount: 400, category: "food", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 18, title: "Medicine", amount: 250, category: "health", owner: "amit", payment_method: "cash", priority: "need" },
  { id: 19, title: "Gaming Skin", amount: 80, category: "entertainment", owner: "amit", payment_method: "upi", priority: "want" },
  { id: 20, title: "New Shirt", amount: 900, category: "shopping", owner: "amit", payment_method: "card", priority: "want" }
];

//1.owner summary
var ownerSummary={}
for(let t of expenses){
    let owner = t.owner
    let amount=t.amount
    if(owner in ownerSummary){
        ownerSummary[owner]+=amount
    }
    else{
        ownerSummary[owner]=amount
    }
}
// console.log(ownerSummary);

// transaction with highest amount
var highestAmount=expenses.reduce((s1,s2)=>s1.amount>s2.amount?s1:s2)
// console.log(highestAmount);

//cash transaction
var cashtrans=expenses.filter(t=>t.payment_method=="cash")
// console.log(cashtrans);

//trancation with amount >1000
var GTthousand = expenses.filter(t=>t.amount>1000)
// console.log(GTthousand);

//total expenses
var totalExpenses = expenses.reduce((sum,t)=>sum+t.amount,0)
// console.log(totalExpenses);

//most used payment method
var paymentMethodCount={}
for(let t of expenses){
    let type =t.payment_method
    if(type in paymentMethodCount){
        paymentMethodCount[type]+=1
    }
    else{
        paymentMethodCount[type]=1
    }
}
// console.log(paymentMethodCount);

//sara + food + amount
var saraFoodTransactionAmount=expenses.filter(t=>t.owner=="sarah"&& t.category=="food").reduce((s,t)=>s+t.amount,0)
// console.log(saraFoodTransactionAmount);

//priority summary
var prioritySummary={}
for(let p of expenses){
    let priority=p.priority
    let amount=p.amount
    if( priority in prioritySummary){
        prioritySummary[priority]+=amount
    }
    else{
        prioritySummary[priority]=amount
    }
}
// console.log(prioritySummary);

//transaction of jazeel
var jazeelTransactions=expenses.filter(t=>t.owner=="jazeel")
// console.log(jazeelTransactions);

//higest paid category
var categorySummary={}
for(let t of expenses){
    let category=t.category
    let amount = t.amount
    if(category in categorySummary){
        categorySummary[category]+=amount
    }
    else{
        categorySummary[category]=amount
    }
}
// console.log(categorySummary);
var sorted = Object.entries(categorySummary).sort((s1,s2)=>s2[1]-s1[1])
// console.log(sorted);


//priority summary wrt owner
var prioritySummary={}
for(let p of expenses){
    let priority=p.priority
    if( priority in prioritySummary){
        prioritySummary[priority]+=1
    }
    else{
        prioritySummary[priority]=1
    }
}
// console.log(prioritySummary);

//payment methods
var paymentmethod=expenses.filter(s=>s.payment_method)
console.log(paymentmethod);






