import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QActivityLog } from "../activity_log/QActivityLog";
import { ActivityLogTypeId } from "./ActivityLogType";

export class QActivityLogType extends QueryObject {
  public readonly ActivityLogTypeId = new QNumberPath(
    this.withPrefix("ActivityLogTypeId")
  );
  public readonly TypeName = new QStringPath(this.withPrefix("TypeName"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly SystemTypeID = new QNumberPath(
    this.withPrefix("SystemTypeID")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly ActivityLogSystemType = new QEntityPath(
    this.withPrefix("ActivityLogSystemType"),
    () => QActivityLogType
  );
  public readonly ActivityLogs = new QEntityCollectionPath(
    this.withPrefix("ActivityLogs"),
    () => QActivityLog
  );
  public readonly ActivityLogChildrenOfSystemType = new QEntityCollectionPath(
    this.withPrefix("ActivityLogChildrenOfSystemType"),
    () => QActivityLogType
  );
}

export const qActivityLogType = new QActivityLogType();

export class QActivityLogTypeId extends QId<ActivityLogTypeId> {
  private readonly params = [new QNumberParam("ActivityLogTypeId")];

  getParams() {
    return this.params;
  }
}
