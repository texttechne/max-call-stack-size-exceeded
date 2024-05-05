import { ODataHttpClient } from "@odata2ts/http-client-api";
import { EntityTypeServiceV4 } from "@odata2ts/odata-service";
import { Location, EditableLocation } from "./Location";
import { QLocation, qLocation } from "./QLocation";
import { CityService } from "../city/CityService";

export class LocationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Location,
  EditableLocation,
  QLocation
> {
  private _City?: CityService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLocation);
  }

  public City(): CityService<ClientType> {
    if (!this._City) {
      const { client, path } = this.__base;
      this._City = new CityService(client, path, "City");
    }

    return this._City;
  }
}
