import { InsuranceClaim } from "../insurance_claim/InsuranceClaim";
import { PIP } from "../pip/PIP";
import { PIPBenefitsType } from "../pip_benefits_type/PIPBenefitsType";
import { LawsuitParty } from "../lawsuit_party/LawsuitParty";

export interface PIPBenefit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefitsId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PIPBenefitsId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefitsTypeId` |
   * | Type | `Edm.Int32` |
   */
  PIPBenefitsTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimId` |
   * | Type | `Edm.Int32` |
   */
  InsuranceClaimId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  StartDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  EndDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Duration` |
   * | Type | `Edm.Int32` |
   */
  Duration: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Type` |
   * | Type | `Edm.String` |
   */
  Type: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Rate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  Rate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   */
  Amount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AmountReceived` |
   * | Type | `Edm.Decimal` |
   */
  AmountReceived: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Variance` |
   * | Type | `Edm.Decimal` |
   */
  Variance: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReceivedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DemandDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Note` |
   * | Type | `Edm.String` |
   */
  Note: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPId` |
   * | Type | `Edm.Int32` |
   */
  PIPId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ServiceProviderLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  ServiceProviderLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaim` |
   * | Type | `Emr.CasePacer.Data.Entities.InsuranceClaim` |
   */
  InsuranceClaim?: InsuranceClaim | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIP` |
   * | Type | `Emr.CasePacer.Data.Entities.PIP` |
   */
  PIP?: PIP | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefitsType` |
   * | Type | `Emr.CasePacer.Data.Entities.PIPBenefitsType` |
   */
  PIPBenefitsType?: PIPBenefitsType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ServiceProviderLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  ServiceProviderLawsuitParty?: LawsuitParty | null;
}

export type PIPBenefitId = number | { PIPBenefitsId: number };

export interface EditablePIPBenefit
  extends Pick<PIPBenefit, "Rate">,
    Partial<
      Pick<
        PIPBenefit,
        | "PIPBenefitsTypeId"
        | "InsuranceClaimId"
        | "StartDate"
        | "EndDate"
        | "Duration"
        | "Type"
        | "Amount"
        | "AmountReceived"
        | "Variance"
        | "ReceivedDate"
        | "DemandDate"
        | "Note"
        | "PIPId"
        | "ServiceProviderLawsuitPartyId"
      >
    > {}
