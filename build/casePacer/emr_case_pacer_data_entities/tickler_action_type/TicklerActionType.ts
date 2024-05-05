import { TicklerAnswerAction } from "../tickler_answer_action/TicklerAnswerAction";

export interface TicklerActionType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerActionTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerActionTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerActionTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TicklerActionTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswerActions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerAnswerAction)` |
   */
  TicklerAnswerActions?: Array<TicklerAnswerAction>;
}

export type TicklerActionTypeId = number | { TicklerActionTypeId: number };

export interface EditableTicklerActionType
  extends Pick<TicklerActionType, "TicklerActionTypeName"> {}
