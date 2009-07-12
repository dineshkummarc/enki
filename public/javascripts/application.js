window.addEvent('domready', function() {
  $$('#footer a.scroll_to_top').addEvent('click', function(event) {
    event.preventDefault();
    var scroll = new Fx.Scroll(window);
    scroll.toTop();
  });
});