
const embedEngine = {
    init() {
        embedEngine.binds();
    },
    binds() {

        const blocks = document.getElementsByClassName("container__item");
        const container = document.getElementsByClassName("container");
        const hs = new HorizontalScroll.default({
            blocks: blocks,
            container: container,
            isAnimated: true,
            springEffect: 0.8,
        });





    },
};
document.addEventListener("DOMContentLoaded", embedEngine.init);
