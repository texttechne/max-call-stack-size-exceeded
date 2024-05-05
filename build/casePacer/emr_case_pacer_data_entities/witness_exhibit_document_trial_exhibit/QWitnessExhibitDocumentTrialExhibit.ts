import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QTrialExhibit } from "../trial_exhibit/QTrialExhibit";
import { QWitnessExhibitDocument } from "../witness_exhibit_document/QWitnessExhibitDocument";
import { WitnessExhibitDocumentTrialExhibitId } from "./WitnessExhibitDocumentTrialExhibit";

export class QWitnessExhibitDocumentTrialExhibit extends QueryObject {
  public readonly WitnessExhibitDocumentTrialExhibitsId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentTrialExhibitsId")
  );
  public readonly WitnessExhibitDocumentId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentId")
  );
  public readonly TrialExhibitId = new QNumberPath(
    this.withPrefix("TrialExhibitId")
  );
  public readonly WitnessExhibitPartyType = new QStringPath(
    this.withPrefix("WitnessExhibitPartyType")
  );
  public readonly TrialExhibit = new QEntityPath(
    this.withPrefix("TrialExhibit"),
    () => QTrialExhibit
  );
  public readonly WitnessExhibitDocument = new QEntityPath(
    this.withPrefix("WitnessExhibitDocument"),
    () => QWitnessExhibitDocument
  );
}

export const qWitnessExhibitDocumentTrialExhibit =
  new QWitnessExhibitDocumentTrialExhibit();

export class QWitnessExhibitDocumentTrialExhibitId extends QId<WitnessExhibitDocumentTrialExhibitId> {
  private readonly params = [
    new QNumberParam("WitnessExhibitDocumentTrialExhibitsId"),
  ];

  getParams() {
    return this.params;
  }
}
