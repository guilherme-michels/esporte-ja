import { initTRPC } from "@trpc/server";
import { z } from "zod";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const t = initTRPC.create();

const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ name: z.string().optional() }))
    .query(({ input }) => {
      return `Hello, ${input.name ?? "World"}!`;
    }),
});

const server = createHTTPServer({
  router: appRouter,
});

const ServeEnv = z.object({
  PORT: z
    .string()
    .regex(/^\d+$/, "Port must be a numeric string")
    .default("3000")
    .transform(Number),
});
const ProcessEnv = ServeEnv.parse(process.env);

server.listen(ProcessEnv.PORT);

console.log(`Server is running on port ${ProcessEnv.PORT}`);

export type AppRouter = typeof appRouter;
