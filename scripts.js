$(function(){
      window.navigator = window.navigator || {};
      navigator.getUserMedia = navigator.getUserMedia       ||
                               navigator.webkitGetUserMedia ||
                               navigator.mozGetUserMedia    ||
                               null;

    $('.button').on('click', function() {
        
          // Capture user's audio and video source
          navigator.getUserMedia({
            video: true,
            audio: true
          },
          function(stream) {
            videoStream = stream;
            // Stream the data
            video.src = createSrc(stream);
            video.play();
          },
          function(error) {
            console.log("Video capture error: ", error.code);
          });
        });
});
