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
import { QParty } from "../party/QParty";
import { QDiscoveryRecipientType } from "../discovery_recipient_type/QDiscoveryRecipientType";
import { QDiscoveryTarget } from "../discovery_target/QDiscoveryTarget";
import { QDiscoveryType } from "../discovery_type/QDiscoveryType";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QDiscoveryLitigationAssn } from "../discovery_litigation_assn/QDiscoveryLitigationAssn";
import { DiscoveryId } from "./Discovery";

export class QDiscovery extends QueryObject {
  public readonly DiscoveryId = new QNumberPath(this.withPrefix("DiscoveryId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly DiscoveryTargetId = new QNumberPath(
    this.withPrefix("DiscoveryTargetId")
  );
  public readonly DiscoveryTypeId = new QNumberPath(
    this.withPrefix("DiscoveryTypeId")
  );
  public readonly DiscoveryRecipientTypeId = new QNumberPath(
    this.withPrefix("DiscoveryRecipientTypeId")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly DefendantPartyId = new QNumberPath(
    this.withPrefix("DefendantPartyId")
  );
  public readonly ReceivedDate = new QDateTimeOffsetPath(
    this.withPrefix("ReceivedDate")
  );
  public readonly SentDate = new QDateTimeOffsetPath(
    this.withPrefix("SentDate")
  );
  public readonly DueDate = new QDateTimeOffsetPath(this.withPrefix("DueDate"));
  public readonly DiscoveryDescription = new QStringPath(
    this.withPrefix("DiscoveryDescription")
  );
  public readonly ExtensionFiledDate = new QDateTimeOffsetPath(
    this.withPrefix("ExtensionFiledDate")
  );
  public readonly ExtensionGrantedDate = new QDateTimeOffsetPath(
    this.withPrefix("ExtensionGrantedDate")
  );
  public readonly Discovr1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("Discovr1SentDate")
  );
  public readonly Discovr2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("Discovr2SentDate")
  );
  public readonly Letter1ToPlaintiffSentDate = new QDateTimeOffsetPath(
    this.withPrefix("Letter1ToPlaintiffSentDate")
  );
  public readonly Letter2ToPlaintiffSentDate = new QDateTimeOffsetPath(
    this.withPrefix("Letter2ToPlaintiffSentDate")
  );
  public readonly AnswersReceivedFromPlaintiffDate = new QDateTimeOffsetPath(
    this.withPrefix("AnswersReceivedFromPlaintiffDate")
  );
  public readonly NonPartyRecipientPartyId = new QNumberPath(
    this.withPrefix("NonPartyRecipientPartyId")
  );
  public readonly CompelFiledDate = new QDateTimeOffsetPath(
    this.withPrefix("CompelFiledDate")
  );
  public readonly CompelGrantedDate = new QDateTimeOffsetPath(
    this.withPrefix("CompelGrantedDate")
  );
  public readonly DueByOrder = new QBooleanPath(this.withPrefix("DueByOrder"));
  public readonly Defendant = new QEntityPath(
    this.withPrefix("Defendant"),
    () => QParty
  );
  public readonly DiscoveryRecipientType = new QEntityPath(
    this.withPrefix("DiscoveryRecipientType"),
    () => QDiscoveryRecipientType
  );
  public readonly DiscoveryTarget = new QEntityPath(
    this.withPrefix("DiscoveryTarget"),
    () => QDiscoveryTarget
  );
  public readonly DiscoveryType = new QEntityPath(
    this.withPrefix("DiscoveryType"),
    () => QDiscoveryType
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly NonPartyRecipient = new QEntityPath(
    this.withPrefix("NonPartyRecipient"),
    () => QParty
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly DiscoveryLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DiscoveryLitigationAssns"),
    () => QDiscoveryLitigationAssn
  );
}

export const qDiscovery = new QDiscovery();

export class QDiscoveryId extends QId<DiscoveryId> {
  private readonly params = [new QNumberParam("DiscoveryId")];

  getParams() {
    return this.params;
  }
}
