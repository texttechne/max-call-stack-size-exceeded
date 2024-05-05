import { Party } from "../party/Party";

export interface Person extends Party {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirstName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FirstName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LastName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MiddleName` |
   * | Type | `Edm.String` |
   */
  MiddleName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SSN` |
   * | Type | `Edm.String` |
   */
  SSN: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NamePrefix` |
   * | Type | `Edm.String` |
   */
  NamePrefix: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NameSuffix` |
   * | Type | `Edm.String` |
   */
  NameSuffix: string | null;
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
   * | Name | `Gender` |
   * | Type | `Edm.String` |
   */
  Gender: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SpouseFirstName` |
   * | Type | `Edm.String` |
   */
  SpouseFirstName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SpouseLastName` |
   * | Type | `Edm.String` |
   */
  SpouseLastName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SpouseMiddleName` |
   * | Type | `Edm.String` |
   */
  SpouseMiddleName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeceasedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DeceasedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Children` |
   * | Type | `Edm.String` |
   */
  Children: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonNotes` |
   * | Type | `Edm.String` |
   */
  PersonNotes: string | null;
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
   * | Name | `Nickname` |
   * | Type | `Edm.String` |
   */
  Nickname: string | null;
}

export interface EditablePerson
  extends Pick<
      Person,
      | "QuickEntry"
      | "PayeeExpenseSyncFlag"
      | "DoNotText"
      | "FirstName"
      | "LastName"
      | "DeceasedFlag"
    >,
    Partial<
      Pick<
        Person,
        | "PartyTypeId"
        | "ParentFirmId"
        | "IsDeleted"
        | "Notes"
        | "DisplayName"
        | "ExternalFirmName"
        | "Website"
        | "AttyBarNumber"
        | "HeaderDocumentTemplateId"
        | "QBVendorId"
        | "GlobalPartyId"
        | "GuardianExecutorId"
        | "ImageId"
        | "MiddleName"
        | "SSN"
        | "NamePrefix"
        | "NameSuffix"
        | "DateOfBirth"
        | "Gender"
        | "SpouseFirstName"
        | "SpouseLastName"
        | "SpouseMiddleName"
        | "Children"
        | "PersonNotes"
        | "CompanyName"
        | "Nickname"
      >
    > {}
