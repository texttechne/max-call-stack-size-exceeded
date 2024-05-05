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
import { TrialItemId } from "./TrialItem";

export class QTrialItem extends QueryObject {
  public readonly TrialItemId = new QNumberPath(this.withPrefix("TrialItemId"));
  public readonly FirmPartyId = new QNumberPath(this.withPrefix("FirmPartyId"));
  public readonly TrialItemName = new QStringPath(
    this.withPrefix("TrialItemName")
  );
  public readonly TrialItemDesc = new QStringPath(
    this.withPrefix("TrialItemDesc")
  );
  public readonly Sequence = new QNumberPath(this.withPrefix("Sequence"));
  public readonly AutoInclude = new QBooleanPath(
    this.withPrefix("AutoInclude")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qTrialItem = new QTrialItem();

export class QTrialItemId extends QId<TrialItemId> {
  private readonly params = [new QNumberParam("TrialItemId")];

  getParams() {
    return this.params;
  }
}
