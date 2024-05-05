import { CustomFieldType } from "../custom_field_type/CustomFieldType";
import { Firm } from "../firm/Firm";
import { CustomField } from "../custom_field/CustomField";

export interface FirmCustomField {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmCustomFieldId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmCustomFieldId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldTypeId` |
   * | Type | `Edm.Int32` |
   */
  CustomFieldTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CustomFieldName: string;
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
   * | Name | `CustomFieldType` |
   * | Type | `Emr.CasePacer.Data.Entities.CustomFieldType` |
   */
  CustomFieldType?: CustomFieldType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFields` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CustomField)` |
   */
  CustomFields?: Array<CustomField>;
}

export type FirmCustomFieldId = number | { FirmCustomFieldId: number };

export interface EditableFirmCustomField
  extends Pick<FirmCustomField, "CustomFieldName" | "IntakeField">,
    Partial<
      Pick<
        FirmCustomField,
        "FirmId" | "CustomFieldTypeId" | "CustomFieldHelperData"
      >
    > {}
