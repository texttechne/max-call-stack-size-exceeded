import { InsuranceClaim } from "../insurance_claim/InsuranceClaim";
import { PIPBenefit } from "../pip_benefit/PIPBenefit";

export interface PIP {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PIPId: number;
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
   * | Name | `DisabliltySlipExpirationDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DisabliltySlipExpirationDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Fees` |
   * | Type | `Edm.Int32` |
   */
  Fees: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Disburse` |
   * | Type | `Edm.Int32` |
   */
  Disburse: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApplicationForBenefitsDateSent` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ApplicationForBenefitsDateSent: string | null;
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
   * | Name | `PIPBenefits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PIPBenefit)` |
   */
  PIPBenefits?: Array<PIPBenefit>;
}

export type PIPId = number | { PIPId: number };

export interface EditablePIP
  extends Partial<
    Pick<
      PIP,
      | "InsuranceClaimId"
      | "DisabliltySlipExpirationDate"
      | "Fees"
      | "Disburse"
      | "Notes"
      | "ApplicationForBenefitsDateSent"
    >
  > {}
