import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { EvidenceId } from "./Evidence";

export class QEvidence extends QueryObject {
  public readonly EvidenceID = new QNumberPath(this.withPrefix("EvidenceID"));
  public readonly LawsuitID = new QNumberPath(this.withPrefix("LawsuitID"));
  public readonly Item = new QStringPath(this.withPrefix("Item"));
  public readonly ItemReceived = new QBooleanPath(
    this.withPrefix("ItemReceived")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qEvidence = new QEvidence();

export class QEvidenceId extends QId<EvidenceId> {
  private readonly params = [new QNumberParam("EvidenceID")];

  getParams() {
    return this.params;
  }
}
