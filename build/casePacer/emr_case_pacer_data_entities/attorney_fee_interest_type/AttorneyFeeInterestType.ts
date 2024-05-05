import { AttorneyFeeInterest } from "../attorney_fee_interest/AttorneyFeeInterest";

export interface AttorneyFeeInterestType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterestTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AttorneyFeeInterestTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterestTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AttorneyFeeInterestTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterests` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AttorneyFeeInterest)` |
   */
  AttorneyFeeInterests?: Array<AttorneyFeeInterest>;
}

export type AttorneyFeeInterestTypeId =
  | number
  | { AttorneyFeeInterestTypeId: number };

export interface EditableAttorneyFeeInterestType
  extends Pick<AttorneyFeeInterestType, "AttorneyFeeInterestTypeName"> {}
