//understand:if you are add more no. of products then HTML code can be more bigger,to solve this problem ,we have to use the js then dynamically generate products
//steps
//save the data in html
//in  js generate ythe html
//make it intractive using DOM
//           for intractive=>1.combine this html together 2.put it on the website
//we use array to store list of products and inside array we use objects to save multiple types
const products=[
    {
        image:"images/products/intermediate-composite-basketball.jpg",
        name:" Black and Gray Athletic Cotton Socks - 6 Pairs",
        rating:{
            stars:4.5,
            count:87,
        },
        priceRuppes:972
    },
    {
        image:"images/products/intermediate-composite-basketball.jpg",
        name:" Intermediate Size Basketball",
        rating:{
            stars:4,
            count:127,
        },
        priceRuppes:1800
    },
     {
        image:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
        name:"Adults Plain Cotton T-Shirt - 2 Pack",
        rating:{
            stars:4.5,
            count: 56,
        },
       priceRuppes:680
    },
]

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

                <button class="add-to-cart-button button-primary">
                    Add to Cart
                </button>
                </div>
`;
});


document.querySelector(".js-product-grid").innerHTML=productHtml;

