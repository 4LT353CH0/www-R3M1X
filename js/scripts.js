        head.load("js/min/contribs/jquery-1.10.2.min.js",
            "js/plugins/jquery-ui-toggleclass.easing.1-11.min.js",
            //<select> plug
            "bower_components/selectize/dist/js/standalone/selectize.min.js",
            // SVG plugs
            // "bower_components/Snap.svg/dist/snap.svg-min.js",
            // "bower_components/lazy-line-painter/jquery.lazylinepainter-1.5.1.min.js",
            function() {
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
                //selectizr plug custom option+select, crossbrowser
                $(function() {
                    $('select').selectize();
                });

                //------------//
                // my scripts // 
                //------------//  

            //My scripts here    
            
//                                 alert('!!');
            }); //end personal functions and scripts in head