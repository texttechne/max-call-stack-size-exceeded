import {
  QueryObject,
  QNumberPath,
  QStringPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityCollectionPath,
  QEntityPath,
  QId,
  QNumberParam,
} from "@odata2ts/odata-query-objects";
import { QCustomAttribute } from "../custom_attribute/QCustomAttribute";
import { QFirm } from "../firm/QFirm";
import { QLawsuitPhaseType } from "../lawsuit_phase_type/QLawsuitPhaseType";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { QSubPhaseType } from "../sub_phase_type/QSubPhaseType";
import { QLawsuitCompanionGroup } from "../lawsuit_companion_group/QLawsuitCompanionGroup";
import { QActivityLog } from "../activity_log/QActivityLog";
import { QAlert } from "../alert/QAlert";
import { QAppointment } from "../appointment/QAppointment";
import { QCustomFieldValue } from "../custom_field_value/QCustomFieldValue";
import { QDeposition } from "../deposition/QDeposition";
import { QDiscovery } from "../discovery/QDiscovery";
import { QDocument } from "../document/QDocument";
import { QEconomicLoss } from "../economic_loss/QEconomicLoss";
import { QEmail } from "../email/QEmail";
import { QEvidence } from "../evidence/QEvidence";
import { QExpense } from "../expense/QExpense";
import { QHearing } from "../hearing/QHearing";
import { QInsurancePolicy } from "../insurance_policy/QInsurancePolicy";
import { QIntakeClientLawsuit } from "../intake_client_lawsuit/QIntakeClientLawsuit";
import { QInvestigator } from "../investigator/QInvestigator";
import { QLawsuitAbbr } from "../lawsuit_abbr/QLawsuitAbbr";
import { QLawsuitClientForm } from "../lawsuit_client_form/QLawsuitClientForm";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QLawsuitPhaseDate } from "../lawsuit_phase_date/QLawsuitPhaseDate";
import { QLawsuitRecordRequest } from "../lawsuit_record_request/QLawsuitRecordRequest";
import { QLawsuitRole } from "../lawsuit_role/QLawsuitRole";
import { QLienSubrogation } from "../lien_subrogation/QLienSubrogation";
import { QLitigation } from "../litigation/QLitigation";
import { QMedicalEvaluation } from "../medical_evaluation/QMedicalEvaluation";
import { QMedicalProvider } from "../medical_provider/QMedicalProvider";
import { QNegotiation } from "../negotiation/QNegotiation";
import { QPoliceReport } from "../police_report/QPoliceReport";
import { QPropertyDamage } from "../property_damage/QPropertyDamage";
import { QRecord } from "../record/QRecord";
import { QRecordFolder } from "../record_folder/QRecordFolder";
import { QSettlement } from "../settlement/QSettlement";
import { QSMSThread } from "../sms_thread/QSMSThread";
import { QTickler } from "../tickler/QTickler";
import { QTwilioPhone } from "../twilio_phone/QTwilioPhone";
import { QWitnessExhibitDocument } from "../witness_exhibit_document/QWitnessExhibitDocument";
import { QIntakeClientLoginSummary } from "../intake_client_login_summary/QIntakeClientLoginSummary";
import { QCalendarEntry } from "../calendar_entry/QCalendarEntry";
import { QCalendarEntryRecur } from "../calendar_entry_recur/QCalendarEntryRecur";
import { QSimpleLawsuitSummary } from "../simple_lawsuit_summary/QSimpleLawsuitSummary";
import { LawsuitId } from "./Lawsuit";

export class QLawsuit extends QueryObject {
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly LawsuitNumber = new QStringPath(
    this.withPrefix("LawsuitNumber")
  );
  public readonly OpenDate = new QDateTimeOffsetPath(
    this.withPrefix("OpenDate")
  );
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly SOLDate = new QDateTimeOffsetPath(this.withPrefix("SOLDate"));
  public readonly AccidentDate = new QDateTimeOffsetPath(
    this.withPrefix("AccidentDate")
  );
  public readonly FileNumber = new QStringPath(this.withPrefix("FileNumber"));
  public readonly DateCalled = new QDateTimeOffsetPath(
    this.withPrefix("DateCalled")
  );
  public readonly LeadSource = new QStringPath(this.withPrefix("LeadSource"));
  public readonly ReferralSource = new QStringPath(
    this.withPrefix("ReferralSource")
  );
  public readonly StateOfAccident = new QStringPath(
    this.withPrefix("StateOfAccident")
  );
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly LawsuitPhaseTypeId = new QNumberPath(
    this.withPrefix("LawsuitPhaseTypeId")
  );
  public readonly EvidenceLtr1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("EvidenceLtr1SentDate")
  );
  public readonly EvidenceLtr2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("EvidenceLtr2SentDate")
  );
  public readonly CountyOfAccident = new QStringPath(
    this.withPrefix("CountyOfAccident")
  );
  public readonly CityOfAccident = new QStringPath(
    this.withPrefix("CityOfAccident")
  );
  public readonly ImportedCaseFlag = new QBooleanPath(
    this.withPrefix("ImportedCaseFlag")
  );
  public readonly TicklersActiveFlag = new QBooleanPath(
    this.withPrefix("TicklersActiveFlag")
  );
  public readonly QBCustomerId = new QStringPath(
    this.withPrefix("QBCustomerId")
  );
  public readonly CreateDate = new QDateTimeOffsetPath(
    this.withPrefix("CreateDate")
  );
  public readonly MasterLawsuitId = new QNumberPath(
    this.withPrefix("MasterLawsuitId")
  );
  public readonly SubPhaseTypeId = new QNumberPath(
    this.withPrefix("SubPhaseTypeId")
  );
  public readonly LawsuitCompanionGroupId = new QNumberPath(
    this.withPrefix("LawsuitCompanionGroupId")
  );
  public readonly ContigentFee = new QNumberPath(
    this.withPrefix("ContigentFee")
  );
  public readonly AllocationToCBF = new QNumberPath(
    this.withPrefix("AllocationToCBF")
  );
  public readonly BillingStartDate = new QDateTimeOffsetPath(
    this.withPrefix("BillingStartDate")
  );
  public readonly BillingStopDate = new QDateTimeOffsetPath(
    this.withPrefix("BillingStopDate")
  );
  public readonly CustomAttributes = new QEntityCollectionPath(
    this.withPrefix("CustomAttributes"),
    () => QCustomAttribute
  );
  public readonly MasterLawsuit = new QEntityPath(
    this.withPrefix("MasterLawsuit"),
    () => QLawsuit
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly LawsuitPhaseType = new QEntityPath(
    this.withPrefix("LawsuitPhaseType"),
    () => QLawsuitPhaseType
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly SubPhaseType = new QEntityPath(
    this.withPrefix("SubPhaseType"),
    () => QSubPhaseType
  );
  public readonly LawsuitCompanionGroup = new QEntityPath(
    this.withPrefix("LawsuitCompanionGroup"),
    () => QLawsuitCompanionGroup
  );
  public readonly ActivityLogs = new QEntityCollectionPath(
    this.withPrefix("ActivityLogs"),
    () => QActivityLog
  );
  public readonly Alerts = new QEntityCollectionPath(
    this.withPrefix("Alerts"),
    () => QAlert
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly ChildLawsuits = new QEntityCollectionPath(
    this.withPrefix("ChildLawsuits"),
    () => QLawsuit
  );
  public readonly CustomFieldValues = new QEntityCollectionPath(
    this.withPrefix("CustomFieldValues"),
    () => QCustomFieldValue
  );
  public readonly Depositions = new QEntityCollectionPath(
    this.withPrefix("Depositions"),
    () => QDeposition
  );
  public readonly Discoveries = new QEntityCollectionPath(
    this.withPrefix("Discoveries"),
    () => QDiscovery
  );
  public readonly Documents = new QEntityCollectionPath(
    this.withPrefix("Documents"),
    () => QDocument
  );
  public readonly EconomicLosses = new QEntityCollectionPath(
    this.withPrefix("EconomicLosses"),
    () => QEconomicLoss
  );
  public readonly Emails = new QEntityCollectionPath(
    this.withPrefix("Emails"),
    () => QEmail
  );
  public readonly Evidences = new QEntityCollectionPath(
    this.withPrefix("Evidences"),
    () => QEvidence
  );
  public readonly Expenses = new QEntityCollectionPath(
    this.withPrefix("Expenses"),
    () => QExpense
  );
  public readonly Hearings = new QEntityCollectionPath(
    this.withPrefix("Hearings"),
    () => QHearing
  );
  public readonly InsurancePolicies = new QEntityCollectionPath(
    this.withPrefix("InsurancePolicies"),
    () => QInsurancePolicy
  );
  public readonly IntakeClientLawsuits = new QEntityCollectionPath(
    this.withPrefix("IntakeClientLawsuits"),
    () => QIntakeClientLawsuit
  );
  public readonly Investigators = new QEntityCollectionPath(
    this.withPrefix("Investigators"),
    () => QInvestigator
  );
  public readonly LawsuitAbbrs = new QEntityCollectionPath(
    this.withPrefix("LawsuitAbbrs"),
    () => QLawsuitAbbr
  );
  public readonly LawsuitClientForms = new QEntityCollectionPath(
    this.withPrefix("LawsuitClientForms"),
    () => QLawsuitClientForm
  );
  public readonly LawsuitParties = new QEntityCollectionPath(
    this.withPrefix("LawsuitParties"),
    () => QLawsuitParty
  );
  public readonly LawsuitPhaseDates = new QEntityCollectionPath(
    this.withPrefix("LawsuitPhaseDates"),
    () => QLawsuitPhaseDate
  );
  public readonly LawsuitRecordRequests = new QEntityCollectionPath(
    this.withPrefix("LawsuitRecordRequests"),
    () => QLawsuitRecordRequest
  );
  public readonly LawsuitRoles = new QEntityCollectionPath(
    this.withPrefix("LawsuitRoles"),
    () => QLawsuitRole
  );
  public readonly MasterLawsuitTypes = new QEntityCollectionPath(
    this.withPrefix("MasterLawsuitTypes"),
    () => QLawsuitType
  );
  public readonly LienSubrogations = new QEntityCollectionPath(
    this.withPrefix("LienSubrogations"),
    () => QLienSubrogation
  );
  public readonly Litigations = new QEntityCollectionPath(
    this.withPrefix("Litigations"),
    () => QLitigation
  );
  public readonly MedicalEvaluations = new QEntityCollectionPath(
    this.withPrefix("MedicalEvaluations"),
    () => QMedicalEvaluation
  );
  public readonly MedicalProviders = new QEntityCollectionPath(
    this.withPrefix("MedicalProviders"),
    () => QMedicalProvider
  );
  public readonly Negotiations = new QEntityCollectionPath(
    this.withPrefix("Negotiations"),
    () => QNegotiation
  );
  public readonly PoliceReports = new QEntityCollectionPath(
    this.withPrefix("PoliceReports"),
    () => QPoliceReport
  );
  public readonly PropertyDamages = new QEntityCollectionPath(
    this.withPrefix("PropertyDamages"),
    () => QPropertyDamage
  );
  public readonly Records = new QEntityCollectionPath(
    this.withPrefix("Records"),
    () => QRecord
  );
  public readonly RecordFolders = new QEntityCollectionPath(
    this.withPrefix("RecordFolders"),
    () => QRecordFolder
  );
  public readonly Settlements = new QEntityCollectionPath(
    this.withPrefix("Settlements"),
    () => QSettlement
  );
  public readonly SMSThreads = new QEntityCollectionPath(
    this.withPrefix("SMSThreads"),
    () => QSMSThread
  );
  public readonly Ticklers = new QEntityCollectionPath(
    this.withPrefix("Ticklers"),
    () => QTickler
  );
  public readonly TwilioPhones = new QEntityCollectionPath(
    this.withPrefix("TwilioPhones"),
    () => QTwilioPhone
  );
  public readonly WitnessExhibitDocuments = new QEntityCollectionPath(
    this.withPrefix("WitnessExhibitDocuments"),
    () => QWitnessExhibitDocument
  );
  public readonly IntakeClientLoginSummaries = new QEntityCollectionPath(
    this.withPrefix("IntakeClientLoginSummaries"),
    () => QIntakeClientLoginSummary
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
  public readonly SimpleLawsuitSummary = new QEntityPath(
    this.withPrefix("SimpleLawsuitSummary"),
    () => QSimpleLawsuitSummary
  );
}

export const qLawsuit = new QLawsuit();

export class QLawsuitId extends QId<LawsuitId> {
  private readonly params = [new QNumberParam("LawsuitId")];

  getParams() {
    return this.params;
  }
}
