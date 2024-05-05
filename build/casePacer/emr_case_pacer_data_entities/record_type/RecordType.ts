import { Record } from "../record/Record";
import { RecordFolder } from "../record_folder/RecordFolder";
import { RecordSubtype } from "../record_subtype/RecordSubtype";

export interface RecordType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RecordTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Records` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Record)` |
   */
  Records?: Array<Record>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFolders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordFolder)` |
   */
  RecordFolders?: Array<RecordFolder>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordSubtypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordSubtype)` |
   */
  RecordSubtypes?: Array<RecordSubtype>;
}

export type RecordTypeId = number | { RecordTypeId: number };

export interface EditableRecordType
  extends Pick<RecordType, "RecordTypeName"> {}
