let player;

const onPlayerStateChange = (e) => {
  if (e.data == YT.PlayerState.PLAYING) {
    console.log('play');
    window.gtag('event', 'video_play', {
      event_name: 'video_play',
    });
  }
};

window.YT.ready(function () {
  player = new YT.Player('youtube-video', {
    events: {
      onStateChange: onPlayerStateChange,
    },
  });
});
