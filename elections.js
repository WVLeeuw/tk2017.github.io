$("document").ready(function() {
  $('.btn').on('click', function() {
    var infoId = $(this).attr("data-infoId");
    $('#'+infoId).slideToggle(200);
  });
});
