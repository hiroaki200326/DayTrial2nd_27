$(function(){
  var scrollTime_ms = 1000;

  //グローバルメニュー(スマホ用)のスクロール
  jQuery('.drawer-menu-item').click(function(){
    var id = $(this).attr('href');
    pageScroll(id, scrollTime_ms);
  });

  //グローバルメニュー(PC用)のスクロール
  //クリックされたグローバルメニューへの下線追加
  jQuery('.gnav-item a').click(function(){
    //ページスクロール
    var id = $(this).attr('href');
    pageScroll(id, scrollTime_ms);

    //下線追加
    jQuery('.gnav-item a').removeClass('active-border-bottom');
    jQuery(this).addClass('active-border-bottom');
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
  

  //QAアコーディオン
  jQuery('.qa-item-list').click(function () {
    var $answer = $(this).find('.answer');

    //回答欄のopen/close
    $answer.slideToggle();

    //Open判定用クラス「open」の有無確認
    $answer.toggleClass('open');
    if($answer.hasClass('open')){
      $(this).find('img').attr('src', "../img/minus.png");
      $(this).find('img').css('height', "3px");
    } 
    else{
      $(this).find('img').attr('src', "../img/plus.png");
      $(this).find('img').css('height', "15px");
    }    

    // //Open判定用クラス「open」の有無確認
    // if($answer.hasClass('open')){
    //   //openあり = 回答欄が開いている
    //   //open削除
    //   $answer.removeClass('open');

    //   //回答欄を閉じる
    //   $answer.slideUp();

    //   //テキストを+に変更
    //   $(this).find('span').text("+");
    // } 
    // else{
    //   //openなし = 回答欄が閉じている
    //   //open追加
    //   $answer.addClass('open');
  
    //   //回答欄を開く
    //   $answer.slideDown();
    //   //テキストを-に変更
    //   $(this).find('span').text("-");
    // }
    
  });

  // モーダル
  jQuery('.privacyPolicy-area button,.privacyPolicy-area img').click(function(){
    jQuery('.privacyPolicy-area').fadeOut();
  });
  
  jQuery('.contact-area a').click(function(e){
    e.preventDefault();
    jQuery('.privacyPolicy-area').fadeIn();
  });

});