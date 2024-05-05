import { Lawsuit } from "../lawsuit/Lawsuit";
import { Firm } from "../firm/Firm";
import { RecordFile } from "../record_file/RecordFile";

export interface Email {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EmailId: number;
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
   * | Name | `RecordFileId` |
   * | Type | `Edm.Int32` |
   */
  RecordFileId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  EmailDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailSubject` |
   * | Type | `Edm.String` |
   */
  EmailSubject: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailFrom` |
   * | Type | `Edm.String` |
   */
  EmailFrom: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailTo` |
   * | Type | `Edm.String` |
   */
  EmailTo: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailCc` |
   * | Type | `Edm.String` |
   */
  EmailCc: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailBcc` |
   * | Type | `Edm.String` |
   */
  EmailBcc: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailAttCount` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EmailAttCount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailSize` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  EmailSize: number;
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
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

export type EmailId = number | { EmailId: number };

export interface EditableEmail
  extends Pick<Email, "FirmId" | "EmailAttCount" | "EmailSize">,
    Partial<
      Pick<
        Email,
        | "LawsuitId"
        | "RecordFileId"
        | "EmailDate"
        | "EmailSubject"
        | "EmailFrom"
        | "EmailTo"
        | "EmailCc"
        | "EmailBcc"
      >
    > {}
