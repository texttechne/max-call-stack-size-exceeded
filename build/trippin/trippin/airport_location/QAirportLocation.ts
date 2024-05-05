import { QStringPath } from "@odata2ts/odata-query-objects";
import { QLocation } from "../location/QLocation";

export class QAirportLocation extends QLocation {
  public readonly Loc = new QStringPath(this.withPrefix("Loc"));
}

export const qAirportLocation = new QAirportLocation();
