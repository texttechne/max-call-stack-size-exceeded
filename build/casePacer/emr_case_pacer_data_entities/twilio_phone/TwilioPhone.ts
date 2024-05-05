import { Firm } from "../firm/Firm";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { SMSThread } from "../sms_thread/SMSThread";

export interface TwilioPhone {
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
   * | Name | `TwilioPhoneSid` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TwilioPhoneSid: string;
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
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
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
   * | Name | `PhoneNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PhoneNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateCreated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  DateCreated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateDeactivated` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateDeactivated: string | null;
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
   * | Name | `SMSThreads` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSThread)` |
   */
  SMSThreads?: Array<SMSThread>;
}

export type TwilioPhoneId = number | { Id: number };

export interface EditableTwilioPhone
  extends Pick<
      TwilioPhone,
      "TwilioPhoneSid" | "FirmId" | "PartyId" | "PhoneNumber" | "DateCreated"
    >,
    Partial<Pick<TwilioPhone, "LawsuitId" | "DateDeactivated">> {}
