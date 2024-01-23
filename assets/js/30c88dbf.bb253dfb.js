"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[4862],{6461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(5893),a=n(1151);const o={layout:"docs",title:"Motivation",section:"chisel3"},s='Motivation -- "Why Chisel?"',r={id:"explanations/motivation",title:"Motivation",description:"We were motivated to develop a new hardware language by years of",source:"@site/docs/explanations/motivation.md",sourceDirName:"explanations",slug:"/explanations/motivation",permalink:"/docs/explanations/motivation",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/motivation.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Motivation",section:"chisel3"},sidebar:"chiselSidebar",previous:{title:"Modules",permalink:"/docs/explanations/modules"},next:{title:"Multiple Clock Domains",permalink:"/docs/explanations/multi-clock"}},c={},l=[];function d(e){const t={em:"em",h1:"h1",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"motivation----why-chisel",children:'Motivation -- "Why Chisel?"'}),"\n",(0,i.jsxs)(t.p,{children:["We were motivated to develop a new hardware language by years of\nstruggle with existing hardware description languages in our research\nprojects and hardware design courses.  ",(0,i.jsx)(t.em,{children:"Verilog"})," and ",(0,i.jsx)(t.em,{children:"VHDL"})," were developed\nas hardware ",(0,i.jsx)(t.em,{children:"simulation"})," languages, and only later did they become\na basis for hardware ",(0,i.jsx)(t.em,{children:"synthesis"}),".  Much of the semantics of these\nlanguages are not appropriate for hardware synthesis and, in fact,\nmany constructs are simply not synthesizable.  Other constructs are\nnon-intuitive in how they map to hardware implementations, or their\nuse can accidentally lead to highly inefficient hardware structures.\nWhile it is possible to use a subset of these languages and still get\nacceptable results, they nonetheless present a cluttered and confusing\nspecification model, particularly in an instructional setting."]}),"\n",(0,i.jsxs)(t.p,{children:["However, our strongest motivation for developing a new hardware\nlanguage is our desire to change the way that electronic system design\ntakes place.  We believe that it is important to not only teach\nstudents how to design circuits, but also to teach them how to design\n",(0,i.jsx)(t.em,{children:"circuit generators"})," ---programs that automatically generate\ndesigns from a high-level set of design parameters and constraints.\nThrough circuit generators, we hope to leverage the hard work of\ndesign experts and raise the level of design abstraction for everyone.\nTo express flexible and scalable circuit construction, circuit\ngenerators must employ sophisticated programming techniques to make\ndecisions concerning how to best customize their output circuits\naccording to high-level parameter values and constraints.  While\nVerilog and VHDL include some primitive constructs for programmatic\ncircuit generation, they lack the powerful facilities present in\nmodern programming languages, such as object-oriented programming,\ntype inference, support for functional programming, and reflection."]}),"\n",(0,i.jsx)(t.p,{children:"Instead of building a new hardware design language from scratch, we\nchose to embed hardware construction primitives within an existing\nlanguage.  We picked Scala not only because it includes the\nprogramming features we feel are important for building circuit\ngenerators, but because it was specifically developed as a base for\ndomain-specific languages."})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(7294);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);