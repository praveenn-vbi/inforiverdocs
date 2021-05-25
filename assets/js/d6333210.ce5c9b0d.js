(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[217],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2429:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i={id:"current_period_index",title:"CURRENT_PERIOD_INDEX"},c={unversionedId:"references/formulas/current_period_index",id:"references/formulas/current_period_index",isDocsHomePage:!1,title:"CURRENT_PERIOD_INDEX",description:"Syntax",source:"@site/docs/references/formulas/current_period_index.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/current_period_index",permalink:"/inforiverdocs/references/formulas/current_period_index",version:"current",frontMatter:{id:"current_period_index",title:"CURRENT_PERIOD_INDEX"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],u={toc:l};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"CURRENT_PERIOD_INDEX < 5 ? value1 : value2;\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CURRENT_PERIOD_INDEX")," points to the current period of the node for which vaule is getting calculatd."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Assume we have modelled a profit and loss statement using ValQ and we want to show the YoY growth in profits. This can be achieved by the following formula"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"(THIS.GET(CURRENT_PERIOD_INDEX)/THIS.GET(CURRENT_PERIOD_INDEX-1))\\*100\n")),(0,a.kt)("p",null,"Let\u2019s consider another example. To assign values to a node based on the period index, say for the 1st period the value is N1",(0,a.kt)("em",{parentName:"p"},"2, 2nd period N1"),"3, 3rd period N1","*","4, the formula will be"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"SWITCH(CURRENT_PERIOD_INDEX, 1, N1 * 2, 2, N1 * 3, 3, N1N1\\ * 4);\n")))}p.isMDXComponent=!0}}]);