(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),o=c.n(s),l=(c(9),c(2)),r=(c(10),c(0));var i=function(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(r.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),": ",e.alert.msg]})};function d(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(r.jsx)("li",{className:"nav-item"})}),Object(r.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.togleMode}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]}),Object(r.jsx)("input",{type:"text",style:{backgroundColor:"#cd6133",border:"none",margin:"0 10px",borderRadius:"5px",width:"40px",height:"40px",cursor:"pointer"},onClick:e.brownMode})]})]})})}function b(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],s=c[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container my-3",children:[Object(r.jsx)("h1",{className:"text-center text-".concat("light"===e.mode?"dark":"light"),children:e.heading}),Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsxs)("div",{className:"col-md-8 col-12",children:[Object(r.jsx)("textarea",{id:"myBox",className:"form-control my-3",rows:"5",value:n,onChange:function(e){s(e.target.value)}}),Object(r.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var e=n.toUpperCase();s(e)},children:"Convert to Uppercase"}),Object(r.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){var e=n.toLocaleLowerCase();s(e)},children:"Convert to Lowercase"}),Object(r.jsx)("button",{className:"btn btn-primary my-3 mx-2",onClick:function(){s("")},children:"Remove Text"})]})})]}),Object(r.jsx)("div",{className:"container",children:Object(r.jsx)("div",{className:"row justify-content-center",children:Object(r.jsxs)("div",{className:"col-md-8",children:[Object(r.jsx)("h1",{className:"text-".concat("light"===e.mode?"#1e2c7e":"light"),children:"Your text summary"}),Object(r.jsxs)("p",{className:"text-".concat("light"===e.mode?"#1e2c7ek":"light"),children:[n.split(" ").length-1," words and ",n.length," characters"," "]}),Object(r.jsx)("h3",{className:"text-".concat("light"===e.mode?"#1e2c7e":"light"),children:"Preview"}),Object(r.jsx)("p",{className:"text-".concat("light"===e.mode?"#1e2c7e":"light"),children:n.length>0?n:"Enter something to preview it here"})]})})})]})}d.defaultProps={title:"Set TitleHere",aboutText:"About Us"};var h=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)("light"),o=Object(l.a)(s,2),h=o[0],m=o[1],j=Object(a.useState)(null),u=Object(l.a)(j,2),x=u[0],g=u[1],p=function(e,t){g({msg:e,type:t}),setTimeout((function(){g(null)}),2e3)};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(d,{title:"Text Utils",mode:h,togleMode:function(){"light"===h?(m("dark"),document.body.style.backgroundColor="#1e2c7e",p("Dark Mode Has Been Enabled","success"),document.title="Text Utils - Dark Mode"):(m("light"),document.body.style.backgroundColor="white",p("Light Mode Has Been Enabled","success"),document.title="Text Utils - Light Mode")},brownMode:function(){"light"===c?(n("#cd6133"),document.body.style.background="#cd6133"):(n("light"),document.body.style.background="white")}}),Object(r.jsx)(i,{alert:x}),Object(r.jsx)(b,{heading:"Enter the Text to Analyze Below",mode:h})]})},m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),s(e),o(e)}))};o.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.4c1fab3f.chunk.js.map