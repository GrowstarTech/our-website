/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '80px',
    duration: 2000,
    reset: true
});

sr.reveal('.title-services',{}); 
sr.reveal('.subtitle-services',{delay: 200});
sr.reveal('#card-services',{delay: 400});
sr.reveal('.img-fluid',{ interval: 200}); 