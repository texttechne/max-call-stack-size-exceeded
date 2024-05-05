import {
  AirportLocation,
  EditableAirportLocation,
} from "../airport_location/AirportLocation";
import { Airline } from "../airline/Airline";

export interface Airport {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  Name: string | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IcaoCode` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  IcaoCode: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IataCode` |
   * | Type | `Edm.String` |
   */
  IataCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Location` |
   * | Type | `Trippin.AirportLocation` |
   */
  Location: AirportLocation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Airlines` |
   * | Type | `Collection(Trippin.Airline)` |
   */
  Airlines?: Array<Airline>;
}

export type AirportId = string | { IcaoCode: string };

export interface EditableAirport
  extends Partial<Pick<Airport, "Name" | "IataCode">> {
  Location?: EditableAirportLocation | null;
}
