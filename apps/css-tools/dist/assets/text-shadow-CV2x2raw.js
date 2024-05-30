import{r as i,j as t,T as f,Z as u,q as E,u as b,X as N,C as L,d as W,W as p,w as q,b as d,D as A}from"./index-CdKiUKV5.js";import{T as h}from"./shadows-vuLSOVPQ.js";const m=(e,s="px")=>e&&`${e}${s}`,D=({x:e,y:s,blur:a,color:o})=>{const n=`${m(e)} ${m(s)} ${m(a)} ${o.toUpperCase()}`;return n.startsWith("0 0 0")?"":n.trim()},j=e=>i.useMemo(()=>e.map(s=>D(s)),[e]),M=({textShadowList:e,onClick:s,children:a})=>{const o=j(e);return t.jsxs(f,{onClick:s,children:[t.jsx(u,{variant:"body",weight:"bold",style:{textShadow:o.filter(n=>n).join(", ")},children:a}),t.jsx(u,{className:"example-text",variant:"small",children:"Click to custom"})]})},U=E.section`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  display: grid;
  place-content: center;
  text-align: center;
  padding: 20px;

  @media all and (min-width: ${e=>e.theme.constants.breakpoints.tablet}) {
    width: 150px;
    height: 150px;
  }
`,X=({index:e,example:s,onClick:a})=>{const{t:o}=b();return t.jsx(M,{textShadowList:s,onClick:a,children:o("shadow:shadow-#",{index:e+1})})},R=()=>{const{t:e}=b(),s=N(),[a,o]=i.useState(h[0]),[n,S]=i.useState(s.colors.primary),[w,T]=i.useState("Text Shadow 😆"),x=j(a),C=i.useMemo(()=>`text-shadow:
  ${x.filter(r=>r).join(`,
  `)};`,[x]),g=()=>t.jsxs(t.Fragment,{children:[t.jsx(p,{showValueText:!0,label:e("controls:sample-color"),name:"textColor",value:n,setValue:S}),t.jsx(A,{label:e("controls:sample-text"),name:"text",value:w,setValue:T})]});return t.jsx(L,{list:h,selected:a,setSelected:o,css:C,selectExample:r=>o(h[r]),ExampleComponent:X,newItem:{x:0,y:0,blur:0,color:"#000000"},renderActions:g,renderAccordionItem:({x:r,y:$,blur:V,color:v,updateItem:c,deleteItem:y},l)=>t.jsxs(W.Item,{title:e("shadow:shadow-#",{index:l+1}),subtitle:x[l]||e("shadow:no-shadow"),className:"shadows-item",classNames:{header:"shadows-item-header",body:"shadows-item-body",subtitle:"shadows-item-header--subtitle"},subtitleVariant:"small",startContent:()=>t.jsx(p,{name:"color",value:v,setValue:c("color",l)}),endContent:()=>a.length>1?t.jsx(q,{name:"cross",className:"delete-shadow-icon",onClick:y(l)}):null,children:[t.jsx(d,{name:"x",label:e("controls:x-position"),min:-100,max:100,value:r,setValue:c("x",l)}),t.jsx(d,{name:"y",label:e("controls:y-position"),min:-100,max:100,value:$,setValue:c("y",l)}),t.jsx(d,{name:"blur",label:e("controls:blur"),min:0,max:100,value:V,setValue:c("blur",l)})]},l),children:t.jsx(U,{className:"text-shadow-box",style:{textShadow:x.filter(r=>r).join(", "),color:n},children:t.jsx(u,{variant:"header1",children:w})})})};export{R as TextShadowPage};
