import { Airport } from "../airport/Airport";

export interface Airline {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AirlineCode` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AirlineCode: string;
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
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HomeAirport` |
   * | Type | `Trippin.Airport` |
   */
  HomeAirport?: Airport | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Airports` |
   * | Type | `Collection(Trippin.Airport)` |
   */
  Airports?: Array<Airport>;
}

export type AirlineId = string | { AirlineCode: string };

export interface EditableAirline extends Partial<Pick<Airline, "Name">> {}
