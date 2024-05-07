const products = [
    {   name: "Stylish chair",
        price: "$120.00",
        raiting: "5",
        category: "Forest",
        imageUrl: "./pictures/all/Stylish chair.png",
        dataItemId: "1"
    },
    {   name: "Stylish chair",
        price: "$350.00",
        raiting: "5",
        category: "Office",
        imageUrl: "./pictures/all/Stylish chair2.png"
    },
    {   name: "Stylish chair",
        price: "$420.00",
        raiting: "5",
        category: "Foxkid",
        imageUrl: "./pictures/all/Stylish chair3.png"
    },
    {   name: "Stylish chair",
        price: "$670.00",
        raiting: "5",
        category: "Foxkid",
        imageUrl: "./pictures/all/Stylish chair4.png"
    },
    {   name: "Stylish chair",
        price: "$780.00",
        raiting: "5",
        category: "Forest",
        imageUrl: "./pictures/all/Stylish chair5.png"
    },
    {   name: "Stylish chair",
        price: "$630.00",
        raiting: "5",
        category: "Other",
        imageUrl: "./pictures/all/Stylish chair6.png"
    },
    {   name: "Stylish chair",
        price: "$550.00",
        raiting: "5",
        category: "Forest",
        imageUrl: "../pictures/all/Stylish chair7.png"
    },
    {   name: "Stylish chair",
        price: "$290.00",
        raiting: "5",
        category: "Foxkid",
        imageUrl: "../pictures/all/Stylish_chair8.png"
    }
];

function createProductsCard(product) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(product.category.toLowerCase());
    card.dataset.itemId = product.id;

    const img = document.createElement("img");
    img.src = product.imageUrl;
    img.alt = "Product image";

    const textContainer = document.createElement("div");
    textContainer.classList.add("fox-card-text");

    const name = document.createElement("p");
    name.classList.add("fox-type");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.classList.add("fox-price");
    price.textContent = product.price;

    const raitingImg = document.createElement("img");
    img.src = "./pictures/all/stars.png";
    raitingImg.alt = "Raiting";

    const category = document.createElement("p");
    category.classList.add("fox-name");
    category.textContent = product.category;

    textContainer.appendChild(name);
    textContainer.appendChild(price);
    textContainer.appendChild(raitingImg);
    textContainer.appendChild(category);

    const addButton = document.createElement("div");
    addButton.classList.add("add-plus");

    const span = document.createElement("span");
    span.classList.add("material-symbols-outlined");
    span.textContent = "Add";

    const buttonText = document.createElement("p");
    buttonText.textContent = "Add";

    addButton.appendChild(span);
    addButton.appendChild(buttonText);

    card.appendChild(img);
    card.appendChild(textContainer);
    card.appendChild(addButton);
    return card;
}

function addCardsToPage() {
    const cardsContainer = document.getElementById("cards");
    products.forEach(product => {
        const card = createProductsCard(product);
        cardsContainer.appendChild(card);
    });
}
window.onload = addCardsToPage;