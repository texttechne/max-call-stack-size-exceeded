import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCPDirectSetting } from "../cp_direct_setting/QCPDirectSetting";
import { CPDirectSettingLocationId } from "./CPDirectSettingLocation";

export class QCPDirectSettingLocation extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly CPDirectSettingId = new QNumberPath(
    this.withPrefix("CPDirectSettingId")
  );
  public readonly LocationName = new QStringPath(
    this.withPrefix("LocationName")
  );
  public readonly Address1 = new QStringPath(this.withPrefix("Address1"));
  public readonly Address2 = new QStringPath(this.withPrefix("Address2"));
  public readonly City = new QStringPath(this.withPrefix("City"));
  public readonly State = new QStringPath(this.withPrefix("State"));
  public readonly ZipCode = new QStringPath(this.withPrefix("ZipCode"));
  public readonly CPDirectSetting = new QEntityPath(
    this.withPrefix("CPDirectSetting"),
    () => QCPDirectSetting
  );
}

export const qCPDirectSettingLocation = new QCPDirectSettingLocation();

export class QCPDirectSettingLocationId extends QId<CPDirectSettingLocationId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
