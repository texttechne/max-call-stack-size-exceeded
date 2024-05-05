import { Firm } from "../firm/Firm";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { RecordSubtype } from "../record_subtype/RecordSubtype";
import { RecordType } from "../record_type/RecordType";
import { RecordFile } from "../record_file/RecordFile";

export interface RecordFolder {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFolderId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordFolderId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmId: number;
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
   * | Name | `FolderPrefix` |
   * | Type | `Edm.String` |
   */
  FolderPrefix: string | null;
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
   * | Name | `DefaultRecordSubtypeId` |
   * | Type | `Edm.Int32` |
   */
  DefaultRecordSubtypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultRecordTypeId` |
   * | Type | `Edm.Int32` |
   */
  DefaultRecordTypeId: number | null;
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
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordSubtype` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordSubtype` |
   */
  RecordSubtype?: RecordSubtype | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordType` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordType` |
   */
  RecordType?: RecordType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFiles` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordFile)` |
   */
  RecordFiles?: Array<RecordFile>;
}

export type RecordFolderId = number | { RecordFolderId: number };

export interface EditableRecordFolder
  extends Pick<RecordFolder, "FirmId">,
    Partial<
      Pick<
        RecordFolder,
        | "LawsuitId"
        | "FolderPrefix"
        | "Name"
        | "DefaultRecordSubtypeId"
        | "DefaultRecordTypeId"
      >
    > {}
