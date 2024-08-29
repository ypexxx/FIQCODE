// hamburger button
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
});

//adsterra link
const button = document.querySelector('#ads-btn');

button.addEventListener('click', function() {
    window.open('https://www.cpmrevenuegate.com/fbmcre2rey?key=2d4a6c477a55837d9f6d4d43f79ca38f');
    button.remove();
});

// share button
const content = "https://fiqbola.vercel.app/";

document.querySelector('#whatsapp-button').addEventListener('click', function() {
    let whatsappURL = "https://api.whatsapp.com/send?text"+(content);
    window.location.href = whatsappURL;
})