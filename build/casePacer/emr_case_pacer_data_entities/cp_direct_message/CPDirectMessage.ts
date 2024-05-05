import { CasePacerUser } from "../case_pacer_user/CasePacerUser";
import { IntakeClientLawsuit } from "../intake_client_lawsuit/IntakeClientLawsuit";
import { IntakeClientLogin } from "../intake_client_login/IntakeClientLogin";

export interface CPDirectMessage {
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
   * | Name | `IntakeClientLawsuitId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientLawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Body` |
   * | Type | `Edm.String` |
   */
  Body: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Sent` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  Sent: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadReceipt` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReadReceipt: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectClientLoginId` |
   * | Type | `Edm.Int32` |
   */
  CPDirectClientLoginId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUserId` |
   * | Type | `Edm.Int32` |
   */
  CasePacerUserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailSent` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  EmailSent: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLawsuit` |
   */
  IntakeClientLawsuit?: IntakeClientLawsuit | null;
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

export type CPDirectMessageId = number | { Id: number };

export interface EditableCPDirectMessage
  extends Pick<CPDirectMessage, "Sent" | "EmailSent">,
    Partial<
      Pick<
        CPDirectMessage,
        | "IntakeClientLawsuitId"
        | "Body"
        | "ReadReceipt"
        | "CPDirectClientLoginId"
        | "CasePacerUserId"
      >
    > {}
