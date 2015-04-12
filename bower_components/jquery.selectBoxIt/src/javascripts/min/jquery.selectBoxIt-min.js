!function(t){"use strict";t(window.jQuery,window,document)}(function($,t,e,o){"use strict";$.widget("selectBox.selectBoxIt",{VERSION:"3.8.1",options:{showEffect:"none",showEffectOptions:{},showEffectSpeed:"medium",hideEffect:"none",hideEffectOptions:{},hideEffectSpeed:"medium",showFirstOption:!0,defaultText:"",defaultIcon:"",downArrowIcon:"",theme:"default",keydownOpen:!0,isMobile:function(){var e=navigator.userAgent||navigator.vendor||t.opera;return/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(e)},"native":!1,aggressiveChange:!1,selectWhenHidden:!0,viewport:$(t),similarSearch:!1,copyAttributes:["title","rel"],copyClasses:"button",nativeMousedown:!1,customShowHideEvent:!1,autoWidth:!0,html:!0,populate:"",dynamicPositioning:!0,hideCurrent:!1},getThemes:function(){var t=this,e=$(t.element).attr("data-theme")||"c";return{bootstrap:{focus:"active",hover:"",enabled:"enabled",disabled:"disabled",arrow:"caret",button:"btn",list:"dropdown-menu",container:"bootstrap",open:"open"},jqueryui:{focus:"ui-state-focus",hover:"ui-state-hover",enabled:"ui-state-enabled",disabled:"ui-state-disabled",arrow:"ui-icon ui-icon-triangle-1-s",button:"ui-widget ui-state-default",list:"ui-widget ui-widget-content",container:"jqueryui",open:"selectboxit-open"},jquerymobile:{focus:"ui-btn-down-"+e,hover:"ui-btn-hover-"+e,enabled:"ui-enabled",disabled:"ui-disabled",arrow:"ui-icon ui-icon-arrow-d ui-icon-shadow",button:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+e,list:"ui-btn ui-btn-icon-right ui-btn-corner-all ui-shadow ui-btn-up-"+e,container:"jquerymobile",open:"selectboxit-open"},"default":{focus:"selectboxit-focus",hover:"selectboxit-hover",enabled:"selectboxit-enabled",disabled:"selectboxit-disabled",arrow:"selectboxit-default-arrow",button:"selectboxit-btn",list:"selectboxit-list",container:"selectboxit-container",open:"selectboxit-open"}}},isDeferred:function(t){return $.isPlainObject(t)&&t.promise&&t.done},_create:function(t){var o=this,s=o.options.populate,i=o.options.theme;if(o.element.is("select"))return o.widgetProto=$.Widget.prototype,o.originalElem=o.element[0],o.selectBox=o.element,o.options.populate&&o.add&&!t&&o.add(s),o.selectItems=o.element.find("option"),o.firstSelectItem=o.selectItems.slice(0,1),o.documentHeight=$(e).height(),o.theme=$.isPlainObject(i)?$.extend({},o.getThemes()["default"],i):o.getThemes()[i]?o.getThemes()[i]:o.getThemes()["default"],o.currentFocus=0,o.blur=!0,o.textArray=[],o.currentIndex=0,o.currentText="",o.flipped=!1,t||(o.selectBoxStyles=o.selectBox.attr("style")),o._createDropdownButton()._createUnorderedList()._copyAttributes()._replaceSelectBox()._addClasses(o.theme)._eventHandlers(),o.originalElem.disabled&&o.disable&&o.disable(),o._ariaAccessibility&&o._ariaAccessibility(),o.isMobile=o.options.isMobile(),o._mobile&&o._mobile(),o.options["native"]&&this._applyNativeSelect(),o.triggerEvent("create"),o},_createDropdownButton:function(){var t=this,e=t.originalElemId=t.originalElem.id||"",o=t.originalElemValue=t.originalElem.value||"",s=t.originalElemName=t.originalElem.name||"",i=t.options.copyClasses,n=t.selectBox.attr("class")||"";return t.dropdownText=$("<span/>",{id:e&&e+"SelectBoxItText","class":"selectboxit-text",unselectable:"on",text:t.firstSelectItem.text()}).attr("data-val",o),t.dropdownImageContainer=$("<span/>",{"class":"selectboxit-option-icon-container"}),t.dropdownImage=$("<i/>",{id:e&&e+"SelectBoxItDefaultIcon","class":"selectboxit-default-icon",unselectable:"on"}),t.dropdown=$("<span/>",{id:e&&e+"SelectBoxIt","class":"selectboxit "+("button"===i?n:"")+" "+(t.selectBox.prop("disabled")?t.theme.disabled:t.theme.enabled),name:s,tabindex:t.selectBox.attr("tabindex")||"0",unselectable:"on"}).append(t.dropdownImageContainer.append(t.dropdownImage)).append(t.dropdownText),t.dropdownContainer=$("<span/>",{id:e&&e+"SelectBoxItContainer","class":"selectboxit-container "+t.theme.container+" "+("container"===i?n:"")}).append(t.dropdown),t},_createUnorderedList:function(){var t=this,e,o,s,i,n,r,a,l="",d=t.originalElemId||"",c=$("<ul/>",{id:d&&d+"SelectBoxItOptions","class":"selectboxit-options",tabindex:-1}),u,p,h,b,f,m;if(t.options.showFirstOption||(t.selectItems.first().attr("disabled","disabled"),t.selectItems=t.selectBox.find("option").slice(1)),t.selectItems.each(function(d){f=$(this),o="",s="",e=f.prop("disabled"),i=f.attr("data-icon")||"",n=f.attr("data-iconurl")||"",r=n?"selectboxit-option-icon-url":"",a=n?"style=\"background-image:url('"+n+"');\"":"",u=f.attr("data-selectedtext"),p=f.attr("data-text"),b=p?p:f.text(),m=f.parent(),m.is("optgroup")&&(o="selectboxit-optgroup-option",0===f.index()&&(s='<span class="selectboxit-optgroup-header '+m.first().attr("class")+'"data-disabled="true">'+m.first().attr("label")+"</span>")),f.attr("value",this.value),l+=s+'<li data-id="'+d+'" data-val="'+this.value+'" data-disabled="'+e+'" class="'+o+" selectboxit-option "+($(this).attr("class")||"")+'"><a class="selectboxit-option-anchor"><span class="selectboxit-option-icon-container"><i class="selectboxit-option-icon '+i+" "+(r||t.theme.container)+'"'+a+"></i></span>"+(t.options.html?b:t.htmlEscape(b))+"</a></li>",h=f.attr("data-search"),t.textArray[d]=e?"":h?h:b,this.selected&&(t._setText(t.dropdownText,u||b),t.currentFocus=d)}),t.options.defaultText||t.selectBox.attr("data-text")){var x=t.options.defaultText||t.selectBox.attr("data-text");t._setText(t.dropdownText,x),t.options.defaultText=x}return c.append(l),t.list=c,t.dropdownContainer.append(t.list),t.listItems=t.list.children("li"),t.listAnchors=t.list.find("a"),t.listItems.first().addClass("selectboxit-option-first"),t.listItems.last().addClass("selectboxit-option-last"),t.list.find("li[data-disabled='true']").not(".optgroupHeader").addClass(t.theme.disabled),t.dropdownImage.addClass(t.selectBox.attr("data-icon")||t.options.defaultIcon||t.listItems.eq(t.currentFocus).find("i").attr("class")),t.dropdownImage.attr("style",t.listItems.eq(t.currentFocus).find("i").attr("style")),t},_replaceSelectBox:function(){var t=this,e,s=t.originalElem.id||"",i=t.selectBox.attr("data-size"),n=t.listSize=i===o?"auto":"0"===i?"auto":+i,r,a;return t.selectBox.css("display","none").after(t.dropdownContainer),t.dropdownContainer.appendTo("body").addClass("selectboxit-rendering"),e=t.dropdown.height(),t.downArrow=$("<i/>",{id:s&&s+"SelectBoxItArrow","class":"selectboxit-arrow",unselectable:"on"}),t.downArrowContainer=$("<span/>",{id:s&&s+"SelectBoxItArrowContainer","class":"selectboxit-arrow-container",unselectable:"on"}).append(t.downArrow),t.dropdown.append(t.downArrowContainer),t.listItems.removeClass("selectboxit-selected").eq(t.currentFocus).addClass("selectboxit-selected"),r=t.downArrowContainer.outerWidth(!0),a=t.dropdownImage.outerWidth(!0),t.options.autoWidth&&(t.dropdown.css({width:"auto"}).css({width:t.list.outerWidth(!0)+r+a}),t.list.css({"min-width":t.dropdown.width()})),t.dropdownText.css({"max-width":t.dropdownContainer.outerWidth(!0)-(r+a)}),t.selectBox.after(t.dropdownContainer),t.dropdownContainer.removeClass("selectboxit-rendering"),"number"===$.type(n)&&(t.maxHeight=t.listAnchors.outerHeight(!0)*n),t},_scrollToView:function(t){var e=this,o=e.listItems.eq(e.currentFocus),s=e.list.scrollTop(),i=o.height(),n=o.position().top,r=Math.abs(n),a=e.list.height(),l;return"search"===t?i>a-n?e.list.scrollTop(s+(n-(a-i))):-1>n&&e.list.scrollTop(n-i):"up"===t?-1>n&&e.list.scrollTop(s-r):"down"===t&&i>a-n&&e.list.scrollTop(s+(r-a+i)),e},_callbackSupport:function(t){var e=this;return $.isFunction(t)&&t.call(e,e.dropdown),e},_setText:function(t,e){var o=this;return o.options.html?t.html(e):t.text(e),o},open:function(t){var e=this,o=e.options.showEffect,s=e.options.showEffectSpeed,i=e.options.showEffectOptions,n=e.options["native"],r=e.isMobile;return!e.listItems.length||e.dropdown.hasClass(e.theme.disabled)?e:(n||r||this.list.is(":visible")||(e.triggerEvent("open"),e._dynamicPositioning&&e.options.dynamicPositioning&&e._dynamicPositioning(),"none"===o?e.list.show():"show"===o||"slideDown"===o||"fadeIn"===o?e.list[o](s):e.list.show(o,i,s),e.list.promise().done(function(){e._scrollToView("search"),e.triggerEvent("opened")})),e._callbackSupport(t),e)},close:function(t){var e=this,o=e.options.hideEffect,s=e.options.hideEffectSpeed,i=e.options.hideEffectOptions,n=e.options["native"],r=e.isMobile;return n||r||!e.list.is(":visible")||(e.triggerEvent("close"),"none"===o?e.list.hide():"hide"===o||"slideUp"===o||"fadeOut"===o?e.list[o](s):e.list.hide(o,i,s),e.list.promise().done(function(){e.triggerEvent("closed")})),e._callbackSupport(t),e},toggle:function(){var t=this,e=t.list.is(":visible");e?t.close():e||t.open()},_keyMappings:{38:"up",40:"down",13:"enter",8:"backspace",9:"tab",32:"space",27:"esc"},_keydownMethods:function(){var t=this,e=t.list.is(":visible")||!t.options.keydownOpen;return{down:function(){t.moveDown&&e&&t.moveDown()},up:function(){t.moveUp&&e&&t.moveUp()},enter:function(){var e=t.listItems.eq(t.currentFocus);t._update(e),"true"!==e.attr("data-preventclose")&&t.close(),t.triggerEvent("enter")},tab:function(){t.triggerEvent("tab-blur"),t.close()},backspace:function(){t.triggerEvent("backspace")},esc:function(){t.close()}}},_eventHandlers:function(){var t=this,e=t.options.nativeMousedown,o=t.options.customShowHideEvent,s,i,n=t.focusClass,r=t.hoverClass,a=t.openClass;return this.dropdown.on({"click.selectBoxIt":function(){t.dropdown.trigger("focus",!0),t.originalElem.disabled||(t.triggerEvent("click"),e||o||t.toggle())},"mousedown.selectBoxIt":function(){$(this).data("mdown",!0),t.triggerEvent("mousedown"),e&&!o&&t.toggle()},"mouseup.selectBoxIt":function(){t.triggerEvent("mouseup")},"blur.selectBoxIt":function(){t.blur&&(t.triggerEvent("blur"),t.close(),$(this).removeClass(n))},"focus.selectBoxIt":function(e,o){var s=$(this).data("mdown");$(this).removeData("mdown"),s||o||setTimeout(function(){t.triggerEvent("tab-focus")},0),o||($(this).hasClass(t.theme.disabled)||$(this).addClass(n),t.triggerEvent("focus"))},"keydown.selectBoxIt":function(e){var o=t._keyMappings[e.keyCode],s=t._keydownMethods()[o];s&&(s(),!t.options.keydownOpen||"up"!==o&&"down"!==o||t.open()),s&&"tab"!==o&&e.preventDefault()},"keypress.selectBoxIt":function(e){var o=e.charCode||e.keyCode,s=t._keyMappings[e.charCode||e.keyCode],i=String.fromCharCode(o);t.search&&(!s||s&&"space"===s)&&t.search(i,!0,!0),"space"===s&&e.preventDefault()},"mouseenter.selectBoxIt":function(){t.triggerEvent("mouseenter")},"mouseleave.selectBoxIt":function(){t.triggerEvent("mouseleave")}}),t.list.on({"mouseover.selectBoxIt":function(){t.blur=!1},"mouseout.selectBoxIt":function(){t.blur=!0},"focusin.selectBoxIt":function(){t.dropdown.trigger("focus",!0)}}),t.list.on({"mousedown.selectBoxIt":function(){t._update($(this)),t.triggerEvent("option-click"),"false"===$(this).attr("data-disabled")&&"true"!==$(this).attr("data-preventclose")&&t.close(),setTimeout(function(){t.dropdown.trigger("focus",!0)},0)},"focusin.selectBoxIt":function(){t.listItems.not($(this)).removeAttr("data-active"),$(this).attr("data-active","");var e=t.list.is(":hidden");(t.options.searchWhenHidden&&e||t.options.aggressiveChange||e&&t.options.selectWhenHidden)&&t._update($(this)),$(this).addClass(n)},"mouseup.selectBoxIt":function(){e&&!o&&(t._update($(this)),t.triggerEvent("option-mouseup"),"false"===$(this).attr("data-disabled")&&"true"!==$(this).attr("data-preventclose")&&t.close())},"mouseenter.selectBoxIt":function(){"false"===$(this).attr("data-disabled")&&(t.listItems.removeAttr("data-active"),$(this).addClass(n).attr("data-active",""),t.listItems.not($(this)).removeClass(n),$(this).addClass(n),t.currentFocus=+$(this).attr("data-id"))},"mouseleave.selectBoxIt":function(){"false"===$(this).attr("data-disabled")&&(t.listItems.not($(this)).removeClass(n).removeAttr("data-active"),$(this).addClass(n),t.currentFocus=+$(this).attr("data-id"))},"blur.selectBoxIt":function(){$(this).removeClass(n)}},".selectboxit-option"),t.list.on({"click.selectBoxIt":function(t){t.preventDefault()}},"a"),t.selectBox.on({"change.selectBoxIt, internal-change.selectBoxIt":function(e,o){var n,r;o||(n=t.list.find('li[data-val="'+t.originalElem.value+'"]'),n.length&&(t.listItems.eq(t.currentFocus).removeClass(t.focusClass),t.currentFocus=+n.attr("data-id"))),n=t.listItems.eq(t.currentFocus),r=n.attr("data-selectedtext"),s=n.attr("data-text"),i=s?s:n.find("a").text(),t._setText(t.dropdownText,r||i),t.dropdownText.attr("data-val",t.originalElem.value),n.find("i").attr("class")&&(t.dropdownImage.attr("class",n.find("i").attr("class")).addClass("selectboxit-default-icon"),t.dropdownImage.attr("style",n.find("i").attr("style"))),t.triggerEvent("changed")},"disable.selectBoxIt":function(){t.dropdown.addClass(t.theme.disabled)},"enable.selectBoxIt":function(){t.dropdown.removeClass(t.theme.disabled)},"open.selectBoxIt":function(){var e=t.list.find("li[data-val='"+t.dropdownText.attr("data-val")+"']"),o;e.length||(e=t.listItems.not("[data-disabled=true]").first()),t.currentFocus=+e.attr("data-id"),o=t.listItems.eq(t.currentFocus),t.dropdown.addClass(a).removeClass(r).addClass(n),t.listItems.removeClass(t.selectedClass).removeAttr("data-active").not(o).removeClass(n),o.addClass(t.selectedClass).addClass(n),t.options.hideCurrent&&(t.listItems.show(),o.hide())},"close.selectBoxIt":function(){t.dropdown.removeClass(a)},"blur.selectBoxIt":function(){t.dropdown.removeClass(n)},"mouseenter.selectBoxIt":function(){$(this).hasClass(t.theme.disabled)||t.dropdown.addClass(r)},"mouseleave.selectBoxIt":function(){t.dropdown.removeClass(r)},destroy:function(t){t.preventDefault(),t.stopPropagation()}}),t},_update:function(t){var e=this,o,s,i,n=e.options.defaultText||e.selectBox.attr("data-text"),r=e.listItems.eq(e.currentFocus);"false"===t.attr("data-disabled")&&(o=e.listItems.eq(e.currentFocus).attr("data-selectedtext"),s=r.attr("data-text"),i=s?s:r.text(),(n&&e.options.html?e.dropdownText.html()===n:e.dropdownText.text()===n)&&e.selectBox.val()===t.attr("data-val")?e.triggerEvent("change"):(e.selectBox.val(t.attr("data-val")),e.currentFocus=+t.attr("data-id"),e.originalElem.value!==e.dropdownText.attr("data-val")&&e.triggerEvent("change")))},_addClasses:function(t){var e=this,o=e.focusClass=t.focus,s=e.hoverClass=t.hover,i=t.button,n=t.list,r=t.arrow,a=t.container,l=e.openClass=t.open;return e.selectedClass="selectboxit-selected",e.downArrow.addClass(e.selectBox.attr("data-downarrow")||e.options.downArrowIcon||r),e.dropdownContainer.addClass(a),e.dropdown.addClass(i),e.list.addClass(n),e},refresh:function(t,e){var o=this;return o._destroySelectBoxIt()._create(!0),e||o.triggerEvent("refresh"),o._callbackSupport(t),o},htmlEscape:function(t){return String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},triggerEvent:function(t){var e=this,o=e.options.showFirstOption?e.currentFocus:e.currentFocus-1>=0?e.currentFocus:0;return e.selectBox.trigger(t,{selectbox:e.selectBox,selectboxOption:e.selectItems.eq(o),dropdown:e.dropdown,dropdownOption:e.listItems.eq(e.currentFocus)}),e},_copyAttributes:function(){var t=this;return t._addSelectBoxAttributes&&t._addSelectBoxAttributes(),t},_realOuterWidth:function(t){if(t.is(":visible"))return t.outerWidth(!0);var e=this,o=t.clone(),s;return o.css({visibility:"hidden",display:"block",position:"absolute"}).appendTo("body"),s=o.outerWidth(!0),o.remove(),s}});var s=$.selectBox.selectBoxIt.prototype;s.add=function(t,e){this._populate(t,function(t){var o=this,s=$.type(t),i,n=0,r,a=[],l=o._isJSON(t),d=l&&o._parseJSON(t);if(t&&("array"===s||l&&d.data&&"array"===$.type(d.data))||"object"===s&&t.data&&"array"===$.type(t.data)){for(o._isJSON(t)&&(t=d),t.data&&(t=t.data),r=t.length;r-1>=n;n+=1)i=t[n],$.isPlainObject(i)?a.push($("<option/>",i)):"string"===$.type(i)&&a.push($("<option/>",{text:i,value:i}));o.selectBox.append(a)}else t&&"string"===s&&!o._isJSON(t)?o.selectBox.append(t):t&&"object"===s?o.selectBox.append($("<option/>",t)):t&&o._isJSON(t)&&$.isPlainObject(o._parseJSON(t))&&o.selectBox.append($("<option/>",o._parseJSON(t)));return o.dropdown?o.refresh(function(){o._callbackSupport(e)},!0):o._callbackSupport(e),o})},s._parseJSON=function(t){return JSON&&JSON.parse&&JSON.parse(t)||$.parseJSON(t)},s._isJSON=function(t){var e=this,o;try{return o=e._parseJSON(t),!0}catch(s){return!1}},s._populate=function(t,e){var o=this;return t=$.isFunction(t)?t.call():t,o.isDeferred(t)?t.done(function(t){e.call(o,t)}):e.call(o,t),o},s._ariaAccessibility=function(){var t=this,e=$("label[for='"+t.originalElem.id+"']");return t.dropdownContainer.attr({role:"combobox","aria-autocomplete":"list","aria-haspopup":"true","aria-expanded":"false","aria-owns":t.list[0].id}),t.dropdownText.attr({"aria-live":"polite"}),t.dropdown.on({"disable.selectBoxIt":function(){t.dropdownContainer.attr("aria-disabled","true")},"enable.selectBoxIt":function(){t.dropdownContainer.attr("aria-disabled","false")}}),e.length&&t.dropdownContainer.attr("aria-labelledby",e[0].id),t.list.attr({role:"listbox","aria-hidden":"true"}),t.listItems.attr({role:"option"}),t.selectBox.on({"open.selectBoxIt":function(){t.list.attr("aria-hidden","false"),t.dropdownContainer.attr("aria-expanded","true")},"close.selectBoxIt":function(){t.list.attr("aria-hidden","true"),t.dropdownContainer.attr("aria-expanded","false")}}),t},s._addSelectBoxAttributes=function(){var t=this;return t._addAttributes(t.selectBox.prop("attributes"),t.dropdown),t.selectItems.each(function(e){t._addAttributes($(this).prop("attributes"),t.listItems.eq(e))}),t},s._addAttributes=function(t,e){var o=this,s=o.options.copyAttributes;return t.length&&$.each(t,function(t,o){var i=o.name.toLowerCase(),n=o.value;"null"===n||-1===$.inArray(i,s)&&-1===i.indexOf("data")||e.attr(i,n)}),o},s.destroy=function(t){var e=this;return e._destroySelectBoxIt(),e.widgetProto.destroy.call(e),e._callbackSupport(t),e},s._destroySelectBoxIt=function(){var t=this;return t.dropdown.off(".selectBoxIt"),$.contains(t.dropdownContainer[0],t.originalElem)&&t.dropdownContainer.before(t.selectBox),t.dropdownContainer.remove(),t.selectBox.removeAttr("style").attr("style",t.selectBoxStyles),t.triggerEvent("destroy"),t},s.disable=function(t){var e=this;return e.options.disabled||(e.close(),e.selectBox.attr("disabled","disabled"),e.dropdown.removeAttr("tabindex").removeClass(e.theme.enabled).addClass(e.theme.disabled),e.setOption("disabled",!0),e.triggerEvent("disable")),e._callbackSupport(t),e},s.disableOption=function(t,e){var o=this,s,i,n,r=$.type(t);return"number"===r&&(o.close(),s=o.selectBox.find("option").eq(t),o.triggerEvent("disable-option"),s.attr("disabled","disabled"),o.listItems.eq(t).attr("data-disabled","true").addClass(o.theme.disabled),o.currentFocus===t&&(i=o.listItems.eq(o.currentFocus).nextAll("li").not("[data-disabled='true']").first().length,n=o.listItems.eq(o.currentFocus).prevAll("li").not("[data-disabled='true']").first().length,i?o.moveDown():n?o.moveUp():o.disable())),o._callbackSupport(e),o},s._isDisabled=function(t){var e=this;return e.originalElem.disabled&&e.disable(),e},s._dynamicPositioning=function(){var t=this;if("number"===$.type(t.listSize))t.list.css("max-height",t.maxHeight||"none");else{var e=t.dropdown.offset().top,o=t.list.data("max-height")||t.list.outerHeight(),s=t.dropdown.outerHeight(),i=t.options.viewport,n=i.height(),r=$.isWindow(i.get(0))?i.scrollTop():i.offset().top,a=n+r>=e+s+o,l=!a;if(t.list.data("max-height")||t.list.data("max-height",t.list.outerHeight()),l)if(t.dropdown.offset().top-r>=o)t.list.css("max-height",o),t.list.css("top",t.dropdown.position().top-t.list.outerHeight());else{var d=Math.abs(e+s+o-(n+r)),c=Math.abs(t.dropdown.offset().top-r-o);c>d?(t.list.css("max-height",o-d-s/2),t.list.css("top","auto")):(t.list.css("max-height",o-c-s/2),t.list.css("top",t.dropdown.position().top-t.list.outerHeight()))}else t.list.css("max-height",o),t.list.css("top","auto")}return t},s.enable=function(t){var e=this;return e.options.disabled&&(e.triggerEvent("enable"),e.selectBox.removeAttr("disabled"),e.dropdown.attr("tabindex",0).removeClass(e.theme.disabled).addClass(e.theme.enabled),e.setOption("disabled",!1),e._callbackSupport(t)),e},s.enableOption=function(t,e){var o=this,s,i=0,n,r,a=$.type(t);return"number"===a&&(s=o.selectBox.find("option").eq(t),o.triggerEvent("enable-option"),s.removeAttr("disabled"),o.listItems.eq(t).attr("data-disabled","false").removeClass(o.theme.disabled)),o._callbackSupport(e),o},s.moveDown=function(t){var e=this;e.currentFocus+=1;var o="true"===e.listItems.eq(e.currentFocus).attr("data-disabled")?!0:!1,s=e.listItems.eq(e.currentFocus).nextAll("li").not("[data-disabled='true']").first().length;if(e.currentFocus===e.listItems.length)e.currentFocus-=1;else{if(o&&s)return e.listItems.eq(e.currentFocus-1).blur(),void e.moveDown();o&&!s?e.currentFocus-=1:(e.listItems.eq(e.currentFocus-1).blur().end().eq(e.currentFocus).focusin(),e._scrollToView("down"),e.triggerEvent("moveDown"))}return e._callbackSupport(t),e},s.moveUp=function(t){var e=this;e.currentFocus-=1;var o="true"===e.listItems.eq(e.currentFocus).attr("data-disabled")?!0:!1,s=e.listItems.eq(e.currentFocus).prevAll("li").not("[data-disabled='true']").first().length;if(-1===e.currentFocus)e.currentFocus+=1;else{if(o&&s)return e.listItems.eq(e.currentFocus+1).blur(),void e.moveUp();o&&!s?e.currentFocus+=1:(e.listItems.eq(this.currentFocus+1).blur().end().eq(e.currentFocus).focusin(),e._scrollToView("up"),e.triggerEvent("moveUp"))}return e._callbackSupport(t),e},s._setCurrentSearchOption=function(t){var e=this;return(e.options.aggressiveChange||e.options.selectWhenHidden||e.listItems.eq(t).is(":visible"))&&e.listItems.eq(t).data("disabled")!==!0&&(e.listItems.eq(e.currentFocus).blur(),e.currentIndex=t,e.currentFocus=t,e.listItems.eq(e.currentFocus).focusin(),e._scrollToView("search"),e.triggerEvent("search")),e},s._searchAlgorithm=function(t,e){var o=this,s=!1,i,n,r,a,l=o.textArray,d=o.currentText;for(i=t,r=l.length;r>i;i+=1){for(a=l[i],n=0;r>n;n+=1)-1!==l[n].search(e)&&(s=!0,n=r);if(s||(o.currentText=o.currentText.charAt(o.currentText.length-1).replace(/[|()\[{.+*?$\\]/g,"\\$0"),d=o.currentText),e=new RegExp(d,"gi"),d.length<3){if(e=new RegExp(d.charAt(0),"gi"),-1!==a.charAt(0).search(e))return o._setCurrentSearchOption(i),(a.substring(0,d.length).toLowerCase()!==d.toLowerCase()||o.options.similarSearch)&&(o.currentIndex+=1),!1}else if(-1!==a.search(e))return o._setCurrentSearchOption(i),!1;if(a.toLowerCase()===o.currentText.toLowerCase())return o._setCurrentSearchOption(i),o.currentText="",!1}return!0},s.search=function(t,e,o){var s=this;o?s.currentText+=t.replace(/[|()\[{.+*?$\\]/g,"\\$0"):s.currentText=t.replace(/[|()\[{.+*?$\\]/g,"\\$0");var i=s._searchAlgorithm(s.currentIndex,new RegExp(s.currentText,"gi"));return i&&s._searchAlgorithm(0,s.currentText),s._callbackSupport(e),s},s._updateMobileText=function(){var t=this,e,o,s;e=t.selectBox.find("option").filter(":selected"),o=e.attr("data-text"),s=o?o:e.text(),t._setText(t.dropdownText,s),t.list.find('li[data-val="'+e.val()+'"]').find("i").attr("class")&&t.dropdownImage.attr("class",t.list.find('li[data-val="'+e.val()+'"]').find("i").attr("class")).addClass("selectboxit-default-icon")},s._applyNativeSelect=function(){var t=this;return t.dropdownContainer.append(t.selectBox),t.dropdown.attr("tabindex","-1"),t.selectBox.css({display:"block",visibility:"visible",width:t._realOuterWidth(t.dropdown),height:t.dropdown.outerHeight(),opacity:"0",position:"absolute",top:"0",left:"0",cursor:"pointer","z-index":"999999",margin:t.dropdown.css("margin"),padding:"0","-webkit-appearance":"menulist-button"}),t.originalElem.disabled&&t.triggerEvent("disable"),this},s._mobileEvents=function(){var t=this;t.selectBox.on({"changed.selectBoxIt":function(){t.hasChanged=!0,t._updateMobileText(),t.triggerEvent("option-click")},"mousedown.selectBoxIt":function(){t.hasChanged||!t.options.defaultText||t.originalElem.disabled||(t._updateMobileText(),t.triggerEvent("option-click"))},"enable.selectBoxIt":function(){t.selectBox.removeClass("selectboxit-rendering")},"disable.selectBoxIt":function(){t.selectBox.addClass("selectboxit-rendering")}})},s._mobile=function(t){var e=this;return e.isMobile&&(e._applyNativeSelect(),e._mobileEvents()),this},s.remove=function(t,e){var o=this,s=$.type(t),i,n=0,r,a="";if("array"===s){for(r=t.length;r-1>=n;n+=1)i=t[n],"number"===$.type(i)&&(a+=a.length?", option:eq("+i+")":"option:eq("+i+")");o.selectBox.find(a).remove()}else"number"===s?o.selectBox.find("option").eq(t).remove():o.selectBox.find("option").remove();return o.dropdown?o.refresh(function(){o._callbackSupport(e)},!0):o._callbackSupport(e),o},s.selectOption=function(t,e){var o=this,s=$.type(t);return"number"===s?o.selectBox.val(o.selectItems.eq(t).val()).change():"string"===s&&o.selectBox.val(t).change(),o._callbackSupport(e),o},s.setOption=function(t,e,o){var s=this;return"string"===$.type(t)&&(s.options[t]=e),s.refresh(function(){s._callbackSupport(o)},!0),s},s.setOptions=function(t,e){var o=this;return $.isPlainObject(t)&&(o.options=$.extend({},o.options,t)),o.refresh(function(){o._callbackSupport(e)},!0),o},s.wait=function(t,e){var o=this;return o.widgetProto._delay.call(o,e,t),o}});