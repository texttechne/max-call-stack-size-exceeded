import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  IntangibleDamage,
  EditableIntangibleDamage,
  IntangibleDamageId,
} from "./IntangibleDamage";
import {
  QIntangibleDamage,
  qIntangibleDamage,
  QIntangibleDamageId,
} from "./QIntangibleDamage";
import { FirmService } from "../firm/FirmService";

export class IntangibleDamageService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntangibleDamage,
  EditableIntangibleDamage,
  QIntangibleDamage
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntangibleDamage);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class IntangibleDamageCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntangibleDamage,
  EditableIntangibleDamage,
  QIntangibleDamage,
  IntangibleDamageId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntangibleDamage,
      new QIntangibleDamageId(name)
    );
  }
}
