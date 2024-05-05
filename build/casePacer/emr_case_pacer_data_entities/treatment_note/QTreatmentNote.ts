import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QMedicalProvider } from "../medical_provider/QMedicalProvider";
import { TreatmentNoteId } from "./TreatmentNote";

export class QTreatmentNote extends QueryObject {
  public readonly TreatmentNotesId = new QNumberPath(
    this.withPrefix("TreatmentNotesId")
  );
  public readonly MedicalProviderId = new QNumberPath(
    this.withPrefix("MedicalProviderId")
  );
  public readonly NoteDate = new QDateTimeOffsetPath(
    this.withPrefix("NoteDate")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly MedicalProvider = new QEntityPath(
    this.withPrefix("MedicalProvider"),
    () => QMedicalProvider
  );
}

export const qTreatmentNote = new QTreatmentNote();

export class QTreatmentNoteId extends QId<TreatmentNoteId> {
  private readonly params = [new QNumberParam("TreatmentNotesId")];

  getParams() {
    return this.params;
  }
}
