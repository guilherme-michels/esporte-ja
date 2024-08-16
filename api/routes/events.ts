import { Hono } from "hono";
import { protect } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { EventSchema, type Event } from "@ip3/data";

export const eventsRoutes = new Hono();

eventsRoutes.get("/", protect, async (c) => {
  const events: Event[] = await prisma.event.findMany({
    include: {
      court: true,
    },
  });

  return c.json(events);
});

eventsRoutes.get("/:id", protect, async (c) => {
  const id = c.req.param("id");

  const event: Event | null = await prisma.event.findUnique({
    where: { id },
    include: {
      court: true,
    },
  });

  if (!event) {
    return c.json({ message: "Event not found" }, 404);
  }

  return c.json(event);
});

eventsRoutes.post("/", protect, async (c) => {
  const data = EventSchema.omit({ id: true, createdAt: true }).parse(
    await c.req.json()
  );

  const event: Event = await prisma.event.create({
    data: {
      name: data.name,
      type: data.type,
      description: data.description,
      dateTime: data.dateTime,
      courtId: data.courtId,
    },
  });

  return c.json(event, 201);
});

eventsRoutes.put("/:id", protect, async (c) => {
  const user = c.get("user");
  const eventId = c.req.param("id");

  const { name, type, description, dateTime, courtId } = await c.req.json();

  const event: Event | null = await prisma.event.findUnique({
    where: { id: eventId },
    include: {
      court: true,
    },
  });

  const updatedEvent: Event = await prisma.event.update({
    where: { id: eventId },
    data: {
      name,
      type,
      description,
      dateTime,
      courtId,
    },
  });

  return c.json({ event: updatedEvent });
});

eventsRoutes.delete("/:id", protect, async (c) => {
  const id = c.req.param("id");

  await prisma.event.delete({
    where: { id },
  });

  return c.json({ message: "Event deleted successfully" }, 204);
});
