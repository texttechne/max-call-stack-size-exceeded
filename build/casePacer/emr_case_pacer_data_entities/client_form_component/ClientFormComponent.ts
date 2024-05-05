import { ClientFormQuestion } from "../client_form_question/ClientFormQuestion";

export interface ClientFormComponent {
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
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  Name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CsType` |
   * | Type | `Edm.String` |
   */
  CsType: string | null;
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

export type ClientFormComponentId = number | { Id: number };

export interface EditableClientFormComponent
  extends Partial<Pick<ClientFormComponent, "Name" | "CsType">> {}
