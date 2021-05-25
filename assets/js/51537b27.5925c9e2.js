(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[4970],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8501:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u},default:function(){return s}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={id:"or",title:"OR"},l={unversionedId:"references/formulas/or",id:"references/formulas/or",isDocsHomePage:!1,title:"OR",description:"An OR statement returns TRUE if atleast one of the arguments is TRUE and returns FALSE when all the arguments evaluate to FALSE.",source:"@site/docs/references/formulas/or.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/or",permalink:"/inforiverdocs/references/formulas/or",version:"current",frontMatter:{id:"or",title:"OR"},sidebar:"functionSideBar",previous:{title:"AND",permalink:"/inforiverdocs/references/formulas/and"},next:{title:"NOT",permalink:"/inforiverdocs/references/formulas/not"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],c={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," statement returns TRUE if ",(0,o.kt)("strong",{parentName:"p"},"atleast")," one of the arguments is TRUE and returns FALSE when all the arguments evaluate to FALSE."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"OR ( logical_test1, [logical_test2], ... )\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logical_test1")," \u2013 The first condition to be evaluated. This is a required argument."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"logical_test2, \u2026"),"  \u2013 The additional conditions to be evaluated. These are optional arguments.")),(0,o.kt)("h2",{id:"return-value"},"Return value"),(0,o.kt)("p",null,"Either True or False."),(0,o.kt)("h2",{id:"remarks"},"Remarks"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"OR")," function accepts multiple conditions."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Consider a scenario in which if the number of licenses is greater than 500 or the usage period is greater than 24 months,\nthen the price should be $20 else $25."),(0,o.kt)("p",null,"To achieve this, the formula should be "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"IF(OR(Num_of_Licenses>500,Duration<24),20,25)\n")),(0,o.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.office.com/en-gb/article/or-function-7d17ad14-8700-4281-b308-00b131e22af0"},"OR")))}s.isMDXComponent=!0}}]);