"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[741],{4008:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>r});var t=i(4848),o=i(8453),a=i(1871);const s={sidebar_position:2},l="Hierarchy Cookbook",c={id:"cookbooks/hierarchy",title:"Hierarchy Cookbook",description:"How do I instantiate multiple instances with the same module parameterization?",source:"@site/docs/cookbooks/hierarchy.md",sourceDirName:"cookbooks",slug:"/cookbooks/hierarchy",permalink:"/docs/cookbooks/hierarchy",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/cookbooks/hierarchy.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"chiselSidebar",previous:{title:"Naming Cookbook",permalink:"/docs/cookbooks/naming"},next:{title:"DataView Cookbook",permalink:"/docs/cookbooks/dataview"}},d={},r=[{value:"How do I instantiate multiple instances with the same module parameterization?",id:"how-do-i-instantiate-multiple-instances-with-the-same-module-parameterization",level:2},{value:"Using Definition and Instance",id:"using-definition-and-instance",level:3},{value:"Using Instantiate",id:"using-instantiate",level:3},{value:"How do I access internal fields of an instance?",id:"how-do-i-access-internal-fields-of-an-instance",level:2},{value:"How do I make my parameters accessible from an instance?",id:"how-do-i-make-my-parameters-accessible-from-an-instance",level:2},{value:"How do I look up parameters from a Definition, if I don&#39;t want to instantiate it?",id:"how-do-i-look-up-parameters-from-a-definition-if-i-dont-want-to-instantiate-it",level:2},{value:"How do I parameterize a module by its children instances?",id:"how-do-i-parameterize-a-module-by-its-children-instances",level:2},{value:"How do I use the new hierarchy-specific Select functions?",id:"how-do-i-use-the-new-hierarchy-specific-select-functions",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"hierarchy-cookbook",children:"Hierarchy Cookbook"}),"\n","\n","\n",(0,t.jsx)(a.A,{toc:r}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-instantiate-multiple-instances-with-the-same-module-parameterization",children:"How do I instantiate multiple instances with the same module parameterization?"}),"\n",(0,t.jsx)(n.p,{children:'Prior to this package, Chisel users relied on deduplication in a FIRRTL compiler to combine\nstructurally equivalent modules into one module (aka "deduplication").\nThis package introduces the following new APIs to enable multiply-instantiated modules directly in Chisel.'}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Definition(...)"})," enables elaborating a module, but does not actually instantiate that module.\nInstead, it returns a ",(0,t.jsx)(n.code,{children:"Definition"})," class which represents that module's definition."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Instance(...)"})," takes a ",(0,t.jsx)(n.code,{children:"Definition"})," and instantiates it, returning an ",(0,t.jsx)(n.code,{children:"Instance"})," object."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"Instantiate(...)"})," provides an API similar to ",(0,t.jsx)(n.code,{children:"Module(...)"}),", except it uses\n",(0,t.jsx)(n.code,{children:"Definition"})," and ",(0,t.jsx)(n.code,{children:"Instance"})," to only elaborate modules once for a given set of\nparameters. It returns an ",(0,t.jsx)(n.code,{children:"Instance"})," object."]}),"\n",(0,t.jsxs)(n.p,{children:["Modules (classes or traits) which will be used with the ",(0,t.jsx)(n.code,{children:"Definition"}),"/",(0,t.jsx)(n.code,{children:"Instance"})," api should be marked\nwith the ",(0,t.jsx)(n.code,{children:"@instantiable"})," annotation at the class/trait definition."]}),"\n",(0,t.jsxs)(n.p,{children:["To make a Module's members variables accessible from an ",(0,t.jsx)(n.code,{children:"Instance"})," object, they must be annotated\nwith the ",(0,t.jsx)(n.code,{children:"@public"})," annotation. Note that this is only accessible from a Scala sense\u2014this is not\nin and of itself a mechanism for cross-module references."]}),"\n",(0,t.jsx)(n.h3,{id:"using-definition-and-instance",children:"Using Definition and Instance"}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, use ",(0,t.jsx)(n.code,{children:"Definition"}),", ",(0,t.jsx)(n.code,{children:"Instance"}),", ",(0,t.jsx)(n.code,{children:"@instantiable"})," and ",(0,t.jsx)(n.code,{children:"@public"})," to create\nmultiple instances of one specific parameterization of a module, ",(0,t.jsx)(n.code,{children:"AddOne"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, Instance, instantiable, public}\n\n@instantiable\nclass AddOne(width: Int) extends Module {\n  @public val in  = IO(Input(UInt(width.W)))\n  @public val out = IO(Output(UInt(width.W)))\n  out := in + 1.U\n}\n\nclass AddTwo(width: Int) extends Module {\n  val in  = IO(Input(UInt(width.W)))\n  val out = IO(Output(UInt(width.W)))\n  val addOneDef = Definition(new AddOne(width))\n  val i0 = Instance(addOneDef)\n  val i1 = Instance(addOneDef)\n  i0.in := in\n  i1.in := i0.out\n  out   := i1.out\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.81.1\nmodule AddOne(\t// hierarchy.md:14:2\n  input  [9:0] in,\t// hierarchy.md:16:23\n  output [9:0] out\t// hierarchy.md:17:23\n);\n\n  assign out = in + 10'h1;\t// hierarchy.md:14:2, :18:13\nendmodule\n\nmodule AddTwo(\t// hierarchy.md:22:7\n  input        clock,\t// hierarchy.md:22:7\n               reset,\t// hierarchy.md:22:7\n  input  [9:0] in,\t// hierarchy.md:23:15\n  output [9:0] out\t// hierarchy.md:24:15\n);\n\n  wire [9:0] _i0_out;\t// hierarchy.md:26:20\n  AddOne i0 (\t// hierarchy.md:26:20\n    .in  (in),\n    .out (_i0_out)\n  );\t// hierarchy.md:26:20\n  AddOne i1 (\t// hierarchy.md:27:20\n    .in  (_i0_out),\t// hierarchy.md:26:20\n    .out (out)\n  );\t// hierarchy.md:27:20\nendmodule\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"using-instantiate",children:"Using Instantiate"}),"\n",(0,t.jsxs)(n.p,{children:["Similar to the above, the following example uses ",(0,t.jsx)(n.code,{children:"Instantiate"})," to create\nmultiple instances of ",(0,t.jsx)(n.code,{children:"AddOne"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3.experimental.hierarchy.Instantiate\n\nclass AddTwoInstantiate(width: Int) extends Module {\n  val in  = IO(Input(UInt(width.W)))\n  val out = IO(Output(UInt(width.W)))\n  val i0 = Instantiate(new AddOne(width))\n  val i1 = Instantiate(new AddOne(width))\n  i0.in := in\n  i1.in := i0.out\n  out   := i1.out\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.81.1\nmodule AddOne(\t// hierarchy.md:14:2\n  input  [15:0] in,\t// hierarchy.md:16:23\n  output [15:0] out\t// hierarchy.md:17:23\n);\n\n  assign out = in + 16'h1;\t// hierarchy.md:14:2, :18:13\nendmodule\n\nmodule AddTwoInstantiate(\t// hierarchy.md:46:7\n  input         clock,\t// hierarchy.md:46:7\n                reset,\t// hierarchy.md:46:7\n  input  [15:0] in,\t// hierarchy.md:47:15\n  output [15:0] out\t// hierarchy.md:48:15\n);\n\n  wire [15:0] _i0_out;\t// hierarchy.md:49:23\n  AddOne i0 (\t// hierarchy.md:49:23\n    .in  (in),\n    .out (_i0_out)\n  );\t// hierarchy.md:49:23\n  AddOne i1 (\t// hierarchy.md:50:23\n    .in  (_i0_out),\t// hierarchy.md:49:23\n    .out (out)\n  );\t// hierarchy.md:50:23\nendmodule\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-access-internal-fields-of-an-instance",children:"How do I access internal fields of an instance?"}),"\n",(0,t.jsxs)(n.p,{children:["You can mark internal members of a class or trait marked with ",(0,t.jsx)(n.code,{children:"@instantiable"})," with the ",(0,t.jsx)(n.code,{children:"@public"})," annotation.\nThe requirements are that the field is publicly accessible, is a ",(0,t.jsx)(n.code,{children:"val"})," or ",(0,t.jsx)(n.code,{children:"lazy val"}),", and is a valid type.\nThe list of valid types are:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"IsInstantiable"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"IsLookupable"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"Data"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"BaseModule"})}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Iterable"}),"/",(0,t.jsx)(n.code,{children:"Option "}),"containing a type that meets these requirements"]}),"\n",(0,t.jsxs)(n.li,{children:["Basic type like ",(0,t.jsx)(n.code,{children:"String"}),", ",(0,t.jsx)(n.code,{children:"Int"}),", ",(0,t.jsx)(n.code,{children:"BigInt"})," etc."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To mark a superclass's member as ",(0,t.jsx)(n.code,{children:"@public"}),", use the following pattern (shown with ",(0,t.jsx)(n.code,{children:"val clock"}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.hierarchy.{instantiable, public}\n\n@instantiable\nclass MyModule extends Module {\n  @public val clock = clock\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You'll get the following error message for improperly marking something as ",(0,t.jsx)(n.code,{children:"@public"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.hierarchy.{instantiable, public}\n\nobject NotValidType\n\n@instantiable\nclass MyModule extends Module {\n  @public val x = NotValidType\n}\n// error: @public is only legal within a class or trait marked @instantiable, and only on vals of type Data, BaseModule, MemBase, IsInstantiable, IsLookupable, or Instance[_], or in an Iterable, Option, Either, or Tuple2\n// val x = circt.stage.ChiselStage.emitCHIRRTL(new Top)\n//     ^\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-make-my-parameters-accessible-from-an-instance",children:"How do I make my parameters accessible from an instance?"}),"\n",(0,t.jsxs)(n.p,{children:["If an instance's parameters are simple (e.g. ",(0,t.jsx)(n.code,{children:"Int"}),", ",(0,t.jsx)(n.code,{children:"String"})," etc.) they can be marked directly with ",(0,t.jsx)(n.code,{children:"@public"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Often, parameters are more complicated and are contained in case classes.\nIn such cases, mark the case class with the ",(0,t.jsx)(n.code,{children:"IsLookupable"})," trait.\nThis indicates to Chisel that instances of the ",(0,t.jsx)(n.code,{children:"IsLookupable"})," class may be accessed from within instances."]}),"\n",(0,t.jsxs)(n.p,{children:["However, ensure that these parameters are true for ",(0,t.jsx)(n.strong,{children:"all"})," instances of a definition.\nFor example, if our parameters contained an id field which was instance-specific but defaulted to zero,\nthen the definition's id would be returned for all instances.\nThis change in behavior could lead to bugs if other code presumed the id field was correct."]}),"\n",(0,t.jsxs)(n.p,{children:["Thus, it is important that when converting normal modules to use this package,\nyou are careful about what you mark as ",(0,t.jsx)(n.code,{children:"IsLookupable"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, we added the trait ",(0,t.jsx)(n.code,{children:"IsLookupable"})," to allow the member to be marked ",(0,t.jsx)(n.code,{children:"@public"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, Instance, instantiable, IsLookupable, public}\n\ncase class MyCaseClass(width: Int) extends IsLookupable\n\n@instantiable\nclass MyModule extends Module {\n  @public val x = MyCaseClass(10)\n}\n\nclass Top extends Module {\n  val inst = Instance(Definition(new MyModule))\n  println(s"Width is ${inst.x.width}")\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Width is 10\nCircuit(Top,List(DefModule(repl.MdocSession$MdocApp5$MyModule@5e7a7e9f,MyModule,false,List(),List(Port(MyModule.clock: IO[Clock],Input,SourceLine(hierarchy.md,105,2)), Port(MyModule.reset: IO[Reset],Input,SourceLine(hierarchy.md,105,2))),Vector()), DefModule(repl.MdocSession$MdocApp5$Top@61a4b,Top,true,List(),List(Port(Top.clock: IO[Clock],Input,SourceLine(hierarchy.md,111,7)), Port(Top.reset: IO[Bool],Input,SourceLine(hierarchy.md,111,7))),Vector(DefInstance(SourceLine(hierarchy.md,112,22),ModuleClone(repl.MdocSession$MdocApp5$MyModule@5e7a7e9f),List(Port(MyModule.clock: IO[Clock],Input,SourceLine(hierarchy.md,105,2)), Port(MyModule.reset: IO[Reset],Input,SourceLine(hierarchy.md,105,2)))), Connect(SourceLine(hierarchy.md,112,22),Node(MyModule.inst.clock: IO[Clock]),Node(Top.clock: IO[Clock])), Connect(SourceLine(hierarchy.md,112,22),Node(MyModule.inst.reset: IO[Reset]),Node(Top.reset: IO[Bool]))))),List(),firrtl.renamemap.package$MutableRenameMap@5dff8bd,List(),List(),List(),List())\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-look-up-parameters-from-a-definition-if-i-dont-want-to-instantiate-it",children:"How do I look up parameters from a Definition, if I don't want to instantiate it?"}),"\n",(0,t.jsxs)(n.p,{children:["Just like ",(0,t.jsx)(n.code,{children:"Instance"}),"s, ",(0,t.jsx)(n.code,{children:"Definition"}),"'s also contain accessors for ",(0,t.jsx)(n.code,{children:"@public"})," members.\nAs such, you can directly access them:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, instantiable, public}\n\n@instantiable\nclass AddOne(val width: Int) extends RawModule {\n  @public val width = width\n  @public val in  = IO(Input(UInt(width.W)))\n  @public val out = IO(Output(UInt(width.W)))\n  out := in + 1.U\n}\n\nclass Top extends Module {\n  val definition = Definition(new AddOne(10))\n  println(s"Width is: ${definition.width}")\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.81.1\nmodule Top(\t// hierarchy.md:157:7\n  input clock,\t// hierarchy.md:157:7\n        reset\t// hierarchy.md:157:7\n);\n\nendmodule\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-parameterize-a-module-by-its-children-instances",children:"How do I parameterize a module by its children instances?"}),"\n",(0,t.jsx)(n.p,{children:"Prior to the introduction of this package, a parent module would have to pass all necessary parameters\nwhen instantiating a child module.\nThis had the unfortunate consequence of requiring a parent's parameters to always contain the child's\nparameters, which was an unnecessary coupling which lead to some anti-patterns."}),"\n",(0,t.jsxs)(n.p,{children:["Now, a parent can take a child ",(0,t.jsx)(n.code,{children:"Definition"})," as an argument, and instantiate it directly.\nIn addition, it can analyze the parameters used in the definition to parameterize itself.\nIn a sense, now the child can actually parameterize the parent."]}),"\n",(0,t.jsxs)(n.p,{children:["In the following example, we create a definition of ",(0,t.jsx)(n.code,{children:"AddOne"}),", and pass the definition to ",(0,t.jsx)(n.code,{children:"AddTwo"}),".\nThe width of the ",(0,t.jsx)(n.code,{children:"AddTwo"})," ports are now derived from the parameterization of the ",(0,t.jsx)(n.code,{children:"AddOne"})," instance."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, Instance, instantiable, public}\n\n@instantiable\nclass AddOne(val width: Int) extends Module {\n  @public val width = width\n  @public val in  = IO(Input(UInt(width.W)))\n  @public val out = IO(Output(UInt(width.W)))\n  out := in + 1.U\n}\n\nclass AddTwo(addOneDef: Definition[AddOne]) extends Module {\n  val i0 = Instance(addOneDef)\n  val i1 = Instance(addOneDef)\n  val in  = IO(Input(UInt(addOneDef.width.W)))\n  val out = IO(Output(UInt(addOneDef.width.W)))\n  i0.in := in\n  i1.in := i0.out\n  out   := i1.out\n}\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"// Generated by CIRCT firtool-1.81.1\nmodule AddOne(\t// hierarchy.md:181:2\n  input  [9:0] in,\t// hierarchy.md:184:23\n  output [9:0] out\t// hierarchy.md:185:23\n);\n\n  assign out = in + 10'h1;\t// hierarchy.md:181:2, :186:13\nendmodule\n\nmodule AddTwo(\t// hierarchy.md:190:7\n  input        clock,\t// hierarchy.md:190:7\n               reset,\t// hierarchy.md:190:7\n  input  [9:0] in,\t// hierarchy.md:193:15\n  output [9:0] out\t// hierarchy.md:194:15\n);\n\n  wire [9:0] _i0_out;\t// hierarchy.md:191:20\n  AddOne i0 (\t// hierarchy.md:191:20\n    .in  (in),\n    .out (_i0_out)\n  );\t// hierarchy.md:191:20\n  AddOne i1 (\t// hierarchy.md:192:20\n    .in  (_i0_out),\t// hierarchy.md:191:20\n    .out (out)\n  );\t// hierarchy.md:192:20\nendmodule\n\n"})}),"\n",(0,t.jsx)(n.h2,{id:"how-do-i-use-the-new-hierarchy-specific-select-functions",children:"How do I use the new hierarchy-specific Select functions?"}),"\n",(0,t.jsx)(n.p,{children:"Select functions can be applied after a module has been elaborated, either in a Chisel Aspect or in a parent module applied to a child module."}),"\n",(0,t.jsxs)(n.p,{children:["There are seven hierarchy-specific functions, which (with the exception of ",(0,t.jsx)(n.code,{children:"ios"}),") either return ",(0,t.jsx)(n.code,{children:"Instance"}),"'s or ",(0,t.jsx)(n.code,{children:"Definition"}),"'s:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"instancesIn(parent)"}),": Return all instances directly instantiated locally within ",(0,t.jsx)(n.code,{children:"parent"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"instancesOf[type](parent)"}),": Return all instances of provided ",(0,t.jsx)(n.code,{children:"type"})," directly instantiated locally within ",(0,t.jsx)(n.code,{children:"parent"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allInstancesOf[type](root)"}),": Return all instances of provided ",(0,t.jsx)(n.code,{children:"type"})," directly and indirectly instantiated, locally and deeply, starting from ",(0,t.jsx)(n.code,{children:"root"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"definitionsIn"}),": Return definitions of all instances directly instantiated locally within ",(0,t.jsx)(n.code,{children:"parent"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"definitionsOf[type]"}),": Return definitions of all instances of provided ",(0,t.jsx)(n.code,{children:"type"})," directly instantiated locally within ",(0,t.jsx)(n.code,{children:"parent"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"allDefinitionsOf[type]"}),": Return all definitions of instances of provided ",(0,t.jsx)(n.code,{children:"type"})," directly and indirectly instantiated, locally and deeply, starting from ",(0,t.jsx)(n.code,{children:"root"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ios"}),": Returns all the I/Os of the provided definition or instance."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["To demonstrate this, consider the following. We mock up an example where we are using the ",(0,t.jsx)(n.code,{children:"Select.allInstancesOf"})," and ",(0,t.jsx)(n.code,{children:"Select.allDefinitionsOf"})," to annotate instances and the definition of ",(0,t.jsx)(n.code,{children:"EmptyModule"}),". When converting the ",(0,t.jsx)(n.code,{children:"ChiselAnnotation"})," to firrtl's ",(0,t.jsx)(n.code,{children:"Annotation"}),", we print out the resulting ",(0,t.jsx)(n.code,{children:"Target"}),". As shown, despite ",(0,t.jsx)(n.code,{children:"EmptyModule"})," actually only being elaborated once, we still provide different targets depending on how the instance or definition is selected."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.experimental.hierarchy.{Definition, Instance, Hierarchy, instantiable, public}\nimport firrtl.annotations.{IsModule, NoTargetAnnotation}\ncase object EmptyAnnotation extends NoTargetAnnotation\ncase class MyChiselAnnotation(m: Hierarchy[RawModule], tag: String) extends experimental.ChiselAnnotation {\n  def toFirrtl = {\n    println(tag + ": " + m.toTarget)\n    EmptyAnnotation\n  }\n}\n\n@instantiable\nclass EmptyModule extends Module {\n  println("Elaborating EmptyModule!")\n}\n\n@instantiable\nclass TwoEmptyModules extends Module {\n  val definition = Definition(new EmptyModule)\n  val i0         = Instance(definition)\n  val i1         = Instance(definition)\n}\n\nclass Top extends Module {\n  val definition = Definition(new TwoEmptyModules)\n  val instance   = Instance(definition)\n  aop.Select.allInstancesOf[EmptyModule](instance).foreach { i =>\n    experimental.annotate(MyChiselAnnotation(i, "instance"))\n  }\n  aop.Select.allDefinitionsOf[EmptyModule](instance).foreach { d =>\n    experimental.annotate(MyChiselAnnotation(d, "definition"))\n  }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Elaborating EmptyModule!\ninstance: ~Top|Top/instance:TwoEmptyModules/i0:EmptyModule\ninstance: ~Top|Top/instance:TwoEmptyModules/i1:EmptyModule\ndefinition: ~Top|EmptyModule\n"})}),"\n",(0,t.jsxs)(n.p,{children:["You can also use ",(0,t.jsx)(n.code,{children:"Select.ios"})," on either a ",(0,t.jsx)(n.code,{children:"Definition"})," or an ",(0,t.jsx)(n.code,{children:"Instance"})," to annotate the I/Os appropriately:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'case class MyIOAnnotation(m: Data, tag: String) extends experimental.ChiselAnnotation {\n  def toFirrtl = {\n    println(tag + ": " + m.toTarget)\n    EmptyAnnotation\n  }\n}\n\n@instantiable\nclass InOutModule extends Module {\n  @public val in = IO(Input(Bool()))\n  @public val out = IO(Output(Bool()))\n  out := in\n}\n\n@instantiable\nclass TwoInOutModules extends Module {\n  val in = IO(Input(Bool()))\n  val out = IO(Output(Bool()))\n  val definition = Definition(new InOutModule)\n  val i0         = Instance(definition)\n  val i1         = Instance(definition)\n  i0.in := in\n  i1.in := i0.out\n  out := i1.out\n}\n\nclass InOutTop extends Module {\n  val definition = Definition(new TwoInOutModules)\n  val instance   = Instance(definition)\n  aop.Select.allInstancesOf[InOutModule](instance).foreach { i =>\n    aop.Select.ios(i).foreach { io =>\n      experimental.annotate(MyIOAnnotation(io, "instance io"))\n  }}\n  aop.Select.allDefinitionsOf[InOutModule](instance).foreach { d =>\n    aop.Select.ios(d).foreach {io =>\n      experimental.annotate(MyIOAnnotation(io, "definition io"))\n  }}\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"instance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i0:InOutModule>clock\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i0:InOutModule>reset\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i0:InOutModule>in\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i0:InOutModule>out\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i1:InOutModule>clock\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i1:InOutModule>reset\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i1:InOutModule>in\ninstance io: ~InOutTop|InOutTop/instance:TwoInOutModules/i1:InOutModule>out\ndefinition io: ~InOutTop|InOutModule>clock\ndefinition io: ~InOutTop|InOutModule>reset\ndefinition io: ~InOutTop|InOutModule>in\ndefinition io: ~InOutTop|InOutModule>out\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1871:(e,n,i)=>{i.d(n,{A:()=>s});i(6540);var t=i(5195);const o={tableOfContentsInline:"tableOfContentsInline_prmo"};var a=i(4848);function s(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:s}=e;return(0,a.jsx)("div",{className:o.tableOfContentsInline,children:(0,a.jsx)(t.A,{toc:n,minHeadingLevel:i,maxHeadingLevel:s,className:"table-of-contents",linkClassName:null})})}},5195:(e,n,i)=>{i.d(n,{A:()=>f});var t=i(6540),o=i(6342);function a(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),i=Array(7).fill(-1);n.forEach(((e,n)=>{const t=i.slice(2,e.level);e.parentIndex=Math.max(...t),i[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:i,...o}=e;i>=0?n[i].children.push(o):t.push(o)})),t}function s(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:i,maxHeadingLevel:t});return function(e){return e.level>=i&&e.level<=t}(e)?[{...e,children:n}]:n}))}function l(e){const n=e.getBoundingClientRect();return n.top===n.bottom?l(e.parentNode):n}function c(e,n){let{anchorTopOffset:i}=n;const t=e.find((e=>l(e).top>=i));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(l(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function d(){const e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,o.p)();return(0,t.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function r(e){const n=(0,t.useRef)(void 0),i=d();(0,t.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:o,minHeadingLevel:a,maxHeadingLevel:s}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),l=function(e){let{minHeadingLevel:n,maxHeadingLevel:i}=e;const t=[];for(let o=n;o<=i;o+=1)t.push(`h${o}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:a,maxHeadingLevel:s}),d=c(l,{anchorTopOffset:i.current}),r=e.find((e=>d&&d.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,i){i?(n.current&&n.current!==e&&n.current.classList.remove(o),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===r)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,i])}var h=i(8774),u=i(4848);function p(e){let{toc:n,className:i,linkClassName:t,isChild:o}=e;return n.length?(0,u.jsx)("ul",{className:o?void 0:i,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(h.A,{to:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(p,{isChild:!0,toc:e.children,className:i,linkClassName:t})]},e.id)))}):null}const m=t.memo(p);function f(e){let{toc:n,className:i="table-of-contents table-of-contents__left-border",linkClassName:l="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:h,...p}=e;const f=(0,o.p)(),x=d??f.tableOfContents.minHeadingLevel,I=h??f.tableOfContents.maxHeadingLevel,y=function(e){let{toc:n,minHeadingLevel:i,maxHeadingLevel:o}=e;return(0,t.useMemo)((()=>s({toc:a(n),minHeadingLevel:i,maxHeadingLevel:o})),[n,i,o])}({toc:n,minHeadingLevel:x,maxHeadingLevel:I});return r((0,t.useMemo)((()=>{if(l&&c)return{linkClassName:l,linkActiveClassName:c,minHeadingLevel:x,maxHeadingLevel:I}}),[l,c,x,I])),(0,u.jsx)(m,{toc:y,className:i,linkClassName:l,...p})}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>l});var t=i(6540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);