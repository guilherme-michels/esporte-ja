import { Hono } from "hono";
import { protect, type AppContext } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { type User } from "@ip3/data";

export const availabilitiesRoutes = new Hono();

availabilitiesRoutes.get("/", protect, async (c: AppContext) => {
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const availabilities = await prisma.availability.findMany({
    include: {
      court: true,
    },
  });

  return c.json({ availabilities });
});

availabilitiesRoutes.get("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const availability = await prisma.availability.findUnique({
    where: { id },
    include: {
      court: true,
    },
  });

  if (!availability) {
    return c.json({ message: "Availability not found" }, 404);
  }

  return c.json({ availability });
});

availabilitiesRoutes.post("/", protect, async (c: AppContext) => {
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const { courtId, startTime, endTime, dayOfWeek } = await c.req.json();

  const newAvailability = await prisma.availability.create({
    data: {
      courtId,
      startTime,
      endTime,
      dayOfWeek,
    },
    include: {
      court: true,
    },
  });

  return c.json({ availability: newAvailability }, 201);
});

availabilitiesRoutes.put("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const { startTime, endTime } = await c.req.json();

  const updatedAvailability = await prisma.availability.update({
    where: { id },
    data: {
      startTime,
      endTime,
    },
    include: {
      court: true,
    },
  });

  return c.json({ availability: updatedAvailability });
});

availabilitiesRoutes.delete("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const availability = await prisma.availability.findUnique({
    where: { id },
  });

  if (!availability) {
    return c.json({ message: "Availability not found" }, 404);
  }

  await prisma.availability.delete({
    where: { id },
  });

  return c.json({ message: "Availability deleted successfully" });
});
