import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QInsuranceClaim } from "../insurance_claim/QInsuranceClaim";
import { QSettlement } from "../settlement/QSettlement";
import { SettlementItemId } from "./SettlementItem";

export class QSettlementItem extends QueryObject {
  public readonly SettlementItemId = new QNumberPath(
    this.withPrefix("SettlementItemId")
  );
  public readonly SettlementId = new QNumberPath(
    this.withPrefix("SettlementId")
  );
  public readonly ItemType = new QStringPath(this.withPrefix("ItemType"));
  public readonly Amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly Received = new QBooleanPath(this.withPrefix("Received"));
  public readonly Deposited = new QBooleanPath(this.withPrefix("Deposited"));
  public readonly Include = new QBooleanPath(this.withPrefix("Include"));
  public readonly ClaimId = new QNumberPath(this.withPrefix("ClaimId"));
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
  public readonly Settlement = new QEntityPath(
    this.withPrefix("Settlement"),
    () => QSettlement
  );
}

export const qSettlementItem = new QSettlementItem();

export class QSettlementItemId extends QId<SettlementItemId> {
  private readonly params = [new QNumberParam("SettlementItemId")];

  getParams() {
    return this.params;
  }
}
