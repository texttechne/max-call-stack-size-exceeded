import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  InsurancePolicy,
  EditableInsurancePolicy,
  InsurancePolicyId,
} from "./InsurancePolicy";
import {
  QInsurancePolicy,
  qInsurancePolicy,
  QInsurancePolicyId,
} from "./QInsurancePolicy";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";
import { LawsuitService } from "../lawsuit/LawsuitService";
import { InsuranceClaimId } from "../insurance_claim/InsuranceClaim";
import { QInsuranceClaimId } from "../insurance_claim/QInsuranceClaim";
import {
  InsuranceClaimService,
  InsuranceClaimCollectionService,
} from "../insurance_claim/InsuranceClaimService";

export class InsurancePolicyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  InsurancePolicy,
  EditableInsurancePolicy,
  QInsurancePolicy
> {
  private _InsuranceCompany?: LawsuitPartyService<ClientType>;
  private _Insured?: LawsuitPartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _TiedTo?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInsurancePolicy);
  }

  public InsuranceCompany(): LawsuitPartyService<ClientType> {
    if (!this._InsuranceCompany) {
      const { client, path } = this.__base;
      this._InsuranceCompany = new LawsuitPartyService(
        client,
        path,
        "InsuranceCompany"
      );
    }

    return this._InsuranceCompany;
  }

  public Insured(): LawsuitPartyService<ClientType> {
    if (!this._Insured) {
      const { client, path } = this.__base;
      this._Insured = new LawsuitPartyService(client, path, "Insured");
    }

    return this._Insured;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public TiedTo(): LawsuitPartyService<ClientType> {
    if (!this._TiedTo) {
      const { client, path } = this.__base;
      this._TiedTo = new LawsuitPartyService(client, path, "TiedTo");
    }

    return this._TiedTo;
  }

  public InsuranceClaims(): InsuranceClaimCollectionService<ClientType>;
  public InsuranceClaims(
    id: InsuranceClaimId
  ): InsuranceClaimService<ClientType>;
  public InsuranceClaims(id?: InsuranceClaimId | undefined) {
    const fieldName = "InsuranceClaims";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimCollectionService(client, path, fieldName)
      : new InsuranceClaimService(
          client,
          path,
          new QInsuranceClaimId(fieldName).buildUrl(id)
        );
  }
}

export class InsurancePolicyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  InsurancePolicy,
  EditableInsurancePolicy,
  QInsurancePolicy,
  InsurancePolicyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qInsurancePolicy,
      new QInsurancePolicyId(name)
    );
  }
}
