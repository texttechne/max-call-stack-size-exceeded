import { Firm } from "../firm/Firm";
import { LawsuitPhaseType } from "../lawsuit_phase_type/LawsuitPhaseType";
import { RoleTemplate } from "../role_template/RoleTemplate";
import { LawsuitTypeTickler } from "../lawsuit_type_tickler/LawsuitTypeTickler";
import { Tickler } from "../tickler/Tickler";
import { TicklerAnswer } from "../tickler_answer/TicklerAnswer";
import { TicklerCriteria } from "../tickler_criteria/TicklerCriteria";
import { TicklerTemplateAction } from "../tickler_template_action/TicklerTemplateAction";

export interface TicklerTemplate {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerTemplateId: number;
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
   * | Name | `TicklerNum` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerNum: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerText` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TicklerText: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumDaysOffset` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  NumDaysOffset: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenchmarkDate` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BenchmarkDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhaseAdvancing` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PhaseAdvancing: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EventId` |
   * | Type | `Edm.Int32` |
   */
  EventId: number | null;
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
   * | Name | `RelatedEntityType` |
   * | Type | `Edm.String` |
   */
  RelatedEntityType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequiresClosedRelatedTicklers` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  RequiresClosedRelatedTicklers: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplateId` |
   * | Type | `Edm.Int32` |
   */
  RoleTemplateId: number | null;
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
   * | Name | `CreatePhaseEvent` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPhaseType` |
   */
  CreatePhaseEvent?: LawsuitPhaseType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.RoleTemplate` |
   */
  RoleTemplate?: RoleTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerPhase` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPhaseType` |
   */
  TicklerPhase?: LawsuitPhaseType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeTicklers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeTickler)` |
   */
  LawsuitTypeTicklers?: Array<LawsuitTypeTickler>;
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
   * | Name | `TicklerAnswers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerAnswer)` |
   */
  TicklerAnswers?: Array<TicklerAnswer>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriterias` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerCriteria)` |
   */
  TicklerCriterias?: Array<TicklerCriteria>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentActions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplateAction)` |
   */
  ParentActions?: Array<TicklerTemplateAction>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildActions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplateAction)` |
   */
  ChildActions?: Array<TicklerTemplateAction>;
}

export type TicklerTemplateId = number | { TicklerTemplateId: number };

export interface EditableTicklerTemplate
  extends Pick<
      TicklerTemplate,
      | "TicklerNum"
      | "TicklerText"
      | "NumDaysOffset"
      | "BenchmarkDate"
      | "PhaseAdvancing"
      | "RequiresClosedRelatedTicklers"
    >,
    Partial<
      Pick<
        TicklerTemplate,
        | "FirmId"
        | "EventId"
        | "LawsuitPhaseTypeId"
        | "RelatedEntityType"
        | "RoleTemplateId"
      >
    > {}
