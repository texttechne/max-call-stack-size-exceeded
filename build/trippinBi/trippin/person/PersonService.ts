import {
  ODataModelResponseV4,
  ODataCollectionResponseV4,
  ODataValueResponseV4,
} from "@odata2ts/odata-core";
import {
  StringCollection,
  QStringCollection,
  qStringCollection,
  EnumCollection,
  QEnumCollection,
  qEnumCollection,
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
import {
  Person,
  EditablePerson,
  PersonId,
  Person_GetFriendsTripsParams,
  Person_UpdateLastNameParams,
  Person_ShareTripParams,
} from "./Person";
import {
  QPerson,
  qPerson,
  QPersonId,
  Person_QGetFavoriteAirline,
  Person_QGetFriendsTrips,
  Person_QUpdateLastName,
  Person_QShareTrip,
} from "./QPerson";
import { Location, EditableLocation } from "../location/Location";
import { QLocation, qLocation } from "../location/QLocation";
import { LocationService } from "../location/LocationService";
import { Feature } from "../feature/Feature";
import { TripId, Trip } from "../trip/Trip";
import { QTripId } from "../trip/QTrip";
import { TripService, TripCollectionService } from "../trip/TripService";
import { Airline } from "../airline/Airline";

export class PersonService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Person, EditablePerson, QPerson> {
  private _Emails?: CollectionServiceV4<
    ClientType,
    StringCollection,
    QStringCollection
  >;
  private _AddressInfo?: CollectionServiceV4<
    ClientType,
    Location,
    QLocation,
    EditableLocation
  >;
  private _HomeAddress?: LocationService<ClientType>;
  private _Features?: CollectionServiceV4<
    ClientType,
    EnumCollection<Feature>,
    QEnumCollection
  >;
  private _BestFriend?: PersonService<ClientType>;
  private _Person_QGetFavoriteAirline?: Person_QGetFavoriteAirline;
  private _Person_QGetFriendsTrips?: Person_QGetFriendsTrips;
  private _Person_QUpdateLastName?: Person_QUpdateLastName;
  private _Person_QShareTrip?: Person_QShareTrip;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPerson);
  }

  public Emails() {
    if (!this._Emails) {
      const { client, path } = this.__base;
      this._Emails = new CollectionServiceV4(
        client,
        path,
        "Emails",
        qStringCollection
      );
    }

    return this._Emails;
  }

  public AddressInfo(): CollectionServiceV4<
    ClientType,
    Location,
    QLocation,
    EditableLocation
  > {
    if (!this._AddressInfo) {
      const { client, path } = this.__base;
      this._AddressInfo = new CollectionServiceV4(
        client,
        path,
        "AddressInfo",
        qLocation
      );
    }

    return this._AddressInfo;
  }

  public HomeAddress(): LocationService<ClientType> {
    if (!this._HomeAddress) {
      const { client, path } = this.__base;
      this._HomeAddress = new LocationService(client, path, "HomeAddress");
    }

    return this._HomeAddress;
  }

  public Features() {
    if (!this._Features) {
      const { client, path } = this.__base;
      this._Features = new CollectionServiceV4(
        client,
        path,
        "Features",
        qEnumCollection
      );
    }

    return this._Features;
  }

  public Friends(): PersonCollectionService<ClientType>;
  public Friends(id: PersonId): PersonService<ClientType>;
  public Friends(id?: PersonId | undefined) {
    const fieldName = "Friends";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PersonCollectionService(client, path, fieldName)
      : new PersonService(client, path, new QPersonId(fieldName).buildUrl(id));
  }

  public BestFriend(): PersonService<ClientType> {
    if (!this._BestFriend) {
      const { client, path } = this.__base;
      this._BestFriend = new PersonService(client, path, "BestFriend");
    }

    return this._BestFriend;
  }

  public Trips(): TripCollectionService<ClientType>;
  public Trips(id: TripId): TripService<ClientType>;
  public Trips(id?: TripId | undefined) {
    const fieldName = "Trips";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TripCollectionService(client, path, fieldName)
      : new TripService(client, path, new QTripId(fieldName).buildUrl(id));
  }

  public async GetFavoriteAirline(
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<Airline>>> {
    if (!this._Person_QGetFavoriteAirline) {
      this._Person_QGetFavoriteAirline = new Person_QGetFavoriteAirline();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._Person_QGetFavoriteAirline.buildUrl());
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._Person_QGetFavoriteAirline.convertResponse(response);
  }

  public async GetFriendsTrips(
    params: Person_GetFriendsTripsParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataCollectionResponseV4<Trip>>> {
    if (!this._Person_QGetFriendsTrips) {
      this._Person_QGetFriendsTrips = new Person_QGetFriendsTrips();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._Person_QGetFriendsTrips.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._Person_QGetFriendsTrips.convertResponse(response);
  }

  public async UpdateLastName(
    params: Person_UpdateLastNameParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataValueResponseV4<boolean>>> {
    if (!this._Person_QUpdateLastName) {
      this._Person_QUpdateLastName = new Person_QUpdateLastName();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._Person_QUpdateLastName.buildUrl());
    const response = await client.post(
      url,
      this._Person_QUpdateLastName.convertUserParams(params),
      requestConfig,
      getDefaultHeaders()
    );
    return this._Person_QUpdateLastName.convertResponse(response);
  }

  public async ShareTrip(
    params: Person_ShareTripParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<void>>> {
    if (!this._Person_QShareTrip) {
      this._Person_QShareTrip = new Person_QShareTrip();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._Person_QShareTrip.buildUrl());
    return client.post(
      url,
      this._Person_QShareTrip.convertUserParams(params),
      requestConfig,
      getDefaultHeaders()
    );
  }
}

export class PersonCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Person,
  EditablePerson,
  QPerson,
  PersonId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPerson, new QPersonId(name));
  }
}
