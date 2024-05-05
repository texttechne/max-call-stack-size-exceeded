import { Lawsuit } from "../lawsuit/Lawsuit";
import { LawsuitPhaseDate } from "../lawsuit_phase_date/LawsuitPhaseDate";
import { SubPhaseType } from "../sub_phase_type/SubPhaseType";
import { TicklerTemplate } from "../tickler_template/TicklerTemplate";

export interface LawsuitPhaseType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitPhaseTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitPhaseTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Lawsuit)` |
   */
  Lawsuits?: Array<Lawsuit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseDates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitPhaseDate)` |
   */
  LawsuitPhaseDates?: Array<LawsuitPhaseDate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubPhaseTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SubPhaseType)` |
   */
  SubPhaseTypes?: Array<SubPhaseType>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateTicklerTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplate)` |
   */
  CreateTicklerTemplates?: Array<TicklerTemplate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApplicableTicklerTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplate)` |
   */
  ApplicableTicklerTemplates?: Array<TicklerTemplate>;
}

export type LawsuitPhaseTypeId = number | { LawsuitPhaseTypeId: number };

export interface EditableLawsuitPhaseType
  extends Pick<LawsuitPhaseType, "LawsuitPhaseTypeName"> {}
