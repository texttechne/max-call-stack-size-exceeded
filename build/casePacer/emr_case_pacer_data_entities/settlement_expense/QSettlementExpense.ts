import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QExpense } from "../expense/QExpense";
import { QSettlement } from "../settlement/QSettlement";
import { SettlementExpenseId } from "./SettlementExpense";

export class QSettlementExpense extends QueryObject {
  public readonly SettlementExpenseId = new QNumberPath(
    this.withPrefix("SettlementExpenseId")
  );
  public readonly SettlementId = new QNumberPath(
    this.withPrefix("SettlementId")
  );
  public readonly ExpenseId = new QNumberPath(this.withPrefix("ExpenseId"));
  public readonly Include = new QBooleanPath(this.withPrefix("Include"));
  public readonly Expense = new QEntityPath(
    this.withPrefix("Expense"),
    () => QExpense
  );
  public readonly Settlement = new QEntityPath(
    this.withPrefix("Settlement"),
    () => QSettlement
  );
}

export const qSettlementExpense = new QSettlementExpense();

export class QSettlementExpenseId extends QId<SettlementExpenseId> {
  private readonly params = [new QNumberParam("SettlementExpenseId")];

  getParams() {
    return this.params;
  }
}
