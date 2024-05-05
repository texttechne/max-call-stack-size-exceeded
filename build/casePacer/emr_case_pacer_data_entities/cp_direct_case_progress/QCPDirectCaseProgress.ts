import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { QIntakeClientLawsuit } from "../intake_client_lawsuit/QIntakeClientLawsuit";
import { CPDirectCaseProgressId } from "./CPDirectCaseProgress";

export class QCPDirectCaseProgress extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly ShortName = new QStringPath(this.withPrefix("ShortName"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly IntakeClientLawsuits = new QEntityCollectionPath(
    this.withPrefix("IntakeClientLawsuits"),
    () => QIntakeClientLawsuit
  );
}

export const qCPDirectCaseProgress = new QCPDirectCaseProgress();

export class QCPDirectCaseProgressId extends QId<CPDirectCaseProgressId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
