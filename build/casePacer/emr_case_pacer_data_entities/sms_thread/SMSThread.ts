import { ContactInfo } from "../contact_info/ContactInfo";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { TwilioPhone } from "../twilio_phone/TwilioPhone";
import { SMSMessage } from "../sms_message/SMSMessage";

export interface SMSThread {
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
   * | Name | `TwilioPhoneId` |
   * | Type | `Edm.Int32` |
   */
  TwilioPhoneId: number | null;
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
   * | Name | `ContactInfoId` |
   * | Type | `Edm.Int32` |
   */
  ContactInfoId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhoneNumber` |
   * | Type | `Edm.String` |
   */
  PhoneNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastReceived` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  LastReceived: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfo` |
   * | Type | `Emr.CasePacer.Data.Entities.ContactInfo` |
   */
  ContactInfo?: ContactInfo | null;
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
   * | Name | `TwilioPhone` |
   * | Type | `Emr.CasePacer.Data.Entities.TwilioPhone` |
   */
  TwilioPhone?: TwilioPhone | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSMessages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSMessage)` |
   */
  SMSMessages?: Array<SMSMessage>;
}

export type SMSThreadId = number | { Id: number };

export interface EditableSMSThread
  extends Pick<SMSThread, "LastReceived">,
    Partial<
      Pick<
        SMSThread,
        "TwilioPhoneId" | "LawsuitId" | "ContactInfoId" | "PhoneNumber"
      >
    > {}
