package server

import akka.Done
import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport._
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.Route

object Routes {
  import LocationCodecs._

  var akkaLocation = List.empty[AkkaLocation]
  var httpLocation = List.empty[HttpLocation]

  lazy val routes: Route = get {
    pathPrefix("list") {
      path("akka") {
        complete(akkaLocation)
      } ~ path("http") {
        complete(httpLocation)
      }
    }
  } ~ post {
    pathPrefix("register") {
      path("akka") {
        entity(as[AkkaLocation]) { location =>
          akkaLocation = akkaLocation :+ location
          complete(Done)
        }
      } ~ path("http") {
        entity(as[HttpLocation]) { location =>
          httpLocation = httpLocation :+ location
          complete(Done)
        }
      }
    }
  }
}
