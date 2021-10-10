const slider = document.getElementById('slider');
const projects = document.getElementById('projects');

let width, height, input_start, input_end, output_start, output_end, x;
let scrollPosition = 0;

const setOutput = (width) => {
  if (width > 1700) {
    output_end = slider.scrollWidth - width * (5 / 8);
  } else if (width > 1600) {
    output_end = slider.scrollWidth - width * (17 / 32);
  } else if (width > 1500) {
    output_end = slider.scrollWidth - width * (16 / 32);
  } else if (width > 1100) {
    output_end = slider.scrollWidth - width + 1000;
  } else if (width > 1000) {
    output_end = slider.scrollWidth - width * (6 / 32);
  }
};

width = window.innerWidth;
height = window.innerHeight;
input_start = 0;
input_end = width;
output_start = 0;
setOutput(width);

window.addEventListener('resize', (e) => {
  width = window.innerWidth;
  height = window.innerHeight;
  input_end = width;
  setOutput(width);
});

slider.scrollLeft = slider.scrollWidth / 2.0;

const calculateScrollPosition = (x) => {
  let output =
    ((x - input_start) * (output_end - output_start)) /
    (input_end - input_start);

  output = Math.max(output - 400, 0);
  return output;
};

$(document).ready(() => {
  if (width > 1050) {
    projects.addEventListener('mousemove', (e) => {
      x = e.clientX;
      scrollPosition = calculateScrollPosition(x);
      slider.scrollLeft = scrollPosition;
    });
  }

  let cards = slider.getElementsByClassName('card');
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('mouseenter', function (e) {
      if (width > 1050) {
        let secondaryText = cards[i].querySelector('p');
        secondaryText.style.maxHeight = '100px';
      }

      if (width > 1050) {
        cards[i].style.height = '70vh';
        let video = cards[i].querySelector('video');
        video.style.width = '110%';
      }
    });

    cards[i].addEventListener('mouseleave', function (e) {
      let secondaryText = cards[i].querySelector('p');
      secondaryText.style.maxHeight = '0';

      if (width > 1050) {
        cards[i].style.height = '63vh';
        let video = cards[i].querySelector('video');
        video.style.width = '100%';
      }
    });
  }
});
