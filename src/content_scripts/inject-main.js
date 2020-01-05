//
// inject for bitchute.com
// dependencies: JQuery
//

$(function () {
  init();
});

function init() {
  var $progressbar = $('.help-us-grow > span');
  var progress = $progressbar.text();
  $progressbar.addClass('progress');
  $progressbar.html(
    '<div class="progress-bar" role="progressbar" aria-valuenow="'+progress.replace('%','')+'" aria-valuemin="0" aria-valuemax="100" style="width:'+progress+'">'+progress+'</div>'
  );

  $('.tab-scroll-outer').each(function(){
    var $this = $(this);
    var $items = $this.find('li');
    if ($items.length < 2) {
      $this.css('display','none');
    }
  });

  carouselRows();
  waitForCarousel();
}

function carouselRows() {
  var $carousel = $('#carousel .carousel');
  if (!$carousel.length) { return }
  var $items = $carousel.find('.item');
  var $channels = $carousel.find('.item > div');
  var channelAmount = 5;
  var start = 0;
  $items.each(function (index, item) {
    channelAmount = 5 * (index + 1);
    var $item = $(item);
    var html = "";
    var i;
    for (i = start; i < channelAmount; i++) {
      var c = $channels[i];
      c && c.nodeName ? html += c.outerHTML : null;
    }
    html.length ? $item.html(html) : $item.html('') && $item.remove();
    start = channelAmount;
  });
  $carousel.carousel();
}

function waitForCarousel() {
  var interval = setInterval(function(){
    var $carousel = $('#carousel .carousel');
    if ($carousel.length && $('carousel-inner .item:first-child').length < 5) {
      carouselRows();
    }
  }, 500);
  setInterval(function () {
    clearInterval(interval);
  }, 5000);
}
