import {
  QueryObject,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QStringParam,
} from "@odata2ts/odata-query-objects";
import { QAirport } from "../airport/QAirport";
import { AirlineId } from "./Airline";

export class QAirline extends QueryObject {
  public readonly AirlineCode = new QStringPath(this.withPrefix("AirlineCode"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly HomeAirport = new QEntityPath(
    this.withPrefix("HomeAirport"),
    () => QAirport
  );
  public readonly Airports = new QEntityCollectionPath(
    this.withPrefix("Airports"),
    () => QAirport
  );
}

export const qAirline = new QAirline();

export class QAirlineId extends QId<AirlineId> {
  private readonly params = [new QStringParam("AirlineCode")];

  getParams() {
    return this.params;
  }
}
