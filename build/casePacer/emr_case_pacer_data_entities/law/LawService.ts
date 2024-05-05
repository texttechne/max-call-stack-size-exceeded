import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Law, EditableLaw, LawId } from "./Law";
import { QLaw, qLaw, QLawId } from "./QLaw";
import { FirmService } from "../firm/FirmService";
import { DemandId } from "../demand/Demand";
import { QDemandId } from "../demand/QDemand";
import {
  DemandService,
  DemandCollectionService,
} from "../demand/DemandService";

export class LawService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Law, EditableLaw, QLaw> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLaw);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public IntangibleDamagesDemands(): DemandCollectionService<ClientType>;
  public IntangibleDamagesDemands(id: DemandId): DemandService<ClientType>;
  public IntangibleDamagesDemands(id?: DemandId | undefined) {
    const fieldName = "IntangibleDamagesDemands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DemandCollectionService(client, path, fieldName)
      : new DemandService(client, path, new QDemandId(fieldName).buildUrl(id));
  }

  public LiabilityDemands(): DemandCollectionService<ClientType>;
  public LiabilityDemands(id: DemandId): DemandService<ClientType>;
  public LiabilityDemands(id?: DemandId | undefined) {
    const fieldName = "LiabilityDemands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DemandCollectionService(client, path, fieldName)
      : new DemandService(client, path, new QDemandId(fieldName).buildUrl(id));
  }

  public LostWagesDemands(): DemandCollectionService<ClientType>;
  public LostWagesDemands(id: DemandId): DemandService<ClientType>;
  public LostWagesDemands(id?: DemandId | undefined) {
    const fieldName = "LostWagesDemands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DemandCollectionService(client, path, fieldName)
      : new DemandService(client, path, new QDemandId(fieldName).buildUrl(id));
  }
}

export class LawCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<ClientType, Law, EditableLaw, QLaw, LawId> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLaw, new QLawId(name));
  }
}
