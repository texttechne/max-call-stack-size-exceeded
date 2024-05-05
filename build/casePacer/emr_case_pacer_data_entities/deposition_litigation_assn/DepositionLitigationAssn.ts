import { Deposition } from "../deposition/Deposition";
import { Litigation } from "../litigation/Litigation";

export interface DepositionLitigationAssn {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionLitigationAssnId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DepositionLitigationAssnId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionId` |
   * | Type | `Edm.Int32` |
   */
  DepositionId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Deposition` |
   * | Type | `Emr.CasePacer.Data.Entities.Deposition` |
   */
  Deposition?: Deposition | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
}

export type DepositionLitigationAssnId =
  | number
  | { DepositionLitigationAssnId: number };

export interface EditableDepositionLitigationAssn
  extends Partial<
    Pick<DepositionLitigationAssn, "DepositionId" | "LitigationId">
  > {}
