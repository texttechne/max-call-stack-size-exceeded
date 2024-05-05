import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  InsuranceClaim,
  EditableInsuranceClaim,
  InsuranceClaimId,
} from "./InsuranceClaim";
import {
  QInsuranceClaim,
  qInsuranceClaim,
  QInsuranceClaimId,
} from "./QInsuranceClaim";
import { LawsuitPartyService } from "../lawsuit_party/LawsuitPartyService";
import { InsurancePolicyService } from "../insurance_policy/InsurancePolicyService";
import { NegotiationId } from "../negotiation/Negotiation";
import { QNegotiationId } from "../negotiation/QNegotiation";
import {
  NegotiationService,
  NegotiationCollectionService,
} from "../negotiation/NegotiationService";
import { InsuranceClaimDemandId } from "../insurance_claim_demand/InsuranceClaimDemand";
import { QInsuranceClaimDemandId } from "../insurance_claim_demand/QInsuranceClaimDemand";
import {
  InsuranceClaimDemandService,
  InsuranceClaimDemandCollectionService,
} from "../insurance_claim_demand/InsuranceClaimDemandService";
import { PIPId } from "../pip/PIP";
import { QPIPId } from "../pip/QPIP";
import { PIPService, PIPCollectionService } from "../pip/PIPService";
import { PIPBenefitId } from "../pip_benefit/PIPBenefit";
import { QPIPBenefitId } from "../pip_benefit/QPIPBenefit";
import {
  PIPBenefitService,
  PIPBenefitCollectionService,
} from "../pip_benefit/PIPBenefitService";
import { PropertyDamageId } from "../property_damage/PropertyDamage";
import { QPropertyDamageId } from "../property_damage/QPropertyDamage";
import {
  PropertyDamageService,
  PropertyDamageCollectionService,
} from "../property_damage/PropertyDamageService";
import { SettlementItemId } from "../settlement_item/SettlementItem";
import { QSettlementItemId } from "../settlement_item/QSettlementItem";
import {
  SettlementItemService,
  SettlementItemCollectionService,
} from "../settlement_item/SettlementItemService";

export class InsuranceClaimService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  InsuranceClaim,
  EditableInsuranceClaim,
  QInsuranceClaim
> {
  private _InsuranceAdjuster?: LawsuitPartyService<ClientType>;
  private _InsurancePolicy?: InsurancePolicyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInsuranceClaim);
  }

  public InsuranceAdjuster(): LawsuitPartyService<ClientType> {
    if (!this._InsuranceAdjuster) {
      const { client, path } = this.__base;
      this._InsuranceAdjuster = new LawsuitPartyService(
        client,
        path,
        "InsuranceAdjuster"
      );
    }

    return this._InsuranceAdjuster;
  }

  public InsurancePolicy(): InsurancePolicyService<ClientType> {
    if (!this._InsurancePolicy) {
      const { client, path } = this.__base;
      this._InsurancePolicy = new InsurancePolicyService(
        client,
        path,
        "InsurancePolicy"
      );
    }

    return this._InsurancePolicy;
  }

  public Negotiations(): NegotiationCollectionService<ClientType>;
  public Negotiations(id: NegotiationId): NegotiationService<ClientType>;
  public Negotiations(id?: NegotiationId | undefined) {
    const fieldName = "Negotiations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new NegotiationCollectionService(client, path, fieldName)
      : new NegotiationService(
          client,
          path,
          new QNegotiationId(fieldName).buildUrl(id)
        );
  }

  public InsuranceClaimDemands(): InsuranceClaimDemandCollectionService<ClientType>;
  public InsuranceClaimDemands(
    id: InsuranceClaimDemandId
  ): InsuranceClaimDemandService<ClientType>;
  public InsuranceClaimDemands(id?: InsuranceClaimDemandId | undefined) {
    const fieldName = "InsuranceClaimDemands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimDemandCollectionService(client, path, fieldName)
      : new InsuranceClaimDemandService(
          client,
          path,
          new QInsuranceClaimDemandId(fieldName).buildUrl(id)
        );
  }

  public PIPs(): PIPCollectionService<ClientType>;
  public PIPs(id: PIPId): PIPService<ClientType>;
  public PIPs(id?: PIPId | undefined) {
    const fieldName = "PIPs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PIPCollectionService(client, path, fieldName)
      : new PIPService(client, path, new QPIPId(fieldName).buildUrl(id));
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

  public PropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public PropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public PropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "PropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }

  public SettlementItems(): SettlementItemCollectionService<ClientType>;
  public SettlementItems(
    id: SettlementItemId
  ): SettlementItemService<ClientType>;
  public SettlementItems(id?: SettlementItemId | undefined) {
    const fieldName = "SettlementItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementItemCollectionService(client, path, fieldName)
      : new SettlementItemService(
          client,
          path,
          new QSettlementItemId(fieldName).buildUrl(id)
        );
  }
}

export class InsuranceClaimCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  InsuranceClaim,
  EditableInsuranceClaim,
  QInsuranceClaim,
  InsuranceClaimId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInsuranceClaim, new QInsuranceClaimId(name));
  }
}
