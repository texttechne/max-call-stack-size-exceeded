import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Expense, EditableExpense, ExpenseId } from "./Expense";
import { QExpense, qExpense, QExpenseId } from "./QExpense";
import { PartyService } from "../party/PartyService";
import { ExpenseTypeService } from "../expense_type/ExpenseTypeService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { PaymentMethodService } from "../payment_method/PaymentMethodService";
import { SettlementService } from "../settlement/SettlementService";
import { ActivityLogId } from "../activity_log/ActivityLog";
import { QActivityLogId } from "../activity_log/QActivityLog";
import {
  ActivityLogService,
  ActivityLogCollectionService,
} from "../activity_log/ActivityLogService";
import { SettlementExpenseId } from "../settlement_expense/SettlementExpense";
import { QSettlementExpenseId } from "../settlement_expense/QSettlementExpense";
import {
  SettlementExpenseService,
  SettlementExpenseCollectionService,
} from "../settlement_expense/SettlementExpenseService";

export class ExpenseService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Expense, EditableExpense, QExpense> {
  private _Attorney?: PartyService<ClientType>;
  private _Plaintiff?: PartyService<ClientType>;
  private _ExpenseType?: ExpenseTypeService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Payee?: PartyService<ClientType>;
  private _PaymentMethod?: PaymentMethodService<ClientType>;
  private _PaymentParty?: PartyService<ClientType>;
  private _Settlement?: SettlementService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qExpense);
  }

  public Attorney(): PartyService<ClientType> {
    if (!this._Attorney) {
      const { client, path } = this.__base;
      this._Attorney = new PartyService(client, path, "Attorney");
    }

    return this._Attorney;
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public ExpenseType(): ExpenseTypeService<ClientType> {
    if (!this._ExpenseType) {
      const { client, path } = this.__base;
      this._ExpenseType = new ExpenseTypeService(client, path, "ExpenseType");
    }

    return this._ExpenseType;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Payee(): PartyService<ClientType> {
    if (!this._Payee) {
      const { client, path } = this.__base;
      this._Payee = new PartyService(client, path, "Payee");
    }

    return this._Payee;
  }

  public PaymentMethod(): PaymentMethodService<ClientType> {
    if (!this._PaymentMethod) {
      const { client, path } = this.__base;
      this._PaymentMethod = new PaymentMethodService(
        client,
        path,
        "PaymentMethod"
      );
    }

    return this._PaymentMethod;
  }

  public PaymentParty(): PartyService<ClientType> {
    if (!this._PaymentParty) {
      const { client, path } = this.__base;
      this._PaymentParty = new PartyService(client, path, "PaymentParty");
    }

    return this._PaymentParty;
  }

  public Settlement(): SettlementService<ClientType> {
    if (!this._Settlement) {
      const { client, path } = this.__base;
      this._Settlement = new SettlementService(client, path, "Settlement");
    }

    return this._Settlement;
  }

  public ActivityLogs(): ActivityLogCollectionService<ClientType>;
  public ActivityLogs(id: ActivityLogId): ActivityLogService<ClientType>;
  public ActivityLogs(id?: ActivityLogId | undefined) {
    const fieldName = "ActivityLogs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityLogCollectionService(client, path, fieldName)
      : new ActivityLogService(
          client,
          path,
          new QActivityLogId(fieldName).buildUrl(id)
        );
  }

  public SettlementExpenses(): SettlementExpenseCollectionService<ClientType>;
  public SettlementExpenses(
    id: SettlementExpenseId
  ): SettlementExpenseService<ClientType>;
  public SettlementExpenses(id?: SettlementExpenseId | undefined) {
    const fieldName = "SettlementExpenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementExpenseCollectionService(client, path, fieldName)
      : new SettlementExpenseService(
          client,
          path,
          new QSettlementExpenseId(fieldName).buildUrl(id)
        );
  }
}

export class ExpenseCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Expense,
  EditableExpense,
  QExpense,
  ExpenseId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qExpense, new QExpenseId(name));
  }
}
