const cards = document.querySelectorAll('.plate');

let currentIndex = 0;
let currentCard = 0;

cards.forEach(item => {
    item.classList.remove('visible');
})

cards[0].classList.add('visible');


window.addEventListener('click', function(e){

    if(e.target.closest('[data-nav="next"]')){

        const answers = cards[currentIndex].querySelector('[data-answers]');

        let res = checkAnswer(cards[currentIndex]);

        if(res){
            setTimeout(function(){
                cards[currentIndex].classList.remove('visible');
                currentIndex = currentIndex + 1;
                cards[currentIndex].classList.add('visible');
                answers.classList.remove('required');
            }, 500)
        }else{
            answers.classList.add('required');
        }
    }

    if(e.target.closest('[data-nav="prev"]')){
        setTimeout(function(){
            cards[currentIndex].classList.remove('visible');
            currentIndex = currentIndex - 1;
            cards[currentIndex].classList.add('visible');
        }, 500)
    }
})


function checkAnswer(currentCard){
    const allRadio = currentCard.querySelectorAll('input[type="radio"]');

    if(allRadio.length > 0){
        for(let radio of allRadio){
            if(radio.checked === true){
                return true;
            }
        }
    }

    const allCheckbox = currentCard.querySelectorAll('input[type="checkbox"]')

    if(allCheckbox.length > 0){
        for(checkbox of allCheckbox){
            if(checkbox.checked === true){
                return true;
            }
        }
    }
}