import { RecordFile } from "../record_file/RecordFile";

export interface RecordFileRelationship {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFileId` |
   * | Type | `Edm.Int32` |
   */
  RecordFileId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RelatedEntityType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RelatedEntityId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  Description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFile` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordFile` |
   */
  RecordFile?: RecordFile | null;
}

export type RecordFileRelationshipId = number | { Id: number };

export interface EditableRecordFileRelationship
  extends Pick<RecordFileRelationship, "RelatedEntityType" | "RelatedEntityId">,
    Partial<Pick<RecordFileRelationship, "RecordFileId" | "Description">> {}
