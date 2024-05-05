import {
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
} from "@odata2ts/odata-query-objects";
import { QPerson } from "../person/QPerson";
import { QCasePacerUserType } from "../case_pacer_user_type/QCasePacerUserType";
import { QActivityLog } from "../activity_log/QActivityLog";
import { QAlert } from "../alert/QAlert";
import { QAppointment } from "../appointment/QAppointment";
import { QAppointmentHistory } from "../appointment_history/QAppointmentHistory";
import { QCasePacerUserSession } from "../case_pacer_user_session/QCasePacerUserSession";
import { QCasePacerUserIntegrationToken } from "../case_pacer_user_integration_token/QCasePacerUserIntegrationToken";
import { QCPDirectMessage } from "../cp_direct_message/QCPDirectMessage";
import { QEventHelp } from "../event_help/QEventHelp";
import { QFirm } from "../firm/QFirm";
import { QRoleTemplate } from "../role_template/QRoleTemplate";
import { QSMSMessage } from "../sms_message/QSMSMessage";
import { QTickler } from "../tickler/QTickler";
import { QSecurityUserGroupAssign } from "../security_user_group_assign/QSecurityUserGroupAssign";
import { QSecurityRuleSummary } from "../security_rule_summary/QSecurityRuleSummary";
import { QCalendarEntry } from "../calendar_entry/QCalendarEntry";
import { QCalendarEntryRecur } from "../calendar_entry_recur/QCalendarEntryRecur";

export class QCasePacerUser extends QPerson {
  public readonly Email = new QStringPath(this.withPrefix("Email"));
  public readonly IsLockedOut = new QBooleanPath(
    this.withPrefix("IsLockedOut")
  );
  public readonly AttorneyListingTitle = new QStringPath(
    this.withPrefix("AttorneyListingTitle")
  );
  public readonly AttorneyListingEnable = new QBooleanPath(
    this.withPrefix("AttorneyListingEnable")
  );
  public readonly CasePacerUserType = new QEntityPath(
    this.withPrefix("CasePacerUserType"),
    () => QCasePacerUserType
  );
  public readonly ActivityLogs = new QEntityCollectionPath(
    this.withPrefix("ActivityLogs"),
    () => QActivityLog
  );
  public readonly ActivityLogsByAuditUser = new QEntityCollectionPath(
    this.withPrefix("ActivityLogsByAuditUser"),
    () => QActivityLog
  );
  public readonly Alerts = new QEntityCollectionPath(
    this.withPrefix("Alerts"),
    () => QAlert
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly AppointmentHistories = new QEntityCollectionPath(
    this.withPrefix("AppointmentHistories"),
    () => QAppointmentHistory
  );
  public readonly CasePacerUserSessions = new QEntityCollectionPath(
    this.withPrefix("CasePacerUserSessions"),
    () => QCasePacerUserSession
  );
  public readonly CasePacerUserIntegrationToken = new QEntityPath(
    this.withPrefix("CasePacerUserIntegrationToken"),
    () => QCasePacerUserIntegrationToken
  );
  public readonly CPDirectMessages = new QEntityCollectionPath(
    this.withPrefix("CPDirectMessages"),
    () => QCPDirectMessage
  );
  public readonly EventHelp = new QEntityPath(
    this.withPrefix("EventHelp"),
    () => QEventHelp
  );
  public readonly DefaultAttorneyFirms = new QEntityCollectionPath(
    this.withPrefix("DefaultAttorneyFirms"),
    () => QFirm
  );
  public readonly DefaultParalegalFirms = new QEntityCollectionPath(
    this.withPrefix("DefaultParalegalFirms"),
    () => QFirm
  );
  public readonly RoleTemplates = new QEntityCollectionPath(
    this.withPrefix("RoleTemplates"),
    () => QRoleTemplate
  );
  public readonly SMSMessages = new QEntityCollectionPath(
    this.withPrefix("SMSMessages"),
    () => QSMSMessage
  );
  public readonly Ticklers = new QEntityCollectionPath(
    this.withPrefix("Ticklers"),
    () => QTickler
  );
  public readonly SecurityUserGroupAssigns = new QEntityCollectionPath(
    this.withPrefix("SecurityUserGroupAssigns"),
    () => QSecurityUserGroupAssign
  );
  public readonly SecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("SecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
}

export const qCasePacerUser = new QCasePacerUser();
