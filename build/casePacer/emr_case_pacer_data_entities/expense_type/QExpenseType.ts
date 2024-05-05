import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QExpense } from "../expense/QExpense";
import { ExpenseTypeId } from "./ExpenseType";

export class QExpenseType extends QueryObject {
  public readonly ExpenseTypeId = new QNumberPath(
    this.withPrefix("ExpenseTypeId")
  );
  public readonly ExpenseTypeName = new QStringPath(
    this.withPrefix("ExpenseTypeName")
  );
  public readonly Expenses = new QEntityCollectionPath(
    this.withPrefix("Expenses"),
    () => QExpense
  );
}

export const qExpenseType = new QExpenseType();

export class QExpenseTypeId extends QId<ExpenseTypeId> {
  private readonly params = [new QNumberParam("ExpenseTypeId")];

  getParams() {
    return this.params;
  }
}
