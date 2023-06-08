window.addEventListener('scroll', function () {
    var navbar = document.querySelector('nav');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.classList.add('transparent');
    } else {
        navbar.classList.remove('transparent');
    }
});

window.addEventListener('DOMContentLoaded', function () {
    var navLinks = document.querySelectorAll('nav a');

    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', scrollToSection);
    }

    function scrollToSection(e) {
        e.preventDefault();

        var targetId = this.getAttribute('href').slice(1);
        var targetElement = document.getElementById(targetId);
        var targetOffsetTop = targetElement.offsetTop;
        var startPosition = window.pageYOffset;
        var distance = targetOffsetTop - startPosition;
        var duration = 800; // Duration of the animation in milliseconds
        var startTimestamp = null;

        function scrollAnimation(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            var progress = timestamp - startTimestamp;
            var easing = easeInOutCubic(progress, startPosition, distance, duration);
            window.scrollTo(0, easing);
            if (progress < duration) {
                window.requestAnimationFrame(scrollAnimation);
            }
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        window.requestAnimationFrame(scrollAnimation);
    }
});

const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

