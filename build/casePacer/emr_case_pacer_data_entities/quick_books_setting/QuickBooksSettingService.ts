import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  QuickBooksSetting,
  EditableQuickBooksSetting,
  QuickBooksSettingId,
} from "./QuickBooksSetting";
import {
  QQuickBooksSetting,
  qQuickBooksSetting,
  QQuickBooksSettingId,
} from "./QQuickBooksSetting";
import { FirmService } from "../firm/FirmService";

export class QuickBooksSettingService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  QuickBooksSetting,
  EditableQuickBooksSetting,
  QQuickBooksSetting
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qQuickBooksSetting);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class QuickBooksSettingCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  QuickBooksSetting,
  EditableQuickBooksSetting,
  QQuickBooksSetting,
  QuickBooksSettingId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qQuickBooksSetting,
      new QQuickBooksSettingId(name)
    );
  }
}
