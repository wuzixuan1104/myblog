/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2015 - 2018, OAF2E
 * @license     http://opensource.org/licenses/MIT  MIT License
 * @link        https://www.ioa.tw/
 */

$(function () {
  $('.menu').click (function () {
    $('#menu').toggleClass ('show');
  });

  //
  // $('.oa .tabs > a').click (function () {
  //   $('.oa').attr ('data-i', $(this).index () + 1);
  // }).first ().click ();

  // $('.oa .tabs > a').click (function () {
  //   $(this).addClass ('active').siblings ().removeClass ('active');
  //
  //   $('.oa .panels > *').eq ($(this).index ()).addClass ('active').siblings ().removeClass ('active');
  // }).first ().click ();
});
