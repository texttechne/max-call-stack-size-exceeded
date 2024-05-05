import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Firm, EditableFirm } from "./Firm";
import { QFirm, qFirm } from "./QFirm";
import { PartyService, PartyCollectionService } from "../party/PartyService";
import {
  DocumentTemplateService,
  DocumentTemplateCollectionService,
} from "../document_template/DocumentTemplateService";
import { PartyTypeService } from "../party_type/PartyTypeService";
import { RecordFileService } from "../record_file/RecordFileService";
import { ADRId } from "../adr/ADR";
import { QADRId } from "../adr/QADR";
import { ADRService, ADRCollectionService } from "../adr/ADRService";
import { AnswerEnlargementId } from "../answer_enlargement/AnswerEnlargement";
import { QAnswerEnlargementId } from "../answer_enlargement/QAnswerEnlargement";
import {
  AnswerEnlargementService,
  AnswerEnlargementCollectionService,
} from "../answer_enlargement/AnswerEnlargementService";
import { AppointmentId } from "../appointment/Appointment";
import { QAppointmentId } from "../appointment/QAppointment";
import {
  AppointmentService,
  AppointmentCollectionService,
} from "../appointment/AppointmentService";
import { AppointmentPartyId } from "../appointment_party/AppointmentParty";
import { QAppointmentPartyId } from "../appointment_party/QAppointmentParty";
import {
  AppointmentPartyService,
  AppointmentPartyCollectionService,
} from "../appointment_party/AppointmentPartyService";
import { CalendarUserId } from "../calendar_user/CalendarUser";
import { QCalendarUserId } from "../calendar_user/QCalendarUser";
import {
  CalendarUserService,
  CalendarUserCollectionService,
} from "../calendar_user/CalendarUserService";
import { ComplaintId } from "../complaint/Complaint";
import { QComplaintId } from "../complaint/QComplaint";
import {
  ComplaintService,
  ComplaintCollectionService,
} from "../complaint/ComplaintService";
import { ContactInfoId } from "../contact_info/ContactInfo";
import { QContactInfoId } from "../contact_info/QContactInfo";
import {
  ContactInfoService,
  ContactInfoCollectionService,
} from "../contact_info/ContactInfoService";
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
import { ExpenseId } from "../expense/Expense";
import { QExpenseId } from "../expense/QExpense";
import {
  ExpenseService,
  ExpenseCollectionService,
} from "../expense/ExpenseService";
import { PartyId } from "../party/Party";
import { QPartyId } from "../party/QParty";
import { HearingId } from "../hearing/Hearing";
import { QHearingId } from "../hearing/QHearing";
import {
  HearingService,
  HearingCollectionService,
} from "../hearing/HearingService";
import { LawsuitPartyId } from "../lawsuit_party/LawsuitParty";
import { QLawsuitPartyId } from "../lawsuit_party/QLawsuitParty";
import {
  LawsuitPartyService,
  LawsuitPartyCollectionService,
} from "../lawsuit_party/LawsuitPartyService";
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
import { MedicalProviderId } from "../medical_provider/MedicalProvider";
import { QMedicalProviderId } from "../medical_provider/QMedicalProvider";
import {
  MedicalProviderService,
  MedicalProviderCollectionService,
} from "../medical_provider/MedicalProviderService";
import { PartyAddressId } from "../party_address/PartyAddress";
import { QPartyAddressId } from "../party_address/QPartyAddress";
import {
  PartyAddressService,
  PartyAddressCollectionService,
} from "../party_address/PartyAddressService";
import { RecordId } from "../record/Record";
import { QRecordId } from "../record/QRecord";
import {
  RecordService,
  RecordCollectionService,
} from "../record/RecordService";
import { SettlementId } from "../settlement/Settlement";
import { QSettlementId } from "../settlement/QSettlement";
import {
  SettlementService,
  SettlementCollectionService,
} from "../settlement/SettlementService";
import { SettlementDocumentId } from "../settlement_document/SettlementDocument";
import { QSettlementDocumentId } from "../settlement_document/QSettlementDocument";
import {
  SettlementDocumentService,
  SettlementDocumentCollectionService,
} from "../settlement_document/SettlementDocumentService";
import { WitnessExhibitDocumentPartyId } from "../witness_exhibit_document_party/WitnessExhibitDocumentParty";
import { QWitnessExhibitDocumentPartyId } from "../witness_exhibit_document_party/QWitnessExhibitDocumentParty";
import {
  WitnessExhibitDocumentPartyService,
  WitnessExhibitDocumentPartyCollectionService,
} from "../witness_exhibit_document_party/WitnessExhibitDocumentPartyService";
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
import { PartySummaryService } from "../party_summary/PartySummaryService";
import { CasePacerUserService } from "../case_pacer_user/CasePacerUserService";
import { AdditionalEmailSenderId } from "../additional_email_sender/AdditionalEmailSender";
import { QAdditionalEmailSenderId } from "../additional_email_sender/QAdditionalEmailSender";
import {
  AdditionalEmailSenderService,
  AdditionalEmailSenderCollectionService,
} from "../additional_email_sender/AdditionalEmailSenderService";
import { AlertId } from "../alert/Alert";
import { QAlertId } from "../alert/QAlert";
import { AlertService, AlertCollectionService } from "../alert/AlertService";
import { ActivityLogTypeId } from "../activity_log_type/ActivityLogType";
import { QActivityLogTypeId } from "../activity_log_type/QActivityLogType";
import {
  ActivityLogTypeService,
  ActivityLogTypeCollectionService,
} from "../activity_log_type/ActivityLogTypeService";
import { AppointmentCustomTypeId } from "../appointment_custom_type/AppointmentCustomType";
import { QAppointmentCustomTypeId } from "../appointment_custom_type/QAppointmentCustomType";
import {
  AppointmentCustomTypeService,
  AppointmentCustomTypeCollectionService,
} from "../appointment_custom_type/AppointmentCustomTypeService";
import { CaseMenuItemId } from "../case_menu_item/CaseMenuItem";
import { QCaseMenuItemId } from "../case_menu_item/QCaseMenuItem";
import {
  CaseMenuItemService,
  CaseMenuItemCollectionService,
} from "../case_menu_item/CaseMenuItemService";
import { ClientFormId } from "../client_form/ClientForm";
import { QClientFormId } from "../client_form/QClientForm";
import {
  ClientFormService,
  ClientFormCollectionService,
} from "../client_form/ClientFormService";
import { CPDirectBlogId } from "../cp_direct_blog/CPDirectBlog";
import { QCPDirectBlogId } from "../cp_direct_blog/QCPDirectBlog";
import {
  CPDirectBlogService,
  CPDirectBlogCollectionService,
} from "../cp_direct_blog/CPDirectBlogService";
import { CPDirectSettingId } from "../cp_direct_setting/CPDirectSetting";
import { QCPDirectSettingId } from "../cp_direct_setting/QCPDirectSetting";
import {
  CPDirectSettingService,
  CPDirectSettingCollectionService,
} from "../cp_direct_setting/CPDirectSettingService";
import { DocumentTemplateId } from "../document_template/DocumentTemplate";
import { QDocumentTemplateId } from "../document_template/QDocumentTemplate";
import { EmailId } from "../email/Email";
import { QEmailId } from "../email/QEmail";
import { EmailService, EmailCollectionService } from "../email/EmailService";
import { ExternalImportKeyId } from "../external_import_key/ExternalImportKey";
import { QExternalImportKeyId } from "../external_import_key/QExternalImportKey";
import {
  ExternalImportKeyService,
  ExternalImportKeyCollectionService,
} from "../external_import_key/ExternalImportKeyService";
import { RecordSubtypeId } from "../record_subtype/RecordSubtype";
import { QRecordSubtypeId } from "../record_subtype/QRecordSubtype";
import {
  RecordSubtypeService,
  RecordSubtypeCollectionService,
} from "../record_subtype/RecordSubtypeService";
import { FirmAbbrId } from "../firm_abbr/FirmAbbr";
import { QFirmAbbrId } from "../firm_abbr/QFirmAbbr";
import {
  FirmAbbrService,
  FirmAbbrCollectionService,
} from "../firm_abbr/FirmAbbrService";
import { FirmCustomFieldId } from "../firm_custom_field/FirmCustomField";
import { QFirmCustomFieldId } from "../firm_custom_field/QFirmCustomField";
import {
  FirmCustomFieldService,
  FirmCustomFieldCollectionService,
} from "../firm_custom_field/FirmCustomFieldService";
import { SecurityUserGroupId } from "../security_user_group/SecurityUserGroup";
import { QSecurityUserGroupId } from "../security_user_group/QSecurityUserGroup";
import {
  SecurityUserGroupService,
  SecurityUserGroupCollectionService,
} from "../security_user_group/SecurityUserGroupService";
import { IntakeClientFirmId } from "../intake_client_firm/IntakeClientFirm";
import { QIntakeClientFirmId } from "../intake_client_firm/QIntakeClientFirm";
import {
  IntakeClientFirmService,
  IntakeClientFirmCollectionService,
} from "../intake_client_firm/IntakeClientFirmService";
import { IntangibleDamageId } from "../intangible_damage/IntangibleDamage";
import { QIntangibleDamageId } from "../intangible_damage/QIntangibleDamage";
import {
  IntangibleDamageService,
  IntangibleDamageCollectionService,
} from "../intangible_damage/IntangibleDamageService";
import { LawId } from "../law/Law";
import { QLawId } from "../law/QLaw";
import { LawService, LawCollectionService } from "../law/LawService";
import { LawsuitId } from "../lawsuit/Lawsuit";
import { QLawsuitId } from "../lawsuit/QLawsuit";
import {
  LawsuitService,
  LawsuitCollectionService,
} from "../lawsuit/LawsuitService";
import { LawsuitAbbrId } from "../lawsuit_abbr/LawsuitAbbr";
import { QLawsuitAbbrId } from "../lawsuit_abbr/QLawsuitAbbr";
import {
  LawsuitAbbrService,
  LawsuitAbbrCollectionService,
} from "../lawsuit_abbr/LawsuitAbbrService";
import { LawsuitTypeId } from "../lawsuit_type/LawsuitType";
import { QLawsuitTypeId } from "../lawsuit_type/QLawsuitType";
import {
  LawsuitTypeService,
  LawsuitTypeCollectionService,
} from "../lawsuit_type/LawsuitTypeService";
import { PaymentInfoService } from "../payment_info/PaymentInfoService";
import { PIPBenefitsTypeId } from "../pip_benefits_type/PIPBenefitsType";
import { QPIPBenefitsTypeId } from "../pip_benefits_type/QPIPBenefitsType";
import {
  PIPBenefitsTypeService,
  PIPBenefitsTypeCollectionService,
} from "../pip_benefits_type/PIPBenefitsTypeService";
import { QuickBooksBankAccountId } from "../quick_books_bank_account/QuickBooksBankAccount";
import { QQuickBooksBankAccountId } from "../quick_books_bank_account/QQuickBooksBankAccount";
import {
  QuickBooksBankAccountService,
  QuickBooksBankAccountCollectionService,
} from "../quick_books_bank_account/QuickBooksBankAccountService";
import { QuickBooksExpenseAccountId } from "../quick_books_expense_account/QuickBooksExpenseAccount";
import { QQuickBooksExpenseAccountId } from "../quick_books_expense_account/QQuickBooksExpenseAccount";
import {
  QuickBooksExpenseAccountService,
  QuickBooksExpenseAccountCollectionService,
} from "../quick_books_expense_account/QuickBooksExpenseAccountService";
import { QuickBooksLogId } from "../quick_books_log/QuickBooksLog";
import { QQuickBooksLogId } from "../quick_books_log/QQuickBooksLog";
import {
  QuickBooksLogService,
  QuickBooksLogCollectionService,
} from "../quick_books_log/QuickBooksLogService";
import { QuickBooksSettingId } from "../quick_books_setting/QuickBooksSetting";
import { QQuickBooksSettingId } from "../quick_books_setting/QQuickBooksSetting";
import {
  QuickBooksSettingService,
  QuickBooksSettingCollectionService,
} from "../quick_books_setting/QuickBooksSettingService";
import { RecordFolderId } from "../record_folder/RecordFolder";
import { QRecordFolderId } from "../record_folder/QRecordFolder";
import {
  RecordFolderService,
  RecordFolderCollectionService,
} from "../record_folder/RecordFolderService";
import { ReportFirmId } from "../report_firm/ReportFirm";
import { QReportFirmId } from "../report_firm/QReportFirm";
import {
  ReportFirmService,
  ReportFirmCollectionService,
} from "../report_firm/ReportFirmService";
import { RoleTemplateId } from "../role_template/RoleTemplate";
import { QRoleTemplateId } from "../role_template/QRoleTemplate";
import {
  RoleTemplateService,
  RoleTemplateCollectionService,
} from "../role_template/RoleTemplateService";
import { StandardExhibitId } from "../standard_exhibit/StandardExhibit";
import { QStandardExhibitId } from "../standard_exhibit/QStandardExhibit";
import {
  StandardExhibitService,
  StandardExhibitCollectionService,
} from "../standard_exhibit/StandardExhibitService";
import { StandardWitnessId } from "../standard_witness/StandardWitness";
import { QStandardWitnessId } from "../standard_witness/QStandardWitness";
import {
  StandardWitnessService,
  StandardWitnessCollectionService,
} from "../standard_witness/StandardWitnessService";
import { TicklerId } from "../tickler/Tickler";
import { QTicklerId } from "../tickler/QTickler";
import {
  TicklerService,
  TicklerCollectionService,
} from "../tickler/TicklerService";
import { TicklerTemplateId } from "../tickler_template/TicklerTemplate";
import { QTicklerTemplateId } from "../tickler_template/QTicklerTemplate";
import {
  TicklerTemplateService,
  TicklerTemplateCollectionService,
} from "../tickler_template/TicklerTemplateService";
import { TrialExhibitId } from "../trial_exhibit/TrialExhibit";
import { QTrialExhibitId } from "../trial_exhibit/QTrialExhibit";
import {
  TrialExhibitService,
  TrialExhibitCollectionService,
} from "../trial_exhibit/TrialExhibitService";
import { TrialItemId } from "../trial_item/TrialItem";
import { QTrialItemId } from "../trial_item/QTrialItem";
import {
  TrialItemService,
  TrialItemCollectionService,
} from "../trial_item/TrialItemService";
import { TwilioPhoneId } from "../twilio_phone/TwilioPhone";
import { QTwilioPhoneId } from "../twilio_phone/QTwilioPhone";
import {
  TwilioPhoneService,
  TwilioPhoneCollectionService,
} from "../twilio_phone/TwilioPhoneService";
import { IntakeClientLoginSummaryId } from "../intake_client_login_summary/IntakeClientLoginSummary";
import { QIntakeClientLoginSummaryId } from "../intake_client_login_summary/QIntakeClientLoginSummary";
import {
  IntakeClientLoginSummaryService,
  IntakeClientLoginSummaryCollectionService,
} from "../intake_client_login_summary/IntakeClientLoginSummaryService";
import { SecurityRuleSummaryId } from "../security_rule_summary/SecurityRuleSummary";
import { QSecurityRuleSummaryId } from "../security_rule_summary/QSecurityRuleSummary";
import {
  SecurityRuleSummaryService,
  SecurityRuleSummaryCollectionService,
} from "../security_rule_summary/SecurityRuleSummaryService";
import { AuthorizedEmailSenderId } from "../authorized_email_sender/AuthorizedEmailSender";
import { QAuthorizedEmailSenderId } from "../authorized_email_sender/QAuthorizedEmailSender";
import {
  AuthorizedEmailSenderService,
  AuthorizedEmailSenderCollectionService,
} from "../authorized_email_sender/AuthorizedEmailSenderService";

export class FirmService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Firm, EditableFirm, QFirm> {
  private _GuardianExecutorParty?: PartyService<ClientType>;
  private _ParentFirm?: FirmService<ClientType>;
  private _GlobalParty?: PartyService<ClientType>;
  private _HeaderDocumentTemplate?: DocumentTemplateService<ClientType>;
  private _PartyType?: PartyTypeService<ClientType>;
  private _Image?: RecordFileService<ClientType>;
  private _PartySummary?: PartySummaryService<ClientType>;
  private _DefaultAttorney?: CasePacerUserService<ClientType>;
  private _DefaultParalegal?: CasePacerUserService<ClientType>;
  private _PaymentInfo?: PaymentInfoService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qFirm);
  }

  public GuardianExecutorParty(): PartyService<ClientType> {
    if (!this._GuardianExecutorParty) {
      const { client, path } = this.__base;
      this._GuardianExecutorParty = new PartyService(
        client,
        path,
        "GuardianExecutorParty"
      );
    }

    return this._GuardianExecutorParty;
  }

  public ParentFirm(): FirmService<ClientType> {
    if (!this._ParentFirm) {
      const { client, path } = this.__base;
      this._ParentFirm = new FirmService(client, path, "ParentFirm");
    }

    return this._ParentFirm;
  }

  public GlobalParty(): PartyService<ClientType> {
    if (!this._GlobalParty) {
      const { client, path } = this.__base;
      this._GlobalParty = new PartyService(client, path, "GlobalParty");
    }

    return this._GlobalParty;
  }

  public HeaderDocumentTemplate(): DocumentTemplateService<ClientType> {
    if (!this._HeaderDocumentTemplate) {
      const { client, path } = this.__base;
      this._HeaderDocumentTemplate = new DocumentTemplateService(
        client,
        path,
        "HeaderDocumentTemplate"
      );
    }

    return this._HeaderDocumentTemplate;
  }

  public PartyType(): PartyTypeService<ClientType> {
    if (!this._PartyType) {
      const { client, path } = this.__base;
      this._PartyType = new PartyTypeService(client, path, "PartyType");
    }

    return this._PartyType;
  }

  public Image(): RecordFileService<ClientType> {
    if (!this._Image) {
      const { client, path } = this.__base;
      this._Image = new RecordFileService(client, path, "Image");
    }

    return this._Image;
  }

  public ADRs(): ADRCollectionService<ClientType>;
  public ADRs(id: ADRId): ADRService<ClientType>;
  public ADRs(id?: ADRId | undefined) {
    const fieldName = "ADRs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ADRCollectionService(client, path, fieldName)
      : new ADRService(client, path, new QADRId(fieldName).buildUrl(id));
  }

  public AnswerEnlargements(): AnswerEnlargementCollectionService<ClientType>;
  public AnswerEnlargements(
    id: AnswerEnlargementId
  ): AnswerEnlargementService<ClientType>;
  public AnswerEnlargements(id?: AnswerEnlargementId | undefined) {
    const fieldName = "AnswerEnlargements";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AnswerEnlargementCollectionService(client, path, fieldName)
      : new AnswerEnlargementService(
          client,
          path,
          new QAnswerEnlargementId(fieldName).buildUrl(id)
        );
  }

  public AppointmentsByPlaintiff(): AppointmentCollectionService<ClientType>;
  public AppointmentsByPlaintiff(
    id: AppointmentId
  ): AppointmentService<ClientType>;
  public AppointmentsByPlaintiff(id?: AppointmentId | undefined) {
    const fieldName = "AppointmentsByPlaintiff";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentCollectionService(client, path, fieldName)
      : new AppointmentService(
          client,
          path,
          new QAppointmentId(fieldName).buildUrl(id)
        );
  }

  public AppointmentParties(): AppointmentPartyCollectionService<ClientType>;
  public AppointmentParties(
    id: AppointmentPartyId
  ): AppointmentPartyService<ClientType>;
  public AppointmentParties(id?: AppointmentPartyId | undefined) {
    const fieldName = "AppointmentParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentPartyCollectionService(client, path, fieldName)
      : new AppointmentPartyService(
          client,
          path,
          new QAppointmentPartyId(fieldName).buildUrl(id)
        );
  }

  public CalendarUsers(): CalendarUserCollectionService<ClientType>;
  public CalendarUsers(id: CalendarUserId): CalendarUserService<ClientType>;
  public CalendarUsers(id?: CalendarUserId | undefined) {
    const fieldName = "CalendarUsers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CalendarUserCollectionService(client, path, fieldName)
      : new CalendarUserService(
          client,
          path,
          new QCalendarUserId(fieldName).buildUrl(id)
        );
  }

  public Complaints(): ComplaintCollectionService<ClientType>;
  public Complaints(id: ComplaintId): ComplaintService<ClientType>;
  public Complaints(id?: ComplaintId | undefined) {
    const fieldName = "Complaints";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ComplaintCollectionService(client, path, fieldName)
      : new ComplaintService(
          client,
          path,
          new QComplaintId(fieldName).buildUrl(id)
        );
  }

  public ContactInfoes(): ContactInfoCollectionService<ClientType>;
  public ContactInfoes(id: ContactInfoId): ContactInfoService<ClientType>;
  public ContactInfoes(id?: ContactInfoId | undefined) {
    const fieldName = "ContactInfoes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ContactInfoCollectionService(client, path, fieldName)
      : new ContactInfoService(
          client,
          path,
          new QContactInfoId(fieldName).buildUrl(id)
        );
  }

  public DepositionsByLocationParty(): DepositionCollectionService<ClientType>;
  public DepositionsByLocationParty(
    id: DepositionId
  ): DepositionService<ClientType>;
  public DepositionsByLocationParty(id?: DepositionId | undefined) {
    const fieldName = "DepositionsByLocationParty";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public DeponentDepositions(): DepositionCollectionService<ClientType>;
  public DeponentDepositions(id: DepositionId): DepositionService<ClientType>;
  public DeponentDepositions(id?: DepositionId | undefined) {
    const fieldName = "DeponentDepositions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public DeposerDepositions(): DepositionCollectionService<ClientType>;
  public DeposerDepositions(id: DepositionId): DepositionService<ClientType>;
  public DeposerDepositions(id?: DepositionId | undefined) {
    const fieldName = "DeposerDepositions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public RecorderDepositions(): DepositionCollectionService<ClientType>;
  public RecorderDepositions(id: DepositionId): DepositionService<ClientType>;
  public RecorderDepositions(id?: DepositionId | undefined) {
    const fieldName = "RecorderDepositions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public DepositionsByVideographer(): DepositionCollectionService<ClientType>;
  public DepositionsByVideographer(
    id: DepositionId
  ): DepositionService<ClientType>;
  public DepositionsByVideographer(id?: DepositionId | undefined) {
    const fieldName = "DepositionsByVideographer";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public DefendantDiscoveries(): DiscoveryCollectionService<ClientType>;
  public DefendantDiscoveries(id: DiscoveryId): DiscoveryService<ClientType>;
  public DefendantDiscoveries(id?: DiscoveryId | undefined) {
    const fieldName = "DefendantDiscoveries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DiscoveryCollectionService(client, path, fieldName)
      : new DiscoveryService(
          client,
          path,
          new QDiscoveryId(fieldName).buildUrl(id)
        );
  }

  public DiscoveriesByNonPartyRecipient(): DiscoveryCollectionService<ClientType>;
  public DiscoveriesByNonPartyRecipient(
    id: DiscoveryId
  ): DiscoveryService<ClientType>;
  public DiscoveriesByNonPartyRecipient(id?: DiscoveryId | undefined) {
    const fieldName = "DiscoveriesByNonPartyRecipient";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DiscoveryCollectionService(client, path, fieldName)
      : new DiscoveryService(
          client,
          path,
          new QDiscoveryId(fieldName).buildUrl(id)
        );
  }

  public PlaintiffDiscoveries(): DiscoveryCollectionService<ClientType>;
  public PlaintiffDiscoveries(id: DiscoveryId): DiscoveryService<ClientType>;
  public PlaintiffDiscoveries(id?: DiscoveryId | undefined) {
    const fieldName = "PlaintiffDiscoveries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DiscoveryCollectionService(client, path, fieldName)
      : new DiscoveryService(
          client,
          path,
          new QDiscoveryId(fieldName).buildUrl(id)
        );
  }

  public ReceivedFromDocuments(): DocumentCollectionService<ClientType>;
  public ReceivedFromDocuments(id: DocumentId): DocumentService<ClientType>;
  public ReceivedFromDocuments(id?: DocumentId | undefined) {
    const fieldName = "ReceivedFromDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentCollectionService(client, path, fieldName)
      : new DocumentService(
          client,
          path,
          new QDocumentId(fieldName).buildUrl(id)
        );
  }

  public SentToDocuments(): DocumentCollectionService<ClientType>;
  public SentToDocuments(id: DocumentId): DocumentService<ClientType>;
  public SentToDocuments(id?: DocumentId | undefined) {
    const fieldName = "SentToDocuments";
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

  public AttorneyExpenses(): ExpenseCollectionService<ClientType>;
  public AttorneyExpenses(id: ExpenseId): ExpenseService<ClientType>;
  public AttorneyExpenses(id?: ExpenseId | undefined) {
    const fieldName = "AttorneyExpenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExpenseCollectionService(client, path, fieldName)
      : new ExpenseService(
          client,
          path,
          new QExpenseId(fieldName).buildUrl(id)
        );
  }

  public ClientExpenses(): ExpenseCollectionService<ClientType>;
  public ClientExpenses(id: ExpenseId): ExpenseService<ClientType>;
  public ClientExpenses(id?: ExpenseId | undefined) {
    const fieldName = "ClientExpenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExpenseCollectionService(client, path, fieldName)
      : new ExpenseService(
          client,
          path,
          new QExpenseId(fieldName).buildUrl(id)
        );
  }

  public PayeeExpenses(): ExpenseCollectionService<ClientType>;
  public PayeeExpenses(id: ExpenseId): ExpenseService<ClientType>;
  public PayeeExpenses(id?: ExpenseId | undefined) {
    const fieldName = "PayeeExpenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExpenseCollectionService(client, path, fieldName)
      : new ExpenseService(
          client,
          path,
          new QExpenseId(fieldName).buildUrl(id)
        );
  }

  public PaymentPartyExpenses(): ExpenseCollectionService<ClientType>;
  public PaymentPartyExpenses(id: ExpenseId): ExpenseService<ClientType>;
  public PaymentPartyExpenses(id?: ExpenseId | undefined) {
    const fieldName = "PaymentPartyExpenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExpenseCollectionService(client, path, fieldName)
      : new ExpenseService(
          client,
          path,
          new QExpenseId(fieldName).buildUrl(id)
        );
  }

  public WardEstateParties(): PartyCollectionService<ClientType>;
  public WardEstateParties(id: PartyId): PartyService<ClientType>;
  public WardEstateParties(id?: PartyId | undefined) {
    const fieldName = "WardEstateParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyCollectionService(client, path, fieldName)
      : new PartyService(client, path, new QPartyId(fieldName).buildUrl(id));
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

  public PlaintiffLienSubrogations(): LienSubrogationCollectionService<ClientType>;
  public PlaintiffLienSubrogations(
    id: LienSubrogationId
  ): LienSubrogationService<ClientType>;
  public PlaintiffLienSubrogations(id?: LienSubrogationId | undefined) {
    const fieldName = "PlaintiffLienSubrogations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LienSubrogationCollectionService(client, path, fieldName)
      : new LienSubrogationService(
          client,
          path,
          new QLienSubrogationId(fieldName).buildUrl(id)
        );
  }

  public SubrogeeLienHolderLienSubrogations(): LienSubrogationCollectionService<ClientType>;
  public SubrogeeLienHolderLienSubrogations(
    id: LienSubrogationId
  ): LienSubrogationService<ClientType>;
  public SubrogeeLienHolderLienSubrogations(
    id?: LienSubrogationId | undefined
  ) {
    const fieldName = "SubrogeeLienHolderLienSubrogations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LienSubrogationCollectionService(client, path, fieldName)
      : new LienSubrogationService(
          client,
          path,
          new QLienSubrogationId(fieldName).buildUrl(id)
        );
  }

  public CourtLitigations(): LitigationCollectionService<ClientType>;
  public CourtLitigations(id: LitigationId): LitigationService<ClientType>;
  public CourtLitigations(id?: LitigationId | undefined) {
    const fieldName = "CourtLitigations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LitigationCollectionService(client, path, fieldName)
      : new LitigationService(
          client,
          path,
          new QLitigationId(fieldName).buildUrl(id)
        );
  }

  public JudgeLitigations(): LitigationCollectionService<ClientType>;
  public JudgeLitigations(id: LitigationId): LitigationService<ClientType>;
  public JudgeLitigations(id?: LitigationId | undefined) {
    const fieldName = "JudgeLitigations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LitigationCollectionService(client, path, fieldName)
      : new LitigationService(
          client,
          path,
          new QLitigationId(fieldName).buildUrl(id)
        );
  }

  public MedicalProvidersByCompany(): MedicalProviderCollectionService<ClientType>;
  public MedicalProvidersByCompany(
    id: MedicalProviderId
  ): MedicalProviderService<ClientType>;
  public MedicalProvidersByCompany(id?: MedicalProviderId | undefined) {
    const fieldName = "MedicalProvidersByCompany";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalProviderCollectionService(client, path, fieldName)
      : new MedicalProviderService(
          client,
          path,
          new QMedicalProviderId(fieldName).buildUrl(id)
        );
  }

  public MedicalProvidersByPlaintiff(): MedicalProviderCollectionService<ClientType>;
  public MedicalProvidersByPlaintiff(
    id: MedicalProviderId
  ): MedicalProviderService<ClientType>;
  public MedicalProvidersByPlaintiff(id?: MedicalProviderId | undefined) {
    const fieldName = "MedicalProvidersByPlaintiff";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalProviderCollectionService(client, path, fieldName)
      : new MedicalProviderService(
          client,
          path,
          new QMedicalProviderId(fieldName).buildUrl(id)
        );
  }

  public ChildParties(): PartyCollectionService<ClientType>;
  public ChildParties(id: PartyId): PartyService<ClientType>;
  public ChildParties(id?: PartyId | undefined) {
    const fieldName = "ChildParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyCollectionService(client, path, fieldName)
      : new PartyService(client, path, new QPartyId(fieldName).buildUrl(id));
  }

  public PartyAddresses(): PartyAddressCollectionService<ClientType>;
  public PartyAddresses(id: PartyAddressId): PartyAddressService<ClientType>;
  public PartyAddresses(id?: PartyAddressId | undefined) {
    const fieldName = "PartyAddresses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyAddressCollectionService(client, path, fieldName)
      : new PartyAddressService(
          client,
          path,
          new QPartyAddressId(fieldName).buildUrl(id)
        );
  }

  public ImportingUserRecords(): RecordCollectionService<ClientType>;
  public ImportingUserRecords(id: RecordId): RecordService<ClientType>;
  public ImportingUserRecords(id?: RecordId | undefined) {
    const fieldName = "ImportingUserRecords";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordCollectionService(client, path, fieldName)
      : new RecordService(client, path, new QRecordId(fieldName).buildUrl(id));
  }

  public PlaintiffRecords(): RecordCollectionService<ClientType>;
  public PlaintiffRecords(id: RecordId): RecordService<ClientType>;
  public PlaintiffRecords(id?: RecordId | undefined) {
    const fieldName = "PlaintiffRecords";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordCollectionService(client, path, fieldName)
      : new RecordService(client, path, new QRecordId(fieldName).buildUrl(id));
  }

  public ContactRecords(): RecordCollectionService<ClientType>;
  public ContactRecords(id: RecordId): RecordService<ClientType>;
  public ContactRecords(id?: RecordId | undefined) {
    const fieldName = "ContactRecords";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordCollectionService(client, path, fieldName)
      : new RecordService(client, path, new QRecordId(fieldName).buildUrl(id));
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

  public SettlementDocuments(): SettlementDocumentCollectionService<ClientType>;
  public SettlementDocuments(
    id: SettlementDocumentId
  ): SettlementDocumentService<ClientType>;
  public SettlementDocuments(id?: SettlementDocumentId | undefined) {
    const fieldName = "SettlementDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementDocumentCollectionService(client, path, fieldName)
      : new SettlementDocumentService(
          client,
          path,
          new QSettlementDocumentId(fieldName).buildUrl(id)
        );
  }

  public WitnessExhibitDocumentParties(): WitnessExhibitDocumentPartyCollectionService<ClientType>;
  public WitnessExhibitDocumentParties(
    id: WitnessExhibitDocumentPartyId
  ): WitnessExhibitDocumentPartyService<ClientType>;
  public WitnessExhibitDocumentParties(
    id?: WitnessExhibitDocumentPartyId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentPartyCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentPartyService(
          client,
          path,
          new QWitnessExhibitDocumentPartyId(fieldName).buildUrl(id)
        );
  }

  public CalendarEntriesByPlaintiff(): CalendarEntryCollectionService<ClientType>;
  public CalendarEntriesByPlaintiff(
    id: CalendarEntryId
  ): CalendarEntryService<ClientType>;
  public CalendarEntriesByPlaintiff(id?: CalendarEntryId | undefined) {
    const fieldName = "CalendarEntriesByPlaintiff";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CalendarEntryCollectionService(client, path, fieldName)
      : new CalendarEntryService(
          client,
          path,
          new QCalendarEntryId(fieldName).buildUrl(id)
        );
  }

  public CalendarEntryRecursByPlaintiff(): CalendarEntryRecurCollectionService<ClientType>;
  public CalendarEntryRecursByPlaintiff(
    id: CalendarEntryRecurId
  ): CalendarEntryRecurService<ClientType>;
  public CalendarEntryRecursByPlaintiff(id?: CalendarEntryRecurId | undefined) {
    const fieldName = "CalendarEntryRecursByPlaintiff";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CalendarEntryRecurCollectionService(client, path, fieldName)
      : new CalendarEntryRecurService(
          client,
          path,
          new QCalendarEntryRecurId(fieldName).buildUrl(id)
        );
  }

  public PartySummary(): PartySummaryService<ClientType> {
    if (!this._PartySummary) {
      const { client, path } = this.__base;
      this._PartySummary = new PartySummaryService(
        client,
        path,
        "PartySummary"
      );
    }

    return this._PartySummary;
  }

  public DefaultAttorney(): CasePacerUserService<ClientType> {
    if (!this._DefaultAttorney) {
      const { client, path } = this.__base;
      this._DefaultAttorney = new CasePacerUserService(
        client,
        path,
        "DefaultAttorney"
      );
    }

    return this._DefaultAttorney;
  }

  public DefaultParalegal(): CasePacerUserService<ClientType> {
    if (!this._DefaultParalegal) {
      const { client, path } = this.__base;
      this._DefaultParalegal = new CasePacerUserService(
        client,
        path,
        "DefaultParalegal"
      );
    }

    return this._DefaultParalegal;
  }

  public AdditionalEmailSenders(): AdditionalEmailSenderCollectionService<ClientType>;
  public AdditionalEmailSenders(
    id: AdditionalEmailSenderId
  ): AdditionalEmailSenderService<ClientType>;
  public AdditionalEmailSenders(id?: AdditionalEmailSenderId | undefined) {
    const fieldName = "AdditionalEmailSenders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AdditionalEmailSenderCollectionService(client, path, fieldName)
      : new AdditionalEmailSenderService(
          client,
          path,
          new QAdditionalEmailSenderId(fieldName).buildUrl(id)
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

  public ActivityLogTypes(): ActivityLogTypeCollectionService<ClientType>;
  public ActivityLogTypes(
    id: ActivityLogTypeId
  ): ActivityLogTypeService<ClientType>;
  public ActivityLogTypes(id?: ActivityLogTypeId | undefined) {
    const fieldName = "ActivityLogTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityLogTypeCollectionService(client, path, fieldName)
      : new ActivityLogTypeService(
          client,
          path,
          new QActivityLogTypeId(fieldName).buildUrl(id)
        );
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

  public AppointmentCustomTypes(): AppointmentCustomTypeCollectionService<ClientType>;
  public AppointmentCustomTypes(
    id: AppointmentCustomTypeId
  ): AppointmentCustomTypeService<ClientType>;
  public AppointmentCustomTypes(id?: AppointmentCustomTypeId | undefined) {
    const fieldName = "AppointmentCustomTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentCustomTypeCollectionService(client, path, fieldName)
      : new AppointmentCustomTypeService(
          client,
          path,
          new QAppointmentCustomTypeId(fieldName).buildUrl(id)
        );
  }

  public CaseMenuItems(): CaseMenuItemCollectionService<ClientType>;
  public CaseMenuItems(id: CaseMenuItemId): CaseMenuItemService<ClientType>;
  public CaseMenuItems(id?: CaseMenuItemId | undefined) {
    const fieldName = "CaseMenuItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CaseMenuItemCollectionService(client, path, fieldName)
      : new CaseMenuItemService(
          client,
          path,
          new QCaseMenuItemId(fieldName).buildUrl(id)
        );
  }

  public ClientForms(): ClientFormCollectionService<ClientType>;
  public ClientForms(id: ClientFormId): ClientFormService<ClientType>;
  public ClientForms(id?: ClientFormId | undefined) {
    const fieldName = "ClientForms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ClientFormCollectionService(client, path, fieldName)
      : new ClientFormService(
          client,
          path,
          new QClientFormId(fieldName).buildUrl(id)
        );
  }

  public CPDirectBlogs(): CPDirectBlogCollectionService<ClientType>;
  public CPDirectBlogs(id: CPDirectBlogId): CPDirectBlogService<ClientType>;
  public CPDirectBlogs(id?: CPDirectBlogId | undefined) {
    const fieldName = "CPDirectBlogs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectBlogCollectionService(client, path, fieldName)
      : new CPDirectBlogService(
          client,
          path,
          new QCPDirectBlogId(fieldName).buildUrl(id)
        );
  }

  public CPDirectSettings(): CPDirectSettingCollectionService<ClientType>;
  public CPDirectSettings(
    id: CPDirectSettingId
  ): CPDirectSettingService<ClientType>;
  public CPDirectSettings(id?: CPDirectSettingId | undefined) {
    const fieldName = "CPDirectSettings";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectSettingCollectionService(client, path, fieldName)
      : new CPDirectSettingService(
          client,
          path,
          new QCPDirectSettingId(fieldName).buildUrl(id)
        );
  }

  public DocumentTemplates(): DocumentTemplateCollectionService<ClientType>;
  public DocumentTemplates(
    id: DocumentTemplateId
  ): DocumentTemplateService<ClientType>;
  public DocumentTemplates(id?: DocumentTemplateId | undefined) {
    const fieldName = "DocumentTemplates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentTemplateCollectionService(client, path, fieldName)
      : new DocumentTemplateService(
          client,
          path,
          new QDocumentTemplateId(fieldName).buildUrl(id)
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

  public ExternalImportKeys(): ExternalImportKeyCollectionService<ClientType>;
  public ExternalImportKeys(
    id: ExternalImportKeyId
  ): ExternalImportKeyService<ClientType>;
  public ExternalImportKeys(id?: ExternalImportKeyId | undefined) {
    const fieldName = "ExternalImportKeys";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ExternalImportKeyCollectionService(client, path, fieldName)
      : new ExternalImportKeyService(
          client,
          path,
          new QExternalImportKeyId(fieldName).buildUrl(id)
        );
  }

  public RecordSubtypes(): RecordSubtypeCollectionService<ClientType>;
  public RecordSubtypes(id: RecordSubtypeId): RecordSubtypeService<ClientType>;
  public RecordSubtypes(id?: RecordSubtypeId | undefined) {
    const fieldName = "RecordSubtypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordSubtypeCollectionService(client, path, fieldName)
      : new RecordSubtypeService(
          client,
          path,
          new QRecordSubtypeId(fieldName).buildUrl(id)
        );
  }

  public FirmAbbrs(): FirmAbbrCollectionService<ClientType>;
  public FirmAbbrs(id: FirmAbbrId): FirmAbbrService<ClientType>;
  public FirmAbbrs(id?: FirmAbbrId | undefined) {
    const fieldName = "FirmAbbrs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new FirmAbbrCollectionService(client, path, fieldName)
      : new FirmAbbrService(
          client,
          path,
          new QFirmAbbrId(fieldName).buildUrl(id)
        );
  }

  public FirmCustomFields(): FirmCustomFieldCollectionService<ClientType>;
  public FirmCustomFields(
    id: FirmCustomFieldId
  ): FirmCustomFieldService<ClientType>;
  public FirmCustomFields(id?: FirmCustomFieldId | undefined) {
    const fieldName = "FirmCustomFields";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new FirmCustomFieldCollectionService(client, path, fieldName)
      : new FirmCustomFieldService(
          client,
          path,
          new QFirmCustomFieldId(fieldName).buildUrl(id)
        );
  }

  public SecurityUserGroups(): SecurityUserGroupCollectionService<ClientType>;
  public SecurityUserGroups(
    id: SecurityUserGroupId
  ): SecurityUserGroupService<ClientType>;
  public SecurityUserGroups(id?: SecurityUserGroupId | undefined) {
    const fieldName = "SecurityUserGroups";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityUserGroupCollectionService(client, path, fieldName)
      : new SecurityUserGroupService(
          client,
          path,
          new QSecurityUserGroupId(fieldName).buildUrl(id)
        );
  }

  public IntakeClientFirms(): IntakeClientFirmCollectionService<ClientType>;
  public IntakeClientFirms(
    id: IntakeClientFirmId
  ): IntakeClientFirmService<ClientType>;
  public IntakeClientFirms(id?: IntakeClientFirmId | undefined) {
    const fieldName = "IntakeClientFirms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntakeClientFirmCollectionService(client, path, fieldName)
      : new IntakeClientFirmService(
          client,
          path,
          new QIntakeClientFirmId(fieldName).buildUrl(id)
        );
  }

  public IntangibleDamages(): IntangibleDamageCollectionService<ClientType>;
  public IntangibleDamages(
    id: IntangibleDamageId
  ): IntangibleDamageService<ClientType>;
  public IntangibleDamages(id?: IntangibleDamageId | undefined) {
    const fieldName = "IntangibleDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntangibleDamageCollectionService(client, path, fieldName)
      : new IntangibleDamageService(
          client,
          path,
          new QIntangibleDamageId(fieldName).buildUrl(id)
        );
  }

  public Laws(): LawCollectionService<ClientType>;
  public Laws(id: LawId): LawService<ClientType>;
  public Laws(id?: LawId | undefined) {
    const fieldName = "Laws";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawCollectionService(client, path, fieldName)
      : new LawService(client, path, new QLawId(fieldName).buildUrl(id));
  }

  public Lawsuits(): LawsuitCollectionService<ClientType>;
  public Lawsuits(id: LawsuitId): LawsuitService<ClientType>;
  public Lawsuits(id?: LawsuitId | undefined) {
    const fieldName = "Lawsuits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitCollectionService(client, path, fieldName)
      : new LawsuitService(
          client,
          path,
          new QLawsuitId(fieldName).buildUrl(id)
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

  public LawsuitTypes(): LawsuitTypeCollectionService<ClientType>;
  public LawsuitTypes(id: LawsuitTypeId): LawsuitTypeService<ClientType>;
  public LawsuitTypes(id?: LawsuitTypeId | undefined) {
    const fieldName = "LawsuitTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeCollectionService(client, path, fieldName)
      : new LawsuitTypeService(
          client,
          path,
          new QLawsuitTypeId(fieldName).buildUrl(id)
        );
  }

  public Parties(): PartyCollectionService<ClientType>;
  public Parties(id: PartyId): PartyService<ClientType>;
  public Parties(id?: PartyId | undefined) {
    const fieldName = "Parties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyCollectionService(client, path, fieldName)
      : new PartyService(client, path, new QPartyId(fieldName).buildUrl(id));
  }

  public PaymentInfo(): PaymentInfoService<ClientType> {
    if (!this._PaymentInfo) {
      const { client, path } = this.__base;
      this._PaymentInfo = new PaymentInfoService(client, path, "PaymentInfo");
    }

    return this._PaymentInfo;
  }

  public PIPBenefitsTypes(): PIPBenefitsTypeCollectionService<ClientType>;
  public PIPBenefitsTypes(
    id: PIPBenefitsTypeId
  ): PIPBenefitsTypeService<ClientType>;
  public PIPBenefitsTypes(id?: PIPBenefitsTypeId | undefined) {
    const fieldName = "PIPBenefitsTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PIPBenefitsTypeCollectionService(client, path, fieldName)
      : new PIPBenefitsTypeService(
          client,
          path,
          new QPIPBenefitsTypeId(fieldName).buildUrl(id)
        );
  }

  public QuickBooksBankAccounts(): QuickBooksBankAccountCollectionService<ClientType>;
  public QuickBooksBankAccounts(
    id: QuickBooksBankAccountId
  ): QuickBooksBankAccountService<ClientType>;
  public QuickBooksBankAccounts(id?: QuickBooksBankAccountId | undefined) {
    const fieldName = "QuickBooksBankAccounts";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new QuickBooksBankAccountCollectionService(client, path, fieldName)
      : new QuickBooksBankAccountService(
          client,
          path,
          new QQuickBooksBankAccountId(fieldName).buildUrl(id)
        );
  }

  public QuickBooksExpenseAccounts(): QuickBooksExpenseAccountCollectionService<ClientType>;
  public QuickBooksExpenseAccounts(
    id: QuickBooksExpenseAccountId
  ): QuickBooksExpenseAccountService<ClientType>;
  public QuickBooksExpenseAccounts(
    id?: QuickBooksExpenseAccountId | undefined
  ) {
    const fieldName = "QuickBooksExpenseAccounts";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new QuickBooksExpenseAccountCollectionService(client, path, fieldName)
      : new QuickBooksExpenseAccountService(
          client,
          path,
          new QQuickBooksExpenseAccountId(fieldName).buildUrl(id)
        );
  }

  public QuickBooksLogs(): QuickBooksLogCollectionService<ClientType>;
  public QuickBooksLogs(id: QuickBooksLogId): QuickBooksLogService<ClientType>;
  public QuickBooksLogs(id?: QuickBooksLogId | undefined) {
    const fieldName = "QuickBooksLogs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new QuickBooksLogCollectionService(client, path, fieldName)
      : new QuickBooksLogService(
          client,
          path,
          new QQuickBooksLogId(fieldName).buildUrl(id)
        );
  }

  public QuickBooksSettings(): QuickBooksSettingCollectionService<ClientType>;
  public QuickBooksSettings(
    id: QuickBooksSettingId
  ): QuickBooksSettingService<ClientType>;
  public QuickBooksSettings(id?: QuickBooksSettingId | undefined) {
    const fieldName = "QuickBooksSettings";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new QuickBooksSettingCollectionService(client, path, fieldName)
      : new QuickBooksSettingService(
          client,
          path,
          new QQuickBooksSettingId(fieldName).buildUrl(id)
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

  public ReportFirms(): ReportFirmCollectionService<ClientType>;
  public ReportFirms(id: ReportFirmId): ReportFirmService<ClientType>;
  public ReportFirms(id?: ReportFirmId | undefined) {
    const fieldName = "ReportFirms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ReportFirmCollectionService(client, path, fieldName)
      : new ReportFirmService(
          client,
          path,
          new QReportFirmId(fieldName).buildUrl(id)
        );
  }

  public RoleTemplates(): RoleTemplateCollectionService<ClientType>;
  public RoleTemplates(id: RoleTemplateId): RoleTemplateService<ClientType>;
  public RoleTemplates(id?: RoleTemplateId | undefined) {
    const fieldName = "RoleTemplates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RoleTemplateCollectionService(client, path, fieldName)
      : new RoleTemplateService(
          client,
          path,
          new QRoleTemplateId(fieldName).buildUrl(id)
        );
  }

  public StandardExhibits(): StandardExhibitCollectionService<ClientType>;
  public StandardExhibits(
    id: StandardExhibitId
  ): StandardExhibitService<ClientType>;
  public StandardExhibits(id?: StandardExhibitId | undefined) {
    const fieldName = "StandardExhibits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new StandardExhibitCollectionService(client, path, fieldName)
      : new StandardExhibitService(
          client,
          path,
          new QStandardExhibitId(fieldName).buildUrl(id)
        );
  }

  public StandardWitnesses(): StandardWitnessCollectionService<ClientType>;
  public StandardWitnesses(
    id: StandardWitnessId
  ): StandardWitnessService<ClientType>;
  public StandardWitnesses(id?: StandardWitnessId | undefined) {
    const fieldName = "StandardWitnesses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new StandardWitnessCollectionService(client, path, fieldName)
      : new StandardWitnessService(
          client,
          path,
          new QStandardWitnessId(fieldName).buildUrl(id)
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

  public TicklerTemplates(): TicklerTemplateCollectionService<ClientType>;
  public TicklerTemplates(
    id: TicklerTemplateId
  ): TicklerTemplateService<ClientType>;
  public TicklerTemplates(id?: TicklerTemplateId | undefined) {
    const fieldName = "TicklerTemplates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerTemplateCollectionService(client, path, fieldName)
      : new TicklerTemplateService(
          client,
          path,
          new QTicklerTemplateId(fieldName).buildUrl(id)
        );
  }

  public TrialExhibits(): TrialExhibitCollectionService<ClientType>;
  public TrialExhibits(id: TrialExhibitId): TrialExhibitService<ClientType>;
  public TrialExhibits(id?: TrialExhibitId | undefined) {
    const fieldName = "TrialExhibits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TrialExhibitCollectionService(client, path, fieldName)
      : new TrialExhibitService(
          client,
          path,
          new QTrialExhibitId(fieldName).buildUrl(id)
        );
  }

  public TrialItems(): TrialItemCollectionService<ClientType>;
  public TrialItems(id: TrialItemId): TrialItemService<ClientType>;
  public TrialItems(id?: TrialItemId | undefined) {
    const fieldName = "TrialItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TrialItemCollectionService(client, path, fieldName)
      : new TrialItemService(
          client,
          path,
          new QTrialItemId(fieldName).buildUrl(id)
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

  public SecurityRuleSummaries(): SecurityRuleSummaryCollectionService<ClientType>;
  public SecurityRuleSummaries(
    id: SecurityRuleSummaryId
  ): SecurityRuleSummaryService<ClientType>;
  public SecurityRuleSummaries(id?: SecurityRuleSummaryId | undefined) {
    const fieldName = "SecurityRuleSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleSummaryCollectionService(client, path, fieldName)
      : new SecurityRuleSummaryService(
          client,
          path,
          new QSecurityRuleSummaryId(fieldName).buildUrl(id)
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

  public AuthorizedEmailSenders(): AuthorizedEmailSenderCollectionService<ClientType>;
  public AuthorizedEmailSenders(
    id: AuthorizedEmailSenderId
  ): AuthorizedEmailSenderService<ClientType>;
  public AuthorizedEmailSenders(id?: AuthorizedEmailSenderId | undefined) {
    const fieldName = "AuthorizedEmailSenders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AuthorizedEmailSenderCollectionService(client, path, fieldName)
      : new AuthorizedEmailSenderService(
          client,
          path,
          new QAuthorizedEmailSenderId(fieldName).buildUrl(id)
        );
  }
}

export class FirmCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<ClientType, Firm, EditableFirm, QFirm, PartyId> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qFirm, new QPartyId(name));
  }
}
