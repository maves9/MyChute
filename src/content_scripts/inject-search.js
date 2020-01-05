//
// inject for search.bitchute.com
//

$('.oss-one-result').each(function(){
    var $this = $(this),
      $title = $this.find('.ossfieldrdr1'),
      $img = $this.find('.ossfieldrdr2'),
      $decr = $this.find('.ossfieldrdr3'),
      $date = $this.find('.ossfieldrdr7'),
      $views = $this.find('.ossfieldrdr8');
    $this.html(
      '<div class="image">'
        + $img.html()
      + '</div>'
      + '<div class="info">'
        + '<div class="title">' + $title.html() + '</div>'
        + '<strong class="views-and-date">'
          + $views.html() + ' - ' + $date.html()
        + '</strong>'
        + '<div>' + $decr.html() + '<div>'
      +'</div>'
    );
})
var navLogo = '<div class="logo">'
    +'<a href="https://bitchute.com/" class="spa">'
      +'<img class="logo-full hidden-xs" src="https://bitchute.com/static/v102/images/logo-full-day.png" alt="BitChute">'
      +'<img class="logo-icon hidden-sm hidden-md hidden-lg hidden-xl" src="/static/v102/images/logo-icon-day.png" alt="BitChute">'
    +'</a>'
  +'</div>';
$('.navbar .navbar-header').html(navLogo);

var headerIcons = '<link rel="apple-touch-icon" sizes="57x57" href="https://bitchute.com/static/v102/images/apple-icon-57x57.png">'
  + '<link rel="apple-touch-icon" sizes="60x60" href="https://bitchute.com/static/v102/images/apple-icon-60x60.png">'
  + '<link rel="apple-touch-icon" sizes="72x72" href="https://bitchute.com/static/v102/images/apple-icon-72x72.png">'
  + '<link rel="apple-touch-icon" sizes="76x76" href="https://bitchute.com/static/v102/images/apple-icon-76x76.png">'
  + '<link rel="apple-touch-icon" sizes="114x114" href="https://bitchute.com/static/v102/images/apple-icon-114x114.png">'
  + '<link rel="apple-touch-icon" sizes="120x120" href="https://bitchute.com/static/v102/images/apple-icon-120x120.png">'
  + '<link rel="apple-touch-icon" sizes="144x144" href="https://bitchute.com/static/v102/images/apple-icon-144x144.png">'
  + '<link rel="apple-touch-icon" sizes="152x152" href="https://bitchute.com/static/v102/images/apple-icon-152x152.png">'
  + '<link rel="apple-touch-icon" sizes="180x180" href="https://bitchute.com/static/v102/images/apple-icon-180x180.png">'
  + '<link rel="icon" type="image/png" sizes="192x192" href="https://bitchute.com/static/v102/images/android-icon-192x192.png">'
  + '<link rel="icon" type="image/png" sizes="32x32" href="https://bitchute.com/static/v102/images/favicon-32x32.png">'
  + '<link rel="icon" type="image/png" sizes="96x96" href="https://bitchute.com/static/v102/images/favicon-96x96.png">'
  + '<link rel="icon" type="image/png" sizes="16x16" href="https://bitchute.com/static/v102/images/favicon-16x16.png">';

$(document.head).append(headerIcons);

var $search = $('#oss-main > .oss-input-div');
var $navContainer = $('#oss-header .navbar > .container');
var searchHTML = $search.html();

$search.css('display', 'none');
$navContainer.append(
  '<div class="search">'+searchHTML+'</div>'
);

// $navContainer.find('#osssearchbox').on('input', e => {
//   var $target = $navContainer.find('.autocomplete-target');
//   $search.find();
// });
