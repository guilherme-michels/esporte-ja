import { Hono } from "hono";
import { protect, type AppContext } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { type User } from "../schemas/index";

export const invitesRoutes = new Hono();

invitesRoutes.get("/", protect, async (c: AppContext) => {
  const user = c.get("user") as User;

  if (!user) {
    return c.json({ message: "User not found" }, 404);
  }

  const invites = await prisma.invite.findMany({
    include: {
      author: true,
      court: true,
      booking: true,
    },
  });

  return c.json({ invites });
});

invitesRoutes.get("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();

  const invite = await prisma.invite.findUnique({
    where: { id },
    include: {
      author: true,
      court: true,
      booking: true,
    },
  });

  if (!invite) {
    return c.json({ message: "Invite not found" }, 404);
  }

  return c.json({ invite });
});

invitesRoutes.post("/", protect, async (c: AppContext) => {
  const { email, courtId, authorId, bookingId } = await c.req.json();

  const newInvite = await prisma.invite.create({
    data: {
      email,
      courtId,
      authorId,
      bookingId,
    },
  });

  return c.json({ invite: newInvite }, 201);
});

invitesRoutes.put("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();
  const { email, courtId, authorId, bookingId } = await c.req.json();

  const updatedInvite = await prisma.invite.update({
    where: { id },
    data: {
      email,
      courtId,
      authorId,
      bookingId,
    },
  });

  return c.json({ invite: updatedInvite });
});

invitesRoutes.delete("/:id", protect, async (c: AppContext) => {
  const { id } = c.req.param();

  const invite = await prisma.invite.findUnique({
    where: { id },
  });

  if (!invite) {
    return c.json({ message: "Invite not found" }, 404);
  }

  await prisma.invite.delete({
    where: { id },
  });

  return c.json({ message: "Invite deleted successfully" });
});

export default invitesRoutes;
