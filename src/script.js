window.onscroll = function() {
    var footer = document.querySelector('.footer');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // User has scrolled to the bottom of the page
      footer.classList.add('no-shadow');
    } else {
      footer.classList.remove('no-shadow');
    }
  };