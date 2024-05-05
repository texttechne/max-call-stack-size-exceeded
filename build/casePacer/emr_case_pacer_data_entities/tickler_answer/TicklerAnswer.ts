import { TicklerTemplate } from "../tickler_template/TicklerTemplate";
import { Tickler } from "../tickler/Tickler";
import { TicklerAnswerAction } from "../tickler_answer_action/TicklerAnswerAction";

export interface TicklerAnswer {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswerId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerAnswerId: number;
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
   * | Name | `Answer` |
   * | Type | `Edm.String` |
   */
  Answer: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Instruction` |
   * | Type | `Edm.String` |
   */
  Instruction: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResultingAction` |
   * | Type | `Edm.String` |
   */
  ResultingAction: string | null;
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
   * | Name | `Ticklers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Tickler)` |
   */
  Ticklers?: Array<Tickler>;
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

export type TicklerAnswerId = number | { TicklerAnswerId: number };

export interface EditableTicklerAnswer
  extends Partial<
    Pick<
      TicklerAnswer,
      "TicklerTemplateId" | "Answer" | "Instruction" | "ResultingAction"
    >
  > {}
