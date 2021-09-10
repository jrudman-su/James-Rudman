let iframe = document.querySelector('iframe');
let player = new Vimeo.Player(iframe);

player.on('play', function () {
  gtag('event', 'video_play', {
    event_name: 'video_play',
  });
});
