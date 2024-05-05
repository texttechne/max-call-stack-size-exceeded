import { CaseMenuGroup } from "../case_menu_group/CaseMenuGroup";
import { CaseMenuTab } from "../case_menu_tab/CaseMenuTab";
import { Firm } from "../firm/Firm";
import { LawsuitType } from "../lawsuit_type/LawsuitType";

export interface CaseMenuItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuItemId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CaseMenuItemId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuGroupId` |
   * | Type | `Edm.Int32` |
   */
  CaseMenuGroupId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuTabId` |
   * | Type | `Edm.Int32` |
   */
  CaseMenuTabId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AlternateTabName` |
   * | Type | `Edm.String` |
   */
  AlternateTabName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AlternateGroupName` |
   * | Type | `Edm.String` |
   */
  AlternateGroupName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuGroup` |
   * | Type | `Emr.CasePacer.Data.Entities.CaseMenuGroup` |
   */
  CaseMenuGroup?: CaseMenuGroup | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuTab` |
   * | Type | `Emr.CasePacer.Data.Entities.CaseMenuTab` |
   */
  CaseMenuTab?: CaseMenuTab | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
}

export type CaseMenuItemId = number | { CaseMenuItemId: number };

export interface EditableCaseMenuItem
  extends Pick<CaseMenuItem, "SortOrder">,
    Partial<
      Pick<
        CaseMenuItem,
        | "LawsuitTypeId"
        | "CaseMenuGroupId"
        | "CaseMenuTabId"
        | "FirmId"
        | "AlternateTabName"
        | "AlternateGroupName"
      >
    > {}
