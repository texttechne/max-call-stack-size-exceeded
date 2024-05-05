import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QuickBooksBankAccountId } from "./QuickBooksBankAccount";

export class QQuickBooksBankAccount extends QueryObject {
  public readonly QBAccountId = new QNumberPath(this.withPrefix("QBAccountId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly QBListID = new QStringPath(this.withPrefix("QBListID"));
  public readonly QBName = new QStringPath(this.withPrefix("QBName"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qQuickBooksBankAccount = new QQuickBooksBankAccount();

export class QQuickBooksBankAccountId extends QId<QuickBooksBankAccountId> {
  private readonly params = [new QNumberParam("QBAccountId")];

  getParams() {
    return this.params;
  }
}
