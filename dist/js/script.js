// hamburger button
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
});

// share button
const link = encodeURI(window.document.location.href);
const msg = encodeURIComponent('njajallll');

const whatsapp = document.querySelector('#whatsapp-button');
const aaa = whatsapp.href = 'https://api.whatsapp.com/send?text=${msg}%20${link}';

console.log(link);