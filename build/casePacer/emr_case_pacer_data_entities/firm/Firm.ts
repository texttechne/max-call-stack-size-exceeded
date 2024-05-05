import { Party } from "../party/Party";
import { CasePacerUser } from "../case_pacer_user/CasePacerUser";
import { AdditionalEmailSender } from "../additional_email_sender/AdditionalEmailSender";
import { Alert } from "../alert/Alert";
import { ActivityLogType } from "../activity_log_type/ActivityLogType";
import { Appointment } from "../appointment/Appointment";
import { AppointmentCustomType } from "../appointment_custom_type/AppointmentCustomType";
import { CaseMenuItem } from "../case_menu_item/CaseMenuItem";
import { ClientForm } from "../client_form/ClientForm";
import { CPDirectBlog } from "../cp_direct_blog/CPDirectBlog";
import { CPDirectSetting } from "../cp_direct_setting/CPDirectSetting";
import { DocumentTemplate } from "../document_template/DocumentTemplate";
import { Email } from "../email/Email";
import { ExternalImportKey } from "../external_import_key/ExternalImportKey";
import { RecordSubtype } from "../record_subtype/RecordSubtype";
import { FirmAbbr } from "../firm_abbr/FirmAbbr";
import { FirmCustomField } from "../firm_custom_field/FirmCustomField";
import { SecurityUserGroup } from "../security_user_group/SecurityUserGroup";
import { IntakeClientFirm } from "../intake_client_firm/IntakeClientFirm";
import { IntangibleDamage } from "../intangible_damage/IntangibleDamage";
import { Law } from "../law/Law";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { LawsuitAbbr } from "../lawsuit_abbr/LawsuitAbbr";
import { LawsuitType } from "../lawsuit_type/LawsuitType";
import { PaymentInfo } from "../payment_info/PaymentInfo";
import { PIPBenefitsType } from "../pip_benefits_type/PIPBenefitsType";
import { QuickBooksBankAccount } from "../quick_books_bank_account/QuickBooksBankAccount";
import { QuickBooksExpenseAccount } from "../quick_books_expense_account/QuickBooksExpenseAccount";
import { QuickBooksLog } from "../quick_books_log/QuickBooksLog";
import { QuickBooksSetting } from "../quick_books_setting/QuickBooksSetting";
import { Record } from "../record/Record";
import { RecordFolder } from "../record_folder/RecordFolder";
import { ReportFirm } from "../report_firm/ReportFirm";
import { RoleTemplate } from "../role_template/RoleTemplate";
import { StandardExhibit } from "../standard_exhibit/StandardExhibit";
import { StandardWitness } from "../standard_witness/StandardWitness";
import { Tickler } from "../tickler/Tickler";
import { TicklerTemplate } from "../tickler_template/TicklerTemplate";
import { TrialExhibit } from "../trial_exhibit/TrialExhibit";
import { TrialItem } from "../trial_item/TrialItem";
import { TwilioPhone } from "../twilio_phone/TwilioPhone";
import { IntakeClientLoginSummary } from "../intake_client_login_summary/IntakeClientLoginSummary";
import { SecurityRuleSummary } from "../security_rule_summary/SecurityRuleSummary";
import { CalendarEntry } from "../calendar_entry/CalendarEntry";
import { CalendarEntryRecur } from "../calendar_entry_recur/CalendarEntryRecur";
import { AuthorizedEmailSender } from "../authorized_email_sender/AuthorizedEmailSender";

export interface Firm extends Party {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmName` |
   * | Type | `Edm.String` |
   */
  FirmName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordRequestCustomerId` |
   * | Type | `Edm.Int32` |
   */
  RecordRequestCustomerId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmFolder` |
   * | Type | `Edm.String` |
   */
  FirmFolder: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardWitnessIntroParagraph` |
   * | Type | `Edm.String` |
   */
  StandardWitnessIntroParagraph: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklersDueToDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TicklersDueToDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumUsersAllowed` |
   * | Type | `Edm.Int32` |
   */
  NumUsersAllowed: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocMgmtFeePerCase` |
   * | Type | `Edm.Decimal` |
   */
  DocMgmtFeePerCase: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuarterlyMinimumCharge` |
   * | Type | `Edm.Decimal` |
   */
  QuarterlyMinimumCharge: number | null;
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
   * | Name | `DocMgmtFeePerImportCase` |
   * | Type | `Edm.Decimal` |
   */
  DocMgmtFeePerImportCase: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocMgmtRenewalFeePerCase` |
   * | Type | `Edm.Decimal` |
   */
  DocMgmtRenewalFeePerCase: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogSecurity` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ActivityLogSecurity: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultAttorneyPartyId` |
   * | Type | `Edm.Int32` |
   */
  DefaultAttorneyPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultParalegalPartyId` |
   * | Type | `Edm.Int32` |
   */
  DefaultParalegalPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailSignature` |
   * | Type | `Edm.String` |
   */
  EmailSignature: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdminTrainingDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  AdminTrainingDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserTrainingDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  UserTrainingDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AquisitionDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  AquisitionDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocMgmtFeeCasePacerCut` |
   * | Type | `Edm.Decimal` |
   */
  DocMgmtFeeCasePacerCut: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailSenderRestrictionFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  EmailSenderRestrictionFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitNumberChangeRestrictionFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LawsuitNumberChangeRestrictionFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordRequestSecretKey` |
   * | Type | `Edm.String` |
   */
  RecordRequestSecretKey: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultContigentFee` |
   * | Type | `Edm.Decimal` |
   */
  DefaultContigentFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StripeLiveCustomerId` |
   * | Type | `Edm.String` |
   */
  StripeLiveCustomerId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StripeLiveSubscriptionId` |
   * | Type | `Edm.String` |
   */
  StripeLiveSubscriptionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvoiceEmail` |
   * | Type | `Edm.String` |
   */
  InvoiceEmail: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultLawsuitBillingType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DefaultLawsuitBillingType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultMinFee` |
   * | Type | `Edm.Int32` |
   */
  DefaultMinFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultMaxFee` |
   * | Type | `Edm.Int32` |
   */
  DefaultMaxFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultClosingFee` |
   * | Type | `Edm.Int32` |
   */
  DefaultClosingFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultMonthlyFee` |
   * | Type | `Edm.Int32` |
   */
  DefaultMonthlyFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultDeferredMonthlyFee` |
   * | Type | `Edm.Int32` |
   */
  DefaultDeferredMonthlyFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultDeferredMonths` |
   * | Type | `Edm.Int32` |
   */
  DefaultDeferredMonths: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StripeTestCustomerId` |
   * | Type | `Edm.String` |
   */
  StripeTestCustomerId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StripeTestSubscriptionId` |
   * | Type | `Edm.String` |
   */
  StripeTestSubscriptionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MsaTermExpiration` |
   * | Type | `Edm.DateTimeOffset` |
   */
  MsaTermExpiration: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Inactive` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Inactive: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultAttorney` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  DefaultAttorney?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultParalegal` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  DefaultParalegal?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdditionalEmailSenders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AdditionalEmailSender)` |
   */
  AdditionalEmailSenders?: Array<AdditionalEmailSender>;
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
   * | Name | `ActivityLogTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityLogType)` |
   */
  ActivityLogTypes?: Array<ActivityLogType>;
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
   * | Name | `AppointmentCustomTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentCustomType)` |
   */
  AppointmentCustomTypes?: Array<AppointmentCustomType>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CaseMenuItem)` |
   */
  CaseMenuItems?: Array<CaseMenuItem>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientForms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ClientForm)` |
   */
  ClientForms?: Array<ClientForm>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectBlogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectBlog)` |
   */
  CPDirectBlogs?: Array<CPDirectBlog>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectSettings` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectSetting)` |
   */
  CPDirectSettings?: Array<CPDirectSetting>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DocumentTemplate)` |
   */
  DocumentTemplates?: Array<DocumentTemplate>;
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
   * | Name | `ExternalImportKeys` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ExternalImportKey)` |
   */
  ExternalImportKeys?: Array<ExternalImportKey>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordSubtypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordSubtype)` |
   */
  RecordSubtypes?: Array<RecordSubtype>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmAbbrs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.FirmAbbr)` |
   */
  FirmAbbrs?: Array<FirmAbbr>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmCustomFields` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.FirmCustomField)` |
   */
  FirmCustomFields?: Array<FirmCustomField>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityUserGroups` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityUserGroup)` |
   */
  SecurityUserGroups?: Array<SecurityUserGroup>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientFirms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientFirm)` |
   */
  IntakeClientFirms?: Array<IntakeClientFirm>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntangibleDamage)` |
   */
  IntangibleDamages?: Array<IntangibleDamage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Laws` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Law)` |
   */
  Laws?: Array<Law>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Lawsuit)` |
   */
  Lawsuits?: Array<Lawsuit>;
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
   * | Name | `LawsuitTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitType)` |
   */
  LawsuitTypes?: Array<LawsuitType>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Parties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Party)` |
   */
  Parties?: Array<Party>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentInfo` |
   * | Type | `Emr.CasePacer.Data.Entities.PaymentInfo` |
   */
  PaymentInfo?: PaymentInfo | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefitsTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PIPBenefitsType)` |
   */
  PIPBenefitsTypes?: Array<PIPBenefitsType>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuickBooksBankAccounts` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.QuickBooksBankAccount)` |
   */
  QuickBooksBankAccounts?: Array<QuickBooksBankAccount>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuickBooksExpenseAccounts` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.QuickBooksExpenseAccount)` |
   */
  QuickBooksExpenseAccounts?: Array<QuickBooksExpenseAccount>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuickBooksLogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.QuickBooksLog)` |
   */
  QuickBooksLogs?: Array<QuickBooksLog>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuickBooksSettings` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.QuickBooksSetting)` |
   */
  QuickBooksSettings?: Array<QuickBooksSetting>;
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
   * | Name | `ReportFirms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ReportFirm)` |
   */
  ReportFirms?: Array<ReportFirm>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RoleTemplate)` |
   */
  RoleTemplates?: Array<RoleTemplate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.StandardExhibit)` |
   */
  StandardExhibits?: Array<StandardExhibit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardWitnesses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.StandardWitness)` |
   */
  StandardWitnesses?: Array<StandardWitness>;
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
   * | Name | `TicklerTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplate)` |
   */
  TicklerTemplates?: Array<TicklerTemplate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TrialExhibit)` |
   */
  TrialExhibits?: Array<TrialExhibit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TrialItem)` |
   */
  TrialItems?: Array<TrialItem>;
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
   * | Name | `IntakeClientLoginSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientLoginSummary)` |
   */
  IntakeClientLoginSummaries?: Array<IntakeClientLoginSummary>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  SecurityRuleSummaries?: Array<SecurityRuleSummary>;
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
   * | Name | `AuthorizedEmailSenders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AuthorizedEmailSender)` |
   */
  AuthorizedEmailSenders?: Array<AuthorizedEmailSender>;
}

export interface EditableFirm
  extends Pick<
      Firm,
      | "QuickEntry"
      | "PayeeExpenseSyncFlag"
      | "DoNotText"
      | "ActivityLogSecurity"
      | "AquisitionDate"
      | "EmailSenderRestrictionFlag"
      | "LawsuitNumberChangeRestrictionFlag"
      | "DefaultLawsuitBillingType"
    >,
    Partial<
      Pick<
        Firm,
        | "PartyTypeId"
        | "ParentFirmId"
        | "IsDeleted"
        | "Notes"
        | "DisplayName"
        | "ExternalFirmName"
        | "Website"
        | "AttyBarNumber"
        | "HeaderDocumentTemplateId"
        | "QBVendorId"
        | "GlobalPartyId"
        | "GuardianExecutorId"
        | "ImageId"
        | "FirmName"
        | "RecordRequestCustomerId"
        | "FirmFolder"
        | "StandardWitnessIntroParagraph"
        | "TicklersDueToDate"
        | "NumUsersAllowed"
        | "DocMgmtFeePerCase"
        | "QuarterlyMinimumCharge"
        | "BillingStartDate"
        | "DocMgmtFeePerImportCase"
        | "DocMgmtRenewalFeePerCase"
        | "DefaultAttorneyPartyId"
        | "DefaultParalegalPartyId"
        | "EmailSignature"
        | "AdminTrainingDate"
        | "UserTrainingDate"
        | "DocMgmtFeeCasePacerCut"
        | "RecordRequestSecretKey"
        | "DefaultContigentFee"
        | "StripeLiveCustomerId"
        | "StripeLiveSubscriptionId"
        | "InvoiceEmail"
        | "DefaultMinFee"
        | "DefaultMaxFee"
        | "DefaultClosingFee"
        | "DefaultMonthlyFee"
        | "DefaultDeferredMonthlyFee"
        | "DefaultDeferredMonths"
        | "StripeTestCustomerId"
        | "StripeTestSubscriptionId"
        | "MsaTermExpiration"
        | "Inactive"
      >
    > {}
