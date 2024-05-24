"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[3130],{3050:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});var r=i(4848),s=i(8453);const a={layout:"docs",title:"Warnings",section:"chisel3"},o="Warnings",t={id:"explanations/warnings",title:"Warnings",description:"Warnings in Chisel are used for deprecating old APIs or semantics for later removal.",source:"@site/docs/explanations/warnings.md",sourceDirName:"explanations",slug:"/explanations/warnings",permalink:"/docs/explanations/warnings",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/warnings.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Warnings",section:"chisel3"},sidebar:"chiselSidebar",previous:{title:"Unconnected Wires",permalink:"/docs/explanations/unconnected-wires"},next:{title:"Width Inference",permalink:"/docs/explanations/width-inference"}},c={},d=[{value:"Warning Configuration",id:"warning-configuration",level:2},{value:"Basic Operation",id:"basic-operation",level:3},{value:"Warning Configuration Files",id:"warning-configuration-files",level:3},{value:"Filters",id:"filters",level:3},{value:"Actions",id:"actions",level:3},{value:"Examples",id:"examples",level:3},{value:"Warning Glossary",id:"warning-glossary",level:2},{value:"[W001] Unsafe UInt cast to ChiselEnum",id:"w001-unsafe-uint-cast-to-chiselenum",level:3},{value:"[W002] Dynamic bit select too wide",id:"w002-dynamic-bit-select-too-wide",level:3},{value:"[W003] Dynamic bit select too narrow",id:"w003-dynamic-bit-select-too-narrow",level:3},{value:"[W004] Dynamic index too wide",id:"w004-dynamic-index-too-wide",level:3},{value:"[W005] Dynamic index too narrow",id:"w005-dynamic-index-too-narrow",level:3},{value:"[W006] Extract from Vec of size 0",id:"w006-extract-from-vec-of-size-0",level:3},{value:"[W007] Bundle literal value too wide",id:"w007-bundle-literal-value-too-wide",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"warnings",children:"Warnings"}),"\n",(0,r.jsxs)(n.p,{children:["Warnings in Chisel are used for deprecating old APIs or semantics for later removal.\nAs a matter of good software practice, Chisel users are encouraged to treat warnings as errors with ",(0,r.jsx)(n.code,{children:"--warnings-as-errors"}),";\nhowever, the coarse-grained nature of this option can be problematic when bumping Chisel which may introduce many warnings.\nSee ",(0,r.jsx)(n.a,{href:"#warning-configuration",children:"Warning Configuration"})," below for techniques to help deal with large numbers of warnings."]}),"\n",(0,r.jsx)(n.h2,{id:"warning-configuration",children:"Warning Configuration"}),"\n",(0,r.jsxs)(n.p,{children:["Inspired by ",(0,r.jsx)(n.code,{children:"-Wconf"})," ",(0,r.jsx)(n.a,{href:"https://www.scala-lang.org/2021/01/12/configuring-and-suppressing-warnings.html",children:"in Scala"}),",\nChisel supports fine-grain control of warning behavior via the CLI options ",(0,r.jsx)(n.code,{children:"--warn-conf"})," and ",(0,r.jsx)(n.code,{children:"--warn-conf-file"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"basic-operation",children:"Basic Operation"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"--warn-conf"})," accepts a comma-separated sequence of ",(0,r.jsx)(n.code,{children:"<filter>:<action>"})," pairs.\nWhen a warning is hit in Chisel, the sequence of pairs are checked from left-to-right to see if the ",(0,r.jsx)(n.code,{children:"filter"})," matches the warning.\nThe ",(0,r.jsx)(n.code,{children:"action"})," associated with the first matching ",(0,r.jsx)(n.code,{children:"filter"})," is the one used for the specific warning.\nIf no ",(0,r.jsx)(n.code,{children:"filters"})," match, then the default behavior is to issue the warning."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"--warn-conf"})," can be specified any number of times.\nEarlier uses of ",(0,r.jsx)(n.code,{children:"--warn-conf"})," take priority over later ones in the same left-to-right decreasing priority as the ",(0,r.jsx)(n.code,{children:"filters"})," are checked within a single ",(0,r.jsx)(n.code,{children:"--warn-conf"}),".\nAs a mental model, the user can pretend that all ",(0,r.jsx)(n.code,{children:"--warn-conf"})," arguments concatenated together (separated by ",(0,r.jsx)(n.code,{children:","}),") into a single argument."]}),"\n",(0,r.jsx)(n.h3,{id:"warning-configuration-files",children:"Warning Configuration Files"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"--warn-conf-file"})," accepts a file which contains the same format of ",(0,r.jsx)(n.code,{children:"<filter>:<action>"})," pairs, separated by newlines.\nLines starting with ",(0,r.jsx)(n.code,{children:"#"})," will be treated as comments and ignored.\n",(0,r.jsx)(n.code,{children:"filters"})," are checked in decreasing priority from top-to-bottom of the file."]}),"\n",(0,r.jsxs)(n.p,{children:["A single command-line can contain any number of ",(0,r.jsx)(n.code,{children:"--warn-conf-file"})," and any number of ",(0,r.jsx)(n.code,{children:"--warn-conf"})," arguments.\nThe filters from all ",(0,r.jsx)(n.code,{children:"--warn-conf*"})," arguments will be applied in the same left-to-right decreasing priority order."]}),"\n",(0,r.jsx)(n.h3,{id:"filters",children:"Filters"}),"\n",(0,r.jsx)(n.p,{children:"The supported filters are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"any"})," - matches all warnings"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"id=<integer>"})," - matches warnings with the integer id"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"src=<glob>"})," - matches warnings when ",(0,r.jsx)(n.code,{children:"<glob>"})," matches the source locator filename where the warning occurs"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"id"})," and ",(0,r.jsx)(n.code,{children:"src"})," filters can be combined with ",(0,r.jsx)(n.code,{children:"&"}),".\nAny filter can have at most one ",(0,r.jsx)(n.code,{children:"id"})," and at most one ",(0,r.jsx)(n.code,{children:"src"})," listed.\n",(0,r.jsx)(n.code,{children:"any"})," cannot be combined with any other filters."]}),"\n",(0,r.jsx)(n.h3,{id:"actions",children:"Actions"}),"\n",(0,r.jsx)(n.p,{children:"The supported actions are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:":s"})," - suppress matching warnings"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:":w"})," - report matching warnings as warnings (default behavior)"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:":e"})," - error on matching warnings"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(n.p,{children:"The following example issues a warning when elaborated normally"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:"import circt.stage.ChiselStage.emitSystemVerilog\nimport chisel3._\nclass TooWideIndexModule extends RawModule {\n  val in = IO(Input(Vec(4, UInt(8.W))))\n  val idx = IO(Input(UInt(8.W))) // This index is wider than necessary\n  val out = IO(Output(UInt(8.W)))\n\n  out := in(idx)\n}\ncompile(new TooWideIndexModule)\n// [warn] warnings.md 30:12: [W004] Dynamic index with width 8 is too wide for Vec of size 4 (expected index width 2).\n// [warn] There were 1 warning(s) during hardware elaboration.\n"})}),"\n",(0,r.jsxs)(n.p,{children:["As shown in the warning, this warning is ",(0,r.jsx)(n.code,{children:"W004"})," (which can be fixed ",(0,r.jsx)(n.a,{href:"#w004-dynamic-index-too-wide",children:"as described below"}),"), we can suppress it with an ",(0,r.jsx)(n.code,{children:"id"})," filter which will suppress all instances of this warning in the elaboration run."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'compile(new TooWideIndexModule, args = Array("--warn-conf", "id=4:s"))\n'})}),"\n",(0,r.jsxs)(n.p,{children:["It is generally advisable to make warning suppressions as precise as possible, so we could combine this ",(0,r.jsx)(n.code,{children:"id"})," filter with a ",(0,r.jsx)(n.code,{children:"src"})," glob filter for just this file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'compile(new TooWideIndexModule, args = Array("--warn-conf", "id=4&src=**warnings.md:s"))\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Finally, users are encouraged to treat warnings as errors to the extend possible,\nso they should always end any warning configuration with ",(0,r.jsx)(n.code,{children:"any:e"})," to elevate all unmatched warnings to errors:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'compile(new TooWideIndexModule, args = Array("--warn-conf", "id=4&src=**warnings.md:s,any:e"))\n// Or\ncompile(new TooWideIndexModule, args = Array("--warn-conf", "id=4&src=**warnings.md:s", "--warn-conf", "any:e"))\n// Or\ncompile(new TooWideIndexModule, args = Array("--warn-conf", "id=4&src=**warnings.md:s", "--warnings-as-errors"))\n'})}),"\n",(0,r.jsx)(n.h2,{id:"warning-glossary",children:"Warning Glossary"}),"\n",(0,r.jsx)(n.p,{children:"Chisel warnings have a unique identifier number to make them easier to lookup as well as so they can be configured as described above."}),"\n",(0,r.jsx)(n.h3,{id:"w001-unsafe-uint-cast-to-chiselenum",children:"[W001] Unsafe UInt cast to ChiselEnum"}),"\n",(0,r.jsxs)(n.p,{children:["This warning occurs when casting a ",(0,r.jsx)(n.code,{children:"UInt"})," to a ",(0,r.jsx)(n.code,{children:"ChiselEnum"})," when there are values the ",(0,r.jsx)(n.code,{children:"UInt"})," could take that are not legal states in the enumeration.\nSee the ",(0,r.jsx)(n.a,{href:"chisel-enum#casting",children:"ChiselEnum explanation"})," for more information and how to fix this warning."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," This is the only warning that is not currently scheduled for become an error."]}),"\n",(0,r.jsx)(n.h3,{id:"w002-dynamic-bit-select-too-wide",children:"[W002] Dynamic bit select too wide"}),"\n",(0,r.jsxs)(n.p,{children:["This warning occurs when dynamically indexing a ",(0,r.jsx)(n.code,{children:"UInt"})," or an ",(0,r.jsx)(n.code,{children:"SInt"})," with an index that is wider than necessary to address all bits in the indexee.\nIt indicates that some of the high-bits of the index are ignored by the indexing operation.\nIt can be fixed as described in the ",(0,r.jsx)(n.a,{href:"../cookbooks/cookbook#how-do-i-resolve-dynamic-index--is-too-widenarrow-for-extractee-",children:"Cookbook"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"w003-dynamic-bit-select-too-narrow",children:"[W003] Dynamic bit select too narrow"}),"\n",(0,r.jsxs)(n.p,{children:["This warning occurs when dynamically indexing a ",(0,r.jsx)(n.code,{children:"UInt"})," or an ",(0,r.jsx)(n.code,{children:"SInt"})," with an index that is to small to address all bits in the indexee.\nIt indicates that some bits of the indexee cannot be reached by the indexing operation.\nIt can be fixed as described in the ",(0,r.jsx)(n.a,{href:"../cookbooks/cookbook#how-do-i-resolve-dynamic-index--is-too-widenarrow-for-extractee-",children:"Cookbook"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"w004-dynamic-index-too-wide",children:"[W004] Dynamic index too wide"}),"\n",(0,r.jsxs)(n.p,{children:["This warning occurs when dynamically indexing a ",(0,r.jsx)(n.code,{children:"Vec"})," with an index that is wider than necessary to address all elements of the ",(0,r.jsx)(n.code,{children:"Vec"}),".\nIt indicates that some of the high-bits of the index are ignored by the indexing operation.\nIt can be fixed as described in the ",(0,r.jsx)(n.a,{href:"../cookbooks/cookbook#how-do-i-resolve-dynamic-index--is-too-widenarrow-for-extractee-",children:"Cookbook"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"w005-dynamic-index-too-narrow",children:"[W005] Dynamic index too narrow"}),"\n",(0,r.jsxs)(n.p,{children:["This warning occurs when dynamically indexing a ",(0,r.jsx)(n.code,{children:"Vec"})," with an index that is to small to address all elements in the ",(0,r.jsx)(n.code,{children:"Vec"}),".\nIt indicates that some elements of the ",(0,r.jsx)(n.code,{children:"Vec"})," cannot be reached by the indexing operation.\nIt can be fixed as described in the ",(0,r.jsx)(n.a,{href:"../cookbooks/cookbook#how-do-i-resolve-dynamic-index--is-too-widenarrow-for-extractee-",children:"Cookbook"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"w006-extract-from-vec-of-size-0",children:"[W006] Extract from Vec of size 0"}),"\n",(0,r.jsxs)(n.p,{children:["This warning occurs when indexing a ",(0,r.jsx)(n.code,{children:"Vec"})," with no elements.\nIt can be fixed by removing the indexing operation for the size zero ",(0,r.jsx)(n.code,{children:"Vec"})," (perhaps via guarding with an ",(0,r.jsx)(n.code,{children:"if-else"})," or ",(0,r.jsx)(n.code,{children:"Option.when"}),")."]}),"\n",(0,r.jsx)(n.h3,{id:"w007-bundle-literal-value-too-wide",children:"[W007] Bundle literal value too wide"}),"\n",(0,r.jsxs)(n.p,{children:["This warning occurs when creating a ",(0,r.jsx)(n.a,{href:"../appendix/experimental-features#bundle-literals",children:"Bundle Literal"})," where the literal value for a\nfield is wider than the Bundle field's width.\nIt can be fixed by reducing the width of the literal (perhaps choosing a different value if it is impossible to encode the value in the\nfield's width)."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>t});var r=i(6540);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);