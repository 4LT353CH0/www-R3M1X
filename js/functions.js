/** CUSTOM SCRIPTS **/

    var radioButton = $('input[type="radio"]');
    $(radioButton).each(function() {
        $(this).wrap("<span class='custom-radio'></span>");
        if ($(this).is(':checked')) {
            $(this).parent().addClass("selected");
        }
    });
    $(radioButton).click(function() {
        if ($(this).is(':checked')) {
            $(this).parent().addClass("selected");
        }
        $(radioButton).not(this).each(function() {
            $(this).parent().removeClass("selected");
        });
    });

    // if/else btn click & .active
    $('nav ul li').click(function() {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
        } //if
        else {
            //do nothing
        } //else
    });
    //selectizr plug custom option+select, crossbrowser
    $(function() {
        $('select').selectize();
    });

    //------------//
    // my scripts //
    //------------//  

    // 1.0 //Basic button animations

    $('header nav li').hover(function() {
        //  console.log('hovered');
        //$(this).find('p').toggleClass('active');
//      $(this).stop().animate({
//        backgroundColor: '#fff6f0'
//      },function(){
//        $(this).stop().animate({
//          backgroundColor: '#ff913d'
//        });
//      });
      $(this).find('p').toggleClass('hovered', 200, 'easeOutSine' );
    });