import { Firm } from "../firm/Firm";

export interface ExternalImportKey {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExternalImportKeyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ExternalImportKeyId: number;
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
   * | Name | `ExternalKey` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ExternalKey: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExternalGroup` |
   * | Type | `Edm.String` |
   */
  ExternalGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ObjectType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ObjectType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ObjectId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ObjectId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type ExternalImportKeyId = number | { ExternalImportKeyId: number };

export interface EditableExternalImportKey
  extends Pick<
      ExternalImportKey,
      "FirmId" | "ExternalKey" | "ObjectType" | "ObjectId"
    >,
    Partial<Pick<ExternalImportKey, "ExternalGroup">> {}
