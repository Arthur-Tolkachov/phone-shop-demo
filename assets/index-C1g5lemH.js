import{g as B,q as b,j as t,B as g,S as E,T as x,r as u,I as p,G as N,a as H,_ as V,c as C,f as P,L as $,t as R,H as T,N as y,v as S,s as q,y as M}from"./index-GRx_6V2v.js";import{T as z}from"./TextButton-Dg4yA2rL.js";import{E as A}from"./EmptyProducts-CubiF9rN.js";const G="_container_1af8g_6",K="_cartInfo_1af8g_10",W="_total_1af8g_28",Z="_list_1af8g_36",v={container:G,cartInfo:K,total:W,list:Z},D="_header_uz52e_6",Q={header:D},F=()=>{const e=B(),{state:s}=b(),d=()=>{s!=null&&s.from?e(s.from):e("/")};return t.jsxs(g,{className:Q.header,children:[t.jsx(z,{startAdornment:E,onClick:d,children:"Back"}),t.jsx(x,{variant:"h1",children:"Cart"})]})},J=e=>u.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.6665 7.99999C2.6665 7.63181 2.96498 7.33333 3.33317 7.33333H12.6665C13.0347 7.33333 13.3332 7.63181 13.3332 7.99999C13.3332 8.36818 13.0347 8.66666 12.6665 8.66666H3.33317C2.96498 8.66666 2.6665 8.36818 2.6665 7.99999Z",fill:"#313237"})),O=e=>u.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},u.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.6665 3.33334C8.6665 2.96515 8.36803 2.66667 7.99984 2.66667C7.63165 2.66667 7.33317 2.96515 7.33317 3.33334V7.33334H3.33317C2.96498 7.33334 2.6665 7.63182 2.6665 8.00001C2.6665 8.3682 2.96498 8.66667 3.33317 8.66667H7.33317V12.6667C7.33317 13.0349 7.63165 13.3333 7.99984 13.3333C8.36803 13.3333 8.6665 13.0349 8.6665 12.6667V8.66667H12.6665C13.0347 8.66667 13.3332 8.3682 13.3332 8.00001C13.3332 7.63182 13.0347 7.33334 12.6665 7.33334H8.6665V3.33334Z",fill:"#313237"})),U="_counter_lhnvr_6",X={counter:U},Y=({initialValue:e=0,value:s,maxValue:d=99,minValue:m=0,onAdd:a,onSubtract:c})=>{const[i,o]=u.useState(e),r=s??i,n=()=>{o(h=>{const f=h+1;return a&&a(f),f})},l=()=>{o(h=>{const f=h-1;return c&&c(f),f})};return t.jsxs(g,{className:X.counter,children:[t.jsx(p,{Icon:J,onClick:l,disabled:r<=m}),t.jsx(x,{variant:"body",children:r}),t.jsx(p,{Icon:O,onClick:n,disabled:r>=d})]})},tt="_cartList_14fo9_6",et="_cartItem_14fo9_11",st="_closeBtn_14fo9_27",nt="_imageLink_14fo9_36",at="_titleLink_14fo9_54",ct="_title_14fo9_54",ot="_price_14fo9_67",_={cartList:tt,cartItem:et,closeBtn:st,imageLink:nt,titleLink:at,title:ct,price:ot},rt=({products:e,className:s,isLoading:d,...m})=>{const{storedProducts:a,updateStoredProducts:c}=N(),{isMobile:i}=H(),o=u.useCallback((n,l)=>{c({productId:n,value:l,storedKey:"cartProducts",action:"addValue",storedProducts:a})},[a,c]),r=u.useCallback((n,l)=>{c({productId:n,storedKey:"cartProducts",action:"remove",storedProducts:a,callback:()=>{V.success(`${l} has been removed from the cart successfully`)}})},[a,c]);return d?t.jsx(g,{className:C(s),children:t.jsx(P,{fullWidth:!0,height:i?148:115,gap:16,quantity:3,direction:"column"})}):!e||!e.length?t.jsx(A,{variant:"cart",description:"Cart is empty"}):t.jsx($,{className:C(_.cartList,s),...m,children:e==null?void 0:e.map(({id:n,images:l,name:h,priceDiscount:f,priceRegular:w,quantity:I})=>{const k=`/products/${n}`;return t.jsxs(R,{className:_.cartItem,children:[t.jsx(T,{className:_.closeBtn,onClick:()=>{r(n,h)}}),t.jsx(y,{to:k,className:_.imageLink,state:{from:"/cart"},children:t.jsx("img",{src:l[0],alt:h})}),t.jsx(y,{to:k,className:_.titleLink,state:{from:"/cart"},children:t.jsx(x,{variant:"body",className:_.title,children:h})}),t.jsx(Y,{initialValue:I,value:I,onAdd:j=>{o(n,j)},onSubtract:j=>{o(n,j)}}),t.jsx(x,{variant:"h3",className:_.price,children:S(f??w)})]},n)})})},it="_container_1cv74_6",lt="_header_1cv74_10",ut="_checkout_1cv74_17",L={container:it,header:lt,checkout:ut},dt=({className:e,products:s,isLoading:d,...m})=>{if(d)return t.jsx(P,{fullWidth:!0,height:183,className:e});if(!s||!s.length)return null;const{totalLength:a,totalSum:c}=s.reduce((i,o)=>{const r=(o.priceDiscount??o.priceRegular)*o.quantity;return{totalLength:i.totalLength+o.quantity,totalSum:i.totalSum+r}},{totalLength:0,totalSum:0});return t.jsxs(g,{className:C(L.container,e),...m,children:[t.jsxs(g,{className:L.header,children:[t.jsx(x,{variant:"h2",children:S(c)}),t.jsxs(x,{variant:"body",children:["Total for ",a," items"]})]}),t.jsx(q,{className:L.checkout,size:"lg",children:"Checkout"})]})},ht=()=>{const[e,s]=u.useState(!0),[d,m]=u.useState(null),{storedProducts:a}=N();return u.useEffect(()=>{const c=a.cartProducts;Promise.all(c.map(({productId:i})=>M(i))).then(i=>{const o=i.filter(r=>!!r).map(r=>{var l;const n=((l=c.find(h=>h.productId===r.id))==null?void 0:l.quantity)||1;return{...r,quantity:n}});m(o)}).finally(()=>{s(!1)})},[a]),{cartProducts:d,isInitialLoading:e}},gt=()=>{const{cartProducts:e,isInitialLoading:s}=ht();return t.jsxs(g,{className:C("container",v.container),variant:"section",children:[t.jsx(F,{}),t.jsxs(g,{className:v.cartInfo,children:[t.jsx(rt,{className:v.list,products:e,isLoading:s}),t.jsx(dt,{className:v.total,products:e,isLoading:s})]})]})};export{gt as CartPage};
