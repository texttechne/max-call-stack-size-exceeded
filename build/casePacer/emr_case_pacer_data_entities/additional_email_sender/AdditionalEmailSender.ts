import { Firm } from "../firm/Firm";

export interface AdditionalEmailSender {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdditionalEmailSenderId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AdditionalEmailSenderId: number;
  /**
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
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Email` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Email: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailDescr` |
   * | Type | `Edm.String` |
   */
  EmailDescr: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Active` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Active: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type AdditionalEmailSenderId =
  | number
  | { AdditionalEmailSenderId: number };

export interface EditableAdditionalEmailSender
  extends Pick<AdditionalEmailSender, "FirmId" | "Email" | "Active">,
    Partial<Pick<AdditionalEmailSender, "EmailDescr">> {}
