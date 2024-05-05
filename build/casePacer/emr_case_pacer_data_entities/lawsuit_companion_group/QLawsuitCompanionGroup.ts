import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { LawsuitCompanionGroupId } from "./LawsuitCompanionGroup";

export class QLawsuitCompanionGroup extends QueryObject {
  public readonly LawsuitCompanionGroupId = new QNumberPath(
    this.withPrefix("LawsuitCompanionGroupId")
  );
  public readonly LawsuitCompanionGroupName = new QStringPath(
    this.withPrefix("LawsuitCompanionGroupName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Lawsuits = new QEntityCollectionPath(
    this.withPrefix("Lawsuits"),
    () => QLawsuit
  );
}

export const qLawsuitCompanionGroup = new QLawsuitCompanionGroup();

export class QLawsuitCompanionGroupId extends QId<LawsuitCompanionGroupId> {
  private readonly params = [new QNumberParam("LawsuitCompanionGroupId")];

  getParams() {
    return this.params;
  }
}
