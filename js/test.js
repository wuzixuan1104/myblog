$(function () {
  var $box = $('#box');
  var $l = $('#box > a').length;
  var $i = parseInt( $box.attr('data-i') );

  setInterval( function() {
    if( ++$i > $l ) {
      $i = 1;
    }
    $box.attr( 'data-i', $i );
  }, 5000);
});
