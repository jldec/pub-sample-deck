!function(){return function t(e,i,n){function r(s,a){if(!i[s]){if(!e[s]){var l="function"==typeof require&&require;if(!a&&l)return l(s,!0);if(o)return o(s,!0);var d=new Error("Cannot find module '"+s+"'");throw d.code="MODULE_NOT_FOUND",d}var c=i[s]={exports:{}};e[s][0].call(c.exports,function(t){return r(e[s][1][t]||t)},c,c.exports,t,e,i,n)}return i[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}}()({1:[function(t,e,i){var n,r;n=this,r=function(t,e){var i=window,n=document,r={on:function(t,e,n){"addEventListener"in i?t.addEventListener(e,n,!1):t.attachEvent("on"+e,n)},off:function(t,e,n){"removeEventListener"in i?t.removeEventListener(e,n,!1):t.detachEvent("on"+e,n)},bind:function(t,e){return function(){t.apply(e,arguments)}},isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},config:function(t,e){return null!=t?t:e},transSupport:!1,useFilter:/msie [678]/i.test(navigator.userAgent),_checkTransition:function(){var t=n.createElement("div"),e={webkit:"webkit",Moz:"",O:"o",ms:"MS"};for(var i in e)i+"Transition"in t.style&&(this.vendorPrefix=e[i],this.transSupport=!0)}};r._checkTransition();var o=function(t){t||(t={}),this.queue=[],this.baseCls=t.baseCls||"humane",this.addnCls=t.addnCls||"",this.timeout="timeout"in t?t.timeout:2500,this.waitForMove=t.waitForMove||!1,this.clickToClose=t.clickToClose||!1,this.timeoutAfterMove=t.timeoutAfterMove||!1,this.container=t.container;try{this._setupEl()}catch(t){r.on(i,"load",r.bind(this._setupEl,this))}};return o.prototype={constructor:o,_setupEl:function(){var t=n.createElement("div");if(t.style.display="none",!this.container){if(!n.body)throw"document.body is null";this.container=n.body}this.container.appendChild(t),this.el=t,this.removeEvent=r.bind(function(){var t=r.config(this.currentMsg.timeoutAfterMove,this.timeoutAfterMove);t?setTimeout(r.bind(this.remove,this),t):this.remove()},this),this.transEvent=r.bind(this._afterAnimation,this),this._run()},_afterTimeout:function(){r.config(this.currentMsg.waitForMove,this.waitForMove)?this.removeEventsSet||(r.on(n.body,"mousemove",this.removeEvent),r.on(n.body,"click",this.removeEvent),r.on(n.body,"keypress",this.removeEvent),r.on(n.body,"touchstart",this.removeEvent),this.removeEventsSet=!0):this.remove()},_run:function(){if(!this._animating&&this.queue.length&&this.el){this._animating=!0,this.currentTimer&&(clearTimeout(this.currentTimer),this.currentTimer=null);var t=this.queue.shift();r.config(t.clickToClose,this.clickToClose)&&(r.on(this.el,"click",this.removeEvent),r.on(this.el,"touchstart",this.removeEvent));var e=r.config(t.timeout,this.timeout);e>0&&(this.currentTimer=setTimeout(r.bind(this._afterTimeout,this),e)),r.isArray(t.html)&&(t.html="<ul><li>"+t.html.join("<li>")+"</ul>"),this.el.innerHTML=t.html,this.currentMsg=t,this.el.className=this.baseCls,r.transSupport?(this.el.style.display="block",setTimeout(r.bind(this._showMsg,this),50)):this._showMsg()}},_setOpacity:function(t){if(r.useFilter)try{this.el.filters.item("DXImageTransform.Microsoft.Alpha").Opacity=100*t}catch(t){}else this.el.style.opacity=String(t)},_showMsg:function(){var t=r.config(this.currentMsg.addnCls,this.addnCls);if(r.transSupport)this.el.className=this.baseCls+" "+t+" "+this.baseCls+"-animate";else{var e=0;this.el.className=this.baseCls+" "+t+" "+this.baseCls+"-js-animate",this._setOpacity(0),this.el.style.display="block";var i=this,n=setInterval(function(){e<1?((e+=.1)>1&&(e=1),i._setOpacity(e)):clearInterval(n)},30)}},_hideMsg:function(){var t=r.config(this.currentMsg.addnCls,this.addnCls);if(r.transSupport)this.el.className=this.baseCls+" "+t,r.on(this.el,r.vendorPrefix?r.vendorPrefix+"TransitionEnd":"transitionend",this.transEvent);else var e=1,i=this,n=setInterval(function(){e>0?((e-=.1)<0&&(e=0),i._setOpacity(e)):(i.el.className=i.baseCls+" "+t,clearInterval(n),i._afterAnimation())},30)},_afterAnimation:function(){r.transSupport&&r.off(this.el,r.vendorPrefix?r.vendorPrefix+"TransitionEnd":"transitionend",this.transEvent),this.currentMsg.cb&&this.currentMsg.cb(),this.el.style.display="none",this._animating=!1,this._run()},remove:function(t){var e="function"==typeof t?t:null;r.off(n.body,"mousemove",this.removeEvent),r.off(n.body,"click",this.removeEvent),r.off(n.body,"keypress",this.removeEvent),r.off(n.body,"touchstart",this.removeEvent),r.off(this.el,"click",this.removeEvent),r.off(this.el,"touchstart",this.removeEvent),this.removeEventsSet=!1,e&&this.currentMsg&&(this.currentMsg.cb=e),this._animating?this._hideMsg():e&&e()},log:function(t,e,i,n){var r={};if(n)for(var o in n)r[o]=n[o];if("function"==typeof e)i=e;else if(e)for(var o in e)r[o]=e[o];return r.html=t,i&&(r.cb=i),this.queue.push(r),this._run(),this},spawn:function(t){var e=this;return function(i,n,r){return e.log.call(e,i,n,r,t),e}},create:function(t){return new o(t)}},new o},void 0!==e?e.exports=r():"function"==typeof define&&"object"==typeof define.amd?define(r):n.humane=r()},{}],2:[function(t,e,i){var n=t("humane-js").create({waitForMove:!0});window.onGeneratorLoaded=function(t){var e,i,r,o=t.opts,s=(t.util,o.log),a=location.href.replace(/^(.*?:\/\/[^\/]+)\/.*$/,"$1"+o.staticRoot+o.editorPrefix),l=$(".outer").get(0),d={$name:$(".name"),$edit:$("textarea.editor"),$updates:$(".updateslist"),$uploads:$(".uploadsform"),binding:""},c=$("iframe.preview").get(0),u=!0,h=setInterval(function(){var t=(r=c.contentWindow)&&r.$;if(!t||t.editorLoaded)return;var e=r.document;e.addEventListener("dragover",function(t){M(t.clientX,t.clientY,!0),t.preventDefault()}),e.addEventListener("drop",function(t){t.preventDefault()}),pRef=r.pubRef||{};var n=pRef.relPath||"";i=t('<link rel="stylesheet" href="'+n+'/pub/css/pub-preview.css">'),t("head").append(i),i.get(0).disabled=!0;var o=t('<script src="'+n+'/pub/js/pub-preview.js"><\/script>');t("body").append(o),t.editorLoaded=!0,clearInterval(h)},150);t.on("nav",g),t.on("loaded",g),t.on("notify",function(t){s(t),n.log(t)});var f=/iPad|iPhone/i.test(navigator.userAgent);function v(){t.clientSaveHoldText(),t.clientSaveUnThrottled()}function m(){var t=i&&i.get(0);t&&(t.disabled?(t.disabled=!1,r.addEventListener("click",p,!0)):(t.disabled=!0,r.removeEventListener("click",p,!0)))}function p(e){for(var i,n=e.target;n&&"HTML"!==n.nodeName&&!n.getAttribute("data-render-html");)n=n.parentNode;n&&(i=n.getAttribute("data-render-html"))&&(b(t.fragment$[i]),m(),e.preventDefault())}function g(e,i,n){e?(history.replaceState(null,null,a+e+(i||"")+(n||"")),b(t.fragment$[e+n])):b(t.fragment$[d.binding]),T()}function b(e){d.binding&&d.holding&&(t.clientUpdateFragmentText(d.binding,d.$edit.val(),!0),d.holding=!1),e?(d.$name.text(e._href),e._holdUpdates?y(e._holdText):y(e._hdr+e._txt),d.binding=e._href,w()):(d.$name.text(""),y(""),d.binding="")}function y(t){var e=d.$edit.get(0).selectionStart,i=d.$edit.clone().val(t),n=i.get(0);d.$edit.replaceWith(i),d.$edit=i,i.on("keyup",E),n.selectionStart=e,n.selectionEnd=e,d.$edit.focus(T).focus()}function E(){d.binding&&("hold"===t.clientUpdateFragmentText(d.binding,d.$edit.val())&&(d.holding=!0),w())}function w(){t.isFragmentModified(d.binding)?d.$name.addClass("modified"):d.$name.removeClass("modified")}function _(t){return t.is(":hidden")?(d.$edit.addClass("showcontrols"),t.slideDown(150),!0):(t.slideUp(150),d.$edit.removeClass("showcontrols"),!1)}function T(){d.$updates.slideUp(150),d.$uploads.slideUp(150),d.$edit.removeClass("showcontrols")}function M(t,i,n){var r=u?t/l.clientWidth:(n?i:i-25)/(l.clientHeight-25),o=n?e+100*r:100*r;o>=0&&C(o)}function C(t){var i,n,r=!1;-1===t?(r=!0,i=10,n=e||Number(localStorage.editorSize)||50,t=i>n?i:n):t%=100,(r||e!==t)&&(t&&(localStorage.editorSize=e=t),u?($(".left.col").css({width:t+"%",height:"100%"}),$(".right.col").css({width:100-t+"%",height:"100%"}),$(".handle").css({left:t+"%",top:"0"})):($(".top.row").css({height:t+"%",width:"100%"}),$(".bottom.row").css({height:100-t+"%",width:"100%"}),$(".handle").css({left:"0",top:t/100*(l.clientHeight-25)+25+"px"})))}$(window).on(f?"pagehide":"beforeunload",function(){s("beforeunload"),v()}),$(".commitbutton").click(function(){_(d.$updates)&&(v(),$.getJSON("/admin/pub-editor-diffs",function(e){var i=t.renderTemplate({_href:"/pub-editor-updates",name:e.length+" Updates",diffs:e},"pub-editor-updates"),n=d.$updates.html(i).find("li");n.click(function(){var t=$(this).attr("data-href");t&&r.pager(t)}),n.find("span.diffcommit").click(function(){var e=$(this).parent().attr("data-file"),i=$(this).parent().attr("title").slice(24);if(confirm("Confirm commit:\n"+i+"\n"))return $.post("/admin/pub-editor-commit",{path:e},function(){t.emit("notify","Commit "+e+" OK")}).fail(function(e){t.emit("notify","Commit failed, please reload browser and try again.\n"+e.responseText)}),T(),!1}),n.find("span.diffrevert").click(function(){var e=$(this).parent().attr("data-file"),i=$(this).parent().attr("title").slice(24);if(confirm("Confirm revert:\n"+i+"\n"))return $.post("/admin/pub-editor-revert",{path:e},function(){location.reload()}).fail(function(e){t.emit("notify","Revert failed, please reload browser and try again.\n"+e.responseText)}),T(),!1})}));d.$uploads.hide()}),$(".editbutton").click(m),$(".menubutton").click(function(){_(d.$uploads),d.$updates.hide()}),$(".name").click(function(){t.isFragmentModified(d.binding)&&confirm("Are you sure you want to revert the edits from this session?")&&(t.revertFragmentState(d.binding),w())}),$(".helpbutton").click(function(){r.pager(t.page$["/help"]?"/help":"/pub-editor-help")}),$(".handle").attr("draggable","true").get(0).addEventListener("dragstart",function(t){t.dataTransfer.setData("Text","pane-handle-drag")}),document.addEventListener("dragover",function(t){M(t.clientX,t.clientY,!1),t.preventDefault()}),document.addEventListener("drop",function(t){t.preventDefault()}),C(-1)}},{"humane-js":1}]},{},[2]);