/**
 * Server con deno
 */

import { serve } from "https://deno.land/std@0.50.0/http/server.ts"; //Usamos notación ES para los import
const s = serve({ port: 8000 });   //Invocamos la uncion serve y le pasamos un puerto
console.log("http://localhost:8000/"); //Se muestra el mensaje de running
for await (const req of s) {     //Para cada petición se responde con:
  req.respond({ body: "Hello World\n" });
}