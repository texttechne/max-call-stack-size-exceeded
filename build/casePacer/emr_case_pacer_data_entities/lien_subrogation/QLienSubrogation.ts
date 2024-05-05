import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QLienSubrogationPaymentType } from "../lien_subrogation_payment_type/QLienSubrogationPaymentType";
import { QParty } from "../party/QParty";
import { QSettlementLienSub } from "../settlement_lien_sub/QSettlementLienSub";
import { LienSubrogationId } from "./LienSubrogation";

export class QLienSubrogation extends QueryObject {
  public readonly LienSubrogationId = new QNumberPath(
    this.withPrefix("LienSubrogationId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly SubrogeeLienHolderPartyId = new QNumberPath(
    this.withPrefix("SubrogeeLienHolderPartyId")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly PaymentTypeId = new QNumberPath(
    this.withPrefix("PaymentTypeId")
  );
  public readonly Type = new QStringPath(this.withPrefix("Type"));
  public readonly NoticeReceivedFlag = new QBooleanPath(
    this.withPrefix("NoticeReceivedFlag")
  );
  public readonly AttorneyFeeLetterSentFlag = new QBooleanPath(
    this.withPrefix("AttorneyFeeLetterSentFlag")
  );
  public readonly ItemizedStatementRequiredFlag = new QBooleanPath(
    this.withPrefix("ItemizedStatementRequiredFlag")
  );
  public readonly ItemizedStatementReceivedFlag = new QBooleanPath(
    this.withPrefix("ItemizedStatementReceivedFlag")
  );
  public readonly PaymentAmountConfirmationFlag = new QBooleanPath(
    this.withPrefix("PaymentAmountConfirmationFlag")
  );
  public readonly PaymentAmountReceivedFlag = new QBooleanPath(
    this.withPrefix("PaymentAmountReceivedFlag")
  );
  public readonly ClaimNumber = new QStringPath(this.withPrefix("ClaimNumber"));
  public readonly ClaimAmount = new QNumberPath(this.withPrefix("ClaimAmount"));
  public readonly PaymentAmount = new QNumberPath(
    this.withPrefix("PaymentAmount")
  );
  public readonly LienSubrogationNotes = new QStringPath(
    this.withPrefix("LienSubrogationNotes")
  );
  public readonly SubrogeeLienHolderOtherName = new QStringPath(
    this.withPrefix("SubrogeeLienHolderOtherName")
  );
  public readonly PlanName = new QStringPath(this.withPrefix("PlanName"));
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly PaymentType = new QEntityPath(
    this.withPrefix("PaymentType"),
    () => QLienSubrogationPaymentType
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly SubrogeeLienHolder = new QEntityPath(
    this.withPrefix("SubrogeeLienHolder"),
    () => QParty
  );
  public readonly SettlementLienSubs = new QEntityCollectionPath(
    this.withPrefix("SettlementLienSubs"),
    () => QSettlementLienSub
  );
}

export const qLienSubrogation = new QLienSubrogation();

export class QLienSubrogationId extends QId<LienSubrogationId> {
  private readonly params = [new QNumberParam("LienSubrogationId")];

  getParams() {
    return this.params;
  }
}
