import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QParty } from "../party/QParty";
import { QExpense } from "../expense/QExpense";
import { QSettlementExpense } from "../settlement_expense/QSettlementExpense";
import { QSettlementItem } from "../settlement_item/QSettlementItem";
import { QSettlementLienSub } from "../settlement_lien_sub/QSettlementLienSub";
import { QSettlementMedicalProvider } from "../settlement_medical_provider/QSettlementMedicalProvider";
import { SettlementId } from "./Settlement";

export class QSettlement extends QueryObject {
  public readonly SettlementId = new QNumberPath(
    this.withPrefix("SettlementId")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly AttyFeesPct = new QNumberPath(this.withPrefix("AttyFeesPct"));
  public readonly AttyFeesTotal = new QNumberPath(
    this.withPrefix("AttyFeesTotal")
  );
  public readonly Amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly SettleDate = new QDateTimeOffsetPath(
    this.withPrefix("SettleDate")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly PlaintiffParty = new QEntityPath(
    this.withPrefix("PlaintiffParty"),
    () => QParty
  );
  public readonly Expenses = new QEntityCollectionPath(
    this.withPrefix("Expenses"),
    () => QExpense
  );
  public readonly SettlementExpenses = new QEntityCollectionPath(
    this.withPrefix("SettlementExpenses"),
    () => QSettlementExpense
  );
  public readonly SettlementItems = new QEntityCollectionPath(
    this.withPrefix("SettlementItems"),
    () => QSettlementItem
  );
  public readonly SettlementLienSubs = new QEntityCollectionPath(
    this.withPrefix("SettlementLienSubs"),
    () => QSettlementLienSub
  );
  public readonly SettlementMedicalProviders = new QEntityCollectionPath(
    this.withPrefix("SettlementMedicalProviders"),
    () => QSettlementMedicalProvider
  );
}

export const qSettlement = new QSettlement();

export class QSettlementId extends QId<SettlementId> {
  private readonly params = [new QNumberParam("SettlementId")];

  getParams() {
    return this.params;
  }
}
