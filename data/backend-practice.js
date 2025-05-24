const xhr=new XMLHttpRequest();

//response are takes some times but .send() is not wait
//so, in order to wait for response 
//we use addEvenet Listener
xhr.addEventListener('load',()=>{
    xhr.response;
})
xhr.open('GET','https://supersimplebackend.dev')

xhr.send();//asynchrunus not wait for resupomse
