import {
  QueryObject,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QStringParam,
} from "@odata2ts/odata-query-objects";
import { QAirportLocation } from "../airport_location/QAirportLocation";
import { QAirline } from "../airline/QAirline";
import { AirportId } from "./Airport";

export class QAirport extends QueryObject {
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly IcaoCode = new QStringPath(this.withPrefix("IcaoCode"));
  public readonly IataCode = new QStringPath(this.withPrefix("IataCode"));
  public readonly Location = new QEntityPath(
    this.withPrefix("Location"),
    () => QAirportLocation
  );
  public readonly Airlines = new QEntityCollectionPath(
    this.withPrefix("Airlines"),
    () => QAirline
  );
}

export const qAirport = new QAirport();

export class QAirportId extends QId<AirportId> {
  private readonly params = [new QStringParam("IcaoCode")];

  getParams() {
    return this.params;
  }
}
