import {addToCart,cart,loadFromLocalStorage} from '../../data/cart.js'
describe("test suite:Add to cart",()=>{

     //add existing product
     it("add a exisiting product to the cart",()=>{
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([
                {
                    productId:"77919bbe-0e56-475b-adde-4f24dfed3a04",
                    quantity:1,
                   deliveryOptionId:'1',
                }
            ]);
        });
         loadFromLocalStorage();
          addToCart("77919bbe-0e56-475b-adde-4f24dfed3a04");
         expect(localStorage.setItem).toHaveBeenCalledTimes(1);
         expect(cart[0].productId).toEqual("77919bbe-0e56-475b-adde-4f24dfed3a04");
         expect(cart[0].quantity).toEqual(2);
         expect(cart.length).toEqual(1)
     });
      it("add a new product to the cart",()=>{
            //order matters
        spyOn(localStorage,'setItem');
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        })
        loadFromLocalStorage();
            addToCart("77919bbe-0e56-475b-adde-4f24dfed3a04");
            expect(cart.length).toEqual(1);
            expect(localStorage.setItem).toHaveBeenCalledTimes(1);
     });
});