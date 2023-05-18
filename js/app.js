'use strict';
//global variables
function AppState() {
  this.allProducts = [];
}
//excutable code
AppState.prototype.instantiateProducts = function () {

  const productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'water-can', 'wine-glass'];

  for (let i = 0; i < productNames.length; i++) {
    if (productNames[i] === 'sweep') {
      this.allProducts.push(new Product(productNames[i], 'png'))
    } else {
      this.allProducts.push(new Product(productNames[i]))
    }
  }

}
// save to local storage
AppState.prototype.saveToLocalStorage = function () {
  // DONE: Fill in this instance method to save product data to local storage
  let productJSON = JSON.stringify(this.allProducts);
  localStorage.setItem('products', productJSON);
}
// recieve from local storage 
AppState.prototype.loadItems = function () {

  // DONE: Update this instance method to retrieve data from local storage instead of creating new Products on each page load
  let productJSON = localStorage.getItem('products');
  if (productJSON) {
    this.allProducts = JSON.parse(productJSON);
  } else {
    this.instantiateProducts();
  }
}

// constructor function
function Product(name, fileExtension = 'jpg') {
  this.name = name;
  this.source = `assets/${name}.${fileExtension}`;
  this.timesClicked = 0;
  this.timesShown = 0;
}
