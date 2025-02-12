window.addEventListener('scroll', () => {
    const boxes = document.querySelectorAll('.box');
    const triggerBottom = window.innerHeight / 5 * 4; // 80% da altura da janela

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('visible');
        } else {
            box.classList.remove('visible');
        }
    });
});

// Dispara o evento de scroll uma vez para garantir que a animação funcione na primeira carga
window.dispatchEvent(new Event('scroll'));


