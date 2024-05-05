import { FirmCustomField } from "../firm_custom_field/FirmCustomField";
import { CustomField } from "../custom_field/CustomField";
import { CustomFieldValue } from "../custom_field_value/CustomFieldValue";
import { CustomFieldType } from "../custom_field_type/CustomFieldType";

export interface CustomAttribute {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Group` |
   * | Type | `Edm.String` |
   */
  Group: string | null;
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
   * | Name | `Type` |
   * | Type | `Edm.String` |
   */
  Type: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValueCol` |
   * | Type | `Edm.String` |
   */
  ValueCol: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeField` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IntakeField: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldHelperData` |
   * | Type | `Edm.String` |
   */
  CustomFieldHelperData: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DropDownSimple` |
   * | Type | `Collection(Edm.String)` |
   */
  DropDownSimple: Array<string>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FormValue` |
   * | Type | `Edm.String` |
   */
  FormValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `firmCustomField` |
   * | Type | `Emr.CasePacer.Data.Entities.FirmCustomField` |
   */
  firmCustomField?: FirmCustomField | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `customField` |
   * | Type | `Emr.CasePacer.Data.Entities.CustomField` |
   */
  customField?: CustomField | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `customFieldValue` |
   * | Type | `Emr.CasePacer.Data.Entities.CustomFieldValue` |
   */
  customFieldValue?: CustomFieldValue | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `customFieldType` |
   * | Type | `Emr.CasePacer.Data.Entities.CustomFieldType` |
   */
  customFieldType?: CustomFieldType | null;
}

export type CustomAttributeId = number | { id: number };

export interface EditableCustomAttribute
  extends Pick<CustomAttribute, "SortOrder" | "IntakeField">,
    Partial<
      Pick<
        CustomAttribute,
        | "Group"
        | "Name"
        | "Type"
        | "ValueCol"
        | "CustomFieldHelperData"
        | "DropDownSimple"
        | "FormValue"
      >
    > {}
