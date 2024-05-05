import { Litigation } from "../litigation/Litigation";
import { Appointment } from "../appointment/Appointment";
import { TrialExhibit } from "../trial_exhibit/TrialExhibit";
import { TrialPleading } from "../trial_pleading/TrialPleading";
import { CalendarEntry } from "../calendar_entry/CalendarEntry";
import { CalendarEntryRecur } from "../calendar_entry_recur/CalendarEntryRecur";

export interface Trial {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TrialID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialChoice` |
   * | Type | `Edm.String` |
   */
  TrialChoice: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialNotes` |
   * | Type | `Edm.String` |
   */
  TrialNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialRequestSentDate1` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TrialRequestSentDate1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialRequestSentDate2` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TrialRequestSentDate2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PSummaryJudgement` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PSummaryJudgement: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DSummaryJudgement` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DSummaryJudgement: boolean;
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
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
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
   * | Name | `TrialExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TrialExhibit)` |
   */
  TrialExhibits?: Array<TrialExhibit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialPleadings` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TrialPleading)` |
   */
  TrialPleadings?: Array<TrialPleading>;
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

export type TrialId = number | { TrialID: number };

export interface EditableTrial
  extends Pick<Trial, "PSummaryJudgement" | "DSummaryJudgement">,
    Partial<
      Pick<
        Trial,
        | "TrialChoice"
        | "TrialNotes"
        | "TrialRequestSentDate1"
        | "TrialRequestSentDate2"
        | "LitigationId"
      >
    > {}
