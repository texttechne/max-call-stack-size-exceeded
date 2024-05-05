import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QLawsuitPhaseType } from "../lawsuit_phase_type/QLawsuitPhaseType";
import { QRoleTemplate } from "../role_template/QRoleTemplate";
import { QLawsuitTypeTickler } from "../lawsuit_type_tickler/QLawsuitTypeTickler";
import { QTickler } from "../tickler/QTickler";
import { QTicklerAnswer } from "../tickler_answer/QTicklerAnswer";
import { QTicklerCriteria } from "../tickler_criteria/QTicklerCriteria";
import { QTicklerTemplateAction } from "../tickler_template_action/QTicklerTemplateAction";
import { TicklerTemplateId } from "./TicklerTemplate";

export class QTicklerTemplate extends QueryObject {
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly TicklerNum = new QNumberPath(this.withPrefix("TicklerNum"));
  public readonly TicklerText = new QStringPath(this.withPrefix("TicklerText"));
  public readonly NumDaysOffset = new QNumberPath(
    this.withPrefix("NumDaysOffset")
  );
  public readonly BenchmarkDate = new QStringPath(
    this.withPrefix("BenchmarkDate")
  );
  public readonly PhaseAdvancing = new QBooleanPath(
    this.withPrefix("PhaseAdvancing")
  );
  public readonly EventId = new QNumberPath(this.withPrefix("EventId"));
  public readonly LawsuitPhaseTypeId = new QNumberPath(
    this.withPrefix("LawsuitPhaseTypeId")
  );
  public readonly RelatedEntityType = new QStringPath(
    this.withPrefix("RelatedEntityType")
  );
  public readonly RequiresClosedRelatedTicklers = new QBooleanPath(
    this.withPrefix("RequiresClosedRelatedTicklers")
  );
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CreatePhaseEvent = new QEntityPath(
    this.withPrefix("CreatePhaseEvent"),
    () => QLawsuitPhaseType
  );
  public readonly RoleTemplate = new QEntityPath(
    this.withPrefix("RoleTemplate"),
    () => QRoleTemplate
  );
  public readonly TicklerPhase = new QEntityPath(
    this.withPrefix("TicklerPhase"),
    () => QLawsuitPhaseType
  );
  public readonly LawsuitTypeTicklers = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeTicklers"),
    () => QLawsuitTypeTickler
  );
  public readonly Ticklers = new QEntityCollectionPath(
    this.withPrefix("Ticklers"),
    () => QTickler
  );
  public readonly TicklerAnswers = new QEntityCollectionPath(
    this.withPrefix("TicklerAnswers"),
    () => QTicklerAnswer
  );
  public readonly TicklerCriterias = new QEntityCollectionPath(
    this.withPrefix("TicklerCriterias"),
    () => QTicklerCriteria
  );
  public readonly ParentActions = new QEntityCollectionPath(
    this.withPrefix("ParentActions"),
    () => QTicklerTemplateAction
  );
  public readonly ChildActions = new QEntityCollectionPath(
    this.withPrefix("ChildActions"),
    () => QTicklerTemplateAction
  );
}

export const qTicklerTemplate = new QTicklerTemplate();

export class QTicklerTemplateId extends QId<TicklerTemplateId> {
  private readonly params = [new QNumberParam("TicklerTemplateId")];

  getParams() {
    return this.params;
  }
}
