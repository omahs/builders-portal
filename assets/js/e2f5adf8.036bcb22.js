"use strict";(self.webpackChunkdev_portal=self.webpackChunkdev_portal||[]).push([[7666],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),s=p(n),m=a,k=s["".concat(c,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(k,o(o({ref:e},u),{},{components:n})):r.createElement(k,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2992:function(t,e,n){n.r(e),n.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var r=n(3117),a=n(102),i=(n(7294),n(3905)),o=["components"],l={},c=void 0,p={unversionedId:"smart-contracts/voting/erc20/ERC20Voting",id:"smart-contracts/voting/erc20/ERC20Voting",title:"ERC20Voting",description:"Aragon Core",source:"@site/docs/smart-contracts/voting/erc20/ERC20Voting.md",sourceDirName:"smart-contracts/voting/erc20",slug:"/smart-contracts/voting/erc20/ERC20Voting",permalink:"/docs/smart-contracts/voting/erc20/ERC20Voting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/smart-contracts/voting/erc20/ERC20Voting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AllowlistVoting",permalink:"/docs/smart-contracts/voting/allowlist/AllowlistVoting"},next:{title:"IMajorityVoting",permalink:"/docs/smart-contracts/voting/majority/IMajorityVoting"}},u={},d=[{value:"Aragon Core",id:"aragon-core",level:2},{value:"contract <code>ERC20Voting</code>",id:"contract-erc20voting",level:3},{value:"internal variable <code>ERC20_VOTING_INTERFACE_ID</code>",id:"internal-variable-erc20_voting_interface_id",level:4},{value:"private variable <code>votingToken</code>",id:"private-variable-votingtoken",level:4},{value:"error <code>NoVotingPower</code>",id:"error-novotingpower",level:4},{value:"public function <code>initialize</code>",id:"public-function-initialize",level:4},{value:"public function <code>getVotingToken</code>",id:"public-function-getvotingtoken",level:4},{value:"external function <code>versionRecipient</code>",id:"external-function-versionrecipient",level:4},{value:"external function <code>createVote</code>",id:"external-function-createvote",level:4},{value:"internal function <code>_vote</code>",id:"internal-function-_vote",level:4},{value:"internal function <code>_canVote</code>",id:"internal-function-_canvote",level:4}],s={toc:d};function m(t){var e=t.components,n=(0,a.Z)(t,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"aragon-core"},"Aragon Core"),(0,i.kt)("h3",{id:"contract-erc20voting"},"contract ",(0,i.kt)("inlineCode",{parentName:"h3"},"ERC20Voting")),(0,i.kt)("p",null,"The majority voting implementation using an ERC-20 token."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This contract inherits from ",(0,i.kt)("inlineCode",{parentName:"em"},"MajorityVotingBase")," and implements the ",(0,i.kt)("inlineCode",{parentName:"em"},"IMajorityVoting")," interface.")),(0,i.kt)("h4",{id:"internal-variable-erc20_voting_interface_id"},"internal variable ",(0,i.kt)("inlineCode",{parentName:"h4"},"ERC20_VOTING_INTERFACE_ID")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-165"},"ERC-165")," interface ID of the contract."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"bytes4 ERC20_VOTING_INTERFACE_ID \n")),(0,i.kt)("h4",{id:"private-variable-votingtoken"},"private variable ",(0,i.kt)("inlineCode",{parentName:"h4"},"votingToken")),(0,i.kt)("p",null,"An ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Votes"},"ERC20Votes")," compatible contract referencing the token being used for voting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"contract ERC20VotesUpgradeable votingToken \n")),(0,i.kt)("h4",{id:"error-novotingpower"},"error ",(0,i.kt)("inlineCode",{parentName:"h4"},"NoVotingPower")),(0,i.kt)("p",null,"Thrown if the voting power is zero"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"error NoVotingPower() \n")),(0,i.kt)("h4",{id:"public-function-initialize"},"public function ",(0,i.kt)("inlineCode",{parentName:"h4"},"initialize")),(0,i.kt)("p",null,"Initializes the component."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function initialize(contract IDAO _dao, address _trustedForwarder, uint64 _participationRequiredPct, uint64 _supportRequiredPct, uint64 _minDuration, contract ERC20VotesUpgradeable _token) public \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_dao"),(0,i.kt)("td",{parentName:"tr",align:null},"contract IDAO"),(0,i.kt)("td",{parentName:"tr",align:null},"The IDAO interface of the associated DAO.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_trustedForwarder"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"The address of the trusted forwarder required for meta transactions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_participationRequiredPct"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64"),(0,i.kt)("td",{parentName:"tr",align:null},"The minimal required participation in percent.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_supportRequiredPct"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64"),(0,i.kt)("td",{parentName:"tr",align:null},"The minimal required support in percent.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_minDuration"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64"),(0,i.kt)("td",{parentName:"tr",align:null},"The minimal duration of a vote.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_token"),(0,i.kt)("td",{parentName:"tr",align:null},"contract ERC20VotesUpgradeable"),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"https://eips.ethereum.org/EIPS/eip-20"},"ERC-20")," token used for voting.")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This method is required to support ",(0,i.kt)("a",{parentName:"em",href:"https://eips.ethereum.org/EIPS/eip-1822"},"ERC-1822"),".")),(0,i.kt)("h4",{id:"public-function-getvotingtoken"},"public function ",(0,i.kt)("inlineCode",{parentName:"h4"},"getVotingToken")),(0,i.kt)("p",null,"getter function for the voting token."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function getVotingToken() public view returns (contract ERC20VotesUpgradeable) \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Output"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[0]"),(0,i.kt)("td",{parentName:"tr",align:null},"contract ERC20VotesUpgradeable"),(0,i.kt)("td",{parentName:"tr",align:null},"ERC20VotesUpgradeable the token used for voting.")))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"public function also useful for registering interfaceId and for distinguishing from majority voting interface.")),(0,i.kt)("h4",{id:"external-function-versionrecipient"},"external function ",(0,i.kt)("inlineCode",{parentName:"h4"},"versionRecipient")),(0,i.kt)("p",null,"Returns the version of the GSN relay recipient."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function versionRecipient() external view virtual returns (string) \n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Describes the version and contract for GSN compatibility.")),(0,i.kt)("h4",{id:"external-function-createvote"},"external function ",(0,i.kt)("inlineCode",{parentName:"h4"},"createVote")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function createVote(bytes _proposalMetadata, struct IDAO.Action[] _actions, uint64 _startDate, uint64 _endDate, bool _executeIfDecided, enum IMajorityVoting.VoteOption _choice) external returns (uint256 voteId) \n")),(0,i.kt)("h4",{id:"internal-function-_vote"},"internal function ",(0,i.kt)("inlineCode",{parentName:"h4"},"_vote")),(0,i.kt)("p",null,"Internal function to cast a vote. It assumes the queried vote exists."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _vote(uint256 _voteId, enum IMajorityVoting.VoteOption _choice, address _voter, bool _executesIfDecided) internal \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_voteId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the vote.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_choice"),(0,i.kt)("td",{parentName:"tr",align:null},"enum IMajorityVoting.VoteOption"),(0,i.kt)("td",{parentName:"tr",align:null},"Whether voter abstains, supports or not supports to vote.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_voter"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_executesIfDecided"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"if true, and it's the last vote required, immediately executes a vote.")))),(0,i.kt)("h4",{id:"internal-function-_canvote"},"internal function ",(0,i.kt)("inlineCode",{parentName:"h4"},"_canVote")),(0,i.kt)("p",null,"Internal function to check if a voter can participate on a vote. It assumes the queried vote exists."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-solidity"},"function _canVote(uint256 _voteId, address _voter) internal view returns (bool) \n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Input"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_voteId"),(0,i.kt)("td",{parentName:"tr",align:null},"uint256"),(0,i.kt)("td",{parentName:"tr",align:null},"The ID of the vote.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"_voter"),(0,i.kt)("td",{parentName:"tr",align:null},"address"),(0,i.kt)("td",{parentName:"tr",align:null},"the address of the voter to check.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Output")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"[0]"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"True if the given voter can participate a certain vote, false otherwise.")))))}m.isMDXComponent=!0}}]);