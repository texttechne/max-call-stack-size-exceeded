import { TicklerActionType } from "../tickler_action_type/TicklerActionType";
import { TicklerAnswer } from "../tickler_answer/TicklerAnswer";

export interface TicklerAnswerAction {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswerActionId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerAnswerActionId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswerId` |
   * | Type | `Edm.Int32` |
   */
  TicklerAnswerId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerActionTypeId` |
   * | Type | `Edm.Int32` |
   */
  TicklerActionTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ActionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TargetTicklerNumber` |
   * | Type | `Edm.Int32` |
   */
  TargetTicklerNumber: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumberOfDays` |
   * | Type | `Edm.Int32` |
   */
  NumberOfDays: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplateName` |
   * | Type | `Edm.String` |
   */
  DocumentTemplateName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Destination` |
   * | Type | `Edm.String` |
   */
  Destination: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ColumnIdentifier` |
   * | Type | `Edm.String` |
   */
  ColumnIdentifier: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DataValue` |
   * | Type | `Edm.String` |
   */
  DataValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerActionType` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerActionType` |
   */
  TicklerActionType?: TicklerActionType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswer` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerAnswer` |
   */
  TicklerAnswer?: TicklerAnswer | null;
}

export type TicklerAnswerActionId = number | { TicklerAnswerActionId: number };

export interface EditableTicklerAnswerAction
  extends Pick<TicklerAnswerAction, "ActionOrder">,
    Partial<
      Pick<
        TicklerAnswerAction,
        | "TicklerAnswerId"
        | "TicklerActionTypeId"
        | "TargetTicklerNumber"
        | "NumberOfDays"
        | "DocumentTemplateName"
        | "Destination"
        | "ColumnIdentifier"
        | "DataValue"
      >
    > {}
