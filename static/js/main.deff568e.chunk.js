(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{13:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(8),a=c.n(s),n=c(5),j=c(0),b=c(2),i=(c(13),c(14),c(1)),r=function(){return Object(i.jsx)("h1",{className:"title",children:"Home page"})},l=c(4),h=function(e){var t=e.person;return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:t.name}),Object(i.jsx)("td",{children:t.sex}),Object(i.jsx)("td",{children:t.born}),Object(i.jsx)("td",{children:t.died}),Object(i.jsx)("td",{children:t.motherName}),Object(i.jsx)("td",{children:t.fatherName})]})},d=function(){var e=Object(j.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(j.useEffect)((function(){fetch("https://mate-academy.github.io/react_people-table/api/people.json").then((function(e){return e.json()})).then((function(e){return s(e)}))}),[]),Object(i.jsxs)("table",{className:"table",children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),Object(i.jsx)("th",{children:"Sex"}),Object(i.jsx)("th",{children:"Born"}),Object(i.jsx)("th",{children:"Died"}),Object(i.jsx)("th",{children:"Mother"}),Object(i.jsx)("th",{children:"Father"})]})}),Object(i.jsx)("tbody",{children:c.map((function(e){return Object(i.jsx)(h,{person:e},e.name)}))})]})},o=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"People Page"}),Object(i.jsx)(d,{})]})},O=function(){return Object(i.jsx)("nav",{className:"navbar",children:Object(i.jsx)("div",{id:"navbarBasicExample",className:"navbar-menu",children:Object(i.jsxs)("div",{className:"navbar-start",children:[Object(i.jsx)(n.b,{className:"navbar-item",to:"/",children:Object(i.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEX///8DAQQAAADd3d2oqKnFxcULCg3p6erj4uP8/PysrKwDAARBQEEyMTKBgIHm5ubw8PBhYGH29vbNzc16eXrX19e+vr4gHyBJSElWVVZgX2CioqIjIiMvLi8ZGBrPz8+NjY2ampu2tbZqaWpHRkd9fX44NziSkpJycXIREBJYWFkiISJOA7BOAAAHqElEQVR4nO2d6XbiMAyFg2lJ08A00FKYQoHSDl3m/d9vki4ZFufKTuzI4ej72R5AN4siybISRYIgCIIgtM6U2wDfvKoNtwl+eVNKjbmN8Mhkp3q9ntpNuA3xxdVjITCXuOxzm+KH9eBLYC5RXXIb44Ot+hFYSLzmNsc9T3sCC4kbboNcc3cgsND4xm2SU5LfR/oKifMzcqnxUqUnClP1fsNtmCv+O9Gjs6huuU1zw/b4Fjw3l/pUKbCQ+MptXnNOnOiRxLeE28JmTD6Qvk9/87vTLjV71DjR49P4GHObWZ9pSpzB7yu1s1nxPbwF9yVuuU2tx8JQYCHxidvYOvwyFlhI/MNtrjW6SBRq/N2xp0Y2shOYSxxl3EbbMJ3ZCswlzjrkUi8tbsE9ieqe23BTLmoJLCQuuE03AztRHKX+4jbehAckUKkX/O/wy8XYiRbXIb6G1S5wl9pfYYGFL4HBXKregy4XYyeqBl/Pg/47PgwBl4uJC7BMk7JHLPGCVQWAcKIfe3HZA5a4YdOASJ5tHgTE0XgOMEqdDFE6f/owx7mVegmutnFFeI/TgAznx8GViwkn+q4LqqfEQQmqXEw40ZG+1hTvsMSAysUbLLCyXohrjeGUi5MxtvMOfPYPjlLDcKkZ4URxkQnV/PMQ7iWAKLUP03m6UEi41CW7SyWcqEGxd0p8A7NLhU40VY8mF1m2w5c5q0slnOiHWWAyIaJUPpdKRaLmvQjEEtyzRxGIjHhg2xx66FJ7asgSpfZ7+PaxW20hEv/VlScVdU3KBa4tv6+qneHn+1p3qYQTndmvesaroFwq4RpqLbPgxZx2E//JGC5e127ouoO18haj1LhRJIogXGpbfWJ9wsc0WbKu7i7qtdcnRjjRga0TPWTNn/gTFaTGuUC8ZE78CSfq4E6ZzDldakKUHdx0xb4Rib+TH9ETE3mOqySASPzn3hL/KRFYubtFrvG98NdTlEpFoi7d3Npx1GsE8TSuEYkiKJfqYXkKOlEPPZRtu9Q8KsaRqPuQMXnDUarb3QzxCDvRjdNf++EVXzYuE//8vneYzptDRKkzZyv+8Id6qucvVlwT7TeOVvyJ5+/MZ7x/o9uLsifRySP4mYhE/aalyRyHcM2bqLIXfBDRwpIbiFh/3PAI94m+kDa6l6nlqUahxq3HdN4cj01URACsXZ33wZToJavtUol1l117S3vUin+9vtRk7KEmWheqllrH4VFtlP6d6CHEir/98aay3fb7lWEJLK3qaKmECNRYes6pJiorv0dkuwOefQPTFEcfFocdFrtSvkZlasXftBI2wRt6GsdJTSCak8wS8RuiQsK7YQD2paZGFWkqUOPe9EE0CdKrCsQXBNBlTvUoERYSzcl/Q9gpQPWZoUJjAlt3emoYQB9d9NkrCCVuKj8ZE4EaV+POKTBkVge7AvaZEhW1TasiMDDtqQrhqEAtrP3WhLUrTdRFlF+D2zNPXXEnIRzcU5dnu+HNPaDSu8MSUu5E4bLEQ3D7O6LPpk1o9EHwBTuAuAO1amBWfCBx09GtZDgr3rtQb0MP1KqBIVzpHhMUBYU+ARCGcGr59eh/AjchU3euBSiES7+u06y65uSqQcYvoCKhBkUkvQACuzFUBVSVPtPZyrMcWqBWDZiXNswTimqBoQVq1VTvu1FxdK3/H2NFrQ6VVTh1nWf1+v9wVtRqULVFMA9stI05YSWDZugLMGoe6Z6YQW1QNUa72qlW0UDz18FllAAYVUCzLrVPdq3C5XwIGPFterwZIcPmulr2INItICsMwx6kb64Iy7RXKVw/1sKq0NrYXQT3EJ6BwjcQlp6HwkW0PnOF6yiB7X9dV6gGSVHOOWeFxcRJvB++2wq/8yO84NRthQ+fH8O77bqssAxOYLm00wo3Px+EK47dVViUML7JYPtFVxWq5V6V4go2cHZT4dGUgthiaGw3FJ7sIZjgbtKuKVS6uSrblemAcT6FN4YWqpW2DDN5WmmTyIAUmpzDXMPqtXK62P0znTUHp/DY5OctXk3qbxevv0p0VUhCYXZxXZ8LXIbWXaVq/N/c18XWdjFQt3hKKOwTtRQMNlCrsNnGsss6CjVXkil1FDZboxaFolAUikJRyK3Q+CnYVYXqcWTG/42qhEJd1MaoUL2bdgJk5eikbp1DNTBtSo0HovCb81cY2n0oCktEYYkorIEo1CBPCw2isEQU1kAUahCFGkRhiSisgSjUIAo1iMISUVgDUahBFGoQhSWisAaiUIMo1CAKS0RhDUShBlGoQRSWiMIaiEINolCDKCwRhTUQhRpEoQZRWCIKayAKNfhUqBtM5kMhnsCz1yNsrNC0R9iDQu1YTOO2dHOsv3vPmmbvQmy0taAdiNNOcWU7NKN1mg51ymy2sbOgVg1nA8I3SYaAmjcTaDszo30aTwfEL3Xlx8FrZa1GZrSPWjYVWDX9MxRcjOIO+jJVaXOB0RbOducldTMIGL6BiBc1diEwyiwmu7SLmjmaBGw7KqstqAkMFoT5UHT6hnX8mkwe1MzpNO7sI7DTqNSH62ncW33+yYPyMss5WcyKLJv74ZgWRswWnsY1394NLSoTvhjeeX2nSNy/317wsb3vh/fWIkEQBEEIn39oUpLMAEj2/wAAAABJRU5ErkJggg==",alt:"home_page"})}),Object(i.jsx)(n.c,{to:"/",className:"navbar-item is-tab",children:"Home page"}),Object(i.jsx)(n.c,{className:"navbar-item is-tab",to:"/people",children:"People Page"})]})})})},x=function(){return Object(i.jsx)("h2",{className:"subtitle",children:"Page not found"})},m=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(O,{}),Object(i.jsxs)(b.d,{children:[Object(i.jsx)(b.b,{path:"/",element:Object(i.jsx)(r,{})}),Object(i.jsx)(b.b,{path:"/people",element:Object(i.jsx)(o,{})}),Object(i.jsx)(b.b,{path:"*",element:Object(i.jsx)(x,{})}),Object(i.jsx)(b.b,{path:"/home",element:Object(i.jsx)(b.a,{to:"/"})})]})]})};a.a.render(Object(i.jsx)(n.a,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.deff568e.chunk.js.map