// NAVBAR ET BURGER MENU
const burgerButton = document.querySelector('header button');
const burgerIcon = document.querySelector('.callNav');
const navbar = document.querySelector('header nav');
const linksNavbar = document.querySelectorAll('nav li');
const linknavbar = document.querySelector('nav ul');
const body = document.querySelector('body');


// FONCTION POUR AFFICHER LES LIENS DANS MA NAV
function navSwitch(){
    burgerIcon.classList.toggle('active');
    navbar.classList.toggle('active');
    linknavbar.classList.toggle('active');
    body.classList.toggle('hidden');
}

linksNavbar.forEach(link => {
    link.addEventListener("click", () => {
        if (navbar.classList.contains('active')){
            navSwitch();
        }
    })
})

burgerButton.addEventListener("click", navSwitch);



// RECUPERER SCROLL BAR WIDTH
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
// Appliquer la largeur de la barre de défilement au style CSS du corps (ou tout autre élément)
document.body.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);