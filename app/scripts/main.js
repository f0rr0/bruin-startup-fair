$("#toggle-info").click(function(){
  if($(".info").hasClass("current")) {
    $(".wrapper").removeClass("move-right move-left").addClass("move-center");
    $(".info").removeClass("current");
    $(".main").addClass("current");
  }
  else {
    $(".wrapper").removeClass("move-left move-center").addClass("move-right");
    $(".info").addClass("current");
    $(".main").removeClass("current");
  }
  isAnimating=false;
})
$("#toggle-contact").click(function(){
  if($(".contact").hasClass("current")) {
    $(".wrapper").removeClass("move-right move-left").addClass("move-center");
    $(".contact").removeClass("current");
    $(".main").addClass("current");
  }
  else {
    $(".wrapper").removeClass("move-left move-center").addClass("move-left");
    $(".contact").addClass("current");
    $(".main").removeClass("current");
  }
  isAnimating=false;
})
