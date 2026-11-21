const productList = document.getElementById("productList");

let cartCount = 0;
let cart = [];
const cartCountDisplay = document.getElementById("cartCount");
let cartTotal = 0;
const cartTotalDisplay = document.getElementById("cartTotal");

fetch("/products")
    .then(function (response) {
        return response.json();
    })
    .then(function (products) {
        console.log(products);
        for (let i = 0; i < products.length; i++) {
            const li = document.createElement("li");
            li.textContent = products[i].name + " - ₦" + products[i].price + " ";

            const addBtn = document.createElement("button");
            addBtn.textContent = "Add to cart";

            addBtn.addEventListener("click", function () {
                cartCount = cartCount + 1;
                cart.push(products[i]);
                cartCountDisplay.textContent = cartCount;

                cartTotal = cartTotal + products[i].price;
                cartTotalDisplay.textContent = cartTotal;
            });

            li.appendChild(addBtn);
            productList.appendChild(li);
        }
    });

const button = document.getElementById("orderBtn");
const message = document.getElementById("message");
const title = document.getElementById("title");

button.addEventListener("click", function () {
    if (cartCount === 0) {
        message.textContent = "Your cart is empty.";
    } else {
        fetch("/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: cart, total: cartTotal })
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                message.textContent = "Woof! Order #" + data.orderId + " of ₦" + cartTotal + " is processing!";
                title.textContent = "Thank you for shopping at Vomea";
                cart = [];
                cartCount = 0;
                cartTotal = 0;
                cartCountDisplay.textContent = cartCount;
                cartTotalDisplay.textContent = cartTotal;
            });
    }
});