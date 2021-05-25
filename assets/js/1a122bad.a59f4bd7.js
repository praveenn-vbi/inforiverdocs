(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[6022],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2602:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={id:"cumprinc",title:"CUMPRINC"},p={unversionedId:"references/formulas/cumprinc",id:"references/formulas/cumprinc",isDocsHomePage:!1,title:"CUMPRINC",description:"The CUMPRINC function returns cumulative principal paid on a loan between two periods.",source:"@site/docs/references/formulas/cumprinc.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/cumprinc",permalink:"/inforiverdocs/references/formulas/cumprinc",version:"current",frontMatter:{id:"cumprinc",title:"CUMPRINC"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CUMPRINC")," function returns cumulative principal paid on a loan between two periods."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"CUMPRINC (Rate, Nper, PV, start_period, end_period, Type)\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Rate")," \u2013 The interest rate per period. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Nper")," \u2013 The total number of periods."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"PV")," \u2013 The present value of the loan. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"start_period")," \u2013 The first payment period. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"end_period")," \u2013  The last payment period."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Type")," \u2013 Indicates when the payments are made. Type is zero if payments are made at the end of the period and non-zero if payments are made at the start of the period. "),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Consider a $10,000 loan at an annual rate of 10% that is to be paid off in 3 years. All payments are made at the beginning of the month."),(0,o.kt)("p",null,"To calculate the principal payment for a specified range of periods, say between period 12 and 18, the formula should be"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"CUMPRINC (Rate/12, Number of Years*12, Loan Amount, 12, 18, 0)\n")),(0,o.kt)("p",null,"The cumulative principal payments between 12th and 18th months is calculated to be ",(0,o.kt)("inlineCode",{parentName:"p"},"$1882.04")),(0,o.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.office.com/en-us/article/CUMPRINC-function-94A4516D-BD65-41A1-BC16-053A6AF4C04D"},"CUMPRINC")))}u.isMDXComponent=!0}}]);