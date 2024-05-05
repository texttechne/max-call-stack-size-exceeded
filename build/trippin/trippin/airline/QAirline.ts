import {
  QueryObject,
  QStringPath,
  QId,
  QStringParam,
} from "@odata2ts/odata-query-objects";
import { AirlineId } from "./Airline";

export class QAirline extends QueryObject {
  public readonly AirlineCode = new QStringPath(this.withPrefix("AirlineCode"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
}

export const qAirline = new QAirline();

export class QAirlineId extends QId<AirlineId> {
  private readonly params = [new QStringParam("AirlineCode")];

  getParams() {
    return this.params;
  }
}
