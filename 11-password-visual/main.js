$(function(){//eslint-disable-line no-undef
  var $eye=$('#eye');//eslint-disable-line no-undef
  var $pwd=$('#pwd');//eslint-disable-line no-undef
  var $txt=$('#pwdtxt');//eslint-disable-line no-undef
  
  $pwd.on('input',function(){
    $txt.val($pwd.val());
  });
  $eye.mouseover(function(){
    $txt.css('z-index','10');
  });
  $eye.mouseout(function(){
    $txt.css('z-index','-10');
  });
});
