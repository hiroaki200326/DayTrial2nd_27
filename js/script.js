$(function(){
  var scrollTime_ms = 1000;

  //グローバルメニューのスクロール
  $('.drawer-menu-item').click(function(){
    var id = $(this).attr('href');
    pageScroll(id, scrollTime_ms);
  });

  //お問い合わせボタンのスクロール
  $('.mv-text').find('button').click(function(){
    var id = '#Contact';
    pageScroll(id, scrollTime_ms);
  });

  //指定されたIDと移動時間を元にページスクロール実行
  function pageScroll(id, time_ms){
    var position = $(id).offset().top;
    $('html,body').animate({'scrollTop': position}, time_ms);
  }
  
});