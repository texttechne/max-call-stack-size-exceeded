import { Address } from "../address/Address";

export interface AddressType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AddressTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AddressTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Addresses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Address)` |
   */
  Addresses?: Array<Address>;
}

export type AddressTypeId = number | { AddressTypeId: number };

export interface EditableAddressType
  extends Pick<AddressType, "AddressTypeName"> {}
