"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[904],{8904:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var s=n(9060),r=n(496),i=(n(9972),n(7476)),a=n(9078),c=n(584),o=n(1976),l=n(7104),u=n(624),d=n(380),f=n(2688),m=n(7932);function h(){const e=(0,s.useRef)(!1);return(0,m.M)((()=>(e.current=!0,()=>{e.current=!1})),[]),e}var p=n(4367);var x=n(3932),b=n(1084);class g extends s.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function v(e){let{children:t,isPresent:n}=e;const r=(0,s.useId)(),i=(0,s.useRef)(null),a=(0,s.useRef)({width:0,height:0,top:0,left:0});return(0,s.useInsertionEffect)((()=>{const{width:e,height:t,top:s,left:c}=a.current;if(n||!i.current||!e||!t)return;i.current.dataset.motionPopId=r;const o=document.createElement("style");return document.head.appendChild(o),o.sheet&&o.sheet.insertRule('\n          [data-motion-pop-id="'.concat(r,'"] {\n            position: absolute !important;\n            width: ').concat(e,"px !important;\n            height: ").concat(t,"px !important;\n            top: ").concat(s,"px !important;\n            left: ").concat(c,"px !important;\n          }\n        ")),()=>{document.head.removeChild(o)}}),[n]),s.createElement(g,{isPresent:n,childRef:i,sizeRef:a},s.cloneElement(t,{ref:i}))}const j=e=>{let{children:t,initial:n,isPresent:r,onExitComplete:i,custom:a,presenceAffectsLayout:c,mode:o}=e;const l=(0,b._)(P),u=(0,s.useId)(),d=(0,s.useMemo)((()=>({id:u,initial:n,isPresent:r,custom:a,onExitComplete:e=>{l.set(e,!0);for(const t of l.values())if(!t)return;i&&i()},register:e=>(l.set(e,!1),()=>l.delete(e))})),c?void 0:[r]);return(0,s.useMemo)((()=>{l.forEach(((e,t)=>l.set(t,!1)))}),[r]),s.useEffect((()=>{!r&&!l.size&&i&&i()}),[r]),"popLayout"===o&&(t=s.createElement(v,{isPresent:r},t)),s.createElement(x.i.Provider,{value:d},t)};function P(){return new Map}var E=n(7264);var y=n(7968);const C=e=>e.key||"";const A=e=>{let{children:t,custom:n,initial:r=!0,onExitComplete:i,exitBeforeEnter:a,presenceAffectsLayout:c=!0,mode:o="sync"}=e;(0,y.O)(!a,"Replace exitBeforeEnter with mode='wait'");const l=(0,s.useContext)(E.m).forceRender||function(){const e=h(),[t,n]=(0,s.useState)(0),r=(0,s.useCallback)((()=>{e.current&&n(t+1)}),[t]);return[(0,s.useCallback)((()=>p.AL.postRender(r)),[r]),t]}()[0],u=h(),d=function(e){const t=[];return s.Children.forEach(e,(e=>{(0,s.isValidElement)(e)&&t.push(e)})),t}(t);let f=d;const x=(0,s.useRef)(new Map).current,b=(0,s.useRef)(f),g=(0,s.useRef)(new Map).current,v=(0,s.useRef)(!0);var P;if((0,m.M)((()=>{v.current=!1,function(e,t){e.forEach((e=>{const n=C(e);t.set(n,e)}))}(d,g),b.current=f})),P=()=>{v.current=!0,g.clear(),x.clear()},(0,s.useEffect)((()=>()=>P()),[]),v.current)return s.createElement(s.Fragment,null,f.map((e=>s.createElement(j,{key:C(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:c,mode:o},e))));f=[...f];const A=b.current.map(C),_=d.map(C),N=A.length;for(let s=0;s<N;s++){const e=A[s];-1!==_.indexOf(e)||x.has(e)||x.set(e,void 0)}return"wait"===o&&x.size&&(f=[]),x.forEach(((e,t)=>{if(-1!==_.indexOf(t))return;const r=g.get(t);if(!r)return;const a=A.indexOf(t);let m=e;if(!m){const e=()=>{x.delete(t);const e=Array.from(g.keys()).filter((e=>!_.includes(e)));if(e.forEach((e=>g.delete(e))),b.current=d.filter((n=>{const s=C(n);return s===t||e.includes(s)})),!x.size){if(!1===u.current)return;l(),i&&i()}};m=s.createElement(j,{key:C(r),isPresent:!1,onExitComplete:e,custom:n,presenceAffectsLayout:c,mode:o},r),x.set(t,m)}f.splice(a,0,m)})),f=f.map((e=>{const t=e.key;return x.has(t)?e:s.createElement(j,{key:C(e),isPresent:!0,presenceAffectsLayout:c,mode:o},e)})),s.createElement(s.Fragment,null,x.size?f:f.map((e=>(0,s.cloneElement)(e))))};var _=n(2496);const N=()=>{(0,o.c)();const[e,t]=(0,s.useState)([]),n=(0,u.w1)((e=>e.aboutOption.tech)),m=(0,u.w1)((e=>e.aboutOption.exp)),h=(0,u.w1)((e=>e.aboutOption.education));console.log("render-ABOUT"),localStorage.setItem("aboutMeOptions",JSON.stringify({tech:"".concat(n),exp:"".concat(m),education:"".concat(h)}));const p=(0,u.OY)(),{getdata:x,process:b,setProcess:g}=(0,c.c)();function v(){return e.map(((e,t)=>(0,_.jsx)("div",{className:"AboutPage_wrap",children:(0,_.jsxs)("div",{className:"AboutPage_card",children:[(0,_.jsx)("div",{className:"AboutPage_imageContainer",children:function(){let t=[],n="";return Object.entries(a).forEach((s=>{n="Frameworks:"===e.cardName?"styleImg":"otherImg",e.img.forEach((e=>{s[0]===e&&t.push(s[1])}))})),t.map(((e,t)=>(0,_.jsx)("div",{className:n,children:(0,_.jsx)("img",{src:e,alt:"logo"})},t)))}()}),(0,_.jsx)("div",{className:"AboutPage_Card_content_bg",children:(0,_.jsxs)("div",{className:"AboutPage_Card_content",children:[(0,_.jsx)("h2",{className:"AboutPage_Card_projectName",children:e.cardName}),(0,_.jsxs)("div",{className:"AboutPage_Card_listContainer",children:[(0,_.jsx)("div",{className:"AboutPage_Card_technologyStack",children:(0,_.jsx)("ul",{className:"AboutPage_Card_list",children:e.myTechStack?function(){const t=e.myTechStack.map(((e,t)=>(0,_.jsx)("li",{children:e},t)));return t}():null})}),(0,_.jsxs)("div",{className:"AboutPage_Card_mainFeatures",children:[(0,_.jsx)("p",{children:e.positionAtWork?e.positionAtWork:null}),(0,_.jsx)("p",{children:e.positionEducation?e.positionEducation:null}),(0,_.jsx)("ul",{className:"AboutPage_Card_list",children:e.description?function(){const t=e.description.map(((e,t)=>(0,_.jsx)("li",{children:e},t)));return t}():null})]})]})]})})]})},t)))}return(0,s.useEffect)((()=>{if(n+""==="true"){const e=i.c.filter((e=>!!e.aboutMeCardsTechStack&&e));t(Object.values(e)[0].aboutMeCardsTechStack)}}),[n]),(0,s.useEffect)((()=>{if(m+""==="true"){const e=i.c.filter((e=>!!e.aboutMeCardsMyExperience&&e));t(Object.values(e)[0].aboutMeCardsMyExperience)}}),[m]),(0,s.useEffect)((()=>{if(h+""==="true"){const e=i.c.filter((e=>!!e.aboutMeCardsMyEducation&&e));t(Object.values(e)[0].aboutMeCardsMyEducation)}}),[h]),(0,_.jsxs)(f.q.div,{variants:d.y,initial:"hidden",animate:"visible",exit:"exit",className:"AboutPage",children:[(0,_.jsxs)(r.S,{children:[(0,_.jsx)("meta",{name:"description",content:"Pavel Portfolio"}),(0,_.jsx)("title",{children:"Pavel Portfolio"})]}),(0,_.jsx)("div",{className:"AboutPage",children:(0,_.jsxs)("div",{className:"AboutPage_bg",children:[(0,_.jsx)("h1",{children:" About me "}),(0,_.jsxs)("div",{className:"AboutPage_text_buttons",children:[(0,_.jsx)("button",{onClick:()=>p((0,l.K)()),className:"d-flex justify-content-center btn btn-primary aboutPageBtn",children:"My Tech Stack"}),(0,_.jsx)("button",{onClick:()=>p((0,l.Cu)()),className:"d-flex justify-content-center btn btn-primary aboutPageBtn",children:"My Experiance"}),(0,_.jsx)("button",{onClick:()=>p((0,l.GK)()),className:"d-flex justify-content-center btn btn-primary aboutPageBtn",children:"My Education"})]}),(0,_.jsxs)(A,{children:[" ",n&&(0,_.jsx)(f.q.div,{variants:d.y,initial:"hidden",animate:"visible",className:"AboutPage_container",children:(0,_.jsx)("div",{className:"AboutPage_container",children:v()})})]}),(0,_.jsxs)(A,{children:[" ",m&&(0,_.jsx)(f.q.div,{variants:d.y,initial:"hidden",animate:"visible",className:"AboutPage_container",children:(0,_.jsx)("div",{className:"AboutPage_container",children:v()})})]}),(0,_.jsxs)(A,{children:[" ",h&&(0,_.jsx)(f.q.div,{variants:d.y,initial:"hidden",animate:"visible",className:"AboutPage_container",children:(0,_.jsx)("div",{className:"AboutPage_container",children:v()})})]})]})})]})}}}]);
//# sourceMappingURL=904.12ef51e9.chunk.js.map