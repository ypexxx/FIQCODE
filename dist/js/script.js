// hamburger button
const hamburger = document.querySelector('#hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
});




// stream section
const stream = document.querySelector('#stream');


// schedule
// schedule1
const schedule1 = document.querySelector('#schedule1');
schedule1.addEventListener('click', function() {
    stream.setAttribute('src', 'https://channeltvvivasport.blogspot.com/2024/07/tnt-sport-1.html');
});

// schedule2
const schedule2 = document.querySelector('#schedule2');
schedule2.addEventListener('click', function() {
    stream.setAttribute('src', 'https://channeltvvivasport.blogspot.com/2024/08/tntsport2.html');
});

// schedule3
const schedule3 = document.querySelector('#schedule3');
schedule3.addEventListener('click', function() {
    stream.setAttribute('src', 'https://zeeplayer.pages.dev/tv/arena1p?id=arena1p&type=m');
});

// schedule4
const schedule4 = document.querySelector('#schedule4');
schedule4.addEventListener('click', function() {
    stream.setAttribute('src', 'https://zeeplayer.pages.dev/tv/arena2p?id=arena1p&type=m');
});

// schedule5
const schedule5 = document.querySelector('#schedule5');
schedule5.addEventListener('click', function() {
    stream.setAttribute('src', 'https://zeeplayer.pages.dev/tv/arena3p?id=arena1p&type=m');
});
