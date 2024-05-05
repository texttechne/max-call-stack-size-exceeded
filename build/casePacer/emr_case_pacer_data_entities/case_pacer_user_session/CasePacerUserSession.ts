import { CasePacerUser } from "../case_pacer_user/CasePacerUser";

export interface CasePacerUserSession {
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
   * | Name | `Token` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Token: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserAgent` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  UserAgent: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IpAddr` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  IpAddr: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expiration` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Expiration: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoginTime` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  LoginTime: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastActive` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  LastActive: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type CasePacerUserSessionId = number | { Id: number };

export interface EditableCasePacerUserSession
  extends Pick<
      CasePacerUserSession,
      "PartyId" | "Token" | "UserAgent" | "IpAddr" | "LoginTime" | "LastActive"
    >,
    Partial<Pick<CasePacerUserSession, "Expiration">> {}
