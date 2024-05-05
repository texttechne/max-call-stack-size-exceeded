import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Negotiation, EditableNegotiation, NegotiationId } from "./Negotiation";
import { QNegotiation, qNegotiation, QNegotiationId } from "./QNegotiation";
import { InsuranceClaimService } from "../insurance_claim/InsuranceClaimService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { DemandId } from "../demand/Demand";
import { QDemandId } from "../demand/QDemand";
import {
  DemandService,
  DemandCollectionService,
} from "../demand/DemandService";

export class NegotiationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Negotiation,
  EditableNegotiation,
  QNegotiation
> {
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qNegotiation);
  }

  public InsuranceClaim(): InsuranceClaimService<ClientType> {
    if (!this._InsuranceClaim) {
      const { client, path } = this.__base;
      this._InsuranceClaim = new InsuranceClaimService(
        client,
        path,
        "InsuranceClaim"
      );
    }

    return this._InsuranceClaim;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Demands(): DemandCollectionService<ClientType>;
  public Demands(id: DemandId): DemandService<ClientType>;
  public Demands(id?: DemandId | undefined) {
    const fieldName = "Demands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DemandCollectionService(client, path, fieldName)
      : new DemandService(client, path, new QDemandId(fieldName).buildUrl(id));
  }
}

export class NegotiationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Negotiation,
  EditableNegotiation,
  QNegotiation,
  NegotiationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qNegotiation, new QNegotiationId(name));
  }
}
