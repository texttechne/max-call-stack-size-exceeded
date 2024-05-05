import { FirmCustomField } from "../firm_custom_field/FirmCustomField";

export interface CustomFieldType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CustomFieldTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldValueCol` |
   * | Type | `Edm.String` |
   */
  CustomFieldValueCol: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmCustomFields` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.FirmCustomField)` |
   */
  FirmCustomFields?: Array<FirmCustomField>;
}

export type CustomFieldTypeId = number | { CustomFieldTypeId: number };

export interface EditableCustomFieldType
  extends Pick<CustomFieldType, "TypeName">,
    Partial<Pick<CustomFieldType, "CustomFieldValueCol">> {}
