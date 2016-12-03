$("document").ready(function() {
  $(".btn").on('click', function() {
    var textId = $(this).attr('data-textId');
    $('#'+textId).slideToggle(200);
  });
});
