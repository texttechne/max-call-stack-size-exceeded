import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  QuickBooksBankAccount,
  EditableQuickBooksBankAccount,
  QuickBooksBankAccountId,
} from "./QuickBooksBankAccount";
import {
  QQuickBooksBankAccount,
  qQuickBooksBankAccount,
  QQuickBooksBankAccountId,
} from "./QQuickBooksBankAccount";
import { FirmService } from "../firm/FirmService";

export class QuickBooksBankAccountService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  QuickBooksBankAccount,
  EditableQuickBooksBankAccount,
  QQuickBooksBankAccount
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qQuickBooksBankAccount);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class QuickBooksBankAccountCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  QuickBooksBankAccount,
  EditableQuickBooksBankAccount,
  QQuickBooksBankAccount,
  QuickBooksBankAccountId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qQuickBooksBankAccount,
      new QQuickBooksBankAccountId(name)
    );
  }
}
