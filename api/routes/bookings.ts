import { Hono } from "hono";
import { protect, type AppContext } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { type User } from "@ip3/data";

export const bookingsRoutes = new Hono();

bookingsRoutes.get("/", protect, async (c: AppContext) => {
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const bookings = await prisma.booking.findMany({
    where: {},
  });

  return c.json({ bookings });
});
