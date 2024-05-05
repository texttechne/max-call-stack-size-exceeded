import { DefendantLawsuitParty } from "../defendant_lawsuit_party/DefendantLawsuitParty";
import { Litigation } from "../litigation/Litigation";

export interface DefendantLitigationAssn {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLitigationAssnId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DefendantLitigationAssnId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  DefendantLawsuitPartyId: number | null;
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
   * | Name | `DefendantLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.DefendantLawsuitParty` |
   */
  DefendantLawsuitParty?: DefendantLawsuitParty | null;
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

export type DefendantLitigationAssnId =
  | number
  | { DefendantLitigationAssnId: number };

export interface EditableDefendantLitigationAssn
  extends Partial<
    Pick<DefendantLitigationAssn, "DefendantLawsuitPartyId" | "LitigationId">
  > {}
