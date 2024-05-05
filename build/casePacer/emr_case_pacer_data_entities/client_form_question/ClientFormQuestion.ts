import { ClientFormComponent } from "../client_form_component/ClientFormComponent";
import { ClientFormScreen } from "../client_form_screen/ClientFormScreen";

export interface ClientFormQuestion {
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
   * | Name | `ClientFormScreenId` |
   * | Type | `Edm.Int32` |
   */
  ClientFormScreenId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntity` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RelatedEntity: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ComponentId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ComponentId: number;
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
   * | Name | `Question` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Question: string;
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
   * | Name | `HelperDataJson` |
   * | Type | `Edm.String` |
   */
  HelperDataJson: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormComponent` |
   * | Type | `Emr.CasePacer.Data.Entities.ClientFormComponent` |
   */
  ClientFormComponent?: ClientFormComponent | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormScreen` |
   * | Type | `Emr.CasePacer.Data.Entities.ClientFormScreen` |
   */
  ClientFormScreen?: ClientFormScreen | null;
}

export type ClientFormQuestionId = number | { Id: number };

export interface EditableClientFormQuestion
  extends Pick<
      ClientFormQuestion,
      "RelatedEntity" | "ComponentId" | "SortOrder" | "Question"
    >,
    Partial<
      Pick<
        ClientFormQuestion,
        "ClientFormScreenId" | "ShowCriteriaJson" | "HelperDataJson"
      >
    > {}
