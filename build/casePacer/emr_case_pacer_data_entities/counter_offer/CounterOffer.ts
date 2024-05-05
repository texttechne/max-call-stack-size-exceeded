import { Demand } from "../demand/Demand";
import { CounterOfferType } from "../counter_offer_type/CounterOfferType";

export interface CounterOffer {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CounterOfferId: number;
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
   * | Name | `CounterOfferDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CounterOfferDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferAmount` |
   * | Type | `Edm.Decimal` |
   */
  CounterOfferAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferTypeId` |
   * | Type | `Edm.Int32` |
   */
  CounterOfferTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferNote` |
   * | Type | `Edm.String` |
   */
  CounterOfferNote: string | null;
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
   * | Name | `CounterOfferType` |
   * | Type | `Emr.CasePacer.Data.Entities.CounterOfferType` |
   */
  CounterOfferType?: CounterOfferType | null;
}

export type CounterOfferId = number | { CounterOfferId: number };

export interface EditableCounterOffer
  extends Partial<
    Pick<
      CounterOffer,
      | "DemandId"
      | "CounterOfferDate"
      | "CounterOfferAmount"
      | "CounterOfferTypeId"
      | "CounterOfferNote"
    >
  > {}
