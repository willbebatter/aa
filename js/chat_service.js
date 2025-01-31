document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.getElementById("hs-web-sdk-iframe");
    document.getElementById('floating-icon').onclick = function () {
        chatbox.style.display = chatbox.style.display === 'none' ? 'block' : 'none';
    };
});