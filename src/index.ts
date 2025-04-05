console.log("🚀 Starting server setup...");

import { allroutes } from "./routes/routes";
import { serve } from "@hono/node-server";

const port = 3000;
allroutes.get("/generate", (context) => {
  const randomNumber = Math.floor(Math.random() * 1000);

  return context.json(
    {
      randomNumber,
    },
    200
  );
});


console.log("📡 Binding server...");

serve(
  {
    fetch: allroutes.fetch,
    port,
  },
  (info) => {
    console.log(`✅ Server is running on http://localhost:${info.port}`);
  }
);
