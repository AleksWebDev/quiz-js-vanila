const cards = document.querySelectorAll('.plate');

let currentIndex = 0;
let currentCard = 0;

cards.forEach(item => {
    item.classList.remove('visible');
})

cards[0].classList.add('visible');

updateProgressBar();

window.addEventListener('click', function(e){

    if(e.target.closest('[data-nav="next"]')){

        const answers = cards[currentIndex].querySelector('[data-answers]');

        let res = checkAnswer(cards[currentIndex]);

        if(res){
            updateProgressBar('next')
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
        updateProgressBar('prev')
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


function updateProgressBar(direction = 'start'){
    
    if(direction === 'next'){
        currentCard = currentCard + 1;
    }else if(direction === 'prev'){
        currentCard = currentCard - 1;
    }

    const progressLabel = document.querySelectorAll('.progress__label strong');
    const progressLineBar = document.querySelectorAll('.progress__line-bar');

    const countableCards = document.querySelectorAll('[data-progress]');

    let progressVal = Math.round(currentCard * 100 / (countableCards.length));

    progressLabel.forEach(function(item){
        item.innerHTML = progressVal + '%'
    })

    progressLineBar.forEach(function(item){
        item.style.width = progressVal + '%'
    })
}

//Phone mask
mask('#tel');

const submitForm = document.querySelector('#submitForm');
const tel = document.querySelector('#tel');

submitForm.onclick = function(){
    if(tel.value === '+' || tel.value.length < 6){
        tel.value = '';
    }
}


const checkboxPolicy = document.querySelector('#policy');

checkboxPolicy.addEventListener('focus', function(){
    console.log('focus');
})

checkboxPolicy.addEventListener('blur', function(){
    console.log('blur');
})