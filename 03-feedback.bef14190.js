!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={};function n(e){return e&&e.constructor===Symbol?"symbol":typeof e}var r="Expected a function",o=NaN,i="[object Symbol]",a=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,s="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,m=s||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,b=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var o,i,a,u,f,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function v(t){var n=o,r=i;return o=i=void 0,l=t,u=e.apply(r,n)}function y(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=a}function h(){var e=p();if(y(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-c);return d?b(n,a-(e-l)):n}(e))}function j(e){return f=void 0,m&&o?v(e):(o=i=void 0,u)}function w(){var e=p(),n=y(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return function(e){return l=e,f=setTimeout(h,t),s?v(e):u}(c);if(d)return f=setTimeout(h,t),v(c)}return void 0===f&&(f=setTimeout(h,t)),u}return t=S(t)||0,T(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:j(p())},w}function T(e){var t=void 0===e?"undefined":n(e);return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":n(e))||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==i}(e))return o;if(T(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=T(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(a,"");var r=f.test(e);return r||c.test(e)?l(e.slice(2),r?2:8):u.test(e)?o:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return T(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var h=document.querySelector('[name="email"]'),j=document.querySelector('[name="message"]'),w=document.querySelector(".feedback-form");if(localStorage.getItem("feedback-form-state")){var O=JSON.parse(localStorage.getItem("feedback-form-state")),x=O.email,E=O.message;h.value=x,j.value=E}w.addEventListener("input",t((function(e){console.log(e.currentTarget.email.value,e.currentTarget.message.value),localStorage.setItem("feedback-form-state",JSON.stringify({email:e.currentTarget.email.value,message:e.currentTarget.message.value}))}),500,{trailing:!1})),w.addEventListener("submit",(function(e){e.preventDefault();var t={};e.currentTarget.elements;new FormData(e.currentTarget).forEach((function(e,n){t[n]=e})),h.value="",j.value="",localStorage.clear(),console.log("Last values:",t)}))}();
//# sourceMappingURL=03-feedback.bef14190.js.map
