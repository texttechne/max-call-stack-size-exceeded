import { Firm } from "../firm/Firm";
import { CasePacerUser } from "../case_pacer_user/CasePacerUser";
import { SecurityPath } from "../security_path/SecurityPath";
import { AccessLevel } from "../access_level/AccessLevel";

export interface SecurityRuleSummary {
  /**
   * **Key Property**: This is a key property used to identify the entity.
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
   * **Key Property**: This is a key property used to identify the entity.
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
   * **Key Property**: This is a key property used to identify the entity.
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPath` |
   * | Type | `Emr.CasePacer.Data.Entities.SecurityPath` |
   */
  SecurityPath?: SecurityPath | null;
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
   * | Name | `CreateAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  CreateAccessLevel?: AccessLevel | null;
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
   * | Name | `DeleteAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  DeleteAccessLevel?: AccessLevel | null;
}

export type SecurityRuleSummaryId = {
  FirmId: number;
  PartyId: number;
  SecurityPathId: number | null;
};

export interface EditableSecurityRuleSummary
  extends Pick<SecurityRuleSummary, "FirmId" | "PartyId">,
    Partial<
      Pick<
        SecurityRuleSummary,
        | "SecurityPathId"
        | "ReadAccessLevelId"
        | "CreateAccessLevelId"
        | "EditAccessLevelId"
        | "DeleteAccessLevelId"
      >
    > {}
