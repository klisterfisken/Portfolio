const frames = document.querySelectorAll('.anim-frame');
const scrollSpeed = 52;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    let index = Math.floor(scrollY / scrollSpeed);

    if (index > frames.length - 1) index = frames.length - 1;

    frames.forEach((frame, i) => {
        if (i === index) {
            frame.classList.add('active');
        } else {
            frame.classList.remove('active');
        }
    });
});