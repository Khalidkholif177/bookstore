document.addEventListener("DOMContentLoaded", () => {
    const openShopping = document.querySelector(".openShopping");
    const closeShopping = document.querySelector(".closeShopping");
    const productList = document.querySelector(".list");
    const cartPanel = document.querySelector(".card");
    const cartCountSpan = document.querySelector(".cart-count");
    const totalDisplay = document.querySelector(".total");
    const listCard = document.querySelector(".listCard");

    let products = [
        { id: 1, name: "The Prince", image: "img1.jpg", price: 210 },
        { id: 2, name: "12 Rules of Life", image: "img2.jpg", price: 500 },
        { id: 3, name: "The 48 Laws of Power", image: "img3.jpg", price: 1000 },
        { id: 4, name: "Crime and Punishment", image: "img4.jpg", price: 450 }
    ];

    let cartItems = [];

    products.forEach(product => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button onclick="addToCart(${product.id})">Add To Cart</button>
        `;
        productList.appendChild(newDiv);
    });

    window.addToCart = (productId) => {
        const product = products.find(p => p.id === productId);
        const itemIndex = cartItems.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cartItems[itemIndex].quantity++;
        } else {
            cartItems.push({ ...product, quantity: 1 });
        }
        updateCart();
    };

    const updateCart = () => {
        listCard.innerHTML = '';
        let total = 0;
        cartItems.forEach(item => {
            const itemElement = document.createElement("li");
            itemElement.innerHTML = `
                <span>${item.name} x ${item.quantity} - $${item.price * item.quantity}</span>
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
            `;
            listCard.appendChild(itemElement);
            total += item.price * item.quantity;
        });
        totalDisplay.textContent = `Total: $${total}`;
        cartCountSpan.textContent = cartItems.reduce((sum, item) => sum + item.quantity, 0).toString();
    };

    window.changeQuantity = (productId, delta) => {
        const itemIndex = cartItems.findIndex(item => item.id === productId);
        if (itemIndex > -1) {
            cartItems[itemIndex].quantity += delta;
            if (cartItems[itemIndex].quantity <= 0) {
                cartItems.splice(itemIndex, 1);
            }
            updateCart();
        }
    };

    openShopping.addEventListener("click", () => cartPanel.classList.add("active"));
    closeShopping.addEventListener("click", () => cartPanel.classList.remove("active"));
});
