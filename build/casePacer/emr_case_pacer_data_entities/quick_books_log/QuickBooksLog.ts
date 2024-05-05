import { Firm } from "../firm/Firm";

export interface QuickBooksLog {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBLogId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  QBLogId: number;
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
   * | Name | `EntryDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  EntryDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntryType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  EntryType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityDescription` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ActivityDescription: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityType` |
   * | Type | `Edm.String` |
   */
  RelatedEntityType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedId` |
   * | Type | `Edm.Int32` |
   */
  RelatedId: number | null;
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

export type QuickBooksLogId = number | { QBLogId: number };

export interface EditableQuickBooksLog
  extends Pick<
      QuickBooksLog,
      "FirmId" | "EntryDate" | "EntryType" | "ActivityDescription"
    >,
    Partial<Pick<QuickBooksLog, "RelatedEntityType" | "RelatedId">> {}
