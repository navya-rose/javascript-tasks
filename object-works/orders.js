
var orders ={
    pizza:10,
    burger:20,
    pepsi:25,
    alfham:27
}

var newOrder="burger"
var qty =2

if(newOrder in order){
    order[newOrder]+=qty
}
else{
    order[newOrder]=qty
}
console.log(orders);
