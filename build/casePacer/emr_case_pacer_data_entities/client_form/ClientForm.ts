import { ClientFormStatus } from "../client_form_status/ClientFormStatus";
import { Firm } from "../firm/Firm";
import { ClientFormScreen } from "../client_form_screen/ClientFormScreen";
import { LawsuitTypeClientForm } from "../lawsuit_type_client_form/LawsuitTypeClientForm";

export interface ClientForm {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `_QuestionCount` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  _QuestionCount: number;
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
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
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
   * | Name | `ClientFormStatusId` |
   * | Type | `Edm.Int32` |
   */
  ClientFormStatusId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormStatus` |
   * | Type | `Emr.CasePacer.Data.Entities.ClientFormStatus` |
   */
  ClientFormStatus?: ClientFormStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormScreens` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ClientFormScreen)` |
   */
  ClientFormScreens?: Array<ClientFormScreen>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeClientForms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeClientForm)` |
   */
  LawsuitTypeClientForms?: Array<LawsuitTypeClientForm>;
}

export type ClientFormId = number | { Id: number };

export interface EditableClientForm
  extends Pick<ClientForm, "_QuestionCount" | "Name">,
    Partial<
      Pick<ClientForm, "FirmId" | "ShowCriteriaJson" | "ClientFormStatusId">
    > {}
