import { ClientForm } from "../client_form/ClientForm";
import { ClientFormQuestion } from "../client_form_question/ClientFormQuestion";

export interface ClientFormScreen {
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
   * | Name | `ClientFormId` |
   * | Type | `Edm.Int32` |
   */
  ClientFormId: number | null;
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
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowCriteriaJson` |
   * | Type | `Edm.String` |
   */
  ShowCriteriaJson: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientForm` |
   * | Type | `Emr.CasePacer.Data.Entities.ClientForm` |
   */
  ClientForm?: ClientForm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormQuestions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ClientFormQuestion)` |
   */
  ClientFormQuestions?: Array<ClientFormQuestion>;
}

export type ClientFormScreenId = number | { Id: number };

export interface EditableClientFormScreen
  extends Pick<ClientFormScreen, "SortOrder" | "Name">,
    Partial<Pick<ClientFormScreen, "ClientFormId" | "ShowCriteriaJson">> {}
