parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"H99C":[function(require,module,exports) {
var e=document.querySelectorAll(".card button"),t=document.querySelector(".inner"),n=document.querySelector(".outer"),c=window.matchMedia("(max-width: 450px)");function r(e){var c=e.currentTarget.closest(".card"),r=c.querySelector("img").src,o=(c.querySelectorAll("img").width,c.dataset.description),i=c.querySelector("h2").textContent;t.innerHTML='\n  <img width="auto" height="550" src="'.concat(r,'" alt="').concat(i,'">\n  <p>').concat(o,"</p>\n  "),n.classList.add("open")}function o(){n.classList.remove("open")}e.forEach(function(e){return e.addEventListener("click",r)}),n.addEventListener("click",function(e){!e.target.closest(".inner")&&o()}),window.addEventListener("keydown",function(e){"Escape"===e.key&&o()});
},{}]},{},["H99C"], null)
//# sourceMappingURL=/csb-7kwst/src.3fc8f05f.js.map