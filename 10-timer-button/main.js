$(function(){//eslint-disable-line no-undef
  var n = 6;
  var $btnAgree = $('input[type="button"]');//eslint-disable-line no-undef

  var timer = window.setInterval(function(){//eslint-disable-line no-undef
    n--;
    if(n===0){
      window.clearInterval(timer);//eslint-disable-line no-undef
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');
    }else{
      $btnAgree.val('同意('+n+'s)');
    }
  },1000);

  $btnAgree.click(function(){
    alert('SPA 10-timer-button task!');//eslint-disable-line no-undef
  });
});
