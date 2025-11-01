document.addEventListener('DOMContentLoaded', () => {
    const triggers = document.querySelectorAll('.accordion__trigger');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const expanded = trigger.getAttribute('aria-expanded') === 'true';
            const panel = trigger.nextElementSibling;

            trigger.setAttribute('aria-expanded', String(!expanded));
            panel.hidden = expanded;
        });
    });
});
