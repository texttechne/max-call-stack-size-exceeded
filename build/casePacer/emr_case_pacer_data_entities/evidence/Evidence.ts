import { Lawsuit } from "../lawsuit/Lawsuit";

export interface Evidence {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EvidenceID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EvidenceID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitID: number;
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
   * | Name | `ItemReceived` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ItemReceived: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type EvidenceId = number | { EvidenceID: number };

export interface EditableEvidence
  extends Pick<Evidence, "LawsuitID" | "ItemReceived">,
    Partial<Pick<Evidence, "Item">> {}
