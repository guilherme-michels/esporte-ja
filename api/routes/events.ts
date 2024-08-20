import { Hono } from "hono";
import { protect } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { EventSchema } from "../schemas/index";

export const eventsRoutes = new Hono();

eventsRoutes.get("/", protect, async (c) => {
  try {
    const events = await prisma.event.findMany({
      include: {
        company: true,
      },
    });
    return c.json(events);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Error fetching events", error }, 500);
  }
});

eventsRoutes.get("/:id", protect, async (c) => {
  const id = c.req.param("id");

  try {
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        company: true,
      },
    });

    if (!event) {
      return c.json({ message: "Event not found" }, 404);
    }

    return c.json(event);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Error fetching event", error }, 500);
  }
});

eventsRoutes.post("/", protect, async (c) => {
  try {
    const data = EventSchema.omit({ id: true, createdAt: true }).parse(
      await c.req.json()
    );

    const event = await prisma.event.create({
      data: {
        title: data.title,
        description: data.description,
        type: data.type,
        date: data.date,
        profileId: data.profileId,
        companyId: data.companyId,
        dateTime: data.dateTime,
        createdAt: new Date(),
      },
    });

    return c.json(event, 201);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Error creating event", error }, 500);
  }
});

eventsRoutes.put("/:id", protect, async (c) => {
  const eventId = c.req.param("id");

  try {
    const { title, description, type, date, profileId, companyId, dateTime } =
      await c.req.json();

    const updatedEvent = await prisma.event.update({
      where: { id: eventId },
      data: {
        title,
        description,
        type,
        date,
        profileId,
        companyId,
        dateTime,
      },
      include: {
        participants: true,
      },
    });

    return c.json(updatedEvent);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Error updating event", error }, 500);
  }
});

eventsRoutes.delete("/:id", protect, async (c) => {
  const id = c.req.param("id");

  try {
    await prisma.event.delete({
      where: { id },
    });
    return c.json({ message: "Event deleted successfully" }, 204);
  } catch (error) {
    console.error(error);
    return c.json({ message: "Error deleting event", error }, 500);
  }
});
