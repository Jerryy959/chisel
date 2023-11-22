"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[4003],{1235:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>t,metadata:()=>c,toc:()=>i});var l=a(5893),s=a(1151);const t={layout:"docs",title:"Chisel Type vs Scala Type",section:"chisel3"},o="Chisel Type vs Scala Type",c={id:"explanations/chisel-type-vs-scala-type",title:"Chisel Type vs Scala Type",description:"The Scala compiler cannot distinguish between Chisel's representation of hardware such as false.B, Reg(Bool())",source:"@site/docs/explanations/chisel-type-vs-scala-type.md",sourceDirName:"explanations",slug:"/explanations/chisel-type-vs-scala-type",permalink:"/docs/explanations/chisel-type-vs-scala-type",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/chisel-type-vs-scala-type.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Chisel Type vs Scala Type",section:"chisel3"},sidebar:"tutorialSidebar",previous:{title:"Enumerations",permalink:"/docs/explanations/chisel-enum"},next:{title:"Combinational Circuits",permalink:"/docs/explanations/combinational-circuits"}},p={},i=[{value:"Scala Type vs Chisel Type vs Hardware",id:"scala-type-vs-chisel-type-vs-hardware",level:2},{value:"Chisel Type vs Hardware vs Literals",id:"chisel-type-vs-hardware-vs-literals",level:2},{value:"Chisel Type vs Hardware -- Specific Functions and Errors",id:"chisel-type-vs-hardware----specific-functions-and-errors",level:2},{value:"<code>.asInstanceOf</code> vs <code>.asTypeOf</code> vs <code>chiselTypeOf</code>",id:"asinstanceof-vs-astypeof-vs-chiseltypeof",level:2}];function r(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"chisel-type-vs-scala-type",children:"Chisel Type vs Scala Type"}),"\n",(0,l.jsxs)(n.p,{children:["The Scala compiler cannot distinguish between Chisel's representation of hardware such as ",(0,l.jsx)(n.code,{children:"false.B"}),", ",(0,l.jsx)(n.code,{children:"Reg(Bool())"}),"\nand pure Chisel types (e.g. ",(0,l.jsx)(n.code,{children:"Bool()"}),"). You can get runtime errors passing a Chisel type when hardware is expected, and vice versa."]}),"\n",(0,l.jsx)(n.h2,{id:"scala-type-vs-chisel-type-vs-hardware",children:"Scala Type vs Chisel Type vs Hardware"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.em,{children:"Scala"})," type of the Data is recognized by the Scala compiler, such as ",(0,l.jsx)(n.code,{children:"Bool"}),", ",(0,l.jsx)(n.code,{children:"Decoupled[UInt]"})," or ",(0,l.jsx)(n.code,{children:"MyBundle"})," in"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"class MyBundle(w: Int) extends Bundle {\n  val foo = UInt(w.W)\n  val bar = UInt(w.W)\n}\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.em,{children:"Chisel"})," type of a ",(0,l.jsx)(n.code,{children:"Data"})," is a Scala object. It captures all the fields actually present,\nby names, and their types including widths.\nFor example, ",(0,l.jsx)(n.code,{children:"MyBundle(3)"})," creates a Chisel Type with fields ",(0,l.jsx)(n.code,{children:"foo: UInt(3.W),  bar: UInt(3.W))"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Hardware is ",(0,l.jsx)(n.code,{children:"Data"}),' that is "bound" to synthesizable hardware. For example ',(0,l.jsx)(n.code,{children:"false.B"})," or ",(0,l.jsx)(n.code,{children:"Reg(Bool())"}),".\nThe binding is what determines the actual directionality of each field, it is not a property of the Chisel type."]}),"\n",(0,l.jsxs)(n.p,{children:["A literal is a ",(0,l.jsx)(n.code,{children:"Data"})," that is respresentable as a literal value without being wrapped in Wire, Reg, or IO."]}),"\n",(0,l.jsx)(n.h2,{id:"chisel-type-vs-hardware-vs-literals",children:"Chisel Type vs Hardware vs Literals"}),"\n",(0,l.jsxs)(n.p,{children:["The below code demonstrates how objects with the same Scala type (",(0,l.jsx)(n.code,{children:"MyBundle"}),") can have different properties."]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"import chisel3.experimental.BundleLiterals._\n\nclass MyModule(gen: () => MyBundle) extends Module {\n                                                            //   Hardware   Literal\n    val xType:    MyBundle     = new MyBundle(3)            //      -          -\n    val dirXType: MyBundle     = Input(new MyBundle(3))     //      -          -\n    val xReg:     MyBundle     = Reg(new MyBundle(3))       //      x          -\n    val xIO:      MyBundle     = IO(Input(new MyBundle(3))) //      x          -\n    val xRegInit: MyBundle     = RegInit(xIO)               //      x          -\n    val xLit:     MyBundle     = xType.Lit(                 //      x          x\n      _.foo -> 0.U(3.W),\n      _.bar -> 0.U(3.W)\n    )\n    val y:        MyBundle = gen()                          //      ?          ?\n\n    // Need to initialize all hardware values\n    xReg := DontCare\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"chisel-type-vs-hardware----specific-functions-and-errors",children:"Chisel Type vs Hardware -- Specific Functions and Errors"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:".asTypeOf"})," works for both hardware and Chisel type:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"elaborate(new Module {\n  val chiselType = new MyBundle(3)\n  val hardware = Wire(new MyBundle(3))\n  hardware := DontCare\n  val a = 0.U.asTypeOf(chiselType)\n  val b = 0.U.asTypeOf(hardware)\n})\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Can only ",(0,l.jsx)(n.code,{children:":="})," to hardware:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Do this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  hardware := DontCare\n})\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Not this...\nelaborate(new Module {\n  val chiselType = new MyBundle(3)\n  chiselType := DontCare\n})\n// chisel3.package$ExpectedHardwareException: data to be connected 'MyBundle' must be hardware, not a bare Chisel type. Perhaps you forgot to wrap it in Wire(_) or IO(_)?\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$$anonfun$21$$anonfun$apply$21$$anon$3.<init>(chisel-type-vs-scala-type.md:90)\n// \tat repl.MdocSession$MdocApp$$anonfun$21$$anonfun$apply$21.apply(chisel-type-vs-scala-type.md:88)\n// \tat repl.MdocSession$MdocApp$$anonfun$21$$anonfun$apply$21.apply(chisel-type-vs-scala-type.md:88)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Can only ",(0,l.jsx)(n.code,{children:":="})," from hardware:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Do this...\nelaborate(new Module {\n  val hardware = IO(new MyBundle(3))\n  val moarHardware = Wire(new MyBundle(3))\n  moarHardware := DontCare\n  hardware := moarHardware\n})\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Not this...\nelaborate(new Module {\n  val hardware = IO(new MyBundle(3))\n  val chiselType = new MyBundle(3)\n  hardware := chiselType\n})\n// chisel3.package$ExpectedHardwareException: data to be connected 'MyBundle' must be hardware, not a bare Chisel type. Perhaps you forgot to wrap it in Wire(_) or IO(_)?\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$$anonfun$29$$anonfun$apply$27$$anon$5.<init>(chisel-type-vs-scala-type.md:115)\n// \tat repl.MdocSession$MdocApp$$anonfun$29$$anonfun$apply$27.apply(chisel-type-vs-scala-type.md:112)\n// \tat repl.MdocSession$MdocApp$$anonfun$29$$anonfun$apply$27.apply(chisel-type-vs-scala-type.md:112)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Have to pass hardware to ",(0,l.jsx)(n.code,{children:"chiselTypeOf"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Do this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  hardware := DontCare\n  val chiselType = chiselTypeOf(hardware)\n})\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Not this...\nelaborate(new Module {\n  val chiselType = new MyBundle(3)\n  val crash = chiselTypeOf(chiselType)\n})\n// chisel3.package$ExpectedHardwareException: 'MyBundle' must be hardware, not a bare Chisel type. Perhaps you forgot to wrap it in Wire(_) or IO(_)?\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34$$anon$7$$anonfun$39$$anonfun$apply$36.apply(chisel-type-vs-scala-type.md:138)\n// \tat repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34$$anon$7$$anonfun$39$$anonfun$apply$36.apply(chisel-type-vs-scala-type.md:138)\n// \tat chisel3.experimental.prefix$.apply(prefix.scala:50)\n// \tat repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34$$anon$7$$anonfun$39.apply(chisel-type-vs-scala-type.md:138)\n// \tat repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34$$anon$7$$anonfun$39.apply(chisel-type-vs-scala-type.md)\n// \tat chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n// \tat repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34$$anon$7.<init>(chisel-type-vs-scala-type.md:138)\n// \tat repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34.apply(chisel-type-vs-scala-type.md:136)\n// \tat repl.MdocSession$MdocApp$$anonfun$37$$anonfun$apply$34.apply(chisel-type-vs-scala-type.md:136)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Have to pass hardware to ",(0,l.jsx)(n.code,{children:"*Init"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Do this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  hardware := DontCare\n  val moarHardware = WireInit(hardware)\n})\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Not this...\nelaborate(new Module {\n  val crash = WireInit(new MyBundle(3))\n})\n// chisel3.package$ExpectedHardwareException: wire initializer 'MyBundle' must be hardware, not a bare Chisel type. Perhaps you forgot to wrap it in Wire(_) or IO(_)?\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40$$anon$9$$anonfun$45$$anonfun$apply$41.apply(chisel-type-vs-scala-type.md:160)\n// \tat repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40$$anon$9$$anonfun$45$$anonfun$apply$41.apply(chisel-type-vs-scala-type.md:160)\n// \tat chisel3.experimental.prefix$.apply(prefix.scala:50)\n// \tat repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40$$anon$9$$anonfun$45.apply(chisel-type-vs-scala-type.md:160)\n// \tat repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40$$anon$9$$anonfun$45.apply(chisel-type-vs-scala-type.md)\n// \tat chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n// \tat repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40$$anon$9.<init>(chisel-type-vs-scala-type.md:160)\n// \tat repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40.apply(chisel-type-vs-scala-type.md:159)\n// \tat repl.MdocSession$MdocApp$$anonfun$44$$anonfun$apply$40.apply(chisel-type-vs-scala-type.md:159)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Can't pass hardware to a ",(0,l.jsx)(n.code,{children:"Wire"}),", ",(0,l.jsx)(n.code,{children:"Reg"}),", ",(0,l.jsx)(n.code,{children:"IO"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Do this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  hardware := DontCare\n})\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Not this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  val crash = Wire(hardware)\n})\n// chisel3.package$ExpectedChiselTypeException: wire type '_44_Anon.hardware: Wire[MyBundle]' must be a Chisel type, not hardware\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44$$anon$11$$anonfun$51$$anonfun$apply$47.apply(chisel-type-vs-scala-type.md:182)\n// \tat repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44$$anon$11$$anonfun$51$$anonfun$apply$47.apply(chisel-type-vs-scala-type.md:182)\n// \tat chisel3.experimental.prefix$.apply(prefix.scala:50)\n// \tat repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44$$anon$11$$anonfun$51.apply(chisel-type-vs-scala-type.md:182)\n// \tat repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44$$anon$11$$anonfun$51.apply(chisel-type-vs-scala-type.md)\n// \tat chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n// \tat repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44$$anon$11.<init>(chisel-type-vs-scala-type.md:182)\n// \tat repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44.apply(chisel-type-vs-scala-type.md:180)\n// \tat repl.MdocSession$MdocApp$$anonfun$49$$anonfun$apply$44.apply(chisel-type-vs-scala-type.md:180)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:".Lit"})," can only be called on Chisel type:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Do this...\nelaborate(new Module {\n  val hardwareLit = (new MyBundle(3)).Lit(\n    _.foo -> 0.U,\n    _.bar -> 0.U\n  )\n})\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"//Not this...\nelaborate(new Module {\n  val hardware = Wire(new MyBundle(3))\n  val crash = hardware.Lit(\n    _.foo -> 0.U,\n    _.bar -> 0.U\n  )\n})\n// chisel3.package$ExpectedChiselTypeException: bundle literal constructor model '_52_Anon.hardware: Wire[MyBundle]' must be a Chisel type, not hardware\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52$$anon$13$$anonfun$56$$anonfun$apply$55.apply(chisel-type-vs-scala-type.md:206)\n// \tat repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52$$anon$13$$anonfun$56$$anonfun$apply$55.apply(chisel-type-vs-scala-type.md:206)\n// \tat chisel3.experimental.prefix$.apply(prefix.scala:50)\n// \tat repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52$$anon$13$$anonfun$56.apply(chisel-type-vs-scala-type.md:206)\n// \tat repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52$$anon$13$$anonfun$56.apply(chisel-type-vs-scala-type.md)\n// \tat chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n// \tat repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52$$anon$13.<init>(chisel-type-vs-scala-type.md:206)\n// \tat repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52.apply(chisel-type-vs-scala-type.md:204)\n// \tat repl.MdocSession$MdocApp$$anonfun$54$$anonfun$apply$52.apply(chisel-type-vs-scala-type.md:204)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Can only use a Chisel type within a ",(0,l.jsx)(n.code,{children:"Bundle"})," definition:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Do this...\nelaborate(new Module {\n  val hardware = Wire(new Bundle {\n    val nested = new MyBundle(3)\n  })\n  hardware := DontCare\n})\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Not this...\nelaborate(new Module {\n  val crash = Wire(new Bundle {\n    val nested = Wire(new MyBundle(3))\n  })\n})\n// chisel3.package$ExpectedChiselTypeException: Bundle: AnonymousBundle contains hardware fields: nested: _60_Anon.crash_nested: Wire[MyBundle]\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60$$anon$16$$anonfun$62$$anonfun$apply$61.apply(chisel-type-vs-scala-type.md:232)\n// \tat repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60$$anon$16$$anonfun$62$$anonfun$apply$61.apply(chisel-type-vs-scala-type.md:232)\n// \tat chisel3.experimental.prefix$.apply(prefix.scala:50)\n// \tat repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60$$anon$16$$anonfun$62.apply(chisel-type-vs-scala-type.md:232)\n// \tat repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60$$anon$16$$anonfun$62.apply(chisel-type-vs-scala-type.md)\n// \tat chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n// \tat repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60$$anon$16.<init>(chisel-type-vs-scala-type.md:232)\n// \tat repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60.apply(chisel-type-vs-scala-type.md:231)\n// \tat repl.MdocSession$MdocApp$$anonfun$61$$anonfun$apply$60.apply(chisel-type-vs-scala-type.md:231)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Can only call ",(0,l.jsx)(n.code,{children:"directionOf"})," on Hardware:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"import chisel3.reflect.DataMirror\n\nclass Child extends Module{\n  val hardware = IO(new MyBundle(3))\n  hardware := DontCare\n  val chiselType = new MyBundle(3)\n}\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Do this...\nelaborate(new Module {\n  val child = Module(new Child())\n  child.hardware := DontCare\n  val direction = DataMirror.directionOf(child.hardware)\n})\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"// Not this...\nelaborate(new Module {\nval child = Module(new Child())\n  child.hardware := DontCare\n  val direction = DataMirror.directionOf(child.chiselType)\n})\n// chisel3.package$ExpectedHardwareException: node requested directionality on 'MyBundle' must be hardware, not a bare Chisel type. Perhaps you forgot to wrap it in Wire(_) or IO(_)?\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$$anonfun$70$$anonfun$apply$68$$anon$19.<init>(chisel-type-vs-scala-type.md:271)\n// \tat repl.MdocSession$MdocApp$$anonfun$70$$anonfun$apply$68.apply(chisel-type-vs-scala-type.md:268)\n// \tat repl.MdocSession$MdocApp$$anonfun$70$$anonfun$apply$68.apply(chisel-type-vs-scala-type.md:268)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Can call ",(0,l.jsx)(n.code,{children:"specifiedDirectionOf"})," on hardware or Chisel type:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"elaborate(new Module {\n  val child = Module(new Child())\n  child.hardware := DontCare\n  val direction0 = DataMirror.specifiedDirectionOf(child.hardware)\n  val direction1 = DataMirror.specifiedDirectionOf(child.chiselType)\n})\n"})}),"\n",(0,l.jsxs)(n.h2,{id:"asinstanceof-vs-astypeof-vs-chiseltypeof",children:[(0,l.jsx)(n.code,{children:".asInstanceOf"})," vs ",(0,l.jsx)(n.code,{children:".asTypeOf"})," vs ",(0,l.jsx)(n.code,{children:"chiselTypeOf"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:".asInstanceOf"})," is a Scala runtime cast, usually used for telling the compiler\nthat you have more information than it can infer to convert Scala types:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"class ScalaCastingModule(gen: () => Bundle) extends Module {\n  val io = IO(Output(gen().asInstanceOf[MyBundle]))\n  io.foo := 0.U\n}\n"})}),"\n",(0,l.jsx)(n.p,{children:"This works if we do indeed have more information than the compiler:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"elaborate(new ScalaCastingModule( () => new MyBundle(3)))\n"})}),"\n",(0,l.jsx)(n.p,{children:"But if we are wrong, we can get a Scala runtime exception:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:"class NotMyBundle extends Bundle {val baz = Bool()}\nelaborate(new ScalaCastingModule(() => new NotMyBundle()))\n// java.lang.ClassCastException: class repl.MdocSession$MdocApp$$anonfun$79$NotMyBundle$1 cannot be cast to class repl.MdocSession$MdocApp$MyBundle (repl.MdocSession$MdocApp$$anonfun$79$NotMyBundle$1 and repl.MdocSession$MdocApp$MyBundle are in unnamed module of loader scala.reflect.internal.util.AbstractFileClassLoader @1a0c35c6)\n// \tat ... ()\n// \tat repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71$$anonfun$apply$72$$anonfun$apply$73.apply(chisel-type-vs-scala-type.md:293)\n// \tat repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71$$anonfun$apply$72$$anonfun$apply$73.apply(chisel-type-vs-scala-type.md:293)\n// \tat chisel3.SpecifiedDirection$.specifiedDirection(Data.scala:65)\n// \tat chisel3.Output$.apply(Data.scala:268)\n// \tat repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71$$anonfun$apply$72.apply(chisel-type-vs-scala-type.md:293)\n// \tat repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71$$anonfun$apply$72.apply(chisel-type-vs-scala-type.md:293)\n// \tat chisel3.IO$.apply(IO.scala:34)\n// \tat chisel3.experimental.BaseModule.IO(Module.scala:751)\n// \tat repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71.apply(chisel-type-vs-scala-type.md:293)\n// \tat repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76$$anonfun$apply$71.apply(chisel-type-vs-scala-type.md:293)\n// \tat chisel3.experimental.prefix$.apply(prefix.scala:50)\n// \tat repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76.apply(chisel-type-vs-scala-type.md:293)\n// \tat repl.MdocSession$MdocApp$ScalaCastingModule$$anonfun$76.apply(chisel-type-vs-scala-type.md)\n// \tat chisel3.internal.plugin.package$.autoNameRecursively(package.scala:33)\n// \tat repl.MdocSession$MdocApp$ScalaCastingModule.<init>(chisel-type-vs-scala-type.md:293)\n// \tat repl.MdocSession$MdocApp$$anonfun$79$$anonfun$apply$75.apply(chisel-type-vs-scala-type.md:309)\n// \tat repl.MdocSession$MdocApp$$anonfun$79$$anonfun$apply$75.apply(chisel-type-vs-scala-type.md:309)\n// \tat ... ()\n// \tat ... (Stack trace trimmed to user code only. Rerun with --full-stacktrace to see the full stack trace)\n"})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:".asTypeOf"})," is a conversion from one ",(0,l.jsx)(n.code,{children:"Data"})," subclass to another.\nIt is commonly used to assign data to all-zeros, as described in ",(0,l.jsx)(n.a,{href:"https://www.chisel-lang.org/chisel3/docs/cookbooks/cookbook.html#how-can-i-tieoff-a-bundlevec-to-0",children:"this cookbook recipe"}),", but it can\nalso be used (though not really recommended, as there is no checking on\nwidth matches) to convert one Chisel type to another:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-scala",children:'class SimilarToMyBundle(w: Int) extends Bundle{\n  val foobar = UInt((2*w).W)\n}\n\nChiselStage.emitSystemVerilog(new Module {\n  val in = IO(Input(new MyBundle(3)))\n  val out = IO(Output(new SimilarToMyBundle(3)))\n\n  out := in.asTypeOf(out)\n})\n// res12: String = """// Generated by CIRCT firtool-1.59.0\n// module _82_Anon(\t// chisel-type-vs-scala-type.md:323:47\n//   input        clock,\t// <stdin>:4:11\n//                reset,\t// <stdin>:5:11\n//   input  [2:0] in_foo,\t// chisel-type-vs-scala-type.md:324:14\n//                in_bar,\t// chisel-type-vs-scala-type.md:324:14\n//   output [5:0] out_foobar\t// chisel-type-vs-scala-type.md:325:15\n// );\n// \n//   assign out_foobar = {in_foo, in_bar};\t// chisel-type-vs-scala-type.md:323:47, :327:21\n// endmodule\n// \n// """\n'})}),"\n",(0,l.jsxs)(n.p,{children:["In contrast to ",(0,l.jsx)(n.code,{children:"asInstanceOf"})," and ",(0,l.jsx)(n.code,{children:"asTypeOf"}),",\n",(0,l.jsx)(n.code,{children:"chiselTypeOf"})," is not a casting operation. It returns a Scala object which\ncan be used as shown in the examples above to create more Chisel types and\nhardware with the same Chisel type as existing hardware."]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(r,{...e})}):r(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>c,a:()=>o});var l=a(7294);const s={},t=l.createContext(s);function o(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);