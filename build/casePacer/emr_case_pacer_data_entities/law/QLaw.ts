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
import { QDemand } from "../demand/QDemand";
import { LawId } from "./Law";

export class QLaw extends QueryObject {
  public readonly LawID = new QNumberPath(this.withPrefix("LawID"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawCode = new QStringPath(this.withPrefix("LawCode"));
  public readonly LawText = new QStringPath(this.withPrefix("LawText"));
  public readonly LawType = new QStringPath(this.withPrefix("LawType"));
  public readonly Active = new QBooleanPath(this.withPrefix("Active"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly IntangibleDamagesDemands = new QEntityCollectionPath(
    this.withPrefix("IntangibleDamagesDemands"),
    () => QDemand
  );
  public readonly LiabilityDemands = new QEntityCollectionPath(
    this.withPrefix("LiabilityDemands"),
    () => QDemand
  );
  public readonly LostWagesDemands = new QEntityCollectionPath(
    this.withPrefix("LostWagesDemands"),
    () => QDemand
  );
}

export const qLaw = new QLaw();

export class QLawId extends QId<LawId> {
  private readonly params = [new QNumberParam("LawID")];

  getParams() {
    return this.params;
  }
}
