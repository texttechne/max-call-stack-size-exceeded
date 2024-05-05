import { ODataHttpClient } from "@odata2ts/http-client-api";
import { EntityTypeServiceV4 } from "@odata2ts/odata-service";
import { EventLocation, EditableEventLocation } from "./EventLocation";
import { QEventLocation, qEventLocation } from "./QEventLocation";
import { CityService } from "../city/CityService";

export class EventLocationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  EventLocation,
  EditableEventLocation,
  QEventLocation
> {
  private _City?: CityService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEventLocation);
  }

  public City(): CityService<ClientType> {
    if (!this._City) {
      const { client, path } = this.__base;
      this._City = new CityService(client, path, "City");
    }

    return this._City;
  }
}
