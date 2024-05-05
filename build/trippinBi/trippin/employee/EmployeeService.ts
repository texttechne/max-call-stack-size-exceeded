import {
  StringCollection,
  QStringCollection,
  qStringCollection,
  EnumCollection,
  QEnumCollection,
  qEnumCollection,
} from "@odata2ts/odata-query-objects";
import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  CollectionServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Employee, EditableEmployee } from "./Employee";
import { QEmployee, qEmployee } from "./QEmployee";
import { Location, EditableLocation } from "../location/Location";
import { QLocation, qLocation } from "../location/QLocation";
import { LocationService } from "../location/LocationService";
import { Feature } from "../feature/Feature";
import { PersonId } from "../person/Person";
import { QPersonId } from "../person/QPerson";
import {
  PersonService,
  PersonCollectionService,
} from "../person/PersonService";
import { TripId } from "../trip/Trip";
import { QTripId } from "../trip/QTrip";
import { TripService, TripCollectionService } from "../trip/TripService";

export class EmployeeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Employee,
  EditableEmployee,
  QEmployee
> {
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

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEmployee);
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

  public Peers(): PersonCollectionService<ClientType>;
  public Peers(id: PersonId): PersonService<ClientType>;
  public Peers(id?: PersonId | undefined) {
    const fieldName = "Peers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PersonCollectionService(client, path, fieldName)
      : new PersonService(client, path, new QPersonId(fieldName).buildUrl(id));
  }
}

export class EmployeeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Employee,
  EditableEmployee,
  QEmployee,
  PersonId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEmployee, new QPersonId(name));
  }
}
