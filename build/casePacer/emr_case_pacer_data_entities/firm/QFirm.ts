import {
  QStringPath,
  QNumberPath,
  QDateTimeOffsetPath,
  QBooleanPath,
  QEntityPath,
  QEntityCollectionPath,
} from "@odata2ts/odata-query-objects";
import { QParty } from "../party/QParty";
import { QCasePacerUser } from "../case_pacer_user/QCasePacerUser";
import { QAdditionalEmailSender } from "../additional_email_sender/QAdditionalEmailSender";
import { QAlert } from "../alert/QAlert";
import { QActivityLogType } from "../activity_log_type/QActivityLogType";
import { QAppointment } from "../appointment/QAppointment";
import { QAppointmentCustomType } from "../appointment_custom_type/QAppointmentCustomType";
import { QCaseMenuItem } from "../case_menu_item/QCaseMenuItem";
import { QClientForm } from "../client_form/QClientForm";
import { QCPDirectBlog } from "../cp_direct_blog/QCPDirectBlog";
import { QCPDirectSetting } from "../cp_direct_setting/QCPDirectSetting";
import { QDocumentTemplate } from "../document_template/QDocumentTemplate";
import { QEmail } from "../email/QEmail";
import { QExternalImportKey } from "../external_import_key/QExternalImportKey";
import { QRecordSubtype } from "../record_subtype/QRecordSubtype";
import { QFirmAbbr } from "../firm_abbr/QFirmAbbr";
import { QFirmCustomField } from "../firm_custom_field/QFirmCustomField";
import { QSecurityUserGroup } from "../security_user_group/QSecurityUserGroup";
import { QIntakeClientFirm } from "../intake_client_firm/QIntakeClientFirm";
import { QIntangibleDamage } from "../intangible_damage/QIntangibleDamage";
import { QLaw } from "../law/QLaw";
import { QLawsuit } from "../lawsuit/QLawsuit";
import { QLawsuitAbbr } from "../lawsuit_abbr/QLawsuitAbbr";
import { QLawsuitType } from "../lawsuit_type/QLawsuitType";
import { QPaymentInfo } from "../payment_info/QPaymentInfo";
import { QPIPBenefitsType } from "../pip_benefits_type/QPIPBenefitsType";
import { QQuickBooksBankAccount } from "../quick_books_bank_account/QQuickBooksBankAccount";
import { QQuickBooksExpenseAccount } from "../quick_books_expense_account/QQuickBooksExpenseAccount";
import { QQuickBooksLog } from "../quick_books_log/QQuickBooksLog";
import { QQuickBooksSetting } from "../quick_books_setting/QQuickBooksSetting";
import { QRecord } from "../record/QRecord";
import { QRecordFolder } from "../record_folder/QRecordFolder";
import { QReportFirm } from "../report_firm/QReportFirm";
import { QRoleTemplate } from "../role_template/QRoleTemplate";
import { QStandardExhibit } from "../standard_exhibit/QStandardExhibit";
import { QStandardWitness } from "../standard_witness/QStandardWitness";
import { QTickler } from "../tickler/QTickler";
import { QTicklerTemplate } from "../tickler_template/QTicklerTemplate";
import { QTrialExhibit } from "../trial_exhibit/QTrialExhibit";
import { QTrialItem } from "../trial_item/QTrialItem";
import { QTwilioPhone } from "../twilio_phone/QTwilioPhone";
import { QIntakeClientLoginSummary } from "../intake_client_login_summary/QIntakeClientLoginSummary";
import { QSecurityRuleSummary } from "../security_rule_summary/QSecurityRuleSummary";
import { QCalendarEntry } from "../calendar_entry/QCalendarEntry";
import { QCalendarEntryRecur } from "../calendar_entry_recur/QCalendarEntryRecur";
import { QAuthorizedEmailSender } from "../authorized_email_sender/QAuthorizedEmailSender";

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
