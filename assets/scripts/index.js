let nav_box = document.querySelector(".navigation-box");
let links = nav_box.querySelectorAll(".link");

// CODE UNTUK ACTIVE MENU SAAT KAMU MENG KLIK NYA
// links.forEach(link => {
//     link.addEventListener("click", function(){
//         let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
        
//         let current_title = document.getElementsByClassName("active-title");
//         current_title[0].className = current_title[0].className.replace(" active-title", "");
//         this.querySelector(".title").className += " active-title"
//     });
// });

// CODE UNTUK ACTIVE MENU SAAT KAU KLIK DAN ACTIVE SAAT BERADA DI SECTION NYA SAAT DI SCROLL
const articles = document.querySelectorAll("article");
let titles = document.querySelectorAll(".title")

function active_menu() {
    let articles_length = articles.length;
    while(--articles_length && window.scrollY < articles[articles_length].offsetTop){}
    links.forEach(ltx => ltx.classList.remove("active"));
    links[articles_length].classList.add("active");

    titles.forEach(ltx => ltx.classList.remove("active-title"));
    titles[articles_length].classList.add("active-title");
}
active_menu();
window.addEventListener("scroll", active_menu)

// AOS LIBRARY FOR ANIMATE SCROLL
AOS.init();