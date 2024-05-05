import { Person } from "../person/Person";
import { CasePacerUserType } from "../case_pacer_user_type/CasePacerUserType";
import { ActivityLog } from "../activity_log/ActivityLog";
import { Alert } from "../alert/Alert";
import { Appointment } from "../appointment/Appointment";
import { AppointmentHistory } from "../appointment_history/AppointmentHistory";
import { CasePacerUserSession } from "../case_pacer_user_session/CasePacerUserSession";
import { CasePacerUserIntegrationToken } from "../case_pacer_user_integration_token/CasePacerUserIntegrationToken";
import { CPDirectMessage } from "../cp_direct_message/CPDirectMessage";
import { EventHelp } from "../event_help/EventHelp";
import { Firm } from "../firm/Firm";
import { RoleTemplate } from "../role_template/RoleTemplate";
import { SMSMessage } from "../sms_message/SMSMessage";
import { Tickler } from "../tickler/Tickler";
import { SecurityUserGroupAssign } from "../security_user_group_assign/SecurityUserGroupAssign";
import { SecurityRuleSummary } from "../security_rule_summary/SecurityRuleSummary";
import { CalendarEntry } from "../calendar_entry/CalendarEntry";
import { CalendarEntryRecur } from "../calendar_entry_recur/CalendarEntryRecur";

export interface CasePacerUser extends Person {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Email` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Email: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsLockedOut` |
   * | Type | `Edm.Boolean` |
   */
  IsLockedOut: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyListingTitle` |
   * | Type | `Edm.String` |
   */
  AttorneyListingTitle: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyListingEnable` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AttorneyListingEnable: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUserType` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUserType` |
   */
  CasePacerUserType?: CasePacerUserType | null;
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
   * | Name | `ActivityLogsByAuditUser` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityLog)` |
   */
  ActivityLogsByAuditUser?: Array<ActivityLog>;
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
   * | Name | `AppointmentHistories` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentHistory)` |
   */
  AppointmentHistories?: Array<AppointmentHistory>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUserSessions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CasePacerUserSession)` |
   */
  CasePacerUserSessions?: Array<CasePacerUserSession>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUserIntegrationToken` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUserIntegrationToken` |
   */
  CasePacerUserIntegrationToken?: CasePacerUserIntegrationToken | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMessages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectMessage)` |
   */
  CPDirectMessages?: Array<CPDirectMessage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EventHelp` |
   * | Type | `Emr.CasePacer.Data.Entities.EventHelp` |
   */
  EventHelp?: EventHelp | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultAttorneyFirms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Firm)` |
   */
  DefaultAttorneyFirms?: Array<Firm>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultParalegalFirms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Firm)` |
   */
  DefaultParalegalFirms?: Array<Firm>;
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
   * | Name | `SMSMessages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSMessage)` |
   */
  SMSMessages?: Array<SMSMessage>;
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
   * | Name | `SecurityUserGroupAssigns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityUserGroupAssign)` |
   */
  SecurityUserGroupAssigns?: Array<SecurityUserGroupAssign>;
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
}

export interface EditableCasePacerUser
  extends Pick<
      CasePacerUser,
      | "QuickEntry"
      | "PayeeExpenseSyncFlag"
      | "DoNotText"
      | "FirstName"
      | "LastName"
      | "DeceasedFlag"
      | "Email"
      | "AttorneyListingEnable"
    >,
    Partial<
      Pick<
        CasePacerUser,
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
        | "MiddleName"
        | "SSN"
        | "NamePrefix"
        | "NameSuffix"
        | "DateOfBirth"
        | "Gender"
        | "SpouseFirstName"
        | "SpouseLastName"
        | "SpouseMiddleName"
        | "Children"
        | "PersonNotes"
        | "CompanyName"
        | "Nickname"
        | "IsLockedOut"
        | "AttorneyListingTitle"
      >
    > {}
