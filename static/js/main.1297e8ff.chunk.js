(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},54:function(e,a,t){},60:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(8),s=t.n(r),l=(t(48),t(26)),i=t(16),o=(t(49),t(50),t(27)),d=t(4),b=function(e){var a=e.currentBalance,t=e.networksData,c=Object(n.useState)(0),r=Object(i.a)(c,2),s=r[0],l=r[1];Object(n.useEffect)((function(){var e=0;null===t||void 0===t||t.forEach((function(a){return e+=parseFloat(a.USDC)})),l(e+parseFloat(a))}),[t,a]);var b=function(e,a){return Object(d.jsxs)("div",{className:"balancesTab__leftSide",children:[Object(d.jsx)("span",{className:"balancesTab__title",children:e}),Object(d.jsx)("h5",{className:"balancesTab__balance",children:"$".concat(null===a||void 0===a?void 0:a.toLocaleString("en-US"))})]})};return Object(d.jsxs)("div",{className:"balancesTab__container",children:[b("Current Balance",a),Object(d.jsx)("span",{className:"balancesTab__toggleOffWhenSmall",children:b("Total Account Value",s)}),Object(d.jsxs)("div",{className:"balancesTab__rightSide",children:[Object(d.jsx)("span",{className:"balancesTab__title",children:"Current Holdings"}),Object(d.jsx)("div",{className:"balancesTab__rightItems",children:t.map((function(e){return Object(d.jsxs)("div",{className:"balancesTab__rightItem",children:[Object(d.jsx)("p",{className:"balancesTab__name",children:e.name}),Object(d.jsx)("p",{className:"balancesTab__USDC",children:"$".concat(e.USDC.toLocaleString("en-US"))})]},Object(o.v4)())}))})]})]})},C=(t(54),t(93)),j=t(92),u=function(e){var a=e.data,t=e.handleDeposit,c=e.handleWithdraw,r=Object(n.useState)(""),s=Object(i.a)(r,2),l=s[0],o=s[1],b=Object(n.useState)(""),u=Object(i.a)(b,2),g=u[0],A=u[1],h=a.name;return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"networkCard__container",children:[Object(d.jsxs)("div",{className:"networkCard__header",children:[Object(d.jsx)("img",{className:"networkCard__img",src:a.imgUrl,alt:""}),Object(d.jsx)("h5",{className:"networkCard__headerTitle",children:a.name})]}),Object(d.jsx)("h5",{className:"networkCard__interestRate",children:"".concat(a.interestRate,"%")}),Object(d.jsxs)("div",{className:"networkCard__info",children:[Object(d.jsx)("p",{className:"networkCard__infoText",children:"".concat(a.name," holdings: $").concat(a.USDC.toLocaleString("en-US"))}),Object(d.jsx)("p",{className:"networkCard__infoText",children:"Interest accrued: $".concat(a.accruedInterest)})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"networkCard__form",children:[Object(d.jsx)(C.a,{size:"small",variant:"contained",color:"secondary",onClick:function(e){parseFloat(l)>0?c(e.target.ariaLabel,l):alert("Please enter a number greater than 0"),o("")},children:Object(d.jsx)("p",{"aria-label":h,className:"networkCard__btnText",children:"SELL"})}),Object(d.jsx)(j.a,{label:"$",variant:"outlined",className:"networkCard__input",value:l,onChange:function(e){if(e.target.value>=0){o(e.target.value);var t=(e.target.value*(a.interestRate/100)).toFixed(2);A(t)}else alert("Transactions require numeric values. Please try again.")},inputProps:{style:{textAlign:"center"}}}),Object(d.jsx)(C.a,{size:"small",variant:"contained",color:"primary",onClick:function(e){parseFloat(l)>0?t(e.target.ariaLabel,l):alert("Please enter a number greater than 0"),o("")},children:Object(d.jsx)("p",{"aria-label":h,className:"networkCard__btnText",children:"BUY"})})]}),g>0?Object(d.jsx)("p",{className:"networkCard__projectedReturns",children:"projected returns : $".concat(g.toLocaleString("en-US"))}):Object(d.jsx)("p",{className:"networkCard__projectedReturns",children:"projected returns : --"})]})]})})};var g=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(),s=Object(i.a)(r,2),C=s[0],j=s[1];Object(n.useEffect)((function(){c(A),j(2e4)}),[]);var g=function(e,a){(a=parseFloat(a))<=C?(j((function(e){return e-a})),c(t.map((function(t){if(t.name===e){var n=parseFloat(t.USDC)+a;return Object(l.a)(Object(l.a)({},t),{},{USDC:n})}return t})))):alert("Cannot deposit more than your current balance. Please try again.")},h=function(e,a){a=parseFloat(a),c(t.map((function(t){if((null===t||void 0===t?void 0:t.name)===e&&(null===t||void 0===t?void 0:t.USDC)<a)return alert("Cannot withdraw more than your current balance. Please try again."),t;if((null===t||void 0===t?void 0:t.name)===e&&(null===t||void 0===t?void 0:t.USDC)>=a){j((function(e){return e+a}));var n=parseFloat(t.USDC)-a;return Object(l.a)(Object(l.a)({},t),{},{USDC:n})}return t})))};return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("div",{className:"app__balancesTab",children:Object(d.jsx)(b,{currentBalance:C,networksData:t})}),Object(d.jsx)("div",{className:"app__cards",children:t.map((function(e){return Object(d.jsx)(u,{data:e,handleDeposit:g,handleWithdraw:h},Object(o.v4)())}))})]})},A=[{name:"Compound",interestRate:5,USDC:1e4,accruedInterest:500,imgUrl:"data:image/png;base64,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"},{name:"Aave",interestRate:3,USDC:5e3,accruedInterest:150,imgUrl:"https://s2.coinmarketcap.com/static/img/coins/200x200/7278.png"},{name:"Curve",interestRate:2.5,USDC:1e3,accruedInterest:25,imgUrl:"https://blockgeeks.com/wp-content/uploads/2020/07/Screenshot_49.png"}];s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.1297e8ff.chunk.js.map