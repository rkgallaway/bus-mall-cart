'use strict';
/* global Product, Cart */
var itemCounterEl = document.getElementById('itemCount');
var cartPreview = document.getElementById('cartContents');

var itemAdded = '';
var itemQuantity = '';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) { // shorthand for (var i = 0; i < Product.allProducts; i++);
    var newItem = document.createElement('option');
    newItem.textContent = `${Product.allProducts[i].name}`;
    selectElement.append(newItem);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();

  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage(); ///------------------ We left off here!!
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  if (event.target === catalogForm) {
    // TODO: suss out the item picked from the select list
    itemAdded = event.target.items.value;
    // TODO: get the quantity
    itemQuantity = event.target.quantity.value;
    // TODO: using those, add one item to the Cart
    cart.addItem(itemAdded, itemQuantity)
    
  }

}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
    var cartLength = cart.items.length
    //console.log(cartLength);
    var cartLenghtString = cartLength.toString();
    itemCounterEl.innerHTML = '';
    itemCounterEl.append(cartLenghtString);
 }

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  for (var i = 0; i < cart.items.length; i++) {
    var cartProduct = cart.items[i].product;
    var cartQuan = cart.items[i].quantity;
  }
  var cartItemsPreview = `${cartProduct}, ${cartQuan}`;
  // TODO: Add a new element to the cartContents div with that information
  var cartPreviewDiv = document.createElement('div');
  cartPreviewDiv.append(cartItemsPreview);
  cartPreview.append(cartPreviewDiv);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
