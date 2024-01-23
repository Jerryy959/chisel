"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[9560],{911:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>r});var i=a(5893),t=a(1151);const l={layout:"docs",title:"DataView",section:"chisel3"},s="DataView",d={id:"explanations/dataview",title:"DataView",description:"New in Chisel 3.5",source:"@site/docs/explanations/dataview.md",sourceDirName:"explanations",slug:"/explanations/dataview",permalink:"/docs/explanations/dataview",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/dataview.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"DataView",section:"chisel3"},sidebar:"chiselSidebar",previous:{title:"Chisel Data Types",permalink:"/docs/explanations/data-types"},next:{title:"Decoders",permalink:"/docs/explanations/decoder"}},o={},r=[{value:"Introduction",id:"introduction",level:2},{value:"A Motivating Example (AXI4)",id:"a-motivating-example-axi4",level:2},{value:"Other Use Cases",id:"other-use-cases",level:2},{value:"Tuples",id:"tuples",level:3},{value:"Totality and PartialDataView",id:"totality-and-partialdataview",level:2},{value:"Advanced Details",id:"advanced-details",level:2},{value:"Type Classes",id:"type-classes",level:3},{value:"Implicit Resolution",id:"implicit-resolution",level:3},{value:"Implicit Resolution Example",id:"implicit-resolution-example",level:4},{value:"DataProduct",id:"dataproduct",level:3}];function c(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"dataview",children:"DataView"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"New in Chisel 3.5"})}),"\n",(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:['DataView is a mechanism for "viewing" Scala objects as a subtype of ',(0,i.jsx)(n.code,{children:"chisel3.Data"}),".\nOften, this is useful for viewing one subtype of ",(0,i.jsx)(n.code,{children:"chisel3.Data"}),", as another.\nOne can think about a ",(0,i.jsx)(n.code,{children:"DataView"})," as a mapping from a ",(0,i.jsx)(n.em,{children:"Target"})," type ",(0,i.jsx)(n.code,{children:"T"})," to a ",(0,i.jsx)(n.em,{children:"View"})," type ",(0,i.jsx)(n.code,{children:"V"}),".\nThis is similar to a cast (eg. ",(0,i.jsx)(n.code,{children:".asTypeOf"}),") with a few differences:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Views are ",(0,i.jsx)(n.em,{children:"connectable"}),"\u2014connections to the view will occur on the target"]}),"\n",(0,i.jsxs)(n.li,{children:["Whereas casts are ",(0,i.jsx)(n.em,{children:"structural"})," (a reinterpretation of the underlying bits), a DataView is a customizable mapping"]}),"\n",(0,i.jsxs)(n.li,{children:["Views can be ",(0,i.jsx)(n.em,{children:"partial"}),"\u2014not every field in the target must be included in the mapping"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"a-motivating-example-axi4",children:"A Motivating Example (AXI4)"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Advanced_eXtensible_Interface",children:"AXI4"})," is a common interface in digital\ndesign.\nA typical Verilog peripheral using AXI4 will define a write channel as something like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-verilog",children:"module my_module(\n  // Write Channel\n  input        AXI_AWVALID,\n  output       AXI_AWREADY,\n  input [3:0]  AXI_AWID,\n  input [19:0] AXI_AWADDR,\n  input [1:0]  AXI_AWLEN,\n  input [1:0]  AXI_AWSIZE,\n  // ...\n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"This would correspond to the following Chisel Bundle:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class VerilogAXIBundle(val addrWidth: Int) extends Bundle {\n  val AWVALID = Output(Bool())\n  val AWREADY = Input(Bool())\n  val AWID = Output(UInt(4.W))\n  val AWADDR = Output(UInt(addrWidth.W))\n  val AWLEN = Output(UInt(2.W))\n  val AWSIZE = Output(UInt(2.W))\n  // The rest of AW and other AXI channels here\n}\n\n// Instantiated as\nclass my_module extends RawModule {\n  val AXI = IO(new VerilogAXIBundle(20))\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Expressing something that matches a standard Verilog interface is important when instantiating Verilog\nmodules in a Chisel design as ",(0,i.jsx)(n.code,{children:"BlackBoxes"}),".\nGenerally though, Chisel developers prefer to use composition via utilities like ",(0,i.jsx)(n.code,{children:"Decoupled"})," rather\nthan a flat handling of ",(0,i.jsx)(n.code,{children:"ready"})," and ",(0,i.jsx)(n.code,{children:"valid"}),' as in the above.\nA more "Chisel-y" implementation of this interface might look like:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"// Note that both the AW and AR channels look similar and could use the same Bundle definition\nclass AXIAddressChannel(val addrWidth: Int) extends Bundle {\n  val id = UInt(4.W)\n  val addr = UInt(addrWidth.W)\n  val len = UInt(2.W)\n  val size = UInt(2.W)\n  // ...\n}\nimport chisel3.util.Decoupled\n// We can compose the various AXI channels together\nclass AXIBundle(val addrWidth: Int) extends Bundle {\n  val aw = Decoupled(new AXIAddressChannel(addrWidth))\n  // val ar = new AXIAddressChannel\n  // ... Other channels here ...\n}\n// Instantiated as\nclass MyModule extends RawModule {\n  val axi = IO(new AXIBundle(20))\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Of course, this would result in very different looking Verilog:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.62.0\nmodule MyModule(\t// dataview.md:60:33\n  input         axi_aw_ready,\t// dataview.md:53:15\n  output        axi_aw_valid,\t// dataview.md:53:15\n  output [3:0]  axi_aw_bits_id,\t// dataview.md:53:15\n  output [19:0] axi_aw_bits_addr,\t// dataview.md:53:15\n  output [1:0]  axi_aw_bits_len,\t// dataview.md:53:15\n                axi_aw_bits_size\t// dataview.md:53:15\n);\n\n  assign axi_aw_valid = 1'h0;\t// dataview.md:60:33, :62:7\n  assign axi_aw_bits_id = 4'h0;\t// dataview.md:60:33, :62:7\n  assign axi_aw_bits_addr = 20'h0;\t// dataview.md:60:33, :62:7\n  assign axi_aw_bits_len = 2'h0;\t// dataview.md:60:33, :62:7\n  assign axi_aw_bits_size = 2'h0;\t// dataview.md:60:33, :62:7\nendmodule\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"So how can we use our more structured types while maintaining expected Verilog interfaces?\nMeet DataView:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"import chisel3.experimental.dataview._\n\n// We recommend putting DataViews in a companion object of one of the involved types\nobject AXIBundle {\n  // Don't be afraid of the use of implicits, we will discuss this pattern in more detail later\n  implicit val axiView = DataView[VerilogAXIBundle, AXIBundle](\n    // The first argument is a function constructing an object of View type (AXIBundle)\n    // from an object of the Target type (VerilogAXIBundle)\n    vab => new AXIBundle(vab.addrWidth),\n    // The remaining arguments are a mapping of the corresponding fields of the two types\n    _.AWVALID -> _.aw.valid,\n    _.AWREADY -> _.aw.ready,\n    _.AWID -> _.aw.bits.id,\n    _.AWADDR -> _.aw.bits.addr,\n    _.AWLEN -> _.aw.bits.len,\n    _.AWSIZE -> _.aw.bits.size,\n    // ...\n  )\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This ",(0,i.jsx)(n.code,{children:"DataView"})," is a mapping between our flat, Verilog-style AXI Bundle to our more compositional,\nChisel-style AXI Bundle.\nIt allows us to define our ports to match the expected Verilog interface, while manipulating it as if\nit were the more structured type:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class AXIStub extends RawModule {\n  val AXI = IO(new VerilogAXIBundle(20))\n  val view = AXI.viewAs[AXIBundle]\n\n  // We can now manipulate `AXI` via `view`\n  view.aw.bits := 0.U.asTypeOf(new AXIAddressChannel(20)) // zero everything out by default\n  view.aw.valid := true.B\n  when (view.aw.ready) {\n    view.aw.bits.id := 5.U\n    view.aw.bits.addr := 1234.U\n    // We can still manipulate AXI as well\n    AXI.AWLEN := 1.U\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will generate Verilog that matches the standard naming convention:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.62.0\nmodule AXIStub(\t// dataview.md:93:7\n  output        AXI_AWVALID,\t// dataview.md:94:15\n  input         AXI_AWREADY,\t// dataview.md:94:15\n  output [3:0]  AXI_AWID,\t// dataview.md:94:15\n  output [19:0] AXI_AWADDR,\t// dataview.md:94:15\n  output [1:0]  AXI_AWLEN,\t// dataview.md:94:15\n                AXI_AWSIZE\t// dataview.md:94:15\n);\n\n  assign AXI_AWVALID = 1'h1;\t// dataview.md:93:7, :99:17\n  assign AXI_AWID = AXI_AWREADY ? 4'h5 : 4'h0;\t// dataview.md:93:7, :98:{16,31}, :100:24, :101:21\n  assign AXI_AWADDR = AXI_AWREADY ? 20'h4D2 : 20'h0;\t// dataview.md:93:7, :98:{16,31}, :100:24, :102:23\n  assign AXI_AWLEN = {1'h0, AXI_AWREADY};\t// dataview.md:93:7, :98:16, :100:24, :104:15\n  assign AXI_AWSIZE = 2'h0;\t// dataview.md:93:7, :98:31\nendmodule\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that if both the ",(0,i.jsx)(n.em,{children:"Target"})," and the ",(0,i.jsx)(n.em,{children:"View"})," types are subtypes of ",(0,i.jsx)(n.code,{children:"Data"})," (as they are in this example),\nthe ",(0,i.jsx)(n.code,{children:"DataView"})," is ",(0,i.jsx)(n.em,{children:"invertible"}),".\nThis means that we can easily create a ",(0,i.jsx)(n.code,{children:"DataView[AXIBundle, VerilogAXIBundle]"})," from our existing\n",(0,i.jsx)(n.code,{children:"DataView[VerilogAXIBundle, AXIBundle]"}),", all we need to do is provide a function to construct\na ",(0,i.jsx)(n.code,{children:"VerilogAXIBundle"})," from an instance of an ",(0,i.jsx)(n.code,{children:"AXIBundle"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"// Note that typically you should define these together (eg. inside object AXIBundle)\nimplicit val axiView2 = AXIBundle.axiView.invert(ab => new VerilogAXIBundle(ab.addrWidth))\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The following example shows this and illustrates another use case of ",(0,i.jsx)(n.code,{children:"DataView"}),"\u2014connecting unrelated\ntypes:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class ConnectionExample extends RawModule {\n  val in = IO(new AXIBundle(20))\n  val out = IO(Flipped(new VerilogAXIBundle(20)))\n  out.viewAs[AXIBundle] <> in\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"This results in the corresponding fields being connected in the emitted Verilog:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.62.0\nmodule ConnectionExample(\t// dataview.md:124:7\n  input         in_aw_ready,\t// dataview.md:125:14\n  output        in_aw_valid,\t// dataview.md:125:14\n  output [3:0]  in_aw_bits_id,\t// dataview.md:125:14\n  output [19:0] in_aw_bits_addr,\t// dataview.md:125:14\n  output [1:0]  in_aw_bits_len,\t// dataview.md:125:14\n                in_aw_bits_size,\t// dataview.md:125:14\n  input         out_AWVALID,\t// dataview.md:126:15\n  output        out_AWREADY,\t// dataview.md:126:15\n  input  [3:0]  out_AWID,\t// dataview.md:126:15\n  input  [19:0] out_AWADDR,\t// dataview.md:126:15\n  input  [1:0]  out_AWLEN,\t// dataview.md:126:15\n                out_AWSIZE\t// dataview.md:126:15\n);\n\n  assign in_aw_valid = out_AWVALID;\t// dataview.md:124:7\n  assign in_aw_bits_id = out_AWID;\t// dataview.md:124:7\n  assign in_aw_bits_addr = out_AWADDR;\t// dataview.md:124:7\n  assign in_aw_bits_len = out_AWLEN;\t// dataview.md:124:7\n  assign in_aw_bits_size = out_AWSIZE;\t// dataview.md:124:7\n  assign out_AWREADY = in_aw_ready;\t// dataview.md:124:7\nendmodule\n\n"})}),"\n",(0,i.jsx)(n.h2,{id:"other-use-cases",children:"Other Use Cases"}),"\n",(0,i.jsxs)(n.p,{children:["While the ability to map between ",(0,i.jsx)(n.code,{children:"Bundle"})," types as in the AXI4 example is pretty compelling,\nDataView has many other applications.\nImportantly, because the ",(0,i.jsx)(n.em,{children:"Target"})," of the ",(0,i.jsx)(n.code,{children:"DataView"})," need not be a ",(0,i.jsx)(n.code,{children:"Data"}),", it provides a way to use\n",(0,i.jsx)(n.code,{children:"non-Data"})," objects with APIs that require ",(0,i.jsx)(n.code,{children:"Data"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"tuples",children:"Tuples"}),"\n",(0,i.jsxs)(n.p,{children:["Perhaps the most helpful use of ",(0,i.jsx)(n.code,{children:"DataView"})," for a non-",(0,i.jsx)(n.code,{children:"Data"})," type is viewing Scala tuples as ",(0,i.jsx)(n.code,{children:"Bundles"}),".\nFor example, in Chisel prior to the introduction of ",(0,i.jsx)(n.code,{children:"DataView"}),", one might try to ",(0,i.jsx)(n.code,{children:"Mux"})," tuples and\nsee an error like the following:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class TupleExample extends RawModule {\n  val a, b, c, d = IO(Input(UInt(8.W)))\n  val cond = IO(Input(Bool()))\n  val x, y = IO(Output(UInt(8.W)))\n  (x, y) := Mux(cond, (a, b), (c, d))\n}\n// error: value := is not a member of (chisel3.UInt, chisel3.UInt)\n//   Expression does not convert to assignment because receiver is not assignable.\n//   (x, y) := Mux(cond, (a, b), (c, d))\n//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n// error: inferred type arguments [(chisel3.UInt, chisel3.UInt)] do not conform to macro method apply's type parameter bounds [T <: chisel3.Data]\n//   (x, y) := Mux(cond, (a, b), (c, d))\n//             ^^^\n// error: type mismatch;\n//  found   : (chisel3.UInt, chisel3.UInt)\n//  required: T\n//   (x, y) := Mux(cond, (a, b), (c, d))\n//                       ^^^^^^\n// error: type mismatch;\n//  found   : (chisel3.UInt, chisel3.UInt)\n//  required: T\n//   (x, y) := Mux(cond, (a, b), (c, d))\n//                               ^^^^^^\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The issue, is that Chisel primitives like ",(0,i.jsx)(n.code,{children:"Mux"})," and ",(0,i.jsx)(n.code,{children:":="})," only operate on subtypes of ",(0,i.jsx)(n.code,{children:"Data"})," and\nTuples (as members of the Scala standard library), are not subclasses of ",(0,i.jsx)(n.code,{children:"Data"}),".\n",(0,i.jsx)(n.code,{children:"DataView"})," provides a mechanism to ",(0,i.jsx)(n.em,{children:"view"})," a ",(0,i.jsx)(n.code,{children:"Tuple"})," as if it were a ",(0,i.jsx)(n.code,{children:"Data"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"// We need a type to represent the Tuple\nclass HWTuple2[A <: Data, B <: Data](val _1: A, val _2: B) extends Bundle\n\n// Provide DataView between Tuple and HWTuple\nimplicit def view[A <: Data, B <: Data]: DataView[(A, B), HWTuple2[A, B]] =\n  DataView(tup => new HWTuple2(tup._1.cloneType, tup._2.cloneType),\n           _._1 -> _._1, _._2 -> _._2)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now, we can use ",(0,i.jsx)(n.code,{children:".viewAs"})," to view Tuples as if they were subtypes of ",(0,i.jsx)(n.code,{children:"Data"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class TupleVerboseExample extends RawModule {\n  val a, b, c, d = IO(Input(UInt(8.W)))\n  val cond = IO(Input(Bool()))\n  val x, y = IO(Output(UInt(8.W)))\n  (x, y).viewAs[HWTuple2[UInt, UInt]] := Mux(cond, (a, b).viewAs[HWTuple2[UInt, UInt]], (c, d).viewAs[HWTuple2[UInt, UInt]])\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This is much more verbose than the original idea of just using the Tuples directly as if they were ",(0,i.jsx)(n.code,{children:"Data"}),".\nWe can make this better by providing an implicit conversion that views a ",(0,i.jsx)(n.code,{children:"Tuple"})," as a ",(0,i.jsx)(n.code,{children:"HWTuple2"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"implicit def tuple2hwtuple[A <: Data, B <: Data](tup: (A, B)): HWTuple2[A, B] =\n  tup.viewAs[HWTuple2[A, B]]\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now, the original code just works!"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class TupleExample extends RawModule {\n  val a, b, c, d = IO(Input(UInt(8.W)))\n  val cond = IO(Input(Bool()))\n  val x, y = IO(Output(UInt(8.W)))\n  (x, y) := Mux(cond, (a, b), (c, d))\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Note that this example ignored ",(0,i.jsx)(n.code,{children:"DataProduct"})," which is another required piece (see ",(0,i.jsx)(n.a,{href:"#dataproduct",children:"the documentation\nabout it below"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"All of this is available to users via a single import:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"import chisel3.experimental.conversions._\n"})}),"\n",(0,i.jsx)(n.h2,{id:"totality-and-partialdataview",children:"Totality and PartialDataView"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"DataView"})," is ",(0,i.jsx)(n.em,{children:"total"})," if all fields of the ",(0,i.jsx)(n.em,{children:"Target"})," type and all fields of the ",(0,i.jsx)(n.em,{children:"View"})," type are\nincluded in the mapping.\nChisel will error if a field is accidentally left out from a ",(0,i.jsx)(n.code,{children:"DataView"}),".\nFor example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class BundleA extends Bundle {\n  val foo = UInt(8.W)\n  val bar = UInt(8.W)\n}\nclass BundleB extends Bundle {\n  val fizz = UInt(8.W)\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"// We forgot BundleA.foo in the mapping!\nimplicit val myView = DataView[BundleA, BundleB](_ => new BundleB, _.bar -> _.fizz)\nclass BadMapping extends Module {\n   val in = IO(Input(new BundleA))\n   val out = IO(Output(new BundleB))\n   out := in.viewAs[BundleB]\n}\n// We must run Chisel to see the error\ngetVerilogString(new BadMapping)\n// chisel3.experimental.dataview.package$InvalidViewException: Viewing BadMapping.in: IO[BundleA] as BundleB is non-Total!\n//   Target field '_.foo' is missing.\n//   DataView used is DataView(defined @[dataview.md 228:49]).\n//   If the view *should* be non-total, try a 'PartialDataView'.\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp6$$anonfun$55$BadMapping$1$$anonfun$60.apply(dataview.md:232)\n// \tat repl.MdocSession$MdocApp6$$anonfun$55$BadMapping$1$$anonfun$60.apply(dataview.md:232)\n// \tat chisel3.Data.$anonfun$$colon$eq$1(Data.scala:711)\n// \tat scala.runtime.java8.JFunction0$mcV$sp.apply(JFunction0$mcV$sp.scala:18)\n// \tat chisel3.experimental.prefix$.apply(prefix.scala:33)\n// \tat chisel3.Data.$colon$eq(Data.scala:711)\n// \tat repl.MdocSession$MdocApp6$$anonfun$55$BadMapping$1.<init>(dataview.md:232)\n// \tat repl.MdocSession$MdocApp6$$anonfun$55$$anonfun$apply$67.apply(dataview.md:234)\n// \tat repl.MdocSession$MdocApp6$$anonfun$55$$anonfun$apply$67.apply(dataview.md:234)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["As that error suggests, if we ",(0,i.jsx)(n.em,{children:"want"})," the view to be non-total, we can use a ",(0,i.jsx)(n.code,{children:"PartialDataView"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"// A PartialDataView does not have to be total for the Target\nimplicit val myView = PartialDataView[BundleA, BundleB](_ => new BundleB, _.bar -> _.fizz)\n// myView: DataView[BundleA, BundleB] = PartialDataView(defined @[dataview.md 243:56])\nclass PartialDataViewModule extends Module {\n   val in = IO(Input(new BundleA))\n   val out = IO(Output(new BundleB))\n   out := in.viewAs[BundleB]\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.62.0\nmodule PartialDataViewModule(\t// dataview.md:246:7\n  input        clock,\t// <stdin>:4:11\n               reset,\t// <stdin>:5:11\n  input  [7:0] in_foo,\t// dataview.md:247:15\n               in_bar,\t// dataview.md:247:15\n  output [7:0] out_fizz\t// dataview.md:248:16\n);\n\n  assign out_fizz = in_bar;\t// dataview.md:246:7\nendmodule\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["While ",(0,i.jsx)(n.code,{children:"PartialDataViews"})," need not be total for the ",(0,i.jsx)(n.em,{children:"Target"}),", both ",(0,i.jsx)(n.code,{children:"PartialDataViews"})," and ",(0,i.jsx)(n.code,{children:"DataViews"}),"\nmust always be total for the ",(0,i.jsx)(n.em,{children:"View"}),".\nThis has the consequence that ",(0,i.jsx)(n.code,{children:"PartialDataViews"})," are ",(0,i.jsx)(n.strong,{children:"not"})," invertible in the same way as ",(0,i.jsx)(n.code,{children:"DataViews"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"implicit val myView2 = myView.invert(_ => new BundleA)\nclass PartialDataViewModule2 extends Module {\n   val in = IO(Input(new BundleA))\n   val out = IO(Output(new BundleB))\n   // Using the inverted version of the mapping\n   out.viewAs[BundleA] := in\n}\n// We must run Chisel to see the error\ngetVerilogString(new PartialDataViewModule2)\n// chisel3.experimental.dataview.package$InvalidViewException: Cannot invert 'PartialDataView(defined @[dataview.md 243:56])' as it is non-total.\n//   Try providing a DataView[MdocApp6.this.BundleB, MdocApp6.this.BundleA].\n//   Please see https://www.chisel-lang.org/chisel3/docs/explanations/dataview.\n// \tat chisel3.experimental.dataview.DataView$InvertibleDataView.invert(DataView.scala:136)\n// \tat repl.MdocSession$MdocApp6$$anonfun$67.apply(dataview.md:263)\n// \tat repl.MdocSession$MdocApp6$$anonfun$67.apply(dataview.md:262)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["As noted, the mapping must ",(0,i.jsx)(n.strong,{children:"always"})," be total for the ",(0,i.jsx)(n.code,{children:"View"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"advanced-details",children:"Advanced Details"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DataView"})," takes advantage of features of Scala that may be new to many users of Chisel\u2014in particular\n",(0,i.jsx)(n.a,{href:"#type-classes",children:"Type Classes"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"type-classes",children:"Type Classes"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Type_class",children:"Type classes"}),' are powerful language feature for writing\npolymorphic code.\nThey are a common feature in "modern programming languages" like\nScala,\nSwift (see ',(0,i.jsx)(n.a,{href:"https://docs.swift.org/swift-book/LanguageGuide/Protocols.html",children:"protocols"}),"),\nand Rust (see ",(0,i.jsx)(n.a,{href:"https://doc.rust-lang.org/book/ch10-02-traits.html",children:"traits"}),").\nType classes may appear similar to inheritance in object-oriented programming but there are some\nimportant  differences:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"You can provide a type class for a type you don't own (eg. one defined in a 3rd party library,\nthe Scala standard library, or Chisel itself)"}),"\n",(0,i.jsx)(n.li,{children:"You can write a single type class for many types that do not have a sub-typing relationship"}),"\n",(0,i.jsx)(n.li,{children:"You can provide multiple different type classes for the same type"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["For ",(0,i.jsx)(n.code,{children:"DataView"}),", (1) is crucial because we want to be able to implement ",(0,i.jsx)(n.code,{children:"DataViews"})," of built-in Scala\ntypes like tuples and ",(0,i.jsx)(n.code,{children:"Seqs"}),". Furthermore, ",(0,i.jsx)(n.code,{children:"DataView"})," has two type parameters (the ",(0,i.jsx)(n.em,{children:"Target"})," and the\n",(0,i.jsx)(n.em,{children:"View"})," types) so inheritance does not really make sense\u2014which type would ",(0,i.jsx)(n.code,{children:"extend"})," ",(0,i.jsx)(n.code,{children:"DataView"}),"?"]}),"\n",(0,i.jsx)(n.p,{children:"In Scala 2, type classes are not a built-in language feature, but rather are implemented using implicits.\nThere are great resources out there for interested readers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://scalac.io/blog/typeclasses-in-scala/",children:"Basic Tutorial"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://stackoverflow.com/a/5598107/2483329",children:"Fantastic Explanation on StackOverflow"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Note that Scala 3 has added built-in syntax for type classes that does not apply to Chisel 3 which\ncurrently only supports Scala 2."}),"\n",(0,i.jsx)(n.h3,{id:"implicit-resolution",children:"Implicit Resolution"}),"\n",(0,i.jsxs)(n.p,{children:["Given that ",(0,i.jsx)(n.code,{children:"DataView"})," is implemented using implicits, it is important to understand implicit\nresolution.\nWhenever the compiler sees an implicit argument is required, it first looks in ",(0,i.jsx)(n.em,{children:"current scope"}),"\nbefore looking in the ",(0,i.jsx)(n.em,{children:"implicit scope"}),"."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Current scope","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Values defined in the current scope"}),"\n",(0,i.jsx)(n.li,{children:"Explicit imports"}),"\n",(0,i.jsx)(n.li,{children:"Wildcard imports"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Implicit scope","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Companion object of a type"}),"\n",(0,i.jsx)(n.li,{children:"Implicit scope of an argument's type"}),"\n",(0,i.jsx)(n.li,{children:"Implicit scope of type parameters"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"If at either stage, multiple implicits are found, then the static overloading rule is used to resolve\nit.\nPut simply, if one implicit applies to a more-specific type than the other, the more-specific one\nwill be selected.\nIf multiple implicits apply within a given stage, then the compiler throws an ambiguous implicit\nresolution error."}),"\n",(0,i.jsxs)(n.p,{children:["This section draws heavily from ",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/a/5598107/2483329",children:"[1]"})," and\n",(0,i.jsx)(n.a,{href:"https://stackoverflow.com/a/8694558/2483329",children:"[2]"}),".\nIn particular, see [1] for examples."]}),"\n",(0,i.jsx)(n.h4,{id:"implicit-resolution-example",children:"Implicit Resolution Example"}),"\n",(0,i.jsxs)(n.p,{children:["To help clarify a bit, let us consider how implicit resolution works for ",(0,i.jsx)(n.code,{children:"DataView"}),".\nConsider the definition of ",(0,i.jsx)(n.code,{children:"viewAs"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"def viewAs[V <: Data](implicit dataView: DataView[T, V]): V\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Armed with the knowledge from the previous section, we know that whenever we call ",(0,i.jsx)(n.code,{children:".viewAs"}),", the\nScala compiler will first look for a ",(0,i.jsx)(n.code,{children:"DataView[T, V]"})," in the current scope (defined in, or imported),\nthen it will look in the companion objects of ",(0,i.jsx)(n.code,{children:"DataView"}),", ",(0,i.jsx)(n.code,{children:"T"}),", and ",(0,i.jsx)(n.code,{children:"V"}),".\nThis enables a fairly powerful pattern, namely that default or typical implementations of a ",(0,i.jsx)(n.code,{children:"DataView"}),"\nshould be defined in the companion object for one of the two types.\nWe can think about ",(0,i.jsx)(n.code,{children:"DataViews"}),' defined in this way as "low priority defaults".\nThey can then be overruled by a specific import if a given user ever wants different behavior.\nFor example:']}),"\n",(0,i.jsx)(n.p,{children:"Given the following types:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class Foo extends Bundle {\n  val a = UInt(8.W)\n  val b = UInt(8.W)\n}\nclass Bar extends Bundle {\n  val c = UInt(8.W)\n  val d = UInt(8.W)\n}\nobject Foo {\n  implicit val f2b = DataView[Foo, Bar](_ => new Bar, _.a -> _.c, _.b -> _.d)\n  implicit val b2f = f2b.invert(_ => new Foo)\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This provides an implementation of ",(0,i.jsx)(n.code,{children:"DataView"})," in the ",(0,i.jsx)(n.em,{children:"implicit scope"}),' as a "default" mapping between\n',(0,i.jsx)(n.code,{children:"Foo"})," and ",(0,i.jsx)(n.code,{children:"Bar"})," (and it doesn't even require an import!):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"class FooToBar extends Module {\n  val foo = IO(Input(new Foo))\n  val bar = IO(Output(new Bar))\n  bar := foo.viewAs[Bar]\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.62.0\nmodule FooToBar(\t// dataview.md:300:7\n  input        clock,\t// <stdin>:4:11\n               reset,\t// <stdin>:5:11\n  input  [7:0] foo_a,\t// dataview.md:301:15\n               foo_b,\t// dataview.md:301:15\n  output [7:0] bar_c,\t// dataview.md:302:15\n               bar_d\t// dataview.md:302:15\n);\n\n  assign bar_c = foo_a;\t// dataview.md:300:7\n  assign bar_d = foo_b;\t// dataview.md:300:7\nendmodule\n\n"})}),"\n",(0,i.jsxs)(n.p,{children:["However, it's possible that some user of ",(0,i.jsx)(n.code,{children:"Foo"})," and ",(0,i.jsx)(n.code,{children:"Bar"}),' wants different behavior,\nperhaps they would prefer more of "swizzling" behavior rather than a direct mapping:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"object Swizzle {\n  implicit val swizzle = DataView[Foo, Bar](_ => new Bar, _.a -> _.d, _.b -> _.c)\n}\n// Current scope always wins over implicit scope\nimport Swizzle._\nclass FooToBarSwizzled extends Module {\n  val foo = IO(Input(new Foo))\n  val bar = IO(Output(new Bar))\n  bar := foo.viewAs[Bar]\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.62.0\nmodule FooToBarSwizzled(\t// dataview.md:324:7\n  input        clock,\t// <stdin>:4:11\n               reset,\t// <stdin>:5:11\n  input  [7:0] foo_a,\t// dataview.md:325:15\n               foo_b,\t// dataview.md:325:15\n  output [7:0] bar_c,\t// dataview.md:326:15\n               bar_d\t// dataview.md:326:15\n);\n\n  assign bar_c = foo_b;\t// dataview.md:324:7\n  assign bar_d = foo_a;\t// dataview.md:324:7\nendmodule\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"dataproduct",children:"DataProduct"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"DataProduct"})," is a type class used by ",(0,i.jsx)(n.code,{children:"DataView"}),' to validate the correctness of a user-provided mapping.\nIn order for a type to be "viewable" (ie. the ',(0,i.jsx)(n.code,{children:"Target"})," type of a ",(0,i.jsx)(n.code,{children:"DataView"}),"), it must have an\nimplementation of ",(0,i.jsx)(n.code,{children:"DataProduct"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"For example, say we have some non-Bundle type:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"// Loosely based on chisel3.util.Counter\nclass MyCounter(val width: Int) {\n  /** Indicates if the Counter is incrementing this cycle */\n  val active = WireDefault(false.B)\n  val value = RegInit(0.U(width.W))\n  def inc(): Unit = {\n    active := true.B\n    value := value + 1.U\n  }\n  def reset(): Unit = {\n    value := 0.U\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Say we want to view ",(0,i.jsx)(n.code,{children:"MyCounter"})," as a ",(0,i.jsx)(n.code,{children:"Valid[UInt]"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:"import chisel3.util.Valid\nimplicit val counterView = DataView[MyCounter, Valid[UInt]](c => Valid(UInt(c.width.W)), _.value -> _.bits, _.active -> _.valid)\n// error: myView is already defined as value myView\n// implicit val myView = PartialDataView[BundleA, BundleB](_ => new BundleB, _.bar -> _.fizz)\n// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n// error: Could not find implicit value for DataView[MdocApp1.this.BundleA, MdocApp1.this.BundleB].\n// Please see https://www.chisel-lang.org/chisel3/docs/explanations/dataview\n//    out := in.viewAs[BundleB]\n//           ^^^^^^^^^^^^^^^^^^\n// error: Could not find implicit value for DataView[MdocApp1.this.BundleA, MdocApp1.this.BundleB].\n// Please see https://www.chisel-lang.org/chisel3/docs/explanations/dataview\n//    out := in.viewAs[BundleB]\n//           ^^^^^^^^^^^^^^^^^^\n// error: Could not find implicit value for DataView[MdocApp1.this.BundleB, MdocApp1.this.BundleA].\n// Please see https://www.chisel-lang.org/chisel3/docs/explanations/dataview\n//    out.viewAs[BundleA] := in\n//    ^^^^^^^^^^^^^^^^^^^\n// error: Could not find implicit value for DataProduct[MdocApp1.this.MyCounter].\n// Please see https://www.chisel-lang.org/chisel3/docs/explanations/dataview#dataproduct\n// implicit val counterView = DataView[MyCounter, Valid[UInt]](c => Valid(UInt(c.width.W)), _.value -> _.bits, _.active -> _.valid)\n//                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n"})}),"\n",(0,i.jsxs)(n.p,{children:["As you can see, this fails Scala compliation.\nWe need to provide an implementation of ",(0,i.jsx)(n.code,{children:"DataProduct[MyCounter]"})," which provides Chisel a way to access\nthe objects of type ",(0,i.jsx)(n.code,{children:"Data"})," within ",(0,i.jsx)(n.code,{children:"MyCounter"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-scala",children:'import chisel3.util.Valid\nimplicit val counterProduct = new DataProduct[MyCounter] {\n  // The String part of the tuple is a String path to the object to help in debugging\n  def dataIterator(a: MyCounter, path: String): Iterator[(Data, String)] =\n    List(a.value -> s"$path.value", a.active -> s"$path.active").iterator\n}\n// Now this works\nimplicit val counterView = DataView[MyCounter, Valid[UInt]](c => Valid(UInt(c.width.W)), _.value -> _.bits, _.active -> _.valid)\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Why is this useful?\nThis is how Chisel is able to check for totality as ",(0,i.jsx)(n.a,{href:"#totality-and-partialdataview",children:"described above"}),".\nIn addition to checking if a user has left a field out of the mapping, it also allows Chisel to check\nif the user has included a ",(0,i.jsx)(n.code,{children:"Data"})," in the mapping that isn't actually a part of the ",(0,i.jsx)(n.em,{children:"target"})," nor the\n",(0,i.jsx)(n.em,{children:"view"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>s});var i=a(7294);const t={},l=i.createContext(t);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);