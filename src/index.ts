import { allroutes } from "./routes/routes";
import { serve } from "@hono/node-server";

const port = 3000;

serve(
  {
    fetch: allroutes.fetch,
    port,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
