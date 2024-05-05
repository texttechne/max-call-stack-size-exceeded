import { Expense } from "../expense/Expense";

export interface ExpenseType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ExpenseTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ExpenseTypeName: string;
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

export type ExpenseTypeId = number | { ExpenseTypeId: number };

export interface EditableExpenseType
  extends Pick<ExpenseType, "ExpenseTypeName"> {}
