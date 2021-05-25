(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[9739],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4017:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={id:"rate",title:"RATE"},l={unversionedId:"references/formulas/rate",id:"references/formulas/rate",isDocsHomePage:!1,title:"RATE",description:"The RATE function returns the interest rate per period of a loan or an investment.",source:"@site/docs/references/formulas/rate.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/rate",permalink:"/inforiverdocs/references/formulas/rate",version:"current",frontMatter:{id:"rate",title:"RATE"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],p={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"RATE")," function returns the interest rate per period of a loan or an investment."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"RATE (Nper, PMT, PV, [FV], [Type], [Guess])\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Nper")," \u2013 The total number of periods."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PMT")," \u2013 The payment made each period."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PV")," \u2013 The present value - the total amount that a series of future payments is worth now. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"FV")," \u2013 The future value or a cash balance you want to attain after the last payment is made. This is an optional argument."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Type")," \u2013 Indicates when the payments are made. Type is zero if payments are made at the end of the period and non-zero if payments are made at the start of the period. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Guess")," \u2013 Estimate of what the rate will be. This is an optional argument."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Consider a series of $2000 payments made at the end of each year for 6 years. The objective is to calculate the interest rate where the present value is $10,000.  "),(0,o.kt)("p",null,"To calculate the present value, the formula should be "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"RATE (Number of Periods, PMT, Present Value,0)\n")),(0,o.kt)("p",null,"The interest rate is calculated to be 5.47%."),(0,o.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.office.com/en-us/article/RATE-function-9F665657-4A7E-4BB7-A030-83FC59E748CE"},"RATE")))}c.isMDXComponent=!0}}]);