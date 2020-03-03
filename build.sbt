

lazy val `sample-server` = project
  .in(file("sample-server"))
  .settings(
    libraryDependencies ++= Seq(
      Libs.`scalatest`.value,
      Akka.`akka-http`,
      Akka.`akka-stream`,
      Akka.`akka-http-spray-json`
    )
  )

