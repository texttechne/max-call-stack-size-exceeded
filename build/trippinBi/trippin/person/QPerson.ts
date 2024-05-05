import {
  QueryObject,
  QStringPath,
  QEnumPath,
  QNumberPath,
  QCollectionPath,
  QStringCollection,
  QEntityCollectionPath,
  QEntityPath,
  QEnumCollection,
  QId,
  QStringParam,
  QFunction,
  OperationReturnType,
  ReturnTypes,
  QComplexParam,
  QAction,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLocation } from "../location/QLocation";
import { QTrip } from "../trip/QTrip";
import {
  PersonId,
  Person_GetFriendsTripsParams,
  Person_UpdateLastNameParams,
  Person_ShareTripParams,
} from "./Person";
import { QAirline } from "../airline/QAirline";

export class QPerson extends QueryObject {
  public readonly UserName = new QStringPath(this.withPrefix("UserName"));
  public readonly FirstName = new QStringPath(this.withPrefix("FirstName"));
  public readonly LastName = new QStringPath(this.withPrefix("LastName"));
  public readonly MiddleName = new QStringPath(this.withPrefix("MiddleName"));
  public readonly Gender = new QEnumPath(this.withPrefix("Gender"));
  public readonly Age = new QNumberPath(this.withPrefix("Age"));
  public readonly Emails = new QCollectionPath(
    this.withPrefix("Emails"),
    () => QStringCollection
  );
  public readonly AddressInfo = new QEntityCollectionPath(
    this.withPrefix("AddressInfo"),
    () => QLocation
  );
  public readonly HomeAddress = new QEntityPath(
    this.withPrefix("HomeAddress"),
    () => QLocation
  );
  public readonly FavoriteFeature = new QEnumPath(
    this.withPrefix("FavoriteFeature")
  );
  public readonly Features = new QCollectionPath(
    this.withPrefix("Features"),
    () => QEnumCollection
  );
  public readonly Friends = new QEntityCollectionPath(
    this.withPrefix("Friends"),
    () => QPerson
  );
  public readonly BestFriend = new QEntityPath(
    this.withPrefix("BestFriend"),
    () => QPerson
  );
  public readonly Trips = new QEntityCollectionPath(
    this.withPrefix("Trips"),
    () => QTrip
  );
}

export const qPerson = new QPerson();

export class QPersonId extends QId<PersonId> {
  private readonly params = [new QStringParam("UserName")];

  getParams() {
    return this.params;
  }
}

export class Person_QGetFavoriteAirline extends QFunction {
  private readonly params: [] = [];

  constructor() {
    super(
      "Trippin.GetFavoriteAirline",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QAirline())
      )
    );
  }

  getParams() {
    return this.params;
  }

  buildUrl() {
    return super.buildUrl(undefined);
  }
}

export class Person_QGetFriendsTrips extends QFunction<Person_GetFriendsTripsParams> {
  private readonly params = [new QStringParam("userName")];

  constructor() {
    super(
      "Trippin.GetFriendsTrips",
      new OperationReturnType(
        ReturnTypes.COMPLEX_COLLECTION,
        new QComplexParam("NONE", new QTrip())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class Person_QUpdateLastName extends QAction<Person_UpdateLastNameParams> {
  private readonly params = [new QStringParam("lastName")];

  constructor() {
    super("Trippin.UpdateLastName");
  }

  getParams() {
    return this.params;
  }
}

export class Person_QShareTrip extends QAction<Person_ShareTripParams> {
  private readonly params = [
    new QStringParam("userName"),
    new QNumberParam("tripId"),
  ];

  constructor() {
    super("Trippin.ShareTrip");
  }

  getParams() {
    return this.params;
  }
}
