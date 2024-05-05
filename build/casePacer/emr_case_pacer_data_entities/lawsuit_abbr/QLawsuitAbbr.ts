import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { LawsuitAbbrId } from "./LawsuitAbbr";

export class QLawsuitAbbr extends QueryObject {
  public readonly LawsuitAbbrId = new QNumberPath(
    this.withPrefix("LawsuitAbbrId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly LawsuitAbbrName = new QStringPath(
    this.withPrefix("LawsuitAbbrName")
  );
  public readonly Active = new QBooleanPath(this.withPrefix("Active"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qLawsuitAbbr = new QLawsuitAbbr();

export class QLawsuitAbbrId extends QId<LawsuitAbbrId> {
  private readonly params = [new QNumberParam("LawsuitAbbrId")];

  getParams() {
    return this.params;
  }
}
