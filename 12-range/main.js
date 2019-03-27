$(function(){//eslint-disable-line no-undef
  var $range=$('input[type="range"]') ;//eslint-disable-line no-undef
  var $txtAge=$('#age');//eslint-disable-line no-undef

  $range.change(function(){
    $txtAge.html($range.val());
  });
});
