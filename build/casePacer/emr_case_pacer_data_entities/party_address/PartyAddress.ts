import { Address } from "../address/Address";
import { Party } from "../party/Party";

export interface PartyAddress {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyAddressId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyAddressId: number;
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
   * | Name | `AddressId` |
   * | Type | `Edm.Int32` |
   */
  AddressId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsPrimary` |
   * | Type | `Edm.Boolean` |
   */
  IsPrimary: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBAddrId` |
   * | Type | `Edm.String` |
   */
  QBAddrId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Address` |
   * | Type | `Emr.CasePacer.Data.Entities.Address` |
   */
  Address?: Address | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type PartyAddressId = number | { PartyAddressId: number };

export interface EditablePartyAddress
  extends Partial<
    Pick<PartyAddress, "PartyId" | "AddressId" | "IsPrimary" | "QBAddrId">
  > {}
