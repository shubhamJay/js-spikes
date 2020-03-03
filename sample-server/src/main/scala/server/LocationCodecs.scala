package server

import spray.json.DefaultJsonProtocol

trait LocationCodecs extends DefaultJsonProtocol {
  implicit lazy val akkaLocationCodec = jsonFormat2(AkkaLocation)
  implicit lazy val httpLocationCodec = jsonFormat2(HttpLocation)
}

object LocationCodecs extends LocationCodecs
