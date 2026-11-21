const products = [
    { name: "GPS track tags", price: 15000 },
    { name: "Dog cages and kennels", price: 45000 },
    { name: "Outdoor dog houses", price: 60000 },
    { name: "Dematting combs", price: 8000 },
    { name: "Training collars", price: 12000 },
    { name: "Dog grooming kits", price: 10000 },
    { name: "Dog toys", price: 5000 },
    { name: "Dog food and treats", price: 20000 }
];

const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());

app.get("/", function (req, res) {
    res.send("Hello from the Vomea server");
});

app.get("/about", function (req, res) {
    res.send("This is the about page of the Vomea server");
});

app.get("/products", function (req, res) {
    res.json(products);
});

app.get("/products/count", function (req, res) {
    res.json({ count: products.length });
});

const orders = [];

app.post("/orders", function (req, res) {
  const order = {
    id: orders.length + 1,
    items: req.body.items,
    total: req.body.total
  };
  orders.push(order);
  res.json({ message: "Order received", orderId: order.id });
});

app.get("/orders", function (req, res) {
  res.json(orders);
});

app.listen(3000, function () {
    console.log("Server running on port 3000");
});

