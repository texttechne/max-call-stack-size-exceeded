import { TicklerTemplate } from "../tickler_template/TicklerTemplate";

export interface TicklerTemplateAction {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateActionId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerTemplateActionId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   */
  TicklerTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildTicklerTemplateId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ChildTicklerTemplateId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Answer` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Answer: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentTickler` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  ParentTickler?: TicklerTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildTickler` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  ChildTickler?: TicklerTemplate | null;
}

export type TicklerTemplateActionId =
  | number
  | { TicklerTemplateActionId: number };

export interface EditableTicklerTemplateAction
  extends Pick<TicklerTemplateAction, "ChildTicklerTemplateId" | "Answer">,
    Partial<Pick<TicklerTemplateAction, "TicklerTemplateId">> {}
