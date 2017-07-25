function colorMe(event) {
  var e = event.currentTarget;
  var element = $("#".concat(e.id));
  $("#".concat(e.id)).toggleClass("my-menu-over");
}

function togglePost() {
   if($(".card p").hasClass("expand-post")){
     $('.card p').fadeIn(500, function() {
          $('.card p').removeClass('expand-post');
       });
   }else{
     $('.card p').fadeOut(500, function() {
          $('.card p').addClass('expand-post');
       });
   }
}
