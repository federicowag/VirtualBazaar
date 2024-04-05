let cart = [];

function loadCart() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        cart = JSON.parse(cartData);
        displayCart();
    }
}

function displayCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    cart.forEach((item, index) => {
        const productTotal = item.price * item.quantity;

        const cartItem = `
            <div class="cart-item">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-quantity">Cantidad: ${item.quantity}</div>
                <div class="cart-item-price">Precio por artículo: $${item.price}</div>
                <div class="cart-item-total">Total por producto: $${productTotal.toFixed(2)}</div>
                <button onclick="removeFromCart(${index})">Eliminar</button>
            </div>
        `;

        cartContainer.innerHTML += cartItem;
    });

    calculateTotal();
}

function calculateTotal() {
    let cartTotal = 0;
    cart.forEach(item => {
        const productTotal = item.price * item.quantity;
        cartTotal += productTotal;
    });

    const totalElement = document.getElementById('cart-total');
    totalElement.textContent = `Total: $${cartTotal.toFixed(2)}`;
}

function addToCart(name, price, image) {
    let productExists = false;

    cart.forEach(item => {
        if (item.name === name) {
            item.quantity++;
            productExists = true;
        }
    });

    if (!productExists) {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);

    localStorage.setItem('cart', JSON.stringify(cart));

    displayCart();
}

function checkout() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));

    displayCart();

    alert('¡Gracias por su compra! 😃');
}

loadCart();
