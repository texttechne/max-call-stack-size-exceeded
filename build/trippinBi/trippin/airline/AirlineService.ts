import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Airline, EditableAirline, AirlineId } from "./Airline";
import { QAirline, qAirline, QAirlineId } from "./QAirline";
import { AirportId } from "../airport/Airport";
import { QAirportId } from "../airport/QAirport";
import {
  AirportService,
  AirportCollectionService,
} from "../airport/AirportService";

export class AirlineService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Airline, EditableAirline, QAirline> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAirline);
  }

  public Aiports(): AirportCollectionService<ClientType>;
  public Aiports(id: AirportId): AirportService<ClientType>;
  public Aiports(id?: AirportId | undefined) {
    const fieldName = "Aiports";
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
