import { Firm } from "../firm/Firm";
import { PIPBenefit } from "../pip_benefit/PIPBenefit";

export interface PIPBenefitsType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefitsTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PIPBenefitsTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
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
   * | Name | `PIPBenefits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PIPBenefit)` |
   */
  PIPBenefits?: Array<PIPBenefit>;
}

export type PIPBenefitsTypeId = number | { PIPBenefitsTypeId: number };

export interface EditablePIPBenefitsType
  extends Pick<PIPBenefitsType, "TypeName">,
    Partial<Pick<PIPBenefitsType, "FirmId">> {}
