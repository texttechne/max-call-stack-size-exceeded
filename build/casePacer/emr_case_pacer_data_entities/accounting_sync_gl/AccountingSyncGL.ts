import { LawsuitType } from "../lawsuit_type/LawsuitType";

export interface AccountingSyncGL {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GLAccount` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  GLAccount: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
}

export type AccountingSyncGLId = number | { LawsuitTypeId: number | null };

export interface EditableAccountingSyncGL
  extends Pick<AccountingSyncGL, "GLAccount"> {}
