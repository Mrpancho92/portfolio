"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[438],{438:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(60),c=a(115),s=(a(972),a(936)),o=a(584),r=a(660),i=a(104),l=a(624),d=a(496);const u=()=>{(0,r.c)();const[e,t]=(0,n.useState)([]),a=(0,l.w1)((e=>e.aboutOption.tech)),u=(0,l.w1)((e=>e.aboutOption.exp)),h=(0,l.w1)((e=>e.aboutOption.education));console.log("render-ABOUT"),localStorage.setItem("aboutMeOptions",JSON.stringify({tech:"".concat(a),exp:"".concat(u),education:"".concat(h)}));const m=(0,l.OY)(),{getdata:p,process:b,setProcess:j}=(0,o.c)();(0,n.useEffect)((()=>{a+""==="true"&&p("https://projectdata-f0pl.onrender.com/aboutMeCardsTechStack").then(x).then((()=>j("confirmed")))}),[a]),(0,n.useEffect)((()=>{u+""==="true"&&p("https://projectdata-f0pl.onrender.com/aboutMeCardsMyExperience").then(f).then((()=>j("confirmed")))}),[u]),(0,n.useEffect)((()=>{h+""==="true"&&p("https://projectdata-f0pl.onrender.com/aboutMeCardsMyEducation").then(g).then((()=>j("confirmed")))}),[h]);const x=e=>{t(e)},f=e=>{t(e)},g=e=>{t(e)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(c.S,{children:[(0,d.jsx)("meta",{name:"description",content:"Pavel Portfolio"}),(0,d.jsx)("title",{children:"Pavel Portfolio"})]}),(0,d.jsx)("div",{className:"AboutPage",children:(0,d.jsxs)("div",{className:"AboutPage_bg",children:[(0,d.jsx)("h1",{children:" About me "}),(0,d.jsxs)("div",{className:"AboutPage_text_buttons",children:[(0,d.jsx)("button",{onClick:()=>m((0,i.K)()),className:"d-flex justify-content-center btn btn-primary",children:"My Tech Stack"}),(0,d.jsx)("button",{onClick:()=>m((0,i.Cu)()),className:"d-flex justify-content-center btn btn-primary",children:"My Experiance"}),(0,d.jsx)("button",{onClick:()=>m((0,i.GK)()),className:"d-flex justify-content-center btn btn-primary",children:"My Education"})]}),(0,d.jsx)("div",{className:"AboutPage_container",children:e.map(((e,t)=>(0,d.jsx)("div",{className:"AboutPage_wrap",children:(0,d.jsxs)("div",{className:"AboutPage_card",children:[(0,d.jsx)("div",{className:"AboutPage_imageContainer",children:function(){let t=[];return Object.entries(s).forEach((a=>{e.img.forEach((e=>{a[0]===e&&t.push(a[1])}))})),console.log(t),t.map(((e,t)=>(0,d.jsx)("img",{src:e,alt:"logo"},t)))}()}),(0,d.jsx)("div",{className:"AboutPage_Card_content_bg",children:(0,d.jsxs)("div",{className:"AboutPage_Card_content",children:[(0,d.jsx)("h2",{className:"AboutPage_Card_projectName",children:e.cardName}),(0,d.jsxs)("div",{className:"AboutPage_Card_listContainer",children:[(0,d.jsx)("div",{className:"AboutPage_Card_technologyStack",children:(0,d.jsx)("ul",{className:"AboutPage_Card_list",children:e.myTechStack?function(){const t=e.myTechStack.map(((e,t)=>(0,d.jsx)("li",{children:e},t)));return t}():null})}),(0,d.jsxs)("div",{className:"AboutPage_Card_mainFeatures",children:[(0,d.jsx)("p",{children:e.positionAtWork?e.positionAtWork:null}),(0,d.jsx)("ul",{className:"AboutPage_Card_list",children:e.description?function(){const t=e.description.map(((e,t)=>(0,d.jsx)("li",{children:e},t)));return t}():null})]})]})]})})]})},t)))})]})})]})}}}]);
//# sourceMappingURL=438.44e0d7f1.chunk.js.map