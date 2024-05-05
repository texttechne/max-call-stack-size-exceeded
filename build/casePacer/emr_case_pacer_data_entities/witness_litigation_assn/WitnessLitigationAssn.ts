import { Litigation } from "../litigation/Litigation";
import { Witness } from "../witness/Witness";

export interface WitnessLitigationAssn {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessLitigationAssnId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessLitigationAssnId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  WitnessLawsuitPartyId: number | null;
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
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Witness` |
   * | Type | `Emr.CasePacer.Data.Entities.Witness` |
   */
  Witness?: Witness | null;
}

export type WitnessLitigationAssnId =
  | number
  | { WitnessLitigationAssnId: number };

export interface EditableWitnessLitigationAssn
  extends Partial<
    Pick<WitnessLitigationAssn, "WitnessLawsuitPartyId" | "LitigationId">
  > {}
