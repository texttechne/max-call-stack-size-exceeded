import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import {
  CounterOfferType,
  EditableCounterOfferType,
  CounterOfferTypeId,
} from "./CounterOfferType";
import {
  QCounterOfferType,
  qCounterOfferType,
  QCounterOfferTypeId,
} from "./QCounterOfferType";
import { CounterOfferId } from "../counter_offer/CounterOffer";
import { QCounterOfferId } from "../counter_offer/QCounterOffer";
import {
  CounterOfferService,
  CounterOfferCollectionService,
} from "../counter_offer/CounterOfferService";

export class CounterOfferTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CounterOfferType,
  EditableCounterOfferType,
  QCounterOfferType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCounterOfferType);
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
}

export class CounterOfferTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CounterOfferType,
  EditableCounterOfferType,
  QCounterOfferType,
  CounterOfferTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCounterOfferType,
      new QCounterOfferTypeId(name)
    );
  }
}
