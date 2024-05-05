import { Witness } from "../witness/Witness";

export interface WitnessType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessTypeID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessTypeID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  WitnessTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Witnesses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Witness)` |
   */
  Witnesses?: Array<Witness>;
}

export type WitnessTypeId = number | { WitnessTypeID: number };

export interface EditableWitnessType
  extends Pick<WitnessType, "WitnessTypeName"> {}
