import { Firm } from "../firm/Firm";
import { SecurityUserGroupAssign } from "../security_user_group_assign/SecurityUserGroupAssign";

export interface SecurityUserGroup {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `UserGroupName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  UserGroupName: string;
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityUserGroupAssigns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityUserGroupAssign)` |
   */
  SecurityUserGroupAssigns?: Array<SecurityUserGroupAssign>;
}

export type SecurityUserGroupId = number | { UserGroupId: number };

export interface EditableSecurityUserGroup
  extends Pick<SecurityUserGroup, "UserGroupName" | "FirmId"> {}
