// Sample cart data (replace with actual cart data)
const cartItems = [
    { name: "Product 1", price: 100 },
    { name: "Product 2", price: 150 },
    { name: "Product 3", price: 200 }
];

// Function to display cart items
function displayCartItems() {
    const cartContainer = document.querySelector('.cart-items');
    cartContainer.innerHTML = '';

    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ${item.price} EGP</p>
        `;
        cartContainer.appendChild(cartItemDiv);
    });
}

// Function to handle checkout button click
function handleCheckout() {
    // Add your checkout logic here
    alert('Checkout functionality to be implemented!');
}

// Event listener for checkout button
document.getElementById('checkout-btn').addEventListener('click', handleCheckout);

// Display cart items when the page loads
displayCartItems();
