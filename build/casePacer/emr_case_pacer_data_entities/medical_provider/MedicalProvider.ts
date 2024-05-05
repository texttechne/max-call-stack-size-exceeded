import { Lawsuit } from "../lawsuit/Lawsuit";
import { Party } from "../party/Party";
import { SettlementMedicalProvider } from "../settlement_medical_provider/SettlementMedicalProvider";
import { Treatment } from "../treatment/Treatment";
import { TreatmentNote } from "../treatment_note/TreatmentNote";

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
