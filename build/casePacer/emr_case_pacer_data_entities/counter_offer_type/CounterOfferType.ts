import { CounterOffer } from "../counter_offer/CounterOffer";

export interface CounterOfferType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CounterOfferTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferTypeText` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CounterOfferTypeText: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOffers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CounterOffer)` |
   */
  CounterOffers?: Array<CounterOffer>;
}

export type CounterOfferTypeId = number | { CounterOfferTypeId: number };

export interface EditableCounterOfferType
  extends Pick<CounterOfferType, "CounterOfferTypeText"> {}
