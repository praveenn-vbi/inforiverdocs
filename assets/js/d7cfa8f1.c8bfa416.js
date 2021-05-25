(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[7924],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return o},kt:function(){return s}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):u(u({},e),t)),n},o=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,o=i(t,["components","mdxType","originalType","parentName"]),c=m(n),s=r,k=c["".concat(p,".").concat(s)]||c[s]||d[s]||l;return n?a.createElement(k,u(u({ref:e},o),{},{components:n})):a.createElement(k,u({ref:e},o))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,u=new Array(l);u[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,u[1]=i;for(var m=2;m<l;m++)u[m]=n[m];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8026:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return o}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),u={id:"sum",title:"SUM"},i={unversionedId:"references/formulas/sum",id:"references/formulas/sum",isDocsHomePage:!1,title:"SUM",description:"The SUM function returns the sum of all the arguments list.",source:"@site/docs/references/formulas/sum.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/sum",permalink:"/inforiverdocs/references/formulas/sum",version:"current",frontMatter:{id:"sum",title:"SUM"},sidebar:"functionSideBar",previous:{title:"CONCATENATE",permalink:"/inforiverdocs/references/formulas/concatenate"},next:{title:"AVERAGE",permalink:"/inforiverdocs/references/formulas/average"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],m={toc:p};function o(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"SUM")," function returns the sum of all the arguments list.\nThe arguments can be numbers or node references or a combination of both."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"SUM (value1,[value2]....)\n")),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value1")," \u2013 The first node or number to be added. This is a required argument."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value2, \u2026 ")," \u2013 The additional nodes or numbers to be added. These are optional arguments.")),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Consider sales of a particular product across different regions East, South, Central and West to be as follows. To calculate the 'Total Sales' use the formula as:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"SUM (East, South, Central, West)\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Region"),(0,l.kt)("th",{parentName:"tr",align:null},"Jan"),(0,l.kt)("th",{parentName:"tr",align:null},"Feb"),(0,l.kt)("th",{parentName:"tr",align:null},"Mar"),(0,l.kt)("th",{parentName:"tr",align:null},"Apr"),(0,l.kt)("th",{parentName:"tr",align:null},"May"),(0,l.kt)("th",{parentName:"tr",align:null},"Jun"),(0,l.kt)("th",{parentName:"tr",align:null},"Jul"),(0,l.kt)("th",{parentName:"tr",align:null},"Aug"),(0,l.kt)("th",{parentName:"tr",align:null},"Sep"),(0,l.kt)("th",{parentName:"tr",align:null},"Oct"),(0,l.kt)("th",{parentName:"tr",align:null},"Nov"),(0,l.kt)("th",{parentName:"tr",align:null},"Dec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"East"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"120"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"South"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"175")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Central"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"175")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"West"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"175"),(0,l.kt)("td",{parentName:"tr",align:null},"125"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("b",null,"Total Sales")),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"550"),(0,l.kt)("td",{parentName:"tr",align:null},"625"),(0,l.kt)("td",{parentName:"tr",align:null},"525"),(0,l.kt)("td",{parentName:"tr",align:null},"450"),(0,l.kt)("td",{parentName:"tr",align:null},"495"),(0,l.kt)("td",{parentName:"tr",align:null},"450"),(0,l.kt)("td",{parentName:"tr",align:null},"475"),(0,l.kt)("td",{parentName:"tr",align:null},"450"),(0,l.kt)("td",{parentName:"tr",align:null},"325"),(0,l.kt)("td",{parentName:"tr",align:null},"350")))),(0,l.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.office.com/en-us/article/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89"},"SUM")))}o.isMDXComponent=!0}}]);