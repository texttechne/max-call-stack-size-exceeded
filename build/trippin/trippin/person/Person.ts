import { PersonGender } from "../person_gender/PersonGender";
import { Location, EditableLocation } from "../location/Location";
import { Feature } from "../feature/Feature";
import { Trip } from "../trip/Trip";

export interface Person {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  UserName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirstName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FirstName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastName` |
   * | Type | `Edm.String` |
   */
  LastName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MiddleName` |
   * | Type | `Edm.String` |
   */
  MiddleName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Gender` |
   * | Type | `Trippin.PersonGender` |
   * | Nullable | `false` |
   */
  Gender: PersonGender;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Age` |
   * | Type | `Edm.Int64` |
   */
  Age: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Emails` |
   * | Type | `Collection(Edm.String)` |
   */
  Emails: Array<string>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressInfo` |
   * | Type | `Collection(Trippin.Location)` |
   */
  AddressInfo: Array<Location>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HomeAddress` |
   * | Type | `Trippin.Location` |
   */
  HomeAddress: Location | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FavoriteFeature` |
   * | Type | `Trippin.Feature` |
   * | Nullable | `false` |
   */
  FavoriteFeature: Feature;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Features` |
   * | Type | `Collection(Trippin.Feature)` |
   * | Nullable | `false` |
   */
  Features: Array<Feature>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Friends` |
   * | Type | `Collection(Trippin.Person)` |
   */
  Friends?: Array<Person>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BestFriend` |
   * | Type | `Trippin.Person` |
   */
  BestFriend?: Person | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trips` |
   * | Type | `Collection(Trippin.Trip)` |
   */
  Trips?: Array<Trip>;
}

export type PersonId = string | { UserName: string };

export interface EditablePerson
  extends Pick<Person, "FirstName" | "Gender" | "FavoriteFeature" | "Features">,
    Partial<Pick<Person, "LastName" | "MiddleName" | "Age" | "Emails">> {
  AddressInfo?: Array<EditableLocation>;
  HomeAddress?: EditableLocation | null;
}

export interface Person_GetFriendsTripsParams {
  userName: string;
}

export interface Person_UpdateLastNameParams {
  lastName: string;
}

export interface Person_ShareTripParams {
  userName: string;
  tripId: number;
}
