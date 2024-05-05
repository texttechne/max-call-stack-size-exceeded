import { ContactInfo } from "../contact_info/ContactInfo";

export interface ContactType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ContactTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ContactTypeName: string;
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

export type ContactTypeId = number | { ContactTypeId: number };

export interface EditableContactType
  extends Pick<ContactType, "ContactTypeName"> {}
