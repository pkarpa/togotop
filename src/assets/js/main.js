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

const tarifsBtns = document.querySelectorAll("[data-tarifs-btn]");
const tarifsBlocks = document.querySelector("[data-tarifs-blocks]");

if(tarifsBtns.length){
    for(let i = 0; i<tarifsBtns.length; i++){
        tarifsBtns[i].addEventListener("click", e=>{
            for(let j = 0; j < tarifsBtns.length; j++){
                tarifsBtns[j].classList.remove("active");
            }

            tarifsBlocks.classList.remove("combo");
            tarifsBlocks.classList.remove("redemption");
            tarifsBlocks.classList.remove("feedback");

            tarifsBtns[i].classList.add("active");

            if(tarifsBtns[i].dataset.tarifsBtn === "1"){
                tarifsBlocks.classList.add("combo");
            }
            else if(tarifsBtns[i].dataset.tarifsBtn === "2"){
                tarifsBlocks.classList.add("redemption");
            }
            else{
                tarifsBlocks.classList.add("feedback");
            }
        })
    }
}


