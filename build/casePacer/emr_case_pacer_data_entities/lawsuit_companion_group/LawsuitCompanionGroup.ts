import { Lawsuit } from "../lawsuit/Lawsuit";

export interface LawsuitCompanionGroup {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitCompanionGroupId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitCompanionGroupId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitCompanionGroupName` |
   * | Type | `Edm.String` |
   */
  LawsuitCompanionGroupName: string | null;
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
   * | Name | `Lawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Lawsuit)` |
   */
  Lawsuits?: Array<Lawsuit>;
}

export type LawsuitCompanionGroupId =
  | number
  | { LawsuitCompanionGroupId: number };

export interface EditableLawsuitCompanionGroup
  extends Pick<LawsuitCompanionGroup, "FirmId">,
    Partial<Pick<LawsuitCompanionGroup, "LawsuitCompanionGroupName">> {}
