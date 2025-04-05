console.log("🚀 Starting server setup...");

import { swaggerUI } from "@hono/swagger-ui";
import { allroutes } from "./routes/routes.js"; // 👈 Use .js if using ES modules
import { serve } from "@hono/node-server";

// Use Azure PORT if set, otherwise default to 3000
const port = parseInt(process.env.PORT || "3000", 10);

// Simple root route for testing
allroutes.get("/", (c) => c.text("✅ HackerNews API is running!"));

// Generate random number route
allroutes.get("/generate", (context) => {
  const randomNumber = Math.floor(Math.random() * 1000);
  return context.json({ randomNumber }, 200);
});

//Swagger UI
allroutes.use("/ui", swaggerUI({ url: "/swagger" }));

// Swagger Spec
allroutes.get("/swagger", (c) =>
  c.json({
    openapi: "3.0.0",
    info: {
      title: "HackerNews API",
      version: "1.0.0",
    },
    paths: {
      "/generate": {
        get: {
          summary: "Get a random number",
          responses: {
            200: {
              description: "Random number",
              content: {
                "application/json": {
                  schema: {
                    type: "object",
                    properties: {
                      randomNumber: {
                        type: "number",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  })
);
console.log("📡 Binding server on port:", port);

serve(
  {
    fetch: allroutes.fetch,
    port,
  },
  (info) => {
    console.log(`✅ Server is running on http://localhost:${info.port}`);
  }
);
