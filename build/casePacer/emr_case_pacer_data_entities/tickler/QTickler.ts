import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTicklerAnswer } from "../tickler_answer/QTicklerAnswer";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { QFirm } from "../firm/QFirm";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QTicklerTemplate } from "../tickler_template/QTicklerTemplate";
import { QDocument } from "../document/QDocument";
import { TicklerId } from "./Tickler";

export class QTickler extends QueryObject {
  public readonly TicklerId = new QNumberPath(this.withPrefix("TicklerId"));
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly PhaseAdvancing = new QBooleanPath(
    this.withPrefix("PhaseAdvancing")
  );
  public readonly CreatedDate = new QDateTimeOffsetPath(
    this.withPrefix("CreatedDate")
  );
  public readonly OriginalDueDate = new QDateTimeOffsetPath(
    this.withPrefix("OriginalDueDate")
  );
  public readonly CurrentDueDate = new QDateTimeOffsetPath(
    this.withPrefix("CurrentDueDate")
  );
  public readonly ClosedDate = new QDateTimeOffsetPath(
    this.withPrefix("ClosedDate")
  );
  public readonly ClosedByUserId = new QNumberPath(
    this.withPrefix("ClosedByUserId")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly ReasonForDelay = new QStringPath(
    this.withPrefix("ReasonForDelay")
  );
  public readonly TicklerDetails = new QStringPath(
    this.withPrefix("TicklerDetails")
  );
  public readonly TicklerAnswerId = new QNumberPath(
    this.withPrefix("TicklerAnswerId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly RelatedEntityId = new QNumberPath(
    this.withPrefix("RelatedEntityId")
  );
  public readonly ClosedByUserBool = new QBooleanPath(
    this.withPrefix("ClosedByUserBool")
  );
  public readonly AssignedLawsuitPartyId = new QNumberPath(
    this.withPrefix("AssignedLawsuitPartyId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly TicklerAnswer = new QEntityPath(
    this.withPrefix("TicklerAnswer"),
    () => QTicklerAnswer
  );
  public readonly ClosingUser = new QEntityPath(
    this.withPrefix("ClosingUser"),
    () => QCasePacerUser
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly AssignedLawsuitParty = new QEntityPath(
    this.withPrefix("AssignedLawsuitParty"),
    () => QLawsuitParty
  );
  public readonly TicklerTemplate = new QEntityPath(
    this.withPrefix("TicklerTemplate"),
    () => QTicklerTemplate
  );
  public readonly OriginatingTicklerDocuments = new QEntityCollectionPath(
    this.withPrefix("OriginatingTicklerDocuments"),
    () => QDocument
  );
  public readonly ReceivedTicklerDocuments = new QEntityCollectionPath(
    this.withPrefix("ReceivedTicklerDocuments"),
    () => QDocument
  );
}

export const qTickler = new QTickler();

export class QTicklerId extends QId<TicklerId> {
  private readonly params = [new QNumberParam("TicklerId")];

  getParams() {
    return this.params;
  }
}
