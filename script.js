const Order = prompt (
  "Please enter your desire flavors, separate the commas", 
  "vanilla,vanilla,vanilla,coffee,coffee,strawberry"
);
console.log(Order);
const ordersArr = Order.split(",");
console.log(ordersArr);