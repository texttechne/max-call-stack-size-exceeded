import { Record } from "../record/Record";
import { SMSMessage } from "../sms_message/SMSMessage";

export interface SMSAttachment {
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
   * | Name | `SMSMessageId` |
   * | Type | `Edm.Int32` |
   */
  SMSMessageId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int32` |
   */
  RecordId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContentType` |
   * | Type | `Edm.String` |
   */
  ContentType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Record` |
   * | Type | `Emr.CasePacer.Data.Entities.Record` |
   */
  Record?: Record | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSMessage` |
   * | Type | `Emr.CasePacer.Data.Entities.SMSMessage` |
   */
  SMSMessage?: SMSMessage | null;
}

export type SMSAttachmentId = number | { Id: number };

export interface EditableSMSAttachment
  extends Partial<
    Pick<SMSAttachment, "SMSMessageId" | "RecordId" | "ContentType">
  > {}
