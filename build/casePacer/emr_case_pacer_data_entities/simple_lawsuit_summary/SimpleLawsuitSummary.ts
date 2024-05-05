import { Lawsuit } from "../lawsuit/Lawsuit";

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
