let slides = document.querySelectorAll('.slide');
        let current = 0;
        let dotsContainer = document.getElementById('dots');

        // create dots
        slides.forEach((_, i) => {
            let dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.onclick = () => goToSlide(i);
            dotsContainer.appendChild(dot);
        });

        let dots = document.querySelectorAll('.dot');

        function showSlide(index) {
            slides.forEach(s => s.classList.remove('active'));
            dots.forEach(d => d.classList.remove('active'));

            slides[index].classList.add('active');
            dots[index].classList.add('active');
        }

        function nextSlide() {
            current = (current + 1) % slides.length;
            showSlide(current);
        }

        function prevSlide() {
            current = (current - 1 + slides.length) % slides.length;
            showSlide(current);
        }

        function goToSlide(i) {
            current = i;
            showSlide(current);
        }

        // autoplay infinite
        setInterval(nextSlide, 4000);

        // swipe mobile
        let startX = 0;
        let endX = 0;

        let slider = document.getElementById('slider');

        slider.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
        });

        slider.addEventListener('touchend', e => {
            endX = e.changedTouches[0].clientX;
            if (startX - endX > 50) nextSlide();
            if (endX - startX > 50) prevSlide();
        });