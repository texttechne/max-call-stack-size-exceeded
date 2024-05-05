import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QActivityLogType } from "../activity_log_type/QActivityLogType";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { QExpense } from "../expense/QExpense";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QActivityHoursLog } from "../activity_hours_log/QActivityHoursLog";
import { ActivityLogId } from "./ActivityLog";

export class QActivityLog extends QueryObject {
  public readonly ActivityLogId = new QNumberPath(
    this.withPrefix("ActivityLogId")
  );
  public readonly EntryDate = new QDateTimeOffsetPath(
    this.withPrefix("EntryDate")
  );
  public readonly ActivityDescription = new QStringPath(
    this.withPrefix("ActivityDescription")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly CasePacerUserId = new QNumberPath(
    this.withPrefix("CasePacerUserId")
  );
  public readonly RelatedEntityType = new QStringPath(
    this.withPrefix("RelatedEntityType")
  );
  public readonly RelatedEntityId = new QNumberPath(
    this.withPrefix("RelatedEntityId")
  );
  public readonly Billable = new QBooleanPath(this.withPrefix("Billable"));
  public readonly BillableRate = new QNumberPath(
    this.withPrefix("BillableRate")
  );
  public readonly ExpenseId = new QNumberPath(this.withPrefix("ExpenseId"));
  public readonly AuditUserId = new QNumberPath(this.withPrefix("AuditUserId"));
  public readonly ActivityLogTypeId = new QNumberPath(
    this.withPrefix("ActivityLogTypeId")
  );
  public readonly GlobalActivityLogId = new QNumberPath(
    this.withPrefix("GlobalActivityLogId")
  );
  public readonly ActivityLogType = new QEntityPath(
    this.withPrefix("ActivityLogType"),
    () => QActivityLogType
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly CasePacerAuditUser = new QEntityPath(
    this.withPrefix("CasePacerAuditUser"),
    () => QCasePacerUser
  );
  public readonly Expense = new QEntityPath(
    this.withPrefix("Expense"),
    () => QExpense
  );
  public readonly GlobalActivityLog = new QEntityPath(
    this.withPrefix("GlobalActivityLog"),
    () => QActivityLog
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly ActivityHoursLogs = new QEntityCollectionPath(
    this.withPrefix("ActivityHoursLogs"),
    () => QActivityHoursLog
  );
  public readonly GlobalActivityLogActivityLogs = new QEntityCollectionPath(
    this.withPrefix("GlobalActivityLogActivityLogs"),
    () => QActivityLog
  );
}

export const qActivityLog = new QActivityLog();

export class QActivityLogId extends QId<ActivityLogId> {
  private readonly params = [new QNumberParam("ActivityLogId")];

  getParams() {
    return this.params;
  }
}
