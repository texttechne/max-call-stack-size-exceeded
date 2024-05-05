import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { ExpenseType, EditableExpenseType, ExpenseTypeId } from "./ExpenseType";
import { QExpenseType, qExpenseType, QExpenseTypeId } from "./QExpenseType";
import { ExpenseId } from "../expense/Expense";
import { QExpenseId } from "../expense/QExpense";
import {
  ExpenseService,
  ExpenseCollectionService,
} from "../expense/ExpenseService";

export class ExpenseTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ExpenseType,
  EditableExpenseType,
  QExpenseType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qExpenseType);
  }

  public Expenses(): ExpenseCollectionService<ClientType>;
  public Expenses(id: ExpenseId): ExpenseService<ClientType>;
  public Expenses(id?: ExpenseId | undefined) {
    const fieldName = "Expenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExpenseCollectionService(client, path, fieldName)
      : new ExpenseService(
          client,
          path,
          new QExpenseId(fieldName).buildUrl(id)
        );
  }
}

export class ExpenseTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ExpenseType,
  EditableExpenseType,
  QExpenseType,
  ExpenseTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qExpenseType, new QExpenseTypeId(name));
  }
}
