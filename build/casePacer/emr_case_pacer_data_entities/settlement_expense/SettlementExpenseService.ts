import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SettlementExpense,
  EditableSettlementExpense,
  SettlementExpenseId,
} from "./SettlementExpense";
import {
  QSettlementExpense,
  qSettlementExpense,
  QSettlementExpenseId,
} from "./QSettlementExpense";
import { ExpenseService } from "../expense/ExpenseService";
import { SettlementService } from "../settlement/SettlementService";

export class SettlementExpenseService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SettlementExpense,
  EditableSettlementExpense,
  QSettlementExpense
> {
  private _Expense?: ExpenseService<ClientType>;
  private _Settlement?: SettlementService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementExpense);
  }

  public Expense(): ExpenseService<ClientType> {
    if (!this._Expense) {
      const { client, path } = this.__base;
      this._Expense = new ExpenseService(client, path, "Expense");
    }

    return this._Expense;
  }

  public Settlement(): SettlementService<ClientType> {
    if (!this._Settlement) {
      const { client, path } = this.__base;
      this._Settlement = new SettlementService(client, path, "Settlement");
    }

    return this._Settlement;
  }
}

export class SettlementExpenseCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SettlementExpense,
  EditableSettlementExpense,
  QSettlementExpense,
  SettlementExpenseId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSettlementExpense,
      new QSettlementExpenseId(name)
    );
  }
}
