/*global hljs $:true*/
$(function(){
  var $btn = $('input[type="button"]');

  $btn.click(function(){
    var $code = $('<div><pre class="javascript"></pre></div>');

    $code.find('pre').html($('.code').val());
    $('div.main').append($code);
    hljs.highlightBlock($code.find('pre').get(0));
  });


});
