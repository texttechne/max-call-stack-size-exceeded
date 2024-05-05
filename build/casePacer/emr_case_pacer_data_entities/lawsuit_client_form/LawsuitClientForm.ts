import { Lawsuit } from "../lawsuit/Lawsuit";

export interface LawsuitClientForm {
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
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FormJson` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FormJson: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ClientFormId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Submitted` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Submitted: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastUpdated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  LastUpdated: string;
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

export type LawsuitClientFormId = number | { Id: number };

export interface EditableLawsuitClientForm
  extends Pick<
      LawsuitClientForm,
      "FormJson" | "ClientFormId" | "SortOrder" | "Submitted" | "LastUpdated"
    >,
    Partial<Pick<LawsuitClientForm, "LawsuitId">> {}
