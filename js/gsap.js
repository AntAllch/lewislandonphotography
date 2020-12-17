//****************************************************//

//GSAP

//Hero Images
gsap.from(".hero-img", {opacity: 0, duration: 1, y: -30, stagger: 0.2})
gsap.from("nav", {opacity: 0, duration: 2, delay: 1})

//Most Recent

var tl = new TimelineMax({onUpdate:updatePercentage});
const controller = new ScrollMagic.Controller();

tl.from(".most-recent-img", 1, {x:-80, opacity: 0})
tl.from(".most-recent-info", 1, {y:-30, opacity: 0})

const scene = new ScrollMagic.Scene({
    triggerElement: ".mini-desc",
    triggerHook: "onCenter",
    duration: "80%"
})
    .setPin(".mini-dec")
    .setTween(tl)
        .addTo(controller);

function updatePercentage() {
    tl.progress();
}