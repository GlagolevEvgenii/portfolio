
const embedEngine = {
    init() {
        embedEngine.binds();
    },
    binds() {

        gsap.registerPlugin(ScrollTrigger);
        const scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            direction: "horizontal",
            lerp: 0.08,
            getDirection: true,
            smoothMobile: false,
            scrollFromAnywhere: false,
        });
        scroll.on("scroll", ScrollTrigger.update);


    },
};
document.addEventListener("DOMContentLoaded", embedEngine.init);
