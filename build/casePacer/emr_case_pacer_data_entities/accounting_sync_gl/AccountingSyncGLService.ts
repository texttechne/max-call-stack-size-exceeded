import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  AccountingSyncGL,
  EditableAccountingSyncGL,
  AccountingSyncGLId,
} from "./AccountingSyncGL";
import {
  QAccountingSyncGL,
  qAccountingSyncGL,
  QAccountingSyncGLId,
} from "./QAccountingSyncGL";
import { LawsuitTypeService } from "../lawsuit_type/LawsuitTypeService";

export class AccountingSyncGLService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AccountingSyncGL,
  EditableAccountingSyncGL,
  QAccountingSyncGL
> {
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAccountingSyncGL);
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }
}

export class AccountingSyncGLCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AccountingSyncGL,
  EditableAccountingSyncGL,
  QAccountingSyncGL,
  AccountingSyncGLId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAccountingSyncGL,
      new QAccountingSyncGLId(name)
    );
  }
}
