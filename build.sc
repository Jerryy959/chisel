import mill._
import mill.scalalib._
import mill.scalalib.publish._
import mill.scalalib.scalafmt._
import coursier.maven.MavenRepository

object chisel3 extends mill.Cross[chisel3CrossModule]("2.13.10", "2.12.17")

// The following stanza is searched for and used when preparing releases.
// Please retain it.
// Provide a managed dependency on X if -DXVersion="" is supplied on the command line.
val defaultVersions = Map(
  "firrtl" -> "1.6-SNAPSHOT",
)

def getVersion(dep: String, org: String = "edu.berkeley.cs") = {
  val version = sys.env.getOrElse(dep + "Version", defaultVersions(dep))
  ivy"$org::$dep:$version"
}
// Do not remove the above logic, it is needed by the release automation

object v {
  val firrtl = getVersion("firrtl")
  val chiseltest = ivy"edu.berkeley.cs::chiseltest:0.6-SNAPSHOT"
  val scalatest = ivy"org.scalatest::scalatest:3.2.15"
  val scalacheck = ivy"org.scalatestplus::scalacheck-1-14:3.2.2.0"
  val osLib = ivy"com.lihaoyi::os-lib:0.8.1"
  val upickle = ivy"com.lihaoyi::upickle:2.0.0"
  val macroParadise = ivy"org.scalamacros:::paradise:2.1.1"
}

// Since chisel contains submodule core and macros, a CommonModule is needed
trait CommonModule extends CrossSbtModule with PublishModule with ScalafmtModule {
  def firrtlModule: Option[PublishModule] = None

  def firrtlIvyDeps = if (firrtlModule.isEmpty)
    Agg(
      v.firrtl
    )
  else Agg.empty[Dep]

  def chiseltestModule: Option[PublishModule] = None

  def chiseltestIvyDeps = if (chiseltestModule.isEmpty)
    Agg(
      v.chiseltest
    )
  else Agg.empty[Dep]

  override def moduleDeps = super.moduleDeps ++ firrtlModule

  override def ivyDeps = super.ivyDeps() ++ Agg(
    v.osLib,
    v.upickle
  ) ++ firrtlIvyDeps

  def publishVersion = "3.6-SNAPSHOT"

  // 2.12.10 -> Array("2", "12", "10") -> "12" -> 12
  protected def majorVersion = crossScalaVersion.split('.')(1).toInt

  override def repositories = super.repositories ++ Seq(
    MavenRepository("https://oss.sonatype.org/content/repositories/snapshots"),
    MavenRepository("https://oss.sonatype.org/content/repositories/releases")
  )
<<<<<<< HEAD
=======
  val scalaCrossVersions = Seq(
    "2.13.12"
  )
  val osLib = ivy"com.lihaoyi::os-lib:0.9.1"
  val upickle = ivy"com.lihaoyi::upickle:3.1.0"
  val firtoolResolver = ivy"org.chipsalliance::firtool-resolver:1.0.0"
  val scalatest = ivy"org.scalatest::scalatest:3.2.14"
  val scalacheck = ivy"org.scalatestplus::scalacheck-1-15:3.2.11.0"
  val json4s = ivy"org.json4s::json4s-native:4.0.6"
  val dataclass = ivy"io.github.alexarchambault::data-class:0.2.5"
  val commonText = ivy"org.apache.commons:commons-text:1.10.0"
  val scopt = ivy"com.github.scopt::scopt:3.7.1"
>>>>>>> 3938a465e (Switch to firtool-resolver (#3458))

  override def scalacOptions = T {
    super.scalacOptions() ++ Agg(
      "-deprecation",
      "-feature"
    ) ++ (if (majorVersion == 13) Agg("-Ymacro-annotations") else Agg.empty[String])
  }

  override def compileIvyDeps = if (majorVersion == 13) super.compileIvyDeps else Agg(v.macroParadise)

  override def scalacPluginIvyDeps = if (majorVersion == 13) super.compileIvyDeps else Agg(v.macroParadise)

  def pomSettings = PomSettings(
    description = artifactName(),
    organization = "edu.berkeley.cs",
    url = "https://www.chisel-lang.org",
    licenses = Seq(License.`Apache-2.0`),
    versionControl = VersionControl.github("freechipsproject", "chisel3"),
    developers = Seq(
      Developer("jackbackrack", "Jonathan Bachrach", "https://eecs.berkeley.edu/~jrb/")
    )
  )
}

class chisel3CrossModule(val crossScalaVersion: String) extends CommonModule {
  m =>

  /** Default behavior assumes `build.sc` in the upper path of `src`.
    * This override makes `src` folder stay with `build.sc` in the same directory,
    * If chisel3 is used as a sub-project, [[millSourcePath]] should be overridden to the folder where `src` located.
    */
  override def millSourcePath = super.millSourcePath / os.up

  override def mainClass = T {
    Some("chisel3.stage.ChiselMain")
  }

  override def moduleDeps = super.moduleDeps ++ Seq(macros, core)

  override def scalacPluginClasspath = T {
    super.scalacPluginClasspath() ++ Agg(
      plugin.jar()
    )
  }

  override def scalacOptions = T {
    super.scalacOptions() ++ Agg(s"-Xplugin:${plugin.jar().path}")
  }

  object stdlib extends CommonModule {
    override def moduleDeps = super.moduleDeps ++ Agg(m)

    override def millSourcePath = m.millSourcePath / "stdlib"

    override def crossScalaVersion = m.crossScalaVersion

<<<<<<< HEAD
    override def scalacPluginClasspath = T { m.scalacPluginClasspath() }
  }

  object test extends Tests with TestModule.ScalaTest with ScalafmtModule {
    override def scalacPluginClasspath = T { m.scalacPluginClasspath() }

    override def ivyDeps = m.ivyDeps() ++ Agg(
      v.scalatest,
      v.scalacheck
    )

    override def moduleDeps = super.moduleDeps
  }

  object `integration-tests` extends Tests with TestModule.ScalaTest with ScalafmtModule {
    override def sources = T.sources(millSourcePath / "integration-tests" / "src" / "test" / "scala")
    override def ivyDeps = m.ivyDeps() ++ Agg(
      v.scalatest,
      v.scalacheck
    ) ++ m.chiseltestIvyDeps

    override def moduleDeps = super.moduleDeps ++ Seq(stdlib) ++ chiseltestModule
  }

  object macros extends CommonModule {

    /** millOuterCtx.segment.pathSegments didn't detect error here. */
    override def millSourcePath = m.millSourcePath / "macros"

    override def crossScalaVersion = m.crossScalaVersion

    override def firrtlModule = m.firrtlModule
  }

  object core extends CommonModule {

    /** millOuterCtx.segment.pathSegments didn't detect error here. */
    override def millSourcePath = m.millSourcePath / "core"

    override def crossScalaVersion = m.crossScalaVersion

    override def moduleDeps = super.moduleDeps ++ Seq(macros)

    override def firrtlModule = m.firrtlModule

    def scalacOptions = T {
      super.scalacOptions() ++ Seq(
        "-deprecation",
        "-explaintypes",
        "-feature",
        "-language:reflectiveCalls",
        "-unchecked",
        "-Xcheckinit",
        "-Xlint:infer-any"
      )
    }
  private def generateBuildInfo = T {
    val outputFile = T.dest / "BuildInfo.scala"
=======
  def firtoolResolverModuleIvy = v.firtoolResolver

  def firtoolVersion = T {
    val contents = os.read(os.pwd / "etc" / "circt.json")
    val read = upickle.default.read[Map[String, String]](contents)
    read("version").stripPrefix("firtool-")
  }

  def buildVersion = T("build-from-source")

  private def generateBuildInfo = T {
    val outputFile = T.dest / "chisel3" / "BuildInfo.scala"
    val firtoolVersionString = "Some(\"" + firtoolVersion() + "\")"
>>>>>>> 3938a465e (Switch to firtool-resolver (#3458))
    val contents =
      s"""
         |package chisel3
         |case object BuildInfo {
         |  val buildInfoPackage: String = "chisel3"
         |  val version: String = "${publishVersion()}"
         |  val scalaVersion: String = "${scalaVersion()}"
         |  val firtoolVersion: scala.Option[String] = None
         |  override val toString: String = {
         |    "buildInfoPackage: %s, version: %s, scalaVersion: %s, firtoolVersion %s".format(
         |        buildInfoPackage, version, scalaVersion, firtoolVersion
         |    )
         |  }
         |}
         |""".stripMargin
    os.write(outputFile, contents, createFolders = true)
    PathRef(T.dest)
  }

  override def generatedSources = T {
    super.generatedSources() :+ generateBuildInfo()
  }
  }

  object plugin extends CommonModule {

    /** millOuterCtx.segment.pathSegments didn't detect error here. */
    override def millSourcePath = m.millSourcePath / "plugin"

    override def crossScalaVersion = m.crossScalaVersion

    override def firrtlModule = m.firrtlModule

    override def ivyDeps = Agg(
      ivy"${scalaOrganization()}:scala-library:$crossScalaVersion"
    ) ++ (if (majorVersion == 13) Agg(ivy"${scalaOrganization()}:scala-compiler:$crossScalaVersion")
          else Agg.empty[Dep])

    def scalacOptions = T {
      Seq(
        "-Xfatal-warnings"
      )
    }

    override def artifactName = "chisel3-plugin"
  }

  // make mill publish sbt compatible package
  override def artifactName = "chisel3"
}
