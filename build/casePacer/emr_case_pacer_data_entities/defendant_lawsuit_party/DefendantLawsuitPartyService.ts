import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  DefendantLawsuitParty,
  EditableDefendantLawsuitParty,
  DefendantLawsuitPartyId,
} from "./DefendantLawsuitParty";
import {
  QDefendantLawsuitParty,
  qDefendantLawsuitParty,
  QDefendantLawsuitPartyId,
} from "./QDefendantLawsuitParty";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";
import { DefendantLitigationAssnId } from "../defendant_litigation_assn/DefendantLitigationAssn";
import { QDefendantLitigationAssnId } from "../defendant_litigation_assn/QDefendantLitigationAssn";
import {
  DefendantLitigationAssnService,
  DefendantLitigationAssnCollectionService,
} from "../defendant_litigation_assn/DefendantLitigationAssnService";

export class DefendantLawsuitPartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DefendantLawsuitParty,
  EditableDefendantLawsuitParty,
  QDefendantLawsuitParty
> {
  private _LawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDefendantLawsuitParty);
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

  public DefendantLitigationAssns(): DefendantLitigationAssnCollectionService<ClientType>;
  public DefendantLitigationAssns(
    id: DefendantLitigationAssnId
  ): DefendantLitigationAssnService<ClientType>;
  public DefendantLitigationAssns(id?: DefendantLitigationAssnId | undefined) {
    const fieldName = "DefendantLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DefendantLitigationAssnCollectionService(client, path, fieldName)
      : new DefendantLitigationAssnService(
          client,
          path,
          new QDefendantLitigationAssnId(fieldName).buildUrl(id)
        );
  }
}

export class DefendantLawsuitPartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DefendantLawsuitParty,
  EditableDefendantLawsuitParty,
  QDefendantLawsuitParty,
  DefendantLawsuitPartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDefendantLawsuitParty,
      new QDefendantLawsuitPartyId(name)
    );
  }
}
