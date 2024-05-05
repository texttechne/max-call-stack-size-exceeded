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
   * | Name | `Aiports` |
   * | Type | `Collection(Trippin.Airport)` |
   */
  Aiports?: Array<Airport>;
}

export type AirlineId = string | { AirlineCode: string };

export interface EditableAirline extends Partial<Pick<Airline, "Name">> {}
