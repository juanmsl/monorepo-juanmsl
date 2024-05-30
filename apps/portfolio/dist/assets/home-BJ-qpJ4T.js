import{a as v,j as e,P as D,R as n,e as g,E as S,u as b,H as E,h as u,Z as a,b as I,L as T,w as f,c as A,D as O,d as z,f as B,r as p,Q as G,g as w,i as j,k as y,O as U,l as _,m as Z,n as N,o as F,q as M,S as q,p as Q}from"./index-D0ZE4UeQ.js";import{A as J,M as K,C as V,a as W,b as X}from"./my-experience.style-BSVQ4_A0.js";import{H as Y}from"./header-bottom-26nILUEX.js";const ee=({className:s})=>{const{data:t}=v(S.ASSET_ID_PROFILE_PICTURE);return e.jsx(D,{className:s,children:e.jsx(n,{width:"100%",children:e.jsx(g,{width:"100%",children:e.jsxs("svg",{viewBox:"0 0 496 610",preserveAspectRatio:"none",children:[e.jsx("path",{id:"background",fillRule:"evenodd",clipRule:"evenodd",d:"M236.588 609.928C115.833 606.089 24.1113 499.002 2.78099 380.024C-15.8432 276.14 61.9035 191.022 151.497 135.297C247.532 75.5657 372.588 21.7911 456.067 98.0897C536.682 171.77 477.319 293.338 434.265 393.742C391.714 492.973 344.452 613.358 236.588 609.928Z",fill:"currentColor"}),e.jsx("mask",{id:"mask0",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"496",height:"610",children:e.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M496 0H0.000209768L0 348.552L0.000970288 348.552C-0.0319991 358.836 0.863974 369.33 2.78108 380.024C24.1114 499.002 115.833 606.089 236.588 609.928C340.492 613.232 388.162 501.646 429.557 404.75C431.134 401.057 432.703 397.385 434.265 393.742C436.7 388.063 439.188 382.316 441.699 376.514C467.615 316.638 496.076 250.882 496 192.98L496 192.979L496 0Z",fill:"#D9D9D9"})}),e.jsx("g",{mask:"url(#mask0)",children:e.jsx("rect",{width:"496",height:"610",fill:"url(#pattern0)"})}),e.jsxs("defs",{children:[e.jsx("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:"1",height:"1",children:e.jsx("use",{xlinkHref:"#profilePicture",transform:"scale(0.00201613 0.00163934)"})}),e.jsx("image",{id:"profilePicture",width:"496",height:"610",xlinkHref:t==null?void 0:t.url})]})]})})})})},se=()=>{const{t:s}=b(),t=s("common:userLabels",{returnObjects:!0}),{data:i}=v(S.ASSET_ID_BACKGROUND);return e.jsxs(E,{$background:i==null?void 0:i.url,children:[e.jsxs("section",{className:"container",children:[e.jsx(n,{delay:200,width:"100%",children:e.jsx(u,{orientation:"horizontal",size:"3px",className:"header-line"})}),e.jsx(n,{delay:300,width:"100%",children:e.jsx(a,{variant:"hero",className:"names",withoutPadding:!0,children:s("common:shortName")})}),e.jsx(n,{delay:400,width:"100%",children:e.jsx(u,{orientation:"horizontal",size:"3px",className:"header-line"})}),e.jsx("section",{className:"user-labels",children:t.map((l,c)=>e.jsx(n,{delay:100*c+500,children:e.jsx(a,{variant:"body",className:"user-label",children:l})},c))}),e.jsx(I,{position:"bottom"})]}),e.jsx(Y,{className:"home-header-svg"})]})},te=({isPending:s,children:t})=>s?e.jsx(T,{children:e.jsx(f,{name:"spinner",className:"loader-icon"})}):t,P=({children:s})=>e.jsx(A,{variant:"header1",children:s}),ae=()=>{const{t:s}=b();return e.jsx(e.Fragment,{children:e.jsxs(J,{children:[e.jsx("section",{className:"left",children:e.jsx(ee,{})}),e.jsxs("section",{className:"right",children:[e.jsx(n,{delay:100,children:e.jsx(P,{children:s("home:aboutMe.title")})}),e.jsx(n,{delay:200,children:e.jsx(a,{variant:"header4",children:s("home:aboutMe.subtitle1")})}),e.jsx(n,{delay:300,children:e.jsx(a,{variant:"body",children:s("home:aboutMe.text1")})}),e.jsx(n,{delay:400,children:e.jsx(a,{variant:"body",children:s("home:aboutMe.text2")})}),e.jsx(n,{delay:500,children:e.jsx(a,{variant:"header4",children:s("home:aboutMe.subtitle2")})}),e.jsx(n,{delay:600,children:e.jsx(a,{variant:"body",children:s("home:aboutMe.text3")})}),e.jsx("section",{className:"button-ctas",children:e.jsx(O,{children:s("home:aboutMe.button1")})})]})]})})},ie=()=>{const{data:s=[]}=z(),{data:t=[]}=B(),[i,l]=p.useState([]),c=o=>{l(o.technologies.items.map(r=>r.name))};return e.jsxs(K,{children:[e.jsx("section",{className:"skills-categories",children:s.map((o,r)=>e.jsx(n,{delay:(r+1)*100,children:e.jsx(a,{variant:"body",className:"skill-category",onMouseOver:()=>c(o),onMouseLeave:()=>l([]),children:o.name})},r))}),e.jsx("section",{className:"skills-labels",children:t.map((o,r)=>e.jsx(G,{content:o.name,children:e.jsx(n,{delay:(r+1)*50,children:e.jsx(w,{className:`technology-icon ${i.includes(o.name)?"is-selected":""}`,src:o.icon,alt:o.name})},r)},r))})]})},C=({company:s})=>{const{description:t,name:i,position:l,dateStart:c,dateEnd:o,icon:r,technologies:x}=s;return e.jsxs(V,{children:[e.jsxs("section",{className:"company-details-header",children:[e.jsx("section",{className:"company-logo",children:e.jsx(g,{width:"100%",children:e.jsx(w,{src:r,alt:"Company logo"})})}),e.jsxs("section",{className:"company-details-header--content",children:[e.jsx(a,{className:"company-details-name",variant:"label",withoutPadding:!0,children:i}),e.jsx(a,{className:"company-details-position",variant:"header4",withoutPadding:!0,children:l}),e.jsxs(a,{className:"company-details-time",variant:"small",withoutPadding:!0,children:[j(c)," ",o?"- "+j(o):""," (",y(c,o),")"]})]})]}),e.jsx("ul",{className:"company-details-description",children:t.map((h,d)=>e.jsx("li",{children:e.jsx(a,{variant:"body",withoutPadding:!0,children:h})},d))}),e.jsx("section",{className:"company-details-labels",children:x.items.map((h,d)=>e.jsx(n,{delay:50*d,children:e.jsx(U,{children:h.name})},d))})]})},ne=({isSelected:s=!1,onClick:t,title:i,subtitle:l})=>{const c=_({selected:s});return e.jsxs(W,{className:c,onClick:t,children:[e.jsx(a,{variant:"body",weight:"bold",className:"company-item-name",withoutPadding:!0,children:i}),e.jsx(a,{variant:"label",withoutPadding:!0,children:l})]})},re=()=>{const{t:s}=b(),{data:t=[]}=Z(),[i,l]=p.useState(0),c=p.useMemo(()=>t.map(({name:r,dateStart:x,dateEnd:h},d)=>{var m;return e.jsx(n,{delay:100*d,width:"100%",children:e.jsx(ne,{isSelected:((m=t==null?void 0:t[i])==null?void 0:m.name)===r,onClick:()=>l(d),title:r,subtitle:`${j(x)} ${h?"- "+j(h):""} (${y(x,h)})`})},d)}),[i,t]),o=p.useMemo(()=>t.flatMap((r,x)=>{const{name:h,dateStart:d,dateEnd:m,icon:$,position:k}=r;return e.jsx(n,{delay:100*x,width:"100%",children:e.jsx(N.Item,{title:h,subtitle:`${j(d)} ${m?"- "+j(m):""} (${y(d,m)})`,startContent:()=>e.jsx("section",{className:"company-logo",children:e.jsx(w,{src:$,alt:h})}),middleContent:({isOpen:L,title:H,subtitle:R})=>e.jsxs("section",{className:"accordion-header-content",children:[e.jsx(a,{variant:"body",withoutPadding:!0,weight:"bold",children:H}),e.jsx(F.section,{variants:{open:{height:"auto",opacity:1},closed:{height:0,opacity:0,overflow:"hidden"}},initial:"closed",animate:L?"open":"closed",children:e.jsx(a,{className:"position",variant:"header4",withoutPadding:!0,weight:"bold",children:k})}),e.jsx(a,{variant:"label",withoutPadding:!0,weight:"light",children:R})]}),children:e.jsx(C,{company:r})})},x)}),[t]);return e.jsxs(X,{children:[e.jsx(P,{children:s("home:myExperience.title")}),e.jsx(N,{className:"mobile-experience",children:o}),e.jsxs("section",{className:"laptop-experience",children:[e.jsx("section",{className:"companies-list",children:c}),e.jsx("section",{className:"company-details",children:e.jsx(te,{isPending:!(t!=null&&t[i]),children:e.jsx(C,{company:t[i]},i)})})]})]})},oe=M(q)`
  background: ${s=>s.theme.colors.secondary};
  color: ${s=>s.theme.colors.secondaryContrast};
  transition: all 0.5s ease;
  user-select: none;
  box-shadow:
    inset 0 25px 20px -20px ${s=>s.theme.colors.black},
    inset 0 -25px 20px -20px ${s=>s.theme.colors.black};
  border-top: 10px solid ${s=>s.theme.colors.tertiary};
  border-bottom: 10px solid ${s=>s.theme.colors.tertiary};

  .layout-content {
    place-content: center;
    min-height: auto;

    .characteristics-gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 40px;
    }
  }
`,ce=M.section`
  width: 150px;
  height: 150px;

  @media all and (min-width: ${s=>s.theme.constants.breakpoints.laptopS}) {
    width: 200px;
    height: 200px;
  }

  .characteristic-container {
    padding: 20px;
    display: grid;
    gap: 10px;
    justify-items: center;
    border: 1px solid;
    transition: all 0.5s ease;
    align-content: center;
    background: ${s=>s.theme.colors.tertiaryContrast}08;
    border-radius: 50%;
    width: 150px;
    height: 150px;

    @media all and (min-width: ${s=>s.theme.constants.breakpoints.laptopS}) {
      width: 200px;
      height: 200px;
    }

    &:hover {
      box-shadow: 0 5px 25px ${s=>s.theme.colors.text}55;
    }
  }

  .characteristic-icon {
    font-size: 3em;
  }

  .characteristic-title {
    text-align: center;
  }

  .characteristic-line {
    width: 2em;
  }
`,le=()=>{const{data:s=[]}=Q(),t=p.useMemo(()=>s.map(({title:i,icon:l},c)=>e.jsx(ce,{children:e.jsx(g,{translationZ:15,children:e.jsx(n,{delay:100*c,children:e.jsxs("section",{className:"characteristic-container",children:[e.jsx(f,{name:l,className:"characteristic-icon"}),e.jsx(u,{orientation:"horizontal",className:"characteristic-line"}),e.jsx(a,{variant:"body",className:"characteristic-title",children:i})]})})})},c)),[s]);return e.jsx(oe,{children:e.jsx("section",{className:"characteristics-gallery",children:t})})},me=()=>e.jsxs(e.Fragment,{children:[e.jsx(se,{}),e.jsx(ae,{}),e.jsx(ie,{}),e.jsx(le,{}),e.jsx(re,{})]});export{me as Home};
