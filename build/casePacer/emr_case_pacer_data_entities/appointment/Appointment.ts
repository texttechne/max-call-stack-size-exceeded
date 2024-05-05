import { ADR } from "../adr/ADR";
import { AppointmentCustomType } from "../appointment_custom_type/AppointmentCustomType";
import { AppointmentEventSubType } from "../appointment_event_sub_type/AppointmentEventSubType";
import { AppointmentType } from "../appointment_type/AppointmentType";
import { CasePacerUser } from "../case_pacer_user/CasePacerUser";
import { Deposition } from "../deposition/Deposition";
import { Firm } from "../firm/Firm";
import { Hearing } from "../hearing/Hearing";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { Party } from "../party/Party";
import { Trial } from "../trial/Trial";
import { AppointmentHistory } from "../appointment_history/AppointmentHistory";
import { AppointmentIntegration } from "../appointment_integration/AppointmentIntegration";
import { AppointmentParty } from "../appointment_party/AppointmentParty";
import { AppointmentRecurDate } from "../appointment_recur_date/AppointmentRecurDate";
import { CalendarEntry } from "../calendar_entry/CalendarEntry";
import { CalendarEntryRecur } from "../calendar_entry_recur/CalendarEntryRecur";

export interface Appointment {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `AppointmentTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmId: number;
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
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Subject` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Subject: string;
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
   * | Name | `SendCalendarUpdates` |
   * | Type | `Edm.Boolean` |
   */
  SendCalendarUpdates: boolean | null;
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
   * | Name | `ApptDescr` |
   * | Type | `Edm.String` |
   */
  ApptDescr: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalAppointmentId` |
   * | Type | `Edm.Int32` |
   */
  GlobalAppointmentId: number | null;
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
   * | Name | `AppointmentEventSubTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentEventSubTypeId: number | null;
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
   * | Name | `AppointmentCustomTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentCustomTypeId: number | null;
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
   * | Name | `RecurSeriesMasterId` |
   * | Type | `Edm.Int32` |
   */
  RecurSeriesMasterId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsVirtual` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsVirtual: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDDisplay` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  CPDDisplay: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDAttendanceRequired` |
   * | Type | `Edm.String` |
   */
  CPDAttendanceRequired: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDNotes` |
   * | Type | `Edm.String` |
   */
  CPDNotes: string | null;
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
   * | Name | `AppointmentCustomType` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentCustomType` |
   */
  AppointmentCustomType?: AppointmentCustomType | null;
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
   * | Name | `AppointmentType` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentType` |
   */
  AppointmentType?: AppointmentType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalAppointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  GlobalAppointment?: Appointment | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hearing` |
   * | Type | `Emr.CasePacer.Data.Entities.Hearing` |
   */
  Hearing?: Hearing | null;
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
   * | Name | `PlaintiffParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  PlaintiffParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecurSeriesMasterAppointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  RecurSeriesMasterAppointment?: Appointment | null;
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
   * | Name | `GlobalAppointmentAppointments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  GlobalAppointmentAppointments?: Array<Appointment>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecurExceptionAppointments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  RecurExceptionAppointments?: Array<Appointment>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentHistories` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentHistory)` |
   */
  AppointmentHistories?: Array<AppointmentHistory>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentIntegration` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentIntegration` |
   */
  AppointmentIntegration?: AppointmentIntegration | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentParty)` |
   */
  AppointmentParties?: Array<AppointmentParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentRecurDates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentRecurDate)` |
   */
  AppointmentRecurDates?: Array<AppointmentRecurDate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarEntry)` |
   */
  CalendarEntries?: Array<CalendarEntry>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntryRecurs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarEntryRecur)` |
   */
  CalendarEntryRecurs?: Array<CalendarEntryRecur>;
}

export type AppointmentId = number | { AppointmentId: number | null };

export interface EditableAppointment
  extends Pick<
      Appointment,
      "FirmId" | "Subject" | "StartDate" | "IsVirtual" | "CPDDisplay"
    >,
    Partial<
      Pick<
        Appointment,
        | "AppointmentTypeId"
        | "UserId"
        | "LawsuitId"
        | "Location"
        | "StartTime"
        | "DurationInMinutes"
        | "SendCalendarUpdates"
        | "PlaintiffPartyId"
        | "ApptDescr"
        | "GlobalAppointmentId"
        | "TimezoneOffset"
        | "DaylightSavingFlag"
        | "ADRId"
        | "DepositionId"
        | "TrialId"
        | "AppointmentEventSubTypeId"
        | "HearingId"
        | "AppointmentCustomTypeId"
        | "RRule"
        | "ExDate"
        | "RecurSeriesMasterId"
        | "CPDAttendanceRequired"
        | "CPDNotes"
      >
    > {}
