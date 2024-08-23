import type { Prisma } from "@prisma/client";
import { z } from "zod";

/// //////////////////////////////////////
// HELPER FUNCTIONS
/// //////////////////////////////////////

/// //////////////////////////////////////
// ENUMS
/// //////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum([
  "ReadUncommitted",
  "ReadCommitted",
  "RepeatableRead",
  "Serializable",
]);

export const ProfileScalarFieldEnumSchema = z.enum([
  "id",
  "bio",
  "level",
  "matchesPlayed",
  "wins",
  "losses",
  "userId",
]);

export const EventScalarFieldEnumSchema = z.enum([
  "id",
  "title",
  "description",
  "type",
  "date",
  "companyId",
  "dateTime",
  "createdAt",
]);

export const ProfileEventParticipationScalarFieldEnumSchema = z.enum([
  "id",
  "profileId",
  "eventId",
  "participationDate",
  "classification",
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

export const TrophyScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "description",
  "date",
  "profileId",
]);

export const CityScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "state",
  "country",
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
  "cityId",
]);

export const ReviewScalarFieldEnumSchema = z.enum([
  "id",
  "rating",
  "comment",
  "createdAt",
  "userId",
  "companyId",
]);

export const CourtScalarFieldEnumSchema = z.enum([
  "id",
  "name",
  "type",
  "description",
  "comments",
  "rules",
  "images",
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

export const NotificationScalarFieldEnumSchema = z.enum([
  "id",
  "type",
  "message",
  "read",
  "createdAt",
  "userId",
]);

export const HistoryScalarFieldEnumSchema = z.enum([
  "id",
  "result",
  "createdAt",
  "userId",
  "bookingId",
  "eventId",
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

export const EventTypeSchema = z.enum([
  "TOURNAMENT",
  "CLINIC",
  "FRIENDLY_MATCH",
]);

export type EventTypeType = `${z.infer<typeof EventTypeSchema>}`;

export const NotificationTypeSchema = z.enum(["INVITE", "REMINDER", "RESULT"]);

export type NotificationTypeType = `${z.infer<typeof NotificationTypeSchema>}`;

export const TokenTypeSchema = z.enum(["PASSWORD_RECOVER"]);

export type TokenTypeType = `${z.infer<typeof TokenTypeSchema>}`;

/// //////////////////////////////////////
// MODELS
/// //////////////////////////////////////

/// //////////////////////////////////////
// PROFILE SCHEMA
/// //////////////////////////////////////

export const ProfileSchema = z.object({
  id: z.string(),
  bio: z.string().nullable(),
  level: z.number().int(),
  matchesPlayed: z.number().int(),
  wins: z.number().int(),
  losses: z.number().int(),
  userId: z.string(),
});

export type Profile = z.infer<typeof ProfileSchema>;

/// //////////////////////////////////////
// EVENT SCHEMA
/// //////////////////////////////////////

export const EventSchema = z.object({
  type: EventTypeSchema,
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  date: z.coerce.date(),
  companyId: z.string(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date(),
});

export type Event = z.infer<typeof EventSchema>;

/// //////////////////////////////////////
// PROFILE EVENT PARTICIPATION SCHEMA
/// //////////////////////////////////////

export const ProfileEventParticipationSchema = z.object({
  id: z.string(),
  profileId: z.string(),
  eventId: z.string(),
  participationDate: z.coerce.date(),
  classification: z.string().nullable(),
});

export type ProfileEventParticipation = z.infer<
  typeof ProfileEventParticipationSchema
>;

/// //////////////////////////////////////
// USER SCHEMA
/// //////////////////////////////////////

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

/// //////////////////////////////////////
// TROPHY SCHEMA
/// //////////////////////////////////////

export const TrophySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  date: z.coerce.date(),
  profileId: z.string(),
});

export type Trophy = z.infer<typeof TrophySchema>;

/// //////////////////////////////////////
// CITY SCHEMA
/// //////////////////////////////////////

export const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
  state: z.string().nullable(),
  country: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

export type City = z.infer<typeof CitySchema>;

/// //////////////////////////////////////
// COMPANY SCHEMA
/// //////////////////////////////////////

export const CompanySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().nullable(),
  avatarUrl: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ownerId: z.string(),
  cityId: z.string().nullable(),
});

export type Company = z.infer<typeof CompanySchema>;

/// //////////////////////////////////////
// REVIEW SCHEMA
/// //////////////////////////////////////

export const ReviewSchema = z.object({
  id: z.string(),
  rating: z.number().int(),
  comment: z.string().nullable(),
  createdAt: z.coerce.date(),
  userId: z.string(),
  companyId: z.string(),
});

export type Review = z.infer<typeof ReviewSchema>;

/// //////////////////////////////////////
// COURT SCHEMA
/// //////////////////////////////////////

export const CourtSchema = z.object({
  type: SportTypeSchema,
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  comments: z.string().nullable(),
  rules: z.string().nullable(),
  images: z.string().array(),
  createdAt: z.coerce.date(),
  companyId: z.string(),
});

export type Court = z.infer<typeof CourtSchema>;

/// //////////////////////////////////////
// BOOKING SCHEMA
/// //////////////////////////////////////

export const BookingSchema = z.object({
  id: z.string(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date(),
  userId: z.string(),
  courtId: z.string(),
});

export type Booking = z.infer<typeof BookingSchema>;

/// //////////////////////////////////////
// INVITE SCHEMA
/// //////////////////////////////////////

export const InviteSchema = z.object({
  id: z.string(),
  email: z.string(),
  createdAt: z.coerce.date(),
  authorId: z.string().nullable(),
  courtId: z.string(),
  bookingId: z.string().nullable(),
});

export type Invite = z.infer<typeof InviteSchema>;

/// //////////////////////////////////////
// AVAILABILITY SCHEMA
/// //////////////////////////////////////

export const AvailabilitySchema = z.object({
  id: z.string(),
  dayOfWeek: z.number().int(),
  startTime: z.string(),
  endTime: z.string(),
  createdAt: z.coerce.date(),
  courtId: z.string(),
});

export type Availability = z.infer<typeof AvailabilitySchema>;

/// //////////////////////////////////////
// NOTIFICATION SCHEMA
/// //////////////////////////////////////

export const NotificationSchema = z.object({
  type: NotificationTypeSchema,
  id: z.string(),
  message: z.string(),
  read: z.boolean(),
  createdAt: z.coerce.date(),
  userId: z.string(),
});

export type Notification = z.infer<typeof NotificationSchema>;

/// //////////////////////////////////////
// HISTORY SCHEMA
/// //////////////////////////////////////

export const HistorySchema = z.object({
  id: z.string(),
  result: z.string().nullable(),
  createdAt: z.coerce.date(),
  userId: z.string(),
  bookingId: z.string(),
  eventId: z.string().nullable(),
});

export type History = z.infer<typeof HistorySchema>;

/// //////////////////////////////////////
// TOKEN SCHEMA
/// //////////////////////////////////////

export const TokenSchema = z.object({
  type: TokenTypeSchema,
  id: z.string(),
  createdAt: z.coerce.date(),
  userId: z.string(),
});

export type Token = z.infer<typeof TokenSchema>;