let cart = [];

function loadCart() {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        cart = JSON.parse(cartData);
        displayCart();
    }
}

function fetchAdditionalData() {
    fetch('https://api.example.com/product-info')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener la información adicional sobre los productos.');
            }
            return response.json();
        })
        .then(data => {
            products.forEach(product => {
                const additionalInfo = data[product.name];
                if (additionalInfo) {
                    product.additionalInfo = additionalInfo;
                }
            });
            displayProducts();
        })
        .catch(error => {
            const errorMessage = 'Error al obtener información adicional sobre los productos'
            const errorElement = document.getElementById('error-message');
            errorElement.innerText = errorMessage;
        });
}

document.getElementById('more-info-btn').addEventListener('click', fetchAdditionalData);

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

    Swal.fire({
        title: '¡Gracias por tu compra!',
        text: 'Tu pedido ha sido procesado con éxito.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    });
}

loadCart();
