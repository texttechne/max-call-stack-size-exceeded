import { Firm } from "../firm/Firm";

export interface TrialItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialItemId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TrialItemId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialItemName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TrialItemName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialItemDesc` |
   * | Type | `Edm.String` |
   */
  TrialItemDesc: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Sequence` |
   * | Type | `Edm.Int16` |
   * | Nullable | `false` |
   */
  Sequence: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutoInclude` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AutoInclude: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type TrialItemId = number | { TrialItemId: number };

export interface EditableTrialItem
  extends Pick<TrialItem, "TrialItemName" | "Sequence" | "AutoInclude">,
    Partial<Pick<TrialItem, "FirmPartyId" | "TrialItemDesc">> {}
