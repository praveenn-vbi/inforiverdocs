(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[4231],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return s},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?u(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},u=Object.keys(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(t=0;t<u.length;t++)n=u[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||u;return n?t.createElement(m,a(a({ref:r},s),{},{components:n})):t.createElement(m,a({ref:r},s))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=n.length,a=new Array(u);a[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var l=2;l<u;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5506:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var t=n(2122),o=n(9756),u=(n(7294),n(3905)),a={id:"current_node_value",title:"CURRENT_NODE_VALUE"},i={unversionedId:"references/formulas/current_node_value",id:"references/formulas/current_node_value",isDocsHomePage:!1,title:"CURRENT_NODE_VALUE",description:"The CURRENTNODEVALUES funtion returns the current node's previous period value.",source:"@site/docs/references/formulas/current_node_value.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/current_node_value",permalink:"/inforiverdocs/references/formulas/current_node_value",version:"current",frontMatter:{id:"current_node_value",title:"CURRENT_NODE_VALUE"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function s(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,u.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"The CURRENT_NODE_VALUES funtion returns the current node's previous period value."),(0,u.kt)("h2",{id:"syntax"},"Syntax"),(0,u.kt)("p",null,"CURRENT_NODE_VALUES.get(index)"),(0,u.kt)("h2",{id:"arguments"},"Arguments"),(0,u.kt)("p",null,"index - a reference to the period index commonly achieved by CURRENT_PERIOD_INDEX "),(0,u.kt)("h2",{id:"example"},"Example"),(0,u.kt)("p",null,"Consider a scenario where you want to assign 100 as the first month value and you want the\nsubsequent periods to have a month-on-month growth of 10%"),(0,u.kt)("p",null,"This can be achieved by using the formula\nIF ( CURRENT_PERIOD_INDEX == 1, 1000, CURRENT_NODE_VALUES.GET(CURRENT_PERIOD_INDEX-1) * 1.1)"))}s.isMDXComponent=!0}}]);