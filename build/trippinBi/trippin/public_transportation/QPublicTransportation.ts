import { QStringPath } from "@odata2ts/odata-query-objects";
import { QPlanItem } from "../plan_item/QPlanItem";

export class QPublicTransportation extends QPlanItem {
  public readonly SeatNumber = new QStringPath(this.withPrefix("SeatNumber"));
}

export const qPublicTransportation = new QPublicTransportation();
