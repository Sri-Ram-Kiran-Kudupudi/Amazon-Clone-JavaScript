
let productHtml='';
products.forEach((product)=>{
    productHtml+=`
    <div class="product-container">
        <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
        </div>
        <div class="product-name">
           ${product.name}
        </div>
        <div class="product-rating-container">
             <img class="product-rating-stars" src="images/ratings/rating-${product.rating.stars*10}.png" alt="">
             <div class="product-rating-count">${product.rating.count}</div>
        </div>
        <div class="product-price">
            ${product.priceRuppes}rs/-
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
        
        <div class="Add-to-cart">
            <button class="Add-to-cart-button js-add-to-cart">Add to Cart</button>
        </div>
    </div>
    
    `;
})
document.querySelector(".js-products-grid").innerHTML=productHtml;



document.querySelectorAll(".js-add-to-cart")
.forEach((button)=>{
    button.addEventListener('click',()=>{
        console.log(button);
    })
})