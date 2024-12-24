$("button").click(function(){
    $("h1").animate({opacity:0.5});
})

$(document).keydown(function(event){
    $("h1").html(event.key);
})