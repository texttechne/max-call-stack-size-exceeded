import { CasePacerUser } from "../case_pacer_user/CasePacerUser";
import { SMSThread } from "../sms_thread/SMSThread";
import { SMSAttachment } from "../sms_attachment/SMSAttachment";

export interface SMSMessage {
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
   * | Name | `TwilioSMSId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TwilioSMSId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSThreadId` |
   * | Type | `Edm.Int32` |
   */
  SMSThreadId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Timestamp` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  Timestamp: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Body` |
   * | Type | `Edm.String` |
   */
  Body: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WasSent` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  WasSent: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Price` |
   * | Type | `Edm.Decimal` |
   */
  Price: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmSenderPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmSenderPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSThread` |
   * | Type | `Emr.CasePacer.Data.Entities.SMSThread` |
   */
  SMSThread?: SMSThread | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSAttachments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSAttachment)` |
   */
  SMSAttachments?: Array<SMSAttachment>;
}

export type SMSMessageId = number | { Id: number };

export interface EditableSMSMessage
  extends Pick<SMSMessage, "TwilioSMSId" | "Timestamp" | "WasSent">,
    Partial<
      Pick<SMSMessage, "SMSThreadId" | "Body" | "Price" | "FirmSenderPartyId">
    > {}
