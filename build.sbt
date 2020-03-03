

lazy val `sample-server` = project
  .in(file("sample-server"))
  .settings(
    libraryDependencies ++= Seq(
      Libs.`scalatest`.value,
      Akka.`akka-http`,
      Akka.`akka-stream`,
      Borer.`borer-compat-akka`,
      Borer.`borer-core`,
      Borer.`borer-derivation`
    )
  )

