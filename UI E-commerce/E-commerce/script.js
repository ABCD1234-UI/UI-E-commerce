let bannerImages = document.querySelectorAll('.banner img');
let currentBannerImage = 0;

setInterval(() => {
    bannerImages[currentBannerImage].classList.remove('active');
    currentBannerImage = (currentBannerImage + 1) % bannerImages.length;
    bannerImages[currentBannerImage].classList.add('active');
}, 3000);





let bannerSlides = document.querySelectorAll('.banner-slide');
let currentBannerSlide = 0;

setInterval(() => {
    bannerSlides[currentBannerSlide].classList.remove('active');
    currentBannerSlide = (currentBannerSlide + 1) % bannerSlides.length;
    bannerSlides[currentBannerSlide].classList.add('active');
}, 3000);





const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Get the user data from local storage
    const userData = JSON.parse(localStorage.getItem('userData'));

    // Check if user data exists and match the input credentials
    if (userData && userData.username === username && userData.password === password) {
        // Store the username in local storage
        localStorage.setItem('username', username);
        // Redirect to home page
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});





const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Store the user data in local storage
    const userData = {
        name,
        email,
        username,
        password
    };
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to login page
    window.location.href = 'login.html';
});






const cartItems = [
    { id: 1, name: 'Product 1', price: 100, quantity: 2, image: 'product1.jpg' },
    { id: 2, name: 'Product 2', price: 200, quantity: 1, image: 'product2.jpg' },
    { id: 3, name: 'Product 3', price: 300, quantity: 3, image: 'product3.jpg' }
];



// calculate subtotal, tax, and total
const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
const tax = subtotal * 0.18; // assuming 18% tax
const total = subtotal + tax;

document.getElementById('subtotal').innerText = `₹${subtotal}`;
document.getElementById('tax').innerText = `₹${tax}`;
document.getElementById('total').innerText = `₹${total}`;

// add event listener to remove buttons
const removeBtns = document.querySelectorAll('.remove-btn');
removeBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // remove item from cart
        // update cart data and recalculate subtotal, tax, and total
    });
});

















let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsContainer = document.querySelector('.cart-items');

cart.forEach((item) => {
    const cartItemHTML = `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <button class="remove-btn">Remove</button>
        </div>
    `;
    cartItemsContainer.innerHTML += cartItemHTML;
});





















