import { Firm } from "../firm/Firm";
import { Party } from "../party/Party";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { RecordFile } from "../record_file/RecordFile";
import { RecordSubtype } from "../record_subtype/RecordSubtype";
import { RecordType } from "../record_type/RecordType";
import { Alert } from "../alert/Alert";
import { Document } from "../document/Document";
import { SMSAttachment } from "../sms_attachment/SMSAttachment";
import { TrialPleading } from "../trial_pleading/TrialPleading";

export interface Record {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordId: number;
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
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactPartyId` |
   * | Type | `Edm.Int32` |
   */
  ContactPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RecordName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordTypeId` |
   * | Type | `Edm.Int32` |
   */
  RecordTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ImportDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  ImportDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequestDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  RequestDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Signed` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Signed: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ImportingUserId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ImportingUserId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordSubtypeId` |
   * | Type | `Edm.Int32` |
   */
  RecordSubtypeId: number | null;
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
   * | Name | `RecordFileId` |
   * | Type | `Edm.Int32` |
   */
  RecordFileId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocuSignJson` |
   * | Type | `Edm.String` |
   */
  DocuSignJson: string | null;
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
   * | Name | `ImportingUser` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  ImportingUser?: Party | null;
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
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Plaintiff?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Contact` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Contact?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFile` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordFile` |
   */
  RecordFile?: RecordFile | null;
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
   * | Name | `Alerts` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Alert)` |
   */
  Alerts?: Array<Alert>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Documents` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Document)` |
   */
  Documents?: Array<Document>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSAttachments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSAttachment)` |
   */
  SMSAttachments?: Array<SMSAttachment>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialPleadings` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TrialPleading)` |
   */
  TrialPleadings?: Array<TrialPleading>;
}

export type RecordId = number | { RecordId: number };

export interface EditableRecord
  extends Pick<
      Record,
      "RecordName" | "ImportDate" | "RequestDate" | "Signed" | "ImportingUserId"
    >,
    Partial<
      Pick<
        Record,
        | "LawsuitId"
        | "PlaintiffPartyId"
        | "ContactPartyId"
        | "RecordTypeId"
        | "RecordSubtypeId"
        | "FirmId"
        | "RecordFileId"
        | "DocuSignJson"
      >
    > {}
