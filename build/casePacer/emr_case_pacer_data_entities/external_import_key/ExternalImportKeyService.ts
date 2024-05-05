import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  ExternalImportKey,
  EditableExternalImportKey,
  ExternalImportKeyId,
} from "./ExternalImportKey";
import {
  QExternalImportKey,
  qExternalImportKey,
  QExternalImportKeyId,
} from "./QExternalImportKey";
import { FirmService } from "../firm/FirmService";

export class ExternalImportKeyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ExternalImportKey,
  EditableExternalImportKey,
  QExternalImportKey
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qExternalImportKey);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class ExternalImportKeyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ExternalImportKey,
  EditableExternalImportKey,
  QExternalImportKey,
  ExternalImportKeyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qExternalImportKey,
      new QExternalImportKeyId(name)
    );
  }
}
