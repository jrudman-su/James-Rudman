function toggleVideo(state, id) {
  console.log(id);
  // if state == 'hide', hide. Else: show video
  var div = document.getElementsByClassName("video-popup-container");
  for (let i = 0; i < div.length; i++) {
    if (div[i].dataset.grid == id) {
      var iframe = div[i].getElementsByTagName("iframe")[0].contentWindow;
      // div.style.display = state == "hide" ? "none" : "";
      func = state == "hide" ? "pauseVideo" : "playVideo";
      iframe.postMessage(
        '{"event":"command","func":"' + func + '","args":""}',
        "*"
      );
    }
  }
}

// On load function
$(window).ready(function() {
  let cells = document.getElementsByClassName("grid-cell");

  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener("mouseenter", function(e) {
      let overlay = cells[i].getElementsByClassName("grid-overlay");
      let container = cells[i].getElementsByClassName("grid-title-container");
      let title = cells[i].getElementsByClassName("grid-title");

      overlay[0].style.opacity = "1";
      container[0].style.opacity = "1";
      title[0].style.opacity = "1";
    });

    cells[i].addEventListener("mouseleave", function(e) {
      let overlay = cells[i].getElementsByClassName("grid-overlay");
      let container = cells[i].getElementsByClassName("grid-title-container");
      let title = cells[i].getElementsByClassName("grid-title");

      overlay[0].style.opacity = "0";
      container[0].style.opacity = "0";
      title[0].style.opacity = "0";
    });

    cells[i].addEventListener("click", function(e) {
      let videos = document.getElementsByClassName("video-popup-container");
      for (let j = 0; j < videos.length; j++) {
        if (videos[j].dataset.grid == cells[i].dataset.grid) {
          videos[j].style.display = "flex";
          toggleVideo("play", videos[j].dataset.grid);
        }
      }
    });
  }

  let videos = document.getElementsByClassName("video-popup-container");

  for (let i = 0; videos.length; i++) {
    videos[i].addEventListener("click", function(e) {
      toggleVideo("hide", videos[i].dataset.grid);
      videos[i].style.display = "none";
    });
  }
});
