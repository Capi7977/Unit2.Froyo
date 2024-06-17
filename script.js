const Order = prompt (
  "Please enter your desire flavors, separate the commas", 
  "vanilla,vanilla,vanilla,coffee,coffee,strawberry"
);
console.log(Order);
const ordersArr = Order.split(",");
console.log(ordersArr);

const orderCondenced = {};
for (let i = 0; i < ordersArr.length; i++){
  if(orderCondenced[ordersArr[i]]) {
    orderCondenced[ordersArr[i]] += 1;
  } else {
    orderCondenced[ordersArr[i]] = 1;
  }
};

console.table(orderCondenced);