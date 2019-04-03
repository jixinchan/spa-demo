/*global BMap BMAP_NORMAL_MAP BMAP_HYBRID_MAP $:true*/
$(function(){
  var map = new BMap.Map('allmap');
  map.centerAndZoom('河北师范大学软件学院',20);
  map.addControl(new BMap.MapTypeControl({
    mapTypes:[
      BMAP_NORMAL_MAP,
      BMAP_HYBRID_MAP
    ]
  }));    
  map.setCurrentCity('石家庄');
  map.enableScrollWheelZoom(true); 
});
