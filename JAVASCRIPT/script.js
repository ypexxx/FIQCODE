//seleksi kelas menu
const menu = document.querySelector(".menu");

//ketika hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = () => {
    menu.classList.toggle("active");
}

//klik dimana saja untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !menu.contains(e.target)) {
        menu.classList.remove("active");
    }
});

