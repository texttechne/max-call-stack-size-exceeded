import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Airport, EditableAirport, AirportId } from "./Airport";
import { QAirport, qAirport, QAirportId } from "./QAirport";
import { AirportLocationService } from "../airport_location/AirportLocationService";

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
