import { CustomAttribute } from "../custom_attribute/CustomAttribute";
import { Firm } from "../firm/Firm";
import { LawsuitPhaseType } from "../lawsuit_phase_type/LawsuitPhaseType";
import { LawsuitType } from "../lawsuit_type/LawsuitType";
import { SubPhaseType } from "../sub_phase_type/SubPhaseType";
import { LawsuitCompanionGroup } from "../lawsuit_companion_group/LawsuitCompanionGroup";
import { ActivityLog } from "../activity_log/ActivityLog";
import { Alert } from "../alert/Alert";
import { Appointment } from "../appointment/Appointment";
import { CustomFieldValue } from "../custom_field_value/CustomFieldValue";
import { Deposition } from "../deposition/Deposition";
import { Discovery } from "../discovery/Discovery";
import { Document } from "../document/Document";
import { EconomicLoss } from "../economic_loss/EconomicLoss";
import { Email } from "../email/Email";
import { Evidence } from "../evidence/Evidence";
import { Expense } from "../expense/Expense";
import { Hearing } from "../hearing/Hearing";
import { InsurancePolicy } from "../insurance_policy/InsurancePolicy";
import { IntakeClientLawsuit } from "../intake_client_lawsuit/IntakeClientLawsuit";
import { Investigator } from "../investigator/Investigator";
import { LawsuitAbbr } from "../lawsuit_abbr/LawsuitAbbr";
import { LawsuitClientForm } from "../lawsuit_client_form/LawsuitClientForm";
import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { LawsuitPhaseDate } from "../lawsuit_phase_date/LawsuitPhaseDate";
import { LawsuitRecordRequest } from "../lawsuit_record_request/LawsuitRecordRequest";
import { LawsuitRole } from "../lawsuit_role/LawsuitRole";
import { LienSubrogation } from "../lien_subrogation/LienSubrogation";
import { Litigation } from "../litigation/Litigation";
import { MedicalEvaluation } from "../medical_evaluation/MedicalEvaluation";
import { MedicalProvider } from "../medical_provider/MedicalProvider";
import { Negotiation } from "../negotiation/Negotiation";
import { PoliceReport } from "../police_report/PoliceReport";
import { PropertyDamage } from "../property_damage/PropertyDamage";
import { Record } from "../record/Record";
import { RecordFolder } from "../record_folder/RecordFolder";
import { Settlement } from "../settlement/Settlement";
import { SMSThread } from "../sms_thread/SMSThread";
import { Tickler } from "../tickler/Tickler";
import { TwilioPhone } from "../twilio_phone/TwilioPhone";
import { WitnessExhibitDocument } from "../witness_exhibit_document/WitnessExhibitDocument";
import { IntakeClientLoginSummary } from "../intake_client_login_summary/IntakeClientLoginSummary";
import { CalendarEntry } from "../calendar_entry/CalendarEntry";
import { CalendarEntryRecur } from "../calendar_entry_recur/CalendarEntryRecur";
import { SimpleLawsuitSummary } from "../simple_lawsuit_summary/SimpleLawsuitSummary";

export interface Lawsuit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OpenDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  OpenDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   */
  Description: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SOLDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  SOLDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccidentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  AccidentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileNumber` |
   * | Type | `Edm.String` |
   */
  FileNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateCalled` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateCalled: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LeadSource` |
   * | Type | `Edm.String` |
   */
  LeadSource: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReferralSource` |
   * | Type | `Edm.String` |
   */
  ReferralSource: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StateOfAccident` |
   * | Type | `Edm.String` |
   */
  StateOfAccident: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDeleted` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsDeleted: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPhaseTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EvidenceLtr1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  EvidenceLtr1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EvidenceLtr2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  EvidenceLtr2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CountyOfAccident` |
   * | Type | `Edm.String` |
   */
  CountyOfAccident: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CityOfAccident` |
   * | Type | `Edm.String` |
   */
  CityOfAccident: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ImportedCaseFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ImportedCaseFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklersActiveFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  TicklersActiveFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBCustomerId` |
   * | Type | `Edm.String` |
   */
  QBCustomerId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  CreateDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MasterLawsuitId` |
   * | Type | `Edm.Int32` |
   */
  MasterLawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubPhaseTypeId` |
   * | Type | `Edm.Int32` |
   */
  SubPhaseTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitCompanionGroupId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitCompanionGroupId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContigentFee` |
   * | Type | `Edm.Decimal` |
   */
  ContigentFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllocationToCBF` |
   * | Type | `Edm.Decimal` |
   */
  AllocationToCBF: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillingStartDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  BillingStartDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillingStopDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  BillingStopDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomAttributes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CustomAttribute)` |
   */
  CustomAttributes?: Array<CustomAttribute>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MasterLawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  MasterLawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPhaseType` |
   */
  LawsuitPhaseType?: LawsuitPhaseType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubPhaseType` |
   * | Type | `Emr.CasePacer.Data.Entities.SubPhaseType` |
   */
  SubPhaseType?: SubPhaseType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitCompanionGroup` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitCompanionGroup` |
   */
  LawsuitCompanionGroup?: LawsuitCompanionGroup | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityLog)` |
   */
  ActivityLogs?: Array<ActivityLog>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Alerts` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Alert)` |
   */
  Alerts?: Array<Alert>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  Appointments?: Array<Appointment>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildLawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Lawsuit)` |
   */
  ChildLawsuits?: Array<Lawsuit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldValues` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CustomFieldValue)` |
   */
  CustomFieldValues?: Array<CustomFieldValue>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Depositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  Depositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discoveries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Discovery)` |
   */
  Discoveries?: Array<Discovery>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Documents` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Document)` |
   */
  Documents?: Array<Document>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EconomicLosses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.EconomicLoss)` |
   */
  EconomicLosses?: Array<EconomicLoss>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Emails` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Email)` |
   */
  Emails?: Array<Email>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Evidences` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Evidence)` |
   */
  Evidences?: Array<Evidence>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  Expenses?: Array<Expense>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hearings` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Hearing)` |
   */
  Hearings?: Array<Hearing>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePolicies` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsurancePolicy)` |
   */
  InsurancePolicies?: Array<InsurancePolicy>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientLawsuit)` |
   */
  IntakeClientLawsuits?: Array<IntakeClientLawsuit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Investigators` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Investigator)` |
   */
  Investigators?: Array<Investigator>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitAbbrs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitAbbr)` |
   */
  LawsuitAbbrs?: Array<LawsuitAbbr>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitClientForms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitClientForm)` |
   */
  LawsuitClientForms?: Array<LawsuitClientForm>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitParty)` |
   */
  LawsuitParties?: Array<LawsuitParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseDates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitPhaseDate)` |
   */
  LawsuitPhaseDates?: Array<LawsuitPhaseDate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitRecordRequests` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitRecordRequest)` |
   */
  LawsuitRecordRequests?: Array<LawsuitRecordRequest>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitRoles` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitRole)` |
   */
  LawsuitRoles?: Array<LawsuitRole>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MasterLawsuitTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitType)` |
   */
  MasterLawsuitTypes?: Array<LawsuitType>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubrogations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LienSubrogation)` |
   */
  LienSubrogations?: Array<LienSubrogation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Litigation)` |
   */
  Litigations?: Array<Litigation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalEvaluations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalEvaluation)` |
   */
  MedicalEvaluations?: Array<MedicalEvaluation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProviders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalProvider)` |
   */
  MedicalProviders?: Array<MedicalProvider>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Negotiations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Negotiation)` |
   */
  Negotiations?: Array<Negotiation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PoliceReports` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PoliceReport)` |
   */
  PoliceReports?: Array<PoliceReport>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  PropertyDamages?: Array<PropertyDamage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Records` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Record)` |
   */
  Records?: Array<Record>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFolders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordFolder)` |
   */
  RecordFolders?: Array<RecordFolder>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlements` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Settlement)` |
   */
  Settlements?: Array<Settlement>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSThreads` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSThread)` |
   */
  SMSThreads?: Array<SMSThread>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Ticklers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Tickler)` |
   */
  Ticklers?: Array<Tickler>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TwilioPhones` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TwilioPhone)` |
   */
  TwilioPhones?: Array<TwilioPhone>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocument)` |
   */
  WitnessExhibitDocuments?: Array<WitnessExhibitDocument>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLoginSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientLoginSummary)` |
   */
  IntakeClientLoginSummaries?: Array<IntakeClientLoginSummary>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarEntry)` |
   */
  CalendarEntries?: Array<CalendarEntry>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntryRecurs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarEntryRecur)` |
   */
  CalendarEntryRecurs?: Array<CalendarEntryRecur>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SimpleLawsuitSummary` |
   * | Type | `Emr.CasePacer.Data.Entities.SimpleLawsuitSummary` |
   */
  SimpleLawsuitSummary?: SimpleLawsuitSummary | null;
}

export type LawsuitId = number | { LawsuitId: number | null };

export interface EditableLawsuit
  extends Pick<
      Lawsuit,
      | "FirmId"
      | "LawsuitNumber"
      | "IsDeleted"
      | "ImportedCaseFlag"
      | "TicklersActiveFlag"
      | "CreateDate"
    >,
    Partial<
      Pick<
        Lawsuit,
        | "LawsuitTypeId"
        | "OpenDate"
        | "Description"
        | "SOLDate"
        | "AccidentDate"
        | "FileNumber"
        | "DateCalled"
        | "LeadSource"
        | "ReferralSource"
        | "StateOfAccident"
        | "LawsuitPhaseTypeId"
        | "EvidenceLtr1SentDate"
        | "EvidenceLtr2SentDate"
        | "CountyOfAccident"
        | "CityOfAccident"
        | "QBCustomerId"
        | "MasterLawsuitId"
        | "SubPhaseTypeId"
        | "LawsuitCompanionGroupId"
        | "ContigentFee"
        | "AllocationToCBF"
        | "BillingStartDate"
        | "BillingStopDate"
      >
    > {}
