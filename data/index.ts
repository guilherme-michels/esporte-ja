import { z } from "zod";

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////

/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const UserScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "email",
  "passwordHash",
  "avatarUrl",
  "createdAt",
  "updatedAt",
]);

export const CompanyScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "slug",
  "domain",
  "avatarUrl",
  "createdAt",
  "updatedAt",
  "ownerId",
]);

export const CourtScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "type",
  "createdAt",
  "companyId",
]);

export const BookingScalarFieldEnumSchema = z.enum([
  "id",
  "dateTime",
  "createdAt",
  "userId",
  "courtId",
]);

export const InviteScalarFieldEnumSchema = z.enum([
  "id",
  "email",
  "createdAt",
  "authorId",
  "courtId",
  "bookingId",
]);

export const AvailabilityScalarFieldEnumSchema = z.enum([
  "id",
  "dayOfWeek",
  "startTime",
  "endTime",
  "createdAt",
  "courtId",
]);

export const TokenScalarFieldEnumSchema = z.enum([
  "id",
  "type",
  "createdAt",
  "userId",
]);

export const SortOrderSchema = z.enum(["asc", "desc"]);

export const QueryModeSchema = z.enum(["default", "insensitive"]);

export const NullsOrderSchema = z.enum(["first", "last"]);

export const SportTypeSchema = z.enum([
  "FOOTBALL",
  "BEACH_TENNIS",
  "VOLLEYBALL",
  "FUTVOLEY",
  "PADEL",
  "TENNIS",
]);

export type SportTypeType = `${z.infer<typeof SportTypeSchema>}`;

export const TokenTypeSchema = z.enum(["PASSWORD_RECOVER"]);

export type TokenTypeType = `${z.infer<typeof TokenTypeSchema>}`;

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type User = z.infer<typeof UserSchema>;

/////////////////////////////////////////
// COMPANY SCHEMA
/////////////////////////////////////////

export const CompanySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ownerId: z.string(),
});

export type Company = z.infer<typeof CompanySchema>;

/////////////////////////////////////////
// COURT SCHEMA
/////////////////////////////////////////

export const CourtSchema = z.object({
  type: SportTypeSchema,
  id: z.string(),
  name: z.string(),
  createdAt: z.coerce.date(),
  companyId: z.string(),
});

export type Court = z.infer<typeof CourtSchema>;

/////////////////////////////////////////
// BOOKING SCHEMA
/////////////////////////////////////////

export const BookingSchema = z.object({
  id: z.string(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date(),
  userId: z.string(),
  courtId: z.string(),
});

export type Booking = z.infer<typeof BookingSchema>;

/////////////////////////////////////////
// INVITE SCHEMA
/////////////////////////////////////////

export const InviteSchema = z.object({
  id: z.string(),
  email: z.string(),
  createdAt: z.coerce.date(),
  authorId: z.string().nullable(),
  courtId: z.string(),
  bookingId: z.string().nullable(),
});

export type Invite = z.infer<typeof InviteSchema>;

/////////////////////////////////////////
// AVAILABILITY SCHEMA
/////////////////////////////////////////

export const AvailabilitySchema = z.object({
  id: z.string(),
  dayOfWeek: z.number().int(),
  startTime: z.string(),
  endTime: z.string(),
  createdAt: z.coerce.date(),
  courtId: z.string(),
});

export type Availability = z.infer<typeof AvailabilitySchema>;

/////////////////////////////////////////
// TOKEN SCHEMA
/////////////////////////////////////////

export const TokenSchema = z.object({
  type: TokenTypeSchema,
  id: z.string(),
  createdAt: z.coerce.date(),
  userId: z.string(),
});

export type Token = z.infer<typeof TokenSchema>;
