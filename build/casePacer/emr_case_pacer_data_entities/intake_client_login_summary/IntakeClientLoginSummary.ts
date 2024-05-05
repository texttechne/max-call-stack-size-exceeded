import { IntakeClientLogin } from "../intake_client_login/IntakeClientLogin";
import { Firm } from "../firm/Firm";
import { Lawsuit } from "../lawsuit/Lawsuit";

export interface IntakeClientLoginSummary {
  /**
   * **Key Property**: This is a key property used to identify the entity.
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
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  UserName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDeactivated` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsDeactivated: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastLoginDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LastLoginDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TokenExpiration` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TokenExpiration: string | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
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
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitTypeName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
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
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Status` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Status: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLogin` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLogin` |
   */
  IntakeClientLogin?: IntakeClientLogin | null;
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
}

export type IntakeClientLoginSummaryId = {
  Id: number;
  UserName: string;
  IsDeactivated: boolean;
  FirmId: number;
  LawsuitName: string;
  LawsuitTypeName: string;
  LawsuitId: number | null;
  Status: string;
};

export interface EditableIntakeClientLoginSummary
  extends Pick<
      IntakeClientLoginSummary,
      | "Id"
      | "UserName"
      | "IsDeactivated"
      | "FirmId"
      | "LawsuitName"
      | "LawsuitTypeName"
      | "Status"
    >,
    Partial<
      Pick<
        IntakeClientLoginSummary,
        "LastLoginDate" | "TokenExpiration" | "LawsuitId" | "PlaintiffPartyId"
      >
    > {}
