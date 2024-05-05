import { AddressType } from "../address_type/AddressType";
import { CPDirectMedicalProvider } from "../cp_direct_medical_provider/CPDirectMedicalProvider";
import { PartyAddress } from "../party_address/PartyAddress";

export interface Address {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AddressId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressTypeId` |
   * | Type | `Edm.Int32` |
   */
  AddressTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressLine1` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AddressLine1: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressLine2` |
   * | Type | `Edm.String` |
   */
  AddressLine2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `City` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  City: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `County` |
   * | Type | `Edm.String` |
   */
  County: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `State` |
   * | Type | `Edm.String` |
   */
  State: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ZipCode` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ZipCode: string;
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
   * | Name | `Country` |
   * | Type | `Edm.String` |
   */
  Country: string | null;
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
   * | Name | `AddressType` |
   * | Type | `Emr.CasePacer.Data.Entities.AddressType` |
   */
  AddressType?: AddressType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMedicalProviders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectMedicalProvider)` |
   */
  CPDirectMedicalProviders?: Array<CPDirectMedicalProvider>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyAddresses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PartyAddress)` |
   */
  PartyAddresses?: Array<PartyAddress>;
}

export type AddressId = number | { AddressId: number };

export interface EditableAddress
  extends Pick<Address, "AddressLine1" | "City" | "ZipCode" | "IsDeleted">,
    Partial<
      Pick<
        Address,
        | "AddressTypeId"
        | "AddressLine2"
        | "County"
        | "State"
        | "Country"
        | "Description"
      >
    > {}
