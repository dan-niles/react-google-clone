(this["webpackJsonpgoogle-clone"]=this["webpackJsonpgoogle-clone"]||[]).push([[0],{57:function(e,c,s){},58:function(e,c,s){},59:function(e,c,s){},60:function(e,c,s){},68:function(e,c,s){},69:function(e,c,s){"use strict";s.r(c);var t=s(2),a=s(0),n=s.n(a),i=s(20),r=s.n(i),l=(s(57),s(58),s(59),s(7)),o=s(41),j=s.n(o),d=s(83),h=s(36),b=s(19),u=(s(60),s(40)),O=s.n(u),m=s(26),g=s.n(m),x=s(82),_=s(4),v=Object(a.createContext)(),p=function(e){var c=e.reducer,s=e.initialState,n=e.children;return Object(t.jsx)(v.Provider,{value:Object(a.useReducer)(c,s),children:n})},f=function(){return Object(a.useContext)(v)},N=s(32),P="SET_SEARCH_TERM",w=function(e,c){switch(console.log(c),c.type){case P:return Object(N.a)(Object(N.a)({},e),{},{term:c.term});default:return e}};var S=function(e){var c=e.hideButtons,s=void 0!==c&&c,n=e.term,i=void 0!==n&&n,r=f(),l=Object(b.a)(r,2);Object(h.a)(l[0]);var o=l[1],j=Object(a.useState)(""),d=Object(b.a)(j,2),u=d[0],m=d[1],v=Object(_.f)(),p=function(e){e.preventDefault(),o({type:P,term:u}),v.push("/search")};return Object(a.useEffect)((function(){i&&m(i)}),[]),Object(t.jsxs)("form",{className:"search",children:[Object(t.jsxs)("div",{className:"search__input",children:[Object(t.jsx)(g.a,{className:"search_inputIcon"}),Object(t.jsx)("input",{value:u,onChange:function(e){m(e.target.value)}}),Object(t.jsx)(O.a,{})]}),s?Object(t.jsx)("div",{className:"search__buttonsHidden",children:Object(t.jsx)(x.a,{type:"submit",variant:"outlined",onClick:p,disabled:!u,children:"Google Search"})}):Object(t.jsxs)("div",{className:"search__buttons",children:[Object(t.jsx)(x.a,{type:"submit",variant:"outlined",onClick:p,disabled:!u,children:"Google Search"}),Object(t.jsx)(x.a,{variant:"outlined",children:"I'm Feeling Lucky"})]})]})};var y=function(){return Object(t.jsxs)("div",{className:"home",children:[Object(t.jsxs)("div",{className:"home__header",children:[Object(t.jsx)("div",{className:"home__headerLeft"}),Object(t.jsxs)("div",{className:"home__headerRight",children:[Object(t.jsx)(l.b,{to:"/gmail",children:"Gmail"}),Object(t.jsx)(l.b,{to:"/images",children:"Images"}),Object(t.jsx)(j.a,{}),Object(t.jsx)(d.a,{})]})]}),Object(t.jsxs)("div",{className:"home__body",children:[Object(t.jsx)("img",{className:"home__logo",src:"https://www.google.lk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",alt:""}),Object(t.jsx)("div",{className:"home_inputContainer",children:Object(t.jsx)(S,{})})]})]})},k=s(31),I=s.n(k),C=s(42),A=function(e){var c=Object(a.useState)(null),s=Object(b.a)(c,2),t=s[0],n=s[1];return Object(a.useEffect)((function(){(function(){var c=Object(C.a)(I.a.mark((function c(){return I.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:fetch("https://www.googleapis.com/customsearch/v1?key=".concat("AIzaSyD74ePFg1Obp3RI-ojF4KP8Q_mD7fsajAA","&cx=").concat("f192993769c8782da","&q=").concat(e)).then((function(e){return e.json()})).then((function(e){n(e)}));case 1:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}})()()}),[e]),{data:t}},R=(s(68),s(43)),T=s.n(R),E=s(44),B=s.n(E),L=s(45),M=s.n(L),D=s(46),F=s.n(D),G=s(47),H=s.n(G),J=s(48),q=s.n(J);var z=function(){var e=f(),c=Object(b.a)(e,2),s=c[0].term,a=(c[1],A(s).data);return console.log(a),Object(t.jsxs)("div",{className:"searchPage",children:[Object(t.jsxs)("div",{className:"searchPage__header",children:[Object(t.jsx)(l.b,{to:"/",children:Object(t.jsx)("img",{className:"searchPage__logo",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"})}),Object(t.jsxs)("div",{className:"searchPage__headerBody",children:[Object(t.jsx)(S,{hideButtons:!0,term:s}),Object(t.jsxs)("div",{className:"searchPage__options",children:[Object(t.jsxs)("div",{className:"searchPage__optionsLeft",children:[Object(t.jsxs)("div",{className:"searchPage__option",children:[Object(t.jsx)(g.a,{}),Object(t.jsx)(l.b,{to:"/all",children:"All"})]}),Object(t.jsxs)("div",{className:"searchPage__option",children:[Object(t.jsx)(T.a,{}),Object(t.jsx)(l.b,{to:"/news",children:"News"})]}),Object(t.jsxs)("div",{className:"searchPage__option",children:[Object(t.jsx)(B.a,{}),Object(t.jsx)(l.b,{to:"/images",children:"Images"})]}),Object(t.jsxs)("div",{className:"searchPage__option",children:[Object(t.jsx)(M.a,{}),Object(t.jsx)(l.b,{to:"/shopping",children:"Shopping"})]}),Object(t.jsxs)("div",{className:"searchPage__option",children:[Object(t.jsx)(F.a,{}),Object(t.jsx)(l.b,{to:"/maps",children:"Maps"})]}),Object(t.jsxs)("div",{className:"searchPage__option",children:[Object(t.jsx)(H.a,{}),Object(t.jsx)(l.b,{to:"/more",children:"More"})]})]}),Object(t.jsxs)("div",{className:"searchPage__optionsRight",children:[Object(t.jsx)("div",{className:"searchPage__option",children:Object(t.jsx)(l.b,{to:"/settings",children:"Settings"})}),Object(t.jsx)("div",{className:"searchPage__option",children:Object(t.jsx)(l.b,{to:"/tools",children:"Tools"})})]})]})]})]}),Object(t.jsxs)("div",{className:"searchPage__results",children:[Object(t.jsxs)("p",{className:"searchPage__resultCount",children:["About ",null===a||void 0===a?void 0:a.searchInformation.formattedTotalResults," results in (",null===a||void 0===a?void 0:a.searchInformation.formattedSearchTime," seconds)"]}),null===a||void 0===a?void 0:a.items.map((function(e){var c,s,a,n,i,r;return Object(t.jsxs)("div",{className:"searchPage__result",children:[Object(t.jsxs)("a",{href:e.link,className:"searchPage__resultSubTitle",children:[(null===(c=e.pagemap)||void 0===c||null===(s=c.cse_image)||void 0===s?void 0:s.length)>0&&(null===(a=e.pagemap)||void 0===a||null===(n=a.cse_image[0])||void 0===n?void 0:n.src)&&Object(t.jsx)("img",{className:"searchPage__resultImage",src:null===(i=e.pagemap)||void 0===i||null===(r=i.cse_image[0])||void 0===r?void 0:r.src,alt:""}),e.displayLink," ",Object(t.jsx)(q.a,{})]}),Object(t.jsx)("a",{href:e.link,className:"searchPage__resultTitle",children:Object(t.jsx)("h2",{children:e.title})}),Object(t.jsx)("p",{className:"searchPage__resultSnippet",children:e.snippet})]})}))]})]})};var K=function(){return Object(t.jsx)("div",{className:"App",children:Object(t.jsx)(l.a,{children:Object(t.jsxs)(_.c,{children:[Object(t.jsx)(_.a,{path:"/search",children:Object(t.jsx)(z,{})}),Object(t.jsx)(_.a,{path:"/",children:Object(t.jsx)(y,{})})]})})})};r.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(p,{initialState:{term:null},reducer:w,children:Object(t.jsx)(K,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.35029b66.chunk.js.map