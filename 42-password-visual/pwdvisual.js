//<input type="password" id="pwd" /><span id="eye">SEE</span>
//<input type="text" id="pwdtxt" />
/*global $:true*/
var PwdVisual=function(cfg){
  var $container=$(cfg.container);
  var $eye=$('<span class="eye">SEE</span>');  
  var $pwd=$('<input type="password" class="pwd" />');  
  var $txt=$('<input type="text" class="pwdtxt"/>');
  var $pwdbox=$('<div class="pwdbox"></div>');
  $pwdbox.append($pwd);
  $pwdbox.append($txt);
  $pwdbox.append($eye);
  $container.append($pwdbox);
    
  $pwd.on('input',function(){
    $txt.val($pwd.val());
  });
  $eye.mouseover(function(){
    $txt.css('z-index','10');
  });
  $eye.mouseout(function(){
    $txt.css('z-index','-10');
  }); 
  this.getPwd=function(){
    return $txt.val();
  };
};
