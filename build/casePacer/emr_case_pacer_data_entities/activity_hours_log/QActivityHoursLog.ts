import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QActivityLog } from "../activity_log/QActivityLog";
import { ActivityHoursLogId } from "./ActivityHoursLog";

export class QActivityHoursLog extends QueryObject {
  public readonly ActivityHoursLogId = new QNumberPath(
    this.withPrefix("ActivityHoursLogId")
  );
  public readonly ActivityLogId = new QNumberPath(
    this.withPrefix("ActivityLogId")
  );
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly StartTime = new QStringPath(this.withPrefix("StartTime"));
  public readonly EndDate = new QDateTimeOffsetPath(this.withPrefix("EndDate"));
  public readonly EndTime = new QStringPath(this.withPrefix("EndTime"));
  public readonly DurationinMinutes = new QNumberPath(
    this.withPrefix("DurationinMinutes")
  );
  public readonly ActivityLog = new QEntityPath(
    this.withPrefix("ActivityLog"),
    () => QActivityLog
  );
}

export const qActivityHoursLog = new QActivityHoursLog();

export class QActivityHoursLogId extends QId<ActivityHoursLogId> {
  private readonly params = [new QNumberParam("ActivityHoursLogId")];

  getParams() {
    return this.params;
  }
}
