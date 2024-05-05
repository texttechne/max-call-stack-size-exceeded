import { CaseMenuItem } from "../case_menu_item/CaseMenuItem";
import { RecordSubtype } from "../record_subtype/RecordSubtype";

export interface CaseMenuTab {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuTabId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CaseMenuTabId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  Name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Controller` |
   * | Type | `Edm.String` |
   */
  Controller: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActionResult` |
   * | Type | `Edm.String` |
   */
  ActionResult: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DOM_Id` |
   * | Type | `Edm.String` |
   */
  DOM_Id: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CaseMenuItem)` |
   */
  CaseMenuItems?: Array<CaseMenuItem>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordSubtypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordSubtype)` |
   */
  RecordSubtypes?: Array<RecordSubtype>;
}

export type CaseMenuTabId = number | { CaseMenuTabId: number };

export interface EditableCaseMenuTab
  extends Partial<
    Pick<CaseMenuTab, "Name" | "Controller" | "ActionResult" | "DOM_Id">
  > {}
