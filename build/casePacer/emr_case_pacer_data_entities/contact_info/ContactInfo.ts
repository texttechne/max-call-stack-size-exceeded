import { ContactInfoType } from "../contact_info_type/ContactInfoType";
import { ContactType } from "../contact_type/ContactType";
import { Party } from "../party/Party";
import { SMSThread } from "../sms_thread/SMSThread";

export interface ContactInfo {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ContactInfoId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoTypeId` |
   * | Type | `Edm.Int32` |
   */
  ContactInfoTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactValue` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ContactValue: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactTypeId` |
   * | Type | `Edm.Int32` |
   */
  ContactTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UseForNotification` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  UseForNotification: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDeleted` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsDeleted: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsPrimary` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsPrimary: boolean;
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
   * | Name | `E164Value` |
   * | Type | `Edm.String` |
   */
  E164Value: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoType` |
   * | Type | `Emr.CasePacer.Data.Entities.ContactInfoType` |
   */
  ContactInfoType?: ContactInfoType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactType` |
   * | Type | `Emr.CasePacer.Data.Entities.ContactType` |
   */
  ContactType?: ContactType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
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

export type ContactInfoId = number | { ContactInfoId: number };

export interface EditableContactInfo
  extends Pick<
      ContactInfo,
      "ContactValue" | "UseForNotification" | "IsDeleted" | "IsPrimary"
    >,
    Partial<
      Pick<
        ContactInfo,
        | "ContactInfoTypeId"
        | "PartyId"
        | "ContactTypeId"
        | "Description"
        | "E164Value"
      >
    > {}
