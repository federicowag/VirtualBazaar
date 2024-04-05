const products = [
    {
        name: 'Red Dead Redemption 2',
        price: 50000,
        image: './img/images.jpeg',
        description: 'Embárcate en una aventura épica en el corazón del viejo oeste con Red Dead Redemption 2. Sigue la historia de Arthur Morgan, un forajido en busca de redención, mientras te sumerges en un mundo abierto lleno de acción, misiones emocionantes y personajes inolvidables. ¡Descubre por qué este juego es considerado una obra maestra del género!'
    },
    {
        name: 'Dark Souls III',
        price: 44000,
        image: './img/dark-souls-3.jpg',
        description: 'Prepárate para el desafío definitivo con Dark Souls III, la tercera entrega de la aclamada serie. Sumérgete en un mundo oscuro y atmosférico lleno de enemigos temibles y jefes desafiantes. Con su jugabilidad intensa y estratégica, este juego te pondrá a prueba y te mantendrá al borde de tu asiento en cada batalla.'
    },
    {
        name: 'Gears 5',
        price: 35000,
        image: './img/gerrr.jpg',
        description: 'Únete a la batalla épica con Gears 5, la quinta entrega de la icónica serie Gears of War. Sigue la emocionante historia de Kait Díaz mientras descubre los secretos de su familia y se enfrenta a los temibles Locust. Con gráficos impresionantes, una jugabilidad sólida y modos multijugador emocionantes, ¡este juego es imprescindible para todos los fanáticos de los juegos de acción!'
    },
    {
        name: 'Half Life Alyx',
        price: 60000,
        image: './img/half life.jpeg',
        description: 'Sumérgete en la experiencia de realidad virtual definitiva con Half-Life: Alyx. Situado entre los eventos de Half-Life y Half-Life 2, este juego te ofrece una aventura inmersiva y emocionante como ninguna otra. Lucha contra la Alianza Combine, resuelve puzzles desafiantes y descubre una narrativa envolvente que te mantendrá jugando durante horas.'
    },
    {
        name: 'Resident Evil 2 Remake',
        price: 20000,
        image: './img/residentevil2-featured-1024x597.png',
        description: 'Revive el clásico del survival horror con Resident Evil 2 Remake. Embárcate en una emocionante aventura mientras Leon S. Kennedy y Claire Redfield enfrentan hordas de zombis y descubren los oscuros secretos de Raccoon City. Con gráficos impresionantes, controles mejorados y una atmósfera aterradora, ¡este juego te mantendrá al borde de tu asiento en cada momento!'
    },
    {
        name: 'The Witcher 3: Wild Hunt',
        price: 18500,
        image: './img/witcher.jpeg',
        description: 'Descubre un mundo lleno de magia, monstruos y misterios con The Witcher 3: Wild Hunt. Basado en la aclamada serie de libros, sigue la historia de Geralt de Rivia mientras busca a su hija adoptiva, Ciri, en un vasto mundo abierto. Con misiones secundarias profundas, personajes memorables y una narrativa rica y envolvente, ¡este juego es una experiencia épica que no te puedes perder!'
    }
];

function displayProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = `
            <section class="product" data-name="${product.name}" data-price="${product.price}" data-image="${product.image}">
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
