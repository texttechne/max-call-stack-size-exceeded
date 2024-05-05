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
import { QTrial } from "../trial/QTrial";
import { QWitnessExhibitDocumentTrialExhibit } from "../witness_exhibit_document_trial_exhibit/QWitnessExhibitDocumentTrialExhibit";
import { TrialExhibitId } from "./TrialExhibit";

export class QTrialExhibit extends QueryObject {
  public readonly TrialExhibitId = new QNumberPath(
    this.withPrefix("TrialExhibitId")
  );
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly TrialId = new QNumberPath(this.withPrefix("TrialId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Trial = new QEntityPath(
    this.withPrefix("Trial"),
    () => QTrial
  );
  public readonly WitnessExhibitDocumentTrialExhibits =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentTrialExhibits"),
      () => QWitnessExhibitDocumentTrialExhibit
    );
}

export const qTrialExhibit = new QTrialExhibit();

export class QTrialExhibitId extends QId<TrialExhibitId> {
  private readonly params = [new QNumberParam("TrialExhibitId")];

  getParams() {
    return this.params;
  }
}
