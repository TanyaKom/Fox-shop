document.addEventListener("DOMContentLoaded", () => {

let basket = JSON.parse(localStorage.getItem("basket")) || [];    
const openBasket = document.querySelector(".basket");
const closeBasket = document.querySelector(".closeBox");
const body = document.querySelector("body");
const addButtons = document.querySelectorAll(".add-plus");
const blurContainer = document.querySelector(".blur-container");

openBasket.addEventListener("click", () => {
    body.classList.add("blur-container", "active");
    blurContainer.classList.add("blur");
});
closeBasket.addEventListener("click", () => {
    body.classList.remove("blur-container","active");
    blurContainer.classList.remove("blur");
});
blurContainer.addEventListener("click", (event) => {
    if(event.target === blurContainer) {
        body.classList.remove("blur-container","active");
        blurContainer.classList.remove("blur");
    }
});

addButtons.forEach(button => {
    button.addEventListener('click', addToBasket);
});


function addToBasket(event) {        
    const card = event.target.closest('.card');
    const itemId = card.dataset.itemId;

    const existingItem = basket.find(item => item.itemId === itemId);
    if (existingItem) {
      existingItem.quantity++;
    } else {
        const imageSrc = card.querySelector('img').getAttribute('src');
        const name = card.querySelector('.fox-type').textContent;
        const price = parseFloat(card.querySelector('.fox-price').textContent.replace('$', ''));
        const quantity = 1;
        const item = { 
            imageSrc: imageSrc,
            name: name,
            price: price,
            quantity: quantity,
            itemId: itemId
        };

    basket.push(item);

} 
    updateBasketView();
}

function plusQuantity(event) {
    const index = parseInt(event.target.dataset.index);
    basket[index].quantity++;
    updateBasketView();
}
function minusQuantity(event) {
    const index = parseInt(event.target.dataset.index);
    if (basket[index].quantity > 1) {
        basket[index].quantity--;
    updateBasketView();
    }
}

document.querySelectorAll('.box-card').forEach((card, index) => {
    card.addEventListener('click', event => {
        if (event.target.classList.contains('plus')) {
            plusQuantity(event);
        } else if (event.target.classList.contains('minus')) {
            minusQuantity(event);
        } else if (event.target.closest(".removeItem")) {
            removeItem(index);
        }
    });
});

function updateBasketView() {
    const basketList = document.querySelector('.box-card');
    basketList.innerHTML = "";
    let totalQuantity = 0;
    basket.forEach((item, index) => {
        const listItem = document.createElement('li');
        const cardInfo = document.createElement("div");
        cardInfo.classList.add("cardInformation");
        const itemText = document.createElement("span");
        itemText.textContent = `${item.name} $${item.price.toFixed(2)}`;
        cardInfo.appendChild(itemText);
        listItem.appendChild(cardInfo);
        basketList.appendChild(listItem);
        

        const quantityControl = document.createElement("div");
        quantityControl.classList.add("quantity-control");
        quantityControl.innerHTML = `
        <button class="minus" data-action="minus" data-index="${index}">-</button>
        <span class="box-quantity">${item.quantity}</span>
        <button class="plus" data-action="plus" data-index="${index}">+</button>
        `;
        listItem.appendChild(createImage(item.imageSrc));
        listItem.appendChild(quantityControl); 

        const removeItemButton = document.createElement("div");
        removeItemButton.classList.add("removeItem");
        removeItemButton.innerHTML = `
        <p>Remove</p>
        <img src="./pictures/history/close-circle.png">
        `;
        listItem.appendChild(removeItemButton);
        // removeItemButton.addEventListener('click', () => removeItemButton(index));
        totalQuantity += item.quantity;
   });

    const totalPrice = basket.reduce((total, item) => total + (item.price * item.quantity), 0);
    const totalElement = document.querySelector('.total-sum');
    totalElement.textContent = `$${totalPrice.toFixed(2)}`;

    const quantityElement = document.querySelector('.quantity');
    quantityElement.textContent = totalQuantity;
    
    localStorage.setItem("basket", JSON.stringify(basket));

    }
    function removeItem(index) {
        basket.splice(index, 1);
        updateBasketView();
    }

    function createImage(src) {
        const image = document.createElement("img");
        image.src = src;
        return image;

    }
    updateBasketView();

});