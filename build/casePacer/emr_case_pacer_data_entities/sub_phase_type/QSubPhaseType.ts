import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitPhaseType } from "../lawsuit_phase_type/QLawsuitPhaseType";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { SubPhaseTypeId } from "./SubPhaseType";

export class QSubPhaseType extends QueryObject {
  public readonly SubPhaseTypeId = new QNumberPath(
    this.withPrefix("SubPhaseTypeId")
  );
  public readonly LawsuitPhaseTypeId = new QNumberPath(
    this.withPrefix("LawsuitPhaseTypeId")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly SubPhaseTypeName = new QStringPath(
    this.withPrefix("SubPhaseTypeName")
  );
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly Abbrev = new QStringPath(this.withPrefix("Abbrev"));
  public readonly LawsuitPhaseType = new QEntityPath(
    this.withPrefix("LawsuitPhaseType"),
    () => QLawsuitPhaseType
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly Lawsuits = new QEntityCollectionPath(
    this.withPrefix("Lawsuits"),
    () => QLawsuit
  );
}

export const qSubPhaseType = new QSubPhaseType();

export class QSubPhaseTypeId extends QId<SubPhaseTypeId> {
  private readonly params = [new QNumberParam("SubPhaseTypeId")];

  getParams() {
    return this.params;
  }
}
