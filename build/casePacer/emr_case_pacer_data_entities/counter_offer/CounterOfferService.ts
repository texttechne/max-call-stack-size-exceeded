import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CounterOffer,
  EditableCounterOffer,
  CounterOfferId,
} from "./CounterOffer";
import { QCounterOffer, qCounterOffer, QCounterOfferId } from "./QCounterOffer";
import { DemandService } from "../demand/DemandService";
import { CounterOfferTypeService } from "../counter_offer_type/CounterOfferTypeService";

export class CounterOfferService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CounterOffer,
  EditableCounterOffer,
  QCounterOffer
> {
  private _Demand?: DemandService<ClientType>;
  private _CounterOfferType?: CounterOfferTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCounterOffer);
  }

  public Demand(): DemandService<ClientType> {
    if (!this._Demand) {
      const { client, path } = this.__base;
      this._Demand = new DemandService(client, path, "Demand");
    }

    return this._Demand;
  }

  public CounterOfferType(): CounterOfferTypeService<ClientType> {
    if (!this._CounterOfferType) {
      const { client, path } = this.__base;
      this._CounterOfferType = new CounterOfferTypeService(
        client,
        path,
        "CounterOfferType"
      );
    }

    return this._CounterOfferType;
  }
}

export class CounterOfferCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CounterOffer,
  EditableCounterOffer,
  QCounterOffer,
  CounterOfferId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCounterOffer, new QCounterOfferId(name));
  }
}
