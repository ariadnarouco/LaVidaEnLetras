$(window).scroll(function(event){
  $("header").addClass();
});

$(".my-menu li").mouseover(function(event){
  colorMe(event);
});

$(".my-menu li").mouseout(function(event){
  colorMe(event);
});


$(".toggle").click(function () {
  togglePost();
});
