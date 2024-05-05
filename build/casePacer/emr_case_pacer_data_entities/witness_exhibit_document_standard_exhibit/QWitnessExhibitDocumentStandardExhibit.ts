import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QStandardExhibit } from "../standard_exhibit/QStandardExhibit";
import { QWitnessExhibitDocument } from "../witness_exhibit_document/QWitnessExhibitDocument";
import { WitnessExhibitDocumentStandardExhibitId } from "./WitnessExhibitDocumentStandardExhibit";

export class QWitnessExhibitDocumentStandardExhibit extends QueryObject {
  public readonly WitnessExhibitDocumentStandardExhibitsId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentStandardExhibitsId")
  );
  public readonly WitnessExhibitDocumentId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentId")
  );
  public readonly StandardExhibitId = new QNumberPath(
    this.withPrefix("StandardExhibitId")
  );
  public readonly WitnessExhibitPartyType = new QStringPath(
    this.withPrefix("WitnessExhibitPartyType")
  );
  public readonly StandardExhibit = new QEntityPath(
    this.withPrefix("StandardExhibit"),
    () => QStandardExhibit
  );
  public readonly WitnessExhibitDocument = new QEntityPath(
    this.withPrefix("WitnessExhibitDocument"),
    () => QWitnessExhibitDocument
  );
}

export const qWitnessExhibitDocumentStandardExhibit =
  new QWitnessExhibitDocumentStandardExhibit();

export class QWitnessExhibitDocumentStandardExhibitId extends QId<WitnessExhibitDocumentStandardExhibitId> {
  private readonly params = [
    new QNumberParam("WitnessExhibitDocumentStandardExhibitsId"),
  ];

  getParams() {
    return this.params;
  }
}
