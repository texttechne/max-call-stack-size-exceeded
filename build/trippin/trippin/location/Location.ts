import { City, EditableCity } from "../city/City";

export interface Location {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Address` |
   * | Type | `Edm.String` |
   */
  Address: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `City` |
   * | Type | `Trippin.City` |
   */
  City: City | null;
}

export interface EditableLocation extends Partial<Pick<Location, "Address">> {
  City?: EditableCity | null;
}
