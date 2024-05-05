import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  InsuranceClaimDemand,
  EditableInsuranceClaimDemand,
  InsuranceClaimDemandId,
} from "./InsuranceClaimDemand";
import {
  QInsuranceClaimDemand,
  qInsuranceClaimDemand,
  QInsuranceClaimDemandId,
} from "./QInsuranceClaimDemand";
import { DemandService } from "../demand/DemandService";
import { InsuranceClaimService } from "../insurance_claim/InsuranceClaimService";

export class InsuranceClaimDemandService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  InsuranceClaimDemand,
  EditableInsuranceClaimDemand,
  QInsuranceClaimDemand
> {
  private _Demand?: DemandService<ClientType>;
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInsuranceClaimDemand);
  }

  public Demand(): DemandService<ClientType> {
    if (!this._Demand) {
      const { client, path } = this.__base;
      this._Demand = new DemandService(client, path, "Demand");
    }

    return this._Demand;
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
}

export class InsuranceClaimDemandCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  InsuranceClaimDemand,
  EditableInsuranceClaimDemand,
  QInsuranceClaimDemand,
  InsuranceClaimDemandId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qInsuranceClaimDemand,
      new QInsuranceClaimDemandId(name)
    );
  }
}
