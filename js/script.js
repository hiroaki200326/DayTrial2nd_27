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

  //ラジオボタン、チェックボックスのマウス連動
  var $contactItemLabel = jQuery('.contact-item label');
  $contactItemLabel.mouseover(function(){
    //マウスオーバー
    jQuery(this).addClass('form-mouseover');
  });
  $contactItemLabel.mouseout(function(){
    //マウスオーバーから外れる
    jQuery(this).removeClass('form-mouseover');
  });
  $contactItemLabel.mousedown(function(){
    //クリック中
    jQuery(this).removeClass('form-mouseover');
    jQuery(this).addClass('form-mousedown');
  });
  $contactItemLabel.mouseup(function(){
    //クリックボタンリリース
    jQuery(this).removeClass('form-mousedown');
  });

  //テキストボックスの入力モード
  var $formText = jQuery('.form-text');
  $formText.focus(function(){
    //テキスト入力モード
    jQuery(this).addClass('form-text-inputmode');
  });
  $formText.blur(function(){
    //テキスト入力モード解除
    jQuery(this).removeClass('form-text-inputmode');
  });
  
  //テキストエリアの入力モード
  var $formTextarea = jQuery('.form-textarea');
  $formTextarea.focus(function(){
    //テキスト入力モード
    jQuery(this).addClass('form-textarea-inputmode');
  });
  $formTextarea.blur(function(){
    //テキスト入力モード解除
    jQuery(this).removeClass('form-textarea-inputmode');
  });

  // swiper.js の初期化処理
  var swiper = new Swiper('.swiper-container', {
    loop: true,
    spaceBetween: 24.5,
    speed: 1000,
    slidesPerView:1.5,  // 1画面のスライド表示枚数
    centeredSlides : false,  // アクティブなスライドの中央表示
    effect: 'slide',
    // autoHeight: true,
    // autoplay: {
    //   delay:1000,      // 指定時間おきに自動再生
    // },

    //ページネーション表示の設定
    pagination: { 
      el: '.swiper-pagination', //ページネーションの要素
      type: 'bullets', //ページネーションの種類
      clickable: true, //クリックに反応させる
      renderBullet: function (index, className) {
          return '<span class="' + className + '">'+'<svg class="" width="30" height="30" viewBox="0 0 30 30">'+
            '<circle class="path" cx="15" cy="15" r="10" fill="none" transform="translate(-50%,-50%" stroke="#FFF"'+
            'stroke-opacity="1" stroke-width="1px"></circle>'+
            '<circle cx="15" cy="15" r="6" fill="#FFF"></circle>'+
            '</svg></span>';
      },
    },

    //ナビゲーションボタン（矢印）表示の設定
    navigation: { 
      nextEl: '.swiper-button-next', //「次へボタン」要素の指定
      prevEl: '.swiper-button-prev', //「前へボタン」要素の指定
    },
    breakpoints: {
      768:{
        slidesPerView: 2.6,
      }
    },
  });

});