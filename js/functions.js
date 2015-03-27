/*--FUNCTIONS.JS--*/

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
/** CUSTOM SCRIPTS **/
$( document ).ready(function() {
    //jQuery version
    //console.log("Jquery Version : "+jQuery.fn.jquery);
    //Custom radio buttons
    /*var radioButton = $('input[type="radio"]');
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
});//end function radio buttons*/
    //Custom checkbox buttons
    /*var checkboxButton = $('input[type="checkbox"]');
    $(checkboxButton).each(function(){
        $(this).wrap( "<span class='custom-checkbox'></span>" );
        if($(this).is(':checked')){
            $(this).parent().addClass("selected");
        }
    });
    $(checkboxButton).click(function(){
        if($(this).is(':checked')){
            $(this).parent().addClass("selected");
        }
        $(checkboxButton).not(this).each(function(){
            $(this).parent().removeClass("selected");
        });
    });*///end function radio buttons
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
//

//if/else btn click & .active
$('.nav').click(function(){
    if(!$(this).hasClass('active')) {
        $(this).addClass('active');
    }//if
    else{
        //do nothing
}//else
});

/*$(.navBtn).click(function(){
    if(!$(this).hasClass('active')){
        $(this).addClass("active");
    }
    else{}
};*/
});//end doc ready




