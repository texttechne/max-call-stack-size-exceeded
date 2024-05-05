import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QParty } from "../party/QParty";
import { QWitnessExhibitDocument } from "../witness_exhibit_document/QWitnessExhibitDocument";
import { WitnessExhibitDocumentPartyId } from "./WitnessExhibitDocumentParty";

export class QWitnessExhibitDocumentParty extends QueryObject {
  public readonly WitnessExhibitDocumentPartiesId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentPartiesId")
  );
  public readonly WitnessExhibitDocumentId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentId")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly WitnessExhibitPartyType = new QStringPath(
    this.withPrefix("WitnessExhibitPartyType")
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
  public readonly WitnessExhibitDocument = new QEntityPath(
    this.withPrefix("WitnessExhibitDocument"),
    () => QWitnessExhibitDocument
  );
}

export const qWitnessExhibitDocumentParty = new QWitnessExhibitDocumentParty();

export class QWitnessExhibitDocumentPartyId extends QId<WitnessExhibitDocumentPartyId> {
  private readonly params = [
    new QNumberParam("WitnessExhibitDocumentPartiesId"),
  ];

  getParams() {
    return this.params;
  }
}
