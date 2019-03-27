$(function(){//eslint-disable-line no-undef
  var $begin=$('#begin'),//eslint-disable-line no-undef

    $pause=$('#pause'),//eslint-disable-line no-undef

    $reset=$('#reset'),//eslint-disable-line no-undef

    $progress=$('progress');//eslint-disable-line no-undef

  var timer=0,i=0;
  $begin.click(function(){
    if(timer!==0) return;
    timer=setInterval(function(){
      if(i>100){
        clearInterval(timer);
      }
      $progress.attr('value',i++);
    },100);
  });

  $pause.click(function(){
    clearInterval(timer);
    timer=0;
  });

  $reset.click(function(){
    $progress.attr('value',i=0);
  });
});
