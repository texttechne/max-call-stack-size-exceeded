import { CPDirectMessage } from "../cp_direct_message/CPDirectMessage";
import { CPDirectPushToken } from "../cp_direct_push_token/CPDirectPushToken";
import { IntakeClientFirm } from "../intake_client_firm/IntakeClientFirm";
import { IntakeClientSession } from "../intake_client_session/IntakeClientSession";
import { IntakeClientLoginSummary } from "../intake_client_login_summary/IntakeClientLoginSummary";

export interface IntakeClientLogin {
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
   * | Name | `UserName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  UserName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Password` |
   * | Type | `Edm.String` |
   */
  Password: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FailedAttempts` |
   * | Type | `Edm.Byte` |
   * | Nullable | `false` |
   */
  FailedAttempts: number;
  /**
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
   * | Name | `Token` |
   * | Type | `Edm.String` |
   */
  Token: string | null;
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
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConfirmedAt` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ConfirmedAt: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DoNotEmail` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DoNotEmail: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMessages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectMessage)` |
   */
  CPDirectMessages?: Array<CPDirectMessage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectPushTokens` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectPushToken)` |
   */
  CPDirectPushTokens?: Array<CPDirectPushToken>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientFirms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientFirm)` |
   */
  IntakeClientFirms?: Array<IntakeClientFirm>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientSessions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientSession)` |
   */
  IntakeClientSessions?: Array<IntakeClientSession>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLoginSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientLoginSummary)` |
   */
  IntakeClientLoginSummaries?: Array<IntakeClientLoginSummary>;
}

export type IntakeClientLoginId = number | { Id: number };

export interface EditableIntakeClientLogin
  extends Pick<
      IntakeClientLogin,
      "UserName" | "FailedAttempts" | "IsDeactivated" | "DoNotEmail"
    >,
    Partial<
      Pick<
        IntakeClientLogin,
        | "Password"
        | "LastLoginDate"
        | "Token"
        | "TokenExpiration"
        | "ConfirmedAt"
      >
    > {}
