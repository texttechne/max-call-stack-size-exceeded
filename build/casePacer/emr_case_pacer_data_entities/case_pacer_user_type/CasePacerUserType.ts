import { CasePacerUser } from "../case_pacer_user/CasePacerUser";

export interface CasePacerUserType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUserTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CasePacerUserTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUserTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CasePacerUserTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUsers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CasePacerUser)` |
   */
  CasePacerUsers?: Array<CasePacerUser>;
}

export type CasePacerUserTypeId = number | { CasePacerUserTypeId: number };

export interface EditableCasePacerUserType
  extends Pick<CasePacerUserType, "CasePacerUserTypeName"> {}
