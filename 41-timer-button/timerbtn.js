/*global window alert $:true */
var $timerBtn = (function(){
  var init = function(cfg){
    var n=cfg.time;
    var $container = $(cfg.container);
    /*
    var DOM = '<input type="button" class="timer-button" value="同意(6秒) disabled />"';
    $container.html(DOM);
    */
    
    var $timer=$('<input type="button" class="timer-button" disabled />');
    $timer.appendTo($container);
    
    var $btnAgree = $('.timer-button');
  
    var timer = window.setInterval(function(){
      n--;
      if(n===0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      }else{
        $btnAgree.val(cfg.title+'('+n+'s)');
      }
    },1000);

    $btnAgree.click(function(){
      alert('SPA 10-timer-button task!');
    });
  };
  var remove = function(){
    var $btn=$('.main').find('.timer-button');
    $btn.remove();
  };
  return {init:init,remove:remove};
}());

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
