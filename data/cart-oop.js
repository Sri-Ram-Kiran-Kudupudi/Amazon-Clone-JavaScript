
function Cart(localStorageKey){
  const cart={
        cartItems:undefined,
        loadFromLocalStorage(){
                this.cartItems=JSON.parse(localStorage.getItem('localStorageKey'))||[{
                productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                quantity:2,
                deliveryOptionId:'1',
            },
            {
                productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
                deliveryOptionId:'3',
            }
            ];
            },
            saveToStorage(){
               localStorage.setItem('localStorageKey',JSON.stringify(this.cartItems));//save cart in LS
             },
            addToCart(productId){
                //below code is for the quantity increment or 1
                let matchingItem;
                this.cartItems.forEach((cartItem)=>{  //first loop through the cart
                    if(productId===cartItem.productId){//check product is in cart or not
                    matchingItem=cartItem;//if exist,then use that product inside the cart
                    }
                })
                if(matchingItem){//if cart produIt is matches to product id  [that means product already exist] it will return TRUE
                    matchingItem.quantity+=1;//so increment the quantity of cartItem
                }else{
                    //if not,then push the new product to the cart
                    this.cartItems.push({
                    productId:productId,
                    quantity:1,
                    deliveryOptionId:'1',
                    });
                }
                this.saveToStorage()//makes sure thenever update the cart save in api
              },
        removeFromCart(productId){
            const newCart=[];
            this.cartItems.forEach((cartItem)=>{
                if(cartItem.productId!==productId){//all the products except the remove product is stored in the new array
                    newCart.push(cartItem)
                }
                })
            this.cartItems=newCart;//then save in the cart
            this.saveToStorage();//save in api
         },
          calculateCartQuantity (){
          let cartQuantity=0;
          this.cartItems.forEach((cartItem)=>{
              cartQuantity+=cartItem.quantity;
          });
          return cartQuantity;
           },
      updateDeliveryOption(productId,deliveryOptionId){
         let matchingItem;
          //normally we have a doubt,why we loop through the cart
          //because, cartItem(product) contains the delivaryId [use that id to change the delivary]
        this.cartItems.forEach((cartItem)=>{//loop through the cart
            if(productId===cartItem.productId){//if cart cantains that product 
              matchingItem=cartItem;//take that product
            }
         })
        //simply cahnge the cart delivery date[so it it perminantly store in the cart]  "every where it will display same date"
        matchingItem.deliveryOptionId=deliveryOptionId;
          this.saveToStorage();
           },

     updateQuantity(productId, newQuantity) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });

  matchingItem.quantity = newQuantity;
  this.saveToStorage();//
}



}
return cart;
}
 const cart=Cart('cart-oop');
 const businessCart=Cart('cart-business');
cart.loadFromLocalStorage()
cart.addToCart("77919bbe-0e56-475b-adde-4f24dfed3a04")
businessCart.loadFromLocalStorage()
businessCart.addToCart("77919bbe-0e56-475b-adde-4f24dfed3a04")
console.log(cart);
console.log(businessCart);
//calstorage  is a api, we simply used to store data in some amount of time
//in this project we are storing the cart [here first you store when you initilize the cart then
//when ever we change the cart the also update using localStorage api

//also whenever we update the cart then we need to save it to localstorage


//below function used to increment the quantity or push the items into the cart

//remove product from the cart
//we pass products id as a parameter
//this function checks cartItem have that product



//we are simple loop through the cart 
//and and each quantity in the cart

//this function used for top right of amzon backet logo [i think]

//this function is used for [order summary right side radio buttons] 
//when we click the new radio button then change the data and time,... of above delivery menu also
//for this we use this.

// This code was copied from the solutions of exercises 14f - 14n.
