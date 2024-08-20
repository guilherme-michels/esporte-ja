import { Hono } from "hono";
import { protect, type AppContext } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { type User, type SportTypeType } from "../schemas/index";

export const courtsRoutes = new Hono();

interface CourtsContext extends AppContext {
  get(key: "user"): User;
}

courtsRoutes.post("/", async (c: CourtsContext) => {
  const user = c.get("user");

  const { name, type, companyId } = await c.req.json();

  const company = await prisma.company.findUnique({
    where: { id: companyId },
    include: { owner: true },
  });

  if (!company || company.ownerId !== user.id) {
    return c.json(
      { message: "Not authorized to add a court to this company" },
      403
    );
  }

  const newCourt = await prisma.court.create({
    data: {
      name,
      type,
      companyId,
    },
  });

  return c.json({ court: newCourt });
});

courtsRoutes.put("/:id", protect, async (c: CourtsContext) => {
  const user = c.get("user");
  const courtId = c.req.param("id");

  const { name, type } = await c.req.json();

  const court = await prisma.court.findUnique({
    where: { id: courtId },
    include: {
      company: {
        include: { owner: true },
      },
    },
  });

  if (!court || court.company.ownerId !== user.id) {
    return c.json({ message: "Not authorized to update this court" }, 403);
  }

  const updatedCourt = await prisma.court.update({
    where: { id: courtId },
    data: {
      name,
      type,
    },
  });

  return c.json({ court: updatedCourt });
});

courtsRoutes.delete("/:id", protect, async (c: CourtsContext) => {
  const user = c.get("user");
  const courtId = c.req.param("id");

  const court = await prisma.court.findUnique({
    where: { id: courtId },
    include: {
      company: {
        include: { owner: true },
      },
    },
  });

  if (!court || court.company.ownerId !== user.id) {
    return c.json({ message: "Not authorized to delete this court" }, 403);
  }

  await prisma.court.delete({
    where: { id: courtId },
  });

  return c.json({ message: "Court deleted successfully" });
});

courtsRoutes.get("/:id", async (c: AppContext) => {
  const courtId = c.req.param("id");

  const court = await prisma.court.findUnique({
    where: { id: courtId },
    include: {
      company: {
        include: { owner: true },
      },
    },
  });

  if (!court) {
    return c.json({ message: "Court not found" }, 404);
  }

  return c.json({ court });
});

courtsRoutes.get(
  "/company/:companyId/courts/:sportType",
  protect,
  async (c: CourtsContext) => {
    const user = c.get("user");
    const companyId = c.req.param("companyId");
    const sportType = c.req.param("sportType") as SportTypeType;

    if (!Object.values(sportType).includes(sportType)) {
      return c.json({ message: "Invalid sport type" }, 400);
    }

    const company = await prisma.company.findUnique({
      where: { id: companyId },
      include: { owner: true },
    });

    if (!company || company.ownerId !== user.id) {
      return c.json(
        { message: "Not authorized to view courts for this company" },
        403
      );
    }

    const courts = await prisma.court.findMany({
      where: {
        companyId,
        type: sportType,
      },
    });

    return c.json({ courts });
  }
);
