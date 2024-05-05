import { LienSubrogation } from "../lien_subrogation/LienSubrogation";

export interface LienSubrogationPaymentType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PaymentTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PaymentTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubrogations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LienSubrogation)` |
   */
  LienSubrogations?: Array<LienSubrogation>;
}

export type LienSubrogationPaymentTypeId = number | { PaymentTypeId: number };

export interface EditableLienSubrogationPaymentType
  extends Pick<LienSubrogationPaymentType, "PaymentTypeName"> {}
