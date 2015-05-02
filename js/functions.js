/** CUSTOM SCRIPTS **/
$( document ).ready(function() {

    var radioButton = $('input[type="radio"]');
    $(radioButton).each(function(){
        $(this).wrap( "<span class='custom-radio'></span>" );
        if($(this).is(':checked')){
            $(this).parent().addClass("selected");
        }
    });
    $(radioButton).click(function(){
        if($(this).is(':checked')){
            $(this).parent().addClass("selected");
        }
        $(radioButton).not(this).each(function(){
            $(this).parent().removeClass("selected");
        });
    });
    alert('yep');

// if/else btn click & .active
$('nav ul li').click(function(){
    if(!$(this).hasClass('active')) {
        $(this).addClass('active');
    }//if
    else{
        //do nothing
}//else
});
//selectizr plug custom option+select, crossbrowser
$(function() {
    $('select').selectize();
});
});// doc ready




