
var categoriesSwiper = new Swiper('.products-swiper', {
    slidesPerView:7, 
    spaceBetween: 0, 
    navigation:false,
    loop: true, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        1200: {
            slidesPerView: 7,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});
var largSwiper = new Swiper('.larg-swiper', {
    slidesPerView:1, 
    spaceBetween: 0, 
    navigation:false,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.larg-next',
        prevEl: '.larg-prev',
    },
    autoplay: {
        delay: 3000, 
        disableOnInteraction: false, 
    },
 
});

var categoriesSwiper = new Swiper('.category-swiper', {
    slidesPerView:5, 
    spaceBetween: 30, 
  
  
    navigation: {
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev'  
    },
    breakpoints: {
        1200: {
            slidesPerView: 5,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        }
    }
});
var brandsSwiper = new Swiper('.brands-swiper', {
    slidesPerView: 7, 
    spaceBetween: 30, 

    loop: false,

    navigation: {
        nextEl: '.brands-swiper-next',
        prevEl: '.brands-swiper-prev',
    },
    breakpoints: {
        1200: {
            slidesPerView: 6,
        },
        992: {
            slidesPerView: 5,
        },
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 3,
        },
        320: {
            slidesPerView: 2,
        }
    }
});
var deliverySwiper = new Swiper('.delevery-swiper', {
    slidesPerView:1,
    spaceBetween: 30, 
    loop: false, 
   
    navigation: {
        nextEl: '.delevery-swiper-next', 
        prevEl: '.delevery-swiper-prev'  
    },
 
});

const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
};
// Select all accordion titles
const accordionTitles = document.querySelectorAll('.accordion-title');

// Add click event to each accordion title
accordionTitles.forEach(title => {
    title.addEventListener('click', function () {
        // Get the parent accordion item
        const item = this.parentNode;

        // Toggle the "active" class to show or hide the content
        item.classList.toggle('active');

        // Close other accordion items if opened
        accordionTitles.forEach(otherTitle => {
            const otherItem = otherTitle.parentNode;
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        content.classList.toggle('active');

        this.classList.toggle('open');
    });
});
