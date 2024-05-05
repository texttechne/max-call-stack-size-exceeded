import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DefendantAttorney,
  EditableDefendantAttorney,
  DefendantAttorneyId,
} from "./DefendantAttorney";
import {
  QDefendantAttorney,
  qDefendantAttorney,
  QDefendantAttorneyId,
} from "./QDefendantAttorney";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";

export class DefendantAttorneyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DefendantAttorney,
  EditableDefendantAttorney,
  QDefendantAttorney
> {
  private _Attorney?: LawsuitPartyService<ClientType>;
  private _Defendant?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDefendantAttorney);
  }

  public Attorney(): LawsuitPartyService<ClientType> {
    if (!this._Attorney) {
      const { client, path } = this.__base;
      this._Attorney = new LawsuitPartyService(client, path, "Attorney");
    }

    return this._Attorney;
  }

  public Defendant(): LawsuitPartyService<ClientType> {
    if (!this._Defendant) {
      const { client, path } = this.__base;
      this._Defendant = new LawsuitPartyService(client, path, "Defendant");
    }

    return this._Defendant;
  }
}

export class DefendantAttorneyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DefendantAttorney,
  EditableDefendantAttorney,
  QDefendantAttorney,
  DefendantAttorneyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDefendantAttorney,
      new QDefendantAttorneyId(name)
    );
  }
}
