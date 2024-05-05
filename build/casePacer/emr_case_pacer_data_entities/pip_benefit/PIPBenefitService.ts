import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { PIPBenefit, EditablePIPBenefit, PIPBenefitId } from "./PIPBenefit";
import { QPIPBenefit, qPIPBenefit, QPIPBenefitId } from "./QPIPBenefit";
import { InsuranceClaimService } from "../insurance_claim/InsuranceClaimService";
import { PIPService } from "../pip/PIPService";
import { PIPBenefitsTypeService } from "../pip_benefits_type/PIPBenefitsTypeService";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";

export class PIPBenefitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PIPBenefit,
  EditablePIPBenefit,
  QPIPBenefit
> {
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;
  private _PIP?: PIPService<ClientType>;
  private _PIPBenefitsType?: PIPBenefitsTypeService<ClientType>;
  private _ServiceProviderLawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPIPBenefit);
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

  public PIP(): PIPService<ClientType> {
    if (!this._PIP) {
      const { client, path } = this.__base;
      this._PIP = new PIPService(client, path, "PIP");
    }

    return this._PIP;
  }

  public PIPBenefitsType(): PIPBenefitsTypeService<ClientType> {
    if (!this._PIPBenefitsType) {
      const { client, path } = this.__base;
      this._PIPBenefitsType = new PIPBenefitsTypeService(
        client,
        path,
        "PIPBenefitsType"
      );
    }

    return this._PIPBenefitsType;
  }

  public ServiceProviderLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._ServiceProviderLawsuitParty) {
      const { client, path } = this.__base;
      this._ServiceProviderLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "ServiceProviderLawsuitParty"
      );
    }

    return this._ServiceProviderLawsuitParty;
  }
}

export class PIPBenefitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PIPBenefit,
  EditablePIPBenefit,
  QPIPBenefit,
  PIPBenefitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPIPBenefit, new QPIPBenefitId(name));
  }
}
