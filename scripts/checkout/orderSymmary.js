import {cart,removeFromCart, calculateCartQuantity,updateDeliveryOption,updateQuantity} from '../../data/cart.js';
import {getProduct} from '../../data/products.js';
import {formatCurrency} from '../utils/money.js';
//import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js'
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'
import {deliveryOptions,getDeliveryOption} from '../../data/deliveryOptions.js'
import { renderPaymentSummary } from './paymentSymmary.js';
import {renderCheckoutHeader} from './checkoutHeader.js'
export function renderOrderSummary(){
let cartSummeryHtml='';

//in ordersummary we print all the cart details
//so first loop through the each cart Item 
    cart.forEach((cartItem)=>{
    let productId=cartItem.productId;//take id of that cart
     const matchingItem=getProduct(productId);//pass as a argument to get the that orignal product datils
//getProduct() return the product of all details
//we get that product

const deliveryOptionId=cartItem.deliveryOptionId;//take delivary id of that product
const deliveryOption=getDeliveryOption(deliveryOptionId)//use that id to get the deliveryOption
//so we use delivery days 

const today=dayjs();//todays date
const deliveryDate=today.add(
deliveryOption.deliveryDays,'days') ;//changign the delivery days
const dateString = deliveryDate.format('dddd, MMMM D');//convert into format

//below html code for the orderSymmary 

   cartSummeryHtml+= ` <div class="cart-item-container js-cart-item-container-${matchingItem.id}">
            <div class="delivery-date">
              Delivery date:${dateString}
            </div>

            <div class="cart-item-details-grid">
              <img class="product-image"
                src="${matchingItem.image}">

              <div class="cart-item-details">
                <div class="product-name">
                 $${matchingItem.name}
                </div>
                <div class="product-price">
                  ${formatCurrency(matchingItem.priceRuppes)}
                </div>
                <div class="product-quantity">
                  <span>
                      <!-- This code was copied from the solutions of exercises 14f - 14n. -->
                Quantity: <span class="quantity-label js-quantity-label-${matchingItem.id}">${cartItem.quantity}</span>
                  </span>
                    <span class="update-quantity-link link-primary js-update-link"
                data-product-id="${matchingItem.id}">
                    Update
                  </span>
                      <input class="quantity-input js-quantity-input-${matchingItem.id}">
              <span class="save-quantity-link link-primary js-save-link"
                data-product-id="${matchingItem.id}">
                Save
              </span>
                  <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingItem.id}">
                    Delete
                  </span>
                </div>
              </div>

              <div class="delivery-options">
                <div class="delivery-options-title">
                  Choose a delivery option:
                </div>
                 ${deliveryOptionsHTML(matchingItem,cartItem)}
              </div>
            </div>
          </div>
     `;

});

function deliveryOptionsHTML(matchingItem,cartItem){
  let  html='';
  deliveryOptions.forEach((deliveryOption)=>{
        const today=dayjs();
        const deliveryDate=today.add(
          deliveryOption.deliveryDays,'days') ;
        const dateString = deliveryDate.format('dddd, MMMM D');
      const priceString =deliveryOption.priceRuppes===0?'FREE':`$${formatCurrency(deliveryOption.priceRuppes)} -`



          const isChecked=deliveryOption.id===cartItem.deliveryOptionId
             html+=`<div class="delivery-option js-delivery-option"
             data-product-id="${matchingItem.id}"
             data-delivery-option-id="${deliveryOption.id}">
                  <input type="radio" 
                   ${isChecked ?'checked':''}
                    class="delivery-option-input"
                    name="delivery-option-${matchingItem.id}">
                  <div>
                    <div class="delivery-option-date">
                      ${dateString}
                    </div>
                    <div class="delivery-option-price">
                      ${priceString} Shipping
                    </div>
                  </div>
                </div>
    `

      });
    return html;
}

document.querySelector(".js-order-summary").innerHTML=cartSummeryHtml;

document.querySelectorAll(".js-delete-link")//select each delete link 
.forEach((link)=>{
    link.addEventListener('click',()=>{//whenever click the delete button
//above 3 lines specify each button wen click ***below actions are prfomed***
       const productId=link.dataset.productId;//use the id of that product pass from the dataset
       removeFromCart(productId);//remove the product from cart

       //delte that prodcut from the page
       //below code specifys when we click delet buttom
       //it will remove from page
       //so first use dom to select the ""conatianer"" then remove from it using method remove()
       //--->
      //  let container=document.querySelector(`.js-cart-item-container-${productId}`)
      // container.remove();

      //above 2 lines code and below is same

      renderOrderSummary()
      renderPaymentSummary();
       //below is used for update checkBox
       updateCartQuantity();
    })
})


//this function used to tack the products quantity 
  function updateCartQuantity(){
       let cartQuantity=calculateCartQuantity();
       //update in checkOut page 
document.querySelector(".js-return-to-home-link").innerHTML=`${cartQuantity} items`;
}


document.querySelectorAll(".js-delivery-option")
.forEach((element)=>{
  element.addEventListener('click',()=>{
    const {productId,deliveryOptionId}=element.dataset;
    updateDeliveryOption(productId,deliveryOptionId);
    renderPaymentSummary();
    renderOrderSummary();
  })
});

 // This code was copied from the solutions of exercises 14f - 14n.
  document.querySelectorAll('.js-update-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.classList.add('is-editing-quantity');
      });
    });

  document.querySelectorAll('.js-save-link')
    .forEach((link) => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        const container = document.querySelector(
          `.js-cart-item-container-${productId}`
        );
        container.classList.remove('is-editing-quantity');

        const quantityInput = document.querySelector(
          `.js-quantity-input-${productId}`
        );
        const newQuantity = Number(quantityInput.value);
        updateQuantity(productId, newQuantity);

        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();

        // We can delete the code below (from the original solution)
        // because instead of using the DOM to update the page directly
        // we can use MVC and re-render everything. This will make sure
        // the page always matches the data.

        // const quantityLabel = document.querySelector(
        //   `.js-quantity-label-${productId}`
        // );
        // quantityLabel.innerHTML = newQuantity;

        // updateCartQuantity();
      });
    });
}

