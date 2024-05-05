import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  WitnessExhibitDocumentParty,
  EditableWitnessExhibitDocumentParty,
  WitnessExhibitDocumentPartyId,
} from "./WitnessExhibitDocumentParty";
import {
  QWitnessExhibitDocumentParty,
  qWitnessExhibitDocumentParty,
  QWitnessExhibitDocumentPartyId,
} from "./QWitnessExhibitDocumentParty";
import { PartyService } from "../party/PartyService";
import { WitnessExhibitDocumentService } from "../witness_exhibit_document/WitnessExhibitDocumentService";

export class WitnessExhibitDocumentPartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessExhibitDocumentParty,
  EditableWitnessExhibitDocumentParty,
  QWitnessExhibitDocumentParty
> {
  private _Party?: PartyService<ClientType>;
  private _WitnessExhibitDocument?: WitnessExhibitDocumentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessExhibitDocumentParty);
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }

  public WitnessExhibitDocument(): WitnessExhibitDocumentService<ClientType> {
    if (!this._WitnessExhibitDocument) {
      const { client, path } = this.__base;
      this._WitnessExhibitDocument = new WitnessExhibitDocumentService(
        client,
        path,
        "WitnessExhibitDocument"
      );
    }

    return this._WitnessExhibitDocument;
  }
}

export class WitnessExhibitDocumentPartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessExhibitDocumentParty,
  EditableWitnessExhibitDocumentParty,
  QWitnessExhibitDocumentParty,
  WitnessExhibitDocumentPartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessExhibitDocumentParty,
      new QWitnessExhibitDocumentPartyId(name)
    );
  }
}
