import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  SettlementDocument,
  EditableSettlementDocument,
  SettlementDocumentId,
} from "./SettlementDocument";
import {
  QSettlementDocument,
  qSettlementDocument,
  QSettlementDocumentId,
} from "./QSettlementDocument";
import { PartyService } from "../party/PartyService";

export class SettlementDocumentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SettlementDocument,
  EditableSettlementDocument,
  QSettlementDocument
> {
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementDocument);
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class SettlementDocumentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SettlementDocument,
  EditableSettlementDocument,
  QSettlementDocument,
  SettlementDocumentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSettlementDocument,
      new QSettlementDocumentId(name)
    );
  }
}
