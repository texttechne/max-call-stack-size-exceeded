import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { PIP, EditablePIP, PIPId } from "./PIP";
import { QPIP, qPIP, QPIPId } from "./QPIP";
import { InsuranceClaimService } from "../insurance_claim/InsuranceClaimService";
import { PIPBenefitId } from "../pip_benefit/PIPBenefit";
import { QPIPBenefitId } from "../pip_benefit/QPIPBenefit";
import {
  PIPBenefitService,
  PIPBenefitCollectionService,
} from "../pip_benefit/PIPBenefitService";

export class PIPService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, PIP, EditablePIP, QPIP> {
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPIP);
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

  public PIPBenefits(): PIPBenefitCollectionService<ClientType>;
  public PIPBenefits(id: PIPBenefitId): PIPBenefitService<ClientType>;
  public PIPBenefits(id?: PIPBenefitId | undefined) {
    const fieldName = "PIPBenefits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PIPBenefitCollectionService(client, path, fieldName)
      : new PIPBenefitService(
          client,
          path,
          new QPIPBenefitId(fieldName).buildUrl(id)
        );
  }
}

export class PIPCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<ClientType, PIP, EditablePIP, QPIP, PIPId> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPIP, new QPIPId(name));
  }
}
