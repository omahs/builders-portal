"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[9096],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6174:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),l=["components"],o={},p=void 0,u={unversionedId:"smart-contracts/factory/PluginRepoFactory",id:"smart-contracts/factory/PluginRepoFactory",title:"PluginRepoFactory",description:"Aragon Core",source:"@site/docs/smart-contracts/factory/PluginRepoFactory.md",sourceDirName:"smart-contracts/factory",slug:"/smart-contracts/factory/PluginRepoFactory",permalink:"/docs/smart-contracts/factory/PluginRepoFactory",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/smart-contracts/factory/PluginRepoFactory.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DAOFactory",permalink:"/docs/smart-contracts/factory/DAOFactory"},next:{title:"TokenFactory",permalink:"/docs/smart-contracts/factory/TokenFactory"}},c={},s=[{value:"Aragon Core",id:"aragon-core",level:2},{value:"contract <code>PluginRepoFactory</code>",id:"contract-pluginrepofactory",level:3},{value:"public variable <code>aragonPluginRegistry</code>",id:"public-variable-aragonpluginregistry",level:4},{value:"public variable <code>pluginRepoBase</code>",id:"public-variable-pluginrepobase",level:4},{value:"error <code>EmptyPluginRepoName</code>",id:"error-emptypluginreponame",level:4},{value:"public function <code>constructor</code>",id:"public-function-constructor",level:4},{value:"external function <code>createPluginRepo</code>",id:"external-function-createpluginrepo",level:4},{value:"external function <code>createPluginRepoWithVersion</code>",id:"external-function-createpluginrepowithversion",level:4},{value:"internal function <code>setPluginRepoPermissions</code>",id:"internal-function-setpluginrepopermissions",level:4},{value:"internal function <code>_createPluginRepo</code>",id:"internal-function-_createpluginrepo",level:4}],d={toc:s};function g(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"aragon-core"},"Aragon Core"),(0,i.kt)("h3",{id:"contract-pluginrepofactory"},"contract ",(0,i.kt)("inlineCode",{parentName:"h3"},"PluginRepoFactory")),(0,i.kt)("p",null,"This contract creates ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginRepo")," proxies and registers them on an ",(0,i.kt)("inlineCode",{parentName:"p"},"AragonPluginRegistry")," contract."),(0,i.kt)("h4",{id:"public-variable-aragonpluginregistry"},"public variable ",(0,i.kt)("inlineCode",{parentName:"h4"},"aragonPluginRegistry")),(0,i.kt)("p",null,"The Aragon plugin registry contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"contract AragonPluginRegistry aragonPluginRegistry \n")),(0,i.kt)("h4",{id:"public-variable-pluginrepobase"},"public variable ",(0,i.kt)("inlineCode",{parentName:"h4"},"pluginRepoBase")),(0,i.kt)("p",null,"The address of the ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginRepo")," base contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"address pluginRepoBase \n")),(0,i.kt)("h4",{id:"error-emptypluginreponame"},"error ",(0,i.kt)("inlineCode",{parentName:"h4"},"EmptyPluginRepoName")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"error EmptyPluginRepoName() \n")),(0,i.kt)("h4",{id:"public-function-constructor"},"public function ",(0,i.kt)("inlineCode",{parentName:"h4"},"constructor")),(0,i.kt)("p",null,"Initializes the addresses of the Aragon plugin registry and ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginRepo")," base contract to proxy to."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"constructor(contract AragonPluginRegistry _aragonPluginRegistry) public \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_aragonPluginRegistry"),(0,i.kt)("td",{parentName:"tr",align:null},"contract AragonPluginRegistry"),(0,i.kt)("td",{parentName:"tr",align:null},"The aragon plugin registry address.")))),(0,i.kt)("h4",{id:"external-function-createpluginrepo"},"external function ",(0,i.kt)("inlineCode",{parentName:"h4"},"createPluginRepo")),(0,i.kt)("p",null,"Creates a plugin repository proxy pointing to the ",(0,i.kt)("inlineCode",{parentName:"p"},"pluginRepoBase")," implementation and registers it in the Aragon plugin registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function createPluginRepo(string _name, address _initialOwner) external returns (contract PluginRepo) \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin repository name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_initialOwner"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin maintainer address. TODO: Rethink if it need permission to prevent it from getting poluted, same for ",(0,i.kt)("inlineCode",{parentName:"td"},"createPluginRepoWithVersion"),".")))),(0,i.kt)("h4",{id:"external-function-createpluginrepowithversion"},"external function ",(0,i.kt)("inlineCode",{parentName:"h4"},"createPluginRepoWithVersion")),(0,i.kt)("p",null,"Creates and registers a named ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginRepo")," and publishes an initial version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function createPluginRepoWithVersion(string _name, uint16[3] _initialSemanticVersion, address _pluginFactory, bytes _contentURI, address _maintainer) external returns (contract PluginRepo pluginRepo) \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin repository name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_initialSemanticVersion"),(0,i.kt)("td",{parentName:"tr",align:null},"uint16","[3]"),(0,i.kt)("td",{parentName:"tr",align:null},"The semantic version for the new plugin repository version.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_pluginFactory"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin factory contract associated with the plugin version.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_contentURI"),(0,i.kt)("td",{parentName:"tr",align:null},"bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"The external URI for fetching the new version's content.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_maintainer"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin maintainer address.")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The initial owner of the new PluginRepo is ",(0,i.kt)("inlineCode",{parentName:"em"},"address(this)"),", afterward ownership will be transfered to the address ",(0,i.kt)("inlineCode",{parentName:"em"},"_maintainer"),".")),(0,i.kt)("h4",{id:"internal-function-setpluginrepopermissions"},"internal function ",(0,i.kt)("inlineCode",{parentName:"h4"},"setPluginRepoPermissions")),(0,i.kt)("p",null,"Set the final permissions for the published plugin repository maintainer. All permissions are revoked from the the plugin factory and granted to the specified plugin maintainer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function setPluginRepoPermissions(contract PluginRepo pluginRepo, address maintainer) internal \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"pluginRepo"),(0,i.kt)("td",{parentName:"tr",align:null},"contract PluginRepo"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin repository instance just created.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"maintainer"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin maintainer address.")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The plugin maintainer is granted the ",(0,i.kt)("inlineCode",{parentName:"em"},"CREATE_VERSION_PERMISSION_ID"),", ",(0,i.kt)("inlineCode",{parentName:"em"},"UPGRADE_PERMISSION_ID"),", and ",(0,i.kt)("inlineCode",{parentName:"em"},"ROOT_PERMISSION_ID"),".")),(0,i.kt)("h4",{id:"internal-function-_createpluginrepo"},"internal function ",(0,i.kt)("inlineCode",{parentName:"h4"},"_createPluginRepo")),(0,i.kt)("p",null,"Internal method creating a ",(0,i.kt)("inlineCode",{parentName:"p"},"PluginRepo")," via the ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1967"},"ERC-1967")," proxy pattern from the provided base contract and registering it in the Aragon plugin registry."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _createPluginRepo(string _name, address _initialOwner) internal returns (contract PluginRepo pluginRepo) \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"The plugin repository name.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_initialOwner"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The initial owner address.")))))}g.isMDXComponent=!0}}]);