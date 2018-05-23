$(function () {
  $('div.icon-menu, div.icon-close').click(function() {
    $('#left').toggleClass('show');
  });
  $('div.bar').click(function() {
    $(this).toggleClass('show');
  });
});
