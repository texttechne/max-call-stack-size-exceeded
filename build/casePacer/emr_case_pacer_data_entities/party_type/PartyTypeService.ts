import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { PartyType, EditablePartyType, PartyTypeId } from "./PartyType";
import { QPartyType, qPartyType, QPartyTypeId } from "./QPartyType";
import { PartyId } from "../party/Party";
import { QPartyId } from "../party/QParty";
import { PartyService, PartyCollectionService } from "../party/PartyService";

export class PartyTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PartyType,
  EditablePartyType,
  QPartyType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartyType);
  }

  public Parties(): PartyCollectionService<ClientType>;
  public Parties(id: PartyId): PartyService<ClientType>;
  public Parties(id?: PartyId | undefined) {
    const fieldName = "Parties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyCollectionService(client, path, fieldName)
      : new PartyService(client, path, new QPartyId(fieldName).buildUrl(id));
  }
}

export class PartyTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PartyType,
  EditablePartyType,
  QPartyType,
  PartyTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartyType, new QPartyTypeId(name));
  }
}
