import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { DefendantLitigationAssn } from "../defendant_litigation_assn/DefendantLitigationAssn";

export interface DefendantLawsuitParty {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DefendantLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepLtr1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  RepLtr1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepLtr2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  RepLtr2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResponseRcvdDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ResponseRcvdDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  LawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DefendantLitigationAssn)` |
   */
  DefendantLitigationAssns?: Array<DefendantLitigationAssn>;
}

export type DefendantLawsuitPartyId =
  | number
  | { DefendantLawsuitPartyId: number };

export interface EditableDefendantLawsuitParty
  extends Partial<
    Pick<
      DefendantLawsuitParty,
      | "LawsuitPartyId"
      | "RepLtr1SentDate"
      | "RepLtr2SentDate"
      | "ResponseRcvdDate"
    >
  > {}
