import {cart,calculateCartQuantity} from '../../data/cart.js'
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';
export function renderPaymentSummary(){
    let productPriceRuppes=0;
    let shippingPriceRuppes=0;
    //we want product that is in the cart ,we loop through the cart and by useing 
    //getProduct function ti select the product and return product so we accsess the cost 
         cart.forEach((cartItem)=>{
        const product=getProduct(cartItem.productId);
        //after we get the cost and we * with quatity of those items
        productPriceRuppes+=product.priceRuppes*cartItem.quantity;
        //we need delivery cost also so have to find
        //  the delivery itedetails using the cartItem.deliveryOption in cart
        const deliveryItem=getDeliveryOption(cartItem.deliveryOptionId);
        shippingPriceRuppes+= deliveryItem.priceRuppes;
     });
     //calculations based on the payment details
     const totalbeforeTaxRuppes= productPriceRuppes+shippingPriceRuppes
     const taxRuppes=totalbeforeTaxRuppes*0.1;
     const totalRuppes=totalbeforeTaxRuppes+taxRuppes;



     //above is completed code for your use//we complete **model**
     const paymentSummaryHTML=`
                    <div class="payment-summary-title">
                         Order Summary
                         </div>

                         <div class="payment-summary-row">
                         <div class="js-items-inCart"></div>
                         <div class="payment-summary-money">$${formatCurrency(productPriceRuppes)}</div>
                         </div>

                         <div class="payment-summary-row">
                         <div>Shipping &amp; handling:</div>
                         <div class="payment-summary-money">${formatCurrency(shippingPriceRuppes)}</div>
                         </div>

                         <div class="payment-summary-row subtotal-row">
                         <div>Total before tax:</div>
                         <div class="payment-summary-money">$${formatCurrency(totalbeforeTaxRuppes)}</div>
                         </div>

                         <div class="payment-summary-row">
                         <div>Estimated tax (10%):</div>
                         <div class="payment-summary-money">$${formatCurrency(taxRuppes)}</div>
                         </div>

                         <div class="payment-summary-row total-row">
                         <div>Order total:</div>
                         <div class="payment-summary-money">$${formatCurrency(totalRuppes)}</div>
                         </div>

                         <button class="place-order-button button-primary">
                         Place your order
                         </button>
     `;

//above :we complet the view state

//last is controller 
document.querySelector(".js-payment-summary").innerHTML=paymentSummaryHTML;

const totalQuantity=calculateCartQuantity();
document.querySelector(".js-items-inCart").innerHTML=`Items (${totalQuantity}):`;

}
