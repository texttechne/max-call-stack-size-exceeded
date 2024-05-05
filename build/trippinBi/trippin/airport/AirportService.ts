import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Airport, EditableAirport, AirportId } from "./Airport";
import { QAirport, qAirport, QAirportId } from "./QAirport";
import { AirportLocationService } from "../airport_location/AirportLocationService";
import { AirlineId } from "../airline/Airline";
import { QAirlineId } from "../airline/QAirline";
import {
  AirlineService,
  AirlineCollectionService,
} from "../airline/AirlineService";

export class AirportService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Airport, EditableAirport, QAirport> {
  private _Location?: AirportLocationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAirport);
  }

  public Location(): AirportLocationService<ClientType> {
    if (!this._Location) {
      const { client, path } = this.__base;
      this._Location = new AirportLocationService(client, path, "Location");
    }

    return this._Location;
  }

  public Airlines(): AirlineCollectionService<ClientType>;
  public Airlines(id: AirlineId): AirlineService<ClientType>;
  public Airlines(id?: AirlineId | undefined) {
    const fieldName = "Airlines";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AirlineCollectionService(client, path, fieldName)
      : new AirlineService(
          client,
          path,
          new QAirlineId(fieldName).buildUrl(id)
        );
  }
}

export class AirportCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Airport,
  EditableAirport,
  QAirport,
  AirportId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAirport, new QAirportId(name));
  }
}
