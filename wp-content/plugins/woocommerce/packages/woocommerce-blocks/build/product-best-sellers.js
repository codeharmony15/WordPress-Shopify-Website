this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-best-sellers"]=function(e){function t(t){for(var c,l,a=t[0],i=t[1],s=t[2],d=0,b=[];d<a.length;d++)l=a[d],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&b.push(n[l][0]),n[l]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);for(u&&u(t);b.length;)b.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],c=!0,a=1;a<r.length;a++){var i=r[a];0!==n[i]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=r[0]))}return e}var c={},n={20:0},o=[];function l(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=c,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(r,c,function(t){return e[t]}.bind(null,c));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var u=i;return o.push([370,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},10:function(e,t){e.exports=window.wp.blocks},102:function(e,t,r){"use strict";r.d(t,"a",(function(){return _}));var c=r(6),n=r.n(c),o=r(0),l=r(1),a=r(3),i=r(120),s=r(526),u=r(4),d=r.n(u),b=r(11),m=r(19),g=r(37),p=r(525),h=r(15);const E=e=>{let{id:t,label:r,popoverContents:c,remove:n,screenReaderLabel:s,className:u=""}=e;const[m,g]=Object(o.useState)(!1),O=Object(b.useInstanceId)(E);if(s=s||r,!r)return null;r=Object(h.decodeEntities)(r);const w=d()("woocommerce-tag",u,{"has-remove":!!n}),j="woocommerce-tag__label-"+O,f=Object(o.createElement)(o.Fragment,null,Object(o.createElement)("span",{className:"screen-reader-text"},s),Object(o.createElement)("span",{"aria-hidden":"true"},r));return Object(o.createElement)("span",{className:w},c?Object(o.createElement)(a.Button,{className:"woocommerce-tag__text",id:j,onClick:()=>g(!0)},f):Object(o.createElement)("span",{className:"woocommerce-tag__text",id:j},f),c&&m&&Object(o.createElement)(a.Popover,{onClose:()=>g(!1)},c),n&&Object(o.createElement)(a.Button,{className:"woocommerce-tag__remove",onClick:n(t),label:Object(l.sprintf)(// Translators: %s label.
Object(l.__)("Remove %s","woocommerce"),r),"aria-describedby":j},Object(o.createElement)(i.a,{icon:p.a,size:20,className:"clear-icon"})))};var O=E;const w=e=>Object(o.createElement)(g.b,e),j=e=>{const{list:t,selected:r,renderItem:c,depth:l=0,onSelect:a,instanceId:i,isSingle:s,search:u}=e;return t?Object(o.createElement)(o.Fragment,null,t.map(t=>{const d=-1!==r.findIndex(e=>{let{id:r}=e;return r===t.id});return Object(o.createElement)(o.Fragment,{key:t.id},Object(o.createElement)("li",null,c({item:t,isSelected:d,onSelect:a,isSingle:s,search:u,depth:l,controlId:i})),Object(o.createElement)(j,n()({},e,{list:t.children,depth:l+1})))})):null},f=e=>{let{isLoading:t,isSingle:r,selected:c,messages:n,onChange:i,onRemove:s}=e;if(t||r||!c)return null;const u=c.length;return Object(o.createElement)("div",{className:"woocommerce-search-list__selected"},Object(o.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(o.createElement)("strong",null,n.selected(u)),u>0?Object(o.createElement)(a.Button,{isLink:!0,isDestructive:!0,onClick:()=>i([]),"aria-label":n.clear},Object(l.__)("Clear all","woocommerce")):null),u>0?Object(o.createElement)("ul",null,c.map((e,t)=>Object(o.createElement)("li",{key:t},Object(o.createElement)(O,{label:e.name,id:e.id,remove:s})))):null)},y=e=>{let{filteredList:t,search:r,onSelect:c,instanceId:n,...a}=e;const{messages:u,renderItem:d,selected:b,isSingle:m}=a,g=d||w;return 0===t.length?Object(o.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(o.createElement)(i.a,{icon:s.a})),Object(o.createElement)("span",{className:"woocommerce-search-list__not-found-text"},r?Object(l.sprintf)(u.noResults,r):u.noItems)):Object(o.createElement)("ul",{className:"woocommerce-search-list__list"},Object(o.createElement)(j,{list:t,selected:b,renderItem:g,onSelect:c,instanceId:n,isSingle:m,search:r}))},_=e=>{const{className:t="",isCompact:r,isHierarchical:c,isLoading:l,isSingle:i,list:s,messages:u=m.a,onChange:g,onSearch:p,selected:h,debouncedSpeak:E}=e,[O,w]=Object(o.useState)(""),j=Object(b.useInstanceId)(_),x=Object(o.useMemo)(()=>({...m.a,...u}),[u]),v=Object(o.useMemo)(()=>Object(m.c)(s,O,c),[s,O,c]);Object(o.useEffect)(()=>{E&&E(x.updated)},[E,x]),Object(o.useEffect)(()=>{"function"==typeof p&&p(O)},[O,p]);const k=Object(o.useCallback)(e=>()=>{i&&g([]);const t=h.findIndex(t=>{let{id:r}=t;return r===e});g([...h.slice(0,t),...h.slice(t+1)])},[i,h,g]),S=Object(o.useCallback)(e=>()=>{-1===h.findIndex(t=>{let{id:r}=t;return r===e.id})?g(i?[e]:[...h,e]):k(e.id)()},[i,k,g,h]);return Object(o.createElement)("div",{className:d()("woocommerce-search-list",t,{"is-compact":r})},Object(o.createElement)(f,n()({},e,{onRemove:k,messages:x})),Object(o.createElement)("div",{className:"woocommerce-search-list__search"},Object(o.createElement)(a.TextControl,{label:x.search,type:"search",value:O,onChange:e=>w(e)})),l?Object(o.createElement)("div",{className:"woocommerce-search-list__list is-loading"},Object(o.createElement)(a.Spinner,null)):Object(o.createElement)(y,n()({},e,{search:O,filteredList:v,messages:x,onSelect:S,instanceId:j})))};Object(a.withSpokenMessages)(_)},11:function(e,t){e.exports=window.wp.compose},13:function(e,t){e.exports=window.wp.primitives},14:function(e,t){e.exports=window.wp.apiFetch},15:function(e,t){e.exports=window.wp.htmlEntities},153:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var c=r(0);const n=Object(c.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(c.createElement)("title",null,"Grid Block Preview"),Object(c.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(c.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(c.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(c.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(c.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(c.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(c.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(c.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(c.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(c.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(c.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(c.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(c.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},16:function(e,t){e.exports=window.wp.url},19:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"c",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"b",(function(){return u}));var c=r(0),n=r(8),o=r(1);const l={clear:Object(o.__)("Clear all selected items","woocommerce"),noItems:Object(o.__)("No items found.","woocommerce"),
/* Translators: %s search term */
noResults:Object(o.__)("No results for %s","woocommerce"),search:Object(o.__)("Search for items","woocommerce"),selected:e=>Object(o.sprintf)(
/* translators: Number of items selected from list. */
Object(o._n)("%d item selected","%d items selected",e,"woocommerce"),e),updated:Object(o.__)("Search results updated.","woocommerce")},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const r=Object(n.groupBy)(e,"parent"),c=Object(n.keyBy)(t,"id"),o=["0"],l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=l(c[e.parent]);return[...t,e.name]},a=e=>e.map(e=>{const t=r[e.id];return o.push(""+e.id),{...e,breadcrumbs:l(c[e.parent]),children:t&&t.length?a(t):[]}}),i=a(r[0]||[]);return Object.entries(r).forEach(e=>{let[t,r]=e;o.includes(t)||i.push(...a(r||[]))}),i},i=(e,t,r)=>{if(!t)return r?a(e):e;const c=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),n=e.map(e=>!!c.test(e.name)&&e).filter(Boolean);return r?a(n,e):n},s=(e,t)=>{if(!t)return e;const r=new RegExp(`(${t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")})`,"ig");return e.split(r).map((e,t)=>r.test(e)?Object(c.createElement)("strong",{key:t},e):Object(c.createElement)(c.Fragment,{key:t},e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},2:function(e,t){e.exports=window.wc.wcSettings},22:function(e,t,r){"use strict";r.d(t,"o",(function(){return o})),r.d(t,"m",(function(){return l})),r.d(t,"l",(function(){return a})),r.d(t,"n",(function(){return i})),r.d(t,"j",(function(){return s})),r.d(t,"e",(function(){return u})),r.d(t,"f",(function(){return d})),r.d(t,"g",(function(){return b})),r.d(t,"k",(function(){return m})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return p})),r.d(t,"h",(function(){return h})),r.d(t,"a",(function(){return E})),r.d(t,"i",(function(){return O})),r.d(t,"b",(function(){return w}));var c,n=r(2);const o=Object(n.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),l=o.pluginUrl+"images/",a=o.pluginUrl+"build/",i=o.buildPhase,s=null===(c=n.STORE_PAGES.shop)||void 0===c?void 0:c.permalink,u=n.STORE_PAGES.checkout.id,d=n.STORE_PAGES.checkout.permalink,b=n.STORE_PAGES.privacy.permalink,m=(n.STORE_PAGES.privacy.title,n.STORE_PAGES.terms.permalink),g=(n.STORE_PAGES.terms.title,n.STORE_PAGES.cart.id),p=n.STORE_PAGES.cart.permalink,h=(n.STORE_PAGES.myaccount.permalink?n.STORE_PAGES.myaccount.permalink:Object(n.getSetting)("wpLoginUrl","/wp-login.php"),Object(n.getSetting)("shippingCountries",{})),E=Object(n.getSetting)("allowedCountries",{}),O=Object(n.getSetting)("shippingStates",{}),w=Object(n.getSetting)("allowedStates",{})},27:function(e,t,r){"use strict";r.d(t,"h",(function(){return s})),r.d(t,"e",(function(){return u})),r.d(t,"b",(function(){return d})),r.d(t,"i",(function(){return b})),r.d(t,"f",(function(){return m})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return p})),r.d(t,"g",(function(){return h})),r.d(t,"a",(function(){return E}));var c=r(16),n=r(14),o=r.n(n),l=r(8),a=r(2),i=r(22);const s=e=>{let{selected:t=[],search:r="",queryArgs:n={}}=e;const a=(e=>{let{selected:t=[],search:r="",queryArgs:n={}}=e;const o=i.o.productCount>100,l={per_page:o?100:0,catalog_visibility:"any",search:r,orderby:"title",order:"asc"},a=[Object(c.addQueryArgs)("/wc/store/v1/products",{...l,...n})];return o&&t.length&&a.push(Object(c.addQueryArgs)("/wc/store/v1/products",{catalog_visibility:"any",include:t,per_page:0})),a})({selected:t,search:r,queryArgs:n});return Promise.all(a.map(e=>o()({path:e}))).then(e=>Object(l.uniqBy)(Object(l.flatten)(e),"id").map(e=>({...e,parent:0}))).catch(e=>{throw e})},u=e=>o()({path:"/wc/store/v1/products/"+e}),d=()=>o()({path:"wc/store/v1/products/attributes"}),b=e=>o()({path:`wc/store/v1/products/attributes/${e}/terms`}),m=e=>{let{selected:t=[],search:r}=e;const n=(e=>{let{selected:t=[],search:r}=e;const n=Object(a.getSetting)("limitTags",!1),o=[Object(c.addQueryArgs)("wc/store/v1/products/tags",{per_page:n?100:0,orderby:n?"count":"name",order:n?"desc":"asc",search:r})];return n&&t.length&&o.push(Object(c.addQueryArgs)("wc/store/v1/products/tags",{include:t})),o})({selected:t,search:r});return Promise.all(n.map(e=>o()({path:e}))).then(e=>Object(l.uniqBy)(Object(l.flatten)(e),"id"))},g=e=>o()({path:Object(c.addQueryArgs)("wc/store/v1/products/categories",{per_page:0,...e})}),p=e=>o()({path:"wc/store/v1/products/categories/"+e}),h=e=>o()({path:Object(c.addQueryArgs)("wc/store/v1/products",{per_page:0,type:"variation",parent:e})}),E=(e,t)=>{if(!e.title.raw)return e.slug;const r=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(r?"":" - "+e.slug)}},29:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}));var c=r(1),n=r(15);const o=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}},l=e=>{if(e.data&&"rest_invalid_param"===e.code){const t=Object.values(e.data.params);if(t[0])return t[0]}return null!=e&&e.message?Object(n.decodeEntities)(e.message):Object(c.__)("Something went wrong. Please contact us to get assistance.","woocommerce")}},3:function(e,t){e.exports=window.wp.components},306:function(e){e.exports=JSON.parse('{"name":"woocommerce/product-best-sellers","title":"Best Selling Products","category":"woocommerce","keywords":["WooCommerce"],"description":"Display a grid of your all-time best selling products.","supports":{"align":["wide","full"],"html":false},"example":{"attributes":{"isPreview":true}},"attributes":{"columns":{"type":"number","default":3},"rows":{"type":"number","default":3},"alignButtons":{"type":"boolean","default":false},"contentVisibility":{"type":"object","default":{"image":true,"title":true,"price":true,"rating":true,"button":true},"properties":{"image":{"type":"boolean","default":true},"title":{"type":"boolean","default":true},"price":{"type":"boolean","default":true},"rating":{"type":"boolean","default":true},"button":{"type":"boolean","default":true}}},"categories":{"type":"array","default":[]},"catOperator":{"type":"string","default":"any"},"isPreview":{"type":"boolean","default":false},"stockStatus":{"type":"array"},"editMode":{"type":"boolean","default":true},"orderby":{"type":"string","enum":["date","popularity","price_asc","price_desc","rating","title","menu_order"],"default":"popularity"}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},33:function(e,t,r){"use strict";var c=r(0),n=r(1),o=r(34);t.a=e=>{let{error:t}=e;return Object(c.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:r}=e;return t?"general"===r?Object(c.createElement)("span",null,Object(n.__)("The following error was returned","woocommerce"),Object(c.createElement)("br",null),Object(c.createElement)("code",null,Object(o.escapeHTML)(t))):"api"===r?Object(c.createElement)("span",null,Object(n.__)("The following error was returned from the API","woocommerce"),Object(c.createElement)("br",null),Object(c.createElement)("code",null,Object(o.escapeHTML)(t))):t:Object(n.__)("An error has prevented the block from being updated.","woocommerce")})(t))}},34:function(e,t){e.exports=window.wp.escapeHtml},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var c=r(6),n=r.n(c),o=r(0),l=r(19);const a=e=>{let{countLabel:t,className:r,depth:c=0,controlId:a="",item:i,isSelected:s,isSingle:u,onSelect:d,search:b="",...m}=e;const g=null!=t&&void 0!==i.count&&null!==i.count,p=[r,"woocommerce-search-list__item"];p.push("depth-"+c),u&&p.push("is-radio-button"),g&&p.push("has-count");const h=i.breadcrumbs&&i.breadcrumbs.length,E=m.name||"search-list-item-"+a,O=`${E}-${i.id}`;return Object(o.createElement)("label",{htmlFor:O,className:p.join(" ")},u?Object(o.createElement)("input",n()({type:"radio",id:O,name:E,value:i.value,onChange:d(i),checked:s,className:"woocommerce-search-list__item-input"},m)):Object(o.createElement)("input",n()({type:"checkbox",id:O,name:E,value:i.value,onChange:d(i),checked:s,className:"woocommerce-search-list__item-input"},m)),Object(o.createElement)("span",{className:"woocommerce-search-list__item-label"},h?Object(o.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(l.b)(i.breadcrumbs)):null,Object(o.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(l.d)(i.name,b))),!!g&&Object(o.createElement)("span",{className:"woocommerce-search-list__item-count"},t||i.count))};t.b=a},370:function(e,t,r){e.exports=r(498)},498:function(e,t,r){"use strict";r.r(t);var c=r(0),n=r(8),o=r(120),l=r(527),a=r(10),i=r(306),s=r(5),u=r(3),d=r(56),b=r.n(d),m=r(153),g=r(1),p=r(65),h=r(2),E=r(64),O=r(57);const w=e=>{const{attributes:t,setAttributes:r}=e,{categories:n,catOperator:o,columns:l,contentVisibility:a,rows:i,alignButtons:d}=t;return Object(c.createElement)(s.InspectorControls,{key:"inspector"},Object(c.createElement)(u.PanelBody,{title:Object(g.__)("Layout","woocommerce"),initialOpen:!0},Object(c.createElement)(p.a,{columns:l,rows:i,alignButtons:d,setAttributes:r,minColumns:Object(h.getSetting)("min_columns",1),maxColumns:Object(h.getSetting)("max_columns",6),minRows:Object(h.getSetting)("min_rows",1),maxRows:Object(h.getSetting)("max_rows",6)})),Object(c.createElement)(u.PanelBody,{title:Object(g.__)("Content","woocommerce"),initialOpen:!0},Object(c.createElement)(E.a,{settings:a,onChange:e=>r({contentVisibility:e})})),Object(c.createElement)(u.PanelBody,{title:Object(g.__)("Filter by Product Category","woocommerce"),initialOpen:!1},Object(c.createElement)(O.a,{selected:n,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e.map(e=>{let{id:t}=e;return t});r({categories:t})},operator:o,onOperatorChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return r({catOperator:e})}})))},j=e=>{const{attributes:t,name:r}=e;return t.isPreview?m.a:Object(c.createElement)("div",{className:"wc-block-product-best-sellers"},Object(c.createElement)(w,e),Object(c.createElement)(u.Disabled,null,Object(c.createElement)(b.a,{block:r,attributes:t})))};var f=r(78);Object(a.registerBlockType)(i,{icon:{src:Object(c.createElement)(o.a,{icon:l.a,className:"wc-block-editor-components-block-icon"})},attributes:{...f.a,...i.attributes},transforms:{from:[{type:"block",blocks:Object(n.without)(f.b,"woocommerce/product-best-sellers"),transform:e=>Object(a.createBlock)("woocommerce/product-best-sellers",e)}]},edit:e=>{const t=Object(s.useBlockProps)();return Object(c.createElement)("div",t,Object(c.createElement)(j,e))},save:()=>null})},5:function(e,t){e.exports=window.wp.blockEditor},56:function(e,t){e.exports=window.wp.serverSideRender},57:function(e,t,r){"use strict";var c=r(6),n=r.n(c),o=r(0),l=r(1),a=r(37),i=r(102),s=r(3),u=r(11),d=r(27),b=r(29),m=Object(u.createHigherOrderComponent)(e=>class extends o.Component{constructor(){super(...arguments),this.state={error:null,loading:!1,categories:[]},this.loadCategories=this.loadCategories.bind(this)}componentDidMount(){this.loadCategories()}loadCategories(){this.setState({loading:!0}),Object(d.c)().then(e=>{this.setState({categories:e,loading:!1,error:null})}).catch(async e=>{const t=await Object(b.a)(e);this.setState({categories:[],loading:!1,error:t})})}render(){const{error:t,loading:r,categories:c}=this.state;return Object(o.createElement)(e,n()({},this.props,{error:t,isLoading:r,categories:c}))}},"withCategories"),g=r(33),p=r(4),h=r.n(p);r(96);const E=e=>{let{categories:t,error:r,isLoading:c,onChange:u,onOperatorChange:d,operator:b,selected:m,isCompact:p,isSingle:E,showReviewCount:O}=e;const w={clear:Object(l.__)("Clear all product categories","woocommerce"),list:Object(l.__)("Product Categories","woocommerce"),noItems:Object(l.__)("Your store doesn't have any product categories.","woocommerce"),search:Object(l.__)("Search for product categories","woocommerce"),selected:e=>Object(l.sprintf)(
/* translators: %d is the count of selected categories. */
Object(l._n)("%d category selected","%d categories selected",e,"woocommerce"),e),updated:Object(l.__)("Category search results updated.","woocommerce")};return r?Object(o.createElement)(g.a,{error:r}):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(i.a,{className:"woocommerce-product-categories",list:t,isLoading:c,selected:m.map(e=>t.find(t=>t.id===e)).filter(Boolean),onChange:u,renderItem:e=>{const{item:t,search:r,depth:c=0}=e,i=t.breadcrumbs.length?`${t.breadcrumbs.join(", ")}, ${t.name}`:t.name,s=O?Object(l.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
Object(l._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",t.review_count,"woocommerce"),i,t.review_count):Object(l.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of products for the item. */
Object(l._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,"woocommerce"),i,t.count),u=O?Object(l.sprintf)(
/* translators: %d is the count of reviews. */
Object(l._n)("%d review","%d reviews",t.review_count,"woocommerce"),t.review_count):Object(l.sprintf)(
/* translators: %d is the count of products. */
Object(l._n)("%d product","%d products",t.count,"woocommerce"),t.count);return Object(o.createElement)(a.a,n()({className:h()("woocommerce-product-categories__item","has-count",{"is-searching":r.length>0,"is-skip-level":0===c&&0!==t.parent})},e,{countLabel:u,"aria-label":s}))},messages:w,isCompact:p,isHierarchical:!0,isSingle:E}),!!d&&Object(o.createElement)("div",{hidden:m.length<2},Object(o.createElement)(s.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(l.__)("Display products matching","woocommerce"),help:Object(l.__)("Pick at least two categories to use this setting.","woocommerce"),value:b,onChange:d,options:[{label:Object(l.__)("Any selected categories","woocommerce"),value:"any"},{label:Object(l.__)("All selected categories","woocommerce"),value:"all"}]})))};E.defaultProps={operator:"any",isCompact:!1,isSingle:!1},t.a=m(E)},64:function(e,t,r){"use strict";var c=r(0),n=r(1),o=r(3);t.a=e=>{let{onChange:t,settings:r}=e;const{image:l,button:a,price:i,rating:s,title:u}=r,d=!1!==l;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(o.ToggleControl,{label:Object(n.__)("Product image","woocommerce"),checked:d,onChange:()=>t({...r,image:!d})}),Object(c.createElement)(o.ToggleControl,{label:Object(n.__)("Product title","woocommerce"),checked:u,onChange:()=>t({...r,title:!u})}),Object(c.createElement)(o.ToggleControl,{label:Object(n.__)("Product price","woocommerce"),checked:i,onChange:()=>t({...r,price:!i})}),Object(c.createElement)(o.ToggleControl,{label:Object(n.__)("Product rating","woocommerce"),checked:s,onChange:()=>t({...r,rating:!s})}),Object(c.createElement)(o.ToggleControl,{label:Object(n.__)("Add to Cart button","woocommerce"),checked:a,onChange:()=>t({...r,button:!a})}))}},65:function(e,t,r){"use strict";var c=r(0),n=r(1),o=r(8),l=r(3);t.a=e=>{let{columns:t,rows:r,setAttributes:a,alignButtons:i,minColumns:s=1,maxColumns:u=6,minRows:d=1,maxRows:b=6}=e;return Object(c.createElement)(c.Fragment,null,Object(c.createElement)(l.RangeControl,{label:Object(n.__)("Columns","woocommerce"),value:t,onChange:e=>{const t=Object(o.clamp)(e,s,u);a({columns:Number.isNaN(t)?"":t})},min:s,max:u}),Object(c.createElement)(l.RangeControl,{label:Object(n.__)("Rows","woocommerce"),value:r,onChange:e=>{const t=Object(o.clamp)(e,d,b);a({rows:Number.isNaN(t)?"":t})},min:d,max:b}),Object(c.createElement)(l.ToggleControl,{label:Object(n.__)("Align the last block to the bottom","woocommerce"),help:i?Object(n.__)("Align the last block to the bottom.","woocommerce"):Object(n.__)("The last inner block will follow other content.","woocommerce"),checked:i,onChange:()=>a({alignButtons:!i})}))}},78:function(e,t,r){"use strict";r.d(t,"b",(function(){return n}));var c=r(2);const n=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:Object(c.getSetting)("default_columns",3)},rows:{type:"number",default:Object(c.getSetting)("default_rows",3)},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{image:!0,title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1},stockStatus:{type:"array",default:Object.keys(Object(c.getSetting)("stockStatusOptions",[]))}}},8:function(e,t){e.exports=window.lodash},96:function(e,t){}});