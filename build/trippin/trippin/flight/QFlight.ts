import { QStringPath, QEntityPath } from "@odata2ts/odata-query-objects";
import { QPublicTransportation } from "../public_transportation/QPublicTransportation";
import { QAirline } from "../airline/QAirline";
import { QAirport } from "../airport/QAirport";

export class QFlight extends QPublicTransportation {
  public readonly FlightNumber = new QStringPath(
    this.withPrefix("FlightNumber")
  );
  public readonly Airline = new QEntityPath(
    this.withPrefix("Airline"),
    () => QAirline
  );
  public readonly From = new QEntityPath(
    this.withPrefix("From"),
    () => QAirport
  );
  public readonly To = new QEntityPath(this.withPrefix("To"), () => QAirport);
}

export const qFlight = new QFlight();
