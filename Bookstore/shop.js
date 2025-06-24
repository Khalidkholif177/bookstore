
let cart = {};
function addToCart(product) {
    if (cart.hasOwnProperty(product.id)) {
        cart[product.id].quantity++;
    } else {
        cart[product.id] = { ...product, quantity: 1 };
    }
    updateCartUI();
}
function updateCartUI() {
    const cartContainer = document.getElementById('cart-container');
    let html = '';
    let totalItems = 0;
    let totalAmount = 0;

    for (let id in cart) {
        totalItems += cart[id].quantity;
        totalAmount += cart[id].price * cart[id].quantity;
        html += `
            <div class="cart-item">
                <img src="${cart[id].img}" alt="${cart[id].name}" class="cart-img" style="width: 100px; height: auto;">
                <div class="item-details">
                    <p>${cart[id].name}</p>
                    <p>Price: ${cart[id].price} x ${cart[id].quantity}</p>
                    
                </div>
                <div class="cart-actions">
                    <button onclick="changeQuantity('${id}', 1)">+</button>
                    <button onclick="changeQuantity('${id}', -1)">-</button>
                    <button onclick="removeItem('${id}')">Remove</button>
                </div>
            </div>
        `;
    }
    
    
    const cartIcon = document.getElementById('cart-count');
    cartIcon.textContent = totalItems;
    cartContainer.innerHTML = html + `
        <div class="total-amount">Total: ${totalAmount}</div>
        <div class="cart-actions-buttons">
            <button onclick="checkout()" class="cart-action-button checkout-btn">Checkout</button>
            <button onclick="closeCart()" class="cart-action-button close-btn">Close</button>
        </div>`;
}



function changeQuantity(id, delta) {
    if (cart[id].quantity + delta > 0) {
        cart[id].quantity += delta;
    } else {
        delete cart[id];
    }
    updateCartUI();
}

function removeItem(id) {
    delete cart[id];
    updateCartUI();
}

function checkout() {
    window.location.href = 'payment page.html'; 
}

function closeCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = 'none';
}

document.getElementById('cart-icon').addEventListener('click', () => {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
});

function addToCart(product) {
    if (cart.hasOwnProperty(product.id)) {
        cart[product.id].quantity++;
    } else {
        cart[product.id] = { ...product, quantity: 1 };
    }

    
    updateCartUI();
    
    animateAddToCart();
}

function animateAddToCart() {
    const cartIcon = document.getElementById('cart-icon');
    
    cartIcon.classList.add('add-to-cart-animation');
    
    setTimeout(() => {
        cartIcon.classList.remove('add-to-cart-animation');
    }, 1000); 
}




function filterBooks(category) {
    let allBooks = document.querySelectorAll('.book-category');
    allBooks.forEach(book => {
        if (category === 'all' || book.classList.contains(category)) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
}





document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    var darkIcon = document.getElementById('dark-icon');
    var lightIcon = document.getElementById('light-icon');
    if (document.body.classList.contains('dark-mode')) {
        darkIcon.style.display = 'inline';
        lightIcon.style.display = 'none';
    } else {
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline';
    }
});
  