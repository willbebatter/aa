// 获取需要的元素
const targetDiv = document.getElementById('target');
const video = targetDiv.querySelector('video');
const svg = targetDiv.querySelector('svg');

let controlsAdded = false;

// 为 targetDiv 添加点击事件监听器
targetDiv.addEventListener('click', function() {
    if (!controlsAdded) {
        video.setAttribute('controls', 'controls');
        controlsAdded = true;
    }
});

video.addEventListener('play', function() {
    svg.classList.add('hidden');
    targetDiv.classList.remove('u-video-hover');
});

function showSvg() {
    svg.classList.remove('hidden');
    targetDiv.classList.add('u-video-hover');
}

video.addEventListener('pause', showSvg);
video.addEventListener('ended', showSvg);
