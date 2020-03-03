import org.portablescala.sbtplatformdeps.PlatformDepsPlugin.autoImport._
import sbt.Def.{setting => dep}
import sbt._

object Libs {
  val ScalaVersion = "2.13.1"

  val `scalatest` = dep("org.scalatest" %%% "scalatest" % "3.0.8") //Apache License 2.0
}

object Akka {
  val `akka-http` = "com.typesafe.akka" %% "akka-http"   % "10.1.11"
  val `akka-stream` = "com.typesafe.akka" %% "akka-stream" % "2.5.26"
}

object Borer {
  private val Version = "1.4.0"
  private val Org     = "io.bullet"

  val `borer-core`        = dep(Org %%% "borer-core" % Version)
  val `borer-derivation`  = dep(Org %%% "borer-derivation" % Version)
  val `borer-compat-akka` = Org %% "borer-compat-akka" % Version
}
