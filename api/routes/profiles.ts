import { Hono } from "hono";
import { protect, type AppContext } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { type User } from "@ip3/data";

export const profilesRoutes = new Hono();

profilesRoutes.get("/", protect, async (c: AppContext) => {
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const profiles = await prisma.profile.findMany({
    include: {
      user: true,
    },
  });

  return c.json({ profiles });
});

profilesRoutes.get("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const profile = await prisma.profile.findUnique({
    where: { id },
    include: {
      user: true,
    },
  });

  if (!profile) {
    return c.json({ message: "Profile not found" }, 404);
  }

  return c.json({ profile });
});

profilesRoutes.post("/", protect, async (c: AppContext) => {
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const { bio, level, matchesPlayed, wins, losses } = await c.req.json();

  const newProfile = await prisma.profile.create({
    data: {
      bio,
      level,
      matchesPlayed,
      wins,
      losses,
      userId: user.id,
    },
    include: {
      user: true,
    },
  });

  return c.json({ profile: newProfile }, 201);
});

profilesRoutes.put("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const { bio, level, matchesPlayed, wins, losses } = await c.req.json();

  const updatedProfile = await prisma.profile.update({
    where: { id },
    data: {
      bio,
      level,
      matchesPlayed,
      wins,
      losses,
    },
    include: {
      user: true,
    },
  });

  return c.json({ profile: updatedProfile });
});

profilesRoutes.delete("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const profile = await prisma.profile.findUnique({
    where: { id },
  });

  if (!profile) {
    return c.json({ message: "Profile not found" }, 404);
  }

  await prisma.profile.delete({
    where: { id },
  });

  return c.json({ message: "Profile deleted successfully" });
});
