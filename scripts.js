document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Menu';
    toggleButton.style.display = 'none';

    document.querySelector('header').appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        nav.classList.toggle('show');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            toggleButton.style.display = 'block';
        } else {
            toggleButton.style.display = 'none';
            nav.classList.remove('show');
        }
    });
});
