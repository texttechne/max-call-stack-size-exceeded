import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QStandardWitness } from "../standard_witness/QStandardWitness";
import { QWitnessExhibitDocument } from "../witness_exhibit_document/QWitnessExhibitDocument";
import { WitnessExhibitDocumentStandardWitnessId } from "./WitnessExhibitDocumentStandardWitness";

export class QWitnessExhibitDocumentStandardWitness extends QueryObject {
  public readonly WitnessExhibitDocumentStandardWitnessesId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentStandardWitnessesId")
  );
  public readonly WitnessExhibitDocumentId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentId")
  );
  public readonly StandardWitnessId = new QNumberPath(
    this.withPrefix("StandardWitnessId")
  );
  public readonly WitnessExhibitPartyType = new QStringPath(
    this.withPrefix("WitnessExhibitPartyType")
  );
  public readonly StandardWitness = new QEntityPath(
    this.withPrefix("StandardWitness"),
    () => QStandardWitness
  );
  public readonly WitnessExhibitDocument = new QEntityPath(
    this.withPrefix("WitnessExhibitDocument"),
    () => QWitnessExhibitDocument
  );
}

export const qWitnessExhibitDocumentStandardWitness =
  new QWitnessExhibitDocumentStandardWitness();

export class QWitnessExhibitDocumentStandardWitnessId extends QId<WitnessExhibitDocumentStandardWitnessId> {
  private readonly params = [
    new QNumberParam("WitnessExhibitDocumentStandardWitnessesId"),
  ];

  getParams() {
    return this.params;
  }
}
