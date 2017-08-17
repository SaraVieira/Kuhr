import { Lokka } from "lokka";
import { Transport } from "lokka-transport-http";
const headers = {
  Authorization: `Bearer ${localStorage.getItem("kuhrToken") || ""}`
};

const client = new Lokka({
  transport: new Transport(
    "https://api.graph.cool/simple/v1/cj6dky73136ee0121fpxxelzu",
    { headers }
  )
});

export default client;
