import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  Investigator,
  EditableInvestigator,
  InvestigatorId,
} from "./Investigator";
import { QInvestigator, qInvestigator, QInvestigatorId } from "./QInvestigator";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";
import { LawsuitService } from "../lawsuit/LawsuitService";

export class InvestigatorService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Investigator,
  EditableInvestigator,
  QInvestigator
> {
  private _InvestigatorLawsuitParty?: LawsuitPartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInvestigator);
  }

  public InvestigatorLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._InvestigatorLawsuitParty) {
      const { client, path } = this.__base;
      this._InvestigatorLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "InvestigatorLawsuitParty"
      );
    }

    return this._InvestigatorLawsuitParty;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class InvestigatorCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Investigator,
  EditableInvestigator,
  QInvestigator,
  InvestigatorId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInvestigator, new QInvestigatorId(name));
  }
}
