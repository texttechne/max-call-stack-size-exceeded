import { CaseMenuItem } from "../case_menu_item/CaseMenuItem";

export interface CaseMenuGroup {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuGroupId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CaseMenuGroupId: number;
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
   * | Name | `CaseMenuItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CaseMenuItem)` |
   */
  CaseMenuItems?: Array<CaseMenuItem>;
}

export type CaseMenuGroupId = number | { CaseMenuGroupId: number };

export interface EditableCaseMenuGroup
  extends Partial<Pick<CaseMenuGroup, "Name">> {}
