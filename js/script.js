// تهيئة Swiper لقسم Categories

var categoriesSwiper = new Swiper('.products-swiper', {
    slidesPerView:7, // عرض 4 صور في كل مرة
    spaceBetween: 0, // المسافة بين الصور
    navigation:false,
    loop: true, // لجعل التمرير مستمر
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.product-next',
        prevEl: '.product-prev',
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
    slidesPerView:1, // عرض 4 صور في كل مرة
    spaceBetween: 0, // المسافة بين الصور
    navigation:false,
    loop: true, // لجعل التمرير مستمر
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.larg-next',
        prevEl: '.larg-prev',
    },
    autoplay: {
        delay: 3000, // التأخير بين التمريرات
        disableOnInteraction: false, // يستمر التشغيل التلقائي حتى بعد التفاعل
    },
 
});

var categoriesSwiper = new Swiper('.category-swiper', {
    slidesPerView:5, // عرض 4 صور في كل مرة
    spaceBetween: 30, // المسافة بين الصور
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    // loop: false, // لجعل التمرير مستمر
    // autoplay: {
    //     delay: 3000, // التأخير بين التمريرات
    //     disableOnInteraction: false, // يستمر التشغيل التلقائي حتى بعد التفاعل
    // },
    navigation: {
        nextEl: '.swiper-button-next', // ربط السهم لليمين
        prevEl: '.swiper-button-prev'  // ربط السهم لليسار
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
    slidesPerView: 7, // عرض 4 صور في كل مرة
    spaceBetween: 30, // المسافة بين الصور

    loop: false, // لجعل التمرير مستمر
    // autoplay: {
    //     delay: 3000, // التأخير بين التمريرات
    //     disableOnInteraction: false, // يستمر التشغيل التلقائي حتى بعد التفاعل
    // },
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
    slidesPerView: 1, // عدد الشرائح الظاهرة في كل مرة
    spaceBetween: 30, // المسافة بين الشرائح
    loop: false, // لجعل التمرير مستمر
   
    navigation: {
        nextEl: '.delevery-swiper-next', // سهم لليمين
        prevEl: '.delevery-swiper-prev'  // سهم لليسار
    },
 
});

// الحصول على الزر
const scrollToTopButton = document.getElementById("scrollToTop");

// إظهار الزر عند التمرير لأسفل
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
};

// التمرير إلى الأعلى عند النقر على الزر
scrollToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // لجعل التمرير سلسًا
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
// الحصول على جميع عناصر الأكورديون
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.nextElementSibling;

        // التبديل بين إضافة وإزالة الفئة 'active' للمحتوى
        content.classList.toggle('active');

        // التبديل بين إضافة وإزالة الفئة 'open' للعنوان (للسهم)
        this.classList.toggle('open');
    });
});
