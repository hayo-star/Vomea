const products = [
    { name: "GPS track tags", price: 15000, image: "/images/gps-tag.svg" },
    { name: "Dog cages and kennels", price: 45000, image: "/images/dog-cage.svg" },
    { name: "Outdoor dog houses", price: 60000, image: "/images/dog-house.svg" },
    { name: "Dematting combs", price: 8000, image: "/images/dematting-comb.svg" },
    { name: "Training collars", price: 12000, image: "/images/training-collar.svg" },
    { name: "Dog grooming kits", price: 10000, image: "/images/grooming-kit.svg" },
    { name: "Dog toys", price: 5000, image: "/images/dog-toys.svg" },
    { name: "Dog food and treats", price: 20000, image: "/images/dog-food.svg" }
];

const express = require("express");
const fs = require("fs");
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

const ORDERS_FILE = "orders.json";

function loadOrders() {
    if (!fs.existsSync(ORDERS_FILE)) {
        return [];
    }
    const text = fs.readFileSync(ORDERS_FILE, "utf8");
    return JSON.parse(text);
}

function saveOrders(orders) {
    fs.writeFileSync(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

const orders = loadOrders();
app.post("/orders", function (req, res) {
    const order = {
        id: orders.length + 1,
        items: req.body.items,
        total: req.body.total
    };
    orders.push(order);
    saveOrders(orders);
    res.json({ message: "Order received", orderId: order.id });
});

app.get("/orders", function (req, res) {
    res.json(orders);
});

app.listen(3000, function () {
    console.log("Server running on port 3000");
});

