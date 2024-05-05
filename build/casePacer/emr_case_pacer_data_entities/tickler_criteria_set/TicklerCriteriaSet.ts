import { TicklerCriteria } from "../tickler_criteria/TicklerCriteria";
import { TicklerCriteriaItem } from "../tickler_criteria_item/TicklerCriteriaItem";

export interface TicklerCriteriaSet {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaSetId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerCriteriaSetId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaId` |
   * | Type | `Edm.Int32` |
   */
  TicklerCriteriaId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BooleanAndFlag` |
   * | Type | `Edm.Boolean` |
   */
  BooleanAndFlag: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteria` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerCriteria` |
   */
  TicklerCriteria?: TicklerCriteria | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerCriteriaItem)` |
   */
  TicklerCriteriaItems?: Array<TicklerCriteriaItem>;
}

export type TicklerCriteriaSetId = number | { TicklerCriteriaSetId: number };

export interface EditableTicklerCriteriaSet
  extends Partial<
    Pick<TicklerCriteriaSet, "TicklerCriteriaId" | "BooleanAndFlag">
  > {}
