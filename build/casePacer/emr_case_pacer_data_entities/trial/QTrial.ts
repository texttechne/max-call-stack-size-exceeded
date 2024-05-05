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
import { QLitigation } from "../litigation/QLitigation";
import { QAppointment } from "../appointment/QAppointment";
import { QTrialExhibit } from "../trial_exhibit/QTrialExhibit";
import { QTrialPleading } from "../trial_pleading/QTrialPleading";
import { QCalendarEntry } from "../calendar_entry/QCalendarEntry";
import { QCalendarEntryRecur } from "../calendar_entry_recur/QCalendarEntryRecur";
import { TrialId } from "./Trial";

export class QTrial extends QueryObject {
  public readonly TrialID = new QNumberPath(this.withPrefix("TrialID"));
  public readonly TrialChoice = new QStringPath(this.withPrefix("TrialChoice"));
  public readonly TrialNotes = new QStringPath(this.withPrefix("TrialNotes"));
  public readonly TrialRequestSentDate1 = new QDateTimeOffsetPath(
    this.withPrefix("TrialRequestSentDate1")
  );
  public readonly TrialRequestSentDate2 = new QDateTimeOffsetPath(
    this.withPrefix("TrialRequestSentDate2")
  );
  public readonly PSummaryJudgement = new QBooleanPath(
    this.withPrefix("PSummaryJudgement")
  );
  public readonly DSummaryJudgement = new QBooleanPath(
    this.withPrefix("DSummaryJudgement")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly TrialExhibits = new QEntityCollectionPath(
    this.withPrefix("TrialExhibits"),
    () => QTrialExhibit
  );
  public readonly TrialPleadings = new QEntityCollectionPath(
    this.withPrefix("TrialPleadings"),
    () => QTrialPleading
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

export const qTrial = new QTrial();

export class QTrialId extends QId<TrialId> {
  private readonly params = [new QNumberParam("TrialID")];

  getParams() {
    return this.params;
  }
}
