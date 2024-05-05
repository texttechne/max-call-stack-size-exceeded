import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Airline, EditableAirline, AirlineId } from "./Airline";
import { QAirline, qAirline, QAirlineId } from "./QAirline";

export class AirlineService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Airline, EditableAirline, QAirline> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAirline);
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
