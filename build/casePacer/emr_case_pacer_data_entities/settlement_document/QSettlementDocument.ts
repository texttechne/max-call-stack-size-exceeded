import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QParty } from "../party/QParty";
import { SettlementDocumentId } from "./SettlementDocument";

export class QSettlementDocument extends QueryObject {
  public readonly SettlementDocumentId = new QNumberPath(
    this.withPrefix("SettlementDocumentId")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly AttyFeesPct = new QNumberPath(this.withPrefix("AttyFeesPct"));
  public readonly AttyFeesTotal = new QNumberPath(
    this.withPrefix("AttyFeesTotal")
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qSettlementDocument = new QSettlementDocument();

export class QSettlementDocumentId extends QId<SettlementDocumentId> {
  private readonly params = [new QNumberParam("SettlementDocumentId")];

  getParams() {
    return this.params;
  }
}
