import { Firm } from "../firm/Firm";

export interface AuthorizedEmailSender {
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
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
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
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsAdmin` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsAdmin: boolean;
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

export type AuthorizedEmailSenderId = {
  FirmId: number;
  Email: string;
  IsAdmin: boolean;
};

export interface EditableAuthorizedEmailSender
  extends Pick<AuthorizedEmailSender, "FirmId" | "Email" | "IsAdmin">,
    Partial<Pick<AuthorizedEmailSender, "PartyId">> {}
