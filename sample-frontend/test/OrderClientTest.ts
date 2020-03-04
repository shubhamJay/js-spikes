import { LocationClient } from "../src/LocationClient"
import { Pact } from "@pact-foundation/pact"

describe("pact", () => {
  it("first test", () => {

    const provider = new Pact({
      port: 1234,
      log: process.cwd() + "./pact.log",
      dir: process.cwd() + "./pacts",
      consumer: "OrderWeb",
      provider: "OrderApi"
    });

    provider.setup().then(() => {
      provider.addInteraction({
        state: 'there are orders',
        uponReceiving: 'a request for orders',
        withRequest: {
          path: '/list/akka',
          method: 'GET',
        },
        willRespondWith: {
          body: [
            {
              name: 'burger',
              actorRef: 'actorref'
            }
          ],
          status: 200,
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
        },
      }).then(() => {
        console.log("hitting request +++++++++++++");
        new LocationClient("http://localhost:1234").getAkkaLocation().then(res => {
          console.log(res);
        })
      })
    })
  })
})
