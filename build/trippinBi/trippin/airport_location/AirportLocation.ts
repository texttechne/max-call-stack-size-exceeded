import { Location } from "../location/Location";
import { EditableCity } from "../city/City";

export interface AirportLocation extends Location {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Loc` |
   * | Type | `Edm.GeographyPoint` |
   */
  Loc: string | null;
}

export interface EditableAirportLocation
  extends Partial<Pick<AirportLocation, "Address" | "Loc">> {
  City?: EditableCity | null;
}
