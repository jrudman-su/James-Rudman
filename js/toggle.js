const toggleBtn = document.querySelector('.menu-btn');
const drawer = document.querySelector('.drawer');
let open = false;

toggleBtn.addEventListener('click', (e) => {
  if (open) {
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.style.maxHeight = '0';
    toggleBtn.classList.remove('is-active');
  } else {
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.style.maxHeight = '100px';
    toggleBtn.classList.add('is-active');
  }
  open = !open;
});

window.addEventListener('resize', (e) => {
  let width = window.innerWidth;
  if (width < 750) {
    drawer.style.maxHeight = '0';
    toggleBtn.classList.remove('is-active');
    open = false;
  }
});
