import {
  QueryObject,
  QNumberPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLitigation } from "../litigation/QLitigation";
import { QWitness } from "../witness/QWitness";
import { WitnessLitigationAssnId } from "./WitnessLitigationAssn";

export class QWitnessLitigationAssn extends QueryObject {
  public readonly WitnessLitigationAssnId = new QNumberPath(
    this.withPrefix("WitnessLitigationAssnId")
  );
  public readonly WitnessLawsuitPartyId = new QNumberPath(
    this.withPrefix("WitnessLawsuitPartyId")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
  public readonly Witness = new QEntityPath(
    this.withPrefix("Witness"),
    () => QWitness
  );
}

export const qWitnessLitigationAssn = new QWitnessLitigationAssn();

export class QWitnessLitigationAssnId extends QId<WitnessLitigationAssnId> {
  private readonly params = [new QNumberParam("WitnessLitigationAssnId")];

  getParams() {
    return this.params;
  }
}
