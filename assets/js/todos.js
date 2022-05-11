//check off specific task by clicking 
$('ul').on('click', 'li', function(){
    $(this).toggleClass('taskToggle');
});

//deleting todo's using buttons
$('ul').on('click', 'li span', function(event){
    $(this).parent().fadeOut(800, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

//genrating new todo's using input
$('input[type="text"]').keypress(function(event){
    if(event.which === 13){
        //grabbing text from input
        var newText = $(this).val();
        console.log(newText);
        //creating todo's - li under ul
        $('ul').append('<li><span><i class="fas fa-trash"></i></span>' + newText + '</li>');
        //clearing input field
        $(this).val("");   
    }
});

//toggleing the edit icon
$("#editIcon").on("click",function(){
    $('input[type="text"]').fadeToggle();
});