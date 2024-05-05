import { HearingType } from "../hearing_type/HearingType";
import { Party } from "../party/Party";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { Appointment } from "../appointment/Appointment";
import { CalendarEntry } from "../calendar_entry/CalendarEntry";
import { CalendarEntryRecur } from "../calendar_entry_recur/CalendarEntryRecur";

export interface Hearing {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  HearingId: number;
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
   * | Name | `HearingTypeId` |
   * | Type | `Edm.Int32` |
   */
  HearingTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JudgePartyId` |
   * | Type | `Edm.Int32` |
   */
  JudgePartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatementSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  StatementSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientConfirmSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ClientConfirmSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConfirmationCallsFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ConfirmationCallsFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DecisionTypeId` |
   * | Type | `Edm.Byte` |
   * | Nullable | `false` |
   */
  DecisionTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DecisionDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DecisionDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DecisionSummary` |
   * | Type | `Edm.String` |
   */
  DecisionSummary: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingType` |
   * | Type | `Emr.CasePacer.Data.Entities.HearingType` |
   */
  HearingType?: HearingType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Judge` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Judge?: Party | null;
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
   * | Name | `Appointments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  Appointments?: Array<Appointment>;
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

export type HearingId = number | { HearingId: number };

export interface EditableHearing
  extends Pick<Hearing, "ConfirmationCallsFlag" | "DecisionTypeId">,
    Partial<
      Pick<
        Hearing,
        | "LawsuitId"
        | "HearingTypeId"
        | "JudgePartyId"
        | "Notes"
        | "StatementSentDate"
        | "ClientConfirmSentDate"
        | "DecisionDate"
        | "DecisionSummary"
      >
    > {}
