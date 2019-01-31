// Detecting touch from https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/

let wholePage = document.querySelector('.message-for-touch');

function messageForTouchDevices() {
    if (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0)) {
      /* browser with either Touch Events or Pointer Events running on touch-capable device */
        wholePage.style.display = 'block';
}
}
window.addEventListener('load', messageForTouchDevices);
