

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

// Script to show/hide reviews
document.addEventListener('DOMContentLoaded', () => {
    const toggleReviewContent = () => {
        const reviews = document.querySelectorAll('.review-item');
        reviews.forEach((review, index) => {
            if (index > 2) { // Show only 3 reviews initially
                review.style.display = 'none';
            }
        });

        const reviewButton = document.createElement('button');
        reviewButton.textContent = "Show more reviews";
        reviewButton.classList.add('show-more-btn');
        document.querySelector('.reviews-section').appendChild(reviewButton);

        reviewButton.addEventListener('click', () => {
            reviews.forEach(review => {
                review.style.display = 'block';
            });
            reviewButton.style.display = 'none';
        });
    };

    toggleReviewContent();
});

document.addEventListener('DOMContentLoaded', () => {
    const reviewDropdownToggle = document.querySelector('#reviewDropdownToggle');
    const reviewDropdown = document.querySelector('#reviewDropdown');

    // Toggle dropdown visibility on arrow click
    reviewDropdownToggle.addEventListener('click', () => {
        console.log("test");
        
        reviewDropdown.style.display = reviewDropdown.style.display === 'none' ? 'block' : 'none';
    });

    // Optional: Close the dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.reviews-summary')) {
            reviewDropdown.style.display = 'none';
        }
    });
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





