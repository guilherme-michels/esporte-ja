import { Hono } from "hono";
import { protect, type AppContext } from "../src/http/middlewares/auth";
import { prisma } from "../src/lib/prisma";
import { type User } from "@ip3/data";

export const companiesRoutes = new Hono();

companiesRoutes.get("/", async (c: AppContext) => {
  // const user = c.get("user") as User;

  // if (!user) {
  //   return c.json({ message: "User not found" }, 404);
  // }

  const companies = await prisma.company.findMany();
  return c.json({ companies });
});

companiesRoutes.get("/:id", async (c: AppContext) => {
  const { id } = c.req.param();

  const company = await prisma.company.findUnique({
    where: { id },
  });

  if (!company) {
    return c.json({ message: "Company not found" }, 404);
  }

  return c.json({ company });
});

companiesRoutes.post("/", async (c: AppContext) => {
  const { name, slug, domain, avatarUrl, ownerId, cityId } = await c.req.json();

  const newCompany = await prisma.company.create({
    data: {
      name,
      slug,
      domain,
      avatarUrl,
      ownerId,
      cityId,
    },
  });

  return c.json({ company: newCompany }, 201);
});

companiesRoutes.put("/:id", async (c: AppContext) => {
  const { id } = c.req.param();
  const { name, slug, domain, avatarUrl, ownerId, cityId } = await c.req.json();

  const updatedCompany = await prisma.company.update({
    where: { id },
    data: {
      name,
      slug,
      domain,
      avatarUrl,
      ownerId,
      cityId,
    },
  });

  return c.json({ company: updatedCompany });
});

companiesRoutes.delete("/:id", async (c: AppContext) => {
  const { id } = c.req.param();

  const company = await prisma.company.findUnique({
    where: { id },
  });

  if (!company) {
    return c.json({ message: "Company not found" }, 404);
  }

  await prisma.company.delete({
    where: { id },
  });

  return c.json({ message: "Company deleted successfully" });
});

companiesRoutes.get("/:id/courts", async (c: AppContext) => {
  const { id } = c.req.param();

  const company = await prisma.company.findUnique({
    where: { id },
    include: {
      courts: true,
    },
  });

  if (!company) {
    return c.json({ message: "Company not found" }, 404);
  }

  const courtsBySportType = company.courts.reduce(
    (acc, court) => {
      const sportType = court.type;

      if (!acc[sportType]) {
        acc[sportType] = [];
      }

      acc[sportType].push(court);

      return acc;
    },
    {} as Record<string, typeof company.courts>
  );

  return c.json({ company: company.name, courts: courtsBySportType });
});

export default companiesRoutes;
