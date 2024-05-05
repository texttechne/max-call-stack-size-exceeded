import { LawsuitPhaseType } from "../lawsuit_phase_type/LawsuitPhaseType";
import { LawsuitType } from "../lawsuit_type/LawsuitType";
import { Lawsuit } from "../lawsuit/Lawsuit";

export interface SubPhaseType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubPhaseTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SubPhaseTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPhaseTypeId: number | null;
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
   * | Name | `SubPhaseTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  SubPhaseTypeName: string;
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
   * | Name | `Abbrev` |
   * | Type | `Edm.String` |
   */
  Abbrev: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPhaseType` |
   */
  LawsuitPhaseType?: LawsuitPhaseType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Lawsuit)` |
   */
  Lawsuits?: Array<Lawsuit>;
}

export type SubPhaseTypeId = number | { SubPhaseTypeId: number };

export interface EditableSubPhaseType
  extends Pick<SubPhaseType, "SubPhaseTypeName" | "SortOrder">,
    Partial<
      Pick<SubPhaseType, "LawsuitPhaseTypeId" | "LawsuitTypeId" | "Abbrev">
    > {}
