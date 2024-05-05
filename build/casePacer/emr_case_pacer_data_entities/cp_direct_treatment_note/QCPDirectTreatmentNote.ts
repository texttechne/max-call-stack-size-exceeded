import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCPDirectMedicalProvider } from "../cp_direct_medical_provider/QCPDirectMedicalProvider";
import { CPDirectTreatmentNoteId } from "./CPDirectTreatmentNote";

export class QCPDirectTreatmentNote extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly CPDirectMedicalProviderId = new QNumberPath(
    this.withPrefix("CPDirectMedicalProviderId")
  );
  public readonly Note = new QStringPath(this.withPrefix("Note"));
  public readonly TreatmentDate = new QDateTimeOffsetPath(
    this.withPrefix("TreatmentDate")
  );
  public readonly CPDirectMedicalProvider = new QEntityPath(
    this.withPrefix("CPDirectMedicalProvider"),
    () => QCPDirectMedicalProvider
  );
}

export const qCPDirectTreatmentNote = new QCPDirectTreatmentNote();

export class QCPDirectTreatmentNoteId extends QId<CPDirectTreatmentNoteId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
