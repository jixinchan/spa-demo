$(function(){
  var n = 6;
  var $btnAgree = $('input[type="button"]');

  var timer = window.setInterval(function(){
    n--;
    if(n===0){
      window.clearInterval(timer);
      $btnAgree.removeAttr('disabled');
      $btnAgree.val('同意');
    }else{
      $btnAgree.val('同意('+n+'s)');
    }
  },1000);

  $btnAgree.click(function(){
    alert('SPA 10-timer-button task!');
  });
});
