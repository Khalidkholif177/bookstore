const cookieMessage = document.getElementById('cookie-message');
const acceptAllCookiesBtn = document.getElementById('accept-all-cookies');

acceptAllCookiesBtn.addEventListener('click', () => {
    document.cookie = "cookiesAccepted=true; expires=Thu, 18 Apr 2025 12:00:00 UTC; path=/";
    cookieMessage.style.display = 'none';
});

const cookiesAccepted = document.cookie.split(';').some(cookie => cookie.trim().startsWith('cookiesAccepted='));
if (cookiesAccepted) {
    cookieMessage.style.display = 'none';
}

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
            <img src=" ${cart[id].img}" alt="${cart[id].name}" class="cart-img" style="width: 100px; height: auto;">
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






document.getElementById('chatbot-trigger').addEventListener('click', function() {
    document.getElementById('chatbot').style.display = 'block';
});

function toggleChatbot() {
    var chatbotWindow = document.getElementById('chatbot');
    chatbotWindow.style.display = (chatbotWindow.style.display === 'none') ? 'block' : 'none';
}

function replyChatbot(type) {
    var answer = "";
    switch (type) {
        case 'find':
            answer = "you can find us by visting our store or on our social media accounts ";
            break;
        case 'genre':
            answer = "Let me know what you're interested in (fantasy, mystery, romance, etc.) and I can suggest some great reads.";
            break;
        case 'new':
            answer = " We've just received some fantastic new titles that are sure to ignite your imagination and spark your curiosity. From gripping thrillers to heartwarming romances, from insightful non-fiction to captivating children's books, we've got something for every reader. Come on in and browse our shelves to discover your next literary adventure!";
            break;
        case 'suggest':
            answer = "The Silent Patient by Alex Michaelides: A gripping psychological thriller about a woman's shocking act of violence and the psychotherapist determined to unravel her mystery.";
            break;
    }
    document.getElementById('chatbot-answer').innerText = answer;
}
function showChatbot() {
    document.getElementById('chatbot').style.display = 'block';
}

function hideChatbot() {
    document.getElementById('chatbot').style.display = 'none';
}

document.getElementById('chatbot-trigger').addEventListener('click', showChatbot);

document.querySelector('.chatbot-header button').addEventListener('click', hideChatbot);
window.addEventListener('click', function(event) {
    var chatbotWindow = document.getElementById('chatbot');
    if (event.target === chatbotWindow) {
        hideChatbot();
    }
});
function showChatbot() {
    document.getElementById('chatbot').style.display = 'block';
    document.getElementById('chatbot-overlay').style.display = 'block';
}

function hideChatbot() {
    document.getElementById('chatbot').style.display = 'none';
    document.getElementById('chatbot-overlay').style.display = 'none';
}

document.getElementById('chatbot-overlay').addEventListener('click', hideChatbot);




