/*global $ window:true */

/*
 * $(function(){
 *    ...
 * })
 * 为什么要把函数从这样修改成上面的那样，封装起来？
 * 闭包防止变量污染
 * 这样相当于window.onload之后就执行
 * 而修改成上面的那样，我们封装了对象，
 * 以及对象的函数，可以随时控制函数的执行时间和位置。
 */

/* exported timerButton */
var timerBtn = function(cfg) {//eslint-disbale-line no-unused-vars
  var enabled = cfg.isAble,              
    time = cfg.time,    
    $btn = $('<input class="timer-button" type="button">');
  var timer;
  
  //将按钮添加到页面中
  $(cfg.container).append($btn);
  if(cfg.enabled) {
    enableBtn();
  } else {
    disableBtn();
  }
  function disableBtn() {
    enabled = false;
    $btn.attr('disabled', 'disabled');
    setBtnText();
    timer = window.setInterval(function() {
      time--;
      setBtnText();
      if(time === 0) enableBtn();
    }, 1000);
  }
  function enableBtn() {
    enabled = true;
    time = cfg.time;
    clearInterval(timer);
    setBtnText();
    $btn.removeAttr('disabled');
  }

  function setBtnText() {
    var txt = enabled ? cfg.title : cfg.title + ' (' + time + ' s)';
    $btn.val(txt);
  }
  $btn.click(function() {
    //点击按钮时触发事件
    $btn.trigger('timer-button-click');
    if(cfg.enabled) disableBtn();
  });
  return $btn;
};
