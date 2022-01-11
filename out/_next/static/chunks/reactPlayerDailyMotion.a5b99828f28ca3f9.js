"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[596],{7474:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(5893),o=n(7294),u=n(4423),i=n(4464);function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function y(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?a(e):t}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){o=!0,u=c}finally{try{r||null==a.return||a.return()}finally{if(o)throw u}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return y(this,n)}}var m=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(y,e);var t,n,o,p=b(y);function y(){var e;return c(this,y),f(a(e=p.apply(this,arguments)),"callPlayer",u.Sg),f(a(e),"onDurationChange",(function(){var t=e.getDuration();e.props.onDuration(t)})),f(a(e),"mute",(function(){e.callPlayer("setMuted",!0)})),f(a(e),"unmute",(function(){e.callPlayer("setMuted",!1)})),f(a(e),"ref",(function(t){e.container=t})),e}return t=y,(n=[{key:"componentDidMount",value:function(){this.props.onMount&&this.props.onMount(this)}},{key:"load",value:function(e){var t=this,n=this.props,r=n.controls,o=n.config,a=n.onError,c=n.playing,l=d(e.match(i.$7),2)[1];this.player?this.player.load(l,{start:(0,u.pH)(e),autoplay:c}):(0,u.Kb)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",(function(e){return e.player})).then((function(n){var i=t;if(t.container){var c=n.player;t.player=new c(t.container,{width:"100%",height:"100%",video:l,params:s({controls:r,autoplay:t.props.playing,mute:t.props.muted,start:(0,u.pH)(e),origin:window.location.origin},o.params),events:{apiready:t.props.onReady,seeked:function(){return i.props.onSeek(i.player.currentTime)},video_end:t.props.onEnded,durationchange:t.onDurationChange,pause:t.props.onPause,playing:t.props.onPlay,waiting:t.props.onBuffer,error:function(e){return a(e)}}})}}),a)}},{key:"play",value:function(){this.callPlayer("play")}},{key:"pause",value:function(){this.callPlayer("pause")}},{key:"stop",value:function(){}},{key:"seekTo",value:function(e){this.callPlayer("seek",e)}},{key:"setVolume",value:function(e){this.callPlayer("setVolume",e)}},{key:"getDuration",value:function(){return this.player.duration||null}},{key:"getCurrentTime",value:function(){return this.player.currentTime}},{key:"getSecondsLoaded",value:function(){return this.player.bufferedTime}},{key:"render",value:function(){var e={width:"100%",height:"100%",display:this.props.display};return(0,r.jsx)("div",{style:e,children:(0,r.jsx)("div",{ref:this.ref})})}}])&&l(t.prototype,n),o&&l(t,o),y}(o.Component);f(m,"displayName","DailyMotion"),f(m,"canPlay",i.tW.dailymotion),f(m,"loopOnEnded",!0)}}]);