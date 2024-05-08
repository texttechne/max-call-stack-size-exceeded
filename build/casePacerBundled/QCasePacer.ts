import {
  QueryObject,
  QNumberPath,
  QDateTimeOffsetPath,
  QStringPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
  QStringParam,
  QDateTimeOffsetParam,
  QFunction,
  OperationReturnType,
  ReturnTypes,
  QComplexParam,
  QBooleanParam,
  QCollectionPath,
  QStringCollection,
  QNumberCollection,
} from "@odata2ts/odata-query-objects";
import {
  ActivityLogId,
  ActivityLogTypeId,
  AddressTypeId,
  ADRId,
  ADRTypeId,
  AlertId,
  AppointmentId,
  AppointmentEventSubTypeId,
  AppointmentEventTypeId,
  AppointmentPartyId,
  AppointmentPartyStatusId,
  AppointmentTypeId,
  CalendarEntryId,
  PartyId,
  Party_SyncParams,
  Party_ListParams,
  ClientFormId,
  ContactInfoId,
  ContactInfoTypeId,
  ContactTypeId,
  CPDirectBlogCategoryId,
  CPDirectBlogId,
  CPDirectBlogImageId,
  CPDirectCaseProgressId,
  CPDirectMessageId,
  CPDirectSettingId,
  CPDirectSettingLocationId,
  CustomFieldId,
  CustomFieldTypeId,
  CustomFieldValueId,
  DashboardAchievementId,
  DepositionId,
  FirmCustomFieldId,
  IntakeClientLoginSummaryId,
  LawsuitId,
  CustomAttributeId,
  LawsuitPartyId,
  LawsuitPartyTypeId,
  LawsuitPhaseDateId,
  LawsuitPhaseTypeId,
  LawsuitTypeId,
  PartySummaryId,
  PartySummary_ListParams,
  PartyTypeId,
  RecordId,
  RecordFileId,
  RecordFile_GetUrlParams,
  RecordFile_PutUrlParams,
  RecordFile_InitiateMultipartParams,
  RecordFile_PutMultipartUrlParams,
  RecordFile_CompleteMultipartParams,
  RecordFile_ValidateParams,
  RecordFolderId,
  SimpleLawsuitSummaryId,
  SubPhaseTypeId,
  TicklerId,
  CasePacerUserTypeId,
  IntakeClientLoginId,
  IntakeClientLawsuitId,
  CaseMenuItemId,
  CaseMenuGroupId,
  CaseMenuTabId,
  RecordSubtypeId,
  RecordTypeId,
  DocumentTemplateId,
  AppointmentRecurDateId,
  LitigationId,
  AddressId,
  CPDirectMedicalProviderId,
  CPDirectTreatmentNoteId,
  PartyAddressId,
  SMSThreadId,
  TwilioPhoneId,
  SMSMessageId,
  SMSAttachmentId,
  AnswerEnlargementId,
  CalendarUserId,
  CalendarUserGroupId,
  ComplaintId,
  DiscoveryId,
  DiscoveryRecipientTypeId,
  DiscoveryTargetId,
  DiscoveryTypeId,
  DiscoveryLitigationAssnId,
  DocumentId,
  TicklerAnswerId,
  TicklerTemplateId,
  RoleTemplateId,
  LawsuitRoleId,
  InsuranceClaimId,
  InsurancePolicyId,
  NegotiationId,
  DemandId,
  LawId,
  CounterOfferId,
  CounterOfferTypeId,
  DemandLineItemId,
  InsuranceClaimDemandId,
  PIPId,
  PIPBenefitId,
  PIPBenefitsTypeId,
  PropertyDamageId,
  PropertyTypeId,
  EconomicLossId,
  ExpenseId,
  ExpenseTypeId,
  PaymentMethodId,
  SettlementId,
  SettlementExpenseId,
  SettlementItemId,
  SettlementLienSubId,
  LienSubrogationId,
  LienSubrogationPaymentTypeId,
  SettlementMedicalProviderId,
  MedicalProviderId,
  TreatmentId,
  TreatmentNoteId,
  HearingId,
  HearingTypeId,
  CalendarEntryRecurId,
  TrialId,
  TrialExhibitId,
  WitnessExhibitDocumentTrialExhibitId,
  WitnessExhibitDocumentId,
  WitnessExhibitDocumentPartyId,
  WitnessExhibitDocumentStandardExhibitId,
  StandardExhibitId,
  WitnessExhibitDocumentStandardWitnessId,
  StandardWitnessId,
  TrialPleadingId,
  SettlementDocumentId,
  AttorneyFeeInterestId,
  AttorneyFeeInterestTypeId,
  DefendantAttorneyId,
  DefendantLawsuitPartyId,
  DefendantLitigationAssnId,
  InvestigatorId,
  MedicalEvaluationId,
  PlaintiffLawsuitPartyId,
  PoliceReportId,
  WitnessId,
  WitnessTypeId,
  WitnessLitigationAssnId,
  LawsuitTypeDocumentId,
  LawsuitTypeTicklerId,
  TicklerCriteriaId,
  TicklerCriteriaSetId,
  TicklerCriteriaItemId,
  TicklerCriteriaOperatorId,
  TicklerCriteriaActionId,
  TicklerTemplateActionId,
  TicklerAnswerActionId,
  TicklerActionTypeId,
  DepositionLitigationAssnId,
  AppointmentCustomTypeId,
  AppointmentHistoryId,
  AppointmentIntegrationId,
  MailMergeId,
  EmailId,
  RecordFileRelationshipId,
  AccountingSyncGLId,
  LawsuitTypeClientFormId,
  ClientFormQuestionId,
  ClientFormComponentId,
  ClientFormScreenId,
  ClientFormStatusId,
  IntakeClientFirmId,
  CPDirectPushTokenId,
  IntakeClientSessionId,
  LawsuitClientFormId,
  LawsuitCompanionGroupId,
  EvidenceId,
  LawsuitAbbrId,
  LawsuitRecordRequestId,
  CasePacerUserSessionId,
  CasePacerUserIntegrationTokenId,
  EventHelpId,
  SecurityUserGroupAssignId,
  SecurityUserGroupId,
  SecurityRuleSummaryId,
  SecurityPathId,
  SecurityRuleId,
  AccessLevelId,
  AdditionalEmailSenderId,
  ExternalImportKeyId,
  FirmAbbrId,
  IntangibleDamageId,
  PaymentInfoId,
  QuickBooksBankAccountId,
  QuickBooksExpenseAccountId,
  QuickBooksLogId,
  QuickBooksSettingId,
  ReportFirmId,
  ReportId,
  TrialItemId,
  AuthorizedEmailSenderId,
  ActivityHoursLogId,
} from "./CasePacerModel";

export class QActivityLog extends QueryObject {
  public readonly ActivityLogId = new QNumberPath(
    this.withPrefix("ActivityLogId")
  );
  public readonly EntryDate = new QDateTimeOffsetPath(
    this.withPrefix("EntryDate")
  );
  public readonly ActivityDescription = new QStringPath(
    this.withPrefix("ActivityDescription")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly CasePacerUserId = new QNumberPath(
    this.withPrefix("CasePacerUserId")
  );
  public readonly RelatedEntityType = new QStringPath(
    this.withPrefix("RelatedEntityType")
  );
  public readonly RelatedEntityId = new QNumberPath(
    this.withPrefix("RelatedEntityId")
  );
  public readonly Billable = new QBooleanPath(this.withPrefix("Billable"));
  public readonly BillableRate = new QNumberPath(
    this.withPrefix("BillableRate")
  );
  public readonly ExpenseId = new QNumberPath(this.withPrefix("ExpenseId"));
  public readonly AuditUserId = new QNumberPath(this.withPrefix("AuditUserId"));
  public readonly ActivityLogTypeId = new QNumberPath(
    this.withPrefix("ActivityLogTypeId")
  );
  public readonly GlobalActivityLogId = new QNumberPath(
    this.withPrefix("GlobalActivityLogId")
  );
  public readonly ActivityLogType = new QEntityPath(
    this.withPrefix("ActivityLogType"),
    () => QActivityLogType
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly CasePacerAuditUser = new QEntityPath(
    this.withPrefix("CasePacerAuditUser"),
    () => QCasePacerUser
  );
  public readonly Expense = new QEntityPath(
    this.withPrefix("Expense"),
    () => QExpense
  );
  public readonly GlobalActivityLog = new QEntityPath(
    this.withPrefix("GlobalActivityLog"),
    () => QActivityLog
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly ActivityHoursLogs = new QEntityCollectionPath(
    this.withPrefix("ActivityHoursLogs"),
    () => QActivityHoursLog
  );
  public readonly GlobalActivityLogActivityLogs = new QEntityCollectionPath(
    this.withPrefix("GlobalActivityLogActivityLogs"),
    () => QActivityLog
  );
}

export const qActivityLog = new QActivityLog();

export class QActivityLogId extends QId<ActivityLogId> {
  private readonly params = [new QNumberParam("ActivityLogId")];

  getParams() {
    return this.params;
  }
}

export class QActivityLogType extends QueryObject {
  public readonly ActivityLogTypeId = new QNumberPath(
    this.withPrefix("ActivityLogTypeId")
  );
  public readonly TypeName = new QStringPath(this.withPrefix("TypeName"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly SystemTypeID = new QNumberPath(
    this.withPrefix("SystemTypeID")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly ActivityLogSystemType = new QEntityPath(
    this.withPrefix("ActivityLogSystemType"),
    () => QActivityLogType
  );
  public readonly ActivityLogs = new QEntityCollectionPath(
    this.withPrefix("ActivityLogs"),
    () => QActivityLog
  );
  public readonly ActivityLogChildrenOfSystemType = new QEntityCollectionPath(
    this.withPrefix("ActivityLogChildrenOfSystemType"),
    () => QActivityLogType
  );
}

export const qActivityLogType = new QActivityLogType();

export class QActivityLogTypeId extends QId<ActivityLogTypeId> {
  private readonly params = [new QNumberParam("ActivityLogTypeId")];

  getParams() {
    return this.params;
  }
}

export class QAddressType extends QueryObject {
  public readonly AddressTypeId = new QNumberPath(
    this.withPrefix("AddressTypeId")
  );
  public readonly AddressTypeName = new QStringPath(
    this.withPrefix("AddressTypeName")
  );
  public readonly Addresses = new QEntityCollectionPath(
    this.withPrefix("Addresses"),
    () => QAddress
  );
}

export const qAddressType = new QAddressType();

export class QAddressTypeId extends QId<AddressTypeId> {
  private readonly params = [new QNumberParam("AddressTypeId")];

  getParams() {
    return this.params;
  }
}

export class QADR extends QueryObject {
  public readonly ADRId = new QNumberPath(this.withPrefix("ADRId"));
  public readonly ADRTypeId = new QNumberPath(this.withPrefix("ADRTypeId"));
  public readonly MAPartyID = new QNumberPath(this.withPrefix("MAPartyID"));
  public readonly HearingLocation = new QStringPath(
    this.withPrefix("HearingLocation")
  );
  public readonly HearingAddress = new QStringPath(
    this.withPrefix("HearingAddress")
  );
  public readonly HearingNotes = new QStringPath(
    this.withPrefix("HearingNotes")
  );
  public readonly HearingHeldFlag = new QBooleanPath(
    this.withPrefix("HearingHeldFlag")
  );
  public readonly StatementSentDate = new QDateTimeOffsetPath(
    this.withPrefix("StatementSentDate")
  );
  public readonly PlaintiffConfirmSentDate = new QDateTimeOffsetPath(
    this.withPrefix("PlaintiffConfirmSentDate")
  );
  public readonly DefendantInsurSentDate = new QDateTimeOffsetPath(
    this.withPrefix("DefendantInsurSentDate")
  );
  public readonly DefendantAttorneySentDate = new QDateTimeOffsetPath(
    this.withPrefix("DefendantAttorneySentDate")
  );
  public readonly ConfirmationCallsFlag = new QBooleanPath(
    this.withPrefix("ConfirmationCallsFlag")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly ADRType = new QEntityPath(
    this.withPrefix("ADRType"),
    () => QADRType
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
  public readonly MediatorArbitrator = new QEntityPath(
    this.withPrefix("MediatorArbitrator"),
    () => QParty
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
}

export const qADR = new QADR();

export class QADRId extends QId<ADRId> {
  private readonly params = [new QNumberParam("ADRId")];

  getParams() {
    return this.params;
  }
}

export class QADRType extends QueryObject {
  public readonly ADRTypeId = new QNumberPath(this.withPrefix("ADRTypeId"));
  public readonly ADRTypeName = new QStringPath(this.withPrefix("ADRTypeName"));
  public readonly ADRTypeRole = new QStringPath(this.withPrefix("ADRTypeRole"));
  public readonly ADRs = new QEntityCollectionPath(
    this.withPrefix("ADRs"),
    () => QADR
  );
}

export const qADRType = new QADRType();

export class QADRTypeId extends QId<ADRTypeId> {
  private readonly params = [new QNumberParam("ADRTypeId")];

  getParams() {
    return this.params;
  }
}

export class QAlert extends QueryObject {
  public readonly AlertId = new QNumberPath(this.withPrefix("AlertId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly UserId = new QNumberPath(this.withPrefix("UserId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly AlertDate = new QDateTimeOffsetPath(
    this.withPrefix("AlertDate")
  );
  public readonly AlertLevel = new QStringPath(this.withPrefix("AlertLevel"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly RecordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly ActiveFlag = new QBooleanPath(this.withPrefix("ActiveFlag"));
  public readonly Counter = new QNumberPath(this.withPrefix("Counter"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Record = new QEntityPath(
    this.withPrefix("Record"),
    () => QRecord
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qAlert = new QAlert();

export class QAlertId extends QId<AlertId> {
  private readonly params = [new QNumberParam("AlertId")];

  getParams() {
    return this.params;
  }
}

export class QAppointment extends QueryObject {
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly AppointmentTypeId = new QNumberPath(
    this.withPrefix("AppointmentTypeId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly UserId = new QNumberPath(this.withPrefix("UserId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly Subject = new QStringPath(this.withPrefix("Subject"));
  public readonly Location = new QStringPath(this.withPrefix("Location"));
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly StartTime = new QStringPath(this.withPrefix("StartTime"));
  public readonly DurationInMinutes = new QNumberPath(
    this.withPrefix("DurationInMinutes")
  );
  public readonly SendCalendarUpdates = new QBooleanPath(
    this.withPrefix("SendCalendarUpdates")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly ApptDescr = new QStringPath(this.withPrefix("ApptDescr"));
  public readonly GlobalAppointmentId = new QNumberPath(
    this.withPrefix("GlobalAppointmentId")
  );
  public readonly TimezoneOffset = new QNumberPath(
    this.withPrefix("TimezoneOffset")
  );
  public readonly DaylightSavingFlag = new QBooleanPath(
    this.withPrefix("DaylightSavingFlag")
  );
  public readonly ADRId = new QNumberPath(this.withPrefix("ADRId"));
  public readonly DepositionId = new QNumberPath(
    this.withPrefix("DepositionId")
  );
  public readonly TrialId = new QNumberPath(this.withPrefix("TrialId"));
  public readonly AppointmentEventSubTypeId = new QNumberPath(
    this.withPrefix("AppointmentEventSubTypeId")
  );
  public readonly HearingId = new QNumberPath(this.withPrefix("HearingId"));
  public readonly AppointmentCustomTypeId = new QNumberPath(
    this.withPrefix("AppointmentCustomTypeId")
  );
  public readonly RRule = new QStringPath(this.withPrefix("RRule"));
  public readonly ExDate = new QStringPath(this.withPrefix("ExDate"));
  public readonly RecurSeriesMasterId = new QNumberPath(
    this.withPrefix("RecurSeriesMasterId")
  );
  public readonly IsVirtual = new QBooleanPath(this.withPrefix("IsVirtual"));
  public readonly CPDDisplay = new QBooleanPath(this.withPrefix("CPDDisplay"));
  public readonly CPDAttendanceRequired = new QStringPath(
    this.withPrefix("CPDAttendanceRequired")
  );
  public readonly CPDNotes = new QStringPath(this.withPrefix("CPDNotes"));
  public readonly ADR = new QEntityPath(this.withPrefix("ADR"), () => QADR);
  public readonly AppointmentCustomType = new QEntityPath(
    this.withPrefix("AppointmentCustomType"),
    () => QAppointmentCustomType
  );
  public readonly AppointmentEventSubType = new QEntityPath(
    this.withPrefix("AppointmentEventSubType"),
    () => QAppointmentEventSubType
  );
  public readonly AppointmentType = new QEntityPath(
    this.withPrefix("AppointmentType"),
    () => QAppointmentType
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly Deposition = new QEntityPath(
    this.withPrefix("Deposition"),
    () => QDeposition
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly GlobalAppointment = new QEntityPath(
    this.withPrefix("GlobalAppointment"),
    () => QAppointment
  );
  public readonly Hearing = new QEntityPath(
    this.withPrefix("Hearing"),
    () => QHearing
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly PlaintiffParty = new QEntityPath(
    this.withPrefix("PlaintiffParty"),
    () => QParty
  );
  public readonly RecurSeriesMasterAppointment = new QEntityPath(
    this.withPrefix("RecurSeriesMasterAppointment"),
    () => QAppointment
  );
  public readonly Trial = new QEntityPath(
    this.withPrefix("Trial"),
    () => QTrial
  );
  public readonly GlobalAppointmentAppointments = new QEntityCollectionPath(
    this.withPrefix("GlobalAppointmentAppointments"),
    () => QAppointment
  );
  public readonly RecurExceptionAppointments = new QEntityCollectionPath(
    this.withPrefix("RecurExceptionAppointments"),
    () => QAppointment
  );
  public readonly AppointmentHistories = new QEntityCollectionPath(
    this.withPrefix("AppointmentHistories"),
    () => QAppointmentHistory
  );
  public readonly AppointmentIntegration = new QEntityPath(
    this.withPrefix("AppointmentIntegration"),
    () => QAppointmentIntegration
  );
  public readonly AppointmentParties = new QEntityCollectionPath(
    this.withPrefix("AppointmentParties"),
    () => QAppointmentParty
  );
  public readonly AppointmentRecurDates = new QEntityCollectionPath(
    this.withPrefix("AppointmentRecurDates"),
    () => QAppointmentRecurDate
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
}

export const qAppointment = new QAppointment();

export class QAppointmentId extends QId<AppointmentId> {
  private readonly params = [new QNumberParam("AppointmentId")];

  getParams() {
    return this.params;
  }
}

export class QAppointmentEventSubType extends QueryObject {
  public readonly AppointmentEventSubTypeId = new QNumberPath(
    this.withPrefix("AppointmentEventSubTypeId")
  );
  public readonly EventTypeId = new QNumberPath(this.withPrefix("EventTypeId"));
  public readonly AppointmentEventSubTypeName = new QStringPath(
    this.withPrefix("AppointmentEventSubTypeName")
  );
  public readonly AppointmentEventType = new QEntityPath(
    this.withPrefix("AppointmentEventType"),
    () => QAppointmentEventType
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
}

export const qAppointmentEventSubType = new QAppointmentEventSubType();

export class QAppointmentEventSubTypeId extends QId<AppointmentEventSubTypeId> {
  private readonly params = [new QNumberParam("AppointmentEventSubTypeId")];

  getParams() {
    return this.params;
  }
}

export class QAppointmentEventType extends QueryObject {
  public readonly AppointmentEventTypeId = new QNumberPath(
    this.withPrefix("AppointmentEventTypeId")
  );
  public readonly AppointmentEventTypeName = new QStringPath(
    this.withPrefix("AppointmentEventTypeName")
  );
  public readonly AppointmentEventSubTypes = new QEntityCollectionPath(
    this.withPrefix("AppointmentEventSubTypes"),
    () => QAppointmentEventSubType
  );
}

export const qAppointmentEventType = new QAppointmentEventType();

export class QAppointmentEventTypeId extends QId<AppointmentEventTypeId> {
  private readonly params = [new QNumberParam("AppointmentEventTypeId")];

  getParams() {
    return this.params;
  }
}

export class QAppointmentParty extends QueryObject {
  public readonly AppointmentPartyId = new QNumberPath(
    this.withPrefix("AppointmentPartyId")
  );
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly PartyString = new QStringPath(this.withPrefix("PartyString"));
  public readonly AppointmentPartyStatusId = new QNumberPath(
    this.withPrefix("AppointmentPartyStatusId")
  );
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
  public readonly AppointmentPartyStatus = new QEntityPath(
    this.withPrefix("AppointmentPartyStatus"),
    () => QAppointmentPartyStatus
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qAppointmentParty = new QAppointmentParty();

export class QAppointmentPartyId extends QId<AppointmentPartyId> {
  private readonly params = [new QNumberParam("AppointmentPartyId")];

  getParams() {
    return this.params;
  }
}

export class QAppointmentPartyStatus extends QueryObject {
  public readonly AppointmentPartyStatusId = new QNumberPath(
    this.withPrefix("AppointmentPartyStatusId")
  );
  public readonly AppointmentPartyStatusName = new QStringPath(
    this.withPrefix("AppointmentPartyStatusName")
  );
  public readonly AppointmentParties = new QEntityCollectionPath(
    this.withPrefix("AppointmentParties"),
    () => QAppointmentParty
  );
}

export const qAppointmentPartyStatus = new QAppointmentPartyStatus();

export class QAppointmentPartyStatusId extends QId<AppointmentPartyStatusId> {
  private readonly params = [new QNumberParam("AppointmentPartyStatusId")];

  getParams() {
    return this.params;
  }
}

export class QAppointmentType extends QueryObject {
  public readonly AppointmentTypeId = new QNumberPath(
    this.withPrefix("AppointmentTypeId")
  );
  public readonly AppointmentTypeName = new QStringPath(
    this.withPrefix("AppointmentTypeName")
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
}

export const qAppointmentType = new QAppointmentType();

export class QAppointmentTypeId extends QId<AppointmentTypeId> {
  private readonly params = [new QNumberParam("AppointmentTypeId")];

  getParams() {
    return this.params;
  }
}

export class QCalendarEntry extends QueryObject {
  public readonly CalendarEntryId = new QStringPath(
    this.withPrefix("CalendarEntryId")
  );
  public readonly AppointmentTypeName = new QStringPath(
    this.withPrefix("AppointmentTypeName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly UserId = new QNumberPath(this.withPrefix("UserId"));
  public readonly UserFullName = new QStringPath(
    this.withPrefix("UserFullName")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly LawsuitNumber = new QStringPath(
    this.withPrefix("LawsuitNumber")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly ClientName = new QStringPath(this.withPrefix("ClientName"));
  public readonly AttorneyPartyId = new QNumberPath(
    this.withPrefix("AttorneyPartyId")
  );
  public readonly ParalegalPartyId = new QNumberPath(
    this.withPrefix("ParalegalPartyId")
  );
  public readonly AttorneyDisplayName = new QStringPath(
    this.withPrefix("AttorneyDisplayName")
  );
  public readonly ParalegalDisplayName = new QStringPath(
    this.withPrefix("ParalegalDisplayName")
  );
  public readonly AttorneyColor = new QStringPath(
    this.withPrefix("AttorneyColor")
  );
  public readonly ParalegalColor = new QStringPath(
    this.withPrefix("ParalegalColor")
  );
  public readonly LiteralName = new QStringPath(this.withPrefix("LiteralName"));
  public readonly LawsuitPhaseTypeName = new QStringPath(
    this.withPrefix("LawsuitPhaseTypeName")
  );
  public readonly LawsuitTypeName = new QStringPath(
    this.withPrefix("LawsuitTypeName")
  );
  public readonly UserColor = new QStringPath(this.withPrefix("UserColor"));
  public readonly Subject = new QStringPath(this.withPrefix("Subject"));
  public readonly Location = new QStringPath(this.withPrefix("Location"));
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly StartTime = new QStringPath(this.withPrefix("StartTime"));
  public readonly DurationInMinutes = new QNumberPath(
    this.withPrefix("DurationInMinutes")
  );
  public readonly RRule = new QStringPath(this.withPrefix("RRule"));
  public readonly ExDate = new QStringPath(this.withPrefix("ExDate"));
  public readonly IsRecurring = new QBooleanPath(
    this.withPrefix("IsRecurring")
  );
  public readonly IsAuto = new QBooleanPath(this.withPrefix("IsAuto"));
  public readonly TimezoneOffset = new QNumberPath(
    this.withPrefix("TimezoneOffset")
  );
  public readonly DaylightSavingFlag = new QBooleanPath(
    this.withPrefix("DaylightSavingFlag")
  );
  public readonly TimezoneType = new QNumberPath(
    this.withPrefix("TimezoneType")
  );
  public readonly ApptDescr = new QStringPath(this.withPrefix("ApptDescr"));
  public readonly AppointmentEventTypeName = new QStringPath(
    this.withPrefix("AppointmentEventTypeName")
  );
  public readonly AppointmentTypeId = new QNumberPath(
    this.withPrefix("AppointmentTypeId")
  );
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly AppointmentEventSubTypeId = new QNumberPath(
    this.withPrefix("AppointmentEventSubTypeId")
  );
  public readonly AppointmentEventSubTypeName = new QStringPath(
    this.withPrefix("AppointmentEventSubTypeName")
  );
  public readonly ADRId = new QNumberPath(this.withPrefix("ADRId"));
  public readonly DepositionId = new QNumberPath(
    this.withPrefix("DepositionId")
  );
  public readonly TrialId = new QNumberPath(this.withPrefix("TrialId"));
  public readonly HearingId = new QNumberPath(this.withPrefix("HearingId"));
  public readonly Modified = new QDateTimeOffsetPath(
    this.withPrefix("Modified")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly User = new QEntityPath(
    this.withPrefix("User"),
    () => QCasePacerUser
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly PlaintiffParty = new QEntityPath(
    this.withPrefix("PlaintiffParty"),
    () => QParty
  );
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
  public readonly AppointmentEventSubType = new QEntityPath(
    this.withPrefix("AppointmentEventSubType"),
    () => QAppointmentEventSubType
  );
  public readonly ADR = new QEntityPath(this.withPrefix("ADR"), () => QADR);
  public readonly Deposition = new QEntityPath(
    this.withPrefix("Deposition"),
    () => QDeposition
  );
  public readonly Trial = new QEntityPath(
    this.withPrefix("Trial"),
    () => QTrial
  );
  public readonly Hearing = new QEntityPath(
    this.withPrefix("Hearing"),
    () => QHearing
  );
}

export const qCalendarEntry = new QCalendarEntry();

export class QCalendarEntryId extends QId<CalendarEntryId> {
  private readonly params = [
    new QStringParam("CalendarEntryId"),
    new QDateTimeOffsetParam("StartDate"),
  ];

  getParams() {
    return this.params;
  }
}

export class QParty extends QueryObject {
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly PartyTypeId = new QNumberPath(this.withPrefix("PartyTypeId"));
  public readonly ParentFirmId = new QNumberPath(
    this.withPrefix("ParentFirmId")
  );
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly DisplayName = new QStringPath(this.withPrefix("DisplayName"));
  public readonly QuickEntry = new QBooleanPath(this.withPrefix("QuickEntry"));
  public readonly ExternalFirmName = new QStringPath(
    this.withPrefix("ExternalFirmName")
  );
  public readonly Website = new QStringPath(this.withPrefix("Website"));
  public readonly AttyBarNumber = new QStringPath(
    this.withPrefix("AttyBarNumber")
  );
  public readonly HeaderDocumentTemplateId = new QNumberPath(
    this.withPrefix("HeaderDocumentTemplateId")
  );
  public readonly QBVendorId = new QStringPath(this.withPrefix("QBVendorId"));
  public readonly GlobalPartyId = new QNumberPath(
    this.withPrefix("GlobalPartyId")
  );
  public readonly PayeeExpenseSyncFlag = new QBooleanPath(
    this.withPrefix("PayeeExpenseSyncFlag")
  );
  public readonly DoNotText = new QBooleanPath(this.withPrefix("DoNotText"));
  public readonly GuardianExecutorId = new QNumberPath(
    this.withPrefix("GuardianExecutorId")
  );
  public readonly ImageId = new QNumberPath(this.withPrefix("ImageId"));
  public readonly GuardianExecutorParty = new QEntityPath(
    this.withPrefix("GuardianExecutorParty"),
    () => QParty
  );
  public readonly ParentFirm = new QEntityPath(
    this.withPrefix("ParentFirm"),
    () => QFirm
  );
  public readonly GlobalParty = new QEntityPath(
    this.withPrefix("GlobalParty"),
    () => QParty
  );
  public readonly HeaderDocumentTemplate = new QEntityPath(
    this.withPrefix("HeaderDocumentTemplate"),
    () => QDocumentTemplate
  );
  public readonly PartyType = new QEntityPath(
    this.withPrefix("PartyType"),
    () => QPartyType
  );
  public readonly Image = new QEntityPath(
    this.withPrefix("Image"),
    () => QRecordFile
  );
  public readonly ADRs = new QEntityCollectionPath(
    this.withPrefix("ADRs"),
    () => QADR
  );
  public readonly AnswerEnlargements = new QEntityCollectionPath(
    this.withPrefix("AnswerEnlargements"),
    () => QAnswerEnlargement
  );
  public readonly AppointmentsByPlaintiff = new QEntityCollectionPath(
    this.withPrefix("AppointmentsByPlaintiff"),
    () => QAppointment
  );
  public readonly AppointmentParties = new QEntityCollectionPath(
    this.withPrefix("AppointmentParties"),
    () => QAppointmentParty
  );
  public readonly CalendarUsers = new QEntityCollectionPath(
    this.withPrefix("CalendarUsers"),
    () => QCalendarUser
  );
  public readonly Complaints = new QEntityCollectionPath(
    this.withPrefix("Complaints"),
    () => QComplaint
  );
  public readonly ContactInfoes = new QEntityCollectionPath(
    this.withPrefix("ContactInfoes"),
    () => QContactInfo
  );
  public readonly DepositionsByLocationParty = new QEntityCollectionPath(
    this.withPrefix("DepositionsByLocationParty"),
    () => QDeposition
  );
  public readonly DeponentDepositions = new QEntityCollectionPath(
    this.withPrefix("DeponentDepositions"),
    () => QDeposition
  );
  public readonly DeposerDepositions = new QEntityCollectionPath(
    this.withPrefix("DeposerDepositions"),
    () => QDeposition
  );
  public readonly RecorderDepositions = new QEntityCollectionPath(
    this.withPrefix("RecorderDepositions"),
    () => QDeposition
  );
  public readonly DepositionsByVideographer = new QEntityCollectionPath(
    this.withPrefix("DepositionsByVideographer"),
    () => QDeposition
  );
  public readonly DefendantDiscoveries = new QEntityCollectionPath(
    this.withPrefix("DefendantDiscoveries"),
    () => QDiscovery
  );
  public readonly DiscoveriesByNonPartyRecipient = new QEntityCollectionPath(
    this.withPrefix("DiscoveriesByNonPartyRecipient"),
    () => QDiscovery
  );
  public readonly PlaintiffDiscoveries = new QEntityCollectionPath(
    this.withPrefix("PlaintiffDiscoveries"),
    () => QDiscovery
  );
  public readonly ReceivedFromDocuments = new QEntityCollectionPath(
    this.withPrefix("ReceivedFromDocuments"),
    () => QDocument
  );
  public readonly SentToDocuments = new QEntityCollectionPath(
    this.withPrefix("SentToDocuments"),
    () => QDocument
  );
  public readonly EconomicLosses = new QEntityCollectionPath(
    this.withPrefix("EconomicLosses"),
    () => QEconomicLoss
  );
  public readonly AttorneyExpenses = new QEntityCollectionPath(
    this.withPrefix("AttorneyExpenses"),
    () => QExpense
  );
  public readonly ClientExpenses = new QEntityCollectionPath(
    this.withPrefix("ClientExpenses"),
    () => QExpense
  );
  public readonly PayeeExpenses = new QEntityCollectionPath(
    this.withPrefix("PayeeExpenses"),
    () => QExpense
  );
  public readonly PaymentPartyExpenses = new QEntityCollectionPath(
    this.withPrefix("PaymentPartyExpenses"),
    () => QExpense
  );
  public readonly WardEstateParties = new QEntityCollectionPath(
    this.withPrefix("WardEstateParties"),
    () => QParty
  );
  public readonly Hearings = new QEntityCollectionPath(
    this.withPrefix("Hearings"),
    () => QHearing
  );
  public readonly LawsuitParties = new QEntityCollectionPath(
    this.withPrefix("LawsuitParties"),
    () => QLawsuitParty
  );
  public readonly PlaintiffLienSubrogations = new QEntityCollectionPath(
    this.withPrefix("PlaintiffLienSubrogations"),
    () => QLienSubrogation
  );
  public readonly SubrogeeLienHolderLienSubrogations =
    new QEntityCollectionPath(
      this.withPrefix("SubrogeeLienHolderLienSubrogations"),
      () => QLienSubrogation
    );
  public readonly CourtLitigations = new QEntityCollectionPath(
    this.withPrefix("CourtLitigations"),
    () => QLitigation
  );
  public readonly JudgeLitigations = new QEntityCollectionPath(
    this.withPrefix("JudgeLitigations"),
    () => QLitigation
  );
  public readonly MedicalProvidersByCompany = new QEntityCollectionPath(
    this.withPrefix("MedicalProvidersByCompany"),
    () => QMedicalProvider
  );
  public readonly MedicalProvidersByPlaintiff = new QEntityCollectionPath(
    this.withPrefix("MedicalProvidersByPlaintiff"),
    () => QMedicalProvider
  );
  public readonly ChildParties = new QEntityCollectionPath(
    this.withPrefix("ChildParties"),
    () => QParty
  );
  public readonly PartyAddresses = new QEntityCollectionPath(
    this.withPrefix("PartyAddresses"),
    () => QPartyAddress
  );
  public readonly ImportingUserRecords = new QEntityCollectionPath(
    this.withPrefix("ImportingUserRecords"),
    () => QRecord
  );
  public readonly PlaintiffRecords = new QEntityCollectionPath(
    this.withPrefix("PlaintiffRecords"),
    () => QRecord
  );
  public readonly ContactRecords = new QEntityCollectionPath(
    this.withPrefix("ContactRecords"),
    () => QRecord
  );
  public readonly Settlements = new QEntityCollectionPath(
    this.withPrefix("Settlements"),
    () => QSettlement
  );
  public readonly SettlementDocuments = new QEntityCollectionPath(
    this.withPrefix("SettlementDocuments"),
    () => QSettlementDocument
  );
  public readonly WitnessExhibitDocumentParties = new QEntityCollectionPath(
    this.withPrefix("WitnessExhibitDocumentParties"),
    () => QWitnessExhibitDocumentParty
  );
  public readonly CalendarEntriesByPlaintiff = new QEntityCollectionPath(
    this.withPrefix("CalendarEntriesByPlaintiff"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecursByPlaintiff = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecursByPlaintiff"),
    () => QCalendarEntryRecur
  );
  public readonly PartySummary = new QEntityPath(
    this.withPrefix("PartySummary"),
    () => QPartySummary
  );
}

export const qParty = new QParty();

export class QPartyId extends QId<PartyId> {
  private readonly params = [new QNumberParam("PartyId")];

  getParams() {
    return this.params;
  }
}

export class Party_QSync extends QFunction<Party_SyncParams> {
  private readonly params = [new QNumberParam("startSyncId")];

  constructor() {
    super(
      "Default.Sync",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QSyncResults())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class Party_QList extends QFunction<Party_ListParams> {
  private readonly params = [new QNumberParam("ids")];

  constructor() {
    super(
      "Default.List",
      new OperationReturnType(
        ReturnTypes.COMPLEX_COLLECTION,
        new QComplexParam("NONE", new QParty())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class QPerson extends QParty {
  public readonly FirstName = new QStringPath(this.withPrefix("FirstName"));
  public readonly LastName = new QStringPath(this.withPrefix("LastName"));
  public readonly MiddleName = new QStringPath(this.withPrefix("MiddleName"));
  public readonly SSN = new QStringPath(this.withPrefix("SSN"));
  public readonly NamePrefix = new QStringPath(this.withPrefix("NamePrefix"));
  public readonly NameSuffix = new QStringPath(this.withPrefix("NameSuffix"));
  public readonly DateOfBirth = new QDateTimeOffsetPath(
    this.withPrefix("DateOfBirth")
  );
  public readonly Gender = new QStringPath(this.withPrefix("Gender"));
  public readonly SpouseFirstName = new QStringPath(
    this.withPrefix("SpouseFirstName")
  );
  public readonly SpouseLastName = new QStringPath(
    this.withPrefix("SpouseLastName")
  );
  public readonly SpouseMiddleName = new QStringPath(
    this.withPrefix("SpouseMiddleName")
  );
  public readonly DeceasedFlag = new QBooleanPath(
    this.withPrefix("DeceasedFlag")
  );
  public readonly Children = new QStringPath(this.withPrefix("Children"));
  public readonly PersonNotes = new QStringPath(this.withPrefix("PersonNotes"));
  public readonly CompanyName = new QStringPath(this.withPrefix("CompanyName"));
  public readonly Nickname = new QStringPath(this.withPrefix("Nickname"));
}

export const qPerson = new QPerson();

export class QCasePacerUser extends QPerson {
  public readonly Email = new QStringPath(this.withPrefix("Email"));
  public readonly IsLockedOut = new QBooleanPath(
    this.withPrefix("IsLockedOut")
  );
  public readonly AttorneyListingTitle = new QStringPath(
    this.withPrefix("AttorneyListingTitle")
  );
  public readonly AttorneyListingEnable = new QBooleanPath(
    this.withPrefix("AttorneyListingEnable")
  );
  public readonly CasePacerUserType = new QEntityPath(
    this.withPrefix("CasePacerUserType"),
    () => QCasePacerUserType
  );
  public readonly ActivityLogs = new QEntityCollectionPath(
    this.withPrefix("ActivityLogs"),
    () => QActivityLog
  );
  public readonly ActivityLogsByAuditUser = new QEntityCollectionPath(
    this.withPrefix("ActivityLogsByAuditUser"),
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
  public readonly AppointmentHistories = new QEntityCollectionPath(
    this.withPrefix("AppointmentHistories"),
    () => QAppointmentHistory
  );
  public readonly CasePacerUserSessions = new QEntityCollectionPath(
    this.withPrefix("CasePacerUserSessions"),
    () => QCasePacerUserSession
  );
  public readonly CasePacerUserIntegrationToken = new QEntityPath(
    this.withPrefix("CasePacerUserIntegrationToken"),
    () => QCasePacerUserIntegrationToken
  );
  public readonly CPDirectMessages = new QEntityCollectionPath(
    this.withPrefix("CPDirectMessages"),
    () => QCPDirectMessage
  );
  public readonly EventHelp = new QEntityPath(
    this.withPrefix("EventHelp"),
    () => QEventHelp
  );
  public readonly DefaultAttorneyFirms = new QEntityCollectionPath(
    this.withPrefix("DefaultAttorneyFirms"),
    () => QFirm
  );
  public readonly DefaultParalegalFirms = new QEntityCollectionPath(
    this.withPrefix("DefaultParalegalFirms"),
    () => QFirm
  );
  public readonly RoleTemplates = new QEntityCollectionPath(
    this.withPrefix("RoleTemplates"),
    () => QRoleTemplate
  );
  public readonly SMSMessages = new QEntityCollectionPath(
    this.withPrefix("SMSMessages"),
    () => QSMSMessage
  );
  public readonly Ticklers = new QEntityCollectionPath(
    this.withPrefix("Ticklers"),
    () => QTickler
  );
  public readonly SecurityUserGroupAssigns = new QEntityCollectionPath(
    this.withPrefix("SecurityUserGroupAssigns"),
    () => QSecurityUserGroupAssign
  );
  public readonly SecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("SecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
}

export const qCasePacerUser = new QCasePacerUser();

export class QClientForm extends QueryObject {
  public readonly _QuestionCount = new QNumberPath(
    this.withPrefix("_QuestionCount")
  );
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly ShowCriteriaJson = new QStringPath(
    this.withPrefix("ShowCriteriaJson")
  );
  public readonly ClientFormStatusId = new QNumberPath(
    this.withPrefix("ClientFormStatusId")
  );
  public readonly ClientFormStatus = new QEntityPath(
    this.withPrefix("ClientFormStatus"),
    () => QClientFormStatus
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly ClientFormScreens = new QEntityCollectionPath(
    this.withPrefix("ClientFormScreens"),
    () => QClientFormScreen
  );
  public readonly LawsuitTypeClientForms = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeClientForms"),
    () => QLawsuitTypeClientForm
  );
}

export const qClientForm = new QClientForm();

export class QClientFormId extends QId<ClientFormId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCompany extends QParty {
  public readonly CompanyName = new QStringPath(this.withPrefix("CompanyName"));
  public readonly ESN = new QStringPath(this.withPrefix("ESN"));
  public readonly RepairCompanyPropertyDamages = new QEntityCollectionPath(
    this.withPrefix("RepairCompanyPropertyDamages"),
    () => QPropertyDamage
  );
}

export const qCompany = new QCompany();

export class QContactInfo extends QueryObject {
  public readonly ContactInfoId = new QNumberPath(
    this.withPrefix("ContactInfoId")
  );
  public readonly ContactInfoTypeId = new QNumberPath(
    this.withPrefix("ContactInfoTypeId")
  );
  public readonly ContactValue = new QStringPath(
    this.withPrefix("ContactValue")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly ContactTypeId = new QNumberPath(
    this.withPrefix("ContactTypeId")
  );
  public readonly UseForNotification = new QBooleanPath(
    this.withPrefix("UseForNotification")
  );
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly IsPrimary = new QBooleanPath(this.withPrefix("IsPrimary"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly E164Value = new QStringPath(this.withPrefix("E164Value"));
  public readonly ContactInfoType = new QEntityPath(
    this.withPrefix("ContactInfoType"),
    () => QContactInfoType
  );
  public readonly ContactType = new QEntityPath(
    this.withPrefix("ContactType"),
    () => QContactType
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
  public readonly SMSThreads = new QEntityCollectionPath(
    this.withPrefix("SMSThreads"),
    () => QSMSThread
  );
}

export const qContactInfo = new QContactInfo();

export class QContactInfoId extends QId<ContactInfoId> {
  private readonly params = [new QNumberParam("ContactInfoId")];

  getParams() {
    return this.params;
  }
}

export class QContactInfoType extends QueryObject {
  public readonly ContactInfoTypeId = new QNumberPath(
    this.withPrefix("ContactInfoTypeId")
  );
  public readonly ContactInfoTypeName = new QStringPath(
    this.withPrefix("ContactInfoTypeName")
  );
  public readonly ContactInfoes = new QEntityCollectionPath(
    this.withPrefix("ContactInfoes"),
    () => QContactInfo
  );
}

export const qContactInfoType = new QContactInfoType();

export class QContactInfoTypeId extends QId<ContactInfoTypeId> {
  private readonly params = [new QNumberParam("ContactInfoTypeId")];

  getParams() {
    return this.params;
  }
}

export class QContactType extends QueryObject {
  public readonly ContactTypeId = new QNumberPath(
    this.withPrefix("ContactTypeId")
  );
  public readonly ContactTypeName = new QStringPath(
    this.withPrefix("ContactTypeName")
  );
  public readonly ContactInfoes = new QEntityCollectionPath(
    this.withPrefix("ContactInfoes"),
    () => QContactInfo
  );
}

export const qContactType = new QContactType();

export class QContactTypeId extends QId<ContactTypeId> {
  private readonly params = [new QNumberParam("ContactTypeId")];

  getParams() {
    return this.params;
  }
}

export class QCPDirectBlogCategory extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly CPDirectBlogs = new QEntityCollectionPath(
    this.withPrefix("CPDirectBlogs"),
    () => QCPDirectBlog
  );
}

export const qCPDirectBlogCategory = new QCPDirectBlogCategory();

export class QCPDirectBlogCategoryId extends QId<CPDirectBlogCategoryId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCPDirectBlog extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly CategoryId = new QNumberPath(this.withPrefix("CategoryId"));
  public readonly DateCreate = new QDateTimeOffsetPath(
    this.withPrefix("DateCreate")
  );
  public readonly Title = new QStringPath(this.withPrefix("Title"));
  public readonly Summary = new QStringPath(this.withPrefix("Summary"));
  public readonly Body = new QStringPath(this.withPrefix("Body"));
  public readonly Published = new QDateTimeOffsetPath(
    this.withPrefix("Published")
  );
  public readonly CPDirectBlogCategory = new QEntityPath(
    this.withPrefix("CPDirectBlogCategory"),
    () => QCPDirectBlogCategory
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CPDirectBlogImages = new QEntityCollectionPath(
    this.withPrefix("CPDirectBlogImages"),
    () => QCPDirectBlogImage
  );
}

export const qCPDirectBlog = new QCPDirectBlog();

export class QCPDirectBlogId extends QId<CPDirectBlogId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCPDirectBlogImage extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly BlogId = new QNumberPath(this.withPrefix("BlogId"));
  public readonly S3Key = new QStringPath(this.withPrefix("S3Key"));
  public readonly PublicUrl = new QStringPath(this.withPrefix("PublicUrl"));
  public readonly FileName = new QStringPath(this.withPrefix("FileName"));
  public readonly FileSize = new QNumberPath(this.withPrefix("FileSize"));
  public readonly CPDirectBlog = new QEntityPath(
    this.withPrefix("CPDirectBlog"),
    () => QCPDirectBlog
  );
}

export const qCPDirectBlogImage = new QCPDirectBlogImage();

export class QCPDirectBlogImageId extends QId<CPDirectBlogImageId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCPDirectCaseProgress extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly ShortName = new QStringPath(this.withPrefix("ShortName"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly IntakeClientLawsuits = new QEntityCollectionPath(
    this.withPrefix("IntakeClientLawsuits"),
    () => QIntakeClientLawsuit
  );
}

export const qCPDirectCaseProgress = new QCPDirectCaseProgress();

export class QCPDirectCaseProgressId extends QId<CPDirectCaseProgressId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCPDirectMessage extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly IntakeClientLawsuitId = new QNumberPath(
    this.withPrefix("IntakeClientLawsuitId")
  );
  public readonly Body = new QStringPath(this.withPrefix("Body"));
  public readonly Sent = new QDateTimeOffsetPath(this.withPrefix("Sent"));
  public readonly ReadReceipt = new QDateTimeOffsetPath(
    this.withPrefix("ReadReceipt")
  );
  public readonly CPDirectClientLoginId = new QNumberPath(
    this.withPrefix("CPDirectClientLoginId")
  );
  public readonly CasePacerUserId = new QNumberPath(
    this.withPrefix("CasePacerUserId")
  );
  public readonly EmailSent = new QBooleanPath(this.withPrefix("EmailSent"));
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly IntakeClientLawsuit = new QEntityPath(
    this.withPrefix("IntakeClientLawsuit"),
    () => QIntakeClientLawsuit
  );
  public readonly IntakeClientLogin = new QEntityPath(
    this.withPrefix("IntakeClientLogin"),
    () => QIntakeClientLogin
  );
}

export const qCPDirectMessage = new QCPDirectMessage();

export class QCPDirectMessageId extends QId<CPDirectMessageId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCPDirectSetting extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly FirmName = new QStringPath(this.withPrefix("FirmName"));
  public readonly FirmContactPhoneNumber = new QStringPath(
    this.withPrefix("FirmContactPhoneNumber")
  );
  public readonly FirmContactEmail = new QStringPath(
    this.withPrefix("FirmContactEmail")
  );
  public readonly AboutFirmTitle = new QStringPath(
    this.withPrefix("AboutFirmTitle")
  );
  public readonly AboutFirmBody = new QStringPath(
    this.withPrefix("AboutFirmBody")
  );
  public readonly Firebase_Android_Apn = new QStringPath(
    this.withPrefix("Firebase_Android_Apn")
  );
  public readonly Firebase_Apple_Ibi = new QStringPath(
    this.withPrefix("Firebase_Apple_Ibi")
  );
  public readonly Firebase_Apple_Isi = new QStringPath(
    this.withPrefix("Firebase_Apple_Isi")
  );
  public readonly AdditionalFirmIds = new QStringPath(
    this.withPrefix("AdditionalFirmIds")
  );
  public readonly MsgEnabled = new QBooleanPath(this.withPrefix("MsgEnabled"));
  public readonly WebSlug = new QStringPath(this.withPrefix("WebSlug"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CPDirectSettingLocations = new QEntityCollectionPath(
    this.withPrefix("CPDirectSettingLocations"),
    () => QCPDirectSettingLocation
  );
}

export const qCPDirectSetting = new QCPDirectSetting();

export class QCPDirectSettingId extends QId<CPDirectSettingId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCPDirectSettingLocation extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly CPDirectSettingId = new QNumberPath(
    this.withPrefix("CPDirectSettingId")
  );
  public readonly LocationName = new QStringPath(
    this.withPrefix("LocationName")
  );
  public readonly Address1 = new QStringPath(this.withPrefix("Address1"));
  public readonly Address2 = new QStringPath(this.withPrefix("Address2"));
  public readonly City = new QStringPath(this.withPrefix("City"));
  public readonly State = new QStringPath(this.withPrefix("State"));
  public readonly ZipCode = new QStringPath(this.withPrefix("ZipCode"));
  public readonly CPDirectSetting = new QEntityPath(
    this.withPrefix("CPDirectSetting"),
    () => QCPDirectSetting
  );
}

export const qCPDirectSettingLocation = new QCPDirectSettingLocation();

export class QCPDirectSettingLocationId extends QId<CPDirectSettingLocationId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCustomField extends QueryObject {
  public readonly CustomFieldId = new QNumberPath(
    this.withPrefix("CustomFieldId")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly CustomFieldGroup = new QStringPath(
    this.withPrefix("CustomFieldGroup")
  );
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly FirmCustomFieldId = new QNumberPath(
    this.withPrefix("FirmCustomFieldId")
  );
  public readonly FirmCustomField = new QEntityPath(
    this.withPrefix("FirmCustomField"),
    () => QFirmCustomField
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly CustomFieldValues = new QEntityCollectionPath(
    this.withPrefix("CustomFieldValues"),
    () => QCustomFieldValue
  );
}

export const qCustomField = new QCustomField();

export class QCustomFieldId extends QId<CustomFieldId> {
  private readonly params = [new QNumberParam("CustomFieldId")];

  getParams() {
    return this.params;
  }
}

export class QCustomFieldType extends QueryObject {
  public readonly CustomFieldTypeId = new QNumberPath(
    this.withPrefix("CustomFieldTypeId")
  );
  public readonly TypeName = new QStringPath(this.withPrefix("TypeName"));
  public readonly CustomFieldValueCol = new QStringPath(
    this.withPrefix("CustomFieldValueCol")
  );
  public readonly FirmCustomFields = new QEntityCollectionPath(
    this.withPrefix("FirmCustomFields"),
    () => QFirmCustomField
  );
}

export const qCustomFieldType = new QCustomFieldType();

export class QCustomFieldTypeId extends QId<CustomFieldTypeId> {
  private readonly params = [new QNumberParam("CustomFieldTypeId")];

  getParams() {
    return this.params;
  }
}

export class QCustomFieldValue extends QueryObject {
  public readonly CustomFieldValueId = new QNumberPath(
    this.withPrefix("CustomFieldValueId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly CustomFieldId = new QNumberPath(
    this.withPrefix("CustomFieldId")
  );
  public readonly BoolVal = new QBooleanPath(this.withPrefix("BoolVal"));
  public readonly DateTimeVal = new QDateTimeOffsetPath(
    this.withPrefix("DateTimeVal")
  );
  public readonly DecimalVal = new QNumberPath(this.withPrefix("DecimalVal"));
  public readonly StringVal = new QStringPath(this.withPrefix("StringVal"));
  public readonly CustomField = new QEntityPath(
    this.withPrefix("CustomField"),
    () => QCustomField
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qCustomFieldValue = new QCustomFieldValue();

export class QCustomFieldValueId extends QId<CustomFieldValueId> {
  private readonly params = [new QNumberParam("CustomFieldValueId")];

  getParams() {
    return this.params;
  }
}

export class QDashboardAchievement extends QueryObject {
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly DisplayName = new QStringPath(this.withPrefix("DisplayName"));
  public readonly EventCount = new QNumberPath(this.withPrefix("EventCount"));
  public readonly TicklerCount = new QNumberPath(
    this.withPrefix("TicklerCount")
  );
  public readonly CaseUpdateCount = new QNumberPath(
    this.withPrefix("CaseUpdateCount")
  );
  public readonly PartyUpdateCount = new QNumberPath(
    this.withPrefix("PartyUpdateCount")
  );
  public readonly MessageCount = new QNumberPath(
    this.withPrefix("MessageCount")
  );
}

export const qDashboardAchievement = new QDashboardAchievement();

export class QDashboardAchievementId extends QId<DashboardAchievementId> {
  private readonly params = [new QNumberParam("PartyId")];

  getParams() {
    return this.params;
  }
}

export class QDeposition extends QueryObject {
  public readonly DepositionId = new QNumberPath(
    this.withPrefix("DepositionId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly DiscoveryOfLawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("DiscoveryOfLawsuitPartyTypeId")
  );
  public readonly DeposerPartyId = new QNumberPath(
    this.withPrefix("DeposerPartyId")
  );
  public readonly DeponentLawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("DeponentLawsuitPartyTypeId")
  );
  public readonly DeponentPartyId = new QNumberPath(
    this.withPrefix("DeponentPartyId")
  );
  public readonly DepositionFirm = new QStringPath(
    this.withPrefix("DepositionFirm")
  );
  public readonly RecorderPartyId = new QNumberPath(
    this.withPrefix("RecorderPartyId")
  );
  public readonly Location = new QStringPath(this.withPrefix("Location"));
  public readonly Address = new QStringPath(this.withPrefix("Address"));
  public readonly HeldFlag = new QBooleanPath(this.withPrefix("HeldFlag"));
  public readonly OriginalDepositionNeededFlag = new QBooleanPath(
    this.withPrefix("OriginalDepositionNeededFlag")
  );
  public readonly ReceivedDate = new QDateTimeOffsetPath(
    this.withPrefix("ReceivedDate")
  );
  public readonly ReturnedDate = new QDateTimeOffsetPath(
    this.withPrefix("ReturnedDate")
  );
  public readonly CopyReceivedFlag = new QBooleanPath(
    this.withPrefix("CopyReceivedFlag")
  );
  public readonly DepositionNotes = new QStringPath(
    this.withPrefix("DepositionNotes")
  );
  public readonly PlaintiffDepoConfirmSentDate = new QDateTimeOffsetPath(
    this.withPrefix("PlaintiffDepoConfirmSentDate")
  );
  public readonly DepoNoticeSentDate = new QDateTimeOffsetPath(
    this.withPrefix("DepoNoticeSentDate")
  );
  public readonly ReporterConfirmSentDate = new QDateTimeOffsetPath(
    this.withPrefix("ReporterConfirmSentDate")
  );
  public readonly DefDepoConfirmSentDate = new QDateTimeOffsetPath(
    this.withPrefix("DefDepoConfirmSentDate")
  );
  public readonly ReporterDepoReqDate1 = new QDateTimeOffsetPath(
    this.withPrefix("ReporterDepoReqDate1")
  );
  public readonly ReporterDepoReqDate2 = new QDateTimeOffsetPath(
    this.withPrefix("ReporterDepoReqDate2")
  );
  public readonly ReporterDateCalled = new QDateTimeOffsetPath(
    this.withPrefix("ReporterDateCalled")
  );
  public readonly PlaintiffDepositionRequestDate = new QDateTimeOffsetPath(
    this.withPrefix("PlaintiffDepositionRequestDate")
  );
  public readonly VideographerPartyId = new QNumberPath(
    this.withPrefix("VideographerPartyId")
  );
  public readonly LocationPartyId = new QNumberPath(
    this.withPrefix("LocationPartyId")
  );
  public readonly LocationParty = new QEntityPath(
    this.withPrefix("LocationParty"),
    () => QParty
  );
  public readonly DeponentLawsuitPartyType = new QEntityPath(
    this.withPrefix("DeponentLawsuitPartyType"),
    () => QLawsuitPartyType
  );
  public readonly Deponent = new QEntityPath(
    this.withPrefix("Deponent"),
    () => QParty
  );
  public readonly Deposer = new QEntityPath(
    this.withPrefix("Deposer"),
    () => QParty
  );
  public readonly DiscoveryOfLawsuitPartyType = new QEntityPath(
    this.withPrefix("DiscoveryOfLawsuitPartyType"),
    () => QLawsuitPartyType
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Recorder = new QEntityPath(
    this.withPrefix("Recorder"),
    () => QParty
  );
  public readonly Videographer = new QEntityPath(
    this.withPrefix("Videographer"),
    () => QParty
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly DepositionLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DepositionLitigationAssns"),
    () => QDepositionLitigationAssn
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
}

export const qDeposition = new QDeposition();

export class QDepositionId extends QId<DepositionId> {
  private readonly params = [new QNumberParam("DepositionId")];

  getParams() {
    return this.params;
  }
}

export class QFirm extends QParty {
  public readonly FirmName = new QStringPath(this.withPrefix("FirmName"));
  public readonly RecordRequestCustomerId = new QNumberPath(
    this.withPrefix("RecordRequestCustomerId")
  );
  public readonly FirmFolder = new QStringPath(this.withPrefix("FirmFolder"));
  public readonly StandardWitnessIntroParagraph = new QStringPath(
    this.withPrefix("StandardWitnessIntroParagraph")
  );
  public readonly TicklersDueToDate = new QDateTimeOffsetPath(
    this.withPrefix("TicklersDueToDate")
  );
  public readonly NumUsersAllowed = new QNumberPath(
    this.withPrefix("NumUsersAllowed")
  );
  public readonly DocMgmtFeePerCase = new QNumberPath(
    this.withPrefix("DocMgmtFeePerCase")
  );
  public readonly QuarterlyMinimumCharge = new QNumberPath(
    this.withPrefix("QuarterlyMinimumCharge")
  );
  public readonly BillingStartDate = new QDateTimeOffsetPath(
    this.withPrefix("BillingStartDate")
  );
  public readonly DocMgmtFeePerImportCase = new QNumberPath(
    this.withPrefix("DocMgmtFeePerImportCase")
  );
  public readonly DocMgmtRenewalFeePerCase = new QNumberPath(
    this.withPrefix("DocMgmtRenewalFeePerCase")
  );
  public readonly ActivityLogSecurity = new QBooleanPath(
    this.withPrefix("ActivityLogSecurity")
  );
  public readonly DefaultAttorneyPartyId = new QNumberPath(
    this.withPrefix("DefaultAttorneyPartyId")
  );
  public readonly DefaultParalegalPartyId = new QNumberPath(
    this.withPrefix("DefaultParalegalPartyId")
  );
  public readonly EmailSignature = new QStringPath(
    this.withPrefix("EmailSignature")
  );
  public readonly AdminTrainingDate = new QDateTimeOffsetPath(
    this.withPrefix("AdminTrainingDate")
  );
  public readonly UserTrainingDate = new QDateTimeOffsetPath(
    this.withPrefix("UserTrainingDate")
  );
  public readonly AquisitionDate = new QDateTimeOffsetPath(
    this.withPrefix("AquisitionDate")
  );
  public readonly DocMgmtFeeCasePacerCut = new QNumberPath(
    this.withPrefix("DocMgmtFeeCasePacerCut")
  );
  public readonly EmailSenderRestrictionFlag = new QBooleanPath(
    this.withPrefix("EmailSenderRestrictionFlag")
  );
  public readonly LawsuitNumberChangeRestrictionFlag = new QBooleanPath(
    this.withPrefix("LawsuitNumberChangeRestrictionFlag")
  );
  public readonly RecordRequestSecretKey = new QStringPath(
    this.withPrefix("RecordRequestSecretKey")
  );
  public readonly DefaultContigentFee = new QNumberPath(
    this.withPrefix("DefaultContigentFee")
  );
  public readonly StripeLiveCustomerId = new QStringPath(
    this.withPrefix("StripeLiveCustomerId")
  );
  public readonly StripeLiveSubscriptionId = new QStringPath(
    this.withPrefix("StripeLiveSubscriptionId")
  );
  public readonly InvoiceEmail = new QStringPath(
    this.withPrefix("InvoiceEmail")
  );
  public readonly DefaultLawsuitBillingType = new QStringPath(
    this.withPrefix("DefaultLawsuitBillingType")
  );
  public readonly DefaultMinFee = new QNumberPath(
    this.withPrefix("DefaultMinFee")
  );
  public readonly DefaultMaxFee = new QNumberPath(
    this.withPrefix("DefaultMaxFee")
  );
  public readonly DefaultClosingFee = new QNumberPath(
    this.withPrefix("DefaultClosingFee")
  );
  public readonly DefaultMonthlyFee = new QNumberPath(
    this.withPrefix("DefaultMonthlyFee")
  );
  public readonly DefaultDeferredMonthlyFee = new QNumberPath(
    this.withPrefix("DefaultDeferredMonthlyFee")
  );
  public readonly DefaultDeferredMonths = new QNumberPath(
    this.withPrefix("DefaultDeferredMonths")
  );
  public readonly StripeTestCustomerId = new QStringPath(
    this.withPrefix("StripeTestCustomerId")
  );
  public readonly StripeTestSubscriptionId = new QStringPath(
    this.withPrefix("StripeTestSubscriptionId")
  );
  public readonly MsaTermExpiration = new QDateTimeOffsetPath(
    this.withPrefix("MsaTermExpiration")
  );
  public readonly Inactive = new QDateTimeOffsetPath(
    this.withPrefix("Inactive")
  );
  public readonly DefaultAttorney = new QEntityPath(
    this.withPrefix("DefaultAttorney"),
    () => QCasePacerUser
  );
  public readonly DefaultParalegal = new QEntityPath(
    this.withPrefix("DefaultParalegal"),
    () => QCasePacerUser
  );
  public readonly AdditionalEmailSenders = new QEntityCollectionPath(
    this.withPrefix("AdditionalEmailSenders"),
    () => QAdditionalEmailSender
  );
  public readonly Alerts = new QEntityCollectionPath(
    this.withPrefix("Alerts"),
    () => QAlert
  );
  public readonly ActivityLogTypes = new QEntityCollectionPath(
    this.withPrefix("ActivityLogTypes"),
    () => QActivityLogType
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly AppointmentCustomTypes = new QEntityCollectionPath(
    this.withPrefix("AppointmentCustomTypes"),
    () => QAppointmentCustomType
  );
  public readonly CaseMenuItems = new QEntityCollectionPath(
    this.withPrefix("CaseMenuItems"),
    () => QCaseMenuItem
  );
  public readonly ClientForms = new QEntityCollectionPath(
    this.withPrefix("ClientForms"),
    () => QClientForm
  );
  public readonly CPDirectBlogs = new QEntityCollectionPath(
    this.withPrefix("CPDirectBlogs"),
    () => QCPDirectBlog
  );
  public readonly CPDirectSettings = new QEntityCollectionPath(
    this.withPrefix("CPDirectSettings"),
    () => QCPDirectSetting
  );
  public readonly DocumentTemplates = new QEntityCollectionPath(
    this.withPrefix("DocumentTemplates"),
    () => QDocumentTemplate
  );
  public readonly Emails = new QEntityCollectionPath(
    this.withPrefix("Emails"),
    () => QEmail
  );
  public readonly ExternalImportKeys = new QEntityCollectionPath(
    this.withPrefix("ExternalImportKeys"),
    () => QExternalImportKey
  );
  public readonly RecordSubtypes = new QEntityCollectionPath(
    this.withPrefix("RecordSubtypes"),
    () => QRecordSubtype
  );
  public readonly FirmAbbrs = new QEntityCollectionPath(
    this.withPrefix("FirmAbbrs"),
    () => QFirmAbbr
  );
  public readonly FirmCustomFields = new QEntityCollectionPath(
    this.withPrefix("FirmCustomFields"),
    () => QFirmCustomField
  );
  public readonly SecurityUserGroups = new QEntityCollectionPath(
    this.withPrefix("SecurityUserGroups"),
    () => QSecurityUserGroup
  );
  public readonly IntakeClientFirms = new QEntityCollectionPath(
    this.withPrefix("IntakeClientFirms"),
    () => QIntakeClientFirm
  );
  public readonly IntangibleDamages = new QEntityCollectionPath(
    this.withPrefix("IntangibleDamages"),
    () => QIntangibleDamage
  );
  public readonly Laws = new QEntityCollectionPath(
    this.withPrefix("Laws"),
    () => QLaw
  );
  public readonly Lawsuits = new QEntityCollectionPath(
    this.withPrefix("Lawsuits"),
    () => QLawsuit
  );
  public readonly LawsuitAbbrs = new QEntityCollectionPath(
    this.withPrefix("LawsuitAbbrs"),
    () => QLawsuitAbbr
  );
  public readonly LawsuitTypes = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypes"),
    () => QLawsuitType
  );
  public readonly Parties = new QEntityCollectionPath(
    this.withPrefix("Parties"),
    () => QParty
  );
  public readonly PaymentInfo = new QEntityPath(
    this.withPrefix("PaymentInfo"),
    () => QPaymentInfo
  );
  public readonly PIPBenefitsTypes = new QEntityCollectionPath(
    this.withPrefix("PIPBenefitsTypes"),
    () => QPIPBenefitsType
  );
  public readonly QuickBooksBankAccounts = new QEntityCollectionPath(
    this.withPrefix("QuickBooksBankAccounts"),
    () => QQuickBooksBankAccount
  );
  public readonly QuickBooksExpenseAccounts = new QEntityCollectionPath(
    this.withPrefix("QuickBooksExpenseAccounts"),
    () => QQuickBooksExpenseAccount
  );
  public readonly QuickBooksLogs = new QEntityCollectionPath(
    this.withPrefix("QuickBooksLogs"),
    () => QQuickBooksLog
  );
  public readonly QuickBooksSettings = new QEntityCollectionPath(
    this.withPrefix("QuickBooksSettings"),
    () => QQuickBooksSetting
  );
  public readonly Records = new QEntityCollectionPath(
    this.withPrefix("Records"),
    () => QRecord
  );
  public readonly RecordFolders = new QEntityCollectionPath(
    this.withPrefix("RecordFolders"),
    () => QRecordFolder
  );
  public readonly ReportFirms = new QEntityCollectionPath(
    this.withPrefix("ReportFirms"),
    () => QReportFirm
  );
  public readonly RoleTemplates = new QEntityCollectionPath(
    this.withPrefix("RoleTemplates"),
    () => QRoleTemplate
  );
  public readonly StandardExhibits = new QEntityCollectionPath(
    this.withPrefix("StandardExhibits"),
    () => QStandardExhibit
  );
  public readonly StandardWitnesses = new QEntityCollectionPath(
    this.withPrefix("StandardWitnesses"),
    () => QStandardWitness
  );
  public readonly Ticklers = new QEntityCollectionPath(
    this.withPrefix("Ticklers"),
    () => QTickler
  );
  public readonly TicklerTemplates = new QEntityCollectionPath(
    this.withPrefix("TicklerTemplates"),
    () => QTicklerTemplate
  );
  public readonly TrialExhibits = new QEntityCollectionPath(
    this.withPrefix("TrialExhibits"),
    () => QTrialExhibit
  );
  public readonly TrialItems = new QEntityCollectionPath(
    this.withPrefix("TrialItems"),
    () => QTrialItem
  );
  public readonly TwilioPhones = new QEntityCollectionPath(
    this.withPrefix("TwilioPhones"),
    () => QTwilioPhone
  );
  public readonly IntakeClientLoginSummaries = new QEntityCollectionPath(
    this.withPrefix("IntakeClientLoginSummaries"),
    () => QIntakeClientLoginSummary
  );
  public readonly SecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("SecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
  public readonly AuthorizedEmailSenders = new QEntityCollectionPath(
    this.withPrefix("AuthorizedEmailSenders"),
    () => QAuthorizedEmailSender
  );
}

export const qFirm = new QFirm();

export class QFirmCustomField extends QueryObject {
  public readonly FirmCustomFieldId = new QNumberPath(
    this.withPrefix("FirmCustomFieldId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly CustomFieldTypeId = new QNumberPath(
    this.withPrefix("CustomFieldTypeId")
  );
  public readonly CustomFieldName = new QStringPath(
    this.withPrefix("CustomFieldName")
  );
  public readonly CustomFieldHelperData = new QStringPath(
    this.withPrefix("CustomFieldHelperData")
  );
  public readonly IntakeField = new QBooleanPath(
    this.withPrefix("IntakeField")
  );
  public readonly CustomFieldType = new QEntityPath(
    this.withPrefix("CustomFieldType"),
    () => QCustomFieldType
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CustomFields = new QEntityCollectionPath(
    this.withPrefix("CustomFields"),
    () => QCustomField
  );
}

export const qFirmCustomField = new QFirmCustomField();

export class QFirmCustomFieldId extends QId<FirmCustomFieldId> {
  private readonly params = [new QNumberParam("FirmCustomFieldId")];

  getParams() {
    return this.params;
  }
}

export class QIntakeClientLoginSummary extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly UserName = new QStringPath(this.withPrefix("UserName"));
  public readonly IsDeactivated = new QBooleanPath(
    this.withPrefix("IsDeactivated")
  );
  public readonly LastLoginDate = new QDateTimeOffsetPath(
    this.withPrefix("LastLoginDate")
  );
  public readonly TokenExpiration = new QDateTimeOffsetPath(
    this.withPrefix("TokenExpiration")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawsuitName = new QStringPath(this.withPrefix("LawsuitName"));
  public readonly LawsuitTypeName = new QStringPath(
    this.withPrefix("LawsuitTypeName")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly Status = new QStringPath(this.withPrefix("Status"));
  public readonly IntakeClientLogin = new QEntityPath(
    this.withPrefix("IntakeClientLogin"),
    () => QIntakeClientLogin
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qIntakeClientLoginSummary = new QIntakeClientLoginSummary();

export class QIntakeClientLoginSummaryId extends QId<IntakeClientLoginSummaryId> {
  private readonly params = [
    new QNumberParam("Id"),
    new QStringParam("UserName"),
    new QBooleanParam("IsDeactivated"),
    new QNumberParam("FirmId"),
    new QStringParam("LawsuitName"),
    new QStringParam("LawsuitTypeName"),
    new QNumberParam("LawsuitId"),
    new QStringParam("Status"),
  ];

  getParams() {
    return this.params;
  }
}

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

export class QCustomAttribute extends QueryObject {
  public readonly id = new QNumberPath(this.withPrefix("id"));
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly Group = new QStringPath(this.withPrefix("Group"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly Type = new QStringPath(this.withPrefix("Type"));
  public readonly ValueCol = new QStringPath(this.withPrefix("ValueCol"));
  public readonly IntakeField = new QBooleanPath(
    this.withPrefix("IntakeField")
  );
  public readonly CustomFieldHelperData = new QStringPath(
    this.withPrefix("CustomFieldHelperData")
  );
  public readonly DropDownSimple = new QCollectionPath(
    this.withPrefix("DropDownSimple"),
    () => QStringCollection
  );
  public readonly FormValue = new QStringPath(this.withPrefix("FormValue"));
  public readonly firmCustomField = new QEntityPath(
    this.withPrefix("firmCustomField"),
    () => QFirmCustomField
  );
  public readonly customField = new QEntityPath(
    this.withPrefix("customField"),
    () => QCustomField
  );
  public readonly customFieldValue = new QEntityPath(
    this.withPrefix("customFieldValue"),
    () => QCustomFieldValue
  );
  public readonly customFieldType = new QEntityPath(
    this.withPrefix("customFieldType"),
    () => QCustomFieldType
  );
}

export const qCustomAttribute = new QCustomAttribute();

export class QCustomAttributeId extends QId<CustomAttributeId> {
  private readonly params = [new QNumberParam("id")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitParty extends QueryObject {
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly LawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("LawsuitPartyTypeId")
  );
  public readonly PrimaryFlag = new QBooleanPath(
    this.withPrefix("PrimaryFlag")
  );
  public readonly ActiveFlag = new QBooleanPath(this.withPrefix("ActiveFlag"));
  public readonly BillableRate = new QNumberPath(
    this.withPrefix("BillableRate")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly SubType = new QStringPath(this.withPrefix("SubType"));
  public readonly ClientFlag = new QBooleanPath(this.withPrefix("ClientFlag"));
  public readonly InsuranceClaimsByCompany = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimsByCompany"),
    () => QInsuranceClaim
  );
  public readonly InsuranceClaimsByInsured = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimsByInsured"),
    () => QInsuranceClaim
  );
  public readonly InsuranceClaimsByTiedTo = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimsByTiedTo"),
    () => QInsuranceClaim
  );
  public readonly CourtLitigations = new QEntityCollectionPath(
    this.withPrefix("CourtLitigations"),
    () => QLitigation
  );
  public readonly JudgeLitigations = new QEntityCollectionPath(
    this.withPrefix("JudgeLitigations"),
    () => QLitigation
  );
  public readonly ADRs = new QEntityCollectionPath(
    this.withPrefix("ADRs"),
    () => QADR
  );
  public readonly DeponentDepositions = new QEntityCollectionPath(
    this.withPrefix("DeponentDepositions"),
    () => QDeposition
  );
  public readonly DeposerDepositions = new QEntityCollectionPath(
    this.withPrefix("DeposerDepositions"),
    () => QDeposition
  );
  public readonly RecorderDepositions = new QEntityCollectionPath(
    this.withPrefix("RecorderDepositions"),
    () => QDeposition
  );
  public readonly PayeeExpenses = new QEntityCollectionPath(
    this.withPrefix("PayeeExpenses"),
    () => QExpense
  );
  public readonly SubrogeeLienHolderLienSubrogations =
    new QEntityCollectionPath(
      this.withPrefix("SubrogeeLienHolderLienSubrogations"),
      () => QLienSubrogation
    );
  public readonly MedicalProviders = new QEntityCollectionPath(
    this.withPrefix("MedicalProviders"),
    () => QMedicalProvider
  );
  public readonly RepairCompanyPropertyDamages = new QEntityCollectionPath(
    this.withPrefix("RepairCompanyPropertyDamages"),
    () => QPropertyDamage
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly LawsuitPartyType = new QEntityPath(
    this.withPrefix("LawsuitPartyType"),
    () => QLawsuitPartyType
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
  public readonly AttorneyFeeInterest = new QEntityPath(
    this.withPrefix("AttorneyFeeInterest"),
    () => QAttorneyFeeInterest
  );
  public readonly Defendants = new QEntityCollectionPath(
    this.withPrefix("Defendants"),
    () => QDefendantAttorney
  );
  public readonly DefendantAttorneys = new QEntityCollectionPath(
    this.withPrefix("DefendantAttorneys"),
    () => QDefendantAttorney
  );
  public readonly DefendantLawsuitParties = new QEntityCollectionPath(
    this.withPrefix("DefendantLawsuitParties"),
    () => QDefendantLawsuitParty
  );
  public readonly EconomicLosses = new QEntityCollectionPath(
    this.withPrefix("EconomicLosses"),
    () => QEconomicLoss
  );
  public readonly InsuranceClaimsByAdjuster = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimsByAdjuster"),
    () => QInsuranceClaim
  );
  public readonly InsurancePoliciesByCompany = new QEntityCollectionPath(
    this.withPrefix("InsurancePoliciesByCompany"),
    () => QInsurancePolicy
  );
  public readonly InsurancePoliciesByInsured = new QEntityCollectionPath(
    this.withPrefix("InsurancePoliciesByInsured"),
    () => QInsurancePolicy
  );
  public readonly InsurancePoliciesByTiedTo = new QEntityCollectionPath(
    this.withPrefix("InsurancePoliciesByTiedTo"),
    () => QInsurancePolicy
  );
  public readonly Investigators = new QEntityCollectionPath(
    this.withPrefix("Investigators"),
    () => QInvestigator
  );
  public readonly LawsuitRoles = new QEntityCollectionPath(
    this.withPrefix("LawsuitRoles"),
    () => QLawsuitRole
  );
  public readonly MedicalEvaluationsByDoctor = new QEntityCollectionPath(
    this.withPrefix("MedicalEvaluationsByDoctor"),
    () => QMedicalEvaluation
  );
  public readonly MedicalEvaluationsByPrepBy = new QEntityCollectionPath(
    this.withPrefix("MedicalEvaluationsByPrepBy"),
    () => QMedicalEvaluation
  );
  public readonly MedicalEvaluationsByRequestor = new QEntityCollectionPath(
    this.withPrefix("MedicalEvaluationsByRequestor"),
    () => QMedicalEvaluation
  );
  public readonly PIPBenefits = new QEntityCollectionPath(
    this.withPrefix("PIPBenefits"),
    () => QPIPBenefit
  );
  public readonly PlaintiffLawsuitParties = new QEntityCollectionPath(
    this.withPrefix("PlaintiffLawsuitParties"),
    () => QPlaintiffLawsuitParty
  );
  public readonly PoliceReports = new QEntityCollectionPath(
    this.withPrefix("PoliceReports"),
    () => QPoliceReport
  );
  public readonly AdjusterPropertyDamages = new QEntityCollectionPath(
    this.withPrefix("AdjusterPropertyDamages"),
    () => QPropertyDamage
  );
  public readonly CompanyPropertyDamages = new QEntityCollectionPath(
    this.withPrefix("CompanyPropertyDamages"),
    () => QPropertyDamage
  );
  public readonly PlaintiffPropertyDamages = new QEntityCollectionPath(
    this.withPrefix("PlaintiffPropertyDamages"),
    () => QPropertyDamage
  );
  public readonly Ticklers = new QEntityCollectionPath(
    this.withPrefix("Ticklers"),
    () => QTickler
  );
  public readonly Witness = new QEntityPath(
    this.withPrefix("Witness"),
    () => QWitness
  );
}

export const qLawsuitParty = new QLawsuitParty();

export class QLawsuitPartyId extends QId<LawsuitPartyId> {
  private readonly params = [new QNumberParam("LawsuitPartyId")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitPartyType extends QueryObject {
  public readonly LawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("LawsuitPartyTypeId")
  );
  public readonly LawsuitPartyTypeName = new QStringPath(
    this.withPrefix("LawsuitPartyTypeName")
  );
  public readonly DocumentTemplateRecipient = new QStringPath(
    this.withPrefix("DocumentTemplateRecipient")
  );
  public readonly DocumentDivId = new QStringPath(
    this.withPrefix("DocumentDivId")
  );
  public readonly DeponentDepositions = new QEntityCollectionPath(
    this.withPrefix("DeponentDepositions"),
    () => QDeposition
  );
  public readonly DiscoveryOfDepositions = new QEntityCollectionPath(
    this.withPrefix("DiscoveryOfDepositions"),
    () => QDeposition
  );
  public readonly DocumentTemplates = new QEntityCollectionPath(
    this.withPrefix("DocumentTemplates"),
    () => QDocumentTemplate
  );
  public readonly LawsuitParties = new QEntityCollectionPath(
    this.withPrefix("LawsuitParties"),
    () => QLawsuitParty
  );
  public readonly MailMerges = new QEntityCollectionPath(
    this.withPrefix("MailMerges"),
    () => QMailMerge
  );
}

export const qLawsuitPartyType = new QLawsuitPartyType();

export class QLawsuitPartyTypeId extends QId<LawsuitPartyTypeId> {
  private readonly params = [new QNumberParam("LawsuitPartyTypeId")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitPhaseDate extends QueryObject {
  public readonly LawsuitPhaseDateId = new QNumberPath(
    this.withPrefix("LawsuitPhaseDateId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly LawsuitPhaseTypeId = new QNumberPath(
    this.withPrefix("LawsuitPhaseTypeId")
  );
  public readonly EnteredDate = new QDateTimeOffsetPath(
    this.withPrefix("EnteredDate")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly LawsuitPhaseType = new QEntityPath(
    this.withPrefix("LawsuitPhaseType"),
    () => QLawsuitPhaseType
  );
}

export const qLawsuitPhaseDate = new QLawsuitPhaseDate();

export class QLawsuitPhaseDateId extends QId<LawsuitPhaseDateId> {
  private readonly params = [new QNumberParam("LawsuitPhaseDateId")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitPhaseType extends QueryObject {
  public readonly LawsuitPhaseTypeId = new QNumberPath(
    this.withPrefix("LawsuitPhaseTypeId")
  );
  public readonly LawsuitPhaseTypeName = new QStringPath(
    this.withPrefix("LawsuitPhaseTypeName")
  );
  public readonly Lawsuits = new QEntityCollectionPath(
    this.withPrefix("Lawsuits"),
    () => QLawsuit
  );
  public readonly LawsuitPhaseDates = new QEntityCollectionPath(
    this.withPrefix("LawsuitPhaseDates"),
    () => QLawsuitPhaseDate
  );
  public readonly SubPhaseTypes = new QEntityCollectionPath(
    this.withPrefix("SubPhaseTypes"),
    () => QSubPhaseType
  );
  public readonly CreateTicklerTemplates = new QEntityCollectionPath(
    this.withPrefix("CreateTicklerTemplates"),
    () => QTicklerTemplate
  );
  public readonly ApplicableTicklerTemplates = new QEntityCollectionPath(
    this.withPrefix("ApplicableTicklerTemplates"),
    () => QTicklerTemplate
  );
}

export const qLawsuitPhaseType = new QLawsuitPhaseType();

export class QLawsuitPhaseTypeId extends QId<LawsuitPhaseTypeId> {
  private readonly params = [new QNumberParam("LawsuitPhaseTypeId")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitType extends QueryObject {
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly LawsuitTypeName = new QStringPath(
    this.withPrefix("LawsuitTypeName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly DocMgmtFeePerCase = new QNumberPath(
    this.withPrefix("DocMgmtFeePerCase")
  );
  public readonly TicklersOn = new QBooleanPath(this.withPrefix("TicklersOn"));
  public readonly AccidentFieldsOn = new QBooleanPath(
    this.withPrefix("AccidentFieldsOn")
  );
  public readonly MasterLawsuitId = new QNumberPath(
    this.withPrefix("MasterLawsuitId")
  );
  public readonly ChildLawsuitTypeId = new QNumberPath(
    this.withPrefix("ChildLawsuitTypeId")
  );
  public readonly SystemTemplateId = new QNumberPath(
    this.withPrefix("SystemTemplateId")
  );
  public readonly DocMgmtFeeCasePacerCut = new QNumberPath(
    this.withPrefix("DocMgmtFeeCasePacerCut")
  );
  public readonly MinFee = new QNumberPath(this.withPrefix("MinFee"));
  public readonly MaxFee = new QNumberPath(this.withPrefix("MaxFee"));
  public readonly ClosingFee = new QNumberPath(this.withPrefix("ClosingFee"));
  public readonly MonthlyFee = new QNumberPath(this.withPrefix("MonthlyFee"));
  public readonly DeferredMonths = new QNumberPath(
    this.withPrefix("DeferredMonths")
  );
  public readonly BillingType = new QStringPath(this.withPrefix("BillingType"));
  public readonly CPDMessageEnabled = new QBooleanPath(
    this.withPrefix("CPDMessageEnabled")
  );
  public readonly SettingsJson = new QStringPath(
    this.withPrefix("SettingsJson")
  );
  public readonly ChildLawsuitType = new QEntityPath(
    this.withPrefix("ChildLawsuitType"),
    () => QLawsuitType
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly MasterLawsuit = new QEntityPath(
    this.withPrefix("MasterLawsuit"),
    () => QLawsuit
  );
  public readonly GlobalLawsuitType = new QEntityPath(
    this.withPrefix("GlobalLawsuitType"),
    () => QLawsuitType
  );
  public readonly CaseMenuItems = new QEntityCollectionPath(
    this.withPrefix("CaseMenuItems"),
    () => QCaseMenuItem
  );
  public readonly CPDirectCaseProgresses = new QEntityCollectionPath(
    this.withPrefix("CPDirectCaseProgresses"),
    () => QCPDirectCaseProgress
  );
  public readonly CustomFields = new QEntityCollectionPath(
    this.withPrefix("CustomFields"),
    () => QCustomField
  );
  public readonly Lawsuits = new QEntityCollectionPath(
    this.withPrefix("Lawsuits"),
    () => QLawsuit
  );
  public readonly AccountingSyncGL = new QEntityPath(
    this.withPrefix("AccountingSyncGL"),
    () => QAccountingSyncGL
  );
  public readonly MasterLawsuitTypes = new QEntityCollectionPath(
    this.withPrefix("MasterLawsuitTypes"),
    () => QLawsuitType
  );
  public readonly GlobalLawsuitTypeLawsuitTypes = new QEntityCollectionPath(
    this.withPrefix("GlobalLawsuitTypeLawsuitTypes"),
    () => QLawsuitType
  );
  public readonly LawsuitTypeClientForms = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeClientForms"),
    () => QLawsuitTypeClientForm
  );
  public readonly LawsuitTypeDocuments = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeDocuments"),
    () => QLawsuitTypeDocument
  );
  public readonly LawsuitTypeTicklers = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeTicklers"),
    () => QLawsuitTypeTickler
  );
  public readonly RoleTemplates = new QEntityCollectionPath(
    this.withPrefix("RoleTemplates"),
    () => QRoleTemplate
  );
  public readonly SubPhaseTypes = new QEntityCollectionPath(
    this.withPrefix("SubPhaseTypes"),
    () => QSubPhaseType
  );
}

export const qLawsuitType = new QLawsuitType();

export class QLawsuitTypeId extends QId<LawsuitTypeId> {
  private readonly params = [new QNumberParam("LawsuitTypeId")];

  getParams() {
    return this.params;
  }
}

export class QPartySummary extends QueryObject {
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly DisplayName = new QStringPath(this.withPrefix("DisplayName"));
  public readonly FirstName = new QStringPath(this.withPrefix("FirstName"));
  public readonly LastName = new QStringPath(this.withPrefix("LastName"));
  public readonly DateOfBirth = new QDateTimeOffsetPath(
    this.withPrefix("DateOfBirth")
  );
  public readonly CompanyName = new QStringPath(this.withPrefix("CompanyName"));
  public readonly SearchName = new QStringPath(this.withPrefix("SearchName"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly QuickEntry = new QBooleanPath(this.withPrefix("QuickEntry"));
  public readonly PartyTypeName = new QStringPath(
    this.withPrefix("PartyTypeName")
  );
  public readonly AddressTypeId = new QNumberPath(
    this.withPrefix("AddressTypeId")
  );
  public readonly AddressTypeName = new QStringPath(
    this.withPrefix("AddressTypeName")
  );
  public readonly AddressLine1 = new QStringPath(
    this.withPrefix("AddressLine1")
  );
  public readonly AddressLine2 = new QStringPath(
    this.withPrefix("AddressLine2")
  );
  public readonly City = new QStringPath(this.withPrefix("City"));
  public readonly County = new QStringPath(this.withPrefix("County"));
  public readonly State = new QStringPath(this.withPrefix("State"));
  public readonly ZipCode = new QStringPath(this.withPrefix("ZipCode"));
  public readonly Country = new QStringPath(this.withPrefix("Country"));
  public readonly PhoneNumber = new QStringPath(this.withPrefix("PhoneNumber"));
  public readonly FaxNumber = new QStringPath(this.withPrefix("FaxNumber"));
  public readonly EmailAddress = new QStringPath(
    this.withPrefix("EmailAddress")
  );
  public readonly NumLawsuits = new QNumberPath(this.withPrefix("NumLawsuits"));
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qPartySummary = new QPartySummary();

export class QPartySummaryId extends QId<PartySummaryId> {
  private readonly params = [new QNumberParam("PartyId")];

  getParams() {
    return this.params;
  }
}

export class PartySummary_QList extends QFunction<PartySummary_ListParams> {
  private readonly params = [new QNumberParam("ids")];

  constructor() {
    super(
      "Default.List",
      new OperationReturnType(
        ReturnTypes.COMPLEX_COLLECTION,
        new QComplexParam("NONE", new QPartySummary())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class QPartyType extends QueryObject {
  public readonly PartyTypeId = new QNumberPath(this.withPrefix("PartyTypeId"));
  public readonly PartyTypeName = new QStringPath(
    this.withPrefix("PartyTypeName")
  );
  public readonly ValidParties = new QStringPath(
    this.withPrefix("ValidParties")
  );
  public readonly Parties = new QEntityCollectionPath(
    this.withPrefix("Parties"),
    () => QParty
  );
}

export const qPartyType = new QPartyType();

export class QPartyTypeId extends QId<PartyTypeId> {
  private readonly params = [new QNumberParam("PartyTypeId")];

  getParams() {
    return this.params;
  }
}

export class QRecord extends QueryObject {
  public readonly RecordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly ContactPartyId = new QNumberPath(
    this.withPrefix("ContactPartyId")
  );
  public readonly RecordName = new QStringPath(this.withPrefix("RecordName"));
  public readonly RecordTypeId = new QNumberPath(
    this.withPrefix("RecordTypeId")
  );
  public readonly ImportDate = new QDateTimeOffsetPath(
    this.withPrefix("ImportDate")
  );
  public readonly RequestDate = new QDateTimeOffsetPath(
    this.withPrefix("RequestDate")
  );
  public readonly Signed = new QBooleanPath(this.withPrefix("Signed"));
  public readonly ImportingUserId = new QNumberPath(
    this.withPrefix("ImportingUserId")
  );
  public readonly RecordSubtypeId = new QNumberPath(
    this.withPrefix("RecordSubtypeId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly RecordFileId = new QNumberPath(
    this.withPrefix("RecordFileId")
  );
  public readonly DocuSignJson = new QStringPath(
    this.withPrefix("DocuSignJson")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly ImportingUser = new QEntityPath(
    this.withPrefix("ImportingUser"),
    () => QParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly Contact = new QEntityPath(
    this.withPrefix("Contact"),
    () => QParty
  );
  public readonly RecordFile = new QEntityPath(
    this.withPrefix("RecordFile"),
    () => QRecordFile
  );
  public readonly RecordSubtype = new QEntityPath(
    this.withPrefix("RecordSubtype"),
    () => QRecordSubtype
  );
  public readonly RecordType = new QEntityPath(
    this.withPrefix("RecordType"),
    () => QRecordType
  );
  public readonly Alerts = new QEntityCollectionPath(
    this.withPrefix("Alerts"),
    () => QAlert
  );
  public readonly Documents = new QEntityCollectionPath(
    this.withPrefix("Documents"),
    () => QDocument
  );
  public readonly SMSAttachments = new QEntityCollectionPath(
    this.withPrefix("SMSAttachments"),
    () => QSMSAttachment
  );
  public readonly TrialPleadings = new QEntityCollectionPath(
    this.withPrefix("TrialPleadings"),
    () => QTrialPleading
  );
}

export const qRecord = new QRecord();

export class QRecordId extends QId<RecordId> {
  private readonly params = [new QNumberParam("RecordId")];

  getParams() {
    return this.params;
  }
}

export class QRecordFile extends QueryObject {
  public readonly RecordFileId = new QNumberPath(
    this.withPrefix("RecordFileId")
  );
  public readonly FileName = new QStringPath(this.withPrefix("FileName"));
  public readonly UploadedAt = new QDateTimeOffsetPath(
    this.withPrefix("UploadedAt")
  );
  public readonly PrimaryFlag = new QBooleanPath(
    this.withPrefix("PrimaryFlag")
  );
  public readonly FileLength = new QNumberPath(this.withPrefix("FileLength"));
  public readonly FileMD5Hash = new QStringPath(this.withPrefix("FileMD5Hash"));
  public readonly RecordFolderId = new QNumberPath(
    this.withPrefix("RecordFolderId")
  );
  public readonly ETag = new QStringPath(this.withPrefix("ETag"));
  public readonly Url = new QStringPath(this.withPrefix("Url"));
  public readonly PublicUrl = new QStringPath(this.withPrefix("PublicUrl"));
  public readonly RecordFolder = new QEntityPath(
    this.withPrefix("RecordFolder"),
    () => QRecordFolder
  );
  public readonly DocumentTemplates = new QEntityCollectionPath(
    this.withPrefix("DocumentTemplates"),
    () => QDocumentTemplate
  );
  public readonly Emails = new QEntityCollectionPath(
    this.withPrefix("Emails"),
    () => QEmail
  );
  public readonly PartiesByImage = new QEntityCollectionPath(
    this.withPrefix("PartiesByImage"),
    () => QParty
  );
  public readonly Records = new QEntityCollectionPath(
    this.withPrefix("Records"),
    () => QRecord
  );
  public readonly RecordFileRelationships = new QEntityCollectionPath(
    this.withPrefix("RecordFileRelationships"),
    () => QRecordFileRelationship
  );
}

export const qRecordFile = new QRecordFile();

export class QRecordFileId extends QId<RecordFileId> {
  private readonly params = [new QNumberParam("RecordFileId")];

  getParams() {
    return this.params;
  }
}

export class RecordFile_QGetUrl extends QFunction<RecordFile_GetUrlParams> {
  private readonly params = [new QNumberParam("key")];

  constructor() {
    super(
      "Default.GetUrl",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QRecordFile())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class RecordFile_QPutUrl extends QFunction<RecordFile_PutUrlParams> {
  private readonly params = [new QNumberParam("key")];

  constructor() {
    super(
      "Default.PutUrl",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QRecordFile())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class RecordFile_QInitiateMultipart extends QFunction<RecordFile_InitiateMultipartParams> {
  private readonly params = [new QNumberParam("key")];

  constructor() {
    super(
      "Default.InitiateMultipart",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QRecordFile())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class RecordFile_QPutMultipartUrl extends QFunction<RecordFile_PutMultipartUrlParams> {
  private readonly params = [
    new QNumberParam("key"),
    new QStringParam("uploadId"),
    new QNumberParam("partNumber"),
  ];

  constructor() {
    super(
      "Default.PutMultipartUrl",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QRecordFile())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class RecordFile_QCompleteMultipart extends QFunction<RecordFile_CompleteMultipartParams> {
  private readonly params = [
    new QNumberParam("key"),
    new QStringParam("uploadId"),
  ];

  constructor() {
    super("Default.CompleteMultipart");
  }

  getParams() {
    return this.params;
  }
}

export class RecordFile_QValidate extends QFunction<RecordFile_ValidateParams> {
  private readonly params = [new QNumberParam("key")];

  constructor() {
    super(
      "Default.Validate",
      new OperationReturnType(
        ReturnTypes.COMPLEX,
        new QComplexParam("NONE", new QRecordFile())
      )
    );
  }

  getParams() {
    return this.params;
  }
}

export class QRecordFolder extends QueryObject {
  public readonly RecordFolderId = new QNumberPath(
    this.withPrefix("RecordFolderId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly FolderPrefix = new QStringPath(
    this.withPrefix("FolderPrefix")
  );
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly DefaultRecordSubtypeId = new QNumberPath(
    this.withPrefix("DefaultRecordSubtypeId")
  );
  public readonly DefaultRecordTypeId = new QNumberPath(
    this.withPrefix("DefaultRecordTypeId")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly RecordSubtype = new QEntityPath(
    this.withPrefix("RecordSubtype"),
    () => QRecordSubtype
  );
  public readonly RecordType = new QEntityPath(
    this.withPrefix("RecordType"),
    () => QRecordType
  );
  public readonly RecordFiles = new QEntityCollectionPath(
    this.withPrefix("RecordFiles"),
    () => QRecordFile
  );
}

export const qRecordFolder = new QRecordFolder();

export class QRecordFolderId extends QId<RecordFolderId> {
  private readonly params = [new QNumberParam("RecordFolderId")];

  getParams() {
    return this.params;
  }
}

export class QSimpleLawsuitSummary extends QueryObject {
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
  public readonly CloseDate = new QDateTimeOffsetPath(
    this.withPrefix("CloseDate")
  );
  public readonly ShortDescription = new QStringPath(
    this.withPrefix("ShortDescription")
  );
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
  public readonly LiteralName = new QStringPath(this.withPrefix("LiteralName"));
  public readonly UrlName = new QStringPath(this.withPrefix("UrlName"));
  public readonly LawsuitPhaseTypeName = new QStringPath(
    this.withPrefix("LawsuitPhaseTypeName")
  );
  public readonly LawsuitTypeName = new QStringPath(
    this.withPrefix("LawsuitTypeName")
  );
  public readonly PlaintiffDisplayName = new QStringPath(
    this.withPrefix("PlaintiffDisplayName")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly AttorneyDisplayName = new QStringPath(
    this.withPrefix("AttorneyDisplayName")
  );
  public readonly AttorneyPartyId = new QNumberPath(
    this.withPrefix("AttorneyPartyId")
  );
  public readonly AttorneyColor = new QStringPath(
    this.withPrefix("AttorneyColor")
  );
  public readonly AttorneyTimezoneOffset = new QNumberPath(
    this.withPrefix("AttorneyTimezoneOffset")
  );
  public readonly AttorneyDaylightSavingFlag = new QBooleanPath(
    this.withPrefix("AttorneyDaylightSavingFlag")
  );
  public readonly ParalegalDisplayName = new QStringPath(
    this.withPrefix("ParalegalDisplayName")
  );
  public readonly ParalegalPartyId = new QNumberPath(
    this.withPrefix("ParalegalPartyId")
  );
  public readonly ParalegalColor = new QStringPath(
    this.withPrefix("ParalegalColor")
  );
  public readonly BillingStartDate = new QDateTimeOffsetPath(
    this.withPrefix("BillingStartDate")
  );
  public readonly BillingStopDate = new QDateTimeOffsetPath(
    this.withPrefix("BillingStopDate")
  );
  public readonly SubPhaseTypeName = new QStringPath(
    this.withPrefix("SubPhaseTypeName")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly MasterSimpleLawsuitSummary = new QEntityPath(
    this.withPrefix("MasterSimpleLawsuitSummary"),
    () => QSimpleLawsuitSummary
  );
  public readonly ChildSimpleLawsuitSummaries = new QEntityCollectionPath(
    this.withPrefix("ChildSimpleLawsuitSummaries"),
    () => QSimpleLawsuitSummary
  );
}

export const qSimpleLawsuitSummary = new QSimpleLawsuitSummary();

export class QSimpleLawsuitSummaryId extends QId<SimpleLawsuitSummaryId> {
  private readonly params = [new QNumberParam("LawsuitId")];

  getParams() {
    return this.params;
  }
}

export class QSubPhaseType extends QueryObject {
  public readonly SubPhaseTypeId = new QNumberPath(
    this.withPrefix("SubPhaseTypeId")
  );
  public readonly LawsuitPhaseTypeId = new QNumberPath(
    this.withPrefix("LawsuitPhaseTypeId")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly SubPhaseTypeName = new QStringPath(
    this.withPrefix("SubPhaseTypeName")
  );
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly Abbrev = new QStringPath(this.withPrefix("Abbrev"));
  public readonly LawsuitPhaseType = new QEntityPath(
    this.withPrefix("LawsuitPhaseType"),
    () => QLawsuitPhaseType
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly Lawsuits = new QEntityCollectionPath(
    this.withPrefix("Lawsuits"),
    () => QLawsuit
  );
}

export const qSubPhaseType = new QSubPhaseType();

export class QSubPhaseTypeId extends QId<SubPhaseTypeId> {
  private readonly params = [new QNumberParam("SubPhaseTypeId")];

  getParams() {
    return this.params;
  }
}

export class QTickler extends QueryObject {
  public readonly TicklerId = new QNumberPath(this.withPrefix("TicklerId"));
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly PhaseAdvancing = new QBooleanPath(
    this.withPrefix("PhaseAdvancing")
  );
  public readonly CreatedDate = new QDateTimeOffsetPath(
    this.withPrefix("CreatedDate")
  );
  public readonly OriginalDueDate = new QDateTimeOffsetPath(
    this.withPrefix("OriginalDueDate")
  );
  public readonly CurrentDueDate = new QDateTimeOffsetPath(
    this.withPrefix("CurrentDueDate")
  );
  public readonly ClosedDate = new QDateTimeOffsetPath(
    this.withPrefix("ClosedDate")
  );
  public readonly ClosedByUserId = new QNumberPath(
    this.withPrefix("ClosedByUserId")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly ReasonForDelay = new QStringPath(
    this.withPrefix("ReasonForDelay")
  );
  public readonly TicklerDetails = new QStringPath(
    this.withPrefix("TicklerDetails")
  );
  public readonly TicklerAnswerId = new QNumberPath(
    this.withPrefix("TicklerAnswerId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly RelatedEntityId = new QNumberPath(
    this.withPrefix("RelatedEntityId")
  );
  public readonly ClosedByUserBool = new QBooleanPath(
    this.withPrefix("ClosedByUserBool")
  );
  public readonly AssignedLawsuitPartyId = new QNumberPath(
    this.withPrefix("AssignedLawsuitPartyId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly TicklerAnswer = new QEntityPath(
    this.withPrefix("TicklerAnswer"),
    () => QTicklerAnswer
  );
  public readonly ClosingUser = new QEntityPath(
    this.withPrefix("ClosingUser"),
    () => QCasePacerUser
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly AssignedLawsuitParty = new QEntityPath(
    this.withPrefix("AssignedLawsuitParty"),
    () => QLawsuitParty
  );
  public readonly TicklerTemplate = new QEntityPath(
    this.withPrefix("TicklerTemplate"),
    () => QTicklerTemplate
  );
  public readonly OriginatingTicklerDocuments = new QEntityCollectionPath(
    this.withPrefix("OriginatingTicklerDocuments"),
    () => QDocument
  );
  public readonly ReceivedTicklerDocuments = new QEntityCollectionPath(
    this.withPrefix("ReceivedTicklerDocuments"),
    () => QDocument
  );
}

export const qTickler = new QTickler();

export class QTicklerId extends QId<TicklerId> {
  private readonly params = [new QNumberParam("TicklerId")];

  getParams() {
    return this.params;
  }
}

export class QCasePacerUserType extends QueryObject {
  public readonly CasePacerUserTypeId = new QNumberPath(
    this.withPrefix("CasePacerUserTypeId")
  );
  public readonly CasePacerUserTypeName = new QStringPath(
    this.withPrefix("CasePacerUserTypeName")
  );
  public readonly CasePacerUsers = new QEntityCollectionPath(
    this.withPrefix("CasePacerUsers"),
    () => QCasePacerUser
  );
}

export const qCasePacerUserType = new QCasePacerUserType();

export class QCasePacerUserTypeId extends QId<CasePacerUserTypeId> {
  private readonly params = [new QNumberParam("CasePacerUserTypeId")];

  getParams() {
    return this.params;
  }
}

export class QIntakeClientLogin extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly UserName = new QStringPath(this.withPrefix("UserName"));
  public readonly Password = new QStringPath(this.withPrefix("Password"));
  public readonly FailedAttempts = new QNumberPath(
    this.withPrefix("FailedAttempts")
  );
  public readonly IsDeactivated = new QBooleanPath(
    this.withPrefix("IsDeactivated")
  );
  public readonly LastLoginDate = new QDateTimeOffsetPath(
    this.withPrefix("LastLoginDate")
  );
  public readonly Token = new QStringPath(this.withPrefix("Token"));
  public readonly TokenExpiration = new QDateTimeOffsetPath(
    this.withPrefix("TokenExpiration")
  );
  public readonly ConfirmedAt = new QDateTimeOffsetPath(
    this.withPrefix("ConfirmedAt")
  );
  public readonly DoNotEmail = new QBooleanPath(this.withPrefix("DoNotEmail"));
  public readonly CPDirectMessages = new QEntityCollectionPath(
    this.withPrefix("CPDirectMessages"),
    () => QCPDirectMessage
  );
  public readonly CPDirectPushTokens = new QEntityCollectionPath(
    this.withPrefix("CPDirectPushTokens"),
    () => QCPDirectPushToken
  );
  public readonly IntakeClientFirms = new QEntityCollectionPath(
    this.withPrefix("IntakeClientFirms"),
    () => QIntakeClientFirm
  );
  public readonly IntakeClientSessions = new QEntityCollectionPath(
    this.withPrefix("IntakeClientSessions"),
    () => QIntakeClientSession
  );
  public readonly IntakeClientLoginSummaries = new QEntityCollectionPath(
    this.withPrefix("IntakeClientLoginSummaries"),
    () => QIntakeClientLoginSummary
  );
}

export const qIntakeClientLogin = new QIntakeClientLogin();

export class QIntakeClientLoginId extends QId<IntakeClientLoginId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QIntakeClientLawsuit extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly IntakeClientFirmId = new QNumberPath(
    this.withPrefix("IntakeClientFirmId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly CPDirectCaseProgressId = new QNumberPath(
    this.withPrefix("CPDirectCaseProgressId")
  );
  public readonly CPDirectCaseProgress = new QEntityPath(
    this.withPrefix("CPDirectCaseProgress"),
    () => QCPDirectCaseProgress
  );
  public readonly IntakeClientFirm = new QEntityPath(
    this.withPrefix("IntakeClientFirm"),
    () => QIntakeClientFirm
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly CPDirectMedicalProviders = new QEntityCollectionPath(
    this.withPrefix("CPDirectMedicalProviders"),
    () => QCPDirectMedicalProvider
  );
  public readonly CPDirectMessages = new QEntityCollectionPath(
    this.withPrefix("CPDirectMessages"),
    () => QCPDirectMessage
  );
}

export const qIntakeClientLawsuit = new QIntakeClientLawsuit();

export class QIntakeClientLawsuitId extends QId<IntakeClientLawsuitId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCaseMenuItem extends QueryObject {
  public readonly CaseMenuItemId = new QNumberPath(
    this.withPrefix("CaseMenuItemId")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly CaseMenuGroupId = new QNumberPath(
    this.withPrefix("CaseMenuGroupId")
  );
  public readonly CaseMenuTabId = new QNumberPath(
    this.withPrefix("CaseMenuTabId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly AlternateTabName = new QStringPath(
    this.withPrefix("AlternateTabName")
  );
  public readonly AlternateGroupName = new QStringPath(
    this.withPrefix("AlternateGroupName")
  );
  public readonly CaseMenuGroup = new QEntityPath(
    this.withPrefix("CaseMenuGroup"),
    () => QCaseMenuGroup
  );
  public readonly CaseMenuTab = new QEntityPath(
    this.withPrefix("CaseMenuTab"),
    () => QCaseMenuTab
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
}

export const qCaseMenuItem = new QCaseMenuItem();

export class QCaseMenuItemId extends QId<CaseMenuItemId> {
  private readonly params = [new QNumberParam("CaseMenuItemId")];

  getParams() {
    return this.params;
  }
}

export class QCaseMenuGroup extends QueryObject {
  public readonly CaseMenuGroupId = new QNumberPath(
    this.withPrefix("CaseMenuGroupId")
  );
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly CaseMenuItems = new QEntityCollectionPath(
    this.withPrefix("CaseMenuItems"),
    () => QCaseMenuItem
  );
}

export const qCaseMenuGroup = new QCaseMenuGroup();

export class QCaseMenuGroupId extends QId<CaseMenuGroupId> {
  private readonly params = [new QNumberParam("CaseMenuGroupId")];

  getParams() {
    return this.params;
  }
}

export class QCaseMenuTab extends QueryObject {
  public readonly CaseMenuTabId = new QNumberPath(
    this.withPrefix("CaseMenuTabId")
  );
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly Controller = new QStringPath(this.withPrefix("Controller"));
  public readonly ActionResult = new QStringPath(
    this.withPrefix("ActionResult")
  );
  public readonly DOM_Id = new QStringPath(this.withPrefix("DOM_Id"));
  public readonly CaseMenuItems = new QEntityCollectionPath(
    this.withPrefix("CaseMenuItems"),
    () => QCaseMenuItem
  );
  public readonly RecordSubtypes = new QEntityCollectionPath(
    this.withPrefix("RecordSubtypes"),
    () => QRecordSubtype
  );
}

export const qCaseMenuTab = new QCaseMenuTab();

export class QCaseMenuTabId extends QId<CaseMenuTabId> {
  private readonly params = [new QNumberParam("CaseMenuTabId")];

  getParams() {
    return this.params;
  }
}

export class QRecordSubtype extends QueryObject {
  public readonly RecordSubtypeId = new QNumberPath(
    this.withPrefix("RecordSubtypeId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly SubtypeName = new QStringPath(this.withPrefix("SubtypeName"));
  public readonly RecordTypeId = new QNumberPath(
    this.withPrefix("RecordTypeId")
  );
  public readonly CaseMenuTabId = new QNumberPath(
    this.withPrefix("CaseMenuTabId")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CaseMenuTab = new QEntityPath(
    this.withPrefix("CaseMenuTab"),
    () => QCaseMenuTab
  );
  public readonly RecordType = new QEntityPath(
    this.withPrefix("RecordType"),
    () => QRecordType
  );
  public readonly Records = new QEntityCollectionPath(
    this.withPrefix("Records"),
    () => QRecord
  );
  public readonly RecordFolders = new QEntityCollectionPath(
    this.withPrefix("RecordFolders"),
    () => QRecordFolder
  );
}

export const qRecordSubtype = new QRecordSubtype();

export class QRecordSubtypeId extends QId<RecordSubtypeId> {
  private readonly params = [new QNumberParam("RecordSubtypeId")];

  getParams() {
    return this.params;
  }
}

export class QRecordType extends QueryObject {
  public readonly RecordTypeId = new QNumberPath(
    this.withPrefix("RecordTypeId")
  );
  public readonly RecordTypeName = new QStringPath(
    this.withPrefix("RecordTypeName")
  );
  public readonly Records = new QEntityCollectionPath(
    this.withPrefix("Records"),
    () => QRecord
  );
  public readonly RecordFolders = new QEntityCollectionPath(
    this.withPrefix("RecordFolders"),
    () => QRecordFolder
  );
  public readonly RecordSubtypes = new QEntityCollectionPath(
    this.withPrefix("RecordSubtypes"),
    () => QRecordSubtype
  );
}

export const qRecordType = new QRecordType();

export class QRecordTypeId extends QId<RecordTypeId> {
  private readonly params = [new QNumberParam("RecordTypeId")];

  getParams() {
    return this.params;
  }
}

export class QDocumentTemplate extends QueryObject {
  public readonly DocumentTemplateID = new QNumberPath(
    this.withPrefix("DocumentTemplateID")
  );
  public readonly DocumentTemplateName = new QStringPath(
    this.withPrefix("DocumentTemplateName")
  );
  public readonly DocumentName = new QStringPath(
    this.withPrefix("DocumentName")
  );
  public readonly Phase = new QStringPath(this.withPrefix("Phase"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly RecordFileId = new QNumberPath(
    this.withPrefix("RecordFileId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly SystemTemplateID = new QNumberPath(
    this.withPrefix("SystemTemplateID")
  );
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly RecipientLawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("RecipientLawsuitPartyTypeId")
  );
  public readonly RecipientInsuranceTypeId = new QNumberPath(
    this.withPrefix("RecipientInsuranceTypeId")
  );
  public readonly SystemDocumentTemplate = new QEntityPath(
    this.withPrefix("SystemDocumentTemplate"),
    () => QDocumentTemplate
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly RecipientLawsuitPartyType = new QEntityPath(
    this.withPrefix("RecipientLawsuitPartyType"),
    () => QLawsuitPartyType
  );
  public readonly RecordFile = new QEntityPath(
    this.withPrefix("RecordFile"),
    () => QRecordFile
  );
  public readonly RoleTemplate = new QEntityPath(
    this.withPrefix("RoleTemplate"),
    () => QRoleTemplate
  );
  public readonly Documents = new QEntityCollectionPath(
    this.withPrefix("Documents"),
    () => QDocument
  );
  public readonly DocumentTemplatesFromSystemTemplate =
    new QEntityCollectionPath(
      this.withPrefix("DocumentTemplatesFromSystemTemplate"),
      () => QDocumentTemplate
    );
  public readonly LawsuitTypeDocuments = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeDocuments"),
    () => QLawsuitTypeDocument
  );
  public readonly Parties = new QEntityCollectionPath(
    this.withPrefix("Parties"),
    () => QParty
  );
}

export const qDocumentTemplate = new QDocumentTemplate();

export class QDocumentTemplateId extends QId<DocumentTemplateId> {
  private readonly params = [new QNumberParam("DocumentTemplateID")];

  getParams() {
    return this.params;
  }
}

export class QAppointmentRecurDate extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly RecurrenceDate = new QDateTimeOffsetPath(
    this.withPrefix("RecurrenceDate")
  );
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
}

export const qAppointmentRecurDate = new QAppointmentRecurDate();

export class QAppointmentRecurDateId extends QId<AppointmentRecurDateId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QLitigation extends QueryObject {
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly CourtPartyId = new QNumberPath(
    this.withPrefix("CourtPartyId")
  );
  public readonly JudgePartyId = new QNumberPath(
    this.withPrefix("JudgePartyId")
  );
  public readonly ComplaintSentDate = new QDateTimeOffsetPath(
    this.withPrefix("ComplaintSentDate")
  );
  public readonly ComplaintFiledDate = new QDateTimeOffsetPath(
    this.withPrefix("ComplaintFiledDate")
  );
  public readonly CrossComplaintFiledDated = new QDateTimeOffsetPath(
    this.withPrefix("CrossComplaintFiledDated")
  );
  public readonly NOIFiledDate = new QDateTimeOffsetPath(
    this.withPrefix("NOIFiledDate")
  );
  public readonly CauseNumber = new QStringPath(this.withPrefix("CauseNumber"));
  public readonly LitigationNotes = new QStringPath(
    this.withPrefix("LitigationNotes")
  );
  public readonly CourtStaff = new QStringPath(this.withPrefix("CourtStaff"));
  public readonly CourtRoom = new QStringPath(this.withPrefix("CourtRoom"));
  public readonly LitigationName = new QStringPath(
    this.withPrefix("LitigationName")
  );
  public readonly InactiveDate = new QDateTimeOffsetPath(
    this.withPrefix("InactiveDate")
  );
  public readonly Court = new QEntityPath(
    this.withPrefix("Court"),
    () => QParty
  );
  public readonly Judge = new QEntityPath(
    this.withPrefix("Judge"),
    () => QParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly ADRs = new QEntityCollectionPath(
    this.withPrefix("ADRs"),
    () => QADR
  );
  public readonly AnswerEnlargements = new QEntityCollectionPath(
    this.withPrefix("AnswerEnlargements"),
    () => QAnswerEnlargement
  );
  public readonly Complaints = new QEntityCollectionPath(
    this.withPrefix("Complaints"),
    () => QComplaint
  );
  public readonly DefendantLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DefendantLitigationAssns"),
    () => QDefendantLitigationAssn
  );
  public readonly DepositionLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DepositionLitigationAssns"),
    () => QDepositionLitigationAssn
  );
  public readonly DiscoveryLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DiscoveryLitigationAssns"),
    () => QDiscoveryLitigationAssn
  );
  public readonly Trials = new QEntityCollectionPath(
    this.withPrefix("Trials"),
    () => QTrial
  );
  public readonly WitnessLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("WitnessLitigationAssns"),
    () => QWitnessLitigationAssn
  );
}

export const qLitigation = new QLitigation();

export class QLitigationId extends QId<LitigationId> {
  private readonly params = [new QNumberParam("LitigationId")];

  getParams() {
    return this.params;
  }
}

export class QAddress extends QueryObject {
  public readonly AddressId = new QNumberPath(this.withPrefix("AddressId"));
  public readonly AddressTypeId = new QNumberPath(
    this.withPrefix("AddressTypeId")
  );
  public readonly AddressLine1 = new QStringPath(
    this.withPrefix("AddressLine1")
  );
  public readonly AddressLine2 = new QStringPath(
    this.withPrefix("AddressLine2")
  );
  public readonly City = new QStringPath(this.withPrefix("City"));
  public readonly County = new QStringPath(this.withPrefix("County"));
  public readonly State = new QStringPath(this.withPrefix("State"));
  public readonly ZipCode = new QStringPath(this.withPrefix("ZipCode"));
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly Country = new QStringPath(this.withPrefix("Country"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly AddressType = new QEntityPath(
    this.withPrefix("AddressType"),
    () => QAddressType
  );
  public readonly CPDirectMedicalProviders = new QEntityCollectionPath(
    this.withPrefix("CPDirectMedicalProviders"),
    () => QCPDirectMedicalProvider
  );
  public readonly PartyAddresses = new QEntityCollectionPath(
    this.withPrefix("PartyAddresses"),
    () => QPartyAddress
  );
}

export const qAddress = new QAddress();

export class QAddressId extends QId<AddressId> {
  private readonly params = [new QNumberParam("AddressId")];

  getParams() {
    return this.params;
  }
}

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

export class QPartyAddress extends QueryObject {
  public readonly PartyAddressId = new QNumberPath(
    this.withPrefix("PartyAddressId")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly AddressId = new QNumberPath(this.withPrefix("AddressId"));
  public readonly IsPrimary = new QBooleanPath(this.withPrefix("IsPrimary"));
  public readonly QBAddrId = new QStringPath(this.withPrefix("QBAddrId"));
  public readonly Address = new QEntityPath(
    this.withPrefix("Address"),
    () => QAddress
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qPartyAddress = new QPartyAddress();

export class QPartyAddressId extends QId<PartyAddressId> {
  private readonly params = [new QNumberParam("PartyAddressId")];

  getParams() {
    return this.params;
  }
}

export class QSMSThread extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly TwilioPhoneId = new QNumberPath(
    this.withPrefix("TwilioPhoneId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly ContactInfoId = new QNumberPath(
    this.withPrefix("ContactInfoId")
  );
  public readonly PhoneNumber = new QStringPath(this.withPrefix("PhoneNumber"));
  public readonly LastReceived = new QDateTimeOffsetPath(
    this.withPrefix("LastReceived")
  );
  public readonly ContactInfo = new QEntityPath(
    this.withPrefix("ContactInfo"),
    () => QContactInfo
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly TwilioPhone = new QEntityPath(
    this.withPrefix("TwilioPhone"),
    () => QTwilioPhone
  );
  public readonly SMSMessages = new QEntityCollectionPath(
    this.withPrefix("SMSMessages"),
    () => QSMSMessage
  );
}

export const qSMSThread = new QSMSThread();

export class QSMSThreadId extends QId<SMSThreadId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QTwilioPhone extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly TwilioPhoneSid = new QStringPath(
    this.withPrefix("TwilioPhoneSid")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PhoneNumber = new QStringPath(this.withPrefix("PhoneNumber"));
  public readonly DateCreated = new QDateTimeOffsetPath(
    this.withPrefix("DateCreated")
  );
  public readonly DateDeactivated = new QDateTimeOffsetPath(
    this.withPrefix("DateDeactivated")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly SMSThreads = new QEntityCollectionPath(
    this.withPrefix("SMSThreads"),
    () => QSMSThread
  );
}

export const qTwilioPhone = new QTwilioPhone();

export class QTwilioPhoneId extends QId<TwilioPhoneId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QSMSMessage extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly TwilioSMSId = new QStringPath(this.withPrefix("TwilioSMSId"));
  public readonly SMSThreadId = new QNumberPath(this.withPrefix("SMSThreadId"));
  public readonly Timestamp = new QDateTimeOffsetPath(
    this.withPrefix("Timestamp")
  );
  public readonly Body = new QStringPath(this.withPrefix("Body"));
  public readonly WasSent = new QBooleanPath(this.withPrefix("WasSent"));
  public readonly Price = new QNumberPath(this.withPrefix("Price"));
  public readonly FirmSenderPartyId = new QNumberPath(
    this.withPrefix("FirmSenderPartyId")
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly SMSThread = new QEntityPath(
    this.withPrefix("SMSThread"),
    () => QSMSThread
  );
  public readonly SMSAttachments = new QEntityCollectionPath(
    this.withPrefix("SMSAttachments"),
    () => QSMSAttachment
  );
}

export const qSMSMessage = new QSMSMessage();

export class QSMSMessageId extends QId<SMSMessageId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QSMSAttachment extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly SMSMessageId = new QNumberPath(
    this.withPrefix("SMSMessageId")
  );
  public readonly RecordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly ContentType = new QStringPath(this.withPrefix("ContentType"));
  public readonly Record = new QEntityPath(
    this.withPrefix("Record"),
    () => QRecord
  );
  public readonly SMSMessage = new QEntityPath(
    this.withPrefix("SMSMessage"),
    () => QSMSMessage
  );
}

export const qSMSAttachment = new QSMSAttachment();

export class QSMSAttachmentId extends QId<SMSAttachmentId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QAnswerEnlargement extends QueryObject {
  public readonly AnswerEnlargementId = new QNumberPath(
    this.withPrefix("AnswerEnlargementId")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly ServiceObtainedDate = new QDateTimeOffsetPath(
    this.withPrefix("ServiceObtainedDate")
  );
  public readonly AnswerReceivedFlag = new QBooleanPath(
    this.withPrefix("AnswerReceivedFlag")
  );
  public readonly AnswerDueDate = new QDateTimeOffsetPath(
    this.withPrefix("AnswerDueDate")
  );
  public readonly ExtensionFiledDate = new QDateTimeOffsetPath(
    this.withPrefix("ExtensionFiledDate")
  );
  public readonly ExtensionGrantedDate = new QDateTimeOffsetPath(
    this.withPrefix("ExtensionGrantedDate")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qAnswerEnlargement = new QAnswerEnlargement();

export class QAnswerEnlargementId extends QId<AnswerEnlargementId> {
  private readonly params = [new QNumberParam("AnswerEnlargementId")];

  getParams() {
    return this.params;
  }
}

export class QCalendarUser extends QueryObject {
  public readonly CalendarUserId = new QNumberPath(
    this.withPrefix("CalendarUserId")
  );
  public readonly CalendarUserGroupId = new QNumberPath(
    this.withPrefix("CalendarUserGroupId")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly CalendarUserGroup = new QEntityPath(
    this.withPrefix("CalendarUserGroup"),
    () => QCalendarUserGroup
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qCalendarUser = new QCalendarUser();

export class QCalendarUserId extends QId<CalendarUserId> {
  private readonly params = [new QNumberParam("CalendarUserId")];

  getParams() {
    return this.params;
  }
}

export class QCalendarUserGroup extends QueryObject {
  public readonly CalendarUserGroupId = new QNumberPath(
    this.withPrefix("CalendarUserGroupId")
  );
  public readonly CalendarGroupName = new QStringPath(
    this.withPrefix("CalendarGroupName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly CalendarUsers = new QEntityCollectionPath(
    this.withPrefix("CalendarUsers"),
    () => QCalendarUser
  );
}

export const qCalendarUserGroup = new QCalendarUserGroup();

export class QCalendarUserGroupId extends QId<CalendarUserGroupId> {
  private readonly params = [new QNumberParam("CalendarUserGroupId")];

  getParams() {
    return this.params;
  }
}

export class QComplaint extends QueryObject {
  public readonly ComplaintElementId = new QNumberPath(
    this.withPrefix("ComplaintElementId")
  );
  public readonly ElementNumber = new QNumberPath(
    this.withPrefix("ElementNumber")
  );
  public readonly ElementText = new QStringPath(this.withPrefix("ElementText"));
  public readonly ElementPartyId = new QNumberPath(
    this.withPrefix("ElementPartyId")
  );
  public readonly ElementPartyTypeId = new QNumberPath(
    this.withPrefix("ElementPartyTypeId")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qComplaint = new QComplaint();

export class QComplaintId extends QId<ComplaintId> {
  private readonly params = [new QNumberParam("ComplaintElementId")];

  getParams() {
    return this.params;
  }
}

export class QDiscovery extends QueryObject {
  public readonly DiscoveryId = new QNumberPath(this.withPrefix("DiscoveryId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly DiscoveryTargetId = new QNumberPath(
    this.withPrefix("DiscoveryTargetId")
  );
  public readonly DiscoveryTypeId = new QNumberPath(
    this.withPrefix("DiscoveryTypeId")
  );
  public readonly DiscoveryRecipientTypeId = new QNumberPath(
    this.withPrefix("DiscoveryRecipientTypeId")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly DefendantPartyId = new QNumberPath(
    this.withPrefix("DefendantPartyId")
  );
  public readonly ReceivedDate = new QDateTimeOffsetPath(
    this.withPrefix("ReceivedDate")
  );
  public readonly SentDate = new QDateTimeOffsetPath(
    this.withPrefix("SentDate")
  );
  public readonly DueDate = new QDateTimeOffsetPath(this.withPrefix("DueDate"));
  public readonly DiscoveryDescription = new QStringPath(
    this.withPrefix("DiscoveryDescription")
  );
  public readonly ExtensionFiledDate = new QDateTimeOffsetPath(
    this.withPrefix("ExtensionFiledDate")
  );
  public readonly ExtensionGrantedDate = new QDateTimeOffsetPath(
    this.withPrefix("ExtensionGrantedDate")
  );
  public readonly Discovr1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("Discovr1SentDate")
  );
  public readonly Discovr2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("Discovr2SentDate")
  );
  public readonly Letter1ToPlaintiffSentDate = new QDateTimeOffsetPath(
    this.withPrefix("Letter1ToPlaintiffSentDate")
  );
  public readonly Letter2ToPlaintiffSentDate = new QDateTimeOffsetPath(
    this.withPrefix("Letter2ToPlaintiffSentDate")
  );
  public readonly AnswersReceivedFromPlaintiffDate = new QDateTimeOffsetPath(
    this.withPrefix("AnswersReceivedFromPlaintiffDate")
  );
  public readonly NonPartyRecipientPartyId = new QNumberPath(
    this.withPrefix("NonPartyRecipientPartyId")
  );
  public readonly CompelFiledDate = new QDateTimeOffsetPath(
    this.withPrefix("CompelFiledDate")
  );
  public readonly CompelGrantedDate = new QDateTimeOffsetPath(
    this.withPrefix("CompelGrantedDate")
  );
  public readonly DueByOrder = new QBooleanPath(this.withPrefix("DueByOrder"));
  public readonly Defendant = new QEntityPath(
    this.withPrefix("Defendant"),
    () => QParty
  );
  public readonly DiscoveryRecipientType = new QEntityPath(
    this.withPrefix("DiscoveryRecipientType"),
    () => QDiscoveryRecipientType
  );
  public readonly DiscoveryTarget = new QEntityPath(
    this.withPrefix("DiscoveryTarget"),
    () => QDiscoveryTarget
  );
  public readonly DiscoveryType = new QEntityPath(
    this.withPrefix("DiscoveryType"),
    () => QDiscoveryType
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly NonPartyRecipient = new QEntityPath(
    this.withPrefix("NonPartyRecipient"),
    () => QParty
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly DiscoveryLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DiscoveryLitigationAssns"),
    () => QDiscoveryLitigationAssn
  );
}

export const qDiscovery = new QDiscovery();

export class QDiscoveryId extends QId<DiscoveryId> {
  private readonly params = [new QNumberParam("DiscoveryId")];

  getParams() {
    return this.params;
  }
}

export class QDiscoveryRecipientType extends QueryObject {
  public readonly DiscoveryRecipientTypeId = new QNumberPath(
    this.withPrefix("DiscoveryRecipientTypeId")
  );
  public readonly DiscoveryRecipientTypeName = new QStringPath(
    this.withPrefix("DiscoveryRecipientTypeName")
  );
  public readonly Discoveries = new QEntityCollectionPath(
    this.withPrefix("Discoveries"),
    () => QDiscovery
  );
}

export const qDiscoveryRecipientType = new QDiscoveryRecipientType();

export class QDiscoveryRecipientTypeId extends QId<DiscoveryRecipientTypeId> {
  private readonly params = [new QNumberParam("DiscoveryRecipientTypeId")];

  getParams() {
    return this.params;
  }
}

export class QDiscoveryTarget extends QueryObject {
  public readonly DiscoveryTargetId = new QNumberPath(
    this.withPrefix("DiscoveryTargetId")
  );
  public readonly DiscoveryTargetName = new QStringPath(
    this.withPrefix("DiscoveryTargetName")
  );
  public readonly Discoveries = new QEntityCollectionPath(
    this.withPrefix("Discoveries"),
    () => QDiscovery
  );
}

export const qDiscoveryTarget = new QDiscoveryTarget();

export class QDiscoveryTargetId extends QId<DiscoveryTargetId> {
  private readonly params = [new QNumberParam("DiscoveryTargetId")];

  getParams() {
    return this.params;
  }
}

export class QDiscoveryType extends QueryObject {
  public readonly DiscoveryTypeId = new QNumberPath(
    this.withPrefix("DiscoveryTypeId")
  );
  public readonly DiscoveryTypeName = new QStringPath(
    this.withPrefix("DiscoveryTypeName")
  );
  public readonly Discoveries = new QEntityCollectionPath(
    this.withPrefix("Discoveries"),
    () => QDiscovery
  );
}

export const qDiscoveryType = new QDiscoveryType();

export class QDiscoveryTypeId extends QId<DiscoveryTypeId> {
  private readonly params = [new QNumberParam("DiscoveryTypeId")];

  getParams() {
    return this.params;
  }
}

export class QDiscoveryLitigationAssn extends QueryObject {
  public readonly DiscoveryLitigationAssnId = new QNumberPath(
    this.withPrefix("DiscoveryLitigationAssnId")
  );
  public readonly DiscoveryId = new QNumberPath(this.withPrefix("DiscoveryId"));
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly Discovery = new QEntityPath(
    this.withPrefix("Discovery"),
    () => QDiscovery
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
}

export const qDiscoveryLitigationAssn = new QDiscoveryLitigationAssn();

export class QDiscoveryLitigationAssnId extends QId<DiscoveryLitigationAssnId> {
  private readonly params = [new QNumberParam("DiscoveryLitigationAssnId")];

  getParams() {
    return this.params;
  }
}

export class QDocument extends QueryObject {
  public readonly DocumentID = new QNumberPath(this.withPrefix("DocumentID"));
  public readonly LawsuitID = new QNumberPath(this.withPrefix("LawsuitID"));
  public readonly DocumentTemplateID = new QNumberPath(
    this.withPrefix("DocumentTemplateID")
  );
  public readonly DateCreated = new QDateTimeOffsetPath(
    this.withPrefix("DateCreated")
  );
  public readonly DateSent = new QDateTimeOffsetPath(
    this.withPrefix("DateSent")
  );
  public readonly DateReceived = new QDateTimeOffsetPath(
    this.withPrefix("DateReceived")
  );
  public readonly ReceivedFromPartyID = new QNumberPath(
    this.withPrefix("ReceivedFromPartyID")
  );
  public readonly SentToPartyID = new QNumberPath(
    this.withPrefix("SentToPartyID")
  );
  public readonly OriginatingTicklerID = new QNumberPath(
    this.withPrefix("OriginatingTicklerID")
  );
  public readonly ReceivedTicklerID = new QNumberPath(
    this.withPrefix("ReceivedTicklerID")
  );
  public readonly RecordID = new QNumberPath(this.withPrefix("RecordID"));
  public readonly DocumentTemplate = new QEntityPath(
    this.withPrefix("DocumentTemplate"),
    () => QDocumentTemplate
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly OriginatingTickler = new QEntityPath(
    this.withPrefix("OriginatingTickler"),
    () => QTickler
  );
  public readonly Record = new QEntityPath(
    this.withPrefix("Record"),
    () => QRecord
  );
  public readonly DocumentReceivedFromParty = new QEntityPath(
    this.withPrefix("DocumentReceivedFromParty"),
    () => QParty
  );
  public readonly ReceivedTickler = new QEntityPath(
    this.withPrefix("ReceivedTickler"),
    () => QTickler
  );
  public readonly DocumentSentToParty = new QEntityPath(
    this.withPrefix("DocumentSentToParty"),
    () => QParty
  );
}

export const qDocument = new QDocument();

export class QDocumentId extends QId<DocumentId> {
  private readonly params = [new QNumberParam("DocumentID")];

  getParams() {
    return this.params;
  }
}

export class QTicklerAnswer extends QueryObject {
  public readonly TicklerAnswerId = new QNumberPath(
    this.withPrefix("TicklerAnswerId")
  );
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly Answer = new QStringPath(this.withPrefix("Answer"));
  public readonly Instruction = new QStringPath(this.withPrefix("Instruction"));
  public readonly ResultingAction = new QStringPath(
    this.withPrefix("ResultingAction")
  );
  public readonly TicklerTemplate = new QEntityPath(
    this.withPrefix("TicklerTemplate"),
    () => QTicklerTemplate
  );
  public readonly Ticklers = new QEntityCollectionPath(
    this.withPrefix("Ticklers"),
    () => QTickler
  );
  public readonly TicklerAnswerActions = new QEntityCollectionPath(
    this.withPrefix("TicklerAnswerActions"),
    () => QTicklerAnswerAction
  );
}

export const qTicklerAnswer = new QTicklerAnswer();

export class QTicklerAnswerId extends QId<TicklerAnswerId> {
  private readonly params = [new QNumberParam("TicklerAnswerId")];

  getParams() {
    return this.params;
  }
}

export class QTicklerTemplate extends QueryObject {
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly TicklerNum = new QNumberPath(this.withPrefix("TicklerNum"));
  public readonly TicklerText = new QStringPath(this.withPrefix("TicklerText"));
  public readonly NumDaysOffset = new QNumberPath(
    this.withPrefix("NumDaysOffset")
  );
  public readonly BenchmarkDate = new QStringPath(
    this.withPrefix("BenchmarkDate")
  );
  public readonly PhaseAdvancing = new QBooleanPath(
    this.withPrefix("PhaseAdvancing")
  );
  public readonly EventId = new QNumberPath(this.withPrefix("EventId"));
  public readonly LawsuitPhaseTypeId = new QNumberPath(
    this.withPrefix("LawsuitPhaseTypeId")
  );
  public readonly RelatedEntityType = new QStringPath(
    this.withPrefix("RelatedEntityType")
  );
  public readonly RequiresClosedRelatedTicklers = new QBooleanPath(
    this.withPrefix("RequiresClosedRelatedTicklers")
  );
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CreatePhaseEvent = new QEntityPath(
    this.withPrefix("CreatePhaseEvent"),
    () => QLawsuitPhaseType
  );
  public readonly RoleTemplate = new QEntityPath(
    this.withPrefix("RoleTemplate"),
    () => QRoleTemplate
  );
  public readonly TicklerPhase = new QEntityPath(
    this.withPrefix("TicklerPhase"),
    () => QLawsuitPhaseType
  );
  public readonly LawsuitTypeTicklers = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeTicklers"),
    () => QLawsuitTypeTickler
  );
  public readonly Ticklers = new QEntityCollectionPath(
    this.withPrefix("Ticklers"),
    () => QTickler
  );
  public readonly TicklerAnswers = new QEntityCollectionPath(
    this.withPrefix("TicklerAnswers"),
    () => QTicklerAnswer
  );
  public readonly TicklerCriterias = new QEntityCollectionPath(
    this.withPrefix("TicklerCriterias"),
    () => QTicklerCriteria
  );
  public readonly ParentActions = new QEntityCollectionPath(
    this.withPrefix("ParentActions"),
    () => QTicklerTemplateAction
  );
  public readonly ChildActions = new QEntityCollectionPath(
    this.withPrefix("ChildActions"),
    () => QTicklerTemplateAction
  );
}

export const qTicklerTemplate = new QTicklerTemplate();

export class QTicklerTemplateId extends QId<TicklerTemplateId> {
  private readonly params = [new QNumberParam("TicklerTemplateId")];

  getParams() {
    return this.params;
  }
}

export class QRoleTemplate extends QueryObject {
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly RoleDescription = new QStringPath(
    this.withPrefix("RoleDescription")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly DefaultPartyId = new QNumberPath(
    this.withPrefix("DefaultPartyId")
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly DocumentTemplates = new QEntityCollectionPath(
    this.withPrefix("DocumentTemplates"),
    () => QDocumentTemplate
  );
  public readonly LawsuitRoles = new QEntityCollectionPath(
    this.withPrefix("LawsuitRoles"),
    () => QLawsuitRole
  );
  public readonly LawsuitTypeDocuments = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeDocuments"),
    () => QLawsuitTypeDocument
  );
  public readonly LawsuitTypeTicklers = new QEntityCollectionPath(
    this.withPrefix("LawsuitTypeTicklers"),
    () => QLawsuitTypeTickler
  );
  public readonly TicklerTemplates = new QEntityCollectionPath(
    this.withPrefix("TicklerTemplates"),
    () => QTicklerTemplate
  );
}

export const qRoleTemplate = new QRoleTemplate();

export class QRoleTemplateId extends QId<RoleTemplateId> {
  private readonly params = [new QNumberParam("RoleTemplateId")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitRole extends QueryObject {
  public readonly LawsuitRoleId = new QNumberPath(
    this.withPrefix("LawsuitRoleId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly LawsuitParty = new QEntityPath(
    this.withPrefix("LawsuitParty"),
    () => QLawsuitParty
  );
  public readonly RoleTemplate = new QEntityPath(
    this.withPrefix("RoleTemplate"),
    () => QRoleTemplate
  );
}

export const qLawsuitRole = new QLawsuitRole();

export class QLawsuitRoleId extends QId<LawsuitRoleId> {
  private readonly params = [new QNumberParam("LawsuitRoleId")];

  getParams() {
    return this.params;
  }
}

export class QInsuranceClaim extends QueryObject {
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly InsurancePolicyId = new QNumberPath(
    this.withPrefix("InsurancePolicyId")
  );
  public readonly InsuranceAdjusterLawsuitPartyId = new QNumberPath(
    this.withPrefix("InsuranceAdjusterLawsuitPartyId")
  );
  public readonly ClaimNumber = new QStringPath(this.withPrefix("ClaimNumber"));
  public readonly MedPayPerPerson = new QNumberPath(
    this.withPrefix("MedPayPerPerson")
  );
  public readonly UnderInsuredMotorist = new QNumberPath(
    this.withPrefix("UnderInsuredMotorist")
  );
  public readonly UninsuredMotorist = new QNumberPath(
    this.withPrefix("UninsuredMotorist")
  );
  public readonly InsuranceCompanyCalledDate = new QDateTimeOffsetPath(
    this.withPrefix("InsuranceCompanyCalledDate")
  );
  public readonly RepresentationLtr1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("RepresentationLtr1SentDate")
  );
  public readonly RepresentationLtr2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("RepresentationLtr2SentDate")
  );
  public readonly InsuranceInfoReceivedDate = new QDateTimeOffsetPath(
    this.withPrefix("InsuranceInfoReceivedDate")
  );
  public readonly ClaimNotes = new QStringPath(this.withPrefix("ClaimNotes"));
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly BodilyInjuryLiabilityPerPerson = new QNumberPath(
    this.withPrefix("BodilyInjuryLiabilityPerPerson")
  );
  public readonly BodilyInjuryLiabilityPerAccident = new QNumberPath(
    this.withPrefix("BodilyInjuryLiabilityPerAccident")
  );
  public readonly Dwelling = new QNumberPath(this.withPrefix("Dwelling"));
  public readonly OtherStructures = new QNumberPath(
    this.withPrefix("OtherStructures")
  );
  public readonly PersonalProperty = new QNumberPath(
    this.withPrefix("PersonalProperty")
  );
  public readonly LossofUse = new QNumberPath(this.withPrefix("LossofUse"));
  public readonly OtherCoverage = new QNumberPath(
    this.withPrefix("OtherCoverage")
  );
  public readonly InsuranceAdjuster = new QEntityPath(
    this.withPrefix("InsuranceAdjuster"),
    () => QLawsuitParty
  );
  public readonly InsurancePolicy = new QEntityPath(
    this.withPrefix("InsurancePolicy"),
    () => QInsurancePolicy
  );
  public readonly Negotiations = new QEntityCollectionPath(
    this.withPrefix("Negotiations"),
    () => QNegotiation
  );
  public readonly InsuranceClaimDemands = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimDemands"),
    () => QInsuranceClaimDemand
  );
  public readonly PIPs = new QEntityCollectionPath(
    this.withPrefix("PIPs"),
    () => QPIP
  );
  public readonly PIPBenefits = new QEntityCollectionPath(
    this.withPrefix("PIPBenefits"),
    () => QPIPBenefit
  );
  public readonly PropertyDamages = new QEntityCollectionPath(
    this.withPrefix("PropertyDamages"),
    () => QPropertyDamage
  );
  public readonly SettlementItems = new QEntityCollectionPath(
    this.withPrefix("SettlementItems"),
    () => QSettlementItem
  );
}

export const qInsuranceClaim = new QInsuranceClaim();

export class QInsuranceClaimId extends QId<InsuranceClaimId> {
  private readonly params = [new QNumberParam("InsuranceClaimId")];

  getParams() {
    return this.params;
  }
}

export class QInsurancePolicy extends QueryObject {
  public readonly InsurancePolicyId = new QNumberPath(
    this.withPrefix("InsurancePolicyId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly InsuredLawsuitPartyId = new QNumberPath(
    this.withPrefix("InsuredLawsuitPartyId")
  );
  public readonly InsuranceCompanyLawsuitPartyId = new QNumberPath(
    this.withPrefix("InsuranceCompanyLawsuitPartyId")
  );
  public readonly PolicyNumber = new QStringPath(
    this.withPrefix("PolicyNumber")
  );
  public readonly IsDeleted = new QBooleanPath(this.withPrefix("IsDeleted"));
  public readonly PolicyType = new QStringPath(this.withPrefix("PolicyType"));
  public readonly TiedToLawsuitPartyId = new QNumberPath(
    this.withPrefix("TiedToLawsuitPartyId")
  );
  public readonly InsuranceType = new QStringPath(
    this.withPrefix("InsuranceType")
  );
  public readonly IdNumber = new QStringPath(this.withPrefix("IdNumber"));
  public readonly PlanName = new QStringPath(this.withPrefix("PlanName"));
  public readonly InsuranceCompany = new QEntityPath(
    this.withPrefix("InsuranceCompany"),
    () => QLawsuitParty
  );
  public readonly Insured = new QEntityPath(
    this.withPrefix("Insured"),
    () => QLawsuitParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly TiedTo = new QEntityPath(
    this.withPrefix("TiedTo"),
    () => QLawsuitParty
  );
  public readonly InsuranceClaims = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaims"),
    () => QInsuranceClaim
  );
}

export const qInsurancePolicy = new QInsurancePolicy();

export class QInsurancePolicyId extends QId<InsurancePolicyId> {
  private readonly params = [new QNumberParam("InsurancePolicyId")];

  getParams() {
    return this.params;
  }
}

export class QNegotiation extends QueryObject {
  public readonly NegotiationId = new QNumberPath(
    this.withPrefix("NegotiationId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly NegotiationNotes = new QStringPath(
    this.withPrefix("NegotiationNotes")
  );
  public readonly LitigationThreatSentDate = new QDateTimeOffsetPath(
    this.withPrefix("LitigationThreatSentDate")
  );
  public readonly DemandSentDate = new QDateTimeOffsetPath(
    this.withPrefix("DemandSentDate")
  );
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly CounterOfferSentDate = new QDateTimeOffsetPath(
    this.withPrefix("CounterOfferSentDate")
  );
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Demands = new QEntityCollectionPath(
    this.withPrefix("Demands"),
    () => QDemand
  );
}

export const qNegotiation = new QNegotiation();

export class QNegotiationId extends QId<NegotiationId> {
  private readonly params = [new QNumberParam("NegotiationId")];

  getParams() {
    return this.params;
  }
}

export class QDemand extends QueryObject {
  public readonly DemandId = new QNumberPath(this.withPrefix("DemandId"));
  public readonly NegotiationId = new QNumberPath(
    this.withPrefix("NegotiationId")
  );
  public readonly Accepted = new QBooleanPath(this.withPrefix("Accepted"));
  public readonly Active = new QBooleanPath(this.withPrefix("Active"));
  public readonly DemandLetterDocUrl = new QStringPath(
    this.withPrefix("DemandLetterDocUrl")
  );
  public readonly IntroductoryParagraph = new QStringPath(
    this.withPrefix("IntroductoryParagraph")
  );
  public readonly PersonalInformation = new QStringPath(
    this.withPrefix("PersonalInformation")
  );
  public readonly AccidentFacts = new QStringPath(
    this.withPrefix("AccidentFacts")
  );
  public readonly LiabilityLawId = new QNumberPath(
    this.withPrefix("LiabilityLawId")
  );
  public readonly LiabilityLawText = new QStringPath(
    this.withPrefix("LiabilityLawText")
  );
  public readonly IntangibleDamagesLawId = new QNumberPath(
    this.withPrefix("IntangibleDamagesLawId")
  );
  public readonly IntangibleDamagesLawText = new QStringPath(
    this.withPrefix("IntangibleDamagesLawText")
  );
  public readonly CourseOfTreatmentParagraph = new QStringPath(
    this.withPrefix("CourseOfTreatmentParagraph")
  );
  public readonly LossOfEarningsParagraph = new QStringPath(
    this.withPrefix("LossOfEarningsParagraph")
  );
  public readonly LostWagesLawId = new QNumberPath(
    this.withPrefix("LostWagesLawId")
  );
  public readonly LostWagesLawText = new QStringPath(
    this.withPrefix("LostWagesLawText")
  );
  public readonly CreatedAt = new QDateTimeOffsetPath(
    this.withPrefix("CreatedAt")
  );
  public readonly UpdatedAt = new QDateTimeOffsetPath(
    this.withPrefix("UpdatedAt")
  );
  public readonly ShortFlag = new QBooleanPath(this.withPrefix("ShortFlag"));
  public readonly IntangibleDamagesLaw = new QEntityPath(
    this.withPrefix("IntangibleDamagesLaw"),
    () => QLaw
  );
  public readonly LiabilityLaw = new QEntityPath(
    this.withPrefix("LiabilityLaw"),
    () => QLaw
  );
  public readonly LostWagesLaw = new QEntityPath(
    this.withPrefix("LostWagesLaw"),
    () => QLaw
  );
  public readonly Negotiation = new QEntityPath(
    this.withPrefix("Negotiation"),
    () => QNegotiation
  );
  public readonly CounterOffers = new QEntityCollectionPath(
    this.withPrefix("CounterOffers"),
    () => QCounterOffer
  );
  public readonly DemandLineItems = new QEntityCollectionPath(
    this.withPrefix("DemandLineItems"),
    () => QDemandLineItem
  );
  public readonly InsuranceClaimDemands = new QEntityCollectionPath(
    this.withPrefix("InsuranceClaimDemands"),
    () => QInsuranceClaimDemand
  );
}

export const qDemand = new QDemand();

export class QDemandId extends QId<DemandId> {
  private readonly params = [new QNumberParam("DemandId")];

  getParams() {
    return this.params;
  }
}

export class QLaw extends QueryObject {
  public readonly LawID = new QNumberPath(this.withPrefix("LawID"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawCode = new QStringPath(this.withPrefix("LawCode"));
  public readonly LawText = new QStringPath(this.withPrefix("LawText"));
  public readonly LawType = new QStringPath(this.withPrefix("LawType"));
  public readonly Active = new QBooleanPath(this.withPrefix("Active"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly IntangibleDamagesDemands = new QEntityCollectionPath(
    this.withPrefix("IntangibleDamagesDemands"),
    () => QDemand
  );
  public readonly LiabilityDemands = new QEntityCollectionPath(
    this.withPrefix("LiabilityDemands"),
    () => QDemand
  );
  public readonly LostWagesDemands = new QEntityCollectionPath(
    this.withPrefix("LostWagesDemands"),
    () => QDemand
  );
}

export const qLaw = new QLaw();

export class QLawId extends QId<LawId> {
  private readonly params = [new QNumberParam("LawID")];

  getParams() {
    return this.params;
  }
}

export class QCounterOffer extends QueryObject {
  public readonly CounterOfferId = new QNumberPath(
    this.withPrefix("CounterOfferId")
  );
  public readonly DemandId = new QNumberPath(this.withPrefix("DemandId"));
  public readonly CounterOfferDate = new QDateTimeOffsetPath(
    this.withPrefix("CounterOfferDate")
  );
  public readonly CounterOfferAmount = new QNumberPath(
    this.withPrefix("CounterOfferAmount")
  );
  public readonly CounterOfferTypeId = new QNumberPath(
    this.withPrefix("CounterOfferTypeId")
  );
  public readonly CounterOfferNote = new QStringPath(
    this.withPrefix("CounterOfferNote")
  );
  public readonly Demand = new QEntityPath(
    this.withPrefix("Demand"),
    () => QDemand
  );
  public readonly CounterOfferType = new QEntityPath(
    this.withPrefix("CounterOfferType"),
    () => QCounterOfferType
  );
}

export const qCounterOffer = new QCounterOffer();

export class QCounterOfferId extends QId<CounterOfferId> {
  private readonly params = [new QNumberParam("CounterOfferId")];

  getParams() {
    return this.params;
  }
}

export class QCounterOfferType extends QueryObject {
  public readonly CounterOfferTypeId = new QNumberPath(
    this.withPrefix("CounterOfferTypeId")
  );
  public readonly CounterOfferTypeText = new QStringPath(
    this.withPrefix("CounterOfferTypeText")
  );
  public readonly CounterOffers = new QEntityCollectionPath(
    this.withPrefix("CounterOffers"),
    () => QCounterOffer
  );
}

export const qCounterOfferType = new QCounterOfferType();

export class QCounterOfferTypeId extends QId<CounterOfferTypeId> {
  private readonly params = [new QNumberParam("CounterOfferTypeId")];

  getParams() {
    return this.params;
  }
}

export class QDemandLineItem extends QueryObject {
  public readonly DemandLineItemID = new QNumberPath(
    this.withPrefix("DemandLineItemID")
  );
  public readonly DemandID = new QNumberPath(this.withPrefix("DemandID"));
  public readonly DemandItem = new QStringPath(this.withPrefix("DemandItem"));
  public readonly DemandOrder = new QNumberPath(this.withPrefix("DemandOrder"));
  public readonly DollarAmount = new QNumberPath(
    this.withPrefix("DollarAmount")
  );
  public readonly ItemType = new QStringPath(this.withPrefix("ItemType"));
  public readonly MedicalProviderId = new QNumberPath(
    this.withPrefix("MedicalProviderId")
  );
  public readonly Demand = new QEntityPath(
    this.withPrefix("Demand"),
    () => QDemand
  );
}

export const qDemandLineItem = new QDemandLineItem();

export class QDemandLineItemId extends QId<DemandLineItemId> {
  private readonly params = [new QNumberParam("DemandLineItemID")];

  getParams() {
    return this.params;
  }
}

export class QInsuranceClaimDemand extends QueryObject {
  public readonly InsuranceClaimDemandId = new QNumberPath(
    this.withPrefix("InsuranceClaimDemandId")
  );
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly DemandId = new QNumberPath(this.withPrefix("DemandId"));
  public readonly Demand = new QEntityPath(
    this.withPrefix("Demand"),
    () => QDemand
  );
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
}

export const qInsuranceClaimDemand = new QInsuranceClaimDemand();

export class QInsuranceClaimDemandId extends QId<InsuranceClaimDemandId> {
  private readonly params = [new QNumberParam("InsuranceClaimDemandId")];

  getParams() {
    return this.params;
  }
}

export class QPIP extends QueryObject {
  public readonly PIPId = new QNumberPath(this.withPrefix("PIPId"));
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly DisabliltySlipExpirationDate = new QDateTimeOffsetPath(
    this.withPrefix("DisabliltySlipExpirationDate")
  );
  public readonly Fees = new QNumberPath(this.withPrefix("Fees"));
  public readonly Disburse = new QNumberPath(this.withPrefix("Disburse"));
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly ApplicationForBenefitsDateSent = new QDateTimeOffsetPath(
    this.withPrefix("ApplicationForBenefitsDateSent")
  );
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
  public readonly PIPBenefits = new QEntityCollectionPath(
    this.withPrefix("PIPBenefits"),
    () => QPIPBenefit
  );
}

export const qPIP = new QPIP();

export class QPIPId extends QId<PIPId> {
  private readonly params = [new QNumberParam("PIPId")];

  getParams() {
    return this.params;
  }
}

export class QPIPBenefit extends QueryObject {
  public readonly PIPBenefitsId = new QNumberPath(
    this.withPrefix("PIPBenefitsId")
  );
  public readonly PIPBenefitsTypeId = new QNumberPath(
    this.withPrefix("PIPBenefitsTypeId")
  );
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly EndDate = new QDateTimeOffsetPath(this.withPrefix("EndDate"));
  public readonly Duration = new QNumberPath(this.withPrefix("Duration"));
  public readonly Type = new QStringPath(this.withPrefix("Type"));
  public readonly Rate = new QNumberPath(this.withPrefix("Rate"));
  public readonly Amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly AmountReceived = new QNumberPath(
    this.withPrefix("AmountReceived")
  );
  public readonly Variance = new QNumberPath(this.withPrefix("Variance"));
  public readonly ReceivedDate = new QDateTimeOffsetPath(
    this.withPrefix("ReceivedDate")
  );
  public readonly DemandDate = new QDateTimeOffsetPath(
    this.withPrefix("DemandDate")
  );
  public readonly Note = new QStringPath(this.withPrefix("Note"));
  public readonly PIPId = new QNumberPath(this.withPrefix("PIPId"));
  public readonly ServiceProviderLawsuitPartyId = new QNumberPath(
    this.withPrefix("ServiceProviderLawsuitPartyId")
  );
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
  public readonly PIP = new QEntityPath(this.withPrefix("PIP"), () => QPIP);
  public readonly PIPBenefitsType = new QEntityPath(
    this.withPrefix("PIPBenefitsType"),
    () => QPIPBenefitsType
  );
  public readonly ServiceProviderLawsuitParty = new QEntityPath(
    this.withPrefix("ServiceProviderLawsuitParty"),
    () => QLawsuitParty
  );
}

export const qPIPBenefit = new QPIPBenefit();

export class QPIPBenefitId extends QId<PIPBenefitId> {
  private readonly params = [new QNumberParam("PIPBenefitsId")];

  getParams() {
    return this.params;
  }
}

export class QPIPBenefitsType extends QueryObject {
  public readonly PIPBenefitsTypeId = new QNumberPath(
    this.withPrefix("PIPBenefitsTypeId")
  );
  public readonly TypeName = new QStringPath(this.withPrefix("TypeName"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly PIPBenefits = new QEntityCollectionPath(
    this.withPrefix("PIPBenefits"),
    () => QPIPBenefit
  );
}

export const qPIPBenefitsType = new QPIPBenefitsType();

export class QPIPBenefitsTypeId extends QId<PIPBenefitsTypeId> {
  private readonly params = [new QNumberParam("PIPBenefitsTypeId")];

  getParams() {
    return this.params;
  }
}

export class QPropertyDamage extends QueryObject {
  public readonly PropertyDamageId = new QNumberPath(
    this.withPrefix("PropertyDamageId")
  );
  public readonly PropertyTypeId = new QNumberPath(
    this.withPrefix("PropertyTypeId")
  );
  public readonly PropertyTypeDetails = new QStringPath(
    this.withPrefix("PropertyTypeDetails")
  );
  public readonly RepairCompanyPartyId = new QNumberPath(
    this.withPrefix("RepairCompanyPartyId")
  );
  public readonly AutomobileMake = new QStringPath(
    this.withPrefix("AutomobileMake")
  );
  public readonly AutomobileModel = new QStringPath(
    this.withPrefix("AutomobileModel")
  );
  public readonly AutomobileMiles = new QNumberPath(
    this.withPrefix("AutomobileMiles")
  );
  public readonly AutomobileFairMarketValue = new QNumberPath(
    this.withPrefix("AutomobileFairMarketValue")
  );
  public readonly RepairCost = new QNumberPath(this.withPrefix("RepairCost"));
  public readonly RepairEstimate = new QNumberPath(
    this.withPrefix("RepairEstimate")
  );
  public readonly AdditionalExpensesIncurred = new QNumberPath(
    this.withPrefix("AdditionalExpensesIncurred")
  );
  public readonly PlaintiffLawsuitPartyId = new QNumberPath(
    this.withPrefix("PlaintiffLawsuitPartyId")
  );
  public readonly AdjusterLawsuitPartyId = new QNumberPath(
    this.withPrefix("AdjusterLawsuitPartyId")
  );
  public readonly InsuranceClaimNum = new QStringPath(
    this.withPrefix("InsuranceClaimNum")
  );
  public readonly AutomobileYear = new QNumberPath(
    this.withPrefix("AutomobileYear")
  );
  public readonly PropertyDamageLiability = new QNumberPath(
    this.withPrefix("PropertyDamageLiability")
  );
  public readonly UninsuredPropertyDamage = new QNumberPath(
    this.withPrefix("UninsuredPropertyDamage")
  );
  public readonly UnderInsuredPropertyDamage = new QNumberPath(
    this.withPrefix("UnderInsuredPropertyDamage")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly InsuranceClaimId = new QNumberPath(
    this.withPrefix("InsuranceClaimId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly InsuranceCompanyLawsuitPartyId = new QNumberPath(
    this.withPrefix("InsuranceCompanyLawsuitPartyId")
  );
  public readonly Adjuster = new QEntityPath(
    this.withPrefix("Adjuster"),
    () => QLawsuitParty
  );
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
  public readonly InsuranceCompany = new QEntityPath(
    this.withPrefix("InsuranceCompany"),
    () => QLawsuitParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QLawsuitParty
  );
  public readonly PropertyType = new QEntityPath(
    this.withPrefix("PropertyType"),
    () => QPropertyType
  );
  public readonly RepairCompany = new QEntityPath(
    this.withPrefix("RepairCompany"),
    () => QCompany
  );
}

export const qPropertyDamage = new QPropertyDamage();

export class QPropertyDamageId extends QId<PropertyDamageId> {
  private readonly params = [new QNumberParam("PropertyDamageId")];

  getParams() {
    return this.params;
  }
}

export class QPropertyType extends QueryObject {
  public readonly PropertyTypeId = new QNumberPath(
    this.withPrefix("PropertyTypeId")
  );
  public readonly PropertyTypeName = new QStringPath(
    this.withPrefix("PropertyTypeName")
  );
  public readonly PropertyDamages = new QEntityCollectionPath(
    this.withPrefix("PropertyDamages"),
    () => QPropertyDamage
  );
}

export const qPropertyType = new QPropertyType();

export class QPropertyTypeId extends QId<PropertyTypeId> {
  private readonly params = [new QNumberParam("PropertyTypeId")];

  getParams() {
    return this.params;
  }
}

export class QEconomicLoss extends QueryObject {
  public readonly EconomicLossID = new QNumberPath(
    this.withPrefix("EconomicLossID")
  );
  public readonly LawsuitID = new QNumberPath(this.withPrefix("LawsuitID"));
  public readonly PlaintiffPartyID = new QNumberPath(
    this.withPrefix("PlaintiffPartyID")
  );
  public readonly EmployerLawsuitPartyID = new QNumberPath(
    this.withPrefix("EmployerLawsuitPartyID")
  );
  public readonly LostWages = new QNumberPath(this.withPrefix("LostWages"));
  public readonly LostWagesReq1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("LostWagesReq1SentDate")
  );
  public readonly LostWagesReq2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("LostWagesReq2SentDate")
  );
  public readonly LostWagesNeeded = new QBooleanPath(
    this.withPrefix("LostWagesNeeded")
  );
  public readonly LostWagesReceived = new QBooleanPath(
    this.withPrefix("LostWagesReceived")
  );
  public readonly LostWagesDateCalled = new QDateTimeOffsetPath(
    this.withPrefix("LostWagesDateCalled")
  );
  public readonly LostWagesIncludeInDemand = new QBooleanPath(
    this.withPrefix("LostWagesIncludeInDemand")
  );
  public readonly LostWagesWhileTreating = new QNumberPath(
    this.withPrefix("LostWagesWhileTreating")
  );
  public readonly LostWagesWhileTreatingIncludeInDemand = new QBooleanPath(
    this.withPrefix("LostWagesWhileTreatingIncludeInDemand")
  );
  public readonly LossOfOpportunity = new QNumberPath(
    this.withPrefix("LossOfOpportunity")
  );
  public readonly LossOfOpportunityReq1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("LossOfOpportunityReq1SentDate")
  );
  public readonly LossOfOpportunityReq2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("LossOfOpportunityReq2SentDate")
  );
  public readonly LossOfOpportunityDateCalled = new QDateTimeOffsetPath(
    this.withPrefix("LossOfOpportunityDateCalled")
  );
  public readonly LossOfOpportunityNeeded = new QBooleanPath(
    this.withPrefix("LossOfOpportunityNeeded")
  );
  public readonly LossOfOpportunityReceived = new QBooleanPath(
    this.withPrefix("LossOfOpportunityReceived")
  );
  public readonly LossOfOpportunityIncludeInDemand = new QBooleanPath(
    this.withPrefix("LossOfOpportunityIncludeInDemand")
  );
  public readonly LostWagesWhileTreatingNotes = new QStringPath(
    this.withPrefix("LostWagesWhileTreatingNotes")
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly Employer = new QEntityPath(
    this.withPrefix("Employer"),
    () => QLawsuitParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qEconomicLoss = new QEconomicLoss();

export class QEconomicLossId extends QId<EconomicLossId> {
  private readonly params = [new QNumberParam("EconomicLossID")];

  getParams() {
    return this.params;
  }
}

export class QExpense extends QueryObject {
  public readonly ExpenseId = new QNumberPath(this.withPrefix("ExpenseId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly PayeePartyId = new QNumberPath(
    this.withPrefix("PayeePartyId")
  );
  public readonly ExpenseTypeId = new QNumberPath(
    this.withPrefix("ExpenseTypeId")
  );
  public readonly ClientId = new QNumberPath(this.withPrefix("ClientId"));
  public readonly AttorneyId = new QNumberPath(this.withPrefix("AttorneyId"));
  public readonly AccountNumber = new QStringPath(
    this.withPrefix("AccountNumber")
  );
  public readonly CheckNumber = new QStringPath(this.withPrefix("CheckNumber"));
  public readonly ExpenseDate = new QDateTimeOffsetPath(
    this.withPrefix("ExpenseDate")
  );
  public readonly Amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly Memo = new QStringPath(this.withPrefix("Memo"));
  public readonly PayeeMemo = new QStringPath(this.withPrefix("PayeeMemo"));
  public readonly SettlementID = new QNumberPath(
    this.withPrefix("SettlementID")
  );
  public readonly VoidFlag = new QBooleanPath(this.withPrefix("VoidFlag"));
  public readonly QBTxnId = new QStringPath(this.withPrefix("QBTxnId"));
  public readonly QBActionType = new QStringPath(
    this.withPrefix("QBActionType")
  );
  public readonly QBBankAcct = new QStringPath(this.withPrefix("QBBankAcct"));
  public readonly QBExpenseAcct = new QStringPath(
    this.withPrefix("QBExpenseAcct")
  );
  public readonly RelatedEntityId = new QNumberPath(
    this.withPrefix("RelatedEntityId")
  );
  public readonly RelatedEntityType = new QStringPath(
    this.withPrefix("RelatedEntityType")
  );
  public readonly PaidDate = new QDateTimeOffsetPath(
    this.withPrefix("PaidDate")
  );
  public readonly PaymentAmount = new QNumberPath(
    this.withPrefix("PaymentAmount")
  );
  public readonly PaymentMethodId = new QNumberPath(
    this.withPrefix("PaymentMethodId")
  );
  public readonly InternalNotes = new QStringPath(
    this.withPrefix("InternalNotes")
  );
  public readonly InvoiceNumber = new QStringPath(
    this.withPrefix("InvoiceNumber")
  );
  public readonly ExpenseSyncFlag = new QBooleanPath(
    this.withPrefix("ExpenseSyncFlag")
  );
  public readonly PaymentPartyId = new QNumberPath(
    this.withPrefix("PaymentPartyId")
  );
  public readonly CPPaidDate = new QDateTimeOffsetPath(
    this.withPrefix("CPPaidDate")
  );
  public readonly CPPaidAmount = new QNumberPath(
    this.withPrefix("CPPaidAmount")
  );
  public readonly DueDate = new QDateTimeOffsetPath(this.withPrefix("DueDate"));
  public readonly Attorney = new QEntityPath(
    this.withPrefix("Attorney"),
    () => QParty
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly ExpenseType = new QEntityPath(
    this.withPrefix("ExpenseType"),
    () => QExpenseType
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Payee = new QEntityPath(
    this.withPrefix("Payee"),
    () => QParty
  );
  public readonly PaymentMethod = new QEntityPath(
    this.withPrefix("PaymentMethod"),
    () => QPaymentMethod
  );
  public readonly PaymentParty = new QEntityPath(
    this.withPrefix("PaymentParty"),
    () => QParty
  );
  public readonly Settlement = new QEntityPath(
    this.withPrefix("Settlement"),
    () => QSettlement
  );
  public readonly ActivityLogs = new QEntityCollectionPath(
    this.withPrefix("ActivityLogs"),
    () => QActivityLog
  );
  public readonly SettlementExpenses = new QEntityCollectionPath(
    this.withPrefix("SettlementExpenses"),
    () => QSettlementExpense
  );
}

export const qExpense = new QExpense();

export class QExpenseId extends QId<ExpenseId> {
  private readonly params = [new QNumberParam("ExpenseId")];

  getParams() {
    return this.params;
  }
}

export class QExpenseType extends QueryObject {
  public readonly ExpenseTypeId = new QNumberPath(
    this.withPrefix("ExpenseTypeId")
  );
  public readonly ExpenseTypeName = new QStringPath(
    this.withPrefix("ExpenseTypeName")
  );
  public readonly Expenses = new QEntityCollectionPath(
    this.withPrefix("Expenses"),
    () => QExpense
  );
}

export const qExpenseType = new QExpenseType();

export class QExpenseTypeId extends QId<ExpenseTypeId> {
  private readonly params = [new QNumberParam("ExpenseTypeId")];

  getParams() {
    return this.params;
  }
}

export class QPaymentMethod extends QueryObject {
  public readonly PaymentMethodId = new QNumberPath(
    this.withPrefix("PaymentMethodId")
  );
  public readonly PaymentMethodName = new QStringPath(
    this.withPrefix("PaymentMethodName")
  );
  public readonly Expenses = new QEntityCollectionPath(
    this.withPrefix("Expenses"),
    () => QExpense
  );
}

export const qPaymentMethod = new QPaymentMethod();

export class QPaymentMethodId extends QId<PaymentMethodId> {
  private readonly params = [new QNumberParam("PaymentMethodId")];

  getParams() {
    return this.params;
  }
}

export class QSettlement extends QueryObject {
  public readonly SettlementId = new QNumberPath(
    this.withPrefix("SettlementId")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly AttyFeesPct = new QNumberPath(this.withPrefix("AttyFeesPct"));
  public readonly AttyFeesTotal = new QNumberPath(
    this.withPrefix("AttyFeesTotal")
  );
  public readonly Amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly SettleDate = new QDateTimeOffsetPath(
    this.withPrefix("SettleDate")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly PlaintiffParty = new QEntityPath(
    this.withPrefix("PlaintiffParty"),
    () => QParty
  );
  public readonly Expenses = new QEntityCollectionPath(
    this.withPrefix("Expenses"),
    () => QExpense
  );
  public readonly SettlementExpenses = new QEntityCollectionPath(
    this.withPrefix("SettlementExpenses"),
    () => QSettlementExpense
  );
  public readonly SettlementItems = new QEntityCollectionPath(
    this.withPrefix("SettlementItems"),
    () => QSettlementItem
  );
  public readonly SettlementLienSubs = new QEntityCollectionPath(
    this.withPrefix("SettlementLienSubs"),
    () => QSettlementLienSub
  );
  public readonly SettlementMedicalProviders = new QEntityCollectionPath(
    this.withPrefix("SettlementMedicalProviders"),
    () => QSettlementMedicalProvider
  );
}

export const qSettlement = new QSettlement();

export class QSettlementId extends QId<SettlementId> {
  private readonly params = [new QNumberParam("SettlementId")];

  getParams() {
    return this.params;
  }
}

export class QSettlementExpense extends QueryObject {
  public readonly SettlementExpenseId = new QNumberPath(
    this.withPrefix("SettlementExpenseId")
  );
  public readonly SettlementId = new QNumberPath(
    this.withPrefix("SettlementId")
  );
  public readonly ExpenseId = new QNumberPath(this.withPrefix("ExpenseId"));
  public readonly Include = new QBooleanPath(this.withPrefix("Include"));
  public readonly Expense = new QEntityPath(
    this.withPrefix("Expense"),
    () => QExpense
  );
  public readonly Settlement = new QEntityPath(
    this.withPrefix("Settlement"),
    () => QSettlement
  );
}

export const qSettlementExpense = new QSettlementExpense();

export class QSettlementExpenseId extends QId<SettlementExpenseId> {
  private readonly params = [new QNumberParam("SettlementExpenseId")];

  getParams() {
    return this.params;
  }
}

export class QSettlementItem extends QueryObject {
  public readonly SettlementItemId = new QNumberPath(
    this.withPrefix("SettlementItemId")
  );
  public readonly SettlementId = new QNumberPath(
    this.withPrefix("SettlementId")
  );
  public readonly ItemType = new QStringPath(this.withPrefix("ItemType"));
  public readonly Amount = new QNumberPath(this.withPrefix("Amount"));
  public readonly Received = new QBooleanPath(this.withPrefix("Received"));
  public readonly Deposited = new QBooleanPath(this.withPrefix("Deposited"));
  public readonly Include = new QBooleanPath(this.withPrefix("Include"));
  public readonly ClaimId = new QNumberPath(this.withPrefix("ClaimId"));
  public readonly InsuranceClaim = new QEntityPath(
    this.withPrefix("InsuranceClaim"),
    () => QInsuranceClaim
  );
  public readonly Settlement = new QEntityPath(
    this.withPrefix("Settlement"),
    () => QSettlement
  );
}

export const qSettlementItem = new QSettlementItem();

export class QSettlementItemId extends QId<SettlementItemId> {
  private readonly params = [new QNumberParam("SettlementItemId")];

  getParams() {
    return this.params;
  }
}

export class QSettlementLienSub extends QueryObject {
  public readonly SettlementLienSubId = new QNumberPath(
    this.withPrefix("SettlementLienSubId")
  );
  public readonly SettlementId = new QNumberPath(
    this.withPrefix("SettlementId")
  );
  public readonly LienSubrogationId = new QNumberPath(
    this.withPrefix("LienSubrogationId")
  );
  public readonly LienSubType = new QStringPath(this.withPrefix("LienSubType"));
  public readonly CheckNumber = new QNumberPath(this.withPrefix("CheckNumber"));
  public readonly ClaimAmount = new QNumberPath(this.withPrefix("ClaimAmount"));
  public readonly PaymentAmount = new QNumberPath(
    this.withPrefix("PaymentAmount")
  );
  public readonly NoticeReceivedFlag = new QBooleanPath(
    this.withPrefix("NoticeReceivedFlag")
  );
  public readonly AttorneyFeeLetterSentFlag = new QBooleanPath(
    this.withPrefix("AttorneyFeeLetterSentFlag")
  );
  public readonly ItemizedStatementRequiredFlag = new QBooleanPath(
    this.withPrefix("ItemizedStatementRequiredFlag")
  );
  public readonly ItemizedStatementReceivedFlag = new QBooleanPath(
    this.withPrefix("ItemizedStatementReceivedFlag")
  );
  public readonly PaymentAmountConfirmationFlag = new QBooleanPath(
    this.withPrefix("PaymentAmountConfirmationFlag")
  );
  public readonly PaymentAmountReceivedFlag = new QBooleanPath(
    this.withPrefix("PaymentAmountReceivedFlag")
  );
  public readonly Include = new QBooleanPath(this.withPrefix("Include"));
  public readonly LienSubrogation = new QEntityPath(
    this.withPrefix("LienSubrogation"),
    () => QLienSubrogation
  );
  public readonly Settlement = new QEntityPath(
    this.withPrefix("Settlement"),
    () => QSettlement
  );
}

export const qSettlementLienSub = new QSettlementLienSub();

export class QSettlementLienSubId extends QId<SettlementLienSubId> {
  private readonly params = [new QNumberParam("SettlementLienSubId")];

  getParams() {
    return this.params;
  }
}

export class QLienSubrogation extends QueryObject {
  public readonly LienSubrogationId = new QNumberPath(
    this.withPrefix("LienSubrogationId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly SubrogeeLienHolderPartyId = new QNumberPath(
    this.withPrefix("SubrogeeLienHolderPartyId")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly PaymentTypeId = new QNumberPath(
    this.withPrefix("PaymentTypeId")
  );
  public readonly Type = new QStringPath(this.withPrefix("Type"));
  public readonly NoticeReceivedFlag = new QBooleanPath(
    this.withPrefix("NoticeReceivedFlag")
  );
  public readonly AttorneyFeeLetterSentFlag = new QBooleanPath(
    this.withPrefix("AttorneyFeeLetterSentFlag")
  );
  public readonly ItemizedStatementRequiredFlag = new QBooleanPath(
    this.withPrefix("ItemizedStatementRequiredFlag")
  );
  public readonly ItemizedStatementReceivedFlag = new QBooleanPath(
    this.withPrefix("ItemizedStatementReceivedFlag")
  );
  public readonly PaymentAmountConfirmationFlag = new QBooleanPath(
    this.withPrefix("PaymentAmountConfirmationFlag")
  );
  public readonly PaymentAmountReceivedFlag = new QBooleanPath(
    this.withPrefix("PaymentAmountReceivedFlag")
  );
  public readonly ClaimNumber = new QStringPath(this.withPrefix("ClaimNumber"));
  public readonly ClaimAmount = new QNumberPath(this.withPrefix("ClaimAmount"));
  public readonly PaymentAmount = new QNumberPath(
    this.withPrefix("PaymentAmount")
  );
  public readonly LienSubrogationNotes = new QStringPath(
    this.withPrefix("LienSubrogationNotes")
  );
  public readonly SubrogeeLienHolderOtherName = new QStringPath(
    this.withPrefix("SubrogeeLienHolderOtherName")
  );
  public readonly PlanName = new QStringPath(this.withPrefix("PlanName"));
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly PaymentType = new QEntityPath(
    this.withPrefix("PaymentType"),
    () => QLienSubrogationPaymentType
  );
  public readonly Plaintiff = new QEntityPath(
    this.withPrefix("Plaintiff"),
    () => QParty
  );
  public readonly SubrogeeLienHolder = new QEntityPath(
    this.withPrefix("SubrogeeLienHolder"),
    () => QParty
  );
  public readonly SettlementLienSubs = new QEntityCollectionPath(
    this.withPrefix("SettlementLienSubs"),
    () => QSettlementLienSub
  );
}

export const qLienSubrogation = new QLienSubrogation();

export class QLienSubrogationId extends QId<LienSubrogationId> {
  private readonly params = [new QNumberParam("LienSubrogationId")];

  getParams() {
    return this.params;
  }
}

export class QLienSubrogationPaymentType extends QueryObject {
  public readonly PaymentTypeId = new QNumberPath(
    this.withPrefix("PaymentTypeId")
  );
  public readonly PaymentTypeName = new QStringPath(
    this.withPrefix("PaymentTypeName")
  );
  public readonly LienSubrogations = new QEntityCollectionPath(
    this.withPrefix("LienSubrogations"),
    () => QLienSubrogation
  );
}

export const qLienSubrogationPaymentType = new QLienSubrogationPaymentType();

export class QLienSubrogationPaymentTypeId extends QId<LienSubrogationPaymentTypeId> {
  private readonly params = [new QNumberParam("PaymentTypeId")];

  getParams() {
    return this.params;
  }
}

export class QSettlementMedicalProvider extends QueryObject {
  public readonly SettlementMedicalProviderId = new QNumberPath(
    this.withPrefix("SettlementMedicalProviderId")
  );
  public readonly SettlementId = new QNumberPath(
    this.withPrefix("SettlementId")
  );
  public readonly MedicalProviderId = new QNumberPath(
    this.withPrefix("MedicalProviderId")
  );
  public readonly CheckNumber = new QNumberPath(this.withPrefix("CheckNumber"));
  public readonly TreatmentCost = new QNumberPath(
    this.withPrefix("TreatmentCost")
  );
  public readonly SettlementAmount = new QNumberPath(
    this.withPrefix("SettlementAmount")
  );
  public readonly Verify = new QBooleanPath(this.withPrefix("Verify"));
  public readonly Include = new QBooleanPath(this.withPrefix("Include"));
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly MedicalProvider = new QEntityPath(
    this.withPrefix("MedicalProvider"),
    () => QMedicalProvider
  );
  public readonly Settlement = new QEntityPath(
    this.withPrefix("Settlement"),
    () => QSettlement
  );
}

export const qSettlementMedicalProvider = new QSettlementMedicalProvider();

export class QSettlementMedicalProviderId extends QId<SettlementMedicalProviderId> {
  private readonly params = [new QNumberParam("SettlementMedicalProviderId")];

  getParams() {
    return this.params;
  }
}

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

export class QTreatmentNote extends QueryObject {
  public readonly TreatmentNotesId = new QNumberPath(
    this.withPrefix("TreatmentNotesId")
  );
  public readonly MedicalProviderId = new QNumberPath(
    this.withPrefix("MedicalProviderId")
  );
  public readonly NoteDate = new QDateTimeOffsetPath(
    this.withPrefix("NoteDate")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly MedicalProvider = new QEntityPath(
    this.withPrefix("MedicalProvider"),
    () => QMedicalProvider
  );
}

export const qTreatmentNote = new QTreatmentNote();

export class QTreatmentNoteId extends QId<TreatmentNoteId> {
  private readonly params = [new QNumberParam("TreatmentNotesId")];

  getParams() {
    return this.params;
  }
}

export class QHearing extends QueryObject {
  public readonly HearingId = new QNumberPath(this.withPrefix("HearingId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly HearingTypeId = new QNumberPath(
    this.withPrefix("HearingTypeId")
  );
  public readonly JudgePartyId = new QNumberPath(
    this.withPrefix("JudgePartyId")
  );
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly StatementSentDate = new QDateTimeOffsetPath(
    this.withPrefix("StatementSentDate")
  );
  public readonly ClientConfirmSentDate = new QDateTimeOffsetPath(
    this.withPrefix("ClientConfirmSentDate")
  );
  public readonly ConfirmationCallsFlag = new QBooleanPath(
    this.withPrefix("ConfirmationCallsFlag")
  );
  public readonly DecisionTypeId = new QNumberPath(
    this.withPrefix("DecisionTypeId")
  );
  public readonly DecisionDate = new QDateTimeOffsetPath(
    this.withPrefix("DecisionDate")
  );
  public readonly DecisionSummary = new QStringPath(
    this.withPrefix("DecisionSummary")
  );
  public readonly HearingType = new QEntityPath(
    this.withPrefix("HearingType"),
    () => QHearingType
  );
  public readonly Judge = new QEntityPath(
    this.withPrefix("Judge"),
    () => QParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
}

export const qHearing = new QHearing();

export class QHearingId extends QId<HearingId> {
  private readonly params = [new QNumberParam("HearingId")];

  getParams() {
    return this.params;
  }
}

export class QHearingType extends QueryObject {
  public readonly HearingTypeId = new QNumberPath(
    this.withPrefix("HearingTypeId")
  );
  public readonly HearingTypeName = new QStringPath(
    this.withPrefix("HearingTypeName")
  );
  public readonly HearingTypeRole = new QStringPath(
    this.withPrefix("HearingTypeRole")
  );
  public readonly Hearings = new QEntityCollectionPath(
    this.withPrefix("Hearings"),
    () => QHearing
  );
}

export const qHearingType = new QHearingType();

export class QHearingTypeId extends QId<HearingTypeId> {
  private readonly params = [new QNumberParam("HearingTypeId")];

  getParams() {
    return this.params;
  }
}

export class QCalendarEntryRecur extends QueryObject {
  public readonly CalendarEntryId = new QStringPath(
    this.withPrefix("CalendarEntryId")
  );
  public readonly AppointmentTypeName = new QStringPath(
    this.withPrefix("AppointmentTypeName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly UserId = new QNumberPath(this.withPrefix("UserId"));
  public readonly UserFullName = new QStringPath(
    this.withPrefix("UserFullName")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly LawsuitNumber = new QStringPath(
    this.withPrefix("LawsuitNumber")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly ClientName = new QStringPath(this.withPrefix("ClientName"));
  public readonly AttorneyPartyId = new QNumberPath(
    this.withPrefix("AttorneyPartyId")
  );
  public readonly ParalegalPartyId = new QNumberPath(
    this.withPrefix("ParalegalPartyId")
  );
  public readonly AttorneyDisplayName = new QStringPath(
    this.withPrefix("AttorneyDisplayName")
  );
  public readonly ParalegalDisplayName = new QStringPath(
    this.withPrefix("ParalegalDisplayName")
  );
  public readonly AttorneyColor = new QStringPath(
    this.withPrefix("AttorneyColor")
  );
  public readonly ParalegalColor = new QStringPath(
    this.withPrefix("ParalegalColor")
  );
  public readonly LiteralName = new QStringPath(this.withPrefix("LiteralName"));
  public readonly LawsuitPhaseTypeName = new QStringPath(
    this.withPrefix("LawsuitPhaseTypeName")
  );
  public readonly LawsuitTypeName = new QStringPath(
    this.withPrefix("LawsuitTypeName")
  );
  public readonly UserColor = new QStringPath(this.withPrefix("UserColor"));
  public readonly Subject = new QStringPath(this.withPrefix("Subject"));
  public readonly Location = new QStringPath(this.withPrefix("Location"));
  public readonly StartTime = new QStringPath(this.withPrefix("StartTime"));
  public readonly DurationInMinutes = new QNumberPath(
    this.withPrefix("DurationInMinutes")
  );
  public readonly RRule = new QStringPath(this.withPrefix("RRule"));
  public readonly ExDate = new QStringPath(this.withPrefix("ExDate"));
  public readonly IsRecurring = new QBooleanPath(
    this.withPrefix("IsRecurring")
  );
  public readonly IsAuto = new QBooleanPath(this.withPrefix("IsAuto"));
  public readonly TimezoneOffset = new QNumberPath(
    this.withPrefix("TimezoneOffset")
  );
  public readonly DaylightSavingFlag = new QBooleanPath(
    this.withPrefix("DaylightSavingFlag")
  );
  public readonly TimezoneType = new QNumberPath(
    this.withPrefix("TimezoneType")
  );
  public readonly ApptDescr = new QStringPath(this.withPrefix("ApptDescr"));
  public readonly AppointmentEventTypeName = new QStringPath(
    this.withPrefix("AppointmentEventTypeName")
  );
  public readonly AppointmentTypeId = new QNumberPath(
    this.withPrefix("AppointmentTypeId")
  );
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly AppointmentEventSubTypeId = new QNumberPath(
    this.withPrefix("AppointmentEventSubTypeId")
  );
  public readonly AppointmentEventSubTypeName = new QStringPath(
    this.withPrefix("AppointmentEventSubTypeName")
  );
  public readonly ADRId = new QNumberPath(this.withPrefix("ADRId"));
  public readonly DepositionId = new QNumberPath(
    this.withPrefix("DepositionId")
  );
  public readonly TrialId = new QNumberPath(this.withPrefix("TrialId"));
  public readonly HearingId = new QNumberPath(this.withPrefix("HearingId"));
  public readonly Modified = new QDateTimeOffsetPath(
    this.withPrefix("Modified")
  );
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly User = new QEntityPath(
    this.withPrefix("User"),
    () => QCasePacerUser
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly PlaintiffParty = new QEntityPath(
    this.withPrefix("PlaintiffParty"),
    () => QParty
  );
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
  public readonly AppointmentEventSubType = new QEntityPath(
    this.withPrefix("AppointmentEventSubType"),
    () => QAppointmentEventSubType
  );
  public readonly ADR = new QEntityPath(this.withPrefix("ADR"), () => QADR);
  public readonly Deposition = new QEntityPath(
    this.withPrefix("Deposition"),
    () => QDeposition
  );
  public readonly Trial = new QEntityPath(
    this.withPrefix("Trial"),
    () => QTrial
  );
  public readonly Hearing = new QEntityPath(
    this.withPrefix("Hearing"),
    () => QHearing
  );
}

export const qCalendarEntryRecur = new QCalendarEntryRecur();

export class QCalendarEntryRecurId extends QId<CalendarEntryRecurId> {
  private readonly params = [
    new QStringParam("CalendarEntryId"),
    new QDateTimeOffsetParam("StartDate"),
  ];

  getParams() {
    return this.params;
  }
}

export class QTrial extends QueryObject {
  public readonly TrialID = new QNumberPath(this.withPrefix("TrialID"));
  public readonly TrialChoice = new QStringPath(this.withPrefix("TrialChoice"));
  public readonly TrialNotes = new QStringPath(this.withPrefix("TrialNotes"));
  public readonly TrialRequestSentDate1 = new QDateTimeOffsetPath(
    this.withPrefix("TrialRequestSentDate1")
  );
  public readonly TrialRequestSentDate2 = new QDateTimeOffsetPath(
    this.withPrefix("TrialRequestSentDate2")
  );
  public readonly PSummaryJudgement = new QBooleanPath(
    this.withPrefix("PSummaryJudgement")
  );
  public readonly DSummaryJudgement = new QBooleanPath(
    this.withPrefix("DSummaryJudgement")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
  public readonly TrialExhibits = new QEntityCollectionPath(
    this.withPrefix("TrialExhibits"),
    () => QTrialExhibit
  );
  public readonly TrialPleadings = new QEntityCollectionPath(
    this.withPrefix("TrialPleadings"),
    () => QTrialPleading
  );
  public readonly CalendarEntries = new QEntityCollectionPath(
    this.withPrefix("CalendarEntries"),
    () => QCalendarEntry
  );
  public readonly CalendarEntryRecurs = new QEntityCollectionPath(
    this.withPrefix("CalendarEntryRecurs"),
    () => QCalendarEntryRecur
  );
}

export const qTrial = new QTrial();

export class QTrialId extends QId<TrialId> {
  private readonly params = [new QNumberParam("TrialID")];

  getParams() {
    return this.params;
  }
}

export class QTrialExhibit extends QueryObject {
  public readonly TrialExhibitId = new QNumberPath(
    this.withPrefix("TrialExhibitId")
  );
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly TrialId = new QNumberPath(this.withPrefix("TrialId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Trial = new QEntityPath(
    this.withPrefix("Trial"),
    () => QTrial
  );
  public readonly WitnessExhibitDocumentTrialExhibits =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentTrialExhibits"),
      () => QWitnessExhibitDocumentTrialExhibit
    );
}

export const qTrialExhibit = new QTrialExhibit();

export class QTrialExhibitId extends QId<TrialExhibitId> {
  private readonly params = [new QNumberParam("TrialExhibitId")];

  getParams() {
    return this.params;
  }
}

export class QWitnessExhibitDocumentTrialExhibit extends QueryObject {
  public readonly WitnessExhibitDocumentTrialExhibitsId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentTrialExhibitsId")
  );
  public readonly WitnessExhibitDocumentId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentId")
  );
  public readonly TrialExhibitId = new QNumberPath(
    this.withPrefix("TrialExhibitId")
  );
  public readonly WitnessExhibitPartyType = new QStringPath(
    this.withPrefix("WitnessExhibitPartyType")
  );
  public readonly TrialExhibit = new QEntityPath(
    this.withPrefix("TrialExhibit"),
    () => QTrialExhibit
  );
  public readonly WitnessExhibitDocument = new QEntityPath(
    this.withPrefix("WitnessExhibitDocument"),
    () => QWitnessExhibitDocument
  );
}

export const qWitnessExhibitDocumentTrialExhibit =
  new QWitnessExhibitDocumentTrialExhibit();

export class QWitnessExhibitDocumentTrialExhibitId extends QId<WitnessExhibitDocumentTrialExhibitId> {
  private readonly params = [
    new QNumberParam("WitnessExhibitDocumentTrialExhibitsId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QWitnessExhibitDocument extends QueryObject {
  public readonly WitnessExhibitDocumentId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly IntroParagraph = new QStringPath(
    this.withPrefix("IntroParagraph")
  );
  public readonly PartiesSectionOrder = new QNumberPath(
    this.withPrefix("PartiesSectionOrder")
  );
  public readonly WitnessesSectionOrder = new QNumberPath(
    this.withPrefix("WitnessesSectionOrder")
  );
  public readonly ProvidersSectionOrder = new QNumberPath(
    this.withPrefix("ProvidersSectionOrder")
  );
  public readonly EmployersSectionOrder = new QNumberPath(
    this.withPrefix("EmployersSectionOrder")
  );
  public readonly OtherWitnessesSectionOrder = new QNumberPath(
    this.withPrefix("OtherWitnessesSectionOrder")
  );
  public readonly StandardWitnessesSectionOrder = new QNumberPath(
    this.withPrefix("StandardWitnessesSectionOrder")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly WitnessExhibitDocumentParties = new QEntityCollectionPath(
    this.withPrefix("WitnessExhibitDocumentParties"),
    () => QWitnessExhibitDocumentParty
  );
  public readonly WitnessExhibitDocumentStandardExhibits =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentStandardExhibits"),
      () => QWitnessExhibitDocumentStandardExhibit
    );
  public readonly WitnessExhibitDocumentStandardWitnesses =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentStandardWitnesses"),
      () => QWitnessExhibitDocumentStandardWitness
    );
  public readonly WitnessExhibitDocumentTrialExhibits =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentTrialExhibits"),
      () => QWitnessExhibitDocumentTrialExhibit
    );
}

export const qWitnessExhibitDocument = new QWitnessExhibitDocument();

export class QWitnessExhibitDocumentId extends QId<WitnessExhibitDocumentId> {
  private readonly params = [new QNumberParam("WitnessExhibitDocumentId")];

  getParams() {
    return this.params;
  }
}

export class QWitnessExhibitDocumentParty extends QueryObject {
  public readonly WitnessExhibitDocumentPartiesId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentPartiesId")
  );
  public readonly WitnessExhibitDocumentId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentId")
  );
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly WitnessExhibitPartyType = new QStringPath(
    this.withPrefix("WitnessExhibitPartyType")
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
  public readonly WitnessExhibitDocument = new QEntityPath(
    this.withPrefix("WitnessExhibitDocument"),
    () => QWitnessExhibitDocument
  );
}

export const qWitnessExhibitDocumentParty = new QWitnessExhibitDocumentParty();

export class QWitnessExhibitDocumentPartyId extends QId<WitnessExhibitDocumentPartyId> {
  private readonly params = [
    new QNumberParam("WitnessExhibitDocumentPartiesId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QWitnessExhibitDocumentStandardExhibit extends QueryObject {
  public readonly WitnessExhibitDocumentStandardExhibitsId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentStandardExhibitsId")
  );
  public readonly WitnessExhibitDocumentId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentId")
  );
  public readonly StandardExhibitId = new QNumberPath(
    this.withPrefix("StandardExhibitId")
  );
  public readonly WitnessExhibitPartyType = new QStringPath(
    this.withPrefix("WitnessExhibitPartyType")
  );
  public readonly StandardExhibit = new QEntityPath(
    this.withPrefix("StandardExhibit"),
    () => QStandardExhibit
  );
  public readonly WitnessExhibitDocument = new QEntityPath(
    this.withPrefix("WitnessExhibitDocument"),
    () => QWitnessExhibitDocument
  );
}

export const qWitnessExhibitDocumentStandardExhibit =
  new QWitnessExhibitDocumentStandardExhibit();

export class QWitnessExhibitDocumentStandardExhibitId extends QId<WitnessExhibitDocumentStandardExhibitId> {
  private readonly params = [
    new QNumberParam("WitnessExhibitDocumentStandardExhibitsId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QStandardExhibit extends QueryObject {
  public readonly StandardExhibitId = new QNumberPath(
    this.withPrefix("StandardExhibitId")
  );
  public readonly FirmPartyId = new QNumberPath(this.withPrefix("FirmPartyId"));
  public readonly StandardExhibitName = new QStringPath(
    this.withPrefix("StandardExhibitName")
  );
  public readonly Sequence = new QNumberPath(this.withPrefix("Sequence"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly WitnessExhibitDocumentStandardExhibits =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentStandardExhibits"),
      () => QWitnessExhibitDocumentStandardExhibit
    );
}

export const qStandardExhibit = new QStandardExhibit();

export class QStandardExhibitId extends QId<StandardExhibitId> {
  private readonly params = [new QNumberParam("StandardExhibitId")];

  getParams() {
    return this.params;
  }
}

export class QWitnessExhibitDocumentStandardWitness extends QueryObject {
  public readonly WitnessExhibitDocumentStandardWitnessesId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentStandardWitnessesId")
  );
  public readonly WitnessExhibitDocumentId = new QNumberPath(
    this.withPrefix("WitnessExhibitDocumentId")
  );
  public readonly StandardWitnessId = new QNumberPath(
    this.withPrefix("StandardWitnessId")
  );
  public readonly WitnessExhibitPartyType = new QStringPath(
    this.withPrefix("WitnessExhibitPartyType")
  );
  public readonly StandardWitness = new QEntityPath(
    this.withPrefix("StandardWitness"),
    () => QStandardWitness
  );
  public readonly WitnessExhibitDocument = new QEntityPath(
    this.withPrefix("WitnessExhibitDocument"),
    () => QWitnessExhibitDocument
  );
}

export const qWitnessExhibitDocumentStandardWitness =
  new QWitnessExhibitDocumentStandardWitness();

export class QWitnessExhibitDocumentStandardWitnessId extends QId<WitnessExhibitDocumentStandardWitnessId> {
  private readonly params = [
    new QNumberParam("WitnessExhibitDocumentStandardWitnessesId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QStandardWitness extends QueryObject {
  public readonly StandardWitnessId = new QNumberPath(
    this.withPrefix("StandardWitnessId")
  );
  public readonly FirmPartyId = new QNumberPath(this.withPrefix("FirmPartyId"));
  public readonly StandardWitnessName = new QStringPath(
    this.withPrefix("StandardWitnessName")
  );
  public readonly Sequence = new QNumberPath(this.withPrefix("Sequence"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly WitnessExhibitDocumentStandardWitnesses =
    new QEntityCollectionPath(
      this.withPrefix("WitnessExhibitDocumentStandardWitnesses"),
      () => QWitnessExhibitDocumentStandardWitness
    );
}

export const qStandardWitness = new QStandardWitness();

export class QStandardWitnessId extends QId<StandardWitnessId> {
  private readonly params = [new QNumberParam("StandardWitnessId")];

  getParams() {
    return this.params;
  }
}

export class QTrialPleading extends QueryObject {
  public readonly TrialPleadingID = new QNumberPath(
    this.withPrefix("TrialPleadingID")
  );
  public readonly TrialID = new QNumberPath(this.withPrefix("TrialID"));
  public readonly Item = new QStringPath(this.withPrefix("Item"));
  public readonly CompletedFlag = new QBooleanPath(
    this.withPrefix("CompletedFlag")
  );
  public readonly DueDate = new QDateTimeOffsetPath(this.withPrefix("DueDate"));
  public readonly RecordId = new QNumberPath(this.withPrefix("RecordId"));
  public readonly Record = new QEntityPath(
    this.withPrefix("Record"),
    () => QRecord
  );
  public readonly Trial = new QEntityPath(
    this.withPrefix("Trial"),
    () => QTrial
  );
}

export const qTrialPleading = new QTrialPleading();

export class QTrialPleadingId extends QId<TrialPleadingId> {
  private readonly params = [new QNumberParam("TrialPleadingID")];

  getParams() {
    return this.params;
  }
}

export class QSettlementDocument extends QueryObject {
  public readonly SettlementDocumentId = new QNumberPath(
    this.withPrefix("SettlementDocumentId")
  );
  public readonly PlaintiffPartyId = new QNumberPath(
    this.withPrefix("PlaintiffPartyId")
  );
  public readonly AttyFeesPct = new QNumberPath(this.withPrefix("AttyFeesPct"));
  public readonly AttyFeesTotal = new QNumberPath(
    this.withPrefix("AttyFeesTotal")
  );
  public readonly Party = new QEntityPath(
    this.withPrefix("Party"),
    () => QParty
  );
}

export const qSettlementDocument = new QSettlementDocument();

export class QSettlementDocumentId extends QId<SettlementDocumentId> {
  private readonly params = [new QNumberParam("SettlementDocumentId")];

  getParams() {
    return this.params;
  }
}

export class QAttorneyFeeInterest extends QueryObject {
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly AttorneyFeeInterestTypeId = new QNumberPath(
    this.withPrefix("AttorneyFeeInterestTypeId")
  );
  public readonly AttorneyFeeInterestValue = new QNumberPath(
    this.withPrefix("AttorneyFeeInterestValue")
  );
  public readonly AttorneyFeeInterestType = new QEntityPath(
    this.withPrefix("AttorneyFeeInterestType"),
    () => QAttorneyFeeInterestType
  );
  public readonly LawsuitParty = new QEntityPath(
    this.withPrefix("LawsuitParty"),
    () => QLawsuitParty
  );
}

export const qAttorneyFeeInterest = new QAttorneyFeeInterest();

export class QAttorneyFeeInterestId extends QId<AttorneyFeeInterestId> {
  private readonly params = [new QNumberParam("LawsuitPartyId")];

  getParams() {
    return this.params;
  }
}

export class QAttorneyFeeInterestType extends QueryObject {
  public readonly AttorneyFeeInterestTypeId = new QNumberPath(
    this.withPrefix("AttorneyFeeInterestTypeId")
  );
  public readonly AttorneyFeeInterestTypeName = new QStringPath(
    this.withPrefix("AttorneyFeeInterestTypeName")
  );
  public readonly AttorneyFeeInterests = new QEntityCollectionPath(
    this.withPrefix("AttorneyFeeInterests"),
    () => QAttorneyFeeInterest
  );
}

export const qAttorneyFeeInterestType = new QAttorneyFeeInterestType();

export class QAttorneyFeeInterestTypeId extends QId<AttorneyFeeInterestTypeId> {
  private readonly params = [new QNumberParam("AttorneyFeeInterestTypeId")];

  getParams() {
    return this.params;
  }
}

export class QDefendantAttorney extends QueryObject {
  public readonly DefendantAttorneyID = new QNumberPath(
    this.withPrefix("DefendantAttorneyID")
  );
  public readonly DefendantLawsuitPartyID = new QNumberPath(
    this.withPrefix("DefendantLawsuitPartyID")
  );
  public readonly AttorneyLawsuitPartyID = new QNumberPath(
    this.withPrefix("AttorneyLawsuitPartyID")
  );
  public readonly Attorney = new QEntityPath(
    this.withPrefix("Attorney"),
    () => QLawsuitParty
  );
  public readonly Defendant = new QEntityPath(
    this.withPrefix("Defendant"),
    () => QLawsuitParty
  );
}

export const qDefendantAttorney = new QDefendantAttorney();

export class QDefendantAttorneyId extends QId<DefendantAttorneyId> {
  private readonly params = [new QNumberParam("DefendantAttorneyID")];

  getParams() {
    return this.params;
  }
}

export class QDefendantLawsuitParty extends QueryObject {
  public readonly DefendantLawsuitPartyId = new QNumberPath(
    this.withPrefix("DefendantLawsuitPartyId")
  );
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly RepLtr1SentDate = new QDateTimeOffsetPath(
    this.withPrefix("RepLtr1SentDate")
  );
  public readonly RepLtr2SentDate = new QDateTimeOffsetPath(
    this.withPrefix("RepLtr2SentDate")
  );
  public readonly ResponseRcvdDate = new QDateTimeOffsetPath(
    this.withPrefix("ResponseRcvdDate")
  );
  public readonly LawsuitParty = new QEntityPath(
    this.withPrefix("LawsuitParty"),
    () => QLawsuitParty
  );
  public readonly DefendantLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("DefendantLitigationAssns"),
    () => QDefendantLitigationAssn
  );
}

export const qDefendantLawsuitParty = new QDefendantLawsuitParty();

export class QDefendantLawsuitPartyId extends QId<DefendantLawsuitPartyId> {
  private readonly params = [new QNumberParam("DefendantLawsuitPartyId")];

  getParams() {
    return this.params;
  }
}

export class QDefendantLitigationAssn extends QueryObject {
  public readonly DefendantLitigationAssnId = new QNumberPath(
    this.withPrefix("DefendantLitigationAssnId")
  );
  public readonly DefendantLawsuitPartyId = new QNumberPath(
    this.withPrefix("DefendantLawsuitPartyId")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly DefendantLawsuitParty = new QEntityPath(
    this.withPrefix("DefendantLawsuitParty"),
    () => QDefendantLawsuitParty
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
}

export const qDefendantLitigationAssn = new QDefendantLitigationAssn();

export class QDefendantLitigationAssnId extends QId<DefendantLitigationAssnId> {
  private readonly params = [new QNumberParam("DefendantLitigationAssnId")];

  getParams() {
    return this.params;
  }
}

export class QInvestigator extends QueryObject {
  public readonly InvestigatorId = new QNumberPath(
    this.withPrefix("InvestigatorId")
  );
  public readonly InvestigatorLawsuitPartyId = new QNumberPath(
    this.withPrefix("InvestigatorLawsuitPartyId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly Cost = new QNumberPath(this.withPrefix("Cost"));
  public readonly Notes = new QStringPath(this.withPrefix("Notes"));
  public readonly InvestigatorLawsuitParty = new QEntityPath(
    this.withPrefix("InvestigatorLawsuitParty"),
    () => QLawsuitParty
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qInvestigator = new QInvestigator();

export class QInvestigatorId extends QId<InvestigatorId> {
  private readonly params = [new QNumberParam("InvestigatorId")];

  getParams() {
    return this.params;
  }
}

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

export class QPlaintiffLawsuitParty extends QueryObject {
  public readonly PlaintiffLawsuitPartyId = new QNumberPath(
    this.withPrefix("PlaintiffLawsuitPartyId")
  );
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly HipaaComplianceRcvd = new QDateTimeOffsetPath(
    this.withPrefix("HipaaComplianceRcvd")
  );
  public readonly MedicalInventorySentDate = new QDateTimeOffsetPath(
    this.withPrefix("MedicalInventorySentDate")
  );
  public readonly MedicalInventoryReceivedFlag = new QBooleanPath(
    this.withPrefix("MedicalInventoryReceivedFlag")
  );
  public readonly TreatmentReleaseDate = new QDateTimeOffsetPath(
    this.withPrefix("TreatmentReleaseDate")
  );
  public readonly Injury = new QStringPath(this.withPrefix("Injury"));
  public readonly ThankYouLtrSentDate = new QDateTimeOffsetPath(
    this.withPrefix("ThankYouLtrSentDate")
  );
  public readonly SettlementProcessSentDate = new QDateTimeOffsetPath(
    this.withPrefix("SettlementProcessSentDate")
  );
  public readonly LawsuitParty = new QEntityPath(
    this.withPrefix("LawsuitParty"),
    () => QLawsuitParty
  );
}

export const qPlaintiffLawsuitParty = new QPlaintiffLawsuitParty();

export class QPlaintiffLawsuitPartyId extends QId<PlaintiffLawsuitPartyId> {
  private readonly params = [new QNumberParam("PlaintiffLawsuitPartyId")];

  getParams() {
    return this.params;
  }
}

export class QPoliceReport extends QueryObject {
  public readonly PoliceReportId = new QNumberPath(
    this.withPrefix("PoliceReportId")
  );
  public readonly PoliceDepartmentLawsuitPartyId = new QNumberPath(
    this.withPrefix("PoliceDepartmentLawsuitPartyId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly DateRequested = new QDateTimeOffsetPath(
    this.withPrefix("DateRequested")
  );
  public readonly NeededFlag = new QBooleanPath(this.withPrefix("NeededFlag"));
  public readonly ReceivedFlag = new QBooleanPath(
    this.withPrefix("ReceivedFlag")
  );
  public readonly Cost = new QNumberPath(this.withPrefix("Cost"));
  public readonly PoliceReportNumber = new QStringPath(
    this.withPrefix("PoliceReportNumber")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly PoliceDepartmentLawsuitParty = new QEntityPath(
    this.withPrefix("PoliceDepartmentLawsuitParty"),
    () => QLawsuitParty
  );
}

export const qPoliceReport = new QPoliceReport();

export class QPoliceReportId extends QId<PoliceReportId> {
  private readonly params = [new QNumberParam("PoliceReportId")];

  getParams() {
    return this.params;
  }
}

export class QWitness extends QueryObject {
  public readonly WitnessTypeId = new QNumberPath(
    this.withPrefix("WitnessTypeId")
  );
  public readonly StatementNeeded = new QBooleanPath(
    this.withPrefix("StatementNeeded")
  );
  public readonly StatementReceived = new QBooleanPath(
    this.withPrefix("StatementReceived")
  );
  public readonly QuestionnaireNeeded = new QBooleanPath(
    this.withPrefix("QuestionnaireNeeded")
  );
  public readonly QuestionnaireReceived = new QBooleanPath(
    this.withPrefix("QuestionnaireReceived")
  );
  public readonly QuestionnaireRequest1Date = new QDateTimeOffsetPath(
    this.withPrefix("QuestionnaireRequest1Date")
  );
  public readonly QuestionnaireRequest2Date = new QDateTimeOffsetPath(
    this.withPrefix("QuestionnaireRequest2Date")
  );
  public readonly WitnessNotes = new QStringPath(
    this.withPrefix("WitnessNotes")
  );
  public readonly LawsuitPartyId = new QNumberPath(
    this.withPrefix("LawsuitPartyId")
  );
  public readonly LawsuitParty = new QEntityPath(
    this.withPrefix("LawsuitParty"),
    () => QLawsuitParty
  );
  public readonly WitnessType = new QEntityPath(
    this.withPrefix("WitnessType"),
    () => QWitnessType
  );
  public readonly WitnessLitigationAssns = new QEntityCollectionPath(
    this.withPrefix("WitnessLitigationAssns"),
    () => QWitnessLitigationAssn
  );
}

export const qWitness = new QWitness();

export class QWitnessId extends QId<WitnessId> {
  private readonly params = [new QNumberParam("LawsuitPartyId")];

  getParams() {
    return this.params;
  }
}

export class QWitnessType extends QueryObject {
  public readonly WitnessTypeID = new QNumberPath(
    this.withPrefix("WitnessTypeID")
  );
  public readonly WitnessTypeName = new QStringPath(
    this.withPrefix("WitnessTypeName")
  );
  public readonly Witnesses = new QEntityCollectionPath(
    this.withPrefix("Witnesses"),
    () => QWitness
  );
}

export const qWitnessType = new QWitnessType();

export class QWitnessTypeId extends QId<WitnessTypeId> {
  private readonly params = [new QNumberParam("WitnessTypeID")];

  getParams() {
    return this.params;
  }
}

export class QWitnessLitigationAssn extends QueryObject {
  public readonly WitnessLitigationAssnId = new QNumberPath(
    this.withPrefix("WitnessLitigationAssnId")
  );
  public readonly WitnessLawsuitPartyId = new QNumberPath(
    this.withPrefix("WitnessLawsuitPartyId")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
  public readonly Witness = new QEntityPath(
    this.withPrefix("Witness"),
    () => QWitness
  );
}

export const qWitnessLitigationAssn = new QWitnessLitigationAssn();

export class QWitnessLitigationAssnId extends QId<WitnessLitigationAssnId> {
  private readonly params = [new QNumberParam("WitnessLitigationAssnId")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitTypeDocument extends QueryObject {
  public readonly LawsuitTypeDocumentId = new QNumberPath(
    this.withPrefix("LawsuitTypeDocumentId")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly DocumentTemplateId = new QNumberPath(
    this.withPrefix("DocumentTemplateId")
  );
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly DocumentTemplate = new QEntityPath(
    this.withPrefix("DocumentTemplate"),
    () => QDocumentTemplate
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly RoleTemplate = new QEntityPath(
    this.withPrefix("RoleTemplate"),
    () => QRoleTemplate
  );
}

export const qLawsuitTypeDocument = new QLawsuitTypeDocument();

export class QLawsuitTypeDocumentId extends QId<LawsuitTypeDocumentId> {
  private readonly params = [new QNumberParam("LawsuitTypeDocumentId")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitTypeTickler extends QueryObject {
  public readonly LawsuitTypeTicklerId = new QNumberPath(
    this.withPrefix("LawsuitTypeTicklerId")
  );
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly RoleTemplateId = new QNumberPath(
    this.withPrefix("RoleTemplateId")
  );
  public readonly DefaultToPrimaryAttorney = new QBooleanPath(
    this.withPrefix("DefaultToPrimaryAttorney")
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
  public readonly RoleTemplate = new QEntityPath(
    this.withPrefix("RoleTemplate"),
    () => QRoleTemplate
  );
  public readonly TicklerTemplate = new QEntityPath(
    this.withPrefix("TicklerTemplate"),
    () => QTicklerTemplate
  );
}

export const qLawsuitTypeTickler = new QLawsuitTypeTickler();

export class QLawsuitTypeTicklerId extends QId<LawsuitTypeTicklerId> {
  private readonly params = [new QNumberParam("LawsuitTypeTicklerId")];

  getParams() {
    return this.params;
  }
}

export class QTicklerCriteria extends QueryObject {
  public readonly TicklerCriteriaId = new QNumberPath(
    this.withPrefix("TicklerCriteriaId")
  );
  public readonly TicklerCriteriaActionId = new QNumberPath(
    this.withPrefix("TicklerCriteriaActionId")
  );
  public readonly BooleanAndFlag = new QBooleanPath(
    this.withPrefix("BooleanAndFlag")
  );
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly TicklerCriteriaAction = new QEntityPath(
    this.withPrefix("TicklerCriteriaAction"),
    () => QTicklerCriteriaAction
  );
  public readonly TicklerTemplate = new QEntityPath(
    this.withPrefix("TicklerTemplate"),
    () => QTicklerTemplate
  );
  public readonly TicklerCriteriaSets = new QEntityCollectionPath(
    this.withPrefix("TicklerCriteriaSets"),
    () => QTicklerCriteriaSet
  );
}

export const qTicklerCriteria = new QTicklerCriteria();

export class QTicklerCriteriaId extends QId<TicklerCriteriaId> {
  private readonly params = [new QNumberParam("TicklerCriteriaId")];

  getParams() {
    return this.params;
  }
}

export class QTicklerCriteriaSet extends QueryObject {
  public readonly TicklerCriteriaSetId = new QNumberPath(
    this.withPrefix("TicklerCriteriaSetId")
  );
  public readonly TicklerCriteriaId = new QNumberPath(
    this.withPrefix("TicklerCriteriaId")
  );
  public readonly BooleanAndFlag = new QBooleanPath(
    this.withPrefix("BooleanAndFlag")
  );
  public readonly TicklerCriteria = new QEntityPath(
    this.withPrefix("TicklerCriteria"),
    () => QTicklerCriteria
  );
  public readonly TicklerCriteriaItems = new QEntityCollectionPath(
    this.withPrefix("TicklerCriteriaItems"),
    () => QTicklerCriteriaItem
  );
}

export const qTicklerCriteriaSet = new QTicklerCriteriaSet();

export class QTicklerCriteriaSetId extends QId<TicklerCriteriaSetId> {
  private readonly params = [new QNumberParam("TicklerCriteriaSetId")];

  getParams() {
    return this.params;
  }
}

export class QTicklerCriteriaItem extends QueryObject {
  public readonly TicklerCriteriaItemId = new QNumberPath(
    this.withPrefix("TicklerCriteriaItemId")
  );
  public readonly TicklerCriteriaSetId = new QNumberPath(
    this.withPrefix("TicklerCriteriaSetId")
  );
  public readonly Attribute = new QStringPath(this.withPrefix("Attribute"));
  public readonly TicklerCriteriaOperatorId = new QNumberPath(
    this.withPrefix("TicklerCriteriaOperatorId")
  );
  public readonly ComparisonValue = new QStringPath(
    this.withPrefix("ComparisonValue")
  );
  public readonly TicklerCriteriaOperator = new QEntityPath(
    this.withPrefix("TicklerCriteriaOperator"),
    () => QTicklerCriteriaOperator
  );
  public readonly TicklerCriteriaSet = new QEntityPath(
    this.withPrefix("TicklerCriteriaSet"),
    () => QTicklerCriteriaSet
  );
}

export const qTicklerCriteriaItem = new QTicklerCriteriaItem();

export class QTicklerCriteriaItemId extends QId<TicklerCriteriaItemId> {
  private readonly params = [new QNumberParam("TicklerCriteriaItemId")];

  getParams() {
    return this.params;
  }
}

export class QTicklerCriteriaOperator extends QueryObject {
  public readonly TicklerCriteriaOperatorId = new QNumberPath(
    this.withPrefix("TicklerCriteriaOperatorId")
  );
  public readonly TicklerCriteriaOperatorName = new QStringPath(
    this.withPrefix("TicklerCriteriaOperatorName")
  );
  public readonly DataType = new QStringPath(this.withPrefix("DataType"));
  public readonly HasComparisonValue = new QBooleanPath(
    this.withPrefix("HasComparisonValue")
  );
  public readonly TicklerCriteriaItems = new QEntityCollectionPath(
    this.withPrefix("TicklerCriteriaItems"),
    () => QTicklerCriteriaItem
  );
}

export const qTicklerCriteriaOperator = new QTicklerCriteriaOperator();

export class QTicklerCriteriaOperatorId extends QId<TicklerCriteriaOperatorId> {
  private readonly params = [new QNumberParam("TicklerCriteriaOperatorId")];

  getParams() {
    return this.params;
  }
}

export class QTicklerCriteriaAction extends QueryObject {
  public readonly TicklerCriteriaActionId = new QNumberPath(
    this.withPrefix("TicklerCriteriaActionId")
  );
  public readonly TicklerCriteriaActionName = new QStringPath(
    this.withPrefix("TicklerCriteriaActionName")
  );
  public readonly TicklerCriterias = new QEntityCollectionPath(
    this.withPrefix("TicklerCriterias"),
    () => QTicklerCriteria
  );
}

export const qTicklerCriteriaAction = new QTicklerCriteriaAction();

export class QTicklerCriteriaActionId extends QId<TicklerCriteriaActionId> {
  private readonly params = [new QNumberParam("TicklerCriteriaActionId")];

  getParams() {
    return this.params;
  }
}

export class QTicklerTemplateAction extends QueryObject {
  public readonly TicklerTemplateActionId = new QNumberPath(
    this.withPrefix("TicklerTemplateActionId")
  );
  public readonly TicklerTemplateId = new QNumberPath(
    this.withPrefix("TicklerTemplateId")
  );
  public readonly ChildTicklerTemplateId = new QNumberPath(
    this.withPrefix("ChildTicklerTemplateId")
  );
  public readonly Answer = new QStringPath(this.withPrefix("Answer"));
  public readonly ParentTickler = new QEntityPath(
    this.withPrefix("ParentTickler"),
    () => QTicklerTemplate
  );
  public readonly ChildTickler = new QEntityPath(
    this.withPrefix("ChildTickler"),
    () => QTicklerTemplate
  );
}

export const qTicklerTemplateAction = new QTicklerTemplateAction();

export class QTicklerTemplateActionId extends QId<TicklerTemplateActionId> {
  private readonly params = [new QNumberParam("TicklerTemplateActionId")];

  getParams() {
    return this.params;
  }
}

export class QTicklerAnswerAction extends QueryObject {
  public readonly TicklerAnswerActionId = new QNumberPath(
    this.withPrefix("TicklerAnswerActionId")
  );
  public readonly TicklerAnswerId = new QNumberPath(
    this.withPrefix("TicklerAnswerId")
  );
  public readonly TicklerActionTypeId = new QNumberPath(
    this.withPrefix("TicklerActionTypeId")
  );
  public readonly ActionOrder = new QNumberPath(this.withPrefix("ActionOrder"));
  public readonly TargetTicklerNumber = new QNumberPath(
    this.withPrefix("TargetTicklerNumber")
  );
  public readonly NumberOfDays = new QNumberPath(
    this.withPrefix("NumberOfDays")
  );
  public readonly DocumentTemplateName = new QStringPath(
    this.withPrefix("DocumentTemplateName")
  );
  public readonly Destination = new QStringPath(this.withPrefix("Destination"));
  public readonly ColumnIdentifier = new QStringPath(
    this.withPrefix("ColumnIdentifier")
  );
  public readonly DataValue = new QStringPath(this.withPrefix("DataValue"));
  public readonly TicklerActionType = new QEntityPath(
    this.withPrefix("TicklerActionType"),
    () => QTicklerActionType
  );
  public readonly TicklerAnswer = new QEntityPath(
    this.withPrefix("TicklerAnswer"),
    () => QTicklerAnswer
  );
}

export const qTicklerAnswerAction = new QTicklerAnswerAction();

export class QTicklerAnswerActionId extends QId<TicklerAnswerActionId> {
  private readonly params = [new QNumberParam("TicklerAnswerActionId")];

  getParams() {
    return this.params;
  }
}

export class QTicklerActionType extends QueryObject {
  public readonly TicklerActionTypeId = new QNumberPath(
    this.withPrefix("TicklerActionTypeId")
  );
  public readonly TicklerActionTypeName = new QStringPath(
    this.withPrefix("TicklerActionTypeName")
  );
  public readonly TicklerAnswerActions = new QEntityCollectionPath(
    this.withPrefix("TicklerAnswerActions"),
    () => QTicklerAnswerAction
  );
}

export const qTicklerActionType = new QTicklerActionType();

export class QTicklerActionTypeId extends QId<TicklerActionTypeId> {
  private readonly params = [new QNumberParam("TicklerActionTypeId")];

  getParams() {
    return this.params;
  }
}

export class QDepositionLitigationAssn extends QueryObject {
  public readonly DepositionLitigationAssnId = new QNumberPath(
    this.withPrefix("DepositionLitigationAssnId")
  );
  public readonly DepositionId = new QNumberPath(
    this.withPrefix("DepositionId")
  );
  public readonly LitigationId = new QNumberPath(
    this.withPrefix("LitigationId")
  );
  public readonly Deposition = new QEntityPath(
    this.withPrefix("Deposition"),
    () => QDeposition
  );
  public readonly Litigation = new QEntityPath(
    this.withPrefix("Litigation"),
    () => QLitigation
  );
}

export const qDepositionLitigationAssn = new QDepositionLitigationAssn();

export class QDepositionLitigationAssnId extends QId<DepositionLitigationAssnId> {
  private readonly params = [new QNumberParam("DepositionLitigationAssnId")];

  getParams() {
    return this.params;
  }
}

export class QAppointmentCustomType extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Appointments = new QEntityCollectionPath(
    this.withPrefix("Appointments"),
    () => QAppointment
  );
}

export const qAppointmentCustomType = new QAppointmentCustomType();

export class QAppointmentCustomTypeId extends QId<AppointmentCustomTypeId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QAppointmentHistory extends QueryObject {
  public readonly AppointmentHistoryId = new QNumberPath(
    this.withPrefix("AppointmentHistoryId")
  );
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly TimeStamp = new QDateTimeOffsetPath(
    this.withPrefix("TimeStamp")
  );
  public readonly UserId = new QNumberPath(this.withPrefix("UserId"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qAppointmentHistory = new QAppointmentHistory();

export class QAppointmentHistoryId extends QId<AppointmentHistoryId> {
  private readonly params = [new QNumberParam("AppointmentHistoryId")];

  getParams() {
    return this.params;
  }
}

export class QAppointmentIntegration extends QueryObject {
  public readonly AppointmentId = new QNumberPath(
    this.withPrefix("AppointmentId")
  );
  public readonly IntegrationType = new QStringPath(
    this.withPrefix("IntegrationType")
  );
  public readonly IntegrationKey = new QStringPath(
    this.withPrefix("IntegrationKey")
  );
  public readonly Appointment = new QEntityPath(
    this.withPrefix("Appointment"),
    () => QAppointment
  );
}

export const qAppointmentIntegration = new QAppointmentIntegration();

export class QAppointmentIntegrationId extends QId<AppointmentIntegrationId> {
  private readonly params = [new QNumberParam("AppointmentId")];

  getParams() {
    return this.params;
  }
}

export class QMailMerge extends QueryObject {
  public readonly MailMergeId = new QNumberPath(this.withPrefix("MailMergeId"));
  public readonly MergeField = new QStringPath(this.withPrefix("MergeField"));
  public readonly htmlDiv = new QStringPath(this.withPrefix("htmlDiv"));
  public readonly LawsuitCategory = new QStringPath(
    this.withPrefix("LawsuitCategory")
  );
  public readonly LawsuitPartyTypeId = new QNumberPath(
    this.withPrefix("LawsuitPartyTypeId")
  );
  public readonly ParentObject = new QStringPath(
    this.withPrefix("ParentObject")
  );
  public readonly ObjectType = new QStringPath(this.withPrefix("ObjectType"));
  public readonly Attribute = new QStringPath(this.withPrefix("Attribute"));
  public readonly AttributeDescription = new QStringPath(
    this.withPrefix("AttributeDescription")
  );
  public readonly DefaultValue = new QStringPath(
    this.withPrefix("DefaultValue")
  );
  public readonly Format = new QStringPath(this.withPrefix("Format"));
  public readonly Note = new QStringPath(this.withPrefix("Note"));
  public readonly LawsuitPartyType = new QEntityPath(
    this.withPrefix("LawsuitPartyType"),
    () => QLawsuitPartyType
  );
}

export const qMailMerge = new QMailMerge();

export class QMailMergeId extends QId<MailMergeId> {
  private readonly params = [new QNumberParam("MailMergeId")];

  getParams() {
    return this.params;
  }
}

export class QEmail extends QueryObject {
  public readonly EmailId = new QNumberPath(this.withPrefix("EmailId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly RecordFileId = new QNumberPath(
    this.withPrefix("RecordFileId")
  );
  public readonly EmailDate = new QDateTimeOffsetPath(
    this.withPrefix("EmailDate")
  );
  public readonly EmailSubject = new QStringPath(
    this.withPrefix("EmailSubject")
  );
  public readonly EmailFrom = new QStringPath(this.withPrefix("EmailFrom"));
  public readonly EmailTo = new QStringPath(this.withPrefix("EmailTo"));
  public readonly EmailCc = new QStringPath(this.withPrefix("EmailCc"));
  public readonly EmailBcc = new QStringPath(this.withPrefix("EmailBcc"));
  public readonly EmailAttCount = new QNumberPath(
    this.withPrefix("EmailAttCount")
  );
  public readonly EmailSize = new QNumberPath(this.withPrefix("EmailSize"));
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly RecordFile = new QEntityPath(
    this.withPrefix("RecordFile"),
    () => QRecordFile
  );
}

export const qEmail = new QEmail();

export class QEmailId extends QId<EmailId> {
  private readonly params = [new QNumberParam("EmailId")];

  getParams() {
    return this.params;
  }
}

export class QRecordFileRelationship extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly RecordFileId = new QNumberPath(
    this.withPrefix("RecordFileId")
  );
  public readonly RelatedEntityType = new QStringPath(
    this.withPrefix("RelatedEntityType")
  );
  public readonly RelatedEntityId = new QNumberPath(
    this.withPrefix("RelatedEntityId")
  );
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly RecordFile = new QEntityPath(
    this.withPrefix("RecordFile"),
    () => QRecordFile
  );
}

export const qRecordFileRelationship = new QRecordFileRelationship();

export class QRecordFileRelationshipId extends QId<RecordFileRelationshipId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QAccountingSyncGL extends QueryObject {
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly GLAccount = new QStringPath(this.withPrefix("GLAccount"));
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
}

export const qAccountingSyncGL = new QAccountingSyncGL();

export class QAccountingSyncGLId extends QId<AccountingSyncGLId> {
  private readonly params = [new QNumberParam("LawsuitTypeId")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitTypeClientForm extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly LawsuitTypeId = new QNumberPath(
    this.withPrefix("LawsuitTypeId")
  );
  public readonly ClientFormId = new QNumberPath(
    this.withPrefix("ClientFormId")
  );
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly ClientForm = new QEntityPath(
    this.withPrefix("ClientForm"),
    () => QClientForm
  );
  public readonly LawsuitType = new QEntityPath(
    this.withPrefix("LawsuitType"),
    () => QLawsuitType
  );
}

export const qLawsuitTypeClientForm = new QLawsuitTypeClientForm();

export class QLawsuitTypeClientFormId extends QId<LawsuitTypeClientFormId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QClientFormQuestion extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly ClientFormScreenId = new QNumberPath(
    this.withPrefix("ClientFormScreenId")
  );
  public readonly RelatedEntity = new QStringPath(
    this.withPrefix("RelatedEntity")
  );
  public readonly ComponentId = new QNumberPath(this.withPrefix("ComponentId"));
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly Question = new QStringPath(this.withPrefix("Question"));
  public readonly ShowCriteriaJson = new QStringPath(
    this.withPrefix("ShowCriteriaJson")
  );
  public readonly HelperDataJson = new QStringPath(
    this.withPrefix("HelperDataJson")
  );
  public readonly ClientFormComponent = new QEntityPath(
    this.withPrefix("ClientFormComponent"),
    () => QClientFormComponent
  );
  public readonly ClientFormScreen = new QEntityPath(
    this.withPrefix("ClientFormScreen"),
    () => QClientFormScreen
  );
}

export const qClientFormQuestion = new QClientFormQuestion();

export class QClientFormQuestionId extends QId<ClientFormQuestionId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QClientFormComponent extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly CsType = new QStringPath(this.withPrefix("CsType"));
  public readonly ClientFormQuestions = new QEntityCollectionPath(
    this.withPrefix("ClientFormQuestions"),
    () => QClientFormQuestion
  );
}

export const qClientFormComponent = new QClientFormComponent();

export class QClientFormComponentId extends QId<ClientFormComponentId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QClientFormScreen extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly ClientFormId = new QNumberPath(
    this.withPrefix("ClientFormId")
  );
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly ShowCriteriaJson = new QStringPath(
    this.withPrefix("ShowCriteriaJson")
  );
  public readonly ClientForm = new QEntityPath(
    this.withPrefix("ClientForm"),
    () => QClientForm
  );
  public readonly ClientFormQuestions = new QEntityCollectionPath(
    this.withPrefix("ClientFormQuestions"),
    () => QClientFormQuestion
  );
}

export const qClientFormScreen = new QClientFormScreen();

export class QClientFormScreenId extends QId<ClientFormScreenId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QClientFormStatus extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly ClientForms = new QEntityCollectionPath(
    this.withPrefix("ClientForms"),
    () => QClientForm
  );
}

export const qClientFormStatus = new QClientFormStatus();

export class QClientFormStatusId extends QId<ClientFormStatusId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QIntakeClientFirm extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly IntakeClientLoginId = new QNumberPath(
    this.withPrefix("IntakeClientLoginId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly IntakeClientLogin = new QEntityPath(
    this.withPrefix("IntakeClientLogin"),
    () => QIntakeClientLogin
  );
  public readonly IntakeClientLawsuits = new QEntityCollectionPath(
    this.withPrefix("IntakeClientLawsuits"),
    () => QIntakeClientLawsuit
  );
}

export const qIntakeClientFirm = new QIntakeClientFirm();

export class QIntakeClientFirmId extends QId<IntakeClientFirmId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCPDirectPushToken extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly ExpoPushToken = new QStringPath(
    this.withPrefix("ExpoPushToken")
  );
  public readonly IntakeClientLoginId = new QNumberPath(
    this.withPrefix("IntakeClientLoginId")
  );
  public readonly DoNotSend = new QBooleanPath(this.withPrefix("DoNotSend"));
  public readonly IntakeClientLogin = new QEntityPath(
    this.withPrefix("IntakeClientLogin"),
    () => QIntakeClientLogin
  );
}

export const qCPDirectPushToken = new QCPDirectPushToken();

export class QCPDirectPushTokenId extends QId<CPDirectPushTokenId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QIntakeClientSession extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly IntakeClientLoginId = new QNumberPath(
    this.withPrefix("IntakeClientLoginId")
  );
  public readonly BearerToken = new QStringPath(this.withPrefix("BearerToken"));
  public readonly DeviceId = new QStringPath(this.withPrefix("DeviceId"));
  public readonly Expiration = new QDateTimeOffsetPath(
    this.withPrefix("Expiration")
  );
  public readonly IntakeClientLogin = new QEntityPath(
    this.withPrefix("IntakeClientLogin"),
    () => QIntakeClientLogin
  );
}

export const qIntakeClientSession = new QIntakeClientSession();

export class QIntakeClientSessionId extends QId<IntakeClientSessionId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitClientForm extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly FormJson = new QStringPath(this.withPrefix("FormJson"));
  public readonly ClientFormId = new QNumberPath(
    this.withPrefix("ClientFormId")
  );
  public readonly SortOrder = new QNumberPath(this.withPrefix("SortOrder"));
  public readonly Submitted = new QBooleanPath(this.withPrefix("Submitted"));
  public readonly LastUpdated = new QDateTimeOffsetPath(
    this.withPrefix("LastUpdated")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qLawsuitClientForm = new QLawsuitClientForm();

export class QLawsuitClientFormId extends QId<LawsuitClientFormId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitCompanionGroup extends QueryObject {
  public readonly LawsuitCompanionGroupId = new QNumberPath(
    this.withPrefix("LawsuitCompanionGroupId")
  );
  public readonly LawsuitCompanionGroupName = new QStringPath(
    this.withPrefix("LawsuitCompanionGroupName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Lawsuits = new QEntityCollectionPath(
    this.withPrefix("Lawsuits"),
    () => QLawsuit
  );
}

export const qLawsuitCompanionGroup = new QLawsuitCompanionGroup();

export class QLawsuitCompanionGroupId extends QId<LawsuitCompanionGroupId> {
  private readonly params = [new QNumberParam("LawsuitCompanionGroupId")];

  getParams() {
    return this.params;
  }
}

export class QEvidence extends QueryObject {
  public readonly EvidenceID = new QNumberPath(this.withPrefix("EvidenceID"));
  public readonly LawsuitID = new QNumberPath(this.withPrefix("LawsuitID"));
  public readonly Item = new QStringPath(this.withPrefix("Item"));
  public readonly ItemReceived = new QBooleanPath(
    this.withPrefix("ItemReceived")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qEvidence = new QEvidence();

export class QEvidenceId extends QId<EvidenceId> {
  private readonly params = [new QNumberParam("EvidenceID")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitAbbr extends QueryObject {
  public readonly LawsuitAbbrId = new QNumberPath(
    this.withPrefix("LawsuitAbbrId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly LawsuitAbbrName = new QStringPath(
    this.withPrefix("LawsuitAbbrName")
  );
  public readonly Active = new QBooleanPath(this.withPrefix("Active"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qLawsuitAbbr = new QLawsuitAbbr();

export class QLawsuitAbbrId extends QId<LawsuitAbbrId> {
  private readonly params = [new QNumberParam("LawsuitAbbrId")];

  getParams() {
    return this.params;
  }
}

export class QLawsuitRecordRequest extends QueryObject {
  public readonly LawsuitRecordRequestId = new QNumberPath(
    this.withPrefix("LawsuitRecordRequestId")
  );
  public readonly LawsuitId = new QNumberPath(this.withPrefix("LawsuitId"));
  public readonly OrderNumber = new QStringPath(this.withPrefix("OrderNumber"));
  public readonly OrderContents = new QStringPath(
    this.withPrefix("OrderContents")
  );
  public readonly IsComplete = new QBooleanPath(this.withPrefix("IsComplete"));
  public readonly LastChecked = new QDateTimeOffsetPath(
    this.withPrefix("LastChecked")
  );
  public readonly Lawsuit = new QEntityPath(
    this.withPrefix("Lawsuit"),
    () => QLawsuit
  );
}

export const qLawsuitRecordRequest = new QLawsuitRecordRequest();

export class QLawsuitRecordRequestId extends QId<LawsuitRecordRequestId> {
  private readonly params = [new QNumberParam("LawsuitRecordRequestId")];

  getParams() {
    return this.params;
  }
}

export class QCasePacerUserSession extends QueryObject {
  public readonly Id = new QNumberPath(this.withPrefix("Id"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly Token = new QStringPath(this.withPrefix("Token"));
  public readonly UserAgent = new QStringPath(this.withPrefix("UserAgent"));
  public readonly IpAddr = new QStringPath(this.withPrefix("IpAddr"));
  public readonly Expiration = new QDateTimeOffsetPath(
    this.withPrefix("Expiration")
  );
  public readonly LoginTime = new QDateTimeOffsetPath(
    this.withPrefix("LoginTime")
  );
  public readonly LastActive = new QDateTimeOffsetPath(
    this.withPrefix("LastActive")
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qCasePacerUserSession = new QCasePacerUserSession();

export class QCasePacerUserSessionId extends QId<CasePacerUserSessionId> {
  private readonly params = [new QNumberParam("Id")];

  getParams() {
    return this.params;
  }
}

export class QCasePacerUserIntegrationToken extends QueryObject {
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly SystemName = new QStringPath(this.withPrefix("SystemName"));
  public readonly SystemId = new QStringPath(this.withPrefix("SystemId"));
  public readonly TokenJson = new QStringPath(this.withPrefix("TokenJson"));
  public readonly SubscriptionId = new QStringPath(
    this.withPrefix("SubscriptionId")
  );
  public readonly SubscriptionExpire = new QDateTimeOffsetPath(
    this.withPrefix("SubscriptionExpire")
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qCasePacerUserIntegrationToken =
  new QCasePacerUserIntegrationToken();

export class QCasePacerUserIntegrationTokenId extends QId<CasePacerUserIntegrationTokenId> {
  private readonly params = [new QNumberParam("PartyId")];

  getParams() {
    return this.params;
  }
}

export class QEventHelp extends QueryObject {
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly PartyQuickEntryComplete = new QBooleanPath(
    this.withPrefix("PartyQuickEntryComplete")
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qEventHelp = new QEventHelp();

export class QEventHelpId extends QId<EventHelpId> {
  private readonly params = [new QNumberParam("PartyId")];

  getParams() {
    return this.params;
  }
}

export class QSecurityUserGroupAssign extends QueryObject {
  public readonly UserGroupAssignId = new QNumberPath(
    this.withPrefix("UserGroupAssignId")
  );
  public readonly UserGroupId = new QNumberPath(this.withPrefix("UserGroupId"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly SecurityUserGroup = new QEntityPath(
    this.withPrefix("SecurityUserGroup"),
    () => QSecurityUserGroup
  );
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
}

export const qSecurityUserGroupAssign = new QSecurityUserGroupAssign();

export class QSecurityUserGroupAssignId extends QId<SecurityUserGroupAssignId> {
  private readonly params = [new QNumberParam("UserGroupAssignId")];

  getParams() {
    return this.params;
  }
}

export class QSecurityUserGroup extends QueryObject {
  public readonly UserGroupId = new QNumberPath(this.withPrefix("UserGroupId"));
  public readonly UserGroupName = new QStringPath(
    this.withPrefix("UserGroupName")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly SecurityUserGroupAssigns = new QEntityCollectionPath(
    this.withPrefix("SecurityUserGroupAssigns"),
    () => QSecurityUserGroupAssign
  );
}

export const qSecurityUserGroup = new QSecurityUserGroup();

export class QSecurityUserGroupId extends QId<SecurityUserGroupId> {
  private readonly params = [new QNumberParam("UserGroupId")];

  getParams() {
    return this.params;
  }
}

export class QSecurityRuleSummary extends QueryObject {
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly SecurityPathId = new QNumberPath(
    this.withPrefix("SecurityPathId")
  );
  public readonly ReadAccessLevelId = new QNumberPath(
    this.withPrefix("ReadAccessLevelId")
  );
  public readonly CreateAccessLevelId = new QNumberPath(
    this.withPrefix("CreateAccessLevelId")
  );
  public readonly EditAccessLevelId = new QNumberPath(
    this.withPrefix("EditAccessLevelId")
  );
  public readonly DeleteAccessLevelId = new QNumberPath(
    this.withPrefix("DeleteAccessLevelId")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly CasePacerUser = new QEntityPath(
    this.withPrefix("CasePacerUser"),
    () => QCasePacerUser
  );
  public readonly SecurityPath = new QEntityPath(
    this.withPrefix("SecurityPath"),
    () => QSecurityPath
  );
  public readonly ReadAccessLevel = new QEntityPath(
    this.withPrefix("ReadAccessLevel"),
    () => QAccessLevel
  );
  public readonly CreateAccessLevel = new QEntityPath(
    this.withPrefix("CreateAccessLevel"),
    () => QAccessLevel
  );
  public readonly EditAccessLevel = new QEntityPath(
    this.withPrefix("EditAccessLevel"),
    () => QAccessLevel
  );
  public readonly DeleteAccessLevel = new QEntityPath(
    this.withPrefix("DeleteAccessLevel"),
    () => QAccessLevel
  );
}

export const qSecurityRuleSummary = new QSecurityRuleSummary();

export class QSecurityRuleSummaryId extends QId<SecurityRuleSummaryId> {
  private readonly params = [
    new QNumberParam("FirmId"),
    new QNumberParam("PartyId"),
    new QNumberParam("SecurityPathId"),
  ];

  getParams() {
    return this.params;
  }
}

export class QSecurityPath extends QueryObject {
  public readonly SecurityPathId = new QNumberPath(
    this.withPrefix("SecurityPathId")
  );
  public readonly SecurityPathDisplayName = new QStringPath(
    this.withPrefix("SecurityPathDisplayName")
  );
  public readonly SecurityMaterializedPath = new QStringPath(
    this.withPrefix("SecurityMaterializedPath")
  );
  public readonly LawsuitMaterializedPath = new QStringPath(
    this.withPrefix("LawsuitMaterializedPath")
  );
  public readonly ShowInDropdown = new QBooleanPath(
    this.withPrefix("ShowInDropdown")
  );
  public readonly SecurityRules = new QEntityCollectionPath(
    this.withPrefix("SecurityRules"),
    () => QSecurityRule
  );
  public readonly SecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("SecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
}

export const qSecurityPath = new QSecurityPath();

export class QSecurityPathId extends QId<SecurityPathId> {
  private readonly params = [new QNumberParam("SecurityPathId")];

  getParams() {
    return this.params;
  }
}

export class QSecurityRule extends QueryObject {
  public readonly SecurityRuleId = new QNumberPath(
    this.withPrefix("SecurityRuleId")
  );
  public readonly SecurityPathId = new QNumberPath(
    this.withPrefix("SecurityPathId")
  );
  public readonly RuleType = new QStringPath(this.withPrefix("RuleType"));
  public readonly RuleObjectId = new QNumberPath(
    this.withPrefix("RuleObjectId")
  );
  public readonly ReadAccessLevelId = new QNumberPath(
    this.withPrefix("ReadAccessLevelId")
  );
  public readonly CreateAccessLevelId = new QNumberPath(
    this.withPrefix("CreateAccessLevelId")
  );
  public readonly EditAccessLevelId = new QNumberPath(
    this.withPrefix("EditAccessLevelId")
  );
  public readonly DeleteAccessLevelId = new QNumberPath(
    this.withPrefix("DeleteAccessLevelId")
  );
  public readonly CreateAccessLevel = new QEntityPath(
    this.withPrefix("CreateAccessLevel"),
    () => QAccessLevel
  );
  public readonly DeleteAccessLevel = new QEntityPath(
    this.withPrefix("DeleteAccessLevel"),
    () => QAccessLevel
  );
  public readonly EditAccessLevel = new QEntityPath(
    this.withPrefix("EditAccessLevel"),
    () => QAccessLevel
  );
  public readonly ReadAccessLevel = new QEntityPath(
    this.withPrefix("ReadAccessLevel"),
    () => QAccessLevel
  );
  public readonly SecurityPath = new QEntityPath(
    this.withPrefix("SecurityPath"),
    () => QSecurityPath
  );
}

export const qSecurityRule = new QSecurityRule();

export class QSecurityRuleId extends QId<SecurityRuleId> {
  private readonly params = [new QNumberParam("SecurityRuleId")];

  getParams() {
    return this.params;
  }
}

export class QAccessLevel extends QueryObject {
  public readonly AccessLevelId = new QNumberPath(
    this.withPrefix("AccessLevelId")
  );
  public readonly AccessLevelName = new QStringPath(
    this.withPrefix("AccessLevelName")
  );
  public readonly CreateSecurityRules = new QEntityCollectionPath(
    this.withPrefix("CreateSecurityRules"),
    () => QSecurityRule
  );
  public readonly DeleteSecurityRules = new QEntityCollectionPath(
    this.withPrefix("DeleteSecurityRules"),
    () => QSecurityRule
  );
  public readonly EditSecurityRules = new QEntityCollectionPath(
    this.withPrefix("EditSecurityRules"),
    () => QSecurityRule
  );
  public readonly ReadSecurityRules = new QEntityCollectionPath(
    this.withPrefix("ReadSecurityRules"),
    () => QSecurityRule
  );
  public readonly ReadSecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("ReadSecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
  public readonly CreateSecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("CreateSecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
  public readonly EditSecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("EditSecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
  public readonly DeleteSecurityRuleSummaries = new QEntityCollectionPath(
    this.withPrefix("DeleteSecurityRuleSummaries"),
    () => QSecurityRuleSummary
  );
}

export const qAccessLevel = new QAccessLevel();

export class QAccessLevelId extends QId<AccessLevelId> {
  private readonly params = [new QNumberParam("AccessLevelId")];

  getParams() {
    return this.params;
  }
}

export class QAdditionalEmailSender extends QueryObject {
  public readonly AdditionalEmailSenderId = new QNumberPath(
    this.withPrefix("AdditionalEmailSenderId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Email = new QStringPath(this.withPrefix("Email"));
  public readonly EmailDescr = new QStringPath(this.withPrefix("EmailDescr"));
  public readonly Active = new QBooleanPath(this.withPrefix("Active"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qAdditionalEmailSender = new QAdditionalEmailSender();

export class QAdditionalEmailSenderId extends QId<AdditionalEmailSenderId> {
  private readonly params = [new QNumberParam("AdditionalEmailSenderId")];

  getParams() {
    return this.params;
  }
}

export class QExternalImportKey extends QueryObject {
  public readonly ExternalImportKeyId = new QNumberPath(
    this.withPrefix("ExternalImportKeyId")
  );
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly ExternalKey = new QStringPath(this.withPrefix("ExternalKey"));
  public readonly ExternalGroup = new QStringPath(
    this.withPrefix("ExternalGroup")
  );
  public readonly ObjectType = new QStringPath(this.withPrefix("ObjectType"));
  public readonly ObjectId = new QNumberPath(this.withPrefix("ObjectId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qExternalImportKey = new QExternalImportKey();

export class QExternalImportKeyId extends QId<ExternalImportKeyId> {
  private readonly params = [new QNumberParam("ExternalImportKeyId")];

  getParams() {
    return this.params;
  }
}

export class QFirmAbbr extends QueryObject {
  public readonly FirmAbbrId = new QNumberPath(this.withPrefix("FirmAbbrId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly FirmAbbrName = new QStringPath(
    this.withPrefix("FirmAbbrName")
  );
  public readonly Active = new QBooleanPath(this.withPrefix("Active"));
  public readonly BranchLiveKey = new QStringPath(
    this.withPrefix("BranchLiveKey")
  );
  public readonly BranchLiveSecret = new QStringPath(
    this.withPrefix("BranchLiveSecret")
  );
  public readonly BranchTestKey = new QStringPath(
    this.withPrefix("BranchTestKey")
  );
  public readonly BranchTestSecret = new QStringPath(
    this.withPrefix("BranchTestSecret")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qFirmAbbr = new QFirmAbbr();

export class QFirmAbbrId extends QId<FirmAbbrId> {
  private readonly params = [new QNumberParam("FirmAbbrId")];

  getParams() {
    return this.params;
  }
}

export class QIntangibleDamage extends QueryObject {
  public readonly IntangibleDamageId = new QNumberPath(
    this.withPrefix("IntangibleDamageId")
  );
  public readonly FirmPartyId = new QNumberPath(this.withPrefix("FirmPartyId"));
  public readonly IntangibleDamageName = new QStringPath(
    this.withPrefix("IntangibleDamageName")
  );
  public readonly Spousal = new QBooleanPath(this.withPrefix("Spousal"));
  public readonly Sequence = new QNumberPath(this.withPrefix("Sequence"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qIntangibleDamage = new QIntangibleDamage();

export class QIntangibleDamageId extends QId<IntangibleDamageId> {
  private readonly params = [new QNumberParam("IntangibleDamageId")];

  getParams() {
    return this.params;
  }
}

export class QPaymentInfo extends QueryObject {
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly IsCreditCard = new QBooleanPath(
    this.withPrefix("IsCreditCard")
  );
  public readonly InstitutionName = new QStringPath(
    this.withPrefix("InstitutionName")
  );
  public readonly AccountNum = new QStringPath(this.withPrefix("AccountNum"));
  public readonly AccountType = new QStringPath(this.withPrefix("AccountType"));
  public readonly AbaRouting = new QStringPath(this.withPrefix("AbaRouting"));
  public readonly Expiration = new QDateTimeOffsetPath(
    this.withPrefix("Expiration")
  );
  public readonly NameOnAccount = new QStringPath(
    this.withPrefix("NameOnAccount")
  );
  public readonly BillStreet = new QStringPath(this.withPrefix("BillStreet"));
  public readonly BillCity = new QStringPath(this.withPrefix("BillCity"));
  public readonly BillState = new QStringPath(this.withPrefix("BillState"));
  public readonly BillZip = new QStringPath(this.withPrefix("BillZip"));
  public readonly CVV = new QStringPath(this.withPrefix("CVV"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qPaymentInfo = new QPaymentInfo();

export class QPaymentInfoId extends QId<PaymentInfoId> {
  private readonly params = [new QNumberParam("FirmId")];

  getParams() {
    return this.params;
  }
}

export class QQuickBooksBankAccount extends QueryObject {
  public readonly QBAccountId = new QNumberPath(this.withPrefix("QBAccountId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly QBListID = new QStringPath(this.withPrefix("QBListID"));
  public readonly QBName = new QStringPath(this.withPrefix("QBName"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qQuickBooksBankAccount = new QQuickBooksBankAccount();

export class QQuickBooksBankAccountId extends QId<QuickBooksBankAccountId> {
  private readonly params = [new QNumberParam("QBAccountId")];

  getParams() {
    return this.params;
  }
}

export class QQuickBooksExpenseAccount extends QueryObject {
  public readonly QBAccountId = new QNumberPath(this.withPrefix("QBAccountId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly QBListID = new QStringPath(this.withPrefix("QBListID"));
  public readonly QBName = new QStringPath(this.withPrefix("QBName"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qQuickBooksExpenseAccount = new QQuickBooksExpenseAccount();

export class QQuickBooksExpenseAccountId extends QId<QuickBooksExpenseAccountId> {
  private readonly params = [new QNumberParam("QBAccountId")];

  getParams() {
    return this.params;
  }
}

export class QQuickBooksLog extends QueryObject {
  public readonly QBLogId = new QNumberPath(this.withPrefix("QBLogId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly EntryDate = new QDateTimeOffsetPath(
    this.withPrefix("EntryDate")
  );
  public readonly EntryType = new QStringPath(this.withPrefix("EntryType"));
  public readonly ActivityDescription = new QStringPath(
    this.withPrefix("ActivityDescription")
  );
  public readonly RelatedEntityType = new QStringPath(
    this.withPrefix("RelatedEntityType")
  );
  public readonly RelatedId = new QNumberPath(this.withPrefix("RelatedId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qQuickBooksLog = new QQuickBooksLog();

export class QQuickBooksLogId extends QId<QuickBooksLogId> {
  private readonly params = [new QNumberParam("QBLogId")];

  getParams() {
    return this.params;
  }
}

export class QQuickBooksSetting extends QueryObject {
  public readonly QuickBooksSettingsId = new QNumberPath(
    this.withPrefix("QuickBooksSettingsId")
  );
  public readonly FirmPartyId = new QNumberPath(this.withPrefix("FirmPartyId"));
  public readonly Username = new QStringPath(this.withPrefix("Username"));
  public readonly Password = new QStringPath(this.withPrefix("Password"));
  public readonly DefaultBankAccount = new QStringPath(
    this.withPrefix("DefaultBankAccount")
  );
  public readonly DefaultExpenseAccount = new QStringPath(
    this.withPrefix("DefaultExpenseAccount")
  );
  public readonly IsEnabled = new QBooleanPath(this.withPrefix("IsEnabled"));
  public readonly UpdateListsFlag = new QBooleanPath(
    this.withPrefix("UpdateListsFlag")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qQuickBooksSetting = new QQuickBooksSetting();

export class QQuickBooksSettingId extends QId<QuickBooksSettingId> {
  private readonly params = [new QNumberParam("QuickBooksSettingsId")];

  getParams() {
    return this.params;
  }
}

export class QReportFirm extends QueryObject {
  public readonly ReportFirmId = new QNumberPath(
    this.withPrefix("ReportFirmId")
  );
  public readonly ReportId = new QNumberPath(this.withPrefix("ReportId"));
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
  public readonly Report = new QEntityPath(
    this.withPrefix("Report"),
    () => QReport
  );
}

export const qReportFirm = new QReportFirm();

export class QReportFirmId extends QId<ReportFirmId> {
  private readonly params = [new QNumberParam("ReportFirmId")];

  getParams() {
    return this.params;
  }
}

export class QReport extends QueryObject {
  public readonly ReportId = new QNumberPath(this.withPrefix("ReportId"));
  public readonly Name = new QStringPath(this.withPrefix("Name"));
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly URL = new QStringPath(this.withPrefix("URL"));
  public readonly AllFirmFlag = new QBooleanPath(
    this.withPrefix("AllFirmFlag")
  );
  public readonly ReportFirms = new QEntityCollectionPath(
    this.withPrefix("ReportFirms"),
    () => QReportFirm
  );
}

export const qReport = new QReport();

export class QReportId extends QId<ReportId> {
  private readonly params = [new QNumberParam("ReportId")];

  getParams() {
    return this.params;
  }
}

export class QTrialItem extends QueryObject {
  public readonly TrialItemId = new QNumberPath(this.withPrefix("TrialItemId"));
  public readonly FirmPartyId = new QNumberPath(this.withPrefix("FirmPartyId"));
  public readonly TrialItemName = new QStringPath(
    this.withPrefix("TrialItemName")
  );
  public readonly TrialItemDesc = new QStringPath(
    this.withPrefix("TrialItemDesc")
  );
  public readonly Sequence = new QNumberPath(this.withPrefix("Sequence"));
  public readonly AutoInclude = new QBooleanPath(
    this.withPrefix("AutoInclude")
  );
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qTrialItem = new QTrialItem();

export class QTrialItemId extends QId<TrialItemId> {
  private readonly params = [new QNumberParam("TrialItemId")];

  getParams() {
    return this.params;
  }
}

export class QAuthorizedEmailSender extends QueryObject {
  public readonly FirmId = new QNumberPath(this.withPrefix("FirmId"));
  public readonly PartyId = new QNumberPath(this.withPrefix("PartyId"));
  public readonly Email = new QStringPath(this.withPrefix("Email"));
  public readonly IsAdmin = new QBooleanPath(this.withPrefix("IsAdmin"));
  public readonly Firm = new QEntityPath(this.withPrefix("Firm"), () => QFirm);
}

export const qAuthorizedEmailSender = new QAuthorizedEmailSender();

export class QAuthorizedEmailSenderId extends QId<AuthorizedEmailSenderId> {
  private readonly params = [
    new QNumberParam("FirmId"),
    new QStringParam("Email"),
    new QBooleanParam("IsAdmin"),
  ];

  getParams() {
    return this.params;
  }
}

export class QActivityHoursLog extends QueryObject {
  public readonly ActivityHoursLogId = new QNumberPath(
    this.withPrefix("ActivityHoursLogId")
  );
  public readonly ActivityLogId = new QNumberPath(
    this.withPrefix("ActivityLogId")
  );
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly StartTime = new QStringPath(this.withPrefix("StartTime"));
  public readonly EndDate = new QDateTimeOffsetPath(this.withPrefix("EndDate"));
  public readonly EndTime = new QStringPath(this.withPrefix("EndTime"));
  public readonly DurationinMinutes = new QNumberPath(
    this.withPrefix("DurationinMinutes")
  );
  public readonly ActivityLog = new QEntityPath(
    this.withPrefix("ActivityLog"),
    () => QActivityLog
  );
}

export const qActivityHoursLog = new QActivityHoursLog();

export class QActivityHoursLogId extends QId<ActivityHoursLogId> {
  private readonly params = [new QNumberParam("ActivityHoursLogId")];

  getParams() {
    return this.params;
  }
}

export class QSyncResults extends QueryObject {
  public readonly Description = new QStringPath(this.withPrefix("Description"));
  public readonly StartDate = new QDateTimeOffsetPath(
    this.withPrefix("StartDate")
  );
  public readonly EndDate = new QDateTimeOffsetPath(this.withPrefix("EndDate"));
  public readonly MoreEntries = new QBooleanPath(
    this.withPrefix("MoreEntries")
  );
  public readonly NextStartSyncId = new QNumberPath(
    this.withPrefix("NextStartSyncId")
  );
  public readonly PartyIds = new QCollectionPath(
    this.withPrefix("PartyIds"),
    () => QNumberCollection
  );
}

export const qSyncResults = new QSyncResults();
