import{l as se,m as te,n as ie,j as s,B as c,c as N,T as w,a as T,f as u,r as g,o as H,p as F,g as K,q as Q,S as ne,L as D,s as ae,t as Y,v as V,A as le,F as re,w as G,x as oe,y as ce,u as ue,z as de,C as me,E as he,P as _e}from"./index-GRx_6V2v.js";import{T as pe}from"./TextButton-Dg4yA2rL.js";import{B as fe}from"./BreadCrumbs-DIAG7dSP.js";function W(i){let{swiper:e,extendParams:t,on:n}=i;t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let a=!1,l=!1;e.thumbs={swiper:null};function d(){const o=e.thumbs.swiper;if(!o||o.destroyed)return;const r=o.clickedIndex,p=o.clickedSlide;if(p&&p.classList.contains(e.params.thumbs.slideThumbActiveClass)||typeof r>"u"||r===null)return;let _;o.params.loop?_=parseInt(o.clickedSlide.getAttribute("data-swiper-slide-index"),10):_=r,e.params.loop?e.slideToLoop(_):e.slideTo(_)}function h(){const{thumbs:o}=e.params;if(a)return!1;a=!0;const r=e.constructor;if(o.swiper instanceof r)e.thumbs.swiper=o.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper.update();else if(te(o.swiper)){const p=Object.assign({},o.swiper);Object.assign(p,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new r(p),l=!0}return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",d),!0}function x(o){const r=e.thumbs.swiper;if(!r||r.destroyed)return;const p=r.params.slidesPerView==="auto"?r.slidesPerViewDynamic():r.params.slidesPerView;let _=1;const f=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(_=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(_=1),_=Math.floor(_),r.slides.forEach(m=>m.classList.remove(f)),r.params.loop||r.params.virtual&&r.params.virtual.enabled)for(let m=0;m<_;m+=1)ie(r.slidesEl,`[data-swiper-slide-index="${e.realIndex+m}"]`).forEach(b=>{b.classList.add(f)});else for(let m=0;m<_;m+=1)r.slides[e.realIndex+m]&&r.slides[e.realIndex+m].classList.add(f);const k=e.params.thumbs.autoScrollOffset,j=k&&!r.params.loop;if(e.realIndex!==r.realIndex||j){const m=r.activeIndex;let b,v;if(r.params.loop){const L=r.slides.filter(M=>M.getAttribute("data-swiper-slide-index")===`${e.realIndex}`)[0];b=r.slides.indexOf(L),v=e.activeIndex>e.previousIndex?"next":"prev"}else b=e.realIndex,v=b>e.previousIndex?"next":"prev";j&&(b+=v==="next"?k:-1*k),r.visibleSlidesIndexes&&r.visibleSlidesIndexes.indexOf(b)<0&&(r.params.centeredSlides?b>m?b=b-Math.floor(p/2)+1:b=b+Math.floor(p/2)-1:b>m&&r.params.slidesPerGroup,r.slideTo(b,o?0:void 0))}}n("beforeInit",()=>{const{thumbs:o}=e.params;if(!(!o||!o.swiper))if(typeof o.swiper=="string"||o.swiper instanceof HTMLElement){const r=se(),p=()=>{const f=typeof o.swiper=="string"?r.querySelector(o.swiper):o.swiper;if(f&&f.swiper)o.swiper=f.swiper,h(),x(!0);else if(f){const k=`${e.params.eventsPrefix}init`,j=m=>{o.swiper=m.detail[0],f.removeEventListener(k,j),h(),x(!0),o.swiper.update(),e.update()};f.addEventListener(k,j)}return f},_=()=>{if(e.destroyed)return;p()||requestAnimationFrame(_)};requestAnimationFrame(_)}else h(),x(!0)}),n("slideChange update resize observerUpdate",()=>{x()}),n("setTransition",(o,r)=>{const p=e.thumbs.swiper;!p||p.destroyed||p.setTransition(r)}),n("beforeDestroy",()=>{const o=e.thumbs.swiper;!o||o.destroyed||l&&o.destroy()}),Object.assign(e.thumbs,{init:h,update:x})}const be="_container_19xtf_6",xe="_header_19xtf_11",U={container:be,header:xe},Z=({children:i,className:e,title:t,...n})=>s.jsxs(c,{className:N(U.container,e),variant:"section",...n,children:[s.jsx(c,{className:U.header,children:s.jsx(w,{variant:"h3",children:t})}),i]}),je="_title_1iojh_6",we="_content_1iojh_10",ke="_skeleton_1iojh_14",ge="_skeletonItem_1iojh_19",y={title:je,content:we,skeleton:ke,skeletonItem:ge},ye=({className:i,description:e,isLoading:t,...n})=>{const{isMobile:a}=T();return t?s.jsxs(c,{className:N(y.skeleton,i),children:[s.jsx(u,{height:a?43:48,className:y.skeletonHeader}),s.jsxs(c,{className:y.skeletonItem,children:[s.jsx(u,{height:a?20:26,className:y.skeletonTitle}),s.jsx(u,{height:a?60:160,className:y.skeletonDescription})]}),s.jsxs(c,{className:y.skeletonItem,children:[s.jsx(u,{height:a?20:26,className:y.skeletonTitle}),s.jsx(u,{height:a?60:160,className:y.skeletonDescription})]})]}):e?s.jsx(Z,{title:"About",className:i,...n,children:e.map(({title:l,text:d})=>s.jsxs(c,{children:[s.jsx(w,{variant:"h4",className:y.title,children:l}),d.map(h=>s.jsx(w,{variant:"body",className:y.content,children:h},h))]},l))}):null},ve="_skeleton_1par0_6",Ce="_skeletonMain_1par0_23",Ne="_skeletonThumbs_1par0_27",Se="_skeletonThumb_1par0_27",$={skeleton:ve,skeletonMain:Ce,skeletonThumbs:Ne,skeletonThumb:Se},Pe=()=>{const{isMobile:i,isTablet:e,isDesktop:t}=T(),n=g.useMemo(()=>i?50:e?35:80,[i,e]);return s.jsxs(c,{className:$.skeleton,children:[s.jsx(u,{fullWidth:!0,height:t?464:288,className:$.skeletonMain}),s.jsx(u,{quantity:5,height:n,className:$.skeletonThumbs,itemClassName:$.skeletonThumb,direction:i?"row":"column",gap:t?16:8})]})},Te=()=>{const{isMobile:i,isDesktop:e}=T(),[t,n]=g.useState(null),[a,l]=g.useState(null);return{thumbsSwiper:a,mainSlider:t,mainSliderConfig:{modules:[W],thumbs:{swiper:a},onSwiper:n},thumbsSliderConfig:{modules:[W],slidesPerView:"auto",direction:i?"horizontal":"vertical",spaceBetween:e?16:8,onSwiper:l}}},$e="_gallery_r4fb5_7",Ie="_main_r4fb5_12",Ae="_thumbs_r4fb5_38",B={gallery:$e,main:Ie,thumbs:Ae},Le=({images:i,title:e,className:t,isLoading:n})=>{const{mainSliderConfig:a,thumbsSliderConfig:l}=Te();return n?s.jsx(Pe,{}):i?s.jsxs(c,{className:N(B.gallery,t),children:[s.jsx(H,{className:B.main,...a,children:i.map(d=>s.jsx(F,{children:s.jsx("img",{src:d,alt:e})},d))}),s.jsx(H,{className:B.thumbs,...l,children:i.map(d=>s.jsx(F,{children:s.jsx("img",{src:d,alt:e})},d))})]}):null},Me="_header_xsouv_6",Be="_backBtn_xsouv_9",q={header:Me,backBtn:Be},qe=({isLoading:i,productId:e,category:t,productName:n})=>{const a=K(),{state:l}=Q(),{isMobile:d}=T(),h=g.useMemo(()=>!t||!e||!n?[]:[{id:t,href:`/products/?category=${t}`,title:`${t[0].toUpperCase()}${t.slice(1,t.length)}`},{id:e,href:`/products/?category=${t}/${e}`,title:n}],[t,e,n]),x=()=>{l!=null&&l.from?a(l.from):a("/")};return s.jsxs(c,{className:q.header,children:[i?s.jsx(u,{height:21,width:140}):s.jsx(fe,{breadCrumbs:h}),i?s.jsx(u,{height:16,width:51,className:q.backBtn}):s.jsx(pe,{className:q.backBtn,startAdornment:ne,onClick:x,children:"Back"}),i?s.jsx(u,{height:d?31:41,width:250}):s.jsx(w,{variant:"h2",children:n})]})},Ee="_container_1jcw5_6",ze="_info_1jcw5_9",Oe="_code_1jcw5_20",E={container:Ee,info:ze,code:Oe},Re="_container_o0o2p_6",De="_header_o0o2p_13",He="_label_o0o2p_17",z={container:Re,header:De,label:He},J=({children:i,label:e,className:t,...n})=>s.jsxs(c,{className:N(z.container,t),...n,children:[s.jsx(c,{className:z.header,children:s.jsx(w,{variant:"small",className:z.label,children:e})}),i]}),Fe="_capacities_q8rbf_6",Ve="_skeleton_q8rbf_12",Ge="_buttons_q8rbf_15",We="_button_q8rbf_15",I={capacities:Fe,skeleton:Ve,buttons:Ge,button:We},Ue=({capacities:i,currentCapacity:e,isLoading:t,onClick:n})=>{if(t)return s.jsxs(c,{className:I.skeleton,children:[s.jsx(u,{width:97,height:15}),s.jsx(u,{quantity:3,className:I.buttons,itemClassName:I.button,height:32,gap:8})]});if(!i)return null;const a=l=>{n&&n(l)};return s.jsx(J,{label:"Select capacity",children:s.jsx(D,{className:I.capacities,children:i.map(l=>{const d=l===e;return s.jsx(ae,{size:"sm",variant:"secondary",selected:d,onClick:()=>a(l),children:l},l)})})})},Ke="_chip_1ja6y_6",Qe="_selected_1ja6y_23",Ye="_circle_1ja6y_26",O={chip:Ke,selected:Qe,circle:Ye},Ze=({color:i,className:e,selected:t,onClick:n,...a})=>{const l=()=>{n&&n(i)};return s.jsx(c,{onClick:l,className:N(O.chip,e,{[O.selected]:t}),...a,children:s.jsx(c,{className:O.circle,style:{backgroundColor:i}})})},Je="_colors_51y8c_6",Xe="_skeleton_51y8c_12",es="_circles_51y8c_15",ss="_circle_51y8c_15",A={colors:Je,skeleton:Xe,circles:es,circle:ss},ts=({colors:i,currentColor:e,isLoading:t,onClick:n})=>t?s.jsxs(c,{className:A.skeleton,children:[s.jsx(u,{width:97,height:15}),s.jsx(u,{quantity:3,className:A.circles,itemClassName:A.circle,height:32,gap:8,round:!0})]}):i?s.jsx(J,{label:"Available colors",children:s.jsx(D,{className:A.colors,children:i.map(a=>s.jsx(Y,{children:s.jsx(Ze,{color:a,selected:e===a,onClick:n})},a))})}):null,is="_features_1j2pg_6",ns="_featureRow_1j2pg_12",as="_skeleton_1j2pg_20",R={features:is,featureRow:ns,skeleton:as},ls=({features:i,isLoading:e})=>e?s.jsxs(c,{className:R.skeleton,children:[s.jsx(u,{quantity:2,height:15}),s.jsx(u,{quantity:2,height:15}),s.jsx(u,{quantity:2,height:15}),s.jsx(u,{quantity:2,height:15})]}):i?s.jsx(c,{className:R.features,children:i.filter(({value:t})=>!!t).map(({title:t,value:n})=>s.jsxs(c,{className:R.featureRow,children:[s.jsx(w,{variant:"small",children:t}),s.jsx(w,{variant:"small",children:n})]},t))}):null,rs="_container_ozi28_6",os="_price_ozi28_11",cs="_old_ozi28_16",us="_buttons_ozi28_19",ds="_addToCartBtn_ozi28_23",ms="_skeleton_ozi28_32",P={container:rs,price:os,old:cs,buttons:us,addToCartBtn:ds,skeleton:ms},hs=({newPrice:i,oldPrice:e,productId:t,isLoading:n,productName:a="product"})=>{const{isMobile:l}=T();return n?s.jsxs(c,{className:P.skeleton,children:[s.jsx(u,{width:100,height:l?31:41}),s.jsx(u,{fullWidth:!0,height:48})]}):s.jsxs(c,{className:P.container,children:[s.jsxs(c,{className:P.price,children:[i&&s.jsx(w,{variant:"h2",children:V(i)}),e&&s.jsx(w,{className:P.old,variant:i?"crossed-out":"h2",children:V(e)})]}),s.jsxs(c,{className:P.buttons,children:[s.jsx(le,{className:P.addToCartBtn,productId:t,title:a,size:"lg"}),s.jsx(re,{productId:t,title:a,size:"lg"})]})]})},_s=({id:i,className:e,colors:t,currentColor:n,currentCapacity:a,isLoading:l,capacities:d,newPrice:h,oldPrice:x,productName:o,features:r,onClick:p,..._})=>{const{search:f}=Q(),k=K(),j=g.useCallback((v,L)=>{if(i){const M=G(v.toLowerCase()),X=G(L.toLowerCase()),ee=i.replace(M,X);k(`/products/${ee}${f}`)}},[k,i,f]),m=g.useCallback(v=>{n&&j(n,v)},[n,j]),b=g.useCallback(v=>{a&&j(a,v)},[a,j]);return s.jsxs(c,{className:N(E.container,e),..._,children:[s.jsx(w,{variant:"small",className:E.code,children:l?s.jsx(u,{width:60,height:15}):"ID: 802390"}),s.jsxs(c,{className:E.info,children:[s.jsx(ts,{colors:t,currentColor:n,onClick:m,isLoading:l}),s.jsx(Ue,{capacities:d,currentCapacity:a,onClick:b,isLoading:l}),s.jsx(hs,{newPrice:h,oldPrice:x,isLoading:l,productId:i,productName:o}),s.jsx(ls,{features:r,isLoading:l})]})]})},ps="_list_jtcpa_6",fs="_row_jtcpa_11",bs="_title_jtcpa_16",xs="_value_jtcpa_19",js="_skeleton_jtcpa_23",ws="_skeletonList_jtcpa_23",S={list:ps,row:fs,title:bs,value:xs,skeleton:js,skeletonList:ws},ks=[{key:"screen",title:"Screen"},{key:"resolution",title:"Resolution"},{key:"processor",title:"Processor"},{key:"ram",title:"RAM"},{key:"builtInMemory",title:"Build in memory"},{key:"camera",title:"Camera"},{key:"zoom",title:"Zoom"},{key:"cell",title:"Cell"}],gs=({isLoading:i,style:e,className:t,...n})=>{const{isMobile:a}=T();return i?s.jsxs(c,{className:N(S.skeleton,t),children:[s.jsx(u,{height:a?43:48,className:S.skeletonHeader}),s.jsxs(c,{className:S.skeletonList,children:[s.jsx(u,{fullWidth:!0,height:21}),s.jsx(u,{fullWidth:!0,height:21}),s.jsx(u,{fullWidth:!0,height:21})]})]}):Object.keys(n).length?s.jsx(Z,{title:"Tech specs",className:t,style:e,children:s.jsx(D,{className:S.list,children:ks.map(({key:l,title:d})=>{const h=n[l];return h?s.jsxs(Y,{className:S.row,children:[s.jsx(w,{variant:"body",className:S.title,children:d}),s.jsx(w,{variant:"body",className:S.value,children:Array.isArray(h)?h.join(", "):h})]},l):null})})}):null},ys=()=>{const[i,e]=g.useState(!0),[t,n]=g.useState(null),a=oe();g.useEffect(()=>{a.id&&(e(!0),ce(a.id).then(d=>{n(d)}).finally(()=>{e(!1)}))},[a.id]);const l=g.useMemo(()=>t?[!!t.screen&&{title:"Screen",value:t.screen},!!t.resolution&&{title:"Resolution",value:t.resolution},!!t.capacity&&{title:"Capacity",value:t.capacity},!!t.processor&&{title:"Processor",value:t.processor},!!t.ram&&{title:"RAM",value:t.ram}].filter(d=>typeof d=="object"):null,[t]);return{product:t,isLoading:i,features:l}},vs="_page_w1m4b_6",Cs="_details_w1m4b_19",Ns="_gallery_w1m4b_43",Ss="_info_w1m4b_56",Ps="_description_w1m4b_69",Ts="_about_w1m4b_100",$s="_specs_w1m4b_108",Is="_carousel_w1m4b_116",C={page:vs,details:Cs,gallery:Ns,info:Ss,description:Ps,about:Ts,specs:$s,carousel:Is},Bs=()=>{const[i]=ue(),{product:e,features:t,isLoading:n}=ys(),{isLoading:a,isInitialLoading:l,products:d,onLoadNextProducts:h}=de({excludeId:e==null?void 0:e.id,queryFn:me});return s.jsxs(c,{className:N("container",C.page),children:[s.jsx(qe,{isLoading:n,productId:e==null?void 0:e.id,category:e==null?void 0:e.category,productName:e==null?void 0:e.name}),s.jsxs(c,{className:C.details,children:[s.jsx(Le,{images:e==null?void 0:e.images,title:e==null?void 0:e.name,className:C.gallery,isLoading:n},e==null?void 0:e.id),s.jsx(_s,{id:e==null?void 0:e.id,className:C.info,colors:e==null?void 0:e.colorsAvailable,currentColor:e==null?void 0:e.color,capacities:e==null?void 0:e.capacityAvailable,currentCapacity:e==null?void 0:e.capacity,newPrice:e==null?void 0:e.priceDiscount,oldPrice:e==null?void 0:e.priceRegular,isLoading:n,productName:e==null?void 0:e.name,features:t})]}),s.jsxs(c,{className:C.description,children:[s.jsx(ye,{className:C.about,description:e==null?void 0:e.description,isLoading:n}),s.jsx(gs,{className:C.specs,isLoading:n,...e})]}),s.jsx(c,{className:C.carousel,children:s.jsx(he,{title:"You may also like",isLoading:a,isInitialLoading:l,data:d,extractKey:({id:x})=>x,onSlideChange:h,renderSlide:({name:x,image:o,fullPrice:r,price:p,capacity:_,screen:f,ram:k,category:j,itemId:m})=>s.jsx(_e,{href:`/products/${m}?category=${j}`,url:o,title:x,newPrice:p,oldPrice:r,productId:m,fromHref:`/products/${e==null?void 0:e.id}?${new URLSearchParams(i)}`,features:[{title:"Capacity",value:_},{title:"Screen",value:f},{title:"RAM",value:k}]})})})]})};export{Bs as ProductPage};