(function(t){function e(e){for(var a,i,s=e[0],c=e[1],l=e[2],u=0,f=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function i(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4fc60cdf"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",l.name="ChunkLoadError",l.type=a,l.request=o,n[1](l)}r[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0b63":function(t,e,n){},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},"1a7b":function(t,e,n){},2:function(t,e){},2055:function(t,e,n){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"51ec":function(t,e,n){"use strict";var a=n("0b63"),r=n.n(a);r.a},"53d7":function(t,e,n){"use strict";var a=n("1a7b"),r=n.n(a);r.a},"544b":function(t,e,n){},6:function(t,e){},7:function(t,e){},8:function(t,e){},"870f":function(t,e,n){},9:function(t,e){},bd72:function(t,e,n){"use strict";var a=n("2055"),r=n.n(a);r.a},ca4d:function(t,e,n){"use strict";var a=n("870f"),r=n.n(a);r.a},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-system-bar"),n("v-app-bar",{attrs:{app:""}},[n("Navbar")],1),n("v-content",[t.loading?t._e():n("v-card",{staticClass:"mx-auto pl-3",attrs:{"max-width":"330"}},[n("p",{staticClass:"medium"},[n("span",{staticClass:"brown--text"},[t._v("Last Updated: ")]),t._v(" "+t._s(t.lastUpdated))]),t._v(" "),n("v-spacer"),n("p",[n("span",{staticClass:"brown--text"},[t._v("24Hr Volume:")]),t._v(" $ "+t._s(t.volume24hr||"loading...")+" "),n("v-spacer")],1),n("p",[n("span",{staticClass:"brown--text"},[t._v("Market Cap:")]),t._v(" $ "),n("span",{staticClass:"green--text"},[t._v(t._s(t.marketCap||"loading..."))]),n("v-spacer")],1)],1),n("v-container",{attrs:{fluid:""}},[n("router-view")],1)],1),n("v-bottom-navigation"),n("Footer")],1)},o=[],i=(n("a9e3"),n("b680"),n("5530")),s=n("2f62"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app-bar",{attrs:{absolute:"",color:"white"}},[n("v-spacer"),n("router-link",{attrs:{to:"/"}},[t._v("Home")]),n("router-link",{attrs:{to:"/portfolio"}},[t._v("Portfolio")]),n("v-btn",{attrs:{href:"#",text:""}},[n("small",[n("span",{staticClass:"mr-2"},[t._v("V 0.1.4-alpha")])])])],1)},l=[],u=a["default"].extend({name:"Navbar"}),d=u,f=(n("ca4d"),n("2877")),p=n("6544"),m=n.n(p),v=n("40dc"),h=n("8336"),g=n("2fa4"),b=Object(f["a"])(d,c,l,!1,null,"6e4faed4",null),y=b.exports;m()(b,{VAppBar:v["a"],VBtn:h["a"],VSpacer:g["a"]});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("v-card-title",{staticClass:"primary lighten-1"},[n("v-spacer"),t._l(t.icons,(function(e,a){return n("v-btn",{key:a,staticClass:"mx-4",attrs:{dark:"",icon:""}},[n("a",{staticClass:"white--text links",attrs:{href:e.url,target:"_blank"}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.icon))])],1)])}))],2),n("v-card-text",{staticClass:"py-2 white--text text-center darken-3"},[t._v(" Made by "),n("strong",[n("a",{staticClass:"green--text darken-4 footer-link",attrs:{href:"https://www.twitter.com/abdhafizahmed",target:"_blank"}},[t._v("Abdulhafiz Ahmed")])]),n("pre"),t._v("Data provided by "),n("strong",[n("a",{staticClass:"blue--text footer-link",attrs:{href:"https://www.coinranking.com",target:"_blank"}},[t._v("Coinranking")])])])],1)],1)},_=[],x=a["default"].extend({name:"Footer",data:function(){return{icons:[{icon:"mdi-twitter",url:"https://www.twitter.com/abdhafizahmed"},{icon:"mdi-linkedin",url:"https://www.linkedin.com/in/abdulhafiz-ahmed"},{icon:"mdi-github",url:"https://www.github.com/rexdavinci"}]}}}),k=x,w=(n("53d7"),n("b0af")),A=n("99d9"),S=n("553a"),O=n("132d"),P=Object(f["a"])(k,C,_,!1,null,null,null),V=P.exports;m()(P,{VBtn:h["a"],VCard:w["a"],VCardText:A["b"],VCardTitle:A["c"],VFooter:S["a"],VIcon:O["a"],VSpacer:g["a"]});var E=a["default"].extend({name:"App",components:{Navbar:y,Footer:V},data:function(){return{loading:!0}},mounted:function(){this.$store.dispatch("fetchCoinRanking")},computed:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["globalInformation"])),{},{volume24hr:function(){if(this.globalInformation){var t=this.globalInformation.total24hVolume;return Number(Number(t).toFixed(2)).toLocaleString()}return this.loading},marketCap:function(){if(this.globalInformation){var t=this.globalInformation.totalMarketCap;return Number(Number(t).toFixed(2)).toLocaleString()}return this.loading},lastUpdated:function(){if(this.globalInformation){var t=new Date(this.globalInformation.updatedAt);return t.toLocaleString()}return this.loading}}),watch:{globalInformation:function(){this.globalInformation&&(this.loading=!1)}}}),j=E,T=n("7496"),I=n("b81c"),N=n("a523"),D=n("a75b"),$=n("afd9"),F=Object(f["a"])(j,r,o,!1,null,null,null),R=F.exports;m()(F,{VApp:T["a"],VAppBar:v["a"],VBottomNavigation:I["a"],VCard:w["a"],VContainer:N["a"],VContent:D["a"],VSpacer:g["a"],VSystemBar:$["a"]});var W=n("9483");Object(W["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var B=n("8c4f"),q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HomeComponent",{attrs:{msg:"All your portfolio in one"}})],1)},L=[],H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("Coins")],1)},M=[],U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1380"}},[n("v-card-title",[t._v(" Assets "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),n("v-data-table",{staticClass:"elevation-1 coin-list",attrs:{"fixed-header":t.fixedHeader,"item-key":"rank",headers:t.headers,items:t.coins,search:t.search,"sort-desc":t.sortDesc,"items-per-page":t.itemsPerPage,page:t.page,loading:t.loading,"loading-text":t.loadingText,"hide-default-footer":""},on:{"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e},"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.rank",fn:function(e){var a=e.item;return[n("div",{attrs:{id:"coin-profile"}},[n("span",{staticClass:"cryptocurrency"},[n("a",{staticClass:"coin-link",attrs:{href:t.getLink(a),target:"_blank"}},[n("span",{staticClass:"coin-rank"},[t._v(" "+t._s(a.rank)+" ")]),n("span",{staticClass:"coin-logo"},[n("img",{attrs:{src:a.iconUrl,alt:"icon",width:"35",height:"30"}})])])])])]}},{key:"item.change",fn:function(e){var a=e.item;return[n("v-chip",{attrs:{color:t.getColor(a.change),dark:""}},[t._v(t._s(a.change))])]}},{key:"item.name",fn:function(e){var a=e.item;return[n("div",{staticClass:"coin-name"},[t._v(t._s(a.name))])]}},{key:"item.marketCap",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.toFixed(n.marketCap))+" ")]}},{key:"item.price",fn:function(e){var n=e.item;return[t._v(" "+t._s(t.toFixed(n.price))+" ")]}}])})],1)},J=[],z=(n("99af"),a["default"].extend({name:"Coins",computed:Object(i["a"])({},Object(s["b"])(["coins"])),data:function(){return{sortBy:"rank",itemsPerPage:20,fixedHeader:!0,page:1,pageCount:0,sortDesc:!1,loading:!0,search:"",loadingText:"Fetching Cryptocurrency Assets... please wait!",headers:[{text:"RANK",align:"start",value:"rank"},{text:"NAME",value:"name"},{text:"SYMBOL",value:"symbol"},{text:"MARKET CAP",value:"marketCap"},{text:"PRICE",value:"price"},{text:"24HR",value:"change"}]}},methods:{toggleOrder:function(){this.sortDesc=!this.sortDesc},toFixed:function(t){var e=parseFloat(parseFloat(t).toFixed(2)).toLocaleString();return"$ ".concat(e)},getLink:function(t){return"https://coinranking.com/coin/".concat(t.uuid,"+").concat(t.slug)},getColor:function(t){return t<0?"red":t>0?"green":"orange"}},watch:{coins:function(){this.coins.length>0&&(this.loading=!1)}}})),K=z,G=(n("e14e"),n("cc20")),Q=n("8fea"),Y=n("8654"),X=Object(f["a"])(K,U,J,!1,null,"2072ea99",null),Z=X.exports;m()(X,{VCard:w["a"],VCardTitle:A["c"],VChip:G["a"],VDataTable:Q["a"],VSpacer:g["a"],VTextField:Y["a"]});var tt=a["default"].extend({name:"Home",components:{Coins:Z},props:{msg:String}}),et=tt,nt=(n("51ec"),Object(f["a"])(et,H,M,!1,null,"46fbfb3c",null)),at=nt.exports,rt={name:"Home",components:{HomeComponent:at}},ot=rt,it=Object(f["a"])(ot,q,L,!1,null,null,null),st=it.exports,ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"portfolio"}},[n("h2",[t._v("Portfolio")]),n("Portfolio")],1)},lt=[],ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"1380"}},[t.deleting?n("v-alert",{attrs:{prominent:"",text:"",type:"warning",icon:"mdi-fire"}},[t._v(" Are you sure you want to delete this record of "+t._s(t.toDelete.quantity)+" of "),n("strong",[t._v(t._s(t.toDelete.name)+" ")]),t._v(" bought at "),n("strong",[t._v(t._s(t.toDelete.boughtAt))]),t._v("? "),n("v-spacer"),n("v-btn",{staticClass:"green mr-5 ml-5",on:{click:function(e){return t.confirmDelete(t.toDelete)}}},[t._v("confirm")]),n("v-btn",{staticClass:"warning",on:{click:function(e){return t.cancelDelete()}}},[t._v("Cancel")])],1):t._e(),t.nuking?n("v-alert",{attrs:{prominent:"",text:"",type:"error",icon:"mdi-nuke"}},[t._v(" This will erase all your currenctly saved records. Proceed? "),n("v-spacer"),n("v-btn",{staticClass:"green mr-5 ml-5",on:{click:function(e){return t.confirmDelete(t.toDelete)}}},[t._v("confirm")]),n("v-btn",{staticClass:"warning",on:{click:function(e){return t.cancelDelete()}}},[t._v("Cancel")])],1):t._e(),t.deleted?n("v-alert",{attrs:{prominent:"",text:"",type:"success"}},[t._v(" The record has been deleted "),n("v-spacer")],1):t._e(),t.nuked?n("v-alert",{attrs:{prominent:"",text:"",type:"success"}},[t._v(" What record ? :) "),n("v-spacer")],1):t._e(),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.myCryptoAssets,page:t.page,"items-per-page":t.itemsPerPage,"hide-default-footer":"","sort-by":"worth"},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",[t._v("My ASSETS")]),n("v-divider",{staticClass:"green darken-3 mx-4",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-toolbar",{attrs:{elevation:"0"}},[n("span",{staticClass:"mr-3"},[t._v("Net Worth:")]),n("strong",[t._v("$")]),n("span",{staticClass:"ml-2"},[t._v(" "+t._s(t.netWorth))]),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),n("span",[t._v(" "+t._s(t.netWorthSatoshis)+" ")]),n("v-icon",{staticClass:"ml-3",attrs:{darken:""}},[t._v("mdi-bitcoin")])],1),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"primary",attrs:{dark:"",small:"",absolute:"",right:"",fab:""}},a),[n("v-icon",[t._v("mdi-plus")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-combobox",{attrs:{items:t.coinSymbols,label:"Asset name"},model:{value:t.assetEdit.name,callback:function(e){t.$set(t.assetEdit,"name",e)},expression:"assetEdit.name"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",step:"0.0000001",label:"Asset Quantity"},model:{value:t.assetEdit.quantity,callback:function(e){t.$set(t.assetEdit,"quantity",e)},expression:"assetEdit.quantity"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{type:"number",step:"0.0000001",label:"Bougth (sats per 1)"},model:{value:t.assetEdit.boughtAt,callback:function(e){t.$set(t.assetEdit,"boughtAt",e)},expression:"assetEdit.boughtAt"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.close}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.save}},[t._v("Add")])],1)],1)],1)],1)]},proxy:!0},{key:"item.actions",fn:function(e){var a=e.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(e){return t.editItem(a)}}},[t._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(a)}}},[t._v(" mdi-delete ")])]}},{key:"no-data",fn:function(){return[n("v-btn",{attrs:{color:"primary"},on:{click:t.restoreAssets}},[n("v-icon",{staticClass:"mr-1"},[t._v("mdi-restore")]),t._v(" Restore ")],1)]},proxy:!0},{key:"item.name",fn:function(e){var a=e.item;return[n("div",{attrs:{id:"asset-profile"}},[n("span",{staticClass:"asset"},[n("a",{staticClass:"asset-link",attrs:{href:t.getProperty(a.name,"link"),target:"_blank"}},[n("span",{staticClass:"asset-rank"},[t._v(" "+t._s(a.name)+" ")]),n("span",{staticClass:"asset-logo"},[n("img",{attrs:{src:t.getProperty(a.name,"icon"),alt:"icon",width:"35",height:"30"}})])])])])]}},{key:"item.price",fn:function(e){var n=e.item;return[t._v(" $ "+t._s(t.getProperty(n.name,"price"))+" | "+t._s(t.getProperty(n.name,"satoshi"))+" ")]}},{key:"item.change",fn:function(e){var a=e.item;return[n("v-chip",{attrs:{color:t.getColor(a.change),dark:""}},[t._v(t._s(t.getProperty(a.name,"change")))])]}},{key:"item.worth",fn:function(e){var a=e.item;return[t._v(" $ "),n("strong",[t._v(t._s(t.getWorth(t.getProperty(a.name,"rawPrice"),a.quantity))+" | "+t._s(t.getWorth(t.getProperty(a.name,"satoshi"),a.quantity,"satoshi"))+" ")]),t._v(" "),n("v-icon",[t._v("mdi-bitcoin")])]}}])}),n("div",{staticClass:"text-center pt-2"},[n("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}}),n("v-text-field",{staticClass:"items-per-page",attrs:{value:t.itemsPerPage,label:"Items per page",type:"number",min:"-1",max:"15"},on:{input:function(e){t.itemsPerPage=parseInt(e,10)}}})],1),t.nukable?n("div",[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[n("v-btn",t._g({staticClass:"ml-3 mb-3 red darken-2",attrs:{dark:"",small:""},on:{click:t.nuke}},a),[n("v-icon",[t._v("mdi-nuke")])],1)]}}],null,!1,2136106473)},[n("span",[t._v("Erase all records")])])],1):t._e()],1)},dt=[],ft=(n("4de4"),n("7db0"),n("d81d"),n("13d5"),n("b0c0"),n("2909")),pt=n("4556"),mt=n.n(pt),vt=a["default"].extend({name:"Portfolio",data:function(){return{dialog:!1,deleteThis:"",headers:[{text:"ASSETS",align:"start",value:"name"},{text:"ADDED",value:"added"},{text:"QUANTITY",value:"quantity"},{text:"WORTH ($ | sats)",value:"worth"},{text:"BOUGHT (BTC sats / unit)",value:"boughtAt"},{text:"PRICE ($ | sats)",value:"price"},{text:"24HR %",value:"change"},{text:"Actions",value:"actions",sortable:!1}],myCryptoAssets:[],editing:!1,assetEdit:{id:"",name:"",added:"",currentPrice:0,quantity:0,boughtAt:0},defaultItem:{id:"",name:"",added:"",currentPrice:0,quantity:0,boughtAt:0},toDelete:{},deleting:!1,deleted:!1,nuking:!1,nuked:!1,nukable:!1,page:1,pageCount:0,itemsPerPage:10,netWorth:0,netWorthSatoshis:0}},computed:Object(i["a"])(Object(i["a"])({},Object(s["b"])(["coins"])),{},{formTitle:function(){return this.editing?"Edit Asset":"New Asset"},coinSymbols:function(){return this.coins.map((function(t){return t.symbol}))}}),methods:{getWorth:function(t,e,n){var a=t*e;return n?a.toFixed(8):Number(Number(a)).toLocaleString()},getColor:function(t){return t<0?"red":t>0?"green":"orange"},getProperty:function(t,e){var n=this.coins.find((function(e){return e.symbol===t})),a=this.coins.find((function(t){return"BTC"===t.symbol}));switch(e){case"link":return"https://coinranking.com/coin/".concat(n.uuid,"+").concat(n.slug);case"icon":return n.iconUrl;case"price":return this.getDollarPrice(n.price);case"rawPrice":return n.price;case"change":return n.change;case"satoshi":return this.getSatoshisPrice(n.price,a.price);default:return""}},restoreAssets:function(){var t=window.localStorage.getItem("myCryptoAssets");if(t){var e=JSON.parse(t);this.myCryptoAssets=e}},close:function(){var t=this;this.dialog=!1,this.$nextTick((function(){t.assetEdit=Object(i["a"])({},t.defaultItem),t.editing=!1}))},deleteItem:function(t){this.deleted=!1,this.toDelete=Object(i["a"])({},t),this.deleting=!0},nuke:function(){this.nuking=!0},confirmDelete:function(){var t=this;if(this.nuking)this.myCryptoAssets=[],window.localStorage.clear(),this.nuking=!1,this.nuked=!0;else{var e=this.myCryptoAssets.filter((function(e){return e.id!==t.toDelete.id}));this.myCryptoAssets=e,window.localStorage.setItem("myCryptoAssets",JSON.stringify(e)),this.deleting=!1,this.deleted=!0}setTimeout((function(){t.deleted=!1,t.nuked=!1}),3e3)},cancelDelete:function(){this.deleting=!1,this.nuking=!1},editItem:function(t){var e=this.myCryptoAssets.find((function(e){return e.id===t.id}));this.assetEdit=Object(i["a"])({},e),this.editing=!0,this.dialog=!0},generateUniqueId:function(){return mt()({length:10,type:"base64"})},save:function(){var t=this;if(this.assetEdit.name)if(this.editing){var e=this.myCryptoAssets.map((function(e){return e.id!==t.assetEdit.id?e:t.assetEdit}));this.myCryptoAssets=e,window.localStorage.setItem("myCryptoAssets",JSON.stringify(e)),this.editing=!1}else{var n=Object(i["a"])(Object(i["a"])({},this.assetEdit),{},{id:this.generateUniqueId(),added:(new Date).toLocaleString()});this.myCryptoAssets=[].concat(Object(ft["a"])(this.myCryptoAssets),[n]),window.localStorage.setItem("myCryptoAssets",JSON.stringify(this.myCryptoAssets))}this.close()},getAssetCurrentPrice:function(t,e){if(!e){var n=this.coins.find((function(e){return e.symbol===t})),a=n.price;return Number(a)}return 0},getDollarPrice:function(t){return Number(Number(t).toLocaleString())},getSatoshisPrice:function(t,e){return Number((t*(1/e)).toFixed(8))},sumReducer:function(t){return t.reduce((function(t,e){return t+e}),0)}},watch:{myCryptoAssets:function(){var t=this;if(this.myCryptoAssets.length>0){var e=this.coins.find((function(t){return"BTC"===t.symbol})),n=this.myCryptoAssets.map((function(n){var a={};return a.dollars=t.getAssetCurrentPrice(n.name)*n.quantity,a.satoshis=t.getSatoshisPrice(a.dollars,e.price),a})),a=n.map((function(t){return t.dollars})),r=n.map((function(t){return t.satoshis}));this.netWorth=this.sumReducer(a).toLocaleString(),this.netWorthSatoshis=this.sumReducer(r).toFixed(8),this.nukable=!0}else this.nukable=!1,this.netWorth=0,this.netWorthSatoshis=0},displayNetWorth:function(){return this.netWorth},dialog:function(t){return t||this.close()},deleteThis:function(t){return t.name}}}),ht=vt,gt=(n("bd72"),n("0798")),bt=n("62ad"),yt=n("2b5d"),Ct=n("169a"),_t=n("ce7e"),xt=n("891e"),kt=n("0fd9"),wt=n("71d9"),At=n("2a7f"),St=n("3a2f"),Ot=Object(f["a"])(ht,ut,dt,!1,null,"0ee54215",null),Pt=Ot.exports;m()(Ot,{VAlert:gt["a"],VBtn:h["a"],VCard:w["a"],VCardActions:A["a"],VCardText:A["b"],VCardTitle:A["c"],VChip:G["a"],VCol:bt["a"],VCombobox:yt["a"],VContainer:N["a"],VDataTable:Q["a"],VDialog:Ct["a"],VDivider:_t["a"],VIcon:O["a"],VPagination:xt["a"],VRow:kt["a"],VSpacer:g["a"],VTextField:Y["a"],VToolbar:wt["a"],VToolbarTitle:At["a"],VTooltip:St["a"]});var Vt=a["default"].extend({components:{Portfolio:Pt}}),Et=Vt,jt=Object(f["a"])(Et,ct,lt,!1,null,null,null),Tt=jt.exports,It=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",elevation:"0"}},[n("h2",{staticClass:"font-weight-bold"},[t._v("Coming Soon")])])},Nt=[],Dt=a["default"].extend({name:"Exchanges"}),$t=Dt,Ft=Object(f["a"])($t,It,Nt,!1,null,null,null),Rt=Ft.exports;m()(Ft,{VCard:w["a"]});var Wt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500",elevation:"0"}},[n("h2",{staticClass:"font-weight-bold"},[t._v("Coming Soon")])])},Bt=[],qt=a["default"].extend({name:"Orders"}),Lt=qt,Ht=Object(f["a"])(Lt,Wt,Bt,!1,null,null,null),Mt=Ht.exports;m()(Ht,{VCard:w["a"]}),a["default"].use(B["a"]);var Ut=[{path:"/",name:"Home",component:st},{path:"/exchanges",name:"Exchanges",component:Rt},{path:"/orders",name:"Orders",component:Mt},{path:"/portfolio",name:"Portfolio",component:Tt},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],Jt=new B["a"]({mode:"history",base:"/",routes:Ut}),zt=Jt,Kt=(n("96cf"),n("1da1"));function Gt(){return Qt.apply(this,arguments)}function Qt(){return Qt=Object(Kt["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:3000/api/data");case 2:return e=t.sent,t.prev=3,t.next=6,e.json();case 6:e.data=t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](3),console.log("error",t.t0.response);case 12:if(e.ok){t.next=15;break}throw console.log("error"),new Error(e.statusText);case 15:return t.abrupt("return",e);case 16:case"end":return t.stop()}}),t,null,[[3,9]])}))),Qt.apply(this,arguments)}var Yt=Gt;a["default"].use(s["a"]);var Xt=new s["a"].Store({state:{coins:[],globalInfo:null,base:null},getters:{coins:function(t){return t.coins},globalInformation:function(t){return t.globalInfo}},mutations:{COINS_RANKING:function(t,e){var n=e.assets,a=JSON.parse(n);t.coins=a.data.coins,t.globalInfo=a.data.stats,t.base=a.data.base}},actions:{fetchCoinRanking:function(t){return Object(Kt["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Yt();case 3:a=e.sent,n("COINS_RANKING",a.data);case 5:case"end":return e.stop()}}),e)})))()}},modules:{}}),Zt=n("ce5b"),te=n.n(Zt);n("bf40");a["default"].use(te.a);var ee=new te.a({});a["default"].config.productionTip=!1,new a["default"]({router:zt,store:Xt,vuetify:ee,render:function(t){return t(R)}}).$mount("#app")},e14e:function(t,e,n){"use strict";var a=n("544b"),r=n.n(a);r.a}});
//# sourceMappingURL=app.de573543.js.map