const products = [
    {
        name: 'Red Dead Redemption 2',
        price: 50000,
        image: './img/images.jpeg',
        description: 'Red Dead Redemption 2 es un épico juego de acción y aventura...'
    },
    {
        name: 'Dark Souls III',
        price: 44000,
        image: './img/dark-souls-3.jpg',
        description: 'Dark Souls III es un desafiante juego de acción y rol...'
    },
    {
        name: 'Gears 5',
        price: 35000,
        image: './img/gerrr.jpg',
        description: 'Gears 5 es un juego de acción en tercera persona...'
    },
    {
        name: 'Half Life Alyx',
        price: 60000,
        image: './img/half life.jpeg',
        description: 'Half-Life: Alyx es un juego de realidad virtual...'
    },
    {
        name: 'Resident Evil 2 Remake',
        price: 20000,
        image: './img/residentevil2-featured-1024x597.png',
        description: 'Resident Evil 2 Remake es una reimaginación del clásico juego...'
    },
    {
        name: 'The Witcher 3: Wild Hunt',
        price: 18500,
        image: './img/witcher.jpeg',
        description: 'The Witcher 3: Wild Hunt es un aclamado juego de rol...'
    }
];

function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = `
            <section class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <span>$${product.price}</span>
                <button onclick="addToCart('${product.name}', ${product.price}, '${product.image}')">Comprar ahora</button>
            </section>
        `;

        productContainer.innerHTML += productElement;
    });
}

displayProducts();
