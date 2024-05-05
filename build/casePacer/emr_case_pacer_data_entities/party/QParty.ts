import {
  QueryObject,
  QNumberPath,
  QBooleanPath,
  QStringPath,
  QEntityPath,
  QEntityCollectionPath,
  QId,
  QNumberParam,
  QFunction,
  OperationReturnType,
  ReturnTypes,
  QComplexParam,
} from "@odata2ts/odata-query-objects";
import { QFirm } from "../firm/QFirm";
import { QDocumentTemplate } from "../document_template/QDocumentTemplate";
import { QPartyType } from "../party_type/QPartyType";
import { QRecordFile } from "../record_file/QRecordFile";
import { QADR } from "../adr/QADR";
import { QAnswerEnlargement } from "../answer_enlargement/QAnswerEnlargement";
import { QAppointment } from "../appointment/QAppointment";
import { QAppointmentParty } from "../appointment_party/QAppointmentParty";
import { QCalendarUser } from "../calendar_user/QCalendarUser";
import { QComplaint } from "../complaint/QComplaint";
import { QContactInfo } from "../contact_info/QContactInfo";
import { QDeposition } from "../deposition/QDeposition";
import { QDiscovery } from "../discovery/QDiscovery";
import { QDocument } from "../document/QDocument";
import { QEconomicLoss } from "../economic_loss/QEconomicLoss";
import { QExpense } from "../expense/QExpense";
import { QHearing } from "../hearing/QHearing";
import { QLawsuitParty } from "../lawsuit_party/QLawsuitParty";
import { QLienSubrogation } from "../lien_subrogation/QLienSubrogation";
import { QLitigation } from "../litigation/QLitigation";
import { QMedicalProvider } from "../medical_provider/QMedicalProvider";
import { QPartyAddress } from "../party_address/QPartyAddress";
import { QRecord } from "../record/QRecord";
import { QSettlement } from "../settlement/QSettlement";
import { QSettlementDocument } from "../settlement_document/QSettlementDocument";
import { QWitnessExhibitDocumentParty } from "../witness_exhibit_document_party/QWitnessExhibitDocumentParty";
import { QCalendarEntry } from "../calendar_entry/QCalendarEntry";
import { QCalendarEntryRecur } from "../calendar_entry_recur/QCalendarEntryRecur";
import { QPartySummary } from "../party_summary/QPartySummary";
import { PartyId, Party_SyncParams, Party_ListParams } from "./Party";
import { QSyncResults } from "../../kpm_web_api_controllers_rest/sync_results/QSyncResults";

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
