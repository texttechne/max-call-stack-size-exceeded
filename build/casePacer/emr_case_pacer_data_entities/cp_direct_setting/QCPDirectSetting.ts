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
import { QCPDirectSettingLocation } from "../cp_direct_setting_location/QCPDirectSettingLocation";
import { CPDirectSettingId } from "./CPDirectSetting";

export class QCPDirectSetting extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly FirmName = new QStringPath(this.withPrefix("FirmName"));
  public readonly FirmContactPhoneNumber = new QStringPath(
    this.withPrefix("FirmContactPhoneNumber")
  );
  public readonly FirmContactEmail = new QStringPath(
    this.withPrefix("FirmContactEmail")
  );
  public readonly AboutFirmTitle = new QStringPath(
    this.withPrefix("AboutFirmTitle")
  );
  public readonly AboutFirmBody = new QStringPath(
    this.withPrefix("AboutFirmBody")
  );
  public readonly Firebase_Android_Apn = new QStringPath(
    this.withPrefix("Firebase_Android_Apn")
  );
  public readonly Firebase_Apple_Ibi = new QStringPath(
    this.withPrefix("Firebase_Apple_Ibi")
  );
  public readonly Firebase_Apple_Isi = new QStringPath(
    this.withPrefix("Firebase_Apple_Isi")
  );
  public readonly AdditionalFirmIds = new QStringPath(
    this.withPrefix("AdditionalFirmIds")
  );
  public readonly MsgEnabled = new QBooleanPath(this.withPrefix("MsgEnabled"));
  public readonly WebSlug = new QStringPath(this.withPrefix("WebSlug"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CPDirectSettingLocations = new QEntityCollectionPath(
    this.withPrefix("CPDirectSettingLocations"),
    () => QCPDirectSettingLocation
  );
}

export const qCPDirectSetting = new QCPDirectSetting();

export class QCPDirectSettingId extends QId<CPDirectSettingId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
