import { Firm } from "../firm/Firm";
import { CaseMenuTab } from "../case_menu_tab/CaseMenuTab";
import { RecordType } from "../record_type/RecordType";
import { Record } from "../record/Record";
import { RecordFolder } from "../record_folder/RecordFolder";

export interface RecordSubtype {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordSubtypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordSubtypeId: number;
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
   * | Name | `SubtypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  SubtypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordTypeId` |
   * | Type | `Edm.Int32` |
   */
  RecordTypeId: number | null;
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
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
   * | Name | `RecordType` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordType` |
   */
  RecordType?: RecordType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Records` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Record)` |
   */
  Records?: Array<Record>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFolders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordFolder)` |
   */
  RecordFolders?: Array<RecordFolder>;
}

export type RecordSubtypeId = number | { RecordSubtypeId: number };

export interface EditableRecordSubtype
  extends Pick<RecordSubtype, "SubtypeName">,
    Partial<Pick<RecordSubtype, "FirmId" | "RecordTypeId" | "CaseMenuTabId">> {}
