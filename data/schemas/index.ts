import { z } from 'zod';
import type { Prisma } from '@prisma/client';

/////////////////////////////////////////
// HELPER FUNCTIONS
/////////////////////////////////////////


/////////////////////////////////////////
// ENUMS
/////////////////////////////////////////

export const TransactionIsolationLevelSchema = z.enum(['ReadUncommitted','ReadCommitted','RepeatableRead','Serializable']);

export const ProfileScalarFieldEnumSchema = z.enum(['id','bio','level','matchesPlayed','wins','losses','userId']);

export const EventScalarFieldEnumSchema = z.enum(['id','title','description','type','date','companyId','dateTime','createdAt','capacity','registeredCount']);

export const PrizeScalarFieldEnumSchema = z.enum(['id','position','amount','eventId']);

export const EventRuleScalarFieldEnumSchema = z.enum(['id','type','value','eventId']);

export const ProfileEventParticipationScalarFieldEnumSchema = z.enum(['id','profileId','eventId','participationDate','classification']);

export const UserScalarFieldEnumSchema = z.enum(['id','name','email','passwordHash','avatarUrl','createdAt','updatedAt']);

export const TrophyScalarFieldEnumSchema = z.enum(['id','name','description','date','profileId']);

export const CityScalarFieldEnumSchema = z.enum(['id','name','state','country','createdAt','updatedAt']);

export const CompanyTeacherScalarFieldEnumSchema = z.enum(['id','joinedAt','companyId','teacherId']);

export const TeacherScalarFieldEnumSchema = z.enum(['id','name','bio','avatarImg','createdAt','updatedAt']);

export const CompanyScalarFieldEnumSchema = z.enum(['id','name','slug','domain','logoImg','createdAt','updatedAt','ownerId','cityId','addressId']);

export const AddressScalarFieldEnumSchema = z.enum(['id','street','number','complement','district','city','state','country','postalCode','createdAt','updatedAt']);

export const OpeningHoursScalarFieldEnumSchema = z.enum(['id','dayOfWeek','opensAt','closesAt','companyId']);

export const ReviewScalarFieldEnumSchema = z.enum(['id','rating','comment','createdAt','userId','companyId']);

export const CourtScalarFieldEnumSchema = z.enum(['id','name','type','description','comments','rules','images','createdAt','companyId']);

export const BookingScalarFieldEnumSchema = z.enum(['id','dateTime','price','createdAt','userId','courtId','teacherId']);

export const InviteScalarFieldEnumSchema = z.enum(['id','email','createdAt','authorId','courtId','bookingId']);

export const AvailabilityScalarFieldEnumSchema = z.enum(['id','dayOfWeek','startTime','endTime','isPeakHour','createdAt','courtId']);

export const NotificationScalarFieldEnumSchema = z.enum(['id','type','message','read','createdAt','userId']);

export const HistoryScalarFieldEnumSchema = z.enum(['id','result','createdAt','userId','bookingId','eventId']);

export const TokenScalarFieldEnumSchema = z.enum(['id','type','createdAt','userId']);

export const SortOrderSchema = z.enum(['asc','desc']);

export const QueryModeSchema = z.enum(['default','insensitive']);

export const NullsOrderSchema = z.enum(['first','last']);

export const SportTypeSchema = z.enum(['FOOTBALL','BEACH_TENNIS','VOLLEYBALL','FUTVOLEY','PADEL','TENNIS']);

export type SportTypeType = `${z.infer<typeof SportTypeSchema>}`

export const EventTypeSchema = z.enum(['TOURNAMENT','CLINIC','FRIENDLY_MATCH']);

export type EventTypeType = `${z.infer<typeof EventTypeSchema>}`

export const NotificationTypeSchema = z.enum(['INVITE','REMINDER','RESULT']);

export type NotificationTypeType = `${z.infer<typeof NotificationTypeSchema>}`

export const TokenTypeSchema = z.enum(['PASSWORD_RECOVER']);

export type TokenTypeType = `${z.infer<typeof TokenTypeSchema>}`

/////////////////////////////////////////
// MODELS
/////////////////////////////////////////

/////////////////////////////////////////
// PROFILE SCHEMA
/////////////////////////////////////////

export const ProfileSchema = z.object({
  id: z.string(),
  bio: z.string().nullable(),
  level: z.number().int(),
  matchesPlayed: z.number().int(),
  wins: z.number().int(),
  losses: z.number().int(),
  userId: z.string(),
})

export type Profile = z.infer<typeof ProfileSchema>

/////////////////////////////////////////
// EVENT SCHEMA
/////////////////////////////////////////

export const EventSchema = z.object({
  type: EventTypeSchema,
  id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  date: z.coerce.date(),
  companyId: z.string(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date(),
  capacity: z.number().int(),
  registeredCount: z.number().int(),
})

export type Event = z.infer<typeof EventSchema>

/////////////////////////////////////////
// PRIZE SCHEMA
/////////////////////////////////////////

export const PrizeSchema = z.object({
  id: z.string(),
  position: z.number().int(),
  amount: z.number(),
  eventId: z.string(),
})

export type Prize = z.infer<typeof PrizeSchema>

/////////////////////////////////////////
// EVENT RULE SCHEMA
/////////////////////////////////////////

export const EventRuleSchema = z.object({
  id: z.string(),
  type: z.string(),
  value: z.string(),
  eventId: z.string(),
})

export type EventRule = z.infer<typeof EventRuleSchema>

/////////////////////////////////////////
// PROFILE EVENT PARTICIPATION SCHEMA
/////////////////////////////////////////

export const ProfileEventParticipationSchema = z.object({
  id: z.string(),
  profileId: z.string(),
  eventId: z.string(),
  participationDate: z.coerce.date(),
  classification: z.string().nullable(),
})

export type ProfileEventParticipation = z.infer<typeof ProfileEventParticipationSchema>

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
})

export type User = z.infer<typeof UserSchema>

/////////////////////////////////////////
// TROPHY SCHEMA
/////////////////////////////////////////

export const TrophySchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  date: z.coerce.date(),
  profileId: z.string(),
})

export type Trophy = z.infer<typeof TrophySchema>

/////////////////////////////////////////
// CITY SCHEMA
/////////////////////////////////////////

export const CitySchema = z.object({
  id: z.string(),
  name: z.string(),
  state: z.string().nullable(),
  country: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type City = z.infer<typeof CitySchema>

/////////////////////////////////////////
// COMPANY TEACHER SCHEMA
/////////////////////////////////////////

export const CompanyTeacherSchema = z.object({
  id: z.string(),
  joinedAt: z.coerce.date(),
  companyId: z.string(),
  teacherId: z.string(),
})

export type CompanyTeacher = z.infer<typeof CompanyTeacherSchema>

/////////////////////////////////////////
// TEACHER SCHEMA
/////////////////////////////////////////

export const TeacherSchema = z.object({
  id: z.string(),
  name: z.string(),
  bio: z.string().nullable(),
  avatarImg: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Teacher = z.infer<typeof TeacherSchema>

/////////////////////////////////////////
// COMPANY SCHEMA
/////////////////////////////////////////

export const CompanySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().nullable(),
  logoImg: z.string().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  ownerId: z.string(),
  cityId: z.string().nullable(),
  addressId: z.string().nullable(),
})

export type Company = z.infer<typeof CompanySchema>

/////////////////////////////////////////
// ADDRESS SCHEMA
/////////////////////////////////////////

export const AddressSchema = z.object({
  id: z.string(),
  street: z.string(),
  number: z.string().nullable(),
  complement: z.string().nullable(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postalCode: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Address = z.infer<typeof AddressSchema>

/////////////////////////////////////////
// OPENING HOURS SCHEMA
/////////////////////////////////////////

export const OpeningHoursSchema = z.object({
  id: z.string(),
  dayOfWeek: z.number().int(),
  opensAt: z.string(),
  closesAt: z.string(),
  companyId: z.string(),
})

export type OpeningHours = z.infer<typeof OpeningHoursSchema>

/////////////////////////////////////////
// REVIEW SCHEMA
/////////////////////////////////////////

export const ReviewSchema = z.object({
  id: z.string(),
  rating: z.number().int(),
  comment: z.string().nullable(),
  createdAt: z.coerce.date(),
  userId: z.string(),
  companyId: z.string(),
})

export type Review = z.infer<typeof ReviewSchema>

/////////////////////////////////////////
// COURT SCHEMA
/////////////////////////////////////////

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
})

export type Court = z.infer<typeof CourtSchema>

/////////////////////////////////////////
// BOOKING SCHEMA
/////////////////////////////////////////

export const BookingSchema = z.object({
  id: z.string(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date(),
  userId: z.string(),
  courtId: z.string(),
  teacherId: z.string().nullable(),
})

export type Booking = z.infer<typeof BookingSchema>

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
})

export type Invite = z.infer<typeof InviteSchema>

/////////////////////////////////////////
// AVAILABILITY SCHEMA
/////////////////////////////////////////

export const AvailabilitySchema = z.object({
  id: z.string(),
  dayOfWeek: z.number().int(),
  startTime: z.string(),
  endTime: z.string(),
  isPeakHour: z.boolean(),
  createdAt: z.coerce.date(),
  courtId: z.string(),
})

export type Availability = z.infer<typeof AvailabilitySchema>

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationSchema = z.object({
  type: NotificationTypeSchema,
  id: z.string(),
  message: z.string(),
  read: z.boolean(),
  createdAt: z.coerce.date(),
  userId: z.string(),
})

export type Notification = z.infer<typeof NotificationSchema>

/////////////////////////////////////////
// HISTORY SCHEMA
/////////////////////////////////////////

export const HistorySchema = z.object({
  id: z.string(),
  result: z.string().nullable(),
  createdAt: z.coerce.date(),
  userId: z.string(),
  bookingId: z.string(),
  eventId: z.string().nullable(),
})

export type History = z.infer<typeof HistorySchema>

/////////////////////////////////////////
// TOKEN SCHEMA
/////////////////////////////////////////

export const TokenSchema = z.object({
  type: TokenTypeSchema,
  id: z.string(),
  createdAt: z.coerce.date(),
  userId: z.string(),
})

export type Token = z.infer<typeof TokenSchema>

/////////////////////////////////////////
// SELECT & INCLUDE
/////////////////////////////////////////

// PROFILE
//------------------------------------------------------

export const ProfileIncludeSchema: z.ZodType<Prisma.ProfileInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  events: z.union([z.boolean(),z.lazy(() => ProfileEventParticipationFindManyArgsSchema)]).optional(),
  trophies: z.union([z.boolean(),z.lazy(() => TrophyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProfileCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ProfileArgsSchema: z.ZodType<Prisma.ProfileDefaultArgs> = z.object({
  select: z.lazy(() => ProfileSelectSchema).optional(),
  include: z.lazy(() => ProfileIncludeSchema).optional(),
}).strict();

export const ProfileCountOutputTypeArgsSchema: z.ZodType<Prisma.ProfileCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ProfileCountOutputTypeSelectSchema).nullish(),
}).strict();

export const ProfileCountOutputTypeSelectSchema: z.ZodType<Prisma.ProfileCountOutputTypeSelect> = z.object({
  events: z.boolean().optional(),
  trophies: z.boolean().optional(),
}).strict();

export const ProfileSelectSchema: z.ZodType<Prisma.ProfileSelect> = z.object({
  id: z.boolean().optional(),
  bio: z.boolean().optional(),
  level: z.boolean().optional(),
  matchesPlayed: z.boolean().optional(),
  wins: z.boolean().optional(),
  losses: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  events: z.union([z.boolean(),z.lazy(() => ProfileEventParticipationFindManyArgsSchema)]).optional(),
  trophies: z.union([z.boolean(),z.lazy(() => TrophyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProfileCountOutputTypeArgsSchema)]).optional(),
}).strict()

// EVENT
//------------------------------------------------------

export const EventIncludeSchema: z.ZodType<Prisma.EventInclude> = z.object({
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  participants: z.union([z.boolean(),z.lazy(() => ProfileEventParticipationFindManyArgsSchema)]).optional(),
  histories: z.union([z.boolean(),z.lazy(() => HistoryFindManyArgsSchema)]).optional(),
  EventRule: z.union([z.boolean(),z.lazy(() => EventRuleFindManyArgsSchema)]).optional(),
  Prize: z.union([z.boolean(),z.lazy(() => PrizeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EventCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const EventArgsSchema: z.ZodType<Prisma.EventDefaultArgs> = z.object({
  select: z.lazy(() => EventSelectSchema).optional(),
  include: z.lazy(() => EventIncludeSchema).optional(),
}).strict();

export const EventCountOutputTypeArgsSchema: z.ZodType<Prisma.EventCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => EventCountOutputTypeSelectSchema).nullish(),
}).strict();

export const EventCountOutputTypeSelectSchema: z.ZodType<Prisma.EventCountOutputTypeSelect> = z.object({
  participants: z.boolean().optional(),
  histories: z.boolean().optional(),
  EventRule: z.boolean().optional(),
  Prize: z.boolean().optional(),
}).strict();

export const EventSelectSchema: z.ZodType<Prisma.EventSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  type: z.boolean().optional(),
  date: z.boolean().optional(),
  companyId: z.boolean().optional(),
  dateTime: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  capacity: z.boolean().optional(),
  registeredCount: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  participants: z.union([z.boolean(),z.lazy(() => ProfileEventParticipationFindManyArgsSchema)]).optional(),
  histories: z.union([z.boolean(),z.lazy(() => HistoryFindManyArgsSchema)]).optional(),
  EventRule: z.union([z.boolean(),z.lazy(() => EventRuleFindManyArgsSchema)]).optional(),
  Prize: z.union([z.boolean(),z.lazy(() => PrizeFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => EventCountOutputTypeArgsSchema)]).optional(),
}).strict()

// PRIZE
//------------------------------------------------------

export const PrizeIncludeSchema: z.ZodType<Prisma.PrizeInclude> = z.object({
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
}).strict()

export const PrizeArgsSchema: z.ZodType<Prisma.PrizeDefaultArgs> = z.object({
  select: z.lazy(() => PrizeSelectSchema).optional(),
  include: z.lazy(() => PrizeIncludeSchema).optional(),
}).strict();

export const PrizeSelectSchema: z.ZodType<Prisma.PrizeSelect> = z.object({
  id: z.boolean().optional(),
  position: z.boolean().optional(),
  amount: z.boolean().optional(),
  eventId: z.boolean().optional(),
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
}).strict()

// EVENT RULE
//------------------------------------------------------

export const EventRuleIncludeSchema: z.ZodType<Prisma.EventRuleInclude> = z.object({
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
}).strict()

export const EventRuleArgsSchema: z.ZodType<Prisma.EventRuleDefaultArgs> = z.object({
  select: z.lazy(() => EventRuleSelectSchema).optional(),
  include: z.lazy(() => EventRuleIncludeSchema).optional(),
}).strict();

export const EventRuleSelectSchema: z.ZodType<Prisma.EventRuleSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  value: z.boolean().optional(),
  eventId: z.boolean().optional(),
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
}).strict()

// PROFILE EVENT PARTICIPATION
//------------------------------------------------------

export const ProfileEventParticipationIncludeSchema: z.ZodType<Prisma.ProfileEventParticipationInclude> = z.object({
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
}).strict()

export const ProfileEventParticipationArgsSchema: z.ZodType<Prisma.ProfileEventParticipationDefaultArgs> = z.object({
  select: z.lazy(() => ProfileEventParticipationSelectSchema).optional(),
  include: z.lazy(() => ProfileEventParticipationIncludeSchema).optional(),
}).strict();

export const ProfileEventParticipationSelectSchema: z.ZodType<Prisma.ProfileEventParticipationSelect> = z.object({
  id: z.boolean().optional(),
  profileId: z.boolean().optional(),
  eventId: z.boolean().optional(),
  participationDate: z.boolean().optional(),
  classification: z.boolean().optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
}).strict()

// USER
//------------------------------------------------------

export const UserIncludeSchema: z.ZodType<Prisma.UserInclude> = z.object({
  tokens: z.union([z.boolean(),z.lazy(() => TokenFindManyArgsSchema)]).optional(),
  invites: z.union([z.boolean(),z.lazy(() => InviteFindManyArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  companies: z.union([z.boolean(),z.lazy(() => CompanyFindManyArgsSchema)]).optional(),
  ownedCompanies: z.union([z.boolean(),z.lazy(() => CompanyFindManyArgsSchema)]).optional(),
  notifications: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  eventHistories: z.union([z.boolean(),z.lazy(() => HistoryFindManyArgsSchema)]).optional(),
  Review: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const UserArgsSchema: z.ZodType<Prisma.UserDefaultArgs> = z.object({
  select: z.lazy(() => UserSelectSchema).optional(),
  include: z.lazy(() => UserIncludeSchema).optional(),
}).strict();

export const UserCountOutputTypeArgsSchema: z.ZodType<Prisma.UserCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => UserCountOutputTypeSelectSchema).nullish(),
}).strict();

export const UserCountOutputTypeSelectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z.object({
  tokens: z.boolean().optional(),
  invites: z.boolean().optional(),
  bookings: z.boolean().optional(),
  companies: z.boolean().optional(),
  ownedCompanies: z.boolean().optional(),
  notifications: z.boolean().optional(),
  eventHistories: z.boolean().optional(),
  Review: z.boolean().optional(),
}).strict();

export const UserSelectSchema: z.ZodType<Prisma.UserSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  email: z.boolean().optional(),
  passwordHash: z.boolean().optional(),
  avatarUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  tokens: z.union([z.boolean(),z.lazy(() => TokenFindManyArgsSchema)]).optional(),
  invites: z.union([z.boolean(),z.lazy(() => InviteFindManyArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  companies: z.union([z.boolean(),z.lazy(() => CompanyFindManyArgsSchema)]).optional(),
  ownedCompanies: z.union([z.boolean(),z.lazy(() => CompanyFindManyArgsSchema)]).optional(),
  notifications: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
  eventHistories: z.union([z.boolean(),z.lazy(() => HistoryFindManyArgsSchema)]).optional(),
  Review: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UserCountOutputTypeArgsSchema)]).optional(),
}).strict()

// TROPHY
//------------------------------------------------------

export const TrophyIncludeSchema: z.ZodType<Prisma.TrophyInclude> = z.object({
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
}).strict()

export const TrophyArgsSchema: z.ZodType<Prisma.TrophyDefaultArgs> = z.object({
  select: z.lazy(() => TrophySelectSchema).optional(),
  include: z.lazy(() => TrophyIncludeSchema).optional(),
}).strict();

export const TrophySelectSchema: z.ZodType<Prisma.TrophySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  description: z.boolean().optional(),
  date: z.boolean().optional(),
  profileId: z.boolean().optional(),
  profile: z.union([z.boolean(),z.lazy(() => ProfileArgsSchema)]).optional(),
}).strict()

// CITY
//------------------------------------------------------

export const CityIncludeSchema: z.ZodType<Prisma.CityInclude> = z.object({
  companies: z.union([z.boolean(),z.lazy(() => CompanyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CityCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CityArgsSchema: z.ZodType<Prisma.CityDefaultArgs> = z.object({
  select: z.lazy(() => CitySelectSchema).optional(),
  include: z.lazy(() => CityIncludeSchema).optional(),
}).strict();

export const CityCountOutputTypeArgsSchema: z.ZodType<Prisma.CityCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CityCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CityCountOutputTypeSelectSchema: z.ZodType<Prisma.CityCountOutputTypeSelect> = z.object({
  companies: z.boolean().optional(),
}).strict();

export const CitySelectSchema: z.ZodType<Prisma.CitySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  state: z.boolean().optional(),
  country: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  companies: z.union([z.boolean(),z.lazy(() => CompanyFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CityCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COMPANY TEACHER
//------------------------------------------------------

export const CompanyTeacherIncludeSchema: z.ZodType<Prisma.CompanyTeacherInclude> = z.object({
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  teacher: z.union([z.boolean(),z.lazy(() => TeacherArgsSchema)]).optional(),
}).strict()

export const CompanyTeacherArgsSchema: z.ZodType<Prisma.CompanyTeacherDefaultArgs> = z.object({
  select: z.lazy(() => CompanyTeacherSelectSchema).optional(),
  include: z.lazy(() => CompanyTeacherIncludeSchema).optional(),
}).strict();

export const CompanyTeacherSelectSchema: z.ZodType<Prisma.CompanyTeacherSelect> = z.object({
  id: z.boolean().optional(),
  joinedAt: z.boolean().optional(),
  companyId: z.boolean().optional(),
  teacherId: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  teacher: z.union([z.boolean(),z.lazy(() => TeacherArgsSchema)]).optional(),
}).strict()

// TEACHER
//------------------------------------------------------

export const TeacherIncludeSchema: z.ZodType<Prisma.TeacherInclude> = z.object({
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  CompanyTeacher: z.union([z.boolean(),z.lazy(() => CompanyTeacherFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeacherCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TeacherArgsSchema: z.ZodType<Prisma.TeacherDefaultArgs> = z.object({
  select: z.lazy(() => TeacherSelectSchema).optional(),
  include: z.lazy(() => TeacherIncludeSchema).optional(),
}).strict();

export const TeacherCountOutputTypeArgsSchema: z.ZodType<Prisma.TeacherCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TeacherCountOutputTypeSelectSchema).nullish(),
}).strict();

export const TeacherCountOutputTypeSelectSchema: z.ZodType<Prisma.TeacherCountOutputTypeSelect> = z.object({
  bookings: z.boolean().optional(),
  CompanyTeacher: z.boolean().optional(),
}).strict();

export const TeacherSelectSchema: z.ZodType<Prisma.TeacherSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  bio: z.boolean().optional(),
  avatarImg: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  CompanyTeacher: z.union([z.boolean(),z.lazy(() => CompanyTeacherFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TeacherCountOutputTypeArgsSchema)]).optional(),
}).strict()

// COMPANY
//------------------------------------------------------

export const CompanyIncludeSchema: z.ZodType<Prisma.CompanyInclude> = z.object({
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  courts: z.union([z.boolean(),z.lazy(() => CourtFindManyArgsSchema)]).optional(),
  admins: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  city: z.union([z.boolean(),z.lazy(() => CityArgsSchema)]).optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  events: z.union([z.boolean(),z.lazy(() => EventFindManyArgsSchema)]).optional(),
  reviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  CompanyTeacher: z.union([z.boolean(),z.lazy(() => CompanyTeacherFindManyArgsSchema)]).optional(),
  openingHours: z.union([z.boolean(),z.lazy(() => OpeningHoursFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompanyCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CompanyArgsSchema: z.ZodType<Prisma.CompanyDefaultArgs> = z.object({
  select: z.lazy(() => CompanySelectSchema).optional(),
  include: z.lazy(() => CompanyIncludeSchema).optional(),
}).strict();

export const CompanyCountOutputTypeArgsSchema: z.ZodType<Prisma.CompanyCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CompanyCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CompanyCountOutputTypeSelectSchema: z.ZodType<Prisma.CompanyCountOutputTypeSelect> = z.object({
  courts: z.boolean().optional(),
  admins: z.boolean().optional(),
  events: z.boolean().optional(),
  reviews: z.boolean().optional(),
  CompanyTeacher: z.boolean().optional(),
  openingHours: z.boolean().optional(),
}).strict();

export const CompanySelectSchema: z.ZodType<Prisma.CompanySelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  domain: z.boolean().optional(),
  logoImg: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  ownerId: z.boolean().optional(),
  cityId: z.boolean().optional(),
  addressId: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  courts: z.union([z.boolean(),z.lazy(() => CourtFindManyArgsSchema)]).optional(),
  admins: z.union([z.boolean(),z.lazy(() => UserFindManyArgsSchema)]).optional(),
  city: z.union([z.boolean(),z.lazy(() => CityArgsSchema)]).optional(),
  address: z.union([z.boolean(),z.lazy(() => AddressArgsSchema)]).optional(),
  events: z.union([z.boolean(),z.lazy(() => EventFindManyArgsSchema)]).optional(),
  reviews: z.union([z.boolean(),z.lazy(() => ReviewFindManyArgsSchema)]).optional(),
  CompanyTeacher: z.union([z.boolean(),z.lazy(() => CompanyTeacherFindManyArgsSchema)]).optional(),
  openingHours: z.union([z.boolean(),z.lazy(() => OpeningHoursFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CompanyCountOutputTypeArgsSchema)]).optional(),
}).strict()

// ADDRESS
//------------------------------------------------------

export const AddressIncludeSchema: z.ZodType<Prisma.AddressInclude> = z.object({
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()

export const AddressArgsSchema: z.ZodType<Prisma.AddressDefaultArgs> = z.object({
  select: z.lazy(() => AddressSelectSchema).optional(),
  include: z.lazy(() => AddressIncludeSchema).optional(),
}).strict();

export const AddressSelectSchema: z.ZodType<Prisma.AddressSelect> = z.object({
  id: z.boolean().optional(),
  street: z.boolean().optional(),
  number: z.boolean().optional(),
  complement: z.boolean().optional(),
  district: z.boolean().optional(),
  city: z.boolean().optional(),
  state: z.boolean().optional(),
  country: z.boolean().optional(),
  postalCode: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()

// OPENING HOURS
//------------------------------------------------------

export const OpeningHoursIncludeSchema: z.ZodType<Prisma.OpeningHoursInclude> = z.object({
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()

export const OpeningHoursArgsSchema: z.ZodType<Prisma.OpeningHoursDefaultArgs> = z.object({
  select: z.lazy(() => OpeningHoursSelectSchema).optional(),
  include: z.lazy(() => OpeningHoursIncludeSchema).optional(),
}).strict();

export const OpeningHoursSelectSchema: z.ZodType<Prisma.OpeningHoursSelect> = z.object({
  id: z.boolean().optional(),
  dayOfWeek: z.boolean().optional(),
  opensAt: z.boolean().optional(),
  closesAt: z.boolean().optional(),
  companyId: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()

// REVIEW
//------------------------------------------------------

export const ReviewIncludeSchema: z.ZodType<Prisma.ReviewInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()

export const ReviewArgsSchema: z.ZodType<Prisma.ReviewDefaultArgs> = z.object({
  select: z.lazy(() => ReviewSelectSchema).optional(),
  include: z.lazy(() => ReviewIncludeSchema).optional(),
}).strict();

export const ReviewSelectSchema: z.ZodType<Prisma.ReviewSelect> = z.object({
  id: z.boolean().optional(),
  rating: z.boolean().optional(),
  comment: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  companyId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
}).strict()

// COURT
//------------------------------------------------------

export const CourtIncludeSchema: z.ZodType<Prisma.CourtInclude> = z.object({
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  availability: z.union([z.boolean(),z.lazy(() => AvailabilityFindManyArgsSchema)]).optional(),
  invites: z.union([z.boolean(),z.lazy(() => InviteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CourtCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const CourtArgsSchema: z.ZodType<Prisma.CourtDefaultArgs> = z.object({
  select: z.lazy(() => CourtSelectSchema).optional(),
  include: z.lazy(() => CourtIncludeSchema).optional(),
}).strict();

export const CourtCountOutputTypeArgsSchema: z.ZodType<Prisma.CourtCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CourtCountOutputTypeSelectSchema).nullish(),
}).strict();

export const CourtCountOutputTypeSelectSchema: z.ZodType<Prisma.CourtCountOutputTypeSelect> = z.object({
  bookings: z.boolean().optional(),
  availability: z.boolean().optional(),
  invites: z.boolean().optional(),
}).strict();

export const CourtSelectSchema: z.ZodType<Prisma.CourtSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  type: z.boolean().optional(),
  description: z.boolean().optional(),
  comments: z.boolean().optional(),
  rules: z.boolean().optional(),
  images: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  companyId: z.boolean().optional(),
  company: z.union([z.boolean(),z.lazy(() => CompanyArgsSchema)]).optional(),
  bookings: z.union([z.boolean(),z.lazy(() => BookingFindManyArgsSchema)]).optional(),
  availability: z.union([z.boolean(),z.lazy(() => AvailabilityFindManyArgsSchema)]).optional(),
  invites: z.union([z.boolean(),z.lazy(() => InviteFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CourtCountOutputTypeArgsSchema)]).optional(),
}).strict()

// BOOKING
//------------------------------------------------------

export const BookingIncludeSchema: z.ZodType<Prisma.BookingInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  court: z.union([z.boolean(),z.lazy(() => CourtArgsSchema)]).optional(),
  invite: z.union([z.boolean(),z.lazy(() => InviteArgsSchema)]).optional(),
  history: z.union([z.boolean(),z.lazy(() => HistoryFindManyArgsSchema)]).optional(),
  Teacher: z.union([z.boolean(),z.lazy(() => TeacherArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BookingArgsSchema: z.ZodType<Prisma.BookingDefaultArgs> = z.object({
  select: z.lazy(() => BookingSelectSchema).optional(),
  include: z.lazy(() => BookingIncludeSchema).optional(),
}).strict();

export const BookingCountOutputTypeArgsSchema: z.ZodType<Prisma.BookingCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BookingCountOutputTypeSelectSchema).nullish(),
}).strict();

export const BookingCountOutputTypeSelectSchema: z.ZodType<Prisma.BookingCountOutputTypeSelect> = z.object({
  history: z.boolean().optional(),
}).strict();

export const BookingSelectSchema: z.ZodType<Prisma.BookingSelect> = z.object({
  id: z.boolean().optional(),
  dateTime: z.boolean().optional(),
  price: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  courtId: z.boolean().optional(),
  teacherId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  court: z.union([z.boolean(),z.lazy(() => CourtArgsSchema)]).optional(),
  invite: z.union([z.boolean(),z.lazy(() => InviteArgsSchema)]).optional(),
  history: z.union([z.boolean(),z.lazy(() => HistoryFindManyArgsSchema)]).optional(),
  Teacher: z.union([z.boolean(),z.lazy(() => TeacherArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingCountOutputTypeArgsSchema)]).optional(),
}).strict()

// INVITE
//------------------------------------------------------

export const InviteIncludeSchema: z.ZodType<Prisma.InviteInclude> = z.object({
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  court: z.union([z.boolean(),z.lazy(() => CourtArgsSchema)]).optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
}).strict()

export const InviteArgsSchema: z.ZodType<Prisma.InviteDefaultArgs> = z.object({
  select: z.lazy(() => InviteSelectSchema).optional(),
  include: z.lazy(() => InviteIncludeSchema).optional(),
}).strict();

export const InviteSelectSchema: z.ZodType<Prisma.InviteSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  authorId: z.boolean().optional(),
  courtId: z.boolean().optional(),
  bookingId: z.boolean().optional(),
  author: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  court: z.union([z.boolean(),z.lazy(() => CourtArgsSchema)]).optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
}).strict()

// AVAILABILITY
//------------------------------------------------------

export const AvailabilityIncludeSchema: z.ZodType<Prisma.AvailabilityInclude> = z.object({
  court: z.union([z.boolean(),z.lazy(() => CourtArgsSchema)]).optional(),
}).strict()

export const AvailabilityArgsSchema: z.ZodType<Prisma.AvailabilityDefaultArgs> = z.object({
  select: z.lazy(() => AvailabilitySelectSchema).optional(),
  include: z.lazy(() => AvailabilityIncludeSchema).optional(),
}).strict();

export const AvailabilitySelectSchema: z.ZodType<Prisma.AvailabilitySelect> = z.object({
  id: z.boolean().optional(),
  dayOfWeek: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  isPeakHour: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  courtId: z.boolean().optional(),
  court: z.union([z.boolean(),z.lazy(() => CourtArgsSchema)]).optional(),
}).strict()

// NOTIFICATION
//------------------------------------------------------

export const NotificationIncludeSchema: z.ZodType<Prisma.NotificationInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const NotificationArgsSchema: z.ZodType<Prisma.NotificationDefaultArgs> = z.object({
  select: z.lazy(() => NotificationSelectSchema).optional(),
  include: z.lazy(() => NotificationIncludeSchema).optional(),
}).strict();

export const NotificationSelectSchema: z.ZodType<Prisma.NotificationSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  message: z.boolean().optional(),
  read: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

// HISTORY
//------------------------------------------------------

export const HistoryIncludeSchema: z.ZodType<Prisma.HistoryInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
}).strict()

export const HistoryArgsSchema: z.ZodType<Prisma.HistoryDefaultArgs> = z.object({
  select: z.lazy(() => HistorySelectSchema).optional(),
  include: z.lazy(() => HistoryIncludeSchema).optional(),
}).strict();

export const HistorySelectSchema: z.ZodType<Prisma.HistorySelect> = z.object({
  id: z.boolean().optional(),
  result: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  bookingId: z.boolean().optional(),
  eventId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  event: z.union([z.boolean(),z.lazy(() => EventArgsSchema)]).optional(),
}).strict()

// TOKEN
//------------------------------------------------------

export const TokenIncludeSchema: z.ZodType<Prisma.TokenInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const TokenArgsSchema: z.ZodType<Prisma.TokenDefaultArgs> = z.object({
  select: z.lazy(() => TokenSelectSchema).optional(),
  include: z.lazy(() => TokenIncludeSchema).optional(),
}).strict();

export const TokenSelectSchema: z.ZodType<Prisma.TokenSelect> = z.object({
  id: z.boolean().optional(),
  type: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()


/////////////////////////////////////////
// INPUT TYPES
/////////////////////////////////////////

export const ProfileWhereInputSchema: z.ZodType<Prisma.ProfileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bio: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  matchesPlayed: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  wins: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  losses: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  events: z.lazy(() => ProfileEventParticipationListRelationFilterSchema).optional(),
  trophies: z.lazy(() => TrophyListRelationFilterSchema).optional()
}).strict();

export const ProfileOrderByWithRelationInputSchema: z.ZodType<Prisma.ProfileOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  matchesPlayed: z.lazy(() => SortOrderSchema).optional(),
  wins: z.lazy(() => SortOrderSchema).optional(),
  losses: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  events: z.lazy(() => ProfileEventParticipationOrderByRelationAggregateInputSchema).optional(),
  trophies: z.lazy(() => TrophyOrderByRelationAggregateInputSchema).optional()
}).strict();

export const ProfileWhereUniqueInputSchema: z.ZodType<Prisma.ProfileWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    userId: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileWhereInputSchema),z.lazy(() => ProfileWhereInputSchema).array() ]).optional(),
  bio: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  matchesPlayed: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  wins: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  losses: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  events: z.lazy(() => ProfileEventParticipationListRelationFilterSchema).optional(),
  trophies: z.lazy(() => TrophyListRelationFilterSchema).optional()
}).strict());

export const ProfileOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProfileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  matchesPlayed: z.lazy(() => SortOrderSchema).optional(),
  wins: z.lazy(() => SortOrderSchema).optional(),
  losses: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProfileCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ProfileAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProfileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProfileMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ProfileSumOrderByAggregateInputSchema).optional()
}).strict();

export const ProfileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProfileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => ProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bio: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  level: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  matchesPlayed: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  wins: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  losses: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const EventWhereInputSchema: z.ZodType<Prisma.EventWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumEventTypeFilterSchema),z.lazy(() => EventTypeSchema) ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dateTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  capacity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  registeredCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  participants: z.lazy(() => ProfileEventParticipationListRelationFilterSchema).optional(),
  histories: z.lazy(() => HistoryListRelationFilterSchema).optional(),
  EventRule: z.lazy(() => EventRuleListRelationFilterSchema).optional(),
  Prize: z.lazy(() => PrizeListRelationFilterSchema).optional()
}).strict();

export const EventOrderByWithRelationInputSchema: z.ZodType<Prisma.EventOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  dateTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional(),
  registeredCount: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional(),
  participants: z.lazy(() => ProfileEventParticipationOrderByRelationAggregateInputSchema).optional(),
  histories: z.lazy(() => HistoryOrderByRelationAggregateInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleOrderByRelationAggregateInputSchema).optional(),
  Prize: z.lazy(() => PrizeOrderByRelationAggregateInputSchema).optional()
}).strict();

export const EventWhereUniqueInputSchema: z.ZodType<Prisma.EventWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventWhereInputSchema),z.lazy(() => EventWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumEventTypeFilterSchema),z.lazy(() => EventTypeSchema) ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dateTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  capacity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  registeredCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  participants: z.lazy(() => ProfileEventParticipationListRelationFilterSchema).optional(),
  histories: z.lazy(() => HistoryListRelationFilterSchema).optional(),
  EventRule: z.lazy(() => EventRuleListRelationFilterSchema).optional(),
  Prize: z.lazy(() => PrizeListRelationFilterSchema).optional()
}).strict());

export const EventOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  dateTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional(),
  registeredCount: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => EventAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => EventSumOrderByAggregateInputSchema).optional()
}).strict();

export const EventScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventScalarWhereWithAggregatesInputSchema),z.lazy(() => EventScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventScalarWhereWithAggregatesInputSchema),z.lazy(() => EventScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumEventTypeWithAggregatesFilterSchema),z.lazy(() => EventTypeSchema) ]).optional(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dateTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  capacity: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  registeredCount: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export const PrizeWhereInputSchema: z.ZodType<Prisma.PrizeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrizeWhereInputSchema),z.lazy(() => PrizeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrizeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrizeWhereInputSchema),z.lazy(() => PrizeWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  event: z.union([ z.lazy(() => EventRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional(),
}).strict();

export const PrizeOrderByWithRelationInputSchema: z.ZodType<Prisma.PrizeOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  event: z.lazy(() => EventOrderByWithRelationInputSchema).optional()
}).strict();

export const PrizeWhereUniqueInputSchema: z.ZodType<Prisma.PrizeWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => PrizeWhereInputSchema),z.lazy(() => PrizeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrizeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrizeWhereInputSchema),z.lazy(() => PrizeWhereInputSchema).array() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  event: z.union([ z.lazy(() => EventRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional(),
}).strict());

export const PrizeOrderByWithAggregationInputSchema: z.ZodType<Prisma.PrizeOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PrizeCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PrizeAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PrizeMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PrizeMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PrizeSumOrderByAggregateInputSchema).optional()
}).strict();

export const PrizeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PrizeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PrizeScalarWhereWithAggregatesInputSchema),z.lazy(() => PrizeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrizeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrizeScalarWhereWithAggregatesInputSchema),z.lazy(() => PrizeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  amount: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  eventId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const EventRuleWhereInputSchema: z.ZodType<Prisma.EventRuleWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventRuleWhereInputSchema),z.lazy(() => EventRuleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventRuleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventRuleWhereInputSchema),z.lazy(() => EventRuleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  event: z.union([ z.lazy(() => EventRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional(),
}).strict();

export const EventRuleOrderByWithRelationInputSchema: z.ZodType<Prisma.EventRuleOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  event: z.lazy(() => EventOrderByWithRelationInputSchema).optional()
}).strict();

export const EventRuleWhereUniqueInputSchema: z.ZodType<Prisma.EventRuleWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => EventRuleWhereInputSchema),z.lazy(() => EventRuleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventRuleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventRuleWhereInputSchema),z.lazy(() => EventRuleWhereInputSchema).array() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  event: z.union([ z.lazy(() => EventRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional(),
}).strict());

export const EventRuleOrderByWithAggregationInputSchema: z.ZodType<Prisma.EventRuleOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => EventRuleCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => EventRuleMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => EventRuleMinOrderByAggregateInputSchema).optional()
}).strict();

export const EventRuleScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.EventRuleScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => EventRuleScalarWhereWithAggregatesInputSchema),z.lazy(() => EventRuleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventRuleScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventRuleScalarWhereWithAggregatesInputSchema),z.lazy(() => EventRuleScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProfileEventParticipationWhereInputSchema: z.ZodType<Prisma.ProfileEventParticipationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProfileEventParticipationWhereInputSchema),z.lazy(() => ProfileEventParticipationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileEventParticipationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileEventParticipationWhereInputSchema),z.lazy(() => ProfileEventParticipationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  participationDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  classification: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profile: z.union([ z.lazy(() => ProfileRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  event: z.union([ z.lazy(() => EventRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional(),
}).strict();

export const ProfileEventParticipationOrderByWithRelationInputSchema: z.ZodType<Prisma.ProfileEventParticipationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  participationDate: z.lazy(() => SortOrderSchema).optional(),
  classification: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional(),
  event: z.lazy(() => EventOrderByWithRelationInputSchema).optional()
}).strict();

export const ProfileEventParticipationWhereUniqueInputSchema: z.ZodType<Prisma.ProfileEventParticipationWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    profileId_eventId: z.lazy(() => ProfileEventParticipationProfileIdEventIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    profileId_eventId: z.lazy(() => ProfileEventParticipationProfileIdEventIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  profileId_eventId: z.lazy(() => ProfileEventParticipationProfileIdEventIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ProfileEventParticipationWhereInputSchema),z.lazy(() => ProfileEventParticipationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileEventParticipationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileEventParticipationWhereInputSchema),z.lazy(() => ProfileEventParticipationWhereInputSchema).array() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  participationDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  classification: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  profile: z.union([ z.lazy(() => ProfileRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  event: z.union([ z.lazy(() => EventRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional(),
}).strict());

export const ProfileEventParticipationOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProfileEventParticipationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  participationDate: z.lazy(() => SortOrderSchema).optional(),
  classification: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ProfileEventParticipationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProfileEventParticipationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProfileEventParticipationMinOrderByAggregateInputSchema).optional()
}).strict();

export const ProfileEventParticipationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProfileEventParticipationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ProfileEventParticipationScalarWhereWithAggregatesInputSchema),z.lazy(() => ProfileEventParticipationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileEventParticipationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileEventParticipationScalarWhereWithAggregatesInputSchema),z.lazy(() => ProfileEventParticipationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  participationDate: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  classification: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const UserWhereInputSchema: z.ZodType<Prisma.UserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  passwordHash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  avatarUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tokens: z.lazy(() => TokenListRelationFilterSchema).optional(),
  invites: z.lazy(() => InviteListRelationFilterSchema).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
  companies: z.lazy(() => CompanyListRelationFilterSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyListRelationFilterSchema).optional(),
  notifications: z.lazy(() => NotificationListRelationFilterSchema).optional(),
  profile: z.union([ z.lazy(() => ProfileNullableRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional().nullable(),
  eventHistories: z.lazy(() => HistoryListRelationFilterSchema).optional(),
  Review: z.lazy(() => ReviewListRelationFilterSchema).optional()
}).strict();

export const UserOrderByWithRelationInputSchema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  passwordHash: z.lazy(() => SortOrderSchema).optional(),
  avatarUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  tokens: z.lazy(() => TokenOrderByRelationAggregateInputSchema).optional(),
  invites: z.lazy(() => InviteOrderByRelationAggregateInputSchema).optional(),
  bookings: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional(),
  companies: z.lazy(() => CompanyOrderByRelationAggregateInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyOrderByRelationAggregateInputSchema).optional(),
  notifications: z.lazy(() => NotificationOrderByRelationAggregateInputSchema).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryOrderByRelationAggregateInputSchema).optional(),
  Review: z.lazy(() => ReviewOrderByRelationAggregateInputSchema).optional()
}).strict();

export const UserWhereUniqueInputSchema: z.ZodType<Prisma.UserWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    email: z.string()
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserWhereInputSchema),z.lazy(() => UserWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  passwordHash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  avatarUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  tokens: z.lazy(() => TokenListRelationFilterSchema).optional(),
  invites: z.lazy(() => InviteListRelationFilterSchema).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
  companies: z.lazy(() => CompanyListRelationFilterSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyListRelationFilterSchema).optional(),
  notifications: z.lazy(() => NotificationListRelationFilterSchema).optional(),
  profile: z.union([ z.lazy(() => ProfileNullableRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional().nullable(),
  eventHistories: z.lazy(() => HistoryListRelationFilterSchema).optional(),
  Review: z.lazy(() => ReviewListRelationFilterSchema).optional()
}).strict());

export const UserOrderByWithAggregationInputSchema: z.ZodType<Prisma.UserOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  passwordHash: z.lazy(() => SortOrderSchema).optional(),
  avatarUrl: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => UserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => UserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => UserMinOrderByAggregateInputSchema).optional()
}).strict();

export const UserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.UserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereWithAggregatesInputSchema),z.lazy(() => UserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  passwordHash: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  avatarUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const TrophyWhereInputSchema: z.ZodType<Prisma.TrophyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TrophyWhereInputSchema),z.lazy(() => TrophyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrophyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrophyWhereInputSchema),z.lazy(() => TrophyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profile: z.union([ z.lazy(() => ProfileRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
}).strict();

export const TrophyOrderByWithRelationInputSchema: z.ZodType<Prisma.TrophyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  profile: z.lazy(() => ProfileOrderByWithRelationInputSchema).optional()
}).strict();

export const TrophyWhereUniqueInputSchema: z.ZodType<Prisma.TrophyWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TrophyWhereInputSchema),z.lazy(() => TrophyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrophyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrophyWhereInputSchema),z.lazy(() => TrophyWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profile: z.union([ z.lazy(() => ProfileRelationFilterSchema),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
}).strict());

export const TrophyOrderByWithAggregationInputSchema: z.ZodType<Prisma.TrophyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TrophyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TrophyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TrophyMinOrderByAggregateInputSchema).optional()
}).strict();

export const TrophyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TrophyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TrophyScalarWhereWithAggregatesInputSchema),z.lazy(() => TrophyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrophyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrophyScalarWhereWithAggregatesInputSchema),z.lazy(() => TrophyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  profileId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CityWhereInputSchema: z.ZodType<Prisma.CityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CityWhereInputSchema),z.lazy(() => CityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CityWhereInputSchema),z.lazy(() => CityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companies: z.lazy(() => CompanyListRelationFilterSchema).optional()
}).strict();

export const CityOrderByWithRelationInputSchema: z.ZodType<Prisma.CityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  country: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  companies: z.lazy(() => CompanyOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CityWhereUniqueInputSchema: z.ZodType<Prisma.CityWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => CityWhereInputSchema),z.lazy(() => CityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CityWhereInputSchema),z.lazy(() => CityWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companies: z.lazy(() => CompanyListRelationFilterSchema).optional()
}).strict());

export const CityOrderByWithAggregationInputSchema: z.ZodType<Prisma.CityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  state: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  country: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CityCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CityMinOrderByAggregateInputSchema).optional()
}).strict();

export const CityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CityScalarWhereWithAggregatesInputSchema),z.lazy(() => CityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CityScalarWhereWithAggregatesInputSchema),z.lazy(() => CityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  country: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CompanyTeacherWhereInputSchema: z.ZodType<Prisma.CompanyTeacherWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyTeacherWhereInputSchema),z.lazy(() => CompanyTeacherWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyTeacherWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyTeacherWhereInputSchema),z.lazy(() => CompanyTeacherWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  teacher: z.union([ z.lazy(() => TeacherRelationFilterSchema),z.lazy(() => TeacherWhereInputSchema) ]).optional(),
}).strict();

export const CompanyTeacherOrderByWithRelationInputSchema: z.ZodType<Prisma.CompanyTeacherOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional(),
  teacher: z.lazy(() => TeacherOrderByWithRelationInputSchema).optional()
}).strict();

export const CompanyTeacherWhereUniqueInputSchema: z.ZodType<Prisma.CompanyTeacherWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    companyId_teacherId: z.lazy(() => CompanyTeacherCompanyIdTeacherIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    companyId_teacherId: z.lazy(() => CompanyTeacherCompanyIdTeacherIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  companyId_teacherId: z.lazy(() => CompanyTeacherCompanyIdTeacherIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => CompanyTeacherWhereInputSchema),z.lazy(() => CompanyTeacherWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyTeacherWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyTeacherWhereInputSchema),z.lazy(() => CompanyTeacherWhereInputSchema).array() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  teacher: z.union([ z.lazy(() => TeacherRelationFilterSchema),z.lazy(() => TeacherWhereInputSchema) ]).optional(),
}).strict());

export const CompanyTeacherOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompanyTeacherOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CompanyTeacherCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompanyTeacherMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompanyTeacherMinOrderByAggregateInputSchema).optional()
}).strict();

export const CompanyTeacherScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompanyTeacherScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyTeacherScalarWhereWithAggregatesInputSchema),z.lazy(() => CompanyTeacherScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyTeacherScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyTeacherScalarWhereWithAggregatesInputSchema),z.lazy(() => CompanyTeacherScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const TeacherWhereInputSchema: z.ZodType<Prisma.TeacherWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TeacherWhereInputSchema),z.lazy(() => TeacherWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeacherWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeacherWhereInputSchema),z.lazy(() => TeacherWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bio: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  avatarImg: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherListRelationFilterSchema).optional()
}).strict();

export const TeacherOrderByWithRelationInputSchema: z.ZodType<Prisma.TeacherOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  avatarImg: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  bookings: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherOrderByRelationAggregateInputSchema).optional()
}).strict();

export const TeacherWhereUniqueInputSchema: z.ZodType<Prisma.TeacherWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TeacherWhereInputSchema),z.lazy(() => TeacherWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeacherWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeacherWhereInputSchema),z.lazy(() => TeacherWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bio: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  avatarImg: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherListRelationFilterSchema).optional()
}).strict());

export const TeacherOrderByWithAggregationInputSchema: z.ZodType<Prisma.TeacherOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  avatarImg: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TeacherCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TeacherMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TeacherMinOrderByAggregateInputSchema).optional()
}).strict();

export const TeacherScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TeacherScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TeacherScalarWhereWithAggregatesInputSchema),z.lazy(() => TeacherScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TeacherScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TeacherScalarWhereWithAggregatesInputSchema),z.lazy(() => TeacherScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bio: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  avatarImg: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CompanyWhereInputSchema: z.ZodType<Prisma.CompanyWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  domain: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  logoImg: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cityId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  addressId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  owner: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  courts: z.lazy(() => CourtListRelationFilterSchema).optional(),
  admins: z.lazy(() => UserListRelationFilterSchema).optional(),
  city: z.union([ z.lazy(() => CityNullableRelationFilterSchema),z.lazy(() => CityWhereInputSchema) ]).optional().nullable(),
  address: z.union([ z.lazy(() => AddressNullableRelationFilterSchema),z.lazy(() => AddressWhereInputSchema) ]).optional().nullable(),
  events: z.lazy(() => EventListRelationFilterSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherListRelationFilterSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursListRelationFilterSchema).optional()
}).strict();

export const CompanyOrderByWithRelationInputSchema: z.ZodType<Prisma.CompanyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  domain: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  logoImg: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  cityId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  addressId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  owner: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  courts: z.lazy(() => CourtOrderByRelationAggregateInputSchema).optional(),
  admins: z.lazy(() => UserOrderByRelationAggregateInputSchema).optional(),
  city: z.lazy(() => CityOrderByWithRelationInputSchema).optional(),
  address: z.lazy(() => AddressOrderByWithRelationInputSchema).optional(),
  events: z.lazy(() => EventOrderByRelationAggregateInputSchema).optional(),
  reviews: z.lazy(() => ReviewOrderByRelationAggregateInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherOrderByRelationAggregateInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CompanyWhereUniqueInputSchema: z.ZodType<Prisma.CompanyWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    slug: z.string(),
    domain: z.string(),
    addressId: z.string()
  }),
  z.object({
    id: z.string(),
    slug: z.string(),
    domain: z.string(),
  }),
  z.object({
    id: z.string(),
    slug: z.string(),
    addressId: z.string(),
  }),
  z.object({
    id: z.string(),
    slug: z.string(),
  }),
  z.object({
    id: z.string(),
    domain: z.string(),
    addressId: z.string(),
  }),
  z.object({
    id: z.string(),
    domain: z.string(),
  }),
  z.object({
    id: z.string(),
    addressId: z.string(),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    slug: z.string(),
    domain: z.string(),
    addressId: z.string(),
  }),
  z.object({
    slug: z.string(),
    domain: z.string(),
  }),
  z.object({
    slug: z.string(),
    addressId: z.string(),
  }),
  z.object({
    slug: z.string(),
  }),
  z.object({
    domain: z.string(),
    addressId: z.string(),
  }),
  z.object({
    domain: z.string(),
  }),
  z.object({
    addressId: z.string(),
  }),
])
.and(z.object({
  id: z.string().optional(),
  slug: z.string().optional(),
  domain: z.string().optional(),
  addressId: z.string().optional(),
  AND: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyWhereInputSchema),z.lazy(() => CompanyWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  logoImg: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cityId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  owner: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  courts: z.lazy(() => CourtListRelationFilterSchema).optional(),
  admins: z.lazy(() => UserListRelationFilterSchema).optional(),
  city: z.union([ z.lazy(() => CityNullableRelationFilterSchema),z.lazy(() => CityWhereInputSchema) ]).optional().nullable(),
  address: z.union([ z.lazy(() => AddressNullableRelationFilterSchema),z.lazy(() => AddressWhereInputSchema) ]).optional().nullable(),
  events: z.lazy(() => EventListRelationFilterSchema).optional(),
  reviews: z.lazy(() => ReviewListRelationFilterSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherListRelationFilterSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursListRelationFilterSchema).optional()
}).strict());

export const CompanyOrderByWithAggregationInputSchema: z.ZodType<Prisma.CompanyOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  domain: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  logoImg: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  cityId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  addressId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => CompanyCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CompanyMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CompanyMinOrderByAggregateInputSchema).optional()
}).strict();

export const CompanyScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CompanyScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema),z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema),z.lazy(() => CompanyScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  domain: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  logoImg: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  cityId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  addressId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AddressWhereInputSchema: z.ZodType<Prisma.AddressWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AddressWhereInputSchema),z.lazy(() => AddressWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AddressWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AddressWhereInputSchema),z.lazy(() => AddressWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  street: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  number: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  complement: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  district: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postalCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  company: z.union([ z.lazy(() => CompanyNullableRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional().nullable(),
}).strict();

export const AddressOrderByWithRelationInputSchema: z.ZodType<Prisma.AddressOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  number: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  complement: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  district: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional()
}).strict();

export const AddressWhereUniqueInputSchema: z.ZodType<Prisma.AddressWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AddressWhereInputSchema),z.lazy(() => AddressWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AddressWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AddressWhereInputSchema),z.lazy(() => AddressWhereInputSchema).array() ]).optional(),
  street: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  number: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  complement: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  district: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  postalCode: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  company: z.union([ z.lazy(() => CompanyNullableRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional().nullable(),
}).strict());

export const AddressOrderByWithAggregationInputSchema: z.ZodType<Prisma.AddressOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  number: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  complement: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  district: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AddressCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AddressMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AddressMinOrderByAggregateInputSchema).optional()
}).strict();

export const AddressScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AddressScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AddressScalarWhereWithAggregatesInputSchema),z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AddressScalarWhereWithAggregatesInputSchema),z.lazy(() => AddressScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  street: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  number: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  complement: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  district: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  city: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  state: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  country: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  postalCode: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const OpeningHoursWhereInputSchema: z.ZodType<Prisma.OpeningHoursWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OpeningHoursWhereInputSchema),z.lazy(() => OpeningHoursWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpeningHoursWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpeningHoursWhereInputSchema),z.lazy(() => OpeningHoursWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  opensAt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  closesAt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
}).strict();

export const OpeningHoursOrderByWithRelationInputSchema: z.ZodType<Prisma.OpeningHoursOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  opensAt: z.lazy(() => SortOrderSchema).optional(),
  closesAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional()
}).strict();

export const OpeningHoursWhereUniqueInputSchema: z.ZodType<Prisma.OpeningHoursWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    dayOfWeek_companyId: z.lazy(() => OpeningHoursDayOfWeekCompanyIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    dayOfWeek_companyId: z.lazy(() => OpeningHoursDayOfWeekCompanyIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  dayOfWeek_companyId: z.lazy(() => OpeningHoursDayOfWeekCompanyIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => OpeningHoursWhereInputSchema),z.lazy(() => OpeningHoursWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpeningHoursWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpeningHoursWhereInputSchema),z.lazy(() => OpeningHoursWhereInputSchema).array() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  opensAt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  closesAt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
}).strict());

export const OpeningHoursOrderByWithAggregationInputSchema: z.ZodType<Prisma.OpeningHoursOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  opensAt: z.lazy(() => SortOrderSchema).optional(),
  closesAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => OpeningHoursCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => OpeningHoursAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => OpeningHoursMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => OpeningHoursMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => OpeningHoursSumOrderByAggregateInputSchema).optional()
}).strict();

export const OpeningHoursScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.OpeningHoursScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => OpeningHoursScalarWhereWithAggregatesInputSchema),z.lazy(() => OpeningHoursScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpeningHoursScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpeningHoursScalarWhereWithAggregatesInputSchema),z.lazy(() => OpeningHoursScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  opensAt: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  closesAt: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ReviewWhereInputSchema: z.ZodType<Prisma.ReviewWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
}).strict();

export const ReviewOrderByWithRelationInputSchema: z.ZodType<Prisma.ReviewOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional()
}).strict();

export const ReviewWhereUniqueInputSchema: z.ZodType<Prisma.ReviewWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewWhereInputSchema),z.lazy(() => ReviewWhereInputSchema).array() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
}).strict());

export const ReviewOrderByWithAggregationInputSchema: z.ZodType<Prisma.ReviewOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  comment: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ReviewCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ReviewAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ReviewMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ReviewMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ReviewSumOrderByAggregateInputSchema).optional()
}).strict();

export const ReviewScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ReviewScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema),z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema),z.lazy(() => ReviewScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const CourtWhereInputSchema: z.ZodType<Prisma.CourtWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CourtWhereInputSchema),z.lazy(() => CourtWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourtWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourtWhereInputSchema),z.lazy(() => CourtWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumSportTypeFilterSchema),z.lazy(() => SportTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rules: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
  availability: z.lazy(() => AvailabilityListRelationFilterSchema).optional(),
  invites: z.lazy(() => InviteListRelationFilterSchema).optional()
}).strict();

export const CourtOrderByWithRelationInputSchema: z.ZodType<Prisma.CourtOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rules: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  company: z.lazy(() => CompanyOrderByWithRelationInputSchema).optional(),
  bookings: z.lazy(() => BookingOrderByRelationAggregateInputSchema).optional(),
  availability: z.lazy(() => AvailabilityOrderByRelationAggregateInputSchema).optional(),
  invites: z.lazy(() => InviteOrderByRelationAggregateInputSchema).optional()
}).strict();

export const CourtWhereUniqueInputSchema: z.ZodType<Prisma.CourtWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => CourtWhereInputSchema),z.lazy(() => CourtWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourtWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourtWhereInputSchema),z.lazy(() => CourtWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumSportTypeFilterSchema),z.lazy(() => SportTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rules: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  company: z.union([ z.lazy(() => CompanyRelationFilterSchema),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingListRelationFilterSchema).optional(),
  availability: z.lazy(() => AvailabilityListRelationFilterSchema).optional(),
  invites: z.lazy(() => InviteListRelationFilterSchema).optional()
}).strict());

export const CourtOrderByWithAggregationInputSchema: z.ZodType<Prisma.CourtOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  comments: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rules: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CourtCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CourtMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CourtMinOrderByAggregateInputSchema).optional()
}).strict();

export const CourtScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CourtScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => CourtScalarWhereWithAggregatesInputSchema),z.lazy(() => CourtScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourtScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourtScalarWhereWithAggregatesInputSchema),z.lazy(() => CourtScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumSportTypeWithAggregatesFilterSchema),z.lazy(() => SportTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  rules: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const BookingWhereInputSchema: z.ZodType<Prisma.BookingWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingWhereInputSchema),z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingWhereInputSchema),z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dateTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  courtId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  court: z.union([ z.lazy(() => CourtRelationFilterSchema),z.lazy(() => CourtWhereInputSchema) ]).optional(),
  invite: z.union([ z.lazy(() => InviteNullableRelationFilterSchema),z.lazy(() => InviteWhereInputSchema) ]).optional().nullable(),
  history: z.lazy(() => HistoryListRelationFilterSchema).optional(),
  Teacher: z.union([ z.lazy(() => TeacherNullableRelationFilterSchema),z.lazy(() => TeacherWhereInputSchema) ]).optional().nullable(),
}).strict();

export const BookingOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dateTime: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  court: z.lazy(() => CourtOrderByWithRelationInputSchema).optional(),
  invite: z.lazy(() => InviteOrderByWithRelationInputSchema).optional(),
  history: z.lazy(() => HistoryOrderByRelationAggregateInputSchema).optional(),
  Teacher: z.lazy(() => TeacherOrderByWithRelationInputSchema).optional()
}).strict();

export const BookingWhereUniqueInputSchema: z.ZodType<Prisma.BookingWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => BookingWhereInputSchema),z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingWhereInputSchema),z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  dateTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  courtId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  court: z.union([ z.lazy(() => CourtRelationFilterSchema),z.lazy(() => CourtWhereInputSchema) ]).optional(),
  invite: z.union([ z.lazy(() => InviteNullableRelationFilterSchema),z.lazy(() => InviteWhereInputSchema) ]).optional().nullable(),
  history: z.lazy(() => HistoryListRelationFilterSchema).optional(),
  Teacher: z.union([ z.lazy(() => TeacherNullableRelationFilterSchema),z.lazy(() => TeacherWhereInputSchema) ]).optional().nullable(),
}).strict());

export const BookingOrderByWithAggregationInputSchema: z.ZodType<Prisma.BookingOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dateTime: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => BookingCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => BookingAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BookingMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BookingMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => BookingSumOrderByAggregateInputSchema).optional()
}).strict();

export const BookingScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BookingScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => BookingScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingScalarWhereWithAggregatesInputSchema),z.lazy(() => BookingScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dateTime: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  price: z.union([ z.lazy(() => FloatWithAggregatesFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  courtId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const InviteWhereInputSchema: z.ZodType<Prisma.InviteWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InviteWhereInputSchema),z.lazy(() => InviteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteWhereInputSchema),z.lazy(() => InviteWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  authorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  courtId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  author: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  court: z.union([ z.lazy(() => CourtRelationFilterSchema),z.lazy(() => CourtWhereInputSchema) ]).optional(),
  booking: z.union([ z.lazy(() => BookingNullableRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional().nullable(),
}).strict();

export const InviteOrderByWithRelationInputSchema: z.ZodType<Prisma.InviteOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  author: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  court: z.lazy(() => CourtOrderByWithRelationInputSchema).optional(),
  booking: z.lazy(() => BookingOrderByWithRelationInputSchema).optional()
}).strict();

export const InviteWhereUniqueInputSchema: z.ZodType<Prisma.InviteWhereUniqueInput> = z.union([
  z.object({
    id: z.string(),
    bookingId: z.string(),
    email_courtId: z.lazy(() => InviteEmailCourtIdCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.string(),
    bookingId: z.string(),
  }),
  z.object({
    id: z.string(),
    email_courtId: z.lazy(() => InviteEmailCourtIdCompoundUniqueInputSchema),
  }),
  z.object({
    id: z.string(),
  }),
  z.object({
    bookingId: z.string(),
    email_courtId: z.lazy(() => InviteEmailCourtIdCompoundUniqueInputSchema),
  }),
  z.object({
    bookingId: z.string(),
  }),
  z.object({
    email_courtId: z.lazy(() => InviteEmailCourtIdCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.string().optional(),
  bookingId: z.string().optional(),
  email_courtId: z.lazy(() => InviteEmailCourtIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => InviteWhereInputSchema),z.lazy(() => InviteWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteWhereInputSchema),z.lazy(() => InviteWhereInputSchema).array() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  authorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  courtId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  author: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
  court: z.union([ z.lazy(() => CourtRelationFilterSchema),z.lazy(() => CourtWhereInputSchema) ]).optional(),
  booking: z.union([ z.lazy(() => BookingNullableRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional().nullable(),
}).strict());

export const InviteOrderByWithAggregationInputSchema: z.ZodType<Prisma.InviteOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => InviteCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InviteMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InviteMinOrderByAggregateInputSchema).optional()
}).strict();

export const InviteScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.InviteScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => InviteScalarWhereWithAggregatesInputSchema),z.lazy(() => InviteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteScalarWhereWithAggregatesInputSchema),z.lazy(() => InviteScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  authorId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  courtId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const AvailabilityWhereInputSchema: z.ZodType<Prisma.AvailabilityWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isPeakHour: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courtId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  court: z.union([ z.lazy(() => CourtRelationFilterSchema),z.lazy(() => CourtWhereInputSchema) ]).optional(),
}).strict();

export const AvailabilityOrderByWithRelationInputSchema: z.ZodType<Prisma.AvailabilityOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  isPeakHour: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  court: z.lazy(() => CourtOrderByWithRelationInputSchema).optional()
}).strict();

export const AvailabilityWhereUniqueInputSchema: z.ZodType<Prisma.AvailabilityWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityWhereInputSchema),z.lazy(() => AvailabilityWhereInputSchema).array() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isPeakHour: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courtId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  court: z.union([ z.lazy(() => CourtRelationFilterSchema),z.lazy(() => CourtWhereInputSchema) ]).optional(),
}).strict());

export const AvailabilityOrderByWithAggregationInputSchema: z.ZodType<Prisma.AvailabilityOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  isPeakHour: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => AvailabilityCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => AvailabilityAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => AvailabilityMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => AvailabilityMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => AvailabilitySumOrderByAggregateInputSchema).optional()
}).strict();

export const AvailabilityScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.AvailabilityScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema),z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema),z.lazy(() => AvailabilityScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  startTime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  isPeakHour: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  courtId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const NotificationWhereInputSchema: z.ZodType<Prisma.NotificationWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumNotificationTypeFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const NotificationOrderByWithRelationInputSchema: z.ZodType<Prisma.NotificationOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const NotificationWhereUniqueInputSchema: z.ZodType<Prisma.NotificationWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationWhereInputSchema),z.lazy(() => NotificationWhereInputSchema).array() ]).optional(),
  type: z.union([ z.lazy(() => EnumNotificationTypeFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const NotificationOrderByWithAggregationInputSchema: z.ZodType<Prisma.NotificationOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => NotificationCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => NotificationMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => NotificationMinOrderByAggregateInputSchema).optional()
}).strict();

export const NotificationScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NotificationScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumNotificationTypeWithAggregatesFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  message: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const HistoryWhereInputSchema: z.ZodType<Prisma.HistoryWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HistoryWhereInputSchema),z.lazy(() => HistoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HistoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HistoryWhereInputSchema),z.lazy(() => HistoryWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  result: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  booking: z.union([ z.lazy(() => BookingRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  event: z.union([ z.lazy(() => EventNullableRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional().nullable(),
}).strict();

export const HistoryOrderByWithRelationInputSchema: z.ZodType<Prisma.HistoryOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  result: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional(),
  booking: z.lazy(() => BookingOrderByWithRelationInputSchema).optional(),
  event: z.lazy(() => EventOrderByWithRelationInputSchema).optional()
}).strict();

export const HistoryWhereUniqueInputSchema: z.ZodType<Prisma.HistoryWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => HistoryWhereInputSchema),z.lazy(() => HistoryWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HistoryWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HistoryWhereInputSchema),z.lazy(() => HistoryWhereInputSchema).array() ]).optional(),
  result: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
  booking: z.union([ z.lazy(() => BookingRelationFilterSchema),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  event: z.union([ z.lazy(() => EventNullableRelationFilterSchema),z.lazy(() => EventWhereInputSchema) ]).optional().nullable(),
}).strict());

export const HistoryOrderByWithAggregationInputSchema: z.ZodType<Prisma.HistoryOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  result: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => HistoryCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => HistoryMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => HistoryMinOrderByAggregateInputSchema).optional()
}).strict();

export const HistoryScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.HistoryScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => HistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => HistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => HistoryScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HistoryScalarWhereWithAggregatesInputSchema),z.lazy(() => HistoryScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  result: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TokenWhereInputSchema: z.ZodType<Prisma.TokenWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TokenWhereInputSchema),z.lazy(() => TokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TokenWhereInputSchema),z.lazy(() => TokenWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumTokenTypeFilterSchema),z.lazy(() => TokenTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export const TokenOrderByWithRelationInputSchema: z.ZodType<Prisma.TokenOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => UserOrderByWithRelationInputSchema).optional()
}).strict();

export const TokenWhereUniqueInputSchema: z.ZodType<Prisma.TokenWhereUniqueInput> = z.object({
  id: z.string()
})
.and(z.object({
  id: z.string().optional(),
  AND: z.union([ z.lazy(() => TokenWhereInputSchema),z.lazy(() => TokenWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TokenWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TokenWhereInputSchema),z.lazy(() => TokenWhereInputSchema).array() ]).optional(),
  type: z.union([ z.lazy(() => EnumTokenTypeFilterSchema),z.lazy(() => TokenTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export const TokenOrderByWithAggregationInputSchema: z.ZodType<Prisma.TokenOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TokenCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TokenMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TokenMinOrderByAggregateInputSchema).optional()
}).strict();

export const TokenScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TokenScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TokenScalarWhereWithAggregatesInputSchema),z.lazy(() => TokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TokenScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TokenScalarWhereWithAggregatesInputSchema),z.lazy(() => TokenScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumTokenTypeWithAggregatesFilterSchema),z.lazy(() => TokenTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export const ProfileCreateInputSchema: z.ZodType<Prisma.ProfileCreateInput> = z.object({
  id: z.string().optional(),
  bio: z.string().optional().nullable(),
  level: z.number().optional(),
  matchesPlayed: z.number().optional(),
  wins: z.number().optional(),
  losses: z.number().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputSchema),
  events: z.lazy(() => ProfileEventParticipationCreateNestedManyWithoutProfileInputSchema).optional(),
  trophies: z.lazy(() => TrophyCreateNestedManyWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  bio: z.string().optional().nullable(),
  level: z.number().optional(),
  matchesPlayed: z.number().optional(),
  wins: z.number().optional(),
  losses: z.number().optional(),
  userId: z.string(),
  events: z.lazy(() => ProfileEventParticipationUncheckedCreateNestedManyWithoutProfileInputSchema).optional(),
  trophies: z.lazy(() => TrophyUncheckedCreateNestedManyWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUpdateInputSchema: z.ZodType<Prisma.ProfileUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  matchesPlayed: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  wins: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  losses: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProfileNestedInputSchema).optional(),
  events: z.lazy(() => ProfileEventParticipationUpdateManyWithoutProfileNestedInputSchema).optional(),
  trophies: z.lazy(() => TrophyUpdateManyWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  matchesPlayed: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  wins: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  losses: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  events: z.lazy(() => ProfileEventParticipationUncheckedUpdateManyWithoutProfileNestedInputSchema).optional(),
  trophies: z.lazy(() => TrophyUncheckedUpdateManyWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileCreateManyInputSchema: z.ZodType<Prisma.ProfileCreateManyInput> = z.object({
  id: z.string().optional(),
  bio: z.string().optional().nullable(),
  level: z.number().optional(),
  matchesPlayed: z.number().optional(),
  wins: z.number().optional(),
  losses: z.number().optional(),
  userId: z.string()
}).strict();

export const ProfileUpdateManyMutationInputSchema: z.ZodType<Prisma.ProfileUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  matchesPlayed: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  wins: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  losses: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProfileUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  matchesPlayed: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  wins: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  losses: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventCreateInputSchema: z.ZodType<Prisma.EventCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutEventsInputSchema),
  participants: z.lazy(() => ProfileEventParticipationCreateNestedManyWithoutEventInputSchema).optional(),
  histories: z.lazy(() => HistoryCreateNestedManyWithoutEventInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleCreateNestedManyWithoutEventInputSchema).optional(),
  Prize: z.lazy(() => PrizeCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUncheckedCreateInputSchema: z.ZodType<Prisma.EventUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  companyId: z.string(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  participants: z.lazy(() => ProfileEventParticipationUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  histories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  Prize: z.lazy(() => PrizeUncheckedCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUpdateInputSchema: z.ZodType<Prisma.EventUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutEventsNestedInputSchema).optional(),
  participants: z.lazy(() => ProfileEventParticipationUpdateManyWithoutEventNestedInputSchema).optional(),
  histories: z.lazy(() => HistoryUpdateManyWithoutEventNestedInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUpdateManyWithoutEventNestedInputSchema).optional(),
  Prize: z.lazy(() => PrizeUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateInputSchema: z.ZodType<Prisma.EventUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  participants: z.lazy(() => ProfileEventParticipationUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  histories: z.lazy(() => HistoryUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  Prize: z.lazy(() => PrizeUncheckedUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventCreateManyInputSchema: z.ZodType<Prisma.EventCreateManyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  companyId: z.string(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number()
}).strict();

export const EventUpdateManyMutationInputSchema: z.ZodType<Prisma.EventUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrizeCreateInputSchema: z.ZodType<Prisma.PrizeCreateInput> = z.object({
  id: z.string().optional(),
  position: z.number(),
  amount: z.number(),
  event: z.lazy(() => EventCreateNestedOneWithoutPrizeInputSchema)
}).strict();

export const PrizeUncheckedCreateInputSchema: z.ZodType<Prisma.PrizeUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  position: z.number(),
  amount: z.number(),
  eventId: z.string()
}).strict();

export const PrizeUpdateInputSchema: z.ZodType<Prisma.PrizeUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutPrizeNestedInputSchema).optional()
}).strict();

export const PrizeUncheckedUpdateInputSchema: z.ZodType<Prisma.PrizeUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrizeCreateManyInputSchema: z.ZodType<Prisma.PrizeCreateManyInput> = z.object({
  id: z.string().optional(),
  position: z.number(),
  amount: z.number(),
  eventId: z.string()
}).strict();

export const PrizeUpdateManyMutationInputSchema: z.ZodType<Prisma.PrizeUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrizeUncheckedUpdateManyInputSchema: z.ZodType<Prisma.PrizeUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventRuleCreateInputSchema: z.ZodType<Prisma.EventRuleCreateInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  value: z.string(),
  event: z.lazy(() => EventCreateNestedOneWithoutEventRuleInputSchema)
}).strict();

export const EventRuleUncheckedCreateInputSchema: z.ZodType<Prisma.EventRuleUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  value: z.string(),
  eventId: z.string()
}).strict();

export const EventRuleUpdateInputSchema: z.ZodType<Prisma.EventRuleUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutEventRuleNestedInputSchema).optional()
}).strict();

export const EventRuleUncheckedUpdateInputSchema: z.ZodType<Prisma.EventRuleUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventRuleCreateManyInputSchema: z.ZodType<Prisma.EventRuleCreateManyInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  value: z.string(),
  eventId: z.string()
}).strict();

export const EventRuleUpdateManyMutationInputSchema: z.ZodType<Prisma.EventRuleUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventRuleUncheckedUpdateManyInputSchema: z.ZodType<Prisma.EventRuleUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProfileEventParticipationCreateInputSchema: z.ZodType<Prisma.ProfileEventParticipationCreateInput> = z.object({
  id: z.string().optional(),
  participationDate: z.coerce.date().optional(),
  classification: z.string().optional().nullable(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutEventsInputSchema),
  event: z.lazy(() => EventCreateNestedOneWithoutParticipantsInputSchema)
}).strict();

export const ProfileEventParticipationUncheckedCreateInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  profileId: z.string(),
  eventId: z.string(),
  participationDate: z.coerce.date().optional(),
  classification: z.string().optional().nullable()
}).strict();

export const ProfileEventParticipationUpdateInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participationDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classification: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutEventsNestedInputSchema).optional(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutParticipantsNestedInputSchema).optional()
}).strict();

export const ProfileEventParticipationUncheckedUpdateInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participationDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classification: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProfileEventParticipationCreateManyInputSchema: z.ZodType<Prisma.ProfileEventParticipationCreateManyInput> = z.object({
  id: z.string().optional(),
  profileId: z.string(),
  eventId: z.string(),
  participationDate: z.coerce.date().optional(),
  classification: z.string().optional().nullable()
}).strict();

export const ProfileEventParticipationUpdateManyMutationInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participationDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classification: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProfileEventParticipationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participationDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classification: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateInputSchema: z.ZodType<Prisma.UserUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUpdateInputSchema: z.ZodType<Prisma.UserUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateInputSchema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateManyInputSchema: z.ZodType<Prisma.UserCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const UserUpdateManyMutationInputSchema: z.ZodType<Prisma.UserUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUncheckedUpdateManyInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TrophyCreateInputSchema: z.ZodType<Prisma.TrophyCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  date: z.coerce.date(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutTrophiesInputSchema)
}).strict();

export const TrophyUncheckedCreateInputSchema: z.ZodType<Prisma.TrophyUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  date: z.coerce.date(),
  profileId: z.string()
}).strict();

export const TrophyUpdateInputSchema: z.ZodType<Prisma.TrophyUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutTrophiesNestedInputSchema).optional()
}).strict();

export const TrophyUncheckedUpdateInputSchema: z.ZodType<Prisma.TrophyUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TrophyCreateManyInputSchema: z.ZodType<Prisma.TrophyCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  date: z.coerce.date(),
  profileId: z.string()
}).strict();

export const TrophyUpdateManyMutationInputSchema: z.ZodType<Prisma.TrophyUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TrophyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TrophyUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CityCreateInputSchema: z.ZodType<Prisma.CityCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  state: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  companies: z.lazy(() => CompanyCreateNestedManyWithoutCityInputSchema).optional()
}).strict();

export const CityUncheckedCreateInputSchema: z.ZodType<Prisma.CityUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  state: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  companies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutCityInputSchema).optional()
}).strict();

export const CityUpdateInputSchema: z.ZodType<Prisma.CityUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companies: z.lazy(() => CompanyUpdateManyWithoutCityNestedInputSchema).optional()
}).strict();

export const CityUncheckedUpdateInputSchema: z.ZodType<Prisma.CityUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companies: z.lazy(() => CompanyUncheckedUpdateManyWithoutCityNestedInputSchema).optional()
}).strict();

export const CityCreateManyInputSchema: z.ZodType<Prisma.CityCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  state: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CityUpdateManyMutationInputSchema: z.ZodType<Prisma.CityUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyTeacherCreateInputSchema: z.ZodType<Prisma.CompanyTeacherCreateInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutCompanyTeacherInputSchema),
  teacher: z.lazy(() => TeacherCreateNestedOneWithoutCompanyTeacherInputSchema)
}).strict();

export const CompanyTeacherUncheckedCreateInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  companyId: z.string(),
  teacherId: z.string()
}).strict();

export const CompanyTeacherUpdateInputSchema: z.ZodType<Prisma.CompanyTeacherUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutCompanyTeacherNestedInputSchema).optional(),
  teacher: z.lazy(() => TeacherUpdateOneRequiredWithoutCompanyTeacherNestedInputSchema).optional()
}).strict();

export const CompanyTeacherUncheckedUpdateInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyTeacherCreateManyInputSchema: z.ZodType<Prisma.CompanyTeacherCreateManyInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  companyId: z.string(),
  teacherId: z.string()
}).strict();

export const CompanyTeacherUpdateManyMutationInputSchema: z.ZodType<Prisma.CompanyTeacherUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyTeacherUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeacherCreateInputSchema: z.ZodType<Prisma.TeacherCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  bio: z.string().optional().nullable(),
  avatarImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutTeacherInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutTeacherInputSchema).optional()
}).strict();

export const TeacherUncheckedCreateInputSchema: z.ZodType<Prisma.TeacherUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  bio: z.string().optional().nullable(),
  avatarImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutTeacherInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutTeacherInputSchema).optional()
}).strict();

export const TeacherUpdateInputSchema: z.ZodType<Prisma.TeacherUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutTeacherNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutTeacherNestedInputSchema).optional()
}).strict();

export const TeacherUncheckedUpdateInputSchema: z.ZodType<Prisma.TeacherUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional()
}).strict();

export const TeacherCreateManyInputSchema: z.ZodType<Prisma.TeacherCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  bio: z.string().optional().nullable(),
  avatarImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const TeacherUpdateManyMutationInputSchema: z.ZodType<Prisma.TeacherUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TeacherUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TeacherUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyCreateInputSchema: z.ZodType<Prisma.CompanyCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedCompaniesInputSchema),
  courts: z.lazy(() => CourtCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserCreateNestedManyWithoutCompaniesInputSchema).optional(),
  city: z.lazy(() => CityCreateNestedOneWithoutCompaniesInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutCompanyInputSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  cityId: z.string().optional().nullable(),
  addressId: z.string().optional().nullable(),
  courts: z.lazy(() => CourtUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedCreateNestedManyWithoutCompaniesInputSchema).optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUpdateInputSchema: z.ZodType<Prisma.CompanyUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedCompaniesNestedInputSchema).optional(),
  courts: z.lazy(() => CourtUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  city: z.lazy(() => CityUpdateOneWithoutCompaniesNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutCompanyNestedInputSchema).optional(),
  events: z.lazy(() => EventUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courts: z.lazy(() => CourtUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyCreateManyInputSchema: z.ZodType<Prisma.CompanyCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  cityId: z.string().optional().nullable(),
  addressId: z.string().optional().nullable()
}).strict();

export const CompanyUpdateManyMutationInputSchema: z.ZodType<Prisma.CompanyUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AddressCreateInputSchema: z.ZodType<Prisma.AddressCreateInput> = z.object({
  id: z.string().optional(),
  street: z.string(),
  number: z.string().optional().nullable(),
  complement: z.string().optional().nullable(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postalCode: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutAddressInputSchema).optional()
}).strict();

export const AddressUncheckedCreateInputSchema: z.ZodType<Prisma.AddressUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  street: z.string(),
  number: z.string().optional().nullable(),
  complement: z.string().optional().nullable(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postalCode: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyUncheckedCreateNestedOneWithoutAddressInputSchema).optional()
}).strict();

export const AddressUpdateInputSchema: z.ZodType<Prisma.AddressUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  complement: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  district: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneWithoutAddressNestedInputSchema).optional()
}).strict();

export const AddressUncheckedUpdateInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  complement: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  district: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUncheckedUpdateOneWithoutAddressNestedInputSchema).optional()
}).strict();

export const AddressCreateManyInputSchema: z.ZodType<Prisma.AddressCreateManyInput> = z.object({
  id: z.string().optional(),
  street: z.string(),
  number: z.string().optional().nullable(),
  complement: z.string().optional().nullable(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postalCode: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AddressUpdateManyMutationInputSchema: z.ZodType<Prisma.AddressUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  complement: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  district: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AddressUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  complement: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  district: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OpeningHoursCreateInputSchema: z.ZodType<Prisma.OpeningHoursCreateInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  opensAt: z.string(),
  closesAt: z.string(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutOpeningHoursInputSchema)
}).strict();

export const OpeningHoursUncheckedCreateInputSchema: z.ZodType<Prisma.OpeningHoursUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  opensAt: z.string(),
  closesAt: z.string(),
  companyId: z.string()
}).strict();

export const OpeningHoursUpdateInputSchema: z.ZodType<Prisma.OpeningHoursUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opensAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  closesAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutOpeningHoursNestedInputSchema).optional()
}).strict();

export const OpeningHoursUncheckedUpdateInputSchema: z.ZodType<Prisma.OpeningHoursUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opensAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  closesAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OpeningHoursCreateManyInputSchema: z.ZodType<Prisma.OpeningHoursCreateManyInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  opensAt: z.string(),
  closesAt: z.string(),
  companyId: z.string()
}).strict();

export const OpeningHoursUpdateManyMutationInputSchema: z.ZodType<Prisma.OpeningHoursUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opensAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  closesAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OpeningHoursUncheckedUpdateManyInputSchema: z.ZodType<Prisma.OpeningHoursUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opensAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  closesAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewCreateInputSchema: z.ZodType<Prisma.ReviewCreateInput> = z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewInputSchema),
  company: z.lazy(() => CompanyCreateNestedOneWithoutReviewsInputSchema)
}).strict();

export const ReviewUncheckedCreateInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  companyId: z.string()
}).strict();

export const ReviewUpdateInputSchema: z.ZodType<Prisma.ReviewUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReviewNestedInputSchema).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutReviewsNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewCreateManyInputSchema: z.ZodType<Prisma.ReviewCreateManyInput> = z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  companyId: z.string()
}).strict();

export const ReviewUpdateManyMutationInputSchema: z.ZodType<Prisma.ReviewUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourtCreateInputSchema: z.ZodType<Prisma.CourtCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutCourtsInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutCourtInputSchema).optional(),
  availability: z.lazy(() => AvailabilityCreateNestedManyWithoutCourtInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutCourtInputSchema).optional()
}).strict();

export const CourtUncheckedCreateInputSchema: z.ZodType<Prisma.CourtUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  companyId: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutCourtInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutCourtInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutCourtInputSchema).optional()
}).strict();

export const CourtUpdateInputSchema: z.ZodType<Prisma.CourtUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutCourtsNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutCourtNestedInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUpdateManyWithoutCourtNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutCourtNestedInputSchema).optional()
}).strict();

export const CourtUncheckedUpdateInputSchema: z.ZodType<Prisma.CourtUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutCourtNestedInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutCourtNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutCourtNestedInputSchema).optional()
}).strict();

export const CourtCreateManyInputSchema: z.ZodType<Prisma.CourtCreateManyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  companyId: z.string()
}).strict();

export const CourtUpdateManyMutationInputSchema: z.ZodType<Prisma.CourtUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourtUncheckedUpdateManyInputSchema: z.ZodType<Prisma.CourtUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BookingCreateInputSchema: z.ZodType<Prisma.BookingCreateInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBookingsInputSchema),
  court: z.lazy(() => CourtCreateNestedOneWithoutBookingsInputSchema),
  invite: z.lazy(() => InviteCreateNestedOneWithoutBookingInputSchema).optional(),
  history: z.lazy(() => HistoryCreateNestedManyWithoutBookingInputSchema).optional(),
  Teacher: z.lazy(() => TeacherCreateNestedOneWithoutBookingsInputSchema).optional()
}).strict();

export const BookingUncheckedCreateInputSchema: z.ZodType<Prisma.BookingUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  courtId: z.string(),
  teacherId: z.string().optional().nullable(),
  invite: z.lazy(() => InviteUncheckedCreateNestedOneWithoutBookingInputSchema).optional(),
  history: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutBookingInputSchema).optional()
}).strict();

export const BookingUpdateInputSchema: z.ZodType<Prisma.BookingUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  court: z.lazy(() => CourtUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  invite: z.lazy(() => InviteUpdateOneWithoutBookingNestedInputSchema).optional(),
  history: z.lazy(() => HistoryUpdateManyWithoutBookingNestedInputSchema).optional(),
  Teacher: z.lazy(() => TeacherUpdateOneWithoutBookingsNestedInputSchema).optional()
}).strict();

export const BookingUncheckedUpdateInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invite: z.lazy(() => InviteUncheckedUpdateOneWithoutBookingNestedInputSchema).optional(),
  history: z.lazy(() => HistoryUncheckedUpdateManyWithoutBookingNestedInputSchema).optional()
}).strict();

export const BookingCreateManyInputSchema: z.ZodType<Prisma.BookingCreateManyInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  courtId: z.string(),
  teacherId: z.string().optional().nullable()
}).strict();

export const BookingUpdateManyMutationInputSchema: z.ZodType<Prisma.BookingUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BookingUncheckedUpdateManyInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InviteCreateInputSchema: z.ZodType<Prisma.InviteCreateInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutInvitesInputSchema).optional(),
  court: z.lazy(() => CourtCreateNestedOneWithoutInvitesInputSchema),
  booking: z.lazy(() => BookingCreateNestedOneWithoutInviteInputSchema).optional()
}).strict();

export const InviteUncheckedCreateInputSchema: z.ZodType<Prisma.InviteUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  authorId: z.string().optional().nullable(),
  courtId: z.string(),
  bookingId: z.string().optional().nullable()
}).strict();

export const InviteUpdateInputSchema: z.ZodType<Prisma.InviteUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneWithoutInvitesNestedInputSchema).optional(),
  court: z.lazy(() => CourtUpdateOneRequiredWithoutInvitesNestedInputSchema).optional(),
  booking: z.lazy(() => BookingUpdateOneWithoutInviteNestedInputSchema).optional()
}).strict();

export const InviteUncheckedUpdateInputSchema: z.ZodType<Prisma.InviteUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InviteCreateManyInputSchema: z.ZodType<Prisma.InviteCreateManyInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  authorId: z.string().optional().nullable(),
  courtId: z.string(),
  bookingId: z.string().optional().nullable()
}).strict();

export const InviteUpdateManyMutationInputSchema: z.ZodType<Prisma.InviteUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteUncheckedUpdateManyInputSchema: z.ZodType<Prisma.InviteUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AvailabilityCreateInputSchema: z.ZodType<Prisma.AvailabilityCreateInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  isPeakHour: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  court: z.lazy(() => CourtCreateNestedOneWithoutAvailabilityInputSchema)
}).strict();

export const AvailabilityUncheckedCreateInputSchema: z.ZodType<Prisma.AvailabilityUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  isPeakHour: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  courtId: z.string()
}).strict();

export const AvailabilityUpdateInputSchema: z.ZodType<Prisma.AvailabilityUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isPeakHour: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  court: z.lazy(() => CourtUpdateOneRequiredWithoutAvailabilityNestedInputSchema).optional()
}).strict();

export const AvailabilityUncheckedUpdateInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isPeakHour: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityCreateManyInputSchema: z.ZodType<Prisma.AvailabilityCreateManyInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  isPeakHour: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  courtId: z.string()
}).strict();

export const AvailabilityUpdateManyMutationInputSchema: z.ZodType<Prisma.AvailabilityUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isPeakHour: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateManyInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isPeakHour: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationCreateInputSchema: z.ZodType<Prisma.NotificationCreateInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => NotificationTypeSchema),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutNotificationsInputSchema)
}).strict();

export const NotificationUncheckedCreateInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => NotificationTypeSchema),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const NotificationUpdateInputSchema: z.ZodType<Prisma.NotificationUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutNotificationsNestedInputSchema).optional()
}).strict();

export const NotificationUncheckedUpdateInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationCreateManyInputSchema: z.ZodType<Prisma.NotificationCreateManyInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => NotificationTypeSchema),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const NotificationUpdateManyMutationInputSchema: z.ZodType<Prisma.NotificationUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HistoryCreateInputSchema: z.ZodType<Prisma.HistoryCreateInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutEventHistoriesInputSchema),
  booking: z.lazy(() => BookingCreateNestedOneWithoutHistoryInputSchema),
  event: z.lazy(() => EventCreateNestedOneWithoutHistoriesInputSchema).optional()
}).strict();

export const HistoryUncheckedCreateInputSchema: z.ZodType<Prisma.HistoryUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  bookingId: z.string(),
  eventId: z.string().optional().nullable()
}).strict();

export const HistoryUpdateInputSchema: z.ZodType<Prisma.HistoryUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutEventHistoriesNestedInputSchema).optional(),
  booking: z.lazy(() => BookingUpdateOneRequiredWithoutHistoryNestedInputSchema).optional(),
  event: z.lazy(() => EventUpdateOneWithoutHistoriesNestedInputSchema).optional()
}).strict();

export const HistoryUncheckedUpdateInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const HistoryCreateManyInputSchema: z.ZodType<Prisma.HistoryCreateManyInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  bookingId: z.string(),
  eventId: z.string().optional().nullable()
}).strict();

export const HistoryUpdateManyMutationInputSchema: z.ZodType<Prisma.HistoryUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HistoryUncheckedUpdateManyInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TokenCreateInputSchema: z.ZodType<Prisma.TokenCreateInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => TokenTypeSchema),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutTokensInputSchema)
}).strict();

export const TokenUncheckedCreateInputSchema: z.ZodType<Prisma.TokenUncheckedCreateInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => TokenTypeSchema),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const TokenUpdateInputSchema: z.ZodType<Prisma.TokenUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => EnumTokenTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutTokensNestedInputSchema).optional()
}).strict();

export const TokenUncheckedUpdateInputSchema: z.ZodType<Prisma.TokenUncheckedUpdateInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => EnumTokenTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TokenCreateManyInputSchema: z.ZodType<Prisma.TokenCreateManyInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => TokenTypeSchema),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const TokenUpdateManyMutationInputSchema: z.ZodType<Prisma.TokenUpdateManyMutationInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => EnumTokenTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TokenUncheckedUpdateManyInputSchema: z.ZodType<Prisma.TokenUncheckedUpdateManyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => EnumTokenTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const StringFilterSchema: z.ZodType<Prisma.StringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const StringNullableFilterSchema: z.ZodType<Prisma.StringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const IntFilterSchema: z.ZodType<Prisma.IntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const UserRelationFilterSchema: z.ZodType<Prisma.UserRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional(),
  isNot: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const ProfileEventParticipationListRelationFilterSchema: z.ZodType<Prisma.ProfileEventParticipationListRelationFilter> = z.object({
  every: z.lazy(() => ProfileEventParticipationWhereInputSchema).optional(),
  some: z.lazy(() => ProfileEventParticipationWhereInputSchema).optional(),
  none: z.lazy(() => ProfileEventParticipationWhereInputSchema).optional()
}).strict();

export const TrophyListRelationFilterSchema: z.ZodType<Prisma.TrophyListRelationFilter> = z.object({
  every: z.lazy(() => TrophyWhereInputSchema).optional(),
  some: z.lazy(() => TrophyWhereInputSchema).optional(),
  none: z.lazy(() => TrophyWhereInputSchema).optional()
}).strict();

export const SortOrderInputSchema: z.ZodType<Prisma.SortOrderInput> = z.object({
  sort: z.lazy(() => SortOrderSchema),
  nulls: z.lazy(() => NullsOrderSchema).optional()
}).strict();

export const ProfileEventParticipationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProfileEventParticipationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TrophyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TrophyOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  matchesPlayed: z.lazy(() => SortOrderSchema).optional(),
  wins: z.lazy(() => SortOrderSchema).optional(),
  losses: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileAvgOrderByAggregateInput> = z.object({
  level: z.lazy(() => SortOrderSchema).optional(),
  matchesPlayed: z.lazy(() => SortOrderSchema).optional(),
  wins: z.lazy(() => SortOrderSchema).optional(),
  losses: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  matchesPlayed: z.lazy(() => SortOrderSchema).optional(),
  wins: z.lazy(() => SortOrderSchema).optional(),
  losses: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  level: z.lazy(() => SortOrderSchema).optional(),
  matchesPlayed: z.lazy(() => SortOrderSchema).optional(),
  wins: z.lazy(() => SortOrderSchema).optional(),
  losses: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileSumOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileSumOrderByAggregateInput> = z.object({
  level: z.lazy(() => SortOrderSchema).optional(),
  matchesPlayed: z.lazy(() => SortOrderSchema).optional(),
  wins: z.lazy(() => SortOrderSchema).optional(),
  losses: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const StringWithAggregatesFilterSchema: z.ZodType<Prisma.StringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const StringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.StringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  mode: z.lazy(() => QueryModeSchema).optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const IntWithAggregatesFilterSchema: z.ZodType<Prisma.IntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const EnumEventTypeFilterSchema: z.ZodType<Prisma.EnumEventTypeFilter> = z.object({
  equals: z.lazy(() => EventTypeSchema).optional(),
  in: z.lazy(() => EventTypeSchema).array().optional(),
  notIn: z.lazy(() => EventTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => NestedEnumEventTypeFilterSchema) ]).optional(),
}).strict();

export const DateTimeFilterSchema: z.ZodType<Prisma.DateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const CompanyRelationFilterSchema: z.ZodType<Prisma.CompanyRelationFilter> = z.object({
  is: z.lazy(() => CompanyWhereInputSchema).optional(),
  isNot: z.lazy(() => CompanyWhereInputSchema).optional()
}).strict();

export const HistoryListRelationFilterSchema: z.ZodType<Prisma.HistoryListRelationFilter> = z.object({
  every: z.lazy(() => HistoryWhereInputSchema).optional(),
  some: z.lazy(() => HistoryWhereInputSchema).optional(),
  none: z.lazy(() => HistoryWhereInputSchema).optional()
}).strict();

export const EventRuleListRelationFilterSchema: z.ZodType<Prisma.EventRuleListRelationFilter> = z.object({
  every: z.lazy(() => EventRuleWhereInputSchema).optional(),
  some: z.lazy(() => EventRuleWhereInputSchema).optional(),
  none: z.lazy(() => EventRuleWhereInputSchema).optional()
}).strict();

export const PrizeListRelationFilterSchema: z.ZodType<Prisma.PrizeListRelationFilter> = z.object({
  every: z.lazy(() => PrizeWhereInputSchema).optional(),
  some: z.lazy(() => PrizeWhereInputSchema).optional(),
  none: z.lazy(() => PrizeWhereInputSchema).optional()
}).strict();

export const HistoryOrderByRelationAggregateInputSchema: z.ZodType<Prisma.HistoryOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventRuleOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EventRuleOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrizeOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PrizeOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  dateTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional(),
  registeredCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventAvgOrderByAggregateInputSchema: z.ZodType<Prisma.EventAvgOrderByAggregateInput> = z.object({
  capacity: z.lazy(() => SortOrderSchema).optional(),
  registeredCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  dateTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional(),
  registeredCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  dateTime: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  capacity: z.lazy(() => SortOrderSchema).optional(),
  registeredCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventSumOrderByAggregateInputSchema: z.ZodType<Prisma.EventSumOrderByAggregateInput> = z.object({
  capacity: z.lazy(() => SortOrderSchema).optional(),
  registeredCount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumEventTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumEventTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => EventTypeSchema).optional(),
  in: z.lazy(() => EventTypeSchema).array().optional(),
  notIn: z.lazy(() => EventTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => NestedEnumEventTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumEventTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumEventTypeFilterSchema).optional()
}).strict();

export const DateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.DateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const FloatFilterSchema: z.ZodType<Prisma.FloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const EventRelationFilterSchema: z.ZodType<Prisma.EventRelationFilter> = z.object({
  is: z.lazy(() => EventWhereInputSchema).optional(),
  isNot: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const PrizeCountOrderByAggregateInputSchema: z.ZodType<Prisma.PrizeCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrizeAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PrizeAvgOrderByAggregateInput> = z.object({
  position: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrizeMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PrizeMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrizeMinOrderByAggregateInputSchema: z.ZodType<Prisma.PrizeMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const PrizeSumOrderByAggregateInputSchema: z.ZodType<Prisma.PrizeSumOrderByAggregateInput> = z.object({
  position: z.lazy(() => SortOrderSchema).optional(),
  amount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const FloatWithAggregatesFilterSchema: z.ZodType<Prisma.FloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const EventRuleCountOrderByAggregateInputSchema: z.ZodType<Prisma.EventRuleCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventRuleMaxOrderByAggregateInputSchema: z.ZodType<Prisma.EventRuleMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventRuleMinOrderByAggregateInputSchema: z.ZodType<Prisma.EventRuleMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileRelationFilterSchema: z.ZodType<Prisma.ProfileRelationFilter> = z.object({
  is: z.lazy(() => ProfileWhereInputSchema).optional(),
  isNot: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export const ProfileEventParticipationProfileIdEventIdCompoundUniqueInputSchema: z.ZodType<Prisma.ProfileEventParticipationProfileIdEventIdCompoundUniqueInput> = z.object({
  profileId: z.string(),
  eventId: z.string()
}).strict();

export const ProfileEventParticipationCountOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileEventParticipationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  participationDate: z.lazy(() => SortOrderSchema).optional(),
  classification: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileEventParticipationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileEventParticipationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  participationDate: z.lazy(() => SortOrderSchema).optional(),
  classification: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ProfileEventParticipationMinOrderByAggregateInputSchema: z.ZodType<Prisma.ProfileEventParticipationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional(),
  participationDate: z.lazy(() => SortOrderSchema).optional(),
  classification: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TokenListRelationFilterSchema: z.ZodType<Prisma.TokenListRelationFilter> = z.object({
  every: z.lazy(() => TokenWhereInputSchema).optional(),
  some: z.lazy(() => TokenWhereInputSchema).optional(),
  none: z.lazy(() => TokenWhereInputSchema).optional()
}).strict();

export const InviteListRelationFilterSchema: z.ZodType<Prisma.InviteListRelationFilter> = z.object({
  every: z.lazy(() => InviteWhereInputSchema).optional(),
  some: z.lazy(() => InviteWhereInputSchema).optional(),
  none: z.lazy(() => InviteWhereInputSchema).optional()
}).strict();

export const BookingListRelationFilterSchema: z.ZodType<Prisma.BookingListRelationFilter> = z.object({
  every: z.lazy(() => BookingWhereInputSchema).optional(),
  some: z.lazy(() => BookingWhereInputSchema).optional(),
  none: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export const CompanyListRelationFilterSchema: z.ZodType<Prisma.CompanyListRelationFilter> = z.object({
  every: z.lazy(() => CompanyWhereInputSchema).optional(),
  some: z.lazy(() => CompanyWhereInputSchema).optional(),
  none: z.lazy(() => CompanyWhereInputSchema).optional()
}).strict();

export const NotificationListRelationFilterSchema: z.ZodType<Prisma.NotificationListRelationFilter> = z.object({
  every: z.lazy(() => NotificationWhereInputSchema).optional(),
  some: z.lazy(() => NotificationWhereInputSchema).optional(),
  none: z.lazy(() => NotificationWhereInputSchema).optional()
}).strict();

export const ProfileNullableRelationFilterSchema: z.ZodType<Prisma.ProfileNullableRelationFilter> = z.object({
  is: z.lazy(() => ProfileWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => ProfileWhereInputSchema).optional().nullable()
}).strict();

export const ReviewListRelationFilterSchema: z.ZodType<Prisma.ReviewListRelationFilter> = z.object({
  every: z.lazy(() => ReviewWhereInputSchema).optional(),
  some: z.lazy(() => ReviewWhereInputSchema).optional(),
  none: z.lazy(() => ReviewWhereInputSchema).optional()
}).strict();

export const TokenOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TokenOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InviteOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BookingOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BookingOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CompanyOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationOrderByRelationAggregateInputSchema: z.ZodType<Prisma.NotificationOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ReviewOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserCountOrderByAggregateInputSchema: z.ZodType<Prisma.UserCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  passwordHash: z.lazy(() => SortOrderSchema).optional(),
  avatarUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.UserMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  passwordHash: z.lazy(() => SortOrderSchema).optional(),
  avatarUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserMinOrderByAggregateInputSchema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  passwordHash: z.lazy(() => SortOrderSchema).optional(),
  avatarUrl: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TrophyCountOrderByAggregateInputSchema: z.ZodType<Prisma.TrophyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TrophyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TrophyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TrophyMinOrderByAggregateInputSchema: z.ZodType<Prisma.TrophyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  date: z.lazy(() => SortOrderSchema).optional(),
  profileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CityCountOrderByAggregateInputSchema: z.ZodType<Prisma.CityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CityMinOrderByAggregateInputSchema: z.ZodType<Prisma.CityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeacherRelationFilterSchema: z.ZodType<Prisma.TeacherRelationFilter> = z.object({
  is: z.lazy(() => TeacherWhereInputSchema).optional(),
  isNot: z.lazy(() => TeacherWhereInputSchema).optional()
}).strict();

export const CompanyTeacherCompanyIdTeacherIdCompoundUniqueInputSchema: z.ZodType<Prisma.CompanyTeacherCompanyIdTeacherIdCompoundUniqueInput> = z.object({
  companyId: z.string(),
  teacherId: z.string()
}).strict();

export const CompanyTeacherCountOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyTeacherCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyTeacherMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyTeacherMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyTeacherMinOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyTeacherMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyTeacherListRelationFilterSchema: z.ZodType<Prisma.CompanyTeacherListRelationFilter> = z.object({
  every: z.lazy(() => CompanyTeacherWhereInputSchema).optional(),
  some: z.lazy(() => CompanyTeacherWhereInputSchema).optional(),
  none: z.lazy(() => CompanyTeacherWhereInputSchema).optional()
}).strict();

export const CompanyTeacherOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CompanyTeacherOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeacherCountOrderByAggregateInputSchema: z.ZodType<Prisma.TeacherCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  avatarImg: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeacherMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TeacherMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  avatarImg: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TeacherMinOrderByAggregateInputSchema: z.ZodType<Prisma.TeacherMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  bio: z.lazy(() => SortOrderSchema).optional(),
  avatarImg: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourtListRelationFilterSchema: z.ZodType<Prisma.CourtListRelationFilter> = z.object({
  every: z.lazy(() => CourtWhereInputSchema).optional(),
  some: z.lazy(() => CourtWhereInputSchema).optional(),
  none: z.lazy(() => CourtWhereInputSchema).optional()
}).strict();

export const UserListRelationFilterSchema: z.ZodType<Prisma.UserListRelationFilter> = z.object({
  every: z.lazy(() => UserWhereInputSchema).optional(),
  some: z.lazy(() => UserWhereInputSchema).optional(),
  none: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const CityNullableRelationFilterSchema: z.ZodType<Prisma.CityNullableRelationFilter> = z.object({
  is: z.lazy(() => CityWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CityWhereInputSchema).optional().nullable()
}).strict();

export const AddressNullableRelationFilterSchema: z.ZodType<Prisma.AddressNullableRelationFilter> = z.object({
  is: z.lazy(() => AddressWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => AddressWhereInputSchema).optional().nullable()
}).strict();

export const EventListRelationFilterSchema: z.ZodType<Prisma.EventListRelationFilter> = z.object({
  every: z.lazy(() => EventWhereInputSchema).optional(),
  some: z.lazy(() => EventWhereInputSchema).optional(),
  none: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const OpeningHoursListRelationFilterSchema: z.ZodType<Prisma.OpeningHoursListRelationFilter> = z.object({
  every: z.lazy(() => OpeningHoursWhereInputSchema).optional(),
  some: z.lazy(() => OpeningHoursWhereInputSchema).optional(),
  none: z.lazy(() => OpeningHoursWhereInputSchema).optional()
}).strict();

export const CourtOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CourtOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserOrderByRelationAggregateInputSchema: z.ZodType<Prisma.UserOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EventOrderByRelationAggregateInputSchema: z.ZodType<Prisma.EventOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OpeningHoursOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OpeningHoursOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyCountOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  domain: z.lazy(() => SortOrderSchema).optional(),
  logoImg: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  cityId: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  domain: z.lazy(() => SortOrderSchema).optional(),
  logoImg: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  cityId: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyMinOrderByAggregateInputSchema: z.ZodType<Prisma.CompanyMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  domain: z.lazy(() => SortOrderSchema).optional(),
  logoImg: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  ownerId: z.lazy(() => SortOrderSchema).optional(),
  cityId: z.lazy(() => SortOrderSchema).optional(),
  addressId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CompanyNullableRelationFilterSchema: z.ZodType<Prisma.CompanyNullableRelationFilter> = z.object({
  is: z.lazy(() => CompanyWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => CompanyWhereInputSchema).optional().nullable()
}).strict();

export const AddressCountOrderByAggregateInputSchema: z.ZodType<Prisma.AddressCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  complement: z.lazy(() => SortOrderSchema).optional(),
  district: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AddressMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  complement: z.lazy(() => SortOrderSchema).optional(),
  district: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AddressMinOrderByAggregateInputSchema: z.ZodType<Prisma.AddressMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  street: z.lazy(() => SortOrderSchema).optional(),
  number: z.lazy(() => SortOrderSchema).optional(),
  complement: z.lazy(() => SortOrderSchema).optional(),
  district: z.lazy(() => SortOrderSchema).optional(),
  city: z.lazy(() => SortOrderSchema).optional(),
  state: z.lazy(() => SortOrderSchema).optional(),
  country: z.lazy(() => SortOrderSchema).optional(),
  postalCode: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OpeningHoursDayOfWeekCompanyIdCompoundUniqueInputSchema: z.ZodType<Prisma.OpeningHoursDayOfWeekCompanyIdCompoundUniqueInput> = z.object({
  dayOfWeek: z.number(),
  companyId: z.string()
}).strict();

export const OpeningHoursCountOrderByAggregateInputSchema: z.ZodType<Prisma.OpeningHoursCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  opensAt: z.lazy(() => SortOrderSchema).optional(),
  closesAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OpeningHoursAvgOrderByAggregateInputSchema: z.ZodType<Prisma.OpeningHoursAvgOrderByAggregateInput> = z.object({
  dayOfWeek: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OpeningHoursMaxOrderByAggregateInputSchema: z.ZodType<Prisma.OpeningHoursMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  opensAt: z.lazy(() => SortOrderSchema).optional(),
  closesAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OpeningHoursMinOrderByAggregateInputSchema: z.ZodType<Prisma.OpeningHoursMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  opensAt: z.lazy(() => SortOrderSchema).optional(),
  closesAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const OpeningHoursSumOrderByAggregateInputSchema: z.ZodType<Prisma.OpeningHoursSumOrderByAggregateInput> = z.object({
  dayOfWeek: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewCountOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewAvgOrderByAggregateInput> = z.object({
  rating: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewMaxOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewMinOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rating: z.lazy(() => SortOrderSchema).optional(),
  comment: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const ReviewSumOrderByAggregateInputSchema: z.ZodType<Prisma.ReviewSumOrderByAggregateInput> = z.object({
  rating: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumSportTypeFilterSchema: z.ZodType<Prisma.EnumSportTypeFilter> = z.object({
  equals: z.lazy(() => SportTypeSchema).optional(),
  in: z.lazy(() => SportTypeSchema).array().optional(),
  notIn: z.lazy(() => SportTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => NestedEnumSportTypeFilterSchema) ]).optional(),
}).strict();

export const StringNullableListFilterSchema: z.ZodType<Prisma.StringNullableListFilter> = z.object({
  equals: z.string().array().optional().nullable(),
  has: z.string().optional().nullable(),
  hasEvery: z.string().array().optional(),
  hasSome: z.string().array().optional(),
  isEmpty: z.boolean().optional()
}).strict();

export const AvailabilityListRelationFilterSchema: z.ZodType<Prisma.AvailabilityListRelationFilter> = z.object({
  every: z.lazy(() => AvailabilityWhereInputSchema).optional(),
  some: z.lazy(() => AvailabilityWhereInputSchema).optional(),
  none: z.lazy(() => AvailabilityWhereInputSchema).optional()
}).strict();

export const AvailabilityOrderByRelationAggregateInputSchema: z.ZodType<Prisma.AvailabilityOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourtCountOrderByAggregateInputSchema: z.ZodType<Prisma.CourtCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  rules: z.lazy(() => SortOrderSchema).optional(),
  images: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourtMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CourtMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  rules: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const CourtMinOrderByAggregateInputSchema: z.ZodType<Prisma.CourtMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  comments: z.lazy(() => SortOrderSchema).optional(),
  rules: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  companyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumSportTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumSportTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SportTypeSchema).optional(),
  in: z.lazy(() => SportTypeSchema).array().optional(),
  notIn: z.lazy(() => SportTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => NestedEnumSportTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSportTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSportTypeFilterSchema).optional()
}).strict();

export const CourtRelationFilterSchema: z.ZodType<Prisma.CourtRelationFilter> = z.object({
  is: z.lazy(() => CourtWhereInputSchema).optional(),
  isNot: z.lazy(() => CourtWhereInputSchema).optional()
}).strict();

export const InviteNullableRelationFilterSchema: z.ZodType<Prisma.InviteNullableRelationFilter> = z.object({
  is: z.lazy(() => InviteWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => InviteWhereInputSchema).optional().nullable()
}).strict();

export const TeacherNullableRelationFilterSchema: z.ZodType<Prisma.TeacherNullableRelationFilter> = z.object({
  is: z.lazy(() => TeacherWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => TeacherWhereInputSchema).optional().nullable()
}).strict();

export const BookingCountOrderByAggregateInputSchema: z.ZodType<Prisma.BookingCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dateTime: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BookingAvgOrderByAggregateInputSchema: z.ZodType<Prisma.BookingAvgOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BookingMaxOrderByAggregateInputSchema: z.ZodType<Prisma.BookingMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dateTime: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BookingMinOrderByAggregateInputSchema: z.ZodType<Prisma.BookingMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dateTime: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  teacherId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BookingSumOrderByAggregateInputSchema: z.ZodType<Prisma.BookingSumOrderByAggregateInput> = z.object({
  price: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const UserNullableRelationFilterSchema: z.ZodType<Prisma.UserNullableRelationFilter> = z.object({
  is: z.lazy(() => UserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => UserWhereInputSchema).optional().nullable()
}).strict();

export const BookingNullableRelationFilterSchema: z.ZodType<Prisma.BookingNullableRelationFilter> = z.object({
  is: z.lazy(() => BookingWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BookingWhereInputSchema).optional().nullable()
}).strict();

export const InviteEmailCourtIdCompoundUniqueInputSchema: z.ZodType<Prisma.InviteEmailCourtIdCompoundUniqueInput> = z.object({
  email: z.string(),
  courtId: z.string()
}).strict();

export const InviteCountOrderByAggregateInputSchema: z.ZodType<Prisma.InviteCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteMaxOrderByAggregateInputSchema: z.ZodType<Prisma.InviteMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const InviteMinOrderByAggregateInputSchema: z.ZodType<Prisma.InviteMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  authorId: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolFilterSchema: z.ZodType<Prisma.BoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const AvailabilityCountOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  isPeakHour: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityAvgOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityAvgOrderByAggregateInput> = z.object({
  dayOfWeek: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityMaxOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  isPeakHour: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilityMinOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilityMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  dayOfWeek: z.lazy(() => SortOrderSchema).optional(),
  startTime: z.lazy(() => SortOrderSchema).optional(),
  endTime: z.lazy(() => SortOrderSchema).optional(),
  isPeakHour: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  courtId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const AvailabilitySumOrderByAggregateInputSchema: z.ZodType<Prisma.AvailabilitySumOrderByAggregateInput> = z.object({
  dayOfWeek: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const BoolWithAggregatesFilterSchema: z.ZodType<Prisma.BoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const EnumNotificationTypeFilterSchema: z.ZodType<Prisma.EnumNotificationTypeFilter> = z.object({
  equals: z.lazy(() => NotificationTypeSchema).optional(),
  in: z.lazy(() => NotificationTypeSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => NestedEnumNotificationTypeFilterSchema) ]).optional(),
}).strict();

export const NotificationCountOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationMaxOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const NotificationMinOrderByAggregateInputSchema: z.ZodType<Prisma.NotificationMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  message: z.lazy(() => SortOrderSchema).optional(),
  read: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumNotificationTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumNotificationTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NotificationTypeSchema).optional(),
  in: z.lazy(() => NotificationTypeSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => NestedEnumNotificationTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNotificationTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNotificationTypeFilterSchema).optional()
}).strict();

export const BookingRelationFilterSchema: z.ZodType<Prisma.BookingRelationFilter> = z.object({
  is: z.lazy(() => BookingWhereInputSchema).optional(),
  isNot: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export const EventNullableRelationFilterSchema: z.ZodType<Prisma.EventNullableRelationFilter> = z.object({
  is: z.lazy(() => EventWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => EventWhereInputSchema).optional().nullable()
}).strict();

export const HistoryCountOrderByAggregateInputSchema: z.ZodType<Prisma.HistoryCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  result: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HistoryMaxOrderByAggregateInputSchema: z.ZodType<Prisma.HistoryMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  result: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const HistoryMinOrderByAggregateInputSchema: z.ZodType<Prisma.HistoryMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  result: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  bookingId: z.lazy(() => SortOrderSchema).optional(),
  eventId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumTokenTypeFilterSchema: z.ZodType<Prisma.EnumTokenTypeFilter> = z.object({
  equals: z.lazy(() => TokenTypeSchema).optional(),
  in: z.lazy(() => TokenTypeSchema).array().optional(),
  notIn: z.lazy(() => TokenTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => NestedEnumTokenTypeFilterSchema) ]).optional(),
}).strict();

export const TokenCountOrderByAggregateInputSchema: z.ZodType<Prisma.TokenCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TokenMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TokenMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const TokenMinOrderByAggregateInputSchema: z.ZodType<Prisma.TokenMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export const EnumTokenTypeWithAggregatesFilterSchema: z.ZodType<Prisma.EnumTokenTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TokenTypeSchema).optional(),
  in: z.lazy(() => TokenTypeSchema).array().optional(),
  notIn: z.lazy(() => TokenTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => NestedEnumTokenTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTokenTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTokenTypeFilterSchema).optional()
}).strict();

export const UserCreateNestedOneWithoutProfileInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const ProfileEventParticipationCreateNestedManyWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationCreateNestedManyWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationCreateWithoutProfileInputSchema).array(),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProfileEventParticipationCreateManyProfileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TrophyCreateNestedManyWithoutProfileInputSchema: z.ZodType<Prisma.TrophyCreateNestedManyWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => TrophyCreateWithoutProfileInputSchema),z.lazy(() => TrophyCreateWithoutProfileInputSchema).array(),z.lazy(() => TrophyUncheckedCreateWithoutProfileInputSchema),z.lazy(() => TrophyUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TrophyCreateOrConnectWithoutProfileInputSchema),z.lazy(() => TrophyCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TrophyCreateManyProfileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TrophyWhereUniqueInputSchema),z.lazy(() => TrophyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProfileEventParticipationUncheckedCreateNestedManyWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedCreateNestedManyWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationCreateWithoutProfileInputSchema).array(),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProfileEventParticipationCreateManyProfileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TrophyUncheckedCreateNestedManyWithoutProfileInputSchema: z.ZodType<Prisma.TrophyUncheckedCreateNestedManyWithoutProfileInput> = z.object({
  create: z.union([ z.lazy(() => TrophyCreateWithoutProfileInputSchema),z.lazy(() => TrophyCreateWithoutProfileInputSchema).array(),z.lazy(() => TrophyUncheckedCreateWithoutProfileInputSchema),z.lazy(() => TrophyUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TrophyCreateOrConnectWithoutProfileInputSchema),z.lazy(() => TrophyCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TrophyCreateManyProfileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TrophyWhereUniqueInputSchema),z.lazy(() => TrophyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional()
}).strict();

export const NullableStringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableStringFieldUpdateOperationsInput> = z.object({
  set: z.string().optional().nullable()
}).strict();

export const IntFieldUpdateOperationsInputSchema: z.ZodType<Prisma.IntFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const UserUpdateOneRequiredWithoutProfileNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutProfileInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfileInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutProfileInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutProfileInputSchema),z.lazy(() => UserUpdateWithoutProfileInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProfileInputSchema) ]).optional(),
}).strict();

export const ProfileEventParticipationUpdateManyWithoutProfileNestedInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateManyWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationCreateWithoutProfileInputSchema).array(),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProfileEventParticipationUpsertWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUpsertWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProfileEventParticipationCreateManyProfileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProfileEventParticipationUpdateWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUpdateWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProfileEventParticipationUpdateManyWithWhereWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUpdateManyWithWhereWithoutProfileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProfileEventParticipationScalarWhereInputSchema),z.lazy(() => ProfileEventParticipationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TrophyUpdateManyWithoutProfileNestedInputSchema: z.ZodType<Prisma.TrophyUpdateManyWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => TrophyCreateWithoutProfileInputSchema),z.lazy(() => TrophyCreateWithoutProfileInputSchema).array(),z.lazy(() => TrophyUncheckedCreateWithoutProfileInputSchema),z.lazy(() => TrophyUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TrophyCreateOrConnectWithoutProfileInputSchema),z.lazy(() => TrophyCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TrophyUpsertWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => TrophyUpsertWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TrophyCreateManyProfileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TrophyWhereUniqueInputSchema),z.lazy(() => TrophyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TrophyWhereUniqueInputSchema),z.lazy(() => TrophyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TrophyWhereUniqueInputSchema),z.lazy(() => TrophyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TrophyWhereUniqueInputSchema),z.lazy(() => TrophyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TrophyUpdateWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => TrophyUpdateWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TrophyUpdateManyWithWhereWithoutProfileInputSchema),z.lazy(() => TrophyUpdateManyWithWhereWithoutProfileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TrophyScalarWhereInputSchema),z.lazy(() => TrophyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProfileEventParticipationUncheckedUpdateManyWithoutProfileNestedInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedUpdateManyWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationCreateWithoutProfileInputSchema).array(),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProfileEventParticipationUpsertWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUpsertWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProfileEventParticipationCreateManyProfileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProfileEventParticipationUpdateWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUpdateWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProfileEventParticipationUpdateManyWithWhereWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUpdateManyWithWhereWithoutProfileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProfileEventParticipationScalarWhereInputSchema),z.lazy(() => ProfileEventParticipationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TrophyUncheckedUpdateManyWithoutProfileNestedInputSchema: z.ZodType<Prisma.TrophyUncheckedUpdateManyWithoutProfileNestedInput> = z.object({
  create: z.union([ z.lazy(() => TrophyCreateWithoutProfileInputSchema),z.lazy(() => TrophyCreateWithoutProfileInputSchema).array(),z.lazy(() => TrophyUncheckedCreateWithoutProfileInputSchema),z.lazy(() => TrophyUncheckedCreateWithoutProfileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TrophyCreateOrConnectWithoutProfileInputSchema),z.lazy(() => TrophyCreateOrConnectWithoutProfileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TrophyUpsertWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => TrophyUpsertWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TrophyCreateManyProfileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TrophyWhereUniqueInputSchema),z.lazy(() => TrophyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TrophyWhereUniqueInputSchema),z.lazy(() => TrophyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TrophyWhereUniqueInputSchema),z.lazy(() => TrophyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TrophyWhereUniqueInputSchema),z.lazy(() => TrophyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TrophyUpdateWithWhereUniqueWithoutProfileInputSchema),z.lazy(() => TrophyUpdateWithWhereUniqueWithoutProfileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TrophyUpdateManyWithWhereWithoutProfileInputSchema),z.lazy(() => TrophyUpdateManyWithWhereWithoutProfileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TrophyScalarWhereInputSchema),z.lazy(() => TrophyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyCreateNestedOneWithoutEventsInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutEventsInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutEventsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutEventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutEventsInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const ProfileEventParticipationCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationCreateWithoutEventInputSchema).array(),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProfileEventParticipationCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const HistoryCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.HistoryCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutEventInputSchema),z.lazy(() => HistoryCreateWithoutEventInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutEventInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutEventInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventRuleCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.EventRuleCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => EventRuleCreateWithoutEventInputSchema),z.lazy(() => EventRuleCreateWithoutEventInputSchema).array(),z.lazy(() => EventRuleUncheckedCreateWithoutEventInputSchema),z.lazy(() => EventRuleUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventRuleCreateOrConnectWithoutEventInputSchema),z.lazy(() => EventRuleCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventRuleCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventRuleWhereUniqueInputSchema),z.lazy(() => EventRuleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PrizeCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.PrizeCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => PrizeCreateWithoutEventInputSchema),z.lazy(() => PrizeCreateWithoutEventInputSchema).array(),z.lazy(() => PrizeUncheckedCreateWithoutEventInputSchema),z.lazy(() => PrizeUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrizeCreateOrConnectWithoutEventInputSchema),z.lazy(() => PrizeCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrizeCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrizeWhereUniqueInputSchema),z.lazy(() => PrizeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProfileEventParticipationUncheckedCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationCreateWithoutEventInputSchema).array(),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProfileEventParticipationCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const HistoryUncheckedCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.HistoryUncheckedCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutEventInputSchema),z.lazy(() => HistoryCreateWithoutEventInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutEventInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutEventInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventRuleUncheckedCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.EventRuleUncheckedCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => EventRuleCreateWithoutEventInputSchema),z.lazy(() => EventRuleCreateWithoutEventInputSchema).array(),z.lazy(() => EventRuleUncheckedCreateWithoutEventInputSchema),z.lazy(() => EventRuleUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventRuleCreateOrConnectWithoutEventInputSchema),z.lazy(() => EventRuleCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventRuleCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventRuleWhereUniqueInputSchema),z.lazy(() => EventRuleWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const PrizeUncheckedCreateNestedManyWithoutEventInputSchema: z.ZodType<Prisma.PrizeUncheckedCreateNestedManyWithoutEventInput> = z.object({
  create: z.union([ z.lazy(() => PrizeCreateWithoutEventInputSchema),z.lazy(() => PrizeCreateWithoutEventInputSchema).array(),z.lazy(() => PrizeUncheckedCreateWithoutEventInputSchema),z.lazy(() => PrizeUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrizeCreateOrConnectWithoutEventInputSchema),z.lazy(() => PrizeCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrizeCreateManyEventInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrizeWhereUniqueInputSchema),z.lazy(() => PrizeWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumEventTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumEventTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => EventTypeSchema).optional()
}).strict();

export const DateTimeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.DateTimeFieldUpdateOperationsInput> = z.object({
  set: z.coerce.date().optional()
}).strict();

export const CompanyUpdateOneRequiredWithoutEventsNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutEventsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutEventsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutEventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutEventsInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutEventsInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutEventsInputSchema),z.lazy(() => CompanyUpdateWithoutEventsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutEventsInputSchema) ]).optional(),
}).strict();

export const ProfileEventParticipationUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationCreateWithoutEventInputSchema).array(),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProfileEventParticipationUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProfileEventParticipationCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProfileEventParticipationUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProfileEventParticipationUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProfileEventParticipationScalarWhereInputSchema),z.lazy(() => ProfileEventParticipationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const HistoryUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.HistoryUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutEventInputSchema),z.lazy(() => HistoryCreateWithoutEventInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutEventInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutEventInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HistoryUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => HistoryUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HistoryUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => HistoryUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HistoryUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => HistoryUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HistoryScalarWhereInputSchema),z.lazy(() => HistoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventRuleUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.EventRuleUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventRuleCreateWithoutEventInputSchema),z.lazy(() => EventRuleCreateWithoutEventInputSchema).array(),z.lazy(() => EventRuleUncheckedCreateWithoutEventInputSchema),z.lazy(() => EventRuleUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventRuleCreateOrConnectWithoutEventInputSchema),z.lazy(() => EventRuleCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventRuleUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => EventRuleUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventRuleCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventRuleWhereUniqueInputSchema),z.lazy(() => EventRuleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventRuleWhereUniqueInputSchema),z.lazy(() => EventRuleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventRuleWhereUniqueInputSchema),z.lazy(() => EventRuleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventRuleWhereUniqueInputSchema),z.lazy(() => EventRuleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventRuleUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => EventRuleUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventRuleUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => EventRuleUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventRuleScalarWhereInputSchema),z.lazy(() => EventRuleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PrizeUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.PrizeUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrizeCreateWithoutEventInputSchema),z.lazy(() => PrizeCreateWithoutEventInputSchema).array(),z.lazy(() => PrizeUncheckedCreateWithoutEventInputSchema),z.lazy(() => PrizeUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrizeCreateOrConnectWithoutEventInputSchema),z.lazy(() => PrizeCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrizeUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => PrizeUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrizeCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrizeWhereUniqueInputSchema),z.lazy(() => PrizeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrizeWhereUniqueInputSchema),z.lazy(() => PrizeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrizeWhereUniqueInputSchema),z.lazy(() => PrizeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrizeWhereUniqueInputSchema),z.lazy(() => PrizeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrizeUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => PrizeUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrizeUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => PrizeUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrizeScalarWhereInputSchema),z.lazy(() => PrizeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProfileEventParticipationUncheckedUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationCreateWithoutEventInputSchema).array(),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProfileEventParticipationUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProfileEventParticipationCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProfileEventParticipationUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProfileEventParticipationUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProfileEventParticipationScalarWhereInputSchema),z.lazy(() => ProfileEventParticipationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const HistoryUncheckedUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutEventInputSchema),z.lazy(() => HistoryCreateWithoutEventInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutEventInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutEventInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HistoryUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => HistoryUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HistoryUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => HistoryUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HistoryUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => HistoryUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HistoryScalarWhereInputSchema),z.lazy(() => HistoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventRuleUncheckedUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.EventRuleUncheckedUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventRuleCreateWithoutEventInputSchema),z.lazy(() => EventRuleCreateWithoutEventInputSchema).array(),z.lazy(() => EventRuleUncheckedCreateWithoutEventInputSchema),z.lazy(() => EventRuleUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventRuleCreateOrConnectWithoutEventInputSchema),z.lazy(() => EventRuleCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventRuleUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => EventRuleUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventRuleCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventRuleWhereUniqueInputSchema),z.lazy(() => EventRuleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventRuleWhereUniqueInputSchema),z.lazy(() => EventRuleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventRuleWhereUniqueInputSchema),z.lazy(() => EventRuleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventRuleWhereUniqueInputSchema),z.lazy(() => EventRuleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventRuleUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => EventRuleUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventRuleUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => EventRuleUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventRuleScalarWhereInputSchema),z.lazy(() => EventRuleScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const PrizeUncheckedUpdateManyWithoutEventNestedInputSchema: z.ZodType<Prisma.PrizeUncheckedUpdateManyWithoutEventNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrizeCreateWithoutEventInputSchema),z.lazy(() => PrizeCreateWithoutEventInputSchema).array(),z.lazy(() => PrizeUncheckedCreateWithoutEventInputSchema),z.lazy(() => PrizeUncheckedCreateWithoutEventInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrizeCreateOrConnectWithoutEventInputSchema),z.lazy(() => PrizeCreateOrConnectWithoutEventInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PrizeUpsertWithWhereUniqueWithoutEventInputSchema),z.lazy(() => PrizeUpsertWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrizeCreateManyEventInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PrizeWhereUniqueInputSchema),z.lazy(() => PrizeWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PrizeWhereUniqueInputSchema),z.lazy(() => PrizeWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PrizeWhereUniqueInputSchema),z.lazy(() => PrizeWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PrizeWhereUniqueInputSchema),z.lazy(() => PrizeWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PrizeUpdateWithWhereUniqueWithoutEventInputSchema),z.lazy(() => PrizeUpdateWithWhereUniqueWithoutEventInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PrizeUpdateManyWithWhereWithoutEventInputSchema),z.lazy(() => PrizeUpdateManyWithWhereWithoutEventInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PrizeScalarWhereInputSchema),z.lazy(() => PrizeScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventCreateNestedOneWithoutPrizeInputSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutPrizeInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutPrizeInputSchema),z.lazy(() => EventUncheckedCreateWithoutPrizeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutPrizeInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional()
}).strict();

export const FloatFieldUpdateOperationsInputSchema: z.ZodType<Prisma.FloatFieldUpdateOperationsInput> = z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();

export const EventUpdateOneRequiredWithoutPrizeNestedInputSchema: z.ZodType<Prisma.EventUpdateOneRequiredWithoutPrizeNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutPrizeInputSchema),z.lazy(() => EventUncheckedCreateWithoutPrizeInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutPrizeInputSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutPrizeInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EventUpdateToOneWithWhereWithoutPrizeInputSchema),z.lazy(() => EventUpdateWithoutPrizeInputSchema),z.lazy(() => EventUncheckedUpdateWithoutPrizeInputSchema) ]).optional(),
}).strict();

export const EventCreateNestedOneWithoutEventRuleInputSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutEventRuleInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutEventRuleInputSchema),z.lazy(() => EventUncheckedCreateWithoutEventRuleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutEventRuleInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional()
}).strict();

export const EventUpdateOneRequiredWithoutEventRuleNestedInputSchema: z.ZodType<Prisma.EventUpdateOneRequiredWithoutEventRuleNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutEventRuleInputSchema),z.lazy(() => EventUncheckedCreateWithoutEventRuleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutEventRuleInputSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutEventRuleInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EventUpdateToOneWithWhereWithoutEventRuleInputSchema),z.lazy(() => EventUpdateWithoutEventRuleInputSchema),z.lazy(() => EventUncheckedUpdateWithoutEventRuleInputSchema) ]).optional(),
}).strict();

export const ProfileCreateNestedOneWithoutEventsInputSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutEventsInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutEventsInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutEventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutEventsInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const EventCreateNestedOneWithoutParticipantsInputSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutParticipantsInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutParticipantsInputSchema),z.lazy(() => EventUncheckedCreateWithoutParticipantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutParticipantsInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional()
}).strict();

export const ProfileUpdateOneRequiredWithoutEventsNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutEventsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutEventsInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutEventsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutEventsInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutEventsInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutEventsInputSchema),z.lazy(() => ProfileUpdateWithoutEventsInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutEventsInputSchema) ]).optional(),
}).strict();

export const EventUpdateOneRequiredWithoutParticipantsNestedInputSchema: z.ZodType<Prisma.EventUpdateOneRequiredWithoutParticipantsNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutParticipantsInputSchema),z.lazy(() => EventUncheckedCreateWithoutParticipantsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutParticipantsInputSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutParticipantsInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EventUpdateToOneWithWhereWithoutParticipantsInputSchema),z.lazy(() => EventUpdateWithoutParticipantsInputSchema),z.lazy(() => EventUncheckedUpdateWithoutParticipantsInputSchema) ]).optional(),
}).strict();

export const TokenCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TokenCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TokenCreateWithoutUserInputSchema),z.lazy(() => TokenCreateWithoutUserInputSchema).array(),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TokenCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InviteCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.InviteCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutAuthorInputSchema),z.lazy(() => InviteCreateWithoutAuthorInputSchema).array(),z.lazy(() => InviteUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => InviteUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => InviteCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BookingCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BookingCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutUserInputSchema),z.lazy(() => BookingCreateWithoutUserInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutUserInputSchema),z.lazy(() => BookingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutUserInputSchema),z.lazy(() => BookingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyCreateNestedManyWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyCreateNestedManyWithoutAdminsInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutAdminsInputSchema),z.lazy(() => CompanyCreateWithoutAdminsInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutAdminsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAdminsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutAdminsInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutAdminsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutOwnerInputSchema),z.lazy(() => CompanyCreateWithoutOwnerInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProfileCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const HistoryCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.HistoryCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutUserInputSchema),z.lazy(() => HistoryCreateWithoutUserInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutUserInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutUserInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TokenUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.TokenUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => TokenCreateWithoutUserInputSchema),z.lazy(() => TokenCreateWithoutUserInputSchema).array(),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TokenCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InviteUncheckedCreateNestedManyWithoutAuthorInputSchema: z.ZodType<Prisma.InviteUncheckedCreateNestedManyWithoutAuthorInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutAuthorInputSchema),z.lazy(() => InviteCreateWithoutAuthorInputSchema).array(),z.lazy(() => InviteUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => InviteUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => InviteCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteCreateManyAuthorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BookingUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutUserInputSchema),z.lazy(() => BookingCreateWithoutUserInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutUserInputSchema),z.lazy(() => BookingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutUserInputSchema),z.lazy(() => BookingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyUncheckedCreateNestedManyWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateNestedManyWithoutAdminsInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutAdminsInputSchema),z.lazy(() => CompanyCreateWithoutAdminsInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutAdminsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAdminsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutAdminsInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutAdminsInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyUncheckedCreateNestedManyWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateNestedManyWithoutOwnerInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutOwnerInputSchema),z.lazy(() => CompanyCreateWithoutOwnerInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyCreateManyOwnerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const NotificationUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ProfileUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateNestedOneWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const HistoryUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.HistoryUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutUserInputSchema),z.lazy(() => HistoryCreateWithoutUserInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutUserInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutUserInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TokenUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TokenUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TokenCreateWithoutUserInputSchema),z.lazy(() => TokenCreateWithoutUserInputSchema).array(),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TokenUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TokenUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TokenCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TokenUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TokenUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TokenUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TokenUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TokenScalarWhereInputSchema),z.lazy(() => TokenScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InviteUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.InviteUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutAuthorInputSchema),z.lazy(() => InviteCreateWithoutAuthorInputSchema).array(),z.lazy(() => InviteUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => InviteUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => InviteCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InviteUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => InviteUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InviteUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => InviteUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InviteUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => InviteUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InviteScalarWhereInputSchema),z.lazy(() => InviteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BookingUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BookingUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutUserInputSchema),z.lazy(() => BookingCreateWithoutUserInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutUserInputSchema),z.lazy(() => BookingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutUserInputSchema),z.lazy(() => BookingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyUpdateManyWithoutAdminsNestedInputSchema: z.ZodType<Prisma.CompanyUpdateManyWithoutAdminsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutAdminsInputSchema),z.lazy(() => CompanyCreateWithoutAdminsInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutAdminsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAdminsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutAdminsInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutAdminsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyUpsertWithWhereUniqueWithoutAdminsInputSchema),z.lazy(() => CompanyUpsertWithWhereUniqueWithoutAdminsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithWhereUniqueWithoutAdminsInputSchema),z.lazy(() => CompanyUpdateWithWhereUniqueWithoutAdminsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyUpdateManyWithWhereWithoutAdminsInputSchema),z.lazy(() => CompanyUpdateManyWithWhereWithoutAdminsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyScalarWhereInputSchema),z.lazy(() => CompanyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.CompanyUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutOwnerInputSchema),z.lazy(() => CompanyCreateWithoutOwnerInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CompanyUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CompanyUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => CompanyUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyScalarWhereInputSchema),z.lazy(() => CompanyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProfileUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => ProfileUpdateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const HistoryUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.HistoryUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutUserInputSchema),z.lazy(() => HistoryCreateWithoutUserInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutUserInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutUserInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HistoryUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => HistoryUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HistoryUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => HistoryUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HistoryUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => HistoryUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HistoryScalarWhereInputSchema),z.lazy(() => HistoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TokenUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.TokenUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => TokenCreateWithoutUserInputSchema),z.lazy(() => TokenCreateWithoutUserInputSchema).array(),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema),z.lazy(() => TokenCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TokenUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TokenUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TokenCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TokenWhereUniqueInputSchema),z.lazy(() => TokenWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TokenUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => TokenUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TokenUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => TokenUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TokenScalarWhereInputSchema),z.lazy(() => TokenScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InviteUncheckedUpdateManyWithoutAuthorNestedInputSchema: z.ZodType<Prisma.InviteUncheckedUpdateManyWithoutAuthorNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutAuthorInputSchema),z.lazy(() => InviteCreateWithoutAuthorInputSchema).array(),z.lazy(() => InviteUncheckedCreateWithoutAuthorInputSchema),z.lazy(() => InviteUncheckedCreateWithoutAuthorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteCreateOrConnectWithoutAuthorInputSchema),z.lazy(() => InviteCreateOrConnectWithoutAuthorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InviteUpsertWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => InviteUpsertWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteCreateManyAuthorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InviteUpdateWithWhereUniqueWithoutAuthorInputSchema),z.lazy(() => InviteUpdateWithWhereUniqueWithoutAuthorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InviteUpdateManyWithWhereWithoutAuthorInputSchema),z.lazy(() => InviteUpdateManyWithWhereWithoutAuthorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InviteScalarWhereInputSchema),z.lazy(() => InviteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BookingUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutUserInputSchema),z.lazy(() => BookingCreateWithoutUserInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutUserInputSchema),z.lazy(() => BookingUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutUserInputSchema),z.lazy(() => BookingCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyUncheckedUpdateManyWithoutAdminsNestedInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateManyWithoutAdminsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutAdminsInputSchema),z.lazy(() => CompanyCreateWithoutAdminsInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutAdminsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAdminsInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutAdminsInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutAdminsInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyUpsertWithWhereUniqueWithoutAdminsInputSchema),z.lazy(() => CompanyUpsertWithWhereUniqueWithoutAdminsInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithWhereUniqueWithoutAdminsInputSchema),z.lazy(() => CompanyUpdateWithWhereUniqueWithoutAdminsInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyUpdateManyWithWhereWithoutAdminsInputSchema),z.lazy(() => CompanyUpdateManyWithWhereWithoutAdminsInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyScalarWhereInputSchema),z.lazy(() => CompanyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyUncheckedUpdateManyWithoutOwnerNestedInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateManyWithoutOwnerNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutOwnerInputSchema),z.lazy(() => CompanyCreateWithoutOwnerInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutOwnerInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOwnerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutOwnerInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutOwnerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyUpsertWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CompanyUpsertWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyCreateManyOwnerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithWhereUniqueWithoutOwnerInputSchema),z.lazy(() => CompanyUpdateWithWhereUniqueWithoutOwnerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyUpdateManyWithWhereWithoutOwnerInputSchema),z.lazy(() => CompanyUpdateManyWithWhereWithoutOwnerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyScalarWhereInputSchema),z.lazy(() => CompanyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationCreateWithoutUserInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProfileUncheckedUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateOneWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => ProfileWhereInputSchema) ]).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutUserInputSchema),z.lazy(() => ProfileUpdateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutUserInputSchema) ]).optional(),
}).strict();

export const HistoryUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutUserInputSchema),z.lazy(() => HistoryCreateWithoutUserInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutUserInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutUserInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HistoryUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => HistoryUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HistoryUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => HistoryUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HistoryUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => HistoryUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HistoryScalarWhereInputSchema),z.lazy(() => HistoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewCreateWithoutUserInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ProfileCreateNestedOneWithoutTrophiesInputSchema: z.ZodType<Prisma.ProfileCreateNestedOneWithoutTrophiesInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutTrophiesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutTrophiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutTrophiesInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional()
}).strict();

export const ProfileUpdateOneRequiredWithoutTrophiesNestedInputSchema: z.ZodType<Prisma.ProfileUpdateOneRequiredWithoutTrophiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProfileCreateWithoutTrophiesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutTrophiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProfileCreateOrConnectWithoutTrophiesInputSchema).optional(),
  upsert: z.lazy(() => ProfileUpsertWithoutTrophiesInputSchema).optional(),
  connect: z.lazy(() => ProfileWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProfileUpdateToOneWithWhereWithoutTrophiesInputSchema),z.lazy(() => ProfileUpdateWithoutTrophiesInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutTrophiesInputSchema) ]).optional(),
}).strict();

export const CompanyCreateNestedManyWithoutCityInputSchema: z.ZodType<Prisma.CompanyCreateNestedManyWithoutCityInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCityInputSchema),z.lazy(() => CompanyCreateWithoutCityInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutCityInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutCityInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutCityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyCreateManyCityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyUncheckedCreateNestedManyWithoutCityInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateNestedManyWithoutCityInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCityInputSchema),z.lazy(() => CompanyCreateWithoutCityInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutCityInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutCityInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutCityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyCreateManyCityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyUpdateManyWithoutCityNestedInputSchema: z.ZodType<Prisma.CompanyUpdateManyWithoutCityNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCityInputSchema),z.lazy(() => CompanyCreateWithoutCityInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutCityInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutCityInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutCityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyUpsertWithWhereUniqueWithoutCityInputSchema),z.lazy(() => CompanyUpsertWithWhereUniqueWithoutCityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyCreateManyCityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithWhereUniqueWithoutCityInputSchema),z.lazy(() => CompanyUpdateWithWhereUniqueWithoutCityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyUpdateManyWithWhereWithoutCityInputSchema),z.lazy(() => CompanyUpdateManyWithWhereWithoutCityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyScalarWhereInputSchema),z.lazy(() => CompanyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyUncheckedUpdateManyWithoutCityNestedInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateManyWithoutCityNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCityInputSchema),z.lazy(() => CompanyCreateWithoutCityInputSchema).array(),z.lazy(() => CompanyUncheckedCreateWithoutCityInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyCreateOrConnectWithoutCityInputSchema),z.lazy(() => CompanyCreateOrConnectWithoutCityInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyUpsertWithWhereUniqueWithoutCityInputSchema),z.lazy(() => CompanyUpsertWithWhereUniqueWithoutCityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyCreateManyCityInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyWhereUniqueInputSchema),z.lazy(() => CompanyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateWithWhereUniqueWithoutCityInputSchema),z.lazy(() => CompanyUpdateWithWhereUniqueWithoutCityInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyUpdateManyWithWhereWithoutCityInputSchema),z.lazy(() => CompanyUpdateManyWithWhereWithoutCityInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyScalarWhereInputSchema),z.lazy(() => CompanyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyCreateNestedOneWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutCompanyTeacherInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCompanyTeacherInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCompanyTeacherInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutCompanyTeacherInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const TeacherCreateNestedOneWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.TeacherCreateNestedOneWithoutCompanyTeacherInput> = z.object({
  create: z.union([ z.lazy(() => TeacherCreateWithoutCompanyTeacherInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutCompanyTeacherInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeacherCreateOrConnectWithoutCompanyTeacherInputSchema).optional(),
  connect: z.lazy(() => TeacherWhereUniqueInputSchema).optional()
}).strict();

export const CompanyUpdateOneRequiredWithoutCompanyTeacherNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutCompanyTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCompanyTeacherInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCompanyTeacherInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutCompanyTeacherInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutCompanyTeacherInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutCompanyTeacherInputSchema),z.lazy(() => CompanyUpdateWithoutCompanyTeacherInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCompanyTeacherInputSchema) ]).optional(),
}).strict();

export const TeacherUpdateOneRequiredWithoutCompanyTeacherNestedInputSchema: z.ZodType<Prisma.TeacherUpdateOneRequiredWithoutCompanyTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeacherCreateWithoutCompanyTeacherInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutCompanyTeacherInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeacherCreateOrConnectWithoutCompanyTeacherInputSchema).optional(),
  upsert: z.lazy(() => TeacherUpsertWithoutCompanyTeacherInputSchema).optional(),
  connect: z.lazy(() => TeacherWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeacherUpdateToOneWithWhereWithoutCompanyTeacherInputSchema),z.lazy(() => TeacherUpdateWithoutCompanyTeacherInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutCompanyTeacherInputSchema) ]).optional(),
}).strict();

export const BookingCreateNestedManyWithoutTeacherInputSchema: z.ZodType<Prisma.BookingCreateNestedManyWithoutTeacherInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutTeacherInputSchema),z.lazy(() => BookingCreateWithoutTeacherInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => BookingUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => BookingCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyTeacherInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyTeacherCreateNestedManyWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherCreateNestedManyWithoutTeacherInput> = z.object({
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherCreateWithoutTeacherInputSchema).array(),z.lazy(() => CompanyTeacherUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyTeacherCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyTeacherCreateManyTeacherInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BookingUncheckedCreateNestedManyWithoutTeacherInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutTeacherInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutTeacherInputSchema),z.lazy(() => BookingCreateWithoutTeacherInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => BookingUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => BookingCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyTeacherInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyTeacherUncheckedCreateNestedManyWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedCreateNestedManyWithoutTeacherInput> = z.object({
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherCreateWithoutTeacherInputSchema).array(),z.lazy(() => CompanyTeacherUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyTeacherCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyTeacherCreateManyTeacherInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BookingUpdateManyWithoutTeacherNestedInputSchema: z.ZodType<Prisma.BookingUpdateManyWithoutTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutTeacherInputSchema),z.lazy(() => BookingCreateWithoutTeacherInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => BookingUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => BookingCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyTeacherInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutTeacherInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutTeacherInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyTeacherUpdateManyWithoutTeacherNestedInputSchema: z.ZodType<Prisma.CompanyTeacherUpdateManyWithoutTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherCreateWithoutTeacherInputSchema).array(),z.lazy(() => CompanyTeacherUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyTeacherCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyTeacherUpsertWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUpsertWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyTeacherCreateManyTeacherInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyTeacherUpdateWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUpdateWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyTeacherUpdateManyWithWhereWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUpdateManyWithWhereWithoutTeacherInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyTeacherScalarWhereInputSchema),z.lazy(() => CompanyTeacherScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BookingUncheckedUpdateManyWithoutTeacherNestedInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutTeacherInputSchema),z.lazy(() => BookingCreateWithoutTeacherInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => BookingUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => BookingCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyTeacherInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutTeacherInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutTeacherInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyTeacherUncheckedUpdateManyWithoutTeacherNestedInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedUpdateManyWithoutTeacherNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherCreateWithoutTeacherInputSchema).array(),z.lazy(() => CompanyTeacherUncheckedCreateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutTeacherInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyTeacherCreateOrConnectWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherCreateOrConnectWithoutTeacherInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyTeacherUpsertWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUpsertWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyTeacherCreateManyTeacherInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyTeacherUpdateWithWhereUniqueWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUpdateWithWhereUniqueWithoutTeacherInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyTeacherUpdateManyWithWhereWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUpdateManyWithWhereWithoutTeacherInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyTeacherScalarWhereInputSchema),z.lazy(() => CompanyTeacherScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutOwnedCompaniesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutOwnedCompaniesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedCompaniesInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedCompaniesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedCompaniesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CourtCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.CourtCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => CourtCreateWithoutCompanyInputSchema),z.lazy(() => CourtCreateWithoutCompanyInputSchema).array(),z.lazy(() => CourtUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CourtUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourtCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CourtCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourtCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CourtWhereUniqueInputSchema),z.lazy(() => CourtWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedManyWithoutCompaniesInputSchema: z.ZodType<Prisma.UserCreateNestedManyWithoutCompaniesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCompaniesInputSchema),z.lazy(() => UserCreateWithoutCompaniesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutCompaniesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCompaniesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutCompaniesInputSchema),z.lazy(() => UserCreateOrConnectWithoutCompaniesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CityCreateNestedOneWithoutCompaniesInputSchema: z.ZodType<Prisma.CityCreateNestedOneWithoutCompaniesInput> = z.object({
  create: z.union([ z.lazy(() => CityCreateWithoutCompaniesInputSchema),z.lazy(() => CityUncheckedCreateWithoutCompaniesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CityCreateOrConnectWithoutCompaniesInputSchema).optional(),
  connect: z.lazy(() => CityWhereUniqueInputSchema).optional()
}).strict();

export const AddressCreateNestedOneWithoutCompanyInputSchema: z.ZodType<Prisma.AddressCreateNestedOneWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutCompanyInputSchema),z.lazy(() => AddressUncheckedCreateWithoutCompanyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutCompanyInputSchema).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional()
}).strict();

export const EventCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.EventCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutCompanyInputSchema),z.lazy(() => EventCreateWithoutCompanyInputSchema).array(),z.lazy(() => EventUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => EventUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => EventCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutCompanyInputSchema),z.lazy(() => ReviewCreateWithoutCompanyInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyTeacherCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherCreateWithoutCompanyInputSchema).array(),z.lazy(() => CompanyTeacherUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyTeacherCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyTeacherCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OpeningHoursCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => OpeningHoursCreateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursCreateWithoutCompanyInputSchema).array(),z.lazy(() => OpeningHoursUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OpeningHoursCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => OpeningHoursCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OpeningHoursCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CourtUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.CourtUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => CourtCreateWithoutCompanyInputSchema),z.lazy(() => CourtCreateWithoutCompanyInputSchema).array(),z.lazy(() => CourtUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CourtUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourtCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CourtCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourtCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CourtWhereUniqueInputSchema),z.lazy(() => CourtWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedCreateNestedManyWithoutCompaniesInputSchema: z.ZodType<Prisma.UserUncheckedCreateNestedManyWithoutCompaniesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCompaniesInputSchema),z.lazy(() => UserCreateWithoutCompaniesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutCompaniesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCompaniesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutCompaniesInputSchema),z.lazy(() => UserCreateOrConnectWithoutCompaniesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.EventUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutCompanyInputSchema),z.lazy(() => EventCreateWithoutCompanyInputSchema).array(),z.lazy(() => EventUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => EventUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => EventCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutCompanyInputSchema),z.lazy(() => ReviewCreateWithoutCompanyInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherCreateWithoutCompanyInputSchema).array(),z.lazy(() => CompanyTeacherUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyTeacherCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyTeacherCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const OpeningHoursUncheckedCreateNestedManyWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursUncheckedCreateNestedManyWithoutCompanyInput> = z.object({
  create: z.union([ z.lazy(() => OpeningHoursCreateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursCreateWithoutCompanyInputSchema).array(),z.lazy(() => OpeningHoursUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OpeningHoursCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => OpeningHoursCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OpeningHoursCreateManyCompanyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutOwnedCompaniesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutOwnedCompaniesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedCompaniesInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedCompaniesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnedCompaniesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutOwnedCompaniesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutOwnedCompaniesInputSchema),z.lazy(() => UserUpdateWithoutOwnedCompaniesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOwnedCompaniesInputSchema) ]).optional(),
}).strict();

export const CourtUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.CourtUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourtCreateWithoutCompanyInputSchema),z.lazy(() => CourtCreateWithoutCompanyInputSchema).array(),z.lazy(() => CourtUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CourtUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourtCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CourtCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CourtUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CourtUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourtCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CourtWhereUniqueInputSchema),z.lazy(() => CourtWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CourtWhereUniqueInputSchema),z.lazy(() => CourtWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CourtWhereUniqueInputSchema),z.lazy(() => CourtWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CourtWhereUniqueInputSchema),z.lazy(() => CourtWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CourtUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CourtUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CourtUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => CourtUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CourtScalarWhereInputSchema),z.lazy(() => CourtScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateManyWithoutCompaniesNestedInputSchema: z.ZodType<Prisma.UserUpdateManyWithoutCompaniesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCompaniesInputSchema),z.lazy(() => UserCreateWithoutCompaniesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutCompaniesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCompaniesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutCompaniesInputSchema),z.lazy(() => UserCreateOrConnectWithoutCompaniesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutCompaniesInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutCompaniesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutCompaniesInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutCompaniesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutCompaniesInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutCompaniesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CityUpdateOneWithoutCompaniesNestedInputSchema: z.ZodType<Prisma.CityUpdateOneWithoutCompaniesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CityCreateWithoutCompaniesInputSchema),z.lazy(() => CityUncheckedCreateWithoutCompaniesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CityCreateOrConnectWithoutCompaniesInputSchema).optional(),
  upsert: z.lazy(() => CityUpsertWithoutCompaniesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CityWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CityWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CityWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CityUpdateToOneWithWhereWithoutCompaniesInputSchema),z.lazy(() => CityUpdateWithoutCompaniesInputSchema),z.lazy(() => CityUncheckedUpdateWithoutCompaniesInputSchema) ]).optional(),
}).strict();

export const AddressUpdateOneWithoutCompanyNestedInputSchema: z.ZodType<Prisma.AddressUpdateOneWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => AddressCreateWithoutCompanyInputSchema),z.lazy(() => AddressUncheckedCreateWithoutCompanyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => AddressCreateOrConnectWithoutCompanyInputSchema).optional(),
  upsert: z.lazy(() => AddressUpsertWithoutCompanyInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => AddressWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => AddressWhereInputSchema) ]).optional(),
  connect: z.lazy(() => AddressWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => AddressUpdateToOneWithWhereWithoutCompanyInputSchema),z.lazy(() => AddressUpdateWithoutCompanyInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutCompanyInputSchema) ]).optional(),
}).strict();

export const EventUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.EventUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutCompanyInputSchema),z.lazy(() => EventCreateWithoutCompanyInputSchema).array(),z.lazy(() => EventUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => EventUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => EventCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => EventUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => EventUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => EventUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventScalarWhereInputSchema),z.lazy(() => EventScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutCompanyInputSchema),z.lazy(() => ReviewCreateWithoutCompanyInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyTeacherUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.CompanyTeacherUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherCreateWithoutCompanyInputSchema).array(),z.lazy(() => CompanyTeacherUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyTeacherCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyTeacherUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyTeacherCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyTeacherUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyTeacherUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyTeacherScalarWhereInputSchema),z.lazy(() => CompanyTeacherScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OpeningHoursUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.OpeningHoursUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => OpeningHoursCreateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursCreateWithoutCompanyInputSchema).array(),z.lazy(() => OpeningHoursUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OpeningHoursCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => OpeningHoursCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OpeningHoursUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OpeningHoursCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OpeningHoursUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OpeningHoursUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OpeningHoursScalarWhereInputSchema),z.lazy(() => OpeningHoursScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CourtUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.CourtUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourtCreateWithoutCompanyInputSchema),z.lazy(() => CourtCreateWithoutCompanyInputSchema).array(),z.lazy(() => CourtUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CourtUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CourtCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CourtCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CourtUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CourtUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CourtCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CourtWhereUniqueInputSchema),z.lazy(() => CourtWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CourtWhereUniqueInputSchema),z.lazy(() => CourtWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CourtWhereUniqueInputSchema),z.lazy(() => CourtWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CourtWhereUniqueInputSchema),z.lazy(() => CourtWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CourtUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CourtUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CourtUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => CourtUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CourtScalarWhereInputSchema),z.lazy(() => CourtScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserUncheckedUpdateManyWithoutCompaniesNestedInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutCompaniesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutCompaniesInputSchema),z.lazy(() => UserCreateWithoutCompaniesInputSchema).array(),z.lazy(() => UserUncheckedCreateWithoutCompaniesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCompaniesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserCreateOrConnectWithoutCompaniesInputSchema),z.lazy(() => UserCreateOrConnectWithoutCompaniesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserUpsertWithWhereUniqueWithoutCompaniesInputSchema),z.lazy(() => UserUpsertWithWhereUniqueWithoutCompaniesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserWhereUniqueInputSchema),z.lazy(() => UserWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserUpdateWithWhereUniqueWithoutCompaniesInputSchema),z.lazy(() => UserUpdateWithWhereUniqueWithoutCompaniesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserUpdateManyWithWhereWithoutCompaniesInputSchema),z.lazy(() => UserUpdateManyWithWhereWithoutCompaniesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const EventUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.EventUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutCompanyInputSchema),z.lazy(() => EventCreateWithoutCompanyInputSchema).array(),z.lazy(() => EventUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => EventUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => EventCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => EventCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => EventUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => EventUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => EventCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => EventWhereUniqueInputSchema),z.lazy(() => EventWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => EventUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => EventUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => EventUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => EventUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => EventScalarWhereInputSchema),z.lazy(() => EventScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => ReviewCreateWithoutCompanyInputSchema),z.lazy(() => ReviewCreateWithoutCompanyInputSchema).array(),z.lazy(() => ReviewUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ReviewCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => ReviewCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ReviewUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => ReviewUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ReviewCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ReviewWhereUniqueInputSchema),z.lazy(() => ReviewWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ReviewUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => ReviewUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ReviewUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => ReviewUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherCreateWithoutCompanyInputSchema).array(),z.lazy(() => CompanyTeacherUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CompanyTeacherCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CompanyTeacherUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CompanyTeacherCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CompanyTeacherWhereUniqueInputSchema),z.lazy(() => CompanyTeacherWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CompanyTeacherUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CompanyTeacherUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CompanyTeacherScalarWhereInputSchema),z.lazy(() => CompanyTeacherScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInputSchema: z.ZodType<Prisma.OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInput> = z.object({
  create: z.union([ z.lazy(() => OpeningHoursCreateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursCreateWithoutCompanyInputSchema).array(),z.lazy(() => OpeningHoursUncheckedCreateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUncheckedCreateWithoutCompanyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => OpeningHoursCreateOrConnectWithoutCompanyInputSchema),z.lazy(() => OpeningHoursCreateOrConnectWithoutCompanyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => OpeningHoursUpsertWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUpsertWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => OpeningHoursCreateManyCompanyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => OpeningHoursWhereUniqueInputSchema),z.lazy(() => OpeningHoursWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => OpeningHoursUpdateWithWhereUniqueWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUpdateWithWhereUniqueWithoutCompanyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => OpeningHoursUpdateManyWithWhereWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUpdateManyWithWhereWithoutCompanyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => OpeningHoursScalarWhereInputSchema),z.lazy(() => OpeningHoursScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const CompanyCreateNestedOneWithoutAddressInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutAddressInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutAddressInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAddressInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutAddressInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateNestedOneWithoutAddressInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateNestedOneWithoutAddressInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutAddressInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAddressInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutAddressInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const CompanyUpdateOneWithoutAddressNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneWithoutAddressNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutAddressInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAddressInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutAddressInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutAddressInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutAddressInputSchema),z.lazy(() => CompanyUpdateWithoutAddressInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutAddressInputSchema) ]).optional(),
}).strict();

export const CompanyUncheckedUpdateOneWithoutAddressNestedInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateOneWithoutAddressNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutAddressInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAddressInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutAddressInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutAddressInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CompanyWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutAddressInputSchema),z.lazy(() => CompanyUpdateWithoutAddressInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutAddressInputSchema) ]).optional(),
}).strict();

export const CompanyCreateNestedOneWithoutOpeningHoursInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutOpeningHoursInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutOpeningHoursInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOpeningHoursInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutOpeningHoursInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const CompanyUpdateOneRequiredWithoutOpeningHoursNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutOpeningHoursNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutOpeningHoursInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOpeningHoursInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutOpeningHoursInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutOpeningHoursInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutOpeningHoursInputSchema),z.lazy(() => CompanyUpdateWithoutOpeningHoursInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutOpeningHoursInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutReviewInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutReviewInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReviewInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CompanyCreateNestedOneWithoutReviewsInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutReviewsInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutReviewsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutReviewNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutReviewNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutReviewInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutReviewInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutReviewInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutReviewInputSchema),z.lazy(() => UserUpdateWithoutReviewInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReviewInputSchema) ]).optional(),
}).strict();

export const CompanyUpdateOneRequiredWithoutReviewsNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutReviewsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutReviewsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutReviewsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutReviewsInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutReviewsInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutReviewsInputSchema),z.lazy(() => CompanyUpdateWithoutReviewsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutReviewsInputSchema) ]).optional(),
}).strict();

export const CourtCreateimagesInputSchema: z.ZodType<Prisma.CourtCreateimagesInput> = z.object({
  set: z.string().array()
}).strict();

export const CompanyCreateNestedOneWithoutCourtsInputSchema: z.ZodType<Prisma.CompanyCreateNestedOneWithoutCourtsInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCourtsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCourtsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutCourtsInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional()
}).strict();

export const BookingCreateNestedManyWithoutCourtInputSchema: z.ZodType<Prisma.BookingCreateNestedManyWithoutCourtInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutCourtInputSchema),z.lazy(() => BookingCreateWithoutCourtInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutCourtInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutCourtInputSchema),z.lazy(() => BookingCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyCourtInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AvailabilityCreateNestedManyWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityCreateNestedManyWithoutCourtInput> = z.object({
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutCourtInputSchema),z.lazy(() => AvailabilityCreateWithoutCourtInputSchema).array(),z.lazy(() => AvailabilityUncheckedCreateWithoutCourtInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AvailabilityCreateOrConnectWithoutCourtInputSchema),z.lazy(() => AvailabilityCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AvailabilityCreateManyCourtInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InviteCreateNestedManyWithoutCourtInputSchema: z.ZodType<Prisma.InviteCreateNestedManyWithoutCourtInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutCourtInputSchema),z.lazy(() => InviteCreateWithoutCourtInputSchema).array(),z.lazy(() => InviteUncheckedCreateWithoutCourtInputSchema),z.lazy(() => InviteUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteCreateOrConnectWithoutCourtInputSchema),z.lazy(() => InviteCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteCreateManyCourtInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const BookingUncheckedCreateNestedManyWithoutCourtInputSchema: z.ZodType<Prisma.BookingUncheckedCreateNestedManyWithoutCourtInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutCourtInputSchema),z.lazy(() => BookingCreateWithoutCourtInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutCourtInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutCourtInputSchema),z.lazy(() => BookingCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyCourtInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const AvailabilityUncheckedCreateNestedManyWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityUncheckedCreateNestedManyWithoutCourtInput> = z.object({
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutCourtInputSchema),z.lazy(() => AvailabilityCreateWithoutCourtInputSchema).array(),z.lazy(() => AvailabilityUncheckedCreateWithoutCourtInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AvailabilityCreateOrConnectWithoutCourtInputSchema),z.lazy(() => AvailabilityCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AvailabilityCreateManyCourtInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const InviteUncheckedCreateNestedManyWithoutCourtInputSchema: z.ZodType<Prisma.InviteUncheckedCreateNestedManyWithoutCourtInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutCourtInputSchema),z.lazy(() => InviteCreateWithoutCourtInputSchema).array(),z.lazy(() => InviteUncheckedCreateWithoutCourtInputSchema),z.lazy(() => InviteUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteCreateOrConnectWithoutCourtInputSchema),z.lazy(() => InviteCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteCreateManyCourtInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const EnumSportTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumSportTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => SportTypeSchema).optional()
}).strict();

export const CourtUpdateimagesInputSchema: z.ZodType<Prisma.CourtUpdateimagesInput> = z.object({
  set: z.string().array().optional(),
  push: z.union([ z.string(),z.string().array() ]).optional(),
}).strict();

export const CompanyUpdateOneRequiredWithoutCourtsNestedInputSchema: z.ZodType<Prisma.CompanyUpdateOneRequiredWithoutCourtsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CompanyCreateWithoutCourtsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCourtsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CompanyCreateOrConnectWithoutCourtsInputSchema).optional(),
  upsert: z.lazy(() => CompanyUpsertWithoutCourtsInputSchema).optional(),
  connect: z.lazy(() => CompanyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CompanyUpdateToOneWithWhereWithoutCourtsInputSchema),z.lazy(() => CompanyUpdateWithoutCourtsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCourtsInputSchema) ]).optional(),
}).strict();

export const BookingUpdateManyWithoutCourtNestedInputSchema: z.ZodType<Prisma.BookingUpdateManyWithoutCourtNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutCourtInputSchema),z.lazy(() => BookingCreateWithoutCourtInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutCourtInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutCourtInputSchema),z.lazy(() => BookingCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyCourtInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutCourtInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutCourtInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AvailabilityUpdateManyWithoutCourtNestedInputSchema: z.ZodType<Prisma.AvailabilityUpdateManyWithoutCourtNestedInput> = z.object({
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutCourtInputSchema),z.lazy(() => AvailabilityCreateWithoutCourtInputSchema).array(),z.lazy(() => AvailabilityUncheckedCreateWithoutCourtInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AvailabilityCreateOrConnectWithoutCourtInputSchema),z.lazy(() => AvailabilityCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AvailabilityUpsertWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => AvailabilityUpsertWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AvailabilityCreateManyCourtInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AvailabilityUpdateWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => AvailabilityUpdateWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AvailabilityUpdateManyWithWhereWithoutCourtInputSchema),z.lazy(() => AvailabilityUpdateManyWithWhereWithoutCourtInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InviteUpdateManyWithoutCourtNestedInputSchema: z.ZodType<Prisma.InviteUpdateManyWithoutCourtNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutCourtInputSchema),z.lazy(() => InviteCreateWithoutCourtInputSchema).array(),z.lazy(() => InviteUncheckedCreateWithoutCourtInputSchema),z.lazy(() => InviteUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteCreateOrConnectWithoutCourtInputSchema),z.lazy(() => InviteCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InviteUpsertWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => InviteUpsertWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteCreateManyCourtInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InviteUpdateWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => InviteUpdateWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InviteUpdateManyWithWhereWithoutCourtInputSchema),z.lazy(() => InviteUpdateManyWithWhereWithoutCourtInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InviteScalarWhereInputSchema),z.lazy(() => InviteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const BookingUncheckedUpdateManyWithoutCourtNestedInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutCourtNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutCourtInputSchema),z.lazy(() => BookingCreateWithoutCourtInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutCourtInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutCourtInputSchema),z.lazy(() => BookingCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyCourtInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutCourtInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutCourtInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateManyWithoutCourtNestedInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateManyWithoutCourtNestedInput> = z.object({
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutCourtInputSchema),z.lazy(() => AvailabilityCreateWithoutCourtInputSchema).array(),z.lazy(() => AvailabilityUncheckedCreateWithoutCourtInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => AvailabilityCreateOrConnectWithoutCourtInputSchema),z.lazy(() => AvailabilityCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => AvailabilityUpsertWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => AvailabilityUpsertWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => AvailabilityCreateManyCourtInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => AvailabilityWhereUniqueInputSchema),z.lazy(() => AvailabilityWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => AvailabilityUpdateWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => AvailabilityUpdateWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => AvailabilityUpdateManyWithWhereWithoutCourtInputSchema),z.lazy(() => AvailabilityUpdateManyWithWhereWithoutCourtInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const InviteUncheckedUpdateManyWithoutCourtNestedInputSchema: z.ZodType<Prisma.InviteUncheckedUpdateManyWithoutCourtNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutCourtInputSchema),z.lazy(() => InviteCreateWithoutCourtInputSchema).array(),z.lazy(() => InviteUncheckedCreateWithoutCourtInputSchema),z.lazy(() => InviteUncheckedCreateWithoutCourtInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InviteCreateOrConnectWithoutCourtInputSchema),z.lazy(() => InviteCreateOrConnectWithoutCourtInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InviteUpsertWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => InviteUpsertWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InviteCreateManyCourtInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InviteWhereUniqueInputSchema),z.lazy(() => InviteWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InviteUpdateWithWhereUniqueWithoutCourtInputSchema),z.lazy(() => InviteUpdateWithWhereUniqueWithoutCourtInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InviteUpdateManyWithWhereWithoutCourtInputSchema),z.lazy(() => InviteUpdateManyWithWhereWithoutCourtInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InviteScalarWhereInputSchema),z.lazy(() => InviteScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutBookingsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutBookingsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBookingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CourtCreateNestedOneWithoutBookingsInputSchema: z.ZodType<Prisma.CourtCreateNestedOneWithoutBookingsInput> = z.object({
  create: z.union([ z.lazy(() => CourtCreateWithoutBookingsInputSchema),z.lazy(() => CourtUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourtCreateOrConnectWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => CourtWhereUniqueInputSchema).optional()
}).strict();

export const InviteCreateNestedOneWithoutBookingInputSchema: z.ZodType<Prisma.InviteCreateNestedOneWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutBookingInputSchema),z.lazy(() => InviteUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InviteCreateOrConnectWithoutBookingInputSchema).optional(),
  connect: z.lazy(() => InviteWhereUniqueInputSchema).optional()
}).strict();

export const HistoryCreateNestedManyWithoutBookingInputSchema: z.ZodType<Prisma.HistoryCreateNestedManyWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutBookingInputSchema),z.lazy(() => HistoryCreateWithoutBookingInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutBookingInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutBookingInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyBookingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const TeacherCreateNestedOneWithoutBookingsInputSchema: z.ZodType<Prisma.TeacherCreateNestedOneWithoutBookingsInput> = z.object({
  create: z.union([ z.lazy(() => TeacherCreateWithoutBookingsInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeacherCreateOrConnectWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => TeacherWhereUniqueInputSchema).optional()
}).strict();

export const InviteUncheckedCreateNestedOneWithoutBookingInputSchema: z.ZodType<Prisma.InviteUncheckedCreateNestedOneWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutBookingInputSchema),z.lazy(() => InviteUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InviteCreateOrConnectWithoutBookingInputSchema).optional(),
  connect: z.lazy(() => InviteWhereUniqueInputSchema).optional()
}).strict();

export const HistoryUncheckedCreateNestedManyWithoutBookingInputSchema: z.ZodType<Prisma.HistoryUncheckedCreateNestedManyWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutBookingInputSchema),z.lazy(() => HistoryCreateWithoutBookingInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutBookingInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutBookingInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyBookingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export const UserUpdateOneRequiredWithoutBookingsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutBookingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutBookingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutBookingsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutBookingsInputSchema),z.lazy(() => UserUpdateWithoutBookingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBookingsInputSchema) ]).optional(),
}).strict();

export const CourtUpdateOneRequiredWithoutBookingsNestedInputSchema: z.ZodType<Prisma.CourtUpdateOneRequiredWithoutBookingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourtCreateWithoutBookingsInputSchema),z.lazy(() => CourtUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourtCreateOrConnectWithoutBookingsInputSchema).optional(),
  upsert: z.lazy(() => CourtUpsertWithoutBookingsInputSchema).optional(),
  connect: z.lazy(() => CourtWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourtUpdateToOneWithWhereWithoutBookingsInputSchema),z.lazy(() => CourtUpdateWithoutBookingsInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutBookingsInputSchema) ]).optional(),
}).strict();

export const InviteUpdateOneWithoutBookingNestedInputSchema: z.ZodType<Prisma.InviteUpdateOneWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutBookingInputSchema),z.lazy(() => InviteUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InviteCreateOrConnectWithoutBookingInputSchema).optional(),
  upsert: z.lazy(() => InviteUpsertWithoutBookingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => InviteWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => InviteWhereInputSchema) ]).optional(),
  connect: z.lazy(() => InviteWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InviteUpdateToOneWithWhereWithoutBookingInputSchema),z.lazy(() => InviteUpdateWithoutBookingInputSchema),z.lazy(() => InviteUncheckedUpdateWithoutBookingInputSchema) ]).optional(),
}).strict();

export const HistoryUpdateManyWithoutBookingNestedInputSchema: z.ZodType<Prisma.HistoryUpdateManyWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutBookingInputSchema),z.lazy(() => HistoryCreateWithoutBookingInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutBookingInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutBookingInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HistoryUpsertWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => HistoryUpsertWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyBookingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HistoryUpdateWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => HistoryUpdateWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HistoryUpdateManyWithWhereWithoutBookingInputSchema),z.lazy(() => HistoryUpdateManyWithWhereWithoutBookingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HistoryScalarWhereInputSchema),z.lazy(() => HistoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const TeacherUpdateOneWithoutBookingsNestedInputSchema: z.ZodType<Prisma.TeacherUpdateOneWithoutBookingsNestedInput> = z.object({
  create: z.union([ z.lazy(() => TeacherCreateWithoutBookingsInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutBookingsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TeacherCreateOrConnectWithoutBookingsInputSchema).optional(),
  upsert: z.lazy(() => TeacherUpsertWithoutBookingsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => TeacherWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => TeacherWhereInputSchema) ]).optional(),
  connect: z.lazy(() => TeacherWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TeacherUpdateToOneWithWhereWithoutBookingsInputSchema),z.lazy(() => TeacherUpdateWithoutBookingsInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutBookingsInputSchema) ]).optional(),
}).strict();

export const InviteUncheckedUpdateOneWithoutBookingNestedInputSchema: z.ZodType<Prisma.InviteUncheckedUpdateOneWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => InviteCreateWithoutBookingInputSchema),z.lazy(() => InviteUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InviteCreateOrConnectWithoutBookingInputSchema).optional(),
  upsert: z.lazy(() => InviteUpsertWithoutBookingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => InviteWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => InviteWhereInputSchema) ]).optional(),
  connect: z.lazy(() => InviteWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InviteUpdateToOneWithWhereWithoutBookingInputSchema),z.lazy(() => InviteUpdateWithoutBookingInputSchema),z.lazy(() => InviteUncheckedUpdateWithoutBookingInputSchema) ]).optional(),
}).strict();

export const HistoryUncheckedUpdateManyWithoutBookingNestedInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateManyWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => HistoryCreateWithoutBookingInputSchema),z.lazy(() => HistoryCreateWithoutBookingInputSchema).array(),z.lazy(() => HistoryUncheckedCreateWithoutBookingInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => HistoryCreateOrConnectWithoutBookingInputSchema),z.lazy(() => HistoryCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => HistoryUpsertWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => HistoryUpsertWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => HistoryCreateManyBookingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => HistoryWhereUniqueInputSchema),z.lazy(() => HistoryWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => HistoryUpdateWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => HistoryUpdateWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => HistoryUpdateManyWithWhereWithoutBookingInputSchema),z.lazy(() => HistoryUpdateManyWithWhereWithoutBookingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => HistoryScalarWhereInputSchema),z.lazy(() => HistoryScalarWhereInputSchema).array() ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutInvitesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutInvitesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInvitesInputSchema),z.lazy(() => UserUncheckedCreateWithoutInvitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvitesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const CourtCreateNestedOneWithoutInvitesInputSchema: z.ZodType<Prisma.CourtCreateNestedOneWithoutInvitesInput> = z.object({
  create: z.union([ z.lazy(() => CourtCreateWithoutInvitesInputSchema),z.lazy(() => CourtUncheckedCreateWithoutInvitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourtCreateOrConnectWithoutInvitesInputSchema).optional(),
  connect: z.lazy(() => CourtWhereUniqueInputSchema).optional()
}).strict();

export const BookingCreateNestedOneWithoutInviteInputSchema: z.ZodType<Prisma.BookingCreateNestedOneWithoutInviteInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutInviteInputSchema),z.lazy(() => BookingUncheckedCreateWithoutInviteInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutInviteInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneWithoutInvitesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutInvitesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutInvitesInputSchema),z.lazy(() => UserUncheckedCreateWithoutInvitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutInvitesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutInvitesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutInvitesInputSchema),z.lazy(() => UserUpdateWithoutInvitesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInvitesInputSchema) ]).optional(),
}).strict();

export const CourtUpdateOneRequiredWithoutInvitesNestedInputSchema: z.ZodType<Prisma.CourtUpdateOneRequiredWithoutInvitesNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourtCreateWithoutInvitesInputSchema),z.lazy(() => CourtUncheckedCreateWithoutInvitesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourtCreateOrConnectWithoutInvitesInputSchema).optional(),
  upsert: z.lazy(() => CourtUpsertWithoutInvitesInputSchema).optional(),
  connect: z.lazy(() => CourtWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourtUpdateToOneWithWhereWithoutInvitesInputSchema),z.lazy(() => CourtUpdateWithoutInvitesInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutInvitesInputSchema) ]).optional(),
}).strict();

export const BookingUpdateOneWithoutInviteNestedInputSchema: z.ZodType<Prisma.BookingUpdateOneWithoutInviteNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutInviteInputSchema),z.lazy(() => BookingUncheckedCreateWithoutInviteInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutInviteInputSchema).optional(),
  upsert: z.lazy(() => BookingUpsertWithoutInviteInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BookingWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingUpdateToOneWithWhereWithoutInviteInputSchema),z.lazy(() => BookingUpdateWithoutInviteInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutInviteInputSchema) ]).optional(),
}).strict();

export const CourtCreateNestedOneWithoutAvailabilityInputSchema: z.ZodType<Prisma.CourtCreateNestedOneWithoutAvailabilityInput> = z.object({
  create: z.union([ z.lazy(() => CourtCreateWithoutAvailabilityInputSchema),z.lazy(() => CourtUncheckedCreateWithoutAvailabilityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourtCreateOrConnectWithoutAvailabilityInputSchema).optional(),
  connect: z.lazy(() => CourtWhereUniqueInputSchema).optional()
}).strict();

export const BoolFieldUpdateOperationsInputSchema: z.ZodType<Prisma.BoolFieldUpdateOperationsInput> = z.object({
  set: z.boolean().optional()
}).strict();

export const CourtUpdateOneRequiredWithoutAvailabilityNestedInputSchema: z.ZodType<Prisma.CourtUpdateOneRequiredWithoutAvailabilityNestedInput> = z.object({
  create: z.union([ z.lazy(() => CourtCreateWithoutAvailabilityInputSchema),z.lazy(() => CourtUncheckedCreateWithoutAvailabilityInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CourtCreateOrConnectWithoutAvailabilityInputSchema).optional(),
  upsert: z.lazy(() => CourtUpsertWithoutAvailabilityInputSchema).optional(),
  connect: z.lazy(() => CourtWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CourtUpdateToOneWithWhereWithoutAvailabilityInputSchema),z.lazy(() => CourtUpdateWithoutAvailabilityInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutAvailabilityInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationsInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const EnumNotificationTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumNotificationTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => NotificationTypeSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutNotificationsNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutNotificationsNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationsInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutNotificationsInputSchema),z.lazy(() => UserUpdateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutEventHistoriesInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutEventHistoriesInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutEventHistoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutEventHistoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEventHistoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const BookingCreateNestedOneWithoutHistoryInputSchema: z.ZodType<Prisma.BookingCreateNestedOneWithoutHistoryInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutHistoryInputSchema),z.lazy(() => BookingUncheckedCreateWithoutHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutHistoryInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional()
}).strict();

export const EventCreateNestedOneWithoutHistoriesInputSchema: z.ZodType<Prisma.EventCreateNestedOneWithoutHistoriesInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutHistoriesInputSchema),z.lazy(() => EventUncheckedCreateWithoutHistoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutHistoriesInputSchema).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutEventHistoriesNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutEventHistoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutEventHistoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutEventHistoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEventHistoriesInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutEventHistoriesInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutEventHistoriesInputSchema),z.lazy(() => UserUpdateWithoutEventHistoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutEventHistoriesInputSchema) ]).optional(),
}).strict();

export const BookingUpdateOneRequiredWithoutHistoryNestedInputSchema: z.ZodType<Prisma.BookingUpdateOneRequiredWithoutHistoryNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutHistoryInputSchema),z.lazy(() => BookingUncheckedCreateWithoutHistoryInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutHistoryInputSchema).optional(),
  upsert: z.lazy(() => BookingUpsertWithoutHistoryInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingUpdateToOneWithWhereWithoutHistoryInputSchema),z.lazy(() => BookingUpdateWithoutHistoryInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutHistoryInputSchema) ]).optional(),
}).strict();

export const EventUpdateOneWithoutHistoriesNestedInputSchema: z.ZodType<Prisma.EventUpdateOneWithoutHistoriesNestedInput> = z.object({
  create: z.union([ z.lazy(() => EventCreateWithoutHistoriesInputSchema),z.lazy(() => EventUncheckedCreateWithoutHistoriesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => EventCreateOrConnectWithoutHistoriesInputSchema).optional(),
  upsert: z.lazy(() => EventUpsertWithoutHistoriesInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => EventWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => EventWhereInputSchema) ]).optional(),
  connect: z.lazy(() => EventWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => EventUpdateToOneWithWhereWithoutHistoriesInputSchema),z.lazy(() => EventUpdateWithoutHistoriesInputSchema),z.lazy(() => EventUncheckedUpdateWithoutHistoriesInputSchema) ]).optional(),
}).strict();

export const UserCreateNestedOneWithoutTokensInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTokensInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTokensInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export const EnumTokenTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTokenTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TokenTypeSchema).optional()
}).strict();

export const UserUpdateOneRequiredWithoutTokensNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTokensNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutTokensInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTokensInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTokensInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTokensInputSchema),z.lazy(() => UserUpdateWithoutTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTokensInputSchema) ]).optional(),
}).strict();

export const NestedStringFilterSchema: z.ZodType<Prisma.NestedStringFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringFilterSchema) ]).optional(),
}).strict();

export const NestedStringNullableFilterSchema: z.ZodType<Prisma.NestedStringNullableFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntFilterSchema: z.ZodType<Prisma.NestedIntFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntFilterSchema) ]).optional(),
}).strict();

export const NestedStringWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringWithAggregatesFilter> = z.object({
  equals: z.string().optional(),
  in: z.string().array().optional(),
  notIn: z.string().array().optional(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedStringFilterSchema).optional(),
  _max: z.lazy(() => NestedStringFilterSchema).optional()
}).strict();

export const NestedStringNullableWithAggregatesFilterSchema: z.ZodType<Prisma.NestedStringNullableWithAggregatesFilter> = z.object({
  equals: z.string().optional().nullable(),
  in: z.string().array().optional().nullable(),
  notIn: z.string().array().optional().nullable(),
  lt: z.string().optional(),
  lte: z.string().optional(),
  gt: z.string().optional(),
  gte: z.string().optional(),
  contains: z.string().optional(),
  startsWith: z.string().optional(),
  endsWith: z.string().optional(),
  not: z.union([ z.string(),z.lazy(() => NestedStringNullableWithAggregatesFilterSchema) ]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterSchema).optional(),
  _min: z.lazy(() => NestedStringNullableFilterSchema).optional(),
  _max: z.lazy(() => NestedStringNullableFilterSchema).optional()
}).strict();

export const NestedIntNullableFilterSchema: z.ZodType<Prisma.NestedIntNullableFilter> = z.object({
  equals: z.number().optional().nullable(),
  in: z.number().array().optional().nullable(),
  notIn: z.number().array().optional().nullable(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntNullableFilterSchema) ]).optional().nullable(),
}).strict();

export const NestedIntWithAggregatesFilterSchema: z.ZodType<Prisma.NestedIntWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedIntWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedIntFilterSchema).optional(),
  _max: z.lazy(() => NestedIntFilterSchema).optional()
}).strict();

export const NestedFloatFilterSchema: z.ZodType<Prisma.NestedFloatFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatFilterSchema) ]).optional(),
}).strict();

export const NestedEnumEventTypeFilterSchema: z.ZodType<Prisma.NestedEnumEventTypeFilter> = z.object({
  equals: z.lazy(() => EventTypeSchema).optional(),
  in: z.lazy(() => EventTypeSchema).array().optional(),
  notIn: z.lazy(() => EventTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => NestedEnumEventTypeFilterSchema) ]).optional(),
}).strict();

export const NestedDateTimeFilterSchema: z.ZodType<Prisma.NestedDateTimeFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumEventTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumEventTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => EventTypeSchema).optional(),
  in: z.lazy(() => EventTypeSchema).array().optional(),
  notIn: z.lazy(() => EventTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => NestedEnumEventTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumEventTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumEventTypeFilterSchema).optional()
}).strict();

export const NestedDateTimeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedDateTimeWithAggregatesFilter> = z.object({
  equals: z.coerce.date().optional(),
  in: z.coerce.date().array().optional(),
  notIn: z.coerce.date().array().optional(),
  lt: z.coerce.date().optional(),
  lte: z.coerce.date().optional(),
  gt: z.coerce.date().optional(),
  gte: z.coerce.date().optional(),
  not: z.union([ z.coerce.date(),z.lazy(() => NestedDateTimeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedDateTimeFilterSchema).optional(),
  _max: z.lazy(() => NestedDateTimeFilterSchema).optional()
}).strict();

export const NestedFloatWithAggregatesFilterSchema: z.ZodType<Prisma.NestedFloatWithAggregatesFilter> = z.object({
  equals: z.number().optional(),
  in: z.number().array().optional(),
  notIn: z.number().array().optional(),
  lt: z.number().optional(),
  lte: z.number().optional(),
  gt: z.number().optional(),
  gte: z.number().optional(),
  not: z.union([ z.number(),z.lazy(() => NestedFloatWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _avg: z.lazy(() => NestedFloatFilterSchema).optional(),
  _sum: z.lazy(() => NestedFloatFilterSchema).optional(),
  _min: z.lazy(() => NestedFloatFilterSchema).optional(),
  _max: z.lazy(() => NestedFloatFilterSchema).optional()
}).strict();

export const NestedEnumSportTypeFilterSchema: z.ZodType<Prisma.NestedEnumSportTypeFilter> = z.object({
  equals: z.lazy(() => SportTypeSchema).optional(),
  in: z.lazy(() => SportTypeSchema).array().optional(),
  notIn: z.lazy(() => SportTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => NestedEnumSportTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumSportTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumSportTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => SportTypeSchema).optional(),
  in: z.lazy(() => SportTypeSchema).array().optional(),
  notIn: z.lazy(() => SportTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => NestedEnumSportTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumSportTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumSportTypeFilterSchema).optional()
}).strict();

export const NestedBoolFilterSchema: z.ZodType<Prisma.NestedBoolFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolFilterSchema) ]).optional(),
}).strict();

export const NestedBoolWithAggregatesFilterSchema: z.ZodType<Prisma.NestedBoolWithAggregatesFilter> = z.object({
  equals: z.boolean().optional(),
  not: z.union([ z.boolean(),z.lazy(() => NestedBoolWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedBoolFilterSchema).optional(),
  _max: z.lazy(() => NestedBoolFilterSchema).optional()
}).strict();

export const NestedEnumNotificationTypeFilterSchema: z.ZodType<Prisma.NestedEnumNotificationTypeFilter> = z.object({
  equals: z.lazy(() => NotificationTypeSchema).optional(),
  in: z.lazy(() => NotificationTypeSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => NestedEnumNotificationTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumNotificationTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumNotificationTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NotificationTypeSchema).optional(),
  in: z.lazy(() => NotificationTypeSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => NestedEnumNotificationTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNotificationTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNotificationTypeFilterSchema).optional()
}).strict();

export const NestedEnumTokenTypeFilterSchema: z.ZodType<Prisma.NestedEnumTokenTypeFilter> = z.object({
  equals: z.lazy(() => TokenTypeSchema).optional(),
  in: z.lazy(() => TokenTypeSchema).array().optional(),
  notIn: z.lazy(() => TokenTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => NestedEnumTokenTypeFilterSchema) ]).optional(),
}).strict();

export const NestedEnumTokenTypeWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumTokenTypeWithAggregatesFilter> = z.object({
  equals: z.lazy(() => TokenTypeSchema).optional(),
  in: z.lazy(() => TokenTypeSchema).array().optional(),
  notIn: z.lazy(() => TokenTypeSchema).array().optional(),
  not: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => NestedEnumTokenTypeWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumTokenTypeFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumTokenTypeFilterSchema).optional()
}).strict();

export const UserCreateWithoutProfileInputSchema: z.ZodType<Prisma.UserCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const ProfileEventParticipationCreateWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  participationDate: z.coerce.date().optional(),
  classification: z.string().optional().nullable(),
  event: z.lazy(() => EventCreateNestedOneWithoutParticipantsInputSchema)
}).strict();

export const ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  eventId: z.string(),
  participationDate: z.coerce.date().optional(),
  classification: z.string().optional().nullable()
}).strict();

export const ProfileEventParticipationCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const ProfileEventParticipationCreateManyProfileInputEnvelopeSchema: z.ZodType<Prisma.ProfileEventParticipationCreateManyProfileInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProfileEventParticipationCreateManyProfileInputSchema),z.lazy(() => ProfileEventParticipationCreateManyProfileInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TrophyCreateWithoutProfileInputSchema: z.ZodType<Prisma.TrophyCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  date: z.coerce.date()
}).strict();

export const TrophyUncheckedCreateWithoutProfileInputSchema: z.ZodType<Prisma.TrophyUncheckedCreateWithoutProfileInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  date: z.coerce.date()
}).strict();

export const TrophyCreateOrConnectWithoutProfileInputSchema: z.ZodType<Prisma.TrophyCreateOrConnectWithoutProfileInput> = z.object({
  where: z.lazy(() => TrophyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TrophyCreateWithoutProfileInputSchema),z.lazy(() => TrophyUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const TrophyCreateManyProfileInputEnvelopeSchema: z.ZodType<Prisma.TrophyCreateManyProfileInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TrophyCreateManyProfileInputSchema),z.lazy(() => TrophyCreateManyProfileInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutProfileInputSchema: z.ZodType<Prisma.UserUpsertWithoutProfileInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutProfileInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProfileInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutProfileInputSchema),z.lazy(() => UserUncheckedCreateWithoutProfileInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutProfileInputSchema),z.lazy(() => UserUncheckedUpdateWithoutProfileInputSchema) ]),
}).strict();

export const UserUpdateWithoutProfileInputSchema: z.ZodType<Prisma.UserUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const ProfileEventParticipationUpsertWithWhereUniqueWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpsertWithWhereUniqueWithoutProfileInput> = z.object({
  where: z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProfileEventParticipationUpdateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUncheckedUpdateWithoutProfileInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const ProfileEventParticipationUpdateWithWhereUniqueWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateWithWhereUniqueWithoutProfileInput> = z.object({
  where: z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProfileEventParticipationUpdateWithoutProfileInputSchema),z.lazy(() => ProfileEventParticipationUncheckedUpdateWithoutProfileInputSchema) ]),
}).strict();

export const ProfileEventParticipationUpdateManyWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateManyWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => ProfileEventParticipationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProfileEventParticipationUpdateManyMutationInputSchema),z.lazy(() => ProfileEventParticipationUncheckedUpdateManyWithoutProfileInputSchema) ]),
}).strict();

export const ProfileEventParticipationScalarWhereInputSchema: z.ZodType<Prisma.ProfileEventParticipationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProfileEventParticipationScalarWhereInputSchema),z.lazy(() => ProfileEventParticipationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProfileEventParticipationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProfileEventParticipationScalarWhereInputSchema),z.lazy(() => ProfileEventParticipationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  participationDate: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  classification: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const TrophyUpsertWithWhereUniqueWithoutProfileInputSchema: z.ZodType<Prisma.TrophyUpsertWithWhereUniqueWithoutProfileInput> = z.object({
  where: z.lazy(() => TrophyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TrophyUpdateWithoutProfileInputSchema),z.lazy(() => TrophyUncheckedUpdateWithoutProfileInputSchema) ]),
  create: z.union([ z.lazy(() => TrophyCreateWithoutProfileInputSchema),z.lazy(() => TrophyUncheckedCreateWithoutProfileInputSchema) ]),
}).strict();

export const TrophyUpdateWithWhereUniqueWithoutProfileInputSchema: z.ZodType<Prisma.TrophyUpdateWithWhereUniqueWithoutProfileInput> = z.object({
  where: z.lazy(() => TrophyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TrophyUpdateWithoutProfileInputSchema),z.lazy(() => TrophyUncheckedUpdateWithoutProfileInputSchema) ]),
}).strict();

export const TrophyUpdateManyWithWhereWithoutProfileInputSchema: z.ZodType<Prisma.TrophyUpdateManyWithWhereWithoutProfileInput> = z.object({
  where: z.lazy(() => TrophyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TrophyUpdateManyMutationInputSchema),z.lazy(() => TrophyUncheckedUpdateManyWithoutProfileInputSchema) ]),
}).strict();

export const TrophyScalarWhereInputSchema: z.ZodType<Prisma.TrophyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TrophyScalarWhereInputSchema),z.lazy(() => TrophyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TrophyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TrophyScalarWhereInputSchema),z.lazy(() => TrophyScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  profileId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const CompanyCreateWithoutEventsInputSchema: z.ZodType<Prisma.CompanyCreateWithoutEventsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedCompaniesInputSchema),
  courts: z.lazy(() => CourtCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserCreateNestedManyWithoutCompaniesInputSchema).optional(),
  city: z.lazy(() => CityCreateNestedOneWithoutCompaniesInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutEventsInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutEventsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  cityId: z.string().optional().nullable(),
  addressId: z.string().optional().nullable(),
  courts: z.lazy(() => CourtUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedCreateNestedManyWithoutCompaniesInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutEventsInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutEventsInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutEventsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutEventsInputSchema) ]),
}).strict();

export const ProfileEventParticipationCreateWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationCreateWithoutEventInput> = z.object({
  id: z.string().optional(),
  participationDate: z.coerce.date().optional(),
  classification: z.string().optional().nullable(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutEventsInputSchema)
}).strict();

export const ProfileEventParticipationUncheckedCreateWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedCreateWithoutEventInput> = z.object({
  id: z.string().optional(),
  profileId: z.string(),
  participationDate: z.coerce.date().optional(),
  classification: z.string().optional().nullable()
}).strict();

export const ProfileEventParticipationCreateOrConnectWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationCreateOrConnectWithoutEventInput> = z.object({
  where: z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const ProfileEventParticipationCreateManyEventInputEnvelopeSchema: z.ZodType<Prisma.ProfileEventParticipationCreateManyEventInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ProfileEventParticipationCreateManyEventInputSchema),z.lazy(() => ProfileEventParticipationCreateManyEventInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const HistoryCreateWithoutEventInputSchema: z.ZodType<Prisma.HistoryCreateWithoutEventInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutEventHistoriesInputSchema),
  booking: z.lazy(() => BookingCreateNestedOneWithoutHistoryInputSchema)
}).strict();

export const HistoryUncheckedCreateWithoutEventInputSchema: z.ZodType<Prisma.HistoryUncheckedCreateWithoutEventInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  bookingId: z.string()
}).strict();

export const HistoryCreateOrConnectWithoutEventInputSchema: z.ZodType<Prisma.HistoryCreateOrConnectWithoutEventInput> = z.object({
  where: z.lazy(() => HistoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HistoryCreateWithoutEventInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const HistoryCreateManyEventInputEnvelopeSchema: z.ZodType<Prisma.HistoryCreateManyEventInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => HistoryCreateManyEventInputSchema),z.lazy(() => HistoryCreateManyEventInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const EventRuleCreateWithoutEventInputSchema: z.ZodType<Prisma.EventRuleCreateWithoutEventInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  value: z.string()
}).strict();

export const EventRuleUncheckedCreateWithoutEventInputSchema: z.ZodType<Prisma.EventRuleUncheckedCreateWithoutEventInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  value: z.string()
}).strict();

export const EventRuleCreateOrConnectWithoutEventInputSchema: z.ZodType<Prisma.EventRuleCreateOrConnectWithoutEventInput> = z.object({
  where: z.lazy(() => EventRuleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventRuleCreateWithoutEventInputSchema),z.lazy(() => EventRuleUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const EventRuleCreateManyEventInputEnvelopeSchema: z.ZodType<Prisma.EventRuleCreateManyEventInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EventRuleCreateManyEventInputSchema),z.lazy(() => EventRuleCreateManyEventInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const PrizeCreateWithoutEventInputSchema: z.ZodType<Prisma.PrizeCreateWithoutEventInput> = z.object({
  id: z.string().optional(),
  position: z.number(),
  amount: z.number()
}).strict();

export const PrizeUncheckedCreateWithoutEventInputSchema: z.ZodType<Prisma.PrizeUncheckedCreateWithoutEventInput> = z.object({
  id: z.string().optional(),
  position: z.number(),
  amount: z.number()
}).strict();

export const PrizeCreateOrConnectWithoutEventInputSchema: z.ZodType<Prisma.PrizeCreateOrConnectWithoutEventInput> = z.object({
  where: z.lazy(() => PrizeWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrizeCreateWithoutEventInputSchema),z.lazy(() => PrizeUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const PrizeCreateManyEventInputEnvelopeSchema: z.ZodType<Prisma.PrizeCreateManyEventInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PrizeCreateManyEventInputSchema),z.lazy(() => PrizeCreateManyEventInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CompanyUpsertWithoutEventsInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutEventsInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutEventsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutEventsInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutEventsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutEventsInputSchema) ]),
  where: z.lazy(() => CompanyWhereInputSchema).optional()
}).strict();

export const CompanyUpdateToOneWithWhereWithoutEventsInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutEventsInput> = z.object({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutEventsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutEventsInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutEventsInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutEventsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedCompaniesNestedInputSchema).optional(),
  courts: z.lazy(() => CourtUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  city: z.lazy(() => CityUpdateOneWithoutCompaniesNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutEventsInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutEventsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courts: z.lazy(() => CourtUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const ProfileEventParticipationUpsertWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpsertWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProfileEventParticipationUpdateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUncheckedUpdateWithoutEventInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileEventParticipationCreateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const ProfileEventParticipationUpdateWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => ProfileEventParticipationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProfileEventParticipationUpdateWithoutEventInputSchema),z.lazy(() => ProfileEventParticipationUncheckedUpdateWithoutEventInputSchema) ]),
}).strict();

export const ProfileEventParticipationUpdateManyWithWhereWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateManyWithWhereWithoutEventInput> = z.object({
  where: z.lazy(() => ProfileEventParticipationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProfileEventParticipationUpdateManyMutationInputSchema),z.lazy(() => ProfileEventParticipationUncheckedUpdateManyWithoutEventInputSchema) ]),
}).strict();

export const HistoryUpsertWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.HistoryUpsertWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => HistoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HistoryUpdateWithoutEventInputSchema),z.lazy(() => HistoryUncheckedUpdateWithoutEventInputSchema) ]),
  create: z.union([ z.lazy(() => HistoryCreateWithoutEventInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const HistoryUpdateWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.HistoryUpdateWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => HistoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => HistoryUpdateWithoutEventInputSchema),z.lazy(() => HistoryUncheckedUpdateWithoutEventInputSchema) ]),
}).strict();

export const HistoryUpdateManyWithWhereWithoutEventInputSchema: z.ZodType<Prisma.HistoryUpdateManyWithWhereWithoutEventInput> = z.object({
  where: z.lazy(() => HistoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => HistoryUpdateManyMutationInputSchema),z.lazy(() => HistoryUncheckedUpdateManyWithoutEventInputSchema) ]),
}).strict();

export const HistoryScalarWhereInputSchema: z.ZodType<Prisma.HistoryScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => HistoryScalarWhereInputSchema),z.lazy(() => HistoryScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => HistoryScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => HistoryScalarWhereInputSchema),z.lazy(() => HistoryScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  result: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const EventRuleUpsertWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.EventRuleUpsertWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => EventRuleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EventRuleUpdateWithoutEventInputSchema),z.lazy(() => EventRuleUncheckedUpdateWithoutEventInputSchema) ]),
  create: z.union([ z.lazy(() => EventRuleCreateWithoutEventInputSchema),z.lazy(() => EventRuleUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const EventRuleUpdateWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.EventRuleUpdateWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => EventRuleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EventRuleUpdateWithoutEventInputSchema),z.lazy(() => EventRuleUncheckedUpdateWithoutEventInputSchema) ]),
}).strict();

export const EventRuleUpdateManyWithWhereWithoutEventInputSchema: z.ZodType<Prisma.EventRuleUpdateManyWithWhereWithoutEventInput> = z.object({
  where: z.lazy(() => EventRuleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EventRuleUpdateManyMutationInputSchema),z.lazy(() => EventRuleUncheckedUpdateManyWithoutEventInputSchema) ]),
}).strict();

export const EventRuleScalarWhereInputSchema: z.ZodType<Prisma.EventRuleScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventRuleScalarWhereInputSchema),z.lazy(() => EventRuleScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventRuleScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventRuleScalarWhereInputSchema),z.lazy(() => EventRuleScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  value: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const PrizeUpsertWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.PrizeUpsertWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => PrizeWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrizeUpdateWithoutEventInputSchema),z.lazy(() => PrizeUncheckedUpdateWithoutEventInputSchema) ]),
  create: z.union([ z.lazy(() => PrizeCreateWithoutEventInputSchema),z.lazy(() => PrizeUncheckedCreateWithoutEventInputSchema) ]),
}).strict();

export const PrizeUpdateWithWhereUniqueWithoutEventInputSchema: z.ZodType<Prisma.PrizeUpdateWithWhereUniqueWithoutEventInput> = z.object({
  where: z.lazy(() => PrizeWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrizeUpdateWithoutEventInputSchema),z.lazy(() => PrizeUncheckedUpdateWithoutEventInputSchema) ]),
}).strict();

export const PrizeUpdateManyWithWhereWithoutEventInputSchema: z.ZodType<Prisma.PrizeUpdateManyWithWhereWithoutEventInput> = z.object({
  where: z.lazy(() => PrizeScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrizeUpdateManyMutationInputSchema),z.lazy(() => PrizeUncheckedUpdateManyWithoutEventInputSchema) ]),
}).strict();

export const PrizeScalarWhereInputSchema: z.ZodType<Prisma.PrizeScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrizeScalarWhereInputSchema),z.lazy(() => PrizeScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrizeScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrizeScalarWhereInputSchema),z.lazy(() => PrizeScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  amount: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  eventId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const EventCreateWithoutPrizeInputSchema: z.ZodType<Prisma.EventCreateWithoutPrizeInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutEventsInputSchema),
  participants: z.lazy(() => ProfileEventParticipationCreateNestedManyWithoutEventInputSchema).optional(),
  histories: z.lazy(() => HistoryCreateNestedManyWithoutEventInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUncheckedCreateWithoutPrizeInputSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutPrizeInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  companyId: z.string(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  participants: z.lazy(() => ProfileEventParticipationUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  histories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUncheckedCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventCreateOrConnectWithoutPrizeInputSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutPrizeInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventCreateWithoutPrizeInputSchema),z.lazy(() => EventUncheckedCreateWithoutPrizeInputSchema) ]),
}).strict();

export const EventUpsertWithoutPrizeInputSchema: z.ZodType<Prisma.EventUpsertWithoutPrizeInput> = z.object({
  update: z.union([ z.lazy(() => EventUpdateWithoutPrizeInputSchema),z.lazy(() => EventUncheckedUpdateWithoutPrizeInputSchema) ]),
  create: z.union([ z.lazy(() => EventCreateWithoutPrizeInputSchema),z.lazy(() => EventUncheckedCreateWithoutPrizeInputSchema) ]),
  where: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const EventUpdateToOneWithWhereWithoutPrizeInputSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutPrizeInput> = z.object({
  where: z.lazy(() => EventWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EventUpdateWithoutPrizeInputSchema),z.lazy(() => EventUncheckedUpdateWithoutPrizeInputSchema) ]),
}).strict();

export const EventUpdateWithoutPrizeInputSchema: z.ZodType<Prisma.EventUpdateWithoutPrizeInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutEventsNestedInputSchema).optional(),
  participants: z.lazy(() => ProfileEventParticipationUpdateManyWithoutEventNestedInputSchema).optional(),
  histories: z.lazy(() => HistoryUpdateManyWithoutEventNestedInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateWithoutPrizeInputSchema: z.ZodType<Prisma.EventUncheckedUpdateWithoutPrizeInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  participants: z.lazy(() => ProfileEventParticipationUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  histories: z.lazy(() => HistoryUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUncheckedUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventCreateWithoutEventRuleInputSchema: z.ZodType<Prisma.EventCreateWithoutEventRuleInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutEventsInputSchema),
  participants: z.lazy(() => ProfileEventParticipationCreateNestedManyWithoutEventInputSchema).optional(),
  histories: z.lazy(() => HistoryCreateNestedManyWithoutEventInputSchema).optional(),
  Prize: z.lazy(() => PrizeCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUncheckedCreateWithoutEventRuleInputSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutEventRuleInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  companyId: z.string(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  participants: z.lazy(() => ProfileEventParticipationUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  histories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  Prize: z.lazy(() => PrizeUncheckedCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventCreateOrConnectWithoutEventRuleInputSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutEventRuleInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventCreateWithoutEventRuleInputSchema),z.lazy(() => EventUncheckedCreateWithoutEventRuleInputSchema) ]),
}).strict();

export const EventUpsertWithoutEventRuleInputSchema: z.ZodType<Prisma.EventUpsertWithoutEventRuleInput> = z.object({
  update: z.union([ z.lazy(() => EventUpdateWithoutEventRuleInputSchema),z.lazy(() => EventUncheckedUpdateWithoutEventRuleInputSchema) ]),
  create: z.union([ z.lazy(() => EventCreateWithoutEventRuleInputSchema),z.lazy(() => EventUncheckedCreateWithoutEventRuleInputSchema) ]),
  where: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const EventUpdateToOneWithWhereWithoutEventRuleInputSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutEventRuleInput> = z.object({
  where: z.lazy(() => EventWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EventUpdateWithoutEventRuleInputSchema),z.lazy(() => EventUncheckedUpdateWithoutEventRuleInputSchema) ]),
}).strict();

export const EventUpdateWithoutEventRuleInputSchema: z.ZodType<Prisma.EventUpdateWithoutEventRuleInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutEventsNestedInputSchema).optional(),
  participants: z.lazy(() => ProfileEventParticipationUpdateManyWithoutEventNestedInputSchema).optional(),
  histories: z.lazy(() => HistoryUpdateManyWithoutEventNestedInputSchema).optional(),
  Prize: z.lazy(() => PrizeUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateWithoutEventRuleInputSchema: z.ZodType<Prisma.EventUncheckedUpdateWithoutEventRuleInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  participants: z.lazy(() => ProfileEventParticipationUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  histories: z.lazy(() => HistoryUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  Prize: z.lazy(() => PrizeUncheckedUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const ProfileCreateWithoutEventsInputSchema: z.ZodType<Prisma.ProfileCreateWithoutEventsInput> = z.object({
  id: z.string().optional(),
  bio: z.string().optional().nullable(),
  level: z.number().optional(),
  matchesPlayed: z.number().optional(),
  wins: z.number().optional(),
  losses: z.number().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputSchema),
  trophies: z.lazy(() => TrophyCreateNestedManyWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateWithoutEventsInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutEventsInput> = z.object({
  id: z.string().optional(),
  bio: z.string().optional().nullable(),
  level: z.number().optional(),
  matchesPlayed: z.number().optional(),
  wins: z.number().optional(),
  losses: z.number().optional(),
  userId: z.string(),
  trophies: z.lazy(() => TrophyUncheckedCreateNestedManyWithoutProfileInputSchema).optional()
}).strict();

export const ProfileCreateOrConnectWithoutEventsInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutEventsInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileCreateWithoutEventsInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutEventsInputSchema) ]),
}).strict();

export const EventCreateWithoutParticipantsInputSchema: z.ZodType<Prisma.EventCreateWithoutParticipantsInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutEventsInputSchema),
  histories: z.lazy(() => HistoryCreateNestedManyWithoutEventInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleCreateNestedManyWithoutEventInputSchema).optional(),
  Prize: z.lazy(() => PrizeCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUncheckedCreateWithoutParticipantsInputSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutParticipantsInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  companyId: z.string(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  histories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  Prize: z.lazy(() => PrizeUncheckedCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventCreateOrConnectWithoutParticipantsInputSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutParticipantsInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventCreateWithoutParticipantsInputSchema),z.lazy(() => EventUncheckedCreateWithoutParticipantsInputSchema) ]),
}).strict();

export const ProfileUpsertWithoutEventsInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutEventsInput> = z.object({
  update: z.union([ z.lazy(() => ProfileUpdateWithoutEventsInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutEventsInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileCreateWithoutEventsInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutEventsInputSchema) ]),
  where: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export const ProfileUpdateToOneWithWhereWithoutEventsInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutEventsInput> = z.object({
  where: z.lazy(() => ProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProfileUpdateWithoutEventsInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutEventsInputSchema) ]),
}).strict();

export const ProfileUpdateWithoutEventsInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutEventsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  matchesPlayed: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  wins: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  losses: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProfileNestedInputSchema).optional(),
  trophies: z.lazy(() => TrophyUpdateManyWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateWithoutEventsInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutEventsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  matchesPlayed: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  wins: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  losses: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  trophies: z.lazy(() => TrophyUncheckedUpdateManyWithoutProfileNestedInputSchema).optional()
}).strict();

export const EventUpsertWithoutParticipantsInputSchema: z.ZodType<Prisma.EventUpsertWithoutParticipantsInput> = z.object({
  update: z.union([ z.lazy(() => EventUpdateWithoutParticipantsInputSchema),z.lazy(() => EventUncheckedUpdateWithoutParticipantsInputSchema) ]),
  create: z.union([ z.lazy(() => EventCreateWithoutParticipantsInputSchema),z.lazy(() => EventUncheckedCreateWithoutParticipantsInputSchema) ]),
  where: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const EventUpdateToOneWithWhereWithoutParticipantsInputSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutParticipantsInput> = z.object({
  where: z.lazy(() => EventWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EventUpdateWithoutParticipantsInputSchema),z.lazy(() => EventUncheckedUpdateWithoutParticipantsInputSchema) ]),
}).strict();

export const EventUpdateWithoutParticipantsInputSchema: z.ZodType<Prisma.EventUpdateWithoutParticipantsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutEventsNestedInputSchema).optional(),
  histories: z.lazy(() => HistoryUpdateManyWithoutEventNestedInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUpdateManyWithoutEventNestedInputSchema).optional(),
  Prize: z.lazy(() => PrizeUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateWithoutParticipantsInputSchema: z.ZodType<Prisma.EventUncheckedUpdateWithoutParticipantsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  histories: z.lazy(() => HistoryUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  Prize: z.lazy(() => PrizeUncheckedUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const TokenCreateWithoutUserInputSchema: z.ZodType<Prisma.TokenCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => TokenTypeSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export const TokenUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.TokenUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => TokenTypeSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export const TokenCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.TokenCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => TokenWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TokenCreateWithoutUserInputSchema),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TokenCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.TokenCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TokenCreateManyUserInputSchema),z.lazy(() => TokenCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const InviteCreateWithoutAuthorInputSchema: z.ZodType<Prisma.InviteCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  court: z.lazy(() => CourtCreateNestedOneWithoutInvitesInputSchema),
  booking: z.lazy(() => BookingCreateNestedOneWithoutInviteInputSchema).optional()
}).strict();

export const InviteUncheckedCreateWithoutAuthorInputSchema: z.ZodType<Prisma.InviteUncheckedCreateWithoutAuthorInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  courtId: z.string(),
  bookingId: z.string().optional().nullable()
}).strict();

export const InviteCreateOrConnectWithoutAuthorInputSchema: z.ZodType<Prisma.InviteCreateOrConnectWithoutAuthorInput> = z.object({
  where: z.lazy(() => InviteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InviteCreateWithoutAuthorInputSchema),z.lazy(() => InviteUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const InviteCreateManyAuthorInputEnvelopeSchema: z.ZodType<Prisma.InviteCreateManyAuthorInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InviteCreateManyAuthorInputSchema),z.lazy(() => InviteCreateManyAuthorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BookingCreateWithoutUserInputSchema: z.ZodType<Prisma.BookingCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  court: z.lazy(() => CourtCreateNestedOneWithoutBookingsInputSchema),
  invite: z.lazy(() => InviteCreateNestedOneWithoutBookingInputSchema).optional(),
  history: z.lazy(() => HistoryCreateNestedManyWithoutBookingInputSchema).optional(),
  Teacher: z.lazy(() => TeacherCreateNestedOneWithoutBookingsInputSchema).optional()
}).strict();

export const BookingUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.BookingUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  courtId: z.string(),
  teacherId: z.string().optional().nullable(),
  invite: z.lazy(() => InviteUncheckedCreateNestedOneWithoutBookingInputSchema).optional(),
  history: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutBookingInputSchema).optional()
}).strict();

export const BookingCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutUserInputSchema),z.lazy(() => BookingUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const BookingCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManyUserInputSchema),z.lazy(() => BookingCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CompanyCreateWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyCreateWithoutAdminsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedCompaniesInputSchema),
  courts: z.lazy(() => CourtCreateNestedManyWithoutCompanyInputSchema).optional(),
  city: z.lazy(() => CityCreateNestedOneWithoutCompaniesInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutCompanyInputSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutAdminsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  cityId: z.string().optional().nullable(),
  addressId: z.string().optional().nullable(),
  courts: z.lazy(() => CourtUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutAdminsInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutAdminsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAdminsInputSchema) ]),
}).strict();

export const CompanyCreateWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyCreateWithoutOwnerInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  courts: z.lazy(() => CourtCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserCreateNestedManyWithoutCompaniesInputSchema).optional(),
  city: z.lazy(() => CityCreateNestedOneWithoutCompaniesInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutCompanyInputSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutOwnerInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cityId: z.string().optional().nullable(),
  addressId: z.string().optional().nullable(),
  courts: z.lazy(() => CourtUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedCreateNestedManyWithoutCompaniesInputSchema).optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutOwnerInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutOwnerInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const CompanyCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.CompanyCreateManyOwnerInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CompanyCreateManyOwnerInputSchema),z.lazy(() => CompanyCreateManyOwnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const NotificationCreateWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => NotificationTypeSchema),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const NotificationUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => NotificationTypeSchema),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const NotificationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const NotificationCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManyUserInputSchema),z.lazy(() => NotificationCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ProfileCreateWithoutUserInputSchema: z.ZodType<Prisma.ProfileCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  bio: z.string().optional().nullable(),
  level: z.number().optional(),
  matchesPlayed: z.number().optional(),
  wins: z.number().optional(),
  losses: z.number().optional(),
  events: z.lazy(() => ProfileEventParticipationCreateNestedManyWithoutProfileInputSchema).optional(),
  trophies: z.lazy(() => TrophyCreateNestedManyWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  bio: z.string().optional().nullable(),
  level: z.number().optional(),
  matchesPlayed: z.number().optional(),
  wins: z.number().optional(),
  losses: z.number().optional(),
  events: z.lazy(() => ProfileEventParticipationUncheckedCreateNestedManyWithoutProfileInputSchema).optional(),
  trophies: z.lazy(() => TrophyUncheckedCreateNestedManyWithoutProfileInputSchema).optional()
}).strict();

export const ProfileCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const HistoryCreateWithoutUserInputSchema: z.ZodType<Prisma.HistoryCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  booking: z.lazy(() => BookingCreateNestedOneWithoutHistoryInputSchema),
  event: z.lazy(() => EventCreateNestedOneWithoutHistoriesInputSchema).optional()
}).strict();

export const HistoryUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.HistoryUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  bookingId: z.string(),
  eventId: z.string().optional().nullable()
}).strict();

export const HistoryCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.HistoryCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => HistoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HistoryCreateWithoutUserInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const HistoryCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.HistoryCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => HistoryCreateManyUserInputSchema),z.lazy(() => HistoryCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ReviewCreateWithoutUserInputSchema: z.ZodType<Prisma.ReviewCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutReviewsInputSchema)
}).strict();

export const ReviewUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  companyId: z.string()
}).strict();

export const ReviewCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ReviewCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ReviewCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReviewCreateManyUserInputSchema),z.lazy(() => ReviewCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TokenUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TokenUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TokenWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TokenUpdateWithoutUserInputSchema),z.lazy(() => TokenUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => TokenCreateWithoutUserInputSchema),z.lazy(() => TokenUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const TokenUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.TokenUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => TokenWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TokenUpdateWithoutUserInputSchema),z.lazy(() => TokenUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const TokenUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.TokenUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => TokenScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TokenUpdateManyMutationInputSchema),z.lazy(() => TokenUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const TokenScalarWhereInputSchema: z.ZodType<Prisma.TokenScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TokenScalarWhereInputSchema),z.lazy(() => TokenScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TokenScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TokenScalarWhereInputSchema),z.lazy(() => TokenScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumTokenTypeFilterSchema),z.lazy(() => TokenTypeSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const InviteUpsertWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.InviteUpsertWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => InviteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InviteUpdateWithoutAuthorInputSchema),z.lazy(() => InviteUncheckedUpdateWithoutAuthorInputSchema) ]),
  create: z.union([ z.lazy(() => InviteCreateWithoutAuthorInputSchema),z.lazy(() => InviteUncheckedCreateWithoutAuthorInputSchema) ]),
}).strict();

export const InviteUpdateWithWhereUniqueWithoutAuthorInputSchema: z.ZodType<Prisma.InviteUpdateWithWhereUniqueWithoutAuthorInput> = z.object({
  where: z.lazy(() => InviteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InviteUpdateWithoutAuthorInputSchema),z.lazy(() => InviteUncheckedUpdateWithoutAuthorInputSchema) ]),
}).strict();

export const InviteUpdateManyWithWhereWithoutAuthorInputSchema: z.ZodType<Prisma.InviteUpdateManyWithWhereWithoutAuthorInput> = z.object({
  where: z.lazy(() => InviteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InviteUpdateManyMutationInputSchema),z.lazy(() => InviteUncheckedUpdateManyWithoutAuthorInputSchema) ]),
}).strict();

export const InviteScalarWhereInputSchema: z.ZodType<Prisma.InviteScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => InviteScalarWhereInputSchema),z.lazy(() => InviteScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InviteScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InviteScalarWhereInputSchema),z.lazy(() => InviteScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  authorId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  courtId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  bookingId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const BookingUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutUserInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutUserInputSchema),z.lazy(() => BookingUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const BookingUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutUserInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const BookingUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const BookingScalarWhereInputSchema: z.ZodType<Prisma.BookingScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dateTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  price: z.union([ z.lazy(() => FloatFilterSchema),z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  courtId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CompanyUpsertWithWhereUniqueWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyUpsertWithWhereUniqueWithoutAdminsInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompanyUpdateWithoutAdminsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutAdminsInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutAdminsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAdminsInputSchema) ]),
}).strict();

export const CompanyUpdateWithWhereUniqueWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyUpdateWithWhereUniqueWithoutAdminsInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutAdminsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutAdminsInputSchema) ]),
}).strict();

export const CompanyUpdateManyWithWhereWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyUpdateManyWithWhereWithoutAdminsInput> = z.object({
  where: z.lazy(() => CompanyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompanyUpdateManyMutationInputSchema),z.lazy(() => CompanyUncheckedUpdateManyWithoutAdminsInputSchema) ]),
}).strict();

export const CompanyScalarWhereInputSchema: z.ZodType<Prisma.CompanyScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyScalarWhereInputSchema),z.lazy(() => CompanyScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyScalarWhereInputSchema),z.lazy(() => CompanyScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  domain: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  logoImg: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  ownerId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  cityId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  addressId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export const CompanyUpsertWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyUpsertWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompanyUpdateWithoutOwnerInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutOwnerInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutOwnerInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOwnerInputSchema) ]),
}).strict();

export const CompanyUpdateWithWhereUniqueWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyUpdateWithWhereUniqueWithoutOwnerInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutOwnerInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutOwnerInputSchema) ]),
}).strict();

export const CompanyUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyUpdateManyWithWhereWithoutOwnerInput> = z.object({
  where: z.lazy(() => CompanyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompanyUpdateManyMutationInputSchema),z.lazy(() => CompanyUncheckedUpdateManyWithoutOwnerInputSchema) ]),
}).strict();

export const NotificationUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const NotificationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutUserInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const NotificationUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const NotificationScalarWhereInputSchema: z.ZodType<Prisma.NotificationScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumNotificationTypeFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  read: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ProfileUpsertWithoutUserInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => ProfileUpdateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileCreateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export const ProfileUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProfileUpdateWithoutUserInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ProfileUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  matchesPlayed: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  wins: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  losses: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  events: z.lazy(() => ProfileEventParticipationUpdateManyWithoutProfileNestedInputSchema).optional(),
  trophies: z.lazy(() => TrophyUpdateManyWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  matchesPlayed: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  wins: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  losses: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  events: z.lazy(() => ProfileEventParticipationUncheckedUpdateManyWithoutProfileNestedInputSchema).optional(),
  trophies: z.lazy(() => TrophyUncheckedUpdateManyWithoutProfileNestedInputSchema).optional()
}).strict();

export const HistoryUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.HistoryUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => HistoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HistoryUpdateWithoutUserInputSchema),z.lazy(() => HistoryUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => HistoryCreateWithoutUserInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const HistoryUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.HistoryUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => HistoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => HistoryUpdateWithoutUserInputSchema),z.lazy(() => HistoryUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const HistoryUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.HistoryUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => HistoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => HistoryUpdateManyMutationInputSchema),z.lazy(() => HistoryUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const ReviewUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReviewUpdateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCreateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export const ReviewUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateWithoutUserInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export const ReviewUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => ReviewScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateManyMutationInputSchema),z.lazy(() => ReviewUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export const ReviewScalarWhereInputSchema: z.ZodType<Prisma.ReviewScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ReviewScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ReviewScalarWhereInputSchema),z.lazy(() => ReviewScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rating: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  comment: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const ProfileCreateWithoutTrophiesInputSchema: z.ZodType<Prisma.ProfileCreateWithoutTrophiesInput> = z.object({
  id: z.string().optional(),
  bio: z.string().optional().nullable(),
  level: z.number().optional(),
  matchesPlayed: z.number().optional(),
  wins: z.number().optional(),
  losses: z.number().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputSchema),
  events: z.lazy(() => ProfileEventParticipationCreateNestedManyWithoutProfileInputSchema).optional()
}).strict();

export const ProfileUncheckedCreateWithoutTrophiesInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutTrophiesInput> = z.object({
  id: z.string().optional(),
  bio: z.string().optional().nullable(),
  level: z.number().optional(),
  matchesPlayed: z.number().optional(),
  wins: z.number().optional(),
  losses: z.number().optional(),
  userId: z.string(),
  events: z.lazy(() => ProfileEventParticipationUncheckedCreateNestedManyWithoutProfileInputSchema).optional()
}).strict();

export const ProfileCreateOrConnectWithoutTrophiesInputSchema: z.ZodType<Prisma.ProfileCreateOrConnectWithoutTrophiesInput> = z.object({
  where: z.lazy(() => ProfileWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProfileCreateWithoutTrophiesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutTrophiesInputSchema) ]),
}).strict();

export const ProfileUpsertWithoutTrophiesInputSchema: z.ZodType<Prisma.ProfileUpsertWithoutTrophiesInput> = z.object({
  update: z.union([ z.lazy(() => ProfileUpdateWithoutTrophiesInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutTrophiesInputSchema) ]),
  create: z.union([ z.lazy(() => ProfileCreateWithoutTrophiesInputSchema),z.lazy(() => ProfileUncheckedCreateWithoutTrophiesInputSchema) ]),
  where: z.lazy(() => ProfileWhereInputSchema).optional()
}).strict();

export const ProfileUpdateToOneWithWhereWithoutTrophiesInputSchema: z.ZodType<Prisma.ProfileUpdateToOneWithWhereWithoutTrophiesInput> = z.object({
  where: z.lazy(() => ProfileWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProfileUpdateWithoutTrophiesInputSchema),z.lazy(() => ProfileUncheckedUpdateWithoutTrophiesInputSchema) ]),
}).strict();

export const ProfileUpdateWithoutTrophiesInputSchema: z.ZodType<Prisma.ProfileUpdateWithoutTrophiesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  matchesPlayed: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  wins: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  losses: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutProfileNestedInputSchema).optional(),
  events: z.lazy(() => ProfileEventParticipationUpdateManyWithoutProfileNestedInputSchema).optional()
}).strict();

export const ProfileUncheckedUpdateWithoutTrophiesInputSchema: z.ZodType<Prisma.ProfileUncheckedUpdateWithoutTrophiesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  level: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  matchesPlayed: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  wins: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  losses: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  events: z.lazy(() => ProfileEventParticipationUncheckedUpdateManyWithoutProfileNestedInputSchema).optional()
}).strict();

export const CompanyCreateWithoutCityInputSchema: z.ZodType<Prisma.CompanyCreateWithoutCityInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedCompaniesInputSchema),
  courts: z.lazy(() => CourtCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserCreateNestedManyWithoutCompaniesInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutCompanyInputSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutCityInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutCityInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  addressId: z.string().optional().nullable(),
  courts: z.lazy(() => CourtUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedCreateNestedManyWithoutCompaniesInputSchema).optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutCityInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutCityInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCityInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCityInputSchema) ]),
}).strict();

export const CompanyCreateManyCityInputEnvelopeSchema: z.ZodType<Prisma.CompanyCreateManyCityInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CompanyCreateManyCityInputSchema),z.lazy(() => CompanyCreateManyCityInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CompanyUpsertWithWhereUniqueWithoutCityInputSchema: z.ZodType<Prisma.CompanyUpsertWithWhereUniqueWithoutCityInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompanyUpdateWithoutCityInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCityInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCityInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCityInputSchema) ]),
}).strict();

export const CompanyUpdateWithWhereUniqueWithoutCityInputSchema: z.ZodType<Prisma.CompanyUpdateWithWhereUniqueWithoutCityInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutCityInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCityInputSchema) ]),
}).strict();

export const CompanyUpdateManyWithWhereWithoutCityInputSchema: z.ZodType<Prisma.CompanyUpdateManyWithWhereWithoutCityInput> = z.object({
  where: z.lazy(() => CompanyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompanyUpdateManyMutationInputSchema),z.lazy(() => CompanyUncheckedUpdateManyWithoutCityInputSchema) ]),
}).strict();

export const CompanyCreateWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.CompanyCreateWithoutCompanyTeacherInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedCompaniesInputSchema),
  courts: z.lazy(() => CourtCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserCreateNestedManyWithoutCompaniesInputSchema).optional(),
  city: z.lazy(() => CityCreateNestedOneWithoutCompaniesInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutCompanyInputSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutCompanyTeacherInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  cityId: z.string().optional().nullable(),
  addressId: z.string().optional().nullable(),
  courts: z.lazy(() => CourtUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedCreateNestedManyWithoutCompaniesInputSchema).optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutCompanyTeacherInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCompanyTeacherInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCompanyTeacherInputSchema) ]),
}).strict();

export const TeacherCreateWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.TeacherCreateWithoutCompanyTeacherInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  bio: z.string().optional().nullable(),
  avatarImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutTeacherInputSchema).optional()
}).strict();

export const TeacherUncheckedCreateWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.TeacherUncheckedCreateWithoutCompanyTeacherInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  bio: z.string().optional().nullable(),
  avatarImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutTeacherInputSchema).optional()
}).strict();

export const TeacherCreateOrConnectWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.TeacherCreateOrConnectWithoutCompanyTeacherInput> = z.object({
  where: z.lazy(() => TeacherWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeacherCreateWithoutCompanyTeacherInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutCompanyTeacherInputSchema) ]),
}).strict();

export const CompanyUpsertWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutCompanyTeacherInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutCompanyTeacherInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCompanyTeacherInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCompanyTeacherInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCompanyTeacherInputSchema) ]),
  where: z.lazy(() => CompanyWhereInputSchema).optional()
}).strict();

export const CompanyUpdateToOneWithWhereWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutCompanyTeacherInput> = z.object({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutCompanyTeacherInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCompanyTeacherInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutCompanyTeacherInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedCompaniesNestedInputSchema).optional(),
  courts: z.lazy(() => CourtUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  city: z.lazy(() => CityUpdateOneWithoutCompaniesNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutCompanyNestedInputSchema).optional(),
  events: z.lazy(() => EventUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutCompanyTeacherInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courts: z.lazy(() => CourtUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const TeacherUpsertWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.TeacherUpsertWithoutCompanyTeacherInput> = z.object({
  update: z.union([ z.lazy(() => TeacherUpdateWithoutCompanyTeacherInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutCompanyTeacherInputSchema) ]),
  create: z.union([ z.lazy(() => TeacherCreateWithoutCompanyTeacherInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutCompanyTeacherInputSchema) ]),
  where: z.lazy(() => TeacherWhereInputSchema).optional()
}).strict();

export const TeacherUpdateToOneWithWhereWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.TeacherUpdateToOneWithWhereWithoutCompanyTeacherInput> = z.object({
  where: z.lazy(() => TeacherWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeacherUpdateWithoutCompanyTeacherInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutCompanyTeacherInputSchema) ]),
}).strict();

export const TeacherUpdateWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.TeacherUpdateWithoutCompanyTeacherInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutTeacherNestedInputSchema).optional()
}).strict();

export const TeacherUncheckedUpdateWithoutCompanyTeacherInputSchema: z.ZodType<Prisma.TeacherUncheckedUpdateWithoutCompanyTeacherInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional()
}).strict();

export const BookingCreateWithoutTeacherInputSchema: z.ZodType<Prisma.BookingCreateWithoutTeacherInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBookingsInputSchema),
  court: z.lazy(() => CourtCreateNestedOneWithoutBookingsInputSchema),
  invite: z.lazy(() => InviteCreateNestedOneWithoutBookingInputSchema).optional(),
  history: z.lazy(() => HistoryCreateNestedManyWithoutBookingInputSchema).optional()
}).strict();

export const BookingUncheckedCreateWithoutTeacherInputSchema: z.ZodType<Prisma.BookingUncheckedCreateWithoutTeacherInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  courtId: z.string(),
  invite: z.lazy(() => InviteUncheckedCreateNestedOneWithoutBookingInputSchema).optional(),
  history: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutBookingInputSchema).optional()
}).strict();

export const BookingCreateOrConnectWithoutTeacherInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutTeacherInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutTeacherInputSchema),z.lazy(() => BookingUncheckedCreateWithoutTeacherInputSchema) ]),
}).strict();

export const BookingCreateManyTeacherInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyTeacherInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManyTeacherInputSchema),z.lazy(() => BookingCreateManyTeacherInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CompanyTeacherCreateWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherCreateWithoutTeacherInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutCompanyTeacherInputSchema)
}).strict();

export const CompanyTeacherUncheckedCreateWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedCreateWithoutTeacherInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  companyId: z.string()
}).strict();

export const CompanyTeacherCreateOrConnectWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherCreateOrConnectWithoutTeacherInput> = z.object({
  where: z.lazy(() => CompanyTeacherWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutTeacherInputSchema) ]),
}).strict();

export const CompanyTeacherCreateManyTeacherInputEnvelopeSchema: z.ZodType<Prisma.CompanyTeacherCreateManyTeacherInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CompanyTeacherCreateManyTeacherInputSchema),z.lazy(() => CompanyTeacherCreateManyTeacherInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const BookingUpsertWithWhereUniqueWithoutTeacherInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutTeacherInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutTeacherInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutTeacherInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutTeacherInputSchema),z.lazy(() => BookingUncheckedCreateWithoutTeacherInputSchema) ]),
}).strict();

export const BookingUpdateWithWhereUniqueWithoutTeacherInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutTeacherInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutTeacherInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutTeacherInputSchema) ]),
}).strict();

export const BookingUpdateManyWithWhereWithoutTeacherInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutTeacherInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutTeacherInputSchema) ]),
}).strict();

export const CompanyTeacherUpsertWithWhereUniqueWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherUpsertWithWhereUniqueWithoutTeacherInput> = z.object({
  where: z.lazy(() => CompanyTeacherWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompanyTeacherUpdateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUncheckedUpdateWithoutTeacherInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutTeacherInputSchema) ]),
}).strict();

export const CompanyTeacherUpdateWithWhereUniqueWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherUpdateWithWhereUniqueWithoutTeacherInput> = z.object({
  where: z.lazy(() => CompanyTeacherWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompanyTeacherUpdateWithoutTeacherInputSchema),z.lazy(() => CompanyTeacherUncheckedUpdateWithoutTeacherInputSchema) ]),
}).strict();

export const CompanyTeacherUpdateManyWithWhereWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherUpdateManyWithWhereWithoutTeacherInput> = z.object({
  where: z.lazy(() => CompanyTeacherScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompanyTeacherUpdateManyMutationInputSchema),z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutTeacherInputSchema) ]),
}).strict();

export const CompanyTeacherScalarWhereInputSchema: z.ZodType<Prisma.CompanyTeacherScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CompanyTeacherScalarWhereInputSchema),z.lazy(() => CompanyTeacherScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CompanyTeacherScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CompanyTeacherScalarWhereInputSchema),z.lazy(() => CompanyTeacherScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teacherId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserCreateWithoutOwnedCompaniesInputSchema: z.ZodType<Prisma.UserCreateWithoutOwnedCompaniesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyCreateNestedManyWithoutAdminsInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutOwnedCompaniesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutOwnedCompaniesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutAdminsInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutOwnedCompaniesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutOwnedCompaniesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedCompaniesInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedCompaniesInputSchema) ]),
}).strict();

export const CourtCreateWithoutCompanyInputSchema: z.ZodType<Prisma.CourtCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutCourtInputSchema).optional(),
  availability: z.lazy(() => AvailabilityCreateNestedManyWithoutCourtInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutCourtInputSchema).optional()
}).strict();

export const CourtUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.CourtUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutCourtInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutCourtInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutCourtInputSchema).optional()
}).strict();

export const CourtCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.CourtCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => CourtWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourtCreateWithoutCompanyInputSchema),z.lazy(() => CourtUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const CourtCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.CourtCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CourtCreateManyCompanyInputSchema),z.lazy(() => CourtCreateManyCompanyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserCreateWithoutCompaniesInputSchema: z.ZodType<Prisma.UserCreateWithoutCompaniesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutCompaniesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutCompaniesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutCompaniesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCompaniesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutCompaniesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCompaniesInputSchema) ]),
}).strict();

export const CityCreateWithoutCompaniesInputSchema: z.ZodType<Prisma.CityCreateWithoutCompaniesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  state: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CityUncheckedCreateWithoutCompaniesInputSchema: z.ZodType<Prisma.CityUncheckedCreateWithoutCompaniesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  state: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const CityCreateOrConnectWithoutCompaniesInputSchema: z.ZodType<Prisma.CityCreateOrConnectWithoutCompaniesInput> = z.object({
  where: z.lazy(() => CityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CityCreateWithoutCompaniesInputSchema),z.lazy(() => CityUncheckedCreateWithoutCompaniesInputSchema) ]),
}).strict();

export const AddressCreateWithoutCompanyInputSchema: z.ZodType<Prisma.AddressCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  street: z.string(),
  number: z.string().optional().nullable(),
  complement: z.string().optional().nullable(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postalCode: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AddressUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.AddressUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  street: z.string(),
  number: z.string().optional().nullable(),
  complement: z.string().optional().nullable(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  postalCode: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export const AddressCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.AddressCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => AddressWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AddressCreateWithoutCompanyInputSchema),z.lazy(() => AddressUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const EventCreateWithoutCompanyInputSchema: z.ZodType<Prisma.EventCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  participants: z.lazy(() => ProfileEventParticipationCreateNestedManyWithoutEventInputSchema).optional(),
  histories: z.lazy(() => HistoryCreateNestedManyWithoutEventInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleCreateNestedManyWithoutEventInputSchema).optional(),
  Prize: z.lazy(() => PrizeCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  participants: z.lazy(() => ProfileEventParticipationUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  histories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  Prize: z.lazy(() => PrizeUncheckedCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventCreateWithoutCompanyInputSchema),z.lazy(() => EventUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const EventCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.EventCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => EventCreateManyCompanyInputSchema),z.lazy(() => EventCreateManyCompanyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const ReviewCreateWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutReviewInputSchema)
}).strict();

export const ReviewUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const ReviewCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ReviewCreateWithoutCompanyInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const ReviewCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.ReviewCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => ReviewCreateManyCompanyInputSchema),z.lazy(() => ReviewCreateManyCompanyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CompanyTeacherCreateWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  teacher: z.lazy(() => TeacherCreateNestedOneWithoutCompanyTeacherInputSchema)
}).strict();

export const CompanyTeacherUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  teacherId: z.string()
}).strict();

export const CompanyTeacherCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => CompanyTeacherWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const CompanyTeacherCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.CompanyTeacherCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CompanyTeacherCreateManyCompanyInputSchema),z.lazy(() => CompanyTeacherCreateManyCompanyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const OpeningHoursCreateWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  opensAt: z.string(),
  closesAt: z.string()
}).strict();

export const OpeningHoursUncheckedCreateWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursUncheckedCreateWithoutCompanyInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  opensAt: z.string(),
  closesAt: z.string()
}).strict();

export const OpeningHoursCreateOrConnectWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursCreateOrConnectWithoutCompanyInput> = z.object({
  where: z.lazy(() => OpeningHoursWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => OpeningHoursCreateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const OpeningHoursCreateManyCompanyInputEnvelopeSchema: z.ZodType<Prisma.OpeningHoursCreateManyCompanyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => OpeningHoursCreateManyCompanyInputSchema),z.lazy(() => OpeningHoursCreateManyCompanyInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const UserUpsertWithoutOwnedCompaniesInputSchema: z.ZodType<Prisma.UserUpsertWithoutOwnedCompaniesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutOwnedCompaniesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOwnedCompaniesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutOwnedCompaniesInputSchema),z.lazy(() => UserUncheckedCreateWithoutOwnedCompaniesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutOwnedCompaniesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutOwnedCompaniesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutOwnedCompaniesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutOwnedCompaniesInputSchema) ]),
}).strict();

export const UserUpdateWithoutOwnedCompaniesInputSchema: z.ZodType<Prisma.UserUpdateWithoutOwnedCompaniesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUpdateManyWithoutAdminsNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutOwnedCompaniesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutOwnedCompaniesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedUpdateManyWithoutAdminsNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CourtUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.CourtUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => CourtWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CourtUpdateWithoutCompanyInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => CourtCreateWithoutCompanyInputSchema),z.lazy(() => CourtUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const CourtUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.CourtUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => CourtWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CourtUpdateWithoutCompanyInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const CourtUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.CourtUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => CourtScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CourtUpdateManyMutationInputSchema),z.lazy(() => CourtUncheckedUpdateManyWithoutCompanyInputSchema) ]),
}).strict();

export const CourtScalarWhereInputSchema: z.ZodType<Prisma.CourtScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => CourtScalarWhereInputSchema),z.lazy(() => CourtScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CourtScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CourtScalarWhereInputSchema),z.lazy(() => CourtScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumSportTypeFilterSchema),z.lazy(() => SportTypeSchema) ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  comments: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  rules: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  images: z.lazy(() => StringNullableListFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const UserUpsertWithWhereUniqueWithoutCompaniesInputSchema: z.ZodType<Prisma.UserUpsertWithWhereUniqueWithoutCompaniesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserUpdateWithoutCompaniesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCompaniesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutCompaniesInputSchema),z.lazy(() => UserUncheckedCreateWithoutCompaniesInputSchema) ]),
}).strict();

export const UserUpdateWithWhereUniqueWithoutCompaniesInputSchema: z.ZodType<Prisma.UserUpdateWithWhereUniqueWithoutCompaniesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserUpdateWithoutCompaniesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutCompaniesInputSchema) ]),
}).strict();

export const UserUpdateManyWithWhereWithoutCompaniesInputSchema: z.ZodType<Prisma.UserUpdateManyWithWhereWithoutCompaniesInput> = z.object({
  where: z.lazy(() => UserScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserUpdateManyMutationInputSchema),z.lazy(() => UserUncheckedUpdateManyWithoutCompaniesInputSchema) ]),
}).strict();

export const UserScalarWhereInputSchema: z.ZodType<Prisma.UserScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserScalarWhereInputSchema),z.lazy(() => UserScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  passwordHash: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  avatarUrl: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export const CityUpsertWithoutCompaniesInputSchema: z.ZodType<Prisma.CityUpsertWithoutCompaniesInput> = z.object({
  update: z.union([ z.lazy(() => CityUpdateWithoutCompaniesInputSchema),z.lazy(() => CityUncheckedUpdateWithoutCompaniesInputSchema) ]),
  create: z.union([ z.lazy(() => CityCreateWithoutCompaniesInputSchema),z.lazy(() => CityUncheckedCreateWithoutCompaniesInputSchema) ]),
  where: z.lazy(() => CityWhereInputSchema).optional()
}).strict();

export const CityUpdateToOneWithWhereWithoutCompaniesInputSchema: z.ZodType<Prisma.CityUpdateToOneWithWhereWithoutCompaniesInput> = z.object({
  where: z.lazy(() => CityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CityUpdateWithoutCompaniesInputSchema),z.lazy(() => CityUncheckedUpdateWithoutCompaniesInputSchema) ]),
}).strict();

export const CityUpdateWithoutCompaniesInputSchema: z.ZodType<Prisma.CityUpdateWithoutCompaniesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CityUncheckedUpdateWithoutCompaniesInputSchema: z.ZodType<Prisma.CityUncheckedUpdateWithoutCompaniesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AddressUpsertWithoutCompanyInputSchema: z.ZodType<Prisma.AddressUpsertWithoutCompanyInput> = z.object({
  update: z.union([ z.lazy(() => AddressUpdateWithoutCompanyInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => AddressCreateWithoutCompanyInputSchema),z.lazy(() => AddressUncheckedCreateWithoutCompanyInputSchema) ]),
  where: z.lazy(() => AddressWhereInputSchema).optional()
}).strict();

export const AddressUpdateToOneWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.AddressUpdateToOneWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => AddressWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => AddressUpdateWithoutCompanyInputSchema),z.lazy(() => AddressUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const AddressUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.AddressUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  complement: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  district: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AddressUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.AddressUncheckedUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  street: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  number: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  complement: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  district: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  city: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  state: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  country: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  postalCode: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.EventUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => EventUpdateWithoutCompanyInputSchema),z.lazy(() => EventUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => EventCreateWithoutCompanyInputSchema),z.lazy(() => EventUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const EventUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.EventUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => EventUpdateWithoutCompanyInputSchema),z.lazy(() => EventUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const EventUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.EventUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => EventScalarWhereInputSchema),
  data: z.union([ z.lazy(() => EventUpdateManyMutationInputSchema),z.lazy(() => EventUncheckedUpdateManyWithoutCompanyInputSchema) ]),
}).strict();

export const EventScalarWhereInputSchema: z.ZodType<Prisma.EventScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EventScalarWhereInputSchema),z.lazy(() => EventScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EventScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EventScalarWhereInputSchema),z.lazy(() => EventScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumEventTypeFilterSchema),z.lazy(() => EventTypeSchema) ]).optional(),
  date: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dateTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  capacity: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  registeredCount: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export const ReviewUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ReviewUpdateWithoutCompanyInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => ReviewCreateWithoutCompanyInputSchema),z.lazy(() => ReviewUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const ReviewUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => ReviewWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateWithoutCompanyInputSchema),z.lazy(() => ReviewUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const ReviewUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => ReviewScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ReviewUpdateManyMutationInputSchema),z.lazy(() => ReviewUncheckedUpdateManyWithoutCompanyInputSchema) ]),
}).strict();

export const CompanyTeacherUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => CompanyTeacherWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CompanyTeacherUpdateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyTeacherCreateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const CompanyTeacherUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => CompanyTeacherWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CompanyTeacherUpdateWithoutCompanyInputSchema),z.lazy(() => CompanyTeacherUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const CompanyTeacherUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => CompanyTeacherScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CompanyTeacherUpdateManyMutationInputSchema),z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutCompanyInputSchema) ]),
}).strict();

export const OpeningHoursUpsertWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursUpsertWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => OpeningHoursWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => OpeningHoursUpdateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUncheckedUpdateWithoutCompanyInputSchema) ]),
  create: z.union([ z.lazy(() => OpeningHoursCreateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUncheckedCreateWithoutCompanyInputSchema) ]),
}).strict();

export const OpeningHoursUpdateWithWhereUniqueWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursUpdateWithWhereUniqueWithoutCompanyInput> = z.object({
  where: z.lazy(() => OpeningHoursWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => OpeningHoursUpdateWithoutCompanyInputSchema),z.lazy(() => OpeningHoursUncheckedUpdateWithoutCompanyInputSchema) ]),
}).strict();

export const OpeningHoursUpdateManyWithWhereWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursUpdateManyWithWhereWithoutCompanyInput> = z.object({
  where: z.lazy(() => OpeningHoursScalarWhereInputSchema),
  data: z.union([ z.lazy(() => OpeningHoursUpdateManyMutationInputSchema),z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutCompanyInputSchema) ]),
}).strict();

export const OpeningHoursScalarWhereInputSchema: z.ZodType<Prisma.OpeningHoursScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => OpeningHoursScalarWhereInputSchema),z.lazy(() => OpeningHoursScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => OpeningHoursScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => OpeningHoursScalarWhereInputSchema),z.lazy(() => OpeningHoursScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  opensAt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  closesAt: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  companyId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const CompanyCreateWithoutAddressInputSchema: z.ZodType<Prisma.CompanyCreateWithoutAddressInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedCompaniesInputSchema),
  courts: z.lazy(() => CourtCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserCreateNestedManyWithoutCompaniesInputSchema).optional(),
  city: z.lazy(() => CityCreateNestedOneWithoutCompaniesInputSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutAddressInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutAddressInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  cityId: z.string().optional().nullable(),
  courts: z.lazy(() => CourtUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedCreateNestedManyWithoutCompaniesInputSchema).optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutAddressInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutAddressInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutAddressInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAddressInputSchema) ]),
}).strict();

export const CompanyUpsertWithoutAddressInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutAddressInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutAddressInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutAddressInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutAddressInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutAddressInputSchema) ]),
  where: z.lazy(() => CompanyWhereInputSchema).optional()
}).strict();

export const CompanyUpdateToOneWithWhereWithoutAddressInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutAddressInput> = z.object({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutAddressInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutAddressInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutAddressInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutAddressInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedCompaniesNestedInputSchema).optional(),
  courts: z.lazy(() => CourtUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  city: z.lazy(() => CityUpdateOneWithoutCompaniesNestedInputSchema).optional(),
  events: z.lazy(() => EventUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutAddressInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutAddressInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courts: z.lazy(() => CourtUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyCreateWithoutOpeningHoursInputSchema: z.ZodType<Prisma.CompanyCreateWithoutOpeningHoursInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedCompaniesInputSchema),
  courts: z.lazy(() => CourtCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserCreateNestedManyWithoutCompaniesInputSchema).optional(),
  city: z.lazy(() => CityCreateNestedOneWithoutCompaniesInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutCompanyInputSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutOpeningHoursInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutOpeningHoursInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  cityId: z.string().optional().nullable(),
  addressId: z.string().optional().nullable(),
  courts: z.lazy(() => CourtUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedCreateNestedManyWithoutCompaniesInputSchema).optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutOpeningHoursInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutOpeningHoursInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutOpeningHoursInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOpeningHoursInputSchema) ]),
}).strict();

export const CompanyUpsertWithoutOpeningHoursInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutOpeningHoursInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutOpeningHoursInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutOpeningHoursInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutOpeningHoursInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutOpeningHoursInputSchema) ]),
  where: z.lazy(() => CompanyWhereInputSchema).optional()
}).strict();

export const CompanyUpdateToOneWithWhereWithoutOpeningHoursInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutOpeningHoursInput> = z.object({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutOpeningHoursInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutOpeningHoursInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutOpeningHoursInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutOpeningHoursInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedCompaniesNestedInputSchema).optional(),
  courts: z.lazy(() => CourtUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  city: z.lazy(() => CityUpdateOneWithoutCompaniesNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutCompanyNestedInputSchema).optional(),
  events: z.lazy(() => EventUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutOpeningHoursInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutOpeningHoursInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courts: z.lazy(() => CourtUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutReviewInputSchema: z.ZodType<Prisma.UserCreateWithoutReviewInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutReviewInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutReviewInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutReviewInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutReviewInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutReviewInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewInputSchema) ]),
}).strict();

export const CompanyCreateWithoutReviewsInputSchema: z.ZodType<Prisma.CompanyCreateWithoutReviewsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedCompaniesInputSchema),
  courts: z.lazy(() => CourtCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserCreateNestedManyWithoutCompaniesInputSchema).optional(),
  city: z.lazy(() => CityCreateNestedOneWithoutCompaniesInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutCompanyInputSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutReviewsInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutReviewsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  cityId: z.string().optional().nullable(),
  addressId: z.string().optional().nullable(),
  courts: z.lazy(() => CourtUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedCreateNestedManyWithoutCompaniesInputSchema).optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutReviewsInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutReviewsInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutReviewsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutReviewsInputSchema) ]),
}).strict();

export const UserUpsertWithoutReviewInputSchema: z.ZodType<Prisma.UserUpsertWithoutReviewInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutReviewInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReviewInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutReviewInputSchema),z.lazy(() => UserUncheckedCreateWithoutReviewInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutReviewInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutReviewInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutReviewInputSchema),z.lazy(() => UserUncheckedUpdateWithoutReviewInputSchema) ]),
}).strict();

export const UserUpdateWithoutReviewInputSchema: z.ZodType<Prisma.UserUpdateWithoutReviewInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutReviewInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutReviewInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CompanyUpsertWithoutReviewsInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutReviewsInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutReviewsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutReviewsInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutReviewsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutReviewsInputSchema) ]),
  where: z.lazy(() => CompanyWhereInputSchema).optional()
}).strict();

export const CompanyUpdateToOneWithWhereWithoutReviewsInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutReviewsInput> = z.object({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutReviewsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutReviewsInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutReviewsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedCompaniesNestedInputSchema).optional(),
  courts: z.lazy(() => CourtUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  city: z.lazy(() => CityUpdateOneWithoutCompaniesNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutCompanyNestedInputSchema).optional(),
  events: z.lazy(() => EventUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutReviewsInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutReviewsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courts: z.lazy(() => CourtUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyCreateWithoutCourtsInputSchema: z.ZodType<Prisma.CompanyCreateWithoutCourtsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  owner: z.lazy(() => UserCreateNestedOneWithoutOwnedCompaniesInputSchema),
  admins: z.lazy(() => UserCreateNestedManyWithoutCompaniesInputSchema).optional(),
  city: z.lazy(() => CityCreateNestedOneWithoutCompaniesInputSchema).optional(),
  address: z.lazy(() => AddressCreateNestedOneWithoutCompanyInputSchema).optional(),
  events: z.lazy(() => EventCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyUncheckedCreateWithoutCourtsInputSchema: z.ZodType<Prisma.CompanyUncheckedCreateWithoutCourtsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  cityId: z.string().optional().nullable(),
  addressId: z.string().optional().nullable(),
  admins: z.lazy(() => UserUncheckedCreateNestedManyWithoutCompaniesInputSchema).optional(),
  events: z.lazy(() => EventUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutCompanyInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedCreateNestedManyWithoutCompanyInputSchema).optional()
}).strict();

export const CompanyCreateOrConnectWithoutCourtsInputSchema: z.ZodType<Prisma.CompanyCreateOrConnectWithoutCourtsInput> = z.object({
  where: z.lazy(() => CompanyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCourtsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCourtsInputSchema) ]),
}).strict();

export const BookingCreateWithoutCourtInputSchema: z.ZodType<Prisma.BookingCreateWithoutCourtInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBookingsInputSchema),
  invite: z.lazy(() => InviteCreateNestedOneWithoutBookingInputSchema).optional(),
  history: z.lazy(() => HistoryCreateNestedManyWithoutBookingInputSchema).optional(),
  Teacher: z.lazy(() => TeacherCreateNestedOneWithoutBookingsInputSchema).optional()
}).strict();

export const BookingUncheckedCreateWithoutCourtInputSchema: z.ZodType<Prisma.BookingUncheckedCreateWithoutCourtInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  teacherId: z.string().optional().nullable(),
  invite: z.lazy(() => InviteUncheckedCreateNestedOneWithoutBookingInputSchema).optional(),
  history: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutBookingInputSchema).optional()
}).strict();

export const BookingCreateOrConnectWithoutCourtInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutCourtInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutCourtInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCourtInputSchema) ]),
}).strict();

export const BookingCreateManyCourtInputEnvelopeSchema: z.ZodType<Prisma.BookingCreateManyCourtInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingCreateManyCourtInputSchema),z.lazy(() => BookingCreateManyCourtInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const AvailabilityCreateWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityCreateWithoutCourtInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  isPeakHour: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const AvailabilityUncheckedCreateWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityUncheckedCreateWithoutCourtInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  isPeakHour: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const AvailabilityCreateOrConnectWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityCreateOrConnectWithoutCourtInput> = z.object({
  where: z.lazy(() => AvailabilityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutCourtInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutCourtInputSchema) ]),
}).strict();

export const AvailabilityCreateManyCourtInputEnvelopeSchema: z.ZodType<Prisma.AvailabilityCreateManyCourtInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AvailabilityCreateManyCourtInputSchema),z.lazy(() => AvailabilityCreateManyCourtInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const InviteCreateWithoutCourtInputSchema: z.ZodType<Prisma.InviteCreateWithoutCourtInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutInvitesInputSchema).optional(),
  booking: z.lazy(() => BookingCreateNestedOneWithoutInviteInputSchema).optional()
}).strict();

export const InviteUncheckedCreateWithoutCourtInputSchema: z.ZodType<Prisma.InviteUncheckedCreateWithoutCourtInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  authorId: z.string().optional().nullable(),
  bookingId: z.string().optional().nullable()
}).strict();

export const InviteCreateOrConnectWithoutCourtInputSchema: z.ZodType<Prisma.InviteCreateOrConnectWithoutCourtInput> = z.object({
  where: z.lazy(() => InviteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InviteCreateWithoutCourtInputSchema),z.lazy(() => InviteUncheckedCreateWithoutCourtInputSchema) ]),
}).strict();

export const InviteCreateManyCourtInputEnvelopeSchema: z.ZodType<Prisma.InviteCreateManyCourtInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => InviteCreateManyCourtInputSchema),z.lazy(() => InviteCreateManyCourtInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const CompanyUpsertWithoutCourtsInputSchema: z.ZodType<Prisma.CompanyUpsertWithoutCourtsInput> = z.object({
  update: z.union([ z.lazy(() => CompanyUpdateWithoutCourtsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCourtsInputSchema) ]),
  create: z.union([ z.lazy(() => CompanyCreateWithoutCourtsInputSchema),z.lazy(() => CompanyUncheckedCreateWithoutCourtsInputSchema) ]),
  where: z.lazy(() => CompanyWhereInputSchema).optional()
}).strict();

export const CompanyUpdateToOneWithWhereWithoutCourtsInputSchema: z.ZodType<Prisma.CompanyUpdateToOneWithWhereWithoutCourtsInput> = z.object({
  where: z.lazy(() => CompanyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CompanyUpdateWithoutCourtsInputSchema),z.lazy(() => CompanyUncheckedUpdateWithoutCourtsInputSchema) ]),
}).strict();

export const CompanyUpdateWithoutCourtsInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutCourtsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedCompaniesNestedInputSchema).optional(),
  admins: z.lazy(() => UserUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  city: z.lazy(() => CityUpdateOneWithoutCompaniesNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutCompanyNestedInputSchema).optional(),
  events: z.lazy(() => EventUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutCourtsInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutCourtsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  admins: z.lazy(() => UserUncheckedUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const BookingUpsertWithWhereUniqueWithoutCourtInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutCourtInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutCourtInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutCourtInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutCourtInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCourtInputSchema) ]),
}).strict();

export const BookingUpdateWithWhereUniqueWithoutCourtInputSchema: z.ZodType<Prisma.BookingUpdateWithWhereUniqueWithoutCourtInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateWithoutCourtInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutCourtInputSchema) ]),
}).strict();

export const BookingUpdateManyWithWhereWithoutCourtInputSchema: z.ZodType<Prisma.BookingUpdateManyWithWhereWithoutCourtInput> = z.object({
  where: z.lazy(() => BookingScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BookingUpdateManyMutationInputSchema),z.lazy(() => BookingUncheckedUpdateManyWithoutCourtInputSchema) ]),
}).strict();

export const AvailabilityUpsertWithWhereUniqueWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityUpsertWithWhereUniqueWithoutCourtInput> = z.object({
  where: z.lazy(() => AvailabilityWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AvailabilityUpdateWithoutCourtInputSchema),z.lazy(() => AvailabilityUncheckedUpdateWithoutCourtInputSchema) ]),
  create: z.union([ z.lazy(() => AvailabilityCreateWithoutCourtInputSchema),z.lazy(() => AvailabilityUncheckedCreateWithoutCourtInputSchema) ]),
}).strict();

export const AvailabilityUpdateWithWhereUniqueWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityUpdateWithWhereUniqueWithoutCourtInput> = z.object({
  where: z.lazy(() => AvailabilityWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AvailabilityUpdateWithoutCourtInputSchema),z.lazy(() => AvailabilityUncheckedUpdateWithoutCourtInputSchema) ]),
}).strict();

export const AvailabilityUpdateManyWithWhereWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityUpdateManyWithWhereWithoutCourtInput> = z.object({
  where: z.lazy(() => AvailabilityScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AvailabilityUpdateManyMutationInputSchema),z.lazy(() => AvailabilityUncheckedUpdateManyWithoutCourtInputSchema) ]),
}).strict();

export const AvailabilityScalarWhereInputSchema: z.ZodType<Prisma.AvailabilityScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => AvailabilityScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => AvailabilityScalarWhereInputSchema),z.lazy(() => AvailabilityScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  dayOfWeek: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  startTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  endTime: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isPeakHour: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  courtId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export const InviteUpsertWithWhereUniqueWithoutCourtInputSchema: z.ZodType<Prisma.InviteUpsertWithWhereUniqueWithoutCourtInput> = z.object({
  where: z.lazy(() => InviteWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InviteUpdateWithoutCourtInputSchema),z.lazy(() => InviteUncheckedUpdateWithoutCourtInputSchema) ]),
  create: z.union([ z.lazy(() => InviteCreateWithoutCourtInputSchema),z.lazy(() => InviteUncheckedCreateWithoutCourtInputSchema) ]),
}).strict();

export const InviteUpdateWithWhereUniqueWithoutCourtInputSchema: z.ZodType<Prisma.InviteUpdateWithWhereUniqueWithoutCourtInput> = z.object({
  where: z.lazy(() => InviteWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InviteUpdateWithoutCourtInputSchema),z.lazy(() => InviteUncheckedUpdateWithoutCourtInputSchema) ]),
}).strict();

export const InviteUpdateManyWithWhereWithoutCourtInputSchema: z.ZodType<Prisma.InviteUpdateManyWithWhereWithoutCourtInput> = z.object({
  where: z.lazy(() => InviteScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InviteUpdateManyMutationInputSchema),z.lazy(() => InviteUncheckedUpdateManyWithoutCourtInputSchema) ]),
}).strict();

export const UserCreateWithoutBookingsInputSchema: z.ZodType<Prisma.UserCreateWithoutBookingsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutAuthorInputSchema).optional(),
  companies: z.lazy(() => CompanyCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutBookingsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutBookingsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutBookingsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutBookingsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutBookingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBookingsInputSchema) ]),
}).strict();

export const CourtCreateWithoutBookingsInputSchema: z.ZodType<Prisma.CourtCreateWithoutBookingsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutCourtsInputSchema),
  availability: z.lazy(() => AvailabilityCreateNestedManyWithoutCourtInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutCourtInputSchema).optional()
}).strict();

export const CourtUncheckedCreateWithoutBookingsInputSchema: z.ZodType<Prisma.CourtUncheckedCreateWithoutBookingsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  companyId: z.string(),
  availability: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutCourtInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutCourtInputSchema).optional()
}).strict();

export const CourtCreateOrConnectWithoutBookingsInputSchema: z.ZodType<Prisma.CourtCreateOrConnectWithoutBookingsInput> = z.object({
  where: z.lazy(() => CourtWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourtCreateWithoutBookingsInputSchema),z.lazy(() => CourtUncheckedCreateWithoutBookingsInputSchema) ]),
}).strict();

export const InviteCreateWithoutBookingInputSchema: z.ZodType<Prisma.InviteCreateWithoutBookingInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  author: z.lazy(() => UserCreateNestedOneWithoutInvitesInputSchema).optional(),
  court: z.lazy(() => CourtCreateNestedOneWithoutInvitesInputSchema)
}).strict();

export const InviteUncheckedCreateWithoutBookingInputSchema: z.ZodType<Prisma.InviteUncheckedCreateWithoutBookingInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  authorId: z.string().optional().nullable(),
  courtId: z.string()
}).strict();

export const InviteCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.InviteCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => InviteWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InviteCreateWithoutBookingInputSchema),z.lazy(() => InviteUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export const HistoryCreateWithoutBookingInputSchema: z.ZodType<Prisma.HistoryCreateWithoutBookingInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutEventHistoriesInputSchema),
  event: z.lazy(() => EventCreateNestedOneWithoutHistoriesInputSchema).optional()
}).strict();

export const HistoryUncheckedCreateWithoutBookingInputSchema: z.ZodType<Prisma.HistoryUncheckedCreateWithoutBookingInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  eventId: z.string().optional().nullable()
}).strict();

export const HistoryCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.HistoryCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => HistoryWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => HistoryCreateWithoutBookingInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export const HistoryCreateManyBookingInputEnvelopeSchema: z.ZodType<Prisma.HistoryCreateManyBookingInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => HistoryCreateManyBookingInputSchema),z.lazy(() => HistoryCreateManyBookingInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export const TeacherCreateWithoutBookingsInputSchema: z.ZodType<Prisma.TeacherCreateWithoutBookingsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  bio: z.string().optional().nullable(),
  avatarImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherCreateNestedManyWithoutTeacherInputSchema).optional()
}).strict();

export const TeacherUncheckedCreateWithoutBookingsInputSchema: z.ZodType<Prisma.TeacherUncheckedCreateWithoutBookingsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  bio: z.string().optional().nullable(),
  avatarImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedCreateNestedManyWithoutTeacherInputSchema).optional()
}).strict();

export const TeacherCreateOrConnectWithoutBookingsInputSchema: z.ZodType<Prisma.TeacherCreateOrConnectWithoutBookingsInput> = z.object({
  where: z.lazy(() => TeacherWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TeacherCreateWithoutBookingsInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutBookingsInputSchema) ]),
}).strict();

export const UserUpsertWithoutBookingsInputSchema: z.ZodType<Prisma.UserUpsertWithoutBookingsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutBookingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBookingsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutBookingsInputSchema),z.lazy(() => UserUncheckedCreateWithoutBookingsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutBookingsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutBookingsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutBookingsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutBookingsInputSchema) ]),
}).strict();

export const UserUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.UserUpdateWithoutBookingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutAuthorNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutBookingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CourtUpsertWithoutBookingsInputSchema: z.ZodType<Prisma.CourtUpsertWithoutBookingsInput> = z.object({
  update: z.union([ z.lazy(() => CourtUpdateWithoutBookingsInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutBookingsInputSchema) ]),
  create: z.union([ z.lazy(() => CourtCreateWithoutBookingsInputSchema),z.lazy(() => CourtUncheckedCreateWithoutBookingsInputSchema) ]),
  where: z.lazy(() => CourtWhereInputSchema).optional()
}).strict();

export const CourtUpdateToOneWithWhereWithoutBookingsInputSchema: z.ZodType<Prisma.CourtUpdateToOneWithWhereWithoutBookingsInput> = z.object({
  where: z.lazy(() => CourtWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CourtUpdateWithoutBookingsInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutBookingsInputSchema) ]),
}).strict();

export const CourtUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.CourtUpdateWithoutBookingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutCourtsNestedInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUpdateManyWithoutCourtNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutCourtNestedInputSchema).optional()
}).strict();

export const CourtUncheckedUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.CourtUncheckedUpdateWithoutBookingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  availability: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutCourtNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutCourtNestedInputSchema).optional()
}).strict();

export const InviteUpsertWithoutBookingInputSchema: z.ZodType<Prisma.InviteUpsertWithoutBookingInput> = z.object({
  update: z.union([ z.lazy(() => InviteUpdateWithoutBookingInputSchema),z.lazy(() => InviteUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => InviteCreateWithoutBookingInputSchema),z.lazy(() => InviteUncheckedCreateWithoutBookingInputSchema) ]),
  where: z.lazy(() => InviteWhereInputSchema).optional()
}).strict();

export const InviteUpdateToOneWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.InviteUpdateToOneWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => InviteWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InviteUpdateWithoutBookingInputSchema),z.lazy(() => InviteUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export const InviteUpdateWithoutBookingInputSchema: z.ZodType<Prisma.InviteUpdateWithoutBookingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneWithoutInvitesNestedInputSchema).optional(),
  court: z.lazy(() => CourtUpdateOneRequiredWithoutInvitesNestedInputSchema).optional()
}).strict();

export const InviteUncheckedUpdateWithoutBookingInputSchema: z.ZodType<Prisma.InviteUncheckedUpdateWithoutBookingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HistoryUpsertWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.HistoryUpsertWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => HistoryWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => HistoryUpdateWithoutBookingInputSchema),z.lazy(() => HistoryUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => HistoryCreateWithoutBookingInputSchema),z.lazy(() => HistoryUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export const HistoryUpdateWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.HistoryUpdateWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => HistoryWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => HistoryUpdateWithoutBookingInputSchema),z.lazy(() => HistoryUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export const HistoryUpdateManyWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.HistoryUpdateManyWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => HistoryScalarWhereInputSchema),
  data: z.union([ z.lazy(() => HistoryUpdateManyMutationInputSchema),z.lazy(() => HistoryUncheckedUpdateManyWithoutBookingInputSchema) ]),
}).strict();

export const TeacherUpsertWithoutBookingsInputSchema: z.ZodType<Prisma.TeacherUpsertWithoutBookingsInput> = z.object({
  update: z.union([ z.lazy(() => TeacherUpdateWithoutBookingsInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutBookingsInputSchema) ]),
  create: z.union([ z.lazy(() => TeacherCreateWithoutBookingsInputSchema),z.lazy(() => TeacherUncheckedCreateWithoutBookingsInputSchema) ]),
  where: z.lazy(() => TeacherWhereInputSchema).optional()
}).strict();

export const TeacherUpdateToOneWithWhereWithoutBookingsInputSchema: z.ZodType<Prisma.TeacherUpdateToOneWithWhereWithoutBookingsInput> = z.object({
  where: z.lazy(() => TeacherWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TeacherUpdateWithoutBookingsInputSchema),z.lazy(() => TeacherUncheckedUpdateWithoutBookingsInputSchema) ]),
}).strict();

export const TeacherUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.TeacherUpdateWithoutBookingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutTeacherNestedInputSchema).optional()
}).strict();

export const TeacherUncheckedUpdateWithoutBookingsInputSchema: z.ZodType<Prisma.TeacherUncheckedUpdateWithoutBookingsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatarImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutTeacherNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutInvitesInputSchema: z.ZodType<Prisma.UserCreateWithoutInvitesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputSchema).optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutInvitesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutInvitesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutInvitesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutInvitesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutInvitesInputSchema),z.lazy(() => UserUncheckedCreateWithoutInvitesInputSchema) ]),
}).strict();

export const CourtCreateWithoutInvitesInputSchema: z.ZodType<Prisma.CourtCreateWithoutInvitesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutCourtsInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutCourtInputSchema).optional(),
  availability: z.lazy(() => AvailabilityCreateNestedManyWithoutCourtInputSchema).optional()
}).strict();

export const CourtUncheckedCreateWithoutInvitesInputSchema: z.ZodType<Prisma.CourtUncheckedCreateWithoutInvitesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  companyId: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutCourtInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUncheckedCreateNestedManyWithoutCourtInputSchema).optional()
}).strict();

export const CourtCreateOrConnectWithoutInvitesInputSchema: z.ZodType<Prisma.CourtCreateOrConnectWithoutInvitesInput> = z.object({
  where: z.lazy(() => CourtWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourtCreateWithoutInvitesInputSchema),z.lazy(() => CourtUncheckedCreateWithoutInvitesInputSchema) ]),
}).strict();

export const BookingCreateWithoutInviteInputSchema: z.ZodType<Prisma.BookingCreateWithoutInviteInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBookingsInputSchema),
  court: z.lazy(() => CourtCreateNestedOneWithoutBookingsInputSchema),
  history: z.lazy(() => HistoryCreateNestedManyWithoutBookingInputSchema).optional(),
  Teacher: z.lazy(() => TeacherCreateNestedOneWithoutBookingsInputSchema).optional()
}).strict();

export const BookingUncheckedCreateWithoutInviteInputSchema: z.ZodType<Prisma.BookingUncheckedCreateWithoutInviteInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  courtId: z.string(),
  teacherId: z.string().optional().nullable(),
  history: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutBookingInputSchema).optional()
}).strict();

export const BookingCreateOrConnectWithoutInviteInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutInviteInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutInviteInputSchema),z.lazy(() => BookingUncheckedCreateWithoutInviteInputSchema) ]),
}).strict();

export const UserUpsertWithoutInvitesInputSchema: z.ZodType<Prisma.UserUpsertWithoutInvitesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutInvitesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInvitesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutInvitesInputSchema),z.lazy(() => UserUncheckedCreateWithoutInvitesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutInvitesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutInvitesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutInvitesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutInvitesInputSchema) ]),
}).strict();

export const UserUpdateWithoutInvitesInputSchema: z.ZodType<Prisma.UserUpdateWithoutInvitesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutInvitesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutInvitesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const CourtUpsertWithoutInvitesInputSchema: z.ZodType<Prisma.CourtUpsertWithoutInvitesInput> = z.object({
  update: z.union([ z.lazy(() => CourtUpdateWithoutInvitesInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutInvitesInputSchema) ]),
  create: z.union([ z.lazy(() => CourtCreateWithoutInvitesInputSchema),z.lazy(() => CourtUncheckedCreateWithoutInvitesInputSchema) ]),
  where: z.lazy(() => CourtWhereInputSchema).optional()
}).strict();

export const CourtUpdateToOneWithWhereWithoutInvitesInputSchema: z.ZodType<Prisma.CourtUpdateToOneWithWhereWithoutInvitesInput> = z.object({
  where: z.lazy(() => CourtWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CourtUpdateWithoutInvitesInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutInvitesInputSchema) ]),
}).strict();

export const CourtUpdateWithoutInvitesInputSchema: z.ZodType<Prisma.CourtUpdateWithoutInvitesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutCourtsNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutCourtNestedInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUpdateManyWithoutCourtNestedInputSchema).optional()
}).strict();

export const CourtUncheckedUpdateWithoutInvitesInputSchema: z.ZodType<Prisma.CourtUncheckedUpdateWithoutInvitesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutCourtNestedInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutCourtNestedInputSchema).optional()
}).strict();

export const BookingUpsertWithoutInviteInputSchema: z.ZodType<Prisma.BookingUpsertWithoutInviteInput> = z.object({
  update: z.union([ z.lazy(() => BookingUpdateWithoutInviteInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutInviteInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutInviteInputSchema),z.lazy(() => BookingUncheckedCreateWithoutInviteInputSchema) ]),
  where: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export const BookingUpdateToOneWithWhereWithoutInviteInputSchema: z.ZodType<Prisma.BookingUpdateToOneWithWhereWithoutInviteInput> = z.object({
  where: z.lazy(() => BookingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingUpdateWithoutInviteInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutInviteInputSchema) ]),
}).strict();

export const BookingUpdateWithoutInviteInputSchema: z.ZodType<Prisma.BookingUpdateWithoutInviteInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  court: z.lazy(() => CourtUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  history: z.lazy(() => HistoryUpdateManyWithoutBookingNestedInputSchema).optional(),
  Teacher: z.lazy(() => TeacherUpdateOneWithoutBookingsNestedInputSchema).optional()
}).strict();

export const BookingUncheckedUpdateWithoutInviteInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateWithoutInviteInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  history: z.lazy(() => HistoryUncheckedUpdateManyWithoutBookingNestedInputSchema).optional()
}).strict();

export const CourtCreateWithoutAvailabilityInputSchema: z.ZodType<Prisma.CourtCreateWithoutAvailabilityInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutCourtsInputSchema),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutCourtInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutCourtInputSchema).optional()
}).strict();

export const CourtUncheckedCreateWithoutAvailabilityInputSchema: z.ZodType<Prisma.CourtUncheckedCreateWithoutAvailabilityInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional(),
  companyId: z.string(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutCourtInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutCourtInputSchema).optional()
}).strict();

export const CourtCreateOrConnectWithoutAvailabilityInputSchema: z.ZodType<Prisma.CourtCreateOrConnectWithoutAvailabilityInput> = z.object({
  where: z.lazy(() => CourtWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CourtCreateWithoutAvailabilityInputSchema),z.lazy(() => CourtUncheckedCreateWithoutAvailabilityInputSchema) ]),
}).strict();

export const CourtUpsertWithoutAvailabilityInputSchema: z.ZodType<Prisma.CourtUpsertWithoutAvailabilityInput> = z.object({
  update: z.union([ z.lazy(() => CourtUpdateWithoutAvailabilityInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutAvailabilityInputSchema) ]),
  create: z.union([ z.lazy(() => CourtCreateWithoutAvailabilityInputSchema),z.lazy(() => CourtUncheckedCreateWithoutAvailabilityInputSchema) ]),
  where: z.lazy(() => CourtWhereInputSchema).optional()
}).strict();

export const CourtUpdateToOneWithWhereWithoutAvailabilityInputSchema: z.ZodType<Prisma.CourtUpdateToOneWithWhereWithoutAvailabilityInput> = z.object({
  where: z.lazy(() => CourtWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CourtUpdateWithoutAvailabilityInputSchema),z.lazy(() => CourtUncheckedUpdateWithoutAvailabilityInputSchema) ]),
}).strict();

export const CourtUpdateWithoutAvailabilityInputSchema: z.ZodType<Prisma.CourtUpdateWithoutAvailabilityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutCourtsNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutCourtNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutCourtNestedInputSchema).optional()
}).strict();

export const CourtUncheckedUpdateWithoutAvailabilityInputSchema: z.ZodType<Prisma.CourtUncheckedUpdateWithoutAvailabilityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutCourtNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutCourtNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateWithoutNotificationsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyCreateNestedManyWithoutOwnerInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationsInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutNotificationsInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]),
}).strict();

export const UserUpsertWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpsertWithoutNotificationsInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedCreateWithoutNotificationsInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutNotificationsInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutNotificationsInputSchema),z.lazy(() => UserUncheckedUpdateWithoutNotificationsInputSchema) ]),
}).strict();

export const UserUpdateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUpdateWithoutNotificationsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUpdateManyWithoutOwnerNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutNotificationsInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutNotificationsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutEventHistoriesInputSchema: z.ZodType<Prisma.UserCreateWithoutEventHistoriesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutEventHistoriesInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutEventHistoriesInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  tokens: z.lazy(() => TokenUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutEventHistoriesInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutEventHistoriesInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutEventHistoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutEventHistoriesInputSchema) ]),
}).strict();

export const BookingCreateWithoutHistoryInputSchema: z.ZodType<Prisma.BookingCreateWithoutHistoryInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutBookingsInputSchema),
  court: z.lazy(() => CourtCreateNestedOneWithoutBookingsInputSchema),
  invite: z.lazy(() => InviteCreateNestedOneWithoutBookingInputSchema).optional(),
  Teacher: z.lazy(() => TeacherCreateNestedOneWithoutBookingsInputSchema).optional()
}).strict();

export const BookingUncheckedCreateWithoutHistoryInputSchema: z.ZodType<Prisma.BookingUncheckedCreateWithoutHistoryInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  courtId: z.string(),
  teacherId: z.string().optional().nullable(),
  invite: z.lazy(() => InviteUncheckedCreateNestedOneWithoutBookingInputSchema).optional()
}).strict();

export const BookingCreateOrConnectWithoutHistoryInputSchema: z.ZodType<Prisma.BookingCreateOrConnectWithoutHistoryInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingCreateWithoutHistoryInputSchema),z.lazy(() => BookingUncheckedCreateWithoutHistoryInputSchema) ]),
}).strict();

export const EventCreateWithoutHistoriesInputSchema: z.ZodType<Prisma.EventCreateWithoutHistoriesInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  company: z.lazy(() => CompanyCreateNestedOneWithoutEventsInputSchema),
  participants: z.lazy(() => ProfileEventParticipationCreateNestedManyWithoutEventInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleCreateNestedManyWithoutEventInputSchema).optional(),
  Prize: z.lazy(() => PrizeCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventUncheckedCreateWithoutHistoriesInputSchema: z.ZodType<Prisma.EventUncheckedCreateWithoutHistoriesInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  companyId: z.string(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number(),
  participants: z.lazy(() => ProfileEventParticipationUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUncheckedCreateNestedManyWithoutEventInputSchema).optional(),
  Prize: z.lazy(() => PrizeUncheckedCreateNestedManyWithoutEventInputSchema).optional()
}).strict();

export const EventCreateOrConnectWithoutHistoriesInputSchema: z.ZodType<Prisma.EventCreateOrConnectWithoutHistoriesInput> = z.object({
  where: z.lazy(() => EventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => EventCreateWithoutHistoriesInputSchema),z.lazy(() => EventUncheckedCreateWithoutHistoriesInputSchema) ]),
}).strict();

export const UserUpsertWithoutEventHistoriesInputSchema: z.ZodType<Prisma.UserUpsertWithoutEventHistoriesInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutEventHistoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutEventHistoriesInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutEventHistoriesInputSchema),z.lazy(() => UserUncheckedCreateWithoutEventHistoriesInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutEventHistoriesInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutEventHistoriesInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutEventHistoriesInputSchema),z.lazy(() => UserUncheckedUpdateWithoutEventHistoriesInputSchema) ]),
}).strict();

export const UserUpdateWithoutEventHistoriesInputSchema: z.ZodType<Prisma.UserUpdateWithoutEventHistoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutEventHistoriesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutEventHistoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const BookingUpsertWithoutHistoryInputSchema: z.ZodType<Prisma.BookingUpsertWithoutHistoryInput> = z.object({
  update: z.union([ z.lazy(() => BookingUpdateWithoutHistoryInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutHistoryInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutHistoryInputSchema),z.lazy(() => BookingUncheckedCreateWithoutHistoryInputSchema) ]),
  where: z.lazy(() => BookingWhereInputSchema).optional()
}).strict();

export const BookingUpdateToOneWithWhereWithoutHistoryInputSchema: z.ZodType<Prisma.BookingUpdateToOneWithWhereWithoutHistoryInput> = z.object({
  where: z.lazy(() => BookingWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingUpdateWithoutHistoryInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutHistoryInputSchema) ]),
}).strict();

export const BookingUpdateWithoutHistoryInputSchema: z.ZodType<Prisma.BookingUpdateWithoutHistoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  court: z.lazy(() => CourtUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  invite: z.lazy(() => InviteUpdateOneWithoutBookingNestedInputSchema).optional(),
  Teacher: z.lazy(() => TeacherUpdateOneWithoutBookingsNestedInputSchema).optional()
}).strict();

export const BookingUncheckedUpdateWithoutHistoryInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateWithoutHistoryInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invite: z.lazy(() => InviteUncheckedUpdateOneWithoutBookingNestedInputSchema).optional()
}).strict();

export const EventUpsertWithoutHistoriesInputSchema: z.ZodType<Prisma.EventUpsertWithoutHistoriesInput> = z.object({
  update: z.union([ z.lazy(() => EventUpdateWithoutHistoriesInputSchema),z.lazy(() => EventUncheckedUpdateWithoutHistoriesInputSchema) ]),
  create: z.union([ z.lazy(() => EventCreateWithoutHistoriesInputSchema),z.lazy(() => EventUncheckedCreateWithoutHistoriesInputSchema) ]),
  where: z.lazy(() => EventWhereInputSchema).optional()
}).strict();

export const EventUpdateToOneWithWhereWithoutHistoriesInputSchema: z.ZodType<Prisma.EventUpdateToOneWithWhereWithoutHistoriesInput> = z.object({
  where: z.lazy(() => EventWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => EventUpdateWithoutHistoriesInputSchema),z.lazy(() => EventUncheckedUpdateWithoutHistoriesInputSchema) ]),
}).strict();

export const EventUpdateWithoutHistoriesInputSchema: z.ZodType<Prisma.EventUpdateWithoutHistoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutEventsNestedInputSchema).optional(),
  participants: z.lazy(() => ProfileEventParticipationUpdateManyWithoutEventNestedInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUpdateManyWithoutEventNestedInputSchema).optional(),
  Prize: z.lazy(() => PrizeUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateWithoutHistoriesInputSchema: z.ZodType<Prisma.EventUncheckedUpdateWithoutHistoriesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  participants: z.lazy(() => ProfileEventParticipationUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  Prize: z.lazy(() => PrizeUncheckedUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const UserCreateWithoutTokensInputSchema: z.ZodType<Prisma.UserCreateWithoutTokensInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  invites: z.lazy(() => InviteCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserUncheckedCreateWithoutTokensInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutTokensInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  email: z.string(),
  passwordHash: z.string(),
  avatarUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  invites: z.lazy(() => InviteUncheckedCreateNestedManyWithoutAuthorInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutAdminsInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedCreateNestedManyWithoutOwnerInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedCreateNestedManyWithoutUserInputSchema).optional()
}).strict();

export const UserCreateOrConnectWithoutTokensInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTokensInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutTokensInputSchema) ]),
}).strict();

export const UserUpsertWithoutTokensInputSchema: z.ZodType<Prisma.UserUpsertWithoutTokensInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTokensInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTokensInputSchema),z.lazy(() => UserUncheckedCreateWithoutTokensInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export const UserUpdateToOneWithWhereWithoutTokensInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTokensInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTokensInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTokensInputSchema) ]),
}).strict();

export const UserUpdateWithoutTokensInputSchema: z.ZodType<Prisma.UserUpdateWithoutTokensInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutTokensInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutTokensInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  companies: z.lazy(() => CompanyUncheckedUpdateManyWithoutAdminsNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const ProfileEventParticipationCreateManyProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationCreateManyProfileInput> = z.object({
  id: z.string().optional(),
  eventId: z.string(),
  participationDate: z.coerce.date().optional(),
  classification: z.string().optional().nullable()
}).strict();

export const TrophyCreateManyProfileInputSchema: z.ZodType<Prisma.TrophyCreateManyProfileInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional().nullable(),
  date: z.coerce.date()
}).strict();

export const ProfileEventParticipationUpdateWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participationDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classification: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  event: z.lazy(() => EventUpdateOneRequiredWithoutParticipantsNestedInputSchema).optional()
}).strict();

export const ProfileEventParticipationUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participationDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classification: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProfileEventParticipationUncheckedUpdateManyWithoutProfileInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedUpdateManyWithoutProfileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participationDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classification: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const TrophyUpdateWithoutProfileInputSchema: z.ZodType<Prisma.TrophyUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TrophyUncheckedUpdateWithoutProfileInputSchema: z.ZodType<Prisma.TrophyUncheckedUpdateWithoutProfileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TrophyUncheckedUpdateManyWithoutProfileInputSchema: z.ZodType<Prisma.TrophyUncheckedUpdateManyWithoutProfileInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ProfileEventParticipationCreateManyEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationCreateManyEventInput> = z.object({
  id: z.string().optional(),
  profileId: z.string(),
  participationDate: z.coerce.date().optional(),
  classification: z.string().optional().nullable()
}).strict();

export const HistoryCreateManyEventInputSchema: z.ZodType<Prisma.HistoryCreateManyEventInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  bookingId: z.string()
}).strict();

export const EventRuleCreateManyEventInputSchema: z.ZodType<Prisma.EventRuleCreateManyEventInput> = z.object({
  id: z.string().optional(),
  type: z.string(),
  value: z.string()
}).strict();

export const PrizeCreateManyEventInputSchema: z.ZodType<Prisma.PrizeCreateManyEventInput> = z.object({
  id: z.string().optional(),
  position: z.number(),
  amount: z.number()
}).strict();

export const ProfileEventParticipationUpdateWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participationDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classification: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  profile: z.lazy(() => ProfileUpdateOneRequiredWithoutEventsNestedInputSchema).optional()
}).strict();

export const ProfileEventParticipationUncheckedUpdateWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedUpdateWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participationDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classification: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ProfileEventParticipationUncheckedUpdateManyWithoutEventInputSchema: z.ZodType<Prisma.ProfileEventParticipationUncheckedUpdateManyWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profileId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  participationDate: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  classification: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const HistoryUpdateWithoutEventInputSchema: z.ZodType<Prisma.HistoryUpdateWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutEventHistoriesNestedInputSchema).optional(),
  booking: z.lazy(() => BookingUpdateOneRequiredWithoutHistoryNestedInputSchema).optional()
}).strict();

export const HistoryUncheckedUpdateWithoutEventInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HistoryUncheckedUpdateManyWithoutEventInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateManyWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventRuleUpdateWithoutEventInputSchema: z.ZodType<Prisma.EventRuleUpdateWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventRuleUncheckedUpdateWithoutEventInputSchema: z.ZodType<Prisma.EventRuleUncheckedUpdateWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventRuleUncheckedUpdateManyWithoutEventInputSchema: z.ZodType<Prisma.EventRuleUncheckedUpdateManyWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  value: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrizeUpdateWithoutEventInputSchema: z.ZodType<Prisma.PrizeUpdateWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrizeUncheckedUpdateWithoutEventInputSchema: z.ZodType<Prisma.PrizeUncheckedUpdateWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const PrizeUncheckedUpdateManyWithoutEventInputSchema: z.ZodType<Prisma.PrizeUncheckedUpdateManyWithoutEventInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  amount: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TokenCreateManyUserInputSchema: z.ZodType<Prisma.TokenCreateManyUserInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => TokenTypeSchema),
  createdAt: z.coerce.date().optional()
}).strict();

export const InviteCreateManyAuthorInputSchema: z.ZodType<Prisma.InviteCreateManyAuthorInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  courtId: z.string(),
  bookingId: z.string().optional().nullable()
}).strict();

export const BookingCreateManyUserInputSchema: z.ZodType<Prisma.BookingCreateManyUserInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  courtId: z.string(),
  teacherId: z.string().optional().nullable()
}).strict();

export const CompanyCreateManyOwnerInputSchema: z.ZodType<Prisma.CompanyCreateManyOwnerInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  cityId: z.string().optional().nullable(),
  addressId: z.string().optional().nullable()
}).strict();

export const NotificationCreateManyUserInputSchema: z.ZodType<Prisma.NotificationCreateManyUserInput> = z.object({
  id: z.string().optional(),
  type: z.lazy(() => NotificationTypeSchema),
  message: z.string(),
  read: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const HistoryCreateManyUserInputSchema: z.ZodType<Prisma.HistoryCreateManyUserInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  bookingId: z.string(),
  eventId: z.string().optional().nullable()
}).strict();

export const ReviewCreateManyUserInputSchema: z.ZodType<Prisma.ReviewCreateManyUserInput> = z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  companyId: z.string()
}).strict();

export const TokenUpdateWithoutUserInputSchema: z.ZodType<Prisma.TokenUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => EnumTokenTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TokenUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.TokenUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => EnumTokenTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const TokenUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.TokenUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => TokenTypeSchema),z.lazy(() => EnumTokenTypeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.InviteUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  court: z.lazy(() => CourtUpdateOneRequiredWithoutInvitesNestedInputSchema).optional(),
  booking: z.lazy(() => BookingUpdateOneWithoutInviteNestedInputSchema).optional()
}).strict();

export const InviteUncheckedUpdateWithoutAuthorInputSchema: z.ZodType<Prisma.InviteUncheckedUpdateWithoutAuthorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InviteUncheckedUpdateManyWithoutAuthorInputSchema: z.ZodType<Prisma.InviteUncheckedUpdateManyWithoutAuthorInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BookingUpdateWithoutUserInputSchema: z.ZodType<Prisma.BookingUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  court: z.lazy(() => CourtUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  invite: z.lazy(() => InviteUpdateOneWithoutBookingNestedInputSchema).optional(),
  history: z.lazy(() => HistoryUpdateManyWithoutBookingNestedInputSchema).optional(),
  Teacher: z.lazy(() => TeacherUpdateOneWithoutBookingsNestedInputSchema).optional()
}).strict();

export const BookingUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invite: z.lazy(() => InviteUncheckedUpdateOneWithoutBookingNestedInputSchema).optional(),
  history: z.lazy(() => HistoryUncheckedUpdateManyWithoutBookingNestedInputSchema).optional()
}).strict();

export const BookingUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CompanyUpdateWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutAdminsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedCompaniesNestedInputSchema).optional(),
  courts: z.lazy(() => CourtUpdateManyWithoutCompanyNestedInputSchema).optional(),
  city: z.lazy(() => CityUpdateOneWithoutCompaniesNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutCompanyNestedInputSchema).optional(),
  events: z.lazy(() => EventUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutAdminsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courts: z.lazy(() => CourtUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateManyWithoutAdminsInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateManyWithoutAdminsInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const CompanyUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutOwnerInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  courts: z.lazy(() => CourtUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  city: z.lazy(() => CityUpdateOneWithoutCompaniesNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutCompanyNestedInputSchema).optional(),
  events: z.lazy(() => EventUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutOwnerInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courts: z.lazy(() => CourtUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateManyWithoutOwnerInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateManyWithoutOwnerInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  cityId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const NotificationUpdateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const NotificationUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeSchema),z.lazy(() => EnumNotificationTypeFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  read: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const HistoryUpdateWithoutUserInputSchema: z.ZodType<Prisma.HistoryUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  booking: z.lazy(() => BookingUpdateOneRequiredWithoutHistoryNestedInputSchema).optional(),
  event: z.lazy(() => EventUpdateOneWithoutHistoriesNestedInputSchema).optional()
}).strict();

export const HistoryUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const HistoryUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookingId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const ReviewUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReviewUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutReviewsNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyWithoutUserInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutUserInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyCreateManyCityInputSchema: z.ZodType<Prisma.CompanyCreateManyCityInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  slug: z.string(),
  domain: z.string().optional().nullable(),
  logoImg: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ownerId: z.string(),
  addressId: z.string().optional().nullable()
}).strict();

export const CompanyUpdateWithoutCityInputSchema: z.ZodType<Prisma.CompanyUpdateWithoutCityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  owner: z.lazy(() => UserUpdateOneRequiredWithoutOwnedCompaniesNestedInputSchema).optional(),
  courts: z.lazy(() => CourtUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  address: z.lazy(() => AddressUpdateOneWithoutCompanyNestedInputSchema).optional(),
  events: z.lazy(() => EventUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateWithoutCityInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateWithoutCityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  courts: z.lazy(() => CourtUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  admins: z.lazy(() => UserUncheckedUpdateManyWithoutCompaniesNestedInputSchema).optional(),
  events: z.lazy(() => EventUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  reviews: z.lazy(() => ReviewUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  CompanyTeacher: z.lazy(() => CompanyTeacherUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional(),
  openingHours: z.lazy(() => OpeningHoursUncheckedUpdateManyWithoutCompanyNestedInputSchema).optional()
}).strict();

export const CompanyUncheckedUpdateManyWithoutCityInputSchema: z.ZodType<Prisma.CompanyUncheckedUpdateManyWithoutCityInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  domain: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  logoImg: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  ownerId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  addressId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const BookingCreateManyTeacherInputSchema: z.ZodType<Prisma.BookingCreateManyTeacherInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  courtId: z.string()
}).strict();

export const CompanyTeacherCreateManyTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherCreateManyTeacherInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  companyId: z.string()
}).strict();

export const BookingUpdateWithoutTeacherInputSchema: z.ZodType<Prisma.BookingUpdateWithoutTeacherInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  court: z.lazy(() => CourtUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  invite: z.lazy(() => InviteUpdateOneWithoutBookingNestedInputSchema).optional(),
  history: z.lazy(() => HistoryUpdateManyWithoutBookingNestedInputSchema).optional()
}).strict();

export const BookingUncheckedUpdateWithoutTeacherInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateWithoutTeacherInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  invite: z.lazy(() => InviteUncheckedUpdateOneWithoutBookingNestedInputSchema).optional(),
  history: z.lazy(() => HistoryUncheckedUpdateManyWithoutBookingNestedInputSchema).optional()
}).strict();

export const BookingUncheckedUpdateManyWithoutTeacherInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutTeacherInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  courtId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyTeacherUpdateWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherUpdateWithoutTeacherInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  company: z.lazy(() => CompanyUpdateOneRequiredWithoutCompanyTeacherNestedInputSchema).optional()
}).strict();

export const CompanyTeacherUncheckedUpdateWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedUpdateWithoutTeacherInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyTeacherUncheckedUpdateManyWithoutTeacherInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedUpdateManyWithoutTeacherInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  companyId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CourtCreateManyCompanyInputSchema: z.ZodType<Prisma.CourtCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  name: z.string(),
  type: z.lazy(() => SportTypeSchema),
  description: z.string().optional().nullable(),
  comments: z.string().optional().nullable(),
  rules: z.string().optional().nullable(),
  images: z.union([ z.lazy(() => CourtCreateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const EventCreateManyCompanyInputSchema: z.ZodType<Prisma.EventCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  type: z.lazy(() => EventTypeSchema),
  date: z.coerce.date(),
  dateTime: z.coerce.date(),
  createdAt: z.coerce.date().optional(),
  capacity: z.number(),
  registeredCount: z.number()
}).strict();

export const ReviewCreateManyCompanyInputSchema: z.ZodType<Prisma.ReviewCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  rating: z.number(),
  comment: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string()
}).strict();

export const CompanyTeacherCreateManyCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  joinedAt: z.coerce.date().optional(),
  teacherId: z.string()
}).strict();

export const OpeningHoursCreateManyCompanyInputSchema: z.ZodType<Prisma.OpeningHoursCreateManyCompanyInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  opensAt: z.string(),
  closesAt: z.string()
}).strict();

export const CourtUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.CourtUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutCourtNestedInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUpdateManyWithoutCourtNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutCourtNestedInputSchema).optional()
}).strict();

export const CourtUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.CourtUncheckedUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutCourtNestedInputSchema).optional(),
  availability: z.lazy(() => AvailabilityUncheckedUpdateManyWithoutCourtNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutCourtNestedInputSchema).optional()
}).strict();

export const CourtUncheckedUpdateManyWithoutCompanyInputSchema: z.ZodType<Prisma.CourtUncheckedUpdateManyWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => SportTypeSchema),z.lazy(() => EnumSportTypeFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  comments: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  rules: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  images: z.union([ z.lazy(() => CourtUpdateimagesInputSchema),z.string().array() ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const UserUpdateWithoutCompaniesInputSchema: z.ZodType<Prisma.UserUpdateWithoutCompaniesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateWithoutCompaniesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateWithoutCompaniesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  tokens: z.lazy(() => TokenUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  invites: z.lazy(() => InviteUncheckedUpdateManyWithoutAuthorNestedInputSchema).optional(),
  bookings: z.lazy(() => BookingUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  ownedCompanies: z.lazy(() => CompanyUncheckedUpdateManyWithoutOwnerNestedInputSchema).optional(),
  notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  eventHistories: z.lazy(() => HistoryUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  Review: z.lazy(() => ReviewUncheckedUpdateManyWithoutUserNestedInputSchema).optional()
}).strict();

export const UserUncheckedUpdateManyWithoutCompaniesInputSchema: z.ZodType<Prisma.UserUncheckedUpdateManyWithoutCompaniesInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  passwordHash: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  avatarUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const EventUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.EventUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  participants: z.lazy(() => ProfileEventParticipationUpdateManyWithoutEventNestedInputSchema).optional(),
  histories: z.lazy(() => HistoryUpdateManyWithoutEventNestedInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUpdateManyWithoutEventNestedInputSchema).optional(),
  Prize: z.lazy(() => PrizeUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.EventUncheckedUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  participants: z.lazy(() => ProfileEventParticipationUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  histories: z.lazy(() => HistoryUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  EventRule: z.lazy(() => EventRuleUncheckedUpdateManyWithoutEventNestedInputSchema).optional(),
  Prize: z.lazy(() => PrizeUncheckedUpdateManyWithoutEventNestedInputSchema).optional()
}).strict();

export const EventUncheckedUpdateManyWithoutCompanyInputSchema: z.ZodType<Prisma.EventUncheckedUpdateManyWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  type: z.union([ z.lazy(() => EventTypeSchema),z.lazy(() => EnumEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  capacity: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  registeredCount: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutReviewNestedInputSchema).optional()
}).strict();

export const ReviewUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const ReviewUncheckedUpdateManyWithoutCompanyInputSchema: z.ZodType<Prisma.ReviewUncheckedUpdateManyWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  rating: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  comment: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyTeacherUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teacher: z.lazy(() => TeacherUpdateOneRequiredWithoutCompanyTeacherNestedInputSchema).optional()
}).strict();

export const CompanyTeacherUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const CompanyTeacherUncheckedUpdateManyWithoutCompanyInputSchema: z.ZodType<Prisma.CompanyTeacherUncheckedUpdateManyWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OpeningHoursUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opensAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  closesAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OpeningHoursUncheckedUpdateWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursUncheckedUpdateWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opensAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  closesAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const OpeningHoursUncheckedUpdateManyWithoutCompanyInputSchema: z.ZodType<Prisma.OpeningHoursUncheckedUpdateManyWithoutCompanyInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  opensAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  closesAt: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const BookingCreateManyCourtInputSchema: z.ZodType<Prisma.BookingCreateManyCourtInput> = z.object({
  id: z.string().optional(),
  dateTime: z.coerce.date(),
  price: z.number(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  teacherId: z.string().optional().nullable()
}).strict();

export const AvailabilityCreateManyCourtInputSchema: z.ZodType<Prisma.AvailabilityCreateManyCourtInput> = z.object({
  id: z.string().optional(),
  dayOfWeek: z.number(),
  startTime: z.string(),
  endTime: z.string(),
  isPeakHour: z.boolean().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export const InviteCreateManyCourtInputSchema: z.ZodType<Prisma.InviteCreateManyCourtInput> = z.object({
  id: z.string().optional(),
  email: z.string(),
  createdAt: z.coerce.date().optional(),
  authorId: z.string().optional().nullable(),
  bookingId: z.string().optional().nullable()
}).strict();

export const BookingUpdateWithoutCourtInputSchema: z.ZodType<Prisma.BookingUpdateWithoutCourtInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutBookingsNestedInputSchema).optional(),
  invite: z.lazy(() => InviteUpdateOneWithoutBookingNestedInputSchema).optional(),
  history: z.lazy(() => HistoryUpdateManyWithoutBookingNestedInputSchema).optional(),
  Teacher: z.lazy(() => TeacherUpdateOneWithoutBookingsNestedInputSchema).optional()
}).strict();

export const BookingUncheckedUpdateWithoutCourtInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateWithoutCourtInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  invite: z.lazy(() => InviteUncheckedUpdateOneWithoutBookingNestedInputSchema).optional(),
  history: z.lazy(() => HistoryUncheckedUpdateManyWithoutBookingNestedInputSchema).optional()
}).strict();

export const BookingUncheckedUpdateManyWithoutCourtInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutCourtInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dateTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  price: z.union([ z.number(),z.lazy(() => FloatFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  teacherId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const AvailabilityUpdateWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityUpdateWithoutCourtInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isPeakHour: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateWithoutCourtInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isPeakHour: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const AvailabilityUncheckedUpdateManyWithoutCourtInputSchema: z.ZodType<Prisma.AvailabilityUncheckedUpdateManyWithoutCourtInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  dayOfWeek: z.union([ z.number(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isPeakHour: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export const InviteUpdateWithoutCourtInputSchema: z.ZodType<Prisma.InviteUpdateWithoutCourtInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  author: z.lazy(() => UserUpdateOneWithoutInvitesNestedInputSchema).optional(),
  booking: z.lazy(() => BookingUpdateOneWithoutInviteNestedInputSchema).optional()
}).strict();

export const InviteUncheckedUpdateWithoutCourtInputSchema: z.ZodType<Prisma.InviteUncheckedUpdateWithoutCourtInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bookingId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const InviteUncheckedUpdateManyWithoutCourtInputSchema: z.ZodType<Prisma.InviteUncheckedUpdateManyWithoutCourtInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  authorId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bookingId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const HistoryCreateManyBookingInputSchema: z.ZodType<Prisma.HistoryCreateManyBookingInput> = z.object({
  id: z.string().optional(),
  result: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  userId: z.string(),
  eventId: z.string().optional().nullable()
}).strict();

export const HistoryUpdateWithoutBookingInputSchema: z.ZodType<Prisma.HistoryUpdateWithoutBookingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutEventHistoriesNestedInputSchema).optional(),
  event: z.lazy(() => EventUpdateOneWithoutHistoriesNestedInputSchema).optional()
}).strict();

export const HistoryUncheckedUpdateWithoutBookingInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateWithoutBookingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export const HistoryUncheckedUpdateManyWithoutBookingInputSchema: z.ZodType<Prisma.HistoryUncheckedUpdateManyWithoutBookingInput> = z.object({
  id: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  result: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  userId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

/////////////////////////////////////////
// ARGS
/////////////////////////////////////////

export const ProfileFindFirstArgsSchema: z.ZodType<Prisma.ProfileFindFirstArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileScalarFieldEnumSchema,ProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProfileFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProfileFindFirstOrThrowArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileScalarFieldEnumSchema,ProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProfileFindManyArgsSchema: z.ZodType<Prisma.ProfileFindManyArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileScalarFieldEnumSchema,ProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProfileAggregateArgsSchema: z.ZodType<Prisma.ProfileAggregateArgs> = z.object({
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithRelationInputSchema.array(),ProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProfileGroupByArgsSchema: z.ZodType<Prisma.ProfileGroupByArgs> = z.object({
  where: ProfileWhereInputSchema.optional(),
  orderBy: z.union([ ProfileOrderByWithAggregationInputSchema.array(),ProfileOrderByWithAggregationInputSchema ]).optional(),
  by: ProfileScalarFieldEnumSchema.array(),
  having: ProfileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProfileFindUniqueArgsSchema: z.ZodType<Prisma.ProfileFindUniqueArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
}).strict() ;

export const ProfileFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProfileFindUniqueOrThrowArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
}).strict() ;

export const EventFindFirstArgsSchema: z.ZodType<Prisma.EventFindFirstArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventScalarFieldEnumSchema,EventScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventFindFirstOrThrowArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventScalarFieldEnumSchema,EventScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventFindManyArgsSchema: z.ZodType<Prisma.EventFindManyArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventScalarFieldEnumSchema,EventScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventAggregateArgsSchema: z.ZodType<Prisma.EventAggregateArgs> = z.object({
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithRelationInputSchema.array(),EventOrderByWithRelationInputSchema ]).optional(),
  cursor: EventWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventGroupByArgsSchema: z.ZodType<Prisma.EventGroupByArgs> = z.object({
  where: EventWhereInputSchema.optional(),
  orderBy: z.union([ EventOrderByWithAggregationInputSchema.array(),EventOrderByWithAggregationInputSchema ]).optional(),
  by: EventScalarFieldEnumSchema.array(),
  having: EventScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventFindUniqueArgsSchema: z.ZodType<Prisma.EventFindUniqueArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EventFindUniqueOrThrowArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const PrizeFindFirstArgsSchema: z.ZodType<Prisma.PrizeFindFirstArgs> = z.object({
  select: PrizeSelectSchema.optional(),
  include: PrizeIncludeSchema.optional(),
  where: PrizeWhereInputSchema.optional(),
  orderBy: z.union([ PrizeOrderByWithRelationInputSchema.array(),PrizeOrderByWithRelationInputSchema ]).optional(),
  cursor: PrizeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrizeScalarFieldEnumSchema,PrizeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PrizeFindFirstOrThrowArgsSchema: z.ZodType<Prisma.PrizeFindFirstOrThrowArgs> = z.object({
  select: PrizeSelectSchema.optional(),
  include: PrizeIncludeSchema.optional(),
  where: PrizeWhereInputSchema.optional(),
  orderBy: z.union([ PrizeOrderByWithRelationInputSchema.array(),PrizeOrderByWithRelationInputSchema ]).optional(),
  cursor: PrizeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrizeScalarFieldEnumSchema,PrizeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PrizeFindManyArgsSchema: z.ZodType<Prisma.PrizeFindManyArgs> = z.object({
  select: PrizeSelectSchema.optional(),
  include: PrizeIncludeSchema.optional(),
  where: PrizeWhereInputSchema.optional(),
  orderBy: z.union([ PrizeOrderByWithRelationInputSchema.array(),PrizeOrderByWithRelationInputSchema ]).optional(),
  cursor: PrizeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PrizeScalarFieldEnumSchema,PrizeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const PrizeAggregateArgsSchema: z.ZodType<Prisma.PrizeAggregateArgs> = z.object({
  where: PrizeWhereInputSchema.optional(),
  orderBy: z.union([ PrizeOrderByWithRelationInputSchema.array(),PrizeOrderByWithRelationInputSchema ]).optional(),
  cursor: PrizeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PrizeGroupByArgsSchema: z.ZodType<Prisma.PrizeGroupByArgs> = z.object({
  where: PrizeWhereInputSchema.optional(),
  orderBy: z.union([ PrizeOrderByWithAggregationInputSchema.array(),PrizeOrderByWithAggregationInputSchema ]).optional(),
  by: PrizeScalarFieldEnumSchema.array(),
  having: PrizeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const PrizeFindUniqueArgsSchema: z.ZodType<Prisma.PrizeFindUniqueArgs> = z.object({
  select: PrizeSelectSchema.optional(),
  include: PrizeIncludeSchema.optional(),
  where: PrizeWhereUniqueInputSchema,
}).strict() ;

export const PrizeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.PrizeFindUniqueOrThrowArgs> = z.object({
  select: PrizeSelectSchema.optional(),
  include: PrizeIncludeSchema.optional(),
  where: PrizeWhereUniqueInputSchema,
}).strict() ;

export const EventRuleFindFirstArgsSchema: z.ZodType<Prisma.EventRuleFindFirstArgs> = z.object({
  select: EventRuleSelectSchema.optional(),
  include: EventRuleIncludeSchema.optional(),
  where: EventRuleWhereInputSchema.optional(),
  orderBy: z.union([ EventRuleOrderByWithRelationInputSchema.array(),EventRuleOrderByWithRelationInputSchema ]).optional(),
  cursor: EventRuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventRuleScalarFieldEnumSchema,EventRuleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventRuleFindFirstOrThrowArgsSchema: z.ZodType<Prisma.EventRuleFindFirstOrThrowArgs> = z.object({
  select: EventRuleSelectSchema.optional(),
  include: EventRuleIncludeSchema.optional(),
  where: EventRuleWhereInputSchema.optional(),
  orderBy: z.union([ EventRuleOrderByWithRelationInputSchema.array(),EventRuleOrderByWithRelationInputSchema ]).optional(),
  cursor: EventRuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventRuleScalarFieldEnumSchema,EventRuleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventRuleFindManyArgsSchema: z.ZodType<Prisma.EventRuleFindManyArgs> = z.object({
  select: EventRuleSelectSchema.optional(),
  include: EventRuleIncludeSchema.optional(),
  where: EventRuleWhereInputSchema.optional(),
  orderBy: z.union([ EventRuleOrderByWithRelationInputSchema.array(),EventRuleOrderByWithRelationInputSchema ]).optional(),
  cursor: EventRuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ EventRuleScalarFieldEnumSchema,EventRuleScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const EventRuleAggregateArgsSchema: z.ZodType<Prisma.EventRuleAggregateArgs> = z.object({
  where: EventRuleWhereInputSchema.optional(),
  orderBy: z.union([ EventRuleOrderByWithRelationInputSchema.array(),EventRuleOrderByWithRelationInputSchema ]).optional(),
  cursor: EventRuleWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventRuleGroupByArgsSchema: z.ZodType<Prisma.EventRuleGroupByArgs> = z.object({
  where: EventRuleWhereInputSchema.optional(),
  orderBy: z.union([ EventRuleOrderByWithAggregationInputSchema.array(),EventRuleOrderByWithAggregationInputSchema ]).optional(),
  by: EventRuleScalarFieldEnumSchema.array(),
  having: EventRuleScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const EventRuleFindUniqueArgsSchema: z.ZodType<Prisma.EventRuleFindUniqueArgs> = z.object({
  select: EventRuleSelectSchema.optional(),
  include: EventRuleIncludeSchema.optional(),
  where: EventRuleWhereUniqueInputSchema,
}).strict() ;

export const EventRuleFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.EventRuleFindUniqueOrThrowArgs> = z.object({
  select: EventRuleSelectSchema.optional(),
  include: EventRuleIncludeSchema.optional(),
  where: EventRuleWhereUniqueInputSchema,
}).strict() ;

export const ProfileEventParticipationFindFirstArgsSchema: z.ZodType<Prisma.ProfileEventParticipationFindFirstArgs> = z.object({
  select: ProfileEventParticipationSelectSchema.optional(),
  include: ProfileEventParticipationIncludeSchema.optional(),
  where: ProfileEventParticipationWhereInputSchema.optional(),
  orderBy: z.union([ ProfileEventParticipationOrderByWithRelationInputSchema.array(),ProfileEventParticipationOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileEventParticipationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileEventParticipationScalarFieldEnumSchema,ProfileEventParticipationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProfileEventParticipationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ProfileEventParticipationFindFirstOrThrowArgs> = z.object({
  select: ProfileEventParticipationSelectSchema.optional(),
  include: ProfileEventParticipationIncludeSchema.optional(),
  where: ProfileEventParticipationWhereInputSchema.optional(),
  orderBy: z.union([ ProfileEventParticipationOrderByWithRelationInputSchema.array(),ProfileEventParticipationOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileEventParticipationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileEventParticipationScalarFieldEnumSchema,ProfileEventParticipationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProfileEventParticipationFindManyArgsSchema: z.ZodType<Prisma.ProfileEventParticipationFindManyArgs> = z.object({
  select: ProfileEventParticipationSelectSchema.optional(),
  include: ProfileEventParticipationIncludeSchema.optional(),
  where: ProfileEventParticipationWhereInputSchema.optional(),
  orderBy: z.union([ ProfileEventParticipationOrderByWithRelationInputSchema.array(),ProfileEventParticipationOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileEventParticipationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProfileEventParticipationScalarFieldEnumSchema,ProfileEventParticipationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ProfileEventParticipationAggregateArgsSchema: z.ZodType<Prisma.ProfileEventParticipationAggregateArgs> = z.object({
  where: ProfileEventParticipationWhereInputSchema.optional(),
  orderBy: z.union([ ProfileEventParticipationOrderByWithRelationInputSchema.array(),ProfileEventParticipationOrderByWithRelationInputSchema ]).optional(),
  cursor: ProfileEventParticipationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProfileEventParticipationGroupByArgsSchema: z.ZodType<Prisma.ProfileEventParticipationGroupByArgs> = z.object({
  where: ProfileEventParticipationWhereInputSchema.optional(),
  orderBy: z.union([ ProfileEventParticipationOrderByWithAggregationInputSchema.array(),ProfileEventParticipationOrderByWithAggregationInputSchema ]).optional(),
  by: ProfileEventParticipationScalarFieldEnumSchema.array(),
  having: ProfileEventParticipationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ProfileEventParticipationFindUniqueArgsSchema: z.ZodType<Prisma.ProfileEventParticipationFindUniqueArgs> = z.object({
  select: ProfileEventParticipationSelectSchema.optional(),
  include: ProfileEventParticipationIncludeSchema.optional(),
  where: ProfileEventParticipationWhereUniqueInputSchema,
}).strict() ;

export const ProfileEventParticipationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ProfileEventParticipationFindUniqueOrThrowArgs> = z.object({
  select: ProfileEventParticipationSelectSchema.optional(),
  include: ProfileEventParticipationIncludeSchema.optional(),
  where: ProfileEventParticipationWhereUniqueInputSchema,
}).strict() ;

export const UserFindFirstArgsSchema: z.ZodType<Prisma.UserFindFirstArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindFirstOrThrowArgsSchema: z.ZodType<Prisma.UserFindFirstOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserFindManyArgsSchema: z.ZodType<Prisma.UserFindManyArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserScalarFieldEnumSchema,UserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const UserAggregateArgsSchema: z.ZodType<Prisma.UserAggregateArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithRelationInputSchema.array(),UserOrderByWithRelationInputSchema ]).optional(),
  cursor: UserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserGroupByArgsSchema: z.ZodType<Prisma.UserGroupByArgs> = z.object({
  where: UserWhereInputSchema.optional(),
  orderBy: z.union([ UserOrderByWithAggregationInputSchema.array(),UserOrderByWithAggregationInputSchema ]).optional(),
  by: UserScalarFieldEnumSchema.array(),
  having: UserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const UserFindUniqueArgsSchema: z.ZodType<Prisma.UserFindUniqueArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.UserFindUniqueOrThrowArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const TrophyFindFirstArgsSchema: z.ZodType<Prisma.TrophyFindFirstArgs> = z.object({
  select: TrophySelectSchema.optional(),
  include: TrophyIncludeSchema.optional(),
  where: TrophyWhereInputSchema.optional(),
  orderBy: z.union([ TrophyOrderByWithRelationInputSchema.array(),TrophyOrderByWithRelationInputSchema ]).optional(),
  cursor: TrophyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TrophyScalarFieldEnumSchema,TrophyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TrophyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TrophyFindFirstOrThrowArgs> = z.object({
  select: TrophySelectSchema.optional(),
  include: TrophyIncludeSchema.optional(),
  where: TrophyWhereInputSchema.optional(),
  orderBy: z.union([ TrophyOrderByWithRelationInputSchema.array(),TrophyOrderByWithRelationInputSchema ]).optional(),
  cursor: TrophyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TrophyScalarFieldEnumSchema,TrophyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TrophyFindManyArgsSchema: z.ZodType<Prisma.TrophyFindManyArgs> = z.object({
  select: TrophySelectSchema.optional(),
  include: TrophyIncludeSchema.optional(),
  where: TrophyWhereInputSchema.optional(),
  orderBy: z.union([ TrophyOrderByWithRelationInputSchema.array(),TrophyOrderByWithRelationInputSchema ]).optional(),
  cursor: TrophyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TrophyScalarFieldEnumSchema,TrophyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TrophyAggregateArgsSchema: z.ZodType<Prisma.TrophyAggregateArgs> = z.object({
  where: TrophyWhereInputSchema.optional(),
  orderBy: z.union([ TrophyOrderByWithRelationInputSchema.array(),TrophyOrderByWithRelationInputSchema ]).optional(),
  cursor: TrophyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TrophyGroupByArgsSchema: z.ZodType<Prisma.TrophyGroupByArgs> = z.object({
  where: TrophyWhereInputSchema.optional(),
  orderBy: z.union([ TrophyOrderByWithAggregationInputSchema.array(),TrophyOrderByWithAggregationInputSchema ]).optional(),
  by: TrophyScalarFieldEnumSchema.array(),
  having: TrophyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TrophyFindUniqueArgsSchema: z.ZodType<Prisma.TrophyFindUniqueArgs> = z.object({
  select: TrophySelectSchema.optional(),
  include: TrophyIncludeSchema.optional(),
  where: TrophyWhereUniqueInputSchema,
}).strict() ;

export const TrophyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TrophyFindUniqueOrThrowArgs> = z.object({
  select: TrophySelectSchema.optional(),
  include: TrophyIncludeSchema.optional(),
  where: TrophyWhereUniqueInputSchema,
}).strict() ;

export const CityFindFirstArgsSchema: z.ZodType<Prisma.CityFindFirstArgs> = z.object({
  select: CitySelectSchema.optional(),
  include: CityIncludeSchema.optional(),
  where: CityWhereInputSchema.optional(),
  orderBy: z.union([ CityOrderByWithRelationInputSchema.array(),CityOrderByWithRelationInputSchema ]).optional(),
  cursor: CityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CityScalarFieldEnumSchema,CityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CityFindFirstOrThrowArgs> = z.object({
  select: CitySelectSchema.optional(),
  include: CityIncludeSchema.optional(),
  where: CityWhereInputSchema.optional(),
  orderBy: z.union([ CityOrderByWithRelationInputSchema.array(),CityOrderByWithRelationInputSchema ]).optional(),
  cursor: CityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CityScalarFieldEnumSchema,CityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CityFindManyArgsSchema: z.ZodType<Prisma.CityFindManyArgs> = z.object({
  select: CitySelectSchema.optional(),
  include: CityIncludeSchema.optional(),
  where: CityWhereInputSchema.optional(),
  orderBy: z.union([ CityOrderByWithRelationInputSchema.array(),CityOrderByWithRelationInputSchema ]).optional(),
  cursor: CityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CityScalarFieldEnumSchema,CityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CityAggregateArgsSchema: z.ZodType<Prisma.CityAggregateArgs> = z.object({
  where: CityWhereInputSchema.optional(),
  orderBy: z.union([ CityOrderByWithRelationInputSchema.array(),CityOrderByWithRelationInputSchema ]).optional(),
  cursor: CityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CityGroupByArgsSchema: z.ZodType<Prisma.CityGroupByArgs> = z.object({
  where: CityWhereInputSchema.optional(),
  orderBy: z.union([ CityOrderByWithAggregationInputSchema.array(),CityOrderByWithAggregationInputSchema ]).optional(),
  by: CityScalarFieldEnumSchema.array(),
  having: CityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CityFindUniqueArgsSchema: z.ZodType<Prisma.CityFindUniqueArgs> = z.object({
  select: CitySelectSchema.optional(),
  include: CityIncludeSchema.optional(),
  where: CityWhereUniqueInputSchema,
}).strict() ;

export const CityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CityFindUniqueOrThrowArgs> = z.object({
  select: CitySelectSchema.optional(),
  include: CityIncludeSchema.optional(),
  where: CityWhereUniqueInputSchema,
}).strict() ;

export const CompanyTeacherFindFirstArgsSchema: z.ZodType<Prisma.CompanyTeacherFindFirstArgs> = z.object({
  select: CompanyTeacherSelectSchema.optional(),
  include: CompanyTeacherIncludeSchema.optional(),
  where: CompanyTeacherWhereInputSchema.optional(),
  orderBy: z.union([ CompanyTeacherOrderByWithRelationInputSchema.array(),CompanyTeacherOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyTeacherWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompanyTeacherScalarFieldEnumSchema,CompanyTeacherScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompanyTeacherFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CompanyTeacherFindFirstOrThrowArgs> = z.object({
  select: CompanyTeacherSelectSchema.optional(),
  include: CompanyTeacherIncludeSchema.optional(),
  where: CompanyTeacherWhereInputSchema.optional(),
  orderBy: z.union([ CompanyTeacherOrderByWithRelationInputSchema.array(),CompanyTeacherOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyTeacherWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompanyTeacherScalarFieldEnumSchema,CompanyTeacherScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompanyTeacherFindManyArgsSchema: z.ZodType<Prisma.CompanyTeacherFindManyArgs> = z.object({
  select: CompanyTeacherSelectSchema.optional(),
  include: CompanyTeacherIncludeSchema.optional(),
  where: CompanyTeacherWhereInputSchema.optional(),
  orderBy: z.union([ CompanyTeacherOrderByWithRelationInputSchema.array(),CompanyTeacherOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyTeacherWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompanyTeacherScalarFieldEnumSchema,CompanyTeacherScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompanyTeacherAggregateArgsSchema: z.ZodType<Prisma.CompanyTeacherAggregateArgs> = z.object({
  where: CompanyTeacherWhereInputSchema.optional(),
  orderBy: z.union([ CompanyTeacherOrderByWithRelationInputSchema.array(),CompanyTeacherOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyTeacherWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CompanyTeacherGroupByArgsSchema: z.ZodType<Prisma.CompanyTeacherGroupByArgs> = z.object({
  where: CompanyTeacherWhereInputSchema.optional(),
  orderBy: z.union([ CompanyTeacherOrderByWithAggregationInputSchema.array(),CompanyTeacherOrderByWithAggregationInputSchema ]).optional(),
  by: CompanyTeacherScalarFieldEnumSchema.array(),
  having: CompanyTeacherScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CompanyTeacherFindUniqueArgsSchema: z.ZodType<Prisma.CompanyTeacherFindUniqueArgs> = z.object({
  select: CompanyTeacherSelectSchema.optional(),
  include: CompanyTeacherIncludeSchema.optional(),
  where: CompanyTeacherWhereUniqueInputSchema,
}).strict() ;

export const CompanyTeacherFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CompanyTeacherFindUniqueOrThrowArgs> = z.object({
  select: CompanyTeacherSelectSchema.optional(),
  include: CompanyTeacherIncludeSchema.optional(),
  where: CompanyTeacherWhereUniqueInputSchema,
}).strict() ;

export const TeacherFindFirstArgsSchema: z.ZodType<Prisma.TeacherFindFirstArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  where: TeacherWhereInputSchema.optional(),
  orderBy: z.union([ TeacherOrderByWithRelationInputSchema.array(),TeacherOrderByWithRelationInputSchema ]).optional(),
  cursor: TeacherWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeacherScalarFieldEnumSchema,TeacherScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeacherFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TeacherFindFirstOrThrowArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  where: TeacherWhereInputSchema.optional(),
  orderBy: z.union([ TeacherOrderByWithRelationInputSchema.array(),TeacherOrderByWithRelationInputSchema ]).optional(),
  cursor: TeacherWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeacherScalarFieldEnumSchema,TeacherScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeacherFindManyArgsSchema: z.ZodType<Prisma.TeacherFindManyArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  where: TeacherWhereInputSchema.optional(),
  orderBy: z.union([ TeacherOrderByWithRelationInputSchema.array(),TeacherOrderByWithRelationInputSchema ]).optional(),
  cursor: TeacherWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TeacherScalarFieldEnumSchema,TeacherScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TeacherAggregateArgsSchema: z.ZodType<Prisma.TeacherAggregateArgs> = z.object({
  where: TeacherWhereInputSchema.optional(),
  orderBy: z.union([ TeacherOrderByWithRelationInputSchema.array(),TeacherOrderByWithRelationInputSchema ]).optional(),
  cursor: TeacherWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeacherGroupByArgsSchema: z.ZodType<Prisma.TeacherGroupByArgs> = z.object({
  where: TeacherWhereInputSchema.optional(),
  orderBy: z.union([ TeacherOrderByWithAggregationInputSchema.array(),TeacherOrderByWithAggregationInputSchema ]).optional(),
  by: TeacherScalarFieldEnumSchema.array(),
  having: TeacherScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TeacherFindUniqueArgsSchema: z.ZodType<Prisma.TeacherFindUniqueArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  where: TeacherWhereUniqueInputSchema,
}).strict() ;

export const TeacherFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TeacherFindUniqueOrThrowArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  where: TeacherWhereUniqueInputSchema,
}).strict() ;

export const CompanyFindFirstArgsSchema: z.ZodType<Prisma.CompanyFindFirstArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompanyScalarFieldEnumSchema,CompanyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompanyFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CompanyFindFirstOrThrowArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompanyScalarFieldEnumSchema,CompanyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompanyFindManyArgsSchema: z.ZodType<Prisma.CompanyFindManyArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CompanyScalarFieldEnumSchema,CompanyScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CompanyAggregateArgsSchema: z.ZodType<Prisma.CompanyAggregateArgs> = z.object({
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithRelationInputSchema.array(),CompanyOrderByWithRelationInputSchema ]).optional(),
  cursor: CompanyWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CompanyGroupByArgsSchema: z.ZodType<Prisma.CompanyGroupByArgs> = z.object({
  where: CompanyWhereInputSchema.optional(),
  orderBy: z.union([ CompanyOrderByWithAggregationInputSchema.array(),CompanyOrderByWithAggregationInputSchema ]).optional(),
  by: CompanyScalarFieldEnumSchema.array(),
  having: CompanyScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CompanyFindUniqueArgsSchema: z.ZodType<Prisma.CompanyFindUniqueArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
}).strict() ;

export const CompanyFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CompanyFindUniqueOrThrowArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
}).strict() ;

export const AddressFindFirstArgsSchema: z.ZodType<Prisma.AddressFindFirstArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddressScalarFieldEnumSchema,AddressScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AddressFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AddressFindFirstOrThrowArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddressScalarFieldEnumSchema,AddressScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AddressFindManyArgsSchema: z.ZodType<Prisma.AddressFindManyArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AddressScalarFieldEnumSchema,AddressScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AddressAggregateArgsSchema: z.ZodType<Prisma.AddressAggregateArgs> = z.object({
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithRelationInputSchema.array(),AddressOrderByWithRelationInputSchema ]).optional(),
  cursor: AddressWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AddressGroupByArgsSchema: z.ZodType<Prisma.AddressGroupByArgs> = z.object({
  where: AddressWhereInputSchema.optional(),
  orderBy: z.union([ AddressOrderByWithAggregationInputSchema.array(),AddressOrderByWithAggregationInputSchema ]).optional(),
  by: AddressScalarFieldEnumSchema.array(),
  having: AddressScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AddressFindUniqueArgsSchema: z.ZodType<Prisma.AddressFindUniqueArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
}).strict() ;

export const AddressFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AddressFindUniqueOrThrowArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
}).strict() ;

export const OpeningHoursFindFirstArgsSchema: z.ZodType<Prisma.OpeningHoursFindFirstArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: OpeningHoursIncludeSchema.optional(),
  where: OpeningHoursWhereInputSchema.optional(),
  orderBy: z.union([ OpeningHoursOrderByWithRelationInputSchema.array(),OpeningHoursOrderByWithRelationInputSchema ]).optional(),
  cursor: OpeningHoursWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OpeningHoursScalarFieldEnumSchema,OpeningHoursScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OpeningHoursFindFirstOrThrowArgsSchema: z.ZodType<Prisma.OpeningHoursFindFirstOrThrowArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: OpeningHoursIncludeSchema.optional(),
  where: OpeningHoursWhereInputSchema.optional(),
  orderBy: z.union([ OpeningHoursOrderByWithRelationInputSchema.array(),OpeningHoursOrderByWithRelationInputSchema ]).optional(),
  cursor: OpeningHoursWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OpeningHoursScalarFieldEnumSchema,OpeningHoursScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OpeningHoursFindManyArgsSchema: z.ZodType<Prisma.OpeningHoursFindManyArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: OpeningHoursIncludeSchema.optional(),
  where: OpeningHoursWhereInputSchema.optional(),
  orderBy: z.union([ OpeningHoursOrderByWithRelationInputSchema.array(),OpeningHoursOrderByWithRelationInputSchema ]).optional(),
  cursor: OpeningHoursWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OpeningHoursScalarFieldEnumSchema,OpeningHoursScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const OpeningHoursAggregateArgsSchema: z.ZodType<Prisma.OpeningHoursAggregateArgs> = z.object({
  where: OpeningHoursWhereInputSchema.optional(),
  orderBy: z.union([ OpeningHoursOrderByWithRelationInputSchema.array(),OpeningHoursOrderByWithRelationInputSchema ]).optional(),
  cursor: OpeningHoursWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OpeningHoursGroupByArgsSchema: z.ZodType<Prisma.OpeningHoursGroupByArgs> = z.object({
  where: OpeningHoursWhereInputSchema.optional(),
  orderBy: z.union([ OpeningHoursOrderByWithAggregationInputSchema.array(),OpeningHoursOrderByWithAggregationInputSchema ]).optional(),
  by: OpeningHoursScalarFieldEnumSchema.array(),
  having: OpeningHoursScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const OpeningHoursFindUniqueArgsSchema: z.ZodType<Prisma.OpeningHoursFindUniqueArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: OpeningHoursIncludeSchema.optional(),
  where: OpeningHoursWhereUniqueInputSchema,
}).strict() ;

export const OpeningHoursFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.OpeningHoursFindUniqueOrThrowArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: OpeningHoursIncludeSchema.optional(),
  where: OpeningHoursWhereUniqueInputSchema,
}).strict() ;

export const ReviewFindFirstArgsSchema: z.ZodType<Prisma.ReviewFindFirstArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReviewScalarFieldEnumSchema,ReviewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReviewFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ReviewFindFirstOrThrowArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReviewScalarFieldEnumSchema,ReviewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReviewFindManyArgsSchema: z.ZodType<Prisma.ReviewFindManyArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ReviewScalarFieldEnumSchema,ReviewScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const ReviewAggregateArgsSchema: z.ZodType<Prisma.ReviewAggregateArgs> = z.object({
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithRelationInputSchema.array(),ReviewOrderByWithRelationInputSchema ]).optional(),
  cursor: ReviewWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReviewGroupByArgsSchema: z.ZodType<Prisma.ReviewGroupByArgs> = z.object({
  where: ReviewWhereInputSchema.optional(),
  orderBy: z.union([ ReviewOrderByWithAggregationInputSchema.array(),ReviewOrderByWithAggregationInputSchema ]).optional(),
  by: ReviewScalarFieldEnumSchema.array(),
  having: ReviewScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const ReviewFindUniqueArgsSchema: z.ZodType<Prisma.ReviewFindUniqueArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
}).strict() ;

export const ReviewFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.ReviewFindUniqueOrThrowArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
}).strict() ;

export const CourtFindFirstArgsSchema: z.ZodType<Prisma.CourtFindFirstArgs> = z.object({
  select: CourtSelectSchema.optional(),
  include: CourtIncludeSchema.optional(),
  where: CourtWhereInputSchema.optional(),
  orderBy: z.union([ CourtOrderByWithRelationInputSchema.array(),CourtOrderByWithRelationInputSchema ]).optional(),
  cursor: CourtWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CourtScalarFieldEnumSchema,CourtScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CourtFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CourtFindFirstOrThrowArgs> = z.object({
  select: CourtSelectSchema.optional(),
  include: CourtIncludeSchema.optional(),
  where: CourtWhereInputSchema.optional(),
  orderBy: z.union([ CourtOrderByWithRelationInputSchema.array(),CourtOrderByWithRelationInputSchema ]).optional(),
  cursor: CourtWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CourtScalarFieldEnumSchema,CourtScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CourtFindManyArgsSchema: z.ZodType<Prisma.CourtFindManyArgs> = z.object({
  select: CourtSelectSchema.optional(),
  include: CourtIncludeSchema.optional(),
  where: CourtWhereInputSchema.optional(),
  orderBy: z.union([ CourtOrderByWithRelationInputSchema.array(),CourtOrderByWithRelationInputSchema ]).optional(),
  cursor: CourtWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CourtScalarFieldEnumSchema,CourtScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const CourtAggregateArgsSchema: z.ZodType<Prisma.CourtAggregateArgs> = z.object({
  where: CourtWhereInputSchema.optional(),
  orderBy: z.union([ CourtOrderByWithRelationInputSchema.array(),CourtOrderByWithRelationInputSchema ]).optional(),
  cursor: CourtWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CourtGroupByArgsSchema: z.ZodType<Prisma.CourtGroupByArgs> = z.object({
  where: CourtWhereInputSchema.optional(),
  orderBy: z.union([ CourtOrderByWithAggregationInputSchema.array(),CourtOrderByWithAggregationInputSchema ]).optional(),
  by: CourtScalarFieldEnumSchema.array(),
  having: CourtScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const CourtFindUniqueArgsSchema: z.ZodType<Prisma.CourtFindUniqueArgs> = z.object({
  select: CourtSelectSchema.optional(),
  include: CourtIncludeSchema.optional(),
  where: CourtWhereUniqueInputSchema,
}).strict() ;

export const CourtFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.CourtFindUniqueOrThrowArgs> = z.object({
  select: CourtSelectSchema.optional(),
  include: CourtIncludeSchema.optional(),
  where: CourtWhereUniqueInputSchema,
}).strict() ;

export const BookingFindFirstArgsSchema: z.ZodType<Prisma.BookingFindFirstArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereInputSchema.optional(),
  orderBy: z.union([ BookingOrderByWithRelationInputSchema.array(),BookingOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingScalarFieldEnumSchema,BookingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BookingFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BookingFindFirstOrThrowArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereInputSchema.optional(),
  orderBy: z.union([ BookingOrderByWithRelationInputSchema.array(),BookingOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingScalarFieldEnumSchema,BookingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BookingFindManyArgsSchema: z.ZodType<Prisma.BookingFindManyArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereInputSchema.optional(),
  orderBy: z.union([ BookingOrderByWithRelationInputSchema.array(),BookingOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingScalarFieldEnumSchema,BookingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const BookingAggregateArgsSchema: z.ZodType<Prisma.BookingAggregateArgs> = z.object({
  where: BookingWhereInputSchema.optional(),
  orderBy: z.union([ BookingOrderByWithRelationInputSchema.array(),BookingOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BookingGroupByArgsSchema: z.ZodType<Prisma.BookingGroupByArgs> = z.object({
  where: BookingWhereInputSchema.optional(),
  orderBy: z.union([ BookingOrderByWithAggregationInputSchema.array(),BookingOrderByWithAggregationInputSchema ]).optional(),
  by: BookingScalarFieldEnumSchema.array(),
  having: BookingScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const BookingFindUniqueArgsSchema: z.ZodType<Prisma.BookingFindUniqueArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereUniqueInputSchema,
}).strict() ;

export const BookingFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.BookingFindUniqueOrThrowArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereUniqueInputSchema,
}).strict() ;

export const InviteFindFirstArgsSchema: z.ZodType<Prisma.InviteFindFirstArgs> = z.object({
  select: InviteSelectSchema.optional(),
  include: InviteIncludeSchema.optional(),
  where: InviteWhereInputSchema.optional(),
  orderBy: z.union([ InviteOrderByWithRelationInputSchema.array(),InviteOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteScalarFieldEnumSchema,InviteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteFindFirstOrThrowArgsSchema: z.ZodType<Prisma.InviteFindFirstOrThrowArgs> = z.object({
  select: InviteSelectSchema.optional(),
  include: InviteIncludeSchema.optional(),
  where: InviteWhereInputSchema.optional(),
  orderBy: z.union([ InviteOrderByWithRelationInputSchema.array(),InviteOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteScalarFieldEnumSchema,InviteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteFindManyArgsSchema: z.ZodType<Prisma.InviteFindManyArgs> = z.object({
  select: InviteSelectSchema.optional(),
  include: InviteIncludeSchema.optional(),
  where: InviteWhereInputSchema.optional(),
  orderBy: z.union([ InviteOrderByWithRelationInputSchema.array(),InviteOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InviteScalarFieldEnumSchema,InviteScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const InviteAggregateArgsSchema: z.ZodType<Prisma.InviteAggregateArgs> = z.object({
  where: InviteWhereInputSchema.optional(),
  orderBy: z.union([ InviteOrderByWithRelationInputSchema.array(),InviteOrderByWithRelationInputSchema ]).optional(),
  cursor: InviteWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InviteGroupByArgsSchema: z.ZodType<Prisma.InviteGroupByArgs> = z.object({
  where: InviteWhereInputSchema.optional(),
  orderBy: z.union([ InviteOrderByWithAggregationInputSchema.array(),InviteOrderByWithAggregationInputSchema ]).optional(),
  by: InviteScalarFieldEnumSchema.array(),
  having: InviteScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const InviteFindUniqueArgsSchema: z.ZodType<Prisma.InviteFindUniqueArgs> = z.object({
  select: InviteSelectSchema.optional(),
  include: InviteIncludeSchema.optional(),
  where: InviteWhereUniqueInputSchema,
}).strict() ;

export const InviteFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.InviteFindUniqueOrThrowArgs> = z.object({
  select: InviteSelectSchema.optional(),
  include: InviteIncludeSchema.optional(),
  where: InviteWhereUniqueInputSchema,
}).strict() ;

export const AvailabilityFindFirstArgsSchema: z.ZodType<Prisma.AvailabilityFindFirstArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationInputSchema.array(),AvailabilityOrderByWithRelationInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AvailabilityScalarFieldEnumSchema,AvailabilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AvailabilityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.AvailabilityFindFirstOrThrowArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationInputSchema.array(),AvailabilityOrderByWithRelationInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AvailabilityScalarFieldEnumSchema,AvailabilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AvailabilityFindManyArgsSchema: z.ZodType<Prisma.AvailabilityFindManyArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationInputSchema.array(),AvailabilityOrderByWithRelationInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AvailabilityScalarFieldEnumSchema,AvailabilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const AvailabilityAggregateArgsSchema: z.ZodType<Prisma.AvailabilityAggregateArgs> = z.object({
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithRelationInputSchema.array(),AvailabilityOrderByWithRelationInputSchema ]).optional(),
  cursor: AvailabilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AvailabilityGroupByArgsSchema: z.ZodType<Prisma.AvailabilityGroupByArgs> = z.object({
  where: AvailabilityWhereInputSchema.optional(),
  orderBy: z.union([ AvailabilityOrderByWithAggregationInputSchema.array(),AvailabilityOrderByWithAggregationInputSchema ]).optional(),
  by: AvailabilityScalarFieldEnumSchema.array(),
  having: AvailabilityScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const AvailabilityFindUniqueArgsSchema: z.ZodType<Prisma.AvailabilityFindUniqueArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereUniqueInputSchema,
}).strict() ;

export const AvailabilityFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.AvailabilityFindUniqueOrThrowArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereUniqueInputSchema,
}).strict() ;

export const NotificationFindFirstArgsSchema: z.ZodType<Prisma.NotificationFindFirstArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationFindFirstOrThrowArgsSchema: z.ZodType<Prisma.NotificationFindFirstOrThrowArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationFindManyArgsSchema: z.ZodType<Prisma.NotificationFindManyArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ NotificationScalarFieldEnumSchema,NotificationScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const NotificationAggregateArgsSchema: z.ZodType<Prisma.NotificationAggregateArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithRelationInputSchema.array(),NotificationOrderByWithRelationInputSchema ]).optional(),
  cursor: NotificationWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationGroupByArgsSchema: z.ZodType<Prisma.NotificationGroupByArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
  orderBy: z.union([ NotificationOrderByWithAggregationInputSchema.array(),NotificationOrderByWithAggregationInputSchema ]).optional(),
  by: NotificationScalarFieldEnumSchema.array(),
  having: NotificationScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const NotificationFindUniqueArgsSchema: z.ZodType<Prisma.NotificationFindUniqueArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.NotificationFindUniqueOrThrowArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const HistoryFindFirstArgsSchema: z.ZodType<Prisma.HistoryFindFirstArgs> = z.object({
  select: HistorySelectSchema.optional(),
  include: HistoryIncludeSchema.optional(),
  where: HistoryWhereInputSchema.optional(),
  orderBy: z.union([ HistoryOrderByWithRelationInputSchema.array(),HistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: HistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HistoryScalarFieldEnumSchema,HistoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HistoryFindFirstOrThrowArgsSchema: z.ZodType<Prisma.HistoryFindFirstOrThrowArgs> = z.object({
  select: HistorySelectSchema.optional(),
  include: HistoryIncludeSchema.optional(),
  where: HistoryWhereInputSchema.optional(),
  orderBy: z.union([ HistoryOrderByWithRelationInputSchema.array(),HistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: HistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HistoryScalarFieldEnumSchema,HistoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HistoryFindManyArgsSchema: z.ZodType<Prisma.HistoryFindManyArgs> = z.object({
  select: HistorySelectSchema.optional(),
  include: HistoryIncludeSchema.optional(),
  where: HistoryWhereInputSchema.optional(),
  orderBy: z.union([ HistoryOrderByWithRelationInputSchema.array(),HistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: HistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ HistoryScalarFieldEnumSchema,HistoryScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const HistoryAggregateArgsSchema: z.ZodType<Prisma.HistoryAggregateArgs> = z.object({
  where: HistoryWhereInputSchema.optional(),
  orderBy: z.union([ HistoryOrderByWithRelationInputSchema.array(),HistoryOrderByWithRelationInputSchema ]).optional(),
  cursor: HistoryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HistoryGroupByArgsSchema: z.ZodType<Prisma.HistoryGroupByArgs> = z.object({
  where: HistoryWhereInputSchema.optional(),
  orderBy: z.union([ HistoryOrderByWithAggregationInputSchema.array(),HistoryOrderByWithAggregationInputSchema ]).optional(),
  by: HistoryScalarFieldEnumSchema.array(),
  having: HistoryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const HistoryFindUniqueArgsSchema: z.ZodType<Prisma.HistoryFindUniqueArgs> = z.object({
  select: HistorySelectSchema.optional(),
  include: HistoryIncludeSchema.optional(),
  where: HistoryWhereUniqueInputSchema,
}).strict() ;

export const HistoryFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.HistoryFindUniqueOrThrowArgs> = z.object({
  select: HistorySelectSchema.optional(),
  include: HistoryIncludeSchema.optional(),
  where: HistoryWhereUniqueInputSchema,
}).strict() ;

export const TokenFindFirstArgsSchema: z.ZodType<Prisma.TokenFindFirstArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  where: TokenWhereInputSchema.optional(),
  orderBy: z.union([ TokenOrderByWithRelationInputSchema.array(),TokenOrderByWithRelationInputSchema ]).optional(),
  cursor: TokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TokenScalarFieldEnumSchema,TokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TokenFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TokenFindFirstOrThrowArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  where: TokenWhereInputSchema.optional(),
  orderBy: z.union([ TokenOrderByWithRelationInputSchema.array(),TokenOrderByWithRelationInputSchema ]).optional(),
  cursor: TokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TokenScalarFieldEnumSchema,TokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TokenFindManyArgsSchema: z.ZodType<Prisma.TokenFindManyArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  where: TokenWhereInputSchema.optional(),
  orderBy: z.union([ TokenOrderByWithRelationInputSchema.array(),TokenOrderByWithRelationInputSchema ]).optional(),
  cursor: TokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TokenScalarFieldEnumSchema,TokenScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export const TokenAggregateArgsSchema: z.ZodType<Prisma.TokenAggregateArgs> = z.object({
  where: TokenWhereInputSchema.optional(),
  orderBy: z.union([ TokenOrderByWithRelationInputSchema.array(),TokenOrderByWithRelationInputSchema ]).optional(),
  cursor: TokenWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TokenGroupByArgsSchema: z.ZodType<Prisma.TokenGroupByArgs> = z.object({
  where: TokenWhereInputSchema.optional(),
  orderBy: z.union([ TokenOrderByWithAggregationInputSchema.array(),TokenOrderByWithAggregationInputSchema ]).optional(),
  by: TokenScalarFieldEnumSchema.array(),
  having: TokenScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export const TokenFindUniqueArgsSchema: z.ZodType<Prisma.TokenFindUniqueArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  where: TokenWhereUniqueInputSchema,
}).strict() ;

export const TokenFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TokenFindUniqueOrThrowArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  where: TokenWhereUniqueInputSchema,
}).strict() ;

export const ProfileCreateArgsSchema: z.ZodType<Prisma.ProfileCreateArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  data: z.union([ ProfileCreateInputSchema,ProfileUncheckedCreateInputSchema ]),
}).strict() ;

export const ProfileUpsertArgsSchema: z.ZodType<Prisma.ProfileUpsertArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
  create: z.union([ ProfileCreateInputSchema,ProfileUncheckedCreateInputSchema ]),
  update: z.union([ ProfileUpdateInputSchema,ProfileUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProfileCreateManyArgsSchema: z.ZodType<Prisma.ProfileCreateManyArgs> = z.object({
  data: z.union([ ProfileCreateManyInputSchema,ProfileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProfileCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProfileCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProfileCreateManyInputSchema,ProfileCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProfileDeleteArgsSchema: z.ZodType<Prisma.ProfileDeleteArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  where: ProfileWhereUniqueInputSchema,
}).strict() ;

export const ProfileUpdateArgsSchema: z.ZodType<Prisma.ProfileUpdateArgs> = z.object({
  select: ProfileSelectSchema.optional(),
  include: ProfileIncludeSchema.optional(),
  data: z.union([ ProfileUpdateInputSchema,ProfileUncheckedUpdateInputSchema ]),
  where: ProfileWhereUniqueInputSchema,
}).strict() ;

export const ProfileUpdateManyArgsSchema: z.ZodType<Prisma.ProfileUpdateManyArgs> = z.object({
  data: z.union([ ProfileUpdateManyMutationInputSchema,ProfileUncheckedUpdateManyInputSchema ]),
  where: ProfileWhereInputSchema.optional(),
}).strict() ;

export const ProfileDeleteManyArgsSchema: z.ZodType<Prisma.ProfileDeleteManyArgs> = z.object({
  where: ProfileWhereInputSchema.optional(),
}).strict() ;

export const EventCreateArgsSchema: z.ZodType<Prisma.EventCreateArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  data: z.union([ EventCreateInputSchema,EventUncheckedCreateInputSchema ]),
}).strict() ;

export const EventUpsertArgsSchema: z.ZodType<Prisma.EventUpsertArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
  create: z.union([ EventCreateInputSchema,EventUncheckedCreateInputSchema ]),
  update: z.union([ EventUpdateInputSchema,EventUncheckedUpdateInputSchema ]),
}).strict() ;

export const EventCreateManyArgsSchema: z.ZodType<Prisma.EventCreateManyArgs> = z.object({
  data: z.union([ EventCreateManyInputSchema,EventCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EventCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EventCreateManyAndReturnArgs> = z.object({
  data: z.union([ EventCreateManyInputSchema,EventCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EventDeleteArgsSchema: z.ZodType<Prisma.EventDeleteArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventUpdateArgsSchema: z.ZodType<Prisma.EventUpdateArgs> = z.object({
  select: EventSelectSchema.optional(),
  include: EventIncludeSchema.optional(),
  data: z.union([ EventUpdateInputSchema,EventUncheckedUpdateInputSchema ]),
  where: EventWhereUniqueInputSchema,
}).strict() ;

export const EventUpdateManyArgsSchema: z.ZodType<Prisma.EventUpdateManyArgs> = z.object({
  data: z.union([ EventUpdateManyMutationInputSchema,EventUncheckedUpdateManyInputSchema ]),
  where: EventWhereInputSchema.optional(),
}).strict() ;

export const EventDeleteManyArgsSchema: z.ZodType<Prisma.EventDeleteManyArgs> = z.object({
  where: EventWhereInputSchema.optional(),
}).strict() ;

export const PrizeCreateArgsSchema: z.ZodType<Prisma.PrizeCreateArgs> = z.object({
  select: PrizeSelectSchema.optional(),
  include: PrizeIncludeSchema.optional(),
  data: z.union([ PrizeCreateInputSchema,PrizeUncheckedCreateInputSchema ]),
}).strict() ;

export const PrizeUpsertArgsSchema: z.ZodType<Prisma.PrizeUpsertArgs> = z.object({
  select: PrizeSelectSchema.optional(),
  include: PrizeIncludeSchema.optional(),
  where: PrizeWhereUniqueInputSchema,
  create: z.union([ PrizeCreateInputSchema,PrizeUncheckedCreateInputSchema ]),
  update: z.union([ PrizeUpdateInputSchema,PrizeUncheckedUpdateInputSchema ]),
}).strict() ;

export const PrizeCreateManyArgsSchema: z.ZodType<Prisma.PrizeCreateManyArgs> = z.object({
  data: z.union([ PrizeCreateManyInputSchema,PrizeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PrizeCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PrizeCreateManyAndReturnArgs> = z.object({
  data: z.union([ PrizeCreateManyInputSchema,PrizeCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const PrizeDeleteArgsSchema: z.ZodType<Prisma.PrizeDeleteArgs> = z.object({
  select: PrizeSelectSchema.optional(),
  include: PrizeIncludeSchema.optional(),
  where: PrizeWhereUniqueInputSchema,
}).strict() ;

export const PrizeUpdateArgsSchema: z.ZodType<Prisma.PrizeUpdateArgs> = z.object({
  select: PrizeSelectSchema.optional(),
  include: PrizeIncludeSchema.optional(),
  data: z.union([ PrizeUpdateInputSchema,PrizeUncheckedUpdateInputSchema ]),
  where: PrizeWhereUniqueInputSchema,
}).strict() ;

export const PrizeUpdateManyArgsSchema: z.ZodType<Prisma.PrizeUpdateManyArgs> = z.object({
  data: z.union([ PrizeUpdateManyMutationInputSchema,PrizeUncheckedUpdateManyInputSchema ]),
  where: PrizeWhereInputSchema.optional(),
}).strict() ;

export const PrizeDeleteManyArgsSchema: z.ZodType<Prisma.PrizeDeleteManyArgs> = z.object({
  where: PrizeWhereInputSchema.optional(),
}).strict() ;

export const EventRuleCreateArgsSchema: z.ZodType<Prisma.EventRuleCreateArgs> = z.object({
  select: EventRuleSelectSchema.optional(),
  include: EventRuleIncludeSchema.optional(),
  data: z.union([ EventRuleCreateInputSchema,EventRuleUncheckedCreateInputSchema ]),
}).strict() ;

export const EventRuleUpsertArgsSchema: z.ZodType<Prisma.EventRuleUpsertArgs> = z.object({
  select: EventRuleSelectSchema.optional(),
  include: EventRuleIncludeSchema.optional(),
  where: EventRuleWhereUniqueInputSchema,
  create: z.union([ EventRuleCreateInputSchema,EventRuleUncheckedCreateInputSchema ]),
  update: z.union([ EventRuleUpdateInputSchema,EventRuleUncheckedUpdateInputSchema ]),
}).strict() ;

export const EventRuleCreateManyArgsSchema: z.ZodType<Prisma.EventRuleCreateManyArgs> = z.object({
  data: z.union([ EventRuleCreateManyInputSchema,EventRuleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EventRuleCreateManyAndReturnArgsSchema: z.ZodType<Prisma.EventRuleCreateManyAndReturnArgs> = z.object({
  data: z.union([ EventRuleCreateManyInputSchema,EventRuleCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const EventRuleDeleteArgsSchema: z.ZodType<Prisma.EventRuleDeleteArgs> = z.object({
  select: EventRuleSelectSchema.optional(),
  include: EventRuleIncludeSchema.optional(),
  where: EventRuleWhereUniqueInputSchema,
}).strict() ;

export const EventRuleUpdateArgsSchema: z.ZodType<Prisma.EventRuleUpdateArgs> = z.object({
  select: EventRuleSelectSchema.optional(),
  include: EventRuleIncludeSchema.optional(),
  data: z.union([ EventRuleUpdateInputSchema,EventRuleUncheckedUpdateInputSchema ]),
  where: EventRuleWhereUniqueInputSchema,
}).strict() ;

export const EventRuleUpdateManyArgsSchema: z.ZodType<Prisma.EventRuleUpdateManyArgs> = z.object({
  data: z.union([ EventRuleUpdateManyMutationInputSchema,EventRuleUncheckedUpdateManyInputSchema ]),
  where: EventRuleWhereInputSchema.optional(),
}).strict() ;

export const EventRuleDeleteManyArgsSchema: z.ZodType<Prisma.EventRuleDeleteManyArgs> = z.object({
  where: EventRuleWhereInputSchema.optional(),
}).strict() ;

export const ProfileEventParticipationCreateArgsSchema: z.ZodType<Prisma.ProfileEventParticipationCreateArgs> = z.object({
  select: ProfileEventParticipationSelectSchema.optional(),
  include: ProfileEventParticipationIncludeSchema.optional(),
  data: z.union([ ProfileEventParticipationCreateInputSchema,ProfileEventParticipationUncheckedCreateInputSchema ]),
}).strict() ;

export const ProfileEventParticipationUpsertArgsSchema: z.ZodType<Prisma.ProfileEventParticipationUpsertArgs> = z.object({
  select: ProfileEventParticipationSelectSchema.optional(),
  include: ProfileEventParticipationIncludeSchema.optional(),
  where: ProfileEventParticipationWhereUniqueInputSchema,
  create: z.union([ ProfileEventParticipationCreateInputSchema,ProfileEventParticipationUncheckedCreateInputSchema ]),
  update: z.union([ ProfileEventParticipationUpdateInputSchema,ProfileEventParticipationUncheckedUpdateInputSchema ]),
}).strict() ;

export const ProfileEventParticipationCreateManyArgsSchema: z.ZodType<Prisma.ProfileEventParticipationCreateManyArgs> = z.object({
  data: z.union([ ProfileEventParticipationCreateManyInputSchema,ProfileEventParticipationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProfileEventParticipationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProfileEventParticipationCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProfileEventParticipationCreateManyInputSchema,ProfileEventParticipationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ProfileEventParticipationDeleteArgsSchema: z.ZodType<Prisma.ProfileEventParticipationDeleteArgs> = z.object({
  select: ProfileEventParticipationSelectSchema.optional(),
  include: ProfileEventParticipationIncludeSchema.optional(),
  where: ProfileEventParticipationWhereUniqueInputSchema,
}).strict() ;

export const ProfileEventParticipationUpdateArgsSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateArgs> = z.object({
  select: ProfileEventParticipationSelectSchema.optional(),
  include: ProfileEventParticipationIncludeSchema.optional(),
  data: z.union([ ProfileEventParticipationUpdateInputSchema,ProfileEventParticipationUncheckedUpdateInputSchema ]),
  where: ProfileEventParticipationWhereUniqueInputSchema,
}).strict() ;

export const ProfileEventParticipationUpdateManyArgsSchema: z.ZodType<Prisma.ProfileEventParticipationUpdateManyArgs> = z.object({
  data: z.union([ ProfileEventParticipationUpdateManyMutationInputSchema,ProfileEventParticipationUncheckedUpdateManyInputSchema ]),
  where: ProfileEventParticipationWhereInputSchema.optional(),
}).strict() ;

export const ProfileEventParticipationDeleteManyArgsSchema: z.ZodType<Prisma.ProfileEventParticipationDeleteManyArgs> = z.object({
  where: ProfileEventParticipationWhereInputSchema.optional(),
}).strict() ;

export const UserCreateArgsSchema: z.ZodType<Prisma.UserCreateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
}).strict() ;

export const UserUpsertArgsSchema: z.ZodType<Prisma.UserUpsertArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
  create: z.union([ UserCreateInputSchema,UserUncheckedCreateInputSchema ]),
  update: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
}).strict() ;

export const UserCreateManyArgsSchema: z.ZodType<Prisma.UserCreateManyArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.UserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserCreateManyInputSchema,UserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const UserDeleteArgsSchema: z.ZodType<Prisma.UserDeleteArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateArgsSchema: z.ZodType<Prisma.UserUpdateArgs> = z.object({
  select: UserSelectSchema.optional(),
  include: UserIncludeSchema.optional(),
  data: z.union([ UserUpdateInputSchema,UserUncheckedUpdateInputSchema ]),
  where: UserWhereUniqueInputSchema,
}).strict() ;

export const UserUpdateManyArgsSchema: z.ZodType<Prisma.UserUpdateManyArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const UserDeleteManyArgsSchema: z.ZodType<Prisma.UserDeleteManyArgs> = z.object({
  where: UserWhereInputSchema.optional(),
}).strict() ;

export const TrophyCreateArgsSchema: z.ZodType<Prisma.TrophyCreateArgs> = z.object({
  select: TrophySelectSchema.optional(),
  include: TrophyIncludeSchema.optional(),
  data: z.union([ TrophyCreateInputSchema,TrophyUncheckedCreateInputSchema ]),
}).strict() ;

export const TrophyUpsertArgsSchema: z.ZodType<Prisma.TrophyUpsertArgs> = z.object({
  select: TrophySelectSchema.optional(),
  include: TrophyIncludeSchema.optional(),
  where: TrophyWhereUniqueInputSchema,
  create: z.union([ TrophyCreateInputSchema,TrophyUncheckedCreateInputSchema ]),
  update: z.union([ TrophyUpdateInputSchema,TrophyUncheckedUpdateInputSchema ]),
}).strict() ;

export const TrophyCreateManyArgsSchema: z.ZodType<Prisma.TrophyCreateManyArgs> = z.object({
  data: z.union([ TrophyCreateManyInputSchema,TrophyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TrophyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TrophyCreateManyAndReturnArgs> = z.object({
  data: z.union([ TrophyCreateManyInputSchema,TrophyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TrophyDeleteArgsSchema: z.ZodType<Prisma.TrophyDeleteArgs> = z.object({
  select: TrophySelectSchema.optional(),
  include: TrophyIncludeSchema.optional(),
  where: TrophyWhereUniqueInputSchema,
}).strict() ;

export const TrophyUpdateArgsSchema: z.ZodType<Prisma.TrophyUpdateArgs> = z.object({
  select: TrophySelectSchema.optional(),
  include: TrophyIncludeSchema.optional(),
  data: z.union([ TrophyUpdateInputSchema,TrophyUncheckedUpdateInputSchema ]),
  where: TrophyWhereUniqueInputSchema,
}).strict() ;

export const TrophyUpdateManyArgsSchema: z.ZodType<Prisma.TrophyUpdateManyArgs> = z.object({
  data: z.union([ TrophyUpdateManyMutationInputSchema,TrophyUncheckedUpdateManyInputSchema ]),
  where: TrophyWhereInputSchema.optional(),
}).strict() ;

export const TrophyDeleteManyArgsSchema: z.ZodType<Prisma.TrophyDeleteManyArgs> = z.object({
  where: TrophyWhereInputSchema.optional(),
}).strict() ;

export const CityCreateArgsSchema: z.ZodType<Prisma.CityCreateArgs> = z.object({
  select: CitySelectSchema.optional(),
  include: CityIncludeSchema.optional(),
  data: z.union([ CityCreateInputSchema,CityUncheckedCreateInputSchema ]),
}).strict() ;

export const CityUpsertArgsSchema: z.ZodType<Prisma.CityUpsertArgs> = z.object({
  select: CitySelectSchema.optional(),
  include: CityIncludeSchema.optional(),
  where: CityWhereUniqueInputSchema,
  create: z.union([ CityCreateInputSchema,CityUncheckedCreateInputSchema ]),
  update: z.union([ CityUpdateInputSchema,CityUncheckedUpdateInputSchema ]),
}).strict() ;

export const CityCreateManyArgsSchema: z.ZodType<Prisma.CityCreateManyArgs> = z.object({
  data: z.union([ CityCreateManyInputSchema,CityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CityCreateManyAndReturnArgs> = z.object({
  data: z.union([ CityCreateManyInputSchema,CityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CityDeleteArgsSchema: z.ZodType<Prisma.CityDeleteArgs> = z.object({
  select: CitySelectSchema.optional(),
  include: CityIncludeSchema.optional(),
  where: CityWhereUniqueInputSchema,
}).strict() ;

export const CityUpdateArgsSchema: z.ZodType<Prisma.CityUpdateArgs> = z.object({
  select: CitySelectSchema.optional(),
  include: CityIncludeSchema.optional(),
  data: z.union([ CityUpdateInputSchema,CityUncheckedUpdateInputSchema ]),
  where: CityWhereUniqueInputSchema,
}).strict() ;

export const CityUpdateManyArgsSchema: z.ZodType<Prisma.CityUpdateManyArgs> = z.object({
  data: z.union([ CityUpdateManyMutationInputSchema,CityUncheckedUpdateManyInputSchema ]),
  where: CityWhereInputSchema.optional(),
}).strict() ;

export const CityDeleteManyArgsSchema: z.ZodType<Prisma.CityDeleteManyArgs> = z.object({
  where: CityWhereInputSchema.optional(),
}).strict() ;

export const CompanyTeacherCreateArgsSchema: z.ZodType<Prisma.CompanyTeacherCreateArgs> = z.object({
  select: CompanyTeacherSelectSchema.optional(),
  include: CompanyTeacherIncludeSchema.optional(),
  data: z.union([ CompanyTeacherCreateInputSchema,CompanyTeacherUncheckedCreateInputSchema ]),
}).strict() ;

export const CompanyTeacherUpsertArgsSchema: z.ZodType<Prisma.CompanyTeacherUpsertArgs> = z.object({
  select: CompanyTeacherSelectSchema.optional(),
  include: CompanyTeacherIncludeSchema.optional(),
  where: CompanyTeacherWhereUniqueInputSchema,
  create: z.union([ CompanyTeacherCreateInputSchema,CompanyTeacherUncheckedCreateInputSchema ]),
  update: z.union([ CompanyTeacherUpdateInputSchema,CompanyTeacherUncheckedUpdateInputSchema ]),
}).strict() ;

export const CompanyTeacherCreateManyArgsSchema: z.ZodType<Prisma.CompanyTeacherCreateManyArgs> = z.object({
  data: z.union([ CompanyTeacherCreateManyInputSchema,CompanyTeacherCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CompanyTeacherCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CompanyTeacherCreateManyAndReturnArgs> = z.object({
  data: z.union([ CompanyTeacherCreateManyInputSchema,CompanyTeacherCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CompanyTeacherDeleteArgsSchema: z.ZodType<Prisma.CompanyTeacherDeleteArgs> = z.object({
  select: CompanyTeacherSelectSchema.optional(),
  include: CompanyTeacherIncludeSchema.optional(),
  where: CompanyTeacherWhereUniqueInputSchema,
}).strict() ;

export const CompanyTeacherUpdateArgsSchema: z.ZodType<Prisma.CompanyTeacherUpdateArgs> = z.object({
  select: CompanyTeacherSelectSchema.optional(),
  include: CompanyTeacherIncludeSchema.optional(),
  data: z.union([ CompanyTeacherUpdateInputSchema,CompanyTeacherUncheckedUpdateInputSchema ]),
  where: CompanyTeacherWhereUniqueInputSchema,
}).strict() ;

export const CompanyTeacherUpdateManyArgsSchema: z.ZodType<Prisma.CompanyTeacherUpdateManyArgs> = z.object({
  data: z.union([ CompanyTeacherUpdateManyMutationInputSchema,CompanyTeacherUncheckedUpdateManyInputSchema ]),
  where: CompanyTeacherWhereInputSchema.optional(),
}).strict() ;

export const CompanyTeacherDeleteManyArgsSchema: z.ZodType<Prisma.CompanyTeacherDeleteManyArgs> = z.object({
  where: CompanyTeacherWhereInputSchema.optional(),
}).strict() ;

export const TeacherCreateArgsSchema: z.ZodType<Prisma.TeacherCreateArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  data: z.union([ TeacherCreateInputSchema,TeacherUncheckedCreateInputSchema ]),
}).strict() ;

export const TeacherUpsertArgsSchema: z.ZodType<Prisma.TeacherUpsertArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  where: TeacherWhereUniqueInputSchema,
  create: z.union([ TeacherCreateInputSchema,TeacherUncheckedCreateInputSchema ]),
  update: z.union([ TeacherUpdateInputSchema,TeacherUncheckedUpdateInputSchema ]),
}).strict() ;

export const TeacherCreateManyArgsSchema: z.ZodType<Prisma.TeacherCreateManyArgs> = z.object({
  data: z.union([ TeacherCreateManyInputSchema,TeacherCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeacherCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TeacherCreateManyAndReturnArgs> = z.object({
  data: z.union([ TeacherCreateManyInputSchema,TeacherCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TeacherDeleteArgsSchema: z.ZodType<Prisma.TeacherDeleteArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  where: TeacherWhereUniqueInputSchema,
}).strict() ;

export const TeacherUpdateArgsSchema: z.ZodType<Prisma.TeacherUpdateArgs> = z.object({
  select: TeacherSelectSchema.optional(),
  include: TeacherIncludeSchema.optional(),
  data: z.union([ TeacherUpdateInputSchema,TeacherUncheckedUpdateInputSchema ]),
  where: TeacherWhereUniqueInputSchema,
}).strict() ;

export const TeacherUpdateManyArgsSchema: z.ZodType<Prisma.TeacherUpdateManyArgs> = z.object({
  data: z.union([ TeacherUpdateManyMutationInputSchema,TeacherUncheckedUpdateManyInputSchema ]),
  where: TeacherWhereInputSchema.optional(),
}).strict() ;

export const TeacherDeleteManyArgsSchema: z.ZodType<Prisma.TeacherDeleteManyArgs> = z.object({
  where: TeacherWhereInputSchema.optional(),
}).strict() ;

export const CompanyCreateArgsSchema: z.ZodType<Prisma.CompanyCreateArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  data: z.union([ CompanyCreateInputSchema,CompanyUncheckedCreateInputSchema ]),
}).strict() ;

export const CompanyUpsertArgsSchema: z.ZodType<Prisma.CompanyUpsertArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
  create: z.union([ CompanyCreateInputSchema,CompanyUncheckedCreateInputSchema ]),
  update: z.union([ CompanyUpdateInputSchema,CompanyUncheckedUpdateInputSchema ]),
}).strict() ;

export const CompanyCreateManyArgsSchema: z.ZodType<Prisma.CompanyCreateManyArgs> = z.object({
  data: z.union([ CompanyCreateManyInputSchema,CompanyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CompanyCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CompanyCreateManyAndReturnArgs> = z.object({
  data: z.union([ CompanyCreateManyInputSchema,CompanyCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CompanyDeleteArgsSchema: z.ZodType<Prisma.CompanyDeleteArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  where: CompanyWhereUniqueInputSchema,
}).strict() ;

export const CompanyUpdateArgsSchema: z.ZodType<Prisma.CompanyUpdateArgs> = z.object({
  select: CompanySelectSchema.optional(),
  include: CompanyIncludeSchema.optional(),
  data: z.union([ CompanyUpdateInputSchema,CompanyUncheckedUpdateInputSchema ]),
  where: CompanyWhereUniqueInputSchema,
}).strict() ;

export const CompanyUpdateManyArgsSchema: z.ZodType<Prisma.CompanyUpdateManyArgs> = z.object({
  data: z.union([ CompanyUpdateManyMutationInputSchema,CompanyUncheckedUpdateManyInputSchema ]),
  where: CompanyWhereInputSchema.optional(),
}).strict() ;

export const CompanyDeleteManyArgsSchema: z.ZodType<Prisma.CompanyDeleteManyArgs> = z.object({
  where: CompanyWhereInputSchema.optional(),
}).strict() ;

export const AddressCreateArgsSchema: z.ZodType<Prisma.AddressCreateArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  data: z.union([ AddressCreateInputSchema,AddressUncheckedCreateInputSchema ]),
}).strict() ;

export const AddressUpsertArgsSchema: z.ZodType<Prisma.AddressUpsertArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
  create: z.union([ AddressCreateInputSchema,AddressUncheckedCreateInputSchema ]),
  update: z.union([ AddressUpdateInputSchema,AddressUncheckedUpdateInputSchema ]),
}).strict() ;

export const AddressCreateManyArgsSchema: z.ZodType<Prisma.AddressCreateManyArgs> = z.object({
  data: z.union([ AddressCreateManyInputSchema,AddressCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AddressCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AddressCreateManyAndReturnArgs> = z.object({
  data: z.union([ AddressCreateManyInputSchema,AddressCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AddressDeleteArgsSchema: z.ZodType<Prisma.AddressDeleteArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  where: AddressWhereUniqueInputSchema,
}).strict() ;

export const AddressUpdateArgsSchema: z.ZodType<Prisma.AddressUpdateArgs> = z.object({
  select: AddressSelectSchema.optional(),
  include: AddressIncludeSchema.optional(),
  data: z.union([ AddressUpdateInputSchema,AddressUncheckedUpdateInputSchema ]),
  where: AddressWhereUniqueInputSchema,
}).strict() ;

export const AddressUpdateManyArgsSchema: z.ZodType<Prisma.AddressUpdateManyArgs> = z.object({
  data: z.union([ AddressUpdateManyMutationInputSchema,AddressUncheckedUpdateManyInputSchema ]),
  where: AddressWhereInputSchema.optional(),
}).strict() ;

export const AddressDeleteManyArgsSchema: z.ZodType<Prisma.AddressDeleteManyArgs> = z.object({
  where: AddressWhereInputSchema.optional(),
}).strict() ;

export const OpeningHoursCreateArgsSchema: z.ZodType<Prisma.OpeningHoursCreateArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: OpeningHoursIncludeSchema.optional(),
  data: z.union([ OpeningHoursCreateInputSchema,OpeningHoursUncheckedCreateInputSchema ]),
}).strict() ;

export const OpeningHoursUpsertArgsSchema: z.ZodType<Prisma.OpeningHoursUpsertArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: OpeningHoursIncludeSchema.optional(),
  where: OpeningHoursWhereUniqueInputSchema,
  create: z.union([ OpeningHoursCreateInputSchema,OpeningHoursUncheckedCreateInputSchema ]),
  update: z.union([ OpeningHoursUpdateInputSchema,OpeningHoursUncheckedUpdateInputSchema ]),
}).strict() ;

export const OpeningHoursCreateManyArgsSchema: z.ZodType<Prisma.OpeningHoursCreateManyArgs> = z.object({
  data: z.union([ OpeningHoursCreateManyInputSchema,OpeningHoursCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const OpeningHoursCreateManyAndReturnArgsSchema: z.ZodType<Prisma.OpeningHoursCreateManyAndReturnArgs> = z.object({
  data: z.union([ OpeningHoursCreateManyInputSchema,OpeningHoursCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const OpeningHoursDeleteArgsSchema: z.ZodType<Prisma.OpeningHoursDeleteArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: OpeningHoursIncludeSchema.optional(),
  where: OpeningHoursWhereUniqueInputSchema,
}).strict() ;

export const OpeningHoursUpdateArgsSchema: z.ZodType<Prisma.OpeningHoursUpdateArgs> = z.object({
  select: OpeningHoursSelectSchema.optional(),
  include: OpeningHoursIncludeSchema.optional(),
  data: z.union([ OpeningHoursUpdateInputSchema,OpeningHoursUncheckedUpdateInputSchema ]),
  where: OpeningHoursWhereUniqueInputSchema,
}).strict() ;

export const OpeningHoursUpdateManyArgsSchema: z.ZodType<Prisma.OpeningHoursUpdateManyArgs> = z.object({
  data: z.union([ OpeningHoursUpdateManyMutationInputSchema,OpeningHoursUncheckedUpdateManyInputSchema ]),
  where: OpeningHoursWhereInputSchema.optional(),
}).strict() ;

export const OpeningHoursDeleteManyArgsSchema: z.ZodType<Prisma.OpeningHoursDeleteManyArgs> = z.object({
  where: OpeningHoursWhereInputSchema.optional(),
}).strict() ;

export const ReviewCreateArgsSchema: z.ZodType<Prisma.ReviewCreateArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  data: z.union([ ReviewCreateInputSchema,ReviewUncheckedCreateInputSchema ]),
}).strict() ;

export const ReviewUpsertArgsSchema: z.ZodType<Prisma.ReviewUpsertArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
  create: z.union([ ReviewCreateInputSchema,ReviewUncheckedCreateInputSchema ]),
  update: z.union([ ReviewUpdateInputSchema,ReviewUncheckedUpdateInputSchema ]),
}).strict() ;

export const ReviewCreateManyArgsSchema: z.ZodType<Prisma.ReviewCreateManyArgs> = z.object({
  data: z.union([ ReviewCreateManyInputSchema,ReviewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ReviewCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ReviewCreateManyAndReturnArgs> = z.object({
  data: z.union([ ReviewCreateManyInputSchema,ReviewCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const ReviewDeleteArgsSchema: z.ZodType<Prisma.ReviewDeleteArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  where: ReviewWhereUniqueInputSchema,
}).strict() ;

export const ReviewUpdateArgsSchema: z.ZodType<Prisma.ReviewUpdateArgs> = z.object({
  select: ReviewSelectSchema.optional(),
  include: ReviewIncludeSchema.optional(),
  data: z.union([ ReviewUpdateInputSchema,ReviewUncheckedUpdateInputSchema ]),
  where: ReviewWhereUniqueInputSchema,
}).strict() ;

export const ReviewUpdateManyArgsSchema: z.ZodType<Prisma.ReviewUpdateManyArgs> = z.object({
  data: z.union([ ReviewUpdateManyMutationInputSchema,ReviewUncheckedUpdateManyInputSchema ]),
  where: ReviewWhereInputSchema.optional(),
}).strict() ;

export const ReviewDeleteManyArgsSchema: z.ZodType<Prisma.ReviewDeleteManyArgs> = z.object({
  where: ReviewWhereInputSchema.optional(),
}).strict() ;

export const CourtCreateArgsSchema: z.ZodType<Prisma.CourtCreateArgs> = z.object({
  select: CourtSelectSchema.optional(),
  include: CourtIncludeSchema.optional(),
  data: z.union([ CourtCreateInputSchema,CourtUncheckedCreateInputSchema ]),
}).strict() ;

export const CourtUpsertArgsSchema: z.ZodType<Prisma.CourtUpsertArgs> = z.object({
  select: CourtSelectSchema.optional(),
  include: CourtIncludeSchema.optional(),
  where: CourtWhereUniqueInputSchema,
  create: z.union([ CourtCreateInputSchema,CourtUncheckedCreateInputSchema ]),
  update: z.union([ CourtUpdateInputSchema,CourtUncheckedUpdateInputSchema ]),
}).strict() ;

export const CourtCreateManyArgsSchema: z.ZodType<Prisma.CourtCreateManyArgs> = z.object({
  data: z.union([ CourtCreateManyInputSchema,CourtCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CourtCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CourtCreateManyAndReturnArgs> = z.object({
  data: z.union([ CourtCreateManyInputSchema,CourtCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const CourtDeleteArgsSchema: z.ZodType<Prisma.CourtDeleteArgs> = z.object({
  select: CourtSelectSchema.optional(),
  include: CourtIncludeSchema.optional(),
  where: CourtWhereUniqueInputSchema,
}).strict() ;

export const CourtUpdateArgsSchema: z.ZodType<Prisma.CourtUpdateArgs> = z.object({
  select: CourtSelectSchema.optional(),
  include: CourtIncludeSchema.optional(),
  data: z.union([ CourtUpdateInputSchema,CourtUncheckedUpdateInputSchema ]),
  where: CourtWhereUniqueInputSchema,
}).strict() ;

export const CourtUpdateManyArgsSchema: z.ZodType<Prisma.CourtUpdateManyArgs> = z.object({
  data: z.union([ CourtUpdateManyMutationInputSchema,CourtUncheckedUpdateManyInputSchema ]),
  where: CourtWhereInputSchema.optional(),
}).strict() ;

export const CourtDeleteManyArgsSchema: z.ZodType<Prisma.CourtDeleteManyArgs> = z.object({
  where: CourtWhereInputSchema.optional(),
}).strict() ;

export const BookingCreateArgsSchema: z.ZodType<Prisma.BookingCreateArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  data: z.union([ BookingCreateInputSchema,BookingUncheckedCreateInputSchema ]),
}).strict() ;

export const BookingUpsertArgsSchema: z.ZodType<Prisma.BookingUpsertArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereUniqueInputSchema,
  create: z.union([ BookingCreateInputSchema,BookingUncheckedCreateInputSchema ]),
  update: z.union([ BookingUpdateInputSchema,BookingUncheckedUpdateInputSchema ]),
}).strict() ;

export const BookingCreateManyArgsSchema: z.ZodType<Prisma.BookingCreateManyArgs> = z.object({
  data: z.union([ BookingCreateManyInputSchema,BookingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BookingCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BookingCreateManyAndReturnArgs> = z.object({
  data: z.union([ BookingCreateManyInputSchema,BookingCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const BookingDeleteArgsSchema: z.ZodType<Prisma.BookingDeleteArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  where: BookingWhereUniqueInputSchema,
}).strict() ;

export const BookingUpdateArgsSchema: z.ZodType<Prisma.BookingUpdateArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: BookingIncludeSchema.optional(),
  data: z.union([ BookingUpdateInputSchema,BookingUncheckedUpdateInputSchema ]),
  where: BookingWhereUniqueInputSchema,
}).strict() ;

export const BookingUpdateManyArgsSchema: z.ZodType<Prisma.BookingUpdateManyArgs> = z.object({
  data: z.union([ BookingUpdateManyMutationInputSchema,BookingUncheckedUpdateManyInputSchema ]),
  where: BookingWhereInputSchema.optional(),
}).strict() ;

export const BookingDeleteManyArgsSchema: z.ZodType<Prisma.BookingDeleteManyArgs> = z.object({
  where: BookingWhereInputSchema.optional(),
}).strict() ;

export const InviteCreateArgsSchema: z.ZodType<Prisma.InviteCreateArgs> = z.object({
  select: InviteSelectSchema.optional(),
  include: InviteIncludeSchema.optional(),
  data: z.union([ InviteCreateInputSchema,InviteUncheckedCreateInputSchema ]),
}).strict() ;

export const InviteUpsertArgsSchema: z.ZodType<Prisma.InviteUpsertArgs> = z.object({
  select: InviteSelectSchema.optional(),
  include: InviteIncludeSchema.optional(),
  where: InviteWhereUniqueInputSchema,
  create: z.union([ InviteCreateInputSchema,InviteUncheckedCreateInputSchema ]),
  update: z.union([ InviteUpdateInputSchema,InviteUncheckedUpdateInputSchema ]),
}).strict() ;

export const InviteCreateManyArgsSchema: z.ZodType<Prisma.InviteCreateManyArgs> = z.object({
  data: z.union([ InviteCreateManyInputSchema,InviteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const InviteCreateManyAndReturnArgsSchema: z.ZodType<Prisma.InviteCreateManyAndReturnArgs> = z.object({
  data: z.union([ InviteCreateManyInputSchema,InviteCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const InviteDeleteArgsSchema: z.ZodType<Prisma.InviteDeleteArgs> = z.object({
  select: InviteSelectSchema.optional(),
  include: InviteIncludeSchema.optional(),
  where: InviteWhereUniqueInputSchema,
}).strict() ;

export const InviteUpdateArgsSchema: z.ZodType<Prisma.InviteUpdateArgs> = z.object({
  select: InviteSelectSchema.optional(),
  include: InviteIncludeSchema.optional(),
  data: z.union([ InviteUpdateInputSchema,InviteUncheckedUpdateInputSchema ]),
  where: InviteWhereUniqueInputSchema,
}).strict() ;

export const InviteUpdateManyArgsSchema: z.ZodType<Prisma.InviteUpdateManyArgs> = z.object({
  data: z.union([ InviteUpdateManyMutationInputSchema,InviteUncheckedUpdateManyInputSchema ]),
  where: InviteWhereInputSchema.optional(),
}).strict() ;

export const InviteDeleteManyArgsSchema: z.ZodType<Prisma.InviteDeleteManyArgs> = z.object({
  where: InviteWhereInputSchema.optional(),
}).strict() ;

export const AvailabilityCreateArgsSchema: z.ZodType<Prisma.AvailabilityCreateArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  data: z.union([ AvailabilityCreateInputSchema,AvailabilityUncheckedCreateInputSchema ]),
}).strict() ;

export const AvailabilityUpsertArgsSchema: z.ZodType<Prisma.AvailabilityUpsertArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereUniqueInputSchema,
  create: z.union([ AvailabilityCreateInputSchema,AvailabilityUncheckedCreateInputSchema ]),
  update: z.union([ AvailabilityUpdateInputSchema,AvailabilityUncheckedUpdateInputSchema ]),
}).strict() ;

export const AvailabilityCreateManyArgsSchema: z.ZodType<Prisma.AvailabilityCreateManyArgs> = z.object({
  data: z.union([ AvailabilityCreateManyInputSchema,AvailabilityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AvailabilityCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AvailabilityCreateManyAndReturnArgs> = z.object({
  data: z.union([ AvailabilityCreateManyInputSchema,AvailabilityCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const AvailabilityDeleteArgsSchema: z.ZodType<Prisma.AvailabilityDeleteArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  where: AvailabilityWhereUniqueInputSchema,
}).strict() ;

export const AvailabilityUpdateArgsSchema: z.ZodType<Prisma.AvailabilityUpdateArgs> = z.object({
  select: AvailabilitySelectSchema.optional(),
  include: AvailabilityIncludeSchema.optional(),
  data: z.union([ AvailabilityUpdateInputSchema,AvailabilityUncheckedUpdateInputSchema ]),
  where: AvailabilityWhereUniqueInputSchema,
}).strict() ;

export const AvailabilityUpdateManyArgsSchema: z.ZodType<Prisma.AvailabilityUpdateManyArgs> = z.object({
  data: z.union([ AvailabilityUpdateManyMutationInputSchema,AvailabilityUncheckedUpdateManyInputSchema ]),
  where: AvailabilityWhereInputSchema.optional(),
}).strict() ;

export const AvailabilityDeleteManyArgsSchema: z.ZodType<Prisma.AvailabilityDeleteManyArgs> = z.object({
  where: AvailabilityWhereInputSchema.optional(),
}).strict() ;

export const NotificationCreateArgsSchema: z.ZodType<Prisma.NotificationCreateArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  data: z.union([ NotificationCreateInputSchema,NotificationUncheckedCreateInputSchema ]),
}).strict() ;

export const NotificationUpsertArgsSchema: z.ZodType<Prisma.NotificationUpsertArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
  create: z.union([ NotificationCreateInputSchema,NotificationUncheckedCreateInputSchema ]),
  update: z.union([ NotificationUpdateInputSchema,NotificationUncheckedUpdateInputSchema ]),
}).strict() ;

export const NotificationCreateManyArgsSchema: z.ZodType<Prisma.NotificationCreateManyArgs> = z.object({
  data: z.union([ NotificationCreateManyInputSchema,NotificationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const NotificationCreateManyAndReturnArgsSchema: z.ZodType<Prisma.NotificationCreateManyAndReturnArgs> = z.object({
  data: z.union([ NotificationCreateManyInputSchema,NotificationCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const NotificationDeleteArgsSchema: z.ZodType<Prisma.NotificationDeleteArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationUpdateArgsSchema: z.ZodType<Prisma.NotificationUpdateArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: NotificationIncludeSchema.optional(),
  data: z.union([ NotificationUpdateInputSchema,NotificationUncheckedUpdateInputSchema ]),
  where: NotificationWhereUniqueInputSchema,
}).strict() ;

export const NotificationUpdateManyArgsSchema: z.ZodType<Prisma.NotificationUpdateManyArgs> = z.object({
  data: z.union([ NotificationUpdateManyMutationInputSchema,NotificationUncheckedUpdateManyInputSchema ]),
  where: NotificationWhereInputSchema.optional(),
}).strict() ;

export const NotificationDeleteManyArgsSchema: z.ZodType<Prisma.NotificationDeleteManyArgs> = z.object({
  where: NotificationWhereInputSchema.optional(),
}).strict() ;

export const HistoryCreateArgsSchema: z.ZodType<Prisma.HistoryCreateArgs> = z.object({
  select: HistorySelectSchema.optional(),
  include: HistoryIncludeSchema.optional(),
  data: z.union([ HistoryCreateInputSchema,HistoryUncheckedCreateInputSchema ]),
}).strict() ;

export const HistoryUpsertArgsSchema: z.ZodType<Prisma.HistoryUpsertArgs> = z.object({
  select: HistorySelectSchema.optional(),
  include: HistoryIncludeSchema.optional(),
  where: HistoryWhereUniqueInputSchema,
  create: z.union([ HistoryCreateInputSchema,HistoryUncheckedCreateInputSchema ]),
  update: z.union([ HistoryUpdateInputSchema,HistoryUncheckedUpdateInputSchema ]),
}).strict() ;

export const HistoryCreateManyArgsSchema: z.ZodType<Prisma.HistoryCreateManyArgs> = z.object({
  data: z.union([ HistoryCreateManyInputSchema,HistoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const HistoryCreateManyAndReturnArgsSchema: z.ZodType<Prisma.HistoryCreateManyAndReturnArgs> = z.object({
  data: z.union([ HistoryCreateManyInputSchema,HistoryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const HistoryDeleteArgsSchema: z.ZodType<Prisma.HistoryDeleteArgs> = z.object({
  select: HistorySelectSchema.optional(),
  include: HistoryIncludeSchema.optional(),
  where: HistoryWhereUniqueInputSchema,
}).strict() ;

export const HistoryUpdateArgsSchema: z.ZodType<Prisma.HistoryUpdateArgs> = z.object({
  select: HistorySelectSchema.optional(),
  include: HistoryIncludeSchema.optional(),
  data: z.union([ HistoryUpdateInputSchema,HistoryUncheckedUpdateInputSchema ]),
  where: HistoryWhereUniqueInputSchema,
}).strict() ;

export const HistoryUpdateManyArgsSchema: z.ZodType<Prisma.HistoryUpdateManyArgs> = z.object({
  data: z.union([ HistoryUpdateManyMutationInputSchema,HistoryUncheckedUpdateManyInputSchema ]),
  where: HistoryWhereInputSchema.optional(),
}).strict() ;

export const HistoryDeleteManyArgsSchema: z.ZodType<Prisma.HistoryDeleteManyArgs> = z.object({
  where: HistoryWhereInputSchema.optional(),
}).strict() ;

export const TokenCreateArgsSchema: z.ZodType<Prisma.TokenCreateArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  data: z.union([ TokenCreateInputSchema,TokenUncheckedCreateInputSchema ]),
}).strict() ;

export const TokenUpsertArgsSchema: z.ZodType<Prisma.TokenUpsertArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  where: TokenWhereUniqueInputSchema,
  create: z.union([ TokenCreateInputSchema,TokenUncheckedCreateInputSchema ]),
  update: z.union([ TokenUpdateInputSchema,TokenUncheckedUpdateInputSchema ]),
}).strict() ;

export const TokenCreateManyArgsSchema: z.ZodType<Prisma.TokenCreateManyArgs> = z.object({
  data: z.union([ TokenCreateManyInputSchema,TokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TokenCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TokenCreateManyAndReturnArgs> = z.object({
  data: z.union([ TokenCreateManyInputSchema,TokenCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export const TokenDeleteArgsSchema: z.ZodType<Prisma.TokenDeleteArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  where: TokenWhereUniqueInputSchema,
}).strict() ;

export const TokenUpdateArgsSchema: z.ZodType<Prisma.TokenUpdateArgs> = z.object({
  select: TokenSelectSchema.optional(),
  include: TokenIncludeSchema.optional(),
  data: z.union([ TokenUpdateInputSchema,TokenUncheckedUpdateInputSchema ]),
  where: TokenWhereUniqueInputSchema,
}).strict() ;

export const TokenUpdateManyArgsSchema: z.ZodType<Prisma.TokenUpdateManyArgs> = z.object({
  data: z.union([ TokenUpdateManyMutationInputSchema,TokenUncheckedUpdateManyInputSchema ]),
  where: TokenWhereInputSchema.optional(),
}).strict() ;

export const TokenDeleteManyArgsSchema: z.ZodType<Prisma.TokenDeleteManyArgs> = z.object({
  where: TokenWhereInputSchema.optional(),
}).strict() ;