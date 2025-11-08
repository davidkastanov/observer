
const imgEls = document.querySelectorAll('img[data-src]');
const btnEl = document.querySelector('.btn');
const forBtn = true;

const imgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            entry.target.style.opacity = '1';
            observer.unobserve(entry.target);
        }
    });
}, {});

imgEls.forEach(img => {
    btnEl.addEventListener('click', () => {
        img.style.opacity = '1';
        img.src = img.dataset.src;
    });
    imgObserver.observe(img);
});