import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QDeposition } from "../deposition/QDeposition";
import { QLitigation } from "../litigation/QLitigation";
import { DepositionLitigationAssnId } from "./DepositionLitigationAssn";

export class QDepositionLitigationAssn extends QueryObject {
  public readonly DepositionLitigationAssnId = new QNumberPath(
    this.withPrefix("DepositionLitigationAssnId")
  );
  public readonly DepositionId = new QNumberPath(
    this.withPrefix("DepositionId")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly Deposition = new QEntityPath(
    this.withPrefix("Deposition"),
    () => QDeposition
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
}

export const qDepositionLitigationAssn = new QDepositionLitigationAssn();

export class QDepositionLitigationAssnId extends QId<DepositionLitigationAssnId> {
  private readonly params = [new QNumberParam("DepositionLitigationAssnId")];

  getParams() {
    return this.params;
  }
}
