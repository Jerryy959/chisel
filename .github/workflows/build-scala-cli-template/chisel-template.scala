//> using repository "sonatype:snapshots"
//> using scala "2.13.10"
//> using dep "edu.berkeley.cs::chisel3::@VERSION@"
//> using plugin "edu.berkeley.cs:::chisel3-plugin::@VERSION@"
//> using options "-unchecked", "-deprecation", "-language:reflectiveCalls", "-feature", "-Xcheckinit", "-Xfatal-warnings", "-Ywarn-dead-code", "-Ywarn-unused", "-Ymacro-annotations"

import chisel3._
// _root_ disambiguates from package chisel3.util.circt if user imports chisel3.util._
import _root_.circt.stage.ChiselStage

class Foo extends Module {
  val a, b, c = IO(Input(Bool()))
  val d, e, f = IO(Input(Bool()))
  val foo, bar = IO(Input(UInt(8.W)))
  val out = IO(Output(UInt(8.W)))

  val myReg = RegInit(0.U(8.W))
  out := myReg

  when(a && b && c) {
    myReg := foo
  }
  when(d && e && f) {
    myReg := bar
  }
}

object Main extends App {
  println(
    ChiselStage.emitSystemVerilog(
      gen = new Foo,
      firtoolOpts = Array("-disable-all-randomization", "-strip-debug-info")
    )
  )
}
