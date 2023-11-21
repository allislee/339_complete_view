if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    anime({
      targets: 'h1',
      translateY: 0,
      translateX: 0,
      duration: 0,
      loop: false
    });
  } else {
    anime({
      targets: 'h1',
      keyframes: [
        { translateY: -10 },
        { translateX: 250 },
        { translateY: 50 },
        { translateX: 0 },
        { translateY: 0 }
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
    });
  }


const imageElements = document.querySelectorAll('.hover-effect');

    imageElements.forEach(image => {
      image.addEventListener('mouseover', function() {
        image.style.opacity = '0.2';
      });

      image.addEventListener('mouseleave', function() {
        image.style.opacity = '1';
      });
    });


tippy('.pet_link', {
  content: 'Come Meet this Pet!',
});

tippy('.pets', {
  content: 'Go learn about some cute pets!',
});

tippy('.travel', {
  content: 'Look at some cool travel destinations!',
});

tippy('.recipes', {
  content: 'Learn some delicious recipes!',
});

tippy('.current', {
  content: 'You are currently here!',
});