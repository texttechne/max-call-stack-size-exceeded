import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QParty } from "../party/QParty";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QADR } from "../adr/QADR";
import { QAnswerEnlargement } from "../answer_enlargement/QAnswerEnlargement";
import { QComplaint } from "../complaint/QComplaint";
import { QDefendantLitigationAssn } from "../defendant_litigation_assn/QDefendantLitigationAssn";
import { QDepositionLitigationAssn } from "../deposition_litigation_assn/QDepositionLitigationAssn";
import { QDiscoveryLitigationAssn } from "../discovery_litigation_assn/QDiscoveryLitigationAssn";
import { QTrial } from "../trial/QTrial";
import { QWitnessLitigationAssn } from "../witness_litigation_assn/QWitnessLitigationAssn";
import { LitigationId } from "./Litigation";

export class QLitigation extends QueryObject {
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly CourtPartyId = new QNumberPath(
    this.withPrefix("CourtPartyId")
  );
  public readonly JudgePartyId = new QNumberPath(
    this.withPrefix("JudgePartyId")
  );
  public readonly ComplaintSentDate = new QDateTimeOffsetPath(
    this.withPrefix("ComplaintSentDate")
  );
  public readonly ComplaintFiledDate = new QDateTimeOffsetPath(
    this.withPrefix("ComplaintFiledDate")
  );
  public readonly CrossComplaintFiledDated = new QDateTimeOffsetPath(
    this.withPrefix("CrossComplaintFiledDated")
  );
  public readonly NOIFiledDate = new QDateTimeOffsetPath(
    this.withPrefix("NOIFiledDate")
  );
  public readonly CauseNumber = new QStringPath(this.withPrefix("CauseNumber"));
  public readonly LitigationNotes = new QStringPath(
    this.withPrefix("LitigationNotes")
  );
  public readonly CourtStaff = new QStringPath(this.withPrefix("CourtStaff"));
  public readonly CourtRoom = new QStringPath(this.withPrefix("CourtRoom"));
  public readonly LitigationName = new QStringPath(
    this.withPrefix("LitigationName")
  );
  public readonly InactiveDate = new QDateTimeOffsetPath(
    this.withPrefix("InactiveDate")
  );
  public readonly Court = new QEntityPath(
    this.withPrefix("Court"),
    () => QParty
  );
  public readonly Judge = new QEntityPath(
    this.withPrefix("Judge"),
    () => QParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly ADRs = new QEntityCollectionPath(
    this.withPrefix("ADRs"),
    () => QADR
  );
  public readonly AnswerEnlargements = new QEntityCollectionPath(
    this.withPrefix("AnswerEnlargements"),
    () => QAnswerEnlargement
  );
  public readonly Complaints = new QEntityCollectionPath(
    this.withPrefix("Complaints"),
    () => QComplaint
  );
  public readonly DefendantLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DefendantLitigationAssns"),
    () => QDefendantLitigationAssn
  );
  public readonly DepositionLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DepositionLitigationAssns"),
    () => QDepositionLitigationAssn
  );
  public readonly DiscoveryLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DiscoveryLitigationAssns"),
    () => QDiscoveryLitigationAssn
  );
  public readonly Trials = new QEntityCollectionPath(
    this.withPrefix("Trials"),
    () => QTrial
  );
  public readonly WitnessLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("WitnessLitigationAssns"),
    () => QWitnessLitigationAssn
  );
}

export const qLitigation = new QLitigation();

export class QLitigationId extends QId<LitigationId> {
  private readonly params = [new QNumberParam("LitigationId")];

  getParams() {
    return this.params;
  }
}
