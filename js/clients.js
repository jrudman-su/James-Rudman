const hide = document.getElementsByClassName('client-hide');

window.addEventListener('resize', (e) => {
  console.log(window.innerWidth);
  if (window.innerWidth < 600) {
    for (let i = 0; i < hide.length; i++) {
      hide[i].style.display = 'flex';
    }
  } else if (window.innerWidth < 900) {
    for (let i = 0; i < hide.length; i++) {
      hide[i].style.display = 'none';
    }
  } else {
    for (let i = 0; i < hide.length; i++) {
      hide[i].style.display = 'flex';
    }
  }
});
