import { ODataHttpClient } from "@odata2ts/http-client-api";
import { EntityTypeServiceV4 } from "@odata2ts/odata-service";
import { City, EditableCity } from "./City";
import { QCity, qCity } from "./QCity";

export class CityService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, City, EditableCity, QCity> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCity);
  }
}
