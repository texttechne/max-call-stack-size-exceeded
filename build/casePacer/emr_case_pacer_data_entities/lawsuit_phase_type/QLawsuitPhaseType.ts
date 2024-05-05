import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QLawsuitPhaseDate } from "../lawsuit_phase_date/QLawsuitPhaseDate";
import { QSubPhaseType } from "../sub_phase_type/QSubPhaseType";
import { QTicklerTemplate } from "../tickler_template/QTicklerTemplate";
import { LawsuitPhaseTypeId } from "./LawsuitPhaseType";

export class QLawsuitPhaseType extends QueryObject {
  public readonly LawsuitPhaseTypeId = new QNumberPath(
    this.withPrefix("LawsuitPhaseTypeId")
  );
  public readonly LawsuitPhaseTypeName = new QStringPath(
    this.withPrefix("LawsuitPhaseTypeName")
  );
  public readonly Lawsuits = new QEntityCollectionPath(
    this.withPrefix("Lawsuits"),
    () => QLawsuit
  );
  public readonly LawsuitPhaseDates = new QEntityCollectionPath(
    this.withPrefix("LawsuitPhaseDates"),
    () => QLawsuitPhaseDate
  );
  public readonly SubPhaseTypes = new QEntityCollectionPath(
    this.withPrefix("SubPhaseTypes"),
    () => QSubPhaseType
  );
  public readonly CreateTicklerTemplates = new QEntityCollectionPath(
    this.withPrefix("CreateTicklerTemplates"),
    () => QTicklerTemplate
  );
  public readonly ApplicableTicklerTemplates = new QEntityCollectionPath(
    this.withPrefix("ApplicableTicklerTemplates"),
    () => QTicklerTemplate
  );
}

export const qLawsuitPhaseType = new QLawsuitPhaseType();

export class QLawsuitPhaseTypeId extends QId<LawsuitPhaseTypeId> {
  private readonly params = [new QNumberParam("LawsuitPhaseTypeId")];

  getParams() {
    return this.params;
  }
}
