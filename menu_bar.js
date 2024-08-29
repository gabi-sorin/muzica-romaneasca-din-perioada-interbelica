var viewport_width;
document.addEventListener("DOMContentLoaded", function () {
    const root = document.querySelector(":root");
    const style = getComputedStyle(root);
    viewport_width = window.innerHeight;
    style.getPropertyValue("--widt",viewport_width);

    window.addEventListener('resize', function(){
        viewport_width = window.innerHeight;
        style.getPropertyValue("--widt",viewport_width);
    });
});