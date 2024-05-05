import { PropertyDamage } from "../property_damage/PropertyDamage";

export interface PropertyType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PropertyTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PropertyTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  PropertyDamages?: Array<PropertyDamage>;
}

export type PropertyTypeId = number | { PropertyTypeId: number };

export interface EditablePropertyType
  extends Pick<PropertyType, "PropertyTypeName"> {}
