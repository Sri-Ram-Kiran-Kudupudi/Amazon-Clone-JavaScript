import {cart, addToCart} from '../data/cart.js';
// import {products} from '../data/products.js';

//understand:if you are add more no. of products then HTML code can be more bigger,to solve this problem ,we have to use the js then dynamically generate products
//steps
//save the data in html
//in  js generate ythe html
//make it intractive using DOM
//           for intractive=>1.combine this html together 2.put it on the website
//we use array to store list of products and inside array we use objects to save multiple types
//=======> array is piked from the data directory

//above array is called data structure
//we use arrays and objects to create data structures

//generate the html
let productHtml='';
products.forEach((product)=>{
    //combine all the html together
     //below var+= is called accumulator pattren
    productHtml +=`
        <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image"
                    src="${product.image}">
                </div>

                <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                </div>

                <div class="product-rating-container">
                    <img class="product-rating-stars"
                    src="images/ratings/rating-${product.rating.stars*10}.png">
                    <div class="product-rating-count link-primary">
                    ${product.rating.count}
                    </div>
                </div>

                <div class="product-price">
                    $${(product.priceRuppes/83).toFixed(2)}
                </div>

                <div class="product-quantity-container">
                    <select>
                    <option selected value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    </select>
                </div>

                <div class="product-spacer"></div>

                <div class="added-to-cart">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>

                <button class="add-to-cart-button button-primary  js-add-to-cart" data-product-id="${product.id}">
                    Add to Cart
                </button>
                </div>
`;

});


document.querySelector(".js-product-grid").innerHTML=productHtml;
//make it interactive
function updateCartQuantity(){
    let cartQuantity=0;
    cart.forEach((cartItem)=>{
        cartQuantity+=cartItem.quantity;
    });
document.querySelector(".js-cart-quantity").innerHTML=cartQuantity;
}



document.querySelectorAll(".js-add-to-cart")
  .forEach((button)=>{
button.addEventListener('click',()=>{
    const productId=button.dataset.productId;
addToCart(productId);
updateCartQuantity();

});


});
