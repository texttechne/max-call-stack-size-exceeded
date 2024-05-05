export interface City {
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
   * | Name | `CountryRegion` |
   * | Type | `Edm.String` |
   */
  CountryRegion: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Region` |
   * | Type | `Edm.String` |
   */
  Region: string | null;
}

export interface EditableCity
  extends Partial<Pick<City, "Name" | "CountryRegion" | "Region">> {}
