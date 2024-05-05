import { SecurityUserGroup } from "../security_user_group/SecurityUserGroup";
import { CasePacerUser } from "../case_pacer_user/CasePacerUser";

export interface SecurityUserGroupAssign {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserGroupAssignId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  UserGroupAssignId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserGroupId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  UserGroupId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityUserGroup` |
   * | Type | `Emr.CasePacer.Data.Entities.SecurityUserGroup` |
   */
  SecurityUserGroup?: SecurityUserGroup | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type SecurityUserGroupAssignId = number | { UserGroupAssignId: number };

export interface EditableSecurityUserGroupAssign
  extends Pick<SecurityUserGroupAssign, "UserGroupId" | "PartyId"> {}
