let cart = {};

function addToCart(product) {
    if (cart[product.id]) {
        cart[product.id].quantity += 1;
    } else {
        cart[product.id] = { ...product, quantity: 1 };
    }
    updateCart();
}

function removeFromCart(productId) {
    delete cart[productId];
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let total = 0;
    Object.values(cart).forEach(product => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <h4>${product.name}</h4>
            <p>EGP ${product.price} x ${product.quantity}</p>
            <button onclick="removeFromCart('${product.id}')">Remove</button>
        `;
        cartList.appendChild(cartItem);
        total += product.price * product.quantity;
    });
    document.getElementById('total-price').textContent = `EGP ${total}`;
}

document.getElementById('clear-cart').addEventListener('click', () => {
    cart = {};
    updateCart();
});

// Assuming you have a checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceed to checkout page or payment integration.');
});

// Call `updateCart()` to initialize or refresh the cart display
updateCart();

let cart = {};

function addToCart(product) {
    if (cart[product.id]) {
        cart[product.id].quantity += 1;
    } else {
        cart[product.id] = { ...product, quantity: 1 };
    }
    updateCartDisplay();
}

function removeFromCart(productId) {
    if (cart[productId]) {
        cart[productId].quantity -= 1;
        if (cart[productId].quantity <= 0) {
            delete cart[productId];
        }
    }
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartCount = Object.values(cart).reduce((acc, { quantity }) => acc + quantity, 0);
    document.getElementById('cart-count').innerText = cartCount;
    updateCartPage();
}

function updateCartPage() {
    if (document.getElementById('cart-list')) {
        const cartList = document.getElementById('cart-list');
        cartList.innerHTML = '';
        let total = 0;
        Object.values(cart).forEach(product => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <h4>${product.name}</h4>
                <p>EGP ${product.price} x ${product.quantity}</p>
                <button onclick="removeFromCart('${product.id}')">Remove</button>
            `;
            cartList.appendChild(cartItem);
            total += product.price * product.quantity;
        });
        document.getElementById('total-price').textContent = `EGP ${total}`;
    }
}

