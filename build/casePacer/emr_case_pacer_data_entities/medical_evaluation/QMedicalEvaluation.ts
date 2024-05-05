import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { MedicalEvaluationId } from "./MedicalEvaluation";

export class QMedicalEvaluation extends QueryObject {
  public readonly MedicalEvaluationId = new QNumberPath(
    this.withPrefix("MedicalEvaluationId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly StatusId = new QNumberPath(this.withPrefix("StatusId"));
  public readonly SpecialtyId = new QNumberPath(this.withPrefix("SpecialtyId"));
  public readonly AppointmentDate = new QDateTimeOffsetPath(
    this.withPrefix("AppointmentDate")
  );
  public readonly AppointmentTime = new QStringPath(
    this.withPrefix("AppointmentTime")
  );
  public readonly TransportationNeeded = new QBooleanPath(
    this.withPrefix("TransportationNeeded")
  );
  public readonly PrepDone = new QBooleanPath(this.withPrefix("PrepDone"));
  public readonly PreMENotes = new QStringPath(this.withPrefix("PreMENotes"));
  public readonly ReportReceived = new QBooleanPath(
    this.withPrefix("ReportReceived")
  );
  public readonly CutoffId = new QNumberPath(this.withPrefix("CutoffId"));
  public readonly CutoffDate = new QDateTimeOffsetPath(
    this.withPrefix("CutoffDate")
  );
  public readonly CutoffNotes = new QStringPath(this.withPrefix("CutoffNotes"));
  public readonly RequestorLawsuitPartyId = new QNumberPath(
    this.withPrefix("RequestorLawsuitPartyId")
  );
  public readonly DoctorLawsuitPartyId = new QNumberPath(
    this.withPrefix("DoctorLawsuitPartyId")
  );
  public readonly PrepByLawsuitPartyId = new QNumberPath(
    this.withPrefix("PrepByLawsuitPartyId")
  );
  public readonly DoctorLawsuitParty = new QEntityPath(
    this.withPrefix("DoctorLawsuitParty"),
    () => QLawsuitParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly PrepByLawsuitParty = new QEntityPath(
    this.withPrefix("PrepByLawsuitParty"),
    () => QLawsuitParty
  );
  public readonly RequestorLawsuitParty = new QEntityPath(
    this.withPrefix("RequestorLawsuitParty"),
    () => QLawsuitParty
  );
}

export const qMedicalEvaluation = new QMedicalEvaluation();

export class QMedicalEvaluationId extends QId<MedicalEvaluationId> {
  private readonly params = [new QNumberParam("MedicalEvaluationId")];

  getParams() {
    return this.params;
  }
}
