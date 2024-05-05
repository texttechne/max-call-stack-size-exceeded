import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  QuickBooksExpenseAccount,
  EditableQuickBooksExpenseAccount,
  QuickBooksExpenseAccountId,
} from "./QuickBooksExpenseAccount";
import {
  QQuickBooksExpenseAccount,
  qQuickBooksExpenseAccount,
  QQuickBooksExpenseAccountId,
} from "./QQuickBooksExpenseAccount";
import { FirmService } from "../firm/FirmService";

export class QuickBooksExpenseAccountService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  QuickBooksExpenseAccount,
  EditableQuickBooksExpenseAccount,
  QQuickBooksExpenseAccount
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qQuickBooksExpenseAccount);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class QuickBooksExpenseAccountCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  QuickBooksExpenseAccount,
  EditableQuickBooksExpenseAccount,
  QQuickBooksExpenseAccount,
  QuickBooksExpenseAccountId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qQuickBooksExpenseAccount,
      new QQuickBooksExpenseAccountId(name)
    );
  }
}
