import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  PlaintiffLawsuitParty,
  EditablePlaintiffLawsuitParty,
  PlaintiffLawsuitPartyId,
} from "./PlaintiffLawsuitParty";
import {
  QPlaintiffLawsuitParty,
  qPlaintiffLawsuitParty,
  QPlaintiffLawsuitPartyId,
} from "./QPlaintiffLawsuitParty";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";

export class PlaintiffLawsuitPartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PlaintiffLawsuitParty,
  EditablePlaintiffLawsuitParty,
  QPlaintiffLawsuitParty
> {
  private _LawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPlaintiffLawsuitParty);
  }

  public LawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._LawsuitParty) {
      const { client, path } = this.__base;
      this._LawsuitParty = new LawsuitPartyService(
        client,
        path,
        "LawsuitParty"
      );
    }

    return this._LawsuitParty;
  }
}

export class PlaintiffLawsuitPartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PlaintiffLawsuitParty,
  EditablePlaintiffLawsuitParty,
  QPlaintiffLawsuitParty,
  PlaintiffLawsuitPartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qPlaintiffLawsuitParty,
      new QPlaintiffLawsuitPartyId(name)
    );
  }
}
