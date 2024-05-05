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
import { QHearingType } from "../hearing_type/QHearingType";
import { QParty } from "../party/QParty";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QAppointment } from "../appointment/QAppointment";
import { QCalendarEntry } from "../calendar_entry/QCalendarEntry";
import { QCalendarEntryRecur } from "../calendar_entry_recur/QCalendarEntryRecur";
import { HearingId } from "./Hearing";

export class QHearing extends QueryObject {
  public readonly HearingId = new QNumberPath(this.withPrefix("HearingId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly HearingTypeId = new QNumberPath(
    this.withPrefix("HearingTypeId")
  );
  public readonly JudgePartyId = new QNumberPath(
    this.withPrefix("JudgePartyId")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly StatementSentDate = new QDateTimeOffsetPath(
    this.withPrefix("StatementSentDate")
  );
  public readonly ClientConfirmSentDate = new QDateTimeOffsetPath(
    this.withPrefix("ClientConfirmSentDate")
  );
  public readonly ConfirmationCallsFlag = new QBooleanPath(
    this.withPrefix("ConfirmationCallsFlag")
  );
  public readonly DecisionTypeId = new QNumberPath(
    this.withPrefix("DecisionTypeId")
  );
  public readonly DecisionDate = new QDateTimeOffsetPath(
    this.withPrefix("DecisionDate")
  );
  public readonly DecisionSummary = new QStringPath(
    this.withPrefix("DecisionSummary")
  );
  public readonly HearingType = new QEntityPath(
    this.withPrefix("HearingType"),
    () => QHearingType
  );
  public readonly Judge = new QEntityPath(
    this.withPrefix("Judge"),
    () => QParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
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

export const qHearing = new QHearing();

export class QHearingId extends QId<HearingId> {
  private readonly params = [new QNumberParam("HearingId")];

  getParams() {
    return this.params;
  }
}
