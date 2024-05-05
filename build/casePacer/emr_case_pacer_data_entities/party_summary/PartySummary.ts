import { Party } from "../party/Party";

export interface PartySummary {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `DisplayName` |
   * | Type | `Edm.String` |
   */
  DisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirstName` |
   * | Type | `Edm.String` |
   */
  FirstName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastName` |
   * | Type | `Edm.String` |
   */
  LastName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateOfBirth` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateOfBirth: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompanyName` |
   * | Type | `Edm.String` |
   */
  CompanyName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SearchName` |
   * | Type | `Edm.String` |
   */
  SearchName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuickEntry` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  QuickEntry: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyTypeName` |
   * | Type | `Edm.String` |
   */
  PartyTypeName: string | null;
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
   * | Name | `AddressTypeName` |
   * | Type | `Edm.String` |
   */
  AddressTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressLine1` |
   * | Type | `Edm.String` |
   */
  AddressLine1: string | null;
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
   */
  City: string | null;
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
   */
  ZipCode: string | null;
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
   * | Name | `PhoneNumber` |
   * | Type | `Edm.String` |
   */
  PhoneNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FaxNumber` |
   * | Type | `Edm.String` |
   */
  FaxNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailAddress` |
   * | Type | `Edm.String` |
   */
  EmailAddress: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumLawsuits` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  NumLawsuits: number;
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

export type PartySummaryId = number | { PartyId: number | null };

export interface EditablePartySummary
  extends Pick<PartySummary, "QuickEntry" | "NumLawsuits">,
    Partial<
      Pick<
        PartySummary,
        | "DisplayName"
        | "FirstName"
        | "LastName"
        | "DateOfBirth"
        | "CompanyName"
        | "SearchName"
        | "FirmId"
        | "PartyTypeName"
        | "AddressTypeId"
        | "AddressTypeName"
        | "AddressLine1"
        | "AddressLine2"
        | "City"
        | "County"
        | "State"
        | "ZipCode"
        | "Country"
        | "PhoneNumber"
        | "FaxNumber"
        | "EmailAddress"
      >
    > {}

export interface PartySummary_ListParams {
  ids: Array<number>;
}
