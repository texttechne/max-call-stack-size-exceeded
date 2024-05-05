import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Demand, EditableDemand, DemandId } from "./Demand";
import { QDemand, qDemand, QDemandId } from "./QDemand";
import { LawService } from "../law/LawService";
import { NegotiationService } from "../negotiation/NegotiationService";
import { CounterOfferId } from "../counter_offer/CounterOffer";
import { QCounterOfferId } from "../counter_offer/QCounterOffer";
import {
  CounterOfferService,
  CounterOfferCollectionService,
} from "../counter_offer/CounterOfferService";
import { DemandLineItemId } from "../demand_line_item/DemandLineItem";
import { QDemandLineItemId } from "../demand_line_item/QDemandLineItem";
import {
  DemandLineItemService,
  DemandLineItemCollectionService,
} from "../demand_line_item/DemandLineItemService";
import { InsuranceClaimDemandId } from "../insurance_claim_demand/InsuranceClaimDemand";
import { QInsuranceClaimDemandId } from "../insurance_claim_demand/QInsuranceClaimDemand";
import {
  InsuranceClaimDemandService,
  InsuranceClaimDemandCollectionService,
} from "../insurance_claim_demand/InsuranceClaimDemandService";

export class DemandService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Demand, EditableDemand, QDemand> {
  private _IntangibleDamagesLaw?: LawService<ClientType>;
  private _LiabilityLaw?: LawService<ClientType>;
  private _LostWagesLaw?: LawService<ClientType>;
  private _Negotiation?: NegotiationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDemand);
  }

  public IntangibleDamagesLaw(): LawService<ClientType> {
    if (!this._IntangibleDamagesLaw) {
      const { client, path } = this.__base;
      this._IntangibleDamagesLaw = new LawService(
        client,
        path,
        "IntangibleDamagesLaw"
      );
    }

    return this._IntangibleDamagesLaw;
  }

  public LiabilityLaw(): LawService<ClientType> {
    if (!this._LiabilityLaw) {
      const { client, path } = this.__base;
      this._LiabilityLaw = new LawService(client, path, "LiabilityLaw");
    }

    return this._LiabilityLaw;
  }

  public LostWagesLaw(): LawService<ClientType> {
    if (!this._LostWagesLaw) {
      const { client, path } = this.__base;
      this._LostWagesLaw = new LawService(client, path, "LostWagesLaw");
    }

    return this._LostWagesLaw;
  }

  public Negotiation(): NegotiationService<ClientType> {
    if (!this._Negotiation) {
      const { client, path } = this.__base;
      this._Negotiation = new NegotiationService(client, path, "Negotiation");
    }

    return this._Negotiation;
  }

  public CounterOffers(): CounterOfferCollectionService<ClientType>;
  public CounterOffers(id: CounterOfferId): CounterOfferService<ClientType>;
  public CounterOffers(id?: CounterOfferId | undefined) {
    const fieldName = "CounterOffers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CounterOfferCollectionService(client, path, fieldName)
      : new CounterOfferService(
          client,
          path,
          new QCounterOfferId(fieldName).buildUrl(id)
        );
  }

  public DemandLineItems(): DemandLineItemCollectionService<ClientType>;
  public DemandLineItems(
    id: DemandLineItemId
  ): DemandLineItemService<ClientType>;
  public DemandLineItems(id?: DemandLineItemId | undefined) {
    const fieldName = "DemandLineItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DemandLineItemCollectionService(client, path, fieldName)
      : new DemandLineItemService(
          client,
          path,
          new QDemandLineItemId(fieldName).buildUrl(id)
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
}

export class DemandCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Demand,
  EditableDemand,
  QDemand,
  DemandId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDemand, new QDemandId(name));
  }
}
