document.addEventListener('DOMContentLoaded', () => {
    const bgLeftElement = document.querySelector('.top-pic');
    if (bgLeftElement) {
        bgLeftElement.addEventListener('mouseenter', () => {
            bgLeftElement.classList.add('zoom-in');
        });

        bgLeftElement.addEventListener('mouseleave', () => {
            bgLeftElement.classList.remove('zoom-in');
        });
    }

    document.querySelector('.list-left').addEventListener('click', function() {
        const url = this.getAttribute('data-url');
        if (url) {
            const link = document.createElement('a');
            link.href = url;
            link.target = '_blank';
            // 对于某些浏览器，可能需要将链接添加到 DOM
            document.body.appendChild(link);
            link.click();
            // 点击后移除链接
            document.body.removeChild(link);
        }
    });

    const listRightItems = document.querySelectorAll('.list-right');
    listRightItems.forEach(function(element, index) {
        element.addEventListener('click', function() {
            const url = this.getAttribute('data-url');
            if (url) {
                const link = document.createElement('a');
                link.href = url;
                link.target = '_blank';
                // 对于某些浏览器，可能需要将链接添加到 DOM
                document.body.appendChild(link);
                link.click();
                // 点击后移除链接
                document.body.removeChild(link);
            }
        });
    });
});
