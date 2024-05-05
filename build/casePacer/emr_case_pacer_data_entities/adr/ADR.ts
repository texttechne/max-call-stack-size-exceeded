import { ADRType } from "../adr_type/ADRType";
import { Litigation } from "../litigation/Litigation";
import { Party } from "../party/Party";
import { Appointment } from "../appointment/Appointment";
import { CalendarEntry } from "../calendar_entry/CalendarEntry";
import { CalendarEntryRecur } from "../calendar_entry_recur/CalendarEntryRecur";

export interface ADR {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ADRId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRTypeId` |
   * | Type | `Edm.Int32` |
   */
  ADRTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MAPartyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  MAPartyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingLocation` |
   * | Type | `Edm.String` |
   */
  HearingLocation: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingAddress` |
   * | Type | `Edm.String` |
   */
  HearingAddress: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingNotes` |
   * | Type | `Edm.String` |
   */
  HearingNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingHeldFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  HearingHeldFlag: boolean;
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
   * | Name | `PlaintiffConfirmSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  PlaintiffConfirmSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantInsurSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DefendantInsurSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantAttorneySentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DefendantAttorneySentDate: string | null;
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
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRType` |
   * | Type | `Emr.CasePacer.Data.Entities.ADRType` |
   */
  ADRType?: ADRType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MediatorArbitrator` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  MediatorArbitrator?: Party | null;
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

export type ADRId = number | { ADRId: number };

export interface EditableADR
  extends Pick<ADR, "MAPartyID" | "HearingHeldFlag" | "ConfirmationCallsFlag">,
    Partial<
      Pick<
        ADR,
        | "ADRTypeId"
        | "HearingLocation"
        | "HearingAddress"
        | "HearingNotes"
        | "StatementSentDate"
        | "PlaintiffConfirmSentDate"
        | "DefendantInsurSentDate"
        | "DefendantAttorneySentDate"
        | "LitigationId"
      >
    > {}
