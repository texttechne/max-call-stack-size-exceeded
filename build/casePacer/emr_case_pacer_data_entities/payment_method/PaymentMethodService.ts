import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  PaymentMethod,
  EditablePaymentMethod,
  PaymentMethodId,
} from "./PaymentMethod";
import {
  QPaymentMethod,
  qPaymentMethod,
  QPaymentMethodId,
} from "./QPaymentMethod";
import { ExpenseId } from "../expense/Expense";
import { QExpenseId } from "../expense/QExpense";
import {
  ExpenseService,
  ExpenseCollectionService,
} from "../expense/ExpenseService";

export class PaymentMethodService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PaymentMethod,
  EditablePaymentMethod,
  QPaymentMethod
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPaymentMethod);
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

export class PaymentMethodCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PaymentMethod,
  EditablePaymentMethod,
  QPaymentMethod,
  PaymentMethodId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPaymentMethod, new QPaymentMethodId(name));
  }
}
