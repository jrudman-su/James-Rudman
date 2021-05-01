const images = document.querySelectorAll('.grid-item');

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('mouseenter', (e) => {
    const img = e.target.querySelector('img');
    const text = e.target.querySelector('h2');
    img.style.height = '110%';
    text.style.fontSize = '25px';
  });

  images[i].addEventListener('mouseleave', (e) => {
    const img = e.target.querySelector('img');
    const text = e.target.querySelector('h2');
    img.style.height = '100%';
    text.style.fontSize = '24px';
  });
}
