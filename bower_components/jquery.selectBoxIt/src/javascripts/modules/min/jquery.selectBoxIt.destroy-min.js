selectBoxIt.destroy=function(t){var e=this;return e._destroySelectBoxIt(),e.widgetProto.destroy.call(e),e._callbackSupport(t),e},selectBoxIt._destroySelectBoxIt=function(){var t=this;return t.dropdown.off(".selectBoxIt"),$.contains(t.dropdownContainer[0],t.originalElem)&&t.dropdownContainer.before(t.selectBox),t.dropdownContainer.remove(),t.selectBox.removeAttr("style").attr("style",t.selectBoxStyles),t.triggerEvent("destroy"),t};