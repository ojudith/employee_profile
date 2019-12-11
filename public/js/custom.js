  $(document).ready(function () {
      $('.menu-toogle , .menu-close').click(function () {
          $('.navbar-nav').toggleClass('navbar-out')
          $('.menu-toogle').toggle();
          $('.menu-close').toggle();
      })
  })


  //   scroll to top when arrow clicked
  $(window).scroll(function () {
      var height = $(window).scrollTop();
      if (height > 100) {
          $('#back2Top').fadeIn();
      } else {
          $('#back2Top').fadeOut();
      }
  });

  $(document).ready(function () {
      $('#back2Top').click(function (event) {
          event.preventDefault();
          $("html, body").animate({
              scrollTop: 0
          }, "slow");
          return false;
      });
  });

  // ==smooth==scroll
  var scroll = new SmoothScroll('a[href*="#"]');

  //   // button
  //   var node =
  //       document.getElementsByTagName('button')[0];

  //   node.onmouseover = function (e) {
  //       node.innerHTML = "Read less";
  //   }

  //   node.onmouseover = function (e) {
  //       node.innerHTML = "Read more";
  //   }

  $('.change').click(function () {
      var $this = $(this);
      $this.toggleClass('change');
      if ($this.hasClass('change')) {
          $this.text('Read More');
      } else {
          $this.text('Read Less');
      }
  });

  $('.change2').click(function () {
      var $this = $(this);
      $this.toggleClass('change2');
      if ($this.hasClass('change2')) {
          $this.text('Read More');
      } else {
          $this.text('Read Less');
      }
  });