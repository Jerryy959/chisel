"use strict";(self.webpackChunkchisel_lang=self.webpackChunkchisel_lang||[]).push([[5734],{8912:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>r});var t=i(5893),l=i(1151);const o={layout:"docs",title:"Blackboxes",section:"chisel3"},s="BlackBoxes",a={id:"explanations/blackboxes",title:"Blackboxes",description:"Chisel BlackBoxes are used to instantiate externally defined modules. This construct is useful",source:"@site/docs/explanations/blackboxes.md",sourceDirName:"explanations",slug:"/explanations/blackboxes",permalink:"/docs/explanations/blackboxes",draft:!1,unlisted:!1,editUrl:"https://github.com/chipsalliance/chisel/tree/main/docs/src/explanations/blackboxes.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"Blackboxes",section:"chisel3"},sidebar:"chiselSidebar",previous:{title:"Annotations",permalink:"/docs/explanations/annotations"},next:{title:"Bundles and Vecs",permalink:"/docs/explanations/bundles-and-vecs"}},c={},r=[{value:"Parameterization",id:"parameterization",level:3},{value:"Providing Implementations for Blackboxes",id:"providing-implementations-for-blackboxes",level:3},{value:"Blackboxes with Verilog in a Resource File",id:"blackboxes-with-verilog-in-a-resource-file",level:3},{value:"Blackboxes with In-line Verilog",id:"blackboxes-with-in-line-verilog",level:3},{value:"Under the Hood",id:"under-the-hood",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"blackboxes",children:"BlackBoxes"}),"\n",(0,t.jsxs)(n.p,{children:["Chisel ",(0,t.jsx)(n.em,{children:"BlackBoxes"})," are used to instantiate externally defined modules. This construct is useful\nfor hardware constructs that cannot be described in Chisel and for connecting to FPGA or other IP not defined in Chisel."]}),"\n",(0,t.jsxs)(n.p,{children:["Modules defined as a ",(0,t.jsx)(n.code,{children:"BlackBox"})," will be instantiated in the generated Verilog, but no code\nwill be generated to define the behavior of module."]}),"\n",(0,t.jsxs)(n.p,{children:["Unlike Module, ",(0,t.jsx)(n.code,{children:"BlackBox"})," has no implicit clock and reset.\n",(0,t.jsx)(n.code,{children:"BlackBox"}),"'s clock and reset ports must be explicitly declared and connected to input signals.\nPorts declared in the IO Bundle will be generated with the requested name (ie. no preceding ",(0,t.jsx)(n.code,{children:"io_"}),")."]}),"\n",(0,t.jsx)(n.h3,{id:"parameterization",children:"Parameterization"}),"\n",(0,t.jsx)(n.p,{children:"Verilog parameters can be passed as an argument to the BlackBox constructor."}),"\n",(0,t.jsx)(n.p,{children:"For example, consider instantiating a Xilinx differential clock buffer (IBUFDS) in a Chisel design:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.util._\nimport chisel3.experimental._ // To enable experimental features\n\nclass IBUFDS extends BlackBox(Map("DIFF_TERM" -> "TRUE",\n                                  "IOSTANDARD" -> "DEFAULT")) {\n  val io = IO(new Bundle {\n    val O = Output(Clock())\n    val I = Input(Clock())\n    val IB = Input(Clock())\n  })\n}\n\nclass Top extends Module {\n  val io = IO(new Bundle {})\n  val ibufds = Module(new IBUFDS)\n  // connecting one of IBUFDS\'s input clock ports to Top\'s clock signal\n  ibufds.io.I := clock\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In the Chisel-generated Verilog code, ",(0,t.jsx)(n.code,{children:"IBUFDS"})," will be instantiated as:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:'IBUFDS #(.DIFF_TERM("TRUE"), .IOSTANDARD("DEFAULT")) ibufds (\n  .IB(ibufds_IB),\n  .I(ibufds_I),\n  .O(ibufds_O)\n);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"providing-implementations-for-blackboxes",children:"Providing Implementations for Blackboxes"}),"\n",(0,t.jsx)(n.p,{children:"Chisel provides the following ways of delivering the code underlying the blackbox.  Consider the following blackbox that\nadds two real numbers together.  The numbers are represented in chisel3 as 64-bit unsigned integers."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:"import chisel3._\nclass BlackBoxRealAdd extends BlackBox {\n  val io = IO(new Bundle {\n    val in1 = Input(UInt(64.W))\n    val in2 = Input(UInt(64.W))\n    val out = Output(UInt(64.W))\n  })\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"The implementation is described by the following verilog"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-verilog",children:"module BlackBoxRealAdd(\n    input  [63:0] in1,\n    input  [63:0] in2,\n    output reg [63:0] out\n);\n  always @* begin\n    out <= $realtobits($bitstoreal(in1) + $bitstoreal(in2));\n  end\nendmodule\n"})}),"\n",(0,t.jsx)(n.h3,{id:"blackboxes-with-verilog-in-a-resource-file",children:"Blackboxes with Verilog in a Resource File"}),"\n",(0,t.jsxs)(n.p,{children:["In order to deliver the verilog snippet above to the backend simulator, chisel3 provides the following tools based on the chisel/firrtl ",(0,t.jsx)(n.a,{href:"../explanations/annotations",children:"annotation system"}),".  Add the trait ",(0,t.jsx)(n.code,{children:"HasBlackBoxResource"})," to the declaration, and then call a function in the body to say where the system can find the verilog.  The Module now looks like"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.util.HasBlackBoxResource\n\nclass BlackBoxRealAdd extends BlackBox with HasBlackBoxResource {\n  val io = IO(new Bundle {\n    val in1 = Input(UInt(64.W))\n    val in2 = Input(UInt(64.W))\n    val out = Output(UInt(64.W))\n  })\n  addResource("/real_math.v")\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The verilog snippet above gets put into a resource file names ",(0,t.jsx)(n.code,{children:"real_math.v"}),".  What is a resource file? It comes from\na java convention of keeping files in a project that are automatically included in library distributions. In a typical\nchisel3 project, see ",(0,t.jsx)(n.a,{href:"https://github.com/ucb-bar/chisel-template",children:"chisel-template"}),", this would be a directory in the\nsource hierarchy: ",(0,t.jsx)(n.code,{children:"src/main/resources/real_math.v"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"blackboxes-with-in-line-verilog",children:"Blackboxes with In-line Verilog"}),"\n",(0,t.jsxs)(n.p,{children:["It is also possible to place this verilog directly in the scala source.  Instead of ",(0,t.jsx)(n.code,{children:"HasBlackBoxResource"})," use\n",(0,t.jsx)(n.code,{children:"HasBlackBoxInline"})," and instead of ",(0,t.jsx)(n.code,{children:"setResource"})," use ",(0,t.jsx)(n.code,{children:"setInline"}),".  The code will look like this."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-scala",children:'import chisel3._\nimport chisel3.util.HasBlackBoxInline\nclass BlackBoxRealAdd extends BlackBox with HasBlackBoxInline {\n  val io = IO(new Bundle {\n    val in1 = Input(UInt(64.W))\n    val in2 = Input(UInt(64.W))\n    val out = Output(UInt(64.W))\n  })\n  setInline("BlackBoxRealAdd.v",\n    """module BlackBoxRealAdd(\n      |    input  [15:0] in1,\n      |    input  [15:0] in2,\n      |    output [15:0] out\n      |);\n      |always @* begin\n      |  out <= $realtobits($bitstoreal(in1) + $bitstoreal(in2));\n      |end\n      |endmodule\n    """.stripMargin)\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This technique will copy the inline verilog into the target directory under the name ",(0,t.jsx)(n.code,{children:"BlackBoxRealAdd.v"})]}),"\n",(0,t.jsx)(n.h3,{id:"under-the-hood",children:"Under the Hood"}),"\n",(0,t.jsxs)(n.p,{children:["This mechanism of delivering verilog content to the testing backends is implemented via chisel/firrtl annotations. The\ntwo methods, inline and resource, are two kinds of annotations that are created via the ",(0,t.jsx)(n.code,{children:"setInline"})," and\n",(0,t.jsx)(n.code,{children:"setResource"})," methods calls.  Those annotations are passed through to the chisel-testers which in turn passes them\non to firrtl.  The default firrtl verilog compilers have a pass that detects the annotations and moves the files or\ninline test into the build directory.  For each unique file added, the transform adds a line to a file\n",(0,t.jsx)(n.code,{children:"black_box_verilog_files.f"}),", this file is added to the command line constructed for verilator or vcs to inform them where\nto look.\nThe ",(0,t.jsx)(n.a,{href:"https://github.com/ucb-bar/dsptools",children:"dsptools project"})," is a good example of using this feature to build a real\nnumber simulation tester based on black boxes."]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var t=i(7294);const l={},o=t.createContext(l);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);