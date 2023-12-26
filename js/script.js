let products = {
  data: [
    {
      productName: "Gold earrings",
      category: "Gold",
      price: "400₴",
      image: "img/Gold earrings.png",
      description: "These gold earrings are perfect for a night out on the town."
    },
    {
      productName: "Gold necklace",
      category: "Gold",
      price: "450₴",
      image: "img/Gold necklace.png",
      description: "This stunning gold necklace is sure to turn heads."
    },
    {
      productName: "Silver earrings",
      category: "Silver",
      price: "420₴",
      image: "img/Silver earrings.png",
      description: "These silver earrings are simple yet elegant."
    },
    {
      productName: "Gold pearl earrings",
      category: "Gold",
      price: "300₴",
      image: "img/Gold pearl earrings.png",
      description: "These gold pearl earrings are a timeless classic."
    },
    {
      productName: "Silver pearl earrings",
      category: "Silver",
      price: "640₴",
      image: "img/Silver pearl earrings.png",
      description: "These silver pearl earrings are a statement piece."
    },
    {
      productName: "Gold rings",
      category: "Gold",
      price: "240₴",
      image: "img/Gold rings.png",
      description: "These gold rings are perfect for stacking."
    },
    {
      productName: "Silver necklace",
      category: "Silver",
      price: "500₴",
      image: "img/Silver necklace.png",
      description: "This silver necklace is a must-have accessory."
    },
    {
      productName: "Silver rings",
      category: "Silver",
      price: "410₴",
      image: "img/Silver rings.jpg",
      description: "These silver rings are perfect for everyday wear."
    }
  ]
};

(function createCard() {
  const cardsGrid = document.getElementById('products');
  if (!cardsGrid) {
    console.error("Could not find element with id 'products'");
    return;
  }
  const cardsHTML = products.data
    .map(
      item => `
    <div class="container card ${item.category}">
      <div class="image-container">
        <img src="${item.image}">
      </div>
      <div class="container">
        <h5 class="product-name">${item.productName}</h5>
        <h5>${item.price}</h5>
        <p class="description">${item.description}</p>
      </div>
    </div>
  `
    )
    .join(' ');
  cardsGrid.innerHTML = cardsHTML;
})();

function filterProduct(value) 
{
  let buttons = document.querySelectorAll('.button-value');
  buttons.forEach(button => {
    if (value.toUpperCase() === button.textContent.toUpperCase()) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
  let elements = document.querySelectorAll('.card');
  elements.forEach(element => {
    if (value === 'All') {
      element.classList.remove('hide');
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove('hide');
      } else {
        element.classList.add('hide');
      }
    }
  });
}

window.addEventListener('load', () => {
  filterProduct('All');
});

let filterButtons = document.querySelectorAll('.button-value');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    let value = button.textContent;
    filterProduct(value);
  });
});

