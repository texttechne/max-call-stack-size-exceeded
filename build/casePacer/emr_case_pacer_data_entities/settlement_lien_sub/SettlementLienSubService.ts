import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SettlementLienSub,
  EditableSettlementLienSub,
  SettlementLienSubId,
} from "./SettlementLienSub";
import {
  QSettlementLienSub,
  qSettlementLienSub,
  QSettlementLienSubId,
} from "./QSettlementLienSub";
import { LienSubrogationService } from "../lien_subrogation/LienSubrogationService";
import { SettlementService } from "../settlement/SettlementService";

export class SettlementLienSubService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SettlementLienSub,
  EditableSettlementLienSub,
  QSettlementLienSub
> {
  private _LienSubrogation?: LienSubrogationService<ClientType>;
  private _Settlement?: SettlementService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementLienSub);
  }

  public LienSubrogation(): LienSubrogationService<ClientType> {
    if (!this._LienSubrogation) {
      const { client, path } = this.__base;
      this._LienSubrogation = new LienSubrogationService(
        client,
        path,
        "LienSubrogation"
      );
    }

    return this._LienSubrogation;
  }

  public Settlement(): SettlementService<ClientType> {
    if (!this._Settlement) {
      const { client, path } = this.__base;
      this._Settlement = new SettlementService(client, path, "Settlement");
    }

    return this._Settlement;
  }
}

export class SettlementLienSubCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SettlementLienSub,
  EditableSettlementLienSub,
  QSettlementLienSub,
  SettlementLienSubId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSettlementLienSub,
      new QSettlementLienSubId(name)
    );
  }
}
