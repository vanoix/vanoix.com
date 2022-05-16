require('./app.scss');

let main = document.getElementById('main-menu');
let list = document.getElementById('responsive-list');
let closeButton = document.getElementById('close-button');

let closeAction = ['opacity-0', 'scale-95', 'hidden'];
let openAction = ['opacity-100', 'scale-100', 'shown'];

function hide() {
  if(list.classList.contains('shown')) {
    list.classList.remove(...openAction);
    list.classList.add(...closeAction);
  }
}

function show() {
  if(list.classList.contains('hidden')) {
    list.classList.remove(...closeAction);
    list.classList.add(...openAction);
  }
}

document.addEventListener("DOMContentLoaded", function(event) {
  main.onclick = function() { show(); }
  closeButton.onclick = function() { hide(); }
});
