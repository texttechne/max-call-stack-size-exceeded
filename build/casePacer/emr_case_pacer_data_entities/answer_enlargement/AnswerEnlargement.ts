import { Litigation } from "../litigation/Litigation";
import { Party } from "../party/Party";

export interface AnswerEnlargement {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswerEnlargementId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AnswerEnlargementId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
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
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ServiceObtainedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ServiceObtainedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswerReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AnswerReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswerDueDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  AnswerDueDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExtensionFiledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ExtensionFiledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExtensionGrantedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ExtensionGrantedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
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

export type AnswerEnlargementId = number | { AnswerEnlargementId: number };

export interface EditableAnswerEnlargement
  extends Pick<AnswerEnlargement, "AnswerReceivedFlag">,
    Partial<
      Pick<
        AnswerEnlargement,
        | "LitigationId"
        | "PartyId"
        | "ServiceObtainedDate"
        | "AnswerDueDate"
        | "ExtensionFiledDate"
        | "ExtensionGrantedDate"
        | "Notes"
      >
    > {}
