!function(){for(var e,i=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],t=n.length,o=window.console=window.console||{};t--;)e=n[t],o[e]||(o[e]=i)}(),$(document).ready(function(){var e=$('input[type="radio"]');$(e).each(function(){$(this).wrap("<span class='custom-radio'></span>"),$(this).is(":checked")&&$(this).parent().addClass("selected")}),$(e).click(function(){$(this).is(":checked")&&$(this).parent().addClass("selected"),$(e).not(this).each(function(){$(this).parent().removeClass("selected")})})});