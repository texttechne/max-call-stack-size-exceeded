import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DefendantLitigationAssn,
  EditableDefendantLitigationAssn,
  DefendantLitigationAssnId,
} from "./DefendantLitigationAssn";
import {
  QDefendantLitigationAssn,
  qDefendantLitigationAssn,
  QDefendantLitigationAssnId,
} from "./QDefendantLitigationAssn";
import { DefendantLawsuitPartyService } from "../defendant_lawsuit_party/DefendantLawsuitPartyService";
import { LitigationService } from "../litigation/LitigationService";

export class DefendantLitigationAssnService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DefendantLitigationAssn,
  EditableDefendantLitigationAssn,
  QDefendantLitigationAssn
> {
  private _DefendantLawsuitParty?: DefendantLawsuitPartyService<ClientType>;
  private _Litigation?: LitigationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDefendantLitigationAssn);
  }

  public DefendantLawsuitParty(): DefendantLawsuitPartyService<ClientType> {
    if (!this._DefendantLawsuitParty) {
      const { client, path } = this.__base;
      this._DefendantLawsuitParty = new DefendantLawsuitPartyService(
        client,
        path,
        "DefendantLawsuitParty"
      );
    }

    return this._DefendantLawsuitParty;
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }
}

export class DefendantLitigationAssnCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DefendantLitigationAssn,
  EditableDefendantLitigationAssn,
  QDefendantLitigationAssn,
  DefendantLitigationAssnId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDefendantLitigationAssn,
      new QDefendantLitigationAssnId(name)
    );
  }
}
