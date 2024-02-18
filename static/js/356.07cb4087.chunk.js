"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[356],{660:(e,t,c)=>{c.d(t,{c:()=>a});var n=c(868);const a=()=>{if((0,n.useMediaQuery)({query:"(max-width: 575px)"})){const e=document.getElementById("burger-checkbox"),t=document.querySelector(".menu-list"),c=document.querySelector(".menu"),n=document.querySelectorAll(".menu-item"),a=document.querySelector(".burger");e.addEventListener("click",(()=>{e.checked?(document.body.style.overflow="hidden",c.style="\n                 position: fixed;\n                 top: 0;\n                 left: 0;\n                 width: 100%;\n                 height: 100%;\n                 z-index: 1;\n                 background-color: rgba(0, 0, 0, 0.5);\n                   ",t.style="\n                display: grid;\n                ",a.style="\n                left: 85%;\n                z-index: 5;\n                "):(document.body.style.overflow="",c.style="",t.style="",a.style="")})),window.addEventListener("click",(n=>{n.target===c&&!0===e.checked&&(e.checked=!1,document.body.style.overflow="",c.style="",t.style="",a.style="")})),Array.from(n).forEach((n=>{n.addEventListener("click",(()=>{e.checked=!1,document.body.style.overflow="",c.style="",t.style="",a.style=""}))}))}}},438:(e,t,c)=>{c.r(t),c.d(t,{default:()=>l});var n=c(60),a=c(115),s=(c(972),c(704)),o=c(584),r=c(660),A=c(104),i=c(624),d=c(496);const l=()=>{(0,r.c)();const[e,t]=(0,n.useState)([]),c=(0,i.w1)((e=>e.aboutOption.tech)),l=(0,i.w1)((e=>e.aboutOption.exp)),h=(0,i.w1)((e=>e.aboutOption.education));console.log("render-ABOUT"),localStorage.setItem("aboutMeOptions",JSON.stringify({tech:"".concat(c),exp:"".concat(l),education:"".concat(h)}));const w=(0,i.OY)(),{getdata:u,process:C,setProcess:g}=(0,o.c)();(0,n.useEffect)((()=>{c+""==="true"&&u("https://projectdata-f0pl.onrender.com/aboutMeCardsTechStack").then(j).then((()=>g("confirmed")))}),[c]),(0,n.useEffect)((()=>{l+""==="true"&&u("https://projectdata-f0pl.onrender.com/aboutMeCardsMyExperience").then(M).then((()=>g("confirmed")))}),[l]),(0,n.useEffect)((()=>{h+""==="true"&&u("https://projectdata-f0pl.onrender.com/aboutMeCardsMyEducation").then(I).then((()=>g("confirmed")))}),[h]);const j=e=>{t(e)},M=e=>{t(e)},I=e=>{t(e)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a.S,{children:[(0,d.jsx)("meta",{name:"description",content:"Pavel Portfolio"}),(0,d.jsx)("title",{children:"Pavel Portfolio"})]}),(0,d.jsx)("div",{className:"AboutPage",children:(0,d.jsxs)("div",{className:"AboutPage_bg",children:[(0,d.jsxs)("div",{className:"AboutPage_text_buttons",children:[(0,d.jsx)("h1",{children:" About me "}),(0,d.jsx)("button",{onClick:()=>w((0,A.K)()),className:"d-flex justify-content-center btn btn-primary",children:"My Tech Stack"}),(0,d.jsx)("button",{onClick:()=>w((0,A.Cu)()),className:"d-flex justify-content-center btn btn-primary",children:"My Experiance"}),(0,d.jsx)("button",{onClick:()=>w((0,A.GK)()),className:"d-flex justify-content-center btn btn-primary",children:"My Education"})]}),(0,d.jsx)("div",{className:"AboutPage_container",children:e.map(((e,t)=>(0,d.jsx)("div",{className:"AboutPage_wrap",children:(0,d.jsxs)("div",{className:"AboutPage_card",children:[(0,d.jsx)("div",{className:"Card_imageContainer",children:function(){let t=[];return Object.entries(s).forEach((c=>{e.img.forEach((e=>{c[0]===e&&t.push(c[1])}))})),console.log(t),t.map(((e,t)=>(0,d.jsx)("img",{src:e,style:{width:"50px",height:"50px"},alt:"logo"},t)))}()}),(0,d.jsx)("div",{className:"Card_content_bg",children:(0,d.jsxs)("div",{className:"Card_content",children:[(0,d.jsx)("h2",{className:"Card_projectName",children:e.cardName}),(0,d.jsxs)("div",{className:"Card_listContainer",children:[(0,d.jsx)("div",{className:"Card_technologyStack",children:(0,d.jsx)("ul",{className:"Card_list",children:e.myTechStack?function(){const t=e.myTechStack.map(((e,t)=>(0,d.jsx)("li",{children:e},t)));return t}():null})}),(0,d.jsxs)("div",{className:"Card_mainFeatures",children:[(0,d.jsx)("p",{children:e.positionAtWork?e.positionAtWork:null}),(0,d.jsx)("ul",{className:"Card_list",children:e.description?function(){const t=e.description.map(((e,t)=>(0,d.jsx)("li",{children:e},t)));return t}():null})]})]})]})})]})},t)))})]})})]})}},704:(e,t,c)=>{c.r(t),c.d(t,{bringitup:()=>s,marvel:()=>n,mogo:()=>a,nativeJs:()=>o,relyde:()=>r});const n=c.p+"static/media/marvel.d2fc1147a03ed938467f.png",a=c.p+"static/media/Mogo.958a97ef249a1f3dbc85.png",s=c.p+"static/media/bringitupOOP.cd5e6eb69a71cd3542c4.png",o=c.p+"static/media/nativeJs.8b5450f91a4ecdeb445f.png",r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAADjCAIAAAD2YB1dAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAnESURBVHhe7d2xitxWFIDhnZCkcdw7XTCkzDssbO9iwbidIinyFAaz77HV7gskZWDAxTouAq5MusW4sElliCEJKZyjqzsajebM5h7pzkhX5/8IYTdeSVfS/UfS7o5z8gnADsIAFIQBKAgDUBAGoCAMQEEYgIIwAAVhAArCABSEASgIA1AQBqAgDEBBGICCMAAFYQAKwgAUhAEoCANQEAagIIzRLJfL07VvWk52xD8I5ItlQXEZrFaruDpkRRijkVkeJ/5gsqo6FTrJhTBGkzGMtjoSChmIMEZzoDAaFDIEYYzm0GE0yKMHwhjN0cKokYcJYYzmyGHUnj59GjePOxHGaEYJQ8h2b29v4yCwB2GMZqwwhGyaS8fdCGM0I4ZROz095dKxD2GMZvQwBLdV+xDGaKYQhqANFWGMZiJhCNrYRRijmU4YgjY6CGM0kwpDyHjiyEAYI5paGOL09DQOzj3CGM0EwxD8fKNGGKNZrVZyW6+SP40ftcjXNy4vL5fhfU5xOucjucr66xF6RhjFk2akk4zXHx42BGHMRJ1HrmuIXI7ier0ijLmRQoZfPbihIowZkjbkGTrO8b6cf4fKXRgPvv7215e/xU9mbXgbni8aHsM4O3vkpI2Bt1WeLxoew5B/u2ojTvNe3F40nIYh/LRxeXkZp7md24uG3zCEnzZ6P2+4/faU6zCEnzaWy2Wc7EY+f0nEexjCSRu9HzZ83k0RRsVJG71vqBzeTRFG5e9//vXQRu+LhsO7KcKIPnz400Mb/b5D5fBuijA23r//4+HD777/4Ud5gZwgmdNxoAP0u2g4/H1bwtjy5s3bxeKrOB0mJtfLtqwnrtFCiorL++A6jI8f/6o/kBja/8S5MDG5wuh3N+Xt+dtvGFLFvXsPfvr5F/k49PBlnAJTlSuMfndTci8Xl/fBaRh1FfKoLUnIp1O+g2pkfALucTfl7a1LHsNoqpBPpYfnz1/WH0z8opExjB4/Bc+49SK4C+Ps7FFThThZfHGyuC8fvH79+8QvGhmnptwXxZUm8/aNKXdhdMgplx6kCvl4sbhfT4JpIoxjIgwp4zO5aCwW904Wn4c5MFEZw+jxjSnC8CWe9hJkDGO1WsWVJiMMX+JpLwFXjGMijGIQxjERRjEyhtHj27WE4Us87SXIGIbM8rjSZBm3XgTCKMa4YfCTb1/iaS9BxjDiGi34XSlf4mlPIy+08tg6lly/3yqrivtjIUvF5X0gDIN53Gf3uI8SvB/Dl3ja08wgjN5v+47Lu0EYBjMIo9/fLuXtyVsQhsEMwoh7YkQY7sQzn6b0MPpdLgR/r5Q78cynKTqM3k8XIq7CE8IwKDoMGXzcDSOH91GCMAzKDaPHO5MaDu+jBGEYFBpGj3dfNLz97mCDMAxKDGNIFcLbD7wbhGFQXBgDqxBxRf4QhkFZYQyvwtsvDrYRhkEpYdzm+P98i7g6lwjDoIgwhl8oam6fLmqEYTDxMOQq0e83Z3cV9zSVHWEYTHO65LpxapPLTly7V4RhMIUwJAMhE1dikPHEkWXl+Zm7QRgGecPIdduTFzdRNcIw8BCGXI7i+HwjDIPZh8GjRYMwDOYdBlW0EYbBjMNw/lOLXYRhMNcwqGIXYRjMMgzuoFSEYTCzMGQAVLEPYRjMKQzZehwHNIRhMJsw8u7ILBGGwTzC8PmXG1gRhkHpYcgWeahIRBgG5YYh2+J7siaEYVBiGLIVflu2B8IwKCsMkhiCMAyKCKPugWeJgQjDYLJhyKpkbFwfMiIMg7xhyNpkQpvIIstAGhDyPC24OBwCYRjkDQNTRhgGhOEHYRgQhh+EYUAYfhCGAWH4QRgGhOEHYRgQhh+EYUAYfhCGAWH4QRgGhOEHYRgQhh+EYUAYfhCGAWH4QRgGhOEHYRgQhh+EYUAYfhCGAWH4QRgGecN49epV/Ra8dHFJHB5hGGQPI643zZMnT+KSODzCMCAMPwjDgDD8IAwDwvCDMAwIww/CMCAMPwjDgDD8IAwDwvCDMAwIww/CMCAMPwjDgDD8IAwDwvCDMAwIww/CMCAMPwjDgDD8IAwDwvCDMAwIww/CMCAMPwjDgDD8IAwDwvCDMAwIww/CMCAMPwjDgDD8IAwDwvCDMAwIww/CMCAMPwjDgDD8IAwDwvCDMAwIww/CMCAMPwjDgDD8IAwDwvCDMAwIww/vYQAqwgAUhAEoCANQEAagIAxAQRiAgjAABWEACsIAFIQBKAgDUBAGoCAMQEEYgIIwAAVhAArCABSEASgIA1Ckh/Hu6nF8V37bxYv4xzNz82y9ay8uTp7dhI8mQ4a0z9SGWixjGJ3jHs7QTNu4Wc++86u38T9NRXXYd0elnSD0NSyM8MrKyTg2wji8HGE8vnoXP9uvOpcXzcLvrs/lpTjtUhO225Gyxcr2sqmTprpWbMb29qoaa+Ky9Re3HORyOjCMapDnVy82QzUNsjrja5YFmytw+unbmjZpc6a1lY0+1/yBYSSfjK0w4ujTDmt3E6kpdhYMU/b8OuWMbIUR50HKPopqK+vdDFs0zblUGcIQ6zVUa7Oci2YHDQuGM74eWzikm1fJu2ymjawhbZHa4IM/KAzDC38rjDCzz5PH3TeM6tC0Z0/yvGmHEabgeeqCJYXRfo1IPaQ7201cMMyT9rSujnDSi9R62lRrSDwFtWOH0bV7evZowqjna7iOHzaMRjhGkS2MatPn1zfJRYXdbMY26TC2F2/Ozp125ve+kXQoA6tOYspQ48CqNdiO5LHDSJwfu9aHPh4Rw7i7200OIyxYqxZPH/86jNZZSdzxrRe2WYbROfL6SDpaJ6ItZajV+ivmw1hYGNVwwwk4Qhjdc5Y+/jqM6uvDCA07LmPb3CEk72N4JV7rs2u15HHuhKFcCjR7rhj/u6DhAHbF9dvXUFYYF828OXwY3Ze3sMW08YcwnjU3Rek73tyDBYPPzV4Zwth5xkhZcGe7iedi58uqoZqeMfbs8n5FhSHWry6HD6Pe4noTYSUiZcEwv8XWsqnzpvXyOe0wNmswzLn6MK73cesI3y0c0vXYEi9QldYhTT3vtbLCMN9mhKU6py39ALVvUWTT1YJJ5yOcxc0mkna8va2O/G3oU9kWxsV1nYdIrCIKh7FmWjC+3ARpVYhWGPWwk64z4ohh4C7dO7do++ZqIgZPGg8IIw/CmBnC8IcwEhAGoCAMQEEYgIIwAAVhAArCABSEASgIA1AQBqAgDEBBGICCMAAFYQAKwgAUhAEoCANQEAagIAxAQRiAgjAABWEACsIAFIQBKAgDUBAGoCAMQEEYgIIwAAVhAArCABSEASgIA1AQBqAgDEBBGICCMIAdnz79B7PHpBzPXELoAAAAAElFTkSuQmCC"},584:(e,t,c)=>{c.d(t,{c:()=>a});var n=c(60);const a=()=>{const{request:e,clearError:t,process:c,setProcess:a}=(()=>{const[e,t]=(0,n.useState)("waiting");return{request:(0,n.useCallback)((async function(e){let c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{"Content-Type":"application/json"};t("loading");try{const t=await fetch(e,{method:c,body:n,headers:a});if(!t.ok)throw new Error("Could not fetch ".concat(e,", status: ").concat(t.status));return await t.json()}catch(s){throw t("error"),s}}),[]),clearError:(0,n.useCallback)((()=>{t("loading")}),[]),process:e,setProcess:t}})();return{clearError:t,process:c,setProcess:a,getdata:async t=>await e("".concat(t))}}}}]);
//# sourceMappingURL=356.07cb4087.chunk.js.map