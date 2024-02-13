const submit = document.getElementById('submit');
const main = document.getElementById('main');
const thanks = document.getElementById('thanks');

const voteResults = document.getElementById('voteResult');
var number = document.querySelectorAll('.number');


number.forEach((rate) => {
    rate.addEventListener("click", () => {
        voteResults.innerHTML = rate.innerHTML;
    })
});

submit.addEventListener("click", () => {
    
    if (document.querySelector('.number.orange')) {
        thanks.classList.remove("hidden");
        main.classList.add("hidden");
    }
    else {
        Swal.fire({
            width: '30em',
            title: 'Select a Number Before Submitting',
            text: 'Your feedback is important to us. Please choose a rating before submitting to help us improve our services. Thank you for taking the time to share your opinion.',
            icon: 'info',
            background: 'hsl(213, 18%, 22%)',
            color: '#FFFFFF',
            confirmButtonColor: 'hsl(25, 97%, 53%)'
        })
    }
});


function orangeColor() {

    var allNumbers = document.querySelectorAll(".number");
    for (var i = 0; i < allNumbers.length; i++) {
        allNumbers[i].classList.remove('orange');
    }

    this.classList.toggle("orange");
}

for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', orangeColor);
}