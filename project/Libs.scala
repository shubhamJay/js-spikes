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
  val `akka-http-spray-json` = "com.typesafe.akka" %% "akka-http-spray-json" % "10.1.7"
}
