import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/login/callback", (c) => {
  const { req, res } = c;
  const code = req.query("code");
  if (!code) return c.text("Code not found");
  return c.json({ code: code });
});

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
