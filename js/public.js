/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */
 
$(function () {
  $(window).scroll (function () {
    $('#bg').css ({
      top: 0 - $(window).scrollTop () / 2 + 'px'
    });
  });
});