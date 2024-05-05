import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCounterOffer } from "../counter_offer/QCounterOffer";
import { CounterOfferTypeId } from "./CounterOfferType";

export class QCounterOfferType extends QueryObject {
  public readonly CounterOfferTypeId = new QNumberPath(
    this.withPrefix("CounterOfferTypeId")
  );
  public readonly CounterOfferTypeText = new QStringPath(
    this.withPrefix("CounterOfferTypeText")
  );
  public readonly CounterOffers = new QEntityCollectionPath(
    this.withPrefix("CounterOffers"),
    () => QCounterOffer
  );
}

export const qCounterOfferType = new QCounterOfferType();

export class QCounterOfferTypeId extends QId<CounterOfferTypeId> {
  private readonly params = [new QNumberParam("CounterOfferTypeId")];

  getParams() {
    return this.params;
  }
}
