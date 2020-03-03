package server

sealed trait Location

object Location {
  case class AkkaLocation(name: String, actorRef: String) extends Location
  case class HttpLocation(name: String, uri: String) extends Location
}
