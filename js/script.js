document.addEventListener("DOMContentLoaded", () => {
    const filterList = document.getElementById("filter-list");
    const cards = document.querySelectorAll("#cards .card");
    const button = document.getElementById("hero-btn");
    const slider = document.querySelector("#myRange");
    const valueSpan = document.querySelector("#value");
    let input = document.querySelector("#input");
    const items = document.querySelector(".cards");
    let currentFilter = null;
    const titleTxt = document.querySelectorAll(".title-txt");

    filterList.addEventListener("click", function(event) {
        const selectedFilter = event.target.closest(".title-txt");
        const filter = selectedFilter.getAttribute("data-filter");
        titleTxt.forEach(item => {
            item.style.color = "";
        });
        selectedFilter.style.color = "#CC5520";

        currentFilter = filter;
        filterCards(filter);
    });

    function filterCards(filter) {
        let hasResults = false;

        cards.forEach(card => {
            const cardText = card.querySelector(".fox-card-text");
            const price = cardText.dataset.price;
            const category = cardText.dataset.category;
            if(!filter || card.classList.contains(filter)) {
                card.style.display = "block";
                hasResults = true;
            } else {
                card.style.display = "none";
            }
        });
        updateResultsVisibility(hasResults);
    }
        function updateResultsVisibility(hasResults) {
        const noResultsMessege = document.getElementById("no-results");
        if (hasResults) {
            noResultsMessege.style.display = "none";

        } else {
            noResultsMessege.style.display = "block";
        }
    }

    button.addEventListener("click", function() {
        cards.forEach(card => {
            card.style.display = "block";
        });
        titleTxt.forEach(item => {
            item.style.color = "";
        });
        currentFilter = null;
        filterCards("");
    });

    slider.addEventListener("input", () => {
        const value = slider.value;
        const minValue = parseInt(slider.min);
        const maxValue = parseInt(slider.max);
        const percentage = ((value - minValue) / (maxValue - minValue)) * 100;
        valueSpan.textContent = "Value: " + value + "$";
        slider.style.background = `linear-gradient(90deg, #CC5520 ${percentage}%, #FFF 0)`;

        filterCardsByPrice(value);
    });

    function filterCardsByPrice(price) {
        let hasResults = false;

        cards.forEach(card => {
            const cardText = card.querySelector(".fox-card-text");
            const category = cardText.dataset.category;
            const cardPrice = parseFloat(cardText.dataset.price.replace("$", ""));

                if((!currentFilter || card.classList.contains(currentFilter)) && cardPrice <= price) {

                card.style.display = "block";
                hasResults = true;
            } else {
                card.style.display = "none";
            }
         
        });
        updateResultsVisibility(hasResults);
    }

    input.addEventListener("input", () => {
        const searchFox = input.value.trim().toLowerCase();
        const foxes = Array.from(items.children);
        foxes.forEach(fox => {
            const foxName = fox.querySelector(".fox-name").textContent.toLowerCase();
            if (foxName.includes(searchFox)) {
                fox.style.display = "block";
            } else {
                fox.style.display = "none";
            }
    
        });
    });
});

    document.addEventListener("DOMContentLoaded", function() {
        const touchMenu = document.getElementById("touch-menu");
        const slideMenu = document.querySelector(".slide");
        const touchLabel = document.querySelector(".touch-menu");
        const closeMenu = document.querySelector(".close-logo");

        touchLabel.addEventListener("click", function() {
            if(touchMenu.checked) {
                slideMenu.style.display = "block";
            } else {
                slideMenu.style.display = "none";
            }
        });
        closeMenu.addEventListener("click", function() {
            slideMenu.style.display = "none";
            touchMenu.checked = false;
        });
});