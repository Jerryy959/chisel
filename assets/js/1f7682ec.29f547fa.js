"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[628],{6412:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=o(5893),s=o(1151);const i={layout:"docs",title:"Source Locators",section:"chisel3"},r="Source Locators",a={id:"explanations/source-locators",title:"Source Locators",description:"When elaborating a Chisel design and emitting a FIRRTL file or Verilog file, Chisel will automatically",source:"@site/docs/explanations/source-locators.md",sourceDirName:"explanations",slug:"/explanations/source-locators",permalink:"/docs/explanations/source-locators",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/source-locators.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Source Locators",section:"chisel3"},sidebar:"chiselSidebar",previous:{title:"Sequential Circuits",permalink:"/docs/explanations/sequential-circuits"},next:{title:"Supported Hardware",permalink:"/docs/explanations/supported-hardware"}},c={},l=[];function d(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"source-locators",children:"Source Locators"}),"\n",(0,n.jsx)(t.p,{children:"When elaborating a Chisel design and emitting a FIRRTL file or Verilog file, Chisel will automatically\nadd source locators which refer back to the Scala file containing the corresponding Chisel code."}),"\n",(0,n.jsx)(t.p,{children:"In a FIRRTL file, it looks like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"wire w : UInt<3> @[src/main/scala/MyProject/MyFile.scala 1210:21]\n"})}),"\n",(0,n.jsx)(t.p,{children:"In a Verilog file, it looks like this:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-verilog",children:"wire [2:0] w; // @[src/main/scala/MyProject/MyFile.scala 1210:21]\n"})}),"\n",(0,n.jsxs)(t.p,{children:["By default, the file's relative path to where the JVM is invoked is included.\nTo change where the relative path is computed, set the Java system property ",(0,n.jsx)(t.code,{children:"-Dchisel.project.root=/absolute/path/to/root"}),".\nThis option can be directly passed to sbt (",(0,n.jsx)(t.code,{children:"sbt -Dchisel.project.root=/absolute/path/to/root"}),").\nSetting the value in the ",(0,n.jsx)(t.code,{children:"build.sbt"})," file won't work because it needs to be passed to the JVM that invokes sbt (not the other way around).\nWe expect this only relevant for publishing versions which may want more customization."]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>r});var n=o(7294);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);