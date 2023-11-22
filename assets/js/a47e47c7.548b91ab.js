"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[9948],{2631:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>a});var o=t(5893),i=t(1151);const s={layout:"docs",title:"Troubleshooting",section:"chisel3"},c="Troubleshooting",r={id:"cookbooks/troubleshooting",title:"Troubleshooting",description:"This page is a starting point for recording common and not so common problems in developing with Chisel3.  In particular, those situations where there is a work around that will keep you going.",source:"@site/docs/cookbooks/troubleshooting.md",sourceDirName:"cookbooks",slug:"/cookbooks/troubleshooting",permalink:"/docs/cookbooks/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/cookbooks/troubleshooting.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Troubleshooting",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Serialization Cookbook",permalink:"/docs/cookbooks/serialization"},next:{title:"Explanations",permalink:"/docs/explanations/"}},l={},a=[{value:"<code>type mismatch</code> specifying width/value of a <code>UInt</code>/<code>SInt</code>",id:"type-mismatch-specifying-widthvalue-of-a-uintsint",level:3}];function d(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,o.jsx)(n.p,{children:"This page is a starting point for recording common and not so common problems in developing with Chisel3.  In particular, those situations where there is a work around that will keep you going."}),"\n",(0,o.jsxs)(n.h3,{id:"type-mismatch-specifying-widthvalue-of-a-uintsint",children:[(0,o.jsx)(n.code,{children:"type mismatch"})," specifying width/value of a ",(0,o.jsx)(n.code,{children:"UInt"}),"/",(0,o.jsx)(n.code,{children:"SInt"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.em,{children:["I have some old code that used to work correctly in chisel2 (and still does if I use the ",(0,o.jsx)(n.code,{children:"import Chisel._"})," compatibility layer)\nbut causes a ",(0,o.jsx)(n.code,{children:"type mismatch"})," error in straight chisel3:"]})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"class TestBlock extends Module {\n\tval io = IO(new Bundle {\n\t\tval output = Output(UInt(width=3))\n\t})\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"produces"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"type mismatch;\n[error]  found   : Int(3)\n[error]  required: chisel3.internal.firrtl.Width\n[error] \t\tval output = Output(UInt(width=3))\n"})}),"\n",(0,o.jsx)(n.p,{children:"The single argument, multi-function object/constructors from chisel2 have been removed from chisel3.\nIt was felt these were too prone to error and made it difficult to diagnose error conditions in chisel3 code."}),"\n",(0,o.jsxs)(n.p,{children:["In chisel3, the single argument to the ",(0,o.jsx)(n.code,{children:"UInt"}),"/",(0,o.jsx)(n.code,{children:"SInt"})," object/constructor specifies the ",(0,o.jsx)(n.em,{children:"width"})," and must be a ",(0,o.jsx)(n.code,{children:"Width"})," type.\nAlthough there are no automatic conversions from ",(0,o.jsx)(n.code,{children:"Int"})," to ",(0,o.jsx)(n.code,{children:"Width"}),", an ",(0,o.jsx)(n.code,{children:"Int"})," may be converted to a ",(0,o.jsx)(n.code,{children:"Width"})," by applying the ",(0,o.jsx)(n.code,{children:"W"})," method to an ",(0,o.jsx)(n.code,{children:"Int"}),".\nIn chisel3, the above code becomes:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"import chisel3._\n\nclass TestBlock extends Module {\n\tval io = IO(new Bundle {\n\t\tval output = Output(UInt(3.W))\n\t})\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"UInt"}),"/",(0,o.jsx)(n.code,{children:"SInt"})," literals may be created from an ",(0,o.jsx)(n.code,{children:"Int"})," with the application of either the ",(0,o.jsx)(n.code,{children:"U"})," or ",(0,o.jsx)(n.code,{children:"S"})," method."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"UInt(42)\n// error: type mismatch;\n//  found   : Int(42)\n//  required: chisel3.internal.firrtl.Width\n// UInt(42)\n//      ^^\n"})}),"\n",(0,o.jsx)(n.p,{children:"in chisel2, becomes"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"42.U\n"})}),"\n",(0,o.jsx)(n.p,{children:"in chisel3"}),"\n",(0,o.jsxs)(n.p,{children:["A literal with a specific width is created by calling the ",(0,o.jsx)(n.code,{children:"U"})," or ",(0,o.jsx)(n.code,{children:"S"})," method with a ",(0,o.jsx)(n.code,{children:"W"})," argument.\nUse:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"1.S(8.W)\n"})}),"\n",(0,o.jsx)(n.p,{children:"to create an 8-bit wide (signed) literal with value 1."})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var o=t(7294);const i={},s=o.createContext(i);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);