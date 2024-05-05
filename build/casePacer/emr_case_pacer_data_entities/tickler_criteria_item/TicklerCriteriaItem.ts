import { TicklerCriteriaOperator } from "../tickler_criteria_operator/TicklerCriteriaOperator";
import { TicklerCriteriaSet } from "../tickler_criteria_set/TicklerCriteriaSet";

export interface TicklerCriteriaItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaItemId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerCriteriaItemId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaSetId` |
   * | Type | `Edm.Int32` |
   */
  TicklerCriteriaSetId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Attribute` |
   * | Type | `Edm.String` |
   */
  Attribute: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaOperatorId` |
   * | Type | `Edm.Int32` |
   */
  TicklerCriteriaOperatorId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ComparisonValue` |
   * | Type | `Edm.String` |
   */
  ComparisonValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaOperator` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerCriteriaOperator` |
   */
  TicklerCriteriaOperator?: TicklerCriteriaOperator | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaSet` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerCriteriaSet` |
   */
  TicklerCriteriaSet?: TicklerCriteriaSet | null;
}

export type TicklerCriteriaItemId = number | { TicklerCriteriaItemId: number };

export interface EditableTicklerCriteriaItem
  extends Partial<
    Pick<
      TicklerCriteriaItem,
      | "TicklerCriteriaSetId"
      | "Attribute"
      | "TicklerCriteriaOperatorId"
      | "ComparisonValue"
    >
  > {}
