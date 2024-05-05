import { ClientForm } from "../client_form/ClientForm";
import { LawsuitType } from "../lawsuit_type/LawsuitType";

export interface LawsuitTypeClientForm {
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
   * | Name | `LawsuitTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitTypeId: number | null;
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
   * | Name | `ClientForm` |
   * | Type | `Emr.CasePacer.Data.Entities.ClientForm` |
   */
  ClientForm?: ClientForm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
}

export type LawsuitTypeClientFormId = number | { Id: number };

export interface EditableLawsuitTypeClientForm
  extends Pick<LawsuitTypeClientForm, "SortOrder">,
    Partial<Pick<LawsuitTypeClientForm, "LawsuitTypeId" | "ClientFormId">> {}
