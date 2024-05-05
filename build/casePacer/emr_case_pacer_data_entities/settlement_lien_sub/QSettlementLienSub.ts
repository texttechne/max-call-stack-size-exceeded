import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLienSubrogation } from "../lien_subrogation/QLienSubrogation";
import { QSettlement } from "../settlement/QSettlement";
import { SettlementLienSubId } from "./SettlementLienSub";

export class QSettlementLienSub extends QueryObject {
  public readonly SettlementLienSubId = new QNumberPath(
    this.withPrefix("SettlementLienSubId")
  );
  public readonly SettlementId = new QNumberPath(
    this.withPrefix("SettlementId")
  );
  public readonly LienSubrogationId = new QNumberPath(
    this.withPrefix("LienSubrogationId")
  );
  public readonly LienSubType = new QStringPath(this.withPrefix("LienSubType"));
  public readonly CheckNumber = new QNumberPath(this.withPrefix("CheckNumber"));
  public readonly ClaimAmount = new QNumberPath(this.withPrefix("ClaimAmount"));
  public readonly PaymentAmount = new QNumberPath(
    this.withPrefix("PaymentAmount")
  );
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
  public readonly Include = new QBooleanPath(this.withPrefix("Include"));
  public readonly LienSubrogation = new QEntityPath(
    this.withPrefix("LienSubrogation"),
    () => QLienSubrogation
  );
  public readonly Settlement = new QEntityPath(
    this.withPrefix("Settlement"),
    () => QSettlement
  );
}

export const qSettlementLienSub = new QSettlementLienSub();

export class QSettlementLienSubId extends QId<SettlementLienSubId> {
  private readonly params = [new QNumberParam("SettlementLienSubId")];

  getParams() {
    return this.params;
  }
}
