import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QAddress } from "../address/QAddress";
import { QIntakeClientLawsuit } from "../intake_client_lawsuit/QIntakeClientLawsuit";
import { QCPDirectTreatmentNote } from "../cp_direct_treatment_note/QCPDirectTreatmentNote";
import { CPDirectMedicalProviderId } from "./CPDirectMedicalProvider";

export class QCPDirectMedicalProvider extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly IntakeClientLawsuitId = new QNumberPath(
    this.withPrefix("IntakeClientLawsuitId")
  );
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly AddressId = new QNumberPath(this.withPrefix("AddressId"));
  public readonly Address = new QEntityPath(
    this.withPrefix("Address"),
    () => QAddress
  );
  public readonly IntakeClientLawsuit = new QEntityPath(
    this.withPrefix("IntakeClientLawsuit"),
    () => QIntakeClientLawsuit
  );
  public readonly CPDirectTreatmentNotes = new QEntityCollectionPath(
    this.withPrefix("CPDirectTreatmentNotes"),
    () => QCPDirectTreatmentNote
  );
}

export const qCPDirectMedicalProvider = new QCPDirectMedicalProvider();

export class QCPDirectMedicalProviderId extends QId<CPDirectMedicalProviderId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}
