class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.loadHeader();
    }

    async loadHeader(retries = 3) {
        try {
            const response = await fetch('/header.html');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.text();
            this.innerHTML = data;
            initializeNavbar();
            loadMessages();
        } catch (error) {
            console.error('Error loading header:', error);
            if (retries > 0) {
                console.log(`Retrying... (${3 - retries + 1})`);
                setTimeout(() => this.loadHeader(retries - 1), 1000); // Retry after 1 second
            }
        }
    }
}

customElements.define('header-component', HeaderComponent);


// Your existing initialization functions
function initializeNavbar() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const type = item.getAttribute('data-type');
            if (type === 'subpage') {
                navItems.forEach(nav => nav.classList.remove('selected'));
                const content = document.getElementById('content-frame')
                content.src = item.getAttribute('href');
                content.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                item.classList.add('selected');
            } else if (type === 'modal') {
                document.getElementById('modal').style.display = 'flex';
                document.getElementById('modal-frame').src = item.getAttribute('href');
            } else if (type === 'newtab') {
                window.open(item.getAttribute('href'), '_blank');
            }
        });
    });
}

function loadMessages() {
    fetch('/messages.txt')
        .then(response => response.text())
        .then(data => {
            const messages = data.split('\n').filter(msg => msg.trim() !== '');
            const messagesList = document.getElementById('messages-list');
            messages.forEach(message => {
                const li = document.createElement('li');
                li.textContent = message;
                messagesList.appendChild(li);
            });
        })
        .catch(error => console.error('Error loading messages:', error));
}
