import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { InsuranceClaim } from "../insurance_claim/InsuranceClaim";

export interface InsurancePolicy {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePolicyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsurancePolicyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuredLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsuredLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceCompanyLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsuranceCompanyLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PolicyNumber` |
   * | Type | `Edm.String` |
   */
  PolicyNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDeleted` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsDeleted: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PolicyType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PolicyType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TiedToLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TiedToLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  InsuranceType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IdNumber` |
   * | Type | `Edm.String` |
   */
  IdNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlanName` |
   * | Type | `Edm.String` |
   */
  PlanName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceCompany` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  InsuranceCompany?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Insured` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Insured?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TiedTo` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  TiedTo?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaims` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaim)` |
   */
  InsuranceClaims?: Array<InsuranceClaim>;
}

export type InsurancePolicyId = number | { InsurancePolicyId: number };

export interface EditableInsurancePolicy
  extends Pick<
      InsurancePolicy,
      | "InsuredLawsuitPartyId"
      | "InsuranceCompanyLawsuitPartyId"
      | "IsDeleted"
      | "PolicyType"
      | "TiedToLawsuitPartyId"
      | "InsuranceType"
    >,
    Partial<
      Pick<
        InsurancePolicy,
        "LawsuitId" | "PolicyNumber" | "IdNumber" | "PlanName"
      >
    > {}
