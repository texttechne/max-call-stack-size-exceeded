import { Expense } from "../expense/Expense";

export interface PaymentMethod {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PaymentMethodId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PaymentMethodName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  Expenses?: Array<Expense>;
}

export type PaymentMethodId = number | { PaymentMethodId: number };

export interface EditablePaymentMethod
  extends Pick<PaymentMethod, "PaymentMethodName"> {}
