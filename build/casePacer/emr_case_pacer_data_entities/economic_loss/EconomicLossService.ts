import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  EconomicLoss,
  EditableEconomicLoss,
  EconomicLossId,
} from "./EconomicLoss";
import { QEconomicLoss, qEconomicLoss, QEconomicLossId } from "./QEconomicLoss";
import { PartyService } from "../party/PartyService";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";
import { LawsuitService } from "../lawsuit/LawsuitService";

export class EconomicLossService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  EconomicLoss,
  EditableEconomicLoss,
  QEconomicLoss
> {
  private _Plaintiff?: PartyService<ClientType>;
  private _Employer?: LawsuitPartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEconomicLoss);
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public Employer(): LawsuitPartyService<ClientType> {
    if (!this._Employer) {
      const { client, path } = this.__base;
      this._Employer = new LawsuitPartyService(client, path, "Employer");
    }

    return this._Employer;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class EconomicLossCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  EconomicLoss,
  EditableEconomicLoss,
  QEconomicLoss,
  EconomicLossId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEconomicLoss, new QEconomicLossId(name));
  }
}
