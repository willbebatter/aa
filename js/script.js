document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance;

    // Function to initialize Swiper
    function initializeSwiper() {
        // Destroy the existing Swiper instance if it exists
        if (swiperInstance && typeof swiperInstance.destroy === 'function') {
            swiperInstance.destroy(true, true);
        }

        // Check if Swiper is already defined and create a new instance
        if (typeof Swiper !== 'undefined') {
            swiperInstance = new Swiper('.swiper-container', {
                // direction: 'vertical',
                // slidesPerView: 1,
                spaceBetween: 30,
                mousewheel: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                autoplay: {
                    delay: 6000,
                    disableOnInteraction: false,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                },
            });

            // Force a reflow/repaint to ensure Swiper works
            setTimeout(() => {
                document.querySelector('.swiper-container').style.transform = 'translateZ(0)';
            }, 100);
        }
    }

    // Initialize Swiper on page load
    initializeSwiper();

    iFrameResize({
        log: false, // 禁用日志
        checkOrigin: false, // 根据实际情况设置
        heightCalculationMethod: 'heightCalculationMethod', // 选择合适的高度计算方法
        autoResize: true,
        resizeFrom: 'child', // 允许子页面触发调整
    }, '#content-frame');
    // }, '#content-frame, #modal-frame');

    // Adjust iframe height dynamically and reinitialize Swiper when iframe content loads
    document.getElementById('content-frame').onload = function() {
        const iframe = document.getElementById('content-frame');
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';

        // Re-initialize Swiper when iframe content loads
        initializeSwiper();
    };

    // Adjust iframe height dynamically and reinitialize Swiper when iframe content loads
    document.getElementById('modal-frame').onload = function() {
        const iframe = document.getElementById('modal-frame');
        iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        // Re-initialize Swiper when iframe content loads
        initializeSwiper();
    };
    function showAD() {
        document.getElementById('modal').style.display = 'flex';
        document.getElementById('modal-frame').src = "discountsAD.html";
    }

    setTimeout(showAD, 8000);
});
