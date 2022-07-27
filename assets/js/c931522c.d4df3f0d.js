"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9451],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=s(r),d=a,m=g["".concat(p,".").concat(d)]||g[d]||u[d]||i;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},1547:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(3117),a=r(102),i=(r(7294),r(3905)),l=["components"],o={},p=void 0,s={unversionedId:"smart-contracts/registry/AragonPluginRegistry",id:"smart-contracts/registry/AragonPluginRegistry",title:"AragonPluginRegistry",description:"Aragon Core",source:"@site/docs/smart-contracts/registry/AragonPluginRegistry.md",sourceDirName:"smart-contracts/registry",slug:"/smart-contracts/registry/AragonPluginRegistry",permalink:"/docs/smart-contracts/registry/AragonPluginRegistry",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/smart-contracts/registry/AragonPluginRegistry.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PluginRepo",permalink:"/docs/smart-contracts/plugin/PluginRepo"},next:{title:"DAORegistry",permalink:"/docs/smart-contracts/registry/DAORegistry"}},c={},u=[{value:"Aragon Core",id:"aragon-core",level:2},{value:"contract <code>AragonPluginRegistry</code>",id:"contract-aragonpluginregistry",level:3},{value:"public variable <code>REGISTER_PERMISSION_ID</code>",id:"public-variable-register_permission_id",level:4},{value:"event <code>PluginRepoRegistered</code>",id:"event-pluginreporegistered",level:4},{value:"public function <code>initialize</code>",id:"public-function-initialize",level:4},{value:"external function <code>register</code>",id:"external-function-register",level:4}],g={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"aragon-core"},"Aragon Core"),(0,i.kt)("h3",{id:"contract-aragonpluginregistry"},"contract ",(0,i.kt)("inlineCode",{parentName:"h3"},"AragonPluginRegistry")),(0,i.kt)("p",null,"This contract maintains an address-based registery of plugin repositories in the Aragon App DAO framework."),(0,i.kt)("h4",{id:"public-variable-register_permission_id"},"public variable ",(0,i.kt)("inlineCode",{parentName:"h4"},"REGISTER_PERMISSION_ID")),(0,i.kt)("p",null,"The ID of the permission required to call the ",(0,i.kt)("inlineCode",{parentName:"p"},"register")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes32 REGISTER_PERMISSION_ID \n")),(0,i.kt)("h4",{id:"event-pluginreporegistered"},"event ",(0,i.kt)("inlineCode",{parentName:"h4"},"PluginRepoRegistered")),(0,i.kt)("p",null,"Emitted if a new plugin repository is registered."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"event PluginRepoRegistered(string name, address pluginRepo) \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the plugin repository.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"pluginRepo"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of the plugin repository.")))),(0,i.kt)("h4",{id:"public-function-initialize"},"public function ",(0,i.kt)("inlineCode",{parentName:"h4"},"initialize")),(0,i.kt)("p",null,"Initializes the contract by setting calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"InterfaceBasedRegistry")," base class initialize method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function initialize(contract IDAO _dao) public \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_dao"),(0,i.kt)("td",{parentName:"tr",align:null},"contract IDAO"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of the managing DAO.")))),(0,i.kt)("h4",{id:"external-function-register"},"external function ",(0,i.kt)("inlineCode",{parentName:"h4"},"register")),(0,i.kt)("p",null,"Registers a plugin repository with a name and address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function register(string name, address registrant) external \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the PluginRepo.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"registrant"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of the PluginRepo contract.")))))}d.isMDXComponent=!0}}]);