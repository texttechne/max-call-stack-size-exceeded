import { ADR } from "../adr/ADR";

export interface ADRType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ADRTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ADRTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRTypeRole` |
   * | Type | `Edm.String` |
   */
  ADRTypeRole: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ADR)` |
   */
  ADRs?: Array<ADR>;
}

export type ADRTypeId = number | { ADRTypeId: number };

export interface EditableADRType
  extends Pick<ADRType, "ADRTypeName">,
    Partial<Pick<ADRType, "ADRTypeRole">> {}
