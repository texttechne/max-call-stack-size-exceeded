import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QParty } from "../party/QParty";
import { QExpenseType } from "../expense_type/QExpenseType";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QPaymentMethod } from "../payment_method/QPaymentMethod";
import { QSettlement } from "../settlement/QSettlement";
import { QActivityLog } from "../activity_log/QActivityLog";
import { QSettlementExpense } from "../settlement_expense/QSettlementExpense";
import { ExpenseId } from "./Expense";

export class QExpense extends QueryObject {
  public readonly ExpenseId = new QNumberPath(this.withPrefix("ExpenseId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PayeePartyId = new QNumberPath(
    this.withPrefix("PayeePartyId")
  );
  public readonly ExpenseTypeId = new QNumberPath(
    this.withPrefix("ExpenseTypeId")
  );
  public readonly ClientId = new QNumberPath(this.withPrefix("ClientId"));
  public readonly AttorneyId = new QNumberPath(this.withPrefix("AttorneyId"));
  public readonly AccountNumber = new QStringPath(
    this.withPrefix("AccountNumber")
  );
  public readonly CheckNumber = new QStringPath(this.withPrefix("CheckNumber"));
  public readonly ExpenseDate = new QDateTimeOffsetPath(
    this.withPrefix("ExpenseDate")
  );
  public readonly Amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly Memo = new QStringPath(this.withPrefix("Memo"));
  public readonly PayeeMemo = new QStringPath(this.withPrefix("PayeeMemo"));
  public readonly SettlementID = new QNumberPath(
    this.withPrefix("SettlementID")
  );
  public readonly VoidFlag = new QBooleanPath(this.withPrefix("VoidFlag"));
  public readonly QBTxnId = new QStringPath(this.withPrefix("QBTxnId"));
  public readonly QBActionType = new QStringPath(
    this.withPrefix("QBActionType")
  );
  public readonly QBBankAcct = new QStringPath(this.withPrefix("QBBankAcct"));
  public readonly QBExpenseAcct = new QStringPath(
    this.withPrefix("QBExpenseAcct")
  );
  public readonly RelatedEntityId = new QNumberPath(
    this.withPrefix("RelatedEntityId")
  );
  public readonly RelatedEntityType = new QStringPath(
    this.withPrefix("RelatedEntityType")
  );
  public readonly PaidDate = new QDateTimeOffsetPath(
    this.withPrefix("PaidDate")
  );
  public readonly PaymentAmount = new QNumberPath(
    this.withPrefix("PaymentAmount")
  );
  public readonly PaymentMethodId = new QNumberPath(
    this.withPrefix("PaymentMethodId")
  );
  public readonly InternalNotes = new QStringPath(
    this.withPrefix("InternalNotes")
  );
  public readonly InvoiceNumber = new QStringPath(
    this.withPrefix("InvoiceNumber")
  );
  public readonly ExpenseSyncFlag = new QBooleanPath(
    this.withPrefix("ExpenseSyncFlag")
  );
  public readonly PaymentPartyId = new QNumberPath(
    this.withPrefix("PaymentPartyId")
  );
  public readonly CPPaidDate = new QDateTimeOffsetPath(
    this.withPrefix("CPPaidDate")
  );
  public readonly CPPaidAmount = new QNumberPath(
    this.withPrefix("CPPaidAmount")
  );
  public readonly DueDate = new QDateTimeOffsetPath(this.withPrefix("DueDate"));
  public readonly Attorney = new QEntityPath(
    this.withPrefix("Attorney"),
    () => QParty
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly ExpenseType = new QEntityPath(
    this.withPrefix("ExpenseType"),
    () => QExpenseType
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Payee = new QEntityPath(
    this.withPrefix("Payee"),
    () => QParty
  );
  public readonly PaymentMethod = new QEntityPath(
    this.withPrefix("PaymentMethod"),
    () => QPaymentMethod
  );
  public readonly PaymentParty = new QEntityPath(
    this.withPrefix("PaymentParty"),
    () => QParty
  );
  public readonly Settlement = new QEntityPath(
    this.withPrefix("Settlement"),
    () => QSettlement
  );
  public readonly ActivityLogs = new QEntityCollectionPath(
    this.withPrefix("ActivityLogs"),
    () => QActivityLog
  );
  public readonly SettlementExpenses = new QEntityCollectionPath(
    this.withPrefix("SettlementExpenses"),
    () => QSettlementExpense
  );
}

export const qExpense = new QExpense();

export class QExpenseId extends QId<ExpenseId> {
  private readonly params = [new QNumberParam("ExpenseId")];

  getParams() {
    return this.params;
  }
}
