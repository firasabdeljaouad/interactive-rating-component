const icon_star = document.querySelector(".icone_start");
const rating_cards = document.querySelector(".rating span");
const rate_point = document.querySelector(".rate");
const submit_button = document.querySelector(".submit_btn");
const rating_section = document.querySelector(".rating_section");
const think_section = document.getElementById("thank_section");


let rate = null;

rating_cards.forEach((rating_card) => {
    rating_card.addEventListener("click",(ele)=>{
        const active = document.querySelector('.checked');
        if(active){
            active.classList.remove("checked")
        }  
        const card =ele.target;
        card.classList.add("checked");
        rate = ele.target.innerText;
    });
  
});
submit_button.addEventListener('click',()=>{
    if(rate){
        rate_point.innerHTML=rate;
        rating_cards.classList.add('hidden');
        think_section.classList.remove('hidden')
    }
});


