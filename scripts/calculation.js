///////////////////////////////////
const productNameContainer = document.getElementById("productNameContainer");
let productsCount = productNameContainer.childNodes.length - 8;
///////////////////////////////////
const totalPriceContainer = document.getElementById("totalPrice");
const discountPriceContainer = document.getElementById("discountPrice");
const totalContainer = document.getElementById("total");
const cuponInputField = document.getElementById("cuponInput");
const cuponBtn = document.getElementById("cuponBtn");

/////closeBtn///
document.getElementById("goHomeButton").addEventListener("click", function () {
  window.location.href = "/"; // Change '/' to your home page URL if it's different
});

///////////////////////////////////
let inputCuponValue = "";

///////////////////////////////////
function handleCardClk(clickedElement) {
  ////////////////////////////////////////

  // access the product name what i clicked
  const productName = clickedElement.childNodes[3].childNodes[3].innerText;

  // create a li to append ul container
  let li = document.createElement("li");

  // added a tailwind class to style
  li.classList.add("font-medium");

  // set the number of the product and product name
  li.innerHTML = `${productsCount}. ${productName}`;

  // insert the li child to container
  productNameContainer.appendChild(li);

  // incress the child count of the ul continer
  productsCount = productsCount + 1;

  // access the product single price
  const productPrice =
    clickedElement.childNodes[3].childNodes[5].childNodes[0].innerText / 1;

  // calculate the total price
  totalPrice = totalPriceContainer.innerText / 1 + productPrice;

  // set the total price value to the dom
  totalPriceContainer.innerText = totalPrice;
  totalContainer.innerText = totalPrice;

  // for active apply btn if total price > 200 tk
  if (totalPrice >= 200) {
    // active the cupon apply btn
    cuponBtn.disabled = false;
  }
}

function handleCuponInp() {
  // set the cupon value to variable
  inputCuponValue = cuponInputField.value;
  ////////////////////////

  // check total price > 200 or not
  if (200 <= totalPrice) {
    // check the cupon is SELL00 or not
    if ("SELL200" === inputCuponValue) {
      // give discount
      const discount = (totalPrice * 20) / 100;

      discountPriceContainer.innerText = discount;

      let discountedPrice = totalPrice - discount;
      totalContainer.innerText = discountedPrice;
    }
  }
}

function handleMakePurchase() {
  my_modal_2.showModal();

  productNameContainer.innerHTML = ``;
  totalPriceContainer.innerText = 0;
  discountPriceContainer.innerText = 0;
  totalContainer.innerText = 0;
  cuponInputField.value = "";
  cuponBtn.disabled = false;
}

// function goHomeBtn() {
//   console.log("oky");
// }
