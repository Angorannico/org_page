const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    function moveCarousel() {
      index++;
      if (index >= items.length) {
        index = 0;
      }
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moveCarousel, 3000);