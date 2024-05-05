import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QWitnessExhibitDocumentStandardWitness } from "../witness_exhibit_document_standard_witness/QWitnessExhibitDocumentStandardWitness";
import { StandardWitnessId } from "./StandardWitness";

export class QStandardWitness extends QueryObject {
  public readonly StandardWitnessId = new QNumberPath(
    this.withPrefix("StandardWitnessId")
  );
  public readonly FirmPartyId = new QNumberPath(this.withPrefix("FirmPartyId"));
  public readonly StandardWitnessName = new QStringPath(
    this.withPrefix("StandardWitnessName")
  );
  public readonly Sequence = new QNumberPath(this.withPrefix("Sequence"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly WitnessExhibitDocumentStandardWitnesses =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentStandardWitnesses"),
      () => QWitnessExhibitDocumentStandardWitness
    );
}

export const qStandardWitness = new QStandardWitness();

export class QStandardWitnessId extends QId<StandardWitnessId> {
  private readonly params = [new QNumberParam("StandardWitnessId")];

  getParams() {
    return this.params;
  }
}
