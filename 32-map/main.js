/*global BMap BMAP_NORMAL_MAP BMAP_HYBRID_MAP $:true*/
$(function(){
  var map = new BMap.Map('allmap');  
  map.centerAndZoom('河北师范大学软件学院', 25);

  // 添加地图类型控件
  map.addControl(new BMap.MapTypeControl({
    mapTypes: [
      BMAP_NORMAL_MAP,
      BMAP_HYBRID_MAP ]
  }));   

  map.enableScrollWheelZoom(true);     // 开启鼠标滚轮缩放
  map.setMapType(BMAP_HYBRID_MAP);

  var point = new BMap.Point(114.529963, 38.003679);
  var marker = new BMap.Marker(point, {'title': '河北师大软件学院'}); 
  marker.setAnimation(BMAP_ANIMATION_BOUNCE);

  map.addOverlay(marker);
  var opts = {
    width : 300,     // 信息窗口宽度
    height: 140,     // 信息窗口高度
    title : '<strong>河北师大软件学院</strong>' 
  };

  var infoWindow = new BMap.InfoWindow(''
      + '<div style="width: 250px">'
        + '<p>'
          + '我是Daenerys<br>'
          + '我在这里'
        + '</p>'
      + '</div>', opts);

  marker.openInfoWindow(infoWindow);

  marker.addEventListener('click', function(){          
    map.openInfoWindow(infoWindow, point);
  });
});
