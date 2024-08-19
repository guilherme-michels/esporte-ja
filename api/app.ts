import { Hono } from "hono";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";
import { companiesRoutes } from "./routes/companies";
import { bookingsRoutes } from "./routes/bookings";
import { courtsRoutes } from "./routes/courts";
import { eventsRoutes } from "./routes/events";
import { invitesRoutes } from "./routes/invites";
import { historiesRoutes } from "./routes/history";
import { notificationsRoutes } from "./routes/notifications";
import { profilesRoutes } from "./routes/profiles";
import { availabilitiesRoutes } from "./routes/availabilities";
import { swaggerUI } from "@hono/swagger-ui";

const app = new Hono();
app.use("*", logger());

const apiRoutes = app
  .basePath("/api")
  .route("/companies", companiesRoutes)
  .route("/bookings", bookingsRoutes)
  .route("/courts", courtsRoutes)
  .route("/events", eventsRoutes)
  .route("/histories", historiesRoutes)
  .route("/invites", invitesRoutes)
  .route("/notifications", notificationsRoutes)
  .route("/profiles", profilesRoutes)
  .route("/availabilities", availabilitiesRoutes);

app.get("*", serveStatic({ root: "./frontend/dist" }));
app.get("*", serveStatic({ path: "./frontend/dist/index.html" }));

app.get("/ui", swaggerUI({ url: "/doc" }));

export default app;
export type ApiRoutes = typeof apiRoutes;
