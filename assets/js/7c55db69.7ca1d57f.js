"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4509],{3905:(e,t,n)=>{n.r(t),n.d(t,{MDXContext:()=>u,MDXProvider:()=>d,mdx:()=>v,useMDXComponents:()=>c,withMDXComponents:()=>p});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){return function(t){var n=c(t.components);return r.createElement(e,o({},t,{components:n}))}},c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(a,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39960:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(80102),i=n(67294),o=n(73727),a=n(52263),l=n(13919),s=n(10412),u=(0,i.createContext)({collectLink:function(){}}),p=n(44996),c=n(18780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const f=function(e){var t,n,f=e.isNavLink,m=e.to,v=e.href,g=e.activeClassName,b=e.isActive,h=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,w=void 0===y||y,x=(0,r.Z)(e,d),O=(0,a.default)().siteConfig,j=O.trailingSlash,k=O.baseUrl,S=(0,p.useBaseUrlUtils)().withBaseUrl,N=(0,i.useContext)(u),C=m||v,P=(0,l.Z)(C),E=null==C?void 0:C.replace("pathname://",""),T=void 0!==E?(n=E,w&&function(e){return e.startsWith("/")}(n)?S(n):n):void 0;T&&P&&(T=(0,c.applyTrailingSlash)(T,{trailingSlash:j,baseUrl:k}));var U=(0,i.useRef)(!1),D=f?o.OL:o.rU,M=s.default.canUseIntersectionObserver,F=(0,i.useRef)();(0,i.useEffect)((function(){return!M&&P&&null!=T&&window.docusaurus.prefetch(T),function(){M&&F.current&&F.current.disconnect()}}),[F,T,M,P]);var W=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,_=!T||!P||W;return T&&P&&!W&&!h&&N.collectLink(T),_?i.createElement("a",Object.assign({href:T},C&&!P&&{target:"_blank",rel:"noopener noreferrer"},x)):i.createElement(D,Object.assign({},x,{onMouseEnter:function(){U.current||null==T||(window.docusaurus.preload(T),U.current=!0)},innerRef:function(e){var t,n;M&&e&&P&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},F.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(F.current.unobserve(t),F.current.disconnect(),n())}))})),F.current.observe(t))},to:T||""},f&&{isActive:b,activeClassName:g}))}},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:()=>r,Z:()=>i})},44996:(e,t,n)=>{n.r(t),n.d(t,{useBaseUrlUtils:()=>o,default:()=>a});var r=n(52263),i=n(13919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,l=void 0!==a&&a,s=o.absolute,u=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(l)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return u?e+p:p}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},8802:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,o=e.split(/[#?]/)[0],a="/"===o||o===r?o:(i=o,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(o,a)}},18780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var o=n(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(o).default}})},29964:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},94420:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>u,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>m});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=n(44996),l=n(39960),s=["components"],u={id:"javascript",title:"Set up your JavaScript App",sidebar_label:"JavaScript (browser / Node.js)"},p=void 0,c={unversionedId:"getting-started/javascript",id:"getting-started/javascript",isDocsHomePage:!1,title:"Set up your JavaScript App",description:"To set up Flipper in your JavaScript app, you need to add the neccessary dependencies to your",source:"@site/../docs/getting-started/javascript.mdx",sourceDirName:"getting-started",slug:"/getting-started/javascript",permalink:"/docs/getting-started/javascript",editUrl:"https://github.com/facebook/flipper/blob/main/website/../docs/getting-started/javascript.mdx",tags:[],version:"current",frontMatter:{id:"javascript",title:"Set up your JavaScript App",sidebar_label:"JavaScript (browser / Node.js)"},sidebar:"setup",previous:{title:"Manual iOS Setup",permalink:"/docs/getting-started/react-native-ios"},next:{title:"Troubleshooting Issues",permalink:"/docs/troubleshooting"}},d=[{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Application Setup",id:"application-setup",children:[],level:2},{value:"Enabling plugins",id:"enabling-plugins",children:[],level:2}],f={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.mdx)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"To set up Flipper in your JavaScript app, you need to add the neccessary dependencies to your\napp, initialize the Flipper client and enable the plugins you want to use."),(0,o.mdx)("p",null,"Currently, we do not ship any plugins for JavaScript environments you can use right away, but we encourage you to ",(0,o.mdx)(l.default,{to:(0,a.default)("/docs/extending/create-plugin"),mdxType:"Link"},"write your own"),"!"),(0,o.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,o.mdx)("p",null,"Flipper JavaScript SDK is distiributed via NPM. To add it to your app run:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},"npm install js-flipper\n")),(0,o.mdx)("p",null,"or "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add js-flipper\n")),(0,o.mdx)("h2",{id:"application-setup"},"Application Setup"),(0,o.mdx)("p",null,"Flipper SDK works in browser and Node.js environments. For browsers, it works out-of-the-box as long as your browser supports ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/WebSocket"},"WebSockets"),". For node.js, it requires a compatible WebSocket implementation (e.g. ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/websockets/ws"},"ws"),"). "),(0,o.mdx)("p",null,"You MUST NOT start Flipper client in production. In browser environments, you should think about not including it in the final production build at all."),(0,o.mdx)("p",null,"Here is how you setup Flipper in your browser:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"import flipperClient from 'js-flipper';\n\n// Start the client and pass your app name\nflipperClient.start('My cool browser app');\n")),(0,o.mdx)("p",null,"Here is how you can do it in your Node.js app:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"import flipperClient from 'js-flipper';\n// Say, you decided to go with 'ws' as your WebSocket implementation\n// https://github.com/websockets/ws\nimport WebSocket from 'ws';\n\n// Start the client and pass your app name\n// You might ask yourself why there is the second argument `{ origin: 'localhost:' }`\n// Flipper Desktop verifies the `Origin` header for every WS connection. You need to set it to one of the whitelisted values (see `VALID_WEB_SOCKET_REQUEST_ORIGIN_PREFIXES`).\nflipperClient.start('My cool nodejs app', { websocketFactory: url => new WebSocket(url, {origin: 'localhost:'}) });\n")),(0,o.mdx)("p",null,"As you can see, ",(0,o.mdx)("inlineCode",{parentName:"p"},"flipperClient")," accepts an options object as a second parameter to its ",(0,o.mdx)("inlineCode",{parentName:"p"},"start")," method. Here is what you can pass there:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"interface FlipperClientOptions {\n    // Make the client connect to a different URL\n    urlBase?: string;\n    // Override WebSocket implementation (Node.js folks, it is for you!)\n    websocketFactory?: (url: string) => FlipperWebSocket;\n    // Override how errors are handled (it is simple `console.error` by default)\n    onError?: (e: unknown) => void;\n    // Timeout after which client tries to reconnect to Flipper\n    reconnectTimeout?: number;\n}\n")),(0,o.mdx)("h2",{id:"enabling-plugins"},"Enabling plugins"),(0,o.mdx)("p",null,"Flipper is just a communication channel between the desktop app and your application. Its true power comes from its plugins."),(0,o.mdx)("p",null,"All plugins must be added to the client. Client communicates the list of available plugins to the desktop upon connection.\nYou can add a plugin by calling:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-ts"},"flipperClient.addPlugin(/* your plugin */)\n")),(0,o.mdx)("p",null,"Chekc out ",(0,o.mdx)(l.default,{to:(0,a.default)("/docs/extending/create-plugin"),mdxType:"Link"},"documentation on creating plugins")," to write your own!"))}m.isMDXComponent=!0}}]);