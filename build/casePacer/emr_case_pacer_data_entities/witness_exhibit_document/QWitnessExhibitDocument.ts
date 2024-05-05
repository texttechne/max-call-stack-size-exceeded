import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QWitnessExhibitDocumentParty } from "../witness_exhibit_document_party/QWitnessExhibitDocumentParty";
import { QWitnessExhibitDocumentStandardExhibit } from "../witness_exhibit_document_standard_exhibit/QWitnessExhibitDocumentStandardExhibit";
import { QWitnessExhibitDocumentStandardWitness } from "../witness_exhibit_document_standard_witness/QWitnessExhibitDocumentStandardWitness";
import { QWitnessExhibitDocumentTrialExhibit } from "../witness_exhibit_document_trial_exhibit/QWitnessExhibitDocumentTrialExhibit";
import { WitnessExhibitDocumentId } from "./WitnessExhibitDocument";

export class QWitnessExhibitDocument extends QueryObject {
  public readonly WitnessExhibitDocumentId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly IntroParagraph = new QStringPath(
    this.withPrefix("IntroParagraph")
  );
  public readonly PartiesSectionOrder = new QNumberPath(
    this.withPrefix("PartiesSectionOrder")
  );
  public readonly WitnessesSectionOrder = new QNumberPath(
    this.withPrefix("WitnessesSectionOrder")
  );
  public readonly ProvidersSectionOrder = new QNumberPath(
    this.withPrefix("ProvidersSectionOrder")
  );
  public readonly EmployersSectionOrder = new QNumberPath(
    this.withPrefix("EmployersSectionOrder")
  );
  public readonly OtherWitnessesSectionOrder = new QNumberPath(
    this.withPrefix("OtherWitnessesSectionOrder")
  );
  public readonly StandardWitnessesSectionOrder = new QNumberPath(
    this.withPrefix("StandardWitnessesSectionOrder")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly WitnessExhibitDocumentParties = new QEntityCollectionPath(
    this.withPrefix("WitnessExhibitDocumentParties"),
    () => QWitnessExhibitDocumentParty
  );
  public readonly WitnessExhibitDocumentStandardExhibits =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentStandardExhibits"),
      () => QWitnessExhibitDocumentStandardExhibit
    );
  public readonly WitnessExhibitDocumentStandardWitnesses =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentStandardWitnesses"),
      () => QWitnessExhibitDocumentStandardWitness
    );
  public readonly WitnessExhibitDocumentTrialExhibits =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentTrialExhibits"),
      () => QWitnessExhibitDocumentTrialExhibit
    );
}

export const qWitnessExhibitDocument = new QWitnessExhibitDocument();

export class QWitnessExhibitDocumentId extends QId<WitnessExhibitDocumentId> {
  private readonly params = [new QNumberParam("WitnessExhibitDocumentId")];

  getParams() {
    return this.params;
  }
}
