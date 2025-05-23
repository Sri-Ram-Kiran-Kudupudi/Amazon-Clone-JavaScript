
//below is the array that contains 3 different opitons for the custor to select the ''deliveriDate''
export const deliveryOptions=[
    {
        id:'1',
        deliveryDays:7,
        priceRuppes:0
    },
    {
        id:'2',
        deliveryDays:3,
        priceRuppes:550
    },
    {
        id:'3',
        deliveryDays:1,
        priceRuppes:870
    },

]


//below is funciton ,we have to pass deliveryOptionId [taken from the cart].
//functionality:it use parameter fetch the deliveryOption using forEach loop[compare those two  ids]
//if no matching delivoryoption is found then you return first option
export function getDeliveryOption(deliveryOptionId){
let deliveryOption;
deliveryOptions.forEach((option)=>{
  if(option.id===deliveryOptionId){
    deliveryOption=option
  }
});
return deliveryOption ||deliveryOptions[0];
}