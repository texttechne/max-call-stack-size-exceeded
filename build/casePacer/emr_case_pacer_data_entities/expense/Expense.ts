import { Party } from "../party/Party";
import { ExpenseType } from "../expense_type/ExpenseType";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { PaymentMethod } from "../payment_method/PaymentMethod";
import { Settlement } from "../settlement/Settlement";
import { ActivityLog } from "../activity_log/ActivityLog";
import { SettlementExpense } from "../settlement_expense/SettlementExpense";

export interface Expense {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ExpenseId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PayeePartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PayeePartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseTypeId` |
   * | Type | `Edm.Int32` |
   */
  ExpenseTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientId` |
   * | Type | `Edm.Int32` |
   */
  ClientId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyId` |
   * | Type | `Edm.Int32` |
   */
  AttorneyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountNumber` |
   * | Type | `Edm.String` |
   */
  AccountNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CheckNumber` |
   * | Type | `Edm.String` |
   */
  CheckNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ExpenseDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   */
  Amount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Memo` |
   * | Type | `Edm.String` |
   */
  Memo: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PayeeMemo` |
   * | Type | `Edm.String` |
   */
  PayeeMemo: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementID` |
   * | Type | `Edm.Int32` |
   */
  SettlementID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VoidFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  VoidFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBTxnId` |
   * | Type | `Edm.String` |
   */
  QBTxnId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBActionType` |
   * | Type | `Edm.String` |
   */
  QBActionType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBBankAcct` |
   * | Type | `Edm.String` |
   */
  QBBankAcct: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBExpenseAcct` |
   * | Type | `Edm.String` |
   */
  QBExpenseAcct: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityId` |
   * | Type | `Edm.Int32` |
   */
  RelatedEntityId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityType` |
   * | Type | `Edm.String` |
   */
  RelatedEntityType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaidDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  PaidDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  PaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodId` |
   * | Type | `Edm.Int32` |
   */
  PaymentMethodId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InternalNotes` |
   * | Type | `Edm.String` |
   */
  InternalNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvoiceNumber` |
   * | Type | `Edm.String` |
   */
  InvoiceNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseSyncFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ExpenseSyncFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentPartyId` |
   * | Type | `Edm.Int32` |
   */
  PaymentPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPPaidDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CPPaidDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPPaidAmount` |
   * | Type | `Edm.Decimal` |
   */
  CPPaidAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DueDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DueDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Attorney` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Attorney?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Plaintiff?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseType` |
   * | Type | `Emr.CasePacer.Data.Entities.ExpenseType` |
   */
  ExpenseType?: ExpenseType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Payee` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Payee?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethod` |
   * | Type | `Emr.CasePacer.Data.Entities.PaymentMethod` |
   */
  PaymentMethod?: PaymentMethod | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  PaymentParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlement` |
   * | Type | `Emr.CasePacer.Data.Entities.Settlement` |
   */
  Settlement?: Settlement | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityLog)` |
   */
  ActivityLogs?: Array<ActivityLog>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementExpenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementExpense)` |
   */
  SettlementExpenses?: Array<SettlementExpense>;
}

export type ExpenseId = number | { ExpenseId: number };

export interface EditableExpense
  extends Pick<Expense, "PayeePartyId" | "VoidFlag" | "ExpenseSyncFlag">,
    Partial<
      Pick<
        Expense,
        | "LawsuitId"
        | "ExpenseTypeId"
        | "ClientId"
        | "AttorneyId"
        | "AccountNumber"
        | "CheckNumber"
        | "ExpenseDate"
        | "Amount"
        | "Memo"
        | "PayeeMemo"
        | "SettlementID"
        | "QBTxnId"
        | "QBActionType"
        | "QBBankAcct"
        | "QBExpenseAcct"
        | "RelatedEntityId"
        | "RelatedEntityType"
        | "PaidDate"
        | "PaymentAmount"
        | "PaymentMethodId"
        | "InternalNotes"
        | "InvoiceNumber"
        | "PaymentPartyId"
        | "CPPaidDate"
        | "CPPaidAmount"
        | "DueDate"
      >
    > {}
