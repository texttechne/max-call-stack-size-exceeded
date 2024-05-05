import { AttorneyFeeInterestType } from "../attorney_fee_interest_type/AttorneyFeeInterestType";
import { LawsuitParty } from "../lawsuit_party/LawsuitParty";

export interface AttorneyFeeInterest {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `AttorneyFeeInterestTypeId` |
   * | Type | `Edm.Int32` |
   */
  AttorneyFeeInterestTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterestValue` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  AttorneyFeeInterestValue: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterestType` |
   * | Type | `Emr.CasePacer.Data.Entities.AttorneyFeeInterestType` |
   */
  AttorneyFeeInterestType?: AttorneyFeeInterestType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  LawsuitParty?: LawsuitParty | null;
}

export type AttorneyFeeInterestId = number | { LawsuitPartyId: number | null };

export interface EditableAttorneyFeeInterest
  extends Pick<AttorneyFeeInterest, "AttorneyFeeInterestValue">,
    Partial<Pick<AttorneyFeeInterest, "AttorneyFeeInterestTypeId">> {}
