package server

import akka.Done
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route

object Routes {

  var locations = List.empty[Location]

  lazy val routes: Route = get {
    path("list") {
      complete(locations)
    }
  } ~ post {
    path("register") {
      entity(as[Location]) { location =>
        locations = locations :+ location
        complete(Done)
      }
    }
  }
}
