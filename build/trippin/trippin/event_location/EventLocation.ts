import { Location } from "../location/Location";
import { EditableCity } from "../city/City";

export interface EventLocation extends Location {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BuildingInfo` |
   * | Type | `Edm.String` |
   */
  BuildingInfo: string | null;
}

export interface EditableEventLocation
  extends Partial<Pick<EventLocation, "Address" | "BuildingInfo">> {
  City?: EditableCity | null;
}
