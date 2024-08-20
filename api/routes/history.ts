import { Hono } from "hono";
import { protect, type AppContext } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { type User } from "../schemas/index";

export const historiesRoutes = new Hono();

historiesRoutes.get("/", protect, async (c: AppContext) => {
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const histories = await prisma.history.findMany({
    where: {
      userId: user.id,
    },
    include: {
      booking: true,
      event: true,
    },
  });

  return c.json({ histories });
});

historiesRoutes.get("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();

  const history = await prisma.history.findUnique({
    where: { id },
    include: {
      booking: true,
      event: true,
    },
  });

  if (!history) {
    return c.json({ message: "History not found" }, 404);
  }

  return c.json({ history });
});

historiesRoutes.post("/", protect, async (c: AppContext) => {
  const { userId, bookingId, eventId, result } = await c.req.json();

  const newHistory = await prisma.history.create({
    data: {
      userId,
      bookingId,
      eventId,
      result,
    },
  });

  return c.json({ history: newHistory }, 201);
});

historiesRoutes.put("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const { result, bookingId, eventId } = await c.req.json();

  const updatedHistory = await prisma.history.update({
    where: { id },
    data: {
      result,
      bookingId,
      eventId,
    },
  });

  return c.json({ history: updatedHistory });
});

historiesRoutes.delete("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();

  const history = await prisma.history.findUnique({
    where: { id },
  });

  if (!history) {
    return c.json({ message: "History not found" }, 404);
  }

  await prisma.history.delete({
    where: { id },
  });

  return c.json({ message: "History deleted successfully" });
});

export default historiesRoutes;
