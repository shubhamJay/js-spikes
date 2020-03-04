import { Location, AkkaLocation, HttpLocation } from "./Location"

export class LocationClient {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async getAkkaLocation(): Promise<AkkaLocation[]>{
    console.log(this.baseUrl);

    let res = await fetch(this.baseUrl + "/list/akka")
    return await res.json()
  }

  // async getLocation<T extends Location>(route: string): Promise<T[]> {
  //   // let res = await fetch(this.baseUrl + "/list/" + route)
  //   // let a = await res.json()

  //   let a : Promise<AkkaLocation[]> = new Promise((resolve,reject) => {
  //     resolve([{
  //         name : "asdfa",
  //         actorRef : "asdf"
  //     }])

  //   })

  //   // return a;
  // }

  // getHttpLocation(): Promise<HttpLocation[]> {
  //   return this.getLocation("http")
  // }
}