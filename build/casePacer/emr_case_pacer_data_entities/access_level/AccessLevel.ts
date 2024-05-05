import { SecurityRule } from "../security_rule/SecurityRule";
import { SecurityRuleSummary } from "../security_rule_summary/SecurityRuleSummary";

export interface AccessLevel {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccessLevelId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AccessLevelId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccessLevelName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AccessLevelName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateSecurityRules` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRule)` |
   */
  CreateSecurityRules?: Array<SecurityRule>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeleteSecurityRules` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRule)` |
   */
  DeleteSecurityRules?: Array<SecurityRule>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditSecurityRules` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRule)` |
   */
  EditSecurityRules?: Array<SecurityRule>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadSecurityRules` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRule)` |
   */
  ReadSecurityRules?: Array<SecurityRule>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadSecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  ReadSecurityRuleSummaries?: Array<SecurityRuleSummary>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateSecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  CreateSecurityRuleSummaries?: Array<SecurityRuleSummary>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditSecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  EditSecurityRuleSummaries?: Array<SecurityRuleSummary>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeleteSecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  DeleteSecurityRuleSummaries?: Array<SecurityRuleSummary>;
}

export type AccessLevelId = number | { AccessLevelId: number };

export interface EditableAccessLevel
  extends Pick<AccessLevel, "AccessLevelName"> {}
