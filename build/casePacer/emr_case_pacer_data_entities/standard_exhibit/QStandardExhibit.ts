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
import { QWitnessExhibitDocumentStandardExhibit } from "../witness_exhibit_document_standard_exhibit/QWitnessExhibitDocumentStandardExhibit";
import { StandardExhibitId } from "./StandardExhibit";

export class QStandardExhibit extends QueryObject {
  public readonly StandardExhibitId = new QNumberPath(
    this.withPrefix("StandardExhibitId")
  );
  public readonly FirmPartyId = new QNumberPath(this.withPrefix("FirmPartyId"));
  public readonly StandardExhibitName = new QStringPath(
    this.withPrefix("StandardExhibitName")
  );
  public readonly Sequence = new QNumberPath(this.withPrefix("Sequence"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly WitnessExhibitDocumentStandardExhibits =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentStandardExhibits"),
      () => QWitnessExhibitDocumentStandardExhibit
    );
}

export const qStandardExhibit = new QStandardExhibit();

export class QStandardExhibitId extends QId<StandardExhibitId> {
  private readonly params = [new QNumberParam("StandardExhibitId")];

  getParams() {
    return this.params;
  }
}
