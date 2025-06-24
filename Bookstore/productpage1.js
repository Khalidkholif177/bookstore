new Vue({
    el: '#app'
  });
  new Vue({
    el: '#app'
});

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
    const cartIcon = document.getElementById('cart-count');
    const cartContainer = document.getElementById('cart-container');
    let totalItems = 0;
    let html = '';
    let totalAmount = 0;

    for (let id in cart) {
        totalItems += cart[id].quantity;
        totalAmount += cart[id].price * cart[id].quantity;
        html += `
            <div class="cart-item">
            <img src="img4.jpg "${cart[id].img}" alt="${cart[id].name}" class="cart-img" style="width: 100px; height: auto;">

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

    function addToCart(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseInt(quantityInput.value, 10);
    const productInfo = {
        id: productId,
        name: 'Crime and Punishment',
        price: 450,
        img: 'img4.jpg'
    };

    if (cart.hasOwnProperty(productId)) {
        cart[productId].quantity += quantity;
    } else {
        cart[productId] = { ...productInfo, quantity: quantity };
    }

    updateCartUI();
}

    

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

function enableImageZoom() {
    const bookImage = document.getElementById('book-image');
    
    bookImage.addEventListener('mouseover', () => {
        bookImage.style.transform = 'scale(1.1)';
        bookImage.style.transition = 'transform 0.3s ease';
    });

    bookImage.addEventListener('mouseout', () => {
        bookImage.style.transform = 'scale(1)';
    });
}

enableImageZoom();




