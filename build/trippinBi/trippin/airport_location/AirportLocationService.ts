import { ODataHttpClient } from "@odata2ts/http-client-api";
import { EntityTypeServiceV4 } from "@odata2ts/odata-service";
import { AirportLocation, EditableAirportLocation } from "./AirportLocation";
import { QAirportLocation, qAirportLocation } from "./QAirportLocation";
import { CityService } from "../city/CityService";

export class AirportLocationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AirportLocation,
  EditableAirportLocation,
  QAirportLocation
> {
  private _City?: CityService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAirportLocation);
  }

  public City(): CityService<ClientType> {
    if (!this._City) {
      const { client, path } = this.__base;
      this._City = new CityService(client, path, "City");
    }

    return this._City;
  }
}
