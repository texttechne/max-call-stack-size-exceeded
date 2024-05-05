import { TicklerCriteria } from "../tickler_criteria/TicklerCriteria";

export interface TicklerCriteriaAction {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaActionId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerCriteriaActionId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaActionName` |
   * | Type | `Edm.String` |
   */
  TicklerCriteriaActionName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriterias` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerCriteria)` |
   */
  TicklerCriterias?: Array<TicklerCriteria>;
}

export type TicklerCriteriaActionId =
  | number
  | { TicklerCriteriaActionId: number };

export interface EditableTicklerCriteriaAction
  extends Partial<Pick<TicklerCriteriaAction, "TicklerCriteriaActionName">> {}
