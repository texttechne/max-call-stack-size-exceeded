import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  QuickBooksLog,
  EditableQuickBooksLog,
  QuickBooksLogId,
} from "./QuickBooksLog";
import {
  QQuickBooksLog,
  qQuickBooksLog,
  QQuickBooksLogId,
} from "./QQuickBooksLog";
import { FirmService } from "../firm/FirmService";

export class QuickBooksLogService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  QuickBooksLog,
  EditableQuickBooksLog,
  QQuickBooksLog
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qQuickBooksLog);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class QuickBooksLogCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  QuickBooksLog,
  EditableQuickBooksLog,
  QQuickBooksLog,
  QuickBooksLogId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qQuickBooksLog, new QQuickBooksLogId(name));
  }
}
