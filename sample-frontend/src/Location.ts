export interface HttpLocation {name: String, uri: String}
export interface AkkaLocation {name: String, actorRef: String}

export type Location =  HttpLocation | AkkaLocation
