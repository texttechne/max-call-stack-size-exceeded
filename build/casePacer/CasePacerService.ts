import { ODataHttpClient } from "@odata2ts/http-client-api";
import { ODataService } from "@odata2ts/odata-service";
import { ActivityLogId } from "./emr_case_pacer_data_entities/activity_log/ActivityLog";
import { QActivityLogId } from "./emr_case_pacer_data_entities/activity_log/QActivityLog";
import {
  ActivityLogService,
  ActivityLogCollectionService,
} from "./emr_case_pacer_data_entities/activity_log/ActivityLogService";
import { ActivityLogTypeId } from "./emr_case_pacer_data_entities/activity_log_type/ActivityLogType";
import { QActivityLogTypeId } from "./emr_case_pacer_data_entities/activity_log_type/QActivityLogType";
import {
  ActivityLogTypeService,
  ActivityLogTypeCollectionService,
} from "./emr_case_pacer_data_entities/activity_log_type/ActivityLogTypeService";
import { AddressTypeId } from "./emr_case_pacer_data_entities/address_type/AddressType";
import { QAddressTypeId } from "./emr_case_pacer_data_entities/address_type/QAddressType";
import {
  AddressTypeService,
  AddressTypeCollectionService,
} from "./emr_case_pacer_data_entities/address_type/AddressTypeService";
import { ADRId } from "./emr_case_pacer_data_entities/adr/ADR";
import { QADRId } from "./emr_case_pacer_data_entities/adr/QADR";
import {
  ADRService,
  ADRCollectionService,
} from "./emr_case_pacer_data_entities/adr/ADRService";
import { ADRTypeId } from "./emr_case_pacer_data_entities/adr_type/ADRType";
import { QADRTypeId } from "./emr_case_pacer_data_entities/adr_type/QADRType";
import {
  ADRTypeService,
  ADRTypeCollectionService,
} from "./emr_case_pacer_data_entities/adr_type/ADRTypeService";
import { AlertId } from "./emr_case_pacer_data_entities/alert/Alert";
import { QAlertId } from "./emr_case_pacer_data_entities/alert/QAlert";
import {
  AlertService,
  AlertCollectionService,
} from "./emr_case_pacer_data_entities/alert/AlertService";
import { AppointmentId } from "./emr_case_pacer_data_entities/appointment/Appointment";
import { QAppointmentId } from "./emr_case_pacer_data_entities/appointment/QAppointment";
import {
  AppointmentService,
  AppointmentCollectionService,
} from "./emr_case_pacer_data_entities/appointment/AppointmentService";
import { AppointmentEventSubTypeId } from "./emr_case_pacer_data_entities/appointment_event_sub_type/AppointmentEventSubType";
import { QAppointmentEventSubTypeId } from "./emr_case_pacer_data_entities/appointment_event_sub_type/QAppointmentEventSubType";
import {
  AppointmentEventSubTypeService,
  AppointmentEventSubTypeCollectionService,
} from "./emr_case_pacer_data_entities/appointment_event_sub_type/AppointmentEventSubTypeService";
import { AppointmentEventTypeId } from "./emr_case_pacer_data_entities/appointment_event_type/AppointmentEventType";
import { QAppointmentEventTypeId } from "./emr_case_pacer_data_entities/appointment_event_type/QAppointmentEventType";
import {
  AppointmentEventTypeService,
  AppointmentEventTypeCollectionService,
} from "./emr_case_pacer_data_entities/appointment_event_type/AppointmentEventTypeService";
import { AppointmentPartyId } from "./emr_case_pacer_data_entities/appointment_party/AppointmentParty";
import { QAppointmentPartyId } from "./emr_case_pacer_data_entities/appointment_party/QAppointmentParty";
import {
  AppointmentPartyService,
  AppointmentPartyCollectionService,
} from "./emr_case_pacer_data_entities/appointment_party/AppointmentPartyService";
import { AppointmentPartyStatusId } from "./emr_case_pacer_data_entities/appointment_party_status/AppointmentPartyStatus";
import { QAppointmentPartyStatusId } from "./emr_case_pacer_data_entities/appointment_party_status/QAppointmentPartyStatus";
import {
  AppointmentPartyStatusService,
  AppointmentPartyStatusCollectionService,
} from "./emr_case_pacer_data_entities/appointment_party_status/AppointmentPartyStatusService";
import { AppointmentTypeId } from "./emr_case_pacer_data_entities/appointment_type/AppointmentType";
import { QAppointmentTypeId } from "./emr_case_pacer_data_entities/appointment_type/QAppointmentType";
import {
  AppointmentTypeService,
  AppointmentTypeCollectionService,
} from "./emr_case_pacer_data_entities/appointment_type/AppointmentTypeService";
import { CalendarEntryId } from "./emr_case_pacer_data_entities/calendar_entry/CalendarEntry";
import { QCalendarEntryId } from "./emr_case_pacer_data_entities/calendar_entry/QCalendarEntry";
import {
  CalendarEntryService,
  CalendarEntryCollectionService,
} from "./emr_case_pacer_data_entities/calendar_entry/CalendarEntryService";
import { PartyId } from "./emr_case_pacer_data_entities/party/Party";
import { QPartyId } from "./emr_case_pacer_data_entities/party/QParty";
import {
  CasePacerUserService,
  CasePacerUserCollectionService,
} from "./emr_case_pacer_data_entities/case_pacer_user/CasePacerUserService";
import { ClientFormId } from "./emr_case_pacer_data_entities/client_form/ClientForm";
import { QClientFormId } from "./emr_case_pacer_data_entities/client_form/QClientForm";
import {
  ClientFormService,
  ClientFormCollectionService,
} from "./emr_case_pacer_data_entities/client_form/ClientFormService";
import {
  CompanyService,
  CompanyCollectionService,
} from "./emr_case_pacer_data_entities/company/CompanyService";
import { ContactInfoId } from "./emr_case_pacer_data_entities/contact_info/ContactInfo";
import { QContactInfoId } from "./emr_case_pacer_data_entities/contact_info/QContactInfo";
import {
  ContactInfoService,
  ContactInfoCollectionService,
} from "./emr_case_pacer_data_entities/contact_info/ContactInfoService";
import { ContactInfoTypeId } from "./emr_case_pacer_data_entities/contact_info_type/ContactInfoType";
import { QContactInfoTypeId } from "./emr_case_pacer_data_entities/contact_info_type/QContactInfoType";
import {
  ContactInfoTypeService,
  ContactInfoTypeCollectionService,
} from "./emr_case_pacer_data_entities/contact_info_type/ContactInfoTypeService";
import { ContactTypeId } from "./emr_case_pacer_data_entities/contact_type/ContactType";
import { QContactTypeId } from "./emr_case_pacer_data_entities/contact_type/QContactType";
import {
  ContactTypeService,
  ContactTypeCollectionService,
} from "./emr_case_pacer_data_entities/contact_type/ContactTypeService";
import { CPDirectBlogCategoryId } from "./emr_case_pacer_data_entities/cp_direct_blog_category/CPDirectBlogCategory";
import { QCPDirectBlogCategoryId } from "./emr_case_pacer_data_entities/cp_direct_blog_category/QCPDirectBlogCategory";
import {
  CPDirectBlogCategoryService,
  CPDirectBlogCategoryCollectionService,
} from "./emr_case_pacer_data_entities/cp_direct_blog_category/CPDirectBlogCategoryService";
import { CPDirectBlogId } from "./emr_case_pacer_data_entities/cp_direct_blog/CPDirectBlog";
import { QCPDirectBlogId } from "./emr_case_pacer_data_entities/cp_direct_blog/QCPDirectBlog";
import {
  CPDirectBlogService,
  CPDirectBlogCollectionService,
} from "./emr_case_pacer_data_entities/cp_direct_blog/CPDirectBlogService";
import { CPDirectBlogImageId } from "./emr_case_pacer_data_entities/cp_direct_blog_image/CPDirectBlogImage";
import { QCPDirectBlogImageId } from "./emr_case_pacer_data_entities/cp_direct_blog_image/QCPDirectBlogImage";
import {
  CPDirectBlogImageService,
  CPDirectBlogImageCollectionService,
} from "./emr_case_pacer_data_entities/cp_direct_blog_image/CPDirectBlogImageService";
import { CPDirectCaseProgressId } from "./emr_case_pacer_data_entities/cp_direct_case_progress/CPDirectCaseProgress";
import { QCPDirectCaseProgressId } from "./emr_case_pacer_data_entities/cp_direct_case_progress/QCPDirectCaseProgress";
import {
  CPDirectCaseProgressService,
  CPDirectCaseProgressCollectionService,
} from "./emr_case_pacer_data_entities/cp_direct_case_progress/CPDirectCaseProgressService";
import { CPDirectMessageId } from "./emr_case_pacer_data_entities/cp_direct_message/CPDirectMessage";
import { QCPDirectMessageId } from "./emr_case_pacer_data_entities/cp_direct_message/QCPDirectMessage";
import {
  CPDirectMessageService,
  CPDirectMessageCollectionService,
} from "./emr_case_pacer_data_entities/cp_direct_message/CPDirectMessageService";
import { CPDirectSettingId } from "./emr_case_pacer_data_entities/cp_direct_setting/CPDirectSetting";
import { QCPDirectSettingId } from "./emr_case_pacer_data_entities/cp_direct_setting/QCPDirectSetting";
import {
  CPDirectSettingService,
  CPDirectSettingCollectionService,
} from "./emr_case_pacer_data_entities/cp_direct_setting/CPDirectSettingService";
import { CPDirectSettingLocationId } from "./emr_case_pacer_data_entities/cp_direct_setting_location/CPDirectSettingLocation";
import { QCPDirectSettingLocationId } from "./emr_case_pacer_data_entities/cp_direct_setting_location/QCPDirectSettingLocation";
import {
  CPDirectSettingLocationService,
  CPDirectSettingLocationCollectionService,
} from "./emr_case_pacer_data_entities/cp_direct_setting_location/CPDirectSettingLocationService";
import { CustomFieldId } from "./emr_case_pacer_data_entities/custom_field/CustomField";
import { QCustomFieldId } from "./emr_case_pacer_data_entities/custom_field/QCustomField";
import {
  CustomFieldService,
  CustomFieldCollectionService,
} from "./emr_case_pacer_data_entities/custom_field/CustomFieldService";
import { CustomFieldTypeId } from "./emr_case_pacer_data_entities/custom_field_type/CustomFieldType";
import { QCustomFieldTypeId } from "./emr_case_pacer_data_entities/custom_field_type/QCustomFieldType";
import {
  CustomFieldTypeService,
  CustomFieldTypeCollectionService,
} from "./emr_case_pacer_data_entities/custom_field_type/CustomFieldTypeService";
import { CustomFieldValueId } from "./emr_case_pacer_data_entities/custom_field_value/CustomFieldValue";
import { QCustomFieldValueId } from "./emr_case_pacer_data_entities/custom_field_value/QCustomFieldValue";
import {
  CustomFieldValueService,
  CustomFieldValueCollectionService,
} from "./emr_case_pacer_data_entities/custom_field_value/CustomFieldValueService";
import { DashboardAchievementId } from "./emr_case_pacer_data_entities/dashboard_achievement/DashboardAchievement";
import { QDashboardAchievementId } from "./emr_case_pacer_data_entities/dashboard_achievement/QDashboardAchievement";
import {
  DashboardAchievementService,
  DashboardAchievementCollectionService,
} from "./emr_case_pacer_data_entities/dashboard_achievement/DashboardAchievementService";
import { DepositionId } from "./emr_case_pacer_data_entities/deposition/Deposition";
import { QDepositionId } from "./emr_case_pacer_data_entities/deposition/QDeposition";
import {
  DepositionService,
  DepositionCollectionService,
} from "./emr_case_pacer_data_entities/deposition/DepositionService";
import {
  FirmService,
  FirmCollectionService,
} from "./emr_case_pacer_data_entities/firm/FirmService";
import { FirmCustomFieldId } from "./emr_case_pacer_data_entities/firm_custom_field/FirmCustomField";
import { QFirmCustomFieldId } from "./emr_case_pacer_data_entities/firm_custom_field/QFirmCustomField";
import {
  FirmCustomFieldService,
  FirmCustomFieldCollectionService,
} from "./emr_case_pacer_data_entities/firm_custom_field/FirmCustomFieldService";
import { IntakeClientLoginSummaryId } from "./emr_case_pacer_data_entities/intake_client_login_summary/IntakeClientLoginSummary";
import { QIntakeClientLoginSummaryId } from "./emr_case_pacer_data_entities/intake_client_login_summary/QIntakeClientLoginSummary";
import {
  IntakeClientLoginSummaryService,
  IntakeClientLoginSummaryCollectionService,
} from "./emr_case_pacer_data_entities/intake_client_login_summary/IntakeClientLoginSummaryService";
import { LawsuitId } from "./emr_case_pacer_data_entities/lawsuit/Lawsuit";
import { QLawsuitId } from "./emr_case_pacer_data_entities/lawsuit/QLawsuit";
import {
  LawsuitService,
  LawsuitCollectionService,
} from "./emr_case_pacer_data_entities/lawsuit/LawsuitService";
import { LawsuitPartyId } from "./emr_case_pacer_data_entities/lawsuit_party/LawsuitParty";
import { QLawsuitPartyId } from "./emr_case_pacer_data_entities/lawsuit_party/QLawsuitParty";
import {
  LawsuitPartyService,
  LawsuitPartyCollectionService,
} from "./emr_case_pacer_data_entities/lawsuit_party/LawsuitPartyService";
import { LawsuitPartyTypeId } from "./emr_case_pacer_data_entities/lawsuit_party_type/LawsuitPartyType";
import { QLawsuitPartyTypeId } from "./emr_case_pacer_data_entities/lawsuit_party_type/QLawsuitPartyType";
import {
  LawsuitPartyTypeService,
  LawsuitPartyTypeCollectionService,
} from "./emr_case_pacer_data_entities/lawsuit_party_type/LawsuitPartyTypeService";
import { LawsuitPhaseDateId } from "./emr_case_pacer_data_entities/lawsuit_phase_date/LawsuitPhaseDate";
import { QLawsuitPhaseDateId } from "./emr_case_pacer_data_entities/lawsuit_phase_date/QLawsuitPhaseDate";
import {
  LawsuitPhaseDateService,
  LawsuitPhaseDateCollectionService,
} from "./emr_case_pacer_data_entities/lawsuit_phase_date/LawsuitPhaseDateService";
import { LawsuitPhaseTypeId } from "./emr_case_pacer_data_entities/lawsuit_phase_type/LawsuitPhaseType";
import { QLawsuitPhaseTypeId } from "./emr_case_pacer_data_entities/lawsuit_phase_type/QLawsuitPhaseType";
import {
  LawsuitPhaseTypeService,
  LawsuitPhaseTypeCollectionService,
} from "./emr_case_pacer_data_entities/lawsuit_phase_type/LawsuitPhaseTypeService";
import { LawsuitTypeId } from "./emr_case_pacer_data_entities/lawsuit_type/LawsuitType";
import { QLawsuitTypeId } from "./emr_case_pacer_data_entities/lawsuit_type/QLawsuitType";
import {
  LawsuitTypeService,
  LawsuitTypeCollectionService,
} from "./emr_case_pacer_data_entities/lawsuit_type/LawsuitTypeService";
import {
  PartyService,
  PartyCollectionService,
} from "./emr_case_pacer_data_entities/party/PartyService";
import { PartySummaryId } from "./emr_case_pacer_data_entities/party_summary/PartySummary";
import { QPartySummaryId } from "./emr_case_pacer_data_entities/party_summary/QPartySummary";
import {
  PartySummaryService,
  PartySummaryCollectionService,
} from "./emr_case_pacer_data_entities/party_summary/PartySummaryService";
import { PartyTypeId } from "./emr_case_pacer_data_entities/party_type/PartyType";
import { QPartyTypeId } from "./emr_case_pacer_data_entities/party_type/QPartyType";
import {
  PartyTypeService,
  PartyTypeCollectionService,
} from "./emr_case_pacer_data_entities/party_type/PartyTypeService";
import {
  PersonService,
  PersonCollectionService,
} from "./emr_case_pacer_data_entities/person/PersonService";
import { RecordId } from "./emr_case_pacer_data_entities/record/Record";
import { QRecordId } from "./emr_case_pacer_data_entities/record/QRecord";
import {
  RecordService,
  RecordCollectionService,
} from "./emr_case_pacer_data_entities/record/RecordService";
import { RecordFileId } from "./emr_case_pacer_data_entities/record_file/RecordFile";
import { QRecordFileId } from "./emr_case_pacer_data_entities/record_file/QRecordFile";
import {
  RecordFileService,
  RecordFileCollectionService,
} from "./emr_case_pacer_data_entities/record_file/RecordFileService";
import { RecordFolderId } from "./emr_case_pacer_data_entities/record_folder/RecordFolder";
import { QRecordFolderId } from "./emr_case_pacer_data_entities/record_folder/QRecordFolder";
import {
  RecordFolderService,
  RecordFolderCollectionService,
} from "./emr_case_pacer_data_entities/record_folder/RecordFolderService";
import { SimpleLawsuitSummaryId } from "./emr_case_pacer_data_entities/simple_lawsuit_summary/SimpleLawsuitSummary";
import { QSimpleLawsuitSummaryId } from "./emr_case_pacer_data_entities/simple_lawsuit_summary/QSimpleLawsuitSummary";
import {
  SimpleLawsuitSummaryService,
  SimpleLawsuitSummaryCollectionService,
} from "./emr_case_pacer_data_entities/simple_lawsuit_summary/SimpleLawsuitSummaryService";
import { SubPhaseTypeId } from "./emr_case_pacer_data_entities/sub_phase_type/SubPhaseType";
import { QSubPhaseTypeId } from "./emr_case_pacer_data_entities/sub_phase_type/QSubPhaseType";
import {
  SubPhaseTypeService,
  SubPhaseTypeCollectionService,
} from "./emr_case_pacer_data_entities/sub_phase_type/SubPhaseTypeService";
import { TicklerId } from "./emr_case_pacer_data_entities/tickler/Tickler";
import { QTicklerId } from "./emr_case_pacer_data_entities/tickler/QTickler";
import {
  TicklerService,
  TicklerCollectionService,
} from "./emr_case_pacer_data_entities/tickler/TicklerService";

export class CasePacerService<
  ClientType extends ODataHttpClient
> extends ODataService<ClientType> {
  public ActivityLog(): ActivityLogCollectionService<ClientType>;
  public ActivityLog(id: ActivityLogId): ActivityLogService<ClientType>;
  public ActivityLog(id?: ActivityLogId | undefined) {
    const fieldName = "ActivityLog";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityLogCollectionService(client, path, fieldName)
      : new ActivityLogService(
          client,
          path,
          new QActivityLogId(fieldName).buildUrl(id)
        );
  }

  public ActivityLogType(): ActivityLogTypeCollectionService<ClientType>;
  public ActivityLogType(
    id: ActivityLogTypeId
  ): ActivityLogTypeService<ClientType>;
  public ActivityLogType(id?: ActivityLogTypeId | undefined) {
    const fieldName = "ActivityLogType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityLogTypeCollectionService(client, path, fieldName)
      : new ActivityLogTypeService(
          client,
          path,
          new QActivityLogTypeId(fieldName).buildUrl(id)
        );
  }

  public AddressType(): AddressTypeCollectionService<ClientType>;
  public AddressType(id: AddressTypeId): AddressTypeService<ClientType>;
  public AddressType(id?: AddressTypeId | undefined) {
    const fieldName = "AddressType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AddressTypeCollectionService(client, path, fieldName)
      : new AddressTypeService(
          client,
          path,
          new QAddressTypeId(fieldName).buildUrl(id)
        );
  }

  public ADR(): ADRCollectionService<ClientType>;
  public ADR(id: ADRId): ADRService<ClientType>;
  public ADR(id?: ADRId | undefined) {
    const fieldName = "ADR";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ADRCollectionService(client, path, fieldName)
      : new ADRService(client, path, new QADRId(fieldName).buildUrl(id));
  }

  public ADRType(): ADRTypeCollectionService<ClientType>;
  public ADRType(id: ADRTypeId): ADRTypeService<ClientType>;
  public ADRType(id?: ADRTypeId | undefined) {
    const fieldName = "ADRType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ADRTypeCollectionService(client, path, fieldName)
      : new ADRTypeService(
          client,
          path,
          new QADRTypeId(fieldName).buildUrl(id)
        );
  }

  public Alert(): AlertCollectionService<ClientType>;
  public Alert(id: AlertId): AlertService<ClientType>;
  public Alert(id?: AlertId | undefined) {
    const fieldName = "Alert";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AlertCollectionService(client, path, fieldName)
      : new AlertService(client, path, new QAlertId(fieldName).buildUrl(id));
  }

  public Appointment(): AppointmentCollectionService<ClientType>;
  public Appointment(id: AppointmentId): AppointmentService<ClientType>;
  public Appointment(id?: AppointmentId | undefined) {
    const fieldName = "Appointment";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentCollectionService(client, path, fieldName)
      : new AppointmentService(
          client,
          path,
          new QAppointmentId(fieldName).buildUrl(id)
        );
  }

  public AppointmentEventSubType(): AppointmentEventSubTypeCollectionService<ClientType>;
  public AppointmentEventSubType(
    id: AppointmentEventSubTypeId
  ): AppointmentEventSubTypeService<ClientType>;
  public AppointmentEventSubType(id?: AppointmentEventSubTypeId | undefined) {
    const fieldName = "AppointmentEventSubType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentEventSubTypeCollectionService(client, path, fieldName)
      : new AppointmentEventSubTypeService(
          client,
          path,
          new QAppointmentEventSubTypeId(fieldName).buildUrl(id)
        );
  }

  public AppointmentEventType(): AppointmentEventTypeCollectionService<ClientType>;
  public AppointmentEventType(
    id: AppointmentEventTypeId
  ): AppointmentEventTypeService<ClientType>;
  public AppointmentEventType(id?: AppointmentEventTypeId | undefined) {
    const fieldName = "AppointmentEventType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentEventTypeCollectionService(client, path, fieldName)
      : new AppointmentEventTypeService(
          client,
          path,
          new QAppointmentEventTypeId(fieldName).buildUrl(id)
        );
  }

  public AppointmentParty(): AppointmentPartyCollectionService<ClientType>;
  public AppointmentParty(
    id: AppointmentPartyId
  ): AppointmentPartyService<ClientType>;
  public AppointmentParty(id?: AppointmentPartyId | undefined) {
    const fieldName = "AppointmentParty";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentPartyCollectionService(client, path, fieldName)
      : new AppointmentPartyService(
          client,
          path,
          new QAppointmentPartyId(fieldName).buildUrl(id)
        );
  }

  public AppointmentPartyStatus(): AppointmentPartyStatusCollectionService<ClientType>;
  public AppointmentPartyStatus(
    id: AppointmentPartyStatusId
  ): AppointmentPartyStatusService<ClientType>;
  public AppointmentPartyStatus(id?: AppointmentPartyStatusId | undefined) {
    const fieldName = "AppointmentPartyStatus";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentPartyStatusCollectionService(client, path, fieldName)
      : new AppointmentPartyStatusService(
          client,
          path,
          new QAppointmentPartyStatusId(fieldName).buildUrl(id)
        );
  }

  public AppointmentType(): AppointmentTypeCollectionService<ClientType>;
  public AppointmentType(
    id: AppointmentTypeId
  ): AppointmentTypeService<ClientType>;
  public AppointmentType(id?: AppointmentTypeId | undefined) {
    const fieldName = "AppointmentType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentTypeCollectionService(client, path, fieldName)
      : new AppointmentTypeService(
          client,
          path,
          new QAppointmentTypeId(fieldName).buildUrl(id)
        );
  }

  public CalendarEntry(): CalendarEntryCollectionService<ClientType>;
  public CalendarEntry(id: CalendarEntryId): CalendarEntryService<ClientType>;
  public CalendarEntry(id?: CalendarEntryId | undefined) {
    const fieldName = "CalendarEntry";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CalendarEntryCollectionService(client, path, fieldName)
      : new CalendarEntryService(
          client,
          path,
          new QCalendarEntryId(fieldName).buildUrl(id)
        );
  }

  public CasePacerUser(): CasePacerUserCollectionService<ClientType>;
  public CasePacerUser(id: PartyId): CasePacerUserService<ClientType>;
  public CasePacerUser(id?: PartyId | undefined) {
    const fieldName = "CasePacerUser";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CasePacerUserCollectionService(client, path, fieldName)
      : new CasePacerUserService(
          client,
          path,
          new QPartyId(fieldName).buildUrl(id)
        );
  }

  public PublicCasePacerUser(): CasePacerUserCollectionService<ClientType>;
  public PublicCasePacerUser(id: PartyId): CasePacerUserService<ClientType>;
  public PublicCasePacerUser(id?: PartyId | undefined) {
    const fieldName = "PublicCasePacerUser";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CasePacerUserCollectionService(client, path, fieldName)
      : new CasePacerUserService(
          client,
          path,
          new QPartyId(fieldName).buildUrl(id)
        );
  }

  public ClientForm(): ClientFormCollectionService<ClientType>;
  public ClientForm(id: ClientFormId): ClientFormService<ClientType>;
  public ClientForm(id?: ClientFormId | undefined) {
    const fieldName = "ClientForm";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ClientFormCollectionService(client, path, fieldName)
      : new ClientFormService(
          client,
          path,
          new QClientFormId(fieldName).buildUrl(id)
        );
  }

  public Company(): CompanyCollectionService<ClientType>;
  public Company(id: PartyId): CompanyService<ClientType>;
  public Company(id?: PartyId | undefined) {
    const fieldName = "Company";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CompanyCollectionService(client, path, fieldName)
      : new CompanyService(client, path, new QPartyId(fieldName).buildUrl(id));
  }

  public ContactInfo(): ContactInfoCollectionService<ClientType>;
  public ContactInfo(id: ContactInfoId): ContactInfoService<ClientType>;
  public ContactInfo(id?: ContactInfoId | undefined) {
    const fieldName = "ContactInfo";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ContactInfoCollectionService(client, path, fieldName)
      : new ContactInfoService(
          client,
          path,
          new QContactInfoId(fieldName).buildUrl(id)
        );
  }

  public ContactInfoType(): ContactInfoTypeCollectionService<ClientType>;
  public ContactInfoType(
    id: ContactInfoTypeId
  ): ContactInfoTypeService<ClientType>;
  public ContactInfoType(id?: ContactInfoTypeId | undefined) {
    const fieldName = "ContactInfoType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ContactInfoTypeCollectionService(client, path, fieldName)
      : new ContactInfoTypeService(
          client,
          path,
          new QContactInfoTypeId(fieldName).buildUrl(id)
        );
  }

  public ContactType(): ContactTypeCollectionService<ClientType>;
  public ContactType(id: ContactTypeId): ContactTypeService<ClientType>;
  public ContactType(id?: ContactTypeId | undefined) {
    const fieldName = "ContactType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ContactTypeCollectionService(client, path, fieldName)
      : new ContactTypeService(
          client,
          path,
          new QContactTypeId(fieldName).buildUrl(id)
        );
  }

  public CPDirectBlogCategory(): CPDirectBlogCategoryCollectionService<ClientType>;
  public CPDirectBlogCategory(
    id: CPDirectBlogCategoryId
  ): CPDirectBlogCategoryService<ClientType>;
  public CPDirectBlogCategory(id?: CPDirectBlogCategoryId | undefined) {
    const fieldName = "CPDirectBlogCategory";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectBlogCategoryCollectionService(client, path, fieldName)
      : new CPDirectBlogCategoryService(
          client,
          path,
          new QCPDirectBlogCategoryId(fieldName).buildUrl(id)
        );
  }

  public PublicCPDirectBlogCategory(): CPDirectBlogCategoryCollectionService<ClientType>;
  public PublicCPDirectBlogCategory(
    id: CPDirectBlogCategoryId
  ): CPDirectBlogCategoryService<ClientType>;
  public PublicCPDirectBlogCategory(id?: CPDirectBlogCategoryId | undefined) {
    const fieldName = "PublicCPDirectBlogCategory";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectBlogCategoryCollectionService(client, path, fieldName)
      : new CPDirectBlogCategoryService(
          client,
          path,
          new QCPDirectBlogCategoryId(fieldName).buildUrl(id)
        );
  }

  public CPDirectBlog(): CPDirectBlogCollectionService<ClientType>;
  public CPDirectBlog(id: CPDirectBlogId): CPDirectBlogService<ClientType>;
  public CPDirectBlog(id?: CPDirectBlogId | undefined) {
    const fieldName = "CPDirectBlog";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectBlogCollectionService(client, path, fieldName)
      : new CPDirectBlogService(
          client,
          path,
          new QCPDirectBlogId(fieldName).buildUrl(id)
        );
  }

  public PublicCPDirectBlog(): CPDirectBlogCollectionService<ClientType>;
  public PublicCPDirectBlog(
    id: CPDirectBlogId
  ): CPDirectBlogService<ClientType>;
  public PublicCPDirectBlog(id?: CPDirectBlogId | undefined) {
    const fieldName = "PublicCPDirectBlog";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectBlogCollectionService(client, path, fieldName)
      : new CPDirectBlogService(
          client,
          path,
          new QCPDirectBlogId(fieldName).buildUrl(id)
        );
  }

  public CPDirectBlogImage(): CPDirectBlogImageCollectionService<ClientType>;
  public CPDirectBlogImage(
    id: CPDirectBlogImageId
  ): CPDirectBlogImageService<ClientType>;
  public CPDirectBlogImage(id?: CPDirectBlogImageId | undefined) {
    const fieldName = "CPDirectBlogImage";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectBlogImageCollectionService(client, path, fieldName)
      : new CPDirectBlogImageService(
          client,
          path,
          new QCPDirectBlogImageId(fieldName).buildUrl(id)
        );
  }

  public CPDirectCaseProgress(): CPDirectCaseProgressCollectionService<ClientType>;
  public CPDirectCaseProgress(
    id: CPDirectCaseProgressId
  ): CPDirectCaseProgressService<ClientType>;
  public CPDirectCaseProgress(id?: CPDirectCaseProgressId | undefined) {
    const fieldName = "CPDirectCaseProgress";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectCaseProgressCollectionService(client, path, fieldName)
      : new CPDirectCaseProgressService(
          client,
          path,
          new QCPDirectCaseProgressId(fieldName).buildUrl(id)
        );
  }

  public CPDirectMessage(): CPDirectMessageCollectionService<ClientType>;
  public CPDirectMessage(
    id: CPDirectMessageId
  ): CPDirectMessageService<ClientType>;
  public CPDirectMessage(id?: CPDirectMessageId | undefined) {
    const fieldName = "CPDirectMessage";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectMessageCollectionService(client, path, fieldName)
      : new CPDirectMessageService(
          client,
          path,
          new QCPDirectMessageId(fieldName).buildUrl(id)
        );
  }

  public CPDirectSetting(): CPDirectSettingCollectionService<ClientType>;
  public CPDirectSetting(
    id: CPDirectSettingId
  ): CPDirectSettingService<ClientType>;
  public CPDirectSetting(id?: CPDirectSettingId | undefined) {
    const fieldName = "CPDirectSetting";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectSettingCollectionService(client, path, fieldName)
      : new CPDirectSettingService(
          client,
          path,
          new QCPDirectSettingId(fieldName).buildUrl(id)
        );
  }

  public PublicCPDirectSetting(): CPDirectSettingCollectionService<ClientType>;
  public PublicCPDirectSetting(
    id: CPDirectSettingId
  ): CPDirectSettingService<ClientType>;
  public PublicCPDirectSetting(id?: CPDirectSettingId | undefined) {
    const fieldName = "PublicCPDirectSetting";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectSettingCollectionService(client, path, fieldName)
      : new CPDirectSettingService(
          client,
          path,
          new QCPDirectSettingId(fieldName).buildUrl(id)
        );
  }

  public CPDirectSettingLocation(): CPDirectSettingLocationCollectionService<ClientType>;
  public CPDirectSettingLocation(
    id: CPDirectSettingLocationId
  ): CPDirectSettingLocationService<ClientType>;
  public CPDirectSettingLocation(id?: CPDirectSettingLocationId | undefined) {
    const fieldName = "CPDirectSettingLocation";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectSettingLocationCollectionService(client, path, fieldName)
      : new CPDirectSettingLocationService(
          client,
          path,
          new QCPDirectSettingLocationId(fieldName).buildUrl(id)
        );
  }

  public CustomField(): CustomFieldCollectionService<ClientType>;
  public CustomField(id: CustomFieldId): CustomFieldService<ClientType>;
  public CustomField(id?: CustomFieldId | undefined) {
    const fieldName = "CustomField";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomFieldCollectionService(client, path, fieldName)
      : new CustomFieldService(
          client,
          path,
          new QCustomFieldId(fieldName).buildUrl(id)
        );
  }

  public CustomFieldType(): CustomFieldTypeCollectionService<ClientType>;
  public CustomFieldType(
    id: CustomFieldTypeId
  ): CustomFieldTypeService<ClientType>;
  public CustomFieldType(id?: CustomFieldTypeId | undefined) {
    const fieldName = "CustomFieldType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomFieldTypeCollectionService(client, path, fieldName)
      : new CustomFieldTypeService(
          client,
          path,
          new QCustomFieldTypeId(fieldName).buildUrl(id)
        );
  }

  public CustomFieldValue(): CustomFieldValueCollectionService<ClientType>;
  public CustomFieldValue(
    id: CustomFieldValueId
  ): CustomFieldValueService<ClientType>;
  public CustomFieldValue(id?: CustomFieldValueId | undefined) {
    const fieldName = "CustomFieldValue";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomFieldValueCollectionService(client, path, fieldName)
      : new CustomFieldValueService(
          client,
          path,
          new QCustomFieldValueId(fieldName).buildUrl(id)
        );
  }

  public DashboardAchievement(): DashboardAchievementCollectionService<ClientType>;
  public DashboardAchievement(
    id: DashboardAchievementId
  ): DashboardAchievementService<ClientType>;
  public DashboardAchievement(id?: DashboardAchievementId | undefined) {
    const fieldName = "DashboardAchievement";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DashboardAchievementCollectionService(client, path, fieldName)
      : new DashboardAchievementService(
          client,
          path,
          new QDashboardAchievementId(fieldName).buildUrl(id)
        );
  }

  public Deposition(): DepositionCollectionService<ClientType>;
  public Deposition(id: DepositionId): DepositionService<ClientType>;
  public Deposition(id?: DepositionId | undefined) {
    const fieldName = "Deposition";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
        );
  }

  public Firm(): FirmCollectionService<ClientType>;
  public Firm(id: PartyId): FirmService<ClientType>;
  public Firm(id?: PartyId | undefined) {
    const fieldName = "Firm";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new FirmCollectionService(client, path, fieldName)
      : new FirmService(client, path, new QPartyId(fieldName).buildUrl(id));
  }

  public FirmCustomField(): FirmCustomFieldCollectionService<ClientType>;
  public FirmCustomField(
    id: FirmCustomFieldId
  ): FirmCustomFieldService<ClientType>;
  public FirmCustomField(id?: FirmCustomFieldId | undefined) {
    const fieldName = "FirmCustomField";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new FirmCustomFieldCollectionService(client, path, fieldName)
      : new FirmCustomFieldService(
          client,
          path,
          new QFirmCustomFieldId(fieldName).buildUrl(id)
        );
  }

  public IntakeClientLoginSummary(): IntakeClientLoginSummaryCollectionService<ClientType>;
  public IntakeClientLoginSummary(
    id: IntakeClientLoginSummaryId
  ): IntakeClientLoginSummaryService<ClientType>;
  public IntakeClientLoginSummary(id?: IntakeClientLoginSummaryId | undefined) {
    const fieldName = "IntakeClientLoginSummary";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntakeClientLoginSummaryCollectionService(client, path, fieldName)
      : new IntakeClientLoginSummaryService(
          client,
          path,
          new QIntakeClientLoginSummaryId(fieldName).buildUrl(id)
        );
  }

  public Lawsuit(): LawsuitCollectionService<ClientType>;
  public Lawsuit(id: LawsuitId): LawsuitService<ClientType>;
  public Lawsuit(id?: LawsuitId | undefined) {
    const fieldName = "Lawsuit";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitCollectionService(client, path, fieldName)
      : new LawsuitService(
          client,
          path,
          new QLawsuitId(fieldName).buildUrl(id)
        );
  }

  public LawsuitParty(): LawsuitPartyCollectionService<ClientType>;
  public LawsuitParty(id: LawsuitPartyId): LawsuitPartyService<ClientType>;
  public LawsuitParty(id?: LawsuitPartyId | undefined) {
    const fieldName = "LawsuitParty";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitPartyCollectionService(client, path, fieldName)
      : new LawsuitPartyService(
          client,
          path,
          new QLawsuitPartyId(fieldName).buildUrl(id)
        );
  }

  public LawsuitPartyType(): LawsuitPartyTypeCollectionService<ClientType>;
  public LawsuitPartyType(
    id: LawsuitPartyTypeId
  ): LawsuitPartyTypeService<ClientType>;
  public LawsuitPartyType(id?: LawsuitPartyTypeId | undefined) {
    const fieldName = "LawsuitPartyType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitPartyTypeCollectionService(client, path, fieldName)
      : new LawsuitPartyTypeService(
          client,
          path,
          new QLawsuitPartyTypeId(fieldName).buildUrl(id)
        );
  }

  public LawsuitPhaseDate(): LawsuitPhaseDateCollectionService<ClientType>;
  public LawsuitPhaseDate(
    id: LawsuitPhaseDateId
  ): LawsuitPhaseDateService<ClientType>;
  public LawsuitPhaseDate(id?: LawsuitPhaseDateId | undefined) {
    const fieldName = "LawsuitPhaseDate";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitPhaseDateCollectionService(client, path, fieldName)
      : new LawsuitPhaseDateService(
          client,
          path,
          new QLawsuitPhaseDateId(fieldName).buildUrl(id)
        );
  }

  public LawsuitPhaseType(): LawsuitPhaseTypeCollectionService<ClientType>;
  public LawsuitPhaseType(
    id: LawsuitPhaseTypeId
  ): LawsuitPhaseTypeService<ClientType>;
  public LawsuitPhaseType(id?: LawsuitPhaseTypeId | undefined) {
    const fieldName = "LawsuitPhaseType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitPhaseTypeCollectionService(client, path, fieldName)
      : new LawsuitPhaseTypeService(
          client,
          path,
          new QLawsuitPhaseTypeId(fieldName).buildUrl(id)
        );
  }

  public LawsuitType(): LawsuitTypeCollectionService<ClientType>;
  public LawsuitType(id: LawsuitTypeId): LawsuitTypeService<ClientType>;
  public LawsuitType(id?: LawsuitTypeId | undefined) {
    const fieldName = "LawsuitType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeCollectionService(client, path, fieldName)
      : new LawsuitTypeService(
          client,
          path,
          new QLawsuitTypeId(fieldName).buildUrl(id)
        );
  }

  public Party(): PartyCollectionService<ClientType>;
  public Party(id: PartyId): PartyService<ClientType>;
  public Party(id?: PartyId | undefined) {
    const fieldName = "Party";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyCollectionService(client, path, fieldName)
      : new PartyService(client, path, new QPartyId(fieldName).buildUrl(id));
  }

  public PartySummary(): PartySummaryCollectionService<ClientType>;
  public PartySummary(id: PartySummaryId): PartySummaryService<ClientType>;
  public PartySummary(id?: PartySummaryId | undefined) {
    const fieldName = "PartySummary";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartySummaryCollectionService(client, path, fieldName)
      : new PartySummaryService(
          client,
          path,
          new QPartySummaryId(fieldName).buildUrl(id)
        );
  }

  public PartyType(): PartyTypeCollectionService<ClientType>;
  public PartyType(id: PartyTypeId): PartyTypeService<ClientType>;
  public PartyType(id?: PartyTypeId | undefined) {
    const fieldName = "PartyType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyTypeCollectionService(client, path, fieldName)
      : new PartyTypeService(
          client,
          path,
          new QPartyTypeId(fieldName).buildUrl(id)
        );
  }

  public Person(): PersonCollectionService<ClientType>;
  public Person(id: PartyId): PersonService<ClientType>;
  public Person(id?: PartyId | undefined) {
    const fieldName = "Person";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PersonCollectionService(client, path, fieldName)
      : new PersonService(client, path, new QPartyId(fieldName).buildUrl(id));
  }

  public Record(): RecordCollectionService<ClientType>;
  public Record(id: RecordId): RecordService<ClientType>;
  public Record(id?: RecordId | undefined) {
    const fieldName = "Record";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordCollectionService(client, path, fieldName)
      : new RecordService(client, path, new QRecordId(fieldName).buildUrl(id));
  }

  public RecordFile(): RecordFileCollectionService<ClientType>;
  public RecordFile(id: RecordFileId): RecordFileService<ClientType>;
  public RecordFile(id?: RecordFileId | undefined) {
    const fieldName = "RecordFile";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordFileCollectionService(client, path, fieldName)
      : new RecordFileService(
          client,
          path,
          new QRecordFileId(fieldName).buildUrl(id)
        );
  }

  public RecordFolder(): RecordFolderCollectionService<ClientType>;
  public RecordFolder(id: RecordFolderId): RecordFolderService<ClientType>;
  public RecordFolder(id?: RecordFolderId | undefined) {
    const fieldName = "RecordFolder";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordFolderCollectionService(client, path, fieldName)
      : new RecordFolderService(
          client,
          path,
          new QRecordFolderId(fieldName).buildUrl(id)
        );
  }

  public SimpleLawsuitSummary(): SimpleLawsuitSummaryCollectionService<ClientType>;
  public SimpleLawsuitSummary(
    id: SimpleLawsuitSummaryId
  ): SimpleLawsuitSummaryService<ClientType>;
  public SimpleLawsuitSummary(id?: SimpleLawsuitSummaryId | undefined) {
    const fieldName = "SimpleLawsuitSummary";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SimpleLawsuitSummaryCollectionService(client, path, fieldName)
      : new SimpleLawsuitSummaryService(
          client,
          path,
          new QSimpleLawsuitSummaryId(fieldName).buildUrl(id)
        );
  }

  public SubPhaseType(): SubPhaseTypeCollectionService<ClientType>;
  public SubPhaseType(id: SubPhaseTypeId): SubPhaseTypeService<ClientType>;
  public SubPhaseType(id?: SubPhaseTypeId | undefined) {
    const fieldName = "SubPhaseType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SubPhaseTypeCollectionService(client, path, fieldName)
      : new SubPhaseTypeService(
          client,
          path,
          new QSubPhaseTypeId(fieldName).buildUrl(id)
        );
  }

  public Tickler(): TicklerCollectionService<ClientType>;
  public Tickler(id: TicklerId): TicklerService<ClientType>;
  public Tickler(id?: TicklerId | undefined) {
    const fieldName = "Tickler";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCollectionService(client, path, fieldName)
      : new TicklerService(
          client,
          path,
          new QTicklerId(fieldName).buildUrl(id)
        );
  }
}
