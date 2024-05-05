import { CustomField } from "../custom_field/CustomField";
import { Lawsuit } from "../lawsuit/Lawsuit";

export interface CustomFieldValue {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldValueId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CustomFieldValueId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldId` |
   * | Type | `Edm.Int32` |
   */
  CustomFieldId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BoolVal` |
   * | Type | `Edm.Boolean` |
   */
  BoolVal: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateTimeVal` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateTimeVal: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DecimalVal` |
   * | Type | `Edm.Decimal` |
   */
  DecimalVal: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StringVal` |
   * | Type | `Edm.String` |
   */
  StringVal: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomField` |
   * | Type | `Emr.CasePacer.Data.Entities.CustomField` |
   */
  CustomField?: CustomField | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type CustomFieldValueId = number | { CustomFieldValueId: number };

export interface EditableCustomFieldValue
  extends Partial<
    Pick<
      CustomFieldValue,
      | "LawsuitId"
      | "CustomFieldId"
      | "BoolVal"
      | "DateTimeVal"
      | "DecimalVal"
      | "StringVal"
    >
  > {}
