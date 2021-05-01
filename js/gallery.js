const images = document.querySelectorAll('.item');

const getSpanEstimate = (width, height) => {
  let row = 1;
  let col = 1;
  if (width > height * 1.2) {
    row = 2;
    col = 2;
  } else {
    row = 2;
    col = 1;
  }

  return {
    row,
    col,
  };
};

for (let i = 0; i < images.length; i++) {
  let file = images[i].querySelector('img');
  var img = new Image();
  img.onload = function () {
    const { row, col } = getSpanEstimate(this.width, this.height);
    images[i].style.gridColumnEnd = `span ${col}`;
    images[i].style.gridRowEnd = `span ${row}`;
  };
  img.src = file.src;
}
