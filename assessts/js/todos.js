
  $("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});

//click on X to delete Todo
$("ul").on("click","span" , function(event){
   $(this).parent().fadeOut(500,function(){
   $(this).remove();
  });
  event.stopPropagation(); //stops from bubbling other elements

});

$("input[type='text']").keypress(function(event){
    if(event.which===13){
    	var todoText= $(this).val();// grabbing the text from input
    	$(this).val(""); // clearing the input

    	$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText +"</li>")
    }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});