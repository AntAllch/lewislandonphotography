const minidesc = document.querySelector(".mini-desc");
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in")

const appearOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver
(function(
    entries,
    appearOnScroll
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        } else {
            entry.target.classList.add("appear");
            appearOnScroll.unobserve(entry.target);
        }
    })
},
appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})


//****************************************************//

//Contact Page

const contactActivation = document.querySelector(".contact-activation");
const contactModal = document.querySelector(".contact");

contactActivation.addEventListener("click", () =>{
    contactModal.classList.add("open");
});

contactModal.addEventListener("click", (e) =>{
    if(e.target.classList.contains("contact")){
        contactModal.classList.remove("open");
    }
});


//****************************************************//

//Image modal

const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".modal-img img");
const original = document.querySelector(".full-img");

previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");

        //dynamic change
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./img/${originalSrc}`;
    })
})

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")){
        original.classList.remove("open");
        modal.classList.remove("open");
    }
})

