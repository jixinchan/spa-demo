$(function(){
  /*global Handsontable document $:true*/
  var data = [
    ['2019011111', 'Susan', '90', '90', '90','90','90','90','90'],
    ['2019011112', 'Lily', '90', '90', '90','90','90','90','90'],  
    ['2019011113', 'Albert', '90', '90', '90','90','90','90','90'],  
    ['2019011114', 'Bruth', '90', '90', '90','90','90','90','90'],  
    ['2019011115', 'Frank', '90', '90', '90','90','90','90','90']
  ];

  var container = document.getElementsByClassName('container')[0];
  var hot = new Handsontable(container, {
    data: data,
    rowHeaders: true,
    //colHeaders: true,
    filters: true,
    dropdownMenu: true,
    licenseKey:'non-commercial-and-evaluation',
    colHeaders:[
      'ID',
      'Name',
      'Chinese',
      'English',
      'Math',
      'Biology',
      'History',
      'Geography',
      'Computing'
    ]
  });
  return hot;
});
