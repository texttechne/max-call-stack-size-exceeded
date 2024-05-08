import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Airline, EditableAirline, AirlineId } from "./Airline";
import { QAirline, qAirline, QAirlineId } from "./QAirline";
import {
  AirportService,
  AirportCollectionService,
} from "../airport/AirportService";
import { AirportId } from "../airport/Airport";
import { QAirportId } from "../airport/QAirport";

export class AirlineService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Airline, EditableAirline, QAirline> {
  private _HomeAirport?: AirportService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAirline);
  }

  public HomeAirport(): AirportService<ClientType> {
    if (!this._HomeAirport) {
      const { client, path } = this.__base;
      this._HomeAirport = new AirportService(client, path, "HomeAirport");
    }

    return this._HomeAirport;
  }

  public Airports(): AirportCollectionService<ClientType>;
  public Airports(id: AirportId): AirportService<ClientType>;
  public Airports(id?: AirportId | undefined) {
    const fieldName = "Airports";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AirportCollectionService(client, path, fieldName)
      : new AirportService(
          client,
          path,
          new QAirportId(fieldName).buildUrl(id)
        );
  }
}

export class AirlineCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Airline,
  EditableAirline,
  QAirline,
  AirlineId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAirline, new QAirlineId(name));
  }
}
