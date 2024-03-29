function ready(){

    // to remove item from cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
      var button = removeCartButtons[i];
      button.addEventListener("click", removeCartItem);
  }
  

  
  //changing quanitity
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);
    }

    // add to cart
  var addToCartButton = document.getElementsByClassName("cartaddicon");
  for (var i = 0; i < addToCartButton.length; i++) {
      var button = addToCartButton[i];
      button.addEventListener("click", addToCartClicked);
  }

   


}

// Add event listener to the "More info" buttons
document.querySelectorAll('.moreinfo').forEach(function (btn) {
  btn.addEventListener('click', function () {
     
      var popup = btn.parentElement.querySelector('.popup');
      popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
  });
});




// Remove things from cart
function removeCartItem(event) {
    console.log("removeCartItem called");
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
  } 

  function removeAllCartItems() {
    console.log("Empty cart event called");
    
    var cartContainer = document.querySelector('#href5 .cart-content');
   
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild);
    }
    
    updateTotal();
}

// Attach event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    var emptyCartButton = document.getElementById("emptyCart");
    console.log(emptyCartButton);
    // Check if the button exists
    if (emptyCartButton) {
        emptyCartButton.addEventListener("click", removeAllCartItems);
    }
});

//quantity change
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateTotal();
}


//Add to cart
// Add to cart
function addToCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement.parentElement;
  var title = shopProducts.querySelector('.name_prdct').innerText;
  
  var price = shopProducts.querySelector('.price_prdct').innerText;
  
  
  var productImage = shopProducts.querySelector('.img_prodct').src;
  //var productImage = shopProducts.querySelector(".product_image").src;


  
  console.log(price,title,productImage);
  addProductToCart(price,title,productImage);
  


}
 function addProductToCart(title, price, productImage) {
    var cartShopBox = document.createElement("div");
    
    cartShopBox.classList.add("cart-box");
   
  
    var cartBoxContent = `
                        <img src="${productImage}" alt="" class="cart-img">
                        <div class="deatil-box">

                            <div class="cart-price"> ${price}  </div>
                            <div class="cart_name">${title}</div>
                            
                            <input type="number" value="1" class="cart-quantity">

                        </div>  
                        <i class='bx bxs-trash-alt cart-remove'>`;

    cartShopBox.innerHTML = cartBoxContent;

    var cartContent = document.querySelector('.cart-content');

    if(!cartContent){
        console.error("Cart content not found.");
        return;
    }

    cartContent.append(cartShopBox);

    cartShopBox.querySelector(".cart-remove").addEventListener('click', removeCartItem);
    cartShopBox.querySelector(".cart-quantity").addEventListener('change', quantityChanged);
    updateTotal();
  }


  

//total 
function updateTotal() {
    console.log("updateTotal called");
    var cartContent = document.querySelector('.cart-content');

    if (!cartContent) {
        console.error("Cart product container not found");
        return;
        
    }
    
    var cartBoxes = cartContent.querySelectorAll('.cart-box');
    


  

    var total = 0;

    cartBoxes.forEach(function(cartBox) {
        var detailBox = cartBox.querySelector('.deatil-box');

        if (!detailBox) {
            console.error("Detail box not found in cart box");
            return;
        }

        var priceElement = detailBox.querySelector('.cart_name');
        if (!priceElement) {
            console.error("Price element not found in detail box");
            return;
        }

        var quantityElement = detailBox.querySelector('.cart-quantity');
        if (!quantityElement) {
            console.error("Quantity element not found in detail box");
            return;
        }
            console.log(priceElement,quantityElement);
         var priceText = priceElement.innerText.replace("£", "").trim();
        var price = parseFloat(priceText);
        var quantity = parseInt(quantityElement.value);

        if (!isNaN(price) && !isNaN(quantity)) {
            total += price * quantity;
        } else {
            console.error("Invalid price or quantity");
        } 
    });
     

    console.log("Total:", total);
    document.querySelector('.total-price').innerText = "£" + total.toFixed(2);

    
}
  
  function ready() {
    var addToCartButton = document.querySelectorAll(".cartaddicon");
    addToCartButton.forEach(function(button) {
        button.addEventListener("click", addToCartClicked);
    });
}


ready();

// buy button
var BuyNowButton = document.getElementsByClassName("buynow");
var form = document.querySelectorAll(".form");
var cartProduct = document.querySelector(".cart-content");

Array.from(BuyNowButton).forEach(function(button, index) {

      button.addEventListener("click", function(){

        if (cartProduct.children.length === 0) {
          alert("Your basket is empty.");
      } else {
        window.open("checkout.html", "_blank");
      }

      });
    
});




// Define the function to remove all cart items
function removeAllCartItems() {
  
  
  var cartContent = document.querySelector('#href5 .cart-content');

  while (cartContent.firstChild) {
      cartContent.removeChild(cartContent.firstChild);
  }
  
  updateTotal();
}


function init() {
  
  removeAllCartItems();
}


document.addEventListener('DOMContentLoaded', function() {
  var emptyCartButton = document.getElementById("emptyCart");
  console.log(emptyCartButton);
 
  if (emptyCartButton) {
      emptyCartButton.addEventListener("click", removeAllCartItems);
  }

  init();
});


ready();