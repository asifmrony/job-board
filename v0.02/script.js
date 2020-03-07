// $('body').hide();
// 'use strict';

var numberOfItems =  $('#page .my-card').length; //get total number of items that should be paginated
// alert(numberOfItems); // should be 6
var limitPerPage = 4; //item limit per each page
$('#page .my-card:gt('+ (limitPerPage - 1) +')').hide(); //Hide all items after 3 items

var totalPages = Math.round(numberOfItems / limitPerPage); // get number of pages

// Add first page marker
$(".pagination").append("<li class='page-item active current-page'><a class='page-link' href='#'>" + 1 + "<span class='sr-only'>(current)</span></a></li>");

// Loop to insert page number for each sets of items equal to page limit (e.g., limit of 3 with 9 total items = insert 3 pages)
for (var i = 2; i <= totalPages; i++) {
    $(".pagination").append("<li class='page-item current-page'><a class='page-link' href='#'>" + i + "</a></li>"); // insert page number into pagination
}

//Add Next Page Maker
$(".pagination").append("<li class='page-item' id = 'next-page'><a class='page-link' href='#'>" + 'Next' + "</a></li>");


$('.pagination .current-page').on('click', function() {
    if($(this).hasClass("active")){
        return false;
    }else {
        var currentPage =  $(this).index();
        $(".pagination li").removeClass('active'); // Remove the 'active' class status from the page that is currently being displayed
        $(this).addClass('active');

        $("#page .my-card").hide();

        var grandTotal = limitPerPage * currentPage;

        for(var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#page .my-card:eq("+ i + ")").show();
        }
    }
});


$("#next-page").on("click", function() {
    var currentPage = $(".pagination li.active").index();
    if(currentPage == totalPages) {
        return false;
    } else {
        currentPage++;
        $(".pagination li").removeClass('active');
        $("#page .my-card").hide();

        var grandTotal = limitPerPage * currentPage;

        for(var i = grandTotal - limitPerPage; i < grandTotal; i++) {
            $("#page .my-card:eq("+ i + ")").show();
        }

        $(".pagination li.current-page:eq(" + (currentPage - 1) + ")").addClass('active'); // Make new page number the 'active' page
    }
})