import { Lawsuit } from "../lawsuit/Lawsuit";
import { LawsuitPhaseType } from "../lawsuit_phase_type/LawsuitPhaseType";

export interface LawsuitPhaseDate {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseDateId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitPhaseDateId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
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
   * | Name | `EnteredDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  EnteredDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPhaseType` |
   */
  LawsuitPhaseType?: LawsuitPhaseType | null;
}

export type LawsuitPhaseDateId = number | { LawsuitPhaseDateId: number };

export interface EditableLawsuitPhaseDate
  extends Pick<LawsuitPhaseDate, "EnteredDate">,
    Partial<Pick<LawsuitPhaseDate, "LawsuitId" | "LawsuitPhaseTypeId">> {}
