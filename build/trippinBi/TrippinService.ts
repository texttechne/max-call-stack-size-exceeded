import { ODataModelResponseV4 } from "@odata2ts/odata-core";
import {
  ODataHttpClient,
  ODataHttpClientConfig,
  HttpResponseModel,
} from "@odata2ts/http-client-api";
import { ODataService } from "@odata2ts/odata-service";
import { PersonId, Person } from "./trippin/person/Person";
import { QPersonId } from "./trippin/person/QPerson";
import {
  PersonService,
  PersonCollectionService,
} from "./trippin/person/PersonService";
import { AirlineId } from "./trippin/airline/Airline";
import { QAirlineId } from "./trippin/airline/QAirline";
import {
  AirlineService,
  AirlineCollectionService,
} from "./trippin/airline/AirlineService";
import { AirportId, Airport } from "./trippin/airport/Airport";
import { QAirportId } from "./trippin/airport/QAirport";
import {
  AirportService,
  AirportCollectionService,
} from "./trippin/airport/AirportService";
import {
  QGetPersonWithMostFriends,
  QGetNearestAirport,
  QResetDataSource,
} from "./QTrippin";
import { GetNearestAirportParams } from "./TrippinModel";

export class TrippinService<
  ClientType extends ODataHttpClient
> extends ODataService<ClientType> {
  private _Me?: PersonService<ClientType>;
  private _QGetPersonWithMostFriends?: QGetPersonWithMostFriends;
  private _QGetNearestAirport?: QGetNearestAirport;
  private _QResetDataSource?: QResetDataSource;

  public People(): PersonCollectionService<ClientType>;
  public People(id: PersonId): PersonService<ClientType>;
  public People(id?: PersonId | undefined) {
    const fieldName = "People";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PersonCollectionService(client, path, fieldName)
      : new PersonService(client, path, new QPersonId(fieldName).buildUrl(id));
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

  public Me() {
    if (!this._Me) {
      const { client, path } = this.__base;
      this._Me = new PersonService(client, path, "Me");
    }

    return this._Me;
  }

  public async GetPersonWithMostFriends(
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<Person>>> {
    if (!this._QGetPersonWithMostFriends) {
      this._QGetPersonWithMostFriends = new QGetPersonWithMostFriends();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._QGetPersonWithMostFriends.buildUrl());
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._QGetPersonWithMostFriends.convertResponse(response);
  }

  public async GetNearestAirport(
    params: GetNearestAirportParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<Airport>>> {
    if (!this._QGetNearestAirport) {
      this._QGetNearestAirport = new QGetNearestAirport();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._QGetNearestAirport.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._QGetNearestAirport.convertResponse(response);
  }

  public async ResetDataSource(
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<void>>> {
    if (!this._QResetDataSource) {
      this._QResetDataSource = new QResetDataSource();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._QResetDataSource.buildUrl());
    return client.post(url, {}, requestConfig, getDefaultHeaders());
  }
}
