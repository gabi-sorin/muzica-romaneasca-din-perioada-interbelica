let scrollSpeed = 1667; // Pixels per second
let isScrolling = false;
let animationFrameId;
let lastScrollTime = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
});

function handleKeyDown(event) {
    if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.tagName === 'LI') {
        return; // Don't scroll if focus is on input or textarea
    }

    if (!isScrolling) {
        switch (event.key) {
            case "ArrowUp":
                event.preventDefault();
                startScrolling(-1);
                break;
            case "ArrowDown":
                event.preventDefault();
                startScrolling(1);
                break;
        }
    }
}

function handleKeyUp(event) {
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
        event.preventDefault();
        stopScrolling();
    }
}

function startScrolling(direction) {
    isScrolling = true;
    lastScrollTime = performance.now();
    scrollStep(direction);
}

function scrollStep(direction) {
    const currentTime = performance.now();
    const deltaTime = (currentTime - lastScrollTime) / 1000; // Convert to seconds

    if (deltaTime > 0) {
        const scrollAmount = Math.round(direction * scrollSpeed * deltaTime);
        window.scrollBy(0, scrollAmount);
        lastScrollTime = currentTime;
    }

    if (isScrolling) {
        animationFrameId = requestAnimationFrame(() => scrollStep(direction));
    }
}

function stopScrolling() {
    if (isScrolling) {
        cancelAnimationFrame(animationFrameId);
        isScrolling = false;
    }
}

// Function to change scroll speed (can be called from console or other parts of your code)
function setScrollSpeed(speed) {
    scrollSpeed = speed;
    console.log(`Scroll speed set to ${speed} pixels per second`);
}
//Stiu ca nu merge cum trebuie, dar imi bag piciorul