// import { serve } from "./deps.ts";
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const env = Deno.env.toObject()

const PORT = env.PORT || 8080;

const s = serve(`0.0.0.0:${PORT}`);

const body = new TextEncoder().encode("Hello Deno!\n");

console.log(`Server started on port ${PORT}`);

for await (const req of s) {
  req.respond({ body });
}