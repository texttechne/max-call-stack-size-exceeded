import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QLawsuitPhaseType } from "../lawsuit_phase_type/QLawsuitPhaseType";
import { LawsuitPhaseDateId } from "./LawsuitPhaseDate";

export class QLawsuitPhaseDate extends QueryObject {
  public readonly LawsuitPhaseDateId = new QNumberPath(
    this.withPrefix("LawsuitPhaseDateId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly LawsuitPhaseTypeId = new QNumberPath(
    this.withPrefix("LawsuitPhaseTypeId")
  );
  public readonly EnteredDate = new QDateTimeOffsetPath(
    this.withPrefix("EnteredDate")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly LawsuitPhaseType = new QEntityPath(
    this.withPrefix("LawsuitPhaseType"),
    () => QLawsuitPhaseType
  );
}

export const qLawsuitPhaseDate = new QLawsuitPhaseDate();

export class QLawsuitPhaseDateId extends QId<LawsuitPhaseDateId> {
  private readonly params = [new QNumberParam("LawsuitPhaseDateId")];

  getParams() {
    return this.params;
  }
}
