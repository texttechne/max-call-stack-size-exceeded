import { Firm } from "../firm/Firm";
import { DocumentTemplate } from "../document_template/DocumentTemplate";
import { PartyType } from "../party_type/PartyType";
import { RecordFile } from "../record_file/RecordFile";
import { ADR } from "../adr/ADR";
import { AnswerEnlargement } from "../answer_enlargement/AnswerEnlargement";
import { Appointment } from "../appointment/Appointment";
import { AppointmentParty } from "../appointment_party/AppointmentParty";
import { CalendarUser } from "../calendar_user/CalendarUser";
import { Complaint } from "../complaint/Complaint";
import { ContactInfo } from "../contact_info/ContactInfo";
import { Deposition } from "../deposition/Deposition";
import { Discovery } from "../discovery/Discovery";
import { Document } from "../document/Document";
import { EconomicLoss } from "../economic_loss/EconomicLoss";
import { Expense } from "../expense/Expense";
import { Hearing } from "../hearing/Hearing";
import { LawsuitParty } from "../lawsuit_party/LawsuitParty";
import { LienSubrogation } from "../lien_subrogation/LienSubrogation";
import { Litigation } from "../litigation/Litigation";
import { MedicalProvider } from "../medical_provider/MedicalProvider";
import { PartyAddress } from "../party_address/PartyAddress";
import { Record } from "../record/Record";
import { Settlement } from "../settlement/Settlement";
import { SettlementDocument } from "../settlement_document/SettlementDocument";
import { WitnessExhibitDocumentParty } from "../witness_exhibit_document_party/WitnessExhibitDocumentParty";
import { CalendarEntry } from "../calendar_entry/CalendarEntry";
import { CalendarEntryRecur } from "../calendar_entry_recur/CalendarEntryRecur";
import { PartySummary } from "../party_summary/PartySummary";

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
