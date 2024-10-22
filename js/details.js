

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
// تعريف المتغيرات في النطاق العام
const dropdownToggle = document.getElementById('reviewDropdownToggle');
const dropdownMenu = document.getElementById('reviewDropdown');

// دالة العرض/الإخفاء
// دالة لعرض وإخفاء القائمة المنسدلة
// document.addEventListener('DOMContentLoaded', function() {
//     const dropdownToggle = document.getElementById('reviewDropdownToggle');
//     const ratingDropdown = document.getElementById('reviewDropdown');
//     const openModalButton = document.getElementById('openModal');
//     const closeModalButton = document.getElementById('closeModal');
//     const modal = document.getElementById('reviewModal');
//     const stars = document.querySelectorAll('#starRating i');

//     dropdownToggle.addEventListener('click', function() {
//         ratingDropdown.classList.toggle('show');
//     });

//     // إغلاق الـdropdown عند النقر خارجها
//     window.addEventListener('click', function(event) {
//         if (!ratingDropdown.contains(event.target) && event.target !== dropdownToggle) {
//             ratingDropdown.classList.remove('show');
//         }
//     });

//     // فتح الموديل
//     openModalButton.addEventListener('click', function() {
//         modal.style.display = 'block';
//     });

//     // إغلاق الموديل
//     closeModalButton.addEventListener('click', function() {
//         modal.style.display = 'none';
//     });

//     // تحديد النجوم
//     stars.forEach(star => {
//         star.addEventListener('click', function() {
//             const value = this.getAttribute('data-value');

//             stars.forEach(s => {
//                 s.classList.remove('selected'); // إزالة التحديد من جميع النجوم
//             });
//             for (let i = 0; i < value; i++) {
//                 stars[i].classList.add('selected'); // تحديد النجوم حسب القيمة
//             }
//         });
//     });

//     // إغلاق الموديل عند النقر خارج المحتوى
//     window.addEventListener('click', function(event) {
//         if (event.target === modal) {
//             modal.style.display = 'none';
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('reviewModal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const stars = document.querySelectorAll('#starRating i');

    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', function() {
        modal.style.display = 'none';
        // إعادة تعيين النجوم عند إغلاق الموديل
        stars.forEach(star => {
            star.classList.remove('selected');
        });
    });

    stars.forEach(star => {
        star.addEventListener('click', function() {
            // إلغاء تحديد جميع النجوم
            stars.forEach(s => s.classList.remove('selected'));
            // تحديد النجوم حتى النجمة التي تم النقر عليها
            const value = parseInt(this.getAttribute('data-value'));
            for (let i = 0; i < value; i++) {
                stars[i].classList.add('selected');
            }
        });
    });
});





