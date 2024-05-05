import { Party } from "../party/Party";
import { LawsuitPartyType } from "../lawsuit_party_type/LawsuitPartyType";
import { Lawsuit } from "../lawsuit/Lawsuit";
import { Appointment } from "../appointment/Appointment";
import { DepositionLitigationAssn } from "../deposition_litigation_assn/DepositionLitigationAssn";
import { CalendarEntry } from "../calendar_entry/CalendarEntry";
import { CalendarEntryRecur } from "../calendar_entry_recur/CalendarEntryRecur";

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
