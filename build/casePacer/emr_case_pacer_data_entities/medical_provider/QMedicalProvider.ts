import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QParty } from "../party/QParty";
import { QSettlementMedicalProvider } from "../settlement_medical_provider/QSettlementMedicalProvider";
import { QTreatment } from "../treatment/QTreatment";
import { QTreatmentNote } from "../treatment_note/QTreatmentNote";
import { MedicalProviderId } from "./MedicalProvider";

export class QMedicalProvider extends QueryObject {
  public readonly MedicalProviderId = new QNumberPath(
    this.withPrefix("MedicalProviderId")
  );
  public readonly MedicalProviderCompanyPartyId = new QNumberPath(
    this.withPrefix("MedicalProviderCompanyPartyId")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly MedicalInventorySentDate = new QDateTimeOffsetPath(
    this.withPrefix("MedicalInventorySentDate")
  );
  public readonly MedicalInventoryReceivedFlag = new QBooleanPath(
    this.withPrefix("MedicalInventoryReceivedFlag")
  );
  public readonly AccountNumber = new QStringPath(
    this.withPrefix("AccountNumber")
  );
  public readonly TreatmentCostFuture = new QNumberPath(
    this.withPrefix("TreatmentCostFuture")
  );
  public readonly NextAppointmentDate = new QDateTimeOffsetPath(
    this.withPrefix("NextAppointmentDate")
  );
  public readonly LastDateCalled = new QDateTimeOffsetPath(
    this.withPrefix("LastDateCalled")
  );
  public readonly ProtectLetterSentFlag = new QBooleanPath(
    this.withPrefix("ProtectLetterSentFlag")
  );
  public readonly BillsNeededFlag = new QBooleanPath(
    this.withPrefix("BillsNeededFlag")
  );
  public readonly BillsReceivedFlag = new QBooleanPath(
    this.withPrefix("BillsReceivedFlag")
  );
  public readonly BillsRequestDate1 = new QDateTimeOffsetPath(
    this.withPrefix("BillsRequestDate1")
  );
  public readonly BillsRequestDate2 = new QDateTimeOffsetPath(
    this.withPrefix("BillsRequestDate2")
  );
  public readonly MedicalRecordsNeededFlag = new QBooleanPath(
    this.withPrefix("MedicalRecordsNeededFlag")
  );
  public readonly MedicalRecordsReceivedFlag = new QBooleanPath(
    this.withPrefix("MedicalRecordsReceivedFlag")
  );
  public readonly MedicalRecordsRequestDate1 = new QDateTimeOffsetPath(
    this.withPrefix("MedicalRecordsRequestDate1")
  );
  public readonly MedicalRecordsRequestDate2 = new QDateTimeOffsetPath(
    this.withPrefix("MedicalRecordsRequestDate2")
  );
  public readonly NarrativeReportNeededFlag = new QBooleanPath(
    this.withPrefix("NarrativeReportNeededFlag")
  );
  public readonly NarrativeReportReceivedFlag = new QBooleanPath(
    this.withPrefix("NarrativeReportReceivedFlag")
  );
  public readonly NarrativeReportRequestDate1 = new QDateTimeOffsetPath(
    this.withPrefix("NarrativeReportRequestDate1")
  );
  public readonly NarrativeReportRequestDate2 = new QDateTimeOffsetPath(
    this.withPrefix("NarrativeReportRequestDate2")
  );
  public readonly EMRProviderId = new QNumberPath(
    this.withPrefix("EMRProviderId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly OutsourcedDate = new QDateTimeOffsetPath(
    this.withPrefix("OutsourcedDate")
  );
  public readonly InsideNotes = new QStringPath(this.withPrefix("InsideNotes"));
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Company = new QEntityPath(
    this.withPrefix("Company"),
    () => QParty
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly SettlementMedicalProviders = new QEntityCollectionPath(
    this.withPrefix("SettlementMedicalProviders"),
    () => QSettlementMedicalProvider
  );
  public readonly Treatments = new QEntityCollectionPath(
    this.withPrefix("Treatments"),
    () => QTreatment
  );
  public readonly TreatmentNotes = new QEntityCollectionPath(
    this.withPrefix("TreatmentNotes"),
    () => QTreatmentNote
  );
}

export const qMedicalProvider = new QMedicalProvider();

export class QMedicalProviderId extends QId<MedicalProviderId> {
  private readonly params = [new QNumberParam("MedicalProviderId")];

  getParams() {
    return this.params;
  }
}
