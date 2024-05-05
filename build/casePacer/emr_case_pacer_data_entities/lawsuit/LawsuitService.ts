import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Lawsuit, EditableLawsuit, LawsuitId } from "./Lawsuit";
import { QLawsuit, qLawsuit, QLawsuitId } from "./QLawsuit";
import { CustomAttributeId } from "../custom_attribute/CustomAttribute";
import { QCustomAttributeId } from "../custom_attribute/QCustomAttribute";
import {
  CustomAttributeService,
  CustomAttributeCollectionService,
} from "../custom_attribute/CustomAttributeService";
import { FirmService } from "../firm/FirmService";
import { LawsuitPhaseTypeService } from "../lawsuit_phase_type/LawsuitPhaseTypeService";
import {
  LawsuitTypeService,
  LawsuitTypeCollectionService,
} from "../lawsuit_type/LawsuitTypeService";
import { SubPhaseTypeService } from "../sub_phase_type/SubPhaseTypeService";
import { LawsuitCompanionGroupService } from "../lawsuit_companion_group/LawsuitCompanionGroupService";
import { ActivityLogId } from "../activity_log/ActivityLog";
import { QActivityLogId } from "../activity_log/QActivityLog";
import {
  ActivityLogService,
  ActivityLogCollectionService,
} from "../activity_log/ActivityLogService";
import { AlertId } from "../alert/Alert";
import { QAlertId } from "../alert/QAlert";
import { AlertService, AlertCollectionService } from "../alert/AlertService";
import { AppointmentId } from "../appointment/Appointment";
import { QAppointmentId } from "../appointment/QAppointment";
import {
  AppointmentService,
  AppointmentCollectionService,
} from "../appointment/AppointmentService";
import { CustomFieldValueId } from "../custom_field_value/CustomFieldValue";
import { QCustomFieldValueId } from "../custom_field_value/QCustomFieldValue";
import {
  CustomFieldValueService,
  CustomFieldValueCollectionService,
} from "../custom_field_value/CustomFieldValueService";
import { DepositionId } from "../deposition/Deposition";
import { QDepositionId } from "../deposition/QDeposition";
import {
  DepositionService,
  DepositionCollectionService,
} from "../deposition/DepositionService";
import { DiscoveryId } from "../discovery/Discovery";
import { QDiscoveryId } from "../discovery/QDiscovery";
import {
  DiscoveryService,
  DiscoveryCollectionService,
} from "../discovery/DiscoveryService";
import { DocumentId } from "../document/Document";
import { QDocumentId } from "../document/QDocument";
import {
  DocumentService,
  DocumentCollectionService,
} from "../document/DocumentService";
import { EconomicLossId } from "../economic_loss/EconomicLoss";
import { QEconomicLossId } from "../economic_loss/QEconomicLoss";
import {
  EconomicLossService,
  EconomicLossCollectionService,
} from "../economic_loss/EconomicLossService";
import { EmailId } from "../email/Email";
import { QEmailId } from "../email/QEmail";
import { EmailService, EmailCollectionService } from "../email/EmailService";
import { EvidenceId } from "../evidence/Evidence";
import { QEvidenceId } from "../evidence/QEvidence";
import {
  EvidenceService,
  EvidenceCollectionService,
} from "../evidence/EvidenceService";
import { ExpenseId } from "../expense/Expense";
import { QExpenseId } from "../expense/QExpense";
import {
  ExpenseService,
  ExpenseCollectionService,
} from "../expense/ExpenseService";
import { HearingId } from "../hearing/Hearing";
import { QHearingId } from "../hearing/QHearing";
import {
  HearingService,
  HearingCollectionService,
} from "../hearing/HearingService";
import { InsurancePolicyId } from "../insurance_policy/InsurancePolicy";
import { QInsurancePolicyId } from "../insurance_policy/QInsurancePolicy";
import {
  InsurancePolicyService,
  InsurancePolicyCollectionService,
} from "../insurance_policy/InsurancePolicyService";
import { IntakeClientLawsuitId } from "../intake_client_lawsuit/IntakeClientLawsuit";
import { QIntakeClientLawsuitId } from "../intake_client_lawsuit/QIntakeClientLawsuit";
import {
  IntakeClientLawsuitService,
  IntakeClientLawsuitCollectionService,
} from "../intake_client_lawsuit/IntakeClientLawsuitService";
import { InvestigatorId } from "../investigator/Investigator";
import { QInvestigatorId } from "../investigator/QInvestigator";
import {
  InvestigatorService,
  InvestigatorCollectionService,
} from "../investigator/InvestigatorService";
import { LawsuitAbbrId } from "../lawsuit_abbr/LawsuitAbbr";
import { QLawsuitAbbrId } from "../lawsuit_abbr/QLawsuitAbbr";
import {
  LawsuitAbbrService,
  LawsuitAbbrCollectionService,
} from "../lawsuit_abbr/LawsuitAbbrService";
import { LawsuitClientFormId } from "../lawsuit_client_form/LawsuitClientForm";
import { QLawsuitClientFormId } from "../lawsuit_client_form/QLawsuitClientForm";
import {
  LawsuitClientFormService,
  LawsuitClientFormCollectionService,
} from "../lawsuit_client_form/LawsuitClientFormService";
import { LawsuitPartyId } from "../lawsuit_party/LawsuitParty";
import { QLawsuitPartyId } from "../lawsuit_party/QLawsuitParty";
import {
  LawsuitPartyService,
  LawsuitPartyCollectionService,
} from "../lawsuit_party/LawsuitPartyService";
import { LawsuitPhaseDateId } from "../lawsuit_phase_date/LawsuitPhaseDate";
import { QLawsuitPhaseDateId } from "../lawsuit_phase_date/QLawsuitPhaseDate";
import {
  LawsuitPhaseDateService,
  LawsuitPhaseDateCollectionService,
} from "../lawsuit_phase_date/LawsuitPhaseDateService";
import { LawsuitRecordRequestId } from "../lawsuit_record_request/LawsuitRecordRequest";
import { QLawsuitRecordRequestId } from "../lawsuit_record_request/QLawsuitRecordRequest";
import {
  LawsuitRecordRequestService,
  LawsuitRecordRequestCollectionService,
} from "../lawsuit_record_request/LawsuitRecordRequestService";
import { LawsuitRoleId } from "../lawsuit_role/LawsuitRole";
import { QLawsuitRoleId } from "../lawsuit_role/QLawsuitRole";
import {
  LawsuitRoleService,
  LawsuitRoleCollectionService,
} from "../lawsuit_role/LawsuitRoleService";
import { LawsuitTypeId } from "../lawsuit_type/LawsuitType";
import { QLawsuitTypeId } from "../lawsuit_type/QLawsuitType";
import { LienSubrogationId } from "../lien_subrogation/LienSubrogation";
import { QLienSubrogationId } from "../lien_subrogation/QLienSubrogation";
import {
  LienSubrogationService,
  LienSubrogationCollectionService,
} from "../lien_subrogation/LienSubrogationService";
import { LitigationId } from "../litigation/Litigation";
import { QLitigationId } from "../litigation/QLitigation";
import {
  LitigationService,
  LitigationCollectionService,
} from "../litigation/LitigationService";
import { MedicalEvaluationId } from "../medical_evaluation/MedicalEvaluation";
import { QMedicalEvaluationId } from "../medical_evaluation/QMedicalEvaluation";
import {
  MedicalEvaluationService,
  MedicalEvaluationCollectionService,
} from "../medical_evaluation/MedicalEvaluationService";
import { MedicalProviderId } from "../medical_provider/MedicalProvider";
import { QMedicalProviderId } from "../medical_provider/QMedicalProvider";
import {
  MedicalProviderService,
  MedicalProviderCollectionService,
} from "../medical_provider/MedicalProviderService";
import { NegotiationId } from "../negotiation/Negotiation";
import { QNegotiationId } from "../negotiation/QNegotiation";
import {
  NegotiationService,
  NegotiationCollectionService,
} from "../negotiation/NegotiationService";
import { PoliceReportId } from "../police_report/PoliceReport";
import { QPoliceReportId } from "../police_report/QPoliceReport";
import {
  PoliceReportService,
  PoliceReportCollectionService,
} from "../police_report/PoliceReportService";
import { PropertyDamageId } from "../property_damage/PropertyDamage";
import { QPropertyDamageId } from "../property_damage/QPropertyDamage";
import {
  PropertyDamageService,
  PropertyDamageCollectionService,
} from "../property_damage/PropertyDamageService";
import { RecordId } from "../record/Record";
import { QRecordId } from "../record/QRecord";
import {
  RecordService,
  RecordCollectionService,
} from "../record/RecordService";
import { RecordFolderId } from "../record_folder/RecordFolder";
import { QRecordFolderId } from "../record_folder/QRecordFolder";
import {
  RecordFolderService,
  RecordFolderCollectionService,
} from "../record_folder/RecordFolderService";
import { SettlementId } from "../settlement/Settlement";
import { QSettlementId } from "../settlement/QSettlement";
import {
  SettlementService,
  SettlementCollectionService,
} from "../settlement/SettlementService";
import { SMSThreadId } from "../sms_thread/SMSThread";
import { QSMSThreadId } from "../sms_thread/QSMSThread";
import {
  SMSThreadService,
  SMSThreadCollectionService,
} from "../sms_thread/SMSThreadService";
import { TicklerId } from "../tickler/Tickler";
import { QTicklerId } from "../tickler/QTickler";
import {
  TicklerService,
  TicklerCollectionService,
} from "../tickler/TicklerService";
import { TwilioPhoneId } from "../twilio_phone/TwilioPhone";
import { QTwilioPhoneId } from "../twilio_phone/QTwilioPhone";
import {
  TwilioPhoneService,
  TwilioPhoneCollectionService,
} from "../twilio_phone/TwilioPhoneService";
import { WitnessExhibitDocumentId } from "../witness_exhibit_document/WitnessExhibitDocument";
import { QWitnessExhibitDocumentId } from "../witness_exhibit_document/QWitnessExhibitDocument";
import {
  WitnessExhibitDocumentService,
  WitnessExhibitDocumentCollectionService,
} from "../witness_exhibit_document/WitnessExhibitDocumentService";
import { IntakeClientLoginSummaryId } from "../intake_client_login_summary/IntakeClientLoginSummary";
import { QIntakeClientLoginSummaryId } from "../intake_client_login_summary/QIntakeClientLoginSummary";
import {
  IntakeClientLoginSummaryService,
  IntakeClientLoginSummaryCollectionService,
} from "../intake_client_login_summary/IntakeClientLoginSummaryService";
import { CalendarEntryId } from "../calendar_entry/CalendarEntry";
import { QCalendarEntryId } from "../calendar_entry/QCalendarEntry";
import {
  CalendarEntryService,
  CalendarEntryCollectionService,
} from "../calendar_entry/CalendarEntryService";
import { CalendarEntryRecurId } from "../calendar_entry_recur/CalendarEntryRecur";
import { QCalendarEntryRecurId } from "../calendar_entry_recur/QCalendarEntryRecur";
import {
  CalendarEntryRecurService,
  CalendarEntryRecurCollectionService,
} from "../calendar_entry_recur/CalendarEntryRecurService";
import { SimpleLawsuitSummaryService } from "../simple_lawsuit_summary/SimpleLawsuitSummaryService";

export class LawsuitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Lawsuit, EditableLawsuit, QLawsuit> {
  private _MasterLawsuit?: LawsuitService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _LawsuitPhaseType?: LawsuitPhaseTypeService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;
  private _SubPhaseType?: SubPhaseTypeService<ClientType>;
  private _LawsuitCompanionGroup?: LawsuitCompanionGroupService<ClientType>;
  private _SimpleLawsuitSummary?: SimpleLawsuitSummaryService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuit);
  }

  public CustomAttributes(): CustomAttributeCollectionService<ClientType>;
  public CustomAttributes(
    id: CustomAttributeId
  ): CustomAttributeService<ClientType>;
  public CustomAttributes(id?: CustomAttributeId | undefined) {
    const fieldName = "CustomAttributes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomAttributeCollectionService(client, path, fieldName)
      : new CustomAttributeService(
          client,
          path,
          new QCustomAttributeId(fieldName).buildUrl(id)
        );
  }

  public MasterLawsuit(): LawsuitService<ClientType> {
    if (!this._MasterLawsuit) {
      const { client, path } = this.__base;
      this._MasterLawsuit = new LawsuitService(client, path, "MasterLawsuit");
    }

    return this._MasterLawsuit;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public LawsuitPhaseType(): LawsuitPhaseTypeService<ClientType> {
    if (!this._LawsuitPhaseType) {
      const { client, path } = this.__base;
      this._LawsuitPhaseType = new LawsuitPhaseTypeService(
        client,
        path,
        "LawsuitPhaseType"
      );
    }

    return this._LawsuitPhaseType;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }

  public SubPhaseType(): SubPhaseTypeService<ClientType> {
    if (!this._SubPhaseType) {
      const { client, path } = this.__base;
      this._SubPhaseType = new SubPhaseTypeService(
        client,
        path,
        "SubPhaseType"
      );
    }

    return this._SubPhaseType;
  }

  public LawsuitCompanionGroup(): LawsuitCompanionGroupService<ClientType> {
    if (!this._LawsuitCompanionGroup) {
      const { client, path } = this.__base;
      this._LawsuitCompanionGroup = new LawsuitCompanionGroupService(
        client,
        path,
        "LawsuitCompanionGroup"
      );
    }

    return this._LawsuitCompanionGroup;
  }

  public ActivityLogs(): ActivityLogCollectionService<ClientType>;
  public ActivityLogs(id: ActivityLogId): ActivityLogService<ClientType>;
  public ActivityLogs(id?: ActivityLogId | undefined) {
    const fieldName = "ActivityLogs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityLogCollectionService(client, path, fieldName)
      : new ActivityLogService(
          client,
          path,
          new QActivityLogId(fieldName).buildUrl(id)
        );
  }

  public Alerts(): AlertCollectionService<ClientType>;
  public Alerts(id: AlertId): AlertService<ClientType>;
  public Alerts(id?: AlertId | undefined) {
    const fieldName = "Alerts";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AlertCollectionService(client, path, fieldName)
      : new AlertService(client, path, new QAlertId(fieldName).buildUrl(id));
  }

  public Appointments(): AppointmentCollectionService<ClientType>;
  public Appointments(id: AppointmentId): AppointmentService<ClientType>;
  public Appointments(id?: AppointmentId | undefined) {
    const fieldName = "Appointments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentCollectionService(client, path, fieldName)
      : new AppointmentService(
          client,
          path,
          new QAppointmentId(fieldName).buildUrl(id)
        );
  }

  public ChildLawsuits(): LawsuitCollectionService<ClientType>;
  public ChildLawsuits(id: LawsuitId): LawsuitService<ClientType>;
  public ChildLawsuits(id?: LawsuitId | undefined) {
    const fieldName = "ChildLawsuits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitCollectionService(client, path, fieldName)
      : new LawsuitService(
          client,
          path,
          new QLawsuitId(fieldName).buildUrl(id)
        );
  }

  public CustomFieldValues(): CustomFieldValueCollectionService<ClientType>;
  public CustomFieldValues(
    id: CustomFieldValueId
  ): CustomFieldValueService<ClientType>;
  public CustomFieldValues(id?: CustomFieldValueId | undefined) {
    const fieldName = "CustomFieldValues";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomFieldValueCollectionService(client, path, fieldName)
      : new CustomFieldValueService(
          client,
          path,
          new QCustomFieldValueId(fieldName).buildUrl(id)
        );
  }

  public Depositions(): DepositionCollectionService<ClientType>;
  public Depositions(id: DepositionId): DepositionService<ClientType>;
  public Depositions(id?: DepositionId | undefined) {
    const fieldName = "Depositions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public Discoveries(): DiscoveryCollectionService<ClientType>;
  public Discoveries(id: DiscoveryId): DiscoveryService<ClientType>;
  public Discoveries(id?: DiscoveryId | undefined) {
    const fieldName = "Discoveries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DiscoveryCollectionService(client, path, fieldName)
      : new DiscoveryService(
          client,
          path,
          new QDiscoveryId(fieldName).buildUrl(id)
        );
  }

  public Documents(): DocumentCollectionService<ClientType>;
  public Documents(id: DocumentId): DocumentService<ClientType>;
  public Documents(id?: DocumentId | undefined) {
    const fieldName = "Documents";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentCollectionService(client, path, fieldName)
      : new DocumentService(
          client,
          path,
          new QDocumentId(fieldName).buildUrl(id)
        );
  }

  public EconomicLosses(): EconomicLossCollectionService<ClientType>;
  public EconomicLosses(id: EconomicLossId): EconomicLossService<ClientType>;
  public EconomicLosses(id?: EconomicLossId | undefined) {
    const fieldName = "EconomicLosses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EconomicLossCollectionService(client, path, fieldName)
      : new EconomicLossService(
          client,
          path,
          new QEconomicLossId(fieldName).buildUrl(id)
        );
  }

  public Emails(): EmailCollectionService<ClientType>;
  public Emails(id: EmailId): EmailService<ClientType>;
  public Emails(id?: EmailId | undefined) {
    const fieldName = "Emails";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EmailCollectionService(client, path, fieldName)
      : new EmailService(client, path, new QEmailId(fieldName).buildUrl(id));
  }

  public Evidences(): EvidenceCollectionService<ClientType>;
  public Evidences(id: EvidenceId): EvidenceService<ClientType>;
  public Evidences(id?: EvidenceId | undefined) {
    const fieldName = "Evidences";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new EvidenceCollectionService(client, path, fieldName)
      : new EvidenceService(
          client,
          path,
          new QEvidenceId(fieldName).buildUrl(id)
        );
  }

  public Expenses(): ExpenseCollectionService<ClientType>;
  public Expenses(id: ExpenseId): ExpenseService<ClientType>;
  public Expenses(id?: ExpenseId | undefined) {
    const fieldName = "Expenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExpenseCollectionService(client, path, fieldName)
      : new ExpenseService(
          client,
          path,
          new QExpenseId(fieldName).buildUrl(id)
        );
  }

  public Hearings(): HearingCollectionService<ClientType>;
  public Hearings(id: HearingId): HearingService<ClientType>;
  public Hearings(id?: HearingId | undefined) {
    const fieldName = "Hearings";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new HearingCollectionService(client, path, fieldName)
      : new HearingService(
          client,
          path,
          new QHearingId(fieldName).buildUrl(id)
        );
  }

  public InsurancePolicies(): InsurancePolicyCollectionService<ClientType>;
  public InsurancePolicies(
    id: InsurancePolicyId
  ): InsurancePolicyService<ClientType>;
  public InsurancePolicies(id?: InsurancePolicyId | undefined) {
    const fieldName = "InsurancePolicies";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsurancePolicyCollectionService(client, path, fieldName)
      : new InsurancePolicyService(
          client,
          path,
          new QInsurancePolicyId(fieldName).buildUrl(id)
        );
  }

  public IntakeClientLawsuits(): IntakeClientLawsuitCollectionService<ClientType>;
  public IntakeClientLawsuits(
    id: IntakeClientLawsuitId
  ): IntakeClientLawsuitService<ClientType>;
  public IntakeClientLawsuits(id?: IntakeClientLawsuitId | undefined) {
    const fieldName = "IntakeClientLawsuits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntakeClientLawsuitCollectionService(client, path, fieldName)
      : new IntakeClientLawsuitService(
          client,
          path,
          new QIntakeClientLawsuitId(fieldName).buildUrl(id)
        );
  }

  public Investigators(): InvestigatorCollectionService<ClientType>;
  public Investigators(id: InvestigatorId): InvestigatorService<ClientType>;
  public Investigators(id?: InvestigatorId | undefined) {
    const fieldName = "Investigators";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InvestigatorCollectionService(client, path, fieldName)
      : new InvestigatorService(
          client,
          path,
          new QInvestigatorId(fieldName).buildUrl(id)
        );
  }

  public LawsuitAbbrs(): LawsuitAbbrCollectionService<ClientType>;
  public LawsuitAbbrs(id: LawsuitAbbrId): LawsuitAbbrService<ClientType>;
  public LawsuitAbbrs(id?: LawsuitAbbrId | undefined) {
    const fieldName = "LawsuitAbbrs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitAbbrCollectionService(client, path, fieldName)
      : new LawsuitAbbrService(
          client,
          path,
          new QLawsuitAbbrId(fieldName).buildUrl(id)
        );
  }

  public LawsuitClientForms(): LawsuitClientFormCollectionService<ClientType>;
  public LawsuitClientForms(
    id: LawsuitClientFormId
  ): LawsuitClientFormService<ClientType>;
  public LawsuitClientForms(id?: LawsuitClientFormId | undefined) {
    const fieldName = "LawsuitClientForms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitClientFormCollectionService(client, path, fieldName)
      : new LawsuitClientFormService(
          client,
          path,
          new QLawsuitClientFormId(fieldName).buildUrl(id)
        );
  }

  public LawsuitParties(): LawsuitPartyCollectionService<ClientType>;
  public LawsuitParties(id: LawsuitPartyId): LawsuitPartyService<ClientType>;
  public LawsuitParties(id?: LawsuitPartyId | undefined) {
    const fieldName = "LawsuitParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitPartyCollectionService(client, path, fieldName)
      : new LawsuitPartyService(
          client,
          path,
          new QLawsuitPartyId(fieldName).buildUrl(id)
        );
  }

  public LawsuitPhaseDates(): LawsuitPhaseDateCollectionService<ClientType>;
  public LawsuitPhaseDates(
    id: LawsuitPhaseDateId
  ): LawsuitPhaseDateService<ClientType>;
  public LawsuitPhaseDates(id?: LawsuitPhaseDateId | undefined) {
    const fieldName = "LawsuitPhaseDates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitPhaseDateCollectionService(client, path, fieldName)
      : new LawsuitPhaseDateService(
          client,
          path,
          new QLawsuitPhaseDateId(fieldName).buildUrl(id)
        );
  }

  public LawsuitRecordRequests(): LawsuitRecordRequestCollectionService<ClientType>;
  public LawsuitRecordRequests(
    id: LawsuitRecordRequestId
  ): LawsuitRecordRequestService<ClientType>;
  public LawsuitRecordRequests(id?: LawsuitRecordRequestId | undefined) {
    const fieldName = "LawsuitRecordRequests";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitRecordRequestCollectionService(client, path, fieldName)
      : new LawsuitRecordRequestService(
          client,
          path,
          new QLawsuitRecordRequestId(fieldName).buildUrl(id)
        );
  }

  public LawsuitRoles(): LawsuitRoleCollectionService<ClientType>;
  public LawsuitRoles(id: LawsuitRoleId): LawsuitRoleService<ClientType>;
  public LawsuitRoles(id?: LawsuitRoleId | undefined) {
    const fieldName = "LawsuitRoles";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitRoleCollectionService(client, path, fieldName)
      : new LawsuitRoleService(
          client,
          path,
          new QLawsuitRoleId(fieldName).buildUrl(id)
        );
  }

  public MasterLawsuitTypes(): LawsuitTypeCollectionService<ClientType>;
  public MasterLawsuitTypes(id: LawsuitTypeId): LawsuitTypeService<ClientType>;
  public MasterLawsuitTypes(id?: LawsuitTypeId | undefined) {
    const fieldName = "MasterLawsuitTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeCollectionService(client, path, fieldName)
      : new LawsuitTypeService(
          client,
          path,
          new QLawsuitTypeId(fieldName).buildUrl(id)
        );
  }

  public LienSubrogations(): LienSubrogationCollectionService<ClientType>;
  public LienSubrogations(
    id: LienSubrogationId
  ): LienSubrogationService<ClientType>;
  public LienSubrogations(id?: LienSubrogationId | undefined) {
    const fieldName = "LienSubrogations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LienSubrogationCollectionService(client, path, fieldName)
      : new LienSubrogationService(
          client,
          path,
          new QLienSubrogationId(fieldName).buildUrl(id)
        );
  }

  public Litigations(): LitigationCollectionService<ClientType>;
  public Litigations(id: LitigationId): LitigationService<ClientType>;
  public Litigations(id?: LitigationId | undefined) {
    const fieldName = "Litigations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LitigationCollectionService(client, path, fieldName)
      : new LitigationService(
          client,
          path,
          new QLitigationId(fieldName).buildUrl(id)
        );
  }

  public MedicalEvaluations(): MedicalEvaluationCollectionService<ClientType>;
  public MedicalEvaluations(
    id: MedicalEvaluationId
  ): MedicalEvaluationService<ClientType>;
  public MedicalEvaluations(id?: MedicalEvaluationId | undefined) {
    const fieldName = "MedicalEvaluations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalEvaluationCollectionService(client, path, fieldName)
      : new MedicalEvaluationService(
          client,
          path,
          new QMedicalEvaluationId(fieldName).buildUrl(id)
        );
  }

  public MedicalProviders(): MedicalProviderCollectionService<ClientType>;
  public MedicalProviders(
    id: MedicalProviderId
  ): MedicalProviderService<ClientType>;
  public MedicalProviders(id?: MedicalProviderId | undefined) {
    const fieldName = "MedicalProviders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalProviderCollectionService(client, path, fieldName)
      : new MedicalProviderService(
          client,
          path,
          new QMedicalProviderId(fieldName).buildUrl(id)
        );
  }

  public Negotiations(): NegotiationCollectionService<ClientType>;
  public Negotiations(id: NegotiationId): NegotiationService<ClientType>;
  public Negotiations(id?: NegotiationId | undefined) {
    const fieldName = "Negotiations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new NegotiationCollectionService(client, path, fieldName)
      : new NegotiationService(
          client,
          path,
          new QNegotiationId(fieldName).buildUrl(id)
        );
  }

  public PoliceReports(): PoliceReportCollectionService<ClientType>;
  public PoliceReports(id: PoliceReportId): PoliceReportService<ClientType>;
  public PoliceReports(id?: PoliceReportId | undefined) {
    const fieldName = "PoliceReports";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PoliceReportCollectionService(client, path, fieldName)
      : new PoliceReportService(
          client,
          path,
          new QPoliceReportId(fieldName).buildUrl(id)
        );
  }

  public PropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public PropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public PropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "PropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }

  public Records(): RecordCollectionService<ClientType>;
  public Records(id: RecordId): RecordService<ClientType>;
  public Records(id?: RecordId | undefined) {
    const fieldName = "Records";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordCollectionService(client, path, fieldName)
      : new RecordService(client, path, new QRecordId(fieldName).buildUrl(id));
  }

  public RecordFolders(): RecordFolderCollectionService<ClientType>;
  public RecordFolders(id: RecordFolderId): RecordFolderService<ClientType>;
  public RecordFolders(id?: RecordFolderId | undefined) {
    const fieldName = "RecordFolders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordFolderCollectionService(client, path, fieldName)
      : new RecordFolderService(
          client,
          path,
          new QRecordFolderId(fieldName).buildUrl(id)
        );
  }

  public Settlements(): SettlementCollectionService<ClientType>;
  public Settlements(id: SettlementId): SettlementService<ClientType>;
  public Settlements(id?: SettlementId | undefined) {
    const fieldName = "Settlements";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementCollectionService(client, path, fieldName)
      : new SettlementService(
          client,
          path,
          new QSettlementId(fieldName).buildUrl(id)
        );
  }

  public SMSThreads(): SMSThreadCollectionService<ClientType>;
  public SMSThreads(id: SMSThreadId): SMSThreadService<ClientType>;
  public SMSThreads(id?: SMSThreadId | undefined) {
    const fieldName = "SMSThreads";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SMSThreadCollectionService(client, path, fieldName)
      : new SMSThreadService(
          client,
          path,
          new QSMSThreadId(fieldName).buildUrl(id)
        );
  }

  public Ticklers(): TicklerCollectionService<ClientType>;
  public Ticklers(id: TicklerId): TicklerService<ClientType>;
  public Ticklers(id?: TicklerId | undefined) {
    const fieldName = "Ticklers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCollectionService(client, path, fieldName)
      : new TicklerService(
          client,
          path,
          new QTicklerId(fieldName).buildUrl(id)
        );
  }

  public TwilioPhones(): TwilioPhoneCollectionService<ClientType>;
  public TwilioPhones(id: TwilioPhoneId): TwilioPhoneService<ClientType>;
  public TwilioPhones(id?: TwilioPhoneId | undefined) {
    const fieldName = "TwilioPhones";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TwilioPhoneCollectionService(client, path, fieldName)
      : new TwilioPhoneService(
          client,
          path,
          new QTwilioPhoneId(fieldName).buildUrl(id)
        );
  }

  public WitnessExhibitDocuments(): WitnessExhibitDocumentCollectionService<ClientType>;
  public WitnessExhibitDocuments(
    id: WitnessExhibitDocumentId
  ): WitnessExhibitDocumentService<ClientType>;
  public WitnessExhibitDocuments(id?: WitnessExhibitDocumentId | undefined) {
    const fieldName = "WitnessExhibitDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentCollectionService(client, path, fieldName)
      : new WitnessExhibitDocumentService(
          client,
          path,
          new QWitnessExhibitDocumentId(fieldName).buildUrl(id)
        );
  }

  public IntakeClientLoginSummaries(): IntakeClientLoginSummaryCollectionService<ClientType>;
  public IntakeClientLoginSummaries(
    id: IntakeClientLoginSummaryId
  ): IntakeClientLoginSummaryService<ClientType>;
  public IntakeClientLoginSummaries(
    id?: IntakeClientLoginSummaryId | undefined
  ) {
    const fieldName = "IntakeClientLoginSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntakeClientLoginSummaryCollectionService(client, path, fieldName)
      : new IntakeClientLoginSummaryService(
          client,
          path,
          new QIntakeClientLoginSummaryId(fieldName).buildUrl(id)
        );
  }

  public CalendarEntries(): CalendarEntryCollectionService<ClientType>;
  public CalendarEntries(id: CalendarEntryId): CalendarEntryService<ClientType>;
  public CalendarEntries(id?: CalendarEntryId | undefined) {
    const fieldName = "CalendarEntries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CalendarEntryCollectionService(client, path, fieldName)
      : new CalendarEntryService(
          client,
          path,
          new QCalendarEntryId(fieldName).buildUrl(id)
        );
  }

  public CalendarEntryRecurs(): CalendarEntryRecurCollectionService<ClientType>;
  public CalendarEntryRecurs(
    id: CalendarEntryRecurId
  ): CalendarEntryRecurService<ClientType>;
  public CalendarEntryRecurs(id?: CalendarEntryRecurId | undefined) {
    const fieldName = "CalendarEntryRecurs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CalendarEntryRecurCollectionService(client, path, fieldName)
      : new CalendarEntryRecurService(
          client,
          path,
          new QCalendarEntryRecurId(fieldName).buildUrl(id)
        );
  }

  public SimpleLawsuitSummary(): SimpleLawsuitSummaryService<ClientType> {
    if (!this._SimpleLawsuitSummary) {
      const { client, path } = this.__base;
      this._SimpleLawsuitSummary = new SimpleLawsuitSummaryService(
        client,
        path,
        "SimpleLawsuitSummary"
      );
    }

    return this._SimpleLawsuitSummary;
  }
}

export class LawsuitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Lawsuit,
  EditableLawsuit,
  QLawsuit,
  LawsuitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuit, new QLawsuitId(name));
  }
}
