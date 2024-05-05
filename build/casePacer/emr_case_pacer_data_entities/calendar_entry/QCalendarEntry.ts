import {
  QueryObject,
  QStringPath,
  QNumberPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QStringParam,
  QDateTimeOffsetParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { QFirm } from "../firm/QFirm";
import { QParty } from "../party/QParty";
import { QAppointment } from "../appointment/QAppointment";
import { QAppointmentEventSubType } from "../appointment_event_sub_type/QAppointmentEventSubType";
import { QADR } from "../adr/QADR";
import { QDeposition } from "../deposition/QDeposition";
import { QTrial } from "../trial/QTrial";
import { QHearing } from "../hearing/QHearing";
import { CalendarEntryId } from "./CalendarEntry";

export class QCalendarEntry extends QueryObject {
  public readonly CalendarEntryId = new QStringPath(
    this.withPrefix("CalendarEntryId")
  );
  public readonly AppointmentTypeName = new QStringPath(
    this.withPrefix("AppointmentTypeName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly UserId = new QNumberPath(this.withPrefix("UserId"));
  public readonly UserFullName = new QStringPath(
    this.withPrefix("UserFullName")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly LawsuitNumber = new QStringPath(
    this.withPrefix("LawsuitNumber")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly ClientName = new QStringPath(this.withPrefix("ClientName"));
  public readonly AttorneyPartyId = new QNumberPath(
    this.withPrefix("AttorneyPartyId")
  );
  public readonly ParalegalPartyId = new QNumberPath(
    this.withPrefix("ParalegalPartyId")
  );
  public readonly AttorneyDisplayName = new QStringPath(
    this.withPrefix("AttorneyDisplayName")
  );
  public readonly ParalegalDisplayName = new QStringPath(
    this.withPrefix("ParalegalDisplayName")
  );
  public readonly AttorneyColor = new QStringPath(
    this.withPrefix("AttorneyColor")
  );
  public readonly ParalegalColor = new QStringPath(
    this.withPrefix("ParalegalColor")
  );
  public readonly LiteralName = new QStringPath(this.withPrefix("LiteralName"));
  public readonly LawsuitPhaseTypeName = new QStringPath(
    this.withPrefix("LawsuitPhaseTypeName")
  );
  public readonly LawsuitTypeName = new QStringPath(
    this.withPrefix("LawsuitTypeName")
  );
  public readonly UserColor = new QStringPath(this.withPrefix("UserColor"));
  public readonly Subject = new QStringPath(this.withPrefix("Subject"));
  public readonly Location = new QStringPath(this.withPrefix("Location"));
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly StartTime = new QStringPath(this.withPrefix("StartTime"));
  public readonly DurationInMinutes = new QNumberPath(
    this.withPrefix("DurationInMinutes")
  );
  public readonly RRule = new QStringPath(this.withPrefix("RRule"));
  public readonly ExDate = new QStringPath(this.withPrefix("ExDate"));
  public readonly IsRecurring = new QBooleanPath(
    this.withPrefix("IsRecurring")
  );
  public readonly IsAuto = new QBooleanPath(this.withPrefix("IsAuto"));
  public readonly TimezoneOffset = new QNumberPath(
    this.withPrefix("TimezoneOffset")
  );
  public readonly DaylightSavingFlag = new QBooleanPath(
    this.withPrefix("DaylightSavingFlag")
  );
  public readonly TimezoneType = new QNumberPath(
    this.withPrefix("TimezoneType")
  );
  public readonly ApptDescr = new QStringPath(this.withPrefix("ApptDescr"));
  public readonly AppointmentEventTypeName = new QStringPath(
    this.withPrefix("AppointmentEventTypeName")
  );
  public readonly AppointmentTypeId = new QNumberPath(
    this.withPrefix("AppointmentTypeId")
  );
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly AppointmentEventSubTypeId = new QNumberPath(
    this.withPrefix("AppointmentEventSubTypeId")
  );
  public readonly AppointmentEventSubTypeName = new QStringPath(
    this.withPrefix("AppointmentEventSubTypeName")
  );
  public readonly ADRId = new QNumberPath(this.withPrefix("ADRId"));
  public readonly DepositionId = new QNumberPath(
    this.withPrefix("DepositionId")
  );
  public readonly TrialId = new QNumberPath(this.withPrefix("TrialId"));
  public readonly HearingId = new QNumberPath(this.withPrefix("HearingId"));
  public readonly Modified = new QDateTimeOffsetPath(
    this.withPrefix("Modified")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly User = new QEntityPath(
    this.withPrefix("User"),
    () => QCasePacerUser
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly PlaintiffParty = new QEntityPath(
    this.withPrefix("PlaintiffParty"),
    () => QParty
  );
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
  public readonly AppointmentEventSubType = new QEntityPath(
    this.withPrefix("AppointmentEventSubType"),
    () => QAppointmentEventSubType
  );
  public readonly ADR = new QEntityPath(this.withPrefix("ADR"), () => QADR);
  public readonly Deposition = new QEntityPath(
    this.withPrefix("Deposition"),
    () => QDeposition
  );
  public readonly Trial = new QEntityPath(
    this.withPrefix("Trial"),
    () => QTrial
  );
  public readonly Hearing = new QEntityPath(
    this.withPrefix("Hearing"),
    () => QHearing
  );
}

export const qCalendarEntry = new QCalendarEntry();

export class QCalendarEntryId extends QId<CalendarEntryId> {
  private readonly params = [
    new QStringParam("CalendarEntryId"),
    new QDateTimeOffsetParam("StartDate"),
  ];

  getParams() {
    return this.params;
  }
}
