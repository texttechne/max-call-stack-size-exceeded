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
import { QuickBooksSettingId } from "./QuickBooksSetting";

export class QQuickBooksSetting extends QueryObject {
  public readonly QuickBooksSettingsId = new QNumberPath(
    this.withPrefix("QuickBooksSettingsId")
  );
  public readonly FirmPartyId = new QNumberPath(this.withPrefix("FirmPartyId"));
  public readonly Username = new QStringPath(this.withPrefix("Username"));
  public readonly Password = new QStringPath(this.withPrefix("Password"));
  public readonly DefaultBankAccount = new QStringPath(
    this.withPrefix("DefaultBankAccount")
  );
  public readonly DefaultExpenseAccount = new QStringPath(
    this.withPrefix("DefaultExpenseAccount")
  );
  public readonly IsEnabled = new QBooleanPath(this.withPrefix("IsEnabled"));
  public readonly UpdateListsFlag = new QBooleanPath(
    this.withPrefix("UpdateListsFlag")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qQuickBooksSetting = new QQuickBooksSetting();

export class QQuickBooksSettingId extends QId<QuickBooksSettingId> {
  private readonly params = [new QNumberParam("QuickBooksSettingsId")];

  getParams() {
    return this.params;
  }
}
