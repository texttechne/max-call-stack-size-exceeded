export enum Widget {
  Details = "Details",
  PartyImage = "PartyImage",
  Upcoming = "Upcoming",
}

export enum TypeEnum {
  All = "All",
  Attorney = "Attorney",
  Paralegal = "Paralegal",
  Plaintiff = "Plaintiff",
  Defendant = "Defendant",
  InsuranceAdjuster = "InsuranceAdjuster",
  InsuranceCompany = "InsuranceCompany",
  MediatorArbitrator = "MediatorArbitrator",
  Witness = "Witness",
  DefendantAttorney = "DefendantAttorney",
  Judge = "Judge",
  Court = "Court",
  RepairCompany = "RepairCompany",
  Recorder = "Recorder",
  MedicalProvider = "MedicalProvider",
  SubrogeeLienHolder = "SubrogeeLienHolder",
  Other = "Other",
  Employer = "Employer",
  Deposer = "Deposer",
  Deponent = "Deponent",
  Investigator = "Investigator",
  PoliceDepartment = "PoliceDepartment",
  Referrer = "Referrer",
  GuardianExecutor = "GuardianExecutor",
  Prosecutor = "Prosecutor",
  SSA = "SSA",
  MEDoctor = "MEDoctor",
  MERequestParty = "MERequestParty",
  MEPrepParty = "MEPrepParty",
  PIPServiceProvider = "PIPServiceProvider",
  PIP = "PIP",
  AttorneyFeeInterest = "AttorneyFeeInterest",
}

export enum DecisionTypeEnum {
  Favorable = "Favorable",
  Unfavorable = "Unfavorable",
}

export enum SpecialtyType {
  Anesthesiology = "Anesthesiology",
  Audiology = "Audiology",
  Cardiology = "Cardiology",
  CaseManager = "CaseManager",
  Chiropractic = "Chiropractic",
  Dentistry = "Dentistry",
  Endocrinology = "Endocrinology",
  Gynecology = "Gynecology",
  InternalMedicine = "InternalMedicine",
  Neurology = "Neurology",
  Neuropsychiatry = "Neuropsychiatry",
  Neuropsychology = "Neuropsychology",
  Neurosurgery = "Neurosurgery",
  OccupationalTherapy = "OccupationalTherapy",
  Ophthalmology = "Ophthalmology",
  OrthopedicSurgery = "OrthopedicSurgery",
  OsteopathicMedicine = "OsteopathicMedicine",
  Otolaryngology = "Otolaryngology",
  PMandR = "PMandR",
  PainManagement = "PainManagement",
  Pathology = "Pathology",
  PhysicalTherapy = "PhysicalTherapy",
  Psychiatry = "Psychiatry",
  Psychology = "Psychology",
  Radiology = "Radiology",
  PlasticSurgery = "PlasticSurgery",
}

export enum CutoffType {
  None = "None",
  Full = "Full",
  Partial = "Partial",
}

export enum StatusType {
  Confirmed = "Confirmed",
  ClientNoShow = "ClientNoShow",
  BadDateRequestedReschedule = "BadDateRequestedReschedule",
  RequestDenied = "RequestDenied",
  CanceledByRequestor = "CanceledByRequestor",
  CanceledByDoctorVendor = "CanceledByDoctorVendor",
  TransportationNoShow = "TransportationNoShow",
}

export enum UsageTypeEnum {
  Tickler = "Tickler",
  LawsuitType = "LawsuitType",
  LawsuitValue = "LawsuitValue",
}

export interface ActivityLog {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogId` |
   * | Type | `Edm.Int32` |
   */
  ActivityLogId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntryDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  EntryDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityDescription` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ActivityDescription: string;
  /**
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
   * | Name | `CasePacerUserId` |
   * | Type | `Edm.Int32` |
   */
  CasePacerUserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityType` |
   * | Type | `Edm.String` |
   */
  RelatedEntityType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityId` |
   * | Type | `Edm.Int32` |
   */
  RelatedEntityId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Billable` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Billable: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillableRate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  BillableRate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseId` |
   * | Type | `Edm.Int32` |
   */
  ExpenseId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AuditUserId` |
   * | Type | `Edm.Int32` |
   */
  AuditUserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogTypeId` |
   * | Type | `Edm.Int32` |
   */
  ActivityLogTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalActivityLogId` |
   * | Type | `Edm.Int32` |
   */
  GlobalActivityLogId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogType` |
   * | Type | `Emr.CasePacer.Data.Entities.ActivityLogType` |
   */
  ActivityLogType?: ActivityLogType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerAuditUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerAuditUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expense` |
   * | Type | `Emr.CasePacer.Data.Entities.Expense` |
   */
  Expense?: Expense | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalActivityLog` |
   * | Type | `Emr.CasePacer.Data.Entities.ActivityLog` |
   */
  GlobalActivityLog?: ActivityLog | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityHoursLogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityHoursLog)` |
   */
  ActivityHoursLogs?: Array<ActivityHoursLog>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalActivityLogActivityLogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityLog)` |
   */
  GlobalActivityLogActivityLogs?: Array<ActivityLog>;
}

export type ActivityLogId = number | { ActivityLogId: number | null };

export interface EditableActivityLog
  extends Pick<
      ActivityLog,
      "EntryDate" | "ActivityDescription" | "Billable" | "BillableRate"
    >,
    Partial<
      Pick<
        ActivityLog,
        | "LawsuitId"
        | "CasePacerUserId"
        | "RelatedEntityType"
        | "RelatedEntityId"
        | "ExpenseId"
        | "AuditUserId"
        | "ActivityLogTypeId"
        | "GlobalActivityLogId"
      >
    > {}

export interface ActivityLogType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogTypeId` |
   * | Type | `Edm.Int32` |
   */
  ActivityLogTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemTypeID` |
   * | Type | `Edm.Int32` |
   */
  SystemTypeID: number | null;
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
   * | Name | `ActivityLogSystemType` |
   * | Type | `Emr.CasePacer.Data.Entities.ActivityLogType` |
   */
  ActivityLogSystemType?: ActivityLogType | null;
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
   * | Name | `ActivityLogChildrenOfSystemType` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ActivityLogType)` |
   */
  ActivityLogChildrenOfSystemType?: Array<ActivityLogType>;
}

export type ActivityLogTypeId = number | { ActivityLogTypeId: number | null };

export interface EditableActivityLogType
  extends Pick<ActivityLogType, "TypeName">,
    Partial<Pick<ActivityLogType, "FirmId" | "SystemTypeID">> {}

export interface AddressType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AddressTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AddressTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Addresses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Address)` |
   */
  Addresses?: Array<Address>;
}

export type AddressTypeId = number | { AddressTypeId: number };

export interface EditableAddressType
  extends Pick<AddressType, "AddressTypeName"> {}

export interface ADR {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ADRId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRTypeId` |
   * | Type | `Edm.Int32` |
   */
  ADRTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MAPartyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  MAPartyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingLocation` |
   * | Type | `Edm.String` |
   */
  HearingLocation: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingAddress` |
   * | Type | `Edm.String` |
   */
  HearingAddress: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingNotes` |
   * | Type | `Edm.String` |
   */
  HearingNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingHeldFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  HearingHeldFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatementSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  StatementSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffConfirmSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  PlaintiffConfirmSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantInsurSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DefendantInsurSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantAttorneySentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DefendantAttorneySentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConfirmationCallsFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ConfirmationCallsFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRType` |
   * | Type | `Emr.CasePacer.Data.Entities.ADRType` |
   */
  ADRType?: ADRType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MediatorArbitrator` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  MediatorArbitrator?: Party | null;
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

export type ADRId = number | { ADRId: number };

export interface EditableADR
  extends Pick<ADR, "MAPartyID" | "HearingHeldFlag" | "ConfirmationCallsFlag">,
    Partial<
      Pick<
        ADR,
        | "ADRTypeId"
        | "HearingLocation"
        | "HearingAddress"
        | "HearingNotes"
        | "StatementSentDate"
        | "PlaintiffConfirmSentDate"
        | "DefendantInsurSentDate"
        | "DefendantAttorneySentDate"
        | "LitigationId"
      >
    > {}

export interface ADRType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ADRTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ADRTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRTypeRole` |
   * | Type | `Edm.String` |
   */
  ADRTypeRole: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ADR)` |
   */
  ADRs?: Array<ADR>;
}

export type ADRTypeId = number | { ADRTypeId: number };

export interface EditableADRType
  extends Pick<ADRType, "ADRTypeName">,
    Partial<Pick<ADRType, "ADRTypeRole">> {}

export interface Alert {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AlertId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AlertId: number;
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
   * | Name | `UserId` |
   * | Type | `Edm.Int32` |
   */
  UserId: number | null;
  /**
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
   * | Name | `AlertDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  AlertDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AlertLevel` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AlertLevel: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int32` |
   */
  RecordId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActiveFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ActiveFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Counter` |
   * | Type | `Edm.Int16` |
   * | Nullable | `false` |
   */
  Counter: number;
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
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Record` |
   * | Type | `Emr.CasePacer.Data.Entities.Record` |
   */
  Record?: Record | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type AlertId = number | { AlertId: number };

export interface EditableAlert
  extends Pick<
      Alert,
      | "FirmId"
      | "AlertDate"
      | "AlertLevel"
      | "Description"
      | "ActiveFlag"
      | "Counter"
    >,
    Partial<Pick<Alert, "UserId" | "LawsuitId" | "RecordId">> {}

export interface Appointment {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentTypeId: number | null;
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
   * | Name | `UserId` |
   * | Type | `Edm.Int32` |
   */
  UserId: number | null;
  /**
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
   * | Name | `Subject` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Subject: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Location` |
   * | Type | `Edm.String` |
   */
  Location: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  StartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartTime` |
   * | Type | `Edm.Duration` |
   */
  StartTime: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DurationInMinutes` |
   * | Type | `Edm.Int32` |
   */
  DurationInMinutes: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SendCalendarUpdates` |
   * | Type | `Edm.Boolean` |
   */
  SendCalendarUpdates: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApptDescr` |
   * | Type | `Edm.String` |
   */
  ApptDescr: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalAppointmentId` |
   * | Type | `Edm.Int32` |
   */
  GlobalAppointmentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TimezoneOffset` |
   * | Type | `Edm.Int32` |
   */
  TimezoneOffset: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DaylightSavingFlag` |
   * | Type | `Edm.Boolean` |
   */
  DaylightSavingFlag: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRId` |
   * | Type | `Edm.Int32` |
   */
  ADRId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionId` |
   * | Type | `Edm.Int32` |
   */
  DepositionId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialId` |
   * | Type | `Edm.Int32` |
   */
  TrialId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentEventSubTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingId` |
   * | Type | `Edm.Int32` |
   */
  HearingId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentCustomTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentCustomTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RRule` |
   * | Type | `Edm.String` |
   */
  RRule: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExDate` |
   * | Type | `Edm.String` |
   */
  ExDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecurSeriesMasterId` |
   * | Type | `Edm.Int32` |
   */
  RecurSeriesMasterId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsVirtual` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsVirtual: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDDisplay` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  CPDDisplay: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDAttendanceRequired` |
   * | Type | `Edm.String` |
   */
  CPDAttendanceRequired: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDNotes` |
   * | Type | `Edm.String` |
   */
  CPDNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADR` |
   * | Type | `Emr.CasePacer.Data.Entities.ADR` |
   */
  ADR?: ADR | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentCustomType` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentCustomType` |
   */
  AppointmentCustomType?: AppointmentCustomType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubType` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentEventSubType` |
   */
  AppointmentEventSubType?: AppointmentEventSubType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentType` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentType` |
   */
  AppointmentType?: AppointmentType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Deposition` |
   * | Type | `Emr.CasePacer.Data.Entities.Deposition` |
   */
  Deposition?: Deposition | null;
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
   * | Name | `GlobalAppointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  GlobalAppointment?: Appointment | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hearing` |
   * | Type | `Emr.CasePacer.Data.Entities.Hearing` |
   */
  Hearing?: Hearing | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  PlaintiffParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecurSeriesMasterAppointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  RecurSeriesMasterAppointment?: Appointment | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trial` |
   * | Type | `Emr.CasePacer.Data.Entities.Trial` |
   */
  Trial?: Trial | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalAppointmentAppointments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  GlobalAppointmentAppointments?: Array<Appointment>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecurExceptionAppointments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  RecurExceptionAppointments?: Array<Appointment>;
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
   * | Name | `AppointmentIntegration` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentIntegration` |
   */
  AppointmentIntegration?: AppointmentIntegration | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentParty)` |
   */
  AppointmentParties?: Array<AppointmentParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentRecurDates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentRecurDate)` |
   */
  AppointmentRecurDates?: Array<AppointmentRecurDate>;
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

export type AppointmentId = number | { AppointmentId: number | null };

export interface EditableAppointment
  extends Pick<
      Appointment,
      "FirmId" | "Subject" | "StartDate" | "IsVirtual" | "CPDDisplay"
    >,
    Partial<
      Pick<
        Appointment,
        | "AppointmentTypeId"
        | "UserId"
        | "LawsuitId"
        | "Location"
        | "StartTime"
        | "DurationInMinutes"
        | "SendCalendarUpdates"
        | "PlaintiffPartyId"
        | "ApptDescr"
        | "GlobalAppointmentId"
        | "TimezoneOffset"
        | "DaylightSavingFlag"
        | "ADRId"
        | "DepositionId"
        | "TrialId"
        | "AppointmentEventSubTypeId"
        | "HearingId"
        | "AppointmentCustomTypeId"
        | "RRule"
        | "ExDate"
        | "RecurSeriesMasterId"
        | "CPDAttendanceRequired"
        | "CPDNotes"
      >
    > {}

export interface AppointmentEventSubType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentEventSubTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EventTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EventTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AppointmentEventSubTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventType` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentEventType` |
   */
  AppointmentEventType?: AppointmentEventType | null;
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

export type AppointmentEventSubTypeId =
  | number
  | { AppointmentEventSubTypeId: number };

export interface EditableAppointmentEventSubType
  extends Pick<
    AppointmentEventSubType,
    "EventTypeId" | "AppointmentEventSubTypeName"
  > {}

export interface AppointmentEventType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentEventTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AppointmentEventTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentEventSubType)` |
   */
  AppointmentEventSubTypes?: Array<AppointmentEventSubType>;
}

export type AppointmentEventTypeId =
  | number
  | { AppointmentEventTypeId: number };

export interface EditableAppointmentEventType
  extends Pick<AppointmentEventType, "AppointmentEventTypeName"> {}

export interface AppointmentParty {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyString` |
   * | Type | `Edm.String` |
   */
  PartyString: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentPartyStatusId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentPartyStatusId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  Appointment?: Appointment | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentPartyStatus` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentPartyStatus` |
   */
  AppointmentPartyStatus?: AppointmentPartyStatus | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type AppointmentPartyId = number | { AppointmentPartyId: number };

export interface EditableAppointmentParty
  extends Partial<
    Pick<
      AppointmentParty,
      "AppointmentId" | "PartyId" | "PartyString" | "AppointmentPartyStatusId"
    >
  > {}

export interface AppointmentPartyStatus {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentPartyStatusId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentPartyStatusId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentPartyStatusName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AppointmentPartyStatusName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentParty)` |
   */
  AppointmentParties?: Array<AppointmentParty>;
}

export type AppointmentPartyStatusId =
  | number
  | { AppointmentPartyStatusId: number };

export interface EditableAppointmentPartyStatus
  extends Pick<AppointmentPartyStatus, "AppointmentPartyStatusName"> {}

export interface AppointmentType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AppointmentTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  Appointments?: Array<Appointment>;
}

export type AppointmentTypeId = number | { AppointmentTypeId: number };

export interface EditableAppointmentType
  extends Pick<AppointmentType, "AppointmentTypeName"> {}

export interface CalendarEntry {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntryId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CalendarEntryId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeName` |
   * | Type | `Edm.String` |
   */
  AppointmentTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserId` |
   * | Type | `Edm.Int32` |
   */
  UserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserFullName` |
   * | Type | `Edm.String` |
   */
  UserFullName: string | null;
  /**
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
   * | Name | `LawsuitNumber` |
   * | Type | `Edm.String` |
   */
  LawsuitNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientName` |
   * | Type | `Edm.String` |
   */
  ClientName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyPartyId` |
   * | Type | `Edm.Int32` |
   */
  AttorneyPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalPartyId` |
   * | Type | `Edm.Int32` |
   */
  ParalegalPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyDisplayName` |
   * | Type | `Edm.String` |
   */
  AttorneyDisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalDisplayName` |
   * | Type | `Edm.String` |
   */
  ParalegalDisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyColor` |
   * | Type | `Edm.String` |
   */
  AttorneyColor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalColor` |
   * | Type | `Edm.String` |
   */
  ParalegalColor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiteralName` |
   * | Type | `Edm.String` |
   */
  LiteralName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseTypeName` |
   * | Type | `Edm.String` |
   */
  LawsuitPhaseTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeName` |
   * | Type | `Edm.String` |
   */
  LawsuitTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserColor` |
   * | Type | `Edm.String` |
   */
  UserColor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Subject` |
   * | Type | `Edm.String` |
   */
  Subject: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Location` |
   * | Type | `Edm.String` |
   */
  Location: string | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  StartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartTime` |
   * | Type | `Edm.Duration` |
   */
  StartTime: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DurationInMinutes` |
   * | Type | `Edm.Int32` |
   */
  DurationInMinutes: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RRule` |
   * | Type | `Edm.String` |
   */
  RRule: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExDate` |
   * | Type | `Edm.String` |
   */
  ExDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsRecurring` |
   * | Type | `Edm.Boolean` |
   */
  IsRecurring: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsAuto` |
   * | Type | `Edm.Boolean` |
   */
  IsAuto: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TimezoneOffset` |
   * | Type | `Edm.Int32` |
   */
  TimezoneOffset: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DaylightSavingFlag` |
   * | Type | `Edm.Boolean` |
   */
  DaylightSavingFlag: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TimezoneType` |
   * | Type | `Edm.Int32` |
   */
  TimezoneType: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApptDescr` |
   * | Type | `Edm.String` |
   */
  ApptDescr: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventTypeName` |
   * | Type | `Edm.String` |
   */
  AppointmentEventTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentEventSubTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeName` |
   * | Type | `Edm.String` |
   */
  AppointmentEventSubTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRId` |
   * | Type | `Edm.Int32` |
   */
  ADRId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionId` |
   * | Type | `Edm.Int32` |
   */
  DepositionId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialId` |
   * | Type | `Edm.Int32` |
   */
  TrialId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingId` |
   * | Type | `Edm.Int32` |
   */
  HearingId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Modified` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Modified: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `User` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  User?: CasePacerUser | null;
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
   * | Name | `PlaintiffParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  PlaintiffParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  Appointment?: Appointment | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubType` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentEventSubType` |
   */
  AppointmentEventSubType?: AppointmentEventSubType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADR` |
   * | Type | `Emr.CasePacer.Data.Entities.ADR` |
   */
  ADR?: ADR | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Deposition` |
   * | Type | `Emr.CasePacer.Data.Entities.Deposition` |
   */
  Deposition?: Deposition | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trial` |
   * | Type | `Emr.CasePacer.Data.Entities.Trial` |
   */
  Trial?: Trial | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hearing` |
   * | Type | `Emr.CasePacer.Data.Entities.Hearing` |
   */
  Hearing?: Hearing | null;
}

export type CalendarEntryId = { CalendarEntryId: string; StartDate: string };

export interface EditableCalendarEntry
  extends Pick<CalendarEntry, "CalendarEntryId" | "StartDate">,
    Partial<
      Pick<
        CalendarEntry,
        | "AppointmentTypeName"
        | "FirmId"
        | "UserId"
        | "UserFullName"
        | "LawsuitId"
        | "LawsuitNumber"
        | "PlaintiffPartyId"
        | "ClientName"
        | "AttorneyPartyId"
        | "ParalegalPartyId"
        | "AttorneyDisplayName"
        | "ParalegalDisplayName"
        | "AttorneyColor"
        | "ParalegalColor"
        | "LiteralName"
        | "LawsuitPhaseTypeName"
        | "LawsuitTypeName"
        | "UserColor"
        | "Subject"
        | "Location"
        | "StartTime"
        | "DurationInMinutes"
        | "RRule"
        | "ExDate"
        | "IsRecurring"
        | "IsAuto"
        | "TimezoneOffset"
        | "DaylightSavingFlag"
        | "TimezoneType"
        | "ApptDescr"
        | "AppointmentEventTypeName"
        | "AppointmentTypeId"
        | "AppointmentId"
        | "AppointmentEventSubTypeId"
        | "AppointmentEventSubTypeName"
        | "ADRId"
        | "DepositionId"
        | "TrialId"
        | "HearingId"
        | "Modified"
      >
    > {}

export interface Party {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyTypeId` |
   * | Type | `Edm.Int32` |
   */
  PartyTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentFirmId` |
   * | Type | `Edm.Int32` |
   */
  ParentFirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDeleted` |
   * | Type | `Edm.Boolean` |
   */
  IsDeleted: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayName` |
   * | Type | `Edm.String` |
   */
  DisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuickEntry` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  QuickEntry: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExternalFirmName` |
   * | Type | `Edm.String` |
   */
  ExternalFirmName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Website` |
   * | Type | `Edm.String` |
   */
  Website: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttyBarNumber` |
   * | Type | `Edm.String` |
   */
  AttyBarNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HeaderDocumentTemplateId` |
   * | Type | `Edm.Int32` |
   */
  HeaderDocumentTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBVendorId` |
   * | Type | `Edm.String` |
   */
  QBVendorId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalPartyId` |
   * | Type | `Edm.Int32` |
   */
  GlobalPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PayeeExpenseSyncFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PayeeExpenseSyncFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DoNotText` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DoNotText: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GuardianExecutorId` |
   * | Type | `Edm.Int32` |
   */
  GuardianExecutorId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ImageId` |
   * | Type | `Edm.Int32` |
   */
  ImageId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GuardianExecutorParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  GuardianExecutorParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentFirm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  ParentFirm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  GlobalParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HeaderDocumentTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.DocumentTemplate` |
   */
  HeaderDocumentTemplate?: DocumentTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyType` |
   * | Type | `Emr.CasePacer.Data.Entities.PartyType` |
   */
  PartyType?: PartyType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Image` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordFile` |
   */
  Image?: RecordFile | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ADR)` |
   */
  ADRs?: Array<ADR>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswerEnlargements` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AnswerEnlargement)` |
   */
  AnswerEnlargements?: Array<AnswerEnlargement>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentsByPlaintiff` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  AppointmentsByPlaintiff?: Array<Appointment>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AppointmentParty)` |
   */
  AppointmentParties?: Array<AppointmentParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarUsers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarUser)` |
   */
  CalendarUsers?: Array<CalendarUser>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Complaints` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Complaint)` |
   */
  Complaints?: Array<Complaint>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ContactInfo)` |
   */
  ContactInfoes?: Array<ContactInfo>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionsByLocationParty` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DepositionsByLocationParty?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeponentDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DeponentDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeposerDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DeposerDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecorderDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  RecorderDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionsByVideographer` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DepositionsByVideographer?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantDiscoveries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Discovery)` |
   */
  DefendantDiscoveries?: Array<Discovery>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveriesByNonPartyRecipient` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Discovery)` |
   */
  DiscoveriesByNonPartyRecipient?: Array<Discovery>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffDiscoveries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Discovery)` |
   */
  PlaintiffDiscoveries?: Array<Discovery>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedFromDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Document)` |
   */
  ReceivedFromDocuments?: Array<Document>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SentToDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Document)` |
   */
  SentToDocuments?: Array<Document>;
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
   * | Name | `AttorneyExpenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  AttorneyExpenses?: Array<Expense>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientExpenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  ClientExpenses?: Array<Expense>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PayeeExpenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  PayeeExpenses?: Array<Expense>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentPartyExpenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  PaymentPartyExpenses?: Array<Expense>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WardEstateParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Party)` |
   */
  WardEstateParties?: Array<Party>;
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
   * | Name | `LawsuitParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitParty)` |
   */
  LawsuitParties?: Array<LawsuitParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffLienSubrogations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LienSubrogation)` |
   */
  PlaintiffLienSubrogations?: Array<LienSubrogation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubrogeeLienHolderLienSubrogations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LienSubrogation)` |
   */
  SubrogeeLienHolderLienSubrogations?: Array<LienSubrogation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CourtLitigations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Litigation)` |
   */
  CourtLitigations?: Array<Litigation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JudgeLitigations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Litigation)` |
   */
  JudgeLitigations?: Array<Litigation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProvidersByCompany` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalProvider)` |
   */
  MedicalProvidersByCompany?: Array<MedicalProvider>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProvidersByPlaintiff` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalProvider)` |
   */
  MedicalProvidersByPlaintiff?: Array<MedicalProvider>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Party)` |
   */
  ChildParties?: Array<Party>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyAddresses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PartyAddress)` |
   */
  PartyAddresses?: Array<PartyAddress>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ImportingUserRecords` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Record)` |
   */
  ImportingUserRecords?: Array<Record>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffRecords` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Record)` |
   */
  PlaintiffRecords?: Array<Record>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactRecords` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Record)` |
   */
  ContactRecords?: Array<Record>;
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
   * | Name | `SettlementDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementDocument)` |
   */
  SettlementDocuments?: Array<SettlementDocument>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentParty)` |
   */
  WitnessExhibitDocumentParties?: Array<WitnessExhibitDocumentParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntriesByPlaintiff` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarEntry)` |
   */
  CalendarEntriesByPlaintiff?: Array<CalendarEntry>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntryRecursByPlaintiff` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarEntryRecur)` |
   */
  CalendarEntryRecursByPlaintiff?: Array<CalendarEntryRecur>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartySummary` |
   * | Type | `Emr.CasePacer.Data.Entities.PartySummary` |
   */
  PartySummary?: PartySummary | null;
}

export type PartyId = number | { PartyId: number | null };

export interface EditableParty
  extends Pick<Party, "QuickEntry" | "PayeeExpenseSyncFlag" | "DoNotText">,
    Partial<
      Pick<
        Party,
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
      >
    > {}

export interface Party_SyncParams {
  startSyncId?: number | null;
}

export interface Party_ListParams {
  ids: Array<number>;
}

export interface Person extends Party {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirstName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FirstName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LastName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MiddleName` |
   * | Type | `Edm.String` |
   */
  MiddleName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SSN` |
   * | Type | `Edm.String` |
   */
  SSN: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NamePrefix` |
   * | Type | `Edm.String` |
   */
  NamePrefix: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NameSuffix` |
   * | Type | `Edm.String` |
   */
  NameSuffix: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateOfBirth` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateOfBirth: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Gender` |
   * | Type | `Edm.String` |
   */
  Gender: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SpouseFirstName` |
   * | Type | `Edm.String` |
   */
  SpouseFirstName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SpouseLastName` |
   * | Type | `Edm.String` |
   */
  SpouseLastName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SpouseMiddleName` |
   * | Type | `Edm.String` |
   */
  SpouseMiddleName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeceasedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DeceasedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Children` |
   * | Type | `Edm.String` |
   */
  Children: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonNotes` |
   * | Type | `Edm.String` |
   */
  PersonNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompanyName` |
   * | Type | `Edm.String` |
   */
  CompanyName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Nickname` |
   * | Type | `Edm.String` |
   */
  Nickname: string | null;
}

export interface EditablePerson
  extends Pick<
      Person,
      | "QuickEntry"
      | "PayeeExpenseSyncFlag"
      | "DoNotText"
      | "FirstName"
      | "LastName"
      | "DeceasedFlag"
    >,
    Partial<
      Pick<
        Person,
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
      >
    > {}

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

export interface ClientForm {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `_QuestionCount` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  _QuestionCount: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowCriteriaJson` |
   * | Type | `Edm.String` |
   */
  ShowCriteriaJson: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormStatusId` |
   * | Type | `Edm.Int32` |
   */
  ClientFormStatusId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormStatus` |
   * | Type | `Emr.CasePacer.Data.Entities.ClientFormStatus` |
   */
  ClientFormStatus?: ClientFormStatus | null;
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
   * | Name | `ClientFormScreens` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ClientFormScreen)` |
   */
  ClientFormScreens?: Array<ClientFormScreen>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeClientForms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeClientForm)` |
   */
  LawsuitTypeClientForms?: Array<LawsuitTypeClientForm>;
}

export type ClientFormId = number | { Id: number };

export interface EditableClientForm
  extends Pick<ClientForm, "_QuestionCount" | "Name">,
    Partial<
      Pick<ClientForm, "FirmId" | "ShowCriteriaJson" | "ClientFormStatusId">
    > {}

export interface Company extends Party {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompanyName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CompanyName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ESN` |
   * | Type | `Edm.String` |
   */
  ESN: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairCompanyPropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  RepairCompanyPropertyDamages?: Array<PropertyDamage>;
}

export interface EditableCompany
  extends Pick<
      Company,
      "QuickEntry" | "PayeeExpenseSyncFlag" | "DoNotText" | "CompanyName"
    >,
    Partial<
      Pick<
        Company,
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
        | "ESN"
      >
    > {}

export interface ContactInfo {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ContactInfoId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoTypeId` |
   * | Type | `Edm.Int32` |
   */
  ContactInfoTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactValue` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ContactValue: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactTypeId` |
   * | Type | `Edm.Int32` |
   */
  ContactTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UseForNotification` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  UseForNotification: boolean;
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
   * | Name | `IsPrimary` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsPrimary: boolean;
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
   * | Name | `E164Value` |
   * | Type | `Edm.String` |
   */
  E164Value: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoType` |
   * | Type | `Emr.CasePacer.Data.Entities.ContactInfoType` |
   */
  ContactInfoType?: ContactInfoType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactType` |
   * | Type | `Emr.CasePacer.Data.Entities.ContactType` |
   */
  ContactType?: ContactType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSThreads` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSThread)` |
   */
  SMSThreads?: Array<SMSThread>;
}

export type ContactInfoId = number | { ContactInfoId: number };

export interface EditableContactInfo
  extends Pick<
      ContactInfo,
      "ContactValue" | "UseForNotification" | "IsDeleted" | "IsPrimary"
    >,
    Partial<
      Pick<
        ContactInfo,
        | "ContactInfoTypeId"
        | "PartyId"
        | "ContactTypeId"
        | "Description"
        | "E164Value"
      >
    > {}

export interface ContactInfoType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ContactInfoTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ContactInfoTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ContactInfo)` |
   */
  ContactInfoes?: Array<ContactInfo>;
}

export type ContactInfoTypeId = number | { ContactInfoTypeId: number };

export interface EditableContactInfoType
  extends Pick<ContactInfoType, "ContactInfoTypeName"> {}

export interface ContactType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ContactTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ContactTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfoes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ContactInfo)` |
   */
  ContactInfoes?: Array<ContactInfo>;
}

export type ContactTypeId = number | { ContactTypeId: number };

export interface EditableContactType
  extends Pick<ContactType, "ContactTypeName"> {}

export interface CPDirectBlogCategory {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectBlogs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectBlog)` |
   */
  CPDirectBlogs?: Array<CPDirectBlog>;
}

export type CPDirectBlogCategoryId = number | { Id: number };

export interface EditableCPDirectBlogCategory
  extends Pick<CPDirectBlogCategory, "Name"> {}

export interface CPDirectBlog {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
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
   * | Name | `CategoryId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CategoryId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateCreate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  DateCreate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Title` |
   * | Type | `Edm.String` |
   */
  Title: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Summary` |
   * | Type | `Edm.String` |
   */
  Summary: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Body` |
   * | Type | `Edm.String` |
   */
  Body: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Published` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Published: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectBlogCategory` |
   * | Type | `Emr.CasePacer.Data.Entities.CPDirectBlogCategory` |
   */
  CPDirectBlogCategory?: CPDirectBlogCategory | null;
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
   * | Name | `CPDirectBlogImages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectBlogImage)` |
   */
  CPDirectBlogImages?: Array<CPDirectBlogImage>;
}

export type CPDirectBlogId = number | { Id: number };

export interface EditableCPDirectBlog
  extends Pick<CPDirectBlog, "FirmId" | "CategoryId" | "DateCreate">,
    Partial<Pick<CPDirectBlog, "Title" | "Summary" | "Body" | "Published">> {}

export interface CPDirectBlogImage {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BlogId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  BlogId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `S3Key` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  S3Key: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PublicUrl` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PublicUrl: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FileName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileSize` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FileSize: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectBlog` |
   * | Type | `Emr.CasePacer.Data.Entities.CPDirectBlog` |
   */
  CPDirectBlog?: CPDirectBlog | null;
}

export type CPDirectBlogImageId = number | { Id: number };

export interface EditableCPDirectBlogImage
  extends Pick<
    CPDirectBlogImage,
    "BlogId" | "S3Key" | "PublicUrl" | "FileName" | "FileSize"
  > {}

export interface CPDirectCaseProgress {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
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
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShortName` |
   * | Type | `Edm.String` |
   */
  ShortName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
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
   * | Name | `IntakeClientLawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientLawsuit)` |
   */
  IntakeClientLawsuits?: Array<IntakeClientLawsuit>;
}

export type CPDirectCaseProgressId = number | { Id: number };

export interface EditableCPDirectCaseProgress
  extends Pick<CPDirectCaseProgress, "Name" | "Description" | "SortOrder">,
    Partial<Pick<CPDirectCaseProgress, "LawsuitTypeId" | "ShortName">> {}

export interface CPDirectMessage {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLawsuitId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientLawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Body` |
   * | Type | `Edm.String` |
   */
  Body: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Sent` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  Sent: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadReceipt` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReadReceipt: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectClientLoginId` |
   * | Type | `Edm.Int32` |
   */
  CPDirectClientLoginId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUserId` |
   * | Type | `Edm.Int32` |
   */
  CasePacerUserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailSent` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  EmailSent: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLawsuit` |
   */
  IntakeClientLawsuit?: IntakeClientLawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLogin` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLogin` |
   */
  IntakeClientLogin?: IntakeClientLogin | null;
}

export type CPDirectMessageId = number | { Id: number };

export interface EditableCPDirectMessage
  extends Pick<CPDirectMessage, "Sent" | "EmailSent">,
    Partial<
      Pick<
        CPDirectMessage,
        | "IntakeClientLawsuitId"
        | "Body"
        | "ReadReceipt"
        | "CPDirectClientLoginId"
        | "CasePacerUserId"
      >
    > {}

export interface CPDirectSetting {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
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
   * | Name | `FirmName` |
   * | Type | `Edm.String` |
   */
  FirmName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmContactPhoneNumber` |
   * | Type | `Edm.String` |
   */
  FirmContactPhoneNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmContactEmail` |
   * | Type | `Edm.String` |
   */
  FirmContactEmail: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AboutFirmTitle` |
   * | Type | `Edm.String` |
   */
  AboutFirmTitle: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AboutFirmBody` |
   * | Type | `Edm.String` |
   */
  AboutFirmBody: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firebase_Android_Apn` |
   * | Type | `Edm.String` |
   */
  Firebase_Android_Apn: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firebase_Apple_Ibi` |
   * | Type | `Edm.String` |
   */
  Firebase_Apple_Ibi: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firebase_Apple_Isi` |
   * | Type | `Edm.String` |
   */
  Firebase_Apple_Isi: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdditionalFirmIds` |
   * | Type | `Edm.String` |
   */
  AdditionalFirmIds: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MsgEnabled` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  MsgEnabled: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WebSlug` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  WebSlug: string;
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
   * | Name | `CPDirectSettingLocations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectSettingLocation)` |
   */
  CPDirectSettingLocations?: Array<CPDirectSettingLocation>;
}

export type CPDirectSettingId = number | { Id: number };

export interface EditableCPDirectSetting
  extends Pick<CPDirectSetting, "FirmId" | "MsgEnabled" | "WebSlug">,
    Partial<
      Pick<
        CPDirectSetting,
        | "FirmName"
        | "FirmContactPhoneNumber"
        | "FirmContactEmail"
        | "AboutFirmTitle"
        | "AboutFirmBody"
        | "Firebase_Android_Apn"
        | "Firebase_Apple_Ibi"
        | "Firebase_Apple_Isi"
        | "AdditionalFirmIds"
      >
    > {}

export interface CPDirectSettingLocation {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectSettingId` |
   * | Type | `Edm.Int32` |
   */
  CPDirectSettingId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LocationName` |
   * | Type | `Edm.String` |
   */
  LocationName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Address1` |
   * | Type | `Edm.String` |
   */
  Address1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Address2` |
   * | Type | `Edm.String` |
   */
  Address2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `City` |
   * | Type | `Edm.String` |
   */
  City: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `State` |
   * | Type | `Edm.String` |
   */
  State: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ZipCode` |
   * | Type | `Edm.String` |
   */
  ZipCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectSetting` |
   * | Type | `Emr.CasePacer.Data.Entities.CPDirectSetting` |
   */
  CPDirectSetting?: CPDirectSetting | null;
}

export type CPDirectSettingLocationId = number | { Id: number };

export interface EditableCPDirectSettingLocation
  extends Partial<
    Pick<
      CPDirectSettingLocation,
      | "CPDirectSettingId"
      | "LocationName"
      | "Address1"
      | "Address2"
      | "City"
      | "State"
      | "ZipCode"
    >
  > {}

export interface CustomField {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CustomFieldId: number;
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
   * | Name | `CustomFieldGroup` |
   * | Type | `Edm.String` |
   */
  CustomFieldGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmCustomFieldId` |
   * | Type | `Edm.Int32` |
   */
  FirmCustomFieldId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmCustomField` |
   * | Type | `Emr.CasePacer.Data.Entities.FirmCustomField` |
   */
  FirmCustomField?: FirmCustomField | null;
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
   * | Name | `CustomFieldValues` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CustomFieldValue)` |
   */
  CustomFieldValues?: Array<CustomFieldValue>;
}

export type CustomFieldId = number | { CustomFieldId: number };

export interface EditableCustomField
  extends Pick<CustomField, "SortOrder">,
    Partial<
      Pick<
        CustomField,
        "LawsuitTypeId" | "CustomFieldGroup" | "FirmCustomFieldId"
      >
    > {}

export interface CustomFieldType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CustomFieldTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldValueCol` |
   * | Type | `Edm.String` |
   */
  CustomFieldValueCol: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmCustomFields` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.FirmCustomField)` |
   */
  FirmCustomFields?: Array<FirmCustomField>;
}

export type CustomFieldTypeId = number | { CustomFieldTypeId: number };

export interface EditableCustomFieldType
  extends Pick<CustomFieldType, "TypeName">,
    Partial<Pick<CustomFieldType, "CustomFieldValueCol">> {}

export interface CustomFieldValue {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldValueId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CustomFieldValueId: number;
  /**
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
   * | Name | `CustomFieldId` |
   * | Type | `Edm.Int32` |
   */
  CustomFieldId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BoolVal` |
   * | Type | `Edm.Boolean` |
   */
  BoolVal: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateTimeVal` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateTimeVal: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DecimalVal` |
   * | Type | `Edm.Decimal` |
   */
  DecimalVal: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StringVal` |
   * | Type | `Edm.String` |
   */
  StringVal: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomField` |
   * | Type | `Emr.CasePacer.Data.Entities.CustomField` |
   */
  CustomField?: CustomField | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type CustomFieldValueId = number | { CustomFieldValueId: number };

export interface EditableCustomFieldValue
  extends Partial<
    Pick<
      CustomFieldValue,
      | "LawsuitId"
      | "CustomFieldId"
      | "BoolVal"
      | "DateTimeVal"
      | "DecimalVal"
      | "StringVal"
    >
  > {}

export interface DashboardAchievement {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayName` |
   * | Type | `Edm.String` |
   */
  DisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EventCount` |
   * | Type | `Edm.Int32` |
   */
  EventCount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCount` |
   * | Type | `Edm.Int32` |
   */
  TicklerCount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseUpdateCount` |
   * | Type | `Edm.Int32` |
   */
  CaseUpdateCount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyUpdateCount` |
   * | Type | `Edm.Int32` |
   */
  PartyUpdateCount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MessageCount` |
   * | Type | `Edm.Int32` |
   */
  MessageCount: number | null;
}

export type DashboardAchievementId = number | { PartyId: number };

export interface EditableDashboardAchievement
  extends Partial<
    Pick<
      DashboardAchievement,
      | "FirmId"
      | "DisplayName"
      | "EventCount"
      | "TicklerCount"
      | "CaseUpdateCount"
      | "PartyUpdateCount"
      | "MessageCount"
    >
  > {}

export interface Deposition {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DepositionId: number;
  /**
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
   * | Name | `DiscoveryOfLawsuitPartyTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryOfLawsuitPartyTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeposerPartyId` |
   * | Type | `Edm.Int32` |
   */
  DeposerPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeponentLawsuitPartyTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DeponentLawsuitPartyTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeponentPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DeponentPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionFirm` |
   * | Type | `Edm.String` |
   */
  DepositionFirm: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecorderPartyId` |
   * | Type | `Edm.Int32` |
   */
  RecorderPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Location` |
   * | Type | `Edm.String` |
   */
  Location: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Address` |
   * | Type | `Edm.String` |
   */
  Address: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HeldFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  HeldFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OriginalDepositionNeededFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  OriginalDepositionNeededFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReceivedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReturnedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReturnedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CopyReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  CopyReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionNotes` |
   * | Type | `Edm.String` |
   */
  DepositionNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffDepoConfirmSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  PlaintiffDepoConfirmSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepoNoticeSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DepoNoticeSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReporterConfirmSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReporterConfirmSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefDepoConfirmSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DefDepoConfirmSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReporterDepoReqDate1` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReporterDepoReqDate1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReporterDepoReqDate2` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReporterDepoReqDate2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReporterDateCalled` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReporterDateCalled: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffDepositionRequestDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  PlaintiffDepositionRequestDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VideographerPartyId` |
   * | Type | `Edm.Int32` |
   */
  VideographerPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LocationPartyId` |
   * | Type | `Edm.Int32` |
   */
  LocationPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LocationParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  LocationParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeponentLawsuitPartyType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPartyType` |
   */
  DeponentLawsuitPartyType?: LawsuitPartyType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Deponent` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Deponent?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Deposer` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Deposer?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryOfLawsuitPartyType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPartyType` |
   */
  DiscoveryOfLawsuitPartyType?: LawsuitPartyType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Recorder` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Recorder?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Videographer` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Videographer?: Party | null;
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
   * | Name | `DepositionLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DepositionLitigationAssn)` |
   */
  DepositionLitigationAssns?: Array<DepositionLitigationAssn>;
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

export type DepositionId = number | { DepositionId: number };

export interface EditableDeposition
  extends Pick<
      Deposition,
      | "DiscoveryOfLawsuitPartyTypeId"
      | "DeponentLawsuitPartyTypeId"
      | "DeponentPartyId"
      | "HeldFlag"
      | "OriginalDepositionNeededFlag"
      | "CopyReceivedFlag"
    >,
    Partial<
      Pick<
        Deposition,
        | "LawsuitId"
        | "DeposerPartyId"
        | "DepositionFirm"
        | "RecorderPartyId"
        | "Location"
        | "Address"
        | "ReceivedDate"
        | "ReturnedDate"
        | "DepositionNotes"
        | "PlaintiffDepoConfirmSentDate"
        | "DepoNoticeSentDate"
        | "ReporterConfirmSentDate"
        | "DefDepoConfirmSentDate"
        | "ReporterDepoReqDate1"
        | "ReporterDepoReqDate2"
        | "ReporterDateCalled"
        | "PlaintiffDepositionRequestDate"
        | "VideographerPartyId"
        | "LocationPartyId"
      >
    > {}

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

export interface FirmCustomField {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmCustomFieldId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmCustomFieldId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldTypeId` |
   * | Type | `Edm.Int32` |
   */
  CustomFieldTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CustomFieldName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldHelperData` |
   * | Type | `Edm.String` |
   */
  CustomFieldHelperData: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeField` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IntakeField: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldType` |
   * | Type | `Emr.CasePacer.Data.Entities.CustomFieldType` |
   */
  CustomFieldType?: CustomFieldType | null;
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
   * | Name | `CustomFields` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CustomField)` |
   */
  CustomFields?: Array<CustomField>;
}

export type FirmCustomFieldId = number | { FirmCustomFieldId: number };

export interface EditableFirmCustomField
  extends Pick<FirmCustomField, "CustomFieldName" | "IntakeField">,
    Partial<
      Pick<
        FirmCustomField,
        "FirmId" | "CustomFieldTypeId" | "CustomFieldHelperData"
      >
    > {}

export interface IntakeClientLoginSummary {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  UserName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDeactivated` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsDeactivated: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastLoginDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LastLoginDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TokenExpiration` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TokenExpiration: string | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
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
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitTypeName: string;
  /**
   * **Key Property**: This is a key property used to identify the entity.
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
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Status` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Status: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLogin` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLogin` |
   */
  IntakeClientLogin?: IntakeClientLogin | null;
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
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type IntakeClientLoginSummaryId = {
  Id: number;
  UserName: string;
  IsDeactivated: boolean;
  FirmId: number;
  LawsuitName: string;
  LawsuitTypeName: string;
  LawsuitId: number | null;
  Status: string;
};

export interface EditableIntakeClientLoginSummary
  extends Pick<
      IntakeClientLoginSummary,
      | "Id"
      | "UserName"
      | "IsDeactivated"
      | "FirmId"
      | "LawsuitName"
      | "LawsuitTypeName"
      | "Status"
    >,
    Partial<
      Pick<
        IntakeClientLoginSummary,
        "LastLoginDate" | "TokenExpiration" | "LawsuitId" | "PlaintiffPartyId"
      >
    > {}

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

export interface CustomAttribute {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Group` |
   * | Type | `Edm.String` |
   */
  Group: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  Name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Type` |
   * | Type | `Edm.String` |
   */
  Type: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValueCol` |
   * | Type | `Edm.String` |
   */
  ValueCol: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeField` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IntakeField: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFieldHelperData` |
   * | Type | `Edm.String` |
   */
  CustomFieldHelperData: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DropDownSimple` |
   * | Type | `Collection(Edm.String)` |
   */
  DropDownSimple: Array<string>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FormValue` |
   * | Type | `Edm.String` |
   */
  FormValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `firmCustomField` |
   * | Type | `Emr.CasePacer.Data.Entities.FirmCustomField` |
   */
  firmCustomField?: FirmCustomField | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `customField` |
   * | Type | `Emr.CasePacer.Data.Entities.CustomField` |
   */
  customField?: CustomField | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `customFieldValue` |
   * | Type | `Emr.CasePacer.Data.Entities.CustomFieldValue` |
   */
  customFieldValue?: CustomFieldValue | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `customFieldType` |
   * | Type | `Emr.CasePacer.Data.Entities.CustomFieldType` |
   */
  customFieldType?: CustomFieldType | null;
}

export type CustomAttributeId = number | { id: number };

export interface EditableCustomAttribute
  extends Pick<CustomAttribute, "SortOrder" | "IntakeField">,
    Partial<
      Pick<
        CustomAttribute,
        | "Group"
        | "Name"
        | "Type"
        | "ValueCol"
        | "CustomFieldHelperData"
        | "DropDownSimple"
        | "FormValue"
      >
    > {}

export interface LawsuitParty {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitPartyId: number;
  /**
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
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PrimaryFlag` |
   * | Type | `Edm.Boolean` |
   */
  PrimaryFlag: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActiveFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ActiveFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillableRate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  BillableRate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubType` |
   * | Type | `Edm.String` |
   */
  SubType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ClientFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimsByCompany` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaim)` |
   */
  InsuranceClaimsByCompany?: Array<InsuranceClaim>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimsByInsured` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaim)` |
   */
  InsuranceClaimsByInsured?: Array<InsuranceClaim>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimsByTiedTo` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaim)` |
   */
  InsuranceClaimsByTiedTo?: Array<InsuranceClaim>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CourtLitigations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Litigation)` |
   */
  CourtLitigations?: Array<Litigation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JudgeLitigations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Litigation)` |
   */
  JudgeLitigations?: Array<Litigation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ADR)` |
   */
  ADRs?: Array<ADR>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeponentDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DeponentDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeposerDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DeposerDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecorderDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  RecorderDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PayeeExpenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  PayeeExpenses?: Array<Expense>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubrogeeLienHolderLienSubrogations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LienSubrogation)` |
   */
  SubrogeeLienHolderLienSubrogations?: Array<LienSubrogation>;
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
   * | Name | `RepairCompanyPropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  RepairCompanyPropertyDamages?: Array<PropertyDamage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPartyType` |
   */
  LawsuitPartyType?: LawsuitPartyType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterest` |
   * | Type | `Emr.CasePacer.Data.Entities.AttorneyFeeInterest` |
   */
  AttorneyFeeInterest?: AttorneyFeeInterest | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Defendants` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DefendantAttorney)` |
   */
  Defendants?: Array<DefendantAttorney>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantAttorneys` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DefendantAttorney)` |
   */
  DefendantAttorneys?: Array<DefendantAttorney>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLawsuitParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DefendantLawsuitParty)` |
   */
  DefendantLawsuitParties?: Array<DefendantLawsuitParty>;
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
   * | Name | `InsuranceClaimsByAdjuster` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaim)` |
   */
  InsuranceClaimsByAdjuster?: Array<InsuranceClaim>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePoliciesByCompany` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsurancePolicy)` |
   */
  InsurancePoliciesByCompany?: Array<InsurancePolicy>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePoliciesByInsured` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsurancePolicy)` |
   */
  InsurancePoliciesByInsured?: Array<InsurancePolicy>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePoliciesByTiedTo` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsurancePolicy)` |
   */
  InsurancePoliciesByTiedTo?: Array<InsurancePolicy>;
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
   * | Name | `LawsuitRoles` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitRole)` |
   */
  LawsuitRoles?: Array<LawsuitRole>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalEvaluationsByDoctor` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalEvaluation)` |
   */
  MedicalEvaluationsByDoctor?: Array<MedicalEvaluation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalEvaluationsByPrepBy` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalEvaluation)` |
   */
  MedicalEvaluationsByPrepBy?: Array<MedicalEvaluation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalEvaluationsByRequestor` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MedicalEvaluation)` |
   */
  MedicalEvaluationsByRequestor?: Array<MedicalEvaluation>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PIPBenefit)` |
   */
  PIPBenefits?: Array<PIPBenefit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffLawsuitParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PlaintiffLawsuitParty)` |
   */
  PlaintiffLawsuitParties?: Array<PlaintiffLawsuitParty>;
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
   * | Name | `AdjusterPropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  AdjusterPropertyDamages?: Array<PropertyDamage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompanyPropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  CompanyPropertyDamages?: Array<PropertyDamage>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  PlaintiffPropertyDamages?: Array<PropertyDamage>;
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
   * | Name | `Witness` |
   * | Type | `Emr.CasePacer.Data.Entities.Witness` |
   */
  Witness?: Witness | null;
}

export type LawsuitPartyId = number | { LawsuitPartyId: number };

export interface EditableLawsuitParty
  extends Pick<LawsuitParty, "ActiveFlag" | "BillableRate" | "ClientFlag">,
    Partial<
      Pick<
        LawsuitParty,
        | "LawsuitId"
        | "PartyId"
        | "LawsuitPartyTypeId"
        | "PrimaryFlag"
        | "Notes"
        | "SubType"
      >
    > {}

export interface LawsuitPartyType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitPartyTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitPartyTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplateRecipient` |
   * | Type | `Edm.String` |
   */
  DocumentTemplateRecipient: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentDivId` |
   * | Type | `Edm.String` |
   */
  DocumentDivId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeponentDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DeponentDepositions?: Array<Deposition>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryOfDepositions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Deposition)` |
   */
  DiscoveryOfDepositions?: Array<Deposition>;
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
   * | Name | `LawsuitParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitParty)` |
   */
  LawsuitParties?: Array<LawsuitParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MailMerges` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.MailMerge)` |
   */
  MailMerges?: Array<MailMerge>;
}

export type LawsuitPartyTypeId = number | { LawsuitPartyTypeId: number };

export interface EditableLawsuitPartyType
  extends Pick<LawsuitPartyType, "LawsuitPartyTypeName">,
    Partial<
      Pick<LawsuitPartyType, "DocumentTemplateRecipient" | "DocumentDivId">
    > {}

export interface LawsuitPhaseDate {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseDateId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitPhaseDateId: number;
  /**
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
   * | Name | `LawsuitPhaseTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPhaseTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EnteredDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  EnteredDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPhaseType` |
   */
  LawsuitPhaseType?: LawsuitPhaseType | null;
}

export type LawsuitPhaseDateId = number | { LawsuitPhaseDateId: number };

export interface EditableLawsuitPhaseDate
  extends Pick<LawsuitPhaseDate, "EnteredDate">,
    Partial<Pick<LawsuitPhaseDate, "LawsuitId" | "LawsuitPhaseTypeId">> {}

export interface LawsuitPhaseType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitPhaseTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitPhaseTypeName: string;
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
   * | Name | `LawsuitPhaseDates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitPhaseDate)` |
   */
  LawsuitPhaseDates?: Array<LawsuitPhaseDate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubPhaseTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SubPhaseType)` |
   */
  SubPhaseTypes?: Array<SubPhaseType>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateTicklerTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplate)` |
   */
  CreateTicklerTemplates?: Array<TicklerTemplate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApplicableTicklerTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplate)` |
   */
  ApplicableTicklerTemplates?: Array<TicklerTemplate>;
}

export type LawsuitPhaseTypeId = number | { LawsuitPhaseTypeId: number };

export interface EditableLawsuitPhaseType
  extends Pick<LawsuitPhaseType, "LawsuitPhaseTypeName"> {}

export interface LawsuitType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `LawsuitTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
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
   * | Name | `TicklersOn` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  TicklersOn: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccidentFieldsOn` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AccidentFieldsOn: boolean;
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
   * | Name | `ChildLawsuitTypeId` |
   * | Type | `Edm.Int32` |
   */
  ChildLawsuitTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemTemplateId` |
   * | Type | `Edm.Int32` |
   */
  SystemTemplateId: number | null;
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
   * | Name | `MinFee` |
   * | Type | `Edm.Int32` |
   */
  MinFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MaxFee` |
   * | Type | `Edm.Int32` |
   */
  MaxFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosingFee` |
   * | Type | `Edm.Int32` |
   */
  ClosingFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MonthlyFee` |
   * | Type | `Edm.Int32` |
   */
  MonthlyFee: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeferredMonths` |
   * | Type | `Edm.Int32` |
   */
  DeferredMonths: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillingType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BillingType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDMessageEnabled` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  CPDMessageEnabled: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettingsJson` |
   * | Type | `Edm.String` |
   */
  SettingsJson: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildLawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  ChildLawsuitType?: LawsuitType | null;
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
   * | Name | `MasterLawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  MasterLawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `GlobalLawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  GlobalLawsuitType?: LawsuitType | null;
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
   * | Name | `CPDirectCaseProgresses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectCaseProgress)` |
   */
  CPDirectCaseProgresses?: Array<CPDirectCaseProgress>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CustomFields` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CustomField)` |
   */
  CustomFields?: Array<CustomField>;
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
   * | Name | `AccountingSyncGL` |
   * | Type | `Emr.CasePacer.Data.Entities.AccountingSyncGL` |
   */
  AccountingSyncGL?: AccountingSyncGL | null;
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
   * | Name | `GlobalLawsuitTypeLawsuitTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitType)` |
   */
  GlobalLawsuitTypeLawsuitTypes?: Array<LawsuitType>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeClientForms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeClientForm)` |
   */
  LawsuitTypeClientForms?: Array<LawsuitTypeClientForm>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeDocument)` |
   */
  LawsuitTypeDocuments?: Array<LawsuitTypeDocument>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeTicklers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeTickler)` |
   */
  LawsuitTypeTicklers?: Array<LawsuitTypeTickler>;
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
   * | Name | `SubPhaseTypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SubPhaseType)` |
   */
  SubPhaseTypes?: Array<SubPhaseType>;
}

export type LawsuitTypeId = number | { LawsuitTypeId: number | null };

export interface EditableLawsuitType
  extends Pick<
      LawsuitType,
      | "LawsuitTypeName"
      | "TicklersOn"
      | "AccidentFieldsOn"
      | "BillingType"
      | "CPDMessageEnabled"
    >,
    Partial<
      Pick<
        LawsuitType,
        | "FirmId"
        | "DocMgmtFeePerCase"
        | "MasterLawsuitId"
        | "ChildLawsuitTypeId"
        | "SystemTemplateId"
        | "DocMgmtFeeCasePacerCut"
        | "MinFee"
        | "MaxFee"
        | "ClosingFee"
        | "MonthlyFee"
        | "DeferredMonths"
        | "SettingsJson"
      >
    > {}

export interface PartySummary {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisplayName` |
   * | Type | `Edm.String` |
   */
  DisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirstName` |
   * | Type | `Edm.String` |
   */
  FirstName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastName` |
   * | Type | `Edm.String` |
   */
  LastName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateOfBirth` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateOfBirth: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompanyName` |
   * | Type | `Edm.String` |
   */
  CompanyName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SearchName` |
   * | Type | `Edm.String` |
   */
  SearchName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuickEntry` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  QuickEntry: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyTypeName` |
   * | Type | `Edm.String` |
   */
  PartyTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressTypeId` |
   * | Type | `Edm.Int32` |
   */
  AddressTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressTypeName` |
   * | Type | `Edm.String` |
   */
  AddressTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressLine1` |
   * | Type | `Edm.String` |
   */
  AddressLine1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressLine2` |
   * | Type | `Edm.String` |
   */
  AddressLine2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `City` |
   * | Type | `Edm.String` |
   */
  City: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `County` |
   * | Type | `Edm.String` |
   */
  County: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `State` |
   * | Type | `Edm.String` |
   */
  State: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ZipCode` |
   * | Type | `Edm.String` |
   */
  ZipCode: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Country` |
   * | Type | `Edm.String` |
   */
  Country: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhoneNumber` |
   * | Type | `Edm.String` |
   */
  PhoneNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FaxNumber` |
   * | Type | `Edm.String` |
   */
  FaxNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailAddress` |
   * | Type | `Edm.String` |
   */
  EmailAddress: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumLawsuits` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  NumLawsuits: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type PartySummaryId = number | { PartyId: number | null };

export interface EditablePartySummary
  extends Pick<PartySummary, "QuickEntry" | "NumLawsuits">,
    Partial<
      Pick<
        PartySummary,
        | "DisplayName"
        | "FirstName"
        | "LastName"
        | "DateOfBirth"
        | "CompanyName"
        | "SearchName"
        | "FirmId"
        | "PartyTypeName"
        | "AddressTypeId"
        | "AddressTypeName"
        | "AddressLine1"
        | "AddressLine2"
        | "City"
        | "County"
        | "State"
        | "ZipCode"
        | "Country"
        | "PhoneNumber"
        | "FaxNumber"
        | "EmailAddress"
      >
    > {}

export interface PartySummary_ListParams {
  ids: Array<number>;
}

export interface PartyType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PartyTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ValidParties` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ValidParties: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Parties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Party)` |
   */
  Parties?: Array<Party>;
}

export type PartyTypeId = number | { PartyTypeId: number };

export interface EditablePartyType
  extends Pick<PartyType, "PartyTypeName" | "ValidParties"> {}

export interface Record {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordId: number;
  /**
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
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactPartyId` |
   * | Type | `Edm.Int32` |
   */
  ContactPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RecordName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordTypeId` |
   * | Type | `Edm.Int32` |
   */
  RecordTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ImportDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  ImportDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequestDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  RequestDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Signed` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Signed: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ImportingUserId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ImportingUserId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordSubtypeId` |
   * | Type | `Edm.Int32` |
   */
  RecordSubtypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFileId` |
   * | Type | `Edm.Int32` |
   */
  RecordFileId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocuSignJson` |
   * | Type | `Edm.String` |
   */
  DocuSignJson: string | null;
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
   * | Name | `ImportingUser` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  ImportingUser?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Plaintiff?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Contact` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Contact?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFile` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordFile` |
   */
  RecordFile?: RecordFile | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordSubtype` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordSubtype` |
   */
  RecordSubtype?: RecordSubtype | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordType` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordType` |
   */
  RecordType?: RecordType | null;
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
   * | Name | `Documents` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Document)` |
   */
  Documents?: Array<Document>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSAttachments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSAttachment)` |
   */
  SMSAttachments?: Array<SMSAttachment>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialPleadings` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TrialPleading)` |
   */
  TrialPleadings?: Array<TrialPleading>;
}

export type RecordId = number | { RecordId: number };

export interface EditableRecord
  extends Pick<
      Record,
      "RecordName" | "ImportDate" | "RequestDate" | "Signed" | "ImportingUserId"
    >,
    Partial<
      Pick<
        Record,
        | "LawsuitId"
        | "PlaintiffPartyId"
        | "ContactPartyId"
        | "RecordTypeId"
        | "RecordSubtypeId"
        | "FirmId"
        | "RecordFileId"
        | "DocuSignJson"
      >
    > {}

export interface RecordFile {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFileId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordFileId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FileName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UploadedAt` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  UploadedAt: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PrimaryFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PrimaryFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileLength` |
   * | Type | `Edm.Int64` |
   */
  FileLength: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FileMD5Hash` |
   * | Type | `Edm.String` |
   */
  FileMD5Hash: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFolderId` |
   * | Type | `Edm.Int32` |
   */
  RecordFolderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ETag` |
   * | Type | `Edm.String` |
   */
  ETag: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Url` |
   * | Type | `Edm.String` |
   */
  Url: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PublicUrl` |
   * | Type | `Edm.String` |
   */
  PublicUrl: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFolder` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordFolder` |
   */
  RecordFolder?: RecordFolder | null;
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
   * | Name | `PartiesByImage` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Party)` |
   */
  PartiesByImage?: Array<Party>;
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
   * | Name | `RecordFileRelationships` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordFileRelationship)` |
   */
  RecordFileRelationships?: Array<RecordFileRelationship>;
}

export type RecordFileId = number | { RecordFileId: number };

export interface EditableRecordFile
  extends Pick<RecordFile, "FileName" | "UploadedAt" | "PrimaryFlag">,
    Partial<
      Pick<
        RecordFile,
        | "FileLength"
        | "FileMD5Hash"
        | "RecordFolderId"
        | "ETag"
        | "Url"
        | "PublicUrl"
      >
    > {}

export interface RecordFile_GetUrlParams {
  key: number;
}

export interface RecordFile_PutUrlParams {
  key: number;
}

export interface RecordFile_InitiateMultipartParams {
  key: number;
}

export interface RecordFile_PutMultipartUrlParams {
  key: number;
  uploadId?: string | null;
  partNumber: number;
}

export interface RecordFile_CompleteMultipartParams {
  key: number;
  uploadId?: string | null;
}

export interface RecordFile_ValidateParams {
  key: number;
}

export interface RecordFolder {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFolderId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordFolderId: number;
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
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FolderPrefix` |
   * | Type | `Edm.String` |
   */
  FolderPrefix: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  Name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultRecordSubtypeId` |
   * | Type | `Edm.Int32` |
   */
  DefaultRecordSubtypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultRecordTypeId` |
   * | Type | `Edm.Int32` |
   */
  DefaultRecordTypeId: number | null;
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
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordSubtype` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordSubtype` |
   */
  RecordSubtype?: RecordSubtype | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordType` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordType` |
   */
  RecordType?: RecordType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFiles` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordFile)` |
   */
  RecordFiles?: Array<RecordFile>;
}

export type RecordFolderId = number | { RecordFolderId: number };

export interface EditableRecordFolder
  extends Pick<RecordFolder, "FirmId">,
    Partial<
      Pick<
        RecordFolder,
        | "LawsuitId"
        | "FolderPrefix"
        | "Name"
        | "DefaultRecordSubtypeId"
        | "DefaultRecordTypeId"
      >
    > {}

export interface SimpleLawsuitSummary {
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
   * | Nullable | `false` |
   */
  LawsuitTypeId: number;
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
   * | Name | `CloseDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CloseDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShortDescription` |
   * | Type | `Edm.String` |
   */
  ShortDescription: string | null;
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
   * | Nullable | `false` |
   */
  LawsuitPhaseTypeId: number;
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
   * | Name | `LiteralName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LiteralName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UrlName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  UrlName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitPhaseTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffDisplayName` |
   * | Type | `Edm.String` |
   */
  PlaintiffDisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyDisplayName` |
   * | Type | `Edm.String` |
   */
  AttorneyDisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyPartyId` |
   * | Type | `Edm.Int32` |
   */
  AttorneyPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyColor` |
   * | Type | `Edm.String` |
   */
  AttorneyColor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyTimezoneOffset` |
   * | Type | `Edm.Int32` |
   */
  AttorneyTimezoneOffset: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyDaylightSavingFlag` |
   * | Type | `Edm.Boolean` |
   */
  AttorneyDaylightSavingFlag: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalDisplayName` |
   * | Type | `Edm.String` |
   */
  ParalegalDisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalPartyId` |
   * | Type | `Edm.Int32` |
   */
  ParalegalPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalColor` |
   * | Type | `Edm.String` |
   */
  ParalegalColor: string | null;
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
   * | Name | `SubPhaseTypeName` |
   * | Type | `Edm.String` |
   */
  SubPhaseTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MasterSimpleLawsuitSummary` |
   * | Type | `Emr.CasePacer.Data.Entities.SimpleLawsuitSummary` |
   */
  MasterSimpleLawsuitSummary?: SimpleLawsuitSummary | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildSimpleLawsuitSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SimpleLawsuitSummary)` |
   */
  ChildSimpleLawsuitSummaries?: Array<SimpleLawsuitSummary>;
}

export type SimpleLawsuitSummaryId = number | { LawsuitId: number | null };

export interface EditableSimpleLawsuitSummary
  extends Pick<
      SimpleLawsuitSummary,
      | "FirmId"
      | "LawsuitTypeId"
      | "LawsuitNumber"
      | "IsDeleted"
      | "LawsuitPhaseTypeId"
      | "ImportedCaseFlag"
      | "TicklersActiveFlag"
      | "CreateDate"
      | "LiteralName"
      | "UrlName"
      | "LawsuitPhaseTypeName"
      | "LawsuitTypeName"
    >,
    Partial<
      Pick<
        SimpleLawsuitSummary,
        | "OpenDate"
        | "CloseDate"
        | "ShortDescription"
        | "SOLDate"
        | "AccidentDate"
        | "FileNumber"
        | "DateCalled"
        | "LeadSource"
        | "ReferralSource"
        | "StateOfAccident"
        | "EvidenceLtr1SentDate"
        | "EvidenceLtr2SentDate"
        | "CountyOfAccident"
        | "CityOfAccident"
        | "QBCustomerId"
        | "MasterLawsuitId"
        | "SubPhaseTypeId"
        | "LawsuitCompanionGroupId"
        | "PlaintiffDisplayName"
        | "PlaintiffPartyId"
        | "AttorneyDisplayName"
        | "AttorneyPartyId"
        | "AttorneyColor"
        | "AttorneyTimezoneOffset"
        | "AttorneyDaylightSavingFlag"
        | "ParalegalDisplayName"
        | "ParalegalPartyId"
        | "ParalegalColor"
        | "BillingStartDate"
        | "BillingStopDate"
        | "SubPhaseTypeName"
      >
    > {}

export interface SubPhaseType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubPhaseTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SubPhaseTypeId: number;
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
   * | Name | `LawsuitTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubPhaseTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  SubPhaseTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Abbrev` |
   * | Type | `Edm.String` |
   */
  Abbrev: string | null;
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
   * | Name | `Lawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Lawsuit)` |
   */
  Lawsuits?: Array<Lawsuit>;
}

export type SubPhaseTypeId = number | { SubPhaseTypeId: number };

export interface EditableSubPhaseType
  extends Pick<SubPhaseType, "SubPhaseTypeName" | "SortOrder">,
    Partial<
      Pick<SubPhaseType, "LawsuitPhaseTypeId" | "LawsuitTypeId" | "Abbrev">
    > {}

export interface Tickler {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   */
  TicklerTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhaseAdvancing` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PhaseAdvancing: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreatedDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  CreatedDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OriginalDueDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  OriginalDueDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CurrentDueDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  CurrentDueDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ClosedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosedByUserId` |
   * | Type | `Edm.Int32` |
   */
  ClosedByUserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReasonForDelay` |
   * | Type | `Edm.String` |
   */
  ReasonForDelay: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerDetails` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TicklerDetails: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswerId` |
   * | Type | `Edm.Int32` |
   */
  TicklerAnswerId: number | null;
  /**
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
   * | Name | `RelatedEntityId` |
   * | Type | `Edm.Int32` |
   */
  RelatedEntityId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosedByUserBool` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ClosedByUserBool: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AssignedLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  AssignedLawsuitPartyId: number | null;
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
   * | Name | `TicklerAnswer` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerAnswer` |
   */
  TicklerAnswer?: TicklerAnswer | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClosingUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  ClosingUser?: CasePacerUser | null;
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
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AssignedLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  AssignedLawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  TicklerTemplate?: TicklerTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OriginatingTicklerDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Document)` |
   */
  OriginatingTicklerDocuments?: Array<Document>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedTicklerDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Document)` |
   */
  ReceivedTicklerDocuments?: Array<Document>;
}

export type TicklerId = number | { TicklerId: number };

export interface EditableTickler
  extends Pick<
      Tickler,
      | "PhaseAdvancing"
      | "CreatedDate"
      | "OriginalDueDate"
      | "CurrentDueDate"
      | "TicklerDetails"
      | "ClosedByUserBool"
      | "FirmId"
    >,
    Partial<
      Pick<
        Tickler,
        | "TicklerTemplateId"
        | "ClosedDate"
        | "ClosedByUserId"
        | "Notes"
        | "ReasonForDelay"
        | "TicklerAnswerId"
        | "LawsuitId"
        | "RelatedEntityId"
        | "AssignedLawsuitPartyId"
      >
    > {}

export interface CasePacerUserType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUserTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CasePacerUserTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUserTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CasePacerUserTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUsers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CasePacerUser)` |
   */
  CasePacerUsers?: Array<CasePacerUser>;
}

export type CasePacerUserTypeId = number | { CasePacerUserTypeId: number };

export interface EditableCasePacerUserType
  extends Pick<CasePacerUserType, "CasePacerUserTypeName"> {}

export interface IntakeClientLogin {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  UserName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Password` |
   * | Type | `Edm.String` |
   */
  Password: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FailedAttempts` |
   * | Type | `Edm.Byte` |
   * | Nullable | `false` |
   */
  FailedAttempts: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsDeactivated` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsDeactivated: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastLoginDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LastLoginDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Token` |
   * | Type | `Edm.String` |
   */
  Token: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TokenExpiration` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TokenExpiration: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConfirmedAt` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ConfirmedAt: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DoNotEmail` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DoNotEmail: boolean;
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
   * | Name | `CPDirectPushTokens` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectPushToken)` |
   */
  CPDirectPushTokens?: Array<CPDirectPushToken>;
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
   * | Name | `IntakeClientSessions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientSession)` |
   */
  IntakeClientSessions?: Array<IntakeClientSession>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLoginSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientLoginSummary)` |
   */
  IntakeClientLoginSummaries?: Array<IntakeClientLoginSummary>;
}

export type IntakeClientLoginId = number | { Id: number };

export interface EditableIntakeClientLogin
  extends Pick<
      IntakeClientLogin,
      "UserName" | "FailedAttempts" | "IsDeactivated" | "DoNotEmail"
    >,
    Partial<
      Pick<
        IntakeClientLogin,
        | "Password"
        | "LastLoginDate"
        | "Token"
        | "TokenExpiration"
        | "ConfirmedAt"
      >
    > {}

export interface IntakeClientLawsuit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientFirmId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientFirmId: number | null;
  /**
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
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectCaseProgressId` |
   * | Type | `Edm.Int32` |
   */
  CPDirectCaseProgressId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectCaseProgress` |
   * | Type | `Emr.CasePacer.Data.Entities.CPDirectCaseProgress` |
   */
  CPDirectCaseProgress?: CPDirectCaseProgress | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientFirm` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientFirm` |
   */
  IntakeClientFirm?: IntakeClientFirm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMedicalProviders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectMedicalProvider)` |
   */
  CPDirectMedicalProviders?: Array<CPDirectMedicalProvider>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMessages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectMessage)` |
   */
  CPDirectMessages?: Array<CPDirectMessage>;
}

export type IntakeClientLawsuitId = number | { Id: number };

export interface EditableIntakeClientLawsuit
  extends Partial<
    Pick<
      IntakeClientLawsuit,
      | "IntakeClientFirmId"
      | "LawsuitId"
      | "PlaintiffPartyId"
      | "CPDirectCaseProgressId"
    >
  > {}

export interface CaseMenuItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuItemId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CaseMenuItemId: number;
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
   * | Name | `CaseMenuGroupId` |
   * | Type | `Edm.Int32` |
   */
  CaseMenuGroupId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuTabId` |
   * | Type | `Edm.Int32` |
   */
  CaseMenuTabId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AlternateTabName` |
   * | Type | `Edm.String` |
   */
  AlternateTabName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AlternateGroupName` |
   * | Type | `Edm.String` |
   */
  AlternateGroupName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuGroup` |
   * | Type | `Emr.CasePacer.Data.Entities.CaseMenuGroup` |
   */
  CaseMenuGroup?: CaseMenuGroup | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuTab` |
   * | Type | `Emr.CasePacer.Data.Entities.CaseMenuTab` |
   */
  CaseMenuTab?: CaseMenuTab | null;
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
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
}

export type CaseMenuItemId = number | { CaseMenuItemId: number };

export interface EditableCaseMenuItem
  extends Pick<CaseMenuItem, "SortOrder">,
    Partial<
      Pick<
        CaseMenuItem,
        | "LawsuitTypeId"
        | "CaseMenuGroupId"
        | "CaseMenuTabId"
        | "FirmId"
        | "AlternateTabName"
        | "AlternateGroupName"
      >
    > {}

export interface CaseMenuGroup {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuGroupId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CaseMenuGroupId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  Name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CaseMenuItem)` |
   */
  CaseMenuItems?: Array<CaseMenuItem>;
}

export type CaseMenuGroupId = number | { CaseMenuGroupId: number };

export interface EditableCaseMenuGroup
  extends Partial<Pick<CaseMenuGroup, "Name">> {}

export interface CaseMenuTab {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuTabId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CaseMenuTabId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  Name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Controller` |
   * | Type | `Edm.String` |
   */
  Controller: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActionResult` |
   * | Type | `Edm.String` |
   */
  ActionResult: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DOM_Id` |
   * | Type | `Edm.String` |
   */
  DOM_Id: string | null;
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
   * | Name | `RecordSubtypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordSubtype)` |
   */
  RecordSubtypes?: Array<RecordSubtype>;
}

export type CaseMenuTabId = number | { CaseMenuTabId: number };

export interface EditableCaseMenuTab
  extends Partial<
    Pick<CaseMenuTab, "Name" | "Controller" | "ActionResult" | "DOM_Id">
  > {}

export interface RecordSubtype {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordSubtypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordSubtypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubtypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  SubtypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordTypeId` |
   * | Type | `Edm.Int32` |
   */
  RecordTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CaseMenuTabId` |
   * | Type | `Edm.Int32` |
   */
  CaseMenuTabId: number | null;
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
   * | Name | `CaseMenuTab` |
   * | Type | `Emr.CasePacer.Data.Entities.CaseMenuTab` |
   */
  CaseMenuTab?: CaseMenuTab | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordType` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordType` |
   */
  RecordType?: RecordType | null;
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
}

export type RecordSubtypeId = number | { RecordSubtypeId: number };

export interface EditableRecordSubtype
  extends Pick<RecordSubtype, "SubtypeName">,
    Partial<Pick<RecordSubtype, "FirmId" | "RecordTypeId" | "CaseMenuTabId">> {}

export interface RecordType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RecordTypeName: string;
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
   * | Name | `RecordSubtypes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.RecordSubtype)` |
   */
  RecordSubtypes?: Array<RecordSubtype>;
}

export type RecordTypeId = number | { RecordTypeId: number };

export interface EditableRecordType
  extends Pick<RecordType, "RecordTypeName"> {}

export interface DocumentTemplate {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplateID` |
   * | Type | `Edm.Int32` |
   */
  DocumentTemplateID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplateName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DocumentTemplateName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DocumentName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Phase` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Phase: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFileId` |
   * | Type | `Edm.Int32` |
   */
  RecordFileId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemTemplateID` |
   * | Type | `Edm.Int32` |
   */
  SystemTemplateID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplateId` |
   * | Type | `Edm.Int32` |
   */
  RoleTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecipientLawsuitPartyTypeId` |
   * | Type | `Edm.Int32` |
   */
  RecipientLawsuitPartyTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecipientInsuranceTypeId` |
   * | Type | `Edm.Int32` |
   */
  RecipientInsuranceTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemDocumentTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.DocumentTemplate` |
   */
  SystemDocumentTemplate?: DocumentTemplate | null;
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
   * | Name | `RecipientLawsuitPartyType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPartyType` |
   */
  RecipientLawsuitPartyType?: LawsuitPartyType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFile` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordFile` |
   */
  RecordFile?: RecordFile | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.RoleTemplate` |
   */
  RoleTemplate?: RoleTemplate | null;
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
   * | Name | `DocumentTemplatesFromSystemTemplate` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DocumentTemplate)` |
   */
  DocumentTemplatesFromSystemTemplate?: Array<DocumentTemplate>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeDocument)` |
   */
  LawsuitTypeDocuments?: Array<LawsuitTypeDocument>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Parties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Party)` |
   */
  Parties?: Array<Party>;
}

export type DocumentTemplateId = number | { DocumentTemplateID: number | null };

export interface EditableDocumentTemplate
  extends Pick<
      DocumentTemplate,
      "DocumentTemplateName" | "DocumentName" | "Phase" | "Description"
    >,
    Partial<
      Pick<
        DocumentTemplate,
        | "RecordFileId"
        | "FirmId"
        | "SystemTemplateID"
        | "RoleTemplateId"
        | "RecipientLawsuitPartyTypeId"
        | "RecipientInsuranceTypeId"
      >
    > {}

export interface AppointmentRecurDate {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecurrenceDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  RecurrenceDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  Appointment?: Appointment | null;
}

export type AppointmentRecurDateId = number | { Id: number };

export interface EditableAppointmentRecurDate
  extends Pick<AppointmentRecurDate, "RecurrenceDate">,
    Partial<Pick<AppointmentRecurDate, "AppointmentId">> {}

export interface Litigation {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LitigationId: number;
  /**
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
   * | Name | `CourtPartyId` |
   * | Type | `Edm.Int32` |
   */
  CourtPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JudgePartyId` |
   * | Type | `Edm.Int32` |
   */
  JudgePartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ComplaintSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ComplaintSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ComplaintFiledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ComplaintFiledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CrossComplaintFiledDated` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CrossComplaintFiledDated: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NOIFiledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  NOIFiledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CauseNumber` |
   * | Type | `Edm.String` |
   */
  CauseNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationNotes` |
   * | Type | `Edm.String` |
   */
  LitigationNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CourtStaff` |
   * | Type | `Edm.String` |
   */
  CourtStaff: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CourtRoom` |
   * | Type | `Edm.String` |
   */
  CourtRoom: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationName` |
   * | Type | `Edm.String` |
   */
  LitigationName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InactiveDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  InactiveDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Court` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Court?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Judge` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Judge?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ADR)` |
   */
  ADRs?: Array<ADR>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswerEnlargements` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AnswerEnlargement)` |
   */
  AnswerEnlargements?: Array<AnswerEnlargement>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Complaints` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Complaint)` |
   */
  Complaints?: Array<Complaint>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DefendantLitigationAssn)` |
   */
  DefendantLitigationAssns?: Array<DefendantLitigationAssn>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DepositionLitigationAssn)` |
   */
  DepositionLitigationAssns?: Array<DepositionLitigationAssn>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DiscoveryLitigationAssn)` |
   */
  DiscoveryLitigationAssns?: Array<DiscoveryLitigationAssn>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trials` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Trial)` |
   */
  Trials?: Array<Trial>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessLitigationAssn)` |
   */
  WitnessLitigationAssns?: Array<WitnessLitigationAssn>;
}

export type LitigationId = number | { LitigationId: number };

export interface EditableLitigation
  extends Partial<
    Pick<
      Litigation,
      | "LawsuitId"
      | "CourtPartyId"
      | "JudgePartyId"
      | "ComplaintSentDate"
      | "ComplaintFiledDate"
      | "CrossComplaintFiledDated"
      | "NOIFiledDate"
      | "CauseNumber"
      | "LitigationNotes"
      | "CourtStaff"
      | "CourtRoom"
      | "LitigationName"
      | "InactiveDate"
    >
  > {}

export interface Address {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AddressId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressTypeId` |
   * | Type | `Edm.Int32` |
   */
  AddressTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressLine1` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AddressLine1: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressLine2` |
   * | Type | `Edm.String` |
   */
  AddressLine2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `City` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  City: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `County` |
   * | Type | `Edm.String` |
   */
  County: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `State` |
   * | Type | `Edm.String` |
   */
  State: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ZipCode` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ZipCode: string;
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
   * | Name | `Country` |
   * | Type | `Edm.String` |
   */
  Country: string | null;
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
   * | Name | `AddressType` |
   * | Type | `Emr.CasePacer.Data.Entities.AddressType` |
   */
  AddressType?: AddressType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMedicalProviders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectMedicalProvider)` |
   */
  CPDirectMedicalProviders?: Array<CPDirectMedicalProvider>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyAddresses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PartyAddress)` |
   */
  PartyAddresses?: Array<PartyAddress>;
}

export type AddressId = number | { AddressId: number };

export interface EditableAddress
  extends Pick<Address, "AddressLine1" | "City" | "ZipCode" | "IsDeleted">,
    Partial<
      Pick<
        Address,
        | "AddressTypeId"
        | "AddressLine2"
        | "County"
        | "State"
        | "Country"
        | "Description"
      >
    > {}

export interface CPDirectMedicalProvider {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLawsuitId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientLawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressId` |
   * | Type | `Edm.Int32` |
   */
  AddressId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Address` |
   * | Type | `Emr.CasePacer.Data.Entities.Address` |
   */
  Address?: Address | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLawsuit` |
   */
  IntakeClientLawsuit?: IntakeClientLawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectTreatmentNotes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CPDirectTreatmentNote)` |
   */
  CPDirectTreatmentNotes?: Array<CPDirectTreatmentNote>;
}

export type CPDirectMedicalProviderId = number | { Id: number };

export interface EditableCPDirectMedicalProvider
  extends Pick<CPDirectMedicalProvider, "Name">,
    Partial<
      Pick<CPDirectMedicalProvider, "IntakeClientLawsuitId" | "AddressId">
    > {}

export interface CPDirectTreatmentNote {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMedicalProviderId` |
   * | Type | `Edm.Int32` |
   */
  CPDirectMedicalProviderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Note` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Note: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  TreatmentDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPDirectMedicalProvider` |
   * | Type | `Emr.CasePacer.Data.Entities.CPDirectMedicalProvider` |
   */
  CPDirectMedicalProvider?: CPDirectMedicalProvider | null;
}

export type CPDirectTreatmentNoteId = number | { Id: number };

export interface EditableCPDirectTreatmentNote
  extends Pick<CPDirectTreatmentNote, "Note" | "TreatmentDate">,
    Partial<Pick<CPDirectTreatmentNote, "CPDirectMedicalProviderId">> {}

export interface PartyAddress {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyAddressId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyAddressId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AddressId` |
   * | Type | `Edm.Int32` |
   */
  AddressId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsPrimary` |
   * | Type | `Edm.Boolean` |
   */
  IsPrimary: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBAddrId` |
   * | Type | `Edm.String` |
   */
  QBAddrId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Address` |
   * | Type | `Emr.CasePacer.Data.Entities.Address` |
   */
  Address?: Address | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type PartyAddressId = number | { PartyAddressId: number };

export interface EditablePartyAddress
  extends Partial<
    Pick<PartyAddress, "PartyId" | "AddressId" | "IsPrimary" | "QBAddrId">
  > {}

export interface SMSThread {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TwilioPhoneId` |
   * | Type | `Edm.Int32` |
   */
  TwilioPhoneId: number | null;
  /**
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
   * | Name | `ContactInfoId` |
   * | Type | `Edm.Int32` |
   */
  ContactInfoId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhoneNumber` |
   * | Type | `Edm.String` |
   */
  PhoneNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastReceived` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  LastReceived: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContactInfo` |
   * | Type | `Emr.CasePacer.Data.Entities.ContactInfo` |
   */
  ContactInfo?: ContactInfo | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TwilioPhone` |
   * | Type | `Emr.CasePacer.Data.Entities.TwilioPhone` |
   */
  TwilioPhone?: TwilioPhone | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSMessages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSMessage)` |
   */
  SMSMessages?: Array<SMSMessage>;
}

export type SMSThreadId = number | { Id: number };

export interface EditableSMSThread
  extends Pick<SMSThread, "LastReceived">,
    Partial<
      Pick<
        SMSThread,
        "TwilioPhoneId" | "LawsuitId" | "ContactInfoId" | "PhoneNumber"
      >
    > {}

export interface TwilioPhone {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TwilioPhoneSid` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TwilioPhoneSid: string;
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
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
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
   * | Name | `PhoneNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PhoneNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateCreated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  DateCreated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateDeactivated` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateDeactivated: string | null;
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
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSThreads` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSThread)` |
   */
  SMSThreads?: Array<SMSThread>;
}

export type TwilioPhoneId = number | { Id: number };

export interface EditableTwilioPhone
  extends Pick<
      TwilioPhone,
      "TwilioPhoneSid" | "FirmId" | "PartyId" | "PhoneNumber" | "DateCreated"
    >,
    Partial<Pick<TwilioPhone, "LawsuitId" | "DateDeactivated">> {}

export interface SMSMessage {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TwilioSMSId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TwilioSMSId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSThreadId` |
   * | Type | `Edm.Int32` |
   */
  SMSThreadId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Timestamp` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  Timestamp: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Body` |
   * | Type | `Edm.String` |
   */
  Body: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WasSent` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  WasSent: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Price` |
   * | Type | `Edm.Decimal` |
   */
  Price: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmSenderPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmSenderPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSThread` |
   * | Type | `Emr.CasePacer.Data.Entities.SMSThread` |
   */
  SMSThread?: SMSThread | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSAttachments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SMSAttachment)` |
   */
  SMSAttachments?: Array<SMSAttachment>;
}

export type SMSMessageId = number | { Id: number };

export interface EditableSMSMessage
  extends Pick<SMSMessage, "TwilioSMSId" | "Timestamp" | "WasSent">,
    Partial<
      Pick<SMSMessage, "SMSThreadId" | "Body" | "Price" | "FirmSenderPartyId">
    > {}

export interface SMSAttachment {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSMessageId` |
   * | Type | `Edm.Int32` |
   */
  SMSMessageId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int32` |
   */
  RecordId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ContentType` |
   * | Type | `Edm.String` |
   */
  ContentType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Record` |
   * | Type | `Emr.CasePacer.Data.Entities.Record` |
   */
  Record?: Record | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SMSMessage` |
   * | Type | `Emr.CasePacer.Data.Entities.SMSMessage` |
   */
  SMSMessage?: SMSMessage | null;
}

export type SMSAttachmentId = number | { Id: number };

export interface EditableSMSAttachment
  extends Partial<
    Pick<SMSAttachment, "SMSMessageId" | "RecordId" | "ContentType">
  > {}

export interface AnswerEnlargement {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswerEnlargementId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AnswerEnlargementId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ServiceObtainedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ServiceObtainedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswerReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AnswerReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswerDueDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  AnswerDueDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExtensionFiledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ExtensionFiledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExtensionGrantedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ExtensionGrantedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type AnswerEnlargementId = number | { AnswerEnlargementId: number };

export interface EditableAnswerEnlargement
  extends Pick<AnswerEnlargement, "AnswerReceivedFlag">,
    Partial<
      Pick<
        AnswerEnlargement,
        | "LitigationId"
        | "PartyId"
        | "ServiceObtainedDate"
        | "AnswerDueDate"
        | "ExtensionFiledDate"
        | "ExtensionGrantedDate"
        | "Notes"
      >
    > {}

export interface CalendarUser {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarUserId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CalendarUserId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarUserGroupId` |
   * | Type | `Edm.Int32` |
   */
  CalendarUserGroupId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarUserGroup` |
   * | Type | `Emr.CasePacer.Data.Entities.CalendarUserGroup` |
   */
  CalendarUserGroup?: CalendarUserGroup | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type CalendarUserId = number | { CalendarUserId: number };

export interface EditableCalendarUser
  extends Partial<Pick<CalendarUser, "CalendarUserGroupId" | "PartyId">> {}

export interface CalendarUserGroup {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarUserGroupId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CalendarUserGroupId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarGroupName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CalendarGroupName: string;
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
   * | Name | `CalendarUsers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CalendarUser)` |
   */
  CalendarUsers?: Array<CalendarUser>;
}

export type CalendarUserGroupId = number | { CalendarUserGroupId: number };

export interface EditableCalendarUserGroup
  extends Pick<CalendarUserGroup, "CalendarGroupName" | "FirmId"> {}

export interface Complaint {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ComplaintElementId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ComplaintElementId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ElementNumber` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ElementNumber: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ElementText` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ElementText: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ElementPartyId` |
   * | Type | `Edm.Int32` |
   */
  ElementPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ElementPartyTypeId` |
   * | Type | `Edm.Int32` |
   */
  ElementPartyTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type ComplaintId = number | { ComplaintElementId: number };

export interface EditableComplaint
  extends Pick<Complaint, "ElementNumber" | "ElementText">,
    Partial<
      Pick<Complaint, "ElementPartyId" | "ElementPartyTypeId" | "LitigationId">
    > {}

export interface Discovery {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryId: number;
  /**
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
   * | Name | `DiscoveryTargetId` |
   * | Type | `Edm.Int32` |
   */
  DiscoveryTargetId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTypeId` |
   * | Type | `Edm.Int32` |
   */
  DiscoveryTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryRecipientTypeId` |
   * | Type | `Edm.Int32` |
   */
  DiscoveryRecipientTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantPartyId` |
   * | Type | `Edm.Int32` |
   */
  DefendantPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReceivedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DueDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DueDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryDescription` |
   * | Type | `Edm.String` |
   */
  DiscoveryDescription: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExtensionFiledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ExtensionFiledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExtensionGrantedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ExtensionGrantedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discovr1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Discovr1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discovr2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Discovr2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Letter1ToPlaintiffSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Letter1ToPlaintiffSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Letter2ToPlaintiffSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Letter2ToPlaintiffSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AnswersReceivedFromPlaintiffDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  AnswersReceivedFromPlaintiffDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NonPartyRecipientPartyId` |
   * | Type | `Edm.Int32` |
   */
  NonPartyRecipientPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompelFiledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CompelFiledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompelGrantedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CompelGrantedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DueByOrder` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DueByOrder: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Defendant` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Defendant?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryRecipientType` |
   * | Type | `Emr.CasePacer.Data.Entities.DiscoveryRecipientType` |
   */
  DiscoveryRecipientType?: DiscoveryRecipientType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTarget` |
   * | Type | `Emr.CasePacer.Data.Entities.DiscoveryTarget` |
   */
  DiscoveryTarget?: DiscoveryTarget | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryType` |
   * | Type | `Emr.CasePacer.Data.Entities.DiscoveryType` |
   */
  DiscoveryType?: DiscoveryType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NonPartyRecipient` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  NonPartyRecipient?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Plaintiff?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DiscoveryLitigationAssn)` |
   */
  DiscoveryLitigationAssns?: Array<DiscoveryLitigationAssn>;
}

export type DiscoveryId = number | { DiscoveryId: number };

export interface EditableDiscovery
  extends Pick<Discovery, "DueByOrder">,
    Partial<
      Pick<
        Discovery,
        | "LawsuitId"
        | "DiscoveryTargetId"
        | "DiscoveryTypeId"
        | "DiscoveryRecipientTypeId"
        | "PlaintiffPartyId"
        | "DefendantPartyId"
        | "ReceivedDate"
        | "SentDate"
        | "DueDate"
        | "DiscoveryDescription"
        | "ExtensionFiledDate"
        | "ExtensionGrantedDate"
        | "Discovr1SentDate"
        | "Discovr2SentDate"
        | "Letter1ToPlaintiffSentDate"
        | "Letter2ToPlaintiffSentDate"
        | "AnswersReceivedFromPlaintiffDate"
        | "NonPartyRecipientPartyId"
        | "CompelFiledDate"
        | "CompelGrantedDate"
      >
    > {}

export interface DiscoveryRecipientType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryRecipientTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryRecipientTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryRecipientTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DiscoveryRecipientTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discoveries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Discovery)` |
   */
  Discoveries?: Array<Discovery>;
}

export type DiscoveryRecipientTypeId =
  | number
  | { DiscoveryRecipientTypeId: number };

export interface EditableDiscoveryRecipientType
  extends Pick<DiscoveryRecipientType, "DiscoveryRecipientTypeName"> {}

export interface DiscoveryTarget {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTargetId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryTargetId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTargetName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DiscoveryTargetName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discoveries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Discovery)` |
   */
  Discoveries?: Array<Discovery>;
}

export type DiscoveryTargetId = number | { DiscoveryTargetId: number };

export interface EditableDiscoveryTarget
  extends Pick<DiscoveryTarget, "DiscoveryTargetName"> {}

export interface DiscoveryType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DiscoveryTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discoveries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Discovery)` |
   */
  Discoveries?: Array<Discovery>;
}

export type DiscoveryTypeId = number | { DiscoveryTypeId: number };

export interface EditableDiscoveryType
  extends Pick<DiscoveryType, "DiscoveryTypeName"> {}

export interface DiscoveryLitigationAssn {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryLitigationAssnId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DiscoveryLitigationAssnId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DiscoveryId` |
   * | Type | `Edm.Int32` |
   */
  DiscoveryId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Discovery` |
   * | Type | `Emr.CasePacer.Data.Entities.Discovery` |
   */
  Discovery?: Discovery | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
}

export type DiscoveryLitigationAssnId =
  | number
  | { DiscoveryLitigationAssnId: number };

export interface EditableDiscoveryLitigationAssn
  extends Partial<
    Pick<DiscoveryLitigationAssn, "DiscoveryId" | "LitigationId">
  > {}

export interface Document {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DocumentID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplateID` |
   * | Type | `Edm.Int32` |
   */
  DocumentTemplateID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateCreated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  DateCreated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateSent` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateSent: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DateReceived` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateReceived: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedFromPartyID` |
   * | Type | `Edm.Int32` |
   */
  ReceivedFromPartyID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SentToPartyID` |
   * | Type | `Edm.Int32` |
   */
  SentToPartyID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OriginatingTicklerID` |
   * | Type | `Edm.Int32` |
   */
  OriginatingTicklerID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedTicklerID` |
   * | Type | `Edm.Int32` |
   */
  ReceivedTicklerID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RecordID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.DocumentTemplate` |
   */
  DocumentTemplate?: DocumentTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OriginatingTickler` |
   * | Type | `Emr.CasePacer.Data.Entities.Tickler` |
   */
  OriginatingTickler?: Tickler | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Record` |
   * | Type | `Emr.CasePacer.Data.Entities.Record` |
   */
  Record?: Record | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentReceivedFromParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  DocumentReceivedFromParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedTickler` |
   * | Type | `Emr.CasePacer.Data.Entities.Tickler` |
   */
  ReceivedTickler?: Tickler | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentSentToParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  DocumentSentToParty?: Party | null;
}

export type DocumentId = number | { DocumentID: number };

export interface EditableDocument
  extends Pick<Document, "LawsuitID" | "DateCreated" | "RecordID">,
    Partial<
      Pick<
        Document,
        | "DocumentTemplateID"
        | "DateSent"
        | "DateReceived"
        | "ReceivedFromPartyID"
        | "SentToPartyID"
        | "OriginatingTicklerID"
        | "ReceivedTicklerID"
      >
    > {}

export interface TicklerAnswer {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswerId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerAnswerId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   */
  TicklerTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Answer` |
   * | Type | `Edm.String` |
   */
  Answer: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Instruction` |
   * | Type | `Edm.String` |
   */
  Instruction: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResultingAction` |
   * | Type | `Edm.String` |
   */
  ResultingAction: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  TicklerTemplate?: TicklerTemplate | null;
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
   * | Name | `TicklerAnswerActions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerAnswerAction)` |
   */
  TicklerAnswerActions?: Array<TicklerAnswerAction>;
}

export type TicklerAnswerId = number | { TicklerAnswerId: number };

export interface EditableTicklerAnswer
  extends Partial<
    Pick<
      TicklerAnswer,
      "TicklerTemplateId" | "Answer" | "Instruction" | "ResultingAction"
    >
  > {}

export interface TicklerTemplate {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerTemplateId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerNum` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerNum: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerText` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TicklerText: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumDaysOffset` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  NumDaysOffset: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BenchmarkDate` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BenchmarkDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PhaseAdvancing` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PhaseAdvancing: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EventId` |
   * | Type | `Edm.Int32` |
   */
  EventId: number | null;
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
   * | Name | `RelatedEntityType` |
   * | Type | `Edm.String` |
   */
  RelatedEntityType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequiresClosedRelatedTicklers` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  RequiresClosedRelatedTicklers: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplateId` |
   * | Type | `Edm.Int32` |
   */
  RoleTemplateId: number | null;
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
   * | Name | `CreatePhaseEvent` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPhaseType` |
   */
  CreatePhaseEvent?: LawsuitPhaseType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.RoleTemplate` |
   */
  RoleTemplate?: RoleTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerPhase` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPhaseType` |
   */
  TicklerPhase?: LawsuitPhaseType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeTicklers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeTickler)` |
   */
  LawsuitTypeTicklers?: Array<LawsuitTypeTickler>;
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
   * | Name | `TicklerAnswers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerAnswer)` |
   */
  TicklerAnswers?: Array<TicklerAnswer>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriterias` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerCriteria)` |
   */
  TicklerCriterias?: Array<TicklerCriteria>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentActions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplateAction)` |
   */
  ParentActions?: Array<TicklerTemplateAction>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildActions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplateAction)` |
   */
  ChildActions?: Array<TicklerTemplateAction>;
}

export type TicklerTemplateId = number | { TicklerTemplateId: number };

export interface EditableTicklerTemplate
  extends Pick<
      TicklerTemplate,
      | "TicklerNum"
      | "TicklerText"
      | "NumDaysOffset"
      | "BenchmarkDate"
      | "PhaseAdvancing"
      | "RequiresClosedRelatedTicklers"
    >,
    Partial<
      Pick<
        TicklerTemplate,
        | "FirmId"
        | "EventId"
        | "LawsuitPhaseTypeId"
        | "RelatedEntityType"
        | "RoleTemplateId"
      >
    > {}

export interface RoleTemplate {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplateId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RoleTemplateId: number;
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
   * | Name | `RoleDescription` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RoleDescription: string;
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
   * | Name | `DefaultPartyId` |
   * | Type | `Edm.Int32` |
   */
  DefaultPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
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
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
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
   * | Name | `LawsuitRoles` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitRole)` |
   */
  LawsuitRoles?: Array<LawsuitRole>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeDocuments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeDocument)` |
   */
  LawsuitTypeDocuments?: Array<LawsuitTypeDocument>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeTicklers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LawsuitTypeTickler)` |
   */
  LawsuitTypeTicklers?: Array<LawsuitTypeTickler>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplates` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerTemplate)` |
   */
  TicklerTemplates?: Array<TicklerTemplate>;
}

export type RoleTemplateId = number | { RoleTemplateId: number };

export interface EditableRoleTemplate
  extends Pick<RoleTemplate, "FirmId" | "RoleDescription">,
    Partial<Pick<RoleTemplate, "LawsuitTypeId" | "DefaultPartyId">> {}

export interface LawsuitRole {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitRoleId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitRoleId: number;
  /**
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
   * | Name | `RoleTemplateId` |
   * | Type | `Edm.Int32` |
   */
  RoleTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  LawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.RoleTemplate` |
   */
  RoleTemplate?: RoleTemplate | null;
}

export type LawsuitRoleId = number | { LawsuitRoleId: number };

export interface EditableLawsuitRole
  extends Partial<
    Pick<LawsuitRole, "LawsuitId" | "RoleTemplateId" | "LawsuitPartyId">
  > {}

export interface InsuranceClaim {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsuranceClaimId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePolicyId` |
   * | Type | `Edm.Int32` |
   */
  InsurancePolicyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceAdjusterLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  InsuranceAdjusterLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClaimNumber` |
   * | Type | `Edm.String` |
   */
  ClaimNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedPayPerPerson` |
   * | Type | `Edm.Decimal` |
   */
  MedPayPerPerson: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnderInsuredMotorist` |
   * | Type | `Edm.Decimal` |
   */
  UnderInsuredMotorist: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UninsuredMotorist` |
   * | Type | `Edm.Decimal` |
   */
  UninsuredMotorist: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceCompanyCalledDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  InsuranceCompanyCalledDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepresentationLtr1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  RepresentationLtr1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepresentationLtr2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  RepresentationLtr2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceInfoReceivedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  InsuranceInfoReceivedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClaimNotes` |
   * | Type | `Edm.String` |
   */
  ClaimNotes: string | null;
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
   * | Name | `BodilyInjuryLiabilityPerPerson` |
   * | Type | `Edm.Decimal` |
   */
  BodilyInjuryLiabilityPerPerson: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BodilyInjuryLiabilityPerAccident` |
   * | Type | `Edm.Decimal` |
   */
  BodilyInjuryLiabilityPerAccident: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Dwelling` |
   * | Type | `Edm.Decimal` |
   */
  Dwelling: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OtherStructures` |
   * | Type | `Edm.Decimal` |
   */
  OtherStructures: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonalProperty` |
   * | Type | `Edm.Decimal` |
   */
  PersonalProperty: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossofUse` |
   * | Type | `Edm.Decimal` |
   */
  LossofUse: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OtherCoverage` |
   * | Type | `Edm.Decimal` |
   */
  OtherCoverage: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceAdjuster` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  InsuranceAdjuster?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePolicy` |
   * | Type | `Emr.CasePacer.Data.Entities.InsurancePolicy` |
   */
  InsurancePolicy?: InsurancePolicy | null;
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
   * | Name | `InsuranceClaimDemands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaimDemand)` |
   */
  InsuranceClaimDemands?: Array<InsuranceClaimDemand>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PIP)` |
   */
  PIPs?: Array<PIP>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PIPBenefit)` |
   */
  PIPBenefits?: Array<PIPBenefit>;
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
   * | Name | `SettlementItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementItem)` |
   */
  SettlementItems?: Array<SettlementItem>;
}

export type InsuranceClaimId = number | { InsuranceClaimId: number };

export interface EditableInsuranceClaim
  extends Pick<InsuranceClaim, "IsDeleted">,
    Partial<
      Pick<
        InsuranceClaim,
        | "InsurancePolicyId"
        | "InsuranceAdjusterLawsuitPartyId"
        | "ClaimNumber"
        | "MedPayPerPerson"
        | "UnderInsuredMotorist"
        | "UninsuredMotorist"
        | "InsuranceCompanyCalledDate"
        | "RepresentationLtr1SentDate"
        | "RepresentationLtr2SentDate"
        | "InsuranceInfoReceivedDate"
        | "ClaimNotes"
        | "BodilyInjuryLiabilityPerPerson"
        | "BodilyInjuryLiabilityPerAccident"
        | "Dwelling"
        | "OtherStructures"
        | "PersonalProperty"
        | "LossofUse"
        | "OtherCoverage"
      >
    > {}

export interface InsurancePolicy {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsurancePolicyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsurancePolicyId: number;
  /**
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
   * | Name | `InsuredLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsuredLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceCompanyLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsuranceCompanyLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PolicyNumber` |
   * | Type | `Edm.String` |
   */
  PolicyNumber: string | null;
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
   * | Name | `PolicyType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PolicyType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TiedToLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TiedToLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  InsuranceType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IdNumber` |
   * | Type | `Edm.String` |
   */
  IdNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlanName` |
   * | Type | `Edm.String` |
   */
  PlanName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceCompany` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  InsuranceCompany?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Insured` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Insured?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TiedTo` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  TiedTo?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaims` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaim)` |
   */
  InsuranceClaims?: Array<InsuranceClaim>;
}

export type InsurancePolicyId = number | { InsurancePolicyId: number };

export interface EditableInsurancePolicy
  extends Pick<
      InsurancePolicy,
      | "InsuredLawsuitPartyId"
      | "InsuranceCompanyLawsuitPartyId"
      | "IsDeleted"
      | "PolicyType"
      | "TiedToLawsuitPartyId"
      | "InsuranceType"
    >,
    Partial<
      Pick<
        InsurancePolicy,
        "LawsuitId" | "PolicyNumber" | "IdNumber" | "PlanName"
      >
    > {}

export interface Negotiation {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NegotiationId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  NegotiationId: number;
  /**
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
   * | Name | `NegotiationNotes` |
   * | Type | `Edm.String` |
   */
  NegotiationNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationThreatSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LitigationThreatSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DemandSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimId` |
   * | Type | `Edm.Int32` |
   */
  InsuranceClaimId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CounterOfferSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaim` |
   * | Type | `Emr.CasePacer.Data.Entities.InsuranceClaim` |
   */
  InsuranceClaim?: InsuranceClaim | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Demands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Demand)` |
   */
  Demands?: Array<Demand>;
}

export type NegotiationId = number | { NegotiationId: number };

export interface EditableNegotiation
  extends Partial<
    Pick<
      Negotiation,
      | "LawsuitId"
      | "NegotiationNotes"
      | "LitigationThreatSentDate"
      | "DemandSentDate"
      | "InsuranceClaimId"
      | "CounterOfferSentDate"
    >
  > {}

export interface Demand {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DemandId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NegotiationId` |
   * | Type | `Edm.Int32` |
   */
  NegotiationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Accepted` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Accepted: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Active` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Active: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandLetterDocUrl` |
   * | Type | `Edm.String` |
   */
  DemandLetterDocUrl: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntroductoryParagraph` |
   * | Type | `Edm.String` |
   */
  IntroductoryParagraph: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PersonalInformation` |
   * | Type | `Edm.String` |
   */
  PersonalInformation: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccidentFacts` |
   * | Type | `Edm.String` |
   */
  AccidentFacts: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiabilityLawId` |
   * | Type | `Edm.Int32` |
   */
  LiabilityLawId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiabilityLawText` |
   * | Type | `Edm.String` |
   */
  LiabilityLawText: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamagesLawId` |
   * | Type | `Edm.Int32` |
   */
  IntangibleDamagesLawId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamagesLawText` |
   * | Type | `Edm.String` |
   */
  IntangibleDamagesLawText: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CourseOfTreatmentParagraph` |
   * | Type | `Edm.String` |
   */
  CourseOfTreatmentParagraph: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfEarningsParagraph` |
   * | Type | `Edm.String` |
   */
  LossOfEarningsParagraph: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesLawId` |
   * | Type | `Edm.Int32` |
   */
  LostWagesLawId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesLawText` |
   * | Type | `Edm.String` |
   */
  LostWagesLawText: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreatedAt` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  CreatedAt: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UpdatedAt` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  UpdatedAt: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShortFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ShortFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamagesLaw` |
   * | Type | `Emr.CasePacer.Data.Entities.Law` |
   */
  IntangibleDamagesLaw?: Law | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiabilityLaw` |
   * | Type | `Emr.CasePacer.Data.Entities.Law` |
   */
  LiabilityLaw?: Law | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesLaw` |
   * | Type | `Emr.CasePacer.Data.Entities.Law` |
   */
  LostWagesLaw?: Law | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Negotiation` |
   * | Type | `Emr.CasePacer.Data.Entities.Negotiation` |
   */
  Negotiation?: Negotiation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOffers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CounterOffer)` |
   */
  CounterOffers?: Array<CounterOffer>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandLineItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DemandLineItem)` |
   */
  DemandLineItems?: Array<DemandLineItem>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimDemands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.InsuranceClaimDemand)` |
   */
  InsuranceClaimDemands?: Array<InsuranceClaimDemand>;
}

export type DemandId = number | { DemandId: number };

export interface EditableDemand
  extends Pick<
      Demand,
      "Accepted" | "Active" | "CreatedAt" | "UpdatedAt" | "ShortFlag"
    >,
    Partial<
      Pick<
        Demand,
        | "NegotiationId"
        | "DemandLetterDocUrl"
        | "IntroductoryParagraph"
        | "PersonalInformation"
        | "AccidentFacts"
        | "LiabilityLawId"
        | "LiabilityLawText"
        | "IntangibleDamagesLawId"
        | "IntangibleDamagesLawText"
        | "CourseOfTreatmentParagraph"
        | "LossOfEarningsParagraph"
        | "LostWagesLawId"
        | "LostWagesLawText"
      >
    > {}

export interface Law {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawID: number;
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
   * | Name | `LawCode` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawCode: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawText` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawText: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Active` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Active: boolean;
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
   * | Name | `IntangibleDamagesDemands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Demand)` |
   */
  IntangibleDamagesDemands?: Array<Demand>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiabilityDemands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Demand)` |
   */
  LiabilityDemands?: Array<Demand>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesDemands` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Demand)` |
   */
  LostWagesDemands?: Array<Demand>;
}

export type LawId = number | { LawID: number };

export interface EditableLaw
  extends Pick<Law, "FirmId" | "LawCode" | "LawText" | "LawType" | "Active"> {}

export interface CounterOffer {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CounterOfferId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandId` |
   * | Type | `Edm.Int32` |
   */
  DemandId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CounterOfferDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferAmount` |
   * | Type | `Edm.Decimal` |
   */
  CounterOfferAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferTypeId` |
   * | Type | `Edm.Int32` |
   */
  CounterOfferTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferNote` |
   * | Type | `Edm.String` |
   */
  CounterOfferNote: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Demand` |
   * | Type | `Emr.CasePacer.Data.Entities.Demand` |
   */
  Demand?: Demand | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferType` |
   * | Type | `Emr.CasePacer.Data.Entities.CounterOfferType` |
   */
  CounterOfferType?: CounterOfferType | null;
}

export type CounterOfferId = number | { CounterOfferId: number };

export interface EditableCounterOffer
  extends Partial<
    Pick<
      CounterOffer,
      | "DemandId"
      | "CounterOfferDate"
      | "CounterOfferAmount"
      | "CounterOfferTypeId"
      | "CounterOfferNote"
    >
  > {}

export interface CounterOfferType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  CounterOfferTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOfferTypeText` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CounterOfferTypeText: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CounterOffers` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.CounterOffer)` |
   */
  CounterOffers?: Array<CounterOffer>;
}

export type CounterOfferTypeId = number | { CounterOfferTypeId: number };

export interface EditableCounterOfferType
  extends Pick<CounterOfferType, "CounterOfferTypeText"> {}

export interface DemandLineItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandLineItemID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DemandLineItemID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DemandID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandItem` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DemandItem: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandOrder` |
   * | Type | `Edm.Byte` |
   * | Nullable | `false` |
   */
  DemandOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DollarAmount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  DollarAmount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ItemType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProviderId` |
   * | Type | `Edm.Int32` |
   */
  MedicalProviderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Demand` |
   * | Type | `Emr.CasePacer.Data.Entities.Demand` |
   */
  Demand?: Demand | null;
}

export type DemandLineItemId = number | { DemandLineItemID: number };

export interface EditableDemandLineItem
  extends Pick<
      DemandLineItem,
      "DemandID" | "DemandItem" | "DemandOrder" | "DollarAmount" | "ItemType"
    >,
    Partial<Pick<DemandLineItem, "MedicalProviderId">> {}

export interface InsuranceClaimDemand {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimDemandId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsuranceClaimDemandId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimId` |
   * | Type | `Edm.Int32` |
   */
  InsuranceClaimId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandId` |
   * | Type | `Edm.Int32` |
   */
  DemandId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Demand` |
   * | Type | `Emr.CasePacer.Data.Entities.Demand` |
   */
  Demand?: Demand | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaim` |
   * | Type | `Emr.CasePacer.Data.Entities.InsuranceClaim` |
   */
  InsuranceClaim?: InsuranceClaim | null;
}

export type InsuranceClaimDemandId =
  | number
  | { InsuranceClaimDemandId: number };

export interface EditableInsuranceClaimDemand
  extends Partial<
    Pick<InsuranceClaimDemand, "InsuranceClaimId" | "DemandId">
  > {}

export interface PIP {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PIPId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimId` |
   * | Type | `Edm.Int32` |
   */
  InsuranceClaimId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DisabliltySlipExpirationDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DisabliltySlipExpirationDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Fees` |
   * | Type | `Edm.Int32` |
   */
  Fees: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Disburse` |
   * | Type | `Edm.Int32` |
   */
  Disburse: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApplicationForBenefitsDateSent` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ApplicationForBenefitsDateSent: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaim` |
   * | Type | `Emr.CasePacer.Data.Entities.InsuranceClaim` |
   */
  InsuranceClaim?: InsuranceClaim | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PIPBenefit)` |
   */
  PIPBenefits?: Array<PIPBenefit>;
}

export type PIPId = number | { PIPId: number };

export interface EditablePIP
  extends Partial<
    Pick<
      PIP,
      | "InsuranceClaimId"
      | "DisabliltySlipExpirationDate"
      | "Fees"
      | "Disburse"
      | "Notes"
      | "ApplicationForBenefitsDateSent"
    >
  > {}

export interface PIPBenefit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefitsId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PIPBenefitsId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefitsTypeId` |
   * | Type | `Edm.Int32` |
   */
  PIPBenefitsTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimId` |
   * | Type | `Edm.Int32` |
   */
  InsuranceClaimId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  StartDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  EndDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Duration` |
   * | Type | `Edm.Int32` |
   */
  Duration: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Type` |
   * | Type | `Edm.String` |
   */
  Type: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Rate` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  Rate: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   */
  Amount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AmountReceived` |
   * | Type | `Edm.Decimal` |
   */
  AmountReceived: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Variance` |
   * | Type | `Edm.Decimal` |
   */
  Variance: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ReceivedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DemandDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DemandDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Note` |
   * | Type | `Edm.String` |
   */
  Note: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPId` |
   * | Type | `Edm.Int32` |
   */
  PIPId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ServiceProviderLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  ServiceProviderLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaim` |
   * | Type | `Emr.CasePacer.Data.Entities.InsuranceClaim` |
   */
  InsuranceClaim?: InsuranceClaim | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIP` |
   * | Type | `Emr.CasePacer.Data.Entities.PIP` |
   */
  PIP?: PIP | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefitsType` |
   * | Type | `Emr.CasePacer.Data.Entities.PIPBenefitsType` |
   */
  PIPBenefitsType?: PIPBenefitsType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ServiceProviderLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  ServiceProviderLawsuitParty?: LawsuitParty | null;
}

export type PIPBenefitId = number | { PIPBenefitsId: number };

export interface EditablePIPBenefit
  extends Pick<PIPBenefit, "Rate">,
    Partial<
      Pick<
        PIPBenefit,
        | "PIPBenefitsTypeId"
        | "InsuranceClaimId"
        | "StartDate"
        | "EndDate"
        | "Duration"
        | "Type"
        | "Amount"
        | "AmountReceived"
        | "Variance"
        | "ReceivedDate"
        | "DemandDate"
        | "Note"
        | "PIPId"
        | "ServiceProviderLawsuitPartyId"
      >
    > {}

export interface PIPBenefitsType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PIPBenefitsTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PIPBenefitsTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
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
   * | Name | `PIPBenefits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PIPBenefit)` |
   */
  PIPBenefits?: Array<PIPBenefit>;
}

export type PIPBenefitsTypeId = number | { PIPBenefitsTypeId: number };

export interface EditablePIPBenefitsType
  extends Pick<PIPBenefitsType, "TypeName">,
    Partial<Pick<PIPBenefitsType, "FirmId">> {}

export interface PropertyDamage {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyDamageId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PropertyDamageId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyTypeId` |
   * | Type | `Edm.Int32` |
   */
  PropertyTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyTypeDetails` |
   * | Type | `Edm.String` |
   */
  PropertyTypeDetails: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairCompanyPartyId` |
   * | Type | `Edm.Int32` |
   */
  RepairCompanyPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomobileMake` |
   * | Type | `Edm.String` |
   */
  AutomobileMake: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomobileModel` |
   * | Type | `Edm.String` |
   */
  AutomobileModel: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomobileMiles` |
   * | Type | `Edm.Int32` |
   */
  AutomobileMiles: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomobileFairMarketValue` |
   * | Type | `Edm.Decimal` |
   */
  AutomobileFairMarketValue: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairCost` |
   * | Type | `Edm.Decimal` |
   */
  RepairCost: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairEstimate` |
   * | Type | `Edm.Decimal` |
   */
  RepairEstimate: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdditionalExpensesIncurred` |
   * | Type | `Edm.Decimal` |
   */
  AdditionalExpensesIncurred: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdjusterLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AdjusterLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimNum` |
   * | Type | `Edm.String` |
   */
  InsuranceClaimNum: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutomobileYear` |
   * | Type | `Edm.Int32` |
   */
  AutomobileYear: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyDamageLiability` |
   * | Type | `Edm.Decimal` |
   */
  PropertyDamageLiability: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UninsuredPropertyDamage` |
   * | Type | `Edm.Decimal` |
   */
  UninsuredPropertyDamage: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnderInsuredPropertyDamage` |
   * | Type | `Edm.Decimal` |
   */
  UnderInsuredPropertyDamage: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaimId` |
   * | Type | `Edm.Int32` |
   */
  InsuranceClaimId: number | null;
  /**
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
   * | Name | `InsuranceCompanyLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InsuranceCompanyLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Adjuster` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Adjuster?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaim` |
   * | Type | `Emr.CasePacer.Data.Entities.InsuranceClaim` |
   */
  InsuranceClaim?: InsuranceClaim | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceCompany` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  InsuranceCompany?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Plaintiff?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyType` |
   * | Type | `Emr.CasePacer.Data.Entities.PropertyType` |
   */
  PropertyType?: PropertyType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepairCompany` |
   * | Type | `Emr.CasePacer.Data.Entities.Company` |
   */
  RepairCompany?: Company | null;
}

export type PropertyDamageId = number | { PropertyDamageId: number };

export interface EditablePropertyDamage
  extends Pick<
      PropertyDamage,
      | "PlaintiffLawsuitPartyId"
      | "AdjusterLawsuitPartyId"
      | "InsuranceCompanyLawsuitPartyId"
    >,
    Partial<
      Pick<
        PropertyDamage,
        | "PropertyTypeId"
        | "PropertyTypeDetails"
        | "RepairCompanyPartyId"
        | "AutomobileMake"
        | "AutomobileModel"
        | "AutomobileMiles"
        | "AutomobileFairMarketValue"
        | "RepairCost"
        | "RepairEstimate"
        | "AdditionalExpensesIncurred"
        | "InsuranceClaimNum"
        | "AutomobileYear"
        | "PropertyDamageLiability"
        | "UninsuredPropertyDamage"
        | "UnderInsuredPropertyDamage"
        | "Notes"
        | "InsuranceClaimId"
        | "LawsuitId"
      >
    > {}

export interface PropertyType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PropertyTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PropertyTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PropertyDamages` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.PropertyDamage)` |
   */
  PropertyDamages?: Array<PropertyDamage>;
}

export type PropertyTypeId = number | { PropertyTypeId: number };

export interface EditablePropertyType
  extends Pick<PropertyType, "PropertyTypeName"> {}

export interface EconomicLoss {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EconomicLossID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EconomicLossID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffPartyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmployerLawsuitPartyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EmployerLawsuitPartyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWages` |
   * | Type | `Edm.Decimal` |
   */
  LostWages: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesReq1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LostWagesReq1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesReq2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LostWagesReq2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesNeeded` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LostWagesNeeded: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesReceived` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LostWagesReceived: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesDateCalled` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LostWagesDateCalled: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesIncludeInDemand` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LostWagesIncludeInDemand: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesWhileTreating` |
   * | Type | `Edm.Decimal` |
   */
  LostWagesWhileTreating: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesWhileTreatingIncludeInDemand` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LostWagesWhileTreatingIncludeInDemand: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunity` |
   * | Type | `Edm.Decimal` |
   */
  LossOfOpportunity: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityReq1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LossOfOpportunityReq1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityReq2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LossOfOpportunityReq2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityDateCalled` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LossOfOpportunityDateCalled: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityNeeded` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LossOfOpportunityNeeded: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityReceived` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LossOfOpportunityReceived: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LossOfOpportunityIncludeInDemand` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  LossOfOpportunityIncludeInDemand: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LostWagesWhileTreatingNotes` |
   * | Type | `Edm.String` |
   */
  LostWagesWhileTreatingNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Plaintiff?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Employer` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Employer?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type EconomicLossId = number | { EconomicLossID: number };

export interface EditableEconomicLoss
  extends Pick<
      EconomicLoss,
      | "LawsuitID"
      | "PlaintiffPartyID"
      | "EmployerLawsuitPartyID"
      | "LostWagesNeeded"
      | "LostWagesReceived"
      | "LostWagesIncludeInDemand"
      | "LostWagesWhileTreatingIncludeInDemand"
      | "LossOfOpportunityNeeded"
      | "LossOfOpportunityReceived"
      | "LossOfOpportunityIncludeInDemand"
    >,
    Partial<
      Pick<
        EconomicLoss,
        | "LostWages"
        | "LostWagesReq1SentDate"
        | "LostWagesReq2SentDate"
        | "LostWagesDateCalled"
        | "LostWagesWhileTreating"
        | "LossOfOpportunity"
        | "LossOfOpportunityReq1SentDate"
        | "LossOfOpportunityReq2SentDate"
        | "LossOfOpportunityDateCalled"
        | "LostWagesWhileTreatingNotes"
      >
    > {}

export interface Expense {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ExpenseId: number;
  /**
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
   * | Name | `PayeePartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PayeePartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseTypeId` |
   * | Type | `Edm.Int32` |
   */
  ExpenseTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientId` |
   * | Type | `Edm.Int32` |
   */
  ClientId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyId` |
   * | Type | `Edm.Int32` |
   */
  AttorneyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountNumber` |
   * | Type | `Edm.String` |
   */
  AccountNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CheckNumber` |
   * | Type | `Edm.String` |
   */
  CheckNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ExpenseDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   */
  Amount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Memo` |
   * | Type | `Edm.String` |
   */
  Memo: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PayeeMemo` |
   * | Type | `Edm.String` |
   */
  PayeeMemo: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementID` |
   * | Type | `Edm.Int32` |
   */
  SettlementID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `VoidFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  VoidFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBTxnId` |
   * | Type | `Edm.String` |
   */
  QBTxnId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBActionType` |
   * | Type | `Edm.String` |
   */
  QBActionType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBBankAcct` |
   * | Type | `Edm.String` |
   */
  QBBankAcct: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBExpenseAcct` |
   * | Type | `Edm.String` |
   */
  QBExpenseAcct: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityId` |
   * | Type | `Edm.Int32` |
   */
  RelatedEntityId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityType` |
   * | Type | `Edm.String` |
   */
  RelatedEntityType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaidDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  PaidDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  PaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodId` |
   * | Type | `Edm.Int32` |
   */
  PaymentMethodId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InternalNotes` |
   * | Type | `Edm.String` |
   */
  InternalNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvoiceNumber` |
   * | Type | `Edm.String` |
   */
  InvoiceNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseSyncFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ExpenseSyncFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentPartyId` |
   * | Type | `Edm.Int32` |
   */
  PaymentPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPPaidDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CPPaidDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CPPaidAmount` |
   * | Type | `Edm.Decimal` |
   */
  CPPaidAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DueDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DueDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Attorney` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Attorney?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Plaintiff?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseType` |
   * | Type | `Emr.CasePacer.Data.Entities.ExpenseType` |
   */
  ExpenseType?: ExpenseType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Payee` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Payee?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethod` |
   * | Type | `Emr.CasePacer.Data.Entities.PaymentMethod` |
   */
  PaymentMethod?: PaymentMethod | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  PaymentParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlement` |
   * | Type | `Emr.CasePacer.Data.Entities.Settlement` |
   */
  Settlement?: Settlement | null;
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
   * | Name | `SettlementExpenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementExpense)` |
   */
  SettlementExpenses?: Array<SettlementExpense>;
}

export type ExpenseId = number | { ExpenseId: number };

export interface EditableExpense
  extends Pick<Expense, "PayeePartyId" | "VoidFlag" | "ExpenseSyncFlag">,
    Partial<
      Pick<
        Expense,
        | "LawsuitId"
        | "ExpenseTypeId"
        | "ClientId"
        | "AttorneyId"
        | "AccountNumber"
        | "CheckNumber"
        | "ExpenseDate"
        | "Amount"
        | "Memo"
        | "PayeeMemo"
        | "SettlementID"
        | "QBTxnId"
        | "QBActionType"
        | "QBBankAcct"
        | "QBExpenseAcct"
        | "RelatedEntityId"
        | "RelatedEntityType"
        | "PaidDate"
        | "PaymentAmount"
        | "PaymentMethodId"
        | "InternalNotes"
        | "InvoiceNumber"
        | "PaymentPartyId"
        | "CPPaidDate"
        | "CPPaidAmount"
        | "DueDate"
      >
    > {}

export interface ExpenseType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ExpenseTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ExpenseTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  Expenses?: Array<Expense>;
}

export type ExpenseTypeId = number | { ExpenseTypeId: number };

export interface EditableExpenseType
  extends Pick<ExpenseType, "ExpenseTypeName"> {}

export interface PaymentMethod {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PaymentMethodId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentMethodName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PaymentMethodName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Expense)` |
   */
  Expenses?: Array<Expense>;
}

export type PaymentMethodId = number | { PaymentMethodId: number };

export interface EditablePaymentMethod
  extends Pick<PaymentMethod, "PaymentMethodName"> {}

export interface Settlement {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffPartyId: number;
  /**
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
   * | Name | `AttyFeesPct` |
   * | Type | `Edm.Decimal` |
   */
  AttyFeesPct: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttyFeesTotal` |
   * | Type | `Edm.Decimal` |
   */
  AttyFeesTotal: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   */
  Amount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettleDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  SettleDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  PlaintiffParty?: Party | null;
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
   * | Name | `SettlementExpenses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementExpense)` |
   */
  SettlementExpenses?: Array<SettlementExpense>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementItem)` |
   */
  SettlementItems?: Array<SettlementItem>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementLienSubs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementLienSub)` |
   */
  SettlementLienSubs?: Array<SettlementLienSub>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementMedicalProviders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementMedicalProvider)` |
   */
  SettlementMedicalProviders?: Array<SettlementMedicalProvider>;
}

export type SettlementId = number | { SettlementId: number };

export interface EditableSettlement
  extends Pick<Settlement, "PlaintiffPartyId">,
    Partial<
      Pick<
        Settlement,
        "LawsuitId" | "AttyFeesPct" | "AttyFeesTotal" | "Amount" | "SettleDate"
      >
    > {}

export interface SettlementExpense {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementExpenseId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementExpenseId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementId` |
   * | Type | `Edm.Int32` |
   */
  SettlementId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpenseId` |
   * | Type | `Edm.Int32` |
   */
  ExpenseId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Include` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Include: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expense` |
   * | Type | `Emr.CasePacer.Data.Entities.Expense` |
   */
  Expense?: Expense | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlement` |
   * | Type | `Emr.CasePacer.Data.Entities.Settlement` |
   */
  Settlement?: Settlement | null;
}

export type SettlementExpenseId = number | { SettlementExpenseId: number };

export interface EditableSettlementExpense
  extends Pick<SettlementExpense, "Include">,
    Partial<Pick<SettlementExpense, "SettlementId" | "ExpenseId">> {}

export interface SettlementItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementItemId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementItemId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementId` |
   * | Type | `Edm.Int32` |
   */
  SettlementId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ItemType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Amount` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  Amount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Received` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Received: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Deposited` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Deposited: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Include` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Include: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClaimId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ClaimId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsuranceClaim` |
   * | Type | `Emr.CasePacer.Data.Entities.InsuranceClaim` |
   */
  InsuranceClaim?: InsuranceClaim | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlement` |
   * | Type | `Emr.CasePacer.Data.Entities.Settlement` |
   */
  Settlement?: Settlement | null;
}

export type SettlementItemId = number | { SettlementItemId: number };

export interface EditableSettlementItem
  extends Pick<
      SettlementItem,
      "ItemType" | "Amount" | "Received" | "Deposited" | "Include" | "ClaimId"
    >,
    Partial<Pick<SettlementItem, "SettlementId">> {}

export interface SettlementLienSub {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementLienSubId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementLienSubId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementId` |
   * | Type | `Edm.Int32` |
   */
  SettlementId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubrogationId` |
   * | Type | `Edm.Int32` |
   */
  LienSubrogationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LienSubType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CheckNumber` |
   * | Type | `Edm.Int32` |
   */
  CheckNumber: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClaimAmount` |
   * | Type | `Edm.Decimal` |
   */
  ClaimAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  PaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NoticeReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  NoticeReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeLetterSentFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AttorneyFeeLetterSentFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemizedStatementRequiredFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ItemizedStatementRequiredFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemizedStatementReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ItemizedStatementReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmountConfirmationFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PaymentAmountConfirmationFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmountReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PaymentAmountReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Include` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Include: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubrogation` |
   * | Type | `Emr.CasePacer.Data.Entities.LienSubrogation` |
   */
  LienSubrogation?: LienSubrogation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlement` |
   * | Type | `Emr.CasePacer.Data.Entities.Settlement` |
   */
  Settlement?: Settlement | null;
}

export type SettlementLienSubId = number | { SettlementLienSubId: number };

export interface EditableSettlementLienSub
  extends Pick<
      SettlementLienSub,
      | "LienSubType"
      | "NoticeReceivedFlag"
      | "AttorneyFeeLetterSentFlag"
      | "ItemizedStatementRequiredFlag"
      | "ItemizedStatementReceivedFlag"
      | "PaymentAmountConfirmationFlag"
      | "PaymentAmountReceivedFlag"
      | "Include"
    >,
    Partial<
      Pick<
        SettlementLienSub,
        | "SettlementId"
        | "LienSubrogationId"
        | "CheckNumber"
        | "ClaimAmount"
        | "PaymentAmount"
      >
    > {}

export interface LienSubrogation {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubrogationId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LienSubrogationId: number;
  /**
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
   * | Name | `SubrogeeLienHolderPartyId` |
   * | Type | `Edm.Int32` |
   */
  SubrogeeLienHolderPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PaymentTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Type` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Type: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NoticeReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  NoticeReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeLetterSentFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AttorneyFeeLetterSentFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemizedStatementRequiredFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ItemizedStatementRequiredFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemizedStatementReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ItemizedStatementReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmountConfirmationFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PaymentAmountConfirmationFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmountReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PaymentAmountReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClaimNumber` |
   * | Type | `Edm.String` |
   */
  ClaimNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClaimAmount` |
   * | Type | `Edm.Decimal` |
   */
  ClaimAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  PaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubrogationNotes` |
   * | Type | `Edm.String` |
   */
  LienSubrogationNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubrogeeLienHolderOtherName` |
   * | Type | `Edm.String` |
   */
  SubrogeeLienHolderOtherName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlanName` |
   * | Type | `Edm.String` |
   */
  PlanName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentType` |
   * | Type | `Emr.CasePacer.Data.Entities.LienSubrogationPaymentType` |
   */
  PaymentType?: LienSubrogationPaymentType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Plaintiff?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubrogeeLienHolder` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  SubrogeeLienHolder?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementLienSubs` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementLienSub)` |
   */
  SettlementLienSubs?: Array<SettlementLienSub>;
}

export type LienSubrogationId = number | { LienSubrogationId: number };

export interface EditableLienSubrogation
  extends Pick<
      LienSubrogation,
      | "PlaintiffPartyId"
      | "PaymentTypeId"
      | "Type"
      | "NoticeReceivedFlag"
      | "AttorneyFeeLetterSentFlag"
      | "ItemizedStatementRequiredFlag"
      | "ItemizedStatementReceivedFlag"
      | "PaymentAmountConfirmationFlag"
      | "PaymentAmountReceivedFlag"
    >,
    Partial<
      Pick<
        LienSubrogation,
        | "LawsuitId"
        | "SubrogeeLienHolderPartyId"
        | "ClaimNumber"
        | "ClaimAmount"
        | "PaymentAmount"
        | "LienSubrogationNotes"
        | "SubrogeeLienHolderOtherName"
        | "PlanName"
      >
    > {}

export interface LienSubrogationPaymentType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PaymentTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PaymentTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  PaymentTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LienSubrogations` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.LienSubrogation)` |
   */
  LienSubrogations?: Array<LienSubrogation>;
}

export type LienSubrogationPaymentTypeId = number | { PaymentTypeId: number };

export interface EditableLienSubrogationPaymentType
  extends Pick<LienSubrogationPaymentType, "PaymentTypeName"> {}

export interface SettlementMedicalProvider {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementMedicalProviderId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementMedicalProviderId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementId` |
   * | Type | `Edm.Int32` |
   */
  SettlementId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProviderId` |
   * | Type | `Edm.Int32` |
   */
  MedicalProviderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CheckNumber` |
   * | Type | `Edm.Int32` |
   */
  CheckNumber: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentCost` |
   * | Type | `Edm.Decimal` |
   */
  TreatmentCost: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementAmount` |
   * | Type | `Edm.Decimal` |
   */
  SettlementAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Verify` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Verify: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Include` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Include: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProvider` |
   * | Type | `Emr.CasePacer.Data.Entities.MedicalProvider` |
   */
  MedicalProvider?: MedicalProvider | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Settlement` |
   * | Type | `Emr.CasePacer.Data.Entities.Settlement` |
   */
  Settlement?: Settlement | null;
}

export type SettlementMedicalProviderId =
  | number
  | { SettlementMedicalProviderId: number };

export interface EditableSettlementMedicalProvider
  extends Pick<SettlementMedicalProvider, "Verify" | "Include">,
    Partial<
      Pick<
        SettlementMedicalProvider,
        | "SettlementId"
        | "MedicalProviderId"
        | "CheckNumber"
        | "TreatmentCost"
        | "SettlementAmount"
        | "Notes"
      >
    > {}

export interface MedicalProvider {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProviderId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  MedicalProviderId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProviderCompanyPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  MedicalProviderCompanyPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalInventorySentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  MedicalInventorySentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalInventoryReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  MedicalInventoryReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountNumber` |
   * | Type | `Edm.String` |
   */
  AccountNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentCostFuture` |
   * | Type | `Edm.Decimal` |
   */
  TreatmentCostFuture: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NextAppointmentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  NextAppointmentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastDateCalled` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LastDateCalled: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProtectLetterSentFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ProtectLetterSentFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillsNeededFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  BillsNeededFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillsReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  BillsReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillsRequestDate1` |
   * | Type | `Edm.DateTimeOffset` |
   */
  BillsRequestDate1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillsRequestDate2` |
   * | Type | `Edm.DateTimeOffset` |
   */
  BillsRequestDate2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalRecordsNeededFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  MedicalRecordsNeededFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalRecordsReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  MedicalRecordsReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalRecordsRequestDate1` |
   * | Type | `Edm.DateTimeOffset` |
   */
  MedicalRecordsRequestDate1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalRecordsRequestDate2` |
   * | Type | `Edm.DateTimeOffset` |
   */
  MedicalRecordsRequestDate2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NarrativeReportNeededFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  NarrativeReportNeededFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NarrativeReportReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  NarrativeReportReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NarrativeReportRequestDate1` |
   * | Type | `Edm.DateTimeOffset` |
   */
  NarrativeReportRequestDate1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NarrativeReportRequestDate2` |
   * | Type | `Edm.DateTimeOffset` |
   */
  NarrativeReportRequestDate2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EMRProviderId` |
   * | Type | `Edm.Int32` |
   */
  EMRProviderId: number | null;
  /**
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
   * | Name | `OutsourcedDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  OutsourcedDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InsideNotes` |
   * | Type | `Edm.String` |
   */
  InsideNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Company` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Company?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Plaintiff` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Plaintiff?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementMedicalProviders` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SettlementMedicalProvider)` |
   */
  SettlementMedicalProviders?: Array<SettlementMedicalProvider>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Treatments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Treatment)` |
   */
  Treatments?: Array<Treatment>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentNotes` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TreatmentNote)` |
   */
  TreatmentNotes?: Array<TreatmentNote>;
}

export type MedicalProviderId = number | { MedicalProviderId: number };

export interface EditableMedicalProvider
  extends Pick<
      MedicalProvider,
      | "MedicalProviderCompanyPartyId"
      | "PlaintiffPartyId"
      | "MedicalInventoryReceivedFlag"
      | "ProtectLetterSentFlag"
      | "BillsNeededFlag"
      | "BillsReceivedFlag"
      | "MedicalRecordsNeededFlag"
      | "MedicalRecordsReceivedFlag"
      | "NarrativeReportNeededFlag"
      | "NarrativeReportReceivedFlag"
    >,
    Partial<
      Pick<
        MedicalProvider,
        | "MedicalInventorySentDate"
        | "AccountNumber"
        | "TreatmentCostFuture"
        | "NextAppointmentDate"
        | "LastDateCalled"
        | "BillsRequestDate1"
        | "BillsRequestDate2"
        | "MedicalRecordsRequestDate1"
        | "MedicalRecordsRequestDate2"
        | "NarrativeReportRequestDate1"
        | "NarrativeReportRequestDate2"
        | "EMRProviderId"
        | "LawsuitId"
        | "OutsourcedDate"
        | "InsideNotes"
      >
    > {}

export interface Treatment {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TreatmentId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProviderId` |
   * | Type | `Edm.Int32` |
   */
  MedicalProviderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  TreatmentDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentAmount` |
   * | Type | `Edm.Decimal` |
   */
  TreatmentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentEndDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TreatmentEndDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UnpaidAmount` |
   * | Type | `Edm.Decimal` |
   */
  UnpaidAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReductionAmount` |
   * | Type | `Edm.Decimal` |
   */
  ReductionAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientPaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  ClientPaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HealthInsPaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  HealthInsPaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PipPaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  PipPaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicarePaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  MedicarePaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicaidPaymentAmount` |
   * | Type | `Edm.Decimal` |
   */
  MedicaidPaymentAmount: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Note` |
   * | Type | `Edm.String` |
   */
  Note: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProvider` |
   * | Type | `Emr.CasePacer.Data.Entities.MedicalProvider` |
   */
  MedicalProvider?: MedicalProvider | null;
}

export type TreatmentId = number | { TreatmentId: number };

export interface EditableTreatment
  extends Pick<Treatment, "TreatmentDate">,
    Partial<
      Pick<
        Treatment,
        | "MedicalProviderId"
        | "TreatmentAmount"
        | "TreatmentEndDate"
        | "UnpaidAmount"
        | "ReductionAmount"
        | "ClientPaymentAmount"
        | "HealthInsPaymentAmount"
        | "PipPaymentAmount"
        | "MedicarePaymentAmount"
        | "MedicaidPaymentAmount"
        | "Note"
      >
    > {}

export interface TreatmentNote {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentNotesId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TreatmentNotesId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProviderId` |
   * | Type | `Edm.Int32` |
   */
  MedicalProviderId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NoteDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  NoteDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalProvider` |
   * | Type | `Emr.CasePacer.Data.Entities.MedicalProvider` |
   */
  MedicalProvider?: MedicalProvider | null;
}

export type TreatmentNoteId = number | { TreatmentNotesId: number };

export interface EditableTreatmentNote
  extends Pick<TreatmentNote, "NoteDate">,
    Partial<Pick<TreatmentNote, "MedicalProviderId" | "Notes">> {}

export interface Hearing {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  HearingId: number;
  /**
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
   * | Name | `HearingTypeId` |
   * | Type | `Edm.Int32` |
   */
  HearingTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `JudgePartyId` |
   * | Type | `Edm.Int32` |
   */
  JudgePartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatementSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  StatementSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientConfirmSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ClientConfirmSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ConfirmationCallsFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ConfirmationCallsFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DecisionTypeId` |
   * | Type | `Edm.Byte` |
   * | Nullable | `false` |
   */
  DecisionTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DecisionDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DecisionDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DecisionSummary` |
   * | Type | `Edm.String` |
   */
  DecisionSummary: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingType` |
   * | Type | `Emr.CasePacer.Data.Entities.HearingType` |
   */
  HearingType?: HearingType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Judge` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Judge?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
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

export type HearingId = number | { HearingId: number };

export interface EditableHearing
  extends Pick<Hearing, "ConfirmationCallsFlag" | "DecisionTypeId">,
    Partial<
      Pick<
        Hearing,
        | "LawsuitId"
        | "HearingTypeId"
        | "JudgePartyId"
        | "Notes"
        | "StatementSentDate"
        | "ClientConfirmSentDate"
        | "DecisionDate"
        | "DecisionSummary"
      >
    > {}

export interface HearingType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  HearingTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  HearingTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingTypeRole` |
   * | Type | `Edm.String` |
   */
  HearingTypeRole: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hearings` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Hearing)` |
   */
  Hearings?: Array<Hearing>;
}

export type HearingTypeId = number | { HearingTypeId: number };

export interface EditableHearingType
  extends Pick<HearingType, "HearingTypeName">,
    Partial<Pick<HearingType, "HearingTypeRole">> {}

export interface CalendarEntryRecur {
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CalendarEntryId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  CalendarEntryId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeName` |
   * | Type | `Edm.String` |
   */
  AppointmentTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmId` |
   * | Type | `Edm.Int32` |
   */
  FirmId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserId` |
   * | Type | `Edm.Int32` |
   */
  UserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserFullName` |
   * | Type | `Edm.String` |
   */
  UserFullName: string | null;
  /**
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
   * | Name | `LawsuitNumber` |
   * | Type | `Edm.String` |
   */
  LawsuitNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   */
  PlaintiffPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientName` |
   * | Type | `Edm.String` |
   */
  ClientName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyPartyId` |
   * | Type | `Edm.Int32` |
   */
  AttorneyPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalPartyId` |
   * | Type | `Edm.Int32` |
   */
  ParalegalPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyDisplayName` |
   * | Type | `Edm.String` |
   */
  AttorneyDisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalDisplayName` |
   * | Type | `Edm.String` |
   */
  ParalegalDisplayName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyColor` |
   * | Type | `Edm.String` |
   */
  AttorneyColor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParalegalColor` |
   * | Type | `Edm.String` |
   */
  ParalegalColor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LiteralName` |
   * | Type | `Edm.String` |
   */
  LiteralName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPhaseTypeName` |
   * | Type | `Edm.String` |
   */
  LawsuitPhaseTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeName` |
   * | Type | `Edm.String` |
   */
  LawsuitTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserColor` |
   * | Type | `Edm.String` |
   */
  UserColor: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Subject` |
   * | Type | `Edm.String` |
   */
  Subject: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Location` |
   * | Type | `Edm.String` |
   */
  Location: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartTime` |
   * | Type | `Edm.Duration` |
   */
  StartTime: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DurationInMinutes` |
   * | Type | `Edm.Int32` |
   */
  DurationInMinutes: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RRule` |
   * | Type | `Edm.String` |
   */
  RRule: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExDate` |
   * | Type | `Edm.String` |
   */
  ExDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsRecurring` |
   * | Type | `Edm.Boolean` |
   */
  IsRecurring: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsAuto` |
   * | Type | `Edm.Boolean` |
   */
  IsAuto: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TimezoneOffset` |
   * | Type | `Edm.Int32` |
   */
  TimezoneOffset: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DaylightSavingFlag` |
   * | Type | `Edm.Boolean` |
   */
  DaylightSavingFlag: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TimezoneType` |
   * | Type | `Edm.Int32` |
   */
  TimezoneType: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ApptDescr` |
   * | Type | `Edm.String` |
   */
  ApptDescr: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventTypeName` |
   * | Type | `Edm.String` |
   */
  AppointmentEventTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentEventSubTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubTypeName` |
   * | Type | `Edm.String` |
   */
  AppointmentEventSubTypeName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADRId` |
   * | Type | `Edm.Int32` |
   */
  ADRId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionId` |
   * | Type | `Edm.Int32` |
   */
  DepositionId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialId` |
   * | Type | `Edm.Int32` |
   */
  TrialId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HearingId` |
   * | Type | `Edm.Int32` |
   */
  HearingId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Modified` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Modified: string | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  StartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `User` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  User?: CasePacerUser | null;
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
   * | Name | `PlaintiffParty` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  PlaintiffParty?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  Appointment?: Appointment | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentEventSubType` |
   * | Type | `Emr.CasePacer.Data.Entities.AppointmentEventSubType` |
   */
  AppointmentEventSubType?: AppointmentEventSubType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ADR` |
   * | Type | `Emr.CasePacer.Data.Entities.ADR` |
   */
  ADR?: ADR | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Deposition` |
   * | Type | `Emr.CasePacer.Data.Entities.Deposition` |
   */
  Deposition?: Deposition | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trial` |
   * | Type | `Emr.CasePacer.Data.Entities.Trial` |
   */
  Trial?: Trial | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Hearing` |
   * | Type | `Emr.CasePacer.Data.Entities.Hearing` |
   */
  Hearing?: Hearing | null;
}

export type CalendarEntryRecurId = {
  CalendarEntryId: string;
  StartDate: string;
};

export interface EditableCalendarEntryRecur
  extends Pick<CalendarEntryRecur, "CalendarEntryId" | "StartDate">,
    Partial<
      Pick<
        CalendarEntryRecur,
        | "AppointmentTypeName"
        | "FirmId"
        | "UserId"
        | "UserFullName"
        | "LawsuitId"
        | "LawsuitNumber"
        | "PlaintiffPartyId"
        | "ClientName"
        | "AttorneyPartyId"
        | "ParalegalPartyId"
        | "AttorneyDisplayName"
        | "ParalegalDisplayName"
        | "AttorneyColor"
        | "ParalegalColor"
        | "LiteralName"
        | "LawsuitPhaseTypeName"
        | "LawsuitTypeName"
        | "UserColor"
        | "Subject"
        | "Location"
        | "StartTime"
        | "DurationInMinutes"
        | "RRule"
        | "ExDate"
        | "IsRecurring"
        | "IsAuto"
        | "TimezoneOffset"
        | "DaylightSavingFlag"
        | "TimezoneType"
        | "ApptDescr"
        | "AppointmentEventTypeName"
        | "AppointmentTypeId"
        | "AppointmentId"
        | "AppointmentEventSubTypeId"
        | "AppointmentEventSubTypeName"
        | "ADRId"
        | "DepositionId"
        | "TrialId"
        | "HearingId"
        | "Modified"
      >
    > {}

export interface Trial {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TrialID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialChoice` |
   * | Type | `Edm.String` |
   */
  TrialChoice: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialNotes` |
   * | Type | `Edm.String` |
   */
  TrialNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialRequestSentDate1` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TrialRequestSentDate1: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialRequestSentDate2` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TrialRequestSentDate2: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PSummaryJudgement` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PSummaryJudgement: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DSummaryJudgement` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DSummaryJudgement: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
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
   * | Name | `TrialExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TrialExhibit)` |
   */
  TrialExhibits?: Array<TrialExhibit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialPleadings` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TrialPleading)` |
   */
  TrialPleadings?: Array<TrialPleading>;
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

export type TrialId = number | { TrialID: number };

export interface EditableTrial
  extends Pick<Trial, "PSummaryJudgement" | "DSummaryJudgement">,
    Partial<
      Pick<
        Trial,
        | "TrialChoice"
        | "TrialNotes"
        | "TrialRequestSentDate1"
        | "TrialRequestSentDate2"
        | "LitigationId"
      >
    > {}

export interface TrialExhibit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialExhibitId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TrialExhibitId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialId` |
   * | Type | `Edm.Int32` |
   */
  TrialId: number | null;
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trial` |
   * | Type | `Emr.CasePacer.Data.Entities.Trial` |
   */
  Trial?: Trial | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentTrialExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentTrialExhibit)` |
   */
  WitnessExhibitDocumentTrialExhibits?: Array<WitnessExhibitDocumentTrialExhibit>;
}

export type TrialExhibitId = number | { TrialExhibitId: number };

export interface EditableTrialExhibit
  extends Pick<TrialExhibit, "Description" | "FirmId">,
    Partial<Pick<TrialExhibit, "TrialId">> {}

export interface WitnessExhibitDocumentTrialExhibit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentTrialExhibitsId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessExhibitDocumentTrialExhibitsId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentId` |
   * | Type | `Edm.Int32` |
   */
  WitnessExhibitDocumentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialExhibitId` |
   * | Type | `Edm.Int32` |
   */
  TrialExhibitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitPartyType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  WitnessExhibitPartyType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialExhibit` |
   * | Type | `Emr.CasePacer.Data.Entities.TrialExhibit` |
   */
  TrialExhibit?: TrialExhibit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocument` |
   * | Type | `Emr.CasePacer.Data.Entities.WitnessExhibitDocument` |
   */
  WitnessExhibitDocument?: WitnessExhibitDocument | null;
}

export type WitnessExhibitDocumentTrialExhibitId =
  | number
  | { WitnessExhibitDocumentTrialExhibitsId: number };

export interface EditableWitnessExhibitDocumentTrialExhibit
  extends Pick<WitnessExhibitDocumentTrialExhibit, "WitnessExhibitPartyType">,
    Partial<
      Pick<
        WitnessExhibitDocumentTrialExhibit,
        "WitnessExhibitDocumentId" | "TrialExhibitId"
      >
    > {}

export interface WitnessExhibitDocument {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessExhibitDocumentId: number;
  /**
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
   * | Name | `IntroParagraph` |
   * | Type | `Edm.String` |
   */
  IntroParagraph: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartiesSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartiesSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessesSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessesSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ProvidersSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ProvidersSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmployersSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EmployersSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OtherWitnessesSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  OtherWitnessesSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardWitnessesSectionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  StandardWitnessesSectionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentParties` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentParty)` |
   */
  WitnessExhibitDocumentParties?: Array<WitnessExhibitDocumentParty>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentStandardExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentStandardExhibit)` |
   */
  WitnessExhibitDocumentStandardExhibits?: Array<WitnessExhibitDocumentStandardExhibit>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentStandardWitnesses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentStandardWitness)` |
   */
  WitnessExhibitDocumentStandardWitnesses?: Array<WitnessExhibitDocumentStandardWitness>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentTrialExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentTrialExhibit)` |
   */
  WitnessExhibitDocumentTrialExhibits?: Array<WitnessExhibitDocumentTrialExhibit>;
}

export type WitnessExhibitDocumentId =
  | number
  | { WitnessExhibitDocumentId: number };

export interface EditableWitnessExhibitDocument
  extends Pick<
      WitnessExhibitDocument,
      | "PartiesSectionOrder"
      | "WitnessesSectionOrder"
      | "ProvidersSectionOrder"
      | "EmployersSectionOrder"
      | "OtherWitnessesSectionOrder"
      | "StandardWitnessesSectionOrder"
    >,
    Partial<Pick<WitnessExhibitDocument, "LawsuitId" | "IntroParagraph">> {}

export interface WitnessExhibitDocumentParty {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentPartiesId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessExhibitDocumentPartiesId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentId` |
   * | Type | `Edm.Int32` |
   */
  WitnessExhibitDocumentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitPartyType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  WitnessExhibitPartyType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocument` |
   * | Type | `Emr.CasePacer.Data.Entities.WitnessExhibitDocument` |
   */
  WitnessExhibitDocument?: WitnessExhibitDocument | null;
}

export type WitnessExhibitDocumentPartyId =
  | number
  | { WitnessExhibitDocumentPartiesId: number };

export interface EditableWitnessExhibitDocumentParty
  extends Pick<WitnessExhibitDocumentParty, "WitnessExhibitPartyType">,
    Partial<
      Pick<WitnessExhibitDocumentParty, "WitnessExhibitDocumentId" | "PartyId">
    > {}

export interface WitnessExhibitDocumentStandardExhibit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentStandardExhibitsId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessExhibitDocumentStandardExhibitsId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentId` |
   * | Type | `Edm.Int32` |
   */
  WitnessExhibitDocumentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardExhibitId` |
   * | Type | `Edm.Int32` |
   */
  StandardExhibitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitPartyType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  WitnessExhibitPartyType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardExhibit` |
   * | Type | `Emr.CasePacer.Data.Entities.StandardExhibit` |
   */
  StandardExhibit?: StandardExhibit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocument` |
   * | Type | `Emr.CasePacer.Data.Entities.WitnessExhibitDocument` |
   */
  WitnessExhibitDocument?: WitnessExhibitDocument | null;
}

export type WitnessExhibitDocumentStandardExhibitId =
  | number
  | { WitnessExhibitDocumentStandardExhibitsId: number };

export interface EditableWitnessExhibitDocumentStandardExhibit
  extends Pick<
      WitnessExhibitDocumentStandardExhibit,
      "WitnessExhibitPartyType"
    >,
    Partial<
      Pick<
        WitnessExhibitDocumentStandardExhibit,
        "WitnessExhibitDocumentId" | "StandardExhibitId"
      >
    > {}

export interface StandardExhibit {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardExhibitId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  StandardExhibitId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardExhibitName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  StandardExhibitName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Sequence` |
   * | Type | `Edm.Int16` |
   * | Nullable | `false` |
   */
  Sequence: number;
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
   * | Name | `WitnessExhibitDocumentStandardExhibits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentStandardExhibit)` |
   */
  WitnessExhibitDocumentStandardExhibits?: Array<WitnessExhibitDocumentStandardExhibit>;
}

export type StandardExhibitId = number | { StandardExhibitId: number };

export interface EditableStandardExhibit
  extends Pick<StandardExhibit, "StandardExhibitName" | "Sequence">,
    Partial<Pick<StandardExhibit, "FirmPartyId">> {}

export interface WitnessExhibitDocumentStandardWitness {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentStandardWitnessesId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessExhibitDocumentStandardWitnessesId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocumentId` |
   * | Type | `Edm.Int32` |
   */
  WitnessExhibitDocumentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardWitnessId` |
   * | Type | `Edm.Int32` |
   */
  StandardWitnessId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitPartyType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  WitnessExhibitPartyType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardWitness` |
   * | Type | `Emr.CasePacer.Data.Entities.StandardWitness` |
   */
  StandardWitness?: StandardWitness | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessExhibitDocument` |
   * | Type | `Emr.CasePacer.Data.Entities.WitnessExhibitDocument` |
   */
  WitnessExhibitDocument?: WitnessExhibitDocument | null;
}

export type WitnessExhibitDocumentStandardWitnessId =
  | number
  | { WitnessExhibitDocumentStandardWitnessesId: number };

export interface EditableWitnessExhibitDocumentStandardWitness
  extends Pick<
      WitnessExhibitDocumentStandardWitness,
      "WitnessExhibitPartyType"
    >,
    Partial<
      Pick<
        WitnessExhibitDocumentStandardWitness,
        "WitnessExhibitDocumentId" | "StandardWitnessId"
      >
    > {}

export interface StandardWitness {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardWitnessId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  StandardWitnessId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StandardWitnessName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  StandardWitnessName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Sequence` |
   * | Type | `Edm.Byte` |
   */
  Sequence: number | null;
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
   * | Name | `WitnessExhibitDocumentStandardWitnesses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessExhibitDocumentStandardWitness)` |
   */
  WitnessExhibitDocumentStandardWitnesses?: Array<WitnessExhibitDocumentStandardWitness>;
}

export type StandardWitnessId = number | { StandardWitnessId: number };

export interface EditableStandardWitness
  extends Pick<StandardWitness, "StandardWitnessName">,
    Partial<Pick<StandardWitness, "FirmPartyId" | "Sequence">> {}

export interface TrialPleading {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialPleadingID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TrialPleadingID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialID` |
   * | Type | `Edm.Int32` |
   */
  TrialID: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Item` |
   * | Type | `Edm.String` |
   */
  Item: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CompletedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  CompletedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DueDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DueDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordId` |
   * | Type | `Edm.Int32` |
   */
  RecordId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Record` |
   * | Type | `Emr.CasePacer.Data.Entities.Record` |
   */
  Record?: Record | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Trial` |
   * | Type | `Emr.CasePacer.Data.Entities.Trial` |
   */
  Trial?: Trial | null;
}

export type TrialPleadingId = number | { TrialPleadingID: number };

export interface EditableTrialPleading
  extends Pick<TrialPleading, "CompletedFlag">,
    Partial<Pick<TrialPleading, "TrialID" | "Item" | "DueDate" | "RecordId">> {}

export interface SettlementDocument {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementDocumentId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SettlementDocumentId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttyFeesPct` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  AttyFeesPct: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttyFeesTotal` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  AttyFeesTotal: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Party` |
   * | Type | `Emr.CasePacer.Data.Entities.Party` |
   */
  Party?: Party | null;
}

export type SettlementDocumentId = number | { SettlementDocumentId: number };

export interface EditableSettlementDocument
  extends Pick<
    SettlementDocument,
    "PlaintiffPartyId" | "AttyFeesPct" | "AttyFeesTotal"
  > {}

export interface AttorneyFeeInterest {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterestTypeId` |
   * | Type | `Edm.Int32` |
   */
  AttorneyFeeInterestTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterestValue` |
   * | Type | `Edm.Decimal` |
   * | Nullable | `false` |
   */
  AttorneyFeeInterestValue: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterestType` |
   * | Type | `Emr.CasePacer.Data.Entities.AttorneyFeeInterestType` |
   */
  AttorneyFeeInterestType?: AttorneyFeeInterestType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  LawsuitParty?: LawsuitParty | null;
}

export type AttorneyFeeInterestId = number | { LawsuitPartyId: number | null };

export interface EditableAttorneyFeeInterest
  extends Pick<AttorneyFeeInterest, "AttorneyFeeInterestValue">,
    Partial<Pick<AttorneyFeeInterest, "AttorneyFeeInterestTypeId">> {}

export interface AttorneyFeeInterestType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterestTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AttorneyFeeInterestTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterestTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AttorneyFeeInterestTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyFeeInterests` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.AttorneyFeeInterest)` |
   */
  AttorneyFeeInterests?: Array<AttorneyFeeInterest>;
}

export type AttorneyFeeInterestTypeId =
  | number
  | { AttorneyFeeInterestTypeId: number };

export interface EditableAttorneyFeeInterestType
  extends Pick<AttorneyFeeInterestType, "AttorneyFeeInterestTypeName"> {}

export interface DefendantAttorney {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantAttorneyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DefendantAttorneyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLawsuitPartyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DefendantLawsuitPartyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttorneyLawsuitPartyID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AttorneyLawsuitPartyID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Attorney` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Attorney?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Defendant` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  Defendant?: LawsuitParty | null;
}

export type DefendantAttorneyId = number | { DefendantAttorneyID: number };

export interface EditableDefendantAttorney
  extends Pick<
    DefendantAttorney,
    "DefendantLawsuitPartyID" | "AttorneyLawsuitPartyID"
  > {}

export interface DefendantLawsuitParty {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DefendantLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepLtr1SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  RepLtr1SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RepLtr2SentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  RepLtr2SentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ResponseRcvdDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ResponseRcvdDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  LawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.DefendantLitigationAssn)` |
   */
  DefendantLitigationAssns?: Array<DefendantLitigationAssn>;
}

export type DefendantLawsuitPartyId =
  | number
  | { DefendantLawsuitPartyId: number };

export interface EditableDefendantLawsuitParty
  extends Partial<
    Pick<
      DefendantLawsuitParty,
      | "LawsuitPartyId"
      | "RepLtr1SentDate"
      | "RepLtr2SentDate"
      | "ResponseRcvdDate"
    >
  > {}

export interface DefendantLitigationAssn {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLitigationAssnId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DefendantLitigationAssnId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  DefendantLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefendantLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.DefendantLawsuitParty` |
   */
  DefendantLawsuitParty?: DefendantLawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
}

export type DefendantLitigationAssnId =
  | number
  | { DefendantLitigationAssnId: number };

export interface EditableDefendantLitigationAssn
  extends Partial<
    Pick<DefendantLitigationAssn, "DefendantLawsuitPartyId" | "LitigationId">
  > {}

export interface Investigator {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvestigatorId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InvestigatorId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvestigatorLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  InvestigatorLawsuitPartyId: number;
  /**
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
   * | Name | `Cost` |
   * | Type | `Edm.Decimal` |
   */
  Cost: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Notes` |
   * | Type | `Edm.String` |
   */
  Notes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InvestigatorLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  InvestigatorLawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type InvestigatorId = number | { InvestigatorId: number };

export interface EditableInvestigator
  extends Pick<Investigator, "InvestigatorLawsuitPartyId">,
    Partial<Pick<Investigator, "LawsuitId" | "Cost" | "Notes">> {}

export interface MedicalEvaluation {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalEvaluationId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  MedicalEvaluationId: number;
  /**
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
   * | Name | `StatusId` |
   * | Type | `Edm.Int32` |
   */
  StatusId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SpecialtyId` |
   * | Type | `Edm.Int32` |
   */
  SpecialtyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  AppointmentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentTime` |
   * | Type | `Edm.Duration` |
   */
  AppointmentTime: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TransportationNeeded` |
   * | Type | `Edm.Boolean` |
   */
  TransportationNeeded: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PrepDone` |
   * | Type | `Edm.Boolean` |
   */
  PrepDone: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PreMENotes` |
   * | Type | `Edm.String` |
   */
  PreMENotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReportReceived` |
   * | Type | `Edm.Boolean` |
   */
  ReportReceived: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CutoffId` |
   * | Type | `Edm.Int32` |
   */
  CutoffId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CutoffDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  CutoffDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CutoffNotes` |
   * | Type | `Edm.String` |
   */
  CutoffNotes: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequestorLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  RequestorLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DoctorLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  DoctorLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PrepByLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  PrepByLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DoctorLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  DoctorLawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PrepByLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  PrepByLawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RequestorLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  RequestorLawsuitParty?: LawsuitParty | null;
}

export type MedicalEvaluationId = number | { MedicalEvaluationId: number };

export interface EditableMedicalEvaluation
  extends Partial<
    Pick<
      MedicalEvaluation,
      | "LawsuitId"
      | "StatusId"
      | "SpecialtyId"
      | "AppointmentDate"
      | "AppointmentTime"
      | "TransportationNeeded"
      | "PrepDone"
      | "PreMENotes"
      | "ReportReceived"
      | "CutoffId"
      | "CutoffDate"
      | "CutoffNotes"
      | "RequestorLawsuitPartyId"
      | "DoctorLawsuitPartyId"
      | "PrepByLawsuitPartyId"
    >
  > {}

export interface PlaintiffLawsuitParty {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PlaintiffLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PlaintiffLawsuitPartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HipaaComplianceRcvd` |
   * | Type | `Edm.DateTimeOffset` |
   */
  HipaaComplianceRcvd: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalInventorySentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  MedicalInventorySentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MedicalInventoryReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  MedicalInventoryReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TreatmentReleaseDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  TreatmentReleaseDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Injury` |
   * | Type | `Edm.String` |
   */
  Injury: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ThankYouLtrSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  ThankYouLtrSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SettlementProcessSentDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  SettlementProcessSentDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  LawsuitParty?: LawsuitParty | null;
}

export type PlaintiffLawsuitPartyId =
  | number
  | { PlaintiffLawsuitPartyId: number };

export interface EditablePlaintiffLawsuitParty
  extends Pick<PlaintiffLawsuitParty, "MedicalInventoryReceivedFlag">,
    Partial<
      Pick<
        PlaintiffLawsuitParty,
        | "LawsuitPartyId"
        | "HipaaComplianceRcvd"
        | "MedicalInventorySentDate"
        | "TreatmentReleaseDate"
        | "Injury"
        | "ThankYouLtrSentDate"
        | "SettlementProcessSentDate"
      >
    > {}

export interface PoliceReport {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PoliceReportId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PoliceReportId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PoliceDepartmentLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PoliceDepartmentLawsuitPartyId: number;
  /**
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
   * | Name | `DateRequested` |
   * | Type | `Edm.DateTimeOffset` |
   */
  DateRequested: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NeededFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  NeededFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReceivedFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ReceivedFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Cost` |
   * | Type | `Edm.Decimal` |
   */
  Cost: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PoliceReportNumber` |
   * | Type | `Edm.String` |
   */
  PoliceReportNumber: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PoliceDepartmentLawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  PoliceDepartmentLawsuitParty?: LawsuitParty | null;
}

export type PoliceReportId = number | { PoliceReportId: number };

export interface EditablePoliceReport
  extends Pick<
      PoliceReport,
      "PoliceDepartmentLawsuitPartyId" | "NeededFlag" | "ReceivedFlag"
    >,
    Partial<
      Pick<
        PoliceReport,
        "LawsuitId" | "DateRequested" | "Cost" | "PoliceReportNumber"
      >
    > {}

export interface Witness {
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatementNeeded` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  StatementNeeded: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StatementReceived` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  StatementReceived: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuestionnaireNeeded` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  QuestionnaireNeeded: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuestionnaireReceived` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  QuestionnaireReceived: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuestionnaireRequest1Date` |
   * | Type | `Edm.DateTimeOffset` |
   */
  QuestionnaireRequest1Date: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuestionnaireRequest2Date` |
   * | Type | `Edm.DateTimeOffset` |
   */
  QuestionnaireRequest2Date: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessNotes` |
   * | Type | `Edm.String` |
   */
  WitnessNotes: string | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitParty` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitParty` |
   */
  LawsuitParty?: LawsuitParty | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessType` |
   * | Type | `Emr.CasePacer.Data.Entities.WitnessType` |
   */
  WitnessType?: WitnessType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessLitigationAssns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.WitnessLitigationAssn)` |
   */
  WitnessLitigationAssns?: Array<WitnessLitigationAssn>;
}

export type WitnessId = number | { LawsuitPartyId: number | null };

export interface EditableWitness
  extends Pick<
      Witness,
      | "WitnessTypeId"
      | "StatementNeeded"
      | "StatementReceived"
      | "QuestionnaireNeeded"
      | "QuestionnaireReceived"
    >,
    Partial<
      Pick<
        Witness,
        | "QuestionnaireRequest1Date"
        | "QuestionnaireRequest2Date"
        | "WitnessNotes"
      >
    > {}

export interface WitnessType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessTypeID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessTypeID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  WitnessTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Witnesses` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Witness)` |
   */
  Witnesses?: Array<Witness>;
}

export type WitnessTypeId = number | { WitnessTypeID: number };

export interface EditableWitnessType
  extends Pick<WitnessType, "WitnessTypeName"> {}

export interface WitnessLitigationAssn {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessLitigationAssnId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  WitnessLitigationAssnId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `WitnessLawsuitPartyId` |
   * | Type | `Edm.Int32` |
   */
  WitnessLawsuitPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Witness` |
   * | Type | `Emr.CasePacer.Data.Entities.Witness` |
   */
  Witness?: Witness | null;
}

export type WitnessLitigationAssnId =
  | number
  | { WitnessLitigationAssnId: number };

export interface EditableWitnessLitigationAssn
  extends Partial<
    Pick<WitnessLitigationAssn, "WitnessLawsuitPartyId" | "LitigationId">
  > {}

export interface LawsuitTypeDocument {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeDocumentId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitTypeDocumentId: number;
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
   * | Name | `DocumentTemplateId` |
   * | Type | `Edm.Int32` |
   */
  DocumentTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplateId` |
   * | Type | `Edm.Int32` |
   */
  RoleTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.DocumentTemplate` |
   */
  DocumentTemplate?: DocumentTemplate | null;
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
   * | Name | `RoleTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.RoleTemplate` |
   */
  RoleTemplate?: RoleTemplate | null;
}

export type LawsuitTypeDocumentId = number | { LawsuitTypeDocumentId: number };

export interface EditableLawsuitTypeDocument
  extends Partial<
    Pick<
      LawsuitTypeDocument,
      "LawsuitTypeId" | "DocumentTemplateId" | "RoleTemplateId"
    >
  > {}

export interface LawsuitTypeTickler {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitTypeTicklerId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitTypeTicklerId: number;
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
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   */
  TicklerTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RoleTemplateId` |
   * | Type | `Edm.Int32` |
   */
  RoleTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultToPrimaryAttorney` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DefaultToPrimaryAttorney: boolean;
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
   * | Name | `RoleTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.RoleTemplate` |
   */
  RoleTemplate?: RoleTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  TicklerTemplate?: TicklerTemplate | null;
}

export type LawsuitTypeTicklerId = number | { LawsuitTypeTicklerId: number };

export interface EditableLawsuitTypeTickler
  extends Pick<LawsuitTypeTickler, "DefaultToPrimaryAttorney">,
    Partial<
      Pick<
        LawsuitTypeTickler,
        "LawsuitTypeId" | "TicklerTemplateId" | "RoleTemplateId"
      >
    > {}

export interface TicklerCriteria {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerCriteriaId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaActionId` |
   * | Type | `Edm.Int32` |
   */
  TicklerCriteriaActionId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BooleanAndFlag` |
   * | Type | `Edm.Boolean` |
   */
  BooleanAndFlag: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   */
  TicklerTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaAction` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerCriteriaAction` |
   */
  TicklerCriteriaAction?: TicklerCriteriaAction | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplate` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  TicklerTemplate?: TicklerTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaSets` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerCriteriaSet)` |
   */
  TicklerCriteriaSets?: Array<TicklerCriteriaSet>;
}

export type TicklerCriteriaId = number | { TicklerCriteriaId: number };

export interface EditableTicklerCriteria
  extends Partial<
    Pick<
      TicklerCriteria,
      "TicklerCriteriaActionId" | "BooleanAndFlag" | "TicklerTemplateId"
    >
  > {}

export interface TicklerCriteriaSet {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaSetId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerCriteriaSetId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaId` |
   * | Type | `Edm.Int32` |
   */
  TicklerCriteriaId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BooleanAndFlag` |
   * | Type | `Edm.Boolean` |
   */
  BooleanAndFlag: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteria` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerCriteria` |
   */
  TicklerCriteria?: TicklerCriteria | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerCriteriaItem)` |
   */
  TicklerCriteriaItems?: Array<TicklerCriteriaItem>;
}

export type TicklerCriteriaSetId = number | { TicklerCriteriaSetId: number };

export interface EditableTicklerCriteriaSet
  extends Partial<
    Pick<TicklerCriteriaSet, "TicklerCriteriaId" | "BooleanAndFlag">
  > {}

export interface TicklerCriteriaItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaItemId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerCriteriaItemId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaSetId` |
   * | Type | `Edm.Int32` |
   */
  TicklerCriteriaSetId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Attribute` |
   * | Type | `Edm.String` |
   */
  Attribute: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaOperatorId` |
   * | Type | `Edm.Int32` |
   */
  TicklerCriteriaOperatorId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ComparisonValue` |
   * | Type | `Edm.String` |
   */
  ComparisonValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaOperator` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerCriteriaOperator` |
   */
  TicklerCriteriaOperator?: TicklerCriteriaOperator | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaSet` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerCriteriaSet` |
   */
  TicklerCriteriaSet?: TicklerCriteriaSet | null;
}

export type TicklerCriteriaItemId = number | { TicklerCriteriaItemId: number };

export interface EditableTicklerCriteriaItem
  extends Partial<
    Pick<
      TicklerCriteriaItem,
      | "TicklerCriteriaSetId"
      | "Attribute"
      | "TicklerCriteriaOperatorId"
      | "ComparisonValue"
    >
  > {}

export interface TicklerCriteriaOperator {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaOperatorId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerCriteriaOperatorId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaOperatorName` |
   * | Type | `Edm.String` |
   */
  TicklerCriteriaOperatorName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DataType` |
   * | Type | `Edm.String` |
   */
  DataType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HasComparisonValue` |
   * | Type | `Edm.Boolean` |
   */
  HasComparisonValue: boolean | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaItems` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerCriteriaItem)` |
   */
  TicklerCriteriaItems?: Array<TicklerCriteriaItem>;
}

export type TicklerCriteriaOperatorId =
  | number
  | { TicklerCriteriaOperatorId: number };

export interface EditableTicklerCriteriaOperator
  extends Partial<
    Pick<
      TicklerCriteriaOperator,
      "TicklerCriteriaOperatorName" | "DataType" | "HasComparisonValue"
    >
  > {}

export interface TicklerCriteriaAction {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaActionId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerCriteriaActionId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriteriaActionName` |
   * | Type | `Edm.String` |
   */
  TicklerCriteriaActionName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerCriterias` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerCriteria)` |
   */
  TicklerCriterias?: Array<TicklerCriteria>;
}

export type TicklerCriteriaActionId =
  | number
  | { TicklerCriteriaActionId: number };

export interface EditableTicklerCriteriaAction
  extends Partial<Pick<TicklerCriteriaAction, "TicklerCriteriaActionName">> {}

export interface TicklerTemplateAction {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateActionId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerTemplateActionId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerTemplateId` |
   * | Type | `Edm.Int32` |
   */
  TicklerTemplateId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildTicklerTemplateId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ChildTicklerTemplateId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Answer` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Answer: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentTickler` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  ParentTickler?: TicklerTemplate | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ChildTickler` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerTemplate` |
   */
  ChildTickler?: TicklerTemplate | null;
}

export type TicklerTemplateActionId =
  | number
  | { TicklerTemplateActionId: number };

export interface EditableTicklerTemplateAction
  extends Pick<TicklerTemplateAction, "ChildTicklerTemplateId" | "Answer">,
    Partial<Pick<TicklerTemplateAction, "TicklerTemplateId">> {}

export interface TicklerAnswerAction {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswerActionId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerAnswerActionId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswerId` |
   * | Type | `Edm.Int32` |
   */
  TicklerAnswerId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerActionTypeId` |
   * | Type | `Edm.Int32` |
   */
  TicklerActionTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActionOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ActionOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TargetTicklerNumber` |
   * | Type | `Edm.Int32` |
   */
  TargetTicklerNumber: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NumberOfDays` |
   * | Type | `Edm.Int32` |
   */
  NumberOfDays: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DocumentTemplateName` |
   * | Type | `Edm.String` |
   */
  DocumentTemplateName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Destination` |
   * | Type | `Edm.String` |
   */
  Destination: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ColumnIdentifier` |
   * | Type | `Edm.String` |
   */
  ColumnIdentifier: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DataValue` |
   * | Type | `Edm.String` |
   */
  DataValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerActionType` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerActionType` |
   */
  TicklerActionType?: TicklerActionType | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswer` |
   * | Type | `Emr.CasePacer.Data.Entities.TicklerAnswer` |
   */
  TicklerAnswer?: TicklerAnswer | null;
}

export type TicklerAnswerActionId = number | { TicklerAnswerActionId: number };

export interface EditableTicklerAnswerAction
  extends Pick<TicklerAnswerAction, "ActionOrder">,
    Partial<
      Pick<
        TicklerAnswerAction,
        | "TicklerAnswerId"
        | "TicklerActionTypeId"
        | "TargetTicklerNumber"
        | "NumberOfDays"
        | "DocumentTemplateName"
        | "Destination"
        | "ColumnIdentifier"
        | "DataValue"
      >
    > {}

export interface TicklerActionType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerActionTypeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TicklerActionTypeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerActionTypeName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TicklerActionTypeName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TicklerAnswerActions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.TicklerAnswerAction)` |
   */
  TicklerAnswerActions?: Array<TicklerAnswerAction>;
}

export type TicklerActionTypeId = number | { TicklerActionTypeId: number };

export interface EditableTicklerActionType
  extends Pick<TicklerActionType, "TicklerActionTypeName"> {}

export interface DepositionLitigationAssn {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionLitigationAssnId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  DepositionLitigationAssnId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DepositionId` |
   * | Type | `Edm.Int32` |
   */
  DepositionId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LitigationId` |
   * | Type | `Edm.Int32` |
   */
  LitigationId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Deposition` |
   * | Type | `Emr.CasePacer.Data.Entities.Deposition` |
   */
  Deposition?: Deposition | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Litigation` |
   * | Type | `Emr.CasePacer.Data.Entities.Litigation` |
   */
  Litigation?: Litigation | null;
}

export type DepositionLitigationAssnId =
  | number
  | { DepositionLitigationAssnId: number };

export interface EditableDepositionLitigationAssn
  extends Partial<
    Pick<DepositionLitigationAssn, "DepositionId" | "LitigationId">
  > {}

export interface AppointmentCustomType {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  Name: string | null;
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointments` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Appointment)` |
   */
  Appointments?: Array<Appointment>;
}

export type AppointmentCustomTypeId = number | { Id: number };

export interface EditableAppointmentCustomType
  extends Pick<AppointmentCustomType, "FirmId">,
    Partial<Pick<AppointmentCustomType, "Name">> {}

export interface AppointmentHistory {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentHistoryId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AppointmentHistoryId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TimeStamp` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  TimeStamp: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserId` |
   * | Type | `Edm.Int32` |
   */
  UserId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  Appointment?: Appointment | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type AppointmentHistoryId = number | { AppointmentHistoryId: number };

export interface EditableAppointmentHistory
  extends Pick<AppointmentHistory, "TimeStamp" | "Description">,
    Partial<Pick<AppointmentHistory, "AppointmentId" | "UserId">> {}

export interface AppointmentIntegration {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AppointmentId` |
   * | Type | `Edm.Int32` |
   */
  AppointmentId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntegrationType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  IntegrationType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntegrationKey` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  IntegrationKey: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Appointment` |
   * | Type | `Emr.CasePacer.Data.Entities.Appointment` |
   */
  Appointment?: Appointment | null;
}

export type AppointmentIntegrationId =
  | number
  | { AppointmentId: number | null };

export interface EditableAppointmentIntegration
  extends Pick<AppointmentIntegration, "IntegrationType" | "IntegrationKey"> {}

export interface MailMerge {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MailMergeId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  MailMergeId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MergeField` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  MergeField: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `htmlDiv` |
   * | Type | `Edm.String` |
   */
  htmlDiv: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitCategory` |
   * | Type | `Edm.String` |
   */
  LawsuitCategory: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyTypeId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitPartyTypeId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ParentObject` |
   * | Type | `Edm.String` |
   */
  ParentObject: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ObjectType` |
   * | Type | `Edm.String` |
   */
  ObjectType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Attribute` |
   * | Type | `Edm.String` |
   */
  Attribute: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AttributeDescription` |
   * | Type | `Edm.String` |
   */
  AttributeDescription: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultValue` |
   * | Type | `Edm.String` |
   */
  DefaultValue: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Format` |
   * | Type | `Edm.String` |
   */
  Format: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Note` |
   * | Type | `Edm.String` |
   */
  Note: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitPartyType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitPartyType` |
   */
  LawsuitPartyType?: LawsuitPartyType | null;
}

export type MailMergeId = number | { MailMergeId: number };

export interface EditableMailMerge
  extends Pick<MailMerge, "MergeField">,
    Partial<
      Pick<
        MailMerge,
        | "htmlDiv"
        | "LawsuitCategory"
        | "LawsuitPartyTypeId"
        | "ParentObject"
        | "ObjectType"
        | "Attribute"
        | "AttributeDescription"
        | "DefaultValue"
        | "Format"
        | "Note"
      >
    > {}

export interface Email {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EmailId: number;
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
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFileId` |
   * | Type | `Edm.Int32` |
   */
  RecordFileId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  EmailDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailSubject` |
   * | Type | `Edm.String` |
   */
  EmailSubject: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailFrom` |
   * | Type | `Edm.String` |
   */
  EmailFrom: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailTo` |
   * | Type | `Edm.String` |
   */
  EmailTo: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailCc` |
   * | Type | `Edm.String` |
   */
  EmailCc: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailBcc` |
   * | Type | `Edm.String` |
   */
  EmailBcc: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailAttCount` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EmailAttCount: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EmailSize` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  EmailSize: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
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
   * | Name | `RecordFile` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordFile` |
   */
  RecordFile?: RecordFile | null;
}

export type EmailId = number | { EmailId: number };

export interface EditableEmail
  extends Pick<Email, "FirmId" | "EmailAttCount" | "EmailSize">,
    Partial<
      Pick<
        Email,
        | "LawsuitId"
        | "RecordFileId"
        | "EmailDate"
        | "EmailSubject"
        | "EmailFrom"
        | "EmailTo"
        | "EmailCc"
        | "EmailBcc"
      >
    > {}

export interface RecordFileRelationship {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RecordFileId` |
   * | Type | `Edm.Int32` |
   */
  RecordFileId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RelatedEntityType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RelatedEntityId: number;
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
   * | Name | `RecordFile` |
   * | Type | `Emr.CasePacer.Data.Entities.RecordFile` |
   */
  RecordFile?: RecordFile | null;
}

export type RecordFileRelationshipId = number | { Id: number };

export interface EditableRecordFileRelationship
  extends Pick<RecordFileRelationship, "RelatedEntityType" | "RelatedEntityId">,
    Partial<Pick<RecordFileRelationship, "RecordFileId" | "Description">> {}

export interface AccountingSyncGL {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `GLAccount` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  GLAccount: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
}

export type AccountingSyncGLId = number | { LawsuitTypeId: number | null };

export interface EditableAccountingSyncGL
  extends Pick<AccountingSyncGL, "GLAccount"> {}

export interface LawsuitTypeClientForm {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
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
   * | Name | `ClientFormId` |
   * | Type | `Edm.Int32` |
   */
  ClientFormId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientForm` |
   * | Type | `Emr.CasePacer.Data.Entities.ClientForm` |
   */
  ClientForm?: ClientForm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitType` |
   * | Type | `Emr.CasePacer.Data.Entities.LawsuitType` |
   */
  LawsuitType?: LawsuitType | null;
}

export type LawsuitTypeClientFormId = number | { Id: number };

export interface EditableLawsuitTypeClientForm
  extends Pick<LawsuitTypeClientForm, "SortOrder">,
    Partial<Pick<LawsuitTypeClientForm, "LawsuitTypeId" | "ClientFormId">> {}

export interface ClientFormQuestion {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormScreenId` |
   * | Type | `Edm.Int32` |
   */
  ClientFormScreenId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntity` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RelatedEntity: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ComponentId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ComponentId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Question` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Question: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowCriteriaJson` |
   * | Type | `Edm.String` |
   */
  ShowCriteriaJson: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `HelperDataJson` |
   * | Type | `Edm.String` |
   */
  HelperDataJson: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormComponent` |
   * | Type | `Emr.CasePacer.Data.Entities.ClientFormComponent` |
   */
  ClientFormComponent?: ClientFormComponent | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormScreen` |
   * | Type | `Emr.CasePacer.Data.Entities.ClientFormScreen` |
   */
  ClientFormScreen?: ClientFormScreen | null;
}

export type ClientFormQuestionId = number | { Id: number };

export interface EditableClientFormQuestion
  extends Pick<
      ClientFormQuestion,
      "RelatedEntity" | "ComponentId" | "SortOrder" | "Question"
    >,
    Partial<
      Pick<
        ClientFormQuestion,
        "ClientFormScreenId" | "ShowCriteriaJson" | "HelperDataJson"
      >
    > {}

export interface ClientFormComponent {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   */
  Name: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CsType` |
   * | Type | `Edm.String` |
   */
  CsType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormQuestions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ClientFormQuestion)` |
   */
  ClientFormQuestions?: Array<ClientFormQuestion>;
}

export type ClientFormComponentId = number | { Id: number };

export interface EditableClientFormComponent
  extends Partial<Pick<ClientFormComponent, "Name" | "CsType">> {}

export interface ClientFormScreen {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormId` |
   * | Type | `Edm.Int32` |
   */
  ClientFormId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowCriteriaJson` |
   * | Type | `Edm.String` |
   */
  ShowCriteriaJson: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientForm` |
   * | Type | `Emr.CasePacer.Data.Entities.ClientForm` |
   */
  ClientForm?: ClientForm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormQuestions` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ClientFormQuestion)` |
   */
  ClientFormQuestions?: Array<ClientFormQuestion>;
}

export type ClientFormScreenId = number | { Id: number };

export interface EditableClientFormScreen
  extends Pick<ClientFormScreen, "SortOrder" | "Name">,
    Partial<Pick<ClientFormScreen, "ClientFormId" | "ShowCriteriaJson">> {}

export interface ClientFormStatus {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientForms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ClientForm)` |
   */
  ClientForms?: Array<ClientForm>;
}

export type ClientFormStatusId = number | { Id: number };

export interface EditableClientFormStatus
  extends Pick<ClientFormStatus, "Name"> {}

export interface IntakeClientFirm {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLoginId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientLoginId: number | null;
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLogin` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLogin` |
   */
  IntakeClientLogin?: IntakeClientLogin | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.IntakeClientLawsuit)` |
   */
  IntakeClientLawsuits?: Array<IntakeClientLawsuit>;
}

export type IntakeClientFirmId = number | { Id: number };

export interface EditableIntakeClientFirm
  extends Pick<IntakeClientFirm, "FirmId">,
    Partial<Pick<IntakeClientFirm, "IntakeClientLoginId">> {}

export interface CPDirectPushToken {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExpoPushToken` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ExpoPushToken: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLoginId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientLoginId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DoNotSend` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  DoNotSend: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLogin` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLogin` |
   */
  IntakeClientLogin?: IntakeClientLogin | null;
}

export type CPDirectPushTokenId = number | { Id: number };

export interface EditableCPDirectPushToken
  extends Pick<CPDirectPushToken, "ExpoPushToken" | "DoNotSend">,
    Partial<Pick<CPDirectPushToken, "IntakeClientLoginId">> {}

export interface IntakeClientSession {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLoginId` |
   * | Type | `Edm.Int32` |
   */
  IntakeClientLoginId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BearerToken` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BearerToken: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeviceId` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  DeviceId: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expiration` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  Expiration: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntakeClientLogin` |
   * | Type | `Emr.CasePacer.Data.Entities.IntakeClientLogin` |
   */
  IntakeClientLogin?: IntakeClientLogin | null;
}

export type IntakeClientSessionId = number | { Id: number };

export interface EditableIntakeClientSession
  extends Pick<IntakeClientSession, "BearerToken" | "DeviceId" | "Expiration">,
    Partial<Pick<IntakeClientSession, "IntakeClientLoginId">> {}

export interface LawsuitClientForm {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
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
   * | Name | `FormJson` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FormJson: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ClientFormId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ClientFormId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SortOrder` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SortOrder: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Submitted` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Submitted: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastUpdated` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  LastUpdated: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type LawsuitClientFormId = number | { Id: number };

export interface EditableLawsuitClientForm
  extends Pick<
      LawsuitClientForm,
      "FormJson" | "ClientFormId" | "SortOrder" | "Submitted" | "LastUpdated"
    >,
    Partial<Pick<LawsuitClientForm, "LawsuitId">> {}

export interface LawsuitCompanionGroup {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitCompanionGroupId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitCompanionGroupId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitCompanionGroupName` |
   * | Type | `Edm.String` |
   */
  LawsuitCompanionGroupName: string | null;
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
   * | Name | `Lawsuits` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.Lawsuit)` |
   */
  Lawsuits?: Array<Lawsuit>;
}

export type LawsuitCompanionGroupId =
  | number
  | { LawsuitCompanionGroupId: number };

export interface EditableLawsuitCompanionGroup
  extends Pick<LawsuitCompanionGroup, "FirmId">,
    Partial<Pick<LawsuitCompanionGroup, "LawsuitCompanionGroupName">> {}

export interface Evidence {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EvidenceID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  EvidenceID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitID` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitID: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Item` |
   * | Type | `Edm.String` |
   */
  Item: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ItemReceived` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ItemReceived: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type EvidenceId = number | { EvidenceID: number };

export interface EditableEvidence
  extends Pick<Evidence, "LawsuitID" | "ItemReceived">,
    Partial<Pick<Evidence, "Item">> {}

export interface LawsuitAbbr {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitAbbrId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitAbbrId: number;
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
   * | Name | `LawsuitId` |
   * | Type | `Edm.Int32` |
   */
  LawsuitId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitAbbrName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitAbbrName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Active` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Active: boolean;
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
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type LawsuitAbbrId = number | { LawsuitAbbrId: number };

export interface EditableLawsuitAbbr
  extends Pick<LawsuitAbbr, "FirmId" | "LawsuitAbbrName" | "Active">,
    Partial<Pick<LawsuitAbbr, "LawsuitId">> {}

export interface LawsuitRecordRequest {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitRecordRequestId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  LawsuitRecordRequestId: number;
  /**
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
   * | Name | `OrderNumber` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  OrderNumber: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `OrderContents` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  OrderContents: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsComplete` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsComplete: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastChecked` |
   * | Type | `Edm.DateTimeOffset` |
   */
  LastChecked: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Lawsuit` |
   * | Type | `Emr.CasePacer.Data.Entities.Lawsuit` |
   */
  Lawsuit?: Lawsuit | null;
}

export type LawsuitRecordRequestId =
  | number
  | { LawsuitRecordRequestId: number };

export interface EditableLawsuitRecordRequest
  extends Pick<
      LawsuitRecordRequest,
      "OrderNumber" | "OrderContents" | "IsComplete"
    >,
    Partial<Pick<LawsuitRecordRequest, "LawsuitId" | "LastChecked">> {}

export interface CasePacerUserSession {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Id` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  Id: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Token` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Token: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserAgent` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  UserAgent: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IpAddr` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  IpAddr: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expiration` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Expiration: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LoginTime` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  LoginTime: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LastActive` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  LastActive: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type CasePacerUserSessionId = number | { Id: number };

export interface EditableCasePacerUserSession
  extends Pick<
      CasePacerUserSession,
      "PartyId" | "Token" | "UserAgent" | "IpAddr" | "LoginTime" | "LastActive"
    >,
    Partial<Pick<CasePacerUserSession, "Expiration">> {}

export interface CasePacerUserIntegrationToken {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  SystemName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SystemId` |
   * | Type | `Edm.String` |
   */
  SystemId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TokenJson` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TokenJson: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubscriptionId` |
   * | Type | `Edm.String` |
   */
  SubscriptionId: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SubscriptionExpire` |
   * | Type | `Edm.DateTimeOffset` |
   */
  SubscriptionExpire: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type CasePacerUserIntegrationTokenId = number | { PartyId: number };

export interface EditableCasePacerUserIntegrationToken
  extends Pick<CasePacerUserIntegrationToken, "SystemName" | "TokenJson">,
    Partial<
      Pick<
        CasePacerUserIntegrationToken,
        "SystemId" | "SubscriptionId" | "SubscriptionExpire"
      >
    > {}

export interface EventHelp {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyQuickEntryComplete` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  PartyQuickEntryComplete: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type EventHelpId = number | { PartyId: number };

export interface EditableEventHelp
  extends Pick<EventHelp, "PartyQuickEntryComplete"> {}

export interface SecurityUserGroupAssign {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserGroupAssignId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  UserGroupAssignId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserGroupId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  UserGroupId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityUserGroup` |
   * | Type | `Emr.CasePacer.Data.Entities.SecurityUserGroup` |
   */
  SecurityUserGroup?: SecurityUserGroup | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
}

export type SecurityUserGroupAssignId = number | { UserGroupAssignId: number };

export interface EditableSecurityUserGroupAssign
  extends Pick<SecurityUserGroupAssign, "UserGroupId" | "PartyId"> {}

export interface SecurityUserGroup {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserGroupId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  UserGroupId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UserGroupName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  UserGroupName: string;
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityUserGroupAssigns` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityUserGroupAssign)` |
   */
  SecurityUserGroupAssigns?: Array<SecurityUserGroupAssign>;
}

export type SecurityUserGroupId = number | { UserGroupId: number };

export interface EditableSecurityUserGroup
  extends Pick<SecurityUserGroup, "UserGroupName" | "FirmId"> {}

export interface SecurityRuleSummary {
  /**
   * **Key Property**: This is a key property used to identify the entity.
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
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  PartyId: number;
  /**
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPathId` |
   * | Type | `Edm.Int32` |
   */
  SecurityPathId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  ReadAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  CreateAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  EditAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeleteAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  DeleteAccessLevelId: number | null;
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
   * | Name | `CasePacerUser` |
   * | Type | `Emr.CasePacer.Data.Entities.CasePacerUser` |
   */
  CasePacerUser?: CasePacerUser | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPath` |
   * | Type | `Emr.CasePacer.Data.Entities.SecurityPath` |
   */
  SecurityPath?: SecurityPath | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  ReadAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  CreateAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  EditAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeleteAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  DeleteAccessLevel?: AccessLevel | null;
}

export type SecurityRuleSummaryId = {
  FirmId: number;
  PartyId: number;
  SecurityPathId: number | null;
};

export interface EditableSecurityRuleSummary
  extends Pick<SecurityRuleSummary, "FirmId" | "PartyId">,
    Partial<
      Pick<
        SecurityRuleSummary,
        | "SecurityPathId"
        | "ReadAccessLevelId"
        | "CreateAccessLevelId"
        | "EditAccessLevelId"
        | "DeleteAccessLevelId"
      >
    > {}

export interface SecurityPath {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPathId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SecurityPathId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPathDisplayName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  SecurityPathDisplayName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityMaterializedPath` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  SecurityMaterializedPath: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `LawsuitMaterializedPath` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  LawsuitMaterializedPath: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ShowInDropdown` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  ShowInDropdown: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityRules` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRule)` |
   */
  SecurityRules?: Array<SecurityRule>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  SecurityRuleSummaries?: Array<SecurityRuleSummary>;
}

export type SecurityPathId = number | { SecurityPathId: number };

export interface EditableSecurityPath
  extends Pick<
    SecurityPath,
    | "SecurityPathDisplayName"
    | "SecurityMaterializedPath"
    | "LawsuitMaterializedPath"
    | "ShowInDropdown"
  > {}

export interface SecurityRule {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityRuleId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  SecurityRuleId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPathId` |
   * | Type | `Edm.Int32` |
   */
  SecurityPathId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RuleType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  RuleType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RuleObjectId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  RuleObjectId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  ReadAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  CreateAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  EditAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeleteAccessLevelId` |
   * | Type | `Edm.Int32` |
   */
  DeleteAccessLevelId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  CreateAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeleteAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  DeleteAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  EditAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadAccessLevel` |
   * | Type | `Emr.CasePacer.Data.Entities.AccessLevel` |
   */
  ReadAccessLevel?: AccessLevel | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `SecurityPath` |
   * | Type | `Emr.CasePacer.Data.Entities.SecurityPath` |
   */
  SecurityPath?: SecurityPath | null;
}

export type SecurityRuleId = number | { SecurityRuleId: number };

export interface EditableSecurityRule
  extends Pick<SecurityRule, "RuleType" | "RuleObjectId">,
    Partial<
      Pick<
        SecurityRule,
        | "SecurityPathId"
        | "ReadAccessLevelId"
        | "CreateAccessLevelId"
        | "EditAccessLevelId"
        | "DeleteAccessLevelId"
      >
    > {}

export interface AccessLevel {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccessLevelId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AccessLevelId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccessLevelName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AccessLevelName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateSecurityRules` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRule)` |
   */
  CreateSecurityRules?: Array<SecurityRule>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeleteSecurityRules` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRule)` |
   */
  DeleteSecurityRules?: Array<SecurityRule>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditSecurityRules` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRule)` |
   */
  EditSecurityRules?: Array<SecurityRule>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadSecurityRules` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRule)` |
   */
  ReadSecurityRules?: Array<SecurityRule>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReadSecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  ReadSecurityRuleSummaries?: Array<SecurityRuleSummary>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CreateSecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  CreateSecurityRuleSummaries?: Array<SecurityRuleSummary>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EditSecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  EditSecurityRuleSummaries?: Array<SecurityRuleSummary>;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DeleteSecurityRuleSummaries` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.SecurityRuleSummary)` |
   */
  DeleteSecurityRuleSummaries?: Array<SecurityRuleSummary>;
}

export type AccessLevelId = number | { AccessLevelId: number };

export interface EditableAccessLevel
  extends Pick<AccessLevel, "AccessLevelName"> {}

export interface AdditionalEmailSender {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AdditionalEmailSenderId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  AdditionalEmailSenderId: number;
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
   * | Name | `EmailDescr` |
   * | Type | `Edm.String` |
   */
  EmailDescr: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Active` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Active: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type AdditionalEmailSenderId =
  | number
  | { AdditionalEmailSenderId: number };

export interface EditableAdditionalEmailSender
  extends Pick<AdditionalEmailSender, "FirmId" | "Email" | "Active">,
    Partial<Pick<AdditionalEmailSender, "EmailDescr">> {}

export interface ExternalImportKey {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExternalImportKeyId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ExternalImportKeyId: number;
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
   * | Name | `ExternalKey` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ExternalKey: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ExternalGroup` |
   * | Type | `Edm.String` |
   */
  ExternalGroup: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ObjectType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ObjectType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ObjectId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ObjectId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type ExternalImportKeyId = number | { ExternalImportKeyId: number };

export interface EditableExternalImportKey
  extends Pick<
      ExternalImportKey,
      "FirmId" | "ExternalKey" | "ObjectType" | "ObjectId"
    >,
    Partial<Pick<ExternalImportKey, "ExternalGroup">> {}

export interface FirmAbbr {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmAbbrId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  FirmAbbrId: number;
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
   * | Name | `FirmAbbrName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  FirmAbbrName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Active` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Active: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BranchLiveKey` |
   * | Type | `Edm.String` |
   */
  BranchLiveKey: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BranchLiveSecret` |
   * | Type | `Edm.String` |
   */
  BranchLiveSecret: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BranchTestKey` |
   * | Type | `Edm.String` |
   */
  BranchTestKey: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BranchTestSecret` |
   * | Type | `Edm.String` |
   */
  BranchTestSecret: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type FirmAbbrId = number | { FirmAbbrId: number };

export interface EditableFirmAbbr
  extends Pick<FirmAbbr, "FirmId" | "FirmAbbrName" | "Active">,
    Partial<
      Pick<
        FirmAbbr,
        | "BranchLiveKey"
        | "BranchLiveSecret"
        | "BranchTestKey"
        | "BranchTestSecret"
      >
    > {}

export interface IntangibleDamage {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamageId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  IntangibleDamageId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IntangibleDamageName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  IntangibleDamageName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Spousal` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  Spousal: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Sequence` |
   * | Type | `Edm.Int16` |
   * | Nullable | `false` |
   */
  Sequence: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type IntangibleDamageId = number | { IntangibleDamageId: number };

export interface EditableIntangibleDamage
  extends Pick<
      IntangibleDamage,
      "IntangibleDamageName" | "Spousal" | "Sequence"
    >,
    Partial<Pick<IntangibleDamage, "FirmPartyId">> {}

export interface PaymentInfo {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
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
   * | Name | `IsCreditCard` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsCreditCard: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `InstitutionName` |
   * | Type | `Edm.String` |
   */
  InstitutionName: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountNum` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  AccountNum: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AccountType` |
   * | Type | `Edm.String` |
   */
  AccountType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AbaRouting` |
   * | Type | `Edm.String` |
   */
  AbaRouting: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Expiration` |
   * | Type | `Edm.DateTimeOffset` |
   */
  Expiration: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NameOnAccount` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  NameOnAccount: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillStreet` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BillStreet: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillCity` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BillCity: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillState` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BillState: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `BillZip` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  BillZip: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `CVV` |
   * | Type | `Edm.String` |
   */
  CVV: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type PaymentInfoId = number | { FirmId: number };

export interface EditablePaymentInfo
  extends Pick<
      PaymentInfo,
      | "IsCreditCard"
      | "AccountNum"
      | "NameOnAccount"
      | "BillStreet"
      | "BillCity"
      | "BillState"
      | "BillZip"
    >,
    Partial<
      Pick<
        PaymentInfo,
        "InstitutionName" | "AccountType" | "AbaRouting" | "Expiration" | "CVV"
      >
    > {}

export interface QuickBooksBankAccount {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBAccountId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  QBAccountId: number;
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
   * | Name | `QBListID` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  QBListID: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  QBName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type QuickBooksBankAccountId = number | { QBAccountId: number };

export interface EditableQuickBooksBankAccount
  extends Pick<QuickBooksBankAccount, "FirmId" | "QBListID" | "QBName"> {}

export interface QuickBooksExpenseAccount {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBAccountId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  QBAccountId: number;
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
   * | Name | `QBListID` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  QBListID: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  QBName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type QuickBooksExpenseAccountId = number | { QBAccountId: number };

export interface EditableQuickBooksExpenseAccount
  extends Pick<QuickBooksExpenseAccount, "FirmId" | "QBListID" | "QBName"> {}

export interface QuickBooksLog {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QBLogId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  QBLogId: number;
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
   * | Name | `EntryDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  EntryDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EntryType` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  EntryType: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityDescription` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  ActivityDescription: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedEntityType` |
   * | Type | `Edm.String` |
   */
  RelatedEntityType: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `RelatedId` |
   * | Type | `Edm.Int32` |
   */
  RelatedId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type QuickBooksLogId = number | { QBLogId: number };

export interface EditableQuickBooksLog
  extends Pick<
      QuickBooksLog,
      "FirmId" | "EntryDate" | "EntryType" | "ActivityDescription"
    >,
    Partial<Pick<QuickBooksLog, "RelatedEntityType" | "RelatedId">> {}

export interface QuickBooksSetting {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `QuickBooksSettingsId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  QuickBooksSettingsId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Username` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Username: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Password` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Password: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultBankAccount` |
   * | Type | `Edm.String` |
   */
  DefaultBankAccount: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DefaultExpenseAccount` |
   * | Type | `Edm.String` |
   */
  DefaultExpenseAccount: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsEnabled` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsEnabled: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `UpdateListsFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  UpdateListsFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type QuickBooksSettingId = number | { QuickBooksSettingsId: number };

export interface EditableQuickBooksSetting
  extends Pick<
      QuickBooksSetting,
      "Username" | "Password" | "IsEnabled" | "UpdateListsFlag"
    >,
    Partial<
      Pick<
        QuickBooksSetting,
        "FirmPartyId" | "DefaultBankAccount" | "DefaultExpenseAccount"
      >
    > {}

export interface ReportFirm {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReportFirmId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ReportFirmId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReportId` |
   * | Type | `Edm.Int32` |
   */
  ReportId: number | null;
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
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Report` |
   * | Type | `Emr.CasePacer.Data.Entities.Report` |
   */
  Report?: Report | null;
}

export type ReportFirmId = number | { ReportFirmId: number };

export interface EditableReportFirm
  extends Pick<ReportFirm, "FirmId">,
    Partial<Pick<ReportFirm, "ReportId">> {}

export interface Report {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReportId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ReportId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Name` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Name: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Description` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  Description: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `URL` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  URL: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AllFirmFlag` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AllFirmFlag: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ReportFirms` |
   * | Type | `Collection(Emr.CasePacer.Data.Entities.ReportFirm)` |
   */
  ReportFirms?: Array<ReportFirm>;
}

export type ReportId = number | { ReportId: number };

export interface EditableReport
  extends Pick<Report, "Name" | "Description" | "URL" | "AllFirmFlag"> {}

export interface TrialItem {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialItemId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  TrialItemId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `FirmPartyId` |
   * | Type | `Edm.Int32` |
   */
  FirmPartyId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialItemName` |
   * | Type | `Edm.String` |
   * | Nullable | `false` |
   */
  TrialItemName: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `TrialItemDesc` |
   * | Type | `Edm.String` |
   */
  TrialItemDesc: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Sequence` |
   * | Type | `Edm.Int16` |
   * | Nullable | `false` |
   */
  Sequence: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `AutoInclude` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  AutoInclude: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type TrialItemId = number | { TrialItemId: number };

export interface EditableTrialItem
  extends Pick<TrialItem, "TrialItemName" | "Sequence" | "AutoInclude">,
    Partial<Pick<TrialItem, "FirmPartyId" | "TrialItemDesc">> {}

export interface AuthorizedEmailSender {
  /**
   * **Key Property**: This is a key property used to identify the entity.
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
   * | Name | `PartyId` |
   * | Type | `Edm.Int32` |
   */
  PartyId: number | null;
  /**
   * **Key Property**: This is a key property used to identify the entity.
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
   * **Key Property**: This is a key property used to identify the entity.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `IsAdmin` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  IsAdmin: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `Firm` |
   * | Type | `Emr.CasePacer.Data.Entities.Firm` |
   */
  Firm?: Firm | null;
}

export type AuthorizedEmailSenderId = {
  FirmId: number;
  Email: string;
  IsAdmin: boolean;
};

export interface EditableAuthorizedEmailSender
  extends Pick<AuthorizedEmailSender, "FirmId" | "Email" | "IsAdmin">,
    Partial<Pick<AuthorizedEmailSender, "PartyId">> {}

export interface ActivityHoursLog {
  /**
   * **Key Property**: This is a key property used to identify the entity.<br/>**Managed**: This property is managed on the server side and cannot be edited.
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityHoursLogId` |
   * | Type | `Edm.Int32` |
   * | Nullable | `false` |
   */
  ActivityHoursLogId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLogId` |
   * | Type | `Edm.Int32` |
   */
  ActivityLogId: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   * | Nullable | `false` |
   */
  StartDate: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `StartTime` |
   * | Type | `Edm.Duration` |
   * | Nullable | `false` |
   */
  StartTime: string;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  EndDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndTime` |
   * | Type | `Edm.Duration` |
   */
  EndTime: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `DurationinMinutes` |
   * | Type | `Edm.Int32` |
   */
  DurationinMinutes: number | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `ActivityLog` |
   * | Type | `Emr.CasePacer.Data.Entities.ActivityLog` |
   */
  ActivityLog?: ActivityLog | null;
}

export type ActivityHoursLogId = number | { ActivityHoursLogId: number };

export interface EditableActivityHoursLog
  extends Pick<ActivityHoursLog, "StartDate" | "StartTime">,
    Partial<
      Pick<
        ActivityHoursLog,
        "ActivityLogId" | "EndDate" | "EndTime" | "DurationinMinutes"
      >
    > {}

export interface SyncResults {
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
   * | Name | `StartDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  StartDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `EndDate` |
   * | Type | `Edm.DateTimeOffset` |
   */
  EndDate: string | null;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `MoreEntries` |
   * | Type | `Edm.Boolean` |
   * | Nullable | `false` |
   */
  MoreEntries: boolean;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `NextStartSyncId` |
   * | Type | `Edm.Int64` |
   * | Nullable | `false` |
   */
  NextStartSyncId: number;
  /**
   *
   * OData Attributes:
   * |Attribute Name | Attribute Value |
   * | --- | ---|
   * | Name | `PartyIds` |
   * | Type | `Collection(Edm.Int32)` |
   * | Nullable | `false` |
   */
  PartyIds: Array<number>;
}

export interface EditableSyncResults
  extends Pick<SyncResults, "MoreEntries" | "NextStartSyncId" | "PartyIds">,
    Partial<Pick<SyncResults, "Description" | "StartDate" | "EndDate">> {}
