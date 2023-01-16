//live search
$(document).ready(function(){
    $("#search").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#announcements li").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

  //pagination

      $(document).ready(function(){
      var itemsPerPage = 3;
      var currentPage = 1;
      var announcements = $('#announcements li');
      var numPages = Math.ceil(announcements.length/itemsPerPage);

      announcements.hide();
      announcements.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage).show();

      for(var i = 1; i <= numPages; i++){
        $('#pagination .page:last').after('<a href="#" class="page">' + i + '</a>');
      }

      $('#pagination .page').on('click', function(){
        var goToPage = parseInt($(this).text());
        currentPage = goToPage;
        announcements.hide();
        announcements.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage).show();
        $('#pagination .page').removeClass('active');
        $(this).addClass('active');
      });

      $('#pagination .prev').on('click', function(){
        if(currentPage > 1){
          currentPage--;
          announcements.hide();
          announcements.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage).show();
          $('#pagination .page').removeClass('active');
          $('#pagination .page').eq(currentPage-1).addClass('active');
        }
      });

      $('#pagination .next').on('click', function(){
        if(currentPage < numPages){
          currentPage++;
          announcements.hide();
          announcements.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage).show();
          $('#pagination .page').removeClass('active');
          $('#pagination .page').eq(currentPage-1).addClass('active');
        }
      });
    });