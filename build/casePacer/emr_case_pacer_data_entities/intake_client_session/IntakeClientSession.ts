import { IntakeClientLogin } from "../intake_client_login/IntakeClientLogin";

export interface IntakeClientSession {
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
   * | Name | `IntakeClientLoginId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientLoginId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BearerToken` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BearerToken: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeviceId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DeviceId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expiration` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  Expiration: string;
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

export type IntakeClientSessionId = number | { Id: number };

export interface EditableIntakeClientSession
  extends Pick<IntakeClientSession, "BearerToken" | "DeviceId" | "Expiration">,
    Partial<Pick<IntakeClientSession, "IntakeClientLoginId">> {}
