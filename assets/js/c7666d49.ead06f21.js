"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[3770],{8724:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});var o=i(5893),a=i(1151);const r={layout:"docs",title:"Layers",section:"chisel3"},s="Layers",t={id:"explanations/layers",title:"Layers",description:"Layers are used to describe optional functionality of a Chisel circuit that a",source:"@site/docs/explanations/layers.md",sourceDirName:"explanations",slug:"/explanations/layers",permalink:"/docs/explanations/layers",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/layers.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Layers",section:"chisel3"},sidebar:"chiselSidebar",previous:{title:"Intrinsics",permalink:"/docs/explanations/intrinsics"},next:{title:"Memories",permalink:"/docs/explanations/memories"}},l={},c=[{value:"Conventions",id:"conventions",level:2},{value:"Examples",id:"examples",level:2},{value:"Design Verification Example",id:"design-verification-example",level:3},{value:"Implementation Notes",id:"implementation-notes",level:4},{value:"Verilog Output",id:"verilog-output",level:4}];function d(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"layers",children:"Layers"}),"\n",(0,o.jsxs)(n.p,{children:["Layers are used to describe optional functionality of a Chisel circuit that a\nuser would like to ",(0,o.jsx)(n.em,{children:"optionally"})," include at Verilog elaboration time.  This\nfeature is intended to be used to optionally include verification or debug logic\nthat a user does not want to always have present."]}),"\n",(0,o.jsx)(n.p,{children:"Each layer is broken into two pieces:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["A layer ",(0,o.jsx)(n.em,{children:"declaration"})]}),"\n",(0,o.jsxs)(n.li,{children:["One or more ",(0,o.jsx)(n.em,{children:"layer blocks"})," inside modules in the circuit"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["A layer indicates that optional functionality may exist in a Chisel circuit.\nLayers may be nested.  Layers specify the ",(0,o.jsx)(n.em,{children:"convention"})," that they use when\nlowering to Verilog."]}),"\n",(0,o.jsxs)(n.p,{children:["To declare a layer, extend the ",(0,o.jsx)(n.code,{children:"chisel3.layer.Layer"})," abstract class and specify\na convention.  To declare a nested layer, extend the ",(0,o.jsx)(n.code,{children:"chisel3.layer.Layer"}),"\nabstract class inside another declaration."]}),"\n",(0,o.jsx)(n.p,{children:"The following example declares four layers:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"import chisel3.layer.{Convention, Layer}\n\nobject A extends Layer(Convention.Bind) {\n  object B extends Layer(Convention.Bind) {\n    object C extends Layer(Convention.Bind)\n  }\n  object D extends Layer(Convention.Bind)\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.em,{children:"layer block"}),", associated with a layer, adds optional functionality to a\nmodule that is enabled if that layer is enabled.  Each layer block must refer to\na pre-declared layer.  Layer block nesting must match the nesting of declared\nlayers."]}),"\n",(0,o.jsxs)(n.p,{children:["To define a layer block, use the ",(0,o.jsx)(n.code,{children:"chisel3.layer.block"})," inside a Chisel module.\nAn layer block may use any Chisel or Scala value visible to its Scala lexical\nscope."]}),"\n",(0,o.jsxs)(n.p,{children:["The following example defines layer blocks inside module ",(0,o.jsx)(n.code,{children:"Foo"})," and declares\nwires which are connected to values captured from visible lexical scope:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.layer.block\n\nclass Foo extends RawModule {\n  val port = IO(Input(Bool()))\n\n  block(A) {\n    val a = WireInit(port)\n    block(A.B) {\n      val b = WireInit(a)\n      block(A.B.C) {\n        val c = WireInit(b)\n      }\n    }\n    block(A.D) {\n      val d = WireInit(port ^ a)\n    }\n  }\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"conventions",children:"Conventions"}),"\n",(0,o.jsxs)(n.p,{children:["Currently, there is only one supported convention, ",(0,o.jsx)(n.code,{children:"Bind"}),".  This will cause layer\nblocks to be lowered to Verilog modules that are instantiated via the\nSystemVerilog ",(0,o.jsx)(n.code,{children:"bind"})," mechanism.  The lowering to Verilog of layer blocks avoids\nillegal nested usage of ",(0,o.jsx)(n.code,{children:"bind"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"More conventions may be supported in the future."}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.h3,{id:"design-verification-example",children:"Design Verification Example"}),"\n",(0,o.jsx)(n.p,{children:"Consider a use case where a design or design verification engineer would like to\nadd some asserts and debug prints to a module.  The logic necessary for the\nasserts and debug prints requires additional computation.  All of this code\nshould not be included in the final Verilog.  The engineer can use three layers\nto do this."}),"\n",(0,o.jsx)(n.p,{children:"There are three layers that emerge from this example:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["A common ",(0,o.jsx)(n.code,{children:"Verification"})," layer"]}),"\n",(0,o.jsxs)(n.li,{children:["An ",(0,o.jsx)(n.code,{children:"Assert"})," layer nested under the ",(0,o.jsx)(n.code,{children:"Verification"})," layer"]}),"\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.code,{children:"Debug"})," layer also nested under the ",(0,o.jsx)(n.code,{children:"Verification"})," layer"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"Verification"})," layer can be used to store common logic used by both the\n",(0,o.jsx)(n.code,{children:"Assert"})," and ",(0,o.jsx)(n.code,{children:"Debug"})," layers.  The latter two layers allow for separation of,\nrespectively, assertions from prints."]}),"\n",(0,o.jsx)(n.p,{children:"One way to write this in Scala is the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.layer.{Convention, Layer, block}\n\n// All layers are declared here.  The Assert and Debug layers are nested under\n// the Verification layer.\nobject Verification extends Layer(Convention.Bind) {\n  object Assert extends Layer(Convention.Bind)\n  object Debug extends Layer(Convention.Bind)\n}\n\nclass Foo extends Module {\n  val a = IO(Input(UInt(32.W)))\n  val b = IO(Output(UInt(32.W)))\n\n  b := a +% 1.U\n\n  // This adds a `Verification` layer block inside Foo.\n  block(Verification) {\n\n    // Some common logic added here.  The input port `a` is "captured" and\n    // used here.\n    val a_d0 = RegNext(a)\n\n    // This adds an `Assert` layer block.\n    block(Verification.Assert) {\n      chisel3.assert(a >= a_d0, "a must always increment")\n    }\n\n    // This adds a `Debug` layer block.\n    block(Verification.Debug) {\n      printf("a: %x, a_d0: %x", a, a_d0)\n    }\n  }\n\n}\n\n'})}),"\n",(0,o.jsx)(n.p,{children:"After compilation, this will produce three layer include files with the\nfollowing filenames.  One file is created for each layer:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"layers_Foo_Verification.sv"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"layers_Foo_Verification_Assert.sv"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"layers_Foo_Verification_Debug.sv"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["A user can then include any combination of these files in their design to\ninclude the optional functionality describe by the ",(0,o.jsx)(n.code,{children:"Verification"}),", ",(0,o.jsx)(n.code,{children:"Assert"}),", or\n",(0,o.jsx)(n.code,{children:"Debug"})," layers.  The ",(0,o.jsx)(n.code,{children:"Assert"})," and ",(0,o.jsx)(n.code,{children:"Debug"})," bind files automatically include the\n",(0,o.jsx)(n.code,{children:"Verification"})," bind file for the user."]}),"\n",(0,o.jsx)(n.h4,{id:"implementation-notes",children:"Implementation Notes"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Note: the names of the modules and the names of any files that contain these\nmodules are FIRRTL compiler implementation defined!  The only guarantee is the\nexistence of the three layer include files.  The information in this subsection\nis for informational purposes to aid understanding."})}),"\n",(0,o.jsxs)(n.p,{children:["In implementation, a FIRRTL compiler creates four Verilog modules for the\ncircuit above (one for ",(0,o.jsx)(n.code,{children:"Foo"})," and one for each layer block in module ",(0,o.jsx)(n.code,{children:"Foo"}),"):"]}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Foo"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Foo_Verification"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Foo_Verification_Assert"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"Foo_Verification_Debug"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["These will typically be created in separate files with names that match the\nmodules, i.e., ",(0,o.jsx)(n.code,{children:"Foo.sv"}),", ",(0,o.jsx)(n.code,{children:"Foo_Verification.sv"}),", ",(0,o.jsx)(n.code,{children:"Foo_Verification_Assert.sv"}),",\nand ",(0,o.jsx)(n.code,{children:"Foo_Verification_Debug.sv"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The ports of each module created from a layer block will be automatically\ndetermined based on what that layer block captured from outside the layer block.\nIn the example above, the ",(0,o.jsx)(n.code,{children:"Verification"})," layer block captured port ",(0,o.jsx)(n.code,{children:"a"}),".  Both\nthe ",(0,o.jsx)(n.code,{children:"Assert"})," and ",(0,o.jsx)(n.code,{children:"Debug"})," layer blocks captured ",(0,o.jsx)(n.code,{children:"a"})," and ",(0,o.jsx)(n.code,{children:"a_d0"}),".  Layer blocks may\nbe optimized to remove/add ports or to move logic into a layer block."]}),"\n",(0,o.jsx)(n.h4,{id:"verilog-output",children:"Verilog Output"}),"\n",(0,o.jsx)(n.p,{children:"The complete Verilog output for this example is reproduced below:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-verilog",children:'// Generated by CIRCT firtool-1.62.0\n// Standard header to adapt well known macros for prints and assertions.\n\n// Users can define \'PRINTF_COND\' to add an extra gate to prints.\n`ifndef PRINTF_COND_\n  `ifdef PRINTF_COND\n    `define PRINTF_COND_ (`PRINTF_COND)\n  `else  // PRINTF_COND\n    `define PRINTF_COND_ 1\n  `endif // PRINTF_COND\n`endif // not def PRINTF_COND_\n\n// Users can define \'ASSERT_VERBOSE_COND\' to add an extra gate to assert error printing.\n`ifndef ASSERT_VERBOSE_COND_\n  `ifdef ASSERT_VERBOSE_COND\n    `define ASSERT_VERBOSE_COND_ (`ASSERT_VERBOSE_COND)\n  `else  // ASSERT_VERBOSE_COND\n    `define ASSERT_VERBOSE_COND_ 1\n  `endif // ASSERT_VERBOSE_COND\n`endif // not def ASSERT_VERBOSE_COND_\n\n// Users can define \'STOP_COND\' to add an extra gate to stop conditions.\n`ifndef STOP_COND_\n  `ifdef STOP_COND\n    `define STOP_COND_ (`STOP_COND)\n  `else  // STOP_COND\n    `define STOP_COND_ 1\n  `endif // STOP_COND\n`endif // not def STOP_COND_\n\nmodule Foo_Verification_Assert(\n  input [31:0] _a,\n               _a_d0,\n  input        _reset,\n               _clock\n);\n\n  `ifndef SYNTHESIS\n    always @(posedge _clock) begin\n      if (~_reset & _a < _a_d0) begin\n        if (`ASSERT_VERBOSE_COND_)\n          $error("Assertion failed: a must always increment\\n    at layers.md:79 chisel3.assert(a >= a_d0, \\"a must always increment\\")\\n");\n        if (`STOP_COND_)\n          $fatal;\n      end\n    end // always @(posedge)\n  `endif // not def SYNTHESIS\nendmodule\n\nmodule Foo_Verification_Debug(\n  input        _reset,\n               _clock,\n  input [31:0] _a,\n               _a_d0\n);\n\n  `ifndef SYNTHESIS\n    always @(posedge _clock) begin\n      if ((`PRINTF_COND_) & ~_reset)\n        $fwrite(32\'h80000002, "a: %x, a_d0: %x", _a, _a_d0);\n    end // always @(posedge)\n  `endif // not def SYNTHESIS\nendmodule\n\nmodule Foo_Verification(\n  input        _clock,\n  input [31:0] _a\n);\n\n  wire        _clock_probe = _clock;\n  wire [31:0] _a_probe = _a;\n  wire [31:0] _a_probe_0 = _a;\n  wire        _clock_probe_0 = _clock;\n  reg  [31:0] a_d0;\n  wire [31:0] a_d0_probe = a_d0;\n  wire [31:0] a_d0_probe_0 = a_d0;\n  always @(posedge _clock)\n    a_d0 <= _a;\nendmodule\n\nmodule Foo(\n  input         clock,\n                reset,\n  input  [31:0] a,\n  output [31:0] b\n);\n\n  assign b = a + 32\'h1;\nendmodule\n\n\n// ----- 8< ----- FILE "groups_Foo_Verification_Debug.sv" ----- 8< -----\n\n// Generated by CIRCT firtool-1.62.0\n`include "groups_Foo_Verification.sv"\n`ifndef groups_Foo_Verification_Debug\n`define groups_Foo_Verification_Debug\nbind Foo Foo_Verification_Debug foo_Verification_Debug (\n  ._reset (reset),\n  ._clock (Foo.foo_Verification._clock_probe_0),\n  ._a     (Foo.foo_Verification._a_probe_0),\n  ._a_d0  (Foo.foo_Verification.a_d0_probe_0)\n);\n`endif // groups_Foo_Verification_Debug\n\n// ----- 8< ----- FILE "groups_Foo_Verification_Assert.sv" ----- 8< -----\n\n// Generated by CIRCT firtool-1.62.0\n`include "groups_Foo_Verification.sv"\n`ifndef groups_Foo_Verification_Assert\n`define groups_Foo_Verification_Assert\nbind Foo Foo_Verification_Assert foo_Verification_Assert (\n  ._a     (Foo.foo_Verification._a_probe),\n  ._a_d0  (Foo.foo_Verification.a_d0_probe),\n  ._reset (reset),\n  ._clock (Foo.foo_Verification._clock_probe)\n);\n`endif // groups_Foo_Verification_Assert\n\n// ----- 8< ----- FILE "groups_Foo_Verification.sv" ----- 8< -----\n\n// Generated by CIRCT firtool-1.62.0\n`ifndef groups_Foo_Verification\n`define groups_Foo_Verification\nbind Foo Foo_Verification foo_Verification (\n  ._clock (clock),\n  ._a     (a)\n);\n`endif // groups_Foo_Verification\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>s});var o=i(7294);const a={},r=o.createContext(a);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);