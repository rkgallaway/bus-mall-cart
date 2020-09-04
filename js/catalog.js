/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
var cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var newItem = document.createElement('option');
    newItem.textContent = `${Product.allProducts[i].name}`
    selectElement.append(newItem);
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
var cartArray = [];
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  var form = document.getElementById('catalog');

  // Do all the things ...

  // TODO: Add the selected item and quantity to the cart
  function addSelectedItemToCart() {
    // TODO: suss out the item picked from the select list
    var product = event.target.items.value;
    // TODO: get the quantity
    var quantity = parseInt(event.target.quantity.value);
    // TODO: using those, add one item to the Cart
    var Cart = new CartItem(product, quantity);
    cartArray.push(Cart);
    form.reset();
    // console.log(cartArray);
    console.log(product,quantity)
  }

  cart.saveToLocalStorage();
  addSelectedItemToCart();
  updateCartPreview();
}
updateCounter();

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  for(var i = 0; i < cartArray.length; i++) {
    itemCount.textContent = updatedCount;
    updatedCount = updatedCount + cartArray[i];
  }
  
 }
//  console.log(updatedCount);

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  var cartContents = document.getElementById('cartContents');
  var itemUl = document.createElement('ul');

  for(i = 0; i < cartArray.length; i++){
    itemLi.textContent = `There are ${cartArray[i].quantity} of ${cartArray[i].product}.`
  itemLi.appendChild(itemLi);

  }
  cartContents.appendChild(itemUl);


  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
