import {
  ODataModelResponseV4,
  ODataCollectionResponseV4,
  ODataValueResponseV4,
} from "@odata2ts/odata-core";
import {
  StringCollection,
  QStringCollection,
  qStringCollection,
  NumberCollection,
  QNumberCollection,
  qNumberCollection,
} from "@odata2ts/odata-query-objects";
import {
  ODataHttpClient,
  ODataHttpClientConfig,
  HttpResponseModel,
} from "@odata2ts/http-client-api";
import {
  ODataService,
  EntityTypeServiceV4,
  EntitySetServiceV4,
  CollectionServiceV4,
} from "@odata2ts/odata-service";
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
  LawsuitPartyId,
  LawsuitPartyTypeId,
  LawsuitPhaseDateId,
  LawsuitPhaseTypeId,
  LawsuitTypeId,
  PartySummaryId,
  PartyTypeId,
  RecordId,
  RecordFileId,
  RecordFolderId,
  SimpleLawsuitSummaryId,
  SubPhaseTypeId,
  TicklerId,
  ActivityLog,
  EditableActivityLog,
  ActivityHoursLogId,
  ActivityLogType,
  EditableActivityLogType,
  AddressType,
  EditableAddressType,
  AddressId,
  ADR,
  EditableADR,
  CalendarEntryRecurId,
  ADRType,
  EditableADRType,
  Alert,
  EditableAlert,
  Appointment,
  EditableAppointment,
  AppointmentHistoryId,
  AppointmentRecurDateId,
  AppointmentEventSubType,
  EditableAppointmentEventSubType,
  AppointmentEventType,
  EditableAppointmentEventType,
  AppointmentParty,
  EditableAppointmentParty,
  AppointmentPartyStatus,
  EditableAppointmentPartyStatus,
  AppointmentType,
  EditableAppointmentType,
  CalendarEntry,
  EditableCalendarEntry,
  Party,
  EditableParty,
  AnswerEnlargementId,
  CalendarUserId,
  ComplaintId,
  DiscoveryId,
  DocumentId,
  EconomicLossId,
  ExpenseId,
  HearingId,
  LienSubrogationId,
  LitigationId,
  MedicalProviderId,
  PartyAddressId,
  SettlementId,
  SettlementDocumentId,
  WitnessExhibitDocumentPartyId,
  SyncResults,
  Party_SyncParams,
  Party_ListParams,
  Person,
  EditablePerson,
  CasePacerUser,
  EditableCasePacerUser,
  CasePacerUserSessionId,
  RoleTemplateId,
  SMSMessageId,
  SecurityUserGroupAssignId,
  SecurityRuleSummaryId,
  ClientForm,
  EditableClientForm,
  ClientFormScreenId,
  LawsuitTypeClientFormId,
  Company,
  EditableCompany,
  PropertyDamageId,
  ContactInfo,
  EditableContactInfo,
  SMSThreadId,
  ContactInfoType,
  EditableContactInfoType,
  ContactType,
  EditableContactType,
  CPDirectBlogCategory,
  EditableCPDirectBlogCategory,
  CPDirectBlog,
  EditableCPDirectBlog,
  CPDirectBlogImage,
  EditableCPDirectBlogImage,
  CPDirectCaseProgress,
  EditableCPDirectCaseProgress,
  IntakeClientLawsuitId,
  CPDirectMessage,
  EditableCPDirectMessage,
  CPDirectSetting,
  EditableCPDirectSetting,
  CPDirectSettingLocation,
  EditableCPDirectSettingLocation,
  CustomField,
  EditableCustomField,
  CustomFieldType,
  EditableCustomFieldType,
  CustomFieldValue,
  EditableCustomFieldValue,
  DashboardAchievement,
  EditableDashboardAchievement,
  Deposition,
  EditableDeposition,
  DepositionLitigationAssnId,
  Firm,
  EditableFirm,
  AdditionalEmailSenderId,
  AppointmentCustomTypeId,
  CaseMenuItemId,
  DocumentTemplateId,
  EmailId,
  ExternalImportKeyId,
  RecordSubtypeId,
  FirmAbbrId,
  SecurityUserGroupId,
  IntakeClientFirmId,
  IntangibleDamageId,
  LawId,
  LawsuitAbbrId,
  PIPBenefitsTypeId,
  QuickBooksBankAccountId,
  QuickBooksExpenseAccountId,
  QuickBooksLogId,
  QuickBooksSettingId,
  ReportFirmId,
  StandardExhibitId,
  StandardWitnessId,
  TicklerTemplateId,
  TrialExhibitId,
  TrialItemId,
  TwilioPhoneId,
  AuthorizedEmailSenderId,
  FirmCustomField,
  EditableFirmCustomField,
  IntakeClientLoginSummary,
  EditableIntakeClientLoginSummary,
  Lawsuit,
  EditableLawsuit,
  CustomAttributeId,
  EvidenceId,
  InsurancePolicyId,
  InvestigatorId,
  LawsuitClientFormId,
  LawsuitRecordRequestId,
  LawsuitRoleId,
  MedicalEvaluationId,
  NegotiationId,
  PoliceReportId,
  WitnessExhibitDocumentId,
  CustomAttribute,
  EditableCustomAttribute,
  LawsuitParty,
  EditableLawsuitParty,
  InsuranceClaimId,
  DefendantAttorneyId,
  DefendantLawsuitPartyId,
  PIPBenefitId,
  PlaintiffLawsuitPartyId,
  LawsuitPartyType,
  EditableLawsuitPartyType,
  MailMergeId,
  LawsuitPhaseDate,
  EditableLawsuitPhaseDate,
  LawsuitPhaseType,
  EditableLawsuitPhaseType,
  LawsuitType,
  EditableLawsuitType,
  LawsuitTypeDocumentId,
  LawsuitTypeTicklerId,
  PartySummary,
  EditablePartySummary,
  PartySummary_ListParams,
  PartyType,
  EditablePartyType,
  Record,
  EditableRecord,
  SMSAttachmentId,
  TrialPleadingId,
  RecordFile,
  EditableRecordFile,
  RecordFileRelationshipId,
  RecordFile_GetUrlParams,
  RecordFile_PutUrlParams,
  RecordFile_InitiateMultipartParams,
  RecordFile_PutMultipartUrlParams,
  RecordFile_CompleteMultipartParams,
  RecordFile_ValidateParams,
  RecordFolder,
  EditableRecordFolder,
  SimpleLawsuitSummary,
  EditableSimpleLawsuitSummary,
  SubPhaseType,
  EditableSubPhaseType,
  Tickler,
  EditableTickler,
  CasePacerUserType,
  EditableCasePacerUserType,
  CasePacerUserTypeId,
  IntakeClientLogin,
  EditableIntakeClientLogin,
  CPDirectPushTokenId,
  IntakeClientSessionId,
  IntakeClientLoginId,
  IntakeClientLawsuit,
  EditableIntakeClientLawsuit,
  CPDirectMedicalProviderId,
  CaseMenuItem,
  EditableCaseMenuItem,
  CaseMenuGroup,
  EditableCaseMenuGroup,
  CaseMenuGroupId,
  CaseMenuTab,
  EditableCaseMenuTab,
  CaseMenuTabId,
  RecordSubtype,
  EditableRecordSubtype,
  RecordType,
  EditableRecordType,
  RecordTypeId,
  DocumentTemplate,
  EditableDocumentTemplate,
  AppointmentRecurDate,
  EditableAppointmentRecurDate,
  Litigation,
  EditableLitigation,
  DefendantLitigationAssnId,
  DiscoveryLitigationAssnId,
  TrialId,
  WitnessLitigationAssnId,
  Address,
  EditableAddress,
  CPDirectMedicalProvider,
  EditableCPDirectMedicalProvider,
  CPDirectTreatmentNoteId,
  CPDirectTreatmentNote,
  EditableCPDirectTreatmentNote,
  PartyAddress,
  EditablePartyAddress,
  SMSThread,
  EditableSMSThread,
  TwilioPhone,
  EditableTwilioPhone,
  SMSMessage,
  EditableSMSMessage,
  SMSAttachment,
  EditableSMSAttachment,
  AnswerEnlargement,
  EditableAnswerEnlargement,
  CalendarUser,
  EditableCalendarUser,
  CalendarUserGroup,
  EditableCalendarUserGroup,
  CalendarUserGroupId,
  Complaint,
  EditableComplaint,
  Discovery,
  EditableDiscovery,
  DiscoveryRecipientType,
  EditableDiscoveryRecipientType,
  DiscoveryRecipientTypeId,
  DiscoveryTarget,
  EditableDiscoveryTarget,
  DiscoveryTargetId,
  DiscoveryType,
  EditableDiscoveryType,
  DiscoveryTypeId,
  DiscoveryLitigationAssn,
  EditableDiscoveryLitigationAssn,
  Document,
  EditableDocument,
  TicklerAnswer,
  EditableTicklerAnswer,
  TicklerAnswerActionId,
  TicklerAnswerId,
  TicklerTemplate,
  EditableTicklerTemplate,
  TicklerCriteriaId,
  TicklerTemplateActionId,
  RoleTemplate,
  EditableRoleTemplate,
  LawsuitRole,
  EditableLawsuitRole,
  InsuranceClaim,
  EditableInsuranceClaim,
  InsuranceClaimDemandId,
  PIPId,
  SettlementItemId,
  InsurancePolicy,
  EditableInsurancePolicy,
  Negotiation,
  EditableNegotiation,
  DemandId,
  Demand,
  EditableDemand,
  CounterOfferId,
  DemandLineItemId,
  Law,
  EditableLaw,
  CounterOffer,
  EditableCounterOffer,
  CounterOfferType,
  EditableCounterOfferType,
  CounterOfferTypeId,
  DemandLineItem,
  EditableDemandLineItem,
  InsuranceClaimDemand,
  EditableInsuranceClaimDemand,
  PIP,
  EditablePIP,
  PIPBenefit,
  EditablePIPBenefit,
  PIPBenefitsType,
  EditablePIPBenefitsType,
  PropertyDamage,
  EditablePropertyDamage,
  PropertyType,
  EditablePropertyType,
  PropertyTypeId,
  EconomicLoss,
  EditableEconomicLoss,
  Expense,
  EditableExpense,
  SettlementExpenseId,
  ExpenseType,
  EditableExpenseType,
  ExpenseTypeId,
  PaymentMethod,
  EditablePaymentMethod,
  PaymentMethodId,
  Settlement,
  EditableSettlement,
  SettlementLienSubId,
  SettlementMedicalProviderId,
  SettlementExpense,
  EditableSettlementExpense,
  SettlementItem,
  EditableSettlementItem,
  SettlementLienSub,
  EditableSettlementLienSub,
  LienSubrogation,
  EditableLienSubrogation,
  LienSubrogationPaymentType,
  EditableLienSubrogationPaymentType,
  LienSubrogationPaymentTypeId,
  SettlementMedicalProvider,
  EditableSettlementMedicalProvider,
  MedicalProvider,
  EditableMedicalProvider,
  TreatmentId,
  TreatmentNoteId,
  Treatment,
  EditableTreatment,
  TreatmentNote,
  EditableTreatmentNote,
  Hearing,
  EditableHearing,
  HearingType,
  EditableHearingType,
  HearingTypeId,
  CalendarEntryRecur,
  EditableCalendarEntryRecur,
  Trial,
  EditableTrial,
  TrialExhibit,
  EditableTrialExhibit,
  WitnessExhibitDocumentTrialExhibitId,
  WitnessExhibitDocumentTrialExhibit,
  EditableWitnessExhibitDocumentTrialExhibit,
  WitnessExhibitDocument,
  EditableWitnessExhibitDocument,
  WitnessExhibitDocumentStandardExhibitId,
  WitnessExhibitDocumentStandardWitnessId,
  WitnessExhibitDocumentParty,
  EditableWitnessExhibitDocumentParty,
  WitnessExhibitDocumentStandardExhibit,
  EditableWitnessExhibitDocumentStandardExhibit,
  StandardExhibit,
  EditableStandardExhibit,
  WitnessExhibitDocumentStandardWitness,
  EditableWitnessExhibitDocumentStandardWitness,
  StandardWitness,
  EditableStandardWitness,
  TrialPleading,
  EditableTrialPleading,
  SettlementDocument,
  EditableSettlementDocument,
  AttorneyFeeInterest,
  EditableAttorneyFeeInterest,
  AttorneyFeeInterestId,
  AttorneyFeeInterestType,
  EditableAttorneyFeeInterestType,
  AttorneyFeeInterestTypeId,
  DefendantAttorney,
  EditableDefendantAttorney,
  DefendantLawsuitParty,
  EditableDefendantLawsuitParty,
  DefendantLitigationAssn,
  EditableDefendantLitigationAssn,
  Investigator,
  EditableInvestigator,
  MedicalEvaluation,
  EditableMedicalEvaluation,
  PlaintiffLawsuitParty,
  EditablePlaintiffLawsuitParty,
  PoliceReport,
  EditablePoliceReport,
  Witness,
  EditableWitness,
  WitnessId,
  WitnessType,
  EditableWitnessType,
  WitnessTypeId,
  WitnessLitigationAssn,
  EditableWitnessLitigationAssn,
  LawsuitTypeDocument,
  EditableLawsuitTypeDocument,
  LawsuitTypeTickler,
  EditableLawsuitTypeTickler,
  TicklerCriteria,
  EditableTicklerCriteria,
  TicklerCriteriaSetId,
  TicklerCriteriaSet,
  EditableTicklerCriteriaSet,
  TicklerCriteriaItemId,
  TicklerCriteriaItem,
  EditableTicklerCriteriaItem,
  TicklerCriteriaOperator,
  EditableTicklerCriteriaOperator,
  TicklerCriteriaOperatorId,
  TicklerCriteriaAction,
  EditableTicklerCriteriaAction,
  TicklerCriteriaActionId,
  TicklerTemplateAction,
  EditableTicklerTemplateAction,
  TicklerAnswerAction,
  EditableTicklerAnswerAction,
  TicklerActionType,
  EditableTicklerActionType,
  TicklerActionTypeId,
  DepositionLitigationAssn,
  EditableDepositionLitigationAssn,
  AppointmentCustomType,
  EditableAppointmentCustomType,
  AppointmentHistory,
  EditableAppointmentHistory,
  AppointmentIntegration,
  EditableAppointmentIntegration,
  AppointmentIntegrationId,
  MailMerge,
  EditableMailMerge,
  Email,
  EditableEmail,
  RecordFileRelationship,
  EditableRecordFileRelationship,
  AccountingSyncGL,
  EditableAccountingSyncGL,
  AccountingSyncGLId,
  LawsuitTypeClientForm,
  EditableLawsuitTypeClientForm,
  ClientFormQuestion,
  EditableClientFormQuestion,
  ClientFormQuestionId,
  ClientFormComponent,
  EditableClientFormComponent,
  ClientFormComponentId,
  ClientFormScreen,
  EditableClientFormScreen,
  ClientFormStatus,
  EditableClientFormStatus,
  ClientFormStatusId,
  IntakeClientFirm,
  EditableIntakeClientFirm,
  CPDirectPushToken,
  EditableCPDirectPushToken,
  IntakeClientSession,
  EditableIntakeClientSession,
  LawsuitClientForm,
  EditableLawsuitClientForm,
  LawsuitCompanionGroup,
  EditableLawsuitCompanionGroup,
  LawsuitCompanionGroupId,
  Evidence,
  EditableEvidence,
  LawsuitAbbr,
  EditableLawsuitAbbr,
  LawsuitRecordRequest,
  EditableLawsuitRecordRequest,
  CasePacerUserSession,
  EditableCasePacerUserSession,
  CasePacerUserIntegrationToken,
  EditableCasePacerUserIntegrationToken,
  CasePacerUserIntegrationTokenId,
  EventHelp,
  EditableEventHelp,
  EventHelpId,
  SecurityUserGroupAssign,
  EditableSecurityUserGroupAssign,
  SecurityUserGroup,
  EditableSecurityUserGroup,
  SecurityRuleSummary,
  EditableSecurityRuleSummary,
  SecurityPath,
  EditableSecurityPath,
  SecurityRuleId,
  SecurityPathId,
  SecurityRule,
  EditableSecurityRule,
  AccessLevel,
  EditableAccessLevel,
  AccessLevelId,
  AdditionalEmailSender,
  EditableAdditionalEmailSender,
  ExternalImportKey,
  EditableExternalImportKey,
  FirmAbbr,
  EditableFirmAbbr,
  IntangibleDamage,
  EditableIntangibleDamage,
  PaymentInfo,
  EditablePaymentInfo,
  PaymentInfoId,
  QuickBooksBankAccount,
  EditableQuickBooksBankAccount,
  QuickBooksExpenseAccount,
  EditableQuickBooksExpenseAccount,
  QuickBooksLog,
  EditableQuickBooksLog,
  QuickBooksSetting,
  EditableQuickBooksSetting,
  ReportFirm,
  EditableReportFirm,
  Report,
  EditableReport,
  ReportId,
  TrialItem,
  EditableTrialItem,
  AuthorizedEmailSender,
  EditableAuthorizedEmailSender,
  ActivityHoursLog,
  EditableActivityHoursLog,
  EditableSyncResults,
} from "./CasePacerModel";
import {
  QActivityLogId,
  QActivityLogTypeId,
  QAddressTypeId,
  QADRId,
  QADRTypeId,
  QAlertId,
  QAppointmentId,
  QAppointmentEventSubTypeId,
  QAppointmentEventTypeId,
  QAppointmentPartyId,
  QAppointmentPartyStatusId,
  QAppointmentTypeId,
  QCalendarEntryId,
  QPartyId,
  QClientFormId,
  QContactInfoId,
  QContactInfoTypeId,
  QContactTypeId,
  QCPDirectBlogCategoryId,
  QCPDirectBlogId,
  QCPDirectBlogImageId,
  QCPDirectCaseProgressId,
  QCPDirectMessageId,
  QCPDirectSettingId,
  QCPDirectSettingLocationId,
  QCustomFieldId,
  QCustomFieldTypeId,
  QCustomFieldValueId,
  QDashboardAchievementId,
  QDepositionId,
  QFirmCustomFieldId,
  QIntakeClientLoginSummaryId,
  QLawsuitId,
  QLawsuitPartyId,
  QLawsuitPartyTypeId,
  QLawsuitPhaseDateId,
  QLawsuitPhaseTypeId,
  QLawsuitTypeId,
  QPartySummaryId,
  QPartyTypeId,
  QRecordId,
  QRecordFileId,
  QRecordFolderId,
  QSimpleLawsuitSummaryId,
  QSubPhaseTypeId,
  QTicklerId,
  QActivityLog,
  qActivityLog,
  QActivityHoursLogId,
  QActivityLogType,
  qActivityLogType,
  QAddressType,
  qAddressType,
  QAddressId,
  QADR,
  qADR,
  QCalendarEntryRecurId,
  QADRType,
  qADRType,
  QAlert,
  qAlert,
  QAppointment,
  qAppointment,
  QAppointmentHistoryId,
  QAppointmentRecurDateId,
  QAppointmentEventSubType,
  qAppointmentEventSubType,
  QAppointmentEventType,
  qAppointmentEventType,
  QAppointmentParty,
  qAppointmentParty,
  QAppointmentPartyStatus,
  qAppointmentPartyStatus,
  QAppointmentType,
  qAppointmentType,
  QCalendarEntry,
  qCalendarEntry,
  QParty,
  qParty,
  QAnswerEnlargementId,
  QCalendarUserId,
  QComplaintId,
  QDiscoveryId,
  QDocumentId,
  QEconomicLossId,
  QExpenseId,
  QHearingId,
  QLienSubrogationId,
  QLitigationId,
  QMedicalProviderId,
  QPartyAddressId,
  QSettlementId,
  QSettlementDocumentId,
  QWitnessExhibitDocumentPartyId,
  Party_QSync,
  Party_QList,
  QPerson,
  qPerson,
  QCasePacerUser,
  qCasePacerUser,
  QCasePacerUserSessionId,
  QRoleTemplateId,
  QSMSMessageId,
  QSecurityUserGroupAssignId,
  QSecurityRuleSummaryId,
  QClientForm,
  qClientForm,
  QClientFormScreenId,
  QLawsuitTypeClientFormId,
  QCompany,
  qCompany,
  QPropertyDamageId,
  QContactInfo,
  qContactInfo,
  QSMSThreadId,
  QContactInfoType,
  qContactInfoType,
  QContactType,
  qContactType,
  QCPDirectBlogCategory,
  qCPDirectBlogCategory,
  QCPDirectBlog,
  qCPDirectBlog,
  QCPDirectBlogImage,
  qCPDirectBlogImage,
  QCPDirectCaseProgress,
  qCPDirectCaseProgress,
  QIntakeClientLawsuitId,
  QCPDirectMessage,
  qCPDirectMessage,
  QCPDirectSetting,
  qCPDirectSetting,
  QCPDirectSettingLocation,
  qCPDirectSettingLocation,
  QCustomField,
  qCustomField,
  QCustomFieldType,
  qCustomFieldType,
  QCustomFieldValue,
  qCustomFieldValue,
  QDashboardAchievement,
  qDashboardAchievement,
  QDeposition,
  qDeposition,
  QDepositionLitigationAssnId,
  QFirm,
  qFirm,
  QAdditionalEmailSenderId,
  QAppointmentCustomTypeId,
  QCaseMenuItemId,
  QDocumentTemplateId,
  QEmailId,
  QExternalImportKeyId,
  QRecordSubtypeId,
  QFirmAbbrId,
  QSecurityUserGroupId,
  QIntakeClientFirmId,
  QIntangibleDamageId,
  QLawId,
  QLawsuitAbbrId,
  QPIPBenefitsTypeId,
  QQuickBooksBankAccountId,
  QQuickBooksExpenseAccountId,
  QQuickBooksLogId,
  QQuickBooksSettingId,
  QReportFirmId,
  QStandardExhibitId,
  QStandardWitnessId,
  QTicklerTemplateId,
  QTrialExhibitId,
  QTrialItemId,
  QTwilioPhoneId,
  QAuthorizedEmailSenderId,
  QFirmCustomField,
  qFirmCustomField,
  QIntakeClientLoginSummary,
  qIntakeClientLoginSummary,
  QLawsuit,
  qLawsuit,
  QCustomAttributeId,
  QEvidenceId,
  QInsurancePolicyId,
  QInvestigatorId,
  QLawsuitClientFormId,
  QLawsuitRecordRequestId,
  QLawsuitRoleId,
  QMedicalEvaluationId,
  QNegotiationId,
  QPoliceReportId,
  QWitnessExhibitDocumentId,
  QCustomAttribute,
  qCustomAttribute,
  QLawsuitParty,
  qLawsuitParty,
  QInsuranceClaimId,
  QDefendantAttorneyId,
  QDefendantLawsuitPartyId,
  QPIPBenefitId,
  QPlaintiffLawsuitPartyId,
  QLawsuitPartyType,
  qLawsuitPartyType,
  QMailMergeId,
  QLawsuitPhaseDate,
  qLawsuitPhaseDate,
  QLawsuitPhaseType,
  qLawsuitPhaseType,
  QLawsuitType,
  qLawsuitType,
  QLawsuitTypeDocumentId,
  QLawsuitTypeTicklerId,
  QPartySummary,
  qPartySummary,
  PartySummary_QList,
  QPartyType,
  qPartyType,
  QRecord,
  qRecord,
  QSMSAttachmentId,
  QTrialPleadingId,
  QRecordFile,
  qRecordFile,
  QRecordFileRelationshipId,
  RecordFile_QGetUrl,
  RecordFile_QPutUrl,
  RecordFile_QInitiateMultipart,
  RecordFile_QPutMultipartUrl,
  RecordFile_QCompleteMultipart,
  RecordFile_QValidate,
  QRecordFolder,
  qRecordFolder,
  QSimpleLawsuitSummary,
  qSimpleLawsuitSummary,
  QSubPhaseType,
  qSubPhaseType,
  QTickler,
  qTickler,
  QCasePacerUserType,
  qCasePacerUserType,
  QCasePacerUserTypeId,
  QIntakeClientLogin,
  qIntakeClientLogin,
  QCPDirectPushTokenId,
  QIntakeClientSessionId,
  QIntakeClientLoginId,
  QIntakeClientLawsuit,
  qIntakeClientLawsuit,
  QCPDirectMedicalProviderId,
  QCaseMenuItem,
  qCaseMenuItem,
  QCaseMenuGroup,
  qCaseMenuGroup,
  QCaseMenuGroupId,
  QCaseMenuTab,
  qCaseMenuTab,
  QCaseMenuTabId,
  QRecordSubtype,
  qRecordSubtype,
  QRecordType,
  qRecordType,
  QRecordTypeId,
  QDocumentTemplate,
  qDocumentTemplate,
  QAppointmentRecurDate,
  qAppointmentRecurDate,
  QLitigation,
  qLitigation,
  QDefendantLitigationAssnId,
  QDiscoveryLitigationAssnId,
  QTrialId,
  QWitnessLitigationAssnId,
  QAddress,
  qAddress,
  QCPDirectMedicalProvider,
  qCPDirectMedicalProvider,
  QCPDirectTreatmentNoteId,
  QCPDirectTreatmentNote,
  qCPDirectTreatmentNote,
  QPartyAddress,
  qPartyAddress,
  QSMSThread,
  qSMSThread,
  QTwilioPhone,
  qTwilioPhone,
  QSMSMessage,
  qSMSMessage,
  QSMSAttachment,
  qSMSAttachment,
  QAnswerEnlargement,
  qAnswerEnlargement,
  QCalendarUser,
  qCalendarUser,
  QCalendarUserGroup,
  qCalendarUserGroup,
  QCalendarUserGroupId,
  QComplaint,
  qComplaint,
  QDiscovery,
  qDiscovery,
  QDiscoveryRecipientType,
  qDiscoveryRecipientType,
  QDiscoveryRecipientTypeId,
  QDiscoveryTarget,
  qDiscoveryTarget,
  QDiscoveryTargetId,
  QDiscoveryType,
  qDiscoveryType,
  QDiscoveryTypeId,
  QDiscoveryLitigationAssn,
  qDiscoveryLitigationAssn,
  QDocument,
  qDocument,
  QTicklerAnswer,
  qTicklerAnswer,
  QTicklerAnswerActionId,
  QTicklerAnswerId,
  QTicklerTemplate,
  qTicklerTemplate,
  QTicklerCriteriaId,
  QTicklerTemplateActionId,
  QRoleTemplate,
  qRoleTemplate,
  QLawsuitRole,
  qLawsuitRole,
  QInsuranceClaim,
  qInsuranceClaim,
  QInsuranceClaimDemandId,
  QPIPId,
  QSettlementItemId,
  QInsurancePolicy,
  qInsurancePolicy,
  QNegotiation,
  qNegotiation,
  QDemandId,
  QDemand,
  qDemand,
  QCounterOfferId,
  QDemandLineItemId,
  QLaw,
  qLaw,
  QCounterOffer,
  qCounterOffer,
  QCounterOfferType,
  qCounterOfferType,
  QCounterOfferTypeId,
  QDemandLineItem,
  qDemandLineItem,
  QInsuranceClaimDemand,
  qInsuranceClaimDemand,
  QPIP,
  qPIP,
  QPIPBenefit,
  qPIPBenefit,
  QPIPBenefitsType,
  qPIPBenefitsType,
  QPropertyDamage,
  qPropertyDamage,
  QPropertyType,
  qPropertyType,
  QPropertyTypeId,
  QEconomicLoss,
  qEconomicLoss,
  QExpense,
  qExpense,
  QSettlementExpenseId,
  QExpenseType,
  qExpenseType,
  QExpenseTypeId,
  QPaymentMethod,
  qPaymentMethod,
  QPaymentMethodId,
  QSettlement,
  qSettlement,
  QSettlementLienSubId,
  QSettlementMedicalProviderId,
  QSettlementExpense,
  qSettlementExpense,
  QSettlementItem,
  qSettlementItem,
  QSettlementLienSub,
  qSettlementLienSub,
  QLienSubrogation,
  qLienSubrogation,
  QLienSubrogationPaymentType,
  qLienSubrogationPaymentType,
  QLienSubrogationPaymentTypeId,
  QSettlementMedicalProvider,
  qSettlementMedicalProvider,
  QMedicalProvider,
  qMedicalProvider,
  QTreatmentId,
  QTreatmentNoteId,
  QTreatment,
  qTreatment,
  QTreatmentNote,
  qTreatmentNote,
  QHearing,
  qHearing,
  QHearingType,
  qHearingType,
  QHearingTypeId,
  QCalendarEntryRecur,
  qCalendarEntryRecur,
  QTrial,
  qTrial,
  QTrialExhibit,
  qTrialExhibit,
  QWitnessExhibitDocumentTrialExhibitId,
  QWitnessExhibitDocumentTrialExhibit,
  qWitnessExhibitDocumentTrialExhibit,
  QWitnessExhibitDocument,
  qWitnessExhibitDocument,
  QWitnessExhibitDocumentStandardExhibitId,
  QWitnessExhibitDocumentStandardWitnessId,
  QWitnessExhibitDocumentParty,
  qWitnessExhibitDocumentParty,
  QWitnessExhibitDocumentStandardExhibit,
  qWitnessExhibitDocumentStandardExhibit,
  QStandardExhibit,
  qStandardExhibit,
  QWitnessExhibitDocumentStandardWitness,
  qWitnessExhibitDocumentStandardWitness,
  QStandardWitness,
  qStandardWitness,
  QTrialPleading,
  qTrialPleading,
  QSettlementDocument,
  qSettlementDocument,
  QAttorneyFeeInterest,
  qAttorneyFeeInterest,
  QAttorneyFeeInterestId,
  QAttorneyFeeInterestType,
  qAttorneyFeeInterestType,
  QAttorneyFeeInterestTypeId,
  QDefendantAttorney,
  qDefendantAttorney,
  QDefendantLawsuitParty,
  qDefendantLawsuitParty,
  QDefendantLitigationAssn,
  qDefendantLitigationAssn,
  QInvestigator,
  qInvestigator,
  QMedicalEvaluation,
  qMedicalEvaluation,
  QPlaintiffLawsuitParty,
  qPlaintiffLawsuitParty,
  QPoliceReport,
  qPoliceReport,
  QWitness,
  qWitness,
  QWitnessId,
  QWitnessType,
  qWitnessType,
  QWitnessTypeId,
  QWitnessLitigationAssn,
  qWitnessLitigationAssn,
  QLawsuitTypeDocument,
  qLawsuitTypeDocument,
  QLawsuitTypeTickler,
  qLawsuitTypeTickler,
  QTicklerCriteria,
  qTicklerCriteria,
  QTicklerCriteriaSetId,
  QTicklerCriteriaSet,
  qTicklerCriteriaSet,
  QTicklerCriteriaItemId,
  QTicklerCriteriaItem,
  qTicklerCriteriaItem,
  QTicklerCriteriaOperator,
  qTicklerCriteriaOperator,
  QTicklerCriteriaOperatorId,
  QTicklerCriteriaAction,
  qTicklerCriteriaAction,
  QTicklerCriteriaActionId,
  QTicklerTemplateAction,
  qTicklerTemplateAction,
  QTicklerAnswerAction,
  qTicklerAnswerAction,
  QTicklerActionType,
  qTicklerActionType,
  QTicklerActionTypeId,
  QDepositionLitigationAssn,
  qDepositionLitigationAssn,
  QAppointmentCustomType,
  qAppointmentCustomType,
  QAppointmentHistory,
  qAppointmentHistory,
  QAppointmentIntegration,
  qAppointmentIntegration,
  QAppointmentIntegrationId,
  QMailMerge,
  qMailMerge,
  QEmail,
  qEmail,
  QRecordFileRelationship,
  qRecordFileRelationship,
  QAccountingSyncGL,
  qAccountingSyncGL,
  QAccountingSyncGLId,
  QLawsuitTypeClientForm,
  qLawsuitTypeClientForm,
  QClientFormQuestion,
  qClientFormQuestion,
  QClientFormQuestionId,
  QClientFormComponent,
  qClientFormComponent,
  QClientFormComponentId,
  QClientFormScreen,
  qClientFormScreen,
  QClientFormStatus,
  qClientFormStatus,
  QClientFormStatusId,
  QIntakeClientFirm,
  qIntakeClientFirm,
  QCPDirectPushToken,
  qCPDirectPushToken,
  QIntakeClientSession,
  qIntakeClientSession,
  QLawsuitClientForm,
  qLawsuitClientForm,
  QLawsuitCompanionGroup,
  qLawsuitCompanionGroup,
  QLawsuitCompanionGroupId,
  QEvidence,
  qEvidence,
  QLawsuitAbbr,
  qLawsuitAbbr,
  QLawsuitRecordRequest,
  qLawsuitRecordRequest,
  QCasePacerUserSession,
  qCasePacerUserSession,
  QCasePacerUserIntegrationToken,
  qCasePacerUserIntegrationToken,
  QCasePacerUserIntegrationTokenId,
  QEventHelp,
  qEventHelp,
  QEventHelpId,
  QSecurityUserGroupAssign,
  qSecurityUserGroupAssign,
  QSecurityUserGroup,
  qSecurityUserGroup,
  QSecurityRuleSummary,
  qSecurityRuleSummary,
  QSecurityPath,
  qSecurityPath,
  QSecurityRuleId,
  QSecurityPathId,
  QSecurityRule,
  qSecurityRule,
  QAccessLevel,
  qAccessLevel,
  QAccessLevelId,
  QAdditionalEmailSender,
  qAdditionalEmailSender,
  QExternalImportKey,
  qExternalImportKey,
  QFirmAbbr,
  qFirmAbbr,
  QIntangibleDamage,
  qIntangibleDamage,
  QPaymentInfo,
  qPaymentInfo,
  QPaymentInfoId,
  QQuickBooksBankAccount,
  qQuickBooksBankAccount,
  QQuickBooksExpenseAccount,
  qQuickBooksExpenseAccount,
  QQuickBooksLog,
  qQuickBooksLog,
  QQuickBooksSetting,
  qQuickBooksSetting,
  QReportFirm,
  qReportFirm,
  QReport,
  qReport,
  QReportId,
  QTrialItem,
  qTrialItem,
  QAuthorizedEmailSender,
  qAuthorizedEmailSender,
  QActivityHoursLog,
  qActivityHoursLog,
  QSyncResults,
  qSyncResults,
} from "./QCasePacer";

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

export class ActivityLogService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ActivityLog,
  EditableActivityLog,
  QActivityLog
> {
  private _ActivityLogType?: ActivityLogTypeService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _CasePacerAuditUser?: CasePacerUserService<ClientType>;
  private _Expense?: ExpenseService<ClientType>;
  private _GlobalActivityLog?: ActivityLogService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qActivityLog);
  }

  public ActivityLogType(): ActivityLogTypeService<ClientType> {
    if (!this._ActivityLogType) {
      const { client, path } = this.__base;
      this._ActivityLogType = new ActivityLogTypeService(
        client,
        path,
        "ActivityLogType"
      );
    }

    return this._ActivityLogType;
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public CasePacerAuditUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerAuditUser) {
      const { client, path } = this.__base;
      this._CasePacerAuditUser = new CasePacerUserService(
        client,
        path,
        "CasePacerAuditUser"
      );
    }

    return this._CasePacerAuditUser;
  }

  public Expense(): ExpenseService<ClientType> {
    if (!this._Expense) {
      const { client, path } = this.__base;
      this._Expense = new ExpenseService(client, path, "Expense");
    }

    return this._Expense;
  }

  public GlobalActivityLog(): ActivityLogService<ClientType> {
    if (!this._GlobalActivityLog) {
      const { client, path } = this.__base;
      this._GlobalActivityLog = new ActivityLogService(
        client,
        path,
        "GlobalActivityLog"
      );
    }

    return this._GlobalActivityLog;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public ActivityHoursLogs(): ActivityHoursLogCollectionService<ClientType>;
  public ActivityHoursLogs(
    id: ActivityHoursLogId
  ): ActivityHoursLogService<ClientType>;
  public ActivityHoursLogs(id?: ActivityHoursLogId | undefined) {
    const fieldName = "ActivityHoursLogs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityHoursLogCollectionService(client, path, fieldName)
      : new ActivityHoursLogService(
          client,
          path,
          new QActivityHoursLogId(fieldName).buildUrl(id)
        );
  }

  public GlobalActivityLogActivityLogs(): ActivityLogCollectionService<ClientType>;
  public GlobalActivityLogActivityLogs(
    id: ActivityLogId
  ): ActivityLogService<ClientType>;
  public GlobalActivityLogActivityLogs(id?: ActivityLogId | undefined) {
    const fieldName = "GlobalActivityLogActivityLogs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityLogCollectionService(client, path, fieldName)
      : new ActivityLogService(
          client,
          path,
          new QActivityLogId(fieldName).buildUrl(id)
        );
  }
}

export class ActivityLogCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ActivityLog,
  EditableActivityLog,
  QActivityLog,
  ActivityLogId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qActivityLog, new QActivityLogId(name));
  }
}

export class ActivityLogTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ActivityLogType,
  EditableActivityLogType,
  QActivityLogType
> {
  private _Firm?: FirmService<ClientType>;
  private _ActivityLogSystemType?: ActivityLogTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qActivityLogType);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public ActivityLogSystemType(): ActivityLogTypeService<ClientType> {
    if (!this._ActivityLogSystemType) {
      const { client, path } = this.__base;
      this._ActivityLogSystemType = new ActivityLogTypeService(
        client,
        path,
        "ActivityLogSystemType"
      );
    }

    return this._ActivityLogSystemType;
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

  public ActivityLogChildrenOfSystemType(): ActivityLogTypeCollectionService<ClientType>;
  public ActivityLogChildrenOfSystemType(
    id: ActivityLogTypeId
  ): ActivityLogTypeService<ClientType>;
  public ActivityLogChildrenOfSystemType(id?: ActivityLogTypeId | undefined) {
    const fieldName = "ActivityLogChildrenOfSystemType";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ActivityLogTypeCollectionService(client, path, fieldName)
      : new ActivityLogTypeService(
          client,
          path,
          new QActivityLogTypeId(fieldName).buildUrl(id)
        );
  }
}

export class ActivityLogTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ActivityLogType,
  EditableActivityLogType,
  QActivityLogType,
  ActivityLogTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qActivityLogType,
      new QActivityLogTypeId(name)
    );
  }
}

export class AddressTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AddressType,
  EditableAddressType,
  QAddressType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAddressType);
  }

  public Addresses(): AddressCollectionService<ClientType>;
  public Addresses(id: AddressId): AddressService<ClientType>;
  public Addresses(id?: AddressId | undefined) {
    const fieldName = "Addresses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AddressCollectionService(client, path, fieldName)
      : new AddressService(
          client,
          path,
          new QAddressId(fieldName).buildUrl(id)
        );
  }
}

export class AddressTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AddressType,
  EditableAddressType,
  QAddressType,
  AddressTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAddressType, new QAddressTypeId(name));
  }
}

export class ADRService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, ADR, EditableADR, QADR> {
  private _ADRType?: ADRTypeService<ClientType>;
  private _Litigation?: LitigationService<ClientType>;
  private _MediatorArbitrator?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qADR);
  }

  public ADRType(): ADRTypeService<ClientType> {
    if (!this._ADRType) {
      const { client, path } = this.__base;
      this._ADRType = new ADRTypeService(client, path, "ADRType");
    }

    return this._ADRType;
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }

  public MediatorArbitrator(): PartyService<ClientType> {
    if (!this._MediatorArbitrator) {
      const { client, path } = this.__base;
      this._MediatorArbitrator = new PartyService(
        client,
        path,
        "MediatorArbitrator"
      );
    }

    return this._MediatorArbitrator;
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
}

export class ADRCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<ClientType, ADR, EditableADR, QADR, ADRId> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qADR, new QADRId(name));
  }
}

export class ADRTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, ADRType, EditableADRType, QADRType> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qADRType);
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
}

export class ADRTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ADRType,
  EditableADRType,
  QADRType,
  ADRTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qADRType, new QADRTypeId(name));
  }
}

export class AlertService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Alert, EditableAlert, QAlert> {
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Record?: RecordService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAlert);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Record(): RecordService<ClientType> {
    if (!this._Record) {
      const { client, path } = this.__base;
      this._Record = new RecordService(client, path, "Record");
    }

    return this._Record;
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }
}

export class AlertCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Alert,
  EditableAlert,
  QAlert,
  AlertId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAlert, new QAlertId(name));
  }
}

export class AppointmentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Appointment,
  EditableAppointment,
  QAppointment
> {
  private _ADR?: ADRService<ClientType>;
  private _AppointmentCustomType?: AppointmentCustomTypeService<ClientType>;
  private _AppointmentEventSubType?: AppointmentEventSubTypeService<ClientType>;
  private _AppointmentType?: AppointmentTypeService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _Deposition?: DepositionService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _GlobalAppointment?: AppointmentService<ClientType>;
  private _Hearing?: HearingService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _PlaintiffParty?: PartyService<ClientType>;
  private _RecurSeriesMasterAppointment?: AppointmentService<ClientType>;
  private _Trial?: TrialService<ClientType>;
  private _AppointmentIntegration?: AppointmentIntegrationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointment);
  }

  public ADR(): ADRService<ClientType> {
    if (!this._ADR) {
      const { client, path } = this.__base;
      this._ADR = new ADRService(client, path, "ADR");
    }

    return this._ADR;
  }

  public AppointmentCustomType(): AppointmentCustomTypeService<ClientType> {
    if (!this._AppointmentCustomType) {
      const { client, path } = this.__base;
      this._AppointmentCustomType = new AppointmentCustomTypeService(
        client,
        path,
        "AppointmentCustomType"
      );
    }

    return this._AppointmentCustomType;
  }

  public AppointmentEventSubType(): AppointmentEventSubTypeService<ClientType> {
    if (!this._AppointmentEventSubType) {
      const { client, path } = this.__base;
      this._AppointmentEventSubType = new AppointmentEventSubTypeService(
        client,
        path,
        "AppointmentEventSubType"
      );
    }

    return this._AppointmentEventSubType;
  }

  public AppointmentType(): AppointmentTypeService<ClientType> {
    if (!this._AppointmentType) {
      const { client, path } = this.__base;
      this._AppointmentType = new AppointmentTypeService(
        client,
        path,
        "AppointmentType"
      );
    }

    return this._AppointmentType;
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public Deposition(): DepositionService<ClientType> {
    if (!this._Deposition) {
      const { client, path } = this.__base;
      this._Deposition = new DepositionService(client, path, "Deposition");
    }

    return this._Deposition;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public GlobalAppointment(): AppointmentService<ClientType> {
    if (!this._GlobalAppointment) {
      const { client, path } = this.__base;
      this._GlobalAppointment = new AppointmentService(
        client,
        path,
        "GlobalAppointment"
      );
    }

    return this._GlobalAppointment;
  }

  public Hearing(): HearingService<ClientType> {
    if (!this._Hearing) {
      const { client, path } = this.__base;
      this._Hearing = new HearingService(client, path, "Hearing");
    }

    return this._Hearing;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public PlaintiffParty(): PartyService<ClientType> {
    if (!this._PlaintiffParty) {
      const { client, path } = this.__base;
      this._PlaintiffParty = new PartyService(client, path, "PlaintiffParty");
    }

    return this._PlaintiffParty;
  }

  public RecurSeriesMasterAppointment(): AppointmentService<ClientType> {
    if (!this._RecurSeriesMasterAppointment) {
      const { client, path } = this.__base;
      this._RecurSeriesMasterAppointment = new AppointmentService(
        client,
        path,
        "RecurSeriesMasterAppointment"
      );
    }

    return this._RecurSeriesMasterAppointment;
  }

  public Trial(): TrialService<ClientType> {
    if (!this._Trial) {
      const { client, path } = this.__base;
      this._Trial = new TrialService(client, path, "Trial");
    }

    return this._Trial;
  }

  public GlobalAppointmentAppointments(): AppointmentCollectionService<ClientType>;
  public GlobalAppointmentAppointments(
    id: AppointmentId
  ): AppointmentService<ClientType>;
  public GlobalAppointmentAppointments(id?: AppointmentId | undefined) {
    const fieldName = "GlobalAppointmentAppointments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentCollectionService(client, path, fieldName)
      : new AppointmentService(
          client,
          path,
          new QAppointmentId(fieldName).buildUrl(id)
        );
  }

  public RecurExceptionAppointments(): AppointmentCollectionService<ClientType>;
  public RecurExceptionAppointments(
    id: AppointmentId
  ): AppointmentService<ClientType>;
  public RecurExceptionAppointments(id?: AppointmentId | undefined) {
    const fieldName = "RecurExceptionAppointments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentCollectionService(client, path, fieldName)
      : new AppointmentService(
          client,
          path,
          new QAppointmentId(fieldName).buildUrl(id)
        );
  }

  public AppointmentHistories(): AppointmentHistoryCollectionService<ClientType>;
  public AppointmentHistories(
    id: AppointmentHistoryId
  ): AppointmentHistoryService<ClientType>;
  public AppointmentHistories(id?: AppointmentHistoryId | undefined) {
    const fieldName = "AppointmentHistories";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentHistoryCollectionService(client, path, fieldName)
      : new AppointmentHistoryService(
          client,
          path,
          new QAppointmentHistoryId(fieldName).buildUrl(id)
        );
  }

  public AppointmentIntegration(): AppointmentIntegrationService<ClientType> {
    if (!this._AppointmentIntegration) {
      const { client, path } = this.__base;
      this._AppointmentIntegration = new AppointmentIntegrationService(
        client,
        path,
        "AppointmentIntegration"
      );
    }

    return this._AppointmentIntegration;
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

  public AppointmentRecurDates(): AppointmentRecurDateCollectionService<ClientType>;
  public AppointmentRecurDates(
    id: AppointmentRecurDateId
  ): AppointmentRecurDateService<ClientType>;
  public AppointmentRecurDates(id?: AppointmentRecurDateId | undefined) {
    const fieldName = "AppointmentRecurDates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentRecurDateCollectionService(client, path, fieldName)
      : new AppointmentRecurDateService(
          client,
          path,
          new QAppointmentRecurDateId(fieldName).buildUrl(id)
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
}

export class AppointmentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Appointment,
  EditableAppointment,
  QAppointment,
  AppointmentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointment, new QAppointmentId(name));
  }
}

export class AppointmentEventSubTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentEventSubType,
  EditableAppointmentEventSubType,
  QAppointmentEventSubType
> {
  private _AppointmentEventType?: AppointmentEventTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentEventSubType);
  }

  public AppointmentEventType(): AppointmentEventTypeService<ClientType> {
    if (!this._AppointmentEventType) {
      const { client, path } = this.__base;
      this._AppointmentEventType = new AppointmentEventTypeService(
        client,
        path,
        "AppointmentEventType"
      );
    }

    return this._AppointmentEventType;
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
}

export class AppointmentEventSubTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentEventSubType,
  EditableAppointmentEventSubType,
  QAppointmentEventSubType,
  AppointmentEventSubTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentEventSubType,
      new QAppointmentEventSubTypeId(name)
    );
  }
}

export class AppointmentEventTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentEventType,
  EditableAppointmentEventType,
  QAppointmentEventType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentEventType);
  }

  public AppointmentEventSubTypes(): AppointmentEventSubTypeCollectionService<ClientType>;
  public AppointmentEventSubTypes(
    id: AppointmentEventSubTypeId
  ): AppointmentEventSubTypeService<ClientType>;
  public AppointmentEventSubTypes(id?: AppointmentEventSubTypeId | undefined) {
    const fieldName = "AppointmentEventSubTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentEventSubTypeCollectionService(client, path, fieldName)
      : new AppointmentEventSubTypeService(
          client,
          path,
          new QAppointmentEventSubTypeId(fieldName).buildUrl(id)
        );
  }
}

export class AppointmentEventTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentEventType,
  EditableAppointmentEventType,
  QAppointmentEventType,
  AppointmentEventTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentEventType,
      new QAppointmentEventTypeId(name)
    );
  }
}

export class AppointmentPartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentParty,
  EditableAppointmentParty,
  QAppointmentParty
> {
  private _Appointment?: AppointmentService<ClientType>;
  private _AppointmentPartyStatus?: AppointmentPartyStatusService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentParty);
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
  }

  public AppointmentPartyStatus(): AppointmentPartyStatusService<ClientType> {
    if (!this._AppointmentPartyStatus) {
      const { client, path } = this.__base;
      this._AppointmentPartyStatus = new AppointmentPartyStatusService(
        client,
        path,
        "AppointmentPartyStatus"
      );
    }

    return this._AppointmentPartyStatus;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class AppointmentPartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentParty,
  EditableAppointmentParty,
  QAppointmentParty,
  AppointmentPartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentParty,
      new QAppointmentPartyId(name)
    );
  }
}

export class AppointmentPartyStatusService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentPartyStatus,
  EditableAppointmentPartyStatus,
  QAppointmentPartyStatus
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentPartyStatus);
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
}

export class AppointmentPartyStatusCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentPartyStatus,
  EditableAppointmentPartyStatus,
  QAppointmentPartyStatus,
  AppointmentPartyStatusId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentPartyStatus,
      new QAppointmentPartyStatusId(name)
    );
  }
}

export class AppointmentTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentType,
  EditableAppointmentType,
  QAppointmentType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentType);
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
}

export class AppointmentTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentType,
  EditableAppointmentType,
  QAppointmentType,
  AppointmentTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentType,
      new QAppointmentTypeId(name)
    );
  }
}

export class CalendarEntryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CalendarEntry,
  EditableCalendarEntry,
  QCalendarEntry
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _User?: CasePacerUserService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _PlaintiffParty?: PartyService<ClientType>;
  private _Appointment?: AppointmentService<ClientType>;
  private _AppointmentEventSubType?: AppointmentEventSubTypeService<ClientType>;
  private _ADR?: ADRService<ClientType>;
  private _Deposition?: DepositionService<ClientType>;
  private _Trial?: TrialService<ClientType>;
  private _Hearing?: HearingService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCalendarEntry);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public User(): CasePacerUserService<ClientType> {
    if (!this._User) {
      const { client, path } = this.__base;
      this._User = new CasePacerUserService(client, path, "User");
    }

    return this._User;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public PlaintiffParty(): PartyService<ClientType> {
    if (!this._PlaintiffParty) {
      const { client, path } = this.__base;
      this._PlaintiffParty = new PartyService(client, path, "PlaintiffParty");
    }

    return this._PlaintiffParty;
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
  }

  public AppointmentEventSubType(): AppointmentEventSubTypeService<ClientType> {
    if (!this._AppointmentEventSubType) {
      const { client, path } = this.__base;
      this._AppointmentEventSubType = new AppointmentEventSubTypeService(
        client,
        path,
        "AppointmentEventSubType"
      );
    }

    return this._AppointmentEventSubType;
  }

  public ADR(): ADRService<ClientType> {
    if (!this._ADR) {
      const { client, path } = this.__base;
      this._ADR = new ADRService(client, path, "ADR");
    }

    return this._ADR;
  }

  public Deposition(): DepositionService<ClientType> {
    if (!this._Deposition) {
      const { client, path } = this.__base;
      this._Deposition = new DepositionService(client, path, "Deposition");
    }

    return this._Deposition;
  }

  public Trial(): TrialService<ClientType> {
    if (!this._Trial) {
      const { client, path } = this.__base;
      this._Trial = new TrialService(client, path, "Trial");
    }

    return this._Trial;
  }

  public Hearing(): HearingService<ClientType> {
    if (!this._Hearing) {
      const { client, path } = this.__base;
      this._Hearing = new HearingService(client, path, "Hearing");
    }

    return this._Hearing;
  }
}

export class CalendarEntryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CalendarEntry,
  EditableCalendarEntry,
  QCalendarEntry,
  CalendarEntryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCalendarEntry, new QCalendarEntryId(name));
  }
}

export class PartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Party, EditableParty, QParty> {
  private _GuardianExecutorParty?: PartyService<ClientType>;
  private _ParentFirm?: FirmService<ClientType>;
  private _GlobalParty?: PartyService<ClientType>;
  private _HeaderDocumentTemplate?: DocumentTemplateService<ClientType>;
  private _PartyType?: PartyTypeService<ClientType>;
  private _Image?: RecordFileService<ClientType>;
  private _PartySummary?: PartySummaryService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qParty);
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
}

export class PartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Party,
  EditableParty,
  QParty,
  PartyId
> {
  private _Party_QSync?: Party_QSync;
  private _Party_QList?: Party_QList;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qParty, new QPartyId(name));
  }

  public async Sync(
    params: Party_SyncParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<SyncResults>>> {
    if (!this._Party_QSync) {
      this._Party_QSync = new Party_QSync();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._Party_QSync.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._Party_QSync.convertResponse(response);
  }

  public async List(
    params: Party_ListParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataCollectionResponseV4<Party>>> {
    if (!this._Party_QList) {
      this._Party_QList = new Party_QList();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._Party_QList.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._Party_QList.convertResponse(response);
  }
}

export class PersonService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Person, EditablePerson, QPerson> {
  private _GuardianExecutorParty?: PartyService<ClientType>;
  private _ParentFirm?: FirmService<ClientType>;
  private _GlobalParty?: PartyService<ClientType>;
  private _HeaderDocumentTemplate?: DocumentTemplateService<ClientType>;
  private _PartyType?: PartyTypeService<ClientType>;
  private _Image?: RecordFileService<ClientType>;
  private _PartySummary?: PartySummaryService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPerson);
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
}

export class PersonCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Person,
  EditablePerson,
  QPerson,
  PartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPerson, new QPartyId(name));
  }
}

export class CasePacerUserService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CasePacerUser,
  EditableCasePacerUser,
  QCasePacerUser
> {
  private _GuardianExecutorParty?: PartyService<ClientType>;
  private _ParentFirm?: FirmService<ClientType>;
  private _GlobalParty?: PartyService<ClientType>;
  private _HeaderDocumentTemplate?: DocumentTemplateService<ClientType>;
  private _PartyType?: PartyTypeService<ClientType>;
  private _Image?: RecordFileService<ClientType>;
  private _PartySummary?: PartySummaryService<ClientType>;
  private _CasePacerUserType?: CasePacerUserTypeService<ClientType>;
  private _CasePacerUserIntegrationToken?: CasePacerUserIntegrationTokenService<ClientType>;
  private _EventHelp?: EventHelpService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCasePacerUser);
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

  public CasePacerUserType(): CasePacerUserTypeService<ClientType> {
    if (!this._CasePacerUserType) {
      const { client, path } = this.__base;
      this._CasePacerUserType = new CasePacerUserTypeService(
        client,
        path,
        "CasePacerUserType"
      );
    }

    return this._CasePacerUserType;
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

  public ActivityLogsByAuditUser(): ActivityLogCollectionService<ClientType>;
  public ActivityLogsByAuditUser(
    id: ActivityLogId
  ): ActivityLogService<ClientType>;
  public ActivityLogsByAuditUser(id?: ActivityLogId | undefined) {
    const fieldName = "ActivityLogsByAuditUser";
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

  public AppointmentHistories(): AppointmentHistoryCollectionService<ClientType>;
  public AppointmentHistories(
    id: AppointmentHistoryId
  ): AppointmentHistoryService<ClientType>;
  public AppointmentHistories(id?: AppointmentHistoryId | undefined) {
    const fieldName = "AppointmentHistories";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AppointmentHistoryCollectionService(client, path, fieldName)
      : new AppointmentHistoryService(
          client,
          path,
          new QAppointmentHistoryId(fieldName).buildUrl(id)
        );
  }

  public CasePacerUserSessions(): CasePacerUserSessionCollectionService<ClientType>;
  public CasePacerUserSessions(
    id: CasePacerUserSessionId
  ): CasePacerUserSessionService<ClientType>;
  public CasePacerUserSessions(id?: CasePacerUserSessionId | undefined) {
    const fieldName = "CasePacerUserSessions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CasePacerUserSessionCollectionService(client, path, fieldName)
      : new CasePacerUserSessionService(
          client,
          path,
          new QCasePacerUserSessionId(fieldName).buildUrl(id)
        );
  }

  public CasePacerUserIntegrationToken(): CasePacerUserIntegrationTokenService<ClientType> {
    if (!this._CasePacerUserIntegrationToken) {
      const { client, path } = this.__base;
      this._CasePacerUserIntegrationToken =
        new CasePacerUserIntegrationTokenService(
          client,
          path,
          "CasePacerUserIntegrationToken"
        );
    }

    return this._CasePacerUserIntegrationToken;
  }

  public CPDirectMessages(): CPDirectMessageCollectionService<ClientType>;
  public CPDirectMessages(
    id: CPDirectMessageId
  ): CPDirectMessageService<ClientType>;
  public CPDirectMessages(id?: CPDirectMessageId | undefined) {
    const fieldName = "CPDirectMessages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectMessageCollectionService(client, path, fieldName)
      : new CPDirectMessageService(
          client,
          path,
          new QCPDirectMessageId(fieldName).buildUrl(id)
        );
  }

  public EventHelp(): EventHelpService<ClientType> {
    if (!this._EventHelp) {
      const { client, path } = this.__base;
      this._EventHelp = new EventHelpService(client, path, "EventHelp");
    }

    return this._EventHelp;
  }

  public DefaultAttorneyFirms(): FirmCollectionService<ClientType>;
  public DefaultAttorneyFirms(id: PartyId): FirmService<ClientType>;
  public DefaultAttorneyFirms(id?: PartyId | undefined) {
    const fieldName = "DefaultAttorneyFirms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new FirmCollectionService(client, path, fieldName)
      : new FirmService(client, path, new QPartyId(fieldName).buildUrl(id));
  }

  public DefaultParalegalFirms(): FirmCollectionService<ClientType>;
  public DefaultParalegalFirms(id: PartyId): FirmService<ClientType>;
  public DefaultParalegalFirms(id?: PartyId | undefined) {
    const fieldName = "DefaultParalegalFirms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new FirmCollectionService(client, path, fieldName)
      : new FirmService(client, path, new QPartyId(fieldName).buildUrl(id));
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

  public SMSMessages(): SMSMessageCollectionService<ClientType>;
  public SMSMessages(id: SMSMessageId): SMSMessageService<ClientType>;
  public SMSMessages(id?: SMSMessageId | undefined) {
    const fieldName = "SMSMessages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SMSMessageCollectionService(client, path, fieldName)
      : new SMSMessageService(
          client,
          path,
          new QSMSMessageId(fieldName).buildUrl(id)
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

  public SecurityUserGroupAssigns(): SecurityUserGroupAssignCollectionService<ClientType>;
  public SecurityUserGroupAssigns(
    id: SecurityUserGroupAssignId
  ): SecurityUserGroupAssignService<ClientType>;
  public SecurityUserGroupAssigns(id?: SecurityUserGroupAssignId | undefined) {
    const fieldName = "SecurityUserGroupAssigns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityUserGroupAssignCollectionService(client, path, fieldName)
      : new SecurityUserGroupAssignService(
          client,
          path,
          new QSecurityUserGroupAssignId(fieldName).buildUrl(id)
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
}

export class CasePacerUserCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CasePacerUser,
  EditableCasePacerUser,
  QCasePacerUser,
  PartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCasePacerUser, new QPartyId(name));
  }
}

export class ClientFormService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ClientForm,
  EditableClientForm,
  QClientForm
> {
  private _ClientFormStatus?: ClientFormStatusService<ClientType>;
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientForm);
  }

  public ClientFormStatus(): ClientFormStatusService<ClientType> {
    if (!this._ClientFormStatus) {
      const { client, path } = this.__base;
      this._ClientFormStatus = new ClientFormStatusService(
        client,
        path,
        "ClientFormStatus"
      );
    }

    return this._ClientFormStatus;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public ClientFormScreens(): ClientFormScreenCollectionService<ClientType>;
  public ClientFormScreens(
    id: ClientFormScreenId
  ): ClientFormScreenService<ClientType>;
  public ClientFormScreens(id?: ClientFormScreenId | undefined) {
    const fieldName = "ClientFormScreens";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ClientFormScreenCollectionService(client, path, fieldName)
      : new ClientFormScreenService(
          client,
          path,
          new QClientFormScreenId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeClientForms(): LawsuitTypeClientFormCollectionService<ClientType>;
  public LawsuitTypeClientForms(
    id: LawsuitTypeClientFormId
  ): LawsuitTypeClientFormService<ClientType>;
  public LawsuitTypeClientForms(id?: LawsuitTypeClientFormId | undefined) {
    const fieldName = "LawsuitTypeClientForms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeClientFormCollectionService(client, path, fieldName)
      : new LawsuitTypeClientFormService(
          client,
          path,
          new QLawsuitTypeClientFormId(fieldName).buildUrl(id)
        );
  }
}

export class ClientFormCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ClientForm,
  EditableClientForm,
  QClientForm,
  ClientFormId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientForm, new QClientFormId(name));
  }
}

export class CompanyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Company, EditableCompany, QCompany> {
  private _GuardianExecutorParty?: PartyService<ClientType>;
  private _ParentFirm?: FirmService<ClientType>;
  private _GlobalParty?: PartyService<ClientType>;
  private _HeaderDocumentTemplate?: DocumentTemplateService<ClientType>;
  private _PartyType?: PartyTypeService<ClientType>;
  private _Image?: RecordFileService<ClientType>;
  private _PartySummary?: PartySummaryService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCompany);
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

  public RepairCompanyPropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public RepairCompanyPropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public RepairCompanyPropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "RepairCompanyPropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }
}

export class CompanyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Company,
  EditableCompany,
  QCompany,
  PartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCompany, new QPartyId(name));
  }
}

export class ContactInfoService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ContactInfo,
  EditableContactInfo,
  QContactInfo
> {
  private _ContactInfoType?: ContactInfoTypeService<ClientType>;
  private _ContactType?: ContactTypeService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qContactInfo);
  }

  public ContactInfoType(): ContactInfoTypeService<ClientType> {
    if (!this._ContactInfoType) {
      const { client, path } = this.__base;
      this._ContactInfoType = new ContactInfoTypeService(
        client,
        path,
        "ContactInfoType"
      );
    }

    return this._ContactInfoType;
  }

  public ContactType(): ContactTypeService<ClientType> {
    if (!this._ContactType) {
      const { client, path } = this.__base;
      this._ContactType = new ContactTypeService(client, path, "ContactType");
    }

    return this._ContactType;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
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
}

export class ContactInfoCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ContactInfo,
  EditableContactInfo,
  QContactInfo,
  ContactInfoId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qContactInfo, new QContactInfoId(name));
  }
}

export class ContactInfoTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ContactInfoType,
  EditableContactInfoType,
  QContactInfoType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qContactInfoType);
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
}

export class ContactInfoTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ContactInfoType,
  EditableContactInfoType,
  QContactInfoType,
  ContactInfoTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qContactInfoType,
      new QContactInfoTypeId(name)
    );
  }
}

export class ContactTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ContactType,
  EditableContactType,
  QContactType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qContactType);
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
}

export class ContactTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ContactType,
  EditableContactType,
  QContactType,
  ContactTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qContactType, new QContactTypeId(name));
  }
}

export class CPDirectBlogCategoryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectBlogCategory,
  EditableCPDirectBlogCategory,
  QCPDirectBlogCategory
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectBlogCategory);
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
}

export class CPDirectBlogCategoryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectBlogCategory,
  EditableCPDirectBlogCategory,
  QCPDirectBlogCategory,
  CPDirectBlogCategoryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectBlogCategory,
      new QCPDirectBlogCategoryId(name)
    );
  }
}

export class CPDirectBlogService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectBlog,
  EditableCPDirectBlog,
  QCPDirectBlog
> {
  private _CPDirectBlogCategory?: CPDirectBlogCategoryService<ClientType>;
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectBlog);
  }

  public CPDirectBlogCategory(): CPDirectBlogCategoryService<ClientType> {
    if (!this._CPDirectBlogCategory) {
      const { client, path } = this.__base;
      this._CPDirectBlogCategory = new CPDirectBlogCategoryService(
        client,
        path,
        "CPDirectBlogCategory"
      );
    }

    return this._CPDirectBlogCategory;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CPDirectBlogImages(): CPDirectBlogImageCollectionService<ClientType>;
  public CPDirectBlogImages(
    id: CPDirectBlogImageId
  ): CPDirectBlogImageService<ClientType>;
  public CPDirectBlogImages(id?: CPDirectBlogImageId | undefined) {
    const fieldName = "CPDirectBlogImages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectBlogImageCollectionService(client, path, fieldName)
      : new CPDirectBlogImageService(
          client,
          path,
          new QCPDirectBlogImageId(fieldName).buildUrl(id)
        );
  }
}

export class CPDirectBlogCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectBlog,
  EditableCPDirectBlog,
  QCPDirectBlog,
  CPDirectBlogId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectBlog, new QCPDirectBlogId(name));
  }
}

export class CPDirectBlogImageService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectBlogImage,
  EditableCPDirectBlogImage,
  QCPDirectBlogImage
> {
  private _CPDirectBlog?: CPDirectBlogService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectBlogImage);
  }

  public CPDirectBlog(): CPDirectBlogService<ClientType> {
    if (!this._CPDirectBlog) {
      const { client, path } = this.__base;
      this._CPDirectBlog = new CPDirectBlogService(
        client,
        path,
        "CPDirectBlog"
      );
    }

    return this._CPDirectBlog;
  }
}

export class CPDirectBlogImageCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectBlogImage,
  EditableCPDirectBlogImage,
  QCPDirectBlogImage,
  CPDirectBlogImageId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectBlogImage,
      new QCPDirectBlogImageId(name)
    );
  }
}

export class CPDirectCaseProgressService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectCaseProgress,
  EditableCPDirectCaseProgress,
  QCPDirectCaseProgress
> {
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectCaseProgress);
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
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
}

export class CPDirectCaseProgressCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectCaseProgress,
  EditableCPDirectCaseProgress,
  QCPDirectCaseProgress,
  CPDirectCaseProgressId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectCaseProgress,
      new QCPDirectCaseProgressId(name)
    );
  }
}

export class CPDirectMessageService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectMessage,
  EditableCPDirectMessage,
  QCPDirectMessage
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _IntakeClientLawsuit?: IntakeClientLawsuitService<ClientType>;
  private _IntakeClientLogin?: IntakeClientLoginService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectMessage);
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public IntakeClientLawsuit(): IntakeClientLawsuitService<ClientType> {
    if (!this._IntakeClientLawsuit) {
      const { client, path } = this.__base;
      this._IntakeClientLawsuit = new IntakeClientLawsuitService(
        client,
        path,
        "IntakeClientLawsuit"
      );
    }

    return this._IntakeClientLawsuit;
  }

  public IntakeClientLogin(): IntakeClientLoginService<ClientType> {
    if (!this._IntakeClientLogin) {
      const { client, path } = this.__base;
      this._IntakeClientLogin = new IntakeClientLoginService(
        client,
        path,
        "IntakeClientLogin"
      );
    }

    return this._IntakeClientLogin;
  }
}

export class CPDirectMessageCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectMessage,
  EditableCPDirectMessage,
  QCPDirectMessage,
  CPDirectMessageId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectMessage,
      new QCPDirectMessageId(name)
    );
  }
}

export class CPDirectSettingService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectSetting,
  EditableCPDirectSetting,
  QCPDirectSetting
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectSetting);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CPDirectSettingLocations(): CPDirectSettingLocationCollectionService<ClientType>;
  public CPDirectSettingLocations(
    id: CPDirectSettingLocationId
  ): CPDirectSettingLocationService<ClientType>;
  public CPDirectSettingLocations(id?: CPDirectSettingLocationId | undefined) {
    const fieldName = "CPDirectSettingLocations";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectSettingLocationCollectionService(client, path, fieldName)
      : new CPDirectSettingLocationService(
          client,
          path,
          new QCPDirectSettingLocationId(fieldName).buildUrl(id)
        );
  }
}

export class CPDirectSettingCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectSetting,
  EditableCPDirectSetting,
  QCPDirectSetting,
  CPDirectSettingId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectSetting,
      new QCPDirectSettingId(name)
    );
  }
}

export class CPDirectSettingLocationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectSettingLocation,
  EditableCPDirectSettingLocation,
  QCPDirectSettingLocation
> {
  private _CPDirectSetting?: CPDirectSettingService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectSettingLocation);
  }

  public CPDirectSetting(): CPDirectSettingService<ClientType> {
    if (!this._CPDirectSetting) {
      const { client, path } = this.__base;
      this._CPDirectSetting = new CPDirectSettingService(
        client,
        path,
        "CPDirectSetting"
      );
    }

    return this._CPDirectSetting;
  }
}

export class CPDirectSettingLocationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectSettingLocation,
  EditableCPDirectSettingLocation,
  QCPDirectSettingLocation,
  CPDirectSettingLocationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectSettingLocation,
      new QCPDirectSettingLocationId(name)
    );
  }
}

export class CustomFieldService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CustomField,
  EditableCustomField,
  QCustomField
> {
  private _FirmCustomField?: FirmCustomFieldService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCustomField);
  }

  public FirmCustomField(): FirmCustomFieldService<ClientType> {
    if (!this._FirmCustomField) {
      const { client, path } = this.__base;
      this._FirmCustomField = new FirmCustomFieldService(
        client,
        path,
        "FirmCustomField"
      );
    }

    return this._FirmCustomField;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
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
}

export class CustomFieldCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CustomField,
  EditableCustomField,
  QCustomField,
  CustomFieldId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCustomField, new QCustomFieldId(name));
  }
}

export class CustomFieldTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CustomFieldType,
  EditableCustomFieldType,
  QCustomFieldType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCustomFieldType);
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
}

export class CustomFieldTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CustomFieldType,
  EditableCustomFieldType,
  QCustomFieldType,
  CustomFieldTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCustomFieldType,
      new QCustomFieldTypeId(name)
    );
  }
}

export class CustomFieldValueService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CustomFieldValue,
  EditableCustomFieldValue,
  QCustomFieldValue
> {
  private _CustomField?: CustomFieldService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCustomFieldValue);
  }

  public CustomField(): CustomFieldService<ClientType> {
    if (!this._CustomField) {
      const { client, path } = this.__base;
      this._CustomField = new CustomFieldService(client, path, "CustomField");
    }

    return this._CustomField;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class CustomFieldValueCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CustomFieldValue,
  EditableCustomFieldValue,
  QCustomFieldValue,
  CustomFieldValueId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCustomFieldValue,
      new QCustomFieldValueId(name)
    );
  }
}

export class DashboardAchievementService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DashboardAchievement,
  EditableDashboardAchievement,
  QDashboardAchievement
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDashboardAchievement);
  }
}

export class DashboardAchievementCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DashboardAchievement,
  EditableDashboardAchievement,
  QDashboardAchievement,
  DashboardAchievementId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDashboardAchievement,
      new QDashboardAchievementId(name)
    );
  }
}

export class DepositionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Deposition,
  EditableDeposition,
  QDeposition
> {
  private _LocationParty?: PartyService<ClientType>;
  private _DeponentLawsuitPartyType?: LawsuitPartyTypeService<ClientType>;
  private _Deponent?: PartyService<ClientType>;
  private _Deposer?: PartyService<ClientType>;
  private _DiscoveryOfLawsuitPartyType?: LawsuitPartyTypeService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Recorder?: PartyService<ClientType>;
  private _Videographer?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDeposition);
  }

  public LocationParty(): PartyService<ClientType> {
    if (!this._LocationParty) {
      const { client, path } = this.__base;
      this._LocationParty = new PartyService(client, path, "LocationParty");
    }

    return this._LocationParty;
  }

  public DeponentLawsuitPartyType(): LawsuitPartyTypeService<ClientType> {
    if (!this._DeponentLawsuitPartyType) {
      const { client, path } = this.__base;
      this._DeponentLawsuitPartyType = new LawsuitPartyTypeService(
        client,
        path,
        "DeponentLawsuitPartyType"
      );
    }

    return this._DeponentLawsuitPartyType;
  }

  public Deponent(): PartyService<ClientType> {
    if (!this._Deponent) {
      const { client, path } = this.__base;
      this._Deponent = new PartyService(client, path, "Deponent");
    }

    return this._Deponent;
  }

  public Deposer(): PartyService<ClientType> {
    if (!this._Deposer) {
      const { client, path } = this.__base;
      this._Deposer = new PartyService(client, path, "Deposer");
    }

    return this._Deposer;
  }

  public DiscoveryOfLawsuitPartyType(): LawsuitPartyTypeService<ClientType> {
    if (!this._DiscoveryOfLawsuitPartyType) {
      const { client, path } = this.__base;
      this._DiscoveryOfLawsuitPartyType = new LawsuitPartyTypeService(
        client,
        path,
        "DiscoveryOfLawsuitPartyType"
      );
    }

    return this._DiscoveryOfLawsuitPartyType;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Recorder(): PartyService<ClientType> {
    if (!this._Recorder) {
      const { client, path } = this.__base;
      this._Recorder = new PartyService(client, path, "Recorder");
    }

    return this._Recorder;
  }

  public Videographer(): PartyService<ClientType> {
    if (!this._Videographer) {
      const { client, path } = this.__base;
      this._Videographer = new PartyService(client, path, "Videographer");
    }

    return this._Videographer;
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

  public DepositionLitigationAssns(): DepositionLitigationAssnCollectionService<ClientType>;
  public DepositionLitigationAssns(
    id: DepositionLitigationAssnId
  ): DepositionLitigationAssnService<ClientType>;
  public DepositionLitigationAssns(
    id?: DepositionLitigationAssnId | undefined
  ) {
    const fieldName = "DepositionLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionLitigationAssnCollectionService(client, path, fieldName)
      : new DepositionLitigationAssnService(
          client,
          path,
          new QDepositionLitigationAssnId(fieldName).buildUrl(id)
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
}

export class DepositionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Deposition,
  EditableDeposition,
  QDeposition,
  DepositionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDeposition, new QDepositionId(name));
  }
}

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

export class FirmCustomFieldService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  FirmCustomField,
  EditableFirmCustomField,
  QFirmCustomField
> {
  private _CustomFieldType?: CustomFieldTypeService<ClientType>;
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qFirmCustomField);
  }

  public CustomFieldType(): CustomFieldTypeService<ClientType> {
    if (!this._CustomFieldType) {
      const { client, path } = this.__base;
      this._CustomFieldType = new CustomFieldTypeService(
        client,
        path,
        "CustomFieldType"
      );
    }

    return this._CustomFieldType;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CustomFields(): CustomFieldCollectionService<ClientType>;
  public CustomFields(id: CustomFieldId): CustomFieldService<ClientType>;
  public CustomFields(id?: CustomFieldId | undefined) {
    const fieldName = "CustomFields";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomFieldCollectionService(client, path, fieldName)
      : new CustomFieldService(
          client,
          path,
          new QCustomFieldId(fieldName).buildUrl(id)
        );
  }
}

export class FirmCustomFieldCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  FirmCustomField,
  EditableFirmCustomField,
  QFirmCustomField,
  FirmCustomFieldId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qFirmCustomField,
      new QFirmCustomFieldId(name)
    );
  }
}

export class IntakeClientLoginSummaryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntakeClientLoginSummary,
  EditableIntakeClientLoginSummary,
  QIntakeClientLoginSummary
> {
  private _IntakeClientLogin?: IntakeClientLoginService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntakeClientLoginSummary);
  }

  public IntakeClientLogin(): IntakeClientLoginService<ClientType> {
    if (!this._IntakeClientLogin) {
      const { client, path } = this.__base;
      this._IntakeClientLogin = new IntakeClientLoginService(
        client,
        path,
        "IntakeClientLogin"
      );
    }

    return this._IntakeClientLogin;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class IntakeClientLoginSummaryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntakeClientLoginSummary,
  EditableIntakeClientLoginSummary,
  QIntakeClientLoginSummary,
  IntakeClientLoginSummaryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntakeClientLoginSummary,
      new QIntakeClientLoginSummaryId(name)
    );
  }
}

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

export class CustomAttributeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CustomAttribute,
  EditableCustomAttribute,
  QCustomAttribute
> {
  private _DropDownSimple?: CollectionServiceV4<
    ClientType,
    StringCollection,
    QStringCollection
  >;
  private _firmCustomField?: FirmCustomFieldService<ClientType>;
  private _customField?: CustomFieldService<ClientType>;
  private _customFieldValue?: CustomFieldValueService<ClientType>;
  private _customFieldType?: CustomFieldTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCustomAttribute);
  }

  public DropDownSimple() {
    if (!this._DropDownSimple) {
      const { client, path } = this.__base;
      this._DropDownSimple = new CollectionServiceV4(
        client,
        path,
        "DropDownSimple",
        qStringCollection
      );
    }

    return this._DropDownSimple;
  }

  public firmCustomField(): FirmCustomFieldService<ClientType> {
    if (!this._firmCustomField) {
      const { client, path } = this.__base;
      this._firmCustomField = new FirmCustomFieldService(
        client,
        path,
        "firmCustomField"
      );
    }

    return this._firmCustomField;
  }

  public customField(): CustomFieldService<ClientType> {
    if (!this._customField) {
      const { client, path } = this.__base;
      this._customField = new CustomFieldService(client, path, "customField");
    }

    return this._customField;
  }

  public customFieldValue(): CustomFieldValueService<ClientType> {
    if (!this._customFieldValue) {
      const { client, path } = this.__base;
      this._customFieldValue = new CustomFieldValueService(
        client,
        path,
        "customFieldValue"
      );
    }

    return this._customFieldValue;
  }

  public customFieldType(): CustomFieldTypeService<ClientType> {
    if (!this._customFieldType) {
      const { client, path } = this.__base;
      this._customFieldType = new CustomFieldTypeService(
        client,
        path,
        "customFieldType"
      );
    }

    return this._customFieldType;
  }
}

export class CustomAttributeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CustomAttribute,
  EditableCustomAttribute,
  QCustomAttribute,
  CustomAttributeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCustomAttribute,
      new QCustomAttributeId(name)
    );
  }
}

export class LawsuitPartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitParty,
  EditableLawsuitParty,
  QLawsuitParty
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _LawsuitPartyType?: LawsuitPartyTypeService<ClientType>;
  private _Party?: PartyService<ClientType>;
  private _AttorneyFeeInterest?: AttorneyFeeInterestService<ClientType>;
  private _Witness?: WitnessService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitParty);
  }

  public InsuranceClaimsByCompany(): InsuranceClaimCollectionService<ClientType>;
  public InsuranceClaimsByCompany(
    id: InsuranceClaimId
  ): InsuranceClaimService<ClientType>;
  public InsuranceClaimsByCompany(id?: InsuranceClaimId | undefined) {
    const fieldName = "InsuranceClaimsByCompany";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimCollectionService(client, path, fieldName)
      : new InsuranceClaimService(
          client,
          path,
          new QInsuranceClaimId(fieldName).buildUrl(id)
        );
  }

  public InsuranceClaimsByInsured(): InsuranceClaimCollectionService<ClientType>;
  public InsuranceClaimsByInsured(
    id: InsuranceClaimId
  ): InsuranceClaimService<ClientType>;
  public InsuranceClaimsByInsured(id?: InsuranceClaimId | undefined) {
    const fieldName = "InsuranceClaimsByInsured";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimCollectionService(client, path, fieldName)
      : new InsuranceClaimService(
          client,
          path,
          new QInsuranceClaimId(fieldName).buildUrl(id)
        );
  }

  public InsuranceClaimsByTiedTo(): InsuranceClaimCollectionService<ClientType>;
  public InsuranceClaimsByTiedTo(
    id: InsuranceClaimId
  ): InsuranceClaimService<ClientType>;
  public InsuranceClaimsByTiedTo(id?: InsuranceClaimId | undefined) {
    const fieldName = "InsuranceClaimsByTiedTo";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimCollectionService(client, path, fieldName)
      : new InsuranceClaimService(
          client,
          path,
          new QInsuranceClaimId(fieldName).buildUrl(id)
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

  public ADRs(): ADRCollectionService<ClientType>;
  public ADRs(id: ADRId): ADRService<ClientType>;
  public ADRs(id?: ADRId | undefined) {
    const fieldName = "ADRs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ADRCollectionService(client, path, fieldName)
      : new ADRService(client, path, new QADRId(fieldName).buildUrl(id));
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

  public RepairCompanyPropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public RepairCompanyPropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public RepairCompanyPropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "RepairCompanyPropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public LawsuitPartyType(): LawsuitPartyTypeService<ClientType> {
    if (!this._LawsuitPartyType) {
      const { client, path } = this.__base;
      this._LawsuitPartyType = new LawsuitPartyTypeService(
        client,
        path,
        "LawsuitPartyType"
      );
    }

    return this._LawsuitPartyType;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }

  public AttorneyFeeInterest(): AttorneyFeeInterestService<ClientType> {
    if (!this._AttorneyFeeInterest) {
      const { client, path } = this.__base;
      this._AttorneyFeeInterest = new AttorneyFeeInterestService(
        client,
        path,
        "AttorneyFeeInterest"
      );
    }

    return this._AttorneyFeeInterest;
  }

  public Defendants(): DefendantAttorneyCollectionService<ClientType>;
  public Defendants(
    id: DefendantAttorneyId
  ): DefendantAttorneyService<ClientType>;
  public Defendants(id?: DefendantAttorneyId | undefined) {
    const fieldName = "Defendants";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DefendantAttorneyCollectionService(client, path, fieldName)
      : new DefendantAttorneyService(
          client,
          path,
          new QDefendantAttorneyId(fieldName).buildUrl(id)
        );
  }

  public DefendantAttorneys(): DefendantAttorneyCollectionService<ClientType>;
  public DefendantAttorneys(
    id: DefendantAttorneyId
  ): DefendantAttorneyService<ClientType>;
  public DefendantAttorneys(id?: DefendantAttorneyId | undefined) {
    const fieldName = "DefendantAttorneys";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DefendantAttorneyCollectionService(client, path, fieldName)
      : new DefendantAttorneyService(
          client,
          path,
          new QDefendantAttorneyId(fieldName).buildUrl(id)
        );
  }

  public DefendantLawsuitParties(): DefendantLawsuitPartyCollectionService<ClientType>;
  public DefendantLawsuitParties(
    id: DefendantLawsuitPartyId
  ): DefendantLawsuitPartyService<ClientType>;
  public DefendantLawsuitParties(id?: DefendantLawsuitPartyId | undefined) {
    const fieldName = "DefendantLawsuitParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DefendantLawsuitPartyCollectionService(client, path, fieldName)
      : new DefendantLawsuitPartyService(
          client,
          path,
          new QDefendantLawsuitPartyId(fieldName).buildUrl(id)
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

  public InsuranceClaimsByAdjuster(): InsuranceClaimCollectionService<ClientType>;
  public InsuranceClaimsByAdjuster(
    id: InsuranceClaimId
  ): InsuranceClaimService<ClientType>;
  public InsuranceClaimsByAdjuster(id?: InsuranceClaimId | undefined) {
    const fieldName = "InsuranceClaimsByAdjuster";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimCollectionService(client, path, fieldName)
      : new InsuranceClaimService(
          client,
          path,
          new QInsuranceClaimId(fieldName).buildUrl(id)
        );
  }

  public InsurancePoliciesByCompany(): InsurancePolicyCollectionService<ClientType>;
  public InsurancePoliciesByCompany(
    id: InsurancePolicyId
  ): InsurancePolicyService<ClientType>;
  public InsurancePoliciesByCompany(id?: InsurancePolicyId | undefined) {
    const fieldName = "InsurancePoliciesByCompany";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsurancePolicyCollectionService(client, path, fieldName)
      : new InsurancePolicyService(
          client,
          path,
          new QInsurancePolicyId(fieldName).buildUrl(id)
        );
  }

  public InsurancePoliciesByInsured(): InsurancePolicyCollectionService<ClientType>;
  public InsurancePoliciesByInsured(
    id: InsurancePolicyId
  ): InsurancePolicyService<ClientType>;
  public InsurancePoliciesByInsured(id?: InsurancePolicyId | undefined) {
    const fieldName = "InsurancePoliciesByInsured";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsurancePolicyCollectionService(client, path, fieldName)
      : new InsurancePolicyService(
          client,
          path,
          new QInsurancePolicyId(fieldName).buildUrl(id)
        );
  }

  public InsurancePoliciesByTiedTo(): InsurancePolicyCollectionService<ClientType>;
  public InsurancePoliciesByTiedTo(
    id: InsurancePolicyId
  ): InsurancePolicyService<ClientType>;
  public InsurancePoliciesByTiedTo(id?: InsurancePolicyId | undefined) {
    const fieldName = "InsurancePoliciesByTiedTo";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsurancePolicyCollectionService(client, path, fieldName)
      : new InsurancePolicyService(
          client,
          path,
          new QInsurancePolicyId(fieldName).buildUrl(id)
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

  public MedicalEvaluationsByDoctor(): MedicalEvaluationCollectionService<ClientType>;
  public MedicalEvaluationsByDoctor(
    id: MedicalEvaluationId
  ): MedicalEvaluationService<ClientType>;
  public MedicalEvaluationsByDoctor(id?: MedicalEvaluationId | undefined) {
    const fieldName = "MedicalEvaluationsByDoctor";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalEvaluationCollectionService(client, path, fieldName)
      : new MedicalEvaluationService(
          client,
          path,
          new QMedicalEvaluationId(fieldName).buildUrl(id)
        );
  }

  public MedicalEvaluationsByPrepBy(): MedicalEvaluationCollectionService<ClientType>;
  public MedicalEvaluationsByPrepBy(
    id: MedicalEvaluationId
  ): MedicalEvaluationService<ClientType>;
  public MedicalEvaluationsByPrepBy(id?: MedicalEvaluationId | undefined) {
    const fieldName = "MedicalEvaluationsByPrepBy";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalEvaluationCollectionService(client, path, fieldName)
      : new MedicalEvaluationService(
          client,
          path,
          new QMedicalEvaluationId(fieldName).buildUrl(id)
        );
  }

  public MedicalEvaluationsByRequestor(): MedicalEvaluationCollectionService<ClientType>;
  public MedicalEvaluationsByRequestor(
    id: MedicalEvaluationId
  ): MedicalEvaluationService<ClientType>;
  public MedicalEvaluationsByRequestor(id?: MedicalEvaluationId | undefined) {
    const fieldName = "MedicalEvaluationsByRequestor";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MedicalEvaluationCollectionService(client, path, fieldName)
      : new MedicalEvaluationService(
          client,
          path,
          new QMedicalEvaluationId(fieldName).buildUrl(id)
        );
  }

  public PIPBenefits(): PIPBenefitCollectionService<ClientType>;
  public PIPBenefits(id: PIPBenefitId): PIPBenefitService<ClientType>;
  public PIPBenefits(id?: PIPBenefitId | undefined) {
    const fieldName = "PIPBenefits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PIPBenefitCollectionService(client, path, fieldName)
      : new PIPBenefitService(
          client,
          path,
          new QPIPBenefitId(fieldName).buildUrl(id)
        );
  }

  public PlaintiffLawsuitParties(): PlaintiffLawsuitPartyCollectionService<ClientType>;
  public PlaintiffLawsuitParties(
    id: PlaintiffLawsuitPartyId
  ): PlaintiffLawsuitPartyService<ClientType>;
  public PlaintiffLawsuitParties(id?: PlaintiffLawsuitPartyId | undefined) {
    const fieldName = "PlaintiffLawsuitParties";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PlaintiffLawsuitPartyCollectionService(client, path, fieldName)
      : new PlaintiffLawsuitPartyService(
          client,
          path,
          new QPlaintiffLawsuitPartyId(fieldName).buildUrl(id)
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

  public AdjusterPropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public AdjusterPropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public AdjusterPropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "AdjusterPropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }

  public CompanyPropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public CompanyPropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public CompanyPropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "CompanyPropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
        );
  }

  public PlaintiffPropertyDamages(): PropertyDamageCollectionService<ClientType>;
  public PlaintiffPropertyDamages(
    id: PropertyDamageId
  ): PropertyDamageService<ClientType>;
  public PlaintiffPropertyDamages(id?: PropertyDamageId | undefined) {
    const fieldName = "PlaintiffPropertyDamages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PropertyDamageCollectionService(client, path, fieldName)
      : new PropertyDamageService(
          client,
          path,
          new QPropertyDamageId(fieldName).buildUrl(id)
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

  public Witness(): WitnessService<ClientType> {
    if (!this._Witness) {
      const { client, path } = this.__base;
      this._Witness = new WitnessService(client, path, "Witness");
    }

    return this._Witness;
  }
}

export class LawsuitPartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitParty,
  EditableLawsuitParty,
  QLawsuitParty,
  LawsuitPartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitParty, new QLawsuitPartyId(name));
  }
}

export class LawsuitPartyTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitPartyType,
  EditableLawsuitPartyType,
  QLawsuitPartyType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitPartyType);
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

  public DiscoveryOfDepositions(): DepositionCollectionService<ClientType>;
  public DiscoveryOfDepositions(
    id: DepositionId
  ): DepositionService<ClientType>;
  public DiscoveryOfDepositions(id?: DepositionId | undefined) {
    const fieldName = "DiscoveryOfDepositions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionCollectionService(client, path, fieldName)
      : new DepositionService(
          client,
          path,
          new QDepositionId(fieldName).buildUrl(id)
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

  public MailMerges(): MailMergeCollectionService<ClientType>;
  public MailMerges(id: MailMergeId): MailMergeService<ClientType>;
  public MailMerges(id?: MailMergeId | undefined) {
    const fieldName = "MailMerges";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new MailMergeCollectionService(client, path, fieldName)
      : new MailMergeService(
          client,
          path,
          new QMailMergeId(fieldName).buildUrl(id)
        );
  }
}

export class LawsuitPartyTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitPartyType,
  EditableLawsuitPartyType,
  QLawsuitPartyType,
  LawsuitPartyTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitPartyType,
      new QLawsuitPartyTypeId(name)
    );
  }
}

export class LawsuitPhaseDateService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitPhaseDate,
  EditableLawsuitPhaseDate,
  QLawsuitPhaseDate
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _LawsuitPhaseType?: LawsuitPhaseTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitPhaseDate);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
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
}

export class LawsuitPhaseDateCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitPhaseDate,
  EditableLawsuitPhaseDate,
  QLawsuitPhaseDate,
  LawsuitPhaseDateId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitPhaseDate,
      new QLawsuitPhaseDateId(name)
    );
  }
}

export class LawsuitPhaseTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitPhaseType,
  EditableLawsuitPhaseType,
  QLawsuitPhaseType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitPhaseType);
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

  public SubPhaseTypes(): SubPhaseTypeCollectionService<ClientType>;
  public SubPhaseTypes(id: SubPhaseTypeId): SubPhaseTypeService<ClientType>;
  public SubPhaseTypes(id?: SubPhaseTypeId | undefined) {
    const fieldName = "SubPhaseTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SubPhaseTypeCollectionService(client, path, fieldName)
      : new SubPhaseTypeService(
          client,
          path,
          new QSubPhaseTypeId(fieldName).buildUrl(id)
        );
  }

  public CreateTicklerTemplates(): TicklerTemplateCollectionService<ClientType>;
  public CreateTicklerTemplates(
    id: TicklerTemplateId
  ): TicklerTemplateService<ClientType>;
  public CreateTicklerTemplates(id?: TicklerTemplateId | undefined) {
    const fieldName = "CreateTicklerTemplates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerTemplateCollectionService(client, path, fieldName)
      : new TicklerTemplateService(
          client,
          path,
          new QTicklerTemplateId(fieldName).buildUrl(id)
        );
  }

  public ApplicableTicklerTemplates(): TicklerTemplateCollectionService<ClientType>;
  public ApplicableTicklerTemplates(
    id: TicklerTemplateId
  ): TicklerTemplateService<ClientType>;
  public ApplicableTicklerTemplates(id?: TicklerTemplateId | undefined) {
    const fieldName = "ApplicableTicklerTemplates";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerTemplateCollectionService(client, path, fieldName)
      : new TicklerTemplateService(
          client,
          path,
          new QTicklerTemplateId(fieldName).buildUrl(id)
        );
  }
}

export class LawsuitPhaseTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitPhaseType,
  EditableLawsuitPhaseType,
  QLawsuitPhaseType,
  LawsuitPhaseTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitPhaseType,
      new QLawsuitPhaseTypeId(name)
    );
  }
}

export class LawsuitTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitType,
  EditableLawsuitType,
  QLawsuitType
> {
  private _ChildLawsuitType?: LawsuitTypeService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _MasterLawsuit?: LawsuitService<ClientType>;
  private _GlobalLawsuitType?: LawsuitTypeService<ClientType>;
  private _AccountingSyncGL?: AccountingSyncGLService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitType);
  }

  public ChildLawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._ChildLawsuitType) {
      const { client, path } = this.__base;
      this._ChildLawsuitType = new LawsuitTypeService(
        client,
        path,
        "ChildLawsuitType"
      );
    }

    return this._ChildLawsuitType;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public MasterLawsuit(): LawsuitService<ClientType> {
    if (!this._MasterLawsuit) {
      const { client, path } = this.__base;
      this._MasterLawsuit = new LawsuitService(client, path, "MasterLawsuit");
    }

    return this._MasterLawsuit;
  }

  public GlobalLawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._GlobalLawsuitType) {
      const { client, path } = this.__base;
      this._GlobalLawsuitType = new LawsuitTypeService(
        client,
        path,
        "GlobalLawsuitType"
      );
    }

    return this._GlobalLawsuitType;
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

  public CPDirectCaseProgresses(): CPDirectCaseProgressCollectionService<ClientType>;
  public CPDirectCaseProgresses(
    id: CPDirectCaseProgressId
  ): CPDirectCaseProgressService<ClientType>;
  public CPDirectCaseProgresses(id?: CPDirectCaseProgressId | undefined) {
    const fieldName = "CPDirectCaseProgresses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectCaseProgressCollectionService(client, path, fieldName)
      : new CPDirectCaseProgressService(
          client,
          path,
          new QCPDirectCaseProgressId(fieldName).buildUrl(id)
        );
  }

  public CustomFields(): CustomFieldCollectionService<ClientType>;
  public CustomFields(id: CustomFieldId): CustomFieldService<ClientType>;
  public CustomFields(id?: CustomFieldId | undefined) {
    const fieldName = "CustomFields";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CustomFieldCollectionService(client, path, fieldName)
      : new CustomFieldService(
          client,
          path,
          new QCustomFieldId(fieldName).buildUrl(id)
        );
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

  public AccountingSyncGL(): AccountingSyncGLService<ClientType> {
    if (!this._AccountingSyncGL) {
      const { client, path } = this.__base;
      this._AccountingSyncGL = new AccountingSyncGLService(
        client,
        path,
        "AccountingSyncGL"
      );
    }

    return this._AccountingSyncGL;
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

  public GlobalLawsuitTypeLawsuitTypes(): LawsuitTypeCollectionService<ClientType>;
  public GlobalLawsuitTypeLawsuitTypes(
    id: LawsuitTypeId
  ): LawsuitTypeService<ClientType>;
  public GlobalLawsuitTypeLawsuitTypes(id?: LawsuitTypeId | undefined) {
    const fieldName = "GlobalLawsuitTypeLawsuitTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeCollectionService(client, path, fieldName)
      : new LawsuitTypeService(
          client,
          path,
          new QLawsuitTypeId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeClientForms(): LawsuitTypeClientFormCollectionService<ClientType>;
  public LawsuitTypeClientForms(
    id: LawsuitTypeClientFormId
  ): LawsuitTypeClientFormService<ClientType>;
  public LawsuitTypeClientForms(id?: LawsuitTypeClientFormId | undefined) {
    const fieldName = "LawsuitTypeClientForms";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeClientFormCollectionService(client, path, fieldName)
      : new LawsuitTypeClientFormService(
          client,
          path,
          new QLawsuitTypeClientFormId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeDocuments(): LawsuitTypeDocumentCollectionService<ClientType>;
  public LawsuitTypeDocuments(
    id: LawsuitTypeDocumentId
  ): LawsuitTypeDocumentService<ClientType>;
  public LawsuitTypeDocuments(id?: LawsuitTypeDocumentId | undefined) {
    const fieldName = "LawsuitTypeDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeDocumentCollectionService(client, path, fieldName)
      : new LawsuitTypeDocumentService(
          client,
          path,
          new QLawsuitTypeDocumentId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeTicklers(): LawsuitTypeTicklerCollectionService<ClientType>;
  public LawsuitTypeTicklers(
    id: LawsuitTypeTicklerId
  ): LawsuitTypeTicklerService<ClientType>;
  public LawsuitTypeTicklers(id?: LawsuitTypeTicklerId | undefined) {
    const fieldName = "LawsuitTypeTicklers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeTicklerCollectionService(client, path, fieldName)
      : new LawsuitTypeTicklerService(
          client,
          path,
          new QLawsuitTypeTicklerId(fieldName).buildUrl(id)
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

  public SubPhaseTypes(): SubPhaseTypeCollectionService<ClientType>;
  public SubPhaseTypes(id: SubPhaseTypeId): SubPhaseTypeService<ClientType>;
  public SubPhaseTypes(id?: SubPhaseTypeId | undefined) {
    const fieldName = "SubPhaseTypes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SubPhaseTypeCollectionService(client, path, fieldName)
      : new SubPhaseTypeService(
          client,
          path,
          new QSubPhaseTypeId(fieldName).buildUrl(id)
        );
  }
}

export class LawsuitTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitType,
  EditableLawsuitType,
  QLawsuitType,
  LawsuitTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitType, new QLawsuitTypeId(name));
  }
}

export class PartySummaryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PartySummary,
  EditablePartySummary,
  QPartySummary
> {
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartySummary);
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class PartySummaryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PartySummary,
  EditablePartySummary,
  QPartySummary,
  PartySummaryId
> {
  private _PartySummary_QList?: PartySummary_QList;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartySummary, new QPartySummaryId(name));
  }

  public async List(
    params: PartySummary_ListParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataCollectionResponseV4<PartySummary>>> {
    if (!this._PartySummary_QList) {
      this._PartySummary_QList = new PartySummary_QList();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._PartySummary_QList.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._PartySummary_QList.convertResponse(response);
  }
}

export class PartyTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PartyType,
  EditablePartyType,
  QPartyType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartyType);
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
}

export class PartyTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PartyType,
  EditablePartyType,
  QPartyType,
  PartyTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartyType, new QPartyTypeId(name));
  }
}

export class RecordService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Record, EditableRecord, QRecord> {
  private _Firm?: FirmService<ClientType>;
  private _ImportingUser?: PartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Plaintiff?: PartyService<ClientType>;
  private _Contact?: PartyService<ClientType>;
  private _RecordFile?: RecordFileService<ClientType>;
  private _RecordSubtype?: RecordSubtypeService<ClientType>;
  private _RecordType?: RecordTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecord);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public ImportingUser(): PartyService<ClientType> {
    if (!this._ImportingUser) {
      const { client, path } = this.__base;
      this._ImportingUser = new PartyService(client, path, "ImportingUser");
    }

    return this._ImportingUser;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public Contact(): PartyService<ClientType> {
    if (!this._Contact) {
      const { client, path } = this.__base;
      this._Contact = new PartyService(client, path, "Contact");
    }

    return this._Contact;
  }

  public RecordFile(): RecordFileService<ClientType> {
    if (!this._RecordFile) {
      const { client, path } = this.__base;
      this._RecordFile = new RecordFileService(client, path, "RecordFile");
    }

    return this._RecordFile;
  }

  public RecordSubtype(): RecordSubtypeService<ClientType> {
    if (!this._RecordSubtype) {
      const { client, path } = this.__base;
      this._RecordSubtype = new RecordSubtypeService(
        client,
        path,
        "RecordSubtype"
      );
    }

    return this._RecordSubtype;
  }

  public RecordType(): RecordTypeService<ClientType> {
    if (!this._RecordType) {
      const { client, path } = this.__base;
      this._RecordType = new RecordTypeService(client, path, "RecordType");
    }

    return this._RecordType;
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

  public SMSAttachments(): SMSAttachmentCollectionService<ClientType>;
  public SMSAttachments(id: SMSAttachmentId): SMSAttachmentService<ClientType>;
  public SMSAttachments(id?: SMSAttachmentId | undefined) {
    const fieldName = "SMSAttachments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SMSAttachmentCollectionService(client, path, fieldName)
      : new SMSAttachmentService(
          client,
          path,
          new QSMSAttachmentId(fieldName).buildUrl(id)
        );
  }

  public TrialPleadings(): TrialPleadingCollectionService<ClientType>;
  public TrialPleadings(id: TrialPleadingId): TrialPleadingService<ClientType>;
  public TrialPleadings(id?: TrialPleadingId | undefined) {
    const fieldName = "TrialPleadings";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TrialPleadingCollectionService(client, path, fieldName)
      : new TrialPleadingService(
          client,
          path,
          new QTrialPleadingId(fieldName).buildUrl(id)
        );
  }
}

export class RecordCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Record,
  EditableRecord,
  QRecord,
  RecordId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecord, new QRecordId(name));
  }
}

export class RecordFileService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RecordFile,
  EditableRecordFile,
  QRecordFile
> {
  private _RecordFolder?: RecordFolderService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordFile);
  }

  public RecordFolder(): RecordFolderService<ClientType> {
    if (!this._RecordFolder) {
      const { client, path } = this.__base;
      this._RecordFolder = new RecordFolderService(
        client,
        path,
        "RecordFolder"
      );
    }

    return this._RecordFolder;
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

  public PartiesByImage(): PartyCollectionService<ClientType>;
  public PartiesByImage(id: PartyId): PartyService<ClientType>;
  public PartiesByImage(id?: PartyId | undefined) {
    const fieldName = "PartiesByImage";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PartyCollectionService(client, path, fieldName)
      : new PartyService(client, path, new QPartyId(fieldName).buildUrl(id));
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

  public RecordFileRelationships(): RecordFileRelationshipCollectionService<ClientType>;
  public RecordFileRelationships(
    id: RecordFileRelationshipId
  ): RecordFileRelationshipService<ClientType>;
  public RecordFileRelationships(id?: RecordFileRelationshipId | undefined) {
    const fieldName = "RecordFileRelationships";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordFileRelationshipCollectionService(client, path, fieldName)
      : new RecordFileRelationshipService(
          client,
          path,
          new QRecordFileRelationshipId(fieldName).buildUrl(id)
        );
  }
}

export class RecordFileCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RecordFile,
  EditableRecordFile,
  QRecordFile,
  RecordFileId
> {
  private _RecordFile_QGetUrl?: RecordFile_QGetUrl;
  private _RecordFile_QPutUrl?: RecordFile_QPutUrl;
  private _RecordFile_QInitiateMultipart?: RecordFile_QInitiateMultipart;
  private _RecordFile_QPutMultipartUrl?: RecordFile_QPutMultipartUrl;
  private _RecordFile_QCompleteMultipart?: RecordFile_QCompleteMultipart;
  private _RecordFile_QValidate?: RecordFile_QValidate;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordFile, new QRecordFileId(name));
  }

  public async GetUrl(
    params: RecordFile_GetUrlParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<RecordFile>>> {
    if (!this._RecordFile_QGetUrl) {
      this._RecordFile_QGetUrl = new RecordFile_QGetUrl();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._RecordFile_QGetUrl.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QGetUrl.convertResponse(response);
  }

  public async PutUrl(
    params: RecordFile_PutUrlParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<RecordFile>>> {
    if (!this._RecordFile_QPutUrl) {
      this._RecordFile_QPutUrl = new RecordFile_QPutUrl();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._RecordFile_QPutUrl.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QPutUrl.convertResponse(response);
  }

  public async InitiateMultipart(
    params: RecordFile_InitiateMultipartParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<RecordFile>>> {
    if (!this._RecordFile_QInitiateMultipart) {
      this._RecordFile_QInitiateMultipart = new RecordFile_QInitiateMultipart();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(
      this._RecordFile_QInitiateMultipart.buildUrl(params)
    );
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QInitiateMultipart.convertResponse(response);
  }

  public async PutMultipartUrl(
    params: RecordFile_PutMultipartUrlParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<RecordFile>>> {
    if (!this._RecordFile_QPutMultipartUrl) {
      this._RecordFile_QPutMultipartUrl = new RecordFile_QPutMultipartUrl();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._RecordFile_QPutMultipartUrl.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QPutMultipartUrl.convertResponse(response);
  }

  public async CompleteMultipart(
    params: RecordFile_CompleteMultipartParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataValueResponseV4<boolean>>> {
    if (!this._RecordFile_QCompleteMultipart) {
      this._RecordFile_QCompleteMultipart = new RecordFile_QCompleteMultipart();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(
      this._RecordFile_QCompleteMultipart.buildUrl(params)
    );
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QCompleteMultipart.convertResponse(response);
  }

  public async Validate(
    params: RecordFile_ValidateParams,
    requestConfig?: ODataHttpClientConfig<ClientType>
  ): Promise<HttpResponseModel<ODataModelResponseV4<RecordFile>>> {
    if (!this._RecordFile_QValidate) {
      this._RecordFile_QValidate = new RecordFile_QValidate();
    }

    const { addFullPath, client, getDefaultHeaders } = this.__base;
    const url = addFullPath(this._RecordFile_QValidate.buildUrl(params));
    const response = await client.get(url, requestConfig, getDefaultHeaders());
    return this._RecordFile_QValidate.convertResponse(response);
  }
}

export class RecordFolderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RecordFolder,
  EditableRecordFolder,
  QRecordFolder
> {
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _RecordSubtype?: RecordSubtypeService<ClientType>;
  private _RecordType?: RecordTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordFolder);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public RecordSubtype(): RecordSubtypeService<ClientType> {
    if (!this._RecordSubtype) {
      const { client, path } = this.__base;
      this._RecordSubtype = new RecordSubtypeService(
        client,
        path,
        "RecordSubtype"
      );
    }

    return this._RecordSubtype;
  }

  public RecordType(): RecordTypeService<ClientType> {
    if (!this._RecordType) {
      const { client, path } = this.__base;
      this._RecordType = new RecordTypeService(client, path, "RecordType");
    }

    return this._RecordType;
  }

  public RecordFiles(): RecordFileCollectionService<ClientType>;
  public RecordFiles(id: RecordFileId): RecordFileService<ClientType>;
  public RecordFiles(id?: RecordFileId | undefined) {
    const fieldName = "RecordFiles";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new RecordFileCollectionService(client, path, fieldName)
      : new RecordFileService(
          client,
          path,
          new QRecordFileId(fieldName).buildUrl(id)
        );
  }
}

export class RecordFolderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RecordFolder,
  EditableRecordFolder,
  QRecordFolder,
  RecordFolderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordFolder, new QRecordFolderId(name));
  }
}

export class SimpleLawsuitSummaryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SimpleLawsuitSummary,
  EditableSimpleLawsuitSummary,
  QSimpleLawsuitSummary
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _MasterSimpleLawsuitSummary?: SimpleLawsuitSummaryService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSimpleLawsuitSummary);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public MasterSimpleLawsuitSummary(): SimpleLawsuitSummaryService<ClientType> {
    if (!this._MasterSimpleLawsuitSummary) {
      const { client, path } = this.__base;
      this._MasterSimpleLawsuitSummary = new SimpleLawsuitSummaryService(
        client,
        path,
        "MasterSimpleLawsuitSummary"
      );
    }

    return this._MasterSimpleLawsuitSummary;
  }

  public ChildSimpleLawsuitSummaries(): SimpleLawsuitSummaryCollectionService<ClientType>;
  public ChildSimpleLawsuitSummaries(
    id: SimpleLawsuitSummaryId
  ): SimpleLawsuitSummaryService<ClientType>;
  public ChildSimpleLawsuitSummaries(id?: SimpleLawsuitSummaryId | undefined) {
    const fieldName = "ChildSimpleLawsuitSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SimpleLawsuitSummaryCollectionService(client, path, fieldName)
      : new SimpleLawsuitSummaryService(
          client,
          path,
          new QSimpleLawsuitSummaryId(fieldName).buildUrl(id)
        );
  }
}

export class SimpleLawsuitSummaryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SimpleLawsuitSummary,
  EditableSimpleLawsuitSummary,
  QSimpleLawsuitSummary,
  SimpleLawsuitSummaryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSimpleLawsuitSummary,
      new QSimpleLawsuitSummaryId(name)
    );
  }
}

export class SubPhaseTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SubPhaseType,
  EditableSubPhaseType,
  QSubPhaseType
> {
  private _LawsuitPhaseType?: LawsuitPhaseTypeService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSubPhaseType);
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
}

export class SubPhaseTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SubPhaseType,
  EditableSubPhaseType,
  QSubPhaseType,
  SubPhaseTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSubPhaseType, new QSubPhaseTypeId(name));
  }
}

export class TicklerService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Tickler, EditableTickler, QTickler> {
  private _TicklerAnswer?: TicklerAnswerService<ClientType>;
  private _ClosingUser?: CasePacerUserService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _AssignedLawsuitParty?: LawsuitPartyService<ClientType>;
  private _TicklerTemplate?: TicklerTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTickler);
  }

  public TicklerAnswer(): TicklerAnswerService<ClientType> {
    if (!this._TicklerAnswer) {
      const { client, path } = this.__base;
      this._TicklerAnswer = new TicklerAnswerService(
        client,
        path,
        "TicklerAnswer"
      );
    }

    return this._TicklerAnswer;
  }

  public ClosingUser(): CasePacerUserService<ClientType> {
    if (!this._ClosingUser) {
      const { client, path } = this.__base;
      this._ClosingUser = new CasePacerUserService(client, path, "ClosingUser");
    }

    return this._ClosingUser;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public AssignedLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._AssignedLawsuitParty) {
      const { client, path } = this.__base;
      this._AssignedLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "AssignedLawsuitParty"
      );
    }

    return this._AssignedLawsuitParty;
  }

  public TicklerTemplate(): TicklerTemplateService<ClientType> {
    if (!this._TicklerTemplate) {
      const { client, path } = this.__base;
      this._TicklerTemplate = new TicklerTemplateService(
        client,
        path,
        "TicklerTemplate"
      );
    }

    return this._TicklerTemplate;
  }

  public OriginatingTicklerDocuments(): DocumentCollectionService<ClientType>;
  public OriginatingTicklerDocuments(
    id: DocumentId
  ): DocumentService<ClientType>;
  public OriginatingTicklerDocuments(id?: DocumentId | undefined) {
    const fieldName = "OriginatingTicklerDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentCollectionService(client, path, fieldName)
      : new DocumentService(
          client,
          path,
          new QDocumentId(fieldName).buildUrl(id)
        );
  }

  public ReceivedTicklerDocuments(): DocumentCollectionService<ClientType>;
  public ReceivedTicklerDocuments(id: DocumentId): DocumentService<ClientType>;
  public ReceivedTicklerDocuments(id?: DocumentId | undefined) {
    const fieldName = "ReceivedTicklerDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentCollectionService(client, path, fieldName)
      : new DocumentService(
          client,
          path,
          new QDocumentId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Tickler,
  EditableTickler,
  QTickler,
  TicklerId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTickler, new QTicklerId(name));
  }
}

export class CasePacerUserTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CasePacerUserType,
  EditableCasePacerUserType,
  QCasePacerUserType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCasePacerUserType);
  }

  public CasePacerUsers(): CasePacerUserCollectionService<ClientType>;
  public CasePacerUsers(id: PartyId): CasePacerUserService<ClientType>;
  public CasePacerUsers(id?: PartyId | undefined) {
    const fieldName = "CasePacerUsers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CasePacerUserCollectionService(client, path, fieldName)
      : new CasePacerUserService(
          client,
          path,
          new QPartyId(fieldName).buildUrl(id)
        );
  }
}

export class CasePacerUserTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CasePacerUserType,
  EditableCasePacerUserType,
  QCasePacerUserType,
  CasePacerUserTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCasePacerUserType,
      new QCasePacerUserTypeId(name)
    );
  }
}

export class IntakeClientLoginService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntakeClientLogin,
  EditableIntakeClientLogin,
  QIntakeClientLogin
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntakeClientLogin);
  }

  public CPDirectMessages(): CPDirectMessageCollectionService<ClientType>;
  public CPDirectMessages(
    id: CPDirectMessageId
  ): CPDirectMessageService<ClientType>;
  public CPDirectMessages(id?: CPDirectMessageId | undefined) {
    const fieldName = "CPDirectMessages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectMessageCollectionService(client, path, fieldName)
      : new CPDirectMessageService(
          client,
          path,
          new QCPDirectMessageId(fieldName).buildUrl(id)
        );
  }

  public CPDirectPushTokens(): CPDirectPushTokenCollectionService<ClientType>;
  public CPDirectPushTokens(
    id: CPDirectPushTokenId
  ): CPDirectPushTokenService<ClientType>;
  public CPDirectPushTokens(id?: CPDirectPushTokenId | undefined) {
    const fieldName = "CPDirectPushTokens";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectPushTokenCollectionService(client, path, fieldName)
      : new CPDirectPushTokenService(
          client,
          path,
          new QCPDirectPushTokenId(fieldName).buildUrl(id)
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

  public IntakeClientSessions(): IntakeClientSessionCollectionService<ClientType>;
  public IntakeClientSessions(
    id: IntakeClientSessionId
  ): IntakeClientSessionService<ClientType>;
  public IntakeClientSessions(id?: IntakeClientSessionId | undefined) {
    const fieldName = "IntakeClientSessions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new IntakeClientSessionCollectionService(client, path, fieldName)
      : new IntakeClientSessionService(
          client,
          path,
          new QIntakeClientSessionId(fieldName).buildUrl(id)
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
}

export class IntakeClientLoginCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntakeClientLogin,
  EditableIntakeClientLogin,
  QIntakeClientLogin,
  IntakeClientLoginId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntakeClientLogin,
      new QIntakeClientLoginId(name)
    );
  }
}

export class IntakeClientLawsuitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntakeClientLawsuit,
  EditableIntakeClientLawsuit,
  QIntakeClientLawsuit
> {
  private _CPDirectCaseProgress?: CPDirectCaseProgressService<ClientType>;
  private _IntakeClientFirm?: IntakeClientFirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntakeClientLawsuit);
  }

  public CPDirectCaseProgress(): CPDirectCaseProgressService<ClientType> {
    if (!this._CPDirectCaseProgress) {
      const { client, path } = this.__base;
      this._CPDirectCaseProgress = new CPDirectCaseProgressService(
        client,
        path,
        "CPDirectCaseProgress"
      );
    }

    return this._CPDirectCaseProgress;
  }

  public IntakeClientFirm(): IntakeClientFirmService<ClientType> {
    if (!this._IntakeClientFirm) {
      const { client, path } = this.__base;
      this._IntakeClientFirm = new IntakeClientFirmService(
        client,
        path,
        "IntakeClientFirm"
      );
    }

    return this._IntakeClientFirm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public CPDirectMedicalProviders(): CPDirectMedicalProviderCollectionService<ClientType>;
  public CPDirectMedicalProviders(
    id: CPDirectMedicalProviderId
  ): CPDirectMedicalProviderService<ClientType>;
  public CPDirectMedicalProviders(id?: CPDirectMedicalProviderId | undefined) {
    const fieldName = "CPDirectMedicalProviders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectMedicalProviderCollectionService(client, path, fieldName)
      : new CPDirectMedicalProviderService(
          client,
          path,
          new QCPDirectMedicalProviderId(fieldName).buildUrl(id)
        );
  }

  public CPDirectMessages(): CPDirectMessageCollectionService<ClientType>;
  public CPDirectMessages(
    id: CPDirectMessageId
  ): CPDirectMessageService<ClientType>;
  public CPDirectMessages(id?: CPDirectMessageId | undefined) {
    const fieldName = "CPDirectMessages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectMessageCollectionService(client, path, fieldName)
      : new CPDirectMessageService(
          client,
          path,
          new QCPDirectMessageId(fieldName).buildUrl(id)
        );
  }
}

export class IntakeClientLawsuitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntakeClientLawsuit,
  EditableIntakeClientLawsuit,
  QIntakeClientLawsuit,
  IntakeClientLawsuitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntakeClientLawsuit,
      new QIntakeClientLawsuitId(name)
    );
  }
}

export class CaseMenuItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CaseMenuItem,
  EditableCaseMenuItem,
  QCaseMenuItem
> {
  private _CaseMenuGroup?: CaseMenuGroupService<ClientType>;
  private _CaseMenuTab?: CaseMenuTabService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuItem);
  }

  public CaseMenuGroup(): CaseMenuGroupService<ClientType> {
    if (!this._CaseMenuGroup) {
      const { client, path } = this.__base;
      this._CaseMenuGroup = new CaseMenuGroupService(
        client,
        path,
        "CaseMenuGroup"
      );
    }

    return this._CaseMenuGroup;
  }

  public CaseMenuTab(): CaseMenuTabService<ClientType> {
    if (!this._CaseMenuTab) {
      const { client, path } = this.__base;
      this._CaseMenuTab = new CaseMenuTabService(client, path, "CaseMenuTab");
    }

    return this._CaseMenuTab;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }
}

export class CaseMenuItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CaseMenuItem,
  EditableCaseMenuItem,
  QCaseMenuItem,
  CaseMenuItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuItem, new QCaseMenuItemId(name));
  }
}

export class CaseMenuGroupService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CaseMenuGroup,
  EditableCaseMenuGroup,
  QCaseMenuGroup
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuGroup);
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
}

export class CaseMenuGroupCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CaseMenuGroup,
  EditableCaseMenuGroup,
  QCaseMenuGroup,
  CaseMenuGroupId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuGroup, new QCaseMenuGroupId(name));
  }
}

export class CaseMenuTabService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CaseMenuTab,
  EditableCaseMenuTab,
  QCaseMenuTab
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuTab);
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
}

export class CaseMenuTabCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CaseMenuTab,
  EditableCaseMenuTab,
  QCaseMenuTab,
  CaseMenuTabId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCaseMenuTab, new QCaseMenuTabId(name));
  }
}

export class RecordSubtypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RecordSubtype,
  EditableRecordSubtype,
  QRecordSubtype
> {
  private _Firm?: FirmService<ClientType>;
  private _CaseMenuTab?: CaseMenuTabService<ClientType>;
  private _RecordType?: RecordTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordSubtype);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CaseMenuTab(): CaseMenuTabService<ClientType> {
    if (!this._CaseMenuTab) {
      const { client, path } = this.__base;
      this._CaseMenuTab = new CaseMenuTabService(client, path, "CaseMenuTab");
    }

    return this._CaseMenuTab;
  }

  public RecordType(): RecordTypeService<ClientType> {
    if (!this._RecordType) {
      const { client, path } = this.__base;
      this._RecordType = new RecordTypeService(client, path, "RecordType");
    }

    return this._RecordType;
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
}

export class RecordSubtypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RecordSubtype,
  EditableRecordSubtype,
  QRecordSubtype,
  RecordSubtypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordSubtype, new QRecordSubtypeId(name));
  }
}

export class RecordTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RecordType,
  EditableRecordType,
  QRecordType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordType);
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
}

export class RecordTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RecordType,
  EditableRecordType,
  QRecordType,
  RecordTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordType, new QRecordTypeId(name));
  }
}

export class DocumentTemplateService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DocumentTemplate,
  EditableDocumentTemplate,
  QDocumentTemplate
> {
  private _SystemDocumentTemplate?: DocumentTemplateService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _RecipientLawsuitPartyType?: LawsuitPartyTypeService<ClientType>;
  private _RecordFile?: RecordFileService<ClientType>;
  private _RoleTemplate?: RoleTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDocumentTemplate);
  }

  public SystemDocumentTemplate(): DocumentTemplateService<ClientType> {
    if (!this._SystemDocumentTemplate) {
      const { client, path } = this.__base;
      this._SystemDocumentTemplate = new DocumentTemplateService(
        client,
        path,
        "SystemDocumentTemplate"
      );
    }

    return this._SystemDocumentTemplate;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public RecipientLawsuitPartyType(): LawsuitPartyTypeService<ClientType> {
    if (!this._RecipientLawsuitPartyType) {
      const { client, path } = this.__base;
      this._RecipientLawsuitPartyType = new LawsuitPartyTypeService(
        client,
        path,
        "RecipientLawsuitPartyType"
      );
    }

    return this._RecipientLawsuitPartyType;
  }

  public RecordFile(): RecordFileService<ClientType> {
    if (!this._RecordFile) {
      const { client, path } = this.__base;
      this._RecordFile = new RecordFileService(client, path, "RecordFile");
    }

    return this._RecordFile;
  }

  public RoleTemplate(): RoleTemplateService<ClientType> {
    if (!this._RoleTemplate) {
      const { client, path } = this.__base;
      this._RoleTemplate = new RoleTemplateService(
        client,
        path,
        "RoleTemplate"
      );
    }

    return this._RoleTemplate;
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

  public DocumentTemplatesFromSystemTemplate(): DocumentTemplateCollectionService<ClientType>;
  public DocumentTemplatesFromSystemTemplate(
    id: DocumentTemplateId
  ): DocumentTemplateService<ClientType>;
  public DocumentTemplatesFromSystemTemplate(
    id?: DocumentTemplateId | undefined
  ) {
    const fieldName = "DocumentTemplatesFromSystemTemplate";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DocumentTemplateCollectionService(client, path, fieldName)
      : new DocumentTemplateService(
          client,
          path,
          new QDocumentTemplateId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeDocuments(): LawsuitTypeDocumentCollectionService<ClientType>;
  public LawsuitTypeDocuments(
    id: LawsuitTypeDocumentId
  ): LawsuitTypeDocumentService<ClientType>;
  public LawsuitTypeDocuments(id?: LawsuitTypeDocumentId | undefined) {
    const fieldName = "LawsuitTypeDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeDocumentCollectionService(client, path, fieldName)
      : new LawsuitTypeDocumentService(
          client,
          path,
          new QLawsuitTypeDocumentId(fieldName).buildUrl(id)
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
}

export class DocumentTemplateCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DocumentTemplate,
  EditableDocumentTemplate,
  QDocumentTemplate,
  DocumentTemplateId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDocumentTemplate,
      new QDocumentTemplateId(name)
    );
  }
}

export class AppointmentRecurDateService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentRecurDate,
  EditableAppointmentRecurDate,
  QAppointmentRecurDate
> {
  private _Appointment?: AppointmentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentRecurDate);
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
  }
}

export class AppointmentRecurDateCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentRecurDate,
  EditableAppointmentRecurDate,
  QAppointmentRecurDate,
  AppointmentRecurDateId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentRecurDate,
      new QAppointmentRecurDateId(name)
    );
  }
}

export class LitigationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Litigation,
  EditableLitigation,
  QLitigation
> {
  private _Court?: PartyService<ClientType>;
  private _Judge?: PartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLitigation);
  }

  public Court(): PartyService<ClientType> {
    if (!this._Court) {
      const { client, path } = this.__base;
      this._Court = new PartyService(client, path, "Court");
    }

    return this._Court;
  }

  public Judge(): PartyService<ClientType> {
    if (!this._Judge) {
      const { client, path } = this.__base;
      this._Judge = new PartyService(client, path, "Judge");
    }

    return this._Judge;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
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

  public DefendantLitigationAssns(): DefendantLitigationAssnCollectionService<ClientType>;
  public DefendantLitigationAssns(
    id: DefendantLitigationAssnId
  ): DefendantLitigationAssnService<ClientType>;
  public DefendantLitigationAssns(id?: DefendantLitigationAssnId | undefined) {
    const fieldName = "DefendantLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DefendantLitigationAssnCollectionService(client, path, fieldName)
      : new DefendantLitigationAssnService(
          client,
          path,
          new QDefendantLitigationAssnId(fieldName).buildUrl(id)
        );
  }

  public DepositionLitigationAssns(): DepositionLitigationAssnCollectionService<ClientType>;
  public DepositionLitigationAssns(
    id: DepositionLitigationAssnId
  ): DepositionLitigationAssnService<ClientType>;
  public DepositionLitigationAssns(
    id?: DepositionLitigationAssnId | undefined
  ) {
    const fieldName = "DepositionLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DepositionLitigationAssnCollectionService(client, path, fieldName)
      : new DepositionLitigationAssnService(
          client,
          path,
          new QDepositionLitigationAssnId(fieldName).buildUrl(id)
        );
  }

  public DiscoveryLitigationAssns(): DiscoveryLitigationAssnCollectionService<ClientType>;
  public DiscoveryLitigationAssns(
    id: DiscoveryLitigationAssnId
  ): DiscoveryLitigationAssnService<ClientType>;
  public DiscoveryLitigationAssns(id?: DiscoveryLitigationAssnId | undefined) {
    const fieldName = "DiscoveryLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DiscoveryLitigationAssnCollectionService(client, path, fieldName)
      : new DiscoveryLitigationAssnService(
          client,
          path,
          new QDiscoveryLitigationAssnId(fieldName).buildUrl(id)
        );
  }

  public Trials(): TrialCollectionService<ClientType>;
  public Trials(id: TrialId): TrialService<ClientType>;
  public Trials(id?: TrialId | undefined) {
    const fieldName = "Trials";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TrialCollectionService(client, path, fieldName)
      : new TrialService(client, path, new QTrialId(fieldName).buildUrl(id));
  }

  public WitnessLitigationAssns(): WitnessLitigationAssnCollectionService<ClientType>;
  public WitnessLitigationAssns(
    id: WitnessLitigationAssnId
  ): WitnessLitigationAssnService<ClientType>;
  public WitnessLitigationAssns(id?: WitnessLitigationAssnId | undefined) {
    const fieldName = "WitnessLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessLitigationAssnCollectionService(client, path, fieldName)
      : new WitnessLitigationAssnService(
          client,
          path,
          new QWitnessLitigationAssnId(fieldName).buildUrl(id)
        );
  }
}

export class LitigationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Litigation,
  EditableLitigation,
  QLitigation,
  LitigationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLitigation, new QLitigationId(name));
  }
}

export class AddressService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Address, EditableAddress, QAddress> {
  private _AddressType?: AddressTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAddress);
  }

  public AddressType(): AddressTypeService<ClientType> {
    if (!this._AddressType) {
      const { client, path } = this.__base;
      this._AddressType = new AddressTypeService(client, path, "AddressType");
    }

    return this._AddressType;
  }

  public CPDirectMedicalProviders(): CPDirectMedicalProviderCollectionService<ClientType>;
  public CPDirectMedicalProviders(
    id: CPDirectMedicalProviderId
  ): CPDirectMedicalProviderService<ClientType>;
  public CPDirectMedicalProviders(id?: CPDirectMedicalProviderId | undefined) {
    const fieldName = "CPDirectMedicalProviders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectMedicalProviderCollectionService(client, path, fieldName)
      : new CPDirectMedicalProviderService(
          client,
          path,
          new QCPDirectMedicalProviderId(fieldName).buildUrl(id)
        );
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
}

export class AddressCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Address,
  EditableAddress,
  QAddress,
  AddressId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAddress, new QAddressId(name));
  }
}

export class CPDirectMedicalProviderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectMedicalProvider,
  EditableCPDirectMedicalProvider,
  QCPDirectMedicalProvider
> {
  private _Address?: AddressService<ClientType>;
  private _IntakeClientLawsuit?: IntakeClientLawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectMedicalProvider);
  }

  public Address(): AddressService<ClientType> {
    if (!this._Address) {
      const { client, path } = this.__base;
      this._Address = new AddressService(client, path, "Address");
    }

    return this._Address;
  }

  public IntakeClientLawsuit(): IntakeClientLawsuitService<ClientType> {
    if (!this._IntakeClientLawsuit) {
      const { client, path } = this.__base;
      this._IntakeClientLawsuit = new IntakeClientLawsuitService(
        client,
        path,
        "IntakeClientLawsuit"
      );
    }

    return this._IntakeClientLawsuit;
  }

  public CPDirectTreatmentNotes(): CPDirectTreatmentNoteCollectionService<ClientType>;
  public CPDirectTreatmentNotes(
    id: CPDirectTreatmentNoteId
  ): CPDirectTreatmentNoteService<ClientType>;
  public CPDirectTreatmentNotes(id?: CPDirectTreatmentNoteId | undefined) {
    const fieldName = "CPDirectTreatmentNotes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CPDirectTreatmentNoteCollectionService(client, path, fieldName)
      : new CPDirectTreatmentNoteService(
          client,
          path,
          new QCPDirectTreatmentNoteId(fieldName).buildUrl(id)
        );
  }
}

export class CPDirectMedicalProviderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectMedicalProvider,
  EditableCPDirectMedicalProvider,
  QCPDirectMedicalProvider,
  CPDirectMedicalProviderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectMedicalProvider,
      new QCPDirectMedicalProviderId(name)
    );
  }
}

export class CPDirectTreatmentNoteService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectTreatmentNote,
  EditableCPDirectTreatmentNote,
  QCPDirectTreatmentNote
> {
  private _CPDirectMedicalProvider?: CPDirectMedicalProviderService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectTreatmentNote);
  }

  public CPDirectMedicalProvider(): CPDirectMedicalProviderService<ClientType> {
    if (!this._CPDirectMedicalProvider) {
      const { client, path } = this.__base;
      this._CPDirectMedicalProvider = new CPDirectMedicalProviderService(
        client,
        path,
        "CPDirectMedicalProvider"
      );
    }

    return this._CPDirectMedicalProvider;
  }
}

export class CPDirectTreatmentNoteCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectTreatmentNote,
  EditableCPDirectTreatmentNote,
  QCPDirectTreatmentNote,
  CPDirectTreatmentNoteId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectTreatmentNote,
      new QCPDirectTreatmentNoteId(name)
    );
  }
}

export class PartyAddressService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PartyAddress,
  EditablePartyAddress,
  QPartyAddress
> {
  private _Address?: AddressService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartyAddress);
  }

  public Address(): AddressService<ClientType> {
    if (!this._Address) {
      const { client, path } = this.__base;
      this._Address = new AddressService(client, path, "Address");
    }

    return this._Address;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class PartyAddressCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PartyAddress,
  EditablePartyAddress,
  QPartyAddress,
  PartyAddressId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPartyAddress, new QPartyAddressId(name));
  }
}

export class SMSThreadService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SMSThread,
  EditableSMSThread,
  QSMSThread
> {
  private _ContactInfo?: ContactInfoService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _TwilioPhone?: TwilioPhoneService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSThread);
  }

  public ContactInfo(): ContactInfoService<ClientType> {
    if (!this._ContactInfo) {
      const { client, path } = this.__base;
      this._ContactInfo = new ContactInfoService(client, path, "ContactInfo");
    }

    return this._ContactInfo;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public TwilioPhone(): TwilioPhoneService<ClientType> {
    if (!this._TwilioPhone) {
      const { client, path } = this.__base;
      this._TwilioPhone = new TwilioPhoneService(client, path, "TwilioPhone");
    }

    return this._TwilioPhone;
  }

  public SMSMessages(): SMSMessageCollectionService<ClientType>;
  public SMSMessages(id: SMSMessageId): SMSMessageService<ClientType>;
  public SMSMessages(id?: SMSMessageId | undefined) {
    const fieldName = "SMSMessages";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SMSMessageCollectionService(client, path, fieldName)
      : new SMSMessageService(
          client,
          path,
          new QSMSMessageId(fieldName).buildUrl(id)
        );
  }
}

export class SMSThreadCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SMSThread,
  EditableSMSThread,
  QSMSThread,
  SMSThreadId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSThread, new QSMSThreadId(name));
  }
}

export class TwilioPhoneService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TwilioPhone,
  EditableTwilioPhone,
  QTwilioPhone
> {
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTwilioPhone);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
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
}

export class TwilioPhoneCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TwilioPhone,
  EditableTwilioPhone,
  QTwilioPhone,
  TwilioPhoneId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTwilioPhone, new QTwilioPhoneId(name));
  }
}

export class SMSMessageService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SMSMessage,
  EditableSMSMessage,
  QSMSMessage
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _SMSThread?: SMSThreadService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSMessage);
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public SMSThread(): SMSThreadService<ClientType> {
    if (!this._SMSThread) {
      const { client, path } = this.__base;
      this._SMSThread = new SMSThreadService(client, path, "SMSThread");
    }

    return this._SMSThread;
  }

  public SMSAttachments(): SMSAttachmentCollectionService<ClientType>;
  public SMSAttachments(id: SMSAttachmentId): SMSAttachmentService<ClientType>;
  public SMSAttachments(id?: SMSAttachmentId | undefined) {
    const fieldName = "SMSAttachments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SMSAttachmentCollectionService(client, path, fieldName)
      : new SMSAttachmentService(
          client,
          path,
          new QSMSAttachmentId(fieldName).buildUrl(id)
        );
  }
}

export class SMSMessageCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SMSMessage,
  EditableSMSMessage,
  QSMSMessage,
  SMSMessageId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSMessage, new QSMSMessageId(name));
  }
}

export class SMSAttachmentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SMSAttachment,
  EditableSMSAttachment,
  QSMSAttachment
> {
  private _Record?: RecordService<ClientType>;
  private _SMSMessage?: SMSMessageService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSAttachment);
  }

  public Record(): RecordService<ClientType> {
    if (!this._Record) {
      const { client, path } = this.__base;
      this._Record = new RecordService(client, path, "Record");
    }

    return this._Record;
  }

  public SMSMessage(): SMSMessageService<ClientType> {
    if (!this._SMSMessage) {
      const { client, path } = this.__base;
      this._SMSMessage = new SMSMessageService(client, path, "SMSMessage");
    }

    return this._SMSMessage;
  }
}

export class SMSAttachmentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SMSAttachment,
  EditableSMSAttachment,
  QSMSAttachment,
  SMSAttachmentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSMSAttachment, new QSMSAttachmentId(name));
  }
}

export class AnswerEnlargementService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AnswerEnlargement,
  EditableAnswerEnlargement,
  QAnswerEnlargement
> {
  private _Litigation?: LitigationService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAnswerEnlargement);
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class AnswerEnlargementCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AnswerEnlargement,
  EditableAnswerEnlargement,
  QAnswerEnlargement,
  AnswerEnlargementId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAnswerEnlargement,
      new QAnswerEnlargementId(name)
    );
  }
}

export class CalendarUserService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CalendarUser,
  EditableCalendarUser,
  QCalendarUser
> {
  private _CalendarUserGroup?: CalendarUserGroupService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCalendarUser);
  }

  public CalendarUserGroup(): CalendarUserGroupService<ClientType> {
    if (!this._CalendarUserGroup) {
      const { client, path } = this.__base;
      this._CalendarUserGroup = new CalendarUserGroupService(
        client,
        path,
        "CalendarUserGroup"
      );
    }

    return this._CalendarUserGroup;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class CalendarUserCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CalendarUser,
  EditableCalendarUser,
  QCalendarUser,
  CalendarUserId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCalendarUser, new QCalendarUserId(name));
  }
}

export class CalendarUserGroupService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CalendarUserGroup,
  EditableCalendarUserGroup,
  QCalendarUserGroup
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCalendarUserGroup);
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
}

export class CalendarUserGroupCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CalendarUserGroup,
  EditableCalendarUserGroup,
  QCalendarUserGroup,
  CalendarUserGroupId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCalendarUserGroup,
      new QCalendarUserGroupId(name)
    );
  }
}

export class ComplaintService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Complaint,
  EditableComplaint,
  QComplaint
> {
  private _Litigation?: LitigationService<ClientType>;
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qComplaint);
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class ComplaintCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Complaint,
  EditableComplaint,
  QComplaint,
  ComplaintId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qComplaint, new QComplaintId(name));
  }
}

export class DiscoveryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Discovery,
  EditableDiscovery,
  QDiscovery
> {
  private _Defendant?: PartyService<ClientType>;
  private _DiscoveryRecipientType?: DiscoveryRecipientTypeService<ClientType>;
  private _DiscoveryTarget?: DiscoveryTargetService<ClientType>;
  private _DiscoveryType?: DiscoveryTypeService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _NonPartyRecipient?: PartyService<ClientType>;
  private _Plaintiff?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscovery);
  }

  public Defendant(): PartyService<ClientType> {
    if (!this._Defendant) {
      const { client, path } = this.__base;
      this._Defendant = new PartyService(client, path, "Defendant");
    }

    return this._Defendant;
  }

  public DiscoveryRecipientType(): DiscoveryRecipientTypeService<ClientType> {
    if (!this._DiscoveryRecipientType) {
      const { client, path } = this.__base;
      this._DiscoveryRecipientType = new DiscoveryRecipientTypeService(
        client,
        path,
        "DiscoveryRecipientType"
      );
    }

    return this._DiscoveryRecipientType;
  }

  public DiscoveryTarget(): DiscoveryTargetService<ClientType> {
    if (!this._DiscoveryTarget) {
      const { client, path } = this.__base;
      this._DiscoveryTarget = new DiscoveryTargetService(
        client,
        path,
        "DiscoveryTarget"
      );
    }

    return this._DiscoveryTarget;
  }

  public DiscoveryType(): DiscoveryTypeService<ClientType> {
    if (!this._DiscoveryType) {
      const { client, path } = this.__base;
      this._DiscoveryType = new DiscoveryTypeService(
        client,
        path,
        "DiscoveryType"
      );
    }

    return this._DiscoveryType;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public NonPartyRecipient(): PartyService<ClientType> {
    if (!this._NonPartyRecipient) {
      const { client, path } = this.__base;
      this._NonPartyRecipient = new PartyService(
        client,
        path,
        "NonPartyRecipient"
      );
    }

    return this._NonPartyRecipient;
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public DiscoveryLitigationAssns(): DiscoveryLitigationAssnCollectionService<ClientType>;
  public DiscoveryLitigationAssns(
    id: DiscoveryLitigationAssnId
  ): DiscoveryLitigationAssnService<ClientType>;
  public DiscoveryLitigationAssns(id?: DiscoveryLitigationAssnId | undefined) {
    const fieldName = "DiscoveryLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DiscoveryLitigationAssnCollectionService(client, path, fieldName)
      : new DiscoveryLitigationAssnService(
          client,
          path,
          new QDiscoveryLitigationAssnId(fieldName).buildUrl(id)
        );
  }
}

export class DiscoveryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Discovery,
  EditableDiscovery,
  QDiscovery,
  DiscoveryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscovery, new QDiscoveryId(name));
  }
}

export class DiscoveryRecipientTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DiscoveryRecipientType,
  EditableDiscoveryRecipientType,
  QDiscoveryRecipientType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscoveryRecipientType);
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
}

export class DiscoveryRecipientTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DiscoveryRecipientType,
  EditableDiscoveryRecipientType,
  QDiscoveryRecipientType,
  DiscoveryRecipientTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDiscoveryRecipientType,
      new QDiscoveryRecipientTypeId(name)
    );
  }
}

export class DiscoveryTargetService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DiscoveryTarget,
  EditableDiscoveryTarget,
  QDiscoveryTarget
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscoveryTarget);
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
}

export class DiscoveryTargetCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DiscoveryTarget,
  EditableDiscoveryTarget,
  QDiscoveryTarget,
  DiscoveryTargetId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDiscoveryTarget,
      new QDiscoveryTargetId(name)
    );
  }
}

export class DiscoveryTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DiscoveryType,
  EditableDiscoveryType,
  QDiscoveryType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscoveryType);
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
}

export class DiscoveryTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DiscoveryType,
  EditableDiscoveryType,
  QDiscoveryType,
  DiscoveryTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscoveryType, new QDiscoveryTypeId(name));
  }
}

export class DiscoveryLitigationAssnService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DiscoveryLitigationAssn,
  EditableDiscoveryLitigationAssn,
  QDiscoveryLitigationAssn
> {
  private _Discovery?: DiscoveryService<ClientType>;
  private _Litigation?: LitigationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDiscoveryLitigationAssn);
  }

  public Discovery(): DiscoveryService<ClientType> {
    if (!this._Discovery) {
      const { client, path } = this.__base;
      this._Discovery = new DiscoveryService(client, path, "Discovery");
    }

    return this._Discovery;
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }
}

export class DiscoveryLitigationAssnCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DiscoveryLitigationAssn,
  EditableDiscoveryLitigationAssn,
  QDiscoveryLitigationAssn,
  DiscoveryLitigationAssnId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDiscoveryLitigationAssn,
      new QDiscoveryLitigationAssnId(name)
    );
  }
}

export class DocumentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Document,
  EditableDocument,
  QDocument
> {
  private _DocumentTemplate?: DocumentTemplateService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _OriginatingTickler?: TicklerService<ClientType>;
  private _Record?: RecordService<ClientType>;
  private _DocumentReceivedFromParty?: PartyService<ClientType>;
  private _ReceivedTickler?: TicklerService<ClientType>;
  private _DocumentSentToParty?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDocument);
  }

  public DocumentTemplate(): DocumentTemplateService<ClientType> {
    if (!this._DocumentTemplate) {
      const { client, path } = this.__base;
      this._DocumentTemplate = new DocumentTemplateService(
        client,
        path,
        "DocumentTemplate"
      );
    }

    return this._DocumentTemplate;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public OriginatingTickler(): TicklerService<ClientType> {
    if (!this._OriginatingTickler) {
      const { client, path } = this.__base;
      this._OriginatingTickler = new TicklerService(
        client,
        path,
        "OriginatingTickler"
      );
    }

    return this._OriginatingTickler;
  }

  public Record(): RecordService<ClientType> {
    if (!this._Record) {
      const { client, path } = this.__base;
      this._Record = new RecordService(client, path, "Record");
    }

    return this._Record;
  }

  public DocumentReceivedFromParty(): PartyService<ClientType> {
    if (!this._DocumentReceivedFromParty) {
      const { client, path } = this.__base;
      this._DocumentReceivedFromParty = new PartyService(
        client,
        path,
        "DocumentReceivedFromParty"
      );
    }

    return this._DocumentReceivedFromParty;
  }

  public ReceivedTickler(): TicklerService<ClientType> {
    if (!this._ReceivedTickler) {
      const { client, path } = this.__base;
      this._ReceivedTickler = new TicklerService(
        client,
        path,
        "ReceivedTickler"
      );
    }

    return this._ReceivedTickler;
  }

  public DocumentSentToParty(): PartyService<ClientType> {
    if (!this._DocumentSentToParty) {
      const { client, path } = this.__base;
      this._DocumentSentToParty = new PartyService(
        client,
        path,
        "DocumentSentToParty"
      );
    }

    return this._DocumentSentToParty;
  }
}

export class DocumentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Document,
  EditableDocument,
  QDocument,
  DocumentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDocument, new QDocumentId(name));
  }
}

export class TicklerAnswerService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerAnswer,
  EditableTicklerAnswer,
  QTicklerAnswer
> {
  private _TicklerTemplate?: TicklerTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerAnswer);
  }

  public TicklerTemplate(): TicklerTemplateService<ClientType> {
    if (!this._TicklerTemplate) {
      const { client, path } = this.__base;
      this._TicklerTemplate = new TicklerTemplateService(
        client,
        path,
        "TicklerTemplate"
      );
    }

    return this._TicklerTemplate;
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

  public TicklerAnswerActions(): TicklerAnswerActionCollectionService<ClientType>;
  public TicklerAnswerActions(
    id: TicklerAnswerActionId
  ): TicklerAnswerActionService<ClientType>;
  public TicklerAnswerActions(id?: TicklerAnswerActionId | undefined) {
    const fieldName = "TicklerAnswerActions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerAnswerActionCollectionService(client, path, fieldName)
      : new TicklerAnswerActionService(
          client,
          path,
          new QTicklerAnswerActionId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerAnswerCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerAnswer,
  EditableTicklerAnswer,
  QTicklerAnswer,
  TicklerAnswerId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerAnswer, new QTicklerAnswerId(name));
  }
}

export class TicklerTemplateService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerTemplate,
  EditableTicklerTemplate,
  QTicklerTemplate
> {
  private _Firm?: FirmService<ClientType>;
  private _CreatePhaseEvent?: LawsuitPhaseTypeService<ClientType>;
  private _RoleTemplate?: RoleTemplateService<ClientType>;
  private _TicklerPhase?: LawsuitPhaseTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerTemplate);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CreatePhaseEvent(): LawsuitPhaseTypeService<ClientType> {
    if (!this._CreatePhaseEvent) {
      const { client, path } = this.__base;
      this._CreatePhaseEvent = new LawsuitPhaseTypeService(
        client,
        path,
        "CreatePhaseEvent"
      );
    }

    return this._CreatePhaseEvent;
  }

  public RoleTemplate(): RoleTemplateService<ClientType> {
    if (!this._RoleTemplate) {
      const { client, path } = this.__base;
      this._RoleTemplate = new RoleTemplateService(
        client,
        path,
        "RoleTemplate"
      );
    }

    return this._RoleTemplate;
  }

  public TicklerPhase(): LawsuitPhaseTypeService<ClientType> {
    if (!this._TicklerPhase) {
      const { client, path } = this.__base;
      this._TicklerPhase = new LawsuitPhaseTypeService(
        client,
        path,
        "TicklerPhase"
      );
    }

    return this._TicklerPhase;
  }

  public LawsuitTypeTicklers(): LawsuitTypeTicklerCollectionService<ClientType>;
  public LawsuitTypeTicklers(
    id: LawsuitTypeTicklerId
  ): LawsuitTypeTicklerService<ClientType>;
  public LawsuitTypeTicklers(id?: LawsuitTypeTicklerId | undefined) {
    const fieldName = "LawsuitTypeTicklers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeTicklerCollectionService(client, path, fieldName)
      : new LawsuitTypeTicklerService(
          client,
          path,
          new QLawsuitTypeTicklerId(fieldName).buildUrl(id)
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

  public TicklerAnswers(): TicklerAnswerCollectionService<ClientType>;
  public TicklerAnswers(id: TicklerAnswerId): TicklerAnswerService<ClientType>;
  public TicklerAnswers(id?: TicklerAnswerId | undefined) {
    const fieldName = "TicklerAnswers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerAnswerCollectionService(client, path, fieldName)
      : new TicklerAnswerService(
          client,
          path,
          new QTicklerAnswerId(fieldName).buildUrl(id)
        );
  }

  public TicklerCriterias(): TicklerCriteriaCollectionService<ClientType>;
  public TicklerCriterias(
    id: TicklerCriteriaId
  ): TicklerCriteriaService<ClientType>;
  public TicklerCriterias(id?: TicklerCriteriaId | undefined) {
    const fieldName = "TicklerCriterias";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCriteriaCollectionService(client, path, fieldName)
      : new TicklerCriteriaService(
          client,
          path,
          new QTicklerCriteriaId(fieldName).buildUrl(id)
        );
  }

  public ParentActions(): TicklerTemplateActionCollectionService<ClientType>;
  public ParentActions(
    id: TicklerTemplateActionId
  ): TicklerTemplateActionService<ClientType>;
  public ParentActions(id?: TicklerTemplateActionId | undefined) {
    const fieldName = "ParentActions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerTemplateActionCollectionService(client, path, fieldName)
      : new TicklerTemplateActionService(
          client,
          path,
          new QTicklerTemplateActionId(fieldName).buildUrl(id)
        );
  }

  public ChildActions(): TicklerTemplateActionCollectionService<ClientType>;
  public ChildActions(
    id: TicklerTemplateActionId
  ): TicklerTemplateActionService<ClientType>;
  public ChildActions(id?: TicklerTemplateActionId | undefined) {
    const fieldName = "ChildActions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerTemplateActionCollectionService(client, path, fieldName)
      : new TicklerTemplateActionService(
          client,
          path,
          new QTicklerTemplateActionId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerTemplateCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerTemplate,
  EditableTicklerTemplate,
  QTicklerTemplate,
  TicklerTemplateId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerTemplate,
      new QTicklerTemplateId(name)
    );
  }
}

export class RoleTemplateService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RoleTemplate,
  EditableRoleTemplate,
  QRoleTemplate
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRoleTemplate);
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
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

  public LawsuitTypeDocuments(): LawsuitTypeDocumentCollectionService<ClientType>;
  public LawsuitTypeDocuments(
    id: LawsuitTypeDocumentId
  ): LawsuitTypeDocumentService<ClientType>;
  public LawsuitTypeDocuments(id?: LawsuitTypeDocumentId | undefined) {
    const fieldName = "LawsuitTypeDocuments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeDocumentCollectionService(client, path, fieldName)
      : new LawsuitTypeDocumentService(
          client,
          path,
          new QLawsuitTypeDocumentId(fieldName).buildUrl(id)
        );
  }

  public LawsuitTypeTicklers(): LawsuitTypeTicklerCollectionService<ClientType>;
  public LawsuitTypeTicklers(
    id: LawsuitTypeTicklerId
  ): LawsuitTypeTicklerService<ClientType>;
  public LawsuitTypeTicklers(id?: LawsuitTypeTicklerId | undefined) {
    const fieldName = "LawsuitTypeTicklers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new LawsuitTypeTicklerCollectionService(client, path, fieldName)
      : new LawsuitTypeTicklerService(
          client,
          path,
          new QLawsuitTypeTicklerId(fieldName).buildUrl(id)
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
}

export class RoleTemplateCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RoleTemplate,
  EditableRoleTemplate,
  QRoleTemplate,
  RoleTemplateId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRoleTemplate, new QRoleTemplateId(name));
  }
}

export class LawsuitRoleService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitRole,
  EditableLawsuitRole,
  QLawsuitRole
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _LawsuitParty?: LawsuitPartyService<ClientType>;
  private _RoleTemplate?: RoleTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitRole);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public LawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._LawsuitParty) {
      const { client, path } = this.__base;
      this._LawsuitParty = new LawsuitPartyService(
        client,
        path,
        "LawsuitParty"
      );
    }

    return this._LawsuitParty;
  }

  public RoleTemplate(): RoleTemplateService<ClientType> {
    if (!this._RoleTemplate) {
      const { client, path } = this.__base;
      this._RoleTemplate = new RoleTemplateService(
        client,
        path,
        "RoleTemplate"
      );
    }

    return this._RoleTemplate;
  }
}

export class LawsuitRoleCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitRole,
  EditableLawsuitRole,
  QLawsuitRole,
  LawsuitRoleId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitRole, new QLawsuitRoleId(name));
  }
}

export class InsuranceClaimService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  InsuranceClaim,
  EditableInsuranceClaim,
  QInsuranceClaim
> {
  private _InsuranceAdjuster?: LawsuitPartyService<ClientType>;
  private _InsurancePolicy?: InsurancePolicyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInsuranceClaim);
  }

  public InsuranceAdjuster(): LawsuitPartyService<ClientType> {
    if (!this._InsuranceAdjuster) {
      const { client, path } = this.__base;
      this._InsuranceAdjuster = new LawsuitPartyService(
        client,
        path,
        "InsuranceAdjuster"
      );
    }

    return this._InsuranceAdjuster;
  }

  public InsurancePolicy(): InsurancePolicyService<ClientType> {
    if (!this._InsurancePolicy) {
      const { client, path } = this.__base;
      this._InsurancePolicy = new InsurancePolicyService(
        client,
        path,
        "InsurancePolicy"
      );
    }

    return this._InsurancePolicy;
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

  public InsuranceClaimDemands(): InsuranceClaimDemandCollectionService<ClientType>;
  public InsuranceClaimDemands(
    id: InsuranceClaimDemandId
  ): InsuranceClaimDemandService<ClientType>;
  public InsuranceClaimDemands(id?: InsuranceClaimDemandId | undefined) {
    const fieldName = "InsuranceClaimDemands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimDemandCollectionService(client, path, fieldName)
      : new InsuranceClaimDemandService(
          client,
          path,
          new QInsuranceClaimDemandId(fieldName).buildUrl(id)
        );
  }

  public PIPs(): PIPCollectionService<ClientType>;
  public PIPs(id: PIPId): PIPService<ClientType>;
  public PIPs(id?: PIPId | undefined) {
    const fieldName = "PIPs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PIPCollectionService(client, path, fieldName)
      : new PIPService(client, path, new QPIPId(fieldName).buildUrl(id));
  }

  public PIPBenefits(): PIPBenefitCollectionService<ClientType>;
  public PIPBenefits(id: PIPBenefitId): PIPBenefitService<ClientType>;
  public PIPBenefits(id?: PIPBenefitId | undefined) {
    const fieldName = "PIPBenefits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PIPBenefitCollectionService(client, path, fieldName)
      : new PIPBenefitService(
          client,
          path,
          new QPIPBenefitId(fieldName).buildUrl(id)
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

  public SettlementItems(): SettlementItemCollectionService<ClientType>;
  public SettlementItems(
    id: SettlementItemId
  ): SettlementItemService<ClientType>;
  public SettlementItems(id?: SettlementItemId | undefined) {
    const fieldName = "SettlementItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementItemCollectionService(client, path, fieldName)
      : new SettlementItemService(
          client,
          path,
          new QSettlementItemId(fieldName).buildUrl(id)
        );
  }
}

export class InsuranceClaimCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  InsuranceClaim,
  EditableInsuranceClaim,
  QInsuranceClaim,
  InsuranceClaimId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInsuranceClaim, new QInsuranceClaimId(name));
  }
}

export class InsurancePolicyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  InsurancePolicy,
  EditableInsurancePolicy,
  QInsurancePolicy
> {
  private _InsuranceCompany?: LawsuitPartyService<ClientType>;
  private _Insured?: LawsuitPartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _TiedTo?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInsurancePolicy);
  }

  public InsuranceCompany(): LawsuitPartyService<ClientType> {
    if (!this._InsuranceCompany) {
      const { client, path } = this.__base;
      this._InsuranceCompany = new LawsuitPartyService(
        client,
        path,
        "InsuranceCompany"
      );
    }

    return this._InsuranceCompany;
  }

  public Insured(): LawsuitPartyService<ClientType> {
    if (!this._Insured) {
      const { client, path } = this.__base;
      this._Insured = new LawsuitPartyService(client, path, "Insured");
    }

    return this._Insured;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public TiedTo(): LawsuitPartyService<ClientType> {
    if (!this._TiedTo) {
      const { client, path } = this.__base;
      this._TiedTo = new LawsuitPartyService(client, path, "TiedTo");
    }

    return this._TiedTo;
  }

  public InsuranceClaims(): InsuranceClaimCollectionService<ClientType>;
  public InsuranceClaims(
    id: InsuranceClaimId
  ): InsuranceClaimService<ClientType>;
  public InsuranceClaims(id?: InsuranceClaimId | undefined) {
    const fieldName = "InsuranceClaims";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimCollectionService(client, path, fieldName)
      : new InsuranceClaimService(
          client,
          path,
          new QInsuranceClaimId(fieldName).buildUrl(id)
        );
  }
}

export class InsurancePolicyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  InsurancePolicy,
  EditableInsurancePolicy,
  QInsurancePolicy,
  InsurancePolicyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qInsurancePolicy,
      new QInsurancePolicyId(name)
    );
  }
}

export class NegotiationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Negotiation,
  EditableNegotiation,
  QNegotiation
> {
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qNegotiation);
  }

  public InsuranceClaim(): InsuranceClaimService<ClientType> {
    if (!this._InsuranceClaim) {
      const { client, path } = this.__base;
      this._InsuranceClaim = new InsuranceClaimService(
        client,
        path,
        "InsuranceClaim"
      );
    }

    return this._InsuranceClaim;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Demands(): DemandCollectionService<ClientType>;
  public Demands(id: DemandId): DemandService<ClientType>;
  public Demands(id?: DemandId | undefined) {
    const fieldName = "Demands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DemandCollectionService(client, path, fieldName)
      : new DemandService(client, path, new QDemandId(fieldName).buildUrl(id));
  }
}

export class NegotiationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Negotiation,
  EditableNegotiation,
  QNegotiation,
  NegotiationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qNegotiation, new QNegotiationId(name));
  }
}

export class DemandService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Demand, EditableDemand, QDemand> {
  private _IntangibleDamagesLaw?: LawService<ClientType>;
  private _LiabilityLaw?: LawService<ClientType>;
  private _LostWagesLaw?: LawService<ClientType>;
  private _Negotiation?: NegotiationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDemand);
  }

  public IntangibleDamagesLaw(): LawService<ClientType> {
    if (!this._IntangibleDamagesLaw) {
      const { client, path } = this.__base;
      this._IntangibleDamagesLaw = new LawService(
        client,
        path,
        "IntangibleDamagesLaw"
      );
    }

    return this._IntangibleDamagesLaw;
  }

  public LiabilityLaw(): LawService<ClientType> {
    if (!this._LiabilityLaw) {
      const { client, path } = this.__base;
      this._LiabilityLaw = new LawService(client, path, "LiabilityLaw");
    }

    return this._LiabilityLaw;
  }

  public LostWagesLaw(): LawService<ClientType> {
    if (!this._LostWagesLaw) {
      const { client, path } = this.__base;
      this._LostWagesLaw = new LawService(client, path, "LostWagesLaw");
    }

    return this._LostWagesLaw;
  }

  public Negotiation(): NegotiationService<ClientType> {
    if (!this._Negotiation) {
      const { client, path } = this.__base;
      this._Negotiation = new NegotiationService(client, path, "Negotiation");
    }

    return this._Negotiation;
  }

  public CounterOffers(): CounterOfferCollectionService<ClientType>;
  public CounterOffers(id: CounterOfferId): CounterOfferService<ClientType>;
  public CounterOffers(id?: CounterOfferId | undefined) {
    const fieldName = "CounterOffers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CounterOfferCollectionService(client, path, fieldName)
      : new CounterOfferService(
          client,
          path,
          new QCounterOfferId(fieldName).buildUrl(id)
        );
  }

  public DemandLineItems(): DemandLineItemCollectionService<ClientType>;
  public DemandLineItems(
    id: DemandLineItemId
  ): DemandLineItemService<ClientType>;
  public DemandLineItems(id?: DemandLineItemId | undefined) {
    const fieldName = "DemandLineItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DemandLineItemCollectionService(client, path, fieldName)
      : new DemandLineItemService(
          client,
          path,
          new QDemandLineItemId(fieldName).buildUrl(id)
        );
  }

  public InsuranceClaimDemands(): InsuranceClaimDemandCollectionService<ClientType>;
  public InsuranceClaimDemands(
    id: InsuranceClaimDemandId
  ): InsuranceClaimDemandService<ClientType>;
  public InsuranceClaimDemands(id?: InsuranceClaimDemandId | undefined) {
    const fieldName = "InsuranceClaimDemands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new InsuranceClaimDemandCollectionService(client, path, fieldName)
      : new InsuranceClaimDemandService(
          client,
          path,
          new QInsuranceClaimDemandId(fieldName).buildUrl(id)
        );
  }
}

export class DemandCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Demand,
  EditableDemand,
  QDemand,
  DemandId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDemand, new QDemandId(name));
  }
}

export class LawService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Law, EditableLaw, QLaw> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLaw);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public IntangibleDamagesDemands(): DemandCollectionService<ClientType>;
  public IntangibleDamagesDemands(id: DemandId): DemandService<ClientType>;
  public IntangibleDamagesDemands(id?: DemandId | undefined) {
    const fieldName = "IntangibleDamagesDemands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DemandCollectionService(client, path, fieldName)
      : new DemandService(client, path, new QDemandId(fieldName).buildUrl(id));
  }

  public LiabilityDemands(): DemandCollectionService<ClientType>;
  public LiabilityDemands(id: DemandId): DemandService<ClientType>;
  public LiabilityDemands(id?: DemandId | undefined) {
    const fieldName = "LiabilityDemands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DemandCollectionService(client, path, fieldName)
      : new DemandService(client, path, new QDemandId(fieldName).buildUrl(id));
  }

  public LostWagesDemands(): DemandCollectionService<ClientType>;
  public LostWagesDemands(id: DemandId): DemandService<ClientType>;
  public LostWagesDemands(id?: DemandId | undefined) {
    const fieldName = "LostWagesDemands";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DemandCollectionService(client, path, fieldName)
      : new DemandService(client, path, new QDemandId(fieldName).buildUrl(id));
  }
}

export class LawCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<ClientType, Law, EditableLaw, QLaw, LawId> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLaw, new QLawId(name));
  }
}

export class CounterOfferService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CounterOffer,
  EditableCounterOffer,
  QCounterOffer
> {
  private _Demand?: DemandService<ClientType>;
  private _CounterOfferType?: CounterOfferTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCounterOffer);
  }

  public Demand(): DemandService<ClientType> {
    if (!this._Demand) {
      const { client, path } = this.__base;
      this._Demand = new DemandService(client, path, "Demand");
    }

    return this._Demand;
  }

  public CounterOfferType(): CounterOfferTypeService<ClientType> {
    if (!this._CounterOfferType) {
      const { client, path } = this.__base;
      this._CounterOfferType = new CounterOfferTypeService(
        client,
        path,
        "CounterOfferType"
      );
    }

    return this._CounterOfferType;
  }
}

export class CounterOfferCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CounterOffer,
  EditableCounterOffer,
  QCounterOffer,
  CounterOfferId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCounterOffer, new QCounterOfferId(name));
  }
}

export class CounterOfferTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CounterOfferType,
  EditableCounterOfferType,
  QCounterOfferType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCounterOfferType);
  }

  public CounterOffers(): CounterOfferCollectionService<ClientType>;
  public CounterOffers(id: CounterOfferId): CounterOfferService<ClientType>;
  public CounterOffers(id?: CounterOfferId | undefined) {
    const fieldName = "CounterOffers";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new CounterOfferCollectionService(client, path, fieldName)
      : new CounterOfferService(
          client,
          path,
          new QCounterOfferId(fieldName).buildUrl(id)
        );
  }
}

export class CounterOfferTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CounterOfferType,
  EditableCounterOfferType,
  QCounterOfferType,
  CounterOfferTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCounterOfferType,
      new QCounterOfferTypeId(name)
    );
  }
}

export class DemandLineItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DemandLineItem,
  EditableDemandLineItem,
  QDemandLineItem
> {
  private _Demand?: DemandService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDemandLineItem);
  }

  public Demand(): DemandService<ClientType> {
    if (!this._Demand) {
      const { client, path } = this.__base;
      this._Demand = new DemandService(client, path, "Demand");
    }

    return this._Demand;
  }
}

export class DemandLineItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DemandLineItem,
  EditableDemandLineItem,
  QDemandLineItem,
  DemandLineItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDemandLineItem, new QDemandLineItemId(name));
  }
}

export class InsuranceClaimDemandService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  InsuranceClaimDemand,
  EditableInsuranceClaimDemand,
  QInsuranceClaimDemand
> {
  private _Demand?: DemandService<ClientType>;
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInsuranceClaimDemand);
  }

  public Demand(): DemandService<ClientType> {
    if (!this._Demand) {
      const { client, path } = this.__base;
      this._Demand = new DemandService(client, path, "Demand");
    }

    return this._Demand;
  }

  public InsuranceClaim(): InsuranceClaimService<ClientType> {
    if (!this._InsuranceClaim) {
      const { client, path } = this.__base;
      this._InsuranceClaim = new InsuranceClaimService(
        client,
        path,
        "InsuranceClaim"
      );
    }

    return this._InsuranceClaim;
  }
}

export class InsuranceClaimDemandCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  InsuranceClaimDemand,
  EditableInsuranceClaimDemand,
  QInsuranceClaimDemand,
  InsuranceClaimDemandId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qInsuranceClaimDemand,
      new QInsuranceClaimDemandId(name)
    );
  }
}

export class PIPService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, PIP, EditablePIP, QPIP> {
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPIP);
  }

  public InsuranceClaim(): InsuranceClaimService<ClientType> {
    if (!this._InsuranceClaim) {
      const { client, path } = this.__base;
      this._InsuranceClaim = new InsuranceClaimService(
        client,
        path,
        "InsuranceClaim"
      );
    }

    return this._InsuranceClaim;
  }

  public PIPBenefits(): PIPBenefitCollectionService<ClientType>;
  public PIPBenefits(id: PIPBenefitId): PIPBenefitService<ClientType>;
  public PIPBenefits(id?: PIPBenefitId | undefined) {
    const fieldName = "PIPBenefits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PIPBenefitCollectionService(client, path, fieldName)
      : new PIPBenefitService(
          client,
          path,
          new QPIPBenefitId(fieldName).buildUrl(id)
        );
  }
}

export class PIPCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<ClientType, PIP, EditablePIP, QPIP, PIPId> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPIP, new QPIPId(name));
  }
}

export class PIPBenefitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PIPBenefit,
  EditablePIPBenefit,
  QPIPBenefit
> {
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;
  private _PIP?: PIPService<ClientType>;
  private _PIPBenefitsType?: PIPBenefitsTypeService<ClientType>;
  private _ServiceProviderLawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPIPBenefit);
  }

  public InsuranceClaim(): InsuranceClaimService<ClientType> {
    if (!this._InsuranceClaim) {
      const { client, path } = this.__base;
      this._InsuranceClaim = new InsuranceClaimService(
        client,
        path,
        "InsuranceClaim"
      );
    }

    return this._InsuranceClaim;
  }

  public PIP(): PIPService<ClientType> {
    if (!this._PIP) {
      const { client, path } = this.__base;
      this._PIP = new PIPService(client, path, "PIP");
    }

    return this._PIP;
  }

  public PIPBenefitsType(): PIPBenefitsTypeService<ClientType> {
    if (!this._PIPBenefitsType) {
      const { client, path } = this.__base;
      this._PIPBenefitsType = new PIPBenefitsTypeService(
        client,
        path,
        "PIPBenefitsType"
      );
    }

    return this._PIPBenefitsType;
  }

  public ServiceProviderLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._ServiceProviderLawsuitParty) {
      const { client, path } = this.__base;
      this._ServiceProviderLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "ServiceProviderLawsuitParty"
      );
    }

    return this._ServiceProviderLawsuitParty;
  }
}

export class PIPBenefitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PIPBenefit,
  EditablePIPBenefit,
  QPIPBenefit,
  PIPBenefitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPIPBenefit, new QPIPBenefitId(name));
  }
}

export class PIPBenefitsTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PIPBenefitsType,
  EditablePIPBenefitsType,
  QPIPBenefitsType
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPIPBenefitsType);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public PIPBenefits(): PIPBenefitCollectionService<ClientType>;
  public PIPBenefits(id: PIPBenefitId): PIPBenefitService<ClientType>;
  public PIPBenefits(id?: PIPBenefitId | undefined) {
    const fieldName = "PIPBenefits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new PIPBenefitCollectionService(client, path, fieldName)
      : new PIPBenefitService(
          client,
          path,
          new QPIPBenefitId(fieldName).buildUrl(id)
        );
  }
}

export class PIPBenefitsTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PIPBenefitsType,
  EditablePIPBenefitsType,
  QPIPBenefitsType,
  PIPBenefitsTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qPIPBenefitsType,
      new QPIPBenefitsTypeId(name)
    );
  }
}

export class PropertyDamageService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PropertyDamage,
  EditablePropertyDamage,
  QPropertyDamage
> {
  private _Adjuster?: LawsuitPartyService<ClientType>;
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;
  private _InsuranceCompany?: LawsuitPartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Plaintiff?: LawsuitPartyService<ClientType>;
  private _PropertyType?: PropertyTypeService<ClientType>;
  private _RepairCompany?: CompanyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPropertyDamage);
  }

  public Adjuster(): LawsuitPartyService<ClientType> {
    if (!this._Adjuster) {
      const { client, path } = this.__base;
      this._Adjuster = new LawsuitPartyService(client, path, "Adjuster");
    }

    return this._Adjuster;
  }

  public InsuranceClaim(): InsuranceClaimService<ClientType> {
    if (!this._InsuranceClaim) {
      const { client, path } = this.__base;
      this._InsuranceClaim = new InsuranceClaimService(
        client,
        path,
        "InsuranceClaim"
      );
    }

    return this._InsuranceClaim;
  }

  public InsuranceCompany(): LawsuitPartyService<ClientType> {
    if (!this._InsuranceCompany) {
      const { client, path } = this.__base;
      this._InsuranceCompany = new LawsuitPartyService(
        client,
        path,
        "InsuranceCompany"
      );
    }

    return this._InsuranceCompany;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Plaintiff(): LawsuitPartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new LawsuitPartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public PropertyType(): PropertyTypeService<ClientType> {
    if (!this._PropertyType) {
      const { client, path } = this.__base;
      this._PropertyType = new PropertyTypeService(
        client,
        path,
        "PropertyType"
      );
    }

    return this._PropertyType;
  }

  public RepairCompany(): CompanyService<ClientType> {
    if (!this._RepairCompany) {
      const { client, path } = this.__base;
      this._RepairCompany = new CompanyService(client, path, "RepairCompany");
    }

    return this._RepairCompany;
  }
}

export class PropertyDamageCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PropertyDamage,
  EditablePropertyDamage,
  QPropertyDamage,
  PropertyDamageId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPropertyDamage, new QPropertyDamageId(name));
  }
}

export class PropertyTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PropertyType,
  EditablePropertyType,
  QPropertyType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPropertyType);
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
}

export class PropertyTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PropertyType,
  EditablePropertyType,
  QPropertyType,
  PropertyTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPropertyType, new QPropertyTypeId(name));
  }
}

export class EconomicLossService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  EconomicLoss,
  EditableEconomicLoss,
  QEconomicLoss
> {
  private _Plaintiff?: PartyService<ClientType>;
  private _Employer?: LawsuitPartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEconomicLoss);
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public Employer(): LawsuitPartyService<ClientType> {
    if (!this._Employer) {
      const { client, path } = this.__base;
      this._Employer = new LawsuitPartyService(client, path, "Employer");
    }

    return this._Employer;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class EconomicLossCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  EconomicLoss,
  EditableEconomicLoss,
  QEconomicLoss,
  EconomicLossId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEconomicLoss, new QEconomicLossId(name));
  }
}

export class ExpenseService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Expense, EditableExpense, QExpense> {
  private _Attorney?: PartyService<ClientType>;
  private _Plaintiff?: PartyService<ClientType>;
  private _ExpenseType?: ExpenseTypeService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Payee?: PartyService<ClientType>;
  private _PaymentMethod?: PaymentMethodService<ClientType>;
  private _PaymentParty?: PartyService<ClientType>;
  private _Settlement?: SettlementService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qExpense);
  }

  public Attorney(): PartyService<ClientType> {
    if (!this._Attorney) {
      const { client, path } = this.__base;
      this._Attorney = new PartyService(client, path, "Attorney");
    }

    return this._Attorney;
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public ExpenseType(): ExpenseTypeService<ClientType> {
    if (!this._ExpenseType) {
      const { client, path } = this.__base;
      this._ExpenseType = new ExpenseTypeService(client, path, "ExpenseType");
    }

    return this._ExpenseType;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Payee(): PartyService<ClientType> {
    if (!this._Payee) {
      const { client, path } = this.__base;
      this._Payee = new PartyService(client, path, "Payee");
    }

    return this._Payee;
  }

  public PaymentMethod(): PaymentMethodService<ClientType> {
    if (!this._PaymentMethod) {
      const { client, path } = this.__base;
      this._PaymentMethod = new PaymentMethodService(
        client,
        path,
        "PaymentMethod"
      );
    }

    return this._PaymentMethod;
  }

  public PaymentParty(): PartyService<ClientType> {
    if (!this._PaymentParty) {
      const { client, path } = this.__base;
      this._PaymentParty = new PartyService(client, path, "PaymentParty");
    }

    return this._PaymentParty;
  }

  public Settlement(): SettlementService<ClientType> {
    if (!this._Settlement) {
      const { client, path } = this.__base;
      this._Settlement = new SettlementService(client, path, "Settlement");
    }

    return this._Settlement;
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

  public SettlementExpenses(): SettlementExpenseCollectionService<ClientType>;
  public SettlementExpenses(
    id: SettlementExpenseId
  ): SettlementExpenseService<ClientType>;
  public SettlementExpenses(id?: SettlementExpenseId | undefined) {
    const fieldName = "SettlementExpenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementExpenseCollectionService(client, path, fieldName)
      : new SettlementExpenseService(
          client,
          path,
          new QSettlementExpenseId(fieldName).buildUrl(id)
        );
  }
}

export class ExpenseCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Expense,
  EditableExpense,
  QExpense,
  ExpenseId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qExpense, new QExpenseId(name));
  }
}

export class ExpenseTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ExpenseType,
  EditableExpenseType,
  QExpenseType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qExpenseType);
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
}

export class ExpenseTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ExpenseType,
  EditableExpenseType,
  QExpenseType,
  ExpenseTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qExpenseType, new QExpenseTypeId(name));
  }
}

export class PaymentMethodService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PaymentMethod,
  EditablePaymentMethod,
  QPaymentMethod
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPaymentMethod);
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
}

export class PaymentMethodCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PaymentMethod,
  EditablePaymentMethod,
  QPaymentMethod,
  PaymentMethodId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPaymentMethod, new QPaymentMethodId(name));
  }
}

export class SettlementService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Settlement,
  EditableSettlement,
  QSettlement
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _PlaintiffParty?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlement);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public PlaintiffParty(): PartyService<ClientType> {
    if (!this._PlaintiffParty) {
      const { client, path } = this.__base;
      this._PlaintiffParty = new PartyService(client, path, "PlaintiffParty");
    }

    return this._PlaintiffParty;
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

  public SettlementExpenses(): SettlementExpenseCollectionService<ClientType>;
  public SettlementExpenses(
    id: SettlementExpenseId
  ): SettlementExpenseService<ClientType>;
  public SettlementExpenses(id?: SettlementExpenseId | undefined) {
    const fieldName = "SettlementExpenses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementExpenseCollectionService(client, path, fieldName)
      : new SettlementExpenseService(
          client,
          path,
          new QSettlementExpenseId(fieldName).buildUrl(id)
        );
  }

  public SettlementItems(): SettlementItemCollectionService<ClientType>;
  public SettlementItems(
    id: SettlementItemId
  ): SettlementItemService<ClientType>;
  public SettlementItems(id?: SettlementItemId | undefined) {
    const fieldName = "SettlementItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementItemCollectionService(client, path, fieldName)
      : new SettlementItemService(
          client,
          path,
          new QSettlementItemId(fieldName).buildUrl(id)
        );
  }

  public SettlementLienSubs(): SettlementLienSubCollectionService<ClientType>;
  public SettlementLienSubs(
    id: SettlementLienSubId
  ): SettlementLienSubService<ClientType>;
  public SettlementLienSubs(id?: SettlementLienSubId | undefined) {
    const fieldName = "SettlementLienSubs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementLienSubCollectionService(client, path, fieldName)
      : new SettlementLienSubService(
          client,
          path,
          new QSettlementLienSubId(fieldName).buildUrl(id)
        );
  }

  public SettlementMedicalProviders(): SettlementMedicalProviderCollectionService<ClientType>;
  public SettlementMedicalProviders(
    id: SettlementMedicalProviderId
  ): SettlementMedicalProviderService<ClientType>;
  public SettlementMedicalProviders(
    id?: SettlementMedicalProviderId | undefined
  ) {
    const fieldName = "SettlementMedicalProviders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementMedicalProviderCollectionService(client, path, fieldName)
      : new SettlementMedicalProviderService(
          client,
          path,
          new QSettlementMedicalProviderId(fieldName).buildUrl(id)
        );
  }
}

export class SettlementCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Settlement,
  EditableSettlement,
  QSettlement,
  SettlementId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlement, new QSettlementId(name));
  }
}

export class SettlementExpenseService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SettlementExpense,
  EditableSettlementExpense,
  QSettlementExpense
> {
  private _Expense?: ExpenseService<ClientType>;
  private _Settlement?: SettlementService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementExpense);
  }

  public Expense(): ExpenseService<ClientType> {
    if (!this._Expense) {
      const { client, path } = this.__base;
      this._Expense = new ExpenseService(client, path, "Expense");
    }

    return this._Expense;
  }

  public Settlement(): SettlementService<ClientType> {
    if (!this._Settlement) {
      const { client, path } = this.__base;
      this._Settlement = new SettlementService(client, path, "Settlement");
    }

    return this._Settlement;
  }
}

export class SettlementExpenseCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SettlementExpense,
  EditableSettlementExpense,
  QSettlementExpense,
  SettlementExpenseId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSettlementExpense,
      new QSettlementExpenseId(name)
    );
  }
}

export class SettlementItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SettlementItem,
  EditableSettlementItem,
  QSettlementItem
> {
  private _InsuranceClaim?: InsuranceClaimService<ClientType>;
  private _Settlement?: SettlementService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementItem);
  }

  public InsuranceClaim(): InsuranceClaimService<ClientType> {
    if (!this._InsuranceClaim) {
      const { client, path } = this.__base;
      this._InsuranceClaim = new InsuranceClaimService(
        client,
        path,
        "InsuranceClaim"
      );
    }

    return this._InsuranceClaim;
  }

  public Settlement(): SettlementService<ClientType> {
    if (!this._Settlement) {
      const { client, path } = this.__base;
      this._Settlement = new SettlementService(client, path, "Settlement");
    }

    return this._Settlement;
  }
}

export class SettlementItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SettlementItem,
  EditableSettlementItem,
  QSettlementItem,
  SettlementItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementItem, new QSettlementItemId(name));
  }
}

export class SettlementLienSubService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SettlementLienSub,
  EditableSettlementLienSub,
  QSettlementLienSub
> {
  private _LienSubrogation?: LienSubrogationService<ClientType>;
  private _Settlement?: SettlementService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementLienSub);
  }

  public LienSubrogation(): LienSubrogationService<ClientType> {
    if (!this._LienSubrogation) {
      const { client, path } = this.__base;
      this._LienSubrogation = new LienSubrogationService(
        client,
        path,
        "LienSubrogation"
      );
    }

    return this._LienSubrogation;
  }

  public Settlement(): SettlementService<ClientType> {
    if (!this._Settlement) {
      const { client, path } = this.__base;
      this._Settlement = new SettlementService(client, path, "Settlement");
    }

    return this._Settlement;
  }
}

export class SettlementLienSubCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SettlementLienSub,
  EditableSettlementLienSub,
  QSettlementLienSub,
  SettlementLienSubId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSettlementLienSub,
      new QSettlementLienSubId(name)
    );
  }
}

export class LienSubrogationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LienSubrogation,
  EditableLienSubrogation,
  QLienSubrogation
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _PaymentType?: LienSubrogationPaymentTypeService<ClientType>;
  private _Plaintiff?: PartyService<ClientType>;
  private _SubrogeeLienHolder?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLienSubrogation);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public PaymentType(): LienSubrogationPaymentTypeService<ClientType> {
    if (!this._PaymentType) {
      const { client, path } = this.__base;
      this._PaymentType = new LienSubrogationPaymentTypeService(
        client,
        path,
        "PaymentType"
      );
    }

    return this._PaymentType;
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public SubrogeeLienHolder(): PartyService<ClientType> {
    if (!this._SubrogeeLienHolder) {
      const { client, path } = this.__base;
      this._SubrogeeLienHolder = new PartyService(
        client,
        path,
        "SubrogeeLienHolder"
      );
    }

    return this._SubrogeeLienHolder;
  }

  public SettlementLienSubs(): SettlementLienSubCollectionService<ClientType>;
  public SettlementLienSubs(
    id: SettlementLienSubId
  ): SettlementLienSubService<ClientType>;
  public SettlementLienSubs(id?: SettlementLienSubId | undefined) {
    const fieldName = "SettlementLienSubs";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementLienSubCollectionService(client, path, fieldName)
      : new SettlementLienSubService(
          client,
          path,
          new QSettlementLienSubId(fieldName).buildUrl(id)
        );
  }
}

export class LienSubrogationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LienSubrogation,
  EditableLienSubrogation,
  QLienSubrogation,
  LienSubrogationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLienSubrogation,
      new QLienSubrogationId(name)
    );
  }
}

export class LienSubrogationPaymentTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LienSubrogationPaymentType,
  EditableLienSubrogationPaymentType,
  QLienSubrogationPaymentType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLienSubrogationPaymentType);
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
}

export class LienSubrogationPaymentTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LienSubrogationPaymentType,
  EditableLienSubrogationPaymentType,
  QLienSubrogationPaymentType,
  LienSubrogationPaymentTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLienSubrogationPaymentType,
      new QLienSubrogationPaymentTypeId(name)
    );
  }
}

export class SettlementMedicalProviderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SettlementMedicalProvider,
  EditableSettlementMedicalProvider,
  QSettlementMedicalProvider
> {
  private _MedicalProvider?: MedicalProviderService<ClientType>;
  private _Settlement?: SettlementService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementMedicalProvider);
  }

  public MedicalProvider(): MedicalProviderService<ClientType> {
    if (!this._MedicalProvider) {
      const { client, path } = this.__base;
      this._MedicalProvider = new MedicalProviderService(
        client,
        path,
        "MedicalProvider"
      );
    }

    return this._MedicalProvider;
  }

  public Settlement(): SettlementService<ClientType> {
    if (!this._Settlement) {
      const { client, path } = this.__base;
      this._Settlement = new SettlementService(client, path, "Settlement");
    }

    return this._Settlement;
  }
}

export class SettlementMedicalProviderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SettlementMedicalProvider,
  EditableSettlementMedicalProvider,
  QSettlementMedicalProvider,
  SettlementMedicalProviderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSettlementMedicalProvider,
      new QSettlementMedicalProviderId(name)
    );
  }
}

export class MedicalProviderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  MedicalProvider,
  EditableMedicalProvider,
  QMedicalProvider
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Company?: PartyService<ClientType>;
  private _Plaintiff?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qMedicalProvider);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Company(): PartyService<ClientType> {
    if (!this._Company) {
      const { client, path } = this.__base;
      this._Company = new PartyService(client, path, "Company");
    }

    return this._Company;
  }

  public Plaintiff(): PartyService<ClientType> {
    if (!this._Plaintiff) {
      const { client, path } = this.__base;
      this._Plaintiff = new PartyService(client, path, "Plaintiff");
    }

    return this._Plaintiff;
  }

  public SettlementMedicalProviders(): SettlementMedicalProviderCollectionService<ClientType>;
  public SettlementMedicalProviders(
    id: SettlementMedicalProviderId
  ): SettlementMedicalProviderService<ClientType>;
  public SettlementMedicalProviders(
    id?: SettlementMedicalProviderId | undefined
  ) {
    const fieldName = "SettlementMedicalProviders";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SettlementMedicalProviderCollectionService(client, path, fieldName)
      : new SettlementMedicalProviderService(
          client,
          path,
          new QSettlementMedicalProviderId(fieldName).buildUrl(id)
        );
  }

  public Treatments(): TreatmentCollectionService<ClientType>;
  public Treatments(id: TreatmentId): TreatmentService<ClientType>;
  public Treatments(id?: TreatmentId | undefined) {
    const fieldName = "Treatments";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TreatmentCollectionService(client, path, fieldName)
      : new TreatmentService(
          client,
          path,
          new QTreatmentId(fieldName).buildUrl(id)
        );
  }

  public TreatmentNotes(): TreatmentNoteCollectionService<ClientType>;
  public TreatmentNotes(id: TreatmentNoteId): TreatmentNoteService<ClientType>;
  public TreatmentNotes(id?: TreatmentNoteId | undefined) {
    const fieldName = "TreatmentNotes";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TreatmentNoteCollectionService(client, path, fieldName)
      : new TreatmentNoteService(
          client,
          path,
          new QTreatmentNoteId(fieldName).buildUrl(id)
        );
  }
}

export class MedicalProviderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  MedicalProvider,
  EditableMedicalProvider,
  QMedicalProvider,
  MedicalProviderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qMedicalProvider,
      new QMedicalProviderId(name)
    );
  }
}

export class TreatmentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Treatment,
  EditableTreatment,
  QTreatment
> {
  private _MedicalProvider?: MedicalProviderService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTreatment);
  }

  public MedicalProvider(): MedicalProviderService<ClientType> {
    if (!this._MedicalProvider) {
      const { client, path } = this.__base;
      this._MedicalProvider = new MedicalProviderService(
        client,
        path,
        "MedicalProvider"
      );
    }

    return this._MedicalProvider;
  }
}

export class TreatmentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Treatment,
  EditableTreatment,
  QTreatment,
  TreatmentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTreatment, new QTreatmentId(name));
  }
}

export class TreatmentNoteService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TreatmentNote,
  EditableTreatmentNote,
  QTreatmentNote
> {
  private _MedicalProvider?: MedicalProviderService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTreatmentNote);
  }

  public MedicalProvider(): MedicalProviderService<ClientType> {
    if (!this._MedicalProvider) {
      const { client, path } = this.__base;
      this._MedicalProvider = new MedicalProviderService(
        client,
        path,
        "MedicalProvider"
      );
    }

    return this._MedicalProvider;
  }
}

export class TreatmentNoteCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TreatmentNote,
  EditableTreatmentNote,
  QTreatmentNote,
  TreatmentNoteId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTreatmentNote, new QTreatmentNoteId(name));
  }
}

export class HearingService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Hearing, EditableHearing, QHearing> {
  private _HearingType?: HearingTypeService<ClientType>;
  private _Judge?: PartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qHearing);
  }

  public HearingType(): HearingTypeService<ClientType> {
    if (!this._HearingType) {
      const { client, path } = this.__base;
      this._HearingType = new HearingTypeService(client, path, "HearingType");
    }

    return this._HearingType;
  }

  public Judge(): PartyService<ClientType> {
    if (!this._Judge) {
      const { client, path } = this.__base;
      this._Judge = new PartyService(client, path, "Judge");
    }

    return this._Judge;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
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
}

export class HearingCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Hearing,
  EditableHearing,
  QHearing,
  HearingId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qHearing, new QHearingId(name));
  }
}

export class HearingTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  HearingType,
  EditableHearingType,
  QHearingType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qHearingType);
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
}

export class HearingTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  HearingType,
  EditableHearingType,
  QHearingType,
  HearingTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qHearingType, new QHearingTypeId(name));
  }
}

export class CalendarEntryRecurService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CalendarEntryRecur,
  EditableCalendarEntryRecur,
  QCalendarEntryRecur
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _User?: CasePacerUserService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _PlaintiffParty?: PartyService<ClientType>;
  private _Appointment?: AppointmentService<ClientType>;
  private _AppointmentEventSubType?: AppointmentEventSubTypeService<ClientType>;
  private _ADR?: ADRService<ClientType>;
  private _Deposition?: DepositionService<ClientType>;
  private _Trial?: TrialService<ClientType>;
  private _Hearing?: HearingService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCalendarEntryRecur);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public User(): CasePacerUserService<ClientType> {
    if (!this._User) {
      const { client, path } = this.__base;
      this._User = new CasePacerUserService(client, path, "User");
    }

    return this._User;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public PlaintiffParty(): PartyService<ClientType> {
    if (!this._PlaintiffParty) {
      const { client, path } = this.__base;
      this._PlaintiffParty = new PartyService(client, path, "PlaintiffParty");
    }

    return this._PlaintiffParty;
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
  }

  public AppointmentEventSubType(): AppointmentEventSubTypeService<ClientType> {
    if (!this._AppointmentEventSubType) {
      const { client, path } = this.__base;
      this._AppointmentEventSubType = new AppointmentEventSubTypeService(
        client,
        path,
        "AppointmentEventSubType"
      );
    }

    return this._AppointmentEventSubType;
  }

  public ADR(): ADRService<ClientType> {
    if (!this._ADR) {
      const { client, path } = this.__base;
      this._ADR = new ADRService(client, path, "ADR");
    }

    return this._ADR;
  }

  public Deposition(): DepositionService<ClientType> {
    if (!this._Deposition) {
      const { client, path } = this.__base;
      this._Deposition = new DepositionService(client, path, "Deposition");
    }

    return this._Deposition;
  }

  public Trial(): TrialService<ClientType> {
    if (!this._Trial) {
      const { client, path } = this.__base;
      this._Trial = new TrialService(client, path, "Trial");
    }

    return this._Trial;
  }

  public Hearing(): HearingService<ClientType> {
    if (!this._Hearing) {
      const { client, path } = this.__base;
      this._Hearing = new HearingService(client, path, "Hearing");
    }

    return this._Hearing;
  }
}

export class CalendarEntryRecurCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CalendarEntryRecur,
  EditableCalendarEntryRecur,
  QCalendarEntryRecur,
  CalendarEntryRecurId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCalendarEntryRecur,
      new QCalendarEntryRecurId(name)
    );
  }
}

export class TrialService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Trial, EditableTrial, QTrial> {
  private _Litigation?: LitigationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrial);
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
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

  public TrialPleadings(): TrialPleadingCollectionService<ClientType>;
  public TrialPleadings(id: TrialPleadingId): TrialPleadingService<ClientType>;
  public TrialPleadings(id?: TrialPleadingId | undefined) {
    const fieldName = "TrialPleadings";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TrialPleadingCollectionService(client, path, fieldName)
      : new TrialPleadingService(
          client,
          path,
          new QTrialPleadingId(fieldName).buildUrl(id)
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
}

export class TrialCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Trial,
  EditableTrial,
  QTrial,
  TrialId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrial, new QTrialId(name));
  }
}

export class TrialExhibitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TrialExhibit,
  EditableTrialExhibit,
  QTrialExhibit
> {
  private _Firm?: FirmService<ClientType>;
  private _Trial?: TrialService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialExhibit);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Trial(): TrialService<ClientType> {
    if (!this._Trial) {
      const { client, path } = this.__base;
      this._Trial = new TrialService(client, path, "Trial");
    }

    return this._Trial;
  }

  public WitnessExhibitDocumentTrialExhibits(): WitnessExhibitDocumentTrialExhibitCollectionService<ClientType>;
  public WitnessExhibitDocumentTrialExhibits(
    id: WitnessExhibitDocumentTrialExhibitId
  ): WitnessExhibitDocumentTrialExhibitService<ClientType>;
  public WitnessExhibitDocumentTrialExhibits(
    id?: WitnessExhibitDocumentTrialExhibitId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentTrialExhibits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentTrialExhibitCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentTrialExhibitService(
          client,
          path,
          new QWitnessExhibitDocumentTrialExhibitId(fieldName).buildUrl(id)
        );
  }
}

export class TrialExhibitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TrialExhibit,
  EditableTrialExhibit,
  QTrialExhibit,
  TrialExhibitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialExhibit, new QTrialExhibitId(name));
  }
}

export class WitnessExhibitDocumentTrialExhibitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessExhibitDocumentTrialExhibit,
  EditableWitnessExhibitDocumentTrialExhibit,
  QWitnessExhibitDocumentTrialExhibit
> {
  private _TrialExhibit?: TrialExhibitService<ClientType>;
  private _WitnessExhibitDocument?: WitnessExhibitDocumentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessExhibitDocumentTrialExhibit);
  }

  public TrialExhibit(): TrialExhibitService<ClientType> {
    if (!this._TrialExhibit) {
      const { client, path } = this.__base;
      this._TrialExhibit = new TrialExhibitService(
        client,
        path,
        "TrialExhibit"
      );
    }

    return this._TrialExhibit;
  }

  public WitnessExhibitDocument(): WitnessExhibitDocumentService<ClientType> {
    if (!this._WitnessExhibitDocument) {
      const { client, path } = this.__base;
      this._WitnessExhibitDocument = new WitnessExhibitDocumentService(
        client,
        path,
        "WitnessExhibitDocument"
      );
    }

    return this._WitnessExhibitDocument;
  }
}

export class WitnessExhibitDocumentTrialExhibitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessExhibitDocumentTrialExhibit,
  EditableWitnessExhibitDocumentTrialExhibit,
  QWitnessExhibitDocumentTrialExhibit,
  WitnessExhibitDocumentTrialExhibitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessExhibitDocumentTrialExhibit,
      new QWitnessExhibitDocumentTrialExhibitId(name)
    );
  }
}

export class WitnessExhibitDocumentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessExhibitDocument,
  EditableWitnessExhibitDocument,
  QWitnessExhibitDocument
> {
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessExhibitDocument);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
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

  public WitnessExhibitDocumentStandardExhibits(): WitnessExhibitDocumentStandardExhibitCollectionService<ClientType>;
  public WitnessExhibitDocumentStandardExhibits(
    id: WitnessExhibitDocumentStandardExhibitId
  ): WitnessExhibitDocumentStandardExhibitService<ClientType>;
  public WitnessExhibitDocumentStandardExhibits(
    id?: WitnessExhibitDocumentStandardExhibitId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentStandardExhibits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentStandardExhibitCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentStandardExhibitService(
          client,
          path,
          new QWitnessExhibitDocumentStandardExhibitId(fieldName).buildUrl(id)
        );
  }

  public WitnessExhibitDocumentStandardWitnesses(): WitnessExhibitDocumentStandardWitnessCollectionService<ClientType>;
  public WitnessExhibitDocumentStandardWitnesses(
    id: WitnessExhibitDocumentStandardWitnessId
  ): WitnessExhibitDocumentStandardWitnessService<ClientType>;
  public WitnessExhibitDocumentStandardWitnesses(
    id?: WitnessExhibitDocumentStandardWitnessId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentStandardWitnesses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentStandardWitnessCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentStandardWitnessService(
          client,
          path,
          new QWitnessExhibitDocumentStandardWitnessId(fieldName).buildUrl(id)
        );
  }

  public WitnessExhibitDocumentTrialExhibits(): WitnessExhibitDocumentTrialExhibitCollectionService<ClientType>;
  public WitnessExhibitDocumentTrialExhibits(
    id: WitnessExhibitDocumentTrialExhibitId
  ): WitnessExhibitDocumentTrialExhibitService<ClientType>;
  public WitnessExhibitDocumentTrialExhibits(
    id?: WitnessExhibitDocumentTrialExhibitId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentTrialExhibits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentTrialExhibitCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentTrialExhibitService(
          client,
          path,
          new QWitnessExhibitDocumentTrialExhibitId(fieldName).buildUrl(id)
        );
  }
}

export class WitnessExhibitDocumentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessExhibitDocument,
  EditableWitnessExhibitDocument,
  QWitnessExhibitDocument,
  WitnessExhibitDocumentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessExhibitDocument,
      new QWitnessExhibitDocumentId(name)
    );
  }
}

export class WitnessExhibitDocumentPartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessExhibitDocumentParty,
  EditableWitnessExhibitDocumentParty,
  QWitnessExhibitDocumentParty
> {
  private _Party?: PartyService<ClientType>;
  private _WitnessExhibitDocument?: WitnessExhibitDocumentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessExhibitDocumentParty);
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }

  public WitnessExhibitDocument(): WitnessExhibitDocumentService<ClientType> {
    if (!this._WitnessExhibitDocument) {
      const { client, path } = this.__base;
      this._WitnessExhibitDocument = new WitnessExhibitDocumentService(
        client,
        path,
        "WitnessExhibitDocument"
      );
    }

    return this._WitnessExhibitDocument;
  }
}

export class WitnessExhibitDocumentPartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessExhibitDocumentParty,
  EditableWitnessExhibitDocumentParty,
  QWitnessExhibitDocumentParty,
  WitnessExhibitDocumentPartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessExhibitDocumentParty,
      new QWitnessExhibitDocumentPartyId(name)
    );
  }
}

export class WitnessExhibitDocumentStandardExhibitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessExhibitDocumentStandardExhibit,
  EditableWitnessExhibitDocumentStandardExhibit,
  QWitnessExhibitDocumentStandardExhibit
> {
  private _StandardExhibit?: StandardExhibitService<ClientType>;
  private _WitnessExhibitDocument?: WitnessExhibitDocumentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessExhibitDocumentStandardExhibit);
  }

  public StandardExhibit(): StandardExhibitService<ClientType> {
    if (!this._StandardExhibit) {
      const { client, path } = this.__base;
      this._StandardExhibit = new StandardExhibitService(
        client,
        path,
        "StandardExhibit"
      );
    }

    return this._StandardExhibit;
  }

  public WitnessExhibitDocument(): WitnessExhibitDocumentService<ClientType> {
    if (!this._WitnessExhibitDocument) {
      const { client, path } = this.__base;
      this._WitnessExhibitDocument = new WitnessExhibitDocumentService(
        client,
        path,
        "WitnessExhibitDocument"
      );
    }

    return this._WitnessExhibitDocument;
  }
}

export class WitnessExhibitDocumentStandardExhibitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessExhibitDocumentStandardExhibit,
  EditableWitnessExhibitDocumentStandardExhibit,
  QWitnessExhibitDocumentStandardExhibit,
  WitnessExhibitDocumentStandardExhibitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessExhibitDocumentStandardExhibit,
      new QWitnessExhibitDocumentStandardExhibitId(name)
    );
  }
}

export class StandardExhibitService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  StandardExhibit,
  EditableStandardExhibit,
  QStandardExhibit
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qStandardExhibit);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public WitnessExhibitDocumentStandardExhibits(): WitnessExhibitDocumentStandardExhibitCollectionService<ClientType>;
  public WitnessExhibitDocumentStandardExhibits(
    id: WitnessExhibitDocumentStandardExhibitId
  ): WitnessExhibitDocumentStandardExhibitService<ClientType>;
  public WitnessExhibitDocumentStandardExhibits(
    id?: WitnessExhibitDocumentStandardExhibitId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentStandardExhibits";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentStandardExhibitCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentStandardExhibitService(
          client,
          path,
          new QWitnessExhibitDocumentStandardExhibitId(fieldName).buildUrl(id)
        );
  }
}

export class StandardExhibitCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  StandardExhibit,
  EditableStandardExhibit,
  QStandardExhibit,
  StandardExhibitId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qStandardExhibit,
      new QStandardExhibitId(name)
    );
  }
}

export class WitnessExhibitDocumentStandardWitnessService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessExhibitDocumentStandardWitness,
  EditableWitnessExhibitDocumentStandardWitness,
  QWitnessExhibitDocumentStandardWitness
> {
  private _StandardWitness?: StandardWitnessService<ClientType>;
  private _WitnessExhibitDocument?: WitnessExhibitDocumentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessExhibitDocumentStandardWitness);
  }

  public StandardWitness(): StandardWitnessService<ClientType> {
    if (!this._StandardWitness) {
      const { client, path } = this.__base;
      this._StandardWitness = new StandardWitnessService(
        client,
        path,
        "StandardWitness"
      );
    }

    return this._StandardWitness;
  }

  public WitnessExhibitDocument(): WitnessExhibitDocumentService<ClientType> {
    if (!this._WitnessExhibitDocument) {
      const { client, path } = this.__base;
      this._WitnessExhibitDocument = new WitnessExhibitDocumentService(
        client,
        path,
        "WitnessExhibitDocument"
      );
    }

    return this._WitnessExhibitDocument;
  }
}

export class WitnessExhibitDocumentStandardWitnessCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessExhibitDocumentStandardWitness,
  EditableWitnessExhibitDocumentStandardWitness,
  QWitnessExhibitDocumentStandardWitness,
  WitnessExhibitDocumentStandardWitnessId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessExhibitDocumentStandardWitness,
      new QWitnessExhibitDocumentStandardWitnessId(name)
    );
  }
}

export class StandardWitnessService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  StandardWitness,
  EditableStandardWitness,
  QStandardWitness
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qStandardWitness);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public WitnessExhibitDocumentStandardWitnesses(): WitnessExhibitDocumentStandardWitnessCollectionService<ClientType>;
  public WitnessExhibitDocumentStandardWitnesses(
    id: WitnessExhibitDocumentStandardWitnessId
  ): WitnessExhibitDocumentStandardWitnessService<ClientType>;
  public WitnessExhibitDocumentStandardWitnesses(
    id?: WitnessExhibitDocumentStandardWitnessId | undefined
  ) {
    const fieldName = "WitnessExhibitDocumentStandardWitnesses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessExhibitDocumentStandardWitnessCollectionService(
          client,
          path,
          fieldName
        )
      : new WitnessExhibitDocumentStandardWitnessService(
          client,
          path,
          new QWitnessExhibitDocumentStandardWitnessId(fieldName).buildUrl(id)
        );
  }
}

export class StandardWitnessCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  StandardWitness,
  EditableStandardWitness,
  QStandardWitness,
  StandardWitnessId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qStandardWitness,
      new QStandardWitnessId(name)
    );
  }
}

export class TrialPleadingService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TrialPleading,
  EditableTrialPleading,
  QTrialPleading
> {
  private _Record?: RecordService<ClientType>;
  private _Trial?: TrialService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialPleading);
  }

  public Record(): RecordService<ClientType> {
    if (!this._Record) {
      const { client, path } = this.__base;
      this._Record = new RecordService(client, path, "Record");
    }

    return this._Record;
  }

  public Trial(): TrialService<ClientType> {
    if (!this._Trial) {
      const { client, path } = this.__base;
      this._Trial = new TrialService(client, path, "Trial");
    }

    return this._Trial;
  }
}

export class TrialPleadingCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TrialPleading,
  EditableTrialPleading,
  QTrialPleading,
  TrialPleadingId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialPleading, new QTrialPleadingId(name));
  }
}

export class SettlementDocumentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SettlementDocument,
  EditableSettlementDocument,
  QSettlementDocument
> {
  private _Party?: PartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSettlementDocument);
  }

  public Party(): PartyService<ClientType> {
    if (!this._Party) {
      const { client, path } = this.__base;
      this._Party = new PartyService(client, path, "Party");
    }

    return this._Party;
  }
}

export class SettlementDocumentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SettlementDocument,
  EditableSettlementDocument,
  QSettlementDocument,
  SettlementDocumentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSettlementDocument,
      new QSettlementDocumentId(name)
    );
  }
}

export class AttorneyFeeInterestService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AttorneyFeeInterest,
  EditableAttorneyFeeInterest,
  QAttorneyFeeInterest
> {
  private _AttorneyFeeInterestType?: AttorneyFeeInterestTypeService<ClientType>;
  private _LawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAttorneyFeeInterest);
  }

  public AttorneyFeeInterestType(): AttorneyFeeInterestTypeService<ClientType> {
    if (!this._AttorneyFeeInterestType) {
      const { client, path } = this.__base;
      this._AttorneyFeeInterestType = new AttorneyFeeInterestTypeService(
        client,
        path,
        "AttorneyFeeInterestType"
      );
    }

    return this._AttorneyFeeInterestType;
  }

  public LawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._LawsuitParty) {
      const { client, path } = this.__base;
      this._LawsuitParty = new LawsuitPartyService(
        client,
        path,
        "LawsuitParty"
      );
    }

    return this._LawsuitParty;
  }
}

export class AttorneyFeeInterestCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AttorneyFeeInterest,
  EditableAttorneyFeeInterest,
  QAttorneyFeeInterest,
  AttorneyFeeInterestId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAttorneyFeeInterest,
      new QAttorneyFeeInterestId(name)
    );
  }
}

export class AttorneyFeeInterestTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AttorneyFeeInterestType,
  EditableAttorneyFeeInterestType,
  QAttorneyFeeInterestType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAttorneyFeeInterestType);
  }

  public AttorneyFeeInterests(): AttorneyFeeInterestCollectionService<ClientType>;
  public AttorneyFeeInterests(
    id: AttorneyFeeInterestId
  ): AttorneyFeeInterestService<ClientType>;
  public AttorneyFeeInterests(id?: AttorneyFeeInterestId | undefined) {
    const fieldName = "AttorneyFeeInterests";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new AttorneyFeeInterestCollectionService(client, path, fieldName)
      : new AttorneyFeeInterestService(
          client,
          path,
          new QAttorneyFeeInterestId(fieldName).buildUrl(id)
        );
  }
}

export class AttorneyFeeInterestTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AttorneyFeeInterestType,
  EditableAttorneyFeeInterestType,
  QAttorneyFeeInterestType,
  AttorneyFeeInterestTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAttorneyFeeInterestType,
      new QAttorneyFeeInterestTypeId(name)
    );
  }
}

export class DefendantAttorneyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DefendantAttorney,
  EditableDefendantAttorney,
  QDefendantAttorney
> {
  private _Attorney?: LawsuitPartyService<ClientType>;
  private _Defendant?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDefendantAttorney);
  }

  public Attorney(): LawsuitPartyService<ClientType> {
    if (!this._Attorney) {
      const { client, path } = this.__base;
      this._Attorney = new LawsuitPartyService(client, path, "Attorney");
    }

    return this._Attorney;
  }

  public Defendant(): LawsuitPartyService<ClientType> {
    if (!this._Defendant) {
      const { client, path } = this.__base;
      this._Defendant = new LawsuitPartyService(client, path, "Defendant");
    }

    return this._Defendant;
  }
}

export class DefendantAttorneyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DefendantAttorney,
  EditableDefendantAttorney,
  QDefendantAttorney,
  DefendantAttorneyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDefendantAttorney,
      new QDefendantAttorneyId(name)
    );
  }
}

export class DefendantLawsuitPartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DefendantLawsuitParty,
  EditableDefendantLawsuitParty,
  QDefendantLawsuitParty
> {
  private _LawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDefendantLawsuitParty);
  }

  public LawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._LawsuitParty) {
      const { client, path } = this.__base;
      this._LawsuitParty = new LawsuitPartyService(
        client,
        path,
        "LawsuitParty"
      );
    }

    return this._LawsuitParty;
  }

  public DefendantLitigationAssns(): DefendantLitigationAssnCollectionService<ClientType>;
  public DefendantLitigationAssns(
    id: DefendantLitigationAssnId
  ): DefendantLitigationAssnService<ClientType>;
  public DefendantLitigationAssns(id?: DefendantLitigationAssnId | undefined) {
    const fieldName = "DefendantLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new DefendantLitigationAssnCollectionService(client, path, fieldName)
      : new DefendantLitigationAssnService(
          client,
          path,
          new QDefendantLitigationAssnId(fieldName).buildUrl(id)
        );
  }
}

export class DefendantLawsuitPartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DefendantLawsuitParty,
  EditableDefendantLawsuitParty,
  QDefendantLawsuitParty,
  DefendantLawsuitPartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDefendantLawsuitParty,
      new QDefendantLawsuitPartyId(name)
    );
  }
}

export class DefendantLitigationAssnService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DefendantLitigationAssn,
  EditableDefendantLitigationAssn,
  QDefendantLitigationAssn
> {
  private _DefendantLawsuitParty?: DefendantLawsuitPartyService<ClientType>;
  private _Litigation?: LitigationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDefendantLitigationAssn);
  }

  public DefendantLawsuitParty(): DefendantLawsuitPartyService<ClientType> {
    if (!this._DefendantLawsuitParty) {
      const { client, path } = this.__base;
      this._DefendantLawsuitParty = new DefendantLawsuitPartyService(
        client,
        path,
        "DefendantLawsuitParty"
      );
    }

    return this._DefendantLawsuitParty;
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }
}

export class DefendantLitigationAssnCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DefendantLitigationAssn,
  EditableDefendantLitigationAssn,
  QDefendantLitigationAssn,
  DefendantLitigationAssnId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDefendantLitigationAssn,
      new QDefendantLitigationAssnId(name)
    );
  }
}

export class InvestigatorService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Investigator,
  EditableInvestigator,
  QInvestigator
> {
  private _InvestigatorLawsuitParty?: LawsuitPartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInvestigator);
  }

  public InvestigatorLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._InvestigatorLawsuitParty) {
      const { client, path } = this.__base;
      this._InvestigatorLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "InvestigatorLawsuitParty"
      );
    }

    return this._InvestigatorLawsuitParty;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class InvestigatorCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Investigator,
  EditableInvestigator,
  QInvestigator,
  InvestigatorId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qInvestigator, new QInvestigatorId(name));
  }
}

export class MedicalEvaluationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  MedicalEvaluation,
  EditableMedicalEvaluation,
  QMedicalEvaluation
> {
  private _DoctorLawsuitParty?: LawsuitPartyService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;
  private _PrepByLawsuitParty?: LawsuitPartyService<ClientType>;
  private _RequestorLawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qMedicalEvaluation);
  }

  public DoctorLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._DoctorLawsuitParty) {
      const { client, path } = this.__base;
      this._DoctorLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "DoctorLawsuitParty"
      );
    }

    return this._DoctorLawsuitParty;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public PrepByLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._PrepByLawsuitParty) {
      const { client, path } = this.__base;
      this._PrepByLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "PrepByLawsuitParty"
      );
    }

    return this._PrepByLawsuitParty;
  }

  public RequestorLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._RequestorLawsuitParty) {
      const { client, path } = this.__base;
      this._RequestorLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "RequestorLawsuitParty"
      );
    }

    return this._RequestorLawsuitParty;
  }
}

export class MedicalEvaluationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  MedicalEvaluation,
  EditableMedicalEvaluation,
  QMedicalEvaluation,
  MedicalEvaluationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qMedicalEvaluation,
      new QMedicalEvaluationId(name)
    );
  }
}

export class PlaintiffLawsuitPartyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PlaintiffLawsuitParty,
  EditablePlaintiffLawsuitParty,
  QPlaintiffLawsuitParty
> {
  private _LawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPlaintiffLawsuitParty);
  }

  public LawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._LawsuitParty) {
      const { client, path } = this.__base;
      this._LawsuitParty = new LawsuitPartyService(
        client,
        path,
        "LawsuitParty"
      );
    }

    return this._LawsuitParty;
  }
}

export class PlaintiffLawsuitPartyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PlaintiffLawsuitParty,
  EditablePlaintiffLawsuitParty,
  QPlaintiffLawsuitParty,
  PlaintiffLawsuitPartyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qPlaintiffLawsuitParty,
      new QPlaintiffLawsuitPartyId(name)
    );
  }
}

export class PoliceReportService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PoliceReport,
  EditablePoliceReport,
  QPoliceReport
> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _PoliceDepartmentLawsuitParty?: LawsuitPartyService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPoliceReport);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public PoliceDepartmentLawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._PoliceDepartmentLawsuitParty) {
      const { client, path } = this.__base;
      this._PoliceDepartmentLawsuitParty = new LawsuitPartyService(
        client,
        path,
        "PoliceDepartmentLawsuitParty"
      );
    }

    return this._PoliceDepartmentLawsuitParty;
  }
}

export class PoliceReportCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PoliceReport,
  EditablePoliceReport,
  QPoliceReport,
  PoliceReportId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPoliceReport, new QPoliceReportId(name));
  }
}

export class WitnessService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Witness, EditableWitness, QWitness> {
  private _LawsuitParty?: LawsuitPartyService<ClientType>;
  private _WitnessType?: WitnessTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitness);
  }

  public LawsuitParty(): LawsuitPartyService<ClientType> {
    if (!this._LawsuitParty) {
      const { client, path } = this.__base;
      this._LawsuitParty = new LawsuitPartyService(
        client,
        path,
        "LawsuitParty"
      );
    }

    return this._LawsuitParty;
  }

  public WitnessType(): WitnessTypeService<ClientType> {
    if (!this._WitnessType) {
      const { client, path } = this.__base;
      this._WitnessType = new WitnessTypeService(client, path, "WitnessType");
    }

    return this._WitnessType;
  }

  public WitnessLitigationAssns(): WitnessLitigationAssnCollectionService<ClientType>;
  public WitnessLitigationAssns(
    id: WitnessLitigationAssnId
  ): WitnessLitigationAssnService<ClientType>;
  public WitnessLitigationAssns(id?: WitnessLitigationAssnId | undefined) {
    const fieldName = "WitnessLitigationAssns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessLitigationAssnCollectionService(client, path, fieldName)
      : new WitnessLitigationAssnService(
          client,
          path,
          new QWitnessLitigationAssnId(fieldName).buildUrl(id)
        );
  }
}

export class WitnessCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Witness,
  EditableWitness,
  QWitness,
  WitnessId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitness, new QWitnessId(name));
  }
}

export class WitnessTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessType,
  EditableWitnessType,
  QWitnessType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessType);
  }

  public Witnesses(): WitnessCollectionService<ClientType>;
  public Witnesses(id: WitnessId): WitnessService<ClientType>;
  public Witnesses(id?: WitnessId | undefined) {
    const fieldName = "Witnesses";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new WitnessCollectionService(client, path, fieldName)
      : new WitnessService(
          client,
          path,
          new QWitnessId(fieldName).buildUrl(id)
        );
  }
}

export class WitnessTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessType,
  EditableWitnessType,
  QWitnessType,
  WitnessTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessType, new QWitnessTypeId(name));
  }
}

export class WitnessLitigationAssnService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  WitnessLitigationAssn,
  EditableWitnessLitigationAssn,
  QWitnessLitigationAssn
> {
  private _Litigation?: LitigationService<ClientType>;
  private _Witness?: WitnessService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qWitnessLitigationAssn);
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }

  public Witness(): WitnessService<ClientType> {
    if (!this._Witness) {
      const { client, path } = this.__base;
      this._Witness = new WitnessService(client, path, "Witness");
    }

    return this._Witness;
  }
}

export class WitnessLitigationAssnCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  WitnessLitigationAssn,
  EditableWitnessLitigationAssn,
  QWitnessLitigationAssn,
  WitnessLitigationAssnId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qWitnessLitigationAssn,
      new QWitnessLitigationAssnId(name)
    );
  }
}

export class LawsuitTypeDocumentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitTypeDocument,
  EditableLawsuitTypeDocument,
  QLawsuitTypeDocument
> {
  private _DocumentTemplate?: DocumentTemplateService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;
  private _RoleTemplate?: RoleTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitTypeDocument);
  }

  public DocumentTemplate(): DocumentTemplateService<ClientType> {
    if (!this._DocumentTemplate) {
      const { client, path } = this.__base;
      this._DocumentTemplate = new DocumentTemplateService(
        client,
        path,
        "DocumentTemplate"
      );
    }

    return this._DocumentTemplate;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }

  public RoleTemplate(): RoleTemplateService<ClientType> {
    if (!this._RoleTemplate) {
      const { client, path } = this.__base;
      this._RoleTemplate = new RoleTemplateService(
        client,
        path,
        "RoleTemplate"
      );
    }

    return this._RoleTemplate;
  }
}

export class LawsuitTypeDocumentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitTypeDocument,
  EditableLawsuitTypeDocument,
  QLawsuitTypeDocument,
  LawsuitTypeDocumentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitTypeDocument,
      new QLawsuitTypeDocumentId(name)
    );
  }
}

export class LawsuitTypeTicklerService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitTypeTickler,
  EditableLawsuitTypeTickler,
  QLawsuitTypeTickler
> {
  private _LawsuitType?: LawsuitTypeService<ClientType>;
  private _RoleTemplate?: RoleTemplateService<ClientType>;
  private _TicklerTemplate?: TicklerTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitTypeTickler);
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }

  public RoleTemplate(): RoleTemplateService<ClientType> {
    if (!this._RoleTemplate) {
      const { client, path } = this.__base;
      this._RoleTemplate = new RoleTemplateService(
        client,
        path,
        "RoleTemplate"
      );
    }

    return this._RoleTemplate;
  }

  public TicklerTemplate(): TicklerTemplateService<ClientType> {
    if (!this._TicklerTemplate) {
      const { client, path } = this.__base;
      this._TicklerTemplate = new TicklerTemplateService(
        client,
        path,
        "TicklerTemplate"
      );
    }

    return this._TicklerTemplate;
  }
}

export class LawsuitTypeTicklerCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitTypeTickler,
  EditableLawsuitTypeTickler,
  QLawsuitTypeTickler,
  LawsuitTypeTicklerId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitTypeTickler,
      new QLawsuitTypeTicklerId(name)
    );
  }
}

export class TicklerCriteriaService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerCriteria,
  EditableTicklerCriteria,
  QTicklerCriteria
> {
  private _TicklerCriteriaAction?: TicklerCriteriaActionService<ClientType>;
  private _TicklerTemplate?: TicklerTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerCriteria);
  }

  public TicklerCriteriaAction(): TicklerCriteriaActionService<ClientType> {
    if (!this._TicklerCriteriaAction) {
      const { client, path } = this.__base;
      this._TicklerCriteriaAction = new TicklerCriteriaActionService(
        client,
        path,
        "TicklerCriteriaAction"
      );
    }

    return this._TicklerCriteriaAction;
  }

  public TicklerTemplate(): TicklerTemplateService<ClientType> {
    if (!this._TicklerTemplate) {
      const { client, path } = this.__base;
      this._TicklerTemplate = new TicklerTemplateService(
        client,
        path,
        "TicklerTemplate"
      );
    }

    return this._TicklerTemplate;
  }

  public TicklerCriteriaSets(): TicklerCriteriaSetCollectionService<ClientType>;
  public TicklerCriteriaSets(
    id: TicklerCriteriaSetId
  ): TicklerCriteriaSetService<ClientType>;
  public TicklerCriteriaSets(id?: TicklerCriteriaSetId | undefined) {
    const fieldName = "TicklerCriteriaSets";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCriteriaSetCollectionService(client, path, fieldName)
      : new TicklerCriteriaSetService(
          client,
          path,
          new QTicklerCriteriaSetId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerCriteriaCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerCriteria,
  EditableTicklerCriteria,
  QTicklerCriteria,
  TicklerCriteriaId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerCriteria,
      new QTicklerCriteriaId(name)
    );
  }
}

export class TicklerCriteriaSetService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerCriteriaSet,
  EditableTicklerCriteriaSet,
  QTicklerCriteriaSet
> {
  private _TicklerCriteria?: TicklerCriteriaService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerCriteriaSet);
  }

  public TicklerCriteria(): TicklerCriteriaService<ClientType> {
    if (!this._TicklerCriteria) {
      const { client, path } = this.__base;
      this._TicklerCriteria = new TicklerCriteriaService(
        client,
        path,
        "TicklerCriteria"
      );
    }

    return this._TicklerCriteria;
  }

  public TicklerCriteriaItems(): TicklerCriteriaItemCollectionService<ClientType>;
  public TicklerCriteriaItems(
    id: TicklerCriteriaItemId
  ): TicklerCriteriaItemService<ClientType>;
  public TicklerCriteriaItems(id?: TicklerCriteriaItemId | undefined) {
    const fieldName = "TicklerCriteriaItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCriteriaItemCollectionService(client, path, fieldName)
      : new TicklerCriteriaItemService(
          client,
          path,
          new QTicklerCriteriaItemId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerCriteriaSetCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerCriteriaSet,
  EditableTicklerCriteriaSet,
  QTicklerCriteriaSet,
  TicklerCriteriaSetId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerCriteriaSet,
      new QTicklerCriteriaSetId(name)
    );
  }
}

export class TicklerCriteriaItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerCriteriaItem,
  EditableTicklerCriteriaItem,
  QTicklerCriteriaItem
> {
  private _TicklerCriteriaOperator?: TicklerCriteriaOperatorService<ClientType>;
  private _TicklerCriteriaSet?: TicklerCriteriaSetService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerCriteriaItem);
  }

  public TicklerCriteriaOperator(): TicklerCriteriaOperatorService<ClientType> {
    if (!this._TicklerCriteriaOperator) {
      const { client, path } = this.__base;
      this._TicklerCriteriaOperator = new TicklerCriteriaOperatorService(
        client,
        path,
        "TicklerCriteriaOperator"
      );
    }

    return this._TicklerCriteriaOperator;
  }

  public TicklerCriteriaSet(): TicklerCriteriaSetService<ClientType> {
    if (!this._TicklerCriteriaSet) {
      const { client, path } = this.__base;
      this._TicklerCriteriaSet = new TicklerCriteriaSetService(
        client,
        path,
        "TicklerCriteriaSet"
      );
    }

    return this._TicklerCriteriaSet;
  }
}

export class TicklerCriteriaItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerCriteriaItem,
  EditableTicklerCriteriaItem,
  QTicklerCriteriaItem,
  TicklerCriteriaItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerCriteriaItem,
      new QTicklerCriteriaItemId(name)
    );
  }
}

export class TicklerCriteriaOperatorService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerCriteriaOperator,
  EditableTicklerCriteriaOperator,
  QTicklerCriteriaOperator
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerCriteriaOperator);
  }

  public TicklerCriteriaItems(): TicklerCriteriaItemCollectionService<ClientType>;
  public TicklerCriteriaItems(
    id: TicklerCriteriaItemId
  ): TicklerCriteriaItemService<ClientType>;
  public TicklerCriteriaItems(id?: TicklerCriteriaItemId | undefined) {
    const fieldName = "TicklerCriteriaItems";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCriteriaItemCollectionService(client, path, fieldName)
      : new TicklerCriteriaItemService(
          client,
          path,
          new QTicklerCriteriaItemId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerCriteriaOperatorCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerCriteriaOperator,
  EditableTicklerCriteriaOperator,
  QTicklerCriteriaOperator,
  TicklerCriteriaOperatorId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerCriteriaOperator,
      new QTicklerCriteriaOperatorId(name)
    );
  }
}

export class TicklerCriteriaActionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerCriteriaAction,
  EditableTicklerCriteriaAction,
  QTicklerCriteriaAction
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerCriteriaAction);
  }

  public TicklerCriterias(): TicklerCriteriaCollectionService<ClientType>;
  public TicklerCriterias(
    id: TicklerCriteriaId
  ): TicklerCriteriaService<ClientType>;
  public TicklerCriterias(id?: TicklerCriteriaId | undefined) {
    const fieldName = "TicklerCriterias";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerCriteriaCollectionService(client, path, fieldName)
      : new TicklerCriteriaService(
          client,
          path,
          new QTicklerCriteriaId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerCriteriaActionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerCriteriaAction,
  EditableTicklerCriteriaAction,
  QTicklerCriteriaAction,
  TicklerCriteriaActionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerCriteriaAction,
      new QTicklerCriteriaActionId(name)
    );
  }
}

export class TicklerTemplateActionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerTemplateAction,
  EditableTicklerTemplateAction,
  QTicklerTemplateAction
> {
  private _ParentTickler?: TicklerTemplateService<ClientType>;
  private _ChildTickler?: TicklerTemplateService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerTemplateAction);
  }

  public ParentTickler(): TicklerTemplateService<ClientType> {
    if (!this._ParentTickler) {
      const { client, path } = this.__base;
      this._ParentTickler = new TicklerTemplateService(
        client,
        path,
        "ParentTickler"
      );
    }

    return this._ParentTickler;
  }

  public ChildTickler(): TicklerTemplateService<ClientType> {
    if (!this._ChildTickler) {
      const { client, path } = this.__base;
      this._ChildTickler = new TicklerTemplateService(
        client,
        path,
        "ChildTickler"
      );
    }

    return this._ChildTickler;
  }
}

export class TicklerTemplateActionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerTemplateAction,
  EditableTicklerTemplateAction,
  QTicklerTemplateAction,
  TicklerTemplateActionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerTemplateAction,
      new QTicklerTemplateActionId(name)
    );
  }
}

export class TicklerAnswerActionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerAnswerAction,
  EditableTicklerAnswerAction,
  QTicklerAnswerAction
> {
  private _TicklerActionType?: TicklerActionTypeService<ClientType>;
  private _TicklerAnswer?: TicklerAnswerService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerAnswerAction);
  }

  public TicklerActionType(): TicklerActionTypeService<ClientType> {
    if (!this._TicklerActionType) {
      const { client, path } = this.__base;
      this._TicklerActionType = new TicklerActionTypeService(
        client,
        path,
        "TicklerActionType"
      );
    }

    return this._TicklerActionType;
  }

  public TicklerAnswer(): TicklerAnswerService<ClientType> {
    if (!this._TicklerAnswer) {
      const { client, path } = this.__base;
      this._TicklerAnswer = new TicklerAnswerService(
        client,
        path,
        "TicklerAnswer"
      );
    }

    return this._TicklerAnswer;
  }
}

export class TicklerAnswerActionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerAnswerAction,
  EditableTicklerAnswerAction,
  QTicklerAnswerAction,
  TicklerAnswerActionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerAnswerAction,
      new QTicklerAnswerActionId(name)
    );
  }
}

export class TicklerActionTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TicklerActionType,
  EditableTicklerActionType,
  QTicklerActionType
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTicklerActionType);
  }

  public TicklerAnswerActions(): TicklerAnswerActionCollectionService<ClientType>;
  public TicklerAnswerActions(
    id: TicklerAnswerActionId
  ): TicklerAnswerActionService<ClientType>;
  public TicklerAnswerActions(id?: TicklerAnswerActionId | undefined) {
    const fieldName = "TicklerAnswerActions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new TicklerAnswerActionCollectionService(client, path, fieldName)
      : new TicklerAnswerActionService(
          client,
          path,
          new QTicklerAnswerActionId(fieldName).buildUrl(id)
        );
  }
}

export class TicklerActionTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TicklerActionType,
  EditableTicklerActionType,
  QTicklerActionType,
  TicklerActionTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qTicklerActionType,
      new QTicklerActionTypeId(name)
    );
  }
}

export class DepositionLitigationAssnService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  DepositionLitigationAssn,
  EditableDepositionLitigationAssn,
  QDepositionLitigationAssn
> {
  private _Deposition?: DepositionService<ClientType>;
  private _Litigation?: LitigationService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qDepositionLitigationAssn);
  }

  public Deposition(): DepositionService<ClientType> {
    if (!this._Deposition) {
      const { client, path } = this.__base;
      this._Deposition = new DepositionService(client, path, "Deposition");
    }

    return this._Deposition;
  }

  public Litigation(): LitigationService<ClientType> {
    if (!this._Litigation) {
      const { client, path } = this.__base;
      this._Litigation = new LitigationService(client, path, "Litigation");
    }

    return this._Litigation;
  }
}

export class DepositionLitigationAssnCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  DepositionLitigationAssn,
  EditableDepositionLitigationAssn,
  QDepositionLitigationAssn,
  DepositionLitigationAssnId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qDepositionLitigationAssn,
      new QDepositionLitigationAssnId(name)
    );
  }
}

export class AppointmentCustomTypeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentCustomType,
  EditableAppointmentCustomType,
  QAppointmentCustomType
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentCustomType);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
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
}

export class AppointmentCustomTypeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentCustomType,
  EditableAppointmentCustomType,
  QAppointmentCustomType,
  AppointmentCustomTypeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentCustomType,
      new QAppointmentCustomTypeId(name)
    );
  }
}

export class AppointmentHistoryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentHistory,
  EditableAppointmentHistory,
  QAppointmentHistory
> {
  private _Appointment?: AppointmentService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentHistory);
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }
}

export class AppointmentHistoryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentHistory,
  EditableAppointmentHistory,
  QAppointmentHistory,
  AppointmentHistoryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentHistory,
      new QAppointmentHistoryId(name)
    );
  }
}

export class AppointmentIntegrationService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AppointmentIntegration,
  EditableAppointmentIntegration,
  QAppointmentIntegration
> {
  private _Appointment?: AppointmentService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAppointmentIntegration);
  }

  public Appointment(): AppointmentService<ClientType> {
    if (!this._Appointment) {
      const { client, path } = this.__base;
      this._Appointment = new AppointmentService(client, path, "Appointment");
    }

    return this._Appointment;
  }
}

export class AppointmentIntegrationCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AppointmentIntegration,
  EditableAppointmentIntegration,
  QAppointmentIntegration,
  AppointmentIntegrationId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAppointmentIntegration,
      new QAppointmentIntegrationId(name)
    );
  }
}

export class MailMergeService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  MailMerge,
  EditableMailMerge,
  QMailMerge
> {
  private _LawsuitPartyType?: LawsuitPartyTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qMailMerge);
  }

  public LawsuitPartyType(): LawsuitPartyTypeService<ClientType> {
    if (!this._LawsuitPartyType) {
      const { client, path } = this.__base;
      this._LawsuitPartyType = new LawsuitPartyTypeService(
        client,
        path,
        "LawsuitPartyType"
      );
    }

    return this._LawsuitPartyType;
  }
}

export class MailMergeCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  MailMerge,
  EditableMailMerge,
  QMailMerge,
  MailMergeId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qMailMerge, new QMailMergeId(name));
  }
}

export class EmailService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Email, EditableEmail, QEmail> {
  private _Lawsuit?: LawsuitService<ClientType>;
  private _Firm?: FirmService<ClientType>;
  private _RecordFile?: RecordFileService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEmail);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public RecordFile(): RecordFileService<ClientType> {
    if (!this._RecordFile) {
      const { client, path } = this.__base;
      this._RecordFile = new RecordFileService(client, path, "RecordFile");
    }

    return this._RecordFile;
  }
}

export class EmailCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Email,
  EditableEmail,
  QEmail,
  EmailId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEmail, new QEmailId(name));
  }
}

export class RecordFileRelationshipService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  RecordFileRelationship,
  EditableRecordFileRelationship,
  QRecordFileRelationship
> {
  private _RecordFile?: RecordFileService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qRecordFileRelationship);
  }

  public RecordFile(): RecordFileService<ClientType> {
    if (!this._RecordFile) {
      const { client, path } = this.__base;
      this._RecordFile = new RecordFileService(client, path, "RecordFile");
    }

    return this._RecordFile;
  }
}

export class RecordFileRelationshipCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  RecordFileRelationship,
  EditableRecordFileRelationship,
  QRecordFileRelationship,
  RecordFileRelationshipId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qRecordFileRelationship,
      new QRecordFileRelationshipId(name)
    );
  }
}

export class AccountingSyncGLService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AccountingSyncGL,
  EditableAccountingSyncGL,
  QAccountingSyncGL
> {
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAccountingSyncGL);
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }
}

export class AccountingSyncGLCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AccountingSyncGL,
  EditableAccountingSyncGL,
  QAccountingSyncGL,
  AccountingSyncGLId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAccountingSyncGL,
      new QAccountingSyncGLId(name)
    );
  }
}

export class LawsuitTypeClientFormService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitTypeClientForm,
  EditableLawsuitTypeClientForm,
  QLawsuitTypeClientForm
> {
  private _ClientForm?: ClientFormService<ClientType>;
  private _LawsuitType?: LawsuitTypeService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitTypeClientForm);
  }

  public ClientForm(): ClientFormService<ClientType> {
    if (!this._ClientForm) {
      const { client, path } = this.__base;
      this._ClientForm = new ClientFormService(client, path, "ClientForm");
    }

    return this._ClientForm;
  }

  public LawsuitType(): LawsuitTypeService<ClientType> {
    if (!this._LawsuitType) {
      const { client, path } = this.__base;
      this._LawsuitType = new LawsuitTypeService(client, path, "LawsuitType");
    }

    return this._LawsuitType;
  }
}

export class LawsuitTypeClientFormCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitTypeClientForm,
  EditableLawsuitTypeClientForm,
  QLawsuitTypeClientForm,
  LawsuitTypeClientFormId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitTypeClientForm,
      new QLawsuitTypeClientFormId(name)
    );
  }
}

export class ClientFormQuestionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ClientFormQuestion,
  EditableClientFormQuestion,
  QClientFormQuestion
> {
  private _ClientFormComponent?: ClientFormComponentService<ClientType>;
  private _ClientFormScreen?: ClientFormScreenService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientFormQuestion);
  }

  public ClientFormComponent(): ClientFormComponentService<ClientType> {
    if (!this._ClientFormComponent) {
      const { client, path } = this.__base;
      this._ClientFormComponent = new ClientFormComponentService(
        client,
        path,
        "ClientFormComponent"
      );
    }

    return this._ClientFormComponent;
  }

  public ClientFormScreen(): ClientFormScreenService<ClientType> {
    if (!this._ClientFormScreen) {
      const { client, path } = this.__base;
      this._ClientFormScreen = new ClientFormScreenService(
        client,
        path,
        "ClientFormScreen"
      );
    }

    return this._ClientFormScreen;
  }
}

export class ClientFormQuestionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ClientFormQuestion,
  EditableClientFormQuestion,
  QClientFormQuestion,
  ClientFormQuestionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qClientFormQuestion,
      new QClientFormQuestionId(name)
    );
  }
}

export class ClientFormComponentService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ClientFormComponent,
  EditableClientFormComponent,
  QClientFormComponent
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientFormComponent);
  }

  public ClientFormQuestions(): ClientFormQuestionCollectionService<ClientType>;
  public ClientFormQuestions(
    id: ClientFormQuestionId
  ): ClientFormQuestionService<ClientType>;
  public ClientFormQuestions(id?: ClientFormQuestionId | undefined) {
    const fieldName = "ClientFormQuestions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ClientFormQuestionCollectionService(client, path, fieldName)
      : new ClientFormQuestionService(
          client,
          path,
          new QClientFormQuestionId(fieldName).buildUrl(id)
        );
  }
}

export class ClientFormComponentCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ClientFormComponent,
  EditableClientFormComponent,
  QClientFormComponent,
  ClientFormComponentId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qClientFormComponent,
      new QClientFormComponentId(name)
    );
  }
}

export class ClientFormScreenService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ClientFormScreen,
  EditableClientFormScreen,
  QClientFormScreen
> {
  private _ClientForm?: ClientFormService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientFormScreen);
  }

  public ClientForm(): ClientFormService<ClientType> {
    if (!this._ClientForm) {
      const { client, path } = this.__base;
      this._ClientForm = new ClientFormService(client, path, "ClientForm");
    }

    return this._ClientForm;
  }

  public ClientFormQuestions(): ClientFormQuestionCollectionService<ClientType>;
  public ClientFormQuestions(
    id: ClientFormQuestionId
  ): ClientFormQuestionService<ClientType>;
  public ClientFormQuestions(id?: ClientFormQuestionId | undefined) {
    const fieldName = "ClientFormQuestions";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new ClientFormQuestionCollectionService(client, path, fieldName)
      : new ClientFormQuestionService(
          client,
          path,
          new QClientFormQuestionId(fieldName).buildUrl(id)
        );
  }
}

export class ClientFormScreenCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ClientFormScreen,
  EditableClientFormScreen,
  QClientFormScreen,
  ClientFormScreenId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qClientFormScreen,
      new QClientFormScreenId(name)
    );
  }
}

export class ClientFormStatusService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ClientFormStatus,
  EditableClientFormStatus,
  QClientFormStatus
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qClientFormStatus);
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
}

export class ClientFormStatusCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ClientFormStatus,
  EditableClientFormStatus,
  QClientFormStatus,
  ClientFormStatusId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qClientFormStatus,
      new QClientFormStatusId(name)
    );
  }
}

export class IntakeClientFirmService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntakeClientFirm,
  EditableIntakeClientFirm,
  QIntakeClientFirm
> {
  private _Firm?: FirmService<ClientType>;
  private _IntakeClientLogin?: IntakeClientLoginService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntakeClientFirm);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public IntakeClientLogin(): IntakeClientLoginService<ClientType> {
    if (!this._IntakeClientLogin) {
      const { client, path } = this.__base;
      this._IntakeClientLogin = new IntakeClientLoginService(
        client,
        path,
        "IntakeClientLogin"
      );
    }

    return this._IntakeClientLogin;
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
}

export class IntakeClientFirmCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntakeClientFirm,
  EditableIntakeClientFirm,
  QIntakeClientFirm,
  IntakeClientFirmId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntakeClientFirm,
      new QIntakeClientFirmId(name)
    );
  }
}

export class CPDirectPushTokenService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CPDirectPushToken,
  EditableCPDirectPushToken,
  QCPDirectPushToken
> {
  private _IntakeClientLogin?: IntakeClientLoginService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCPDirectPushToken);
  }

  public IntakeClientLogin(): IntakeClientLoginService<ClientType> {
    if (!this._IntakeClientLogin) {
      const { client, path } = this.__base;
      this._IntakeClientLogin = new IntakeClientLoginService(
        client,
        path,
        "IntakeClientLogin"
      );
    }

    return this._IntakeClientLogin;
  }
}

export class CPDirectPushTokenCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CPDirectPushToken,
  EditableCPDirectPushToken,
  QCPDirectPushToken,
  CPDirectPushTokenId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCPDirectPushToken,
      new QCPDirectPushTokenId(name)
    );
  }
}

export class IntakeClientSessionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntakeClientSession,
  EditableIntakeClientSession,
  QIntakeClientSession
> {
  private _IntakeClientLogin?: IntakeClientLoginService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntakeClientSession);
  }

  public IntakeClientLogin(): IntakeClientLoginService<ClientType> {
    if (!this._IntakeClientLogin) {
      const { client, path } = this.__base;
      this._IntakeClientLogin = new IntakeClientLoginService(
        client,
        path,
        "IntakeClientLogin"
      );
    }

    return this._IntakeClientLogin;
  }
}

export class IntakeClientSessionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntakeClientSession,
  EditableIntakeClientSession,
  QIntakeClientSession,
  IntakeClientSessionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntakeClientSession,
      new QIntakeClientSessionId(name)
    );
  }
}

export class LawsuitClientFormService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitClientForm,
  EditableLawsuitClientForm,
  QLawsuitClientForm
> {
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitClientForm);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class LawsuitClientFormCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitClientForm,
  EditableLawsuitClientForm,
  QLawsuitClientForm,
  LawsuitClientFormId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitClientForm,
      new QLawsuitClientFormId(name)
    );
  }
}

export class LawsuitCompanionGroupService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitCompanionGroup,
  EditableLawsuitCompanionGroup,
  QLawsuitCompanionGroup
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitCompanionGroup);
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
}

export class LawsuitCompanionGroupCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitCompanionGroup,
  EditableLawsuitCompanionGroup,
  QLawsuitCompanionGroup,
  LawsuitCompanionGroupId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitCompanionGroup,
      new QLawsuitCompanionGroupId(name)
    );
  }
}

export class EvidenceService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  Evidence,
  EditableEvidence,
  QEvidence
> {
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEvidence);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class EvidenceCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Evidence,
  EditableEvidence,
  QEvidence,
  EvidenceId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEvidence, new QEvidenceId(name));
  }
}

export class LawsuitAbbrService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitAbbr,
  EditableLawsuitAbbr,
  QLawsuitAbbr
> {
  private _Firm?: FirmService<ClientType>;
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitAbbr);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class LawsuitAbbrCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitAbbr,
  EditableLawsuitAbbr,
  QLawsuitAbbr,
  LawsuitAbbrId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitAbbr, new QLawsuitAbbrId(name));
  }
}

export class LawsuitRecordRequestService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  LawsuitRecordRequest,
  EditableLawsuitRecordRequest,
  QLawsuitRecordRequest
> {
  private _Lawsuit?: LawsuitService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qLawsuitRecordRequest);
  }

  public Lawsuit(): LawsuitService<ClientType> {
    if (!this._Lawsuit) {
      const { client, path } = this.__base;
      this._Lawsuit = new LawsuitService(client, path, "Lawsuit");
    }

    return this._Lawsuit;
  }
}

export class LawsuitRecordRequestCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  LawsuitRecordRequest,
  EditableLawsuitRecordRequest,
  QLawsuitRecordRequest,
  LawsuitRecordRequestId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qLawsuitRecordRequest,
      new QLawsuitRecordRequestId(name)
    );
  }
}

export class CasePacerUserSessionService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CasePacerUserSession,
  EditableCasePacerUserSession,
  QCasePacerUserSession
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCasePacerUserSession);
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }
}

export class CasePacerUserSessionCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CasePacerUserSession,
  EditableCasePacerUserSession,
  QCasePacerUserSession,
  CasePacerUserSessionId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCasePacerUserSession,
      new QCasePacerUserSessionId(name)
    );
  }
}

export class CasePacerUserIntegrationTokenService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  CasePacerUserIntegrationToken,
  EditableCasePacerUserIntegrationToken,
  QCasePacerUserIntegrationToken
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qCasePacerUserIntegrationToken);
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }
}

export class CasePacerUserIntegrationTokenCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  CasePacerUserIntegrationToken,
  EditableCasePacerUserIntegrationToken,
  QCasePacerUserIntegrationToken,
  CasePacerUserIntegrationTokenId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qCasePacerUserIntegrationToken,
      new QCasePacerUserIntegrationTokenId(name)
    );
  }
}

export class EventHelpService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  EventHelp,
  EditableEventHelp,
  QEventHelp
> {
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEventHelp);
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }
}

export class EventHelpCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  EventHelp,
  EditableEventHelp,
  QEventHelp,
  EventHelpId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qEventHelp, new QEventHelpId(name));
  }
}

export class SecurityUserGroupAssignService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SecurityUserGroupAssign,
  EditableSecurityUserGroupAssign,
  QSecurityUserGroupAssign
> {
  private _SecurityUserGroup?: SecurityUserGroupService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityUserGroupAssign);
  }

  public SecurityUserGroup(): SecurityUserGroupService<ClientType> {
    if (!this._SecurityUserGroup) {
      const { client, path } = this.__base;
      this._SecurityUserGroup = new SecurityUserGroupService(
        client,
        path,
        "SecurityUserGroup"
      );
    }

    return this._SecurityUserGroup;
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }
}

export class SecurityUserGroupAssignCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SecurityUserGroupAssign,
  EditableSecurityUserGroupAssign,
  QSecurityUserGroupAssign,
  SecurityUserGroupAssignId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSecurityUserGroupAssign,
      new QSecurityUserGroupAssignId(name)
    );
  }
}

export class SecurityUserGroupService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SecurityUserGroup,
  EditableSecurityUserGroup,
  QSecurityUserGroup
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityUserGroup);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public SecurityUserGroupAssigns(): SecurityUserGroupAssignCollectionService<ClientType>;
  public SecurityUserGroupAssigns(
    id: SecurityUserGroupAssignId
  ): SecurityUserGroupAssignService<ClientType>;
  public SecurityUserGroupAssigns(id?: SecurityUserGroupAssignId | undefined) {
    const fieldName = "SecurityUserGroupAssigns";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityUserGroupAssignCollectionService(client, path, fieldName)
      : new SecurityUserGroupAssignService(
          client,
          path,
          new QSecurityUserGroupAssignId(fieldName).buildUrl(id)
        );
  }
}

export class SecurityUserGroupCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SecurityUserGroup,
  EditableSecurityUserGroup,
  QSecurityUserGroup,
  SecurityUserGroupId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSecurityUserGroup,
      new QSecurityUserGroupId(name)
    );
  }
}

export class SecurityRuleSummaryService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SecurityRuleSummary,
  EditableSecurityRuleSummary,
  QSecurityRuleSummary
> {
  private _Firm?: FirmService<ClientType>;
  private _CasePacerUser?: CasePacerUserService<ClientType>;
  private _SecurityPath?: SecurityPathService<ClientType>;
  private _ReadAccessLevel?: AccessLevelService<ClientType>;
  private _CreateAccessLevel?: AccessLevelService<ClientType>;
  private _EditAccessLevel?: AccessLevelService<ClientType>;
  private _DeleteAccessLevel?: AccessLevelService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityRuleSummary);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public CasePacerUser(): CasePacerUserService<ClientType> {
    if (!this._CasePacerUser) {
      const { client, path } = this.__base;
      this._CasePacerUser = new CasePacerUserService(
        client,
        path,
        "CasePacerUser"
      );
    }

    return this._CasePacerUser;
  }

  public SecurityPath(): SecurityPathService<ClientType> {
    if (!this._SecurityPath) {
      const { client, path } = this.__base;
      this._SecurityPath = new SecurityPathService(
        client,
        path,
        "SecurityPath"
      );
    }

    return this._SecurityPath;
  }

  public ReadAccessLevel(): AccessLevelService<ClientType> {
    if (!this._ReadAccessLevel) {
      const { client, path } = this.__base;
      this._ReadAccessLevel = new AccessLevelService(
        client,
        path,
        "ReadAccessLevel"
      );
    }

    return this._ReadAccessLevel;
  }

  public CreateAccessLevel(): AccessLevelService<ClientType> {
    if (!this._CreateAccessLevel) {
      const { client, path } = this.__base;
      this._CreateAccessLevel = new AccessLevelService(
        client,
        path,
        "CreateAccessLevel"
      );
    }

    return this._CreateAccessLevel;
  }

  public EditAccessLevel(): AccessLevelService<ClientType> {
    if (!this._EditAccessLevel) {
      const { client, path } = this.__base;
      this._EditAccessLevel = new AccessLevelService(
        client,
        path,
        "EditAccessLevel"
      );
    }

    return this._EditAccessLevel;
  }

  public DeleteAccessLevel(): AccessLevelService<ClientType> {
    if (!this._DeleteAccessLevel) {
      const { client, path } = this.__base;
      this._DeleteAccessLevel = new AccessLevelService(
        client,
        path,
        "DeleteAccessLevel"
      );
    }

    return this._DeleteAccessLevel;
  }
}

export class SecurityRuleSummaryCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SecurityRuleSummary,
  EditableSecurityRuleSummary,
  QSecurityRuleSummary,
  SecurityRuleSummaryId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qSecurityRuleSummary,
      new QSecurityRuleSummaryId(name)
    );
  }
}

export class SecurityPathService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SecurityPath,
  EditableSecurityPath,
  QSecurityPath
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityPath);
  }

  public SecurityRules(): SecurityRuleCollectionService<ClientType>;
  public SecurityRules(id: SecurityRuleId): SecurityRuleService<ClientType>;
  public SecurityRules(id?: SecurityRuleId | undefined) {
    const fieldName = "SecurityRules";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleCollectionService(client, path, fieldName)
      : new SecurityRuleService(
          client,
          path,
          new QSecurityRuleId(fieldName).buildUrl(id)
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
}

export class SecurityPathCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SecurityPath,
  EditableSecurityPath,
  QSecurityPath,
  SecurityPathId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityPath, new QSecurityPathId(name));
  }
}

export class SecurityRuleService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SecurityRule,
  EditableSecurityRule,
  QSecurityRule
> {
  private _CreateAccessLevel?: AccessLevelService<ClientType>;
  private _DeleteAccessLevel?: AccessLevelService<ClientType>;
  private _EditAccessLevel?: AccessLevelService<ClientType>;
  private _ReadAccessLevel?: AccessLevelService<ClientType>;
  private _SecurityPath?: SecurityPathService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityRule);
  }

  public CreateAccessLevel(): AccessLevelService<ClientType> {
    if (!this._CreateAccessLevel) {
      const { client, path } = this.__base;
      this._CreateAccessLevel = new AccessLevelService(
        client,
        path,
        "CreateAccessLevel"
      );
    }

    return this._CreateAccessLevel;
  }

  public DeleteAccessLevel(): AccessLevelService<ClientType> {
    if (!this._DeleteAccessLevel) {
      const { client, path } = this.__base;
      this._DeleteAccessLevel = new AccessLevelService(
        client,
        path,
        "DeleteAccessLevel"
      );
    }

    return this._DeleteAccessLevel;
  }

  public EditAccessLevel(): AccessLevelService<ClientType> {
    if (!this._EditAccessLevel) {
      const { client, path } = this.__base;
      this._EditAccessLevel = new AccessLevelService(
        client,
        path,
        "EditAccessLevel"
      );
    }

    return this._EditAccessLevel;
  }

  public ReadAccessLevel(): AccessLevelService<ClientType> {
    if (!this._ReadAccessLevel) {
      const { client, path } = this.__base;
      this._ReadAccessLevel = new AccessLevelService(
        client,
        path,
        "ReadAccessLevel"
      );
    }

    return this._ReadAccessLevel;
  }

  public SecurityPath(): SecurityPathService<ClientType> {
    if (!this._SecurityPath) {
      const { client, path } = this.__base;
      this._SecurityPath = new SecurityPathService(
        client,
        path,
        "SecurityPath"
      );
    }

    return this._SecurityPath;
  }
}

export class SecurityRuleCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  SecurityRule,
  EditableSecurityRule,
  QSecurityRule,
  SecurityRuleId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSecurityRule, new QSecurityRuleId(name));
  }
}

export class AccessLevelService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AccessLevel,
  EditableAccessLevel,
  QAccessLevel
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAccessLevel);
  }

  public CreateSecurityRules(): SecurityRuleCollectionService<ClientType>;
  public CreateSecurityRules(
    id: SecurityRuleId
  ): SecurityRuleService<ClientType>;
  public CreateSecurityRules(id?: SecurityRuleId | undefined) {
    const fieldName = "CreateSecurityRules";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleCollectionService(client, path, fieldName)
      : new SecurityRuleService(
          client,
          path,
          new QSecurityRuleId(fieldName).buildUrl(id)
        );
  }

  public DeleteSecurityRules(): SecurityRuleCollectionService<ClientType>;
  public DeleteSecurityRules(
    id: SecurityRuleId
  ): SecurityRuleService<ClientType>;
  public DeleteSecurityRules(id?: SecurityRuleId | undefined) {
    const fieldName = "DeleteSecurityRules";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleCollectionService(client, path, fieldName)
      : new SecurityRuleService(
          client,
          path,
          new QSecurityRuleId(fieldName).buildUrl(id)
        );
  }

  public EditSecurityRules(): SecurityRuleCollectionService<ClientType>;
  public EditSecurityRules(id: SecurityRuleId): SecurityRuleService<ClientType>;
  public EditSecurityRules(id?: SecurityRuleId | undefined) {
    const fieldName = "EditSecurityRules";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleCollectionService(client, path, fieldName)
      : new SecurityRuleService(
          client,
          path,
          new QSecurityRuleId(fieldName).buildUrl(id)
        );
  }

  public ReadSecurityRules(): SecurityRuleCollectionService<ClientType>;
  public ReadSecurityRules(id: SecurityRuleId): SecurityRuleService<ClientType>;
  public ReadSecurityRules(id?: SecurityRuleId | undefined) {
    const fieldName = "ReadSecurityRules";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleCollectionService(client, path, fieldName)
      : new SecurityRuleService(
          client,
          path,
          new QSecurityRuleId(fieldName).buildUrl(id)
        );
  }

  public ReadSecurityRuleSummaries(): SecurityRuleSummaryCollectionService<ClientType>;
  public ReadSecurityRuleSummaries(
    id: SecurityRuleSummaryId
  ): SecurityRuleSummaryService<ClientType>;
  public ReadSecurityRuleSummaries(id?: SecurityRuleSummaryId | undefined) {
    const fieldName = "ReadSecurityRuleSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleSummaryCollectionService(client, path, fieldName)
      : new SecurityRuleSummaryService(
          client,
          path,
          new QSecurityRuleSummaryId(fieldName).buildUrl(id)
        );
  }

  public CreateSecurityRuleSummaries(): SecurityRuleSummaryCollectionService<ClientType>;
  public CreateSecurityRuleSummaries(
    id: SecurityRuleSummaryId
  ): SecurityRuleSummaryService<ClientType>;
  public CreateSecurityRuleSummaries(id?: SecurityRuleSummaryId | undefined) {
    const fieldName = "CreateSecurityRuleSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleSummaryCollectionService(client, path, fieldName)
      : new SecurityRuleSummaryService(
          client,
          path,
          new QSecurityRuleSummaryId(fieldName).buildUrl(id)
        );
  }

  public EditSecurityRuleSummaries(): SecurityRuleSummaryCollectionService<ClientType>;
  public EditSecurityRuleSummaries(
    id: SecurityRuleSummaryId
  ): SecurityRuleSummaryService<ClientType>;
  public EditSecurityRuleSummaries(id?: SecurityRuleSummaryId | undefined) {
    const fieldName = "EditSecurityRuleSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleSummaryCollectionService(client, path, fieldName)
      : new SecurityRuleSummaryService(
          client,
          path,
          new QSecurityRuleSummaryId(fieldName).buildUrl(id)
        );
  }

  public DeleteSecurityRuleSummaries(): SecurityRuleSummaryCollectionService<ClientType>;
  public DeleteSecurityRuleSummaries(
    id: SecurityRuleSummaryId
  ): SecurityRuleSummaryService<ClientType>;
  public DeleteSecurityRuleSummaries(id?: SecurityRuleSummaryId | undefined) {
    const fieldName = "DeleteSecurityRuleSummaries";
    const { client, path } = this.__base;
    return typeof id === "undefined" || id === null
      ? new SecurityRuleSummaryCollectionService(client, path, fieldName)
      : new SecurityRuleSummaryService(
          client,
          path,
          new QSecurityRuleSummaryId(fieldName).buildUrl(id)
        );
  }
}

export class AccessLevelCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AccessLevel,
  EditableAccessLevel,
  QAccessLevel,
  AccessLevelId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAccessLevel, new QAccessLevelId(name));
  }
}

export class AdditionalEmailSenderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AdditionalEmailSender,
  EditableAdditionalEmailSender,
  QAdditionalEmailSender
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAdditionalEmailSender);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class AdditionalEmailSenderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AdditionalEmailSender,
  EditableAdditionalEmailSender,
  QAdditionalEmailSender,
  AdditionalEmailSenderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAdditionalEmailSender,
      new QAdditionalEmailSenderId(name)
    );
  }
}

export class ExternalImportKeyService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ExternalImportKey,
  EditableExternalImportKey,
  QExternalImportKey
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qExternalImportKey);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class ExternalImportKeyCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ExternalImportKey,
  EditableExternalImportKey,
  QExternalImportKey,
  ExternalImportKeyId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qExternalImportKey,
      new QExternalImportKeyId(name)
    );
  }
}

export class FirmAbbrService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  FirmAbbr,
  EditableFirmAbbr,
  QFirmAbbr
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qFirmAbbr);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class FirmAbbrCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  FirmAbbr,
  EditableFirmAbbr,
  QFirmAbbr,
  FirmAbbrId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qFirmAbbr, new QFirmAbbrId(name));
  }
}

export class IntangibleDamageService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  IntangibleDamage,
  EditableIntangibleDamage,
  QIntangibleDamage
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qIntangibleDamage);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class IntangibleDamageCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  IntangibleDamage,
  EditableIntangibleDamage,
  QIntangibleDamage,
  IntangibleDamageId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qIntangibleDamage,
      new QIntangibleDamageId(name)
    );
  }
}

export class PaymentInfoService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  PaymentInfo,
  EditablePaymentInfo,
  QPaymentInfo
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPaymentInfo);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class PaymentInfoCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  PaymentInfo,
  EditablePaymentInfo,
  QPaymentInfo,
  PaymentInfoId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qPaymentInfo, new QPaymentInfoId(name));
  }
}

export class QuickBooksBankAccountService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  QuickBooksBankAccount,
  EditableQuickBooksBankAccount,
  QQuickBooksBankAccount
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qQuickBooksBankAccount);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class QuickBooksBankAccountCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  QuickBooksBankAccount,
  EditableQuickBooksBankAccount,
  QQuickBooksBankAccount,
  QuickBooksBankAccountId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qQuickBooksBankAccount,
      new QQuickBooksBankAccountId(name)
    );
  }
}

export class QuickBooksExpenseAccountService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  QuickBooksExpenseAccount,
  EditableQuickBooksExpenseAccount,
  QQuickBooksExpenseAccount
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qQuickBooksExpenseAccount);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class QuickBooksExpenseAccountCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  QuickBooksExpenseAccount,
  EditableQuickBooksExpenseAccount,
  QQuickBooksExpenseAccount,
  QuickBooksExpenseAccountId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qQuickBooksExpenseAccount,
      new QQuickBooksExpenseAccountId(name)
    );
  }
}

export class QuickBooksLogService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  QuickBooksLog,
  EditableQuickBooksLog,
  QQuickBooksLog
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qQuickBooksLog);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class QuickBooksLogCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  QuickBooksLog,
  EditableQuickBooksLog,
  QQuickBooksLog,
  QuickBooksLogId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qQuickBooksLog, new QQuickBooksLogId(name));
  }
}

export class QuickBooksSettingService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  QuickBooksSetting,
  EditableQuickBooksSetting,
  QQuickBooksSetting
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qQuickBooksSetting);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class QuickBooksSettingCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  QuickBooksSetting,
  EditableQuickBooksSetting,
  QQuickBooksSetting,
  QuickBooksSettingId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qQuickBooksSetting,
      new QQuickBooksSettingId(name)
    );
  }
}

export class ReportFirmService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ReportFirm,
  EditableReportFirm,
  QReportFirm
> {
  private _Firm?: FirmService<ClientType>;
  private _Report?: ReportService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qReportFirm);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }

  public Report(): ReportService<ClientType> {
    if (!this._Report) {
      const { client, path } = this.__base;
      this._Report = new ReportService(client, path, "Report");
    }

    return this._Report;
  }
}

export class ReportFirmCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ReportFirm,
  EditableReportFirm,
  QReportFirm,
  ReportFirmId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qReportFirm, new QReportFirmId(name));
  }
}

export class ReportService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<ClientType, Report, EditableReport, QReport> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qReport);
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
}

export class ReportCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  Report,
  EditableReport,
  QReport,
  ReportId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qReport, new QReportId(name));
  }
}

export class TrialItemService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  TrialItem,
  EditableTrialItem,
  QTrialItem
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialItem);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class TrialItemCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  TrialItem,
  EditableTrialItem,
  QTrialItem,
  TrialItemId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qTrialItem, new QTrialItemId(name));
  }
}

export class AuthorizedEmailSenderService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  AuthorizedEmailSender,
  EditableAuthorizedEmailSender,
  QAuthorizedEmailSender
> {
  private _Firm?: FirmService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qAuthorizedEmailSender);
  }

  public Firm(): FirmService<ClientType> {
    if (!this._Firm) {
      const { client, path } = this.__base;
      this._Firm = new FirmService(client, path, "Firm");
    }

    return this._Firm;
  }
}

export class AuthorizedEmailSenderCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  AuthorizedEmailSender,
  EditableAuthorizedEmailSender,
  QAuthorizedEmailSender,
  AuthorizedEmailSenderId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qAuthorizedEmailSender,
      new QAuthorizedEmailSenderId(name)
    );
  }
}

export class ActivityHoursLogService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  ActivityHoursLog,
  EditableActivityHoursLog,
  QActivityHoursLog
> {
  private _ActivityLog?: ActivityLogService<ClientType>;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qActivityHoursLog);
  }

  public ActivityLog(): ActivityLogService<ClientType> {
    if (!this._ActivityLog) {
      const { client, path } = this.__base;
      this._ActivityLog = new ActivityLogService(client, path, "ActivityLog");
    }

    return this._ActivityLog;
  }
}

export class ActivityHoursLogCollectionService<
  ClientType extends ODataHttpClient
> extends EntitySetServiceV4<
  ClientType,
  ActivityHoursLog,
  EditableActivityHoursLog,
  QActivityHoursLog,
  ActivityHoursLogId
> {
  constructor(client: ClientType, basePath: string, name: string) {
    super(
      client,
      basePath,
      name,
      qActivityHoursLog,
      new QActivityHoursLogId(name)
    );
  }
}

export class SyncResultsService<
  ClientType extends ODataHttpClient
> extends EntityTypeServiceV4<
  ClientType,
  SyncResults,
  EditableSyncResults,
  QSyncResults
> {
  private _PartyIds?: CollectionServiceV4<
    ClientType,
    NumberCollection,
    QNumberCollection
  >;

  constructor(client: ClientType, basePath: string, name: string) {
    super(client, basePath, name, qSyncResults);
  }

  public PartyIds() {
    if (!this._PartyIds) {
      const { client, path } = this.__base;
      this._PartyIds = new CollectionServiceV4(
        client,
        path,
        "PartyIds",
        qNumberCollection
      );
    }

    return this._PartyIds;
  }
}
