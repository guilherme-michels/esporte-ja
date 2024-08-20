import { Hono } from "hono";
import { protect, type AppContext } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { type User } from "../schemas/index";

export const bookingsRoutes = new Hono();

bookingsRoutes.get("/", async (c: AppContext) => {
  // const user = c.get("user") as User;

  // if (!user) {
  //   return c.json({ message: "User not found" }, 404);
  // }

  const bookings = await prisma.booking.findMany({
    include: {
      user: true,
      court: true,
      invite: true,
      history: true,
    },
  });

  return c.json({ bookings });
});

bookingsRoutes.get("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const booking = await prisma.booking.findUnique({
    where: { id },
    include: {
      user: true,
      court: true,
      invite: true,
      history: true,
    },
  });

  if (!booking) {
    return c.json({ message: "Booking not found" }, 404);
  }

  return c.json({ booking });
});

bookingsRoutes.post("/", protect, async (c: AppContext) => {
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const { dateTime, userId, courtId, inviteId } = await c.req.json();

  const newBooking = await prisma.booking.create({
    data: {
      dateTime,
      userId,
      courtId,
      invite: {
        connect: { id: inviteId },
      },
    },
    include: {
      user: true,
      court: true,
      invite: true,
      history: true,
    },
  });

  return c.json({ booking: newBooking }, 201);
});

bookingsRoutes.put("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const { dateTime, courtId, inviteId } = await c.req.json();

  const updatedBooking = await prisma.booking.update({
    where: { id },
    data: {
      dateTime,
      courtId,
      invite: {
        connect: { id: inviteId },
      },
    },
    include: {
      user: true,
      court: true,
      invite: true,
      history: true,
    },
  });

  return c.json({ booking: updatedBooking });
});
