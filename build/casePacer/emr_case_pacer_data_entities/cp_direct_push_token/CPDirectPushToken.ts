import { IntakeClientLogin } from "../intake_client_login/IntakeClientLogin";

export interface CPDirectPushToken {
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
   * | Name | `ExpoPushToken` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ExpoPushToken: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLoginId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientLoginId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DoNotSend` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DoNotSend: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLogin` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLogin` |
   */
  IntakeClientLogin?: IntakeClientLogin | null;
}

export type CPDirectPushTokenId = number | { Id: number };

export interface EditableCPDirectPushToken
  extends Pick<CPDirectPushToken, "ExpoPushToken" | "DoNotSend">,
    Partial<Pick<CPDirectPushToken, "IntakeClientLoginId">> {}
