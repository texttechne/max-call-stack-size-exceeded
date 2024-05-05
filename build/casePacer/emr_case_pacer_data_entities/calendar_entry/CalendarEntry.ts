import { Lawsuit } from "../lawsuit/Lawsuit";
import { CasePacerUser } from "../case_pacer_user/CasePacerUser";
import { Firm } from "../firm/Firm";
import { Party } from "../party/Party";
import { Appointment } from "../appointment/Appointment";
import { AppointmentEventSubType } from "../appointment_event_sub_type/AppointmentEventSubType";
import { ADR } from "../adr/ADR";
import { Deposition } from "../deposition/Deposition";
import { Trial } from "../trial/Trial";
import { Hearing } from "../hearing/Hearing";

export interface CalendarEntry {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntryId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CalendarEntryId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeName` |
   * | Type | `Edm.String` |
   */
  AppointmentTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserId` |
   * | Type | `Edm.Int32` |
   */
  UserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserFullName` |
   * | Type | `Edm.String` |
   */
  UserFullName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitNumber` |
   * | Type | `Edm.String` |
   */
  LawsuitNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientName` |
   * | Type | `Edm.String` |
   */
  ClientName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyPartyId` |
   * | Type | `Edm.Int32` |
   */
  AttorneyPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalPartyId` |
   * | Type | `Edm.Int32` |
   */
  ParalegalPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyDisplayName` |
   * | Type | `Edm.String` |
   */
  AttorneyDisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalDisplayName` |
   * | Type | `Edm.String` |
   */
  ParalegalDisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyColor` |
   * | Type | `Edm.String` |
   */
  AttorneyColor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalColor` |
   * | Type | `Edm.String` |
   */
  ParalegalColor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiteralName` |
   * | Type | `Edm.String` |
   */
  LiteralName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseTypeName` |
   * | Type | `Edm.String` |
   */
  LawsuitPhaseTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeName` |
   * | Type | `Edm.String` |
   */
  LawsuitTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserColor` |
   * | Type | `Edm.String` |
   */
  UserColor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Subject` |
   * | Type | `Edm.String` |
   */
  Subject: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Location` |
   * | Type | `Edm.String` |
   */
  Location: string | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  StartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartTime` |
   * | Type | `Edm.Duration` |
   */
  StartTime: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DurationInMinutes` |
   * | Type | `Edm.Int32` |
   */
  DurationInMinutes: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RRule` |
   * | Type | `Edm.String` |
   */
  RRule: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExDate` |
   * | Type | `Edm.String` |
   */
  ExDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsRecurring` |
   * | Type | `Edm.Boolean` |
   */
  IsRecurring: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsAuto` |
   * | Type | `Edm.Boolean` |
   */
  IsAuto: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TimezoneOffset` |
   * | Type | `Edm.Int32` |
   */
  TimezoneOffset: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DaylightSavingFlag` |
   * | Type | `Edm.Boolean` |
   */
  DaylightSavingFlag: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TimezoneType` |
   * | Type | `Edm.Int32` |
   */
  TimezoneType: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApptDescr` |
   * | Type | `Edm.String` |
   */
  ApptDescr: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventTypeName` |
   * | Type | `Edm.String` |
   */
  AppointmentEventTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentEventSubTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeName` |
   * | Type | `Edm.String` |
   */
  AppointmentEventSubTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRId` |
   * | Type | `Edm.Int32` |
   */
  ADRId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionId` |
   * | Type | `Edm.Int32` |
   */
  DepositionId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialId` |
   * | Type | `Edm.Int32` |
   */
  TrialId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingId` |
   * | Type | `Edm.Int32` |
   */
  HearingId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Modified` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Modified: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `User` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  User?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  PlaintiffParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  Appointment?: Appointment | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubType` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentEventSubType` |
   */
  AppointmentEventSubType?: AppointmentEventSubType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADR` |
   * | Type | `Emr.CasePacer.Data.Entities.ADR` |
   */
  ADR?: ADR | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Deposition` |
   * | Type | `Emr.CasePacer.Data.Entities.Deposition` |
   */
  Deposition?: Deposition | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trial` |
   * | Type | `Emr.CasePacer.Data.Entities.Trial` |
   */
  Trial?: Trial | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hearing` |
   * | Type | `Emr.CasePacer.Data.Entities.Hearing` |
   */
  Hearing?: Hearing | null;
}

export type CalendarEntryId = { CalendarEntryId: string; StartDate: string };

export interface EditableCalendarEntry
  extends Pick<CalendarEntry, "CalendarEntryId" | "StartDate">,
    Partial<
      Pick<
        CalendarEntry,
        | "AppointmentTypeName"
        | "FirmId"
        | "UserId"
        | "UserFullName"
        | "LawsuitId"
        | "LawsuitNumber"
        | "PlaintiffPartyId"
        | "ClientName"
        | "AttorneyPartyId"
        | "ParalegalPartyId"
        | "AttorneyDisplayName"
        | "ParalegalDisplayName"
        | "AttorneyColor"
        | "ParalegalColor"
        | "LiteralName"
        | "LawsuitPhaseTypeName"
        | "LawsuitTypeName"
        | "UserColor"
        | "Subject"
        | "Location"
        | "StartTime"
        | "DurationInMinutes"
        | "RRule"
        | "ExDate"
        | "IsRecurring"
        | "IsAuto"
        | "TimezoneOffset"
        | "DaylightSavingFlag"
        | "TimezoneType"
        | "ApptDescr"
        | "AppointmentEventTypeName"
        | "AppointmentTypeId"
        | "AppointmentId"
        | "AppointmentEventSubTypeId"
        | "AppointmentEventSubTypeName"
        | "ADRId"
        | "DepositionId"
        | "TrialId"
        | "HearingId"
        | "Modified"
      >
    > {}
