
const embedEngine = {
    init() {
        embedEngine.binds();
    },
    binds() {

        const scroll = new LocomotiveScroll({
            el: document.querySelector("[data-scroll-container]"),
            smooth: true,
            direction: "horizontal",
            getDirection: true,
            smoothMobile: false,
            scrollFromAnywhere: false,
        });

    },
};
document.addEventListener("DOMContentLoaded", embedEngine.init);
