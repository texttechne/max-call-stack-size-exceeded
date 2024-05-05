import { Expense } from "../expense/Expense";
import { Settlement } from "../settlement/Settlement";

export interface SettlementExpense {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementExpenseId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementExpenseId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementId` |
   * | Type | `Edm.Int32` |
   */
  SettlementId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseId` |
   * | Type | `Edm.Int32` |
   */
  ExpenseId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Include` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Include: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expense` |
   * | Type | `Emr.CasePacer.Data.Entities.Expense` |
   */
  Expense?: Expense | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlement` |
   * | Type | `Emr.CasePacer.Data.Entities.Settlement` |
   */
  Settlement?: Settlement | null;
}

export type SettlementExpenseId = number | { SettlementExpenseId: number };

export interface EditableSettlementExpense
  extends Pick<SettlementExpense, "Include">,
    Partial<Pick<SettlementExpense, "SettlementId" | "ExpenseId">> {}
