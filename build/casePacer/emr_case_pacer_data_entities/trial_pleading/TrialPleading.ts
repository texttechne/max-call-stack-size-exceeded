import { Record } from "../record/Record";
import { Trial } from "../trial/Trial";

export interface TrialPleading {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialPleadingID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TrialPleadingID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialID` |
   * | Type | `Edm.Int32` |
   */
  TrialID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Item` |
   * | Type | `Edm.String` |
   */
  Item: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompletedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  CompletedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DueDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DueDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int32` |
   */
  RecordId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Record` |
   * | Type | `Emr.CasePacer.Data.Entities.Record` |
   */
  Record?: Record | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trial` |
   * | Type | `Emr.CasePacer.Data.Entities.Trial` |
   */
  Trial?: Trial | null;
}

export type TrialPleadingId = number | { TrialPleadingID: number };

export interface EditableTrialPleading
  extends Pick<TrialPleading, "CompletedFlag">,
    Partial<Pick<TrialPleading, "TrialID" | "Item" | "DueDate" | "RecordId">> {}
