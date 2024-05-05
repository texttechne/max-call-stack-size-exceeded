import { SecurityRule } from "../security_rule/SecurityRule";
import { SecurityRuleSummary } from "../security_rule_summary/SecurityRuleSummary";

export interface SecurityPath {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPathId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SecurityPathId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPathDisplayName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  SecurityPathDisplayName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityMaterializedPath` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  SecurityMaterializedPath: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitMaterializedPath` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitMaterializedPath: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowInDropdown` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ShowInDropdown: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityRules` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRule)` |
   */
  SecurityRules?: Array<SecurityRule>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  SecurityRuleSummaries?: Array<SecurityRuleSummary>;
}

export type SecurityPathId = number | { SecurityPathId: number };

export interface EditableSecurityPath
  extends Pick<
    SecurityPath,
    | "SecurityPathDisplayName"
    | "SecurityMaterializedPath"
    | "LawsuitMaterializedPath"
    | "ShowInDropdown"
  > {}
