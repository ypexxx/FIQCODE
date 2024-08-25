// hamburger button
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
});

//adsterra link
const button = document.querySelector('#ads-btn');

button.addEventListener('click', function() {
    window.open('https://www.cpmrevenuegate.com/jr4nuy91ie?key=5b18099765777c733cde7aa3fd1ff4de');
    button.remove();
});

