import { FirmCustomField } from "../firm_custom_field/FirmCustomField";
import { LawsuitType } from "../lawsuit_type/LawsuitType";
import { CustomFieldValue } from "../custom_field_value/CustomFieldValue";

export interface CustomField {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CustomFieldId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldGroup` |
   * | Type | `Edm.String` |
   */
  CustomFieldGroup: string | null;
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
   * | Name | `FirmCustomFieldId` |
   * | Type | `Edm.Int32` |
   */
  FirmCustomFieldId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmCustomField` |
   * | Type | `Emr.CasePacer.Data.Entities.FirmCustomField` |
   */
  FirmCustomField?: FirmCustomField | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldValues` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CustomFieldValue)` |
   */
  CustomFieldValues?: Array<CustomFieldValue>;
}

export type CustomFieldId = number | { CustomFieldId: number };

export interface EditableCustomField
  extends Pick<CustomField, "SortOrder">,
    Partial<
      Pick<
        CustomField,
        "LawsuitTypeId" | "CustomFieldGroup" | "FirmCustomFieldId"
      >
    > {}
