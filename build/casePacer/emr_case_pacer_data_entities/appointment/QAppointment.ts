import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QADR } from "../adr/QADR";
import { QAppointmentCustomType } from "../appointment_custom_type/QAppointmentCustomType";
import { QAppointmentEventSubType } from "../appointment_event_sub_type/QAppointmentEventSubType";
import { QAppointmentType } from "../appointment_type/QAppointmentType";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { QDeposition } from "../deposition/QDeposition";
import { QFirm } from "../firm/QFirm";
import { QHearing } from "../hearing/QHearing";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QParty } from "../party/QParty";
import { QTrial } from "../trial/QTrial";
import { QAppointmentHistory } from "../appointment_history/QAppointmentHistory";
import { QAppointmentIntegration } from "../appointment_integration/QAppointmentIntegration";
import { QAppointmentParty } from "../appointment_party/QAppointmentParty";
import { QAppointmentRecurDate } from "../appointment_recur_date/QAppointmentRecurDate";
import { QCalendarEntry } from "../calendar_entry/QCalendarEntry";
import { QCalendarEntryRecur } from "../calendar_entry_recur/QCalendarEntryRecur";
import { AppointmentId } from "./Appointment";

export class QAppointment extends QueryObject {
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly AppointmentTypeId = new QNumberPath(
    this.withPrefix("AppointmentTypeId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly UserId = new QNumberPath(this.withPrefix("UserId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly Subject = new QStringPath(this.withPrefix("Subject"));
  public readonly Location = new QStringPath(this.withPrefix("Location"));
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly StartTime = new QStringPath(this.withPrefix("StartTime"));
  public readonly DurationInMinutes = new QNumberPath(
    this.withPrefix("DurationInMinutes")
  );
  public readonly SendCalendarUpdates = new QBooleanPath(
    this.withPrefix("SendCalendarUpdates")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly ApptDescr = new QStringPath(this.withPrefix("ApptDescr"));
  public readonly GlobalAppointmentId = new QNumberPath(
    this.withPrefix("GlobalAppointmentId")
  );
  public readonly TimezoneOffset = new QNumberPath(
    this.withPrefix("TimezoneOffset")
  );
  public readonly DaylightSavingFlag = new QBooleanPath(
    this.withPrefix("DaylightSavingFlag")
  );
  public readonly ADRId = new QNumberPath(this.withPrefix("ADRId"));
  public readonly DepositionId = new QNumberPath(
    this.withPrefix("DepositionId")
  );
  public readonly TrialId = new QNumberPath(this.withPrefix("TrialId"));
  public readonly AppointmentEventSubTypeId = new QNumberPath(
    this.withPrefix("AppointmentEventSubTypeId")
  );
  public readonly HearingId = new QNumberPath(this.withPrefix("HearingId"));
  public readonly AppointmentCustomTypeId = new QNumberPath(
    this.withPrefix("AppointmentCustomTypeId")
  );
  public readonly RRule = new QStringPath(this.withPrefix("RRule"));
  public readonly ExDate = new QStringPath(this.withPrefix("ExDate"));
  public readonly RecurSeriesMasterId = new QNumberPath(
    this.withPrefix("RecurSeriesMasterId")
  );
  public readonly IsVirtual = new QBooleanPath(this.withPrefix("IsVirtual"));
  public readonly CPDDisplay = new QBooleanPath(this.withPrefix("CPDDisplay"));
  public readonly CPDAttendanceRequired = new QStringPath(
    this.withPrefix("CPDAttendanceRequired")
  );
  public readonly CPDNotes = new QStringPath(this.withPrefix("CPDNotes"));
  public readonly ADR = new QEntityPath(this.withPrefix("ADR"), () => QADR);
  public readonly AppointmentCustomType = new QEntityPath(
    this.withPrefix("AppointmentCustomType"),
    () => QAppointmentCustomType
  );
  public readonly AppointmentEventSubType = new QEntityPath(
    this.withPrefix("AppointmentEventSubType"),
    () => QAppointmentEventSubType
  );
  public readonly AppointmentType = new QEntityPath(
    this.withPrefix("AppointmentType"),
    () => QAppointmentType
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly Deposition = new QEntityPath(
    this.withPrefix("Deposition"),
    () => QDeposition
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly GlobalAppointment = new QEntityPath(
    this.withPrefix("GlobalAppointment"),
    () => QAppointment
  );
  public readonly Hearing = new QEntityPath(
    this.withPrefix("Hearing"),
    () => QHearing
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly PlaintiffParty = new QEntityPath(
    this.withPrefix("PlaintiffParty"),
    () => QParty
  );
  public readonly RecurSeriesMasterAppointment = new QEntityPath(
    this.withPrefix("RecurSeriesMasterAppointment"),
    () => QAppointment
  );
  public readonly Trial = new QEntityPath(
    this.withPrefix("Trial"),
    () => QTrial
  );
  public readonly GlobalAppointmentAppointments = new QEntityCollectionPath(
    this.withPrefix("GlobalAppointmentAppointments"),
    () => QAppointment
  );
  public readonly RecurExceptionAppointments = new QEntityCollectionPath(
    this.withPrefix("RecurExceptionAppointments"),
    () => QAppointment
  );
  public readonly AppointmentHistories = new QEntityCollectionPath(
    this.withPrefix("AppointmentHistories"),
    () => QAppointmentHistory
  );
  public readonly AppointmentIntegration = new QEntityPath(
    this.withPrefix("AppointmentIntegration"),
    () => QAppointmentIntegration
  );
  public readonly AppointmentParties = new QEntityCollectionPath(
    this.withPrefix("AppointmentParties"),
    () => QAppointmentParty
  );
  public readonly AppointmentRecurDates = new QEntityCollectionPath(
    this.withPrefix("AppointmentRecurDates"),
    () => QAppointmentRecurDate
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

export const qAppointment = new QAppointment();

export class QAppointmentId extends QId<AppointmentId> {
  private readonly params = [new QNumberParam("AppointmentId")];

  getParams() {
    return this.params;
  }
}
