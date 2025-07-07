const carts = document.querySelectorAll("[data-carts]");

if(carts.length){
    for(let i = 0; i < carts.length; i++){
        carts[i].addEventListener("click", e=> {
            for(let j = 0; j < carts.length; j++){
                carts[j].classList.remove("active");
            }
            carts[i].classList.add("active");
        })
    }
}