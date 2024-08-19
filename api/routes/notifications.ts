import { Hono } from "hono";
import { protect, type AppContext } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { type User } from "@ip3/data";

export const notificationsRoutes = new Hono();

notificationsRoutes.get("/", protect, async (c: AppContext) => {
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const notifications = await prisma.notification.findMany({
    where: {
      userId: user.id,
    },
  });

  return c.json({ notifications });
});

notificationsRoutes.get("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();

  const notification = await prisma.notification.findUnique({
    where: { id },
  });

  if (!notification) {
    return c.json({ message: "Notification not found" }, 404);
  }

  return c.json({ notification });
});

notificationsRoutes.post("/", protect, async (c: AppContext) => {
  const { type, message, userId } = await c.req.json();

  const newNotification = await prisma.notification.create({
    data: {
      type,
      message,
      userId,
    },
  });

  return c.json({ notification: newNotification }, 201);
});

notificationsRoutes.put("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const { type, message, read } = await c.req.json();

  const updatedNotification = await prisma.notification.update({
    where: { id },
    data: {
      type,
      message,
      read,
    },
  });

  return c.json({ notification: updatedNotification });
});

notificationsRoutes.delete("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();

  const notification = await prisma.notification.findUnique({
    where: { id },
  });

  if (!notification) {
    return c.json({ message: "Notification not found" }, 404);
  }

  await prisma.notification.delete({
    where: { id },
  });

  return c.json({ message: "Notification deleted successfully" });
});

export default notificationsRoutes;
