import { hc } from "hono/client";
import { type ApiRoutes } from "./app";

const client = hc<ApiRoutes>("localhost:3000");
client.api.auth
  .$get()
  .then((res) => res.json())
  .then((res) => res.foo);
