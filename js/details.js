

const quantityInput = document.getElementById('quantity');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

incrementButton.addEventListener('click', () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
});

decrementButton.addEventListener('click', () => {
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
});


const modal = document.getElementById('reviewModal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.getElementById('closeModal');
const stars = document.querySelectorAll('#starRating i');

document.addEventListener('DOMContentLoaded', function() {
   
    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    });


});
stars.forEach(star => {
    star.addEventListener('click', function() {
        star.classList.add('selected');
    });
});





