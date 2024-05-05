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
import { TreatmentId } from "./Treatment";

export class QTreatment extends QueryObject {
  public readonly TreatmentId = new QNumberPath(this.withPrefix("TreatmentId"));
  public readonly MedicalProviderId = new QNumberPath(
    this.withPrefix("MedicalProviderId")
  );
  public readonly TreatmentDate = new QDateTimeOffsetPath(
    this.withPrefix("TreatmentDate")
  );
  public readonly TreatmentAmount = new QNumberPath(
    this.withPrefix("TreatmentAmount")
  );
  public readonly TreatmentEndDate = new QDateTimeOffsetPath(
    this.withPrefix("TreatmentEndDate")
  );
  public readonly UnpaidAmount = new QNumberPath(
    this.withPrefix("UnpaidAmount")
  );
  public readonly ReductionAmount = new QNumberPath(
    this.withPrefix("ReductionAmount")
  );
  public readonly ClientPaymentAmount = new QNumberPath(
    this.withPrefix("ClientPaymentAmount")
  );
  public readonly HealthInsPaymentAmount = new QNumberPath(
    this.withPrefix("HealthInsPaymentAmount")
  );
  public readonly PipPaymentAmount = new QNumberPath(
    this.withPrefix("PipPaymentAmount")
  );
  public readonly MedicarePaymentAmount = new QNumberPath(
    this.withPrefix("MedicarePaymentAmount")
  );
  public readonly MedicaidPaymentAmount = new QNumberPath(
    this.withPrefix("MedicaidPaymentAmount")
  );
  public readonly Note = new QStringPath(this.withPrefix("Note"));
  public readonly MedicalProvider = new QEntityPath(
    this.withPrefix("MedicalProvider"),
    () => QMedicalProvider
  );
}

export const qTreatment = new QTreatment();

export class QTreatmentId extends QId<TreatmentId> {
  private readonly params = [new QNumberParam("TreatmentId")];

  getParams() {
    return this.params;
  }
}
