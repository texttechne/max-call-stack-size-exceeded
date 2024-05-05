import { TicklerCriteriaAction } from "../tickler_criteria_action/TicklerCriteriaAction";
import { TicklerTemplate } from "../tickler_template/TicklerTemplate";
import { TicklerCriteriaSet } from "../tickler_criteria_set/TicklerCriteriaSet";

export interface TicklerCriteria {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerCriteriaId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaActionId` |
   * | Type | `Edm.Int32` |
   */
  TicklerCriteriaActionId: number | null;
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
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   */
  TicklerTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaAction` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerCriteriaAction` |
   */
  TicklerCriteriaAction?: TicklerCriteriaAction | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  TicklerTemplate?: TicklerTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaSets` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerCriteriaSet)` |
   */
  TicklerCriteriaSets?: Array<TicklerCriteriaSet>;
}

export type TicklerCriteriaId = number | { TicklerCriteriaId: number };

export interface EditableTicklerCriteria
  extends Partial<
    Pick<
      TicklerCriteria,
      "TicklerCriteriaActionId" | "BooleanAndFlag" | "TicklerTemplateId"
    >
  > {}
