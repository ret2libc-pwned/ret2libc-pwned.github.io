<link rel="stylesheet" class="aplayer-secondary-style-marker" href="\assets\css\APlayer.min.css"><script src="\assets\js\APlayer.min.js" class="aplayer-secondary-script-marker"></script>!(function() {
  var oldLoadAp = window.onload;
  window.onload = function () {
    oldLoadAp &amp;&amp; oldLoadAp();

    new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      autoplay: false,
      loop: 'all',
      order: 'random',
      theme: '#b7daff',
      preload: 'none',
      audio: [
        {
          name: '平凡之路',
          artist: '朴树',
          lrc: '/downloads/lrc/平凡之路-朴树.lrc',
          cover: 'http://p2.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=300x300',
          url: 'http://fs.open.kugou.com/cd5cbe8edb012e4f77b0857cefc0956e/5c66accf/G097/M08/0A/1F/AYcBAFkQGpOAMUpuAEm-3SlWMyk951.mp3'
        }
      ]
    });
  }
})();