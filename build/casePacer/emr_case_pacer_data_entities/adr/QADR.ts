import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QADRType } from "../adr_type/QADRType";
import { QLitigation } from "../litigation/QLitigation";
import { QParty } from "../party/QParty";
import { QAppointment } from "../appointment/QAppointment";
import { QCalendarEntry } from "../calendar_entry/QCalendarEntry";
import { QCalendarEntryRecur } from "../calendar_entry_recur/QCalendarEntryRecur";
import { ADRId } from "./ADR";

export class QADR extends QueryObject {
  public readonly ADRId = new QNumberPath(this.withPrefix("ADRId"));
  public readonly ADRTypeId = new QNumberPath(this.withPrefix("ADRTypeId"));
  public readonly MAPartyID = new QNumberPath(this.withPrefix("MAPartyID"));
  public readonly HearingLocation = new QStringPath(
    this.withPrefix("HearingLocation")
  );
  public readonly HearingAddress = new QStringPath(
    this.withPrefix("HearingAddress")
  );
  public readonly HearingNotes = new QStringPath(
    this.withPrefix("HearingNotes")
  );
  public readonly HearingHeldFlag = new QBooleanPath(
    this.withPrefix("HearingHeldFlag")
  );
  public readonly StatementSentDate = new QDateTimeOffsetPath(
    this.withPrefix("StatementSentDate")
  );
  public readonly PlaintiffConfirmSentDate = new QDateTimeOffsetPath(
    this.withPrefix("PlaintiffConfirmSentDate")
  );
  public readonly DefendantInsurSentDate = new QDateTimeOffsetPath(
    this.withPrefix("DefendantInsurSentDate")
  );
  public readonly DefendantAttorneySentDate = new QDateTimeOffsetPath(
    this.withPrefix("DefendantAttorneySentDate")
  );
  public readonly ConfirmationCallsFlag = new QBooleanPath(
    this.withPrefix("ConfirmationCallsFlag")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly ADRType = new QEntityPath(
    this.withPrefix("ADRType"),
    () => QADRType
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
  public readonly MediatorArbitrator = new QEntityPath(
    this.withPrefix("MediatorArbitrator"),
    () => QParty
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

export const qADR = new QADR();

export class QADRId extends QId<ADRId> {
  private readonly params = [new QNumberParam("ADRId")];

  getParams() {
    return this.params;
  }
}
