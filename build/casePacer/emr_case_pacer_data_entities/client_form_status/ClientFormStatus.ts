import { ClientForm } from "../client_form/ClientForm";

export interface ClientFormStatus {
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
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientForms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ClientForm)` |
   */
  ClientForms?: Array<ClientForm>;
}

export type ClientFormStatusId = number | { Id: number };

export interface EditableClientFormStatus
  extends Pick<ClientFormStatus, "Name"> {}
