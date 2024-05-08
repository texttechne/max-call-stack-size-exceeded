import { ODataCollectionResponseV4 } from "@odata2ts/odata-core";
import {
  StringCollection,
  QStringCollection,
  qStringCollection,
} from "@odata2ts/odata-query-objects";
import {
  ODataHttpClient,
  ODataHttpClientConfig,
  HttpResponseModel,
} from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  CollectionServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Trip, EditableTrip, TripId } from "./Trip";
import { QTrip, qTrip, Trip_QGetInvolvedPeople, QTripId } from "./QTrip";
import { PersonId, Person } from "../person/Person";
import { QPersonId } from "../person/QPerson";
import {
  PersonService,
  PersonCollectionService,
} from "../person/PersonService";
import { PlanItemId } from "../plan_item/PlanItem";
import { QPlanItemId } from "../plan_item/QPlanItem";
import {
  PlanItemService,
  PlanItemCollectionService,
} from "../plan_item/PlanItemService";

export class TripService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Trip, EditableTrip, QTrip> {
  private _Tags?: CollectionServiceV4<
    ClientType,
    StringCollection,
    QStringCollection
  >;
  private _Trip_QGetInvolvedPeople?: Trip_QGetInvolvedPeople;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrip);
  }

  public Tags() {
    if (!this._Tags) {
      const { client, path } = this.__base;
      this._Tags = new CollectionServiceV4(
        client,
        path,
        "Tags",
        qStringCollection
      );
    }

    return this._Tags;
  }

  public TripPeople(): PersonCollectionService<ClientType>;
  public TripPeople(id: PersonId): PersonService<ClientType>;
  public TripPeople(id?: PersonId | undefined) {
    const fieldName = "TripPeople";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PersonCollectionService(client, path, fieldName)
      : new PersonService(client, path, new QPersonId(fieldName).buildUrl(id));
  }

  public PlanItems(): PlanItemCollectionService<ClientType>;
  public PlanItems(id: PlanItemId): PlanItemService<ClientType>;
  public PlanItems(id?: PlanItemId | undefined) {
    const fieldName = "PlanItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PlanItemCollectionService(client, path, fieldName)
      : new PlanItemService(
          client,
          path,
          new QPlanItemId(fieldName).buildUrl(id)
        );
  }

  public async GetInvolvedPeople(
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataCollectionResponseV4<Person>>> {
    if (!this._Trip_QGetInvolvedPeople) {
      this._Trip_QGetInvolvedPeople = new Trip_QGetInvolvedPeople();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._Trip_QGetInvolvedPeople.buildUrl());
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._Trip_QGetInvolvedPeople.convertResponse(response);
  }
}

export class TripCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<ClientType, Trip, EditableTrip, QTrip, TripId> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrip, new QTripId(name));
  }
}
