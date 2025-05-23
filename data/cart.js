export let cart=JSON.parse(localStorage.getItem('cart'))||[{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
    deliveryOptionId:'1',
},
{
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
     deliveryOptionId:'3',
}
];
//localstorage  is a api, we simply used to store data in some amount of time
//in this project we are storing the cart [here first you store when you initilize the cart then
//when ever we change the cart the also update using localStorage api
function saveToStorage(){
    localStorage.setItem('cart',JSON.stringify(cart));//save cart in LS
}
//also whenever we update the cart then we need to save it to localstorage


//below function used to increment the quantity or push the items into the cart
export function addToCart(productId){
     //below code is for the quantity increment or 1
    let matchingItem;
    cart.forEach((cartItem)=>{  //first loop through the cart
        if(productId===cartItem.productId){//check product is in cart or not
          matchingItem=cartItem;//if exist,then use that product inside the cart
        }
    })
    if(matchingItem){//if cart produIt is matches to product id  [that means product already exist] it will return TRUE
        matchingItem.quantity+=1;//so increment the quantity of cartItem
    }else{
        //if not,then push the new product to the cart
        cart.push({
        productId:productId,
        quantity:1,
        deliveryOptionId:'1',
        });
    }
    saveToStorage()//makes sure thenever update the cart save in api
}

//remove product from the cart
//we pass products id as a parameter
//this function checks cartItem have that product

export function removeFromCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){//all the products except the remove product is stored in the new array
            newCart.push(cartItem)
        }
    })
cart=newCart;//then save in the cart
saveToStorage();//save in api
}


//we are simple loop through the cart 
//and and each quantity in the cart

//this function used for top right of amzon backet logo [i think]
export function  calculateCartQuantity (){
    let cartQuantity=0;
    cart.forEach((cartItem)=>{
        cartQuantity+=cartItem.quantity;
    });
    return cartQuantity;
}

//this function is used for [order summary right side radio buttons] 
//when we click the new radio button then change the data and time,... of above delivery menu also
//for this we use this.
export function updateDeliveryOption(productId,deliveryOptionId){
     let matchingItem;
       //normally we have a doubt,why we loop through the cart
       //because, cartItem(product) contains the delivaryId [use that id to change the delivary]
    cart.forEach((cartItem)=>{//loop through the cart
        if(productId===cartItem.productId){//if cart cantains that product 
          matchingItem=cartItem;//take that product
        }
    })
    //simply cahnge the cart delivery date[so it it perminantly store in the cart]  "every where it will display same date"
    matchingItem.deliveryOptionId=deliveryOptionId;
      saveToStorage();
}

// This code was copied from the solutions of exercises 14f - 14n.
export function updateQuantity(productId, newQuantity) {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;
  saveToStorage();//
}