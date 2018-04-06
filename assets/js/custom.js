"use strict";

$('.sidebar-menu').metisMenu();
$('select,.bootstrap-select').selectpicker();
$('.datepicker').datetimepicker({
  defaultDate: false,
  format: 'MMMM DD, YYYY',
  buttons : {
    showClear: true
  }
});
$('.timepicker').datetimepicker({
  defaultDate: false,
  format: 'LT',
  stepping: 10
});
autosize(document.querySelectorAll('textarea'));
$('.scrollable-wrap').scrollbar();

// Search Expand
var submitIcon = $('.searchbox-icon');
var inputBox = $('.searchbox-input');
var searchBox = $('.searchbox');
var isOpen = false;
submitIcon.click('',function(){
  if(isOpen == false){
    searchBox.addClass('active');
    inputBox.focus();
    isOpen = true;
  } else {
    searchBox.removeClass('active');
    inputBox.focusout();
    isOpen = false;
  }
});  
submitIcon.mouseup(function(){
  return false;
});
searchBox.mouseup(function(){
  return false;
});
$(document).mouseup(function(){
  if(isOpen == true){
    $('.searchbox-icon').css('display','block');
    submitIcon.click();
  }
});
function buttonUp(){
  var inputVal = $('.searchbox-input').val();
  inputVal = $.trim(inputVal).length;
  if( inputVal !== 0){
      $('.searchbox-icon').css('display','none');
  } else {
      $('.searchbox-input').val('');
      $('.searchbox-icon').css('display','block');
  }
}

// Datatable Plugin
var dataSet = [
  ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
  ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
  ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
  ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
  ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
  ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
  ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
  ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
  ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
  ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
  ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
  ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
  ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
  ["Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400"],
  ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
  ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"],
  ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
  ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
  ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
  ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
  ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
  ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
  ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
  ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
  ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
  ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
  ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
  ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
  ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
  ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
  ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
  ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
  ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
  ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
  ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
  ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
  ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
  ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
  ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
  ["Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600"],
  ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
  ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
  ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
  ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
  ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
  ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
  ["Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400"],
  ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
  ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
  ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
  ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
  ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]

];

var columnDefs = [{
  title: "Name"
}, {
  title: "Position"
}, {
  title: "Office"
}, {
  title: "Extn."
}, {
  title: "Start date"
}, {
  title: "Salary"
}, {
  title: "Actions",
  "defaultContent": '<div class="dropdown sm"><a class="btn btn-icon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="icon ti-more-alt"></i></a><div class="dropdown-menu dropdown-menu-right"><ul class="nav"><li class="nav-item"><a class="nav-link"><i class="icon left ti-pencil-alt"></i><span class="nav-text">Edit Details</span></a></li><li class="nav-item"><a class="nav-link"><i class="icon left ti-write"></i><span class="nav-text">Update Status</span></a></li><li class="nav-item"><a class="nav-link"><i class="icon left ti-printer"></i><span class="nav-text">Generate Report</span></a></li></ul></div></div>'
}];

var myTable;

myTable = $('#table1,#table2').DataTable({
  paginationType: "full_numbers",
  data: dataSet,
  columns: columnDefs,
  // dom: 'frt <"datatable-wrapper d-flex" <"pagination"p> <"datatable-pager-info float-right ml-auto" <"d-flex" <"datatable-pager-size"l> <"datatable-pager-detail"i> > > >',
  dom: '<"datatable-body table-responsive"t> <"datatable-footer d-flex" <"datatable-pagination"p> <"datatable-pager-info float-right ml-auto" <"d-flex" <"datatable-pager-size"l> <"datatable-pager-detail"i> > > >', // Needs button container
  select: 'single',
  responsive: true,
  "aLengthMenu": [[10,30,50,100], [10,30,50,100]],
  language : {
    "decimal":        "",
    "emptyTable":     "No data available",
    "info":           "Displaying _START_ - _END_ of _TOTAL_ records",
    "infoEmpty":      "Displaying 0 - 0 of 0 records",
    "infoFiltered":   "",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "_MENU_",
    "loadingRecords": 'Please Wait <div class="loader loader-primary"></div>',
    "processing":     'Processing <div class="loader loader-primary"></div>',
    "search":         "Search:",
    "zeroRecords":    "No record found",
    "paginate": {
      "first":      '<i class="icon ti-angle-double-left"></i>',
      "last":       '<i class="icon ti-angle-double-right"></i>',
      "next":       '<i class="icon ti-angle-right"></i>',
      "previous":   '<i class="icon ti-angle-left"></i>'
    },
    "aria": {
      "sortAscending":  ": activate to sort column ascending",
      "sortDescending": ": activate to sort column descending"
    }
  },
  drawCallback : function(){
    var length_select = $(".dataTables_length");
    var select = $(".dataTables_length").find("select");
    select.addClass("bootstrap-select select-sm pill");
    select.selectpicker();
  }
});