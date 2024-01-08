gsap.registerPlugin(ScrollTrigger);

// APPARITION DU TITRE DEPUIS LE COTE
gsap.from(".title-h1", {
    duration: 1,
    x: "-90%",
    opacity: 0,
    stagger: 0.7, // Adjust the stagger value based on your preference
});

// Animate the link from the bottom
gsap.from(".scrollLink", {
    duration: 1,
    y: "50px", // Initial translateY value
    opacity: 0,
    delay: 1.5, // Delay to start the animation after h1 elements
});




// APPARITION DE MES PROJETS
gsap.utils.toArray('.oneproject').forEach((project, index) => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: project,
            start: 'top bottom-=30',
            end: "center bottom",
            scrub: true,
            once: true,
        },
    });

    tl.from(project, {
        y: '100%',
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
    });
});


// Définissez l'animation en fonction de la largeur de l'écran
const screenWidth = window.innerWidth;

if (screenWidth >= 770) {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: "top center",
            end: "bottom 90%",
            scrub: true, // Effet d'essuyage pendant le défilement
            once: true,
        }
    })
        .from(".about-text", {
            opacity: 0,
            x: 50,
        });
} else {
    gsap.timeline({
        scrollTrigger: {
            trigger: ".about",
            start: 'top bottom-=100',
            end: "center bottom",
            scrub: true,
            once: true,
        },
    }).from(".about-text", {
        y: '50%',
        opacity: 0,
    });
}





















