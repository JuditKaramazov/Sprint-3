var products = [
   {
        id: 1,
        name: 'Hotline Miami',
        price: 9.99,
        type: 'essentials',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Dead Cells',
        price: 10,
        type: 'essentials'
    },
    {
        id: 3,
        name: 'Firewatch',
        price: 8.99,
        type: 'essentials',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'Kentucky Route Zero',
        price: 12,
        type: 'narrative'
    },
    {
        id: 5,
        name: 'The Red Strings Club',
        price: 14.99,
        type: 'narrative'
    },
    {
        id: 6,
        name: "The Beginner's Guide",
        price: 4.99,
        type: 'narrative'
    },
    {
        id: 7,
        name: 'GRIS',
        price: 14.99,
        type: 'atmospheric'
    },
    {
        id: 8,
        name: 'Disco Elysium',
        price: 21.99,
        type: 'atmospheric'
    },
    {
        id: 9,
        name: 'SOMA',
        price: 9.99,
        type: 'atmospheric'
    }
]

// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];
let total = 0;

// Exercise 1: Adding products to the cart by using the function buy().
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart.
    // 2. Add found product to the cartList array.
    for (let i = 0; i < products.length; i++) {
        if (id == products[i].id) {
            cartList.push(products[i]);
        }
        document.getElementById("count_product").innerHTML = cartList.length;
    }
    generateCart();
}

// Exercise 2
function cleanCart() {
    // Cleaning the cart by emptying the previous array.
    cart.length = 0;
    cartList.length = 0;
    countProduct = 0;

    document.getElementById("cart_list").innerHTML = "";
    document.getElementById("count_product").innerHTML = 0;
    document.getElementById("total_price").innerHTML = 0;
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array.
    total = 0;
    subtotal = [];
    const uniqueFromCartList = [...new Set(cartList)];

    const roundNumber = (number, decimals = 2) => Number(number.toFixed(decimals));

    uniqueFromCartList.forEach((element) => {
        subtotal.push(element.subtotalWithDiscount || element.subtotal);
    });

    subtotal.forEach((element) => {
        total += element;
    });

    if (total > 0) total = roundNumber(total);
}

// Exercise 4:
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart.
    // Generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    cart = [];
    cart.length = 0;
    for (i = 0; i < cartList.length; i++) {
        result = cart.findIndex (product => product.id == cartList[i].id);
        if (result == -1) {
            cartList[i].quantity = 1;
            cartList[i].subtotal = cartList[i].price;
            cart.push(cartList[i]);
        } else {
            for (j = 0; j < cart.length; j++) {
                cart[j].quantity ++;
                cart[j].subtotal += cart[j].price;
            }
        }
    }
    applyPromotionsCart(cart);
}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart".
    cart.forEach((product) => {
        if (!product.offer) return;
        if (product.quantity >= product.offer.number) {
          product.subtotalWithDiscount = product.subtotal * (1 - product.offer.percent / 100);
          product.subtotalWithDiscount = roundNumber(product.subtotalWithDiscount);
        } else {
          product.subtotalWithDiscount = product.subtotal;
        }
      });
    }

// Exercise 6
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom.
    countProduct = 0;
    let htmlCart = document.getElementById("cart_list");
    htmlCart.innerHTML = "";
    calculateTotal();
    
    for (i = 0; i < cart.length; i++) {
        let tableCol = document.createElement("tr");
        let productName = document.createElement("th");
            productName.innerHTML = cart[i].name;
        let productPrice = document.createElement("td");
            productPrice.innerHTML = "$" + cart[i].price;
        let productQuantity = document.createElement("td");
            productQuantity.innerHTML = cart[i].quantity;
        let productTotal = document.createElement("td");
        if (!cart[i].subtotalWithDiscount) {
            productTotal.innerHTML = cart[i].price * cart[i].quantity;
        } else {
            productTotal.innerHTML = "$" + (cart[i].subtotalWithDiscount).toFixed(2);
    }

    tableCol.appendChild(productName);
    tableCol.appendChild(productPrice);
    tableCol.appendChild(productQuantity);
    tableCol.appendChild(productTotal);
    htmlCart.appendChild(tableCol);

    }

    document.getElementById("total_price").innerHTML = "$" + total;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it.
    // 1. Loop for to the array products to get the item to add to cart.
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    products.forEach (product => {
        if (product.id === id) {
            if (cart.includes(product)) {
                product.quantity = 1;
                product.subtotal = product.price;
                product.subtotalWithDiscount = product.subtotal;
                cart.push(product);
            } else {
                for (i = 0; i < cart.length; i++) {
                    if (product.id === cart[i].id) {
                        cart[i].quantity++;
                        cart[i].subtotal += cart[i].price;
                    }
                }
            }
        }
    });
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    cart.forEach((product, index) => {
        if (product.id == id) {
            product.quantity === 1;
            cart.splice(index, 1);
            product.quantity--;
            applyPromotionsCart();
        }
    });
    calculateTotal();
    countProduct();
    printCart();
}

function open_modal(){
    console.log("Open Modal");
	printCart();
}