# Vomea

A small online shop for luxury dog accessories, built as a learning project while teaching myself full-stack development.

## What it does

- Shows a product list loaded from a Node.js and Express server
- "Add to cart" buttons update a live item count and total
- "Order now" sends the cart to the server, which saves the order and replies with an order number
- Server routes: `/products`, `/products/count` and `/orders`

## Built with

HTML, CSS, JavaScript (DOM scripting and fetch), Node.js and Express

## How to run it

1. Install [Node.js](https://nodejs.org)
2. Clone this repository: `git clone https://github.com/hayo-star/Vomea.git`
3. Move into the folder: `cd Vomea`
4. Install the packages: `npm install`
5. Start the server: `node server.js`
6. Open `http://localhost:3000` in your browser

## Project structure

- `server.js`: the Express server and its routes
- `public/`: the shop page (`index.html`, `style.css` and `script.js`)

## Notes

Orders are saved in an `orders.json` file on the server. That file is not included in the repository, because it holds customer data.

## What's next

- Store products and orders in a database
- Add user accounts
- Put the shop online

Built by Ayodeji Dahunsi