import { type Context } from "hono";

export const errorHandler = (c: Context) => {
  console.log(c.res.status);

  return c.json({
    success: false,
    message: c.error?.message,
    stack: process.env.NODE_ENV === "production" ? null : c.error?.stack,
  });
};

export const notFound = (c: Context) => {
  return c.json({
    success: false,
    message: `Not Found - [${c.req.method}] ${c.req.url}`,
  });
};
