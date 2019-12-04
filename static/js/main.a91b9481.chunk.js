(this.webpackJsonpdurator=this.webpackJsonpdurator||[]).push([[0],{14:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),o=(a(14),a(3)),s=a(1),u=function(e){return 1===String(e).length?"0".concat(e):e},m=function(e){return["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]},i=function(e){return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]},d=function(e){var t=String(e),a=t.length;return 2===a&&1===String(e[0])?"td":"1"===t[a-1]?2===a&&t.startsWith("1")?"th":"st":"2"===t[a-1]?2===a&&t.startsWith("1")?"th":"nd":"3"===t[a-1]?2===a&&t.startsWith("1")?"th":"rd":"th"},b=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){var e;return e=setInterval((function(){c(function(){var e=new Date;return{time:"".concat(e.getHours(),":").concat(u(e.getMinutes()),":").concat(u(e.getSeconds())),dayOfWeek:m(e),day:e.getDate(),month:i(e),suffix:d(e.getDate()),year:e.getFullYear()}}())}),1e3),function(){return clearInterval(e)}}),[]),r.a.createElement("div",{className:"ct"},a&&r.a.createElement(n.Fragment,null,r.a.createElement("p",{className:"ct__time"},a.time),r.a.createElement("p",{className:"ct__date"},a.day,a.suffix," ",a.month,", ",a.year),r.a.createElement("p",{className:"ct__weekday"},a.dayOfWeek)))},f=function(){return r.a.createElement("aside",{className:"sb"},r.a.createElement(o.a,{to:"/weekday-calculator",className:"button sb__wd"},"What day of the week was I born?"),r.a.createElement(o.a,{to:"/dates-duration",className:"button sb__wd"},"Get duration between dates"))},y=function(){return r.a.createElement("div",{className:"root",path:"/"},r.a.createElement(b,null),r.a.createElement(f,null))},h=function(e,t,a){for(var n=[],r=e;r<=t;r+=a)n.push(r);return n},E=[{str:"January",num:"01"},{str:"February",num:"02"},{str:"March",num:"03"},{str:"April",num:"04"},{str:"May",num:"05"},{str:"June",num:"06"},{str:"July",num:"07"},{str:"August",num:"08"},{str:"September",num:"09"},{str:"October",num:"10"},{str:"November",num:"11"},{str:"December",num:"12"}],p=["January","March","May","July","August","October","December"],v=["April","June","September","November"],g=function(e,t){return""===e&&""===t?h(1,31,1):p.includes(e)?h(1,31,1):v.includes(e)?h(1,30,1):h(1,t%4===0?29:28,1)},w=function(){for(var e=[],t=1;t<=120;t+=1)e.push((new Date).getFullYear()-t+1);return e},O=function(){var e=Object(n.useState)("Select a day"),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),u=o[0],i=o[1],d=Object(n.useState)(""),b=Object(s.a)(d,2),f=b[0],y=b[1],h=Object(n.useState)([]),p=Object(s.a)(h,2),v=p[0],O=p[1],N=Object(n.useState)(!1),j=Object(s.a)(N,2),S=j[0],D=j[1],M=Object(n.useState)(null),_=Object(s.a)(M,2),k=_[0],C=_[1];Object(n.useEffect)((function(){var e=[a,u,f].every((function(e){return Boolean(e)}));D(e)}),[a,u,f]),Object(n.useEffect)((function(){O(g(u,f)),console.log("Everytime",J(u,f),Number(a)),J(u,f)<Number(a)&&c(String(J(u,f)))}),[u,f]);var J=function(e,t){return new Date(t,e,0).getDate()};return r.a.createElement("div",{className:"wd"},r.a.createElement("p",null,"Enter your birth date below"),r.a.createElement("form",{className:"wd-date-group"},r.a.createElement("div",{className:"wd-field"},r.a.createElement("div",{className:"wd-field-select"},r.a.createElement("select",{className:isNaN(Number(a))?"wd-selector wd-selector__disabled":"wd-selector",onChange:function(e){c(e.target.value)},name:"day"},r.a.createElement("option",{value:a,className:"wd-option"},a),v.map((function(e){return r.a.createElement("option",{value:e,key:e,className:"wd-option"},e)})))),r.a.createElement("label",{htmlFor:"day"},"Day")),r.a.createElement("div",{className:"wd-field"},r.a.createElement("div",{className:"wd-field-select"},r.a.createElement("select",{className:u?"wd-selector":"wd-selector wd-selector__disabled",onChange:function(e){i(e.target.value)},name:"month"},r.a.createElement("option",{value:"",className:"wd-option"},"Select a month"),E.map((function(e){return r.a.createElement("option",{value:e.num,key:e.str,className:"wd-option"},e.str)})))),r.a.createElement("label",{htmlFor:"month"},"Month")),r.a.createElement("div",{className:"wd-field"},r.a.createElement("div",{className:"wd-field-select"},r.a.createElement("select",{className:f?"wd-selector":"wd-selector wd-selector__disabled",onChange:function(e){y(e.target.value)},name:"year"},r.a.createElement("option",{value:"",className:"wd-option"},"Select a year"),w().map((function(e){return r.a.createElement("option",{value:e,key:e,className:"wd-option"},e)})))),r.a.createElement("label",{htmlFor:"year"},"Year")),r.a.createElement("button",{type:"button",className:"wd-submit",onClick:function(){var e=new Date("".concat(f,"-").concat(u,"-").concat(a));C(m(e))},disabled:!S},"SUBMIT")),k&&r.a.createElement("h1",{className:"wd-result"},"You were born on a"," ",r.a.createElement("span",{className:"wd-result_calculated"},k)))},N=a(4),j=(a(23),function(e){var t=e.groupLabel,a=e.optionsData,n=e.handleDateChange;return r.a.createElement("form",{className:"dg-root"},r.a.createElement("fieldset",null,r.a.createElement("legend",{className:"dg-label"},t),r.a.createElement("div",{className:"dg-select_group"},r.a.createElement("label",{className:"dg-select_label"},r.a.createElement("select",{className:"dg-select",onChange:n,name:"day"},r.a.createElement("option",{value:""},"Select day"),a.days.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)})))),r.a.createElement("div",{className:"dg-divider"}),r.a.createElement("label",{className:"dg-select_label"},r.a.createElement("select",{className:"dg-select",onChange:n,name:"month"},r.a.createElement("option",{value:""},"Select month"),a.months.map((function(e){return r.a.createElement("option",{value:e.num,key:e.str},e.str)})))),r.a.createElement("div",{className:"dg-divider"}),r.a.createElement("label",{className:"dg-select_label"},r.a.createElement("select",{className:"dg-select",onChange:n,name:"year"},r.a.createElement("option",{value:""},"Select year"),a.years.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)})))))))});function S(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?S(a,!0).forEach((function(t){Object(N.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):S(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var M=function(){var e=Object(n.useState)({days:[],months:[],years:[]}),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({days:[],months:[],years:[]}),o=Object(s.a)(l,2),u=o[0],m=o[1],i=Object(n.useState)({day:"",month:"",year:""}),d=Object(s.a)(i,2),b=d[0],f=d[1],y=Object(n.useState)({day:"",month:"",year:""}),h=Object(s.a)(y,2),p=h[0],v=h[1],O=Object(n.useState)(!0),S=Object(s.a)(O,2),M=S[0],_=S[1],k=Object(n.useState)(""),C=Object(s.a)(k,2),J=C[0],F=C[1];Object(n.useEffect)((function(){c({days:g("",""),months:E,years:w()}),m({days:g("",""),months:E,years:w()})}),[]),Object(n.useEffect)((function(){P(b)&&P(p)&&_(!1)}),[b,p]);var W=function(e){return Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())},P=function(e){return Object.values(e).every((function(e){return Boolean(e)}))};return r.a.createElement("div",{className:"dd-root"},r.a.createElement("button",{onClick:function(e){e.preventDefault();var t=new Date("".concat(b.year,"-").concat(b.month,"-").concat(b.day)),a=new Date("".concat(p.year,"-").concat(p.month,"-").concat(p.day)),n=(W(t)-W(a))/864e5,r=Math.abs(n%365);if(Math.abs(n/365)>1)if(r<30){var c=Math.abs(Math.floor(r/30)),l=r%30;F("".concat(Math.floor(Math.abs(n/365))," years, ").concat(c," months, ").concat(l," days"))}else F("".concat(Math.floor(Math.abs(n/365))," months, ").concat(r," days"));else if(r>30){var o=Math.abs(Math.floor(r/30)),s=r%30;F("".concat(o," months, ").concat(s," days"))}else F("".concat(Math.floor(Math.abs(n))," days"))},type:"button",className:"dd-submit",disabled:M},"Calculate Duration"),r.a.createElement("div",{className:"dd-dates"},r.a.createElement(j,{groupLabel:"Start Date",optionsData:a,handleDateChange:function(e){F(""),f(D({},b,Object(N.a)({},e.target.name,e.target.value)))}}),r.a.createElement("div",{className:"dd-epoch_divider"}),r.a.createElement(j,{groupLabel:"End Date",optionsData:u,handleDateChange:function(e){F(""),v(D({},p,Object(N.a)({},e.target.name,e.target.value)))}})),J&&r.a.createElement("h1",null,J))},_=function(){return r.a.createElement(o.b,null,r.a.createElement(y,{path:"/"}),r.a.createElement(O,{path:"/weekday-calculator"}),r.a.createElement(M,{path:"/dates-duration"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports=a(24)}},[[9,1,2]]]);
//# sourceMappingURL=main.a91b9481.chunk.js.map