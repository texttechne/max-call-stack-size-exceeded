import { Demand } from "../demand/Demand";
import { InsuranceClaim } from "../insurance_claim/InsuranceClaim";

export interface InsuranceClaimDemand {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimDemandId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsuranceClaimDemandId: number;
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
   * | Name | `DemandId` |
   * | Type | `Edm.Int32` |
   */
  DemandId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Demand` |
   * | Type | `Emr.CasePacer.Data.Entities.Demand` |
   */
  Demand?: Demand | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaim` |
   * | Type | `Emr.CasePacer.Data.Entities.InsuranceClaim` |
   */
  InsuranceClaim?: InsuranceClaim | null;
}

export type InsuranceClaimDemandId =
  | number
  | { InsuranceClaimDemandId: number };

export interface EditableInsuranceClaimDemand
  extends Partial<
    Pick<InsuranceClaimDemand, "InsuranceClaimId" | "DemandId">
  > {}
