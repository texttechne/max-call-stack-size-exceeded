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
import { QParty } from "../party/QParty";
import { QLawsuitPartyType } from "../lawsuit_party_type/QLawsuitPartyType";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QAppointment } from "../appointment/QAppointment";
import { QDepositionLitigationAssn } from "../deposition_litigation_assn/QDepositionLitigationAssn";
import { QCalendarEntry } from "../calendar_entry/QCalendarEntry";
import { QCalendarEntryRecur } from "../calendar_entry_recur/QCalendarEntryRecur";
import { DepositionId } from "./Deposition";

export class QDeposition extends QueryObject {
  public readonly DepositionId = new QNumberPath(
    this.withPrefix("DepositionId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly DiscoveryOfLawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("DiscoveryOfLawsuitPartyTypeId")
  );
  public readonly DeposerPartyId = new QNumberPath(
    this.withPrefix("DeposerPartyId")
  );
  public readonly DeponentLawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("DeponentLawsuitPartyTypeId")
  );
  public readonly DeponentPartyId = new QNumberPath(
    this.withPrefix("DeponentPartyId")
  );
  public readonly DepositionFirm = new QStringPath(
    this.withPrefix("DepositionFirm")
  );
  public readonly RecorderPartyId = new QNumberPath(
    this.withPrefix("RecorderPartyId")
  );
  public readonly Location = new QStringPath(this.withPrefix("Location"));
  public readonly Address = new QStringPath(this.withPrefix("Address"));
  public readonly HeldFlag = new QBooleanPath(this.withPrefix("HeldFlag"));
  public readonly OriginalDepositionNeededFlag = new QBooleanPath(
    this.withPrefix("OriginalDepositionNeededFlag")
  );
  public readonly ReceivedDate = new QDateTimeOffsetPath(
    this.withPrefix("ReceivedDate")
  );
  public readonly ReturnedDate = new QDateTimeOffsetPath(
    this.withPrefix("ReturnedDate")
  );
  public readonly CopyReceivedFlag = new QBooleanPath(
    this.withPrefix("CopyReceivedFlag")
  );
  public readonly DepositionNotes = new QStringPath(
    this.withPrefix("DepositionNotes")
  );
  public readonly PlaintiffDepoConfirmSentDate = new QDateTimeOffsetPath(
    this.withPrefix("PlaintiffDepoConfirmSentDate")
  );
  public readonly DepoNoticeSentDate = new QDateTimeOffsetPath(
    this.withPrefix("DepoNoticeSentDate")
  );
  public readonly ReporterConfirmSentDate = new QDateTimeOffsetPath(
    this.withPrefix("ReporterConfirmSentDate")
  );
  public readonly DefDepoConfirmSentDate = new QDateTimeOffsetPath(
    this.withPrefix("DefDepoConfirmSentDate")
  );
  public readonly ReporterDepoReqDate1 = new QDateTimeOffsetPath(
    this.withPrefix("ReporterDepoReqDate1")
  );
  public readonly ReporterDepoReqDate2 = new QDateTimeOffsetPath(
    this.withPrefix("ReporterDepoReqDate2")
  );
  public readonly ReporterDateCalled = new QDateTimeOffsetPath(
    this.withPrefix("ReporterDateCalled")
  );
  public readonly PlaintiffDepositionRequestDate = new QDateTimeOffsetPath(
    this.withPrefix("PlaintiffDepositionRequestDate")
  );
  public readonly VideographerPartyId = new QNumberPath(
    this.withPrefix("VideographerPartyId")
  );
  public readonly LocationPartyId = new QNumberPath(
    this.withPrefix("LocationPartyId")
  );
  public readonly LocationParty = new QEntityPath(
    this.withPrefix("LocationParty"),
    () => QParty
  );
  public readonly DeponentLawsuitPartyType = new QEntityPath(
    this.withPrefix("DeponentLawsuitPartyType"),
    () => QLawsuitPartyType
  );
  public readonly Deponent = new QEntityPath(
    this.withPrefix("Deponent"),
    () => QParty
  );
  public readonly Deposer = new QEntityPath(
    this.withPrefix("Deposer"),
    () => QParty
  );
  public readonly DiscoveryOfLawsuitPartyType = new QEntityPath(
    this.withPrefix("DiscoveryOfLawsuitPartyType"),
    () => QLawsuitPartyType
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Recorder = new QEntityPath(
    this.withPrefix("Recorder"),
    () => QParty
  );
  public readonly Videographer = new QEntityPath(
    this.withPrefix("Videographer"),
    () => QParty
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly DepositionLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DepositionLitigationAssns"),
    () => QDepositionLitigationAssn
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

export const qDeposition = new QDeposition();

export class QDepositionId extends QId<DepositionId> {
  private readonly params = [new QNumberParam("DepositionId")];

  getParams() {
    return this.params;
  }
}
