export const cart=[];



export function addToCart(productId){
     //below code is for the quantity increment or 1
    let matchingItem;
    cart.forEach((cartItem)=>{
        if(productId===cartItem.productId){
          matchingItem=cartItem;
        }
    })
    if(matchingItem){
        matchingItem.quantity+=1;
    }else{
        cart.push({
        productId:productId,
        quantity:1
        });
    }
}