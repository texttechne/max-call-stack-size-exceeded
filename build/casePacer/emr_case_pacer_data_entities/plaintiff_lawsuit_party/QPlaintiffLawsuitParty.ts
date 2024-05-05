import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { PlaintiffLawsuitPartyId } from "./PlaintiffLawsuitParty";

export class QPlaintiffLawsuitParty extends QueryObject {
  public readonly PlaintiffLawsuitPartyId = new QNumberPath(
    this.withPrefix("PlaintiffLawsuitPartyId")
  );
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly HipaaComplianceRcvd = new QDateTimeOffsetPath(
    this.withPrefix("HipaaComplianceRcvd")
  );
  public readonly MedicalInventorySentDate = new QDateTimeOffsetPath(
    this.withPrefix("MedicalInventorySentDate")
  );
  public readonly MedicalInventoryReceivedFlag = new QBooleanPath(
    this.withPrefix("MedicalInventoryReceivedFlag")
  );
  public readonly TreatmentReleaseDate = new QDateTimeOffsetPath(
    this.withPrefix("TreatmentReleaseDate")
  );
  public readonly Injury = new QStringPath(this.withPrefix("Injury"));
  public readonly ThankYouLtrSentDate = new QDateTimeOffsetPath(
    this.withPrefix("ThankYouLtrSentDate")
  );
  public readonly SettlementProcessSentDate = new QDateTimeOffsetPath(
    this.withPrefix("SettlementProcessSentDate")
  );
  public readonly LawsuitParty = new QEntityPath(
    this.withPrefix("LawsuitParty"),
    () => QLawsuitParty
  );
}

export const qPlaintiffLawsuitParty = new QPlaintiffLawsuitParty();

export class QPlaintiffLawsuitPartyId extends QId<PlaintiffLawsuitPartyId> {
  private readonly params = [new QNumberParam("PlaintiffLawsuitPartyId")];

  getParams() {
    return this.params;
  }
}
