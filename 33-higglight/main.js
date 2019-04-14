/*global hljs $:true*/
$(function(){
  var $btn = $('input[type="button"]');

  $btn.click(function(){
    var $code = $('<div>'
      +'<pre class="javascript">'
      +'</pre>'
      +'<i class="iconfont icon-delete" title="删除"></i>'
      +'</div>');

    $code.find('pre').html($('.code').val());
    $('div.main').append($code);
    hljs.highlightBlock($code.find('pre').get(0));

    /*删除
     */
    var $del = $code.find('i.icon-delete');
    $del.click(function(){
      $code.remove();
    });
  });
});
