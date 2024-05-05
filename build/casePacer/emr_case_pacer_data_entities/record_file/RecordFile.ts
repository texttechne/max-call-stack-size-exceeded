import { RecordFolder } from "../record_folder/RecordFolder";
import { DocumentTemplate } from "../document_template/DocumentTemplate";
import { Email } from "../email/Email";
import { Party } from "../party/Party";
import { Record } from "../record/Record";
import { RecordFileRelationship } from "../record_file_relationship/RecordFileRelationship";

export interface RecordFile {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFileId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordFileId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FileName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UploadedAt` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  UploadedAt: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PrimaryFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PrimaryFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileLength` |
   * | Type | `Edm.Int64` |
   */
  FileLength: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileMD5Hash` |
   * | Type | `Edm.String` |
   */
  FileMD5Hash: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFolderId` |
   * | Type | `Edm.Int32` |
   */
  RecordFolderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ETag` |
   * | Type | `Edm.String` |
   */
  ETag: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Url` |
   * | Type | `Edm.String` |
   */
  Url: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PublicUrl` |
   * | Type | `Edm.String` |
   */
  PublicUrl: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFolder` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordFolder` |
   */
  RecordFolder?: RecordFolder | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DocumentTemplate)` |
   */
  DocumentTemplates?: Array<DocumentTemplate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Emails` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Email)` |
   */
  Emails?: Array<Email>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartiesByImage` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Party)` |
   */
  PartiesByImage?: Array<Party>;
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
   * | Name | `RecordFileRelationships` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordFileRelationship)` |
   */
  RecordFileRelationships?: Array<RecordFileRelationship>;
}

export type RecordFileId = number | { RecordFileId: number };

export interface EditableRecordFile
  extends Pick<RecordFile, "FileName" | "UploadedAt" | "PrimaryFlag">,
    Partial<
      Pick<
        RecordFile,
        | "FileLength"
        | "FileMD5Hash"
        | "RecordFolderId"
        | "ETag"
        | "Url"
        | "PublicUrl"
      >
    > {}

export interface RecordFile_GetUrlParams {
  key: number;
}

export interface RecordFile_PutUrlParams {
  key: number;
}

export interface RecordFile_InitiateMultipartParams {
  key: number;
}

export interface RecordFile_PutMultipartUrlParams {
  key: number;
  uploadId?: string | null;
  partNumber: number;
}

export interface RecordFile_CompleteMultipartParams {
  key: number;
  uploadId?: string | null;
}

export interface RecordFile_ValidateParams {
  key: number;
}
