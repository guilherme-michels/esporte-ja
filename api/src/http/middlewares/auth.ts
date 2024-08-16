import { type Context, type Next } from "hono";
import { Jwt } from "hono/utils/jwt";
import { prisma } from "../../lib/prisma";

export interface AppContext extends Context {
  user?: {
    id: any;
    name: string;
    email: string;
  };
}

export const protect = async (c: AppContext, next: Next) => {
  let token;

  if (
    c.req.header("Authorization") &&
    c.req.header("Authorization")?.startsWith("Bearer ")
  ) {
    try {
      token = c.req.header("Authorization")?.replace(/Bearer\s+/i, "");
      if (!token) {
        return c.json({ message: "Not authorized to access this route" }, 401);
      }

      const secret = Bun.env.JWT_SECRET || "";
      const decoded = await Jwt.verify(token, secret);

      if (
        typeof decoded === "object" &&
        "id" in decoded &&
        typeof decoded.id === "string"
      ) {
        const user = await prisma.user.findUnique({
          where: { id: decoded.id },
          select: { id: true, name: true, email: true, passwordHash: true },
        });

        if (!user) {
          return c.json({ message: "User not found" }, 401);
        }

        c.set("user", user);
        await next();
      } else {
        return c.json({ message: "Invalid token payload" }, 401);
      }
    } catch (err) {
      return c.json({ message: "Invalid token! You are not authorized!" }, 401);
    }
  } else {
    return c.json({ message: "Not authorized! No token found!" }, 401);
  }
};
