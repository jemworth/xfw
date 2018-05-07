"use strict";
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

$('#sweet-basic').click(function(){
  swal('Any fool can use a computer')
});
$('#sweet-reverse').click(function(){
  swal({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonClass: "btn btn-danger",
  cancelButtonClass: 'btn btn-light',
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      swal(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
});
$('#sweet-both,#save').click(function(){
  swal({
    title: 'Are you sure?',
    text: "You will change the new profile picture!",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'No, cancel!',
    confirmButtonText: 'Yes',
    cancelButtonClass: 'btn btn-danger',
    confirmButtonClass: 'btn btn-success',
    buttonsStyling: false,
    reverseButtons: true
  }).then((result) => {
    if (result.value) {
      $('.modal').modal('hide');
      swal(
        'Successful!',
        'Your profile picture has been change',
        'success'
      )
    }
  })
});
$('#sweet-noti').click(function(){
  swal({
    position: 'top-end',
    type: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 10000
  })
});

// Datatable Plugin
var dataSet = [
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "5421", "Tiger", "Nixon", "N.", "2011/04/25", "30", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "8422", "Garrett", "Winters", "W.", "2001/04/25", "29", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "1562", "Ashton", "Cox",  "C.", "2009/01/12", "30", "Male", "Married", '<span class="badge badge-pill badge-secondary">Inactive</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "6224", "Cedric", "Kelly", "C.", "2012/03/29", "21", "Male", "Single", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "5407", "Airi", "Satou", "S.", "2008/11/28", "20", "Female", "Single", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "4804", "Brielle", "Williamson", "W.",  "2012/12/02", "22", "Female", "Single", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "9608", "Herrod", "Chandler", "C.",  "2012/08/06", "23", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "6200", "Rhona", "Davidson", "D.", "2010/10/14", "24", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "1667", "Colleen", "Hurst", "H.", "2009/09/15", "30", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "2360", "Sonya", "Frost", "F", "2008/12/13", "23", "Female", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "3814", "Jena", "Gaines", "G.", "2008/12/19", "28", "Female", "Single", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "9497", "Quinn", "Flynn", "F", "2013/03/03", "50", "Female", "Married", '<span class="badge badge-pill badge-secondary">Inactive<span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "6741", "Charde", "Marshall", "M.", "2008/10/16", "55", "Female", "Married", '<span class="badge badge-pill badge-secondary">Inactive<span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "3597", "Haley", "Kennedy", "K", "2012/12/18", "40", "Female", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "1965", "Tatyana", "Fitzpatrick", "F.", "2010/03/17", "35", "Female", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "1551", "Michael", "Silva", "S.", "2012/11/27", "30", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "3049", "Paul", "Byrd", "B.", "2010/06/09", "30", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "1731", "Gloria", "Little", "L.", "2009/04/10", "30", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "5441", "William", "Nixon", "N.", "1990/04/25", "40", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "8482", "Garrett", "Winters", "W.", "2001/04/25", "29", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "1572", "Ashton", "Cox",  "C.", "2009/01/12", "30", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "6214", "Cedric", "Kelly", "C.", "2012/03/29", "21", "Male", "Single", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "5447", "Airi", "Satou", "S.", "2008/11/28", "20", "Female", "Single", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "4824", "Brielle", "Williamson", "W.",  "2012/12/02", "22", "Female", "Single", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "9618", "Herrod", "Chandler", "C.",  "2012/08/06", "23", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "6210", "Rhona", "Davidson", "D.", "2010/10/14", "24", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "1677", "Colleen", "Hurst", "H.", "2009/09/15", "30", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "2370", "Sonya", "Frost", "F", "2008/12/13", "23", "Female", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "3804", "Jena", "Gaines", "G.", "2008/12/19", "28", "Female", "Single", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "9407", "Quinn", "Flynn", "F", "2013/03/03", "50", "Female", "Married", '<span class="badge badge-pill badge-secondary">Inactive<span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "6731", "Charde", "Marshall", "M.", "2008/10/16", "55", "Female", "Married", '<span class="badge badge-pill badge-secondary">Inactive<span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "3587", "Haley", "Kennedy", "K", "2012/12/18", "40", "Female", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "1955", "Tatyana", "Fitzpatrick", "F.", "2010/03/17", "35", "Female", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "1571", "Michael", "Silva", "S.", "2012/11/27", "30", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "3049", "Paul", "Byrd", "B.", "2010/06/09", "30", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>'],
  ['<img src="../assets/img/main/profile-img.png" class="text-center rounded" alt="" width="40">', "1711", "Gloria", "Little", "L.", "2009/04/10", "30", "Male", "Married", '<span class="badge badge-pill badge-success">Active</span>']
];

var columnDefs = [ {
  title: ""
},{
  title: "ID Number"
}, {
  title: "Last Name"
}, {
  title: "First Name"
}, {
  title: "Middle"
}, {
  title: "Birth Date"
}, {
  title: "Age"
}, {
  title: "Sex"
}, {
  title: "Civil Status"
}, {
  title: "Status"
}];

var myTable;

myTable = $('#table1,#table2').DataTable({
  paginationType: "full_numbers",
  data: dataSet,
  columns: columnDefs,
  // dom: 'frt <"datatable-wrapper d-flex" <"pagination"p> <"datatable-pager-info float-right ml-auto" <"d-flex" <"datatable-pager-size"l> <"datatable-pager-detail"i> > > >',
  dom: '<"datatable-body table-responsive"t> <"datatable-footer d-flex" <"datatable-pagination"p> <"datatable-pager-info float-right ml-auto" <"d-flex" <"datatable-pager-size"l> <"datatable-pager-detail"i> > > >', // Needs button container
  select: true,
  searching: true,
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
    "loadingRecords": 'Please Wait <div class="loader"></div>',
    "processing":     'Processing <div class="loader"></div>',
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