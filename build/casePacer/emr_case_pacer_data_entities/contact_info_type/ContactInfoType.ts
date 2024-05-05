import { ContactInfo } from "../contact_info/ContactInfo";

export interface ContactInfoType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ContactInfoTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ContactInfoTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ContactInfo)` |
   */
  ContactInfoes?: Array<ContactInfo>;
}

export type ContactInfoTypeId = number | { ContactInfoTypeId: number };

export interface EditableContactInfoType
  extends Pick<ContactInfoType, "ContactInfoTypeName"> {}
