const container = document.getElementById('testimonial-container');

function scrollToLeft() {
    const scrollAmount = 200;
    const newScrollPosition = container.scrollLeft - scrollAmount;

    container.scrollTo({
        left: Math.max(newScrollPosition, 0),
        behavior: 'smooth'
    });
}

function scrollToRight() {
    const scrollAmount = 200;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const newScrollPosition = container.scrollLeft + scrollAmount;

    container.scrollTo({
        left: Math.min(newScrollPosition, maxScrollLeft),
        behavior: 'smooth'
    });
}
