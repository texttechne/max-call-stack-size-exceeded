import { TicklerCriteriaItem } from "../tickler_criteria_item/TicklerCriteriaItem";

export interface TicklerCriteriaOperator {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaOperatorId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerCriteriaOperatorId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaOperatorName` |
   * | Type | `Edm.String` |
   */
  TicklerCriteriaOperatorName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DataType` |
   * | Type | `Edm.String` |
   */
  DataType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HasComparisonValue` |
   * | Type | `Edm.Boolean` |
   */
  HasComparisonValue: boolean | null;
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

export type TicklerCriteriaOperatorId =
  | number
  | { TicklerCriteriaOperatorId: number };

export interface EditableTicklerCriteriaOperator
  extends Partial<
    Pick<
      TicklerCriteriaOperator,
      "TicklerCriteriaOperatorName" | "DataType" | "HasComparisonValue"
    >
  > {}
