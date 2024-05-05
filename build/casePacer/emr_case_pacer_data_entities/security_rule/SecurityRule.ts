import { AccessLevel } from "../access_level/AccessLevel";
import { SecurityPath } from "../security_path/SecurityPath";

export interface SecurityRule {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityRuleId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SecurityRuleId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPathId` |
   * | Type | `Edm.Int32` |
   */
  SecurityPathId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RuleType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RuleType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RuleObjectId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RuleObjectId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  ReadAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  CreateAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  EditAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeleteAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  DeleteAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  CreateAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeleteAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  DeleteAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  EditAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  ReadAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPath` |
   * | Type | `Emr.CasePacer.Data.Entities.SecurityPath` |
   */
  SecurityPath?: SecurityPath | null;
}

export type SecurityRuleId = number | { SecurityRuleId: number };

export interface EditableSecurityRule
  extends Pick<SecurityRule, "RuleType" | "RuleObjectId">,
    Partial<
      Pick<
        SecurityRule,
        | "SecurityPathId"
        | "ReadAccessLevelId"
        | "CreateAccessLevelId"
        | "EditAccessLevelId"
        | "DeleteAccessLevelId"
      >
    > {}
