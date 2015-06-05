        head.load("js/min/contribs/jquery-1.10.2.min.js",
            "js/plugins/jquery-ui-toggleclass.easing.1-11.min.js",
            //<select> plug
            "bower_components/selectize/dist/js/standalone/selectize.min.js",
            // SVG plugs
            // "bower_components/Snap.svg/dist/snap.svg-min.js",
            // "bower_components/lazy-line-painter/jquery.lazylinepainter-1.5.1.min.js",
            function() {
                //                 alert('!!');
                //                "functions-min.js";

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
                $('<balise>').click(function() {
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

                // 1.0 // Header

                //hover main nav functions
                $('html.no-touch header nav .menu li').hover(function() {
                    //background & text
                    $(this).stop().animate({
                        backgroundColor: '#fff6f0'
                    }, 600, 'easeInBounce');
                    $(this).find('a, span').stop().animate({
                        color: '#ff913d'
                    }, 600, 'easeOutBounce');
                    //img first-child
                    $(this).find('aside img:first-child').stop().delay(500).animate({
                        marginTop: '-35px'
                    }, 0);
                    //img last-child
                    $(this).find('aside img:last-child').stop().delay(0).animate({
                        marginTop: '-54px'
                    }, 0);
                }, function() {
                    //background & text
                    $(this).stop().animate({
                        backgroundColor: '#ff913d'
                    }, 600, 'easeInBounce');
                    $(this).find('a, span').stop().animate({
                        color: '#fff6f0'
                    }, 600, 'easeOutBounce');
                    $(this).find('aside img:first-child').stop().delay(0).animate({
                        marginTop: '0'
                    }, 0, 0, 'easeInOutSine');
                    $(this).find('aside img:last-child').stop().delay(500).animate({
                        marginTop: '-19px'
                    }, 0);
                });
                $('html.no-touch .navigation ul.pages li.onglet a, html.no-touch .navigation ul.close span').hover(function() {
                    $(this).stop().animate({
                        color: '#fff6f0'
                    }, 100, 'easeInSine');
                }, function() {
                    $(this).stop().delay(400).animate({
                        color: '#cc7431'
                    }, 600, 'easeOutSine');
                });
                // click fonctions
                $('ul.menu li:last-child').click(function() {
                    // console.log('logged');
                    $(this).parent().siblings('.navigation').stop().animate({
                        left: '33.334%'
                    }, 500, 'easeInOutSine');
                });
                $('.navigation ul.close').click(function() {
                    // console.log('fdds');
                    $(this).parent('.navigation').stop().animate({
                        left: '125%'
                    }, 500, 'easeInOutSine');
                });
                //if scroll hide inscription
                $(window).scroll(function() {
                    if ($(window).scrollTop() > 30) {
                        $('header.star .inscription').stop().animate({
                            marginTop: '-80px'
                        }, 200);
                    } else {
                        //get back to original
                        $('header.star .inscription').stop().show(2, function() {
                            $(this).animate({
                                marginTop: '0px'
                            }, 100);
                        });
                    }
                }); //fin condition

                $(window).scroll(function() {
                    if ($(window).scrollTop() > 800) {
                        $('header.star nav.md-show li').stop().animate({
                            height: '50px'
                        }, 1000, 'easeOutSine');
                        $('header.star nav.md-show li form').stop().animate({
                            marginTop: '-3px'
                        }, 1000, 'easeOutSine');
                    } else {
                        //get back to original
                        $('header.star nav.md-show li').stop().animate({
                            height: '85px'
                        }, 1000, 'easeOutSine');
                        $('header.star nav.md-show li form').stop().animate({
                            marginTop: '14px'
                        }, 1000, 'easeOutSine');
                    }
                }); //fin condition

            }); //end personal functions and scripts in head