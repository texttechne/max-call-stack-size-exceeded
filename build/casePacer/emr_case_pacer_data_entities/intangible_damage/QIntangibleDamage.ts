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
import { IntangibleDamageId } from "./IntangibleDamage";

export class QIntangibleDamage extends QueryObject {
  public readonly IntangibleDamageId = new QNumberPath(
    this.withPrefix("IntangibleDamageId")
  );
  public readonly FirmPartyId = new QNumberPath(this.withPrefix("FirmPartyId"));
  public readonly IntangibleDamageName = new QStringPath(
    this.withPrefix("IntangibleDamageName")
  );
  public readonly Spousal = new QBooleanPath(this.withPrefix("Spousal"));
  public readonly Sequence = new QNumberPath(this.withPrefix("Sequence"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qIntangibleDamage = new QIntangibleDamage();

export class QIntangibleDamageId extends QId<IntangibleDamageId> {
  private readonly params = [new QNumberParam("IntangibleDamageId")];

  getParams() {
    return this.params;
  }
}
