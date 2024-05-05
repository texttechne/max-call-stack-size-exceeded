import { ODataHttpClient } from "@odata2ts/http-client-api";
import {
  EntityTypeServiceV4,
  EntitySetServiceV4,
} from "@odata2ts/odata-service";
import { Company, EditableCompany } from "./Company";
import { QCompany, qCompany } from "./QCompany";
import { PartyService, PartyCollectionService } from "../party/PartyService";
import { FirmService } from "../firm/FirmService";
import { DocumentTemplateService } from "../document_template/DocumentTemplateService";
import { PartyTypeService } from "../party_type/PartyTypeService";
import { RecordFileService } from "../record_file/RecordFileService";
import { ADRId } from "../adr/ADR";
import { QADRId } from "../adr/QADR";
import { ADRService, ADRCollectionService } from "../adr/ADRService";
import { AnswerEnlargementId } from "../answer_enlargement/AnswerEnlargement";
import { QAnswerEnlargementId } from "../answer_enlargement/QAnswerEnlargement";
import {
  AnswerEnlargementService,
  AnswerEnlargementCollectionService,
} from "../answer_enlargement/AnswerEnlargementService";
import { AppointmentId } from "../appointment/Appointment";
import { QAppointmentId } from "../appointment/QAppointment";
import {
  AppointmentService,
  AppointmentCollectionService,
} from "../appointment/AppointmentService";
import { AppointmentPartyId } from "../appointment_party/AppointmentParty";
import { QAppointmentPartyId } from "../appointment_party/QAppointmentParty";
import {
  AppointmentPartyService,
  AppointmentPartyCollectionService,
} from "../appointment_party/AppointmentPartyService";
import { CalendarUserId } from "../calendar_user/CalendarUser";
import { QCalendarUserId } from "../calendar_user/QCalendarUser";
import {
  CalendarUserService,
  CalendarUserCollectionService,
} from "../calendar_user/CalendarUserService";
import { ComplaintId } from "../complaint/Complaint";
import { QComplaintId } from "../complaint/QComplaint";
import {
  ComplaintService,
  ComplaintCollectionService,
} from "../complaint/ComplaintService";
import { ContactInfoId } from "../contact_info/ContactInfo";
import { QContactInfoId } from "../contact_info/QContactInfo";
import {
  ContactInfoService,
  ContactInfoCollectionService,
} from "../contact_info/ContactInfoService";
import { DepositionId } from "../deposition/Deposition";
import { QDepositionId } from "../deposition/QDeposition";
import {
  DepositionService,
  DepositionCollectionService,
} from "../deposition/DepositionService";
import { DiscoveryId } from "../discovery/Discovery";
import { QDiscoveryId } from "../discovery/QDiscovery";
import {
  DiscoveryService,
  DiscoveryCollectionService,
} from "../discovery/DiscoveryService";
import { DocumentId } from "../document/Document";
import { QDocumentId } from "../document/QDocument";
import {
  DocumentService,
  DocumentCollectionService,
} from "../document/DocumentService";
import { EconomicLossId } from "../economic_loss/EconomicLoss";
import { QEconomicLossId } from "../economic_loss/QEconomicLoss";
import {
  EconomicLossService,
  EconomicLossCollectionService,
} from "../economic_loss/EconomicLossService";
import { ExpenseId } from "../expense/Expense";
import { QExpenseId } from "../expense/QExpense";
import {
  ExpenseService,
  ExpenseCollectionService,
} from "../expense/ExpenseService";
import { PartyId } from "../party/Party";
import { QPartyId } from "../party/QParty";
import { HearingId } from "../hearing/Hearing";
import { QHearingId } from "../hearing/QHearing";
import {
  HearingService,
  HearingCollectionService,
} from "../hearing/HearingService";
import { LawsuitPartyId } from "../lawsuit_party/LawsuitParty";
import { QLawsuitPartyId } from "../lawsuit_party/QLawsuitParty";
import {
  LawsuitPartyService,
  LawsuitPartyCollectionService,
} from "../lawsuit_party/LawsuitPartyService";
import { LienSubrogationId } from "../lien_subrogation/LienSubrogation";
import { QLienSubrogationId } from "../lien_subrogation/QLienSubrogation";
import {
  LienSubrogationService,
  LienSubrogationCollectionService,
} from "../lien_subrogation/LienSubrogationService";
import { LitigationId } from "../litigation/Litigation";
import { QLitigationId } from "../litigation/QLitigation";
import {
  LitigationService,
  LitigationCollectionService,
} from "../litigation/LitigationService";
import { MedicalProviderId } from "../medical_provider/MedicalProvider";
import { QMedicalProviderId } from "../medical_provider/QMedicalProvider";
import {
  MedicalProviderService,
  MedicalProviderCollectionService,
} from "../medical_provider/MedicalProviderService";
import { PartyAddressId } from "../party_address/PartyAddress";
import { QPartyAddressId } from "../party_address/QPartyAddress";
import {
  PartyAddressService,
  PartyAddressCollectionService,
} from "../party_address/PartyAddressService";
import { RecordId } from "../record/Record";
import { QRecordId } from "../record/QRecord";
import {
  RecordService,
  RecordCollectionService,
} from "../record/RecordService";
import { SettlementId } from "../settlement/Settlement";
import { QSettlementId } from "../settlement/QSettlement";
import {
  SettlementService,
  SettlementCollectionService,
} from "../settlement/SettlementService";
import { SettlementDocumentId } from "../settlement_document/SettlementDocument";
import { QSettlementDocumentId } from "../settlement_document/QSettlementDocument";
import {
  SettlementDocumentService,
  SettlementDocumentCollectionService,
} from "../settlement_document/SettlementDocumentService";
import { WitnessExhibitDocumentPartyId } from "../witness_exhibit_document_party/WitnessExhibitDocumentParty";
import { QWitnessExhibitDocumentPartyId } from "../witness_exhibit_document_party/QWitnessExhibitDocumentParty";
import {
  WitnessExhibitDocumentPartyService,
  WitnessExhibitDocumentPartyCollectionService,
} from "../witness_exhibit_document_party/WitnessExhibitDocumentPartyService";
import { CalendarEntryId } from "../calendar_entry/CalendarEntry";
import { QCalendarEntryId } from "../calendar_entry/QCalendarEntry";
import {
  CalendarEntryService,
  CalendarEntryCollectionService,
} from "../calendar_entry/CalendarEntryService";
import { CalendarEntryRecurId } from "../calendar_entry_recur/CalendarEntryRecur";
import { QCalendarEntryRecurId } from "../calendar_entry_recur/QCalendarEntryRecur";
import {
  CalendarEntryRecurService,
  CalendarEntryRecurCollectionService,
} from "../calendar_entry_recur/CalendarEntryRecurService";
import { PartySummaryService } from "../party_summary/PartySummaryService";
import { PropertyDamageId } from "../property_damage/PropertyDamage";
import { QPropertyDamageId } from "../property_damage/QPropertyDamage";
import {
  PropertyDamageService,
  PropertyDamageCollectionService,
} from "../property_damage/PropertyDamageService";

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
