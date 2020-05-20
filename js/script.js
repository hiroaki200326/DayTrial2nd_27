$(function(){
  var scrollTime_ms = 1000;

  //グローバルメニューのスクロール
  jQuery('.drawer-menu-item').click(function(){
    var id = $(this).attr('href');
    pageScroll(id, scrollTime_ms);
  });

  //お問い合わせボタンのスクロール
  jQuery('.mv-text').find('button').click(function(){
    var id = '#Contact';
    pageScroll(id, scrollTime_ms);
  });

  //ページスクロール量に応じた「トップに戻る」ボタンの表示/非表示
  jQuery(window).on("scroll", function($) {
    if (jQuery(this).scrollTop() > 100) {
      jQuery('.floating').fadeIn();
      console.log(jQuery(this).scrollTop());
    } else {
      jQuery('.floating').fadeOut();
    }
  });
  
  //トップに戻るボタンの機能
  jQuery('.floating').click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, scrollTime_ms);
    return false;
  });

  //指定されたIDと移動時間を元にページスクロール実行
  function pageScroll(id, time_ms){
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop': position}, time_ms);
  }
  
});