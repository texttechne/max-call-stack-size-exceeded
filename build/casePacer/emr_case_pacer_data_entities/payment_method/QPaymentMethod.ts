import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QExpense } from "../expense/QExpense";
import { PaymentMethodId } from "./PaymentMethod";

export class QPaymentMethod extends QueryObject {
  public readonly PaymentMethodId = new QNumberPath(
    this.withPrefix("PaymentMethodId")
  );
  public readonly PaymentMethodName = new QStringPath(
    this.withPrefix("PaymentMethodName")
  );
  public readonly Expenses = new QEntityCollectionPath(
    this.withPrefix("Expenses"),
    () => QExpense
  );
}

export const qPaymentMethod = new QPaymentMethod();

export class QPaymentMethodId extends QId<PaymentMethodId> {
  private readonly params = [new QNumberParam("PaymentMethodId")];

  getParams() {
    return this.params;
  }
}
