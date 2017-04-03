// IIFE for protection
(function() {

  // Table of contents for what this file does
  function init() {
    setUpPopUpVideo();
  }

  function setUpPopUpVideo() {

    var videoButton = document.querySelector("[data-popup]");
    videoButton.addEventListener("click", function(e) {
      e.preventDefault();

      // This is just convienent. Rather than document.createElement.
      var videoHTML = getNodes(`
        <div class="modal" id="modal">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tzD9BkXGJ1M" frameborder="0" allowfullscreen></iframe>
        </div>
      `);

      // This could be multiple nodes, but we know we only have one so we'll skip the loop.
      document.body.appendChild(videoHTML[0]);

      // WEIRD TRICK, there is already a global `modal`.
      // let modal = document.querySelector("#modal");
      modal.addEventListener("click", function() {
        document.body.removeChild(modal);
      });

    });
  }

  init();

}());

function getNodes(str) {
  return new DOMParser().parseFromString(str, 'text/html').body.childNodes;
}