import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDemand } from "../demand/QDemand";
import { QCounterOfferType } from "../counter_offer_type/QCounterOfferType";
import { CounterOfferId } from "./CounterOffer";

export class QCounterOffer extends QueryObject {
  public readonly CounterOfferId = new QNumberPath(
    this.withPrefix("CounterOfferId")
  );
  public readonly DemandId = new QNumberPath(this.withPrefix("DemandId"));
  public readonly CounterOfferDate = new QDateTimeOffsetPath(
    this.withPrefix("CounterOfferDate")
  );
  public readonly CounterOfferAmount = new QNumberPath(
    this.withPrefix("CounterOfferAmount")
  );
  public readonly CounterOfferTypeId = new QNumberPath(
    this.withPrefix("CounterOfferTypeId")
  );
  public readonly CounterOfferNote = new QStringPath(
    this.withPrefix("CounterOfferNote")
  );
  public readonly Demand = new QEntityPath(
    this.withPrefix("Demand"),
    () => QDemand
  );
  public readonly CounterOfferType = new QEntityPath(
    this.withPrefix("CounterOfferType"),
    () => QCounterOfferType
  );
}

export const qCounterOffer = new QCounterOffer();

export class QCounterOfferId extends QId<CounterOfferId> {
  private readonly params = [new QNumberParam("CounterOfferId")];

  getParams() {
    return this.params;
  }
}
